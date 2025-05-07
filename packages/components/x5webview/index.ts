import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import X5webView from './src/x5-webview'

//element
import X5WebViewElement from './src/x5-webview-element'

export const QtX5webView = withInstall(X5webView)
export default QtX5webView

export * from './src/x5-webview-types'
export * from './src/x5-webview-instance'
export * from './src/x5-webview-api'

export const QtX5WebViewElement = withInstallElement(X5WebViewElement)
