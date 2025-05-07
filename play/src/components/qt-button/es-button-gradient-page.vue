<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css" :clipChildren="false">
      <qt-button
        text="背景渐变"
        round
        style="margin: 20px"
        :gradientFocusBackground="{colors:['#10F5F5','#AA79F0'], cornerRadius: 100, orientation: 3}"
        :gradient-background="{colors:['#FF2648','#FF6F44'], cornerRadius: 100 ,orientation: 3}">
      </qt-button>
      <qt-button
        text="背景渐变"
        round
        style="margin: 20px"
        :gradient-focus-background="{colors:['#10F5F5','#AA79F0'], cornerRadius: 100, orientation: 3}"
        :gradientBackground="{colors:['#FF2648','#FF6F44'], cornerRadius: 100 ,orientation: 3}">
      </qt-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Gradient",
  setup(props, context) {
    return {};
  }
});
</script>

<style>

</style>
