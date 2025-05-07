<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarRef"
        class="es-range-seek-bar-css"
        style="height: 500px"
        :focusable="true"
        focusScale="1.1"
        @seek-change="onSeekBarChange"
        @focus="onFocusChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import type { QTISeekBar } from '@quicktvui/quicktvui3'

const TAG = 'ESSeekBar'

export default defineComponent({
  name: '范围模式',
  setup() {
    const log = useESLog()
    const progressRef = ref(0)
    const seekBarRef = ref<QTISeekBar>()

    function onESCreate() {
      initESSeekBar()
    }

    function onSeekBarChange(event) {
      const progress = event.progress
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, `--------onSeekBarChange------>>>>>${progress}`)
      }
    }

    function onFocusChange(event) {
      const focused = event.isFocused
      seekBarRef.value?.setThumbActivate(focused)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, `--------onFocusChange------>>>>>${focused}`)
      }
    }

    function initESSeekBar() {
      seekBarRef.value?.setSeekBarMode(2)
      setInterval(() => {
        progressRef.value = progressRef.value + 10
        seekBarRef.value?.setRangeProgress(
          progressRef.value,
          100 - progressRef.value
        )
      }, 1000)
      seekBarRef.value?.setProgressHeight(30)
      seekBarRef.value?.setRange(10, 100, 0)
      seekBarRef.value?.setGravity(2)
      seekBarRef.value?.setProgressRadius(100)
      //
      seekBarRef.value?.setRangeProgress(10, 100)
      //
      seekBarRef.value?.setProgressColor('0xffff0000')
      seekBarRef.value?.setProgressDefaultColor('0xffff00ff')

      seekBarRef.value?.setLeftThumbWidth(40)
      seekBarRef.value?.setLeftThumbHeight(40)
      //
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarRef.value?.setThumbDrawable(thumbDrawable)

      const thumbInactivatedDrawable = {
        colors: ['#ffff0000', '#ffff00ff'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarRef.value?.setThumbInactivatedDrawable(thumbInactivatedDrawable)

      seekBarRef.value?.setRightThumbWidth(40)
      seekBarRef.value?.setRightThumbHeight(40)
      const rightThumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarRef.value?.setRightThumbDrawable(rightThumbDrawable)
      const rightThumbInactivatedDrawable = {
        colors: ['#ff00cccc', '#ffcc7700'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarRef.value?.setRightThumbInactivatedDrawable(
        rightThumbInactivatedDrawable
      )

      //
      seekBarRef.value?.setIndicatorShowMode(3)
      seekBarRef.value?.setIndicatorWidth(100)
      seekBarRef.value?.setIndicatorHeight(100)
      seekBarRef.value?.setIndicatorBackgroundColor('0xffff0000')
      seekBarRef.value?.setIndicatorRadius(100)
      seekBarRef.value?.setIndicatorArrowSize(6)
      seekBarRef.value?.setIndicatorTextColor('0xffff00ff')
      seekBarRef.value?.setIndicatorTextSize(40)
      seekBarRef.value?.setIndicatorMargin(20)
    }

    return {
      progressRef,
      seekBarRef,
      onESCreate,
      onSeekBarChange,
      onFocusChange,
      initESSeekBar,
    }
  },
})
</script>

<style></style>
