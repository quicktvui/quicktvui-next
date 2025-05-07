import { defineComponent, h, ref } from 'vue'
import { ESVersion, useES } from '@extscreen/es3-core'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { pluginViewProps } from './plugin-view-props'
import type { QTPluginViewEvent } from './plugin-view-types'

const PluginView = defineComponent({
  name: 'QtPluginView',
  props: pluginViewProps,
  emits: ['onPluginLoadSuccess', 'onPluginLoadError'],
  setup(props, context) {
    const viewRef = ref()
    const es = useES()
    const support = es.getESSDKVersionCode() >= ESVersion.ES_SDK_VERSION_29
    const element = support ? 'ESPluginViewComponent' : 'div'

    const dispatchFunction = (
      funName: string,
      params: Array<any>
    ): Promise<any> => {
      return new Promise((resolve) => {
        Native.callUIFunction(
          viewRef.value,
          funName,
          params,
          (ret: Record<string, unknown>) => {
            resolve(ret)
          }
        )
      })
    }
    const render = () => {
      return h(element, {
        ref: viewRef,
        onPluginLoadSuccess: (evt: QTPluginViewEvent) => {
          context.emit('onPluginLoadSuccess', {
            sid: evt.sid,
          })
        },
        onPluginLoadError: (evt: QTPluginViewEvent) => {
          context.emit('onPluginLoadError', {
            sid: evt.sid,
            errorCode: evt.errorCode,
            errorMessage: evt.errorMessage,
          })
        },
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      dispatchFunction,
    }
  },
  render() {
    return this.render()
  },
})

export default PluginView
