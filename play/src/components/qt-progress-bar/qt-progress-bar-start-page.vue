<template>
  <div class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <div class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-row-csss'>
      <qt-progress-bar
        ref='progress_bar'
        :progress='progress'
        :range='{max:100, min:0}'
        @onSeekChanged='onSeekChanged'
        id='es-progress-bar-root-css' />
    </div>
  </div>
</template>

<script lang='ts'>

import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTIProgressBar } from 'quicktvui'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'

const TAG = 'ESProgressBar'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup() {
    const progress_bar = ref<QTIProgressBar>()
    const backgroundColor = ref(0xFFF3DF0F)
    const color = ref('')
    const progress = ref<number>(0)
    const log = useESLog()
    let intervalId = -1

    function onESCreate(params) {
      intervalId = setInterval(() => {
        progress.value = progress.value + 10
        if (progress.value >= 100 && intervalId != -1) {
          clearInterval(intervalId)
        }
      }, 1000)

      // progress_bar.value?.setProgress(20);
      // progress_bar.value?.setMaxProgress(100);
      // progress_bar.value?.setProgressColor(0xFFFF0000);
      // progress_bar.value?.setProgressDefaultColor(0xFF7415B1);
    }

    function onSeekChanged(progress: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, `------onSeekChanged----->>>${progress}`)
      }
    }

    return {
      progress_bar,
      backgroundColor,
      color,
      onESCreate,
      onSeekChanged,
      progress
    }
  }
})

</script>

<style>
.es-sdk-content-row-csss {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

/*#es-progress-bar-root-css {*/
/*  width: 800px;*/
/*  progress-color: green*/

/*}*/
</style>
