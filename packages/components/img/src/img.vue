<template>
  <img
    ref="viewRef"
    :src="src"
    :resizeMode="resizeMode"
    :backgroundColor="backgroundColor"
    :loadDelay="loadDelay"
    :loadImgDelay="loadImgDelay"
    :postDelay="postDelay"
    :enableFocusBorder="enableFocusBorder"
  />
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { imgProps } from './img-props'
import type { QTImageResizeMode } from './img-types'

export default defineComponent({
  name: 'QtImage',
  props: imgProps,
  emits: [],
  setup() {
    const viewRef = ref()

    function setSrc(url: string): void {
      Native.callUIFunction(viewRef.value, 'setSrc', [url])
    }

    function setResizeMode(mode: QTImageResizeMode): void {
      Native.callUIFunction(viewRef.value, 'resizeMode', [mode])
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      setSrc,
      setResizeMode,
    }
  },
})
</script>
