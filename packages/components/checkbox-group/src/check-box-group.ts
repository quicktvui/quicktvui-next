import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import type { QTCheckboxGroupEvent } from './check-group-types'

const CheckBoxGroupView = defineComponent({
  name: 'QtCheckboxGroup',
  emits: ['onCheckedChanged'],
  setup(props, context) {
    const viewRef = ref()

    function testApi(): void {
      Native.callUIFunction(viewRef.value, 'testApi', [])
    }

    function selectAll(): void {
      Native.callUIFunction(viewRef.value, 'selectAll', [])
    }

    function cancelAll(): void {
      Native.callUIFunction(viewRef.value, 'cancelAll', [])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'CheckBoxGroupView',
        {
          ref: viewRef,
          onCheckedChanged: (evt: QTCheckboxGroupEvent) => {
            context.emit('onCheckedChanged', evt.list)
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
      selectAll,
      cancelAll,
    }
  },
  render() {
    return this.render()
  },
})

export default CheckBoxGroupView
