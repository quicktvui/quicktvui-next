import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const scrollViewProps = buildProps({} as const)
export type ScrollViewProps = ExtractPropTypes<typeof scrollViewProps>
