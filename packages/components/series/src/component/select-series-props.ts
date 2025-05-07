import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const selectSeriesProps = buildProps({} as const)
export type SelectSeriesProps = ExtractPropTypes<typeof selectSeriesProps>
