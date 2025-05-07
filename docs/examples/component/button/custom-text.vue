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
    disabled
    text="自定义文字样式"
    :textStyle="{
      width: '100px',
      backgroundColor: '#FF8022',
      fontSize: '20px',
    }"
    class="text-button-class"
  />
</template>
