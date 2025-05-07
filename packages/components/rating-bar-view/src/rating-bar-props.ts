import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const ratingbarProps = buildProps({
  size: {
    type: String,
    default: 'default',
  },
  icon: {
    type: String,
    default: '',
  },
  voidIcon: {
    type: String,
    default: '',
  },
  starCount: {
    type: Number,
    default: 5,
  },
  max: {
    type: Number,
    default: 5,
  },
  starSize: {
    type: Number,
    default: 20,
  },
  scoreNum: {
    type: Number,
    default: 0,
  },
  starDistance: {
    type: Number,
    default: 10,
  },
  horizontalMargin: {
    type: Number,
    default: 0,
  },
  verticalMargin: {
    type: Number,
    default: 0,
  },
  allowHalf: {
    type: Boolean,
    default: false,
  },
} as const)
export type ratingBarProps = ExtractPropTypes<typeof ratingbarProps>
