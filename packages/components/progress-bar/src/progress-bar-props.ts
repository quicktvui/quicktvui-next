import { buildProps, definePropType } from '@quicktvui/utils'
import type { QTGradient } from '../../gradient'
import type {
  QTRangeSeekBarProgress,
  QTRangeSeekBarRange,
} from '../../range-seek-bar'
import type { ExtractPropTypes } from 'vue'

export const progressBarProps = buildProps({
  visible: {
    type: Boolean,
    default: undefined,
  },
  focusable: {
    type: Boolean,
    default: undefined,
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
    type: String,
  },
  progressDefaultColor: {
    type: String,
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
    type: String,
  },
  leftIndicatorBackgroundColor: {
    type: String,
  },
  rightIndicatorBackgroundColor: {
    type: String,
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
    type: String,
  },
  leftIndicatorTextColor: {
    type: String,
  },
  rightIndicatorTextColor: {
    type: String,
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
    type: String,
  },
  tickMarkInRangeTextColor: {
    type: String,
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
    type: String,
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
export type ProgressBarProps = ExtractPropTypes<typeof progressBarProps>
