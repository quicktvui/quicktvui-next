import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const viewProps = buildProps({
  test: {
    type: String,
    default: '',
  },
} as const)
export type ViewProps = ExtractPropTypes<typeof viewProps>
