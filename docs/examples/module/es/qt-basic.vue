<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view text="ES模块用来获取runtime中支持的ES信息" />
      <s-text-view :text="'ESSdkVersionCode：' + esSdkVersionCode" />
      <s-text-view :text="'ESSdkVersionName：' + esSdkVersionName" />
      <s-text-view :text="'ESSdkPackageName：' + esSdkPackageName" />
      <s-text-view :text="'ESAppFilePath：' + esAppFilePath" />
      <s-text-view :text="'ESAppRuntimePath：' + esAppRuntimePath" />
      <s-text-view :text="'ESSdkSchemes：' + esSdkSchemes" />

      <s-text-view :text="'ESNetworkModule是否注册：' + isModuleRegistered" />
      <s-text-view
        :text="'ESWebViewComponent是否注册：' + isComponentRegistered"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'ES模块',
  setup() {
    const esSdkVersionCode = ref(-1)
    const esSdkVersionName = ref('')
    const esSdkPackageName = ref('')
    const esAppFilePath = ref('')
    const esAppRuntimePath = ref('')
    const esSdkSchemes = ref([])
    const isModuleRegistered = ref(false)
    const isComponentRegistered = ref(false)

    const onESCreate = () => {
      esSdkVersionCode.value = qt.es.getESSDKVersionCode()
      esSdkVersionName.value = qt.es.getESSDKVersionName()
      esSdkPackageName.value = qt.es.getESPackageName()
      esAppRuntimePath.value = qt.es.getESAppRuntimePath()
      esAppFilePath.value = qt.es.getESAppFilePath()
      esSdkSchemes.value = qt.es.getSupportSchemes()

      qt.es
        .isModuleRegistered(
          'eskit.sdk.support.module.network.AndroidNetworkModule'
        )
        .then((isRegistered) => {
          isModuleRegistered.value = isRegistered
        })

      qt.es
        .isComponentRegistered('eskit.sdk.support.webview.ESWebViewComponent')
        .then((isRegistered) => {
          isComponentRegistered.value = isRegistered
        })
    }

    return {
      onESCreate,
      esSdkVersionCode,
      esSdkVersionName,
      esSdkPackageName,
      esAppFilePath,
      esSdkSchemes,
      isModuleRegistered,
      isComponentRegistered,
      esAppRuntimePath,
    }
  },
})
</script>
<style></style>
