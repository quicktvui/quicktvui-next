<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <s-text-button text="添加Section" @onButtonClicked="onButtonClicked" />
    </div>
    <qt-tabs
      ref="tabRef"
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
  name: '添加Section',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const tabRef = ref<QTITab>()

    function onButtonClicked() {
      const sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', '新添加应用'),
      ]
      const tabPage: QTTabPageData = {
        useDiff: true,
        data: sectionList,
      }
      tabRef.value?.addPageData(0, tabPage, 0)
    }

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
        width: 1920,
        height: 1080,
      }
      tabRef.value?.initPage(waterfallData)
    }

    let pageNum = 0

    function onTabPageLoadData(
      pageIndex: number,
      pageNo: number,
      useDiff: boolean
    ): void {
      if (pageIndex !== 0) {
        return
      }
      setTimeout(() => {
        const section: QTWaterfallSection = generatorAppWaterfallSection(
          '0',
          '应用'
        )

        const sectionList: Array<QTWaterfallSection> = [section]

        const tabPage: QTTabPageData = {
          useDiff,
          data: sectionList,
        }
        if (pageNum == 0) {
          tabRef.value?.setPageData(pageIndex, tabPage)
        } else {
          tabRef.value?.addPageData(pageIndex, tabPage, 0)
        }
        pageNum++

        if (pageNum === 2) {
          tabRef.value?.setPageState(
            pageIndex,
            QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE
          )
        }
      }, 2000)
    }

    return {
      tabRef,
      onESCreate,
      onTabPageLoadData,
      onButtonClicked,
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
