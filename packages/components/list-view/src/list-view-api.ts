import { isRef } from '@vue/reactivity'
import { isString } from '@quicktvui/utils'
import { callUIFunction, callUIFunctionWithPromise } from '../../api'
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
import type { QTViewState } from '../../view'
import type { QTListInitPosition, QTListViewItem } from './list-view-types'
import type { QTIListView } from './list-view-instance'
import type { Ref } from '@vue/reactivity'

export interface QtListViewAPI {
  //-------------------------------------ListView----------------------------------------------
  init(
    instance: Ref<QTIListView | undefined>,
    target: Array<QTListViewItem>,
    isInit?: boolean
  ): Array<QTListViewItem>

  stopPage(instance: Ref<QTIListView | undefined>): void

  setItemFocused(instance: Ref<QTIListView | undefined>, position: number): void

  scrollToFocused(
    instance: Ref<QTIListView | undefined>,
    position: number
  ): void

  setItemSelected(
    instance: Ref<QTIListView | undefined>,
    position: number,
    requestFocus: boolean
  ): void

  scrollToSelected(
    instance: Ref<QTIListView | undefined>,
    position: number,
    requestFocus: boolean
  ): void

  deleteItem(
    instance: Ref<QTIListView | undefined>,
    position: number,
    count: number
  ): void

  updateItemList(
    instance: Ref<QTIListView | undefined>,
    position: number,
    count: number,
    data: Array<QTListViewItem>
  ): void

  //-------------------------------------BaseListView----------------------------------------------
  scrollToIndex(
    instance: string | Ref<QTIListView | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void

  startScroll(
    instance: string | Ref<QTIListView | undefined>,
    position: QTListInitPosition
  ): void

  setSelectChildPosition(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void

  scrollToPositionWithOffset(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPositionWithOffsetInfiniteMode(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void

  scrollToPosition(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    offset?: number
  ): void

  refreshListData(instance: string | Ref<QTIListView | undefined>): void

  updateItemTraverse(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void

  requestItemLayout(
    instance: string | Ref<QTIListView | undefined>,
    position: number
  ): void

  updateItemRange(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void

  insertItemRange(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void

  updateItemMatched(
    instance: string | Ref<QTIListView | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  updateItemMatchedByKey(
    instance: string | Ref<QTIListView | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void

  deleteItemRange(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    count: number
  ): void

  setListData(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  setListDataWithParams(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void

  addListData(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>
  ): void

  addListDataWithParams(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void

  destroy(instance: string | Ref<QTIListView | undefined>): void

  recycle(instance: string | Ref<QTIListView | undefined>): void

  scrollToTop(instance: string | Ref<QTIListView | undefined>): void

  scrollToFocus(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void

  prepareForRecycle(instance: string | Ref<QTIListView | undefined>): void

  setDisplay(
    instance: string | Ref<QTIListView | undefined>,
    display: boolean
  ): void

  changeDisplayState(
    instance: string | Ref<QTIListView | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void

  notifySaveInstance(instance: string | Ref<QTIListView | undefined>): void

  notifyRestoreInstance(instance: string | Ref<QTIListView | undefined>): void

  updateItemProps(
    instance: string | Ref<QTIListView | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void

  updateItem(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    data: QTListViewItem
  ): void

  dispatchItemFunction(
    instance: string | Ref<QTIListView | undefined>,
    params: QTNativeArray
  ): void

  clearPostTask(instance: string | Ref<QTIListView | undefined>): void

  clearPostTaskByCate(
    instance: string | Ref<QTIListView | undefined>,
    data: Array<number>
  ): void

  clearData(instance: string | Ref<QTIListView | undefined>): void

  pausePostTask(instance: string | Ref<QTIListView | undefined>): void

  resumePostTask(instance: string | Ref<QTIListView | undefined>): void

  requestLayoutManual(instance: string | Ref<QTIListView | undefined>): void

  setSpanCount(
    instance: string | Ref<QTIListView | undefined>,
    spanCount: number
  ): void

  searchReplaceItem(
    instance: string | Ref<QTIListView | undefined>,
    id: string,
    item: QTListViewItem
  ): void

  setCustomStateEnableOnFocus(
    instance: string | Ref<QTIListView | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void

  setItemCustomState(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void

  dispatchItemFunctionWithPromise(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>
  ): Promise<QTNativeParams>

  getScrollOffset(
    instance: string | Ref<QTIListView | undefined>
  ): Promise<QTPosition>

  //-------------------------------------BaseView----------------------------------------------
  requestFocus(
    instance: string | Ref<QTIListView | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTIListView | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTIListView | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTIListView | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTIListView | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTIListView | undefined>): void

  requestLayout(instance: string | Ref<QTIListView | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTIListView | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTIListView | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTIListView | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTIListView | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTIListView | undefined>): void

  blockRootFocus(instance: string | Ref<QTIListView | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTIListView | undefined>): void

  changeAlpha(
    instance: string | Ref<QTIListView | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTIListView | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTIListView | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTIListView | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTIListView | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTIListView | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTIListView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIListView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTIListView | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTIListView | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTIListView | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTIListView | undefined>): void

  //
  hasFocus(instance: string | Ref<QTIListView | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTIListView | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTIListView | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTIListView | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTIListView | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtListViewAPI(): QtListViewAPI {
  function init(
    instance: Ref<QTIListView | undefined>,
    target: Array<QTListViewItem>,
    isInit?: boolean
  ): Array<QTListViewItem> {
    if (instance.value) {
      return instance.value.init(target, isInit)
    }
    return []
  }

  function stopPage(instance: Ref<QTIListView | undefined>): void {
    instance.value?.stopPage()
  }

  function setItemFocused(
    instance: Ref<QTIListView | undefined>,
    position: number
  ): void {
    instance.value?.setItemFocused(position)
  }

  function scrollToFocused(
    instance: Ref<QTIListView | undefined>,
    position: number
  ): void {
    instance.value?.scrollToFocused(position)
  }

  function setItemSelected(
    instance: Ref<QTIListView | undefined>,
    position: number,
    requestFocus: boolean
  ): void {
    instance.value?.setItemSelected(position, requestFocus)
  }

  function scrollToSelected(
    instance: Ref<QTIListView | undefined>,
    position: number,
    requestFocus: boolean
  ): void {
    instance.value?.scrollToSelected(position, requestFocus)
  }

  function deleteItem(
    instance: Ref<QTIListView | undefined>,
    position: number,
    count: number
  ): void {
    instance.value?.deleteItem(position, count)
  }

  function updateItemList(
    instance: Ref<QTIListView | undefined>,
    position: number,
    count: number,
    data: Array<QTListViewItem>
  ): void {
    instance.value?.updateItemList(position, count, data)
  }

  //-------------------------------------BaseListView-------------------------------------------------------
  function scrollToIndex(
    instance: string | Ref<QTIListView | undefined>,
    x: number,
    y: number,
    animated?: boolean,
    duration?: number,
    offset?: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToIndex', [
        x,
        y,
        animated,
        duration,
        offset,
      ])
    } else if (isRef(instance)) {
      instance.value?.scrollToIndex(x, y, animated, duration, offset)
    }
  }

  function startScroll(
    instance: string | Ref<QTIListView | undefined>,
    position: QTListInitPosition
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'startScroll', [position])
    } else if (isRef(instance)) {
      instance.value?.startScroll(position)
    }
  }

  function setSelectChildPosition(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    changeTargetFocusChild?: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSelectChildPosition', [
        position,
        changeTargetFocusChild,
      ])
    } else if (isRef(instance)) {
      instance.value?.setSelectChildPosition(position, changeTargetFocusChild)
    }
  }

  function scrollToPositionWithOffset(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToPositionWithOffset', [
        position,
        offset,
        animated,
      ])
    } else if (isRef(instance)) {
      instance.value?.scrollToPositionWithOffset(position, offset, animated)
    }
  }

  function scrollToPositionWithOffsetInfiniteMode(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    offset: number,
    animated: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToPositionWithOffsetInfiniteMode', [
        position,
        offset,
        animated,
      ])
    } else if (isRef(instance)) {
      instance.value?.scrollToPositionWithOffsetInfiniteMode(
        position,
        offset,
        animated
      )
    }
  }

  function scrollToPosition(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    offset?: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToPosition', [position, offset])
    } else if (isRef(instance)) {
      instance.value?.scrollToPosition(position, offset)
    }
  }

  function refreshListData(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'refreshListData', [])
    } else if (isRef(instance)) {
      instance.value?.refreshListData()
    }
  }

  function updateItemTraverse(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    data?: QTListViewItem,
    traverse?: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateItemTraverse', [position, data, traverse])
    } else if (isRef(instance)) {
      instance.value?.updateItemTraverse(position, data, traverse)
    }
  }

  function requestItemLayout(
    instance: string | Ref<QTIListView | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestItemLayout', [position])
    } else if (isRef(instance)) {
      instance.value?.requestItemLayout(position)
    }
  }

  function updateItemRange(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    count: number,
    itemList: Array<QTListViewItem>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateItemRange', [position, count, itemList])
    } else if (isRef(instance)) {
      instance.value?.updateItemRange(position, count, itemList)
    }
  }

  function insertItemRange(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    itemList: Array<QTListViewItem>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'insertItemRange', [position, itemList])
    } else if (isRef(instance)) {
      instance.value?.insertItemRange(position, itemList)
    }
  }

  function updateItemMatched(
    instance: string | Ref<QTIListView | undefined>,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateItemMatched', [params, data])
    } else if (isRef(instance)) {
      instance.value?.updateItemMatched(params, data)
    }
  }

  function updateItemMatchedByKey(
    instance: string | Ref<QTIListView | undefined>,
    idKey: string,
    params: QTNativeParams,
    data: QTListViewItem
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateItemMatched', [idKey, params, data])
    } else if (isRef(instance)) {
      instance.value?.updateItemMatchedByKey(idKey, params, data)
    }
  }

  function deleteItemRange(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    count: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'deleteItemRange', [position, count])
    } else if (isRef(instance)) {
      instance.value?.deleteItemRange(position, count)
    }
  }

  function setListData(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setListData', [itemList])
    } else if (isRef(instance)) {
      instance.value?.setListData(itemList)
    }
  }

  function setListDataWithParams(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>,
    autoChangeVisible: boolean,
    useDiff: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setListDataWithParams', [
        itemList,
        autoChangeVisible,
        useDiff,
      ])
    } else if (isRef(instance)) {
      instance.value?.setListDataWithParams(
        itemList,
        autoChangeVisible,
        useDiff
      )
    }
  }

  function addListData(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'addListData', [itemList])
    } else if (isRef(instance)) {
      instance.value?.addListData(itemList)
    }
  }

  function addListDataWithParams(
    instance: string | Ref<QTIListView | undefined>,
    itemList: Array<QTListViewItem>,
    deleteCount: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'addListDataWithParams', [itemList, deleteCount])
    } else if (isRef(instance)) {
      instance.value?.addListDataWithParams(itemList, deleteCount)
    }
  }

  function destroy(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'destroy', [])
    } else if (isRef(instance)) {
      instance.value?.destroy()
    }
  }

  function recycle(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'recycle', [])
    } else if (isRef(instance)) {
      instance.value?.recycle()
    }
  }

  function scrollToTop(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToTop', [])
    } else if (isRef(instance)) {
      instance.value?.scrollToTop()
    }
  }

  function scrollToFocus(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    scrollOffset: number,
    delay: number,
    target: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToFocus', [
        position,
        scrollOffset,
        delay,
        target,
      ])
    } else if (isRef(instance)) {
      instance.value?.scrollToFocus(position, scrollOffset, delay, target)
    }
  }

  function prepareForRecycle(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'prepareForRecycle', [])
    } else if (isRef(instance)) {
      instance.value?.prepareForRecycle()
    }
  }

  function setDisplay(
    instance: string | Ref<QTIListView | undefined>,
    display: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDisplay', [display])
    } else if (isRef(instance)) {
      instance.value?.setDisplay(display)
    }
  }

  function changeDisplayState(
    instance: string | Ref<QTIListView | undefined>,
    display: boolean,
    autoDataState: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDisplayState', [display, autoDataState])
    } else if (isRef(instance)) {
      instance.value?.changeDisplayState(display, autoDataState)
    }
  }

  function notifySaveInstance(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'notifySaveInstance', [])
    } else if (isRef(instance)) {
      instance.value?.notifySaveInstance()
    }
  }

  function notifyRestoreInstance(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'notifyRestoreInstance', [])
    } else if (isRef(instance)) {
      instance.value?.notifyRestoreInstance()
    }
  }

  function updateItemProps(
    instance: string | Ref<QTIListView | undefined>,
    name: string,
    position: number,
    dataToUpdate: QTNativeMap,
    updateView: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateItemProps', [
        name,
        position,
        dataToUpdate,
        updateView,
      ])
    } else if (isRef(instance)) {
      instance.value?.updateItemProps(name, position, dataToUpdate, updateView)
    }
  }

  function updateItem(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    data: QTListViewItem
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateItem', [position, data])
    } else if (isRef(instance)) {
      instance.value?.updateItem(position, data)
    }
  }

  function dispatchItemFunction(
    instance: string | Ref<QTIListView | undefined>,
    params: QTNativeArray
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'dispatchItemFunction', [params])
    } else if (isRef(instance)) {
      instance.value?.dispatchItemFunction(params)
    }
  }

  function clearPostTask(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'clearPostTask', [])
    } else if (isRef(instance)) {
      instance.value?.clearPostTask()
    }
  }

  function clearPostTaskByCate(
    instance: string | Ref<QTIListView | undefined>,
    data: Array<number>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'clearPostTaskByCate', [data])
    } else if (isRef(instance)) {
      instance.value?.clearPostTaskByCate(data)
    }
  }

  function clearData(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'clearData', [])
    } else if (isRef(instance)) {
      instance.value?.clearData()
    }
  }

  function pausePostTask(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'pausePostTask', [])
    } else if (isRef(instance)) {
      instance.value?.pausePostTask()
    }
  }

  function resumePostTask(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'resumePostTask', [])
    } else if (isRef(instance)) {
      instance.value?.resumePostTask()
    }
  }

  function requestLayoutManual(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayoutManual', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayoutManual()
    }
  }

  function setSpanCount(
    instance: string | Ref<QTIListView | undefined>,
    spanCount: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSpanCount', [spanCount])
    } else if (isRef(instance)) {
      instance.value?.setSpanCount(spanCount)
    }
  }

  function searchReplaceItem(
    instance: string | Ref<QTIListView | undefined>,
    id: string,
    item: QTListViewItem
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'searchReplaceItem', [id, item])
    } else if (isRef(instance)) {
      instance.value?.searchReplaceItem(id, item)
    }
  }

  function setCustomStateEnableOnFocus(
    instance: string | Ref<QTIListView | undefined>,
    id: string,
    params: Array<Array<string>>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setCustomStateEnableOnFocus', [id, params])
    } else if (isRef(instance)) {
      instance.value?.setCustomStateEnableOnFocus(id, params)
    }
  }

  function setItemCustomState(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    state: string,
    on: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setItemCustomState', [position, state, on])
    } else if (isRef(instance)) {
      instance.value?.setItemCustomState(position, state, on)
    }
  }

  function dispatchItemFunctionWithPromise(
    instance: string | Ref<QTIListView | undefined>,
    position: number,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>
  ): Promise<QTNativeParams> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTNativeParams>(
        instance,
        'dispatchItemFunctionWithPromise',
        [position, targetName, functionTargetName, params]
      )
    } else if (isRef(instance) && instance.value) {
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
    instance: string | Ref<QTIListView | undefined>
  ): Promise<QTPosition> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTPosition>(
        instance,
        'getScrollOffset',
        []
      )
    } else if (isRef(instance && instance.value)) {
      return instance.value!.getScrollOffset()
    } else {
      return Promise.reject()
    }
  }

  //---------------------------------BaseView-----------------------------------------------
  function requestFocus(
    instance: string | Ref<QTIListView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTIListView | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTIListView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTIListView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTIListView | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTIListView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTIListView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTIListView | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTIListView | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTIListView | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTIListView | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTIListView | undefined>,
    x: number,
    y: number,
    duration: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setScale', [x, y, duration])
    } else if (isRef(instance)) {
      instance.value?.setScale(x, y, duration)
    }
  }

  function setPosition(
    instance: string | Ref<QTIListView | undefined>,
    x: number,
    y: number,
    z: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setPosition', [x, y, z])
    } else if (isRef(instance)) {
      instance.value?.setPosition(x, y, z)
    }
  }

  function updateLayout(
    instance: string | Ref<QTIListView | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateLayout', [width, height, x, y])
    } else if (isRef(instance)) {
      instance.value?.updateLayout(width, height, x, y)
    }
  }

  function invalidate(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTIListView | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'dispatchFunctionForTarget', [
        targetName,
        functionTargetName,
        params,
        delay,
      ])
    } else if (isRef(instance)) {
      instance.value?.dispatchFunctionForTarget(
        targetName,
        functionTargetName,
        params,
        delay
      )
    }
  }

  function setBlockFocusDirections(
    instance: string | Ref<QTIListView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIListView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTIListView | undefined>,
    sid: string,
    delay?: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setInitFocus', [sid, delay])
    } else if (isRef(instance)) {
      instance.value?.setInitFocus(sid, delay)
    }
  }

  function setAutoFocus(
    instance: string | Ref<QTIListView | undefined>,
    sid: string,
    delay?: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [sid, delay])
    } else if (isRef(instance)) {
      instance.value?.setAutoFocus(sid, delay)
    }
  }

  function enabledAutofocus(
    instance: string | Ref<QTIListView | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTIListView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTIListView | undefined>
  ): Promise<boolean> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<boolean>(instance, 'hasFocus', [])
    } else if (isRef(instance) && instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(
    instance: string | Ref<QTIListView | undefined>
  ): Promise<boolean> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<boolean>(instance, 'isFocused', [])
    } else if (isRef(instance) && instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(
    instance: string | Ref<QTIListView | undefined>
  ): Promise<QTEventData<QTLocation>> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTEventData<QTLocation>>(
        instance,
        'getLocationOnScreen',
        []
      )
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(
    instance: string | Ref<QTIListView | undefined>
  ): Promise<QTViewState> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTViewState>(
        instance,
        'getViewState',
        []
      )
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(
    instance: string | Ref<QTIListView | undefined>,
    position: number
  ): Promise<QTViewState> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTViewState>(
        instance,
        'getChildViewState',
        []
      )
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getChildViewState(position)
    } else {
      return Promise.reject()
    }
  }

  return {
    init,
    stopPage,
    setItemFocused,
    scrollToFocused,
    setItemSelected,
    scrollToSelected,
    deleteItem,
    updateItemList,
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
