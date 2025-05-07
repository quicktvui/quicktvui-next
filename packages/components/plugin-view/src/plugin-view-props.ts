import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const pluginViewProps = buildProps({} as const)
export type PluginViewProps = ExtractPropTypes<typeof pluginViewProps>
