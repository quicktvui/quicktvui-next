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
import type { QTListInitPosition, QTListViewItem } from '../../list-view'
import type { QTViewState } from '../../view'
import type { Ref } from '@vue/reactivity'
import type { QTIGridView } from './grid-view-instance'
import type { QTGridViewItem } from './grid-view-types'

export interface QtGridViewAPI {
  //----------------------------------------------------------
  init(
    instance: Ref<QTIGridView | undefined>,
    target: Array<QTGridViewItem>
  ): Array<QTGridViewItem>

  stopPage(instance: Ref<QTIGridView | undefined>): void

  restartPage(instance: Ref<QTIGridView | undefined>): void

  setItemFocused(instance: Ref<QTIGridView | undefined>, position: number): void

  scrollToFocused(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void

  setItemSelected(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    b: boolean
  ): void

  scrollToSelected(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    b: boolean
  ): void

  setInitPosition(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void

  //---------------------------------------BaseListView方法-----------------------------------------
  scrollToIndex(
    instance: Ref<QTIGridView | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void

  startScroll(
    instance: Ref<QTIGridView | undefined>,
    position: QTListInitPosition
  ): void

  setSelectChildPosition(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void

  scrollToPositionWithOffset(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPositionWithOffsetInfiniteMode(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPosition(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    offset?: number
  ): void

  refreshListData(instance: Ref<QTIGridView | undefined>): void

  updateItemTraverse(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void

  requestItemLayout(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void

  updateItemRange(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void

  insertItemRange(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void

  updateItemMatched(
    instance: Ref<QTIGridView | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  updateItemMatchedByKey(
    instance: Ref<QTIGridView | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  deleteItemRange(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    count: number
  ): void

  setListData(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  setListDataWithParams(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void

  addListData(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  addListDataWithParams(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void

  destroy(instance: Ref<QTIGridView | undefined>): void

  recycle(instance: Ref<QTIGridView | undefined>): void

  scrollToTop(instance: Ref<QTIGridView | undefined>): void

  scrollToFocus(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void

  prepareForRecycle(instance: Ref<QTIGridView | undefined>): void

  setDisplay(instance: Ref<QTIGridView | undefined>, display: boolean): void

  changeDisplayState(
    instance: Ref<QTIGridView | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void

  notifySaveInstance(instance: Ref<QTIGridView | undefined>): void

  notifyRestoreInstance(instance: Ref<QTIGridView | undefined>): void

  updateItemProps(
    instance: Ref<QTIGridView | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void

  updateItem(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    data: QTListViewItem
  ): void

  dispatchItemFunction(
    instance: Ref<QTIGridView | undefined>,
    params: QTNativeArray
  ): void

  clearPostTask(instance: Ref<QTIGridView | undefined>): void

  clearPostTaskByCate(
    instance: Ref<QTIGridView | undefined>,
    data: Array<number>
  ): void

  clearData(instance: Ref<QTIGridView | undefined>): void

  pausePostTask(instance: Ref<QTIGridView | undefined>): void

  resumePostTask(instance: Ref<QTIGridView | undefined>): void

  requestLayoutManual(instance: Ref<QTIGridView | undefined>): void

  setSpanCount(instance: Ref<QTIGridView | undefined>, spanCount: number): void

  searchReplaceItem(
    instance: Ref<QTIGridView | undefined>,
    id: string,
    item: QTListViewItem
  ): void

  setCustomStateEnableOnFocus(
    instance: Ref<QTIGridView | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void

  setItemCustomState(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void

  dispatchItemFunctionWithPromise(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>
  ): Promise<QTNativeParams>

  getScrollOffset(instance: Ref<QTIGridView | undefined>): Promise<QTPosition>

  //---------------------------------------BaseView方法-----------------------------------------
  requestFocus(
    instance: Ref<QTIGridView | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void

  clearFocus(instance: Ref<QTIGridView | undefined>): void

  requestFocusDirectly(
    instance: Ref<QTIGridView | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(instance: Ref<QTIGridView | undefined>, v: QTVisibility): void

  requestRootLayout(instance: Ref<QTIGridView | undefined>): void

  requestLayout(instance: Ref<QTIGridView | undefined>): void

  //
  setDescendantFocusability(
    instance: Ref<QTIGridView | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: Ref<QTIGridView | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: Ref<QTIGridView | undefined>): void

  setBackGroundColor(
    instance: Ref<QTIGridView | undefined>,
    color: string
  ): void

  layoutViewManual(instance: Ref<QTIGridView | undefined>): void

  blockRootFocus(instance: Ref<QTIGridView | undefined>): void

  unBlockRootFocus(instance: Ref<QTIGridView | undefined>): void

  changeAlpha(instance: Ref<QTIGridView | undefined>, alpha: number): void

  setScale(
    instance: Ref<QTIGridView | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: Ref<QTIGridView | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: Ref<QTIGridView | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: Ref<QTIGridView | undefined>): void

  dispatchFunctionForTarget(
    instance: Ref<QTIGridView | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: Ref<QTIGridView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: Ref<QTIGridView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: Ref<QTIGridView | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: Ref<QTIGridView | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: Ref<QTIGridView | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: Ref<QTIGridView | undefined>): void

  //
  hasFocus(instance: Ref<QTIGridView | undefined>): Promise<boolean>

  isFocused(instance: Ref<QTIGridView | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: Ref<QTIGridView | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(instance: Ref<QTIGridView | undefined>): Promise<QTViewState>

  getChildViewState(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtGridViewAPI(): QtGridViewAPI {
  //---------------------GridView自有方法------------------------------------
  function init(
    instance: Ref<QTIGridView | undefined>,
    target: Array<QTGridViewItem>
  ): Array<QTGridViewItem> {
    if (instance.value) {
      return instance.value.init(target)
    }
    return []
  }

  function stopPage(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.stopPage()
  }

  function restartPage(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.restartPage()
  }

  function setItemFocused(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void {
    instance.value?.setItemFocused(position)
  }

  function scrollToFocused(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void {
    instance.value?.scrollToFocused(position)
  }

  function setItemSelected(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    requestFocus: boolean
  ): void {
    instance.value?.setItemSelected(position, requestFocus)
  }

  function scrollToSelected(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    requestFocus: boolean
  ): void {
    instance.value?.scrollToSelected(position, requestFocus)
  }

  function setInitPosition(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void {
    instance.value?.setInitPosition(position)
  }

  //------------------------------ListView方法--------------------------------------------------
  //-------------------------------------BaseListView-------------------------------------------------------
  function scrollToIndex(
    instance: Ref<QTIGridView | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void {
    instance.value?.scrollToIndex(y, animated ?? false, offset ?? 0)
  }

  function startScroll(
    instance: Ref<QTIGridView | undefined>,
    position: QTListInitPosition
  ): void {
    instance.value?.startScroll(position)
  }

  function setSelectChildPosition(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void {
    instance.value?.setSelectChildPosition(position, changeTargetFocusChild)
  }

  function scrollToPositionWithOffset(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void {
    instance.value?.scrollToPositionWithOffset(position, offset, animated)
  }

  function scrollToPositionWithOffsetInfiniteMode(
    instance: Ref<QTIGridView | undefined>,
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
    instance: Ref<QTIGridView | undefined>,
    position: number,
    offset?: number
  ): void {
    if (offset) {
      instance.value?.scrollToPosition(position)
    } else {
      instance.value?.scrollToPosition(position)
    }
  }

  function refreshListData(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.refreshListData()
  }

  function updateItemTraverse(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void {
    instance.value?.updateItemTraverse(position, data, traverse)
  }

  function requestItemLayout(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void {
    instance.value?.requestItemLayout(position)
  }

  function updateItemRange(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.updateItemRange(position, count, itemList)
  }

  function insertItemRange(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.insertItemRange(position, itemList)
  }

  function updateItemMatched(
    instance: Ref<QTIGridView | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    instance.value?.updateItemMatched(params, data)
  }

  function updateItemMatchedByKey(
    instance: Ref<QTIGridView | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    instance.value?.updateItemMatchedByKey(idKey, params, data)
  }

  function deleteItemRange(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    count: number
  ): void {
    instance.value?.deleteItemRange(position, count)
  }

  function setListData(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.setListData(itemList)
  }

  function setListDataWithParams(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void {
    instance.value?.setListDataWithParams(itemList, autoChangeVisible, useDiff)
  }

  function addListData(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.addListData(itemList)
  }

  function addListDataWithParams(
    instance: Ref<QTIGridView | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void {
    instance.value?.addListDataWithParams(itemList, deleteCount)
  }

  function destroy(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.destroy()
  }

  function recycle(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.recycle()
  }

  function scrollToTop(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.scrollToTop()
  }

  function scrollToFocus(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void {
    instance.value?.scrollToFocus(position, scrollOffset, delay, target)
  }

  function prepareForRecycle(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.prepareForRecycle()
  }

  function setDisplay(
    instance: Ref<QTIGridView | undefined>,
    display: boolean
  ): void {
    instance.value?.setDisplay(display)
  }

  function changeDisplayState(
    instance: Ref<QTIGridView | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void {
    instance.value?.changeDisplayState(display, autoDataState)
  }

  function notifySaveInstance(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.notifySaveInstance()
  }

  function notifyRestoreInstance(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.notifyRestoreInstance()
  }

  function updateItemProps(
    instance: Ref<QTIGridView | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void {
    instance.value?.updateItemProps(name, position, dataToUpdate, updateView)
  }

  function updateItem(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    data: QTListViewItem
  ): void {
    instance.value?.updateItem(position, data)
  }

  function dispatchItemFunction(
    instance: Ref<QTIGridView | undefined>,
    params: QTNativeArray
  ): void {
    instance.value?.dispatchItemFunction(params)
  }

  function clearPostTask(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.clearPostTask()
  }

  function clearPostTaskByCate(
    instance: Ref<QTIGridView | undefined>,
    data: Array<number>
  ): void {
    instance.value?.clearPostTaskByCate(data)
  }

  function clearData(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.clearData()
  }

  function pausePostTask(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.pausePostTask()
  }

  function resumePostTask(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.resumePostTask()
  }

  function requestLayoutManual(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.requestLayoutManual()
  }

  function setSpanCount(
    instance: Ref<QTIGridView | undefined>,
    spanCount: number
  ): void {
    instance.value?.setSpanCount(spanCount)
  }

  function searchReplaceItem(
    instance: Ref<QTIGridView | undefined>,
    id: string,
    item: QTListViewItem
  ): void {
    instance.value?.searchReplaceItem(id, item)
  }

  function setCustomStateEnableOnFocus(
    instance: Ref<QTIGridView | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void {
    instance.value?.setCustomStateEnableOnFocus(id, params)
  }

  function setItemCustomState(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void {
    instance.value?.setItemCustomState(position, state, on)
  }

  function dispatchItemFunctionWithPromise(
    instance: Ref<QTIGridView | undefined>,
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
    instance: Ref<QTIGridView | undefined>
  ): Promise<QTPosition> {
    if (instance.value) {
      return instance.value!.getScrollOffset()
    } else {
      return Promise.reject()
    }
  }

  //------------------------------BaseView方法--------------------------------------------------
  function requestFocus(
    instance: Ref<QTIGridView | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocus(direction)
  }

  function requestChildFocus(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): void {
    instance.value?.requestChildFocus(position)
  }

  function clearFocus(instance: Ref<QTIGridView | undefined>) {
    instance.value?.clearFocus()
  }

  function requestFocusDirectly(
    instance: Ref<QTIGridView | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocusDirectly(direction)
  }

  function setVisibility(
    instance: Ref<QTIGridView | undefined>,
    v: QTVisibility
  ) {
    instance.value?.setVisibility(v)
  }

  function requestRootLayout(instance: Ref<QTIGridView | undefined>) {
    instance.value?.requestRootLayout()
  }

  function requestLayout(instance: Ref<QTIGridView | undefined>) {
    instance.value?.requestLayout()
  }

  function setDescendantFocusability(
    instance: Ref<QTIGridView | undefined>,
    descendant: QTFocusDescendant
  ): void {
    instance.value?.setDescendantFocusability(descendant)
  }

  function changeDescendantFocusability(
    instance: Ref<QTIGridView | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    instance.value?.changeDescendantFocusability(descendant)
  }

  function forceUpdateRenderNode(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.forceUpdateRenderNode()
  }

  function setBackGroundColor(
    instance: Ref<QTIGridView | undefined>,
    color: string
  ): void {
    instance.value?.setBackGroundColor(color)
  }

  function layoutViewManual(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.layoutViewManual()
  }

  function blockRootFocus(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.blockRootFocus()
  }

  function unBlockRootFocus(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.unBlockRootFocus()
  }

  function changeAlpha(
    instance: Ref<QTIGridView | undefined>,
    alpha: number
  ): void {
    instance.value?.changeAlpha(alpha)
  }

  function setScale(
    instance: Ref<QTIGridView | undefined>,
    x: number,
    y: number,
    duration: number
  ): void {
    instance.value?.setScale(x, y, duration)
  }

  function setPosition(
    instance: Ref<QTIGridView | undefined>,
    x: number,
    y: number,
    z: number
  ): void {
    instance.value?.setPosition(x, y, z)
  }

  function updateLayout(
    instance: Ref<QTIGridView | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void {
    instance.value?.updateLayout(width, height, x, y)
  }

  function invalidate(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.invalidate()
  }

  function dispatchFunctionForTarget(
    instance: Ref<QTIGridView | undefined>,
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
    instance: Ref<QTIGridView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirections(directionList)
  }

  function setBlockFocusDirectionsOnFail(
    instance: Ref<QTIGridView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirectionsOnFail(directionList)
  }

  function setInitFocus(
    instance: Ref<QTIGridView | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setInitFocus(sid, delay)
  }

  function setAutoFocus(
    instance: Ref<QTIGridView | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setAutoFocus(sid, delay)
  }

  function enabledAutofocus(
    instance: Ref<QTIGridView | undefined>,
    autofocus: boolean
  ): void {
    instance.value?.enabledAutofocus(autofocus)
  }

  function requestAutofocus(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.requestAutofocus()
  }

  function hasFocus(instance: Ref<QTIGridView | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(instance: Ref<QTIGridView | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(
    instance: Ref<QTIGridView | undefined>
  ): Promise<QTEventData<QTLocation>> {
    if (instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(
    instance: Ref<QTIGridView | undefined>
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(
    instance: Ref<QTIGridView | undefined>,
    position: number
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getChildViewState(position)
    } else {
      return Promise.reject()
    }
  }

  return {
    init,
    stopPage,
    restartPage,
    setItemFocused,
    scrollToFocused,
    setItemSelected,
    scrollToSelected,
    setInitPosition,
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
    updateItem,
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
