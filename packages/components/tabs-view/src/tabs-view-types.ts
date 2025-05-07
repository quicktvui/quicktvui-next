import type { QTListViewItem } from '../../list-view'

export interface QTTabsView {
  defaultIndex?: number
  focusIndex?: number
  data: Array<QTTabsViewItem>
}

export interface QTTabsViewItem extends QTListViewItem {
  text: string
  titleSize: number

  [prop: string]: any
}
