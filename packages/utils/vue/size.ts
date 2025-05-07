import { componentSizeMap } from '@quicktvui/constants'

import type { ComponentSize } from '@quicktvui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
