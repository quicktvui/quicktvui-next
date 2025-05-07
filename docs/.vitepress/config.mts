import consola from 'consola'
import { REPO_BRANCH, REPO_PATH } from './build/constants'
import { docsDirName } from './build/utils'
import { languages } from './utils/lang'
import { features, head, mdPlugin, nav, sidebars } from './config'
import type { UserConfig } from 'vitepress'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

export const config: UserConfig = {
  title: 'QuickTVUI',
  description: '专为智能电视打造的快应用UI框架，开发便捷、快速更新',
  lastUpdated: true,
  head,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,

    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    logo: '/images/quicktvui-logo.svg',
    logoSmall: '/images/quicktvui-logo-small.svg',
    sidebars,
    nav,
    agolia: {
      apiKey: '5ffde3f439f777858eb8ca29121be606',
      appId: 'T12XLJ2JU9',
      indexName: 'quicktvui'
    },
    features,
    langs: languages,
  },

  locales,

  markdown: {
    config: (md) => mdPlugin(md),
  },

  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  },
}

export default config
