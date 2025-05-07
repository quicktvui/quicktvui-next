import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const viewPagerProps = buildProps({} as const)
export type ViewPagerProps = ExtractPropTypes<typeof viewPagerProps>
