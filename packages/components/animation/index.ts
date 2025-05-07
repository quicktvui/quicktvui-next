import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import Animation from './src/animation'

//element
import AnimationElement from './src/animation-element'

export const QtAnimation = withInstall(Animation)
export default QtAnimation

export * from './src/animation-types'
export * from './src/animation-instance'
export * from './src/animation-api'

export const QtAnimationElement = withInstallElement(AnimationElement)
