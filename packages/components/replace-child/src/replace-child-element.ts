const ReplaceChildElement = {
  component: {
    name: 'ReplaceChildView',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        childSID: string
        sid: string
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onChildChanged':
          event.childSID = nativeEventParams.childSID
          event.sid = nativeEventParams.sid
          break
        default:
          break
      }
      return event
    },
  },
}

export default ReplaceChildElement
