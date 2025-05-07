import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const containerProps = buildProps({
  direction: {
    type: String,
    values: ['vertical', 'horizontal'],
  },
} as const)
export type ContainerProps = ExtractPropTypes<typeof containerProps>
