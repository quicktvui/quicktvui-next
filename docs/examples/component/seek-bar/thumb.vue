<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarDrawable"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"
      />
      <qt-seek-bar
        ref="seekBarUrl"
        class="es-range-seek-bar-css"
        style="margin-top: 20px"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"
      />
      <qt-seek-bar
        ref="seekBarScale"
        class="es-range-seek-bar-css"
        style="margin-top: 20px"
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
  name: '按钮',
  setup() {
    const seekBarDrawable = ref<QTISeekBar>()
    const seekBarUrl = ref<QTISeekBar>()
    const seekBarScale = ref<QTISeekBar>()

    function onESCreate() {
      initESSeekBarDrawable()
      initESSeekBarUrl()
      initESSeekBarScale()
    }

    function initESSeekBarDrawable() {
      seekBarDrawable.value?.setSeekBarMode(1)
      seekBarDrawable.value?.setProgressHeight(10)
      seekBarDrawable.value?.setGravity(2)
      seekBarDrawable.value?.setProgressRadius(100)
      seekBarDrawable.value?.setProgress(40)

      //----------------------使用drawable---------------------------
      seekBarDrawable.value?.setThumbWidth(40)
      seekBarDrawable.value?.setThumbHeight(40)
      //
      seekBarDrawable.value?.setThumbActivate(true)
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000', '#ff40b883'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarDrawable.value?.setThumbDrawable(thumbDrawable)

      const thumbInactivatedDrawable = {
        colors: ['#ffff0000', '#ffff00ff'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarDrawable.value?.setThumbInactivatedDrawable(
        thumbInactivatedDrawable
      )
    }

    function initESSeekBarUrl() {
      //----------------------使用网络地址图片---------------------------
      seekBarUrl.value?.setSeekBarMode(1)
      seekBarUrl.value?.setProgressHeight(10)
      seekBarUrl.value?.setGravity(2)
      seekBarUrl.value?.setProgressRadius(100)
      seekBarUrl.value?.setProgress(40)

      seekBarUrl.value?.setThumbWidth(40)
      seekBarUrl.value?.setThumbHeight(40)

      seekBarUrl.value?.setThumbUrl(
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/02/22/f241e7e7-f9d0-407a-9dc1-24c88a361594.jpg'
      )
      seekBarUrl.value?.setThumbInactivatedUrl(
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg'
      )

      seekBarUrl.value?.setThumbActivate(false)
    }

    function initESSeekBarScale() {
      //----------------------使用网络地址图片---------------------------
      seekBarScale.value?.setSeekBarMode(1)
      seekBarScale.value?.setProgressHeight(10)
      seekBarScale.value?.setGravity(2)
      seekBarScale.value?.setProgressRadius(100)
      seekBarScale.value?.setProgress(40)

      seekBarScale.value?.setThumbWidth(40)
      seekBarScale.value?.setThumbHeight(40)

      //TODO LIULIPENG
      // seekBarScale.value?.setThumbScaleRatio(10);
      // seekBarScale.value?.scaleThumb();

      seekBarScale.value?.setThumbActivate(true)
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000', '#ff40b883'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarScale.value?.setThumbDrawable(thumbDrawable)

      const thumbInactivatedDrawable = {
        colors: ['#ffff0000', '#ffff00ff'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarScale.value?.setThumbInactivatedDrawable(thumbInactivatedDrawable)
    }

    return {
      seekBarDrawable,
      seekBarUrl,
      seekBarScale,
      onESCreate,
      initESSeekBarDrawable,
      initESSeekBarUrl,
      initESSeekBarScale,
    }
  },
})
</script>

<style></style>
