const CheckBoxGroupViewElement = {
  component: {
    name: 'CheckBoxGroupView',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        list: Array<any>
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onCheckedChanged':
          event.list = nativeEventParams.list
          //event.text = nativeEventParams.text
          break
        default:
          break
      }
      return event
    },
  },
}

export default CheckBoxGroupViewElement
