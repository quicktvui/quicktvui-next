import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { scrollViewProps } from './scroll-view-props'

const ScrollView = defineComponent({
  name: 'QtScrollView',
  props: scrollViewProps,
  setup(props, context) {
    const viewRef = ref()

    function scrollTo(x: number, y: number): void {
      Native.callUIFunction(viewRef.value, 'scrollTo', [x, y])
    }

    function scrollToWithOptions(x: number, y: number, duration: number): void {
      Native.callUIFunction(viewRef.value, 'scrollToWithOptions', [
        {
          x,
          y,
          duration,
        },
      ])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ScrollView',
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
      scrollTo,
      scrollToWithOptions,
    }
  },
  render() {
    return this.render()
  },
})

export default ScrollView
