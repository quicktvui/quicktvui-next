import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import PlayMarkView from './src/play-mark-view'

//element
import PlayMarkViewElement from './src/play-mark-view-element'

export const QtPlayMarkView = withInstall(PlayMarkView)
export default QtPlayMarkView

export * from './src/play-mark-view-props'
export * from './src/play-mark-view-instance'
export * from './src/play-mark-view-api'

export const QtPlayMarkViewElement = withInstallElement(PlayMarkViewElement)
