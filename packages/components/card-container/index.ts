import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import CardContainer from './src/card-container'

//element
import CardContainerElement from './src/card-container-element'

export const QtCardContainer = withInstall(CardContainer)
export default QtCardContainer

export * from './src/card-container-props'
export * from './src/card-container-instance'
export * from './src/card-container-api'

export const QtCardContainerElement = withInstallElement(CardContainerElement)
