<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESGradientShape, ESGradientType } from '@extscreen/es3-component'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import { buildLinePosterItemList } from '../__mocks__/poster'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'SectionBackground',
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)
      const sectionList: Array<QTWaterfallSection> = []
      const endSection: QTWaterfallSection = {
        _id: '100',
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
          gradientBackground: {
            type: ESGradientType.ES_GRADIENT_TYPE_LINEAR_GRADIENT,
            shape: ESGradientShape.ES_GRADIENT_SHAPE_RECTANGLE,
            colors: ['#40b883', '#4068b8'],
            cornerRadii4: [0, 5, 20, 0],
          },
        },
      }
      sectionList.push(endSection)

      for (let i = 0; i < 1; i++) {
        const section: QTWaterfallSection = {
          _id: `${i}`,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 30,
            fontSize: 50,
          },
          itemList: buildLinePosterItemList(),
          style: {
            width: 1920,
            height: -1,
          },
        }
        sectionList.push(section)
      }
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
.qt-waterfall-css {
  width: 1920px;
  height: 1080px;
}
</style>
