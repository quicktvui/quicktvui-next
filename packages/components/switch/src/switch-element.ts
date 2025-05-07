const SwitchViewElement = {
  component: {
    name: 'EsSwitchComponent',
    processEventData(
      evtData: Record<string, any>,
      nativeEventParams: {
        isChecked: boolean
      }
    ) {
      const { handler: event, __evt: nativeEventName } = evtData
      switch (nativeEventName) {
        case 'onSwitchChange':
          event.isChecked = nativeEventParams.isChecked
          break
        default:
          break
      }
      return event
    },
  },
}

export default SwitchViewElement
