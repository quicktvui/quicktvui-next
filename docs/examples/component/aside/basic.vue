<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" text="QTAside" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-container>
      <qt-aside>
        <span class="container-name-css">Aside</span>
      </qt-aside>
    </qt-container>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QTAside',
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>

<style>
.qt-aside {
  background-color: #daecfe;
}

.container-name-css {
  color: black;
  font-size: 30px;
}
</style>
