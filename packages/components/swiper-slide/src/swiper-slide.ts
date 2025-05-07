import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { swiperSlideProps } from './swiper-slide-props'

const SwiperSlide = defineComponent({
  name: 'QtSwiperSlide',
  props: swiperSlideProps,
  setup(props, context) {
    const viewRef = ref()

    function doAnimation(
      fromX: string,
      toX: string,
      fromY: string,
      toY: string,
      fromAlpha: string,
      toAlpha: string,
      duration = 1000
    ) {
      Native.callUIFunction(
        viewRef.value,
        'doAnimation',
        [fromX, toX, fromY, toY, fromAlpha, toAlpha, duration],
        () => {
          //
        }
      )
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ESSwiperSlideViewComponent',
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
      doAnimation,
    }
  },
  render() {
    return this.render()
  },
})

export default SwiperSlide
