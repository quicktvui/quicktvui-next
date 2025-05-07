<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view text="网络模块用来获取网络信息" />
      <s-text-view :text="'网络连接状态：' + isNetworkConnected" />
      <s-text-view
        v-if="activeNetworkInfo"
        :text="JSON.stringify(activeNetworkInfo)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESNetwork, useESToast } from '@extscreen/es3-core'
import type { ESNetworkInfo } from '@extscreen/es3-core'

export default defineComponent({
  name: '网络模块',
  setup() {
    const network = useESNetwork()
    const toast = useESToast()

    const activeNetworkInfo = ref<ESNetworkInfo>()
    const isNetworkConnected = ref<boolean>(false)

    //网络状态监听
    const connectivityChangeListener = {
      onConnectivityChange(networkInfo: ESNetworkInfo | null) {
        toast.showToast(JSON.stringify(networkInfo))
        initNetwork()
      },
    }

    const onESCreate = () => {
      network.addListener(connectivityChangeListener)
      initNetwork()
    }

    function initNetwork() {
      isNetworkConnected.value = network.isNetworkConnected()
      const networkInfo = network.getActiveNetworkInfo()
      if (networkInfo != null) {
        activeNetworkInfo.value = networkInfo
      }
    }

    function onESDestroy() {
      network.removeListener(connectivityChangeListener)
    }

    return {
      onESCreate,
      onESDestroy,
      activeNetworkInfo,
      isNetworkConnected,
    }
  },
})
</script>
<style></style>
