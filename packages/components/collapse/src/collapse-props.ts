import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const collapseProps = buildProps({} as const)
export type CollapseProps = ExtractPropTypes<typeof collapseProps>
