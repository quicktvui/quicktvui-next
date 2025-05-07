import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import Switch from './src/switch.vue'

//element
import SwitchViewElement from './src/switch-element'

export const QtSwitch = withInstall(Switch)
export default QtSwitch

export * from './src/switch-instance'
export * from './src/switch-api'
export * from './src/switch-props'
export * from './src/switch-types'

export const QtSwitchViewElement = withInstallElement(SwitchViewElement)
