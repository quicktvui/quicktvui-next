import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import SeekBar from './src/seek-bar.vue'

//element
import SeekBarElement from './src/seek-bar-element'

export const QtSeekBar = withInstall(SeekBar)
export default QtSeekBar

export * from './src/seek-bar-props'
export * from './src/seek-bar-instance'
export * from './src/seek-bar-types'
export * from './src/seek-bar-api'

export const QtSeekBarElement = withInstallElement(SeekBarElement)
