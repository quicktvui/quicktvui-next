import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import LargeList from './src/large-list'

//element
import LargeListElement from './src/large-list-element'

export const QtLargeList = withInstall(LargeList)
export default QtLargeList

export * from './src/large-list-props'
export * from './src/large-list-instance'
export * from './src/large-list-api'

export const QtLargeListElement = withInstallElement(LargeListElement)
