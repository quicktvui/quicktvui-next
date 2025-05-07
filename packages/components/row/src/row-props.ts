import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const RowJustify = [
  'start',
  'center',
  'end',
  'space-around',
  'space-between',
  'space-evenly',
] as const

export const RowAlign = ['top', 'middle', 'bottom'] as const

export const rowProps = buildProps({
  /**
   * @description custom element tag
   */
  tag: {
    type: String,
    default: 'div',
  },
  /**
   * @description grid spacing
   */
  gutter: {
    type: Number,
    default: 0,
  },
  /**
   * @description horizontal alignment of flex layout
   */
  justify: {
    type: String,
    values: RowJustify,
    default: 'start',
  },
  /**
   * @description vertical alignment of flex layout
   */
  align: {
    type: String,
    values: RowAlign,
  },
} as const)

export type RowProps = ExtractPropTypes<typeof rowProps>
