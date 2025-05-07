<template>
  <div id="root">
    <es-router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'

const TAG = 'Application'

export default defineComponent({
  name: 'App',
  setup() {
    const log = useESLog()

    function onESCreate(app, params) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onESCreate------->>>>', app, params)
      }
    }

    function onESCreated(success) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onESCreated------->>>>', success)
      }
    }

    function onESStart() {
      //
    }

    function onESNewIntent(intent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onESNewIntent------->>>>', intent)
      }
    }

    function onESRestart() {
      //
    }

    function onESResume() {
      //
    }

    function onESPause() {
      //
    }

    function onESStop() {
      //
    }

    function onESDestroy() {
      //
    }

    return {
      onESCreate,
      onESCreated,
      onESStart,
      onESNewIntent,
      onESRestart,
      onESResume,
      onESPause,
      onESStop,
      onESDestroy,
    }
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
