<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import { buildCardItemList } from '../__mocks__/card'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'CardItem',
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      const sectionList: Array<QTWaterfallSection> = []
      const section: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        title: 'CardItem板块:',
        titleStyle: {
          width: 1920,
          height: 60,
          marginLeft: 90,
          marginTop: 40,
          marginBottom: 40,
          fontSize: 50,
        },
        itemList: buildCardItemList(),
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
.qt-waterfall-css {
  width: 1920px;
  height: 850px;
}
</style>
