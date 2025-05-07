<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTSwitch"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`switch/${item.id}`" />
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QTSwitchViewPageList from '../../components/qt-switch'

export default defineComponent({
  name: 'QTSwitch',
  setup() {
    const pageList = Object.keys(QTSwitchViewPageList).map(data => ({
      id: data,
      name: QTSwitchViewPageList[data].name
    }))
    return {
      pageList
    }
  }
})
</script>

<style>
</style>
