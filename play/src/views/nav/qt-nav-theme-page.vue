<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTTheme"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
            v-for="item in pageList" :key="item.id"
            :text="item.name"
            :url="`qt-theme/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTThemePageList from "../../components/qt-theme";

export default defineComponent({
  name: 'QTTheme',
  setup() {
    const pageList = Object.keys(QTThemePageList).map(data => ({
      id: data,
      name: QTThemePageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
