import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import RadioGroupView from './src/radio-group'
import Radiobutton from './src/radiobutton.vue'

//element
import RadioGroupViewElement from './src/radio-group-element'
import RadioButtonViewElement from './src/radio-button-element'

export const QtRadioGroup = withInstall(RadioGroupView)
export const QtRadioButton = withInstall(Radiobutton)

export * from './src/radio-instance'
export * from './src/radio-group-api'
export * from './src/radio-group-types'
export * from './src/radio-button-props'

export const QtRadioGroupViewElement = withInstallElement(RadioGroupViewElement)
export const QtRadioButtonViewElement = withInstallElement(
  RadioButtonViewElement
)
