<template>
  <div class="es-sdk-root-css">
    <qt-tabs
      ref="tabRef"
      :horizontal="false"
      tabClass="qt-tabs-horizontal-css"
      tabNavBarClass="qt-tabs-tab-css"
      tabPageClass="qt-tabs-page-css"
      class="qt-tabs-horizontal-css"
      @onTabPageLoadData="onTabPageLoadData"
    >
      <template #waterfall-item>
        <app-list-item :type="1" />
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { generatorAppWaterfallSection } from '../__mocks__/app'
import appListItem from './item/app-list-item'
import type {
  QTITab,
  QTTab,
  QTTabItem,
  QTTabPageData,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '横向',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const tabRef = ref<QTITab>()

    function onESCreate() {
      //tab item list
      const tabItemList: Array<QTTabItem> = []

      for (let i = 0; i < 15; i++) {
        const tabItem: QTTabItem = {
          _id: `${i}`,
          type: 20000,
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
        width: 1670,
        height: 1080,
      }
      tabRef.value?.initPage(waterfallData)
    }

    function onTabPageLoadData(
      pageIndex: number,
      pageNo: number,
      useDiff: boolean
    ): void {
      const section: QTWaterfallSection = generatorAppWaterfallSection(
        '0',
        '应用'
      )
      const sectionList: Array<QTWaterfallSection> = [section]
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
.qt-tabs-horizontal-css {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.qt-tabs-tab-css {
  width: 250px;
  height: 800px;
}

.qt-tabs-page-css {
  width: 1670px;
  height: 1080px;
}
</style>
