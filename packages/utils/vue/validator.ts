import { componentSizes } from '@quicktvui/constants'
import type { ComponentSize } from '@quicktvui/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)
