import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const checkBoxProps = buildProps({
  size: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    default: '#FFFFFFFF',
  },
  fillColor: {
    type: String,
    default: '#00000000',
  },
  disabledColor: {
    type: String,
    default: '#42FFFFFF',
  },
  defaultColor: {
    type: String,
    default: '#42FFFFFF',
  },
  selectedColor: {
    type: String,
    default: '#00000000',
  },
  focusCheckColor: {
    type: String,
    default: '#409eff',
  },
  disabledDrawable: {
    type: String,
    default: '',
  },
  defaultDrawable: {
    type: String,
    default: '',
  },
  selectDrawable: {
    type: String,
    default: '',
  },
  focusDrawable: {
    type: String,
    default: '',
  },
  drawableSize: {
    type: Number,
    default: 20,
  },
  drawableLocation: {
    type: String,
    default: 'left',
  },
  padding: {
    type: Number,
    default: 8,
  },
  drawablePadding: {
    type: Number,
    default: 8,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  borderRadius: {
    type: Number,
    default: 8,
  },
  enableFocusBorder: {
    type: Boolean,
    default: false,
  },
  enableFocusBackground: {
    type: Boolean,
    default: false,
  },
} as const)
export type CheckBoxProps = ExtractPropTypes<typeof checkBoxProps>
