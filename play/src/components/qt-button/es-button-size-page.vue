<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css" :clipChildren="false">
      <qt-button text="超小按钮" size="mini" style="margin: 20px"></qt-button>
      <qt-button text="小按钮" size="small" style="margin: 20px"></qt-button>
      <qt-button text="中按钮" style="margin: 20px"></qt-button>
      <qt-button text="大按钮" size="large" style="margin: 20px"></qt-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Size",
  setup(props, context) {
    return {};
  }
});
</script>

<style>

</style>
