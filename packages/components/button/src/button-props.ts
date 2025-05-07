import { buildProps, definePropType } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'
import type { QTGradient } from '../../gradient'

export const buttonProps = buildProps({
  size: {
    type: String,
    default: 'default',
  },
  itemType: {
    type: Number,
    default: 20000,
  },
  focusBorder: {
    type: Boolean,
    default: false,
  },
  focusScale: {
    type: Number,
    default: 1.08,
  },
  focusable: {
    type: Boolean,
    default: true,
  },
  enableFlexStyle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  focusIcon: {
    type: String,
  },
  text: {
    type: String,
    default: '',
  },
  gradientFocusBackground: {
    type: definePropType<QTGradient>(Object),
  },
  gradientSelectedBackground: {
    type: definePropType<QTGradient>(Object),
  },
  gradientBackground: {
    type: definePropType<QTGradient>(Object),
  },
  round: Boolean,
} as const)
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
