const RippleViewElement = {
  component: {
    name: 'RippleViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        isFocused: boolean
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onFocus':
          event.isFocused = nativeEventParams.isFocused
          break
        default:
          break
      }
      return event
    },
  },
}

export default RippleViewElement
