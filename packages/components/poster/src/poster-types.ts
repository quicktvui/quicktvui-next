import type { QTFocusable } from '../../focus'
import type {
  QTFlexStyleMargin,
  QTFlexStylePadding,
  QTFlexStylePosition,
  QTFlexStyleSize,
  QTFlexStyleText,
} from '../../flex'
import type { QTGradient } from '../../gradient'
import type { QTWaterfallFlexStyle, QTWaterfallItem } from '../../waterfall'

export interface QTPoster extends QTWaterfallItem {
  focus?: QTFocusable
  image?: QTPosterImage
  shadow?: QTPosterShadow
  shimmer?: QTPosterShimmer
  title?: QTPosterTitle
  focusTitle?: QTPosterTitle
  subTitle?: QTPosterTitle
  floatTitle?: QTPosterTitle
  ripple?: QTPosterRipple
  corner?: QTPosterCorner
  score?: QTPosterScore
  titleStyle?: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize
  titleFocusStyle?: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize
  placeholderImg?: QTPosterPlaceholderImg

  [prop: string]: any
}

export interface QTPosterCorner extends QTPosterElement {
  text: string
  background?: QTGradient

  [prop: string]: any
}

export interface QTPosterElement {
  enable: boolean
  style: QTWaterfallFlexStyle
}

export interface QTPosterImage extends QTPosterElement {
  src?: string
}

export interface QTPosterPlaceholderImg {
  enable: boolean
  src: string
}

export interface QTPosterRipple {
  enable: boolean
  src?: string
  style: QTFlexStyleMargin & QTFlexStylePadding & QTFlexStylePosition
}

export interface QTPosterScore {
  text: string
  style?: QTFlexStyleMargin &
    QTFlexStylePadding &
    QTFlexStyleSize &
    QTFlexStyleText
  enable: boolean
}

export interface QTPosterShadow {
  enable: boolean
}

export interface QTPosterShimmer {
  enable: boolean
}

export interface QTPosterTitle {
  text: string
  focusTitle?: string
  background?: QTGradient
  style?: QTFlexStyleMargin &
    QTFlexStylePadding &
    QTFlexStyleSize &
    QTFlexStyleText
  enable: boolean
}
