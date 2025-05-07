<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // ...
  },
})
</script>

<template>
  <qt-button
    size="medium"
    class="text-button-class"
    round
    text="渐变背景"
    :gradientFocusBackground="{
      colors: ['#10F5F5', '#AA79F0'],
      cornerRadius: 100,
      orientation: 3,
    }"
    :gradientBackground="{
      colors: ['#FF2648', '#FF6F44'],
      cornerRadius: 100,
      orientation: 3,
    }"
  />
</template>
