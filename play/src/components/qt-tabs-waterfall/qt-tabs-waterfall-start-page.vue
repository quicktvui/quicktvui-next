<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
        ref="tabRef"
        tabPageClass="qt-tabs-content-css"
        @onTabPageChanged="onTabPageChanged"
        @onTabPageLoadData="onTabPageLoadData"
        class="qt-tabs-waterfall-root-css">
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
import app_list_item from './item/app-list-item'

/**
 *
 */
export default defineComponent({
  name: '使用初探',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()

    function onESCreate() {

      //tab item list
      const tabItemList: Array<QTTabItem> = []

      for (let i = 0; i < 15; i++) {
        let tabItem: QTTabItem = {
          _id: '' + i,
          type: 20000,
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
        height: 100
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

    function onTabPageChanged(pageIndex: number, data: QTTabItem) {
      console.log('---------onTabPageChanged---------->>>' +
          '  pageIndex:' + pageIndex +
          '  data:', data
      )

      tabRef.value?.getCurrentTabIndex().then((index: number) => {
        console.log('---------onTabPageChanged---------->>>' +
            '  index:' + index
        )
      })
    }

    return {
      tabRef,
      onESCreate,
      onTabPageLoadData,
      onTabPageChanged,
    }
  },
});

</script>

<style>
.qt-tabs-waterfall-root-css {
  width: 1920px;
  height: 900px;
  background-color: red;
}

.qt-tabs-waterfall-root-css .qt-tabs-content-css {
  width: 1920px;
  height: 800px;
  background-color: #7415B1;
}

</style>
