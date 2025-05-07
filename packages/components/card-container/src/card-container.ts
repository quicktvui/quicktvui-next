import { defineComponent, h, ref } from 'vue'
import { ESVersion, useES } from '@extscreen/es3-core'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { cardContainerProps } from './card-container-props'

const CardContainer = defineComponent({
  name: 'QtCardContainer',
  props: cardContainerProps,
  emits: ['onCardBind', 'focus'],
  setup(props, context) {
    const viewRef = ref()
    const es = useES()

    function load(cardId: string) {
      Native.callUIFunction(viewRef.value, 'load', [cardId], () => {
        //
      })
    }

    function loadWithoutCache(value: string) {
      Native.callUIFunction(viewRef.value, 'loadWithoutCache', [value])
    }

    function reload() {
      Native.callUIFunction(viewRef.value, 'reload', [])
    }

    function autoRecycle(data: boolean) {
      Native.callUIFunction(viewRef.value, 'autoRecycle', [data])
    }

    function getLoadingStatus() {
      Native.callUIFunction(viewRef.value, 'getLoadingStatus', [])
    }

    function sendEvent2Vue(event: Record<string, any>) {
      Native.callUIFunction(viewRef.value, 'sendEvent2Vue', [event])
    }

    function reset() {
      Native.callUIFunction(viewRef.value, 'reset', [])
    }

    function recycle() {
      Native.callUIFunction(viewRef.value, 'recycle', [])
    }

    function removeCache() {
      Native.callUIFunction(viewRef.value, 'removeCache', [])
    }

    function resizeCacheSize(size: number) {
      Native.callUIFunction(viewRef.value, 'resizeCacheSize', [size])
    }

    function clearAllCache() {
      Native.callUIFunction(viewRef.value, 'clearAllCache', [])
    }

    const render = () => {
      let componentName = 'ESCardViewComponent'
      if (es.getESSDKVersionCode() < ESVersion.ES_SDK_VERSION_26) {
        componentName = 'div'
      }
      return h(componentName, {
        ref: viewRef,
        onCardBind: (evt: Record<string, any>) => {
          const eventName: string = evt.eventName
          const itemData: any = evt.itemData
          const position: number = evt.position
          context.emit('onCardBind', eventName, position, itemData)
        },
        onFocus: (evt: Record<string, any>) => {
          context.emit('focus', evt)
        },
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      load,
      loadWithoutCache,
      reload,
      autoRecycle,
      getLoadingStatus,
      sendEvent2Vue,
      reset,
      recycle,
      removeCache,
      resizeCacheSize,
      clearAllCache,
    }
  },
  render() {
    return this.render()
  },
})

export default CardContainer
