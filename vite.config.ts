import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
import Checker from 'vite-plugin-checker'
import wasm from 'vite-plugin-wasm'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import PKG from './package.json'

import WindiCSS from 'vite-plugin-windicss'

// dns.setDefaultResultOrder('verbatim')
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_PUBLIC_URL } = env
  const isDev = mode === 'development'

  return defineConfig({
    plugins: [
      // VueDevTools(),
      wasm(),
      WindiCSS(),
      vue({
        reactivityTransform: true,
      }),
      vueJsx(),
      tsconfigPaths(),
      visualizer({ open: process.env.CI ? false : true }),

      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue\??/, // .vue
        ],
        dts: './src/auto-import.d.ts',
        imports: ['vue', 'pinia', '@vueuse/core'],
      }),
      Checker({
        enableBuild: true,
      }),
      htmlPlugin(env),
      // nodePolyfills({
      //   // To exclude specific polyfills, add them to this list.
      //   exclude: [
      //     'fs', // Excludes the polyfill for `fs` and `node:fs`.
      //   ],
      //   // Whether to polyfill `node:` protocol imports.
      //   protocolImports: true,
      // }),
    ],

    resolve: {
      alias: {
        path: 'path-browserify',
        os: 'os-browserify',
        'node-fetch': 'isomorphic-fetch',
        buffer: 'buffer',
      },
    },

    build: {
      chunkSizeWarningLimit: 2500,
      target: 'esnext',

      // sourcemap: true,
      rollupOptions: {
        output: {
          chunkFileNames: `js/[name]-[hash].js`,
          entryFileNames: `js/[name]-[hash].js`,
        },
      },
    },
    optimizeDeps: {
      exclude: [
        '@huacnlee/autocorrect',
        '@dqbd/tiktoken',
        '@codemirror/language-data',
      ],
    },

    define: {
      __DEV__: isDev,
    },
    base: !isDev ? VITE_APP_PUBLIC_URL || '' : '',

    server: {
      // https: true,
      port: 9528,
    },
    esbuild: {
      jsxFactory: '__h',
      jsxInject: 'import {h as __h,Fragment as __Fragment} from "vue"',
      jsxFragment: '__Fragment',
    },
  })
}

const htmlPlugin: (env: any) => PluginOption = (env) => {
  return {
    name: 'html-transform',
    enforce: 'post',
    transformIndexHtml(html) {
      return html
        .replace(
          '<!-- MX SPACE ADMIN DASHBOARD VERSION INJECT -->',
          `<script>window.version = '${PKG.version}';</script>`,
        )
        .replace(/@gh-pages/g, `@page_v${PKG.version}`)
        .replace(
          '<!-- ENV INJECT -->',
          `<script id="env_injection">window.injectData = {WEB_URL:'${
            env.VITE_APP_WEB_URL || ''
          }', GATEWAY: '${env.VITE_APP_GATEWAY || ''}',BASE_API: '${
            env.VITE_APP_BASE_API || ''
          }'}</script>`,
        )
    },
  }
}
