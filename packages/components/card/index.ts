import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import Card from './src/card'

//element
import CardElement from './src/card-element'

export const QtCard = withInstall(Card)
export default QtCard

export * from './src/card-props'
export * from './src/card-instance'
export * from './src/card-api'

export const QtCardElement = withInstallElement(CardElement)
