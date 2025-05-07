import { buildProps, definePropType } from '@quicktvui/utils'
import { viewProps } from '../../view'
import type { ExtractPropTypes } from 'vue'

/**
 * gravityNumber
 * textSpan
 * 暂无实现
 */

export const Gravity = [
  'center',
  'top',
  'bottom',
  'end',
  'centerHorizontal',
  'centerVertical',
  'start',
] as const

export const textProps = buildProps({
  ...viewProps,
  text: {
    type: String,
    default: undefined,
  },
  lineSpacing: {
    type: Number,
    default: undefined,
  },
  textHtml: {
    type: String,
    default: undefined,
  },
  typeface: {
    type: String,
    default: undefined,
  },
  gravity: {
    type: String,
    values: Gravity,
    default: 'center',
  },
  fontSize: {
    type: Number,
    default: undefined,
  },
  paddingRect: {
    type: definePropType<number[]>(Array),
    default: undefined,
  },
  textAlignment: {
    type: Number,
    values: [0, 1, 2, 3, 4, 5, 6],
    default: undefined,
  },
  ellipsizeMode: {
    type: Number,
    values: [0, 1, 2, 3],
    default: undefined,
  },
  lines: {
    type: Number,
    default: undefined,
  },
  maxLines: {
    type: Number,
    default: undefined,
  },
  textColor: {
    type: String,
    default: undefined,
  },
  focusColor: {
    type: String,
    default: undefined,
  },
  selectColor: {
    type: String,
    default: undefined,
  },
  backgroundColor: {
    type: String,
    default: undefined,
  },
  maxWidth: {
    type: Number,
    default: undefined,
  },
  textSize: {
    type: Number,
    default: undefined,
  },
  lineHeight: {
    type: Number,
    default: undefined,
  },
  select: {
    type: Boolean,
    default: undefined,
  },
} as const)
export type TextProps = ExtractPropTypes<typeof textProps>
