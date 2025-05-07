const LargeListElement = {
  component: {
    name: 'LargeListComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        page: number
        tag: number
        position: number
        data: any
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onLoadPageData':
          event.page = nativeEventParams.page
          event.tag = nativeEventParams.tag
          break
        case 'onItemClick':
          event.position = nativeEventParams.position
          event.data = nativeEventParams.data
          break
        case 'onItemFocused':
          event.position = nativeEventParams.position
          break
        case 'onGroupItemFocused':
          event.position = nativeEventParams.position
          break
        default:
          break
      }
      return event
    },
  },
}

export default LargeListElement
