import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { replaceChildProps } from './replace-child-props'

const ReplaceChild = defineComponent({
  name: 'QtReplaceChild',
  props: replaceChildProps,
  emits: ['childChanged'],
  setup(props, context) {
    const viewRef = ref()

    function setChildSID(sid: string): void {
      Native.callUIFunction(viewRef.value, 'setChildSID', [sid])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ReplaceChildView',
        {
          ref: viewRef,
          onChildChanged: (evt: Record<string, any>) => {
            context.emit('childChanged', evt)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      setChildSID,
    }
  },
  render() {
    return this.render()
  },
})

export default ReplaceChild
