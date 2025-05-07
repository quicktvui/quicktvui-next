import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const tabsViewProps = buildProps({} as const)
export type TabsViewProps = ExtractPropTypes<typeof tabsViewProps>
