import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import IndicatorListView from './src/indicator-list-view'

//element
import IndicatorListViewElement from './src/indicator-list-view-element'

export const QtIndicatorListView = withInstall(IndicatorListView)
export default QtIndicatorListView

export * from './src/indicator-list-view-props'
export * from './src/indicator-list-view-instance'
export * from './src/indicator-list-view-api'
export * from './src/indicator-list-view-types'

export const QtIndicatorListViewElement = withInstallElement(
  IndicatorListViewElement
)
