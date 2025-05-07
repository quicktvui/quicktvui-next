import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const columnProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
} as const)
export type ColumnProps = ExtractPropTypes<typeof columnProps>
