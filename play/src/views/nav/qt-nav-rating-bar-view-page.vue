<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTRatingBar"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`rating-bar-view/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTRatingBarViewPageList from "../../components/qt-rating-bar";

export default defineComponent({
  name: 'QTRatingBar',
  setup() {
    const pageList = Object.keys(QTRatingBarViewPageList).map(data => ({
      id: data,
      name: QTRatingBarViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
