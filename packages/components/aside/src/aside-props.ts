import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const asideProps = buildProps({} as const)
export type AsideProps = ExtractPropTypes<typeof asideProps>
