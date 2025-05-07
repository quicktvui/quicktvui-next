import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const loadingViewProps = buildProps({
  color: {
    type: String,
  },
  size: {
    type: String,
    default: 'default',
  },
} as const)
export type LoadingViewProps = ExtractPropTypes<typeof loadingViewProps>
