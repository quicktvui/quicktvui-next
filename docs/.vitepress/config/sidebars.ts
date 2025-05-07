import { ensureLang } from '../utils/lang'
import guideLocale from '../i18n/pages/guide.json'
import sampleLocale from '../i18n/pages/sample.json'
import componentLocale from '../i18n/pages/component.json'
import cssLocale from '../i18n/pages/css.json'
import moduleLocale from '../i18n/pages/module.json'
import toolLocale from '../i18n/pages/tool.json'
import resourceLocale from '../i18n/pages/resource.json'
import sdkLocale from '../i18n/pages/sdk.json'

function getGuideSidebar() {
  return Object.fromEntries(
    Object.entries(guideLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang)),
    ])
  )
}

function getComponentsSideBar() {
  return Object.fromEntries(
    Object.entries(componentLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/component')),
    ])
  )
}

function getCssSideBar() {
  return Object.fromEntries(
    Object.entries(cssLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/css')),
    ])
  )
}

function getSampleSideBar() {
  return Object.fromEntries(
    Object.entries(sampleLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/sample')),
    ])
  )
}

function getModulesSideBar() {
  return Object.fromEntries(
    Object.entries(moduleLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/module')),
    ])
  )
}

function getToolsSideBar() {
  return Object.fromEntries(
    Object.entries(toolLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/tool')),
    ])
  )
}

function getResourceSideBar() {
  return Object.fromEntries(
    Object.entries(resourceLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/resource')),
    ])
  )
}

function getSdkSideBar() {
  return Object.fromEntries(
    Object.entries(sdkLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, '/sdk')),
    ])
  )
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/guide/': getGuideSidebar(),
    '/sample/': getSampleSideBar(),
    '/component/': getComponentsSideBar(),
    '/css/': getCssSideBar(),
    '/module/': getModulesSideBar(),
    '/sdk/': getSdkSideBar(),
    '/tool/': getToolsSideBar(),
    '/resource/': getResourceSideBar(),
  }
}

type Item = {
  text: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, lang, prefix)),
    }
  }
  return {
    ...item,
    link: `${ensureLang(lang)}${prefix}${item.link}`,
  }
}

export const sidebars = getSidebars()
