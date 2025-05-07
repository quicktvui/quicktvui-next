import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const appIconSampleProps = buildProps({
  size: {
    type: String,
    default: 'default',
  },
  packageName: {
    type: String,
    default: '',
  },
} as const)
export type AppIconSampleProps = ExtractPropTypes<typeof appIconSampleProps>
