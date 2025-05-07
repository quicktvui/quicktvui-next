import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import RangeSeekBar from './src/range-seek-bar.vue'

//element
import RangeSeekBarElement from './src/range-seek-element'

export const QtRangeSeekBar = withInstall(RangeSeekBar)
export default QtRangeSeekBar

export * from './src/range-seek-props'
export * from './src/range-seek-instance'
export * from './src/range-seek-types'
export * from './src/range-seek-api'

export const QtRangeSeekBarElement = withInstallElement(RangeSeekBarElement)
