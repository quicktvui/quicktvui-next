const CardContainerElement = {
  component: {
    name: 'ESCardViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        cardId: string
        result: number
        position: number
        eventName: string
        itemData: object
        isFocused: boolean
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onCardBind':
          event.eventName = nativeEventParams.eventName
          event.itemData = nativeEventParams.itemData
          event.position = nativeEventParams.position
          break
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
export default CardContainerElement
