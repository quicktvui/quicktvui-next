<template>
  <qt-qr-code
    style="width: 200px; height: 200px; background-color: aqua"
    content="http://www.xxxx.com/"
    :optimize="true"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // ...
  },
})
</script>
