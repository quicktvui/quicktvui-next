<template>
  <div class="es-sdk-root-css">
    <qt-tabs
      ref="tabRef"
      class="qt-tabs-css"
      @onTabPageLoadData="onTabPageLoadData"
    >
      <template #waterfall-vue-section>
        <vue-one-section />
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import vueOneSection from './section/vue-one-section'
import type {
  QTITab,
  QTTab,
  QTTabItem,
  QTTabPageData,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'VueSection',
  components: {
    'vue-one-section': vueOneSection,
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
      const sectionOne: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_VUE,
        itemList: [],
        style: {
          width: 1920,
          height: 320,
        },
        decoration: {
          top: 20,
          bottom: 20,
        },
      }
      const sectionList: Array<QTWaterfallSection> = [sectionOne]

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
  height: 1080px;
}
</style>
