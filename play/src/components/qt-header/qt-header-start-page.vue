<template>
  <qt-view class='es-sdk-root-css' :clipChildren='false'>
    <s-title-view class='es-sdk-content-title-css' text='QTHeader' />
    <qt-view class='es-sdk-content-divider-css' />
    <qt-container>
      <qt-header>
        <span class='container-name-css'>Header</span>
      </qt-header>
    </qt-container>
  </qt-view>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QTHeader',
  emits: [],
  setup(props, context) {
    return {}
  }
})
</script>

<style>

.header-css {
  background-color: red;
}

.qt-header {
  background-color: #c7e2fe;
}

.container-name-css {
  color: black;
  font-size: 30px;
}

</style>
