import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { surfaceViewProps } from './surface-view-props'

const SurfaceView = defineComponent({
  name: 'QtSurfaceView',
  props: surfaceViewProps,
  setup(props, context) {
    const viewRef = ref()
    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ESSurfaceViewComponent',
        {
          ref: viewRef,
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
    }
  },
  render() {
    return this.render()
  },
})

export default SurfaceView
