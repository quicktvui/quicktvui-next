import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const waterfallProps = buildProps({
  enablePlaceholder: {
    type: Boolean,
    default: true,
  },
  blockFocusDirections: {
    type: Array,
    default: () => ['down'],
  },
  vueSectionBlockFocusDirections: {
    type: Array,
    default: () => ['left', 'right'],
  },
  customPool: {
    type: Object,
  },
  customItemPool: {
    type: Object,
  },
  scrollYLesserReferenceValue: {
    type: Number,
    default: 0,
  },
  scrollYGreaterReferenceValue: {
    type: Number,
    default: 0,
  },
} as const)
export type WaterfallProps = ExtractPropTypes<typeof waterfallProps>
