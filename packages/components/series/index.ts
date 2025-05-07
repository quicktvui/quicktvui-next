import { withInstall, withInstallElement } from '@quicktvui/utils'

//QtMediaSeries
import MediaSeries from './src/series.vue'

//SelectSeries
import SelectSeries from './src/component/select-series'

//SelectSeriesElement
import SelectSeriesElement from './src/component/select-series-element'

export const QtMediaSeries = withInstall(MediaSeries)
export default QtMediaSeries

export * from './src/series-props'
export * from './src/series-instance'
export * from './src/series-types'
export * from './src/series-api'

export const QtSelectSeries = withInstall(SelectSeries)
export * from './src/component/select-series-props'
export * from './src/component/select-series-instance'
export * from './src/component/select-series-types'

export const QtSelectSeriesElement = withInstallElement(SelectSeriesElement)
