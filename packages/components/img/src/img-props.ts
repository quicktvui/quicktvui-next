import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const ResizeMode = [
  'contain',
  'cover',
  'center',
  'origin',
  'repeat',
  'fix-xy',
] as const

export const imgProps = buildProps({
  src: {
    type: String,
    default: '',
  },
  resizeMode: {
    type: String,
    values: ResizeMode,
    default: 'contain',
  },
  backgroundColor: {
    type: Number,
    default: 0,
  },
  loadDelay: {
    type: Number,
    default: -1,
  },
  loadImgDelay: {
    type: Number,
    default: -1,
  },
  postDelay: {
    type: Number,
    default: -1,
  },
  enableFocusBorder: {
    type: Boolean,
    default: false,
  },
} as const)
export type ImgProps = ExtractPropTypes<typeof imgProps>
