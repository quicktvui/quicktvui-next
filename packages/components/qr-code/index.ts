import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import QrCode from './src/qr-code'

//element
import QrCodeElement from './src/qr-code-element'

export const QtQrCode = withInstall(QrCode)
export default QtQrCode

export * from './src/qr-code-props'
export * from './src/qr-code-instance'
export * from './src/qr-code-api'

export const QtQrCodeElement = withInstallElement(QrCodeElement)
