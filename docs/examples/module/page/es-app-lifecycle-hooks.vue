<template>
  <div id="root">
    <es-router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import {
  onESCreate,
  onESCreated,
  onESDestroy,
  onESNewIntent,
  onESPause,
  onESRestart,
  onESRestoreInstanceState,
  onESResume,
  onESSaveInstanceState,
  onESStart,
  onESStop,
} from '@extscreen/es3-vue'

const TAG = 'Application'

export default defineComponent({
  name: 'App',
  emits: [],
  setup() {
    const log = useESLog()

    onESCreate((app, params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onESCreate------->>>>', app, params)
      }
    })

    onESCreated((success) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onESCreated------->>>>', success)
      }
    })

    onESStart(() => {
      //
    })

    onESNewIntent((intent) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onESNewIntent------->>>>', intent)
      }
    })

    onESRestart(() => {
      //
    })

    onESResume(() => {
      //
    })

    onESPause(() => {
      //
    })

    onESStop(() => {
      //
    })

    onESDestroy(() => {
      //
    })
  },
})
</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
