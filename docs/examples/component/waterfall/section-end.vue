<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import { buildLinePosterItemList } from '../__mocks__/poster'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'EndSection',
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      //1.创建一个结束板块
      const sectionList: Array<QTWaterfallSection> = []
      const endSection: QTWaterfallSection = {
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_END,
        title: '已经到底啦，按【返回键】回到顶部',
        titleStyle: {
          width: 1920,
          height: 200,
          marginLeft: 90,
          marginTop: 40,
          marginBottom: 40,
          fontSize: 50,
        },
        itemList: [],
        style: {
          width: 1920,
          height: 200,
        },
      }
      sectionList.push(endSection)

      //2.创建一个结束板块
      const section: QTWaterfallSection = {
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        title: '底部板块',
        titleStyle: {
          width: 1920,
          height: 60,
          marginTop: 30,
          marginBottom: 30,
          marginLeft: 30,
        },
        itemList: buildLinePosterItemList(),
        style: {
          width: 1920,
          height: -1,
        },
      }
      sectionList.push(section)
      waterfall.value?.setSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
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
