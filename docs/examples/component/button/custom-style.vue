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
    class="text-button-class"
    text="自定义按钮样式"
    :style="{ backgroundColor: '#FF0022', height: '100px' }"
  />
</template>
