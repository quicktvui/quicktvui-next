<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" text="QTLoading"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-loading-view-start-page">
      <qt-loading-view size='large'/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
export default defineComponent({
  name: 'QTLoading',
  setup(props, context) {
    return {}
  },
});
</script>

<style>
.qt-loading-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
