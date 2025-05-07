export interface QTGridViewEvent {
  [prop: string]: any
}

export interface QTGridViewItemFunctionParams {
  itemPosition: number
  targetName: string
  functionTargetName: string
  data: Array<any>
}

export interface QTGridViewItemDecoration {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

export interface QTGridViewItem {
  type: number
  decoration?: QTGridViewItemDecoration

  [prop: string]: any
}
