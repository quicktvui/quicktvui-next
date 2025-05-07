<template>
  <qt-view class='es-sdk-root-css' :clipChildren='false'>
    <s-title-view class='es-sdk-content-title-css' text='QTMain' />
    <qt-view class='es-sdk-content-divider-css' />
    <qt-container>
      <qt-main>
        <span class='container-name-css'>Main</span>
      </qt-main>
    </qt-container>
  </qt-view>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QTMain',
  emits: [],
  setup(props, context) {
    return {}
  }
})
</script>

<style>

.qt-main {
  background-color: #ecf5ff;
}

.container-name-css {
  color: black;
  font-size: 30px;
}


</style>
