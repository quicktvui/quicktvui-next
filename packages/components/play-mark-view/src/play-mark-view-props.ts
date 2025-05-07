import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const playMarkViewProps = buildProps({} as const)
export type PlayMarkViewProps = ExtractPropTypes<typeof playMarkViewProps>
