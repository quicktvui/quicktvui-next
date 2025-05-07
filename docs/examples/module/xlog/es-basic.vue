<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESXLogLevel, useESXLog } from '@extscreen/es3-core'

const TAG = 'LogSamplePage'

export default defineComponent({
  name: '使用初探',
  setup() {
    const log = useESXLog()
    //设置最小打印级别
    log.setMinimumLoggingLevel(ESXLogLevel.DEBUG)

    //判断VERBOSE级别日志否可用并打印VERBOSE级别日志
    if (log.isLoggable(ESXLogLevel.VERBOSE)) {
      log.v(TAG, '----------VERBOSE--------->>>')
    }
    //判断DEBUG级别日志否可用并打印DEBUG级别日志
    if (log.isLoggable(ESXLogLevel.DEBUG)) {
      log.d(TAG, '----------DEBUG--------->>>')
    }
    //判断INFO级别日志否可用并打印INFO级别日志
    if (log.isLoggable(ESXLogLevel.INFO)) {
      log.i(TAG, '----------INFO--------->>>')
    }
    //判断WARN级别日志否可用并打印WARN级别日志
    if (log.isLoggable(ESXLogLevel.WARN)) {
      log.w(TAG, '----------WARN--------->>>')
    }
    //判断ERROR级别日志否可用并打印ERROR级别日志
    if (log.isLoggable(ESXLogLevel.ERROR)) {
      log.e(TAG, '----------ERROR--------->>>')
    }

    return {}
  },
})
</script>
<style></style>
