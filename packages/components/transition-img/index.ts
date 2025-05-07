import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import TransitionImg from './src/transition-img'

//element
import TransitionImgElement from './src/transition-img-element'

export const QtTransitionImg = withInstall(TransitionImg)
export default QtTransitionImg

export * from './src/transition-img-props'
export * from './src/transition-img-instance'
export * from './src/transition-img-api'

export const QtTransitionImgElement = withInstallElement(TransitionImgElement)
