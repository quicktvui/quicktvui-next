<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel } from '@extscreen/es3-core'

const TAG = 'LogSamplePage'

export default defineComponent({
  name: '使用初探',
  setup() {
    //设置最小打印级别
    qt.log.setMinimumLoggingLevel(ESLogLevel.DEBUG)

    //判断VERBOSE级别日志否可用并打印VERBOSE级别日志
    if (qt.log.isLoggable(ESLogLevel.VERBOSE)) {
      qt.log.v(TAG, '----------VERBOSE--------->>>')
    }
    //判断DEBUG级别日志否可用并打印DEBUG级别日志
    if (qt.log.isLoggable(ESLogLevel.DEBUG)) {
      qt.log.d(TAG, '----------DEBUG--------->>>')
    }
    //判断INFO级别日志否可用并打印INFO级别日志
    if (qt.log.isLoggable(ESLogLevel.INFO)) {
      qt.log.i(TAG, '----------INFO--------->>>')
    }
    //判断WARN级别日志否可用并打印WARN级别日志
    if (qt.log.isLoggable(ESLogLevel.WARN)) {
      qt.log.w(TAG, '----------WARN--------->>>')
    }
    //判断ERROR级别日志否可用并打印ERROR级别日志
    if (qt.log.isLoggable(ESLogLevel.ERROR)) {
      qt.log.e(TAG, '----------ERROR--------->>>')
    }

    return {}
  },
})
</script>
<style></style>
