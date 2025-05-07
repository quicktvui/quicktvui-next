import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const listViewProps = buildProps({
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
  preloadNo: {
    type: Number,
    default: 0,
  },
  defaultFocus: {
    type: Number,
    default: -1,
  },
  loadingDecoration: {
    type: Object,
    default: () => ({ bottom: 18, right: 30, left: 30 }),
  },
} as const)
export type ListViewProps = ExtractPropTypes<typeof listViewProps>
