import type { QTTabsViewItem } from '../../tabs-view'
import type { QTWaterfallFlexStyle } from '../../waterfall'

export interface QTNavBar {
  defaultIndex?: number
  focusIndex?: number
  data: Array<QTNavBarItem>
}

export interface QTNavBarItem extends QTTabsViewItem {
  style?: QTWaterfallFlexStyle

  [prop: string]: any
}

export enum QTNavBarItemType {
  QT_NAV_BAR_ITEM_TYPE_TEXT = 20000,
}
