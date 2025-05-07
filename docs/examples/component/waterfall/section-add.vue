<template>
  <div class="es-sdk-root-css">
    <s-text-button text="添加板块" @onButtonClicked="onAddButtonClicked" />
    <qt-waterfall ref="waterfall" class="qt-waterfall-op-css">
      <template #item>
        <app-list-item :type="1" />
      </template>
    </qt-waterfall>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { generatorAppWaterfallSection } from '../__mocks__/app'
import appListItem from './item/app-list-item'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

const TAG = 'WaterfallTAG'

export default defineComponent({
  name: '添加Section',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onAddButtonClicked() {
      const sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', `应用：${Date.now()}`),
      ]
      waterfall.value?.addSectionList(sectionList)
    }

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)
      const sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', `应用：${Date.now()}`),
      ]
      waterfall.value?.setSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onAddButtonClicked,
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

.qt-waterfall-op-css {
  width: 1920px;
  height: 800px;
}
</style>
