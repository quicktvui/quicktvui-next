<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarRef"
        class="es-range-seek-bar-css"
        style="height: 500px"
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
  name: '提示框',
  setup() {
    const progressRef = ref(0)
    const seekBarRef = ref<QTISeekBar>()

    function onESCreate() {
      initESSeekBar()
    }

    function initESSeekBar() {
      seekBarRef.value?.setSeekBarMode(1)
      seekBarRef.value?.setProgressHeight(10)
      seekBarRef.value?.setGravity(2)
      seekBarRef.value?.setProgressRadius(100)
      seekBarRef.value?.setProgress(20)

      //
      seekBarRef.value?.setIndicatorShowMode(3)
      seekBarRef.value?.setIndicatorWidth(100)
      seekBarRef.value?.setIndicatorHeight(100)

      seekBarRef.value?.setIndicatorBackgroundColor('0xffff0000')
      seekBarRef.value?.setIndicatorRadius(20)

      seekBarRef.value?.setIndicatorArrowSize(10)
      seekBarRef.value?.setIndicatorTextColor('0xffff00ff')
      seekBarRef.value?.setIndicatorTextSize(50)
      seekBarRef.value?.setIndicatorMargin(20)

      //设置dr
      const indicatorDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 0,
        orientation: 6,
      }
      seekBarRef.value?.setIndicatorDrawable(indicatorDrawable)
      // seekBarRef.value?.setIndicatorUrl('https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/02/22/f241e7e7-f9d0-407a-9dc1-24c88a361594.jpg');
    }

    return {
      progressRef,
      seekBarRef,
      onESCreate,
      initESSeekBar,
    }
  },
})
</script>

<style></style>
