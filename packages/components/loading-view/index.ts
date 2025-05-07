import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import LoadingView from './src/loading-view.vue'

//element
import LoadingViewElement from './src/loading-view-element'

export const QtLoadingView = withInstall(LoadingView)
export default QtLoadingView

export * from './src/loading-view-props'
export * from './src/loading-view-instance'
export * from './src/loading-view-api'

export const QtLoadingViewElement = withInstallElement(LoadingViewElement)
