<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css">
      <template #vue-section>
        <time-section />
      </template>
    </qt-waterfall>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'

import timeSection from './section/time-section.vue'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'VueSection',
  components: {
    'time-section': timeSection,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      //
      const sectionList: Array<QTWaterfallSection> = []
      const section: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_VUE,
        title: 'VueSection',
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
          height: 400,
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
