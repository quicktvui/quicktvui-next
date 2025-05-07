<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import { buildPosterItemList } from '../__mocks__/poster'
import type { QTIWaterfall, QTWaterfallSection } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'ListSection',
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      waterfall.value?.init({
        width: 1920,
        height: 1080,
      })

      const section: QTWaterfallSection = {
        itemList: buildPosterItemList('1'),
        style: {
          width: 1920,
          height: 500,
          spacing: 20,
        },
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_LIST,
      }
      waterfall.value?.setSectionList([section])
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
