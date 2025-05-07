import type { QTListViewItem } from '../../list-view'

export interface QTClassifiedListViewItem extends QTListViewItem {
  type: number
  categoryName: string
  decoration?: QTClassifiedListViewItemDecoration
  isNeedFocus: boolean

  [prop: string]: any
}

export interface QTClassifiedListViewItemDecoration {
  left?: number
  top?: number
  right?: number
  bottom?: number
}
