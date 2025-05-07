<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <s-text-button
        text="更新单个板块"
        @onButtonClicked="onUpdateButtonClicked"
      />
      <s-text-button
        text="更新高度变化板块"
        @onButtonClicked="onUpdateHeightButtonClicked"
      />
      <s-text-button
        text="更新多个板块"
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
  generatorAppChildrenWaterfallItemList,
  generatorAppQuestionWaterfallItemList,
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
  name: '更新Section',
  components: {
    'app-list-item': appListItem,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onUpdateButtonClicked() {
      const section = waterfall.value?.getSection(0)
      if (section) {
        section.title = `新：${section.title}`
        section.itemList = generatorAppChildrenWaterfallItemList(`${0}`, 5)
        waterfall.value?.updateSection(0, section)
      }
    }

    function onUpdateHeightButtonClicked() {
      const section = waterfall.value?.getSection(0)
      if (section) {
        section.title = `新：${section.title}`
        section.itemList = generatorAppChildrenWaterfallItemList(`${0}`, 9)
        waterfall.value?.updateSection(0, section)
      }
    }

    function onUpdateMultiButtonClicked() {
      const sectionList: Array<QTWaterfallSection> = []
      const sectionZero = waterfall.value?.getSection(0)
      if (sectionZero) {
        sectionZero.title = `新：${sectionZero.title}`
        sectionZero.itemList = generatorAppChildrenWaterfallItemList(`${0}`, 5)
        sectionList.push(sectionZero)
      }
      const sectionOne = waterfall.value?.getSection(1)
      if (sectionOne) {
        sectionOne.title = `新：${sectionOne.title}`
        sectionOne.itemList = generatorAppQuestionWaterfallItemList(`${1}`, 6)
        sectionList.push(sectionOne)
      }
      if (sectionList) {
        waterfall.value?.updateSectionList(0, 2, sectionList)
      }
    }

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)
      //
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
      onUpdateHeightButtonClicked,
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
