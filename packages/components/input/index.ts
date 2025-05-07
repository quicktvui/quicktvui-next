import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
// import InputView from './src/input-view'
import Input from './src/input.vue'

//element
import InputViewElement from './src/input-view-element'

// export const QtInputView = withInstall(InputView)
// export default QtInputView
export const QtInputView = withInstall(Input)
export default QtInputView

export * from './src/input-view-props'
export * from './src/input-view-instance'
export * from './src/input-view-types'
export * from './src/input-view-api'

export const QtInputViewElement = withInstallElement(InputViewElement)
