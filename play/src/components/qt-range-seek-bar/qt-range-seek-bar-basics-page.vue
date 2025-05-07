<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css'>
      <s-text-button text='按钮' />
      <qt-range-seek-bar
        ref='seekBarRef'
        class='es-range-seek-bar-css'
        :seekBarMode='1'
        :progress='progressRef'
        :progressHeight='30'
        :range='{min: 0, max: 100}'
        :gravity='2'
        :progressRadius='100'
        :progressColor='0xFF0F0000'
        :progressDefaultColor='0xFFCF00FF'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbDrawable="{
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :thumbInactivatedDrawable="{
          colors: ['#FFFF0000', '#FFFF00FF'],
          cornerRadius: 100,
          orientation: 6
        }"
        :indicatorShowMode='3'
        :indicatorWidth='100'
        :indicatorHeight='100'
        :indicatorBackgroundColor='0xFCCF0000'
        :indicatorRadius='100'
        :indicatorArrowSize='6'
        :indicatorTextColor='0xFFFFFFFF'
        :indicatorTextSize='40'
        :indicatorMargin='20'
        @onSeekChanged='onSeekChanged'
        @onFocusChanged='onFocusChange'
        style='height: 500px;'
        :focusable='true'
        focusScale='1.1' />
    </div>
  </div>
</template>

<script lang='ts'>

import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { QTISeekBar } from 'quicktvui'

const TAG = 'ESSeekBar'

export default defineComponent({
  name: '单向模式',
  emits: [],
  setup() {

    const log = useESLog()

    const progressRef = ref<number>(0)
    const seekBarRef = ref<QTISeekBar>()

    function onESCreate() {
      initESSeekBar()
    }

    function onSeekChanged(progress: number): void {

    }

    function onFocusChange(event) {
      let focused = event.isFocused
      seekBarRef.value?.setThumbActivate(focused)
    }

    function initESSeekBar() {
      setInterval(() => {
        progressRef.value = progressRef.value + 10
      }, 1000)
    }

    return {
      progressRef,
      seekBarRef,
      onESCreate,
      onSeekChanged,
      onFocusChange,
      initESSeekBar
    }
  }
})

</script>

<style>
.es-range-seek-bar-css {
  width: 1000px;
  height: 200px;
  background-color: darkgray;
}

.es-vertical-range-seek-bar-css {
  width: 500px;
  height: 800px;
  background-color: darkgray;
}

</style>
