<template>
  <long-image-view ref="viewRef" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { longImageProps } from './long-image-props'
import LongImageView from './long-image-view.vue'

export default defineComponent({
  name: 'QtLongImage',
  components: { LongImageView },
  props: longImageProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()

    return {
      viewRef,
      ...useBaseView(viewRef),
    }
  },
})
</script>
