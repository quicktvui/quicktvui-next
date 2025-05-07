import { isRef } from '@vue/reactivity'
import { isString } from '@quicktvui/utils'
import { callUIFunction, callUIFunctionWithPromise } from '../../api'
import type { QTTabsView } from './tabs-view-types'
import type { QTViewState, QTViewStateCallback } from '../../view'
import type { QTPageData } from '../../view-pager'
import type { QTITabsView } from './tabs-view-instance'
import type {
  QTDescendantFocusability,
  QTFocusDescendant,
  QTFocusDirection,
  QTFocusDirectionName,
} from '../../focus'
import type {
  QTEventData,
  QTLocation,
  QTNativeParams,
  QTVisibility,
} from '../../base'
import type { Ref } from '@vue/reactivity'
import type { QTListViewItemFunctionParams } from '../../list-view'

export interface QtTabsViewAPI {
  //--------------------------------TabsView------------------------------------------------
  setTabsData(
    instance: string | Ref<QTITabsView | undefined>,
    tabs: QTTabsView
  ): void

  setPageData(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    data: QTPageData
  ): void

  insertPageData(
    instance: string | Ref<QTITabsView | undefined>,
    tabPageIndex: number,
    sectionIndex: number,
    data: any[]
  ): void

  updatePageData(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    data: QTPageData
  ): void

  focusBackToTop(instance: string | Ref<QTITabsView | undefined>): void

  requestNodeFocus(
    instance: string | Ref<QTITabsView | undefined>,
    id: string
  ): void

  addPageData(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    data: QTPageData,
    deleteCount: number
  ): void

  reloadAll(
    instance: string | Ref<QTITabsView | undefined>,
    updateCurrent: boolean
  ): void

  reloadPage(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number
  ): void

  setCurrentPage(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number
  ): void

  getCurrentPage(
    instance: string | Ref<QTITabsView | undefined>
  ): Promise<number>

  requestTabFocus(
    instance: string | Ref<QTITabsView | undefined>,
    tabIndex: number
  ): void

  invokeContentFunction(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    functionName: string,
    param: Array<any>
  ): void

  invokeContentFunctionDirect(
    instance: string | Ref<QTITabsView | undefined>,
    functionName: string,
    param: Array<any>
  ): void

  contentScrollToFocus(
    instance: string | Ref<QTITabsView | undefined>,
    position: number
  ): void

  //2.4
  getRootNodeViewState(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    callback: QTViewStateCallback
  ): void

  //2.4
  getChildNodeViewState(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    childIndex: number,
    name: number,
    callback: QTViewStateCallback
  ): void

  //2.4
  dispatchUIFunctionOnChildNode(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    childIndex: number,
    listViewName: string,
    functionParams: QTListViewItemFunctionParams
  ): void

  updateItemMatched(
    instance: string | Ref<QTITabsView | undefined>,
    key: string,
    id: any,
    newData: any
  ): void

  updateChildNode(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    childIndex: number,
    data: any
  ): void

  updateRootNode(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    data: any
  ): void

  destroy(instance: string | Ref<QTITabsView | undefined>): void

  cancelAll(instance: string | Ref<QTITabsView | undefined>): void

  translationLeft(instance: string | Ref<QTITabsView | undefined>): void

  translationRight(instance: string | Ref<QTITabsView | undefined>): void

  //--------------------------------BaseView------------------------------------------------
  requestFocus(
    instance: string | Ref<QTITabsView | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTITabsView | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTITabsView | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTITabsView | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTITabsView | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTITabsView | undefined>): void

  requestLayout(instance: string | Ref<QTITabsView | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTITabsView | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTITabsView | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTITabsView | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTITabsView | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTITabsView | undefined>): void

  blockRootFocus(instance: string | Ref<QTITabsView | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTITabsView | undefined>): void

  changeAlpha(
    instance: string | Ref<QTITabsView | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTITabsView | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTITabsView | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTITabsView | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTITabsView | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTITabsView | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTITabsView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTITabsView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTITabsView | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTITabsView | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTITabsView | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTITabsView | undefined>): void

  //
  hasFocus(instance: string | Ref<QTITabsView | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTITabsView | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTITabsView | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTITabsView | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTITabsView | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtTabsViewAPI(): QtTabsViewAPI {
  function setTabsData(
    instance: string | Ref<QTITabsView | undefined>,
    tabs: QTTabsView
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTabsData', [
        {
          defaultIndex: tabs.defaultIndex,
          focusIndex: tabs.focusIndex,
        },
        tabs.data,
      ])
    } else if (isRef(instance)) {
      instance.value?.setTabsData(tabs)
    }
  }

  function setPageData(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    data: QTPageData
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setPageData', [
        pageIndex,
        {
          useDiff: data.useDiff,
          disableScrollOnFirstScreen: data.disableScrollOnFirstScreen,
          firstFocusTargetID: data.firstFocusTargetID,
          bindingPlayer: data.bindingPlayer,
        },
        data.data,
      ])
    } else if (isRef(instance)) {
      instance.value?.setPageData(pageIndex, data)
    }
  }

  function insertPageData(
    instance: string | Ref<QTITabsView | undefined>,
    tabPageIndex: number,
    sectionIndex: number,
    data: any[]
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'insertPageData', [
        tabPageIndex,
        sectionIndex,
        data,
      ])
    } else if (isRef(instance)) {
      instance.value?.insertPageData(tabPageIndex, sectionIndex, data)
    }
  }

  function updatePageData(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    data: QTPageData
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updatePageData', [
        pageIndex,
        data.data,
        {
          useDiff: data.useDiff,
          disableScrollOnFirstScreen: data.disableScrollOnFirstScreen,
          firstFocusTargetID: data.firstFocusTargetID,
        },
      ])
    } else if (isRef(instance)) {
      instance.value?.updatePageData(pageIndex, data)
    }
  }

  function focusBackToTop(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'focusBackToTop', [])
    } else if (isRef(instance)) {
      instance.value?.focusBackToTop()
    }
  }

  function requestNodeFocus(
    instance: string | Ref<QTITabsView | undefined>,
    id: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestNodeFocus', [id])
    } else if (isRef(instance)) {
      instance.value?.requestNodeFocus(id)
    }
  }

  function addPageData(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    data: QTPageData,
    deleteCount = 0
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'addPageData', [
        pageIndex,
        { deleteCount },
        data.data,
      ])
    } else if (isRef(instance)) {
      instance.value?.addPageData(pageIndex, data, deleteCount)
    }
  }

  function reloadAll(
    instance: string | Ref<QTITabsView | undefined>,
    updateCurrent = true
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'reloadAll', [updateCurrent])
    } else if (isRef(instance)) {
      instance.value?.reloadAll(updateCurrent)
    }
  }

  function reloadPage(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'reloadPage', [pageIndex])
    } else if (isRef(instance)) {
      instance.value?.reloadPage(pageIndex)
    }
  }

  function setCurrentPage(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setCurrentPage', [pageIndex])
    } else if (isRef(instance)) {
      instance.value?.setCurrentPage(pageIndex)
    }
  }

  function getCurrentPage(
    instance: string | Ref<QTITabsView | undefined>
  ): Promise<number> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<number>(instance, 'getCurrentPage', [])
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getCurrentPage()
    } else {
      return Promise.resolve(-1)
    }
  }

  function requestTabFocus(
    instance: string | Ref<QTITabsView | undefined>,
    tabIndex: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestTabFocus', [tabIndex])
    } else if (isRef(instance)) {
      instance.value?.requestTabFocus(tabIndex)
    }
  }

  function invokeContentFunction(
    instance: string | Ref<QTITabsView | undefined>,
    pageIndex: number,
    functionName: string,
    param: Array<any>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invokeContentFunction', [
        pageIndex,
        functionName,
        param,
      ])
    } else if (isRef(instance)) {
      instance.value?.invokeContentFunction(pageIndex, functionName, param)
    }
  }

  function invokeContentFunctionDirect(
    instance: string | Ref<QTITabsView | undefined>,
    functionName: string,
    param: Array<any>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invokeContentFunctionDirect', [
        functionName,
        param,
      ])
    } else if (isRef(instance)) {
      instance.value?.invokeContentFunctionDirect(functionName, param)
    }
  }

  function contentScrollToFocus(
    instance: string | Ref<QTITabsView | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'contentScrollToFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.contentScrollToFocus(position)
    }
  }

  //2.4
  function getRootNodeViewState(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    callback: QTViewStateCallback
  ): void {
    if (isString(instance)) {
      callUIFunctionWithPromise<QTViewState>(instance, 'getRootNodeState', [
        page,
        position,
      ]).then((res: QTViewState) => {
        callback(res)
      })
    } else if (isRef(instance)) {
      instance.value?.getRootNodeViewState(page, position, callback)
    }
  }

  //2.4
  function getChildNodeViewState(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    childIndex: number,
    name: number,
    callback: QTViewStateCallback
  ): void {
    if (isString(instance)) {
      callUIFunctionWithPromise<QTViewState>(instance, 'getChildNodeState', [
        page,
        position,
        childIndex,
        name,
      ]).then((res: QTViewState) => {
        callback(res)
      })
    } else if (isRef(instance)) {
      instance.value?.getChildNodeViewState(
        page,
        position,
        childIndex,
        name,
        callback
      )
    }
  }

  //2.4
  function dispatchUIFunctionOnChildNode(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    childIndex: number,
    listViewName: string,
    functionParams: QTListViewItemFunctionParams
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'dispatchUIFunctionOnChildNode', [
        page,
        position,
        childIndex,
        listViewName,
        functionParams,
      ])
    } else if (isRef(instance)) {
      instance.value?.dispatchUIFunctionOnChildNode(
        page,
        position,
        childIndex,
        listViewName,
        functionParams
      )
    }
  }

  function updateItemMatched(
    instance: string | Ref<QTITabsView | undefined>,
    key = 'id',
    id: any,
    newData: any
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateItemMatched', [key, id, newData])
    } else if (isRef(instance)) {
      instance.value?.updateItemMatched(key, id, newData)
    }
  }

  function updateChildNode(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    childIndex: number,
    data: any
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateChildNode', [
        page,
        position,
        childIndex,
        data,
      ])
    } else if (isRef(instance)) {
      instance.value?.updateChildNode(page, position, childIndex, data)
    }
  }

  function updateRootNode(
    instance: string | Ref<QTITabsView | undefined>,
    page: number,
    position: number,
    data: any
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateRootNode', [page, position, data])
    } else if (isRef(instance)) {
      instance.value?.updateRootNode(page, position, data)
    }
  }

  function destroy(instance: string | Ref<QTITabsView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'destroy', [])
    } else if (isRef(instance)) {
      instance.value?.destroy()
    }
  }

  function cancelAll(instance: string | Ref<QTITabsView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'cancelAll', [])
    } else if (isRef(instance)) {
      instance.value?.cancelAll()
    }
  }

  function translationLeft(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'translationLeft', [])
    } else if (isRef(instance)) {
      instance.value?.translationLeft()
    }
  }

  function translationRight(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'translationRight', [])
    } else if (isRef(instance)) {
      instance.value?.translationRight()
    }
  }

  //--------------------------------BaseView------------------------------------------------
  function requestFocus(
    instance: string | Ref<QTITabsView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTITabsView | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTITabsView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTITabsView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTITabsView | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTITabsView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTITabsView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTITabsView | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTITabsView | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTITabsView | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTITabsView | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTITabsView | undefined>,
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
    instance: string | Ref<QTITabsView | undefined>,
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
    instance: string | Ref<QTITabsView | undefined>,
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

  function invalidate(instance: string | Ref<QTITabsView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTITabsView | undefined>,
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
    instance: string | Ref<QTITabsView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTITabsView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTITabsView | undefined>,
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
    instance: string | Ref<QTITabsView | undefined>,
    sid: string,
    delay?: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [sid, delay])
    } else if (isRef(instance)) {
      instance.value?.setAutoFocus(sid, delay ?? 0)
    }
  }

  function enabledAutofocus(
    instance: string | Ref<QTITabsView | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTITabsView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTITabsView | undefined>
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
    instance: string | Ref<QTITabsView | undefined>
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
    instance: string | Ref<QTITabsView | undefined>
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
    instance: string | Ref<QTITabsView | undefined>
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
    instance: string | Ref<QTITabsView | undefined>,
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
    //-------------------------------------------------------------
    setTabsData,
    setPageData,
    updatePageData,
    focusBackToTop,
    requestNodeFocus,
    addPageData,
    reloadAll,
    reloadPage,
    setCurrentPage,
    getCurrentPage,
    requestTabFocus,
    invokeContentFunction,
    invokeContentFunctionDirect,
    contentScrollToFocus,
    getRootNodeViewState,
    getChildNodeViewState,
    dispatchUIFunctionOnChildNode,
    updateItemMatched,
    updateChildNode,
    updateRootNode,
    destroy,
    cancelAll,
    translationLeft,
    translationRight,
    insertPageData,
  }
}
