import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const swiperSlideProps = buildProps({} as const)
export type SwiperSlideProps = ExtractPropTypes<typeof swiperSlideProps>
