---
title: X5webView
lang: zh-CN
---

# X5webView

:::demo ## 基础用法

component/x5-web-view/basic

:::

## API

### Events

| Name                    | Description             | Type                                                                |
| ----------------------- | ------------------------| ------------------------------------------------------------------- |
| onCanGoBack             | 是否可以后退               | ^[Function]`(can: boolean) => void`         |
| onCanGoForward          | 是否可以前进               | ^[Function]`(can: boolean) => void`                               |
| onCanGoBackOrForward    | 是否可以前进或后退          | ^[Function]`(can: boolean) => void`           |
| onPageStarted           | 页面加载开始               | ^[Function]`(url: string) => void`                               |
| onPageFinished          | 页面加载结束               | ^[Function]`(url: string) => void`                               |
| onLoadResource          | 页面加载资源               | ^[Function]`(url: string) => void`                               |
| onReceivedSslError      | 接收到Ssl错误              | ^[Function]`(event: QTX5WebViewEvent) => void`                |
| onReceivedError         | 接收到错误                 | ^[Function]`(errorCode: number, description: string, failingUrl: string) => void`               |
| shouldOverrideUrlLoading| 是否对UrlLoading进行拦截    | ^[Function]`(url: string) => void`               |
| onJs2Vue                | js向vue发送事件            | ^[Function]`(value: string) => void`               |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| loadUrl             |  [参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)         | ^[Function]`(url: string) => void`   |
| evaluateJavascript             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => Promise<string \| undefined \| null>`   |
| canGoBack             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| goBack             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| canGoForward             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| goForward             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| canGoBackOrForward             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(steps: number) => void`   |
| goBackOrForward             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(steps: number) => void`   |
| onResume             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| onPause             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| pauseTimers             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| resumeTimers             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`() => void`   |
| destroy             | [参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)          | ^[Function]`() => void`   |
| setJavaScriptEnabled             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setPluginState             | [参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)          | ^[Function]`(value: number) => void`   |
| setJavaScriptCanOpenWindowsAutomatically             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setUseWideViewPort             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setLoadWithOverviewMode             | [参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)          | ^[Function]`(value: boolean) => void`   |
| setSupportZoom             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setBuiltInZoomControls             | [参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)          | ^[Function]`(value: boolean) => void`   |
| setDisplayZoomControls             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setAllowFileAccess             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setDomStorageEnabled             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setDatabaseEnabled             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setAppCacheEnabled             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setAppCachePath             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setMediaPlaybackRequiresUserGesture             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setStandardFontFamily             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setFixedFontFamily             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setSansSerifFontFamily             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setSerifFontFamily             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setCursiveFontFamily             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setFantasyFontFamily             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setTextZoom             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setMinimumFontSize             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setDefaultFontSize             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setLayoutAlgorithm             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setLoadsImagesAutomatically             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setDefaultTextEncodingName             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setNeedInitialFocus             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setGeolocationEnabled             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setBlockNetworkLoads             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setSupportMultipleWindows             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setAppCacheMaxSize             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setRenderPriority             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setCacheMode             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setAllowContentAccess             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setEnableSmoothTransition             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setSaveFormData             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setSavePassword             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setTextSize             | [参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)          | ^[Function]`(value: number) => void`   |
| setDefaultZoom             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setLightTouchEnabled             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setMinimumLogicalFontSize             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setDefaultFixedFontSize             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setBlockNetworkImage             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setAllowUniversalAccessFromFileURLs             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setAllowFileAccessFromFileURLs             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setDatabasePath             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setGeolocationDatabasePath             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setUserAgentString             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: string) => void`   |
| setMixedContentMode             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setOffscreenPreRaster             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setSafeBrowsingEnabled             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: boolean) => void`   |
| setForceDark             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
| setDisabledActionModeMenuItems             |[参考WebView手册](https://developer.android.com/reference/android/webkit/WebView)           | ^[Function]`(value: number) => void`   |
