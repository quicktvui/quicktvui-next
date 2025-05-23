//
import { QTWaterfallSectionType } from './waterfall-types'
import type {
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
} from './waterfall-types'

export function generateSectionList(
  waterfall: QTWaterfall,
  sectionList: Array<QTWaterfallSection>
): Array<QTWaterfallItem> {
  const itemList: Array<QTWaterfallItem> = []
  if (sectionList && sectionList.length > 0) {
    for (const section of sectionList) {
      const item = generateSection(waterfall, section)
      itemList.push(item)
    }
  }
  return itemList
}

export function generateSection(
  waterfall: QTWaterfall,
  section: QTWaterfallSection
): QTWaterfallSection {
  let sectionHeight = 0
  if (
    section.itemList.length > 0 &&
    section.type == QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX
  ) {
    sectionHeight = layoutItem(section)
    section.style.height = sectionHeight
  }
  //plugin
  else if (
    section.type == QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_PLUGIN
  ) {
    if (
      section.titleStyle &&
      section.titleStyle.width &&
      section.titleStyle.height
    ) {
      section.pluginStyle = {
        width: section.style.width,
        height:
          (section.style?.height ?? 0) -
          (section.titleStyle.height ?? 0) -
          (section.titleStyle.marginBottom ?? 0),
      }
    } else {
      section.pluginStyle = section.style
    }
  }
  return section
}

function layoutItem(section: QTWaterfallSection): number {
  const itemList = section.itemList
  //---------------------------------------------------------
  const itemGap = section.style?.spacing ?? 0

  //---------------------------------------------------------
  const titleStyle = section.titleStyle
  const titleHeight = titleStyle?.height ?? 0
  // const titleMargin = titleStyle?.margin ?? 0
  const titleMarginTop = titleStyle?.marginTop ?? 0
  const titleMarginBottom = titleStyle?.marginBottom ?? 0
  //
  // const titlePadding = titleStyle?.padding ?? 0
  const titlePaddingTop = titleStyle?.paddingTop ?? 0
  const titlePaddingBottom = titleStyle?.paddingBottom ?? 0
  //---------------------------------------------------------
  let sectionHeight = section.style.height ?? 0
  const sectionWidth = section.style.width ?? 0
  //
  // const sectionDecoration = section.decoration
  // const sectionDecorationLeft = sectionDecoration?.left ?? 0
  // const sectionDecorationTop = sectionDecoration?.top ?? 0
  // const sectionDecorationRight = sectionDecoration?.right ?? 0
  // const sectionDecorationBottom = sectionDecoration?.bottom ?? 0
  //---------------------------------------------------------
  let rightMost = 0
  let downMost = 0
  let lineHeight = 0

  let lineDecorationTop = 0
  let lineDecorationBottom = 0

  for (const item of itemList) {
    const width = item?.style.width ?? 0
    const height = item?.style.height ?? 0

    const xCoordinate = item.style.x
    const yCoordinate = item.style.y

    if (xCoordinate != undefined && yCoordinate != undefined) {
      item.layout = [xCoordinate, yCoordinate, width, height]
    }
    //
    else {
      const decoration = item.decoration
      const decorationLeft = decoration?.left ?? 0
      const decorationTop = decoration?.top ?? 0
      const decorationRight = decoration?.right ?? 0
      const decorationBottom = decoration?.bottom ?? 0

      //换行
      if (rightMost + width + decorationRight > sectionWidth) {
        downMost += lineHeight + itemGap
        lineHeight = 0
        rightMost = 0
      }
      if (!item.layout) {
        item.layout = [0, 0, width, height]
      }
      item.layout[0] = rightMost + decorationLeft
      item.layout[1] = downMost + decorationTop

      if (decorationTop > lineDecorationTop) {
        lineDecorationTop = decorationTop
      }

      if (decorationBottom > lineDecorationBottom) {
        lineDecorationBottom = decorationBottom
      }

      if (item.layout[1] + height + decorationBottom > sectionHeight) {
        sectionHeight = item.layout[1] + height + decorationBottom
      }

      if (height + decorationTop + decorationBottom > lineHeight) {
        lineHeight = height + decorationTop + decorationBottom
      }
      rightMost += width + itemGap + decorationLeft + decorationRight
    }
  }
  return (
    sectionHeight +
    titleHeight +
    titleMarginTop +
    titleMarginBottom +
    titlePaddingTop +
    titlePaddingBottom
  )
}
