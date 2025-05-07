<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <s-text-button
        text="删除第一个page第一个section"
        @onButtonClicked="onButtonClicked"
      />
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
  name: '删除Section',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const tabRef = ref<QTITab>()

    function onButtonClicked() {
      tabRef.value?.deletePageSection(0, 0, 1)
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

    let pageIndexLast = -1

    //-----------------------------------------------------
    function onTabPageLoadData(
      pageIndex: number,
      pageNo: number,
      useDiff: boolean
    ): void {
      if (pageIndexLast === pageIndex) {
        return
      }
      pageIndexLast = pageIndex

      const sectionOne: QTWaterfallSection = generatorAppWaterfallSection(
        '0',
        '应用:1'
      )
      const sectionTwo: QTWaterfallSection = generatorAppWaterfallSection(
        '1',
        '应用:2'
      )

      const sectionList: Array<QTWaterfallSection> = [sectionOne, sectionTwo]

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
