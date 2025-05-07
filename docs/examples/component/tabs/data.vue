<template>
  <div class="es-sdk-root-css">
    <qt-tabs
      ref="tabRef"
      :outOfDateTime="1000000"
      class="qt-tabs-css"
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
import { QTTabPageState } from '@quicktvui/quicktvui3'
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
  name: '设置数据',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const tabRef = ref<QTITab>()
    //tab item list
    const tabItemList: Array<QTTabItem> = []

    function onESCreate() {
      for (let i = 0; i < 10; i++) {
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
      getPageData(pageIndex, pageNo, useDiff)
    }

    function getPageData(pageIndex: number, pageNo: number, useDiff: boolean) {
      setTimeout(() => {
        const sectionList: Array<QTWaterfallSection> = []
        for (let i = 0; i < 1; i++) {
          const section: QTWaterfallSection = generatorAppWaterfallSection(
            `${i}`,
            `Page:${pageNo}的应用`
          )
          sectionList.push(section)
        }
        const tabPage: QTTabPageData = {
          useDiff,
          data: sectionList,
        }
        if (pageNo == 0) {
          tabRef.value?.setPageData(pageIndex, tabPage)
        } else {
          tabRef.value?.addPageData(pageIndex, tabPage, 0)
        }
        if (pageNo == 8) {
          tabRef.value?.setPageState(
            pageIndex,
            QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE
          )
        }
      }, 1000)
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
  height: 1080px;
}
</style>
