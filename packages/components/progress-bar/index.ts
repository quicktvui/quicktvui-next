import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import ProgressBar from './src/progress-bar.vue'

//element
import ProgressBarElement from './src/progress-bar-element'

export const QtProgressBar = withInstall(ProgressBar)
export default QtProgressBar

export * from './src/progress-bar-props'
export * from './src/progress-bar-instance'
export * from './src/progress-bar-types'
export * from './src/progress-bar-api'

export const QtProgressBarElement = withInstallElement(ProgressBarElement)
