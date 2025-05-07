<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallCardSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'CardSection',
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      //
      const sectionList: Array<QTWaterfallCardSection> = []
      for (let i = 0; i < 2; i++) {
        const section: QTWaterfallCardSection = {
          _id: `${i}`,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_CARD,
          title: 'Card板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50,
          },
          itemList: [],
          cardId: '1717748409857474561',
          cardStyle: {
            width: 1920,
            height: 400,
          },
          style: {
            width: 1920,
            height: 540,
          },
          decoration: {
            top: 40,
            bottom: 40,
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
.es-sdk-root-css {
  width: 1920px;
  height: 1080px;
  background-color: #26292f;
}

.qt-waterfall-css {
  width: 1920px;
  height: 850px;
}
</style>
