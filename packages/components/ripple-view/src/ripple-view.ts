import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { rippleViewProps } from './ripple-view-props'

const RippleView = defineComponent({
  name: 'QtRippleView',
  props: rippleViewProps,
  emits: ['focus'],
  setup(props, context) {
    const viewRef = ref()

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'RippleViewComponent',
        {
          ref: viewRef,
          onFocusChange: (evt: Record<string, any>) => {
            context.emit('focus', evt)
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

export default RippleView
