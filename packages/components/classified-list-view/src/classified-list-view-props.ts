import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const classifiedListViewProps = buildProps({
  className: {
    type: String,
    default: 'content_list_view',
  },
  classNavName: {
    type: String,
    default: 'nav_list_view',
  },
  currentFocusIndex: {
    type: Number,
    default: 0,
  },
  focusScale: {
    type: Number,
    default: 1.15,
  },
  navType: {
    type: Number,
    default: 10001,
  },
  yOffest: {
    type: Number,
    default: 802,
  },
} as const)
export type ClassifiedListViewProps = ExtractPropTypes<
  typeof classifiedListViewProps
>
