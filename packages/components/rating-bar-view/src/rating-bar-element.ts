const RadioGroupViewElement = {
  component: {
    name: 'ESRatingBarViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        scoreNum: string
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onScoreChanged':
          event.scoreNum = nativeEventParams.scoreNum
          break
        default:
          break
      }
      return event
    },
  },
}

export default RadioGroupViewElement
