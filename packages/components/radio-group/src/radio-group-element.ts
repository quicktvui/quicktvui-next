const RadioGroupViewElement = {
  component: {
    name: 'RadioGroupView',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        id: number
        text: string
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onCheckedChanged':
          event.id = nativeEventParams.id
          event.text = nativeEventParams.text
          break
        default:
          break
      }
      return event
    },
  },
}

export default RadioGroupViewElement
