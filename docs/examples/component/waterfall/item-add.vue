<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <s-text-button text="添加Item" @onButtonClicked="onAddButtonClicked" />
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
  generatorAppChildrenWaterfallItemList,
  generatorAppQuestionWaterfallItemList,
  generatorAppWaterfallItemList,
  generatorWaterfallSection,
} from '../__mocks__/app'
import appListItem from './item/app-list-item'
import type {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

const TAG = 'WaterfallTAG'

export default defineComponent({
  name: '添加Item',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()

    //
    function onAddButtonClicked() {
      const itemList = generatorAppWaterfallItemList('0', 1)
      waterfall.value?.addItemList(0, itemList)
    }

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)
      //
      const sectionList: Array<QTWaterfallSection> = [
        generatorWaterfallSection(
          '0',
          `应用：${Date.now()}`,
          generatorAppQuestionWaterfallItemList('1', 5)
        ),
        generatorWaterfallSection(
          '2',
          `应用：${Date.now()}`,
          generatorAppChildrenWaterfallItemList('3', 5)
        ),
      ]
      waterfall.value?.addSectionList(sectionList)
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
.qt-waterfall-op-css {
  width: 1920px;
  height: 800px;
}
</style>
