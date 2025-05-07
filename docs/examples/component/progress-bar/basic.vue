<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <qt-progress-bar
        ref="progressBarRef"
        :maxProgress="100"
        :progress="50"
        :cornerRadius="100"
        :secondaryProgress="80"
        :backgroundColor="backgroundColor"
        :color="color"
        class="es-progress-bar-css"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import type { QTIProgressBar } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '基础用法',
  setup() {
    const progressBarRef = ref<QTIProgressBar>()
    const backgroundColor = ref('#54D00C')
    const color = ref({
      startColor: '#FFD900',
      endColor: '#54D00C',
      type: 0,
      shape: 0,
      cornerRadii4: [20, 20, 20, 20],
    })

    function onESCreate() {
      progressBarRef.value?.setProgress(10)
      progressBarRef.value?.setMaxProgress(100)
      progressBarRef.value?.setProgressColor('0xffff0000')
      progressBarRef.value?.setProgressDefaultColor('0xff7415b1')
    }

    return {
      progressBarRef,
      backgroundColor,
      color,
      onESCreate,
    }
  },
})
</script>

<style>
.es-progress-bar-css {
  width: 800px;
  height: 20px;
  border-radius: 0;
}
</style>
