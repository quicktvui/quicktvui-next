import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const transitionImgProps = buildProps({} as const)
export type TransitionImgProps = ExtractPropTypes<typeof transitionImgProps>
