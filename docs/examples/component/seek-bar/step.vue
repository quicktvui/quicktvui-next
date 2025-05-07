<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBar"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"
      />
      <qt-seek-bar
        ref="seekBarUrl"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"
      />
      <qt-seek-bar
        ref="seekBarNone"
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
import { defineComponent, ref } from '@vue/runtime-core'
import type { QTISeekBar } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '分步',
  setup() {
    const seekBar = ref<QTISeekBar>()
    const seekBarUrl = ref<QTISeekBar>()
    const seekBarNone = ref<QTISeekBar>()

    function onESCreate() {
      initESSeekBar()
      initESSeekBarUrl()
      initESSeekBarNone()
    }

    function initESSeekBar() {
      seekBar.value?.setSeekBarMode(1)
      seekBar.value?.setProgressHeight(20)
      seekBar.value?.setProgressWidth(1000)
      seekBar.value?.setGravity(2)
      seekBar.value?.setProgressRadius(10)
      seekBar.value?.setProgress(40)

      seekBar.value?.setProgressColor('0xffff2222')
      seekBar.value?.setProgressDefaultColor('0xffff00ff')

      seekBar.value?.setThumbWidth(40)
      seekBar.value?.setThumbHeight(40)
      //
      seekBar.value?.setThumbActivate(true)
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBar.value?.setThumbDrawable(thumbDrawable)

      //------------------------------分步---------------------------------
      seekBar.value?.setSteps(4)
      seekBar.value?.setStepsWidth(40)
      seekBar.value?.setStepsHeight(40)
      seekBar.value?.setStepsAutoBonding(true)
      seekBar.value?.setStepsRadius(100)
      seekBar.value?.setStepsDrawable([
        {
          colors: ['#ffff4054', '#ffff0000'],
          cornerRadius: 10,
          orientation: 6,
        },
        {
          colors: ['#ffff6347', '#ffff0000'],
          cornerRadius: 10,
          orientation: 6,
        },
        {
          colors: ['#ffffafad', '#ffff0000'],
          cornerRadius: 0,
          orientation: 6,
        },
        {
          colors: ['#ffff8247', '#ffff0000'],
          cornerRadius: 10,
          orientation: 6,
        },
        {
          colors: ['#ffff00ff', '#ffff0000'],
          cornerRadius: 10,
          orientation: 6,
        },
      ])
    }

    function initESSeekBarUrl() {
      seekBarUrl.value?.setSeekBarMode(1)
      seekBarUrl.value?.setProgressHeight(20)
      seekBarUrl.value?.setProgressWidth(800)
      seekBarUrl.value?.setGravity(2)
      seekBarUrl.value?.setProgressRadius(10)
      seekBarUrl.value?.setProgress(40)

      seekBarUrl.value?.setProgressColor('0xffff2222')
      seekBarUrl.value?.setProgressDefaultColor('0xffff00ff')

      seekBarUrl.value?.setThumbWidth(40)
      seekBarUrl.value?.setThumbHeight(40)
      //
      seekBarUrl.value?.setThumbActivate(true)
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarUrl.value?.setThumbDrawable(thumbDrawable)
      //------------------------------分步---------------------------------
      seekBarUrl.value?.setSteps(4)
      seekBarUrl.value?.setStepsWidth(100)
      seekBarUrl.value?.setStepsHeight(100)
      seekBarUrl.value?.setStepsAutoBonding(true)
      seekBarUrl.value?.setStepsUrl([
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
      ])
    }

    function initESSeekBarNone() {
      seekBarNone.value?.setSeekBarMode(1)
      seekBarNone.value?.setProgressHeight(20)
      seekBarNone.value?.setProgressWidth(400)
      seekBarNone.value?.setGravity(2)
      seekBarNone.value?.setProgressRadius(10)
      seekBarNone.value?.setProgress(40, 100)

      seekBarNone.value?.setProgressColor('0xffff2222')
      seekBarNone.value?.setProgressDefaultColor('0xffff00ff')

      seekBarNone.value?.setThumbWidth(40)
      seekBarNone.value?.setThumbHeight(40)
      //
      seekBarNone.value?.setThumbActivate(true)
      const thumbDrawable = {
        colors: ['#ffff00ff', '#ffff0000'],
        cornerRadius: 100,
        orientation: 6,
      }
      seekBarNone.value?.setThumbDrawable(thumbDrawable)
      seekBarNone.value?.setStepsRadius(100)
      //------------------------------分步---------------------------------
      seekBarNone.value?.setSteps(4)
      seekBarNone.value?.setStepsWidth(60)
      seekBarNone.value?.setStepsHeight(60)
      seekBarNone.value?.setStepsAutoBonding(true)
      seekBarNone.value?.setStepsColor('0xffff0000')
    }

    return {
      seekBar,
      seekBarUrl,
      seekBarNone,
      onESCreate,
      initESSeekBar,
      initESSeekBarUrl,
      initESSeekBarNone,
    }
  },
})
</script>

<style></style>
