import type { NoteModel } from 'models/note'
import type { PostModel } from 'models/post'
import {
  getUniData,
  toCid,
  useAccountState,
  useConnectModal,
} from 'use-crossbell-xlog'
import type { CrossBellInstance } from 'use-crossbell-xlog'
import { RESTManager } from 'utils'

export const instanceRef = ref<CrossBellInstance>()

export class CrossBellConnector {
  static SITE_ID = ''
  static setSiteId(siteId: string) {
    this.SITE_ID = siteId
  }
  static getInstance(): CrossBellInstance | undefined {
    if (!('ethereum' in window)) return
    return instanceRef.value
  }

  static createOrUpdate(data: NoteModel | PostModel) {
    // 跳过隐藏的笔记
    const passedFields = ['hide', 'password', 'secret']
    for (const field of passedFields) {
      if (field in data && data[field]) {
        message.info(`跳过隐藏笔记，命中字段：${field}`)
        return Promise.resolve()
      }
    }

    return new Promise((resolve) => {
      if (!this.SITE_ID) {
        resolve(null)
        return
      }
      const SITE_ID = this.SITE_ID
      const instance = this.getInstance()
      if (!instance) {
        resolve(null)
        return
      }
      const { state } = instance
      const { account } = state

      message.loading('准备发布到 xLog，等待钱包响应...')
      let postCallOnce = false
      let pageId = data.meta?.xLog?.pageId

      const post = async () => {
        if (postCallOnce) return Promise.resolve()
        const { text, title } = data
        const slug = 'slug' in data ? data.slug : `note-${data.nid}`
        postCallOnce = true
        message.loading('正在发布到 xLog...')

        if (!pageId) pageId = await this.fetchPageId(data)
        return instance.createOrUpdatePage({
          siteId: SITE_ID,
          content: text,
          title,
          isPost: true,
          slug,
          published: true,
          applications: ['xlog'],
          externalUrl: `https://${SITE_ID}.xlog.app/posts/${slug}`,
          pageId,
          tags: 'tags' in data ? data.tags.toString() : undefined,
          publishedAt: data.created,
        })
      }
      const postHandler = () =>
        post()
          .then(() => {
            const unidata = getUniData()

            message.success('xLog 发布成功')
            ;(pageId ? Promise.resolve(pageId) : this.fetchPageId(data)).then(
              (pageId) => {
                if (!pageId) {
                  message.error('无法获取 xLog pageId 任务终止')
                  return
                }

                // update meta for pageId
                this.updateModel(data, {
                  pageId,
                })

                // update meta for ipfs
                unidata.notes
                  .get({
                    source: 'Crossbell Note',
                    identity: SITE_ID,
                    platform: 'Crossbell',
                    filter: {
                      id: pageId,
                    },
                  })
                  .then((note$) => {
                    if (!note$) return
                    const { list } = note$
                    const note = list[0]
                    if (!note) return
                    const { metadata, related_urls } = note
                    const minifyMetadata = {
                      ...metadata,
                    }

                    delete minifyMetadata.raw

                    console.debug(note)
                    this.updateModel(data, {
                      pageId,
                      related_urls,
                      metadata: minifyMetadata,
                      // @copy from xlog
                      // https://github.com/Innei/xLog/blob/33a3f2306467fd067e85dbd75a7a08ab584fd3f7/src/components/site/PostMeta.tsx#L25
                      cid: toCid(related_urls?.[0] || ''),
                    })
                  })
              },
            )
            resolve(null)
          })
          .catch(() => {
            message.error('xLog 发布失败')
            resolve(null)
          })
          .finally(() => {
            dispose1()
            dispose2()
          })
      let isShow = false
      const dispose1 = useAccountState.subscribe((state) => {
        if (state.wallet?.address && isShow) {
          postHandler()
        }
      })

      const dispose2 = useConnectModal.subscribe((state) => {
        if (state.isActive) isShow = true
        if (
          !state.isActive &&
          isShow &&
          !useAccountState.getState().wallet?.address
        ) {
          dispose1()
          dispose2()

          resolve(null)
        }
      })

      if (!account || !account.address) {
        instance.show()
      } else {
        postHandler()
      }
    })
  }

  private static isNoteModel(data: NoteModel | PostModel): data is NoteModel {
    return 'nid' in data
  }

  private static async fetchPageId(data: NoteModel | PostModel) {
    if (!this.SITE_ID) return
    const { characterId, noteId } = await RESTManager.api.fn.xlog.get_page_id
      .get<{
        noteId: string
        characterId: string
      }>({
        params: {
          handle: this.SITE_ID,
          slug: this.isNoteModel(data) ? `note-${data.nid}` : data.slug,
        },
      })
      .catch(() => {
        return {
          noteId: '',
          characterId: '',
        }
      })

    if (!characterId || !noteId) return
    return `${characterId}-${noteId}`
  }
  private static async updateModel(
    data: NoteModel | PostModel,

    meta: {
      pageId?: string
      cid?: string
      related_urls?: string[]
      metadata?: any
    },
  ) {
    const id = data.id
    const { cid, pageId, related_urls, metadata } = meta

    // delete undefined value in meta object

    for (const key in meta) {
      if (meta[key] === undefined) {
        delete meta[key]
      }
    }

    const patchedData = {
      meta: {
        ...data.meta,
        xLog: {
          ...data.meta?.xLog,
          pageId,
          cid,
          related_urls,
          metadata,
        },
      },
    }
    if (this.isNoteModel(data)) {
      await RESTManager.api.notes(id).patch({
        data: patchedData,
      })
    } else {
      await RESTManager.api.posts(id).patch({
        data: patchedData,
      })
    }
  }
}
