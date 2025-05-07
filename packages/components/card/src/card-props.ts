import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const cardProps = buildProps({} as const)
export type CardProps = ExtractPropTypes<typeof cardProps>
