<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
      ref="tabRef"
      @onTabPageLoadData="onTabPageLoadData"
      class="qt-tabs-css">
      <template v-slot:tab-item>
        <tab-item :type="1"/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITabs, QTTabPageData, QTWaterfall, QTWaterfallSection, QTWaterfallSectionType, QTTabItem, QTTab
} from "quicktvui";
import tab_item from './item/tab-item.vue'
import {buildWaterfallItemList} from "./data/mock";

export default defineComponent({
  name: '自定义TabItem',
  components: {
    'tab-item': tab_item
  },
  setup(props, context) {
    const tabRef = ref<QTITabs>()

    function onESCreate() {

      //tab item list
      const tabItemList: Array<QTTabItem> = []

      for (let i = 0; i < 15; i++) {
        let tabItem: QTTabItem = {
          _id: '' + i,
          type: 1,
          text: 'Tab:' + i,
          titleSize: 20,
          decoration: {
            left: 40,
            right: 20,
          }
        }
        tabItemList.push(tabItem)
      }

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


      let sectionList: Array<QTWaterfallSection> = []
      for (let i = 0; i < 3; i++) {
        let section: QTWaterfallSection = {
          _id: '' + i,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50
          },
          style: {
            width: 1920,
            height: -1,
          },
          itemList: buildWaterfallItemList('' + i)
        }
        sectionList.push(section)
      }

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
.qt-tabs-css {
  width: 1920px;
  height: 900px;
}
</style>
