<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
      ref="tabRef"
      tabNavBarClass="qt-tabs-nav-bar-css"
      tabPageClass="qt-tabs-content-css"
      @onTabPageLoadData="onTabPageLoadData"
      class="qt-single-tab-css">
      <template v-slot:waterfall-item>
        <app-list-item :type="1"/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab
} from "quicktvui";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item.vue'

export default defineComponent({
  name: '单Tab',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()

    function onESCreate() {

      //tab item list
      const tabItemList: Array<QTTabItem> = []
      let tabItem: QTTabItem = {
        _id: '1',
        type: 20000,
        text: 'Tab',
        titleSize: 20,
        decoration: {
          left: 40,
          right: 20,
        }
      }
      tabItemList.push(tabItem)

      //tab
      const tab: QTTab = {
        defaultFocusIndex: 0,
        defaultIndex: 0,
        itemList: tabItemList
      }
      tabRef.value?.initTab(tab)


      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      tabRef.value?.initPage(waterfallData)
    }

    let pageIndexLast = -1

    //-----------------------------------------------------
    function onTabPageLoadData(pageIndex: number, pageNo: number, useDiff: boolean): void {
      console.log('---------loadPageData---------->>>' +
        '  pageIndex:' + pageIndex +
        '  useDiff:' + useDiff
      )
      if (pageIndexLast === pageIndex) {
        return
      }
      pageIndexLast = pageIndex

      let section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用")

      let sectionList: Array<QTWaterfallSection> = [
        section,
      ]

      const tabPage: QTTabPageData = {
        useDiff: useDiff,
        data: sectionList
      }
      tabRef.value?.setPageData(pageIndex, tabPage)
    }

    return {
      tabRef,
      onESCreate,
      onTabPageLoadData,
    }
  },
});

</script>

<style>
.qt-single-tab-css {
  width: 1920px;
  height: 1080px;
}

.es-sdk-root-css .qt-tabs-nav-bar-css {
  width: 1920px;
  height: 0;
  background-color: red;
}

.qt-tabs-content-css {
  width: 1920px;
  height: 1080px;
  background-color: #7415B1;
}
</style>
