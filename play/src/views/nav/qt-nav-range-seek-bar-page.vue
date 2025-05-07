<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTRangeSeekBar"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`range-seekbar/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTRangeSeekBarPageList from "../../components/qt-range-seek-bar";

export default defineComponent({
  name: 'QTRangeSeekBar',
  emits:[],
  setup() {
    const pageList = Object.keys(QTRangeSeekBarPageList).map(data => ({
      id: data,
      name: QTRangeSeekBarPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
