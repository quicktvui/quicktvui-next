<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <div class="es-sdk-content-column-css" :clipChildren="false">
      <qt-button text="改变值" @click="onButtonClicked" />
      <div
        v-pseudo:test="value"
        class="div-v-pseudo-css"
        :focusable="true"
        :enableFocusBorder="true"
        :focusScale="1"
        @focus="onFocus"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  emits: [],
  setup() {
    const value = ref<boolean>(false)

    function onButtonClicked() {
      value.value = !value.value
    }

    const onFocus = (e) => {
      const focused = e.isFocused
    }

    return {
      onFocus,
      onButtonClicked,
      value,
    }
  },
})
</script>

<style scoped>
.div-v-pseudo-css {
  width: 192px;
  height: 108px;
  margin: 20px;
  background: green;
}

.div-v-pseudo-css:test {
  width: 384px;
  height: 216px;
  margin: 20px;
  background: palevioletred;
}
</style>
