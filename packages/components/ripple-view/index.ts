import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import RippleView from './src/ripple-view'

//element
import RippleViewElement from './src/ripple-view-element'

export const QtRippleView = withInstall(RippleView)
export default QtRippleView

export * from './src/ripple-view-props'
export * from './src/ripple-view-instance'
export * from './src/ripple-view-api'
export const QtRippleViewElement = withInstallElement(RippleViewElement)
