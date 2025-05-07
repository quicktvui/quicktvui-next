import path from 'path'
import os from 'os'
import {
  epOutput,
  epPackage,
  getPackageManifest,
  projRoot,
} from '@quicktvui/build-utils'
import {
  arrayToRegExp,
  getTypeSymbol,
  hyphenate,
  isCommonType,
  isUnionType,
  main,
} from '../helper'

import type { TaskFunction } from 'gulp'
import type {
  ReAttribute,
  ReComponentName,
  ReDocUrl,
  ReWebTypesSource,
  ReWebTypesType,
} from '../helper'

const typeMap = {
  vue: ['Component', 'VNode', 'CSSProperties', 'StyleValue'],
}

const basicComponentList = ['div', 'img', 'ul', 'li', 'p']

/**
 这个正则表达式 /^\([^\)]*\)/g 会匹配从字符串开始处的一个左括号 (，
 然后跟着任何数量的不是右括号的字符，最后是一个右括号 )。
 */
const removeTag = (str: string) => {
  return str.replaceAll(/\^\([^)]*\)/g, '').trim()
}

/**
 /[ ]+/g 会匹配输入字符串中所有的一个或多个连续的空格
 */
const reComponentName: ReComponentName = (title) => {
  if (basicComponentList.includes(title)) {
    return `${hyphenate(removeTag(title)).replace(/[ ]+/g, '-')}`
  } else {
    return `qt-${hyphenate(removeTag(title)).replace(/[ ]+/g, '-')}`
  }
}

/**
 这个正则表达式 /\s+/g 用于匹配一个或多个连续的空白字符。我们可以分解这个正则表达式来理解其各个部分：
 /\s+/: 这是正则表达式的主体部分。
 \s: 这是一个特殊字符类，代表任何空白字符。这包括空格、制表符（tab）、换行符（newline）、回车符（carriage return）、换页符（form feed）等。
 +: 这是一个量词，表示前面的字符类（在这个例子中是 \s）可以出现一次或多次。
 g: 这是一个全局（global）标志，意味着这个正则表达式会匹配字符串中的所有可能的子串，而不仅仅是第一个。
 因此，/\s+/g 会匹配输入字符串中所有的一个或多个连续的空白字符。
 */
const reDocUrl: ReDocUrl = (fileName, header) => {
  const docs = 'https://quicktvui.com/zh-CN/component/'
  const _header = header
    ? removeTag(header).replaceAll(/\s+/g, '-').toLowerCase()
    : ''
  return `${docs}${fileName}.html${_header ? '#' : ''}${_header}`
}

/**
 *
 /-/g
 用于匹配字符串中所有的短横线字符（-）并将它们替换（如果你使用 .replace() 方法的话）或进行其他操作。

 /^\w|\s+\w/g
 这个正则表达式 /^\w|\s+\w/g 稍微有些复杂，因为它试图匹配字符串的开头处的单词字符（\w），或者是任意数量空白字符后跟随的单词字符。但是，由于正则表达式的结构，它可能不会按预期工作。
 让我们分解这个正则表达式：
 /.../g: 正则表达式的字面量表示法，并使用全局（g）标志来查找所有匹配项。
 ^: 匹配字符串的开始位置。
 \w: 匹配任何单词字符（等价于 [a-zA-Z0-9_]）。
 |: 正则表达式中的或（or）操作符，它会尝试匹配前面的或后面的部分。
 \s+: 匹配一个或多个空白字符（包括空格、制表符、换行符等）。
 问题在于，由于 | 操作符的存在，正则表达式会尝试匹配两种可能的模式：
 要么是字符串开头（^）紧接着一个单词字符（\w）。
 要么是一个或多个空白字符（\s+）后紧接着一个单词字符（\w）。
 但是，由于 ^ 是字符串开头的锚点，它只能出现在正则表达式的开始位置，因此 ^\w 只会匹配字符串的第一个字符（如果它是一个单词字符的话）。而 \s+\w 会匹配任何位置的一个或多个空白字符后紧跟的单词字符。

 */
const reWebTypesSource: ReWebTypesSource = (title) => {
  if (basicComponentList.includes(title)) {
    const symbol = `${removeTag(title)
      .replaceAll(/-/g, ' ')
      .replaceAll(/^\w|\s+\w/g, (item) => {
        return item.trim().toUpperCase()
      })}`

    return { symbol }
  } else {
    const symbol = `Qt${removeTag(title)
      .replaceAll(/-/g, ' ')
      .replaceAll(/^\w|\s+\w/g, (item) => {
        return item.trim().toUpperCase()
      })}`

    return { symbol }
  }
}

const reAttribute: ReAttribute = (value, key) => {
  const str = removeTag(value)
    .replaceAll(/<del>.*<\/del>/g, '')
    .replace(/^\*\*(.*)\*\*$/, '$1')
    .replace(/^`(.*)`$/, '$1')
    .replace(/^~~(.*)~~$/, '')

  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Name' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Name' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Name') {
    return str
      .replaceAll(/\s*[\\*]\s*/g, '')
      .replaceAll(/\s*<.*>\s*/g, '')
      .replaceAll(/\s*\(.*\)\s*/g, '')
  } else if (key === 'Type') {
    return rewriteType(str)
      .replaceAll(/\bfunction(\(.*\))?(:\s*\w+)?\b/gi, 'Function')
      .replaceAll(/\([^)]*\)(?!\s*=>)/g, '')
      .replaceAll(/(<[^>]*>|\{[^}]*}|\([^)]*\))/g, (item) => {
        return item.replaceAll(/(\/|\|)/g, '=_0!')
      })
      .replaceAll(/(\b\w+)\s*\|/g, '$1 /')
      .replaceAll(/\|\s*(\b\w+)/g, '/ $1')
      .replaceAll(/=_0!/g, '|')
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replaceAll(/`/g, '').replaceAll(/\([^)]*\)(?!\s*=>)/g, '')
  } else if (key === 'Subtags') {
    return str
      ? `el-${str
          .replaceAll(/\s*\/\s*/g, '/el-')
          .replaceAll(/\B([A-Z])/g, '-$1')
          .replaceAll(/\s+/g, '-')
          .toLowerCase()}`
      : undefined
  } else {
    return str
  }
}

const reWebTypesType: ReWebTypesType = (type) => {
  const isPublicType = isCommonType(type)
  const isNumber = /^\d+$/.test(type)
  const symbol = getTypeSymbol(type)
  const isUnion = isUnionType(symbol)
  const module = findModule(symbol)

  return isPublicType || isNumber || !symbol || isUnion
    ? type
    : { name: type, source: { symbol, module } }
}

const findModule = (type: string): string | undefined => {
  let result: string | undefined = undefined

  for (const key in typeMap) {
    const regExp = arrayToRegExp(typeMap[key as keyof typeof typeMap])
    const inModule = regExp.test(getTypeSymbol(type))

    if (inModule) {
      result = key
      break
    }
  }

  return result
}

const rewriteType = (str: string): string => {
  if (/\^\[([^\]]*)\](`[^`]*`)?/.test(str)) {
    return str
      .replaceAll(/\^\[([^\]]*)\](`[^`]*`)?/g, (_, type, details) => {
        return details ? details.replace(/^`(.*)`$/, '$1') : type
      })
      .replaceAll(/\[[^\]]*\]\([^)]*\)/g, '')
  } else if (/<.*>/.test(str)) {
    const list = str.matchAll(/<(\w+)Type\s([^>]*)>/g)

    return Array.from(list, (item) => {
      const type = item ? item[1] : ''
      const params = item ? item[2] : ''

      switch (type) {
        case 'External':
          return ''
        case 'Enum':
          return transformEnum(params)
        case 'Function':
          return transformFunction(params)
        default:
          return type.toLowerCase()
      }
    })
      .filter((item) => item)
      .join('|')
  } else {
    return str
  }
}

const transformEnum = (str: string) => {
  const result = str.match(/:values="\[([^\]]*)\]/)
  return result ? result[1].replaceAll(/,\s*/g, ' | ') : 'string'
}

const transformFunction = (str: string) => {
  const paramsStr = str.match(/:params="\[(.*)\]"/)
  const returnsStr = str.match(/:returns="(.*)"/)
  let params = ''
  let returns = ''

  if (paramsStr) {
    const list = paramsStr[0].matchAll(/\['([^\]]*)'\]/g)

    params = Array.from(list, (item) => {
      return item[1].replaceAll(/',\s*'/g, ': ')
    }).join(', ')
  }

  returns = returnsStr ? returnsStr[1] : 'void'

  return `(${params}) => ${returns}`
}

export const buildHelper: TaskFunction = (done) => {
  const { name, version } = getPackageManifest(epPackage)

  const tagVer = process.env.TAG_VERSION
  const _version = tagVer
    ? tagVer.startsWith('v')
      ? tagVer.slice(1)
      : tagVer
    : version!
  let entry = `${path.resolve(
    projRoot,
    'docs/zh-CN/component'
  )}/!(datetime-picker|message-box|message).md`
  if (os.platform() === 'win32') {
    entry = entry.replace(/\\/g, '/')
  }

  main({
    name: name!,
    version: _version,
    entry,
    outDir: epOutput,
    reComponentName,
    reDocUrl,
    reWebTypesSource,
    reAttribute,
    reWebTypesType,
    props: 'Attributes',
    propsOptions: 'Accepted Values',
    tableRegExp:
      /#+\s+(.*\s*Attributes|.*\s*Events|.*\s*Slots|.*\s*Directives)\s*\n+(\|?.+\|.+)\n\|?\s*:?-+:?\s*\|.+((\n\|?.+\|.+)+)/g,
  })

  done()
}
