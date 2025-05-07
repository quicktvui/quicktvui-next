<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTAside"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`aside/${item.id}`" />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import QTAsidePageList from "../../components/qt-aside";

export default defineComponent({
  name: "QTAside",
  setup() {
    const pageList = Object.keys(QTAsidePageList).map(data => ({
      id: data,
      name: QTAsidePageList[data].name
    }));
    return {
      pageList
    };
  }
});

</script>
<style>
</style>
