import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { itemViewProps } from './item-view-props'

const ItemView = defineComponent({
  name: 'QtItemView',
  props: itemViewProps,
  setup(props, context) {
    const viewRef = ref()

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ItemFrameComponent',
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

export default ItemView
