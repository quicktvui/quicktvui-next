<template>
  <rating-bar-view
    ref="viewRef"
    :class="ratingbarKls"
    :size="size"
    :icon="icon"
    :voidIcon="voidIcon"
    :starCount="starCount"
    :max="max"
    :starSize="starSize"
    :scoreNum="scoreNum"
    :starDistance="starDistance"
    :horizontalMargin="horizontalMargin"
    :verticalMargin="verticalMargin"
    :allowHalf="allowHalf"
  />
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { ratingbarProps } from './rating-bar-props'
import RatingBarView from './rating-bar'

export default defineComponent({
  name: 'QtRatingBar',
  components: { RatingBarView },
  props: ratingbarProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('ratingbar')

    function setStarMark(mark: string | number): void {
      viewRef.value.setStarMark(mark)
    }

    //style
    const ratingbarKls = computed(() => [ns.b(), ns.m(props.size)])

    return {
      viewRef,
      ratingbarKls,
      ...useBaseView(viewRef),
      setStarMark,
    }
  },
})
</script>
