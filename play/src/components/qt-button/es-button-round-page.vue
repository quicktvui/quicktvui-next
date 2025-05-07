<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="false">
      <div class="es-sdk-content-row-css" :clipChildren="false">
        <qt-button text="小小按钮" round size="small" style="margin: 20px"></qt-button>
        <qt-button text="默认按钮" round style="margin: 20px"></qt-button>
        <qt-button text="大大按钮" round size="large" style="margin: 20px"></qt-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Round",
  setup(props, context) {
    return {};
  }
});
</script>

<style>

</style>
