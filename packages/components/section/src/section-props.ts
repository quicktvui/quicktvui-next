import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const vueSectionProps = buildProps({} as const)
export type VueSectionProps = ExtractPropTypes<typeof vueSectionProps>
