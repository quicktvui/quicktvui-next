import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import LongImage from './src/long-image-view.vue'

//element
import LongImageViewElement from './src/long-image-element'

export const QtLongImage = withInstall(LongImage)
export default QtLongImage

export * from './src/long-image-instance'
export * from './src/long-image-api'
export * from './src/long-image-props'
export * from './src/long-image-types'

export const QtLongImageViewElement = withInstallElement(LongImageViewElement)
