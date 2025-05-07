import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import SurfaceView from './src/surface-view'

//element
import SurfaceViewElement from './src/surface-view-element'

export const QtSurfaceView = withInstall(SurfaceView)
export default QtSurfaceView

export * from './src/surface-view-props'
export * from './src/surface-view-instance'
export * from './src/surface-view-api'

export const QtSurfaceViewElement = withInstallElement(SurfaceViewElement)
