<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css'>
      <qt-seek-bar
        ref='seekBarRef'
        class='es-range-seek-bar-css'
        style='height: 500px'
        :enableFocusBorder='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='40'
        :gravity='2'
        :progressRadius='100'
        :progress='50'
        :indicatorShowMode='3'
        :indicatorWidth='100'
        :indicatorHeight='100'
        :indicatorBackgroundColor='0xFFFF0000'
        :indicatorRadius='100'
        :indicatorArrowSize='10'
        :indicatorTextColor='0xFFFF00FF'
        :indicatorTextSize='50'
        :indicatorMargin='40'
        :indicatorDrawable="{
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :focusable='true'
        focusScale='1.1' />
    </div>
  </div>
</template>

<script lang='ts'>

import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTISeekBar } from 'quicktvui'

export default defineComponent({
  name: '提示框（属性）',
  emits: [],
  setup() {
    const progressRef = ref(0)
    const seekBarRef = ref<QTISeekBar>()

    return {
      progressRef,
      seekBarRef
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
