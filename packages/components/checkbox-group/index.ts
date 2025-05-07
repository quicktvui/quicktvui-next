import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import CheckBoxGroupView from './src/check-box-group'
import Checkbox from './src/checkbox.vue'

//element
import CheckBoxGroupViewElement from './src/check-box-group-element'
import CheckBoxViewElement from './src/check-box-element'

export const QtCheckboxGroup = withInstall(CheckBoxGroupView)
export const QtCheckbox = withInstall(Checkbox)

export * from './src/check-box-instance'
export * from './src/check-group-api'
export * from './src/check-group-types'
export * from './src/check-box-props'

export const QtCheckBoxGroupViewElement = withInstallElement(
  CheckBoxGroupViewElement
)
export const QtCheckBoxViewElement = withInstallElement(CheckBoxViewElement)
