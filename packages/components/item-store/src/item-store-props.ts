import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const itemStoreProps = buildProps({} as const)
export type ItemStoreProps = ExtractPropTypes<typeof itemStoreProps>
