import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { flexViewProps } from './flex-view-props'

const FlexView = defineComponent({
  name: 'QtFlexView',
  props: flexViewProps,
  setup(props, context) {
    const viewRef = ref()
    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'FastFlexView',
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

export default FlexView
