<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css" :clipChildren="false">
      <qt-button text="默认按钮" :focusBorder="true" style="margin: 20px"></qt-button>
      <qt-button round text="圆角按钮" :focusBorder="true" style="margin: 20px"></qt-button>
      <qt-button round size="large" text="圆角大按钮" :focusBorder="true" style="margin: 20px"></qt-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Border",
  setup(props, context) {
    return {};
  }
});
</script>

<style>

</style>
