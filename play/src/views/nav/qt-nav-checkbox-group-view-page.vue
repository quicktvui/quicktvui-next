<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTCheckboxGroup"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`checkbox-group-view/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTCheckBoxViewPageList from "../../components/qt-checkbox-group";

export default defineComponent({
  name: 'QTCheckboxGroup',
  setup() {
    const pageList = Object.keys(QTCheckBoxViewPageList).map(data => ({
      id: data,
      name: QTCheckBoxViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
