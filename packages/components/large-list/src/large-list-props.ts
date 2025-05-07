import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const largeListProps = buildProps({} as const)
export type LargeListProps = ExtractPropTypes<typeof largeListProps>
