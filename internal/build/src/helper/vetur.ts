import {
  checkArray,
  filterVeturOptions,
  getComponentsName,
  getDocUrl,
  getVeturDescription,
  splitString,
} from './utils'
import type { NormalizeData, Options, Props, Tags } from './type'

export function vetur(
  options: Options,
  list: NormalizeData[]
): {
  tags: Tags
  attributes: Props
} {
  const {
    propsName,
    propsType,
    propsDescription,
    propsOptions,
    propsDefault,
    separator,
    eventsName,
    eventsDescription,
    slotsSubtags,
  } = options
  const tagsList = {} as Tags
  const propsList = {} as Props

  for (const {
    title,
    description,
    path,
    fileName,
    props,
    events,
    slots,
    children,
  } of list) {
    const name = getComponentsName(options, title, fileName, path)
    const _props = props ? props.content : []
    const _events = events ? events.content : []
    const _slots = slots ? slots.content : []
    const tagsProps: string[] = []
    let subtags: string[] = []

    if (children && children.length) {
      const { tags, attributes } = vetur(options, children)
      Object.assign(tagsList, tags)
      Object.assign(propsList, attributes)
    }
    // Abandon the current data when missing the name or content
    if (!name || (!props && !events && !slots)) continue

    _props.forEach((item) => {
      const _item = item[propsName]

      if (_item) {
        const docUrl = getDocUrl(options, fileName, props?.title, path)
        const _name = `${name}/${_item}`
        const _type = (item[propsType] || '').replaceAll(separator, '|')
        const _options = item[propsOptions]
        const _optionsList = splitString(options, _options)
        const _typeOptionsList = filterVeturOptions({ separator: '|' }, _type)
        const _description = getVeturDescription(
          options,
          item[propsDescription],
          item[propsDefault],
          docUrl
        )

        tagsProps.push(_item)
        propsList[_name] = {
          type: _type || undefined,
          options: checkArray(_optionsList || _typeOptionsList),
          description: _description,
        }
      }
    })

    _events.forEach((item) => {
      const _item = item[eventsName]

      if (_item) {
        const docUrl = getDocUrl(options, fileName, events?.title, path)
        const _name = `${name}/${_item}`
        const _description = getVeturDescription(
          options,
          item[eventsDescription],
          undefined,
          docUrl
        )

        tagsProps.push(_item)
        propsList[_name] = {
          type: 'event',
          description: _description,
        }
      }
    })

    _slots.forEach((item) => {
      const _subtags = item[slotsSubtags]
      const _subtagsList = _subtags ? splitString(options, _subtags) : undefined

      if (_subtagsList) {
        subtags = subtags.concat(_subtagsList)
      }
    })

    const docUrl = getDocUrl(options, fileName, title, path)
    const _description = getVeturDescription(
      options,
      description,
      undefined,
      docUrl
    )

    tagsList[name] = {
      attributes: checkArray(tagsProps),
      subtags: checkArray(subtags),
      description: _description,
    }
  }

  return { tags: tagsList, attributes: propsList }
}
