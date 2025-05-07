<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 900px;" :clipChildren="false">
      <qt-button text="按钮" />
      <text-view
        text="默认属性"
        :fontSize="30"
        class="qt-text-css"
      />
      <div class="switch-box-css">
        <qt-long-image class="qt-long-image-class" />
      </div>
      <qt-button text="按钮" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog, useESToast } from '@extscreen/es3-core'

const TAG = 'long_image'

export default defineComponent({
  name: '长图组件',
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

.switch-box-css {
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.qt-long-image-class {
  width: 1920px;
  height: 900px;
}

.qt-text-css {
  width: 1920px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
}

</style>
