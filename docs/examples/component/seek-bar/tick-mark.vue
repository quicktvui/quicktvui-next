<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarNum"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"
      />
      <qt-seek-bar
        ref="seekBarOther"
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
  name: '刻度',
  setup() {
    const seekBarNum = ref<QTISeekBar>()
    const seekBarOther = ref<QTISeekBar>()

    function onESCreate() {
      initNumberESSeekBar()
      initOtherESSeekBar()
    }

    function initNumberESSeekBar() {
      seekBarNum.value?.setSeekBarMode(1)
      seekBarNum.value?.setProgressHeight(30)
      seekBarNum.value?.setProgressWidth(1000)
      seekBarNum.value?.setGravity(2)
      seekBarNum.value?.setProgressRadius(100)
      seekBarNum.value?.setProgress(28)

      //
      seekBarNum.value?.setProgressColor('0xffff0000')
      seekBarNum.value?.setProgressDefaultColor('0xffff00ff')

      //----------------------------按钮------------------------------------
      seekBarNum.value?.setThumbWidth(40)
      seekBarNum.value?.setThumbHeight(40)
      seekBarNum.value?.setThumbActivate(true)
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarNum.value?.setThumbDrawable(thumbDrawable)

      //---------------------------刻度-------------------------------
      seekBarNum.value?.setTickMarkMode(0)
      seekBarNum.value?.setTickMarkTextArray([
        '0',
        '20',
        '40',
        '60',
        '80',
        '100',
      ])
      seekBarNum.value?.setTickMarkTextMargin(40)
      seekBarNum.value?.setTickMarkTextSize(40)
      seekBarNum.value?.setTickMarkTextColor('0xffff0000')
      seekBarNum.value?.setTickMarkInRangeTextColor('0xffff00ff')
      seekBarNum.value?.setTickMarkGravity(1)
      seekBarNum.value?.setTickMarkLayoutGravity(1)
    }

    function initOtherESSeekBar() {
      seekBarOther.value?.setSeekBarMode(1)
      seekBarOther.value?.setProgressHeight(30)
      seekBarOther.value?.setProgressWidth(1000)
      seekBarOther.value?.setGravity(2)
      seekBarOther.value?.setProgressRadius(100)
      seekBarOther.value?.setProgress(20)

      //
      seekBarOther.value?.setProgressColor('0xffff0000')
      seekBarOther.value?.setProgressDefaultColor('0xffff00ff')

      //----------------------------按钮------------------------------------
      seekBarOther.value?.setThumbWidth(40)
      seekBarOther.value?.setThumbHeight(40)
      seekBarOther.value?.setThumbActivate(true)
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarOther.value?.setThumbDrawable(thumbDrawable)
      //---------------------------刻度-------------------------------
      seekBarOther.value?.setTickMarkMode(1)
      seekBarOther.value?.setTickMarkTextArray(['1', '2', '3', '4', '5'])
    }

    return {
      seekBarNum,
      seekBarOther,
      onESCreate,
      initNumberESSeekBar,
      initOtherESSeekBar,
    }
  },
})
</script>

<style></style>
