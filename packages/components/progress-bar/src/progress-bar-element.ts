const ProgressBarElement = {
  component: {
    name: 'TVProgressBarViewComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        isFocused: boolean
        fromUser: boolean
        leftProgress: number
        rightProgress: number
        progress: number
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onFocus':
          event.isFocused = nativeEventParams.isFocused
          break
        case 'onSeekBarChange':
          event.fromUser = nativeEventParams.fromUser
          event.progress = nativeEventParams.progress
          event.leftProgress = nativeEventParams.leftProgress
          event.rightProgress = nativeEventParams.rightProgress
          break
        default:
          break
      }
      return event
    },
  },
}

export default ProgressBarElement
