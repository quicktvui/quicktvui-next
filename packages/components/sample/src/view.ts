import { defineComponent, h, ref, watch } from 'vue'
import { viewProps } from './view-props'

const View = defineComponent({
  name: 'QtView',
  props: viewProps,
  emits: ['onTestEvent'],
  setup(props, context) {
    watch(
      () => props.test,
      (val) => {
        console.log('----QtTest----test--->>>', val)
      },
      { immediate: true, deep: true }
    )
    const viewRef = ref()

    function testMessage(msg: string): void {
      console.log('----QtTest----testMessage--->>>', viewRef.value)
      context.emit('onTestEvent', msg)
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'div',
        {
          ref: viewRef,
        },
        children
      )
    }

    return {
      viewRef,
      testMessage,
      render,
    }
  },
  render() {
    return this.render()
  },
})
export type ViewInstance = InstanceType<typeof View>

export default View
