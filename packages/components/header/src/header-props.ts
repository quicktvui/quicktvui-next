import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const headerProps = buildProps({} as const)
export type HeaderProps = ExtractPropTypes<typeof headerProps>
