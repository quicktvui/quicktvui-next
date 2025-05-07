import type { QTSelectSeries } from './component/select-series-types'

export interface QTMediaSeries extends QTSelectSeries {
  id?: string
  vip?: QTMediaSeriesVip

  [prop: string]: any
}

export interface QTMediaSeriesData {
  initPosition: number
  pageSize: number
  totalCount: number
}

export interface QTMediaSeriesEvent {
  position?: number
  page?: number
  data?: QTMediaSeries
}

export interface QTMediaSeriesGroup {
  enable: boolean
  size: number
  groupStyle?: QTMediaSeriesGroupStyle
}

export interface QTMediaSeriesGroupStyle {
  groupMarginLeft?: number
  itemWidth?: number
  itemHeight?: number
  itemGap?: number

  textColor?: {
    normal: string
    focused: string
    selected: string
  }
  focusBackground?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
  }
  background?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
    stroke: {
      color: {
        normal: string
        selected: string
      }
      width: number
    }
  }
  textVipColor?: {
    normal: string
    focused: string
    selected: string
  }
  focusVipBackground?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
  }
  backgroundVip?: {
    orientation?: string
    cornerRadius: Array<number>
    color: Array<string>
    padding: Array<number>
    stroke: {
      color: {
        normal: string
        selected: string
      }
      width: number
    }
  }
  mark?: {
    color: string
  }
}

export enum QTMediaSeriesStyleType {
  QT_MEDIA_SERIES_STYLE_TYPE_DEFAULT = 0,
  QT_MEDIA_SERIES_STYLE_TYPE_VIP = 1,
}

export enum QTMediaSeriesType {
  QT_MEDIA_SERIES_TYPE_LEFT_RIGHT = 'leftRight',
  QT_MEDIA_SERIES_TYPE_TOP_DOWN = 'topDown',
  QT_MEDIA_SERIES_TYPE_TEXT = 'text',
  QT_MEDIA_SERIES_TYPE_NUMBER = 'number',
  QT_MEDIA_SERIES_TYPE_CUSTOM = 'custom',
}

export interface QTMediaSeriesVip {
  enable: boolean
  text?: string
}
