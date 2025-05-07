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
    size="large"
    text="自定义图标样式"
    :iconStyle="{ width: '50px', height: '50px' }"
    :focusIconStyle="{
      backgroundColor: '#FF9933',
      width: '20px',
      height: '20px',
    }"
    :icon="require('../../../src/assets/add-circle.png')"
    :focusIcon="require('../../../src/assets/ashbin.png')"
    class="text-button-class"
  />
</template>
