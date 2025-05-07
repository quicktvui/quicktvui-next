<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" text="QTFooter" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-container>
      <qt-footer>
        <span class="container-name-css">Footer</span>
      </qt-footer>
    </qt-container>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QTFooter',
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>

<style>
.qt-footer {
  background-color: #c7e2fe;
}

.container-name-css {
  color: black;
  font-size: 30px;
}
</style>
