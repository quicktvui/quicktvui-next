<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 900px;" :clipChildren="false">
      <div class="switch-size-box-css">
        <qt-switch size="small" />
        <qt-switch size="default" />
        <qt-switch size="large" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog, useESToast } from '@extscreen/es3-core'

const TAG = 'switch'

export default defineComponent({
  name: 'size',
  setup: function() {
    const log = useESLog()
    const toast = useESToast()

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onESCreate---------->>>>>')
      }
    }

    const onESResume = () => {
      log.e(TAG, '-------onESResume---------->>>>>')
    }


    const onESPause = () => {
      log.e(TAG, '-------onESPause---------->>>>>')
    }
    const onESDestroy = () => {
      log.e(TAG, '-------onESDestroy---------->>>>>')
    }

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy
    }
  }
})
</script>

<style>

.switch-size-box-css {
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.qt-switch-class {
  width: 100px;
  height: 66px;
}

</style>
