<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <s-text-button text="添加板块" @onButtonClicked="onAddButtonClicked" />
      <s-text-button text="删除板块" @onButtonClicked="onDeleteButtonClicked" />
    </div>
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
  name: '删除Section',
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

    function onDeleteButtonClicked() {
      waterfall.value?.deleteSection(0, 1)
    }

    //-------------------------------------------------------------
    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)
      //
      const sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', `应用：${Date.now()}`),
      ]
      waterfall.value?.addSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onAddButtonClicked,
      onDeleteButtonClicked,
    }
  },
})
</script>

<style>
.qt-waterfall-op-css {
  width: 1920px;
  height: 800px;
}
</style>
