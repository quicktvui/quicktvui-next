import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { ratingbarProps } from './rating-bar-props'
import type { QTRatingBarEvent } from './rating-bar-types'

const RatingBarView = defineComponent({
  name: 'RatingBarView',
  props: ratingbarProps,
  emits: ['onScoreChanged'],
  setup(props, context) {
    const viewRef = ref()

    function setStarMark(mark: string | number): void {
      Native.callUIFunction(viewRef.value, 'setStarMark', [mark])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'ESRatingBarViewComponent',
        {
          ref: viewRef,
          ...(props.size !== undefined && { size: props.size }),
          ...(props.icon !== undefined && { icon: props.icon }),
          ...(props.voidIcon !== undefined && { voidIcon: props.voidIcon }),
          ...(props.starCount !== undefined && { starCount: props.starCount }),
          ...(props.max !== undefined && {
            max: props.max,
          }),
          ...(props.starSize !== undefined && {
            starSize: props.starSize,
          }),
          ...(props.scoreNum !== undefined && {
            scoreNum: props.scoreNum,
          }),
          ...(props.starDistance !== undefined && {
            starDistance: props.starDistance,
          }),
          ...(props.horizontalMargin !== undefined && {
            horizontalMargin: props.horizontalMargin,
          }),
          ...(props.verticalMargin !== undefined && {
            verticalMargin: props.verticalMargin,
          }),
          ...(props.allowHalf !== undefined && {
            allowHalf: props.allowHalf,
          }),
          onScoreChanged: (evt: QTRatingBarEvent) => {
            context.emit('onScoreChanged', evt.scoreNum)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      setStarMark,
    }
  },
  render() {
    return this.render()
  },
})

export default RatingBarView
