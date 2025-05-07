import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import SwiftList from './src/swift-list'

//element
import SwiftListElement from './src/swift-list-element'

export const QtSwiftList = withInstall(SwiftList)
export default QtSwiftList

export * from './src/swift-list-props'
export * from './src/swift-list-instance'
export * from './src/swift-list-api'

export const QtSwiftListElement = withInstallElement(SwiftListElement)
