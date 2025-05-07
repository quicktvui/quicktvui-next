import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const qrCodeProps = buildProps({
  content: {
    type: String,
    default: '',
  },
  optimize: {
    type: Boolean,
    default: false,
  },
} as const)
export type QRCodeProps = ExtractPropTypes<typeof qrCodeProps>
