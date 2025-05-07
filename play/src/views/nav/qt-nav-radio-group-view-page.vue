<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTRadioGroup"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`radio-group-view/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTRadioViewPageList from "../../components/qt-radio-group";

export default defineComponent({
  name: 'QTRadioGroup',
  setup() {
    const pageList = Object.keys(QTRadioViewPageList).map(data => ({
      id: data,
      name: QTRadioViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
