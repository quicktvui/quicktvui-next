import type {
  QTFlexStyleBackground,
  QTFlexStyleCoordinate,
  QTFlexStyleDecoration,
  QTFlexStyleGradientBackground,
  QTFlexStyleMargin,
  QTFlexStylePadding,
  QTFlexStyleSize,
  QTFlexStyleSpacing,
  QTFlexStyleText,
} from '../../flex'
import type { QTListViewItem } from '../../list-view'

export type QTWaterfallFlexStyle = QTFlexStyleMargin &
  QTFlexStylePadding &
  QTFlexStyleSize &
  QTFlexStyleSpacing &
  QTFlexStyleDecoration &
  QTFlexStyleCoordinate &
  QTFlexStyleBackground &
  QTFlexStyleGradientBackground

export enum QTScrollState {
  SCROLL_STATE_IDLE = 0,
  SCROLL_STATE_DRAGGING = 1,
  SCROLL_STATE_SETTLING = 2,
}

export interface QTWaterfall {
  width: number
  height: number

  visibleType?: QTWaterfallVisibleType

  [prop: string]: any
}

export interface QTWaterfallCardItem extends QTWaterfallItem {
  cardId: string
  cardPlaceHolder?: QTWaterfallCardPlaceHolder

  [prop: string]: any
}

export interface QTWaterfallCardPlaceHolder {
  enable?: boolean
  radius?: number
  rect?: Array<number>
  focusable?: boolean
  focusScale?: number

  [prop: string]: any
}

export interface QTWaterfallCardSection extends QTWaterfallSection {
  cardId: string
  cardStyle: QTWaterfallFlexStyle
  cardPlaceHolder?: QTWaterfallCardPlaceHolder

  [prop: string]: any
}

export interface QTWaterfallEvent {
  position: number
  parentPosition: number
  item: QTWaterfallItem
  isFocused: boolean
  hasFocus: boolean
}

export interface QTWaterfallIndex {
  sectionIndex: number
  sectionCount: number
  itemIndex: number
  itemCount: number
}

export interface QTWaterfallItem extends QTListViewItem {
  style: QTWaterfallFlexStyle

  [prop: string]: any
}

export enum QTWaterfallItemType {
  QT_WATERFALL_ITEM_TYPE_POSTER = 10001,
  QT_WATERFALL_ITEM_TYPE_TAB = 10002,
  QT_WATERFALL_ITEM_TYPE_CARD = 10003,
  QT_WATERFALL_ITEM_TYPE_BLANK = -10000,
  QT_WATERFALL_ITEM_TYPE_PLUGIN = 10004,
}

export interface QTWaterfallPlaceholder {
  enable: boolean
}

export interface QTWaterfallSection extends QTListViewItem {
  title?: string
  titleStyle?: QTWaterfallFlexStyle & QTFlexStyleText
  itemList: Array<QTWaterfallItem>
  style: QTWaterfallFlexStyle
  placeholder?: QTWaterfallPlaceholder

  [prop: string]: any
}

export enum QTWaterfallSectionType {
  QT_WATERFALL_SECTION_TYPE_LOADING = -1,
  QT_WATERFALL_SECTION_TYPE_TITLE = 1000,
  QT_WATERFALL_SECTION_TYPE_FLEX = 1002,
  QT_WATERFALL_SECTION_TYPE_LIST = 1003,
  QT_WATERFALL_SECTION_TYPE_TAB = 1003,
  QT_WATERFALL_SECTION_TYPE_INDEPENDENT_ITEM = 1004,
  QT_WATERFALL_SECTION_TYPE_TAB_LIST = 1005,
  QT_WATERFALL_SECTION_TYPE_CARD = 1006,
  QT_WATERFALL_SECTION_TYPE_VUE = 1007,
  QT_WATERFALL_SECTION_TYPE_END = -1001,
  QT_WATERFALL_SECTION_TYPE_BLANK = -1000,
  QT_WATERFALL_SECTION_TYPE_PLUGIN = 1008,
}

export interface QTWaterfallTabItem extends QTWaterfallItem {
  text: string
  textStyle?: QTWaterfallFlexStyle

  [prop: string]: any
}

export enum QTWaterfallVisibleType {
  QT_WATERFALL_VISIBLE_TYPE_NONE = 'none',
  QT_WATERFALL_VISIBLE_TYPE_NORMAL = 'normal',
  QT_WATERFALL_VISIBLE_TYPE_CENTER = 'center',
}

export interface QTWaterfallPluginItem extends QTWaterfallItem {
  pluginKey: string

  [prop: string]: any
}

export interface QTWaterfallPluginSection extends QTWaterfallSection {
  pluginKey: string

  [prop: string]: any
}
