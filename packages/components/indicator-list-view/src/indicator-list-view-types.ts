export interface QTIndicatorListViewEvent {
  [prop: string]: any
}

export interface QTListViewItem {
  _id?: string
  type: number
  decoration?: QTListViewItemDecoration
  state?: QTListViewItemState

  [prop: string]: any
}

export interface QTListViewItemDecoration {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

export enum QTListViewItemState {
  QT_LIST_VIEW_ITEM_STATE_DEFAULT = 0,
  QT_LIST_VIEW_ITEM_STATE_ATTACHED = 1,
  QT_LIST_VIEW_ITEM_STATE_BIND = 2,
  QT_LIST_VIEW_ITEM_STATE_UNBIND = 3,
  QT_LIST_VIEW_ITEM_STATE_DETACHED = 4,
}

export interface QTListViewItemFunctionParams {
  itemPosition: number
  targetName: string
  functionTargetName: string
  data: Array<any>
}

export interface QTListInitPosition {
  focusPosition?: number
  position?: number
  scrollToPosition?: number
  scrollOffset?: number
  target?: string

  blockOthers?: boolean
  force?: boolean
  alignCenter?: boolean
  autofocus?: boolean
  nextTargetFocusPosition?: number
  delay?: number
  hide?: boolean
}
