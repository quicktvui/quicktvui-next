<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css'>
      <qt-range-seek-bar
        ref='seek_bar_drawable'
        class='es-range-seek-bar-css'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='10'
        :gravity='2'
        :progressRadius='100'
        :progress='40'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbDrawable="{
          colors: ['#FFFF00FF', '#FFFF0000', '#FF40b883'],
          cornerRadius: 100,
          orientation: 6
        }"
        :thumbInactivatedDrawable="{
          colors: ['#FFFF0000', '#FFFF00FF'],
          cornerRadius: 100,
          orientation: 6
        }"
        focusScale='1.1' />
      <qt-range-seek-bar
        ref='seek_bar_url'
        class='es-range-seek-bar-css'
        style='margin-top: 20px'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='10'
        :gravity='2'
        :progressRadius='100'
        :progress='40'
        :thumbWidth='40'
        :thumbHeight='40'
        thumbUrl='https://extcdn.hsrc.tv/exscreen/icon/4a772e37050d1c93affac41441983bc6.png'
        thumbInactivatedUrl='https://extcdn.hsrc.tv/exscreen/icon/8804d235a23bcec668d2d2ac1f3c2937.png'
        focusScale='1.1' />
      <qt-range-seek-bar
        ref='seek_bar_scale'
        class='es-range-seek-bar-css'
        style='margin-top: 20px'
        :enableFocusBorder='true'
        :focusable='true'
        :requestFocus='true'
        :seekBarMode='1'
        :progressHeight='10'
        :gravity='2'
        :progressRadius='100'
        :progress='40'
        :thumbWidth='40'
        :thumbHeight='40'
        :thumbDrawable="{
          colors: ['#FFFF00FF', '#FFFF0000', '#FF40b883'],
          cornerRadius: 100,
          orientation: 6
        }"
        :thumbInactivatedDrawable="{
          colors: ['#FFFF0000', '#FFFF00FF'],
          cornerRadius: 100,
          orientation: 6
        }"
        focusScale='1.1' />
    </div>
  </div>
</template>

<script lang='ts'>

import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTISeekBar } from 'quicktvui'

export default defineComponent({
  name: '按钮',
  emits: [],
  setup() {

    const seekBarDrawable = ref<QTISeekBar>()
    const seekBarUrl = ref<QTISeekBar>()
    const seekBarScale = ref<QTISeekBar>()

    function onESCreate(params) {
      initESSeekBarDrawable()
      initESSeekBarUrl()
      initESSeekBarScale()
    }

    function initESSeekBarDrawable() {
      seekBarDrawable.value?.setThumbActivate(true)
    }

    function initESSeekBarUrl() {
      seekBarUrl.value?.setThumbActivate(false)
    }

    function initESSeekBarScale() {
      //TODO LIULIPENG
      // seek_bar_scale.value?.setThumbScaleRatio(10);
      // seek_bar_scale.value?.scaleThumb();
      seekBarScale.value?.setThumbActivate(true)
    }

    return {
      seekBarDrawable,
      seekBarUrl,
      seekBarScale,
      onESCreate,
      initESSeekBarDrawable,
      initESSeekBarUrl,
      initESSeekBarScale
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
