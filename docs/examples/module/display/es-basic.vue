<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'尺寸变形比例：' + displayScale" />
      <s-text-view :text="'屏幕适配的尺寸：' + displaySize" />
      <s-text-view :text="'屏幕宽度：' + screenWidth" />
      <s-text-view :text="'屏幕高度：' + screenHeight" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESDisplay } from '@extscreen/es3-core'

export default defineComponent({
  name: '显示模块',
  setup() {
    const display = useESDisplay()
    const displayScale = ref<number>(0)
    const displaySize = ref<number>(0)
    const screenWidth = ref<number>(0)
    const screenHeight = ref<number>(0)

    const onESCreate = () => {
      displayScale.value = display.getDisplayScale()
      displaySize.value = display.getDisplaySize(100)
      screenWidth.value = display.getScreenWidth()
      screenHeight.value = display.getScreenHeight()
    }

    return {
      onESCreate,
      displayScale,
      displaySize,
      screenWidth,
      screenHeight,
    }
  },
})
</script>
<style></style>
