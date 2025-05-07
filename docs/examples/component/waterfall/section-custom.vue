<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css">
      <template #section>
        <text-section :type="1" />
      </template>
    </qt-waterfall>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import textSection from './section/text-section'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '自定义ection',
  components: {
    'text-section': textSection,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      const section: QTWaterfallSection = {
        _id: '1',
        type: 1,
        itemList: [],
        style: {
          width: 1920,
          height: 320,
        },
      }
      const sectionList: Array<QTWaterfallSection> = [section]
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
