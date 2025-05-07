<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <qt-web-view
        ref="webview"
        class="es-sdk-web-view-css"
        @onJs2Vue="onJs2Vue"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESToast } from '@extscreen/es3-core'
import type { QTIWebView } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'Js2Vue',
  setup() {
    const webview = ref<QTIWebView>()
    const toast = useESToast()

    function onJs2Vue(value) {
      toast.showToast(`来自js的消息：${value}`)
    }

    function onESCreate() {
      webview.value?.loadUrl('http://192.168.80.32')
    }

    return {
      webview,
      onESCreate,
      onJs2Vue,
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
