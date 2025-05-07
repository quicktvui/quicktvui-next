<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTFooter"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`footer/${item.id}`" />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import QTFooterPageList from "../../components/qt-footer";

export default defineComponent({
  name: "QTFooter",
  setup() {
    const pageList = Object.keys(QTFooterPageList).map(data => ({
      id: data,
      name: QTFooterPageList[data].name
    }));
    return {
      pageList
    };
  }
});

</script>
<style>
</style>
