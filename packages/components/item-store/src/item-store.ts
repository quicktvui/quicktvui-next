import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { itemStoreProps } from './item-store-props'

const ItemStore = defineComponent({
  name: 'QtItemStore',
  props: itemStoreProps,
  setup(props, context) {
    const viewRef = ref()

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ItemStoreView',
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

export default ItemStore
