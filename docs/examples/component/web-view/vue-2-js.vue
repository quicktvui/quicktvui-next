<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <qt-web-view
        ref="webview"
        class="es-sdk-web-view-css"
        @onPageFinished="onPageFinished"
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
  name: 'Vue2Js',
  setup() {
    const webview = ref<QTIWebView>()
    const toast = useESToast()

    function onPageFinished(url) {
      toast.showToast(`页面加载完毕${url}`)

      setTimeout(() => {
        webview.value?.evaluateJavascript("javascript:sayHello('参数')").then(
          (ret) => {
            toast.showToast(`调用JS返回值：${ret}`)
          },
          () => {
            //
          }
        )
      }, 4000)
    }

    function onESCreate() {
      webview.value?.loadUrl('http://192.168.80.32')
    }

    return {
      webview,
      onESCreate,
      onPageFinished,
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
