import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const listItemProps = buildProps({} as const)
export type ListItemProps = ExtractPropTypes<typeof listItemProps>
