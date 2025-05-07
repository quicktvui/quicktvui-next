import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import type { QTRadioGroupEvent } from './radio-group-types'

const RadioGroupView = defineComponent({
  name: 'QtRadioGroup',
  emits: ['onCheckedChanged'],
  setup(props, context) {
    const viewRef = ref()

    function testApi(): void {
      Native.callUIFunction(viewRef.value, 'testApi', [])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'RadioGroupView',
        {
          ref: viewRef,
          onCheckedChanged: (evt: QTRadioGroupEvent) => {
            context.emit('onCheckedChanged', evt.id, evt.text)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      testApi,
    }
  },
  render() {
    return this.render()
  },
})

export default RadioGroupView
