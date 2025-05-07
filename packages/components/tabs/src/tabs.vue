<template>
  <qt-tabs-view
    v-if="ifTabs"
    ref="viewRef"
    :class="[ns.b(), tabClass]"
    :data-strategy="tabsDataStrategy"
    :hideOnSingleTab="hideOnSingleTab"
    :pageSwitchDelay="tabContentSwitchDelay"
    :resumeTaskDelay="tabContentResumeDelay"
    :suspension="floatNavBar"
    :useSuspensionBg="useNavBarBg"
    :clipChildren="false"
    :outOfDateTime="outOfDateTime"
    :blockFocusDirections="tabContentBlockFocusDirections"
    @scroll-to-start="onTabPageScrollToStart"
    @scroll-to-end="onTabPageScrollToEnd"
    @load-page="onTabPageLoadData"
    @page-changed="onTabPageChanged"
    @tab-event="onTabEvent"
  >
    <qt-nav-bar
      ref="navBarRef"
      name="tabList"
      :focusable="false"
      :class="tabNavBarClass"
      :sid="tabNavBarSid"
      textKey="text"
      :nextFocusName="navBarNextFocusName"
      :horizontalFadingEdgeEnabled="horizontalFadingEdgeEnabled"
      :verticalFadingEdgeEnabled="verticalFadingEdgeEnabled"
      :fadingEdgeLength="fadingEdgeLength"
      :clipChildren="false"
      :horizontal="horizontal"
      @tab-focus="onTabChange"
      @tab-click="onTabClick"
    >
      <slot name="tab-item" />
    </qt-nav-bar>

    <qt-view-pager
      ref="viewPager"
      :nextFocusName="contentNextFocus"
      :class="tabPageClass"
      name="content"
      :loadingItemType="-1"
      :clipChldren="false"
      :opacity="rootOpacity"
      :focusable="false"
      :enableTransform="pageTransform"
      :slidingEnable="slidingEnable"
      :slidingMode="slidingMode"
      :initTranslation="initTranslation"
      :rightTranslation="rightTranslation"
      :leftTranslation="leftTranslation"
      :duration="duration"
      :interpolatorType="interpolatorType"
      :triggerTask="triggerTask"
      :direction="horizontal ? 'horizontal' : 'vertical'"
    >
      <qt-waterfall
        keyName="_id"
        :endHintEnabled="endHintEnabled"
        :enablePlaceholder="enablePlaceholder"
        :customPool="customPool"
        sid="${sid}"
        :customItemPool="customItemPool"
        :blockFocusDirections="
          horizontal ? blockViewPager : blockViewPagerVertical
        "
        @onScrollStateChanged="onWaterfallScrollStateChanged"
        @onScroll="onWaterfallScroll"
        @onSectionBind="onWaterfallSectionBind"
        @onSectionAttached="onWaterfallSectionAttached"
        @onSectionDetached="onWaterfallSectionDetached"
        @onItemFocused="onWaterfallItemFocused"
        @onItemClick="onWaterfallItemClick"
        @onPluginLoadSuccess="onPluginLoadSuccess"
        @onPluginLoadError="onPluginLoadError"
      >
        <template #item>
          <slot name="waterfall-item" />
        </template>
        <template #list-item>
          <slot name="waterfall-list-item" />
        </template>
        <template #section>
          <slot name="waterfall-section" />
        </template>
        <template #vue-section>
          <slot name="waterfall-vue-section" />
        </template>
      </qt-waterfall>
    </qt-view-pager>
  </qt-tabs-view>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { useNamespace } from '../../../hooks'
import useBaseListView from '../../base/src/useBaseListView'
import useBaseView from '../../base/src/useBaseView'
import { QTListViewItemState } from '../../list-view'
import {
  generateSection,
  generateSectionList,
} from '../../waterfall/src/QTWaterfallDataAdapter'
import { createQTTabDataManager } from './QTTabDataManager'
import { tabsProps } from './tabs-props'
import { QTTabPageState } from './tabs-types'
import type { QTINavBar } from '../../nav-bar'
import type { QTPluginViewEvent } from '../../plugin-view'
import type {
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
} from '../../waterfall'
import type { QTTab, QTTabEvent, QTTabItem, QTTabPageData } from './tabs-types'

import type { QTITabsView, QTTabsView } from '../../tabs-view'
import type { QTListViewItemFunctionParams } from '../../list-view'
import type { QTPageData } from '../../view-pager'
import type { QTViewStateCallback } from '../../view'

const TAG = 'qt-tabs'

export default defineComponent({
  name: 'QtTabs',
  props: tabsProps,
  emits: [
    'onTabPageLoadData',
    'onTabPageChanged',
    'onTabEvent',
    'onTabPageItemClick',
    'onTabPageItemFocused',
    'onTabPageSectionAttached',
    'onTabPageScroll',
    'onTabPageScrollStateChanged',
    //
    'onTabMoveToTopStart',
    'onTabMoveToTopEnd',
    'onTabMoveToBottomStart',
    'onTabMoveToBottomEnd',
    'onTabChanged',
    //
    'onTabPageScrollToEnd',
    'onTabPageScrollToStart',
    //
    'onTabClick',
    //
    'onPluginLoadSuccess',
    'onPluginLoadError',
  ],
  setup(props, context) {
    const ns = useNamespace('tabs')
    const viewRef = ref<QTITabsView>()
    const ifTabs = ref(true)
    const rootOpacity = ref(1)
    const log = useESLog()
    const navBarRef = ref<QTINavBar>()
    //
    const tabDataManager = createQTTabDataManager()

    let tabItemList: Array<QTTabItem> = []

    let waterfall: QTWaterfall
    let currentTabPageIndex = -1
    let lastTabPageIndex = -1
    let notifySectionAttachTimer: any = -1

    //--------------------------------------------------------
    function initTab(tab: QTTab): void {
      const data: QTTabsView = {
        defaultIndex: tab.defaultIndex,
        focusIndex: tab.defaultFocusIndex,
        data: tab.itemList,
      }
      tabItemList = tab.itemList
      tabDataManager.initTab(tab)
      viewRef.value?.setTabsData(data)
    }

    //--------------------------------------------------------
    function initPage(w: QTWaterfall) {
      waterfall = w
    }

    function setPageState(pageIndex: number, state: QTTabPageState): void {
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.state = state
        tabDataManager.setPageDataState(pageIndex, pageData)
      }
    }

    function setPageBindSectionIndex(pageIndex: number, sectionIndex: number) {
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.sectionBindIndex = sectionIndex
        tabDataManager.setPageDataState(pageIndex, pageData)
      }
    }

    function setPageStateReset(pageIndex: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----设置数据---setPageStateReset->>>>pageIndex:${pageIndex}`
        )
      }
      //设置绑定的section index
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.state = QTTabPageState.QT_TAB_PAGE_STATE_INIT
        pageData.sectionBindIndex = -1
        tabDataManager.setPageDataState(pageIndex, pageData)
      }

      //重置缓存数据
      const list = tabDataManager.getSectionList(pageIndex)
      tabDataManager.deleteSection(pageIndex, 0, list.length - 1)

      //重置页码
      resetTabPageDataNo(pageIndex)
    }

    function setPageStateRecycled(pageIndex: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----设置数据---setPageStateRecycled->>>>pageIndex:${pageIndex}`
        )
      }
      //设置绑定的section index
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.sectionBindIndex = 0
        pageData.state = QTTabPageState.QT_TAB_PAGE_STATE_IDLE
        tabDataManager.setPageDataState(pageIndex, pageData)
      }

      //重置缓存数据
      const list = tabDataManager.getSectionList(pageIndex)
      tabDataManager.deleteSection(pageIndex, 1, list.length - 1)

      //重置页码
      setTabPageDataNo(pageIndex, 1)
    }

    function getPageBindSectionIndex(pageIndex: number): number {
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        return pageData.sectionBindIndex ?? -1
      }
      return -1
    }

    //--------------------------------------------------------
    function setPageData(pageIndex: number, tabPageData: QTTabPageData): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------loadPageData----setPageData-->>>>pageIndex:${pageIndex}`
        )
      }
      //
      const tabIndex = tabDataManager.addSectionList(
        pageIndex,
        tabPageData.data
      )
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, `------------setPageData--->>>>tabIndex:${tabIndex}`)
      }
      const itemList = generateSectionList(waterfall, tabPageData.data)
      const data: QTPageData = {
        data: itemList,
        disableScrollOnFirstScreen:
          tabPageData.disableScrollOnFirstScreen ?? false,
        firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
        useDiff: tabPageData.useDiff,
        bindingPlayer: tabPageData.bindingPlayer,
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `---------设置数据-----setPageData------>>>>` +
            ` pageIndex:${pageIndex} data:`,
          data
        )
      }
      //
      increaseTabPageDataNo(pageIndex)
      viewRef.value?.setPageData(pageIndex, data)
    }

    function addPageData(
      pageIndex: number,
      tabPageData: QTTabPageData,
      deleteCount = 0
    ): void {
      const tabIndex = tabDataManager.addSectionList(
        pageIndex,
        tabPageData.data
      )
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, `------------addPageData--->>>>tabIndex:${tabIndex}`)
      }
      const itemList = generateSectionList(waterfall, tabPageData.data)
      const data: QTPageData = {
        data: itemList,
        disableScrollOnFirstScreen:
          tabPageData.disableScrollOnFirstScreen ?? false,
        firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
        useDiff: tabPageData.useDiff,
      }
      //
      try {
        const pageNo = getTabPageDataNo(pageIndex)
        if (pageNo == 0) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(
              TAG,
              `---------设置数据------setPageData--->>>>` +
                ` pageIndex:${pageIndex} pageNo:${pageNo} data:`,
              data,
              ` deleteCount:${deleteCount}`
            )
          }
          viewRef.value?.setPageData(pageIndex, data)
        } else {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(
              TAG,
              `---------设置数据------addPageData--->>>>` +
                ` pageIndex:${pageIndex} pageNo:${pageNo} data:`,
              data,
              ` deleteCount:${deleteCount}`
            )
          }
          viewRef.value?.addPageData(pageIndex, data, deleteCount)
        }
      } catch {}
      //
      increaseTabPageDataNo(pageIndex)
    }

    function insertPageData(
      tabPageIndex: number,
      sectionIndex: number,
      data: Array<QTWaterfallSection>
    ): void {
      tabDataManager.insertSectionList(tabPageIndex, sectionIndex, data)
      const itemList = generateSectionList(waterfall, data)
      viewRef.value?.insertPageData(tabPageIndex, sectionIndex, itemList)
    }

    function updatePageData(
      pageIndex: number,
      tabPageData: QTTabPageData
    ): void {
      const tabIndex = tabDataManager.updateSectionList(
        pageIndex,
        tabPageData.data
      )
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, `------------updatePageData--->>>>tabIndex:${tabIndex}`)
      }
      const itemList = generateSectionList(waterfall, tabPageData.data)
      const data: QTPageData = {
        data: itemList,
        disableScrollOnFirstScreen:
          tabPageData.disableScrollOnFirstScreen ?? false,
        firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
        useDiff: tabPageData.useDiff,
      }
      viewRef.value?.updatePageData(pageIndex, data)
    }

    function updatePageSection(
      pageIndex: number,
      sectionIndex: number,
      section: QTWaterfallSection
    ): void {
      tabDataManager.updateSection(pageIndex, sectionIndex, section)
      const updateSection = generateSection(waterfall, section)
      viewRef.value?.updateRootNode(pageIndex, sectionIndex, updateSection)
    }

    function getPageSection(
      pageIndex: number,
      sectionIndex: number
    ): QTWaterfallSection | undefined {
      return tabDataManager.getSection(pageIndex, sectionIndex)
    }

    function getPageSectionList(pageIndex: number): Array<QTWaterfallSection> {
      return tabDataManager.getSectionList(pageIndex)
    }

    function deletePageSection(
      pageIndex: number,
      sectionIndex: number,
      count: number
    ): void {
      tabDataManager.deleteSection(pageIndex, sectionIndex, count)
      viewRef.value?.invokeContentFunction(pageIndex, 'deleteItemRange', [
        sectionIndex,
        count,
      ])
    }

    //--------------------------------------------------------
    //get
    function getPageItem(
      pageIndex: number,
      sectionIndex: number,
      itemIndex: number
    ): QTWaterfallItem | undefined {
      return tabDataManager.getItem(pageIndex, sectionIndex, itemIndex)
    }

    //update
    function updatePageItem(
      pageIndex: number,
      sectionIndex: number,
      itemIndex: number,
      item: QTWaterfallItem
    ): void {
      tabDataManager.updateItem(pageIndex, sectionIndex, itemIndex, item)
      viewRef.value?.updateChildNode(pageIndex, sectionIndex, itemIndex, item)
    }

    //add
    function addPageItemList(
      pageIndex: number,
      sectionIndex: number,
      itemList: Array<QTWaterfallItem>
    ): void {
      tabDataManager.addItemList(pageIndex, sectionIndex, itemList)
      const section = tabDataManager.getSection(pageIndex, sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        viewRef.value?.updateRootNode(pageIndex, sectionIndex, updateSection)
      }
    }

    //delete
    function deletePageItem(
      pageIndex: number,
      sectionIndex: number,
      itemIndex: number,
      count: number
    ): void {
      tabDataManager.deleteItem(pageIndex, sectionIndex, itemIndex, count)
      const section = tabDataManager.getSection(pageIndex, sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        viewRef.value?.updateRootNode(pageIndex, sectionIndex, updateSection)
      }
    }

    //--------------------------------------------------------

    function focusBackToTop(): void {
      viewRef.value?.focusBackToTop()
    }

    function requestNodeFocus(id: string): void {
      viewRef.value?.requestNodeFocus(id)
    }

    function reloadAll(updateCurrent = true): void {
      viewRef.value?.reloadAll(updateCurrent)
    }

    function reloadPage(pageIndex: number): void {
      viewRef.value?.reloadPage(pageIndex)
    }

    function setCurrentPage(pageIndex: number): void {
      viewRef.value?.setCurrentPage(pageIndex)
    }

    function requestTabFocus(tabIndex: number): void {
      viewRef.value?.requestTabFocus(tabIndex)
    }

    function invokeContentFunction(
      pageIndex: number,
      functionName: string,
      param: Array<any>
    ): void {
      viewRef.value?.invokeContentFunction(pageIndex, functionName, param)
    }

    function invokeContentFunctionDirect(
      functionName: string,
      param: Array<any>
    ): void {
      viewRef.value?.invokeContentFunctionDirect(functionName, param)
    }

    function contentScrollToFocus(position: number): void {
      viewRef.value?.contentScrollToFocus(position)
    }

    //2.4
    function getRootNodeViewState(
      page: number,
      position: number,
      callback: QTViewStateCallback
    ): void {
      viewRef.value?.getRootNodeViewState(page, position, callback)
    }

    //2.4
    function getChildNodeViewState(
      page: number,
      position: number,
      childIndex: number,
      name: number,
      callback: QTViewStateCallback
    ): void {
      viewRef.value?.getChildNodeViewState(
        page,
        position,
        childIndex,
        name,
        callback
      )
    }

    //2.4
    function dispatchUIFunctionOnChildNode(
      page: number,
      position: number,
      childIndex: number,
      listViewName: string,
      functionParams: QTListViewItemFunctionParams
    ): void {
      viewRef.value?.dispatchUIFunctionOnChildNode(
        page,
        position,
        childIndex,
        listViewName,
        functionParams
      )
    }

    function updateChildNode(
      page: number,
      position: number,
      childIndex: number,
      data: any
    ): void {
      viewRef.value?.updateChildNode(page, position, childIndex, data)
    }

    function updateRootNode(
      page: number,
      position: number,
      data: Array<any>
    ): void {
      viewRef.value?.updateRootNode(page, position, data)
    }

    function cancelAll(): void {
      viewRef.value?.cancelAll()
    }

    //---------------------------------------------------------------------
    function getTabPageDataNo(pageIndex: number): number {
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return 0
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      if (tabItem.__pageNo == undefined) {
        tabItem.__pageNo = 0
      }
      return tabItem.__pageNo
    }

    function increaseTabPageDataNo(pageIndex: number) {
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      if (tabItem.__pageNo == undefined) {
        tabItem.__pageNo = 1
        return
      }
      tabItem.__pageNo = tabItem.__pageNo + 1
    }

    function setTabPageDataNo(pageIndex: number, pageNum: number) {
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      tabItem.__pageNo = pageNum
    }

    function resetTabPageDataNo(pageIndex: number) {
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      tabItem.__pageNo = 0
    }

    function onTabPageLoadData(e: QTTabEvent): void {
      const pageIndex = e.pageIndex
      const useDiff = e.useDiff
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------设置数据----onTabPageLoadData-->>>>pageIndex:${pageIndex}`
        )
      }
      setPageStateReset(pageIndex)
      emitOnLoadTabPageDataEvent(pageIndex, useDiff, 0)
    }

    function emitOnLoadTabPageDataEvent(
      pageIndex: number,
      useDiff: boolean,
      sectionIndex: number
    ) {
      const pageNo = getTabPageDataNo(pageIndex)
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (
        pageData &&
        (pageData.state === QTTabPageState.QT_TAB_PAGE_STATE_IDLE ||
          pageData.state === QTTabPageState.QT_TAB_PAGE_STATE_INIT)
      ) {
        const sectionList = tabDataManager.getSectionList(pageIndex)
        if (sectionIndex >= sectionList.length - props.preloadNumber - 1) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(
              TAG,
              `---------设置数据-----加载更多数据----->>>>` +
                ` pageIndex:${pageIndex} pageNo:${pageNo} sectionIndex:${sectionIndex} sectionListLength:${sectionList.length}`
            )
          }
          setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_BUSY)
          context.emit('onTabPageLoadData', pageIndex, pageNo, useDiff)
        } else {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(
              TAG,
              '----设置数据------loadPageData--preloadNumber错误-->>>>',
              pageIndex
            )
          }
        }
      } else {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '------设置数据----loadPageData--状态不对-->>>>',
            pageIndex
          )
        }
      }
    }

    function onTabPageChanged(e: QTTabEvent): void {
      const pageIndex = e.pageIndex
      if (currentTabPageIndex == pageIndex) {
        return
      }

      lastTabPageIndex = currentTabPageIndex
      if (lastTabPageIndex == -1) {
        lastTabPageIndex = pageIndex
      }
      currentTabPageIndex = pageIndex

      for (let i = 0; i < tabItemList.length; i++) {
        const pageState = tabDataManager.getTabPageDataState(i)
        if (
          i != pageIndex &&
          i != lastTabPageIndex &&
          pageState &&
          pageState.state != QTTabPageState.QT_TAB_PAGE_STATE_INIT
        ) {
          setPageStateRecycled(i)
        }
      }

      const data = e.data
      context.emit('onTabPageChanged', pageIndex, data)

      //
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData && pageData.sectionBindIndex >= -1) {
        emitOnLoadTabPageDataEvent(pageIndex, false, pageData.sectionBindIndex)
      }
      notifyTabContentSectionAttached()
    }

    function notifyTabContentSectionAttached() {
      clearTimeout(notifySectionAttachTimer)
      notifySectionAttachTimer = setTimeout(() => {
        const sectionList = tabDataManager.getSectionListByState(
          currentTabPageIndex,
          QTListViewItemState.QT_LIST_VIEW_ITEM_STATE_ATTACHED
        )
        const sectionSize = sectionList ? sectionList.length : 0
        if (sectionSize > 0) {
          sectionList.forEach((s) => {
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(
                TAG,
                `----------notifyTabContentSectionAttached------>>>>` +
                  ` pageIndex${currentTabPageIndex} sectionIndex:`,
                s.sectionIndex
              )
            }
          })
          //如果版块里没有数据，是不需要调用
          context.emit(
            'onTabPageSectionAttached',
            currentTabPageIndex,
            sectionList
          )
        }
      }, 100)
    }

    function onTabEvent(e: QTTabEvent): void {
      const params = e.params
      const eventName = e.eventName
      const tabIndex = e.params.itemPosition
      const scrollX = e.params.x
      const scrollY = e.params.y
      const contentOffset = e.params.contentOffset
      const state = e.params.state
      //
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------onTabEvent------>>>>` +
            ` eventName:${eventName} tabIndex:${tabIndex} params:`,
          params
        )
      }
      context.emit('onTabEvent', tabIndex, eventName, params)

      switch (eventName) {
        //吸顶开始
        case 'onMoveToTopStart':
          context.emit('onTabMoveToTopStart', tabIndex, eventName, params)
          break
        //吸顶结束
        case 'onMoveToTopEnd':
          context.emit('onTabMoveToTopEnd', tabIndex, eventName, params)
          break
        //恢复吸顶开始
        case 'onMoveToBottomStart':
          context.emit('onTabMoveToBottomStart', tabIndex, eventName, params)
          break
        //恢复吸顶结束
        case 'onMoveToBottomEnd':
          context.emit('onTabMoveToBottomEnd', tabIndex, eventName, params)
          break
        //tab切换
        case 'onTabChanged':
          context.emit('onTabChanged', tabIndex, eventName, params)
          break
        case 'onScroll':
          onWaterfallScroll(scrollX, scrollY)
          break
        case 'onScrollStateChanged':
          onWaterfallScrollStateChanged(
            contentOffset.x,
            contentOffset.y,
            state.newState
          )
          break
      }
    }

    function onTabChange(): void {
      //todo 等焦点事件响应后处理e对应的数据
    }

    function onTabClick(e: QTTabItem): void {
      context.emit('onTabClick', e)
    }

    //-------------------------------------------------------------------
    function onTabPageScrollToStart(evt) {
      const pageIndex = evt.pageIndex
      context.emit('onTabPageScrollToStart', pageIndex)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------onTabPageScrollToStart------>>>>` +
            ` pageIndex:${pageIndex}`
        )
      }
    }

    function onTabPageScrollToEnd(evt) {
      const pageIndex = evt.pageIndex
      context.emit('onTabPageScrollToEnd', pageIndex)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------onTabPageScrollToEnd------>>>>` + ` pageIndex:${pageIndex}`
        )
      }
    }

    //-------------------------------------------------------------------
    function onWaterfallItemClick(
      sectionIndex: number,
      itemIndex: number,
      item: QTWaterfallItem
    ): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `-----------onWaterfallItemClick--------------->>>>` +
            ` sectionIndex:${sectionIndex} itemIndex:${itemIndex} item:`,
          item
        )
      }
      context.emit(
        'onTabPageItemClick',
        currentTabPageIndex,
        sectionIndex,
        itemIndex,
        item
      )
    }

    function onWaterfallItemFocused(
      sectionIndex: number,
      itemIndex: number,
      isFocused: boolean,
      item: QTWaterfallItem
    ): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `-----------onWaterfallItemFocused--------------->>>>` +
            ` sectionIndex:${sectionIndex} itemIndex:${itemIndex} isFocused:${isFocused} item:`,
          item
        )
      }
      context.emit(
        'onTabPageItemFocused',
        currentTabPageIndex,
        sectionIndex,
        itemIndex,
        isFocused,
        item
      )
    }

    function onWaterfallSectionBind(
      pageIndex: number,
      sectionIndex: number
    ): void {
      if (pageIndex < 0) {
        return
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `---------设置数据-----绑定回调---->>>>` +
            ` pageIndex:${pageIndex} sectionIndex:${sectionIndex}`
        )
      }
      //
      setPageBindSectionIndex(pageIndex, sectionIndex)

      if (pageIndex === currentTabPageIndex) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            `----------loadPageData----bind-->>>>pageIndex:${pageIndex}`
          )
        }
        emitOnLoadTabPageDataEvent(pageIndex, false, sectionIndex)
      }
    }

    function onWaterfallSectionAttached(
      pageIndex: number,
      sectionIndex: number
    ): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `-----------onWaterfallSectionAttached--------------->>>>` +
            ` pageIndex:${pageIndex} sectionIndex:${sectionIndex}`
        )
      }
      tabDataManager.setSectionState(
        pageIndex,
        sectionIndex,
        QTListViewItemState.QT_LIST_VIEW_ITEM_STATE_ATTACHED
      )

      //
      if (pageIndex == currentTabPageIndex) {
        notifyTabContentSectionAttached()
      }
    }

    function onWaterfallSectionDetached(
      pageIndex: number,
      sectionIndex: number
    ): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `-----------onWaterfallSectionDetached--------------->>>>` +
            ` pageIndex:${pageIndex} sectionIndex:${sectionIndex}`
        )
      }
      tabDataManager.setSectionState(
        pageIndex,
        sectionIndex,
        QTListViewItemState.QT_LIST_VIEW_ITEM_STATE_DETACHED
      )
      //
    }

    function onWaterfallScroll(offsetX: number, scrollY: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------onWaterfallScroll---->>>>` +
            ` offsetX:${offsetX} scrollY:${scrollY}`
        )
      }
      context.emit('onTabPageScroll', offsetX, scrollY)
    }

    function onWaterfallScrollStateChanged(
      offsetX: number,
      scrollY: number,
      newState: number
    ) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `----------onWaterfallScrollStateChanged---->>>>` +
            ` offsetX:${offsetX} scrollY:${scrollY} newState:${newState}`
        )
      }
      context.emit('onTabPageScrollStateChanged', offsetX, scrollY, newState)
    }

    function translationLeft(): void {
      viewRef.value?.translationLeft()
    }

    function translationRight(): void {
      viewRef.value?.translationRight()
    }

    function getCurrentPageIndex(): number {
      return currentTabPageIndex
    }

    function getCurrentTabIndex(): Promise<number> {
      if (viewRef.value) {
        return viewRef.value!.getCurrentPage()
      } else {
        return Promise.resolve(-1)
      }
    }

    //---------------------------------------------------------------
    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      context.emit('onPluginLoadSuccess', event)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      context.emit('onPluginLoadError', event)
    }

    return {
      ns,
      viewRef,
      ...useBaseView(viewRef),
      ...useBaseListView(viewRef),
      ifTabs,
      navBarRef,
      initTab,
      initPage,
      setPageState,
      setPageData,
      addPageData,
      insertPageData,
      updatePageData,
      getPageBindSectionIndex,
      //
      updatePageSection,
      getPageSection,
      getPageSectionList,
      deletePageSection,
      //
      addPageItemList,
      getPageItem,
      updatePageItem,
      deletePageItem,
      //
      focusBackToTop,
      requestNodeFocus,
      reloadAll,
      reloadPage,
      setCurrentPage,
      requestTabFocus,
      invokeContentFunction,
      invokeContentFunctionDirect,
      contentScrollToFocus,
      getRootNodeViewState,
      getChildNodeViewState,
      dispatchUIFunctionOnChildNode,
      updateRootNode,
      updateChildNode,
      cancelAll,
      translationLeft,
      translationRight,
      rootOpacity,
      onTabPageLoadData,
      onTabPageChanged,
      onTabEvent,
      onWaterfallItemClick,
      onWaterfallItemFocused,
      onWaterfallSectionBind,
      onWaterfallSectionAttached,
      onWaterfallSectionDetached,
      onWaterfallScroll,
      onWaterfallScrollStateChanged,
      onTabPageScrollToStart,
      onTabPageScrollToEnd,
      onTabChange,
      onTabClick,
      getCurrentPageIndex,
      getCurrentTabIndex,
      onPluginLoadSuccess,
      onPluginLoadError,
    }
  },
})
</script>
