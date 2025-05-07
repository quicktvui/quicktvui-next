import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const appIconProps = buildProps({
  roundingRadius: {
    type: Number,
  },
  packageName: {
    type: String,
  },
} as const)
export type AppIconProps = ExtractPropTypes<typeof appIconProps>
