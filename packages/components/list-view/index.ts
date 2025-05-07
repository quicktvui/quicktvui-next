import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import ListView from './src/list-view'

//element
import ListViewElement from './src/list-view-element'

export const QtListView = withInstall(ListView)
export default QtListView

export * from './src/list-view-props'
export * from './src/list-view-instance'
export * from './src/list-view-types'
export * from './src/list-view-api'

export const QtListViewElement = withInstallElement(ListViewElement)
