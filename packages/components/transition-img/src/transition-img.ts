import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { transitionImgProps } from './transition-img-props'

const TransitionImg = defineComponent({
  name: 'QtTransitionImg',
  props: transitionImgProps,
  setup(props, context) {
    const viewRef = ref()

    function setNextColor(color: string | number): void {
      Native.callUIFunction(viewRef.value, 'setNextColor', [color], () => {
        //
      })
    }

    function setNextImage(url: string): void {
      Native.callUIFunction(viewRef.value, 'setNextImage', [url], () => {
        //
      })
    }

    function setTransitionTime(duration: number): void {
      Native.callUIFunction(
        viewRef.value,
        'setTransitionTime',
        [duration],
        () => {
          //
        }
      )
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'TransitionImageComponent',
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
      setNextImage,
      setNextColor,
      setTransitionTime,
    }
  },
  render() {
    return this.render()
  },
})

export default TransitionImg
