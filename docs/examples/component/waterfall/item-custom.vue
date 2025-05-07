<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css">
      <template #item>
        <text-item :type="1" />
      </template>
    </qt-waterfall>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import textItem from './item/text-item.vue'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '自定义Item',
  components: {
    'text-item': textItem,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)
      const itemList: Array<QTWaterfallItem> = []
      for (let i = 0; i < 2; i++) {
        const item: QTWaterfallItem = {
          _id: `${i}`,
          type: 1,
          style: {
            width: 500,
            height: 200,
          },
        }
        itemList.push(item)
      }
      const section: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        title: '板块',
        itemList,
        style: {
          width: 1920,
          height: 200,
          spacing: 20,
        },
      }
      const sectionList: Array<QTWaterfallSection> = [section, section, section]
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
