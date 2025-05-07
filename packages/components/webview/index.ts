import { withInstall, withInstallElement } from '@quicktvui/utils'
//component
import WebView from './src/webview'

//element
import WebViewElement from './src/webview-element'

export const QtWebView = withInstall(WebView)
export default QtWebView

export * from './src/webview-instance'
export * from './src/webview-types'
export * from './src/webview-api'

export const QtWebViewElement = withInstallElement(WebViewElement)
