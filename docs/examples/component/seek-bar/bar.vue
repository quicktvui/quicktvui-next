<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarRef"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import type { QTISeekBar } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '进度条',
  setup() {
    const seekBarRef = ref<QTISeekBar>()

    function onESCreate() {
      initESSeekBar()
    }

    function initESSeekBar() {
      seekBarRef.value?.setSeekBarMode(1)
      seekBarRef.value?.setProgressHeight(40)
      seekBarRef.value?.setGravity(2)
      seekBarRef.value?.setProgressRadius(10)
      seekBarRef.value?.setProgress(40)
    }

    return {
      seekBarRef,
      onESCreate,
      initESSeekBar,
    }
  },
})
</script>

<style></style>
