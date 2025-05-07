<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTMain"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`main/${item.id}`" />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import QTMainPageList from "../../components/qt-main";

export default defineComponent({
  name: "QTMain",
  setup() {
    const pageList = Object.keys(QTMainPageList).map(data => ({
      id: data,
      name: QTMainPageList[data].name
    }));
    return {
      pageList
    };
  }
});

</script>
<style>
</style>
