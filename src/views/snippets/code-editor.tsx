import { CenterSpin } from 'components/spin'
import { useInjector } from 'hooks/use-deps-injection'
import type { editor } from 'monaco-editor'
import { UIStore } from 'stores/ui'
import { PropType } from 'vue'
export const CodeEditorForSnippet = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    onChange: {
      type: Function as PropType<(str: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const editorRef = ref()

    let memoInitialValue: string = toRaw(props.value)
    let editor: editor.IStandaloneCodeEditor
    watch(
      () => props.value,
      (n) => {
        if (!memoInitialValue && n) {
          memoInitialValue = n
        }
        if (editor && n != editor.getValue()) {
          editor.setValue(n)
        }
      },
    )

    const { isDark } = useInjector(UIStore)
    watch(
      () => isDark.value,
      (isDark) => {
        editor.updateOptions({
          theme: isDark ? 'vs-dark' : 'vs',
        })
      },
    )

    onMounted(() => {
      import('monaco-editor').then((mo) => {
        editor = mo.editor.create(editorRef.value, {
          value: props.value,
          language: 'json',
          theme: isDark.value ? 'vs-dark' : 'vs',
          automaticLayout: true,
          minimap: { enabled: false },
        })
        ;['onKeyDown', 'onDidPaste', 'onDidBlurEditorText'].forEach(
          (eventName) => {
            // @ts-ignore
            editor[eventName](() => {
              const value = editor.getValue()
              props.onChange(value)
            })
          },
        )
      })
    })
    return () => (
      <>
        <div ref={editorRef} class={'h-full w-full relative'}>
          <CenterSpin description="Monaco 体积较大耐心等待加载完成..." />
        </div>
      </>
    )
  },
})
