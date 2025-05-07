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
    text="图标"
    :icon="require('../../../src/assets/add-circle.png')"
    :focusIcon="require('../../../src/assets/ashbin.png')"
    class="text-button-class"
  />
</template>
