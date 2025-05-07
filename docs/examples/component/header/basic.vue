<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" text="QTHeader" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-loading-view-start-page">
      <qt-header class="header-css" />
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QTHeader',
  setup() {
    return {}
  },
})
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

.header-css {
  background-color: red;
}

.qt-header {
  background-color: #c7e2fe;
}
</style>
