import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import TabsView from './src/tabs-view'

//element
import TabsViewElement from './src/tabs-view-element'

export const QtTabsView = withInstall(TabsView)
export default QtTabsView

export * from './src/tabs-view-props'
export * from './src/tabs-view-instance'
export * from './src/tabs-view-types'
export * from './src/tabs-view-api'

export const QtTabsViewElement = withInstallElement(TabsViewElement)
