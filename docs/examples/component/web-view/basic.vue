<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <qt-web-view
        ref="webview"
        class="es-sdk-web-view-css"
        @onPageStarted="onPageStarted"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import type { QTIWebView } from '@quicktvui/quicktvui3'

const TAG = 'WebView'

export default defineComponent({
  name: '基础用法',
  setup() {
    const log = useESLog()

    const webview = ref<QTIWebView>()

    function onPageStarted(url) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onPageStarted------->>>>', url)
      }
    }

    function onESCreate() {
      webview.value?.loadUrl('http://quicktvui.com')
    }

    return {
      webview,
      onESCreate,
      onPageStarted,
    }
  },
})
</script>

<style>
.es-sdk-web-view-css {
  width: 1920px;
  height: 1080px;
}
</style>
