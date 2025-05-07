import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import ItemStore from './src/item-store'

//element
import ItemStoreElement from './src/item-store-element'

export const QtItemStore = withInstall(ItemStore)
export default QtItemStore

export * from './src/item-store-props'
export * from './src/item-store-instance'
export * from './src/item-store-api'

export const QtItemStoreElement = withInstallElement(ItemStoreElement)
