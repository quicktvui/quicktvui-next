import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const rippleViewProps = buildProps({} as const)
export type RippleViewProps = ExtractPropTypes<typeof rippleViewProps>
