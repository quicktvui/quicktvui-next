import type { QTIView } from '../../view'

export interface QTCollapse {
  width: number
  height: number
  expandDuration?: number
  //默认选中的位置
  defaultIndex?: number
  itemList: Array<QTCollapseItem>
}

export interface QTCollapseItem {
  height: number
  collapseHeight: number

  [prop: string]: any
}

export interface QTICollapseItem extends QTIView {
  onCollapseItemExpand(value: boolean): void
}
