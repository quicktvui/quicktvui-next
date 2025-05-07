import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { playMarkViewProps } from './play-mark-view-props'

const PlayMarkView = defineComponent({
  name: 'QtPlayMarkView',
  props: playMarkViewProps,
  setup(props, context) {
    const viewRef = ref()
    const render = () => {
      return h('ESPlayMarkViewComponent', {
        ref: viewRef,
      })
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

export default PlayMarkView
