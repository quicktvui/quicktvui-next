import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { longImageProps } from './long-image-props'
import type { QTLongImageChangeEvent } from './long-image-types'

const LongImageView = defineComponent({
  name: 'LongImageView',
  props: longImageProps,
  emits: ['onLongImageChange'],
  setup(props, context) {
    const viewRef = ref()
    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ESLongImageViewComponent',
        {
          ref: viewRef,
          onLongImageChange: (evt: QTLongImageChangeEvent) => {
            context.emit('onLongImageChange', evt)
          },
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

export default LongImageView
