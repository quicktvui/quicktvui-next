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
import type { QTIWaterfall } from './waterfall-instance'
import type {
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
} from './waterfall-types'

export interface QtWaterfallAPI {
  //-----------------------------Waterfall----------------------------------------

  init(instance: Ref<QTIWaterfall | undefined>, waterfall: QTWaterfall): void

  getSectionList(
    instance: Ref<QTIWaterfall | undefined>
  ): Array<QTWaterfallSection>

  setSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sections: Array<QTWaterfallSection>
  ): void

  addSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sections: Array<QTWaterfallSection>
  ): void

  deleteSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    count: number
  ): void

  updateSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    section: QTWaterfallSection
  ): void

  updateSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    count: number,
    sectionList: Array<QTWaterfallSection>
  ): void

  getSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number
  ): QTWaterfallSection | undefined

  addItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>
  ): void

  deleteItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number
  ): void

  updateItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    item: QTWaterfallItem
  ): void

  updateItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number,
    itemList: Array<QTWaterfallItem>
  ): void

  getItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number
  ): QTWaterfallItem | undefined

  //---------------------------------------------------------------------

  //---------------------------------------BaseListView方法-----------------------------------------
  scrollToIndex(
    instance: Ref<QTIWaterfall | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void

  startScroll(
    instance: Ref<QTIWaterfall | undefined>,
    position: QTListInitPosition
  ): void

  setSelectChildPosition(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void

  scrollToPositionWithOffset(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPositionWithOffsetInfiniteMode(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPosition(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    offset?: number
  ): void

  refreshListData(instance: Ref<QTIWaterfall | undefined>): void

  updateItemTraverse(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void

  requestItemLayout(
    instance: Ref<QTIWaterfall | undefined>,
    position: number
  ): void

  updateItemRange(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void

  insertItemRange(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void

  updateItemMatched(
    instance: Ref<QTIWaterfall | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  updateItemMatchedByKey(
    instance: Ref<QTIWaterfall | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  deleteItemRange(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    count: number
  ): void

  setListData(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  setListDataWithParams(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void

  addListData(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  addListDataWithParams(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void

  destroy(instance: Ref<QTIWaterfall | undefined>): void

  recycle(instance: Ref<QTIWaterfall | undefined>): void

  scrollToTop(instance: Ref<QTIWaterfall | undefined>): void

  scrollToFocus(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void

  prepareForRecycle(instance: Ref<QTIWaterfall | undefined>): void

  setDisplay(instance: Ref<QTIWaterfall | undefined>, display: boolean): void

  changeDisplayState(
    instance: Ref<QTIWaterfall | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void

  notifySaveInstance(instance: Ref<QTIWaterfall | undefined>): void

  notifyRestoreInstance(instance: Ref<QTIWaterfall | undefined>): void

  updateItemProps(
    instance: Ref<QTIWaterfall | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void

  dispatchItemFunction(
    instance: Ref<QTIWaterfall | undefined>,
    params: QTNativeArray
  ): void

  clearPostTask(instance: Ref<QTIWaterfall | undefined>): void

  clearPostTaskByCate(
    instance: Ref<QTIWaterfall | undefined>,
    data: Array<number>
  ): void

  clearData(instance: Ref<QTIWaterfall | undefined>): void

  pausePostTask(instance: Ref<QTIWaterfall | undefined>): void

  resumePostTask(instance: Ref<QTIWaterfall | undefined>): void

  requestLayoutManual(instance: Ref<QTIWaterfall | undefined>): void

  setSpanCount(instance: Ref<QTIWaterfall | undefined>, spanCount: number): void

  searchReplaceItem(
    instance: Ref<QTIWaterfall | undefined>,
    id: string,
    item: QTListViewItem
  ): void

  setCustomStateEnableOnFocus(
    instance: Ref<QTIWaterfall | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void

  setItemCustomState(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void

  dispatchItemFunctionWithPromise(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>
  ): Promise<QTNativeParams>

  getScrollOffset(instance: Ref<QTIWaterfall | undefined>): Promise<QTPosition>

  //---------------------------------------BaseView方法-----------------------------------------
  requestFocus(
    instance: Ref<QTIWaterfall | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: Ref<QTIWaterfall | undefined>,
    position: number
  ): void

  clearFocus(instance: Ref<QTIWaterfall | undefined>): void

  requestFocusDirectly(
    instance: Ref<QTIWaterfall | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(instance: Ref<QTIWaterfall | undefined>, v: QTVisibility): void

  requestRootLayout(instance: Ref<QTIWaterfall | undefined>): void

  requestLayout(instance: Ref<QTIWaterfall | undefined>): void

  //
  setDescendantFocusability(
    instance: Ref<QTIWaterfall | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: Ref<QTIWaterfall | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: Ref<QTIWaterfall | undefined>): void

  setBackGroundColor(
    instance: Ref<QTIWaterfall | undefined>,
    color: string
  ): void

  layoutViewManual(instance: Ref<QTIWaterfall | undefined>): void

  blockRootFocus(instance: Ref<QTIWaterfall | undefined>): void

  unBlockRootFocus(instance: Ref<QTIWaterfall | undefined>): void

  changeAlpha(instance: Ref<QTIWaterfall | undefined>, alpha: number): void

  setScale(
    instance: Ref<QTIWaterfall | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: Ref<QTIWaterfall | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: Ref<QTIWaterfall | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: Ref<QTIWaterfall | undefined>): void

  dispatchFunctionForTarget(
    instance: Ref<QTIWaterfall | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: Ref<QTIWaterfall | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: Ref<QTIWaterfall | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: Ref<QTIWaterfall | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: Ref<QTIWaterfall | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: Ref<QTIWaterfall | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: Ref<QTIWaterfall | undefined>): void

  //
  hasFocus(instance: Ref<QTIWaterfall | undefined>): Promise<boolean>

  isFocused(instance: Ref<QTIWaterfall | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: Ref<QTIWaterfall | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(instance: Ref<QTIWaterfall | undefined>): Promise<QTViewState>

  getChildViewState(
    instance: Ref<QTIWaterfall | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtWaterfallAPI(): QtWaterfallAPI {
  //-----------------------------Waterfall----------------------------------------
  function init(
    instance: Ref<QTIWaterfall | undefined>,
    waterfall: QTWaterfall
  ) {
    instance.value?.init(waterfall)
  }

  function getSectionList(
    instance: Ref<QTIWaterfall | undefined>
  ): Array<QTWaterfallSection> {
    if (instance.value) {
      return instance.value!.getSectionList()
    }
    return []
  }

  function setSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sections: Array<QTWaterfallSection>
  ): void {
    instance.value?.setSectionList(sections)
  }

  function addSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sections: Array<QTWaterfallSection>
  ): void {
    instance.value?.addSectionList(sections)
  }

  function deleteSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    count: number
  ): void {
    instance.value?.deleteSection(sectionIndex, count)
  }

  function updateSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    section: QTWaterfallSection
  ): void {
    instance.value?.updateSection(sectionIndex, section)
  }

  function updateSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    count: number,
    sectionList: Array<QTWaterfallSection>
  ): void {
    instance.value?.updateSectionList(sectionIndex, count, sectionList)
  }

  function getSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number
  ): QTWaterfallSection | undefined {
    return instance.value?.getSection(sectionIndex)
  }

  function addItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>
  ): void {
    instance.value?.addItemList(sectionIndex, itemList)
  }

  function deleteItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number
  ): void {
    instance.value?.deleteItem(sectionIndex, itemIndex, count)
  }

  function updateItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    item: QTWaterfallItem
  ): void {
    instance.value?.updateItem(sectionIndex, itemIndex, item)
  }

  function updateItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number,
    itemList: Array<QTWaterfallItem>
  ): void {
    instance.value?.updateItemList(sectionIndex, itemIndex, count, itemList)
  }

  function getItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number
  ): QTWaterfallItem | undefined {
    if (instance.value) {
      return instance.value?.getItem(sectionIndex, itemIndex)
    }
    return undefined
  }

  //-------------------------------------BaseListView-------------------------------------------------------
  function scrollToIndex(
    instance: Ref<QTIWaterfall | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void {
    instance.value?.scrollToIndex(x, y, animated, duration, offset)
  }

  function startScroll(
    instance: Ref<QTIWaterfall | undefined>,
    position: QTListInitPosition
  ): void {
    instance.value?.startScroll(position)
  }

  function setSelectChildPosition(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void {
    instance.value?.setSelectChildPosition(position, changeTargetFocusChild)
  }

  function scrollToPositionWithOffset(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void {
    instance.value?.scrollToPositionWithOffset(position, offset, animated)
  }

  function scrollToPositionWithOffsetInfiniteMode(
    instance: Ref<QTIWaterfall | undefined>,
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
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    offset?: number
  ): void {
    if (offset) {
      instance.value?.scrollToPosition(position)
    } else {
      instance.value?.scrollToPosition(position)
    }
  }

  function refreshListData(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.refreshListData()
  }

  function updateItemTraverse(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void {
    instance.value?.updateItemTraverse(position, data, traverse)
  }

  function requestItemLayout(
    instance: Ref<QTIWaterfall | undefined>,
    position: number
  ): void {
    instance.value?.requestItemLayout(position)
  }

  function updateItemRange(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.updateItemRange(position, count, itemList)
  }

  function insertItemRange(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.insertItemRange(position, itemList)
  }

  function updateItemMatched(
    instance: Ref<QTIWaterfall | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    instance.value?.updateItemMatched(params, data)
  }

  function updateItemMatchedByKey(
    instance: Ref<QTIWaterfall | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    instance.value?.updateItemMatchedByKey(idKey, params, data)
  }

  function deleteItemRange(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    count: number
  ): void {
    instance.value?.deleteItemRange(position, count)
  }

  function setListData(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.setListData(itemList)
  }

  function setListDataWithParams(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void {
    instance.value?.setListDataWithParams(itemList, autoChangeVisible, useDiff)
  }

  function addListData(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    instance.value?.addListData(itemList)
  }

  function addListDataWithParams(
    instance: Ref<QTIWaterfall | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void {
    instance.value?.addListDataWithParams(itemList, deleteCount)
  }

  function destroy(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.destroy()
  }

  function recycle(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.recycle()
  }

  function scrollToTop(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.scrollToTop()
  }

  function scrollToFocus(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void {
    instance.value?.scrollToFocus(position, scrollOffset, delay, target)
  }

  function prepareForRecycle(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.prepareForRecycle()
  }

  function setDisplay(
    instance: Ref<QTIWaterfall | undefined>,
    display: boolean
  ): void {
    instance.value?.setDisplay(display)
  }

  function changeDisplayState(
    instance: Ref<QTIWaterfall | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void {
    instance.value?.changeDisplayState(display, autoDataState)
  }

  function notifySaveInstance(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.notifySaveInstance()
  }

  function notifyRestoreInstance(
    instance: Ref<QTIWaterfall | undefined>
  ): void {
    instance.value?.notifyRestoreInstance()
  }

  function updateItemProps(
    instance: Ref<QTIWaterfall | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void {
    instance.value?.updateItemProps(name, position, dataToUpdate, updateView)
  }

  function dispatchItemFunction(
    instance: Ref<QTIWaterfall | undefined>,
    params: QTNativeArray
  ): void {
    instance.value?.dispatchItemFunction(params)
  }

  function clearPostTask(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.clearPostTask()
  }

  function clearPostTaskByCate(
    instance: Ref<QTIWaterfall | undefined>,
    data: Array<number>
  ): void {
    instance.value?.clearPostTaskByCate(data)
  }

  function clearData(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.clearData()
  }

  function pausePostTask(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.pausePostTask()
  }

  function resumePostTask(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.resumePostTask()
  }

  function requestLayoutManual(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.requestLayoutManual()
  }

  function setSpanCount(
    instance: Ref<QTIWaterfall | undefined>,
    spanCount: number
  ): void {
    instance.value?.setSpanCount(spanCount)
  }

  function searchReplaceItem(
    instance: Ref<QTIWaterfall | undefined>,
    id: string,
    item: QTListViewItem
  ): void {
    instance.value?.searchReplaceItem(id, item)
  }

  function setCustomStateEnableOnFocus(
    instance: Ref<QTIWaterfall | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void {
    instance.value?.setCustomStateEnableOnFocus(id, params)
  }

  function setItemCustomState(
    instance: Ref<QTIWaterfall | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void {
    instance.value?.setItemCustomState(position, state, on)
  }

  function dispatchItemFunctionWithPromise(
    instance: Ref<QTIWaterfall | undefined>,
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
    instance: Ref<QTIWaterfall | undefined>
  ): Promise<QTPosition> {
    if (instance.value) {
      return instance.value!.getScrollOffset()
    } else {
      return Promise.reject()
    }
  }

  //------------------------------BaseView方法--------------------------------------------------
  function requestFocus(
    instance: Ref<QTIWaterfall | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocus(direction)
  }

  function requestChildFocus(
    instance: Ref<QTIWaterfall | undefined>,
    position: number
  ): void {
    instance.value?.requestChildFocus(position)
  }

  function clearFocus(instance: Ref<QTIWaterfall | undefined>) {
    instance.value?.clearFocus()
  }

  function requestFocusDirectly(
    instance: Ref<QTIWaterfall | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocusDirectly(direction)
  }

  function setVisibility(
    instance: Ref<QTIWaterfall | undefined>,
    v: QTVisibility
  ) {
    instance.value?.setVisibility(v)
  }

  function requestRootLayout(instance: Ref<QTIWaterfall | undefined>) {
    instance.value?.requestRootLayout()
  }

  function requestLayout(instance: Ref<QTIWaterfall | undefined>) {
    instance.value?.requestLayout()
  }

  function setDescendantFocusability(
    instance: Ref<QTIWaterfall | undefined>,
    descendant: QTFocusDescendant
  ): void {
    instance.value?.setDescendantFocusability(descendant)
  }

  function changeDescendantFocusability(
    instance: Ref<QTIWaterfall | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    instance.value?.changeDescendantFocusability(descendant)
  }

  function forceUpdateRenderNode(
    instance: Ref<QTIWaterfall | undefined>
  ): void {
    instance.value?.forceUpdateRenderNode()
  }

  function setBackGroundColor(
    instance: Ref<QTIWaterfall | undefined>,
    color: string
  ): void {
    instance.value?.setBackGroundColor(color)
  }

  function layoutViewManual(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.layoutViewManual()
  }

  function blockRootFocus(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.blockRootFocus()
  }

  function unBlockRootFocus(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.unBlockRootFocus()
  }

  function changeAlpha(
    instance: Ref<QTIWaterfall | undefined>,
    alpha: number
  ): void {
    instance.value?.changeAlpha(alpha)
  }

  function setScale(
    instance: Ref<QTIWaterfall | undefined>,
    x: number,
    y: number,
    duration: number
  ): void {
    instance.value?.setScale(x, y, duration)
  }

  function setPosition(
    instance: Ref<QTIWaterfall | undefined>,
    x: number,
    y: number,
    z: number
  ): void {
    instance.value?.setPosition(x, y, z)
  }

  function updateLayout(
    instance: Ref<QTIWaterfall | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void {
    instance.value?.updateLayout(width, height, x, y)
  }

  function invalidate(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.invalidate()
  }

  function dispatchFunctionForTarget(
    instance: Ref<QTIWaterfall | undefined>,
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
    instance: Ref<QTIWaterfall | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirections(directionList)
  }

  function setBlockFocusDirectionsOnFail(
    instance: Ref<QTIWaterfall | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirectionsOnFail(directionList)
  }

  function setInitFocus(
    instance: Ref<QTIWaterfall | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setInitFocus(sid, delay)
  }

  function setAutoFocus(
    instance: Ref<QTIWaterfall | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setAutoFocus(sid, delay)
  }

  function enabledAutofocus(
    instance: Ref<QTIWaterfall | undefined>,
    autofocus: boolean
  ): void {
    instance.value?.enabledAutofocus(autofocus)
  }

  function requestAutofocus(instance: Ref<QTIWaterfall | undefined>): void {
    instance.value?.requestAutofocus()
  }

  function hasFocus(instance: Ref<QTIWaterfall | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(
    instance: Ref<QTIWaterfall | undefined>
  ): Promise<boolean> {
    if (instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(
    instance: Ref<QTIWaterfall | undefined>
  ): Promise<QTEventData<QTLocation>> {
    if (instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(
    instance: Ref<QTIWaterfall | undefined>
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(
    instance: Ref<QTIWaterfall | undefined>,
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
    //---------------------------------------------
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
