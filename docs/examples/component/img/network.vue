<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-img-network-page">
      <img
        src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750"
        class="qt-image"
      />
    </qt-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '网络图片',
})
</script>

<style>
.qt-img-network-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-img-network-page .qt-image {
  width: 260px;
  height: 320px;
}
</style>
