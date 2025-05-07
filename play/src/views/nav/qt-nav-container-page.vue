<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTContainer"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`container/${item.id}`" />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import QTContainerPageList from "../../components/qt-container";

export default defineComponent({
  name: "QTContainer",
  setup() {
    const pageList = Object.keys(QTContainerPageList).map(data => ({
      id: data,
      name: QTContainerPageList[data].name
    }));
    return {
      pageList
    };
  }
});

</script>
<style>
</style>
