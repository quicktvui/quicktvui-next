const IndicatorListViewElement = {
  component: {
    name: 'IndicatorListView',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        isFocused: boolean
        position: number
        index: number
        y: number
        item: any
        hasFocus: boolean
        name: string
        parentPosition: number
        pageIndex: number
        child: any
        isLastLine: any
        itemCount: number
        direction: string
        contentOffset: any
        state: any
        currentIndex: number
        currentList: any
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onItemClick':
          if (nativeEventParams) {
            event.position = nativeEventParams.position
            event.index = nativeEventParams.index
            event.item = nativeEventParams.item
            event.name = nativeEventParams.name
            event.parentPosition = nativeEventParams.parentPosition
          }
          break
        case 'onItemFocused':
          if (nativeEventParams) {
            event.position = nativeEventParams.position
            event.index = nativeEventParams.index
            event.hasFocus = nativeEventParams.hasFocus
            event.isFocused = nativeEventParams.hasFocus
            event.item = nativeEventParams.item
            event.name = nativeEventParams.name
            event.parentPosition = nativeEventParams.parentPosition
          }
          break
        case 'onBindItem':
          if (nativeEventParams) {
            event.position = nativeEventParams.position
            event.pageIndex = nativeEventParams.pageIndex
            event.name = nativeEventParams.name
            event.item = nativeEventParams.item
          }
          break
        case 'onAttachedToWindow':
          if (nativeEventParams) {
            event.position = nativeEventParams.position
            event.pageIndex = nativeEventParams.pageIndex
            event.name = nativeEventParams.name
            event.item = nativeEventParams.item
          }
          break
        case 'onDetachedFromWindow':
          if (nativeEventParams) {
            event.position = nativeEventParams.position
            event.pageIndex = nativeEventParams.pageIndex
            event.name = nativeEventParams.name
            event.item = nativeEventParams.item
          }
          break
        case 'onUnbindItem':
          if (nativeEventParams) {
            event.position = nativeEventParams.position
            event.name = nativeEventParams.name
          }
          break
        case 'onScroll':
          if (nativeEventParams) {
            event.offsetX = nativeEventParams.contentOffset.x
            event.offsetY = nativeEventParams.contentOffset.y
          }
          break
        case 'onScrollOffset':
          if (nativeEventParams) {
            event.offsetY = nativeEventParams.y
          }
          break
        case 'onScrollStateChanged':
          if (nativeEventParams) {
            event.offsetX = nativeEventParams.contentOffset.x
            event.offsetY = nativeEventParams.contentOffset.y
            event.oldState = nativeEventParams.state.oldState
            event.newState = nativeEventParams.state.newState
          }
          break
        case 'onChildFocus':
          if (nativeEventParams) {
            event.child = {
              index: nativeEventParams.child.index,
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
              position: nativeEventParams.child.position,
            }
            event.focused = {
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
            }
          }
          break
        case 'onChildSelect':
          if (nativeEventParams) {
            event.child = {
              index: nativeEventParams.child.index,
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
              position: nativeEventParams.child.position,
            }
          }
          break
        case 'onFocusSearchFailed':
          if (nativeEventParams) {
            event.child = {
              index: nativeEventParams.child.index,
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
              position: nativeEventParams.child.position,
            }
            event.focused = {
              id: nativeEventParams.child.id,
              name: nativeEventParams.child.name,
            }
            event.direction = nativeEventParams.direction
          }
          break
        case 'onLoadMore':
          if (nativeEventParams) {
            event.name = nativeEventParams.name
            event.isLastLine = nativeEventParams.isLastLine
            event.itemCount = nativeEventParams.itemCount
            event.position = nativeEventParams.position
          }
          break
        case 'onCurrentIndicatorPageIndex':
          if (nativeEventParams) {
            event.name = nativeEventParams.name
            event.currentIndex = nativeEventParams.currentIndex
            event.currentList = nativeEventParams.currentList
          }
          break
        default:
          break
      }
      return event
    },
  },
}

export default IndicatorListViewElement
