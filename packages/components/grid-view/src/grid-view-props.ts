import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const gridViewProps = buildProps({
  loadMore: {
    type: Function,
    default() {
      return [1, 1]
    },
  },
  openPage: {
    type: Boolean,
    default: false,
  },
  spanCount: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
  },
  preloadNo: {
    type: Number,
    default: 0,
  },
  defaultFocus: {
    type: Number,
    default: -1,
  },
  areaWidth: {
    type: Number,
    default: 1200,
  },
  blockFocusDirections: {
    type: Array,
    default: () => [],
  },
  loadingDecoration: {
    type: Object,
    default: () => ({ top: 15, left: 30 }),
  },
} as const)
export type GridViewProps = ExtractPropTypes<typeof gridViewProps>
