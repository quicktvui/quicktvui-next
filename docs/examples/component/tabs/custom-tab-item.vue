<template>
  <div class="es-sdk-root-css">
    <qt-tabs
      ref="tabRef"
      class="qt-tabs-css"
      @onTabPageLoadData="onTabPageLoadData"
    >
      <template #tab-item>
        <tab-item :type="1" />
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import tabItem from './item/tab-item'
import { buildWaterfallItemList } from './data/mock'
import type {
  QTITab,
  QTTab,
  QTTabItem,
  QTTabPageData,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '自定义TabItem',
  components: {
    'tab-item': tabItem,
  },
  setup() {
    const tabRef = ref<QTITab>()

    function onESCreate() {
      //tab item list
      const tabItemList: Array<QTTabItem> = []

      for (let i = 0; i < 15; i++) {
        const tabItem: QTTabItem = {
          _id: `${i}`,
          type: 1,
          text: `Tab:${i}`,
          titleSize: 20,
          decoration: {
            left: 40,
            right: 20,
          },
        }
        tabItemList.push(tabItem)
      }

      //tab
      const tab: QTTab = {
        defaultFocusIndex: 0,
        defaultIndex: 0,
        itemList: tabItemList,
      }
      tabRef.value?.initTab(tab)

      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      tabRef.value?.initPage(waterfallData)
    }

    function onTabPageLoadData(
      pageIndex: number,
      pageNo: number,
      useDiff: boolean
    ): void {
      const sectionList: Array<QTWaterfallSection> = []
      for (let i = 0; i < 3; i++) {
        const section: QTWaterfallSection = {
          _id: `${i}`,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50,
          },
          style: {
            width: 1920,
            height: -1,
          },
          itemList: buildWaterfallItemList(`${i}`),
        }
        sectionList.push(section)
      }

      const tabPage: QTTabPageData = {
        useDiff,
        data: sectionList,
      }
      tabRef.value?.setPageData(pageIndex, tabPage)
    }

    return {
      tabRef,
      onESCreate,
      onTabPageLoadData,
    }
  },
})
</script>

<style>
.qt-tabs-css {
  width: 1920px;
  height: 900px;
}
</style>
