<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTHeader"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`header/${item.id}`" />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import QTHeaderPageList from "../../components/qt-header";

export default defineComponent({
  name: "QTHeader",
  setup() {
    const pageList = Object.keys(QTHeaderPageList).map(data => ({
      id: data,
      name: QTHeaderPageList[data].name
    }));
    return {
      pageList
    };
  }
});

</script>
<style>
</style>
