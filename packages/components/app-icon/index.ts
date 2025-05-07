import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import AppIcon from './src/app-icon'

//element
import AppIconElement from './src/app-icon-element'

export const QtAppIcon = withInstall(AppIcon)
export default QtAppIcon

export * from './src/app-icon-props'
export * from './src/app-icon-instance'
export * from './src/app-icon-api'

export const QtAppIconElement = withInstallElement(AppIconElement)
