import type { QTGradient } from '../../gradient'

export enum QTDirections {
  QT_DIRECTION_UP = 'up',
  QT_DIRECTION_DOWN = 'down',
  QT_DIRECTION_RIGHT = 'right',
  QT_DIRECTION_LEFT = 'left',
}

export interface QTFlexStyleBackground {
  backgroundColor?: string
}

export interface QTFlexStyleCoordinate {
  x?: number
  y?: number
}

export interface QTFlexStyleDecoration {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

export interface QTFlexStyleGradientBackground {
  gradientBackground?: QTGradient
}

export interface QTFlexStyleMargin {
  margin?: number
  marginLeft?: number
  marginTop?: number
  marginBottom?: number
  marginRight?: number
}

export interface QTFlexStylePadding {
  padding?: number
  paddingLeft?: number
  paddingTop?: number
  paddingBottom?: number
  paddingRight?: number
}

export interface QTFlexStylePosition {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

export interface QTFlexStyleSize {
  width?: number
  height?: number
}

export interface QTFlexStyleSpacing {
  spacing?: number
}

export interface QTFlexStyleText {
  fontSize?: number
  ellipsizeMode?: number
}
