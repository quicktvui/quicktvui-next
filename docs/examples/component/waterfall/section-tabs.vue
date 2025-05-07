<template>
  <div class="es-sdk-root-css">
    <qt-waterfall
      ref="waterfall"
      class="qt-waterfall-css"
      @onItemClick="onItemClick"
      @onItemFocused="onItemFocused"
    />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import {
  QTWaterfallItemType,
  QTWaterfallSectionType,
} from '@quicktvui/quicktvui3'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
  QTWaterfallTabItem,
} from '@quicktvui/quicktvui3'

const TAG = 'TabSectionPage'

export default defineComponent({
  name: 'TabSection',
  setup() {
    const log = useESLog()
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      const tabItemList = []

      for (let i = 0; i < 15; i++) {
        const tabItem: QTWaterfallTabItem = {
          _id: `${i}`,
          style: {
            width: 200,
            height: 50,
            paddingLeft: 40,
            paddingRight: 40,
          },
          type: QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_TAB,
          text: `Tab:${i}`,
        }
        tabItemList.push(tabItem)
      }

      const tabSection: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_TAB,
        title: 'Tab板块',
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
        itemList: tabItemList,
      }

      const sectionList: Array<QTWaterfallSection> = [tabSection]

      waterfall.value?.setSectionList(sectionList)
    }

    //-----------------------------------------------------
    function onItemClick(
      sectionIndex: number,
      position: number,
      item: QTWaterfallItem
    ) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          item,
          `sectionIndex:${sectionIndex}  ` + `position:${position}  ` + `item:`,
          item
        )
      }
      if (item.type === QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_TAB) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            `  sectionIndex:${sectionIndex}  position:${position}  item:`,
            item
          )
        }
      }
    }

    function onItemFocused(
      sectionIndex: number,
      position: number,
      isFocused: boolean,
      item: QTWaterfallItem
    ) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          item,
          `sectionIndex:${sectionIndex}  ` +
            `position:${position}  ` +
            `isFocused:${isFocused}  `
        )
      }

      if (item.type === QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_TAB) {
        if (isFocused) {
          //do sth
        }
      }
    }

    return {
      waterfall,
      onESCreate,
      onItemFocused,
      onItemClick,
    }
  },
})
</script>

<style>
.es-sdk-root-css {
  width: 1920px;
  height: 1080px;
  background-color: #26292f;
}

.qt-waterfall-css {
  width: 1920px;
  height: 1080px;
}
</style>
