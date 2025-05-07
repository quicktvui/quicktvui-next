const LongImageViewElement = {
  component: {
    name: 'ESLongImageViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        isReady: boolean
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onLongImageChange':
          event.isReady = nativeEventParams.isReady
          break
        default:
          break
      }
      return event
    },
  },
}

export default LongImageViewElement
