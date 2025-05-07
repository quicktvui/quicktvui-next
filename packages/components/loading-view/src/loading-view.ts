import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { loadingViewProps } from './loading-view-props'

const LoadingView = defineComponent({
  name: 'LoadingView',
  props: loadingViewProps,
  setup(props, context) {
    const viewRef = ref()
    const render = () => {
      return h('LoadingViewComponent', {
        ...(props.color !== undefined && { color: props.color }),
        ref: viewRef,
      })
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

export default LoadingView
