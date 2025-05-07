import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const cardContainerProps = buildProps({} as const)
export type CardContainerProps = ExtractPropTypes<typeof cardContainerProps>
