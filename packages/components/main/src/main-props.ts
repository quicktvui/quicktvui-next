import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const mainProps = buildProps({} as const)
export type MainProps = ExtractPropTypes<typeof mainProps>
