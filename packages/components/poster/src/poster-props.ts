import { buildProps, definePropType } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'
import type { QTGradient } from '../../gradient'

export const posterProps = buildProps({
  requestFirstFocus: {
    type: Boolean,
    default: false,
  },
  loadDelay: {
    type: Number,
    default: 500,
  },
  type: {
    type: Number,
    default: 10001,
  },
  borderRadius: {
    type: Number,
    default: 8,
  },
  rippleColor: {
    type: String,
    default: '#FF4E46',
  },
  focusBgColor: {
    type: definePropType<QTGradient>(Object),
    default: () => ({} as QTGradient),
  },
  focusTitleColor: {
    type: String,
    required: false,
  },
  focusSubTitleColor: {
    type: String,
    required: false,
  },
  floatTitleBgColor: {
    type: Array,
    default: () => {
      return ['#e5000000', '#00000000']
    },
  },
} as const)
export type PosterProps = ExtractPropTypes<typeof posterProps>

export const posterTitleProps = buildProps({
  fontSize: {
    type: Number,
    default: 20,
  },
  mode: {
    type: String,
    values: ['left', 'right'],
    default: 'right',
  },
} as const)

export const posterFocusTitleProps = buildProps({
  fontSize: {
    type: Number,
    default: 20,
  },
  borderRadius: {
    type: Number,
    default: 8,
  },
  bgColor: {
    type: Object,
    default() {
      return { colors: ['#ffffff', '#ffffff'], cornerRadii4: [0, 0, 8, 8] }
    },
  },
  titleColor: {
    type: String,
    default: '#000000',
  },
  subTitleColor: {
    type: String,
    default: 'rgba(0,0,0,.4)',
  },
} as const)
