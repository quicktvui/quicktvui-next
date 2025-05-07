import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const loadingProps = buildProps({
  color: {
    type: String,
    default: '',
  },
} as const)
export type LoadingProps = ExtractPropTypes<typeof loadingProps>
