import type { QTTabsViewItem } from '../../tabs-view'
import type { QTViewCoordinate, QTViewScrollState } from '../../view'
import type { QTWaterfall, QTWaterfallSection } from '../../waterfall'

export interface QTTab {
  defaultIndex: number
  defaultFocusIndex?: number

  itemList: Array<QTTabItem>
}

export interface QTTabEvent {
  pageIndex: number
  useDiff: boolean
  eventName: string
  params: QTTabEventParams
  data: QTTabItem
}

export interface QTTabEventParams {
  itemPosition: number
  x: number
  y: number
  position: number
  orientation: number
  contentOffset: QTViewCoordinate
  state: QTViewScrollState
}

export interface QTTabIndex {
  pageIndex: number
  sectionIndex: number
  sectionCount: number
  itemIndex: number
  itemCount: number
}

export interface QTTabItem extends QTTabsViewItem {
  [prop: string]: any
}

export enum QTTabItemType {
  QT_TAB_ITEM_TYPE_DEFAULT = 20000,
}

export interface QTTabPage extends QTWaterfall {
  [prop: string]: any
}

export interface QTTabPageData {
  useDiff?: boolean
  disableScrollOnFirstScreen?: boolean
  firstFocusTargetID?: string
  data: Array<QTWaterfallSection>
  bindingPlayer?: string

  [prop: string]: any
}

export interface QTTabPageDataState {
  index: number
  state: QTTabPageState
  sectionBindIndex: number
}

export enum QTTabPageState {
  QT_TAB_PAGE_STATE_INIT = -1,
  QT_TAB_PAGE_STATE_IDLE = 0,
  QT_TAB_PAGE_STATE_BUSY = 1,
  QT_TAB_PAGE_STATE_COMPLETE = 2,
  QT_TAB_PAGE_STATE_ERROR = 3,
}
