import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import ScrollView from './src/scroll-view'

//element
import ScrollViewElement from './src/scroll-view-element'

export const QtScrollView = withInstall(ScrollView)
export default QtScrollView

export * from './src/scroll-view-props'
export * from './src/scroll-view-instance'
export * from './src/scroll-view-api'

export const QtScrollViewElement = withInstallElement(ScrollViewElement)
