<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTIndicatorListView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`indicator-list-view/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTIndicatorListViewPageList from "../../components/qt-indicator-list-view";

export default defineComponent({
  name: 'QTIndicatorListView',
  setup() {
    const pageList = Object.keys(QTIndicatorListViewPageList).map(data => ({
      id: data,
      name: QTIndicatorListViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
