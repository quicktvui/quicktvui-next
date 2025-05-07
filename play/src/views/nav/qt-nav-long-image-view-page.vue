<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTLongImage"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`long-image-view/${item.id}`" />
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QTLongImageViewPageList from '../../components/qt-long-image'

export default defineComponent({
  name: 'QTLongImage',
  setup() {
    const pageList = Object.keys(QTLongImageViewPageList).map(data => ({
      id: data,
      name: QTLongImageViewPageList[data].name
    }))
    return {
      pageList
    }
  }
})
</script>

<style>
</style>
