<template>
  <div class="es-sdk-root-css">
    <qt-tabs
      ref="tabRef"
      tabNavBarClass="qt-tabs-nav-bar-css"
      tabContentClass="qt-tabs-content-css"
      class="qt-single-tab-css"
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
import appListItem from './item/app-list-item.vue'
import type {
  QTITab,
  QTTab,
  QTTabItem,
  QTTabPageData,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '单Tab',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const tabRef = ref<QTITab>()

    function onESCreate() {
      //tab item list
      const tabItemList: Array<QTTabItem> = []
      const tabItem: QTTabItem = {
        _id: '1',
        type: 20000,
        text: 'Tab',
        titleSize: 20,
        decoration: {
          left: 40,
          right: 20,
        },
      }
      tabItemList.push(tabItem)
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
  background-color: #7415b1;
}
</style>
