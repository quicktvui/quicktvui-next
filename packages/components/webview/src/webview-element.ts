const WebViewElement = {
  component: {
    name: 'ESWebViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        errorCode: number
        description: string
        failingUrl: string
        js2VueValue: string
        url: string
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onPageStarted':
          event.url = nativeEventParams.url
          break
        case 'onPageFinished':
          event.url = nativeEventParams.url
          break
        case 'onLoadResource':
          event.url = nativeEventParams.url
          break
        case 'onReceivedError':
          event.errorCode = nativeEventParams.errorCode
          event.description = nativeEventParams.description
          event.failingUrl = nativeEventParams.failingUrl
          break
        case 'onShouldOverrideUrlLoading':
          event.url = nativeEventParams.url
          break
        case 'onJs2Vue':
          event.js2VueValue = nativeEventParams.js2VueValue
          break
        default:
      }
      return event
    },
  },
}
export default WebViewElement
