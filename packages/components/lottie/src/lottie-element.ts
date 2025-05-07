const LottieViewElement = {
  component: {
    name: 'ESLottieViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        value: any
        eventName: any
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onAnimationEvent':
          event.eventName = nativeEventParams.eventName
          event.value = nativeEventParams.value
          break
        default:
          break
      }
      return event
    },
  },
}
export default LottieViewElement
