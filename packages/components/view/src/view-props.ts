import { buildProps, definePropType } from '@quicktvui/utils'
import type { QTGradient } from '../../gradient'
import type { ExtractPropTypes } from 'vue'

export const ViewState = ['normal', 'selected', 'focused'] as const

export const viewProps = buildProps({
  focusable: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  clipChildren: {
    type: Boolean,
    default: false,
  },
  clipPadding: {
    type: Boolean,
    default: false,
  },
  enableFocusBorder: {
    type: Boolean,
    default: false,
  },
  focusScale: {
    type: Number,
    default: 1.1,
  },
  autoWidth: {
    type: Boolean,
    default: false,
  },
  autoHeight: {
    type: Boolean,
    default: false,
  },
  duplicateParentState: {
    type: Boolean,
    default: false,
  },
  gradientBackground: {
    type: definePropType<QTGradient>(Object),
    default: () => ({} as QTGradient),
  },
  showOnState: {
    type: String,
    values: ViewState,
    default: 'normal',
  },
} as const)
export type ViewProps = ExtractPropTypes<typeof viewProps>
