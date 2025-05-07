import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const footerProps = buildProps({} as const)
export type FooterProps = ExtractPropTypes<typeof footerProps>
