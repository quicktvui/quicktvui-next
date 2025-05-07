<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css'>
      <qt-range-seek-bar
        ref='seekBarNum'
        class='es-range-seek-bar-css'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='30'
        :progressWidth='1000'
        :gravity='2'
        :progressRadius='100'
        :progress='28'
        :progressColor='0xFFFF0000'
        :progressDefaultColor='0xFFFF00FF'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbActivate='true'
        :thumbDrawable="{
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :tickMarkMode='0'
        :tickMarkTextArray="['0', '20', '40', '60', '80', '100']"
        :tickMarkTextMargin='40'
        :tickMarkTextSize='40'
        :tickMarkTextColor='0xFFFF0000'
        :tickMarkInRangeTextColor='0xFFFF00FF'
        :tickMarkGravity='1'
        :tickMarkLayoutGravity='1'
        focusScale='1.1' />
      <qt-range-seek-bar
        ref='seekBarOther'
        class='es-range-seek-bar-css'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='30'
        :progressWidth='1000'
        :gravity='2'
        :progressRadius='100'
        :progress='28'
        :progressColor='0xFFFF0000'
        :progressDefaultColor='0xFFFF00FF'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbActivate='true'
        :thumbDrawable="{
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :tickMarkMode='1'
        :tickMarkTextArray="['1', '2', '3', '4', '5']"
        focusScale='1.1' />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTISeekBar } from 'quicktvui'

export default defineComponent({
  name: '刻度',
  emits: [],
  setup() {

    const seekBarNum = ref<QTISeekBar>()
    const seekBarOther = ref<QTISeekBar>()

    return {
      seekBarNum,
      seekBarOther
    }
  }
})
</script>

<style>
.es-range-seek-bar-css {
  width: 1000px;
  height: 200px;
  background-color: darkgray;
  margin-bottom: 40px;
}

.es-vertical-range-seek-bar-css {
  width: 500px;
  height: 800px;
  background-color: darkgray;
}

</style>
