import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import FlexView from './src/flex-view'

//element
import FlexViewElement from './src/flex-view-element'

export const QtFlexView = withInstall(FlexView)
export default QtFlexView

export * from './src/flex-view-props'
export * from './src/flex-view-instance'
export * from './src/flex-view-api'

export const QtFlexViewElement = withInstallElement(FlexViewElement)
