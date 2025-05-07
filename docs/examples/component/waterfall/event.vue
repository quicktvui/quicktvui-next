<template>
  <div class="es-sdk-root-css">
    <qt-waterfall
      ref="waterfall"
      class="qt-waterfall-css"
      @onScroll="onScroll"
      @onItemClick="onItemClick"
      @onItemFocused="onItemFocused"
      @onItemBind="onItemBind"
      @onScrollStateChanged="onScrollStateChanged"
      @onItemAttached="onItemAttached"
    >
      <template #item>
        <text-item :type="1" />
      </template>
    </qt-waterfall>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESLog } from '@extscreen/es3-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import textItem from './item/text-item.vue'
import type {
  QTIWaterfall,
  QTScrollState,
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

const TAG = 'QTWaterfallEvent'

export default defineComponent({
  name: '事件',
  components: {
    'text-item': textItem,
  },
  setup() {
    const waterfall = ref<QTIWaterfall>()
    const log = useESLog()

    function onScroll(offsetX: number, scrollY: number) {
      log.d(TAG, ` offsetX:${offsetX} scrollY:${scrollY}`)
    }

    function onItemClick(
      sectionIndex: number,
      position: number,
      item: QTWaterfallItem
    ) {
      log.d(
        TAG,
        ` sectionIndex:${sectionIndex} position:${position} item:`,
        item
      )
    }

    function onItemFocused(
      sectionIndex: number,
      position: number,
      isFocused: boolean,
      item: QTWaterfallItem
    ) {
      log.d(
        TAG,
        ` sectionIndex:${sectionIndex} position:${position} isFocused:${isFocused} item:`,
        item
      )
    }

    function onItemBind(position: number) {
      log.d(TAG, ` position:${position}`)
    }

    function onItemAttached(position: number) {
      log.d(TAG, ` position:${position}`)
    }

    function onScrollStateChanged(
      offsetX: number,
      scrollY: number,
      newState: QTScrollState
    ) {
      log.d(TAG, ` offsetX:${offsetX} scrollY:${scrollY} newState:${newState}`)
    }

    function onESCreate() {
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      //
      const sectionList: Array<QTWaterfallSection> = []
      for (let i = 0; i < 2; i++) {
        const itemList: Array<QTWaterfallItem> = []
        for (let k = 0; k < 2; k++) {
          const item: QTWaterfallItem = {
            _id: `${i}_${k}`,
            type: 1,
            style: {
              width: 500,
              height: 200,
            },
          }
          itemList.push(item)
        }

        const section: QTWaterfallSection = {
          _id: `${i}`,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块',
          itemList,

          style: {
            width: 1920,
            height: 200,
          },
        }
        sectionList.push(section)
      }
      waterfall.value?.setSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onScroll,
      onItemClick,
      onItemFocused,
      onItemBind,
      onItemAttached,
      onScrollStateChanged,
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
