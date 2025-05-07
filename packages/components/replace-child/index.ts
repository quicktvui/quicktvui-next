import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import ReplaceChild from './src/replace-child'

//element
import ReplaceChildElement from './src/replace-child-element'

export const QtReplaceChild = withInstall(ReplaceChild)
export default QtReplaceChild

export * from './src/replace-child-props'
export * from './src/replace-child-instance'
export * from './src/replace-child-api'

export const QtReplaceChildElement = withInstallElement(ReplaceChildElement)
