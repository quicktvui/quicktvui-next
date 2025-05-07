import { defineComponent, h, ref } from 'vue'
const Dialog = defineComponent({
  name: 'QtDialog',
  setup(props, context) {
    const viewRef = ref()
    return () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'Modal',
        {
          ref: viewRef,
        },
        children
      )
    }
  },
})

export default Dialog
