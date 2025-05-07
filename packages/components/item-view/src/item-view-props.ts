import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const itemViewProps = buildProps({} as const)
export type ItemViewProps = ExtractPropTypes<typeof itemViewProps>
