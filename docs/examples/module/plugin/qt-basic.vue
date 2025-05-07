<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'安装状态：' + installStatus" />
      <s-text-button text="安装广告插件" @onButtonClicked="onButtonClicked" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import type { ESPluginInfo, ESPluginListener } from '@extscreen/es3-core'

export default defineComponent({
  name: '插件',
  setup() {
    const installStatus = ref('')

    const pluginInfo: ESPluginInfo = {
      pkg: 'eskit.plugin.ad.huan',
    }

    const listener: ESPluginListener = {
      onPluginInstallSuccess(pkg: string, status: number, msg: string) {
        installStatus.value =
          `onPluginInstallSuccess ` +
          `   pkg:${pkg}   status:${status}   msg:${msg}`
      },
      onPluginInstallProgress(
        pkg: string,
        status: number,
        current: number,
        total: number
      ) {
        installStatus.value =
          `onESPluginInstallProgress ` +
          `   pkg:${pkg}   status:${status}  current:${current}  total:${total}`
      },
      onPluginInstallError(pkg: string, status: number, msg: string) {
        installStatus.value =
          `onPluginInstallError ` +
          `   pkg:${pkg}   msg:${msg}   status:${status}`
      },
    }

    function onESCreate() {
      qt.plugin.addListener(pluginInfo, listener)
    }

    function onESDestroy() {
      qt.plugin.removeListener(listener)
    }

    function onButtonClicked() {
      qt.plugin.installPlugin(pluginInfo)
    }

    return {
      installStatus,
      onButtonClicked,
      onESCreate,
      onESDestroy,
    }
  },
})
</script>
<style></style>
