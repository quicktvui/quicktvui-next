import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import Dialog from './src/dialog'

//element
import DialogElement from './src/dialog-element'

export const QtDialog = withInstall(Dialog)
export default QtDialog

export * from './src/dialog-instance'

export const QtDialogElement = withInstallElement(DialogElement)
