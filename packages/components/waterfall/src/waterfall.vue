<template>
  <tv-list
    ref="viewRef"
    :class="ns.b()"
    class="qt-waterfall-root-css"
    keyName="_id"
    :clipChildren="false"
    :clipPadding="false"
    :listenBoundEvent="true"
    negativeKeyTime="30"
    postContentDelay="500"
    :focusMemory="false"
    :cachePool="cachePool"
    :preload="1"
    :checkScrollOffsetOnStateChanged="true"
    :makeChildVisibleType="visibleType"
    :scrollThresholdVertical="50"
    :scrollEventThrottle="16"
    :enableSelectOnFocus="false"
    advancedFocusSearchSpan="1"
    :scrollYLesserReferenceValue="scrollYLesserReferenceValue"
    :scrollYGreaterReferenceValue="scrollYGreaterReferenceValue"
    shakePreCheckNumber="4"
    :blockFocusDirections="blockFocusDirections"
    @scroll="onScroll"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    @item-bind="onSectionBind"
    @item-attached="onSectionAttached"
    @item-detached="onSectionDetached"
    @scrollYGreaterReference="onScrollYGreaterReference"
    @scrollYLesserReference="onScrollYLesserReference"
    @onPluginLoadSuccess="onPluginLoadSuccess"
    @onPluginLoadError="onPluginLoadError"
    @scrollStateChanged="onScrollStateChanged"
  >
    <!-- 普通版块-->
    <flex-section
      :cachePool="itemsPool"
      :enablePlaceholder="enablePlaceholder"
      @onPluginLoadSuccess="onPluginLoadSuccess"
      @onPluginLoadError="onPluginLoadError"
      @focus="onItemFocused"
    >
      <slot name="item" />
    </flex-section>

    <!--一行滚动 多级tab-->
    <list-section :cachePool="itemsPool" :enablePlaceholder="enablePlaceholder">
      <slot name="list-item" />
    </list-section>

    <!-- loading-->
    <loading-section />

    <!-- end -->
    <end-section />

    <!-- blank -->
    <blank-section />

    <!-- card -->
    <card-section @focus="onItemFocused" />

    <!-- plugin -->
    <plugin-section
      @onPluginLoadSuccess="onPluginLoadSuccess"
      @onPluginLoadError="onPluginLoadError"
    />

    <!-- vue -->
    <vue-section :blockFocusDirections="vueSectionBlockFocusDirections">
      <slot name="vue-section" />
    </vue-section>

    <slot name="section" />
  </tv-list>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import useBaseListView from '../../base/src/useBaseListView'
import flexSection from './section/flex-section.vue'
import listSection from './section/list-section.vue'
import loadingSection from './section/loading-section.vue'
import endSection from './section/end-section.vue'
import blankSection from './section/blank-section.vue'
import cardSection from './section/card-section.vue'
import vueSection from './section/vue-section.vue'
import pluginSection from './section/plugin-section.vue'
import { waterfallProps } from './waterfall-props'

import { QTWaterfallVisibleType } from './waterfall-types'
import { generateSection, generateSectionList } from './QTWaterfallDataAdapter'
import { createQTWaterfallDataManager } from './QTWaterfallDataManager'
import type { QTIListView } from '../../list-view'
import type {
  QTWaterfall,
  QTWaterfallEvent,
  QTWaterfallIndex,
  QTWaterfallItem,
  QTWaterfallSection,
} from './waterfall-types'
import type { QTWaterfallDataManager } from './QTWaterfallDataManager'
import type { QTPluginViewEvent } from '../../plugin-view'

const TAG = 'qt-waterfall'

export default defineComponent({
  name: 'QtWaterfall',

  components: {
    'flex-section': flexSection,
    'list-section': listSection,
    'loading-section': loadingSection,
    'end-section': endSection,
    'blank-section': blankSection,
    'card-section': cardSection,
    'vue-section': vueSection,
    'plugin-section': pluginSection,
  },
  props: waterfallProps,
  emits: [
    'onScroll',
    'onScrollStateChanged',
    'onItemClick',
    'onItemFocused',
    'onSectionBind',
    'onSectionAttached',
    'onSectionDetached',
    'onScrollYGreaterReference',
    'onScrollYLesserReference',
    'onPluginLoadSuccess',
    'onPluginLoadError',
  ],
  setup(props, context) {
    const log = useESLog()
    const ns = useNamespace('waterfall')

    const defaultPool = {
      name: `Waterfall${Date.now()}`,
      size: {
        20008: 10,
      },
    }
    const cachePool = { ...defaultPool, ...props.customPool }
    log.e('WaterfallVue', `waterfall cachePool :${JSON.stringify(cachePool)}`)
    const defaultItemsPool = {
      name: `waterfallItems${Date.now()}`,
      size: {
        1: 30,
      },
    }
    const itemsPool = { ...defaultItemsPool, ...props.customItemPool }
    log.e('WaterfallVue', `itemsPool  :${JSON.stringify(itemsPool)}`)
    //------------------------------------------------------
    const visibleType = ref<QTWaterfallVisibleType>(
      QTWaterfallVisibleType.QT_WATERFALL_VISIBLE_TYPE_CENTER
    )
    const viewRef = ref<QTIListView>()
    let waterfall: QTWaterfall

    const dataManager: QTWaterfallDataManager = createQTWaterfallDataManager()

    //---------------------------------初始化操作------------------------------------
    function init(data: QTWaterfall): void {
      waterfall = data
      //
      if (data.visibleType) {
        visibleType.value = data.visibleType
      }
    }

    function getSectionList(): Array<QTWaterfallSection> {
      return dataManager.getSectionList()
    }

    //---------------------------------板块操作------------------------------------
    function setSectionList(sectionList: Array<QTWaterfallSection>): void {
      if (!waterfall) {
        return
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------1---setSectionList-------------->>>')
      }
      //
      dataManager.destroy()

      const index: QTWaterfallIndex = dataManager.addSectionList(sectionList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------2---setSectionList-------------->>>', index)
      }
      const itemList = generateSectionList(waterfall, sectionList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '----------setSectionList-----最终数据--------->>>',
          itemList
        )
      }
      viewRef.value?.setListData(itemList)
    }

    function addSectionList(sectionList: Array<QTWaterfallSection>): void {
      if (!waterfall) {
        return
      }
      const index: QTWaterfallIndex = dataManager.addSectionList(sectionList)
      const itemList = generateSectionList(waterfall, sectionList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '----------addSectionList-----最终数据--------->>>',
          index,
          itemList
        )
      }
      viewRef.value?.addListData(itemList)
    }

    function deleteSection(position: number, count: number): void {
      const index: QTWaterfallIndex = dataManager.deleteSection(position, count)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------deleteSection-----最终数据--------->>>', index)
      }
      viewRef.value?.deleteItem(position, count)
    }

    function updateSection(
      sectionIndex: number,
      section: QTWaterfallSection
    ): void {
      const index: QTWaterfallIndex = dataManager.updateSection(
        sectionIndex,
        section
      )
      const updateSection = generateSection(waterfall, section)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------updateSection-----最终数据--------->>>` + `index${index}`,
          'sectionIndex:',
          sectionIndex,
          'updateSection:',
          updateSection
        )
      }
      viewRef.value?.updateItem(sectionIndex, updateSection)
    }

    function updateSectionList(
      sectionIndex: number,
      count: number,
      sectionList: Array<QTWaterfallSection>
    ): void {
      const sectionUpdateList: Array<QTWaterfallSection> = []
      for (const [i, section] of sectionList.entries()) {
        const index: QTWaterfallIndex = dataManager.updateSection(
          sectionIndex + i,
          section
        )
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------updateSectionList----------->>>', index)
        }
        const sectionUpdate = generateSection(waterfall, section)
        if (sectionUpdate) {
          sectionUpdateList.push(sectionUpdate)
        }
      }
      viewRef.value?.updateItemList(sectionIndex, count, sectionUpdateList)
    }

    function getSection(sectionIndex: number): QTWaterfallSection | undefined {
      return dataManager.getSection(sectionIndex)
    }

    //--------------------------------ITEM操作-------------------------------------
    function addItemList(
      sectionIndex: number,
      itemList: Array<QTWaterfallItem>
    ): void {
      const index: QTWaterfallIndex = dataManager.addItemList(
        sectionIndex,
        itemList
      )
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------addItemList----------->>>', index)
      }
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        viewRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function deleteItem(
      sectionIndex: number,
      position: number,
      count: number
    ): void {
      const index: QTWaterfallIndex = dataManager.deleteItem(
        sectionIndex,
        position,
        count
      )
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------deleteItem----------->>>', index)
      }
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        viewRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function updateItem(
      sectionIndex: number,
      itemIndex: number,
      item: QTWaterfallItem
    ): void {
      const index: QTWaterfallIndex = dataManager.updateItem(
        sectionIndex,
        itemIndex,
        item
      )
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------updateItem----------->>>', index)
      }
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        viewRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function updateItemList(
      sectionIndex: number,
      itemIndex: number,
      count: number,
      itemList: Array<QTWaterfallItem>
    ): void {
      const index: QTWaterfallIndex = dataManager.updateItemList(
        sectionIndex,
        itemIndex,
        count,
        itemList
      )
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------updateItemList----------->>>', index)
      }
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        viewRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function getItem(
      sectionIndex: number,
      itemIndex: number
    ): QTWaterfallItem | undefined {
      return dataManager.getItem(sectionIndex, itemIndex)
    }

    //-------------------------------------------------------------------
    function destroy(): void {
      viewRef.value?.destroy()
    }

    function clearPostTask(): void {
      viewRef.value?.clearPostTask()
    }

    function pausePostTask(): void {
      viewRef.value?.pausePostTask()
    }

    function resumePostTask(): void {
      viewRef.value?.pausePostTask()
    }

    function scrollToTop(): void {
      viewRef.value?.scrollToTop()
    }

    //-------------------------------------------------------------------
    function onScroll(e): void {
      e.stopPropagation()
      const scrollX = e.offsetX
      const scrollY = e.offsetY
      context.emit('onScroll', scrollX, scrollY)
    }

    function onItemClick(e: QTWaterfallEvent): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '----------onItemClick-------------->>>',
          e,
          `sectionIndex:${e.parentPosition}  ` + `position:${e.position}  `
        )
      }
      context.emit('onItemClick', e.parentPosition, e.position, e.item)
    }

    function onItemFocused(e: QTWaterfallEvent): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '----------onItemFocused-------------->>>',
          e,
          `sectionIndex:${e.parentPosition}  ` +
            `position:${e.position}  ` +
            `isFocused:${e.isFocused}  `
        )
      }
      context.emit(
        'onItemFocused',
        e.parentPosition,
        e.position,
        e.isFocused,
        e.item
      )
    }

    function onSectionBind(e): void {
      if (e) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onSectionBind-------------->>>', e)
        }
        const pageIndex = e.pageIndex ?? -1
        context.emit('onSectionBind', pageIndex, e.position)
      }
    }

    function onSectionAttached(e): void {
      if (e) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onSectionAttached-------------->>>', e)
        }
        const pageIndex = e.pageIndex ?? 0
        context.emit('onSectionAttached', pageIndex, e.position)
      }
    }

    function onSectionDetached(e): void {
      if (e) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onSectionDetached-------------->>>', e)
        }
        const pageIndex = e.pageIndex ?? 0
        context.emit('onSectionDetached', pageIndex, e.position)
      }
    }

    function onScrollStateChanged(e): void {
      const scrollY = e.offsetY
      const offsetX = e.offsetX
      const newState = e.newState
      const oldState = e.oldState
      context.emit('onScrollStateChanged', offsetX, scrollY, newState, oldState)
    }

    function onScrollYGreaterReference(): void {
      context.emit('onScrollYGreaterReference')
    }

    function onScrollYLesserReference(): void {
      context.emit('onScrollYLesserReference')
    }

    //-------------------------------------------------------------------------
    function setListData(data: any): void {
      viewRef.value?.setListData(data)
    }

    //-------------------------------------------------------------------------

    function onPluginLoadSuccess(event: QTPluginViewEvent): void {
      context.emit('onPluginLoadSuccess', event)
    }

    function onPluginLoadError(event: QTPluginViewEvent): void {
      context.emit('onPluginLoadError', event)
    }

    return {
      ns,
      viewRef,
      ...useBaseView(viewRef),
      ...useBaseListView(viewRef),
      visibleType,
      init,
      getSectionList,
      setSectionList,
      addSectionList,
      deleteSection,
      updateSection,
      updateSectionList,
      getSection,
      addItemList,
      deleteItem,
      updateItem,
      updateItemList,
      getItem,
      cachePool,
      itemsPool,
      onScroll,
      onItemClick,
      onItemFocused,
      onSectionBind,
      onSectionAttached,
      onSectionDetached,
      onScrollStateChanged,
      resumePostTask,
      pausePostTask,
      clearPostTask,
      destroy,
      scrollToTop,
      setListData,
      onScrollYGreaterReference,
      onScrollYLesserReference,
      onPluginLoadSuccess,
      onPluginLoadError,
    }
  },
})
</script>
