<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css'>
      <s-text-button text='按钮' />
      <qt-seek-bar
        ref='seekBarRef'
        class='es-range-seek-bar-css'
        :enable-focus-border='true'
        :focusable='true'
        :seek-bar-mode='1'
        :progress-height='10'
        :gravity='2'
        :progress-radius='100'
        :progress='progress'
        :range='{min: 0, max: maxProgress.value}'
        :progress-color='0xFFFF3823'
        :progress-default-color='0xFFDCDCDC'
        thumb-url='https://extcdn.hsrc.tv/exscreen/icon/4a772e37050d1c93affac41441983bc6.png'
        thumb-inactivated-url='https://extcdn.hsrc.tv/exscreen/icon/8804d235a23bcec668d2d2ac1f3c2937.png'
        @onSeekChanged='onSeekBarChange'
        @onFocusChanged='onFocusChange' />
      <s-text-button text='按钮' />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { ref } from 'vue'
import { ESKeyCode } from '@extscreen/es3-core'
import { QTISeekBar } from 'quicktvui'

const TAG = 'ESRangeSeekBar'

export default defineComponent({
  name: '使用初探（属性）',
  emits: [],
  setup() {
    const log = useESLog()

    const seekBarRef = ref<QTISeekBar>()
    const focused = ref<boolean>(false)
    const progress = ref<number>(0)
    const maxProgress = ref<number>(200)

    const seekStep = ref<number>(0)
    const seekBarMode = ref<number>(0)

    let progressTimer = null
    let seekIntervalTime = null

    function onESCreate(params) {
      initESSeekBar()
    }

    function onSeekBarChange(progress: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '--------onSeekBarChange------>>>>>' + progress)
      }
    }

    function onFocusChange(isFocused: boolean) {
      focused.value = isFocused
      //TODO LIULIPENG 使用属性控制有问题，会导致进度乱跳
      // seekBarRef.value?.setThumbActivate(isFocused)
    }

    function initESSeekBar() {
      progressTimer = setInterval(() => {
        if (isSeekMode()) {
          return
        }
        progress.value = progress.value + 2
        if (progress.value > maxProgress.value) {
          progress.value = 0
          return
        }
      }, 1000)

    }

    function isSeekBarFocused() {
      return focused.value
    }

    function startSeek(forward) {
      seekBarMode.value = 1
      seekStep.value += 1
      let base = 1
      if (seekStep.value > 20) {
        base = 2
      } else if (seekStep.value > 50) {
        base = 4
      } else if (seekStep.value > 100) {
        base = 6
      }
      let duration = maxProgress.value
      let seekProgress = Math.floor(duration * 0.01 * base)
      progress.value = progress.value + (forward ? seekProgress : -seekProgress)

      if (progress.value > duration) {
        progress.value = duration
      } else if (progress.value < 0) {
        progress.value = 0
      }

      let now = new Date().getTime()
      if (now - seekIntervalTime > 50) {
        seekIntervalTime = now
      }
    }

    function stopSeek() {
      seekBarMode.value = 0
      seekStep.value = 0
    }

    function isSeekMode() {
      return seekBarMode.value === 1
    }

    function onKeyDown(keyEvent) {
      if (keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_LEFT
        || keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT) {
        if (isSeekBarFocused()) {
          startSeek(keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT)
        }
      }
    }

    function onKeyUp(keyEvent) {
      if (keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_LEFT
        || keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT) {
        if (isSeekBarFocused()) {
          stopSeek()
        }
      }
    }

    function onESDestroy() {
      if (progressTimer) {
        clearInterval(progressTimer)
      }
    }

    return {
      seekBarRef,
      focused,
      progress,
      maxProgress,
      seekStep,
      seekBarMode,
      onESCreate,
      onSeekBarChange,
      onFocusChange,
      initESSeekBar,
      isSeekBarFocused,
      startSeek,
      stopSeek,
      isSeekMode,
      onKeyDown,
      onKeyUp,
      onESDestroy
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
