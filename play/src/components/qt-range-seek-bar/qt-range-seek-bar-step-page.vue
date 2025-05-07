<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css'>
      <qt-range-seek-bar
        ref='seekBar'
        class='es-range-seek-bar-css'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='20'
        :progressWidth='1000'
        :gravity='2'
        :progressRadius='10'
        :progress='40'
        :progressColor='0xFFFF2222'
        :progressDefaultColor='0xFFFF00FF'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbActivate='true'
        :thumbDrawable=" {
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :steps='4'
        :stepsWidth='40'
        :stepsHeight='40'
        :stepsAutoBonding='true'
        :stepsRadius='100'
        :stepsDrawable="[
          {
            colors: ['#FFFF4054', '#FFFF0000'],
            cornerRadius: 10,
            orientation: 6
          },
          {
            colors: ['#FFFF6347', '#FFFF0000'],
            cornerRadius: 10,
            orientation: 6
          },
          {
            colors: ['#FFFFAFAD', '#FFFF0000'],
            cornerRadius: 0,
            orientation: 6
          },
          {
            colors: ['#FFFF8247', '#FFFF0000'],
            cornerRadius: 10,
            orientation: 6
          },
          {
            colors: ['#FFFF00FF', '#FFFF0000'],
            cornerRadius: 10,
            orientation: 6
          }
        ]"
        focusScale='1.1' />
      <qt-range-seek-bar
        ref='seekBarUrl'
        class='es-range-seek-bar-css'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='20'
        :progressWidth='800'
        :gravity='2'
        :progressRadius='10'
        :progress='40'
        :progressColor='0xFFFF2222'
        :progressDefaultColor='0xFFFF00FF'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbActivate='true'
        :thumbDrawable=" {
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :steps='4'
        :stepsWidth='100'
        :stepsHeight='100'
        :stepsAutoBonding='true'
        :stepsUrl="[
          'https://extcdn.hsrc.tv/exscreen/icon/4a772e37050d1c93affac41441983bc6.png',
          'https://extcdn.hsrc.tv/exscreen/icon/4a772e37050d1c93affac41441983bc6.png',
          'https://extcdn.hsrc.tv/exscreen/icon/4a772e37050d1c93affac41441983bc6.png',
          'https://extcdn.hsrc.tv/exscreen/icon/4a772e37050d1c93affac41441983bc6.png',
          'https://extcdn.hsrc.tv/exscreen/icon/4a772e37050d1c93affac41441983bc6.png'
        ]"
        focusScale='1.1' />
      <qt-range-seek-bar
        ref='seekBarNone'
        class='es-range-seek-bar-css'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='20'
        :progressWidth='400'
        :gravity='2'
        :progressRadius='10'
        :rangeProgress='{leftProgress:40, rightProgress:80}'
        :progressColor='0xFFFF2222'
        :progressDefaultColor='0xFFFF00FF'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbActivate='true'
        :thumbDrawable=" {
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 100,
          orientation: 6
        }"
        :steps='4'
        :stepsRadius='100'
        :stepsWidth='60'
        :stepsHeight='60'
        :stepsAutoBonding='true'
        :stepsColor='0xFFFF00FF'
        focusScale='1.1' />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/runtime-core'
import { QTISeekBar } from 'quicktvui'

export default defineComponent({
  name: '分步',
  emits: [],
  setup() {

    const seekBar = ref<QTISeekBar>()
    const seekBarUrl = ref<QTISeekBar>()
    const seekBarNone = ref<QTISeekBar>()

    function onESCreate(params) {
    }

    return {
      seekBar,
      seekBarUrl,
      seekBarNone,
      onESCreate
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


</style>
