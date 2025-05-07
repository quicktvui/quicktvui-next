<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <s-text-button
        text="更新单个Item"
        @onButtonClicked="onUpdateButtonClicked"
      />
      <s-text-button
        text="更新多个Item"
        @onButtonClicked="onUpdateMultiButtonClicked"
      />
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
import {
  generatorAppChildrenWaterfallItem,
  generatorAppChildrenWaterfallItemList,
  generatorAppWaterfallSection,
} from '../__mocks__/app'
import appListItem from './item/app-list-item'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

const TAG = 'WaterfallTAG'

export default defineComponent({
  name: '更新Item',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onUpdateButtonClicked() {
      const item = generatorAppChildrenWaterfallItem('0', 2)
      waterfall.value?.updateItem(0, 0, item)
    }

    function onUpdateMultiButtonClicked() {
      const itemList = generatorAppChildrenWaterfallItemList('0', 2)
      waterfall.value?.updateItemList(0, 0, 2, itemList)
    }

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)
      const sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', `应用：${Date.now()}`),
        generatorAppWaterfallSection('1', `应用：${Date.now()}`),
        generatorAppWaterfallSection('2', `应用：${Date.now()}`),
      ]
      waterfall.value?.addSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onUpdateButtonClicked,
      onUpdateMultiButtonClicked,
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
