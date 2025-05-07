import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const flexViewProps = buildProps({} as const)
export type FlexViewProps = ExtractPropTypes<typeof flexViewProps>
