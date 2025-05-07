import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import PluginView from './src/plugin-view'

//element
import PluginViewElement from './src/plugin-view-element'

export const QtPluginView = withInstall(PluginView)
export default QtPluginView

export * from './src/plugin-view-props'
export * from './src/plugin-view-instance'
export * from './src/plugin-view-types'
export * from './src/plugin-view-api'

export const QtPluginViewElement = withInstallElement(PluginViewElement)
