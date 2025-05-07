import type { QTViewState, QTViewStateCallback } from '../../view'
import type {
  QTEventData,
  QTLocation,
  QTNativeArray,
  QTNativeMap,
  QTNativeParams,
  QTPosition,
  QTVisibility,
} from '../../base'
import type {
  QTDescendantFocusability,
  QTFocusDescendant,
  QTFocusDirection,
  QTFocusDirectionName,
} from '../../focus'
import type {
  QTListInitPosition,
  QTListViewItem,
  QTListViewItemFunctionParams,
} from '../../list-view'
import type { Ref } from '@vue/reactivity'
import type { QTWaterfallItem, QTWaterfallSection } from '../../waterfall'
import type { QTITabs } from './tabs-instance'
import type {
  QTTab,
  QTTabPage,
  QTTabPageData,
  QTTabPageState,
} from './tabs-types'

export interface QtTabAPI {
  //--------------------------Tab---------------------------------
  initTab(instance: Ref<QTITabs | undefined>, tab: QTTab): void

  initPage(instance: Ref<QTITabs | undefined>, waterfall: QTTabPage): void

  setPageState(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    state: QTTabPageState
  ): void

  getCurrentPageIndex(instance: Ref<QTITabs | undefined>): number

  //add
  setPageData(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    tabPage: QTTabPageData
  ): void

  addPageData(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    tabPageData: QTTabPageData,
    deleteCount: number
  ): void

  insertPageData(
    instance: Ref<QTITabs | undefined>,
    tabPageIndex: number,
    sectionIndex: number,
    data: any[]
  ): void

  //update
  updatePageData(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    tabPageData: QTTabPageData
  ): void

  //update
  updatePageSection(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    section: QTWaterfallSection
  ): void

  //delete
  deletePageSection(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    count: number
  ): void

  //get
  getPageSection(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number
  ): QTWaterfallSection | undefined

  getPageSectionList(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number
  ): Array<QTWaterfallSection> | undefined

  getPageItem(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number
  ): QTWaterfallItem | undefined

  updatePageItem(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    item: QTWaterfallItem
  ): void

  addPageItemList(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>
  ): void

  deletePageItem(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    count: number
  ): void

  focusBackToTop(instance: Ref<QTITabs | undefined>): void

  requestNodeFocus(instance: Ref<QTITabs | undefined>, id: string): void

  reloadAll(instance: Ref<QTITabs | undefined>, updateCurrent: boolean): void

  reloadPage(instance: Ref<QTITabs | undefined>, pageIndex: number): void

  setCurrentPage(instance: Ref<QTITabs | undefined>, pageIndex: number): void

  getCurrentTabIndex(instance: Ref<QTITabs | undefined>): Promise<number>

  requestTabFocus(instance: Ref<QTITabs | undefined>, tabIndex: number): void

  invokeContentFunction(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    functionName: string,
    param: Array<any>
  ): void

  invokeContentFunctionDirect(
    instance: Ref<QTITabs | undefined>,
    functionName: string,
    param: Array<any>
  ): void

  contentScrollToFocus(
    instance: Ref<QTITabs | undefined>,
    position: number
  ): void

  //2.4
  getRootNodeViewState(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    callback: QTViewStateCallback
  ): void

  //2.4
  getChildNodeViewState(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    childIndex: number,
    name: number,
    callback: QTViewStateCallback
  ): void

  //2.4
  dispatchUIFunctionOnChildNode(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    childIndex: number,
    listViewName: string,
    functionParams: QTListViewItemFunctionParams
  ): void

  updateChildNode(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    childIndex: number,
    data: any
  ): void

  updateRootNode(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    data: any
  ): void

  //20231219 add by xuxiaodong
  translationLeft(instance: Ref<QTITabs | undefined>): void

  translationRight(instance: Ref<QTITabs | undefined>): void

  cancelAll(instance: Ref<QTITabs | undefined>): void

  //---------------------------------------BaseListView方法-----------------------------------------
  scrollToIndex(
    instance: Ref<QTITabs | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void

  startScroll(
    instance: Ref<QTITabs | undefined>,
    position: QTListInitPosition
  ): void

  setSelectChildPosition(
    instance: Ref<QTITabs | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void

  scrollToPositionWithOffset(
    instance: Ref<QTITabs | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPositionWithOffsetInfiniteMode(
    instance: Ref<QTITabs | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPosition(
    instance: Ref<QTITabs | undefined>,
    position: number,
    offset?: number
  ): void

  refreshListData(instance: Ref<QTITabs | undefined>): void

  updateItemTraverse(
    instance: Ref<QTITabs | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void

  requestItemLayout(instance: Ref<QTITabs | undefined>, position: number): void

  updateItemRange(
    instance: Ref<QTITabs | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void

  insertItemRange(
    instance: Ref<QTITabs | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void

  updateItemMatched(
    instance: Ref<QTITabs | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  updateItemMatchedByKey(
    instance: Ref<QTITabs | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  deleteItemRange(
    instance: Ref<QTITabs | undefined>,
    position: number,
    count: number
  ): void

  setListData(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  setListDataWithParams(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void

  addListData(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  addListDataWithParams(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void

  destroy(instance: Ref<QTITabs | undefined>): void

  recycle(instance: Ref<QTITabs | undefined>): void

  scrollToTop(instance: Ref<QTITabs | undefined>): void

  scrollToFocus(
    instance: Ref<QTITabs | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void

  prepareForRecycle(instance: Ref<QTITabs | undefined>): void

  setDisplay(instance: Ref<QTITabs | undefined>, display: boolean): void

  changeDisplayState(
    instance: Ref<QTITabs | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void

  notifySaveInstance(instance: Ref<QTITabs | undefined>): void

  notifyRestoreInstance(instance: Ref<QTITabs | undefined>): void

  updateItemProps(
    instance: Ref<QTITabs | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void

  dispatchItemFunction(
    instance: Ref<QTITabs | undefined>,
    params: QTNativeArray
  ): void

  clearPostTask(instance: Ref<QTITabs | undefined>): void

  clearPostTaskByCate(
    instance: Ref<QTITabs | undefined>,
    data: Array<number>
  ): void

  clearData(instance: Ref<QTITabs | undefined>): void

  pausePostTask(instance: Ref<QTITabs | undefined>): void

  resumePostTask(instance: Ref<QTITabs | undefined>): void

  requestLayoutManual(instance: Ref<QTITabs | undefined>): void

  setSpanCount(instance: Ref<QTITabs | undefined>, spanCount: number): void

  searchReplaceItem(
    instance: Ref<QTITabs | undefined>,
    id: string,
    item: QTListViewItem
  ): void

  setCustomStateEnableOnFocus(
    instance: Ref<QTITabs | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void

  setItemCustomState(
    instance: Ref<QTITabs | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void

  dispatchItemFunctionWithPromise(
    instance: Ref<QTITabs | undefined>,
    position: number,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>
  ): Promise<QTNativeParams>

  getScrollOffset(instance: Ref<QTITabs | undefined>): Promise<QTPosition>

  //---------------------------------------BaseView方法-----------------------------------------
  requestFocus(
    instance: Ref<QTITabs | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(instance: Ref<QTITabs | undefined>, position: number): void

  clearFocus(instance: Ref<QTITabs | undefined>): void

  requestFocusDirectly(
    instance: Ref<QTITabs | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(instance: Ref<QTITabs | undefined>, v: QTVisibility): void

  requestRootLayout(instance: Ref<QTITabs | undefined>): void

  requestLayout(instance: Ref<QTITabs | undefined>): void

  //
  setDescendantFocusability(
    instance: Ref<QTITabs | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: Ref<QTITabs | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: Ref<QTITabs | undefined>): void

  setBackGroundColor(instance: Ref<QTITabs | undefined>, color: string): void

  layoutViewManual(instance: Ref<QTITabs | undefined>): void

  blockRootFocus(instance: Ref<QTITabs | undefined>): void

  unBlockRootFocus(instance: Ref<QTITabs | undefined>): void

  changeAlpha(instance: Ref<QTITabs | undefined>, alpha: number): void

  setScale(
    instance: Ref<QTITabs | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: Ref<QTITabs | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: Ref<QTITabs | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: Ref<QTITabs | undefined>): void

  dispatchFunctionForTarget(
    instance: Ref<QTITabs | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: Ref<QTITabs | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: Ref<QTITabs | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: Ref<QTITabs | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: Ref<QTITabs | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(instance: Ref<QTITabs | undefined>, autofocus: boolean): void

  requestAutofocus(instance: Ref<QTITabs | undefined>): void

  //
  hasFocus(instance: Ref<QTITabs | undefined>): Promise<boolean>

  isFocused(instance: Ref<QTITabs | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: Ref<QTITabs | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(instance: Ref<QTITabs | undefined>): Promise<QTViewState>

  getChildViewState(
    instance: Ref<QTITabs | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtTabAPI(): QtTabAPI {
  //-----------------------------QtTab--------------------------------------------
  function initTab(instance: Ref<QTITabs | undefined>, tab: QTTab): void {
    instance.value?.initTab(tab)
  }

  function initPage(
    instance: Ref<QTITabs | undefined>,
    waterfall: QTTabPage
  ): void {
    instance.value?.initPage(waterfall)
  }

  function setPageState(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    state: QTTabPageState
  ): void {
    instance.value?.setPageState(pageIndex, state)
  }

  function getCurrentPageIndex(instance: Ref<QTITabs | undefined>): number {
    return instance.value?.getCurrentPageIndex() ?? -1
  }

  //add
  function setPageData(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    tabPage: QTTabPageData
  ): void {
    instance.value?.setPageData(pageIndex, tabPage)
  }

  function addPageData(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    tabPageData: QTTabPageData,
    deleteCount: number
  ): void {
    instance.value?.addPageData(pageIndex, tabPageData, deleteCount)
  }

  function insertPageData(
    instance: Ref<QTITabs | undefined>,
    tabPageIndex: number,
    sectionIndex: number,
    data: Array<QTWaterfallSection>
  ): void {
    instance.value?.insertPageData(tabPageIndex, sectionIndex, data)
  }

  //update
  function updatePageData(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    tabPageData: QTTabPageData
  ): void {
    instance.value?.updatePageData(pageIndex, tabPageData)
  }

  //update
  function updatePageSection(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    section: QTWaterfallSection
  ): void {
    instance.value?.updatePageSection(pageIndex, sectionIndex, section)
  }

  //delete
  function deletePageSection(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    count: number
  ): void {
    instance.value?.deletePageSection(pageIndex, sectionIndex, count)
  }

  //get
  function getPageSection(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number
  ): QTWaterfallSection | undefined {
    return instance.value?.getPageSection(pageIndex, sectionIndex)
  }

  function getPageSectionList(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number
  ): Array<QTWaterfallSection> | undefined {
    return instance.value?.getPageSectionList(pageIndex)
  }

  function getPageItem(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number
  ): QTWaterfallItem | undefined {
    return instance.value?.getPageItem(pageIndex, sectionIndex, itemIndex)
  }

  function updatePageItem(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    item: QTWaterfallItem
  ): void {
    instance.value?.updatePageItem(pageIndex, sectionIndex, itemIndex, item)
  }

  function addPageItemList(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>
  ): void {
    instance.value?.addPageItemList(pageIndex, sectionIndex, itemList)
  }

  function deletePageItem(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    count: number
  ): void {
    instance.value?.deletePageItem(pageIndex, sectionIndex, itemIndex, count)
  }

  function focusBackToTop(instance: Ref<QTITabs | undefined>): void {
    instance.value?.focusBackToTop()
  }

  function requestNodeFocus(
    instance: Ref<QTITabs | undefined>,
    id: string
  ): void {
    instance.value?.requestNodeFocus(id)
  }

  function reloadAll(
    instance: Ref<QTITabs | undefined>,
    updateCurrent: boolean
  ): void {
    instance.value?.reloadAll(updateCurrent)
  }

  function reloadPage(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number
  ): void {
    instance.value?.reloadPage(pageIndex)
  }

  function setCurrentPage(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number
  ): void {
    instance.value?.setCurrentPage(pageIndex)
  }

  function getCurrentTabIndex(
    instance: Ref<QTITabs | undefined>
  ): Promise<number> {
    if (instance.value) {
      return instance.value!.getCurrentTabIndex()
    } else {
      return Promise.reject()
    }
  }

  function requestTabFocus(
    instance: Ref<QTITabs | undefined>,
    tabIndex: number
  ): void {
    instance.value?.requestTabFocus(tabIndex)
  }

  function invokeContentFunction(
    instance: Ref<QTITabs | undefined>,
    pageIndex: number,
    functionName: string,
    param: Array<any>
  ): void {
    instance.value?.invokeContentFunction(pageIndex, functionName, param)
  }

  function invokeContentFunctionDirect(
    instance: Ref<QTITabs | undefined>,
    functionName: string,
    param: Array<any>
  ): void {
    instance.value?.invokeContentFunctionDirect(functionName, param)
  }

  function contentScrollToFocus(
    instance: Ref<QTITabs | undefined>,
    position: number
  ): void {
    instance.value?.contentScrollToFocus(position)
  }

  //2.4
  function getRootNodeViewState(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    callback: QTViewStateCallback
  ): void {
    instance.value?.getRootNodeViewState(page, position, callback)
  }

  //2.4
  function getChildNodeViewState(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    childIndex: number,
    name: number,
    callback: QTViewStateCallback
  ): void {
    instance.value?.getChildNodeViewState(
      page,
      position,
      childIndex,
      name,
      callback
    )
  }

  //2.4
  function dispatchUIFunctionOnChildNode(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    childIndex: number,
    listViewName: string,
    functionParams: QTListViewItemFunctionParams
  ): void {
    instance.value?.dispatchUIFunctionOnChildNode(
      page,
      position,
      childIndex,
      listViewName,
      functionParams
    )
  }

  function updateChildNode(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    childIndex: number,
    data: any
  ): void {
    instance.value?.updateChildNode(page, position, childIndex, data)
  }

  function updateRootNode(
    instance: Ref<QTITabs | undefined>,
    page: number,
    position: number,
    data: any
  ): void {
    instance.value?.updateRootNode(page, position, data)
  }

  function translationLeft(instance: Ref<QTITabs | undefined>): void {
    instance.value?.translationLeft()
  }

  function translationRight(instance: Ref<QTITabs | undefined>): void {
    instance.value?.translationRight()
  }

  function cancelAll(instance: Ref<QTITabs | undefined>): void {
    instance.value?.cancelAll()
  }

  //-------------------------------------BaseListView-------------------------------------------------------
  function scrollToIndex(
    instance: Ref<QTITabs | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void {
    instance.value?.scrollToIndex(x, y, animated, duration, offset)
  }

  function startScroll(
    instance: Ref<QTITabs | undefined>,
    position: QTListInitPosition
  ): void {
    instance.value?.startScroll(position)
  }

  function setSelectChildPosition(
    instance: Ref<QTITabs | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void {
    instance.value?.setSelectChildPosition(position, changeTargetFocusChild)
  }

  function scrollToPositionWithOffset(
    instance: Ref<QTITabs | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void {
    instance.value?.scrollToPositionWithOffset(position, offset, animated)
  }

  function scrollToPositionWithOffsetInfiniteMode(
    instance: Ref<QTITabs | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void {
    instance.value?.scrollToPositionWithOffsetInfiniteMode(
      position,
      offset,
      animated
    )
  }

  function scrollToPosition(
    instance: Ref<QTITabs | undefined>,
    position: number,
    offset?: number
  ): void {
    if (offset) {
      instance.value?.scrollToPosition(position)
    } else {
      instance.value?.scrollToPosition(position)
    }
  }

  function refreshListData(instance: Ref<QTITabs | undefined>): void {
    instance.value?.refreshListData()
  }

  function updateItemTraverse(
    instance: Ref<QTITabs | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void {
    instance.value?.updateItemTraverse(position, data, traverse)
  }

  function requestItemLayout(
    instance: Ref<QTITabs | undefined>,
    position: number
  ): void {
    instance.value?.requestItemLayout(position)
  }

  function updateItemRange(
    instance: Ref<QTITabs | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.updateItemRange(position, count, itemList)
  }

  function insertItemRange(
    instance: Ref<QTITabs | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.insertItemRange(position, itemList)
  }

  function updateItemMatched(
    instance: Ref<QTITabs | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    instance.value?.updateItemMatched(params, data)
  }

  function updateItemMatchedByKey(
    instance: Ref<QTITabs | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    instance.value?.updateItemMatchedByKey(idKey, params, data)
  }

  function deleteItemRange(
    instance: Ref<QTITabs | undefined>,
    position: number,
    count: number
  ): void {
    instance.value?.deleteItemRange(position, count)
  }

  function setListData(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.setListData(itemList)
  }

  function setListDataWithParams(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void {
    instance.value?.setListDataWithParams(itemList, autoChangeVisible, useDiff)
  }

  function addListData(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.addListData(itemList)
  }

  function addListDataWithParams(
    instance: Ref<QTITabs | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void {
    instance.value?.addListDataWithParams(itemList, deleteCount)
  }

  function destroy(instance: Ref<QTITabs | undefined>): void {
    instance.value?.destroy()
  }

  function recycle(instance: Ref<QTITabs | undefined>): void {
    instance.value?.recycle()
  }

  function scrollToTop(instance: Ref<QTITabs | undefined>): void {
    instance.value?.scrollToTop()
  }

  function scrollToFocus(
    instance: Ref<QTITabs | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void {
    instance.value?.scrollToFocus(position, scrollOffset, delay, target)
  }

  function prepareForRecycle(instance: Ref<QTITabs | undefined>): void {
    instance.value?.prepareForRecycle()
  }

  function setDisplay(
    instance: Ref<QTITabs | undefined>,
    display: boolean
  ): void {
    instance.value?.setDisplay(display)
  }

  function changeDisplayState(
    instance: Ref<QTITabs | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void {
    instance.value?.changeDisplayState(display, autoDataState)
  }

  function notifySaveInstance(instance: Ref<QTITabs | undefined>): void {
    instance.value?.notifySaveInstance()
  }

  function notifyRestoreInstance(instance: Ref<QTITabs | undefined>): void {
    instance.value?.notifyRestoreInstance()
  }

  function updateItemProps(
    instance: Ref<QTITabs | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void {
    instance.value?.updateItemProps(name, position, dataToUpdate, updateView)
  }

  function dispatchItemFunction(
    instance: Ref<QTITabs | undefined>,
    params: QTNativeArray
  ): void {
    instance.value?.dispatchItemFunction(params)
  }

  function clearPostTask(instance: Ref<QTITabs | undefined>): void {
    instance.value?.clearPostTask()
  }

  function clearPostTaskByCate(
    instance: Ref<QTITabs | undefined>,
    data: Array<number>
  ): void {
    instance.value?.clearPostTaskByCate(data)
  }

  function clearData(instance: Ref<QTITabs | undefined>): void {
    instance.value?.clearData()
  }

  function pausePostTask(instance: Ref<QTITabs | undefined>): void {
    instance.value?.pausePostTask()
  }

  function resumePostTask(instance: Ref<QTITabs | undefined>): void {
    instance.value?.resumePostTask()
  }

  function requestLayoutManual(instance: Ref<QTITabs | undefined>): void {
    instance.value?.requestLayoutManual()
  }

  function setSpanCount(
    instance: Ref<QTITabs | undefined>,
    spanCount: number
  ): void {
    instance.value?.setSpanCount(spanCount)
  }

  function searchReplaceItem(
    instance: Ref<QTITabs | undefined>,
    id: string,
    item: QTListViewItem
  ): void {
    instance.value?.searchReplaceItem(id, item)
  }

  function setCustomStateEnableOnFocus(
    instance: Ref<QTITabs | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void {
    instance.value?.setCustomStateEnableOnFocus(id, params)
  }

  function setItemCustomState(
    instance: Ref<QTITabs | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void {
    instance.value?.setItemCustomState(position, state, on)
  }

  function dispatchItemFunctionWithPromise(
    instance: Ref<QTITabs | undefined>,
    position: number,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>
  ): Promise<QTNativeParams> {
    if (instance.value) {
      return instance.value!.dispatchItemFunctionWithPromise(
        position,
        targetName,
        functionTargetName,
        params
      )
    } else {
      return Promise.reject()
    }
  }

  function getScrollOffset(
    instance: Ref<QTITabs | undefined>
  ): Promise<QTPosition> {
    if (instance.value) {
      return instance.value!.getScrollOffset()
    } else {
      return Promise.reject()
    }
  }

  //------------------------------BaseView方法--------------------------------------------------
  function requestFocus(
    instance: Ref<QTITabs | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocus(direction)
  }

  function requestChildFocus(
    instance: Ref<QTITabs | undefined>,
    position: number
  ): void {
    instance.value?.requestChildFocus(position)
  }

  function clearFocus(instance: Ref<QTITabs | undefined>) {
    instance.value?.clearFocus()
  }

  function requestFocusDirectly(
    instance: Ref<QTITabs | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocusDirectly(direction)
  }

  function setVisibility(instance: Ref<QTITabs | undefined>, v: QTVisibility) {
    instance.value?.setVisibility(v)
  }

  function requestRootLayout(instance: Ref<QTITabs | undefined>) {
    instance.value?.requestRootLayout()
  }

  function requestLayout(instance: Ref<QTITabs | undefined>) {
    instance.value?.requestLayout()
  }

  function setDescendantFocusability(
    instance: Ref<QTITabs | undefined>,
    descendant: QTFocusDescendant
  ): void {
    instance.value?.setDescendantFocusability(descendant)
  }

  function changeDescendantFocusability(
    instance: Ref<QTITabs | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    instance.value?.changeDescendantFocusability(descendant)
  }

  function forceUpdateRenderNode(instance: Ref<QTITabs | undefined>): void {
    instance.value?.forceUpdateRenderNode()
  }

  function setBackGroundColor(
    instance: Ref<QTITabs | undefined>,
    color: string
  ): void {
    instance.value?.setBackGroundColor(color)
  }

  function layoutViewManual(instance: Ref<QTITabs | undefined>): void {
    instance.value?.layoutViewManual()
  }

  function blockRootFocus(instance: Ref<QTITabs | undefined>): void {
    instance.value?.blockRootFocus()
  }

  function unBlockRootFocus(instance: Ref<QTITabs | undefined>): void {
    instance.value?.unBlockRootFocus()
  }

  function changeAlpha(
    instance: Ref<QTITabs | undefined>,
    alpha: number
  ): void {
    instance.value?.changeAlpha(alpha)
  }

  function setScale(
    instance: Ref<QTITabs | undefined>,
    x: number,
    y: number,
    duration: number
  ): void {
    instance.value?.setScale(x, y, duration)
  }

  function setPosition(
    instance: Ref<QTITabs | undefined>,
    x: number,
    y: number,
    z: number
  ): void {
    instance.value?.setPosition(x, y, z)
  }

  function updateLayout(
    instance: Ref<QTITabs | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void {
    instance.value?.updateLayout(width, height, x, y)
  }

  function invalidate(instance: Ref<QTITabs | undefined>): void {
    instance.value?.invalidate()
  }

  function dispatchFunctionForTarget(
    instance: Ref<QTITabs | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void {
    instance.value?.dispatchFunctionForTarget(
      targetName,
      functionTargetName,
      params,
      delay
    )
  }

  function setBlockFocusDirections(
    instance: Ref<QTITabs | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirections(directionList)
  }

  function setBlockFocusDirectionsOnFail(
    instance: Ref<QTITabs | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirectionsOnFail(directionList)
  }

  function setInitFocus(
    instance: Ref<QTITabs | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setInitFocus(sid, delay)
  }

  function setAutoFocus(
    instance: Ref<QTITabs | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setAutoFocus(sid, delay)
  }

  function enabledAutofocus(
    instance: Ref<QTITabs | undefined>,
    autofocus: boolean
  ): void {
    instance.value?.enabledAutofocus(autofocus)
  }

  function requestAutofocus(instance: Ref<QTITabs | undefined>): void {
    instance.value?.requestAutofocus()
  }

  function hasFocus(instance: Ref<QTITabs | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(instance: Ref<QTITabs | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(
    instance: Ref<QTITabs | undefined>
  ): Promise<QTEventData<QTLocation>> {
    if (instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(
    instance: Ref<QTITabs | undefined>
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(
    instance: Ref<QTITabs | undefined>,
    position: number
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getChildViewState(position)
    } else {
      return Promise.reject()
    }
  }

  return {
    initTab,
    initPage,
    setPageState,
    setPageData,
    addPageData,
    updatePageData,
    updatePageSection,
    getPageSection,
    getPageSectionList,
    deletePageSection,
    addPageItemList,
    getPageItem,
    updatePageItem,
    deletePageItem,
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
    getCurrentPageIndex,
    getCurrentTabIndex,
    insertPageData,

    //------------------------------------------------------
    scrollToIndex,
    startScroll,
    setSelectChildPosition,
    scrollToPositionWithOffset,
    scrollToPositionWithOffsetInfiniteMode,
    scrollToPosition,
    refreshListData,
    updateItemTraverse,
    requestItemLayout,
    updateItemRange,
    insertItemRange,
    updateItemMatched,
    updateItemMatchedByKey,
    deleteItemRange,
    setListData,
    setListDataWithParams,
    addListData,
    addListDataWithParams,
    destroy,
    recycle,
    scrollToTop,
    scrollToFocus,
    prepareForRecycle,
    setDisplay,
    changeDisplayState,
    notifySaveInstance,
    notifyRestoreInstance,
    updateItemProps,
    dispatchItemFunction,
    clearPostTask,
    clearPostTaskByCate,
    clearData,
    pausePostTask,
    resumePostTask,
    requestLayoutManual,
    setSpanCount,
    searchReplaceItem,
    setCustomStateEnableOnFocus,
    setItemCustomState,
    dispatchItemFunctionWithPromise,
    getScrollOffset,
    //--------------------------------------------------------------------------------
    requestFocus,
    requestChildFocus,
    clearFocus,
    requestFocusDirectly,
    setVisibility,
    requestRootLayout,
    requestLayout,
    setDescendantFocusability,
    changeDescendantFocusability,
    forceUpdateRenderNode,
    setBackGroundColor,
    layoutViewManual,
    blockRootFocus,
    unBlockRootFocus,
    changeAlpha,
    setScale,
    setPosition,
    updateLayout,
    invalidate,
    dispatchFunctionForTarget,
    setBlockFocusDirections,
    setBlockFocusDirectionsOnFail,
    setInitFocus,
    setAutoFocus,
    enabledAutofocus,
    requestAutofocus,
    hasFocus,
    isFocused,
    getLocationOnScreen,
    getViewState,
    getChildViewState,
  }
}
