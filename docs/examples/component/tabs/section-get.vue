<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <s-text-button text="查询Section" @onButtonClicked="onGetButtonClicked" />
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
import { useESLog } from '@extscreen/es3-core'
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

const TAG = 'TabWaterfallTAG'

export default defineComponent({
  name: '查询Section',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const tabRef = ref<QTITab>()
    const log = useESLog()

    function onGetButtonClicked() {
      const sectionList = tabRef.value?.getPageSectionList(0)
      log.d(TAG, '-------获取sectionList-------->>>>', sectionList)
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
      console.log(
        `---------loadPageData---------->>>` +
          `  pageIndex:${pageIndex}  useDiff:${useDiff}`
      )
      if (pageIndexLast === pageIndex) {
        return
      }
      pageIndexLast = pageIndex

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
      onGetButtonClicked,
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
