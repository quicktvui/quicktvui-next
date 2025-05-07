import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const inputViewProps = buildProps({
  size: {
    type: String,
    default: 'default',
  },
  EWidth: {
    type: Number,
    default: -1,
  },
  EHeight: {
    type: Number,
    default: -1,
  },
  strokeWidth: {
    type: Number,
    default: -1,
  },
  strokeColor: {
    type: String,
    default: '',
  },
  strokeRadius: {
    type: Number,
    default: -1,
  },
  focusStrokeWidth: {
    type: Number,
    default: -1,
  },
  focusStrokeColor: {
    type: String,
    default: '',
  },
  textSize: {
    type: Number,
    default: -1,
  },
  hintColor: {
    type: String,
    default: '',
  },
  hintText: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  EType: {
    type: String,
    default: '',
  },
  suffixIcon: {
    type: String,
    default: '',
  },
  disable: {
    type: Boolean,
    default: false,
  },
  mutiline: {
    type: Boolean,
    default: false,
  },
  maxlength: {
    type: Number,
    default: -1,
  },
  ident: {
    type: Number,
    default: -1,
  },
  succFocusStrokeColor: {
    type: String,
    default: '',
  },
  succFocusTextColor: {
    type: String,
    default: '',
  },
  errorFocusStrokeColor: {
    type: String,
    default: '',
  },
  errorFocusTextColor: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  leftPadding: {
    type: Number,
    default: -1,
  },
  rightPadding: {
    type: Number,
    default: -1,
  },
  gravity: {
    type: String,
    default: '',
  },
} as const)
export type InputViewProps = ExtractPropTypes<typeof inputViewProps>
