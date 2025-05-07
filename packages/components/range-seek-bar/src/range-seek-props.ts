import { buildProps, definePropType } from '@quicktvui/utils'
import type {
  QTRangeSeekBarProgress,
  QTRangeSeekBarRange,
} from './range-seek-types'
import type { ExtractPropTypes } from 'vue'
import type { QTGradient } from '../../gradient'

export interface QtRangeSeekBarColor {
  startColor: string
  endColor: string
}

export const rangeSeekBarProps = buildProps({
  visible: {
    type: Boolean,
    default: undefined,
  },
  focusable: {
    type: Boolean,
    default: true,
  },
  clickable: {
    type: Boolean,
    default: undefined,
  },
  leftSeekBarVisible: {
    type: Boolean,
    default: undefined,
  },
  rightSeekBarVisible: {
    type: Boolean,
    default: undefined,
  },
  seekBarMode: {
    type: Number,
    default: 1,
  },
  progress: {
    type: Number,
  },
  rangeProgress: {
    type: definePropType<QTRangeSeekBarProgress>(Object),
  },
  range: {
    type: definePropType<QTRangeSeekBarRange>(Object),
  },
  gravity: {
    type: Number,
    default: 2,
  },
  progressWidth: {
    type: Number,
  },
  progressHeight: {
    type: Number,
  },
  progressLeft: {
    type: Number,
  },
  progressRight: {
    type: Number,
  },
  progressTop: {
    type: Number,
  },
  progressBottom: {
    type: Number,
  },
  progressRadius: {
    type: Number,
  },
  progressColor: {
    type: Number,
  },
  progressDefaultColor: {
    type: Number,
  },
  progressDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  progressDefaultDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  progressUrl: {
    type: String,
  },
  progressDefaultUrl: {
    type: String,
  },
  showIndicator: {
    type: Boolean,
    default: undefined,
  },
  showLeftIndicator: {
    type: Boolean,
    default: undefined,
  },
  showRightIndicator: {
    type: Boolean,
    default: undefined,
  },
  indicatorShowMode: {
    type: Number,
  },
  leftIndicatorShowMode: {
    type: Number,
  },
  rightIndicatorShowMode: {
    type: Number,
  },
  indicatorWidth: {
    type: Number,
  },
  leftIndicatorWidth: {
    type: Number,
  },
  rightIndicatorWidth: {
    type: Number,
  },
  indicatorHeight: {
    type: Number,
  },
  leftIndicatorHeight: {
    type: Number,
  },
  rightIndicatorHeight: {
    type: Number,
  },
  indicatorTextDecimalFormat: {
    type: String,
  },
  leftIndicatorTextDecimalFormat: {
    type: String,
  },
  rightIndicatorTextDecimalFormat: {
    type: String,
  },
  indicatorTextStringFormat: {
    type: String,
  },
  leftIndicatorTextStringFormat: {
    type: String,
  },
  rightIndicatorTextStringFormat: {
    type: String,
  },
  indicatorMargin: {
    type: Number,
  },
  leftIndicatorMargin: {
    type: Number,
  },
  rightIndicatorMargin: {
    type: Number,
  },
  indicatorPaddingBottom: {
    type: Number,
  },
  leftIndicatorPaddingBottom: {
    type: Number,
  },
  rightIndicatorPaddingBottom: {
    type: Number,
  },
  indicatorPaddingTop: {
    type: Number,
  },
  leftIndicatorPaddingTop: {
    type: Number,
  },
  rightIndicatorPaddingTop: {
    type: Number,
  },
  indicatorPaddingLeft: {
    type: Number,
  },
  leftIndicatorPaddingLeft: {
    type: Number,
  },
  rightIndicatorPaddingLeft: {
    type: Number,
  },
  indicatorPaddingRight: {
    type: Number,
  },
  leftIndicatorPaddingRight: {
    type: Number,
  },
  rightIndicatorPaddingRight: {
    type: Number,
  },
  indicatorBackgroundColor: {
    type: Number,
  },
  leftIndicatorBackgroundColor: {
    type: Number,
  },
  rightIndicatorBackgroundColor: {
    type: Number,
  },
  indicatorRadius: {
    type: Number,
  },
  leftIndicatorRadius: {
    type: Number,
  },
  rightIndicatorRadius: {
    type: Number,
  },
  indicatorTextSize: {
    type: Number,
  },
  leftIndicatorTextSize: {
    type: Number,
  },
  rightIndicatorTextSize: {
    type: Number,
  },
  indicatorTextColor: {
    type: Number,
  },
  leftIndicatorTextColor: {
    type: Number,
  },
  rightIndicatorTextColor: {
    type: Number,
  },
  indicatorArrowSize: {
    type: Number,
  },
  leftIndicatorArrowSize: {
    type: Number,
  },
  rightIndicatorArrowSize: {
    type: Number,
  },
  indicatorDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  leftIndicatorDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  rightIndicatorDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  indicatorUrl: {
    type: String,
  },
  leftIndicatorUrl: {
    type: String,
  },
  rightIndicatorUrl: {
    type: String,
  },
  thumbWidth: {
    type: Number,
  },
  leftThumbWidth: {
    type: Number,
  },
  rightThumbWidth: {
    type: Number,
  },
  thumbHeight: {
    type: Number,
  },
  leftThumbHeight: {
    type: Number,
  },
  rightThumbHeight: {
    type: Number,
  },
  thumbScaleRatio: {
    type: Number,
  },
  leftThumbScaleRatio: {
    type: Number,
  },
  rightThumbScaleRatio: {
    type: Number,
  },
  thumbActivate: {
    type: Boolean,
    default: undefined,
  },
  leftThumbActivate: {
    type: Boolean,
    default: undefined,
  },
  rightThumbActivate: {
    type: Boolean,
    default: undefined,
  },
  thumbDrawable: {
    type: definePropType<QTGradient>(Object),
    default: {
      colors: ['#FFFFFF', '#FFFFFF'],
      cornerRadius: 100,
      orientation: 6,
    },
  },
  leftThumbDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  rightThumbDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  thumbUrl: {
    type: String,
  },
  leftThumbUrl: {
    type: String,
  },
  rightThumbUrl: {
    type: String,
  },
  thumbInactivatedDrawable: {
    type: definePropType<QTGradient>(Object),
    default: {
      colors: ['#4D4D4D', '#4D4D4D'],
      cornerRadius: 100,
      orientation: 6,
    },
  },
  leftThumbInactivatedDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  rightThumbInactivatedDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  thumbInactivatedUrl: {
    type: String,
  },
  leftThumbInactivatedUrl: {
    type: String,
  },
  rightThumbInactivatedUrl: {
    type: String,
  },
  tickMarkMode: {
    type: Number,
  },
  tickMarkGravity: {
    type: Number,
  },
  tickMarkLayoutGravity: {
    type: Number,
  },
  tickMarkTextArray: {
    type: Array,
  },
  tickMarkTextMargin: {
    type: Number,
  },
  tickMarkTextSize: {
    type: Number,
  },
  tickMarkTextColor: {
    type: Number,
  },
  tickMarkInRangeTextColor: {
    type: Number,
  },
  steps: {
    type: Number,
  },
  stepsWidth: {
    type: Number,
  },
  stepsHeight: {
    type: Number,
  },
  stepsRadius: {
    type: Number,
  },
  stepsColor: {
    type: Number,
  },
  stepsAutoBonding: {
    type: Boolean,
    default: undefined,
  },
  stepsDrawable: {
    type: definePropType<QTGradient>(Object),
  },
  stepsUrl: {
    type: Array,
  },
} as const)
export type RangeSeekBarProps = ExtractPropTypes<typeof rangeSeekBarProps>
