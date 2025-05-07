import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const navBarProps = buildProps({
  itemGap: {
    type: Number,
    default: 0,
  },
  horizontal: {
    type: Boolean,
    default: true,
  },
  initSelect: {
    type: Number,
    default: 0,
  },
  navs: {
    type: Array,
    default: () => [],
  },
  tabNavBarClass: {
    type: String,
    default: '',
  },
  horizontalFadingEdgeEnabled: {
    type: Boolean,
    default: false,
  },
  verticalFadingEdgeEnabled: {
    type: Boolean,
    default: false,
  },
  fadingEdgeLength: {
    type: Number,
    default: 0,
  },
} as const)
export type NavBarProps = ExtractPropTypes<typeof navBarProps>
