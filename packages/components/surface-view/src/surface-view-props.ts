import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const surfaceViewProps = buildProps({} as const)
export type SurfaceViewProps = ExtractPropTypes<typeof surfaceViewProps>
