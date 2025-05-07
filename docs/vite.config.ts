import path from 'path'
import Inspect from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {
  docPackage,
  epPackage,
  getPackageDependencies,
  projRoot,
} from './.vitepress/build/utils'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
  },
]
if (process.env.DOC_ENV !== 'production') {
  //TODO LIULIPENG
  // alias.push(
  //   {
  //     find: /^quicktvui(\/(es|lib))?$/,
  //     replacement: path.resolve(projRoot, 'packages/quicktvui/index.ts'),
  //   },
  //   {
  //     find: /^quicktvui\/(es|lib)\/(.*)$/,
  //     replacement: `${path.resolve(projRoot, 'packages')}/$2`,
  //   }
  // )
}

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const { dependencies: epDeps } = getPackageDependencies(epPackage)
  const { dependencies: docsDeps } = getPackageDependencies(docPackage)

  const optimizeDeps = [...new Set([...epDeps, ...docsDeps])].filter(
    (dep) =>
      !dep.startsWith('@types/') &&
      !['@quicktvui/metadata', 'quicktvui'].includes(dep)
  )

  optimizeDeps.push(
    ...(await glob(['dayjs/plugin/*.js'], {
      cwd: path.resolve(projRoot, 'node_modules'),
      onlyFiles: true,
    }))
  )

  return {
    // vite 配置
    define: {
      __DEV__: false,
      //   global: {
      //     Hippy: {
      //       bridge: {
      //         callNative: {},
      //         callNativeWithPromise: {},
      //         callNativeWithCallbackId: {},
      //       },
      //       device: {
      //         platform: { OS: {}, Localization: {} },
      //         screen: { scale: {} },
      //       },
      //       document: {},
      //       register: {},
      //     },
      //   },
    },
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [projRoot],
      },
    },
    build: {
      rollupOptions: {
        external: ['@extscreen/es3-vue'],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),
      UnoCSS(),
      MarkdownTransform(),
      Inspect(),
      mkcert(),
    ],
    optimizeDeps: {
      include: optimizeDeps,
    },
  }
})
