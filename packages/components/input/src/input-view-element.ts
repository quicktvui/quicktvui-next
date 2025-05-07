const InputViewElement = {
  component: {
    name: 'EsAppInputViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        isFocused: boolean
        text: string
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onFocus':
          event.isFocused = nativeEventParams.isFocused
          break
        case 'onTextChange':
          event.text = nativeEventParams.text
          break
        default:
          break
      }
      return event
    },
  },
}

export default InputViewElement
