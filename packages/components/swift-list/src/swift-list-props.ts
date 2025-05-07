import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const swiftListProps = buildProps({} as const)
export type SwiftListProps = ExtractPropTypes<typeof swiftListProps>
