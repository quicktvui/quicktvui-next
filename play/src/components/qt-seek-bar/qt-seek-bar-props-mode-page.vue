<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css'>
      <qt-seek-bar
        ref='seekBarRef'
        class='es-range-seek-bar-css'
        @onSeekChanged='onSeekBarChange'
        @onFocusChanged='onFocusChange'
        :range='{min: 0, max: 100}'
        :seekBarMode='2'
        :progressHeight='30'
        :gravity='2'
        :rangeProgress='{leftProgress: leftProgress, rightProgress: rightProgress}'
        :progressRadius='100'
        :progressColor='0xFFFF0000'
        :progressDefaultColor='0xFFFF00FF'
        :leftThumbWidth='40'
        :leftThumbHeight='40'
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
        :rightThumbWidth='40'
        :rightThumbHeight='40'
        :rightThumbDrawable=" {
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :rightThumbInactivatedDrawable="{
          colors: ['#FF00CCCC', '#FFCC7700'],
          cornerRadius: 100,
          orientation: 6
        }"
        :indicatorShowMode='3'
        :indicatorWidth='100'
        :indicatorHeight='100'
        :indicatorBackgroundColor='0xFFFF0000'
        :indicatorRadius='100'
        :indicatorArrowSize='6'
        :indicatorTextColor='0xFFFF00FF'
        :indicatorTextSize='40'
        :indicatorMargin='20'
        style='height: 500px;'
        :focusable='true'
        focusScale='1.1' />
    </div>
  </div>
</template>

<script lang='ts'>

import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { QTISeekBar } from 'quicktvui'

const TAG = 'ESSeekBar'

export default defineComponent({
  name: '范围模式（属性）',
  emits: [],
  setup() {
    const leftProgress = ref<number>(0)
    const rightProgress = ref<number>(0)
    const seekBarRef = ref<QTISeekBar>()

    function onESCreate() {
      initESSeekBar()
    }

    function onSeekBarChange(progress: number) {

    }

    function onFocusChange(event) {
      let focused = event.isFocused
      seekBarRef.value?.setThumbActivate(focused)
    }

    function initESSeekBar() {
      setInterval(() => {
        leftProgress.value = leftProgress.value + 10
        rightProgress.value = 100 - leftProgress.value
      }, 1000)
    }

    return {
      leftProgress,
      rightProgress,
      seekBarRef,
      onESCreate,
      onSeekBarChange,
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
