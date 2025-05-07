import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import Text from './src/text'

//element
import TextViewElement from './src/text-element'

export const QtText = withInstall(Text)
export default QtText

export * from './src/text-props'
export * from './src/text-instance'
export * from './src/text-types'
export * from './src/text-api'

export const QtTextViewElement = withInstallElement(TextViewElement)
