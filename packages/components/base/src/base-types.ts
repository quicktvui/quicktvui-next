import type { QTFlexStylePosition, QTFlexStyleSize } from '../../flex'

export interface QTStateListColor {
  color?: string
  focusColor?: string
  selectColor?: string
}

/**
 * vue和android能传递的任意类型
 */
export type QTNativeParams =
  | string
  | number
  | boolean
  | Array<string>
  | Array<number>
  | Record<string, string>
  | Record<string, number>
  | Array<Record<string, string>>
  | Array<Record<string, number>>

/**
 * array
 */
export type QTNativeMap = Record<string, any>

/**
 * map
 */
export type QTNativeArray = Array<any>

/**
 *
 */
export interface QTEventData<T> {
  code: number
  data: T
}

export type QTLocation = QTFlexStylePosition & QTFlexStyleSize

export enum QTVisibility {
  QT_VISIBLE = 'visible',
  QT_INVISIBLE = 'invisible',
  QT_GONE = 'gone',
}

export interface QTPosition {
  x: number
  y: number
}
