const TabsViewElement = {
  component: {
    name: 'TabsView',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        pageIndex: number
        itemCount: number
        useDiff: boolean
        eventName: string
        itemPosition: number
        isShowLoading: boolean
        data: any
        params: any
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onLoadPageData':
          event.pageIndex = nativeEventParams.pageIndex
          event.itemCount = nativeEventParams.itemCount
          event.data = nativeEventParams.data
          event.useDiff = nativeEventParams.useDiff
          break
        case 'onTabsEvent':
          event.eventName = nativeEventParams.eventName
          event.params = nativeEventParams.params
          break
        case 'onPageChanged':
          event.pageIndex = nativeEventParams.pageIndex
          event.data = nativeEventParams.data
          break
        case 'onScrollToStart':
          event.pageIndex = nativeEventParams.pageIndex
          break
        case 'onScrollToEnd':
          event.pageIndex = nativeEventParams.pageIndex
          break
        case 'onLoadMoreData':
          event.pageIndex = nativeEventParams.pageIndex
          event.itemCount = nativeEventParams.itemCount
          event.itemPosition = nativeEventParams.itemPosition
          break
        case 'onShowLoading':
          event.pageIndex = nativeEventParams.pageIndex
          event.isShowLoading = nativeEventParams.isShowLoading
          break
        default:
          break
      }
      return event
    },
  },
}

export default TabsViewElement
