import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const longImageProps = buildProps({
  size: {
    type: String,
    default: 'default',
  },
  activeColor: {
    type: String,
    default: 'default',
  },
  inactiveColor: {
    type: String,
    default: '#e2e2e2',
  },
  inactiveBorderColor: {
    type: String,
    default: '#b5b5b5',
  },
  sliderColor: {
    type: String,
    default: '#FFFFFF',
  },
  disabledActiveBgColor: {
    type: String,
    default: '#269A4D',
  },
  disabledInactiveBgColor: {
    type: String,
    default: '#AAAAAA',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  borderSize: {
    type: Number,
    default: 3,
  },
  sliderAssetsIcon: {
    type: String,
    default: '',
  },
  sliderNetworkIcon: {
    type: String,
    default: '',
  },
} as const)
export type LongImageProps = ExtractPropTypes<typeof longImageProps>
