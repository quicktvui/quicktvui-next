import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import Lottie from './src/lottie'

//element
import LottieViewElement from './src/lottie-element'

export const QtLottie = withInstall(Lottie)
export default QtLottie

export * from './src/lottie-props'
export * from './src/lottie-instance'
export * from './src/lottie-types'
export * from './src/lottie-api'

export const QtLottieViewElement = withInstallElement(LottieViewElement)
