import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import ItemView from './src/item-view'

//element
import ItemViewElement from './src/item-view-element'

export const QtItemView = withInstall(ItemView)
export default QtItemView

export * from './src/item-view-props'
export * from './src/item-view-instance'
export * from './src/item-view-api'

export const QtItemViewElement = withInstallElement(ItemViewElement)
