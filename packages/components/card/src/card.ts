import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { cardProps } from './card-props'

const Card = defineComponent({
  name: 'QtCard',
  props: cardProps,
  setup(props, context) {
    const viewRef = ref()

    function load(cardId: string, useCache: boolean) {
      Native.callUIFunction(viewRef.value, 'load', [cardId, useCache])
    }

    function reload() {
      Native.callUIFunction(viewRef.value, 'reload', [])
    }

    function showDefaultBg(data: boolean) {
      Native.callUIFunction(viewRef.value, 'showDefaultBg', [data])
    }

    function requestCardFocus() {
      Native.callUIFunction(viewRef.value, 'requestCardFocus', [])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ESCardGroupView',
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
      load,
      reload,
      showDefaultBg,
      requestCardFocus,
    }
  },
  render() {
    return this.render()
  },
})

export default Card
