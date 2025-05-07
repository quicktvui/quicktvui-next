import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const replaceChildProps = buildProps({} as const)
export type ReplaceChildProps = ExtractPropTypes<typeof replaceChildProps>
