import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { tabsViewProps } from './tabs-view-props'
import type { QTPageData } from '../../view-pager'
import type { QTTabsView } from './tabs-view-types'
import type { QTViewState, QTViewStateCallback } from '../../view'
import type { QTListViewItemFunctionParams } from '../../list-view'

const TabsView = defineComponent({
  name: 'QtTabsView',
  props: tabsViewProps,
  emits: [
    'load-page',
    'tab-event',
    'page-changed',
    'scroll-to-start',
    'scroll-to-end',
    'load-more',
    'show-loading',
  ],
  setup(props, context) {
    const viewRef = ref()

    function blockRootFocus(): void {
      Native.callUIFunction(viewRef.value, 'blockRootFocus', [])
    }

    function unBlockRootFocus(): void {
      Native.callUIFunction(viewRef.value, 'unBlockRootFocus', [])
    }

    function setTabsData(tabs: QTTabsView): void {
      Native.callUIFunction(viewRef.value, 'setTabsData', [
        {
          defaultIndex: tabs.defaultIndex,
          focusIndex: tabs.focusIndex,
        },
        tabs.data,
      ])
    }

    function setPageData(pageIndex: number, data: QTPageData): void {
      Native.callUIFunction(viewRef.value, 'setPageData', [
        pageIndex,
        {
          useDiff: data.useDiff,
          disableScrollOnFirstScreen: data.disableScrollOnFirstScreen,
          firstFocusTargetID: data.firstFocusTargetID,
          bindingPlayer: data.bindingPlayer,
        },
        data.data,
      ])
    }

    function insertPageData(
      tabPageIndex: number,
      sectionIndex: number,
      data: any[]
    ): void {
      Native.callUIFunction(viewRef.value, 'insertPageData', [
        tabPageIndex,
        sectionIndex,
        data,
      ])
    }

    function updatePageData(pageIndex: number, data: QTPageData): void {
      Native.callUIFunction(viewRef.value, 'updatePageData', [
        pageIndex,
        data.data,
        {
          useDiff: data.useDiff,
          disableScrollOnFirstScreen: data.disableScrollOnFirstScreen,
          firstFocusTargetID: data.firstFocusTargetID,
        },
      ])
    }

    function focusBackToTop(): void {
      Native.callUIFunction(viewRef.value, 'focusBackToTop', [])
    }

    function requestNodeFocus(id: string): void {
      Native.callUIFunction(viewRef.value, 'requestNodeFocus', [id])
    }

    function addPageData(
      pageIndex: number,
      data: QTPageData,
      deleteCount = 0
    ): void {
      Native.callUIFunction(viewRef.value, 'addPageData', [
        pageIndex,
        { deleteCount },
        data.data,
      ])
    }

    function reloadAll(updateCurrent = true): void {
      Native.callUIFunction(viewRef.value, 'reloadAll', [updateCurrent])
    }

    function reloadPage(pageIndex: number): void {
      Native.callUIFunction(viewRef.value, 'reloadPage', [pageIndex])
    }

    function setCurrentPage(pageIndex: number): void {
      Native.callUIFunction(viewRef.value, 'setCurrentPage', [pageIndex])
    }

    function getCurrentPage(): Promise<number> {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(
          viewRef.value,
          'getCurrentPage',
          [],
          (res: number) => {
            resolve(res)
          }
        )
      })
    }

    function requestTabFocus(tabIndex: number): void {
      Native.callUIFunction(viewRef.value, 'requestTabFocus', [tabIndex])
    }

    function invokeContentFunction(
      pageIndex: number,
      functionName: string,
      param: Array<any>
    ): void {
      Native.callUIFunction(viewRef.value, 'invokeContentFunction', [
        pageIndex,
        functionName,
        param,
      ])
    }

    function invokeContentFunctionDirect(
      functionName: string,
      param: Array<any>
    ): void {
      Native.callUIFunction(viewRef.value, 'invokeContentFunction', [
        functionName,
        param,
      ])
    }

    function contentScrollToFocus(position: number): void {
      Native.callUIFunction(viewRef.value, 'contentScrollToFocus', [position])
    }

    //2.4
    function getRootNodeViewState(
      page: number,
      position: number,
      callback: QTViewStateCallback
    ): void {
      Native.callUIFunction(
        viewRef.value,
        'getRootNodeState',
        [page, position],
        (res: QTViewState) => {
          callback(res)
        }
      )
    }

    //2.4
    function getChildNodeViewState(
      page: number,
      position: number,
      childIndex: number,
      name: number,
      callback: QTViewStateCallback
    ): void {
      Native.callUIFunction(
        viewRef.value,
        'getChildNodeState',
        [page, position, childIndex, name],
        (res: QTViewState) => {
          callback(res)
        }
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
      // final int pageIndex = var.getInt(0);
      // final int position = var.getInt(1);
      // final int childIndex = var.getInt(2);
      // final String listViewName = var.getString(3);
      // final HippyArray rootNodeParamsArray = var.getArray(4);
      Native.callUIFunction(viewRef.value, 'dispatchUIFunctionOnChildNode', [
        page,
        position,
        childIndex,
        listViewName,
        functionParams,
      ])
    }

    function updateItemMatched(key = 'id', id: any, newData: any): void {
      Native.callUIFunction(viewRef.value, 'updateItemMatched', [
        key,
        id,
        newData,
      ])
    }

    function updateChildNode(
      page: number,
      position: number,
      childIndex: number,
      data: any
    ): void {
      Native.callUIFunction(viewRef.value, 'updateChildNode', [
        page,
        position,
        childIndex,
        data,
      ])
    }

    function updateRootNode(page: number, position: number, data: any): void {
      Native.callUIFunction(viewRef.value, 'updateRootNode', [
        page,
        position,
        data,
      ])
    }

    function destroy(): void {
      Native.callUIFunction(viewRef.value, 'destroy', [])
    }

    function cancelAll(): void {
      Native.callUIFunction(viewRef.value, 'cancelAll', [])
    }

    function setAutoFocus(tag: string, delay: number) {
      Native.callUIFunction(viewRef.value, 'setAutoFocus', [tag, delay])
    }

    function translationLeft(): void {
      Native.callUIFunction(viewRef.value, 'translationLeft', [])
    }

    function translationRight(): void {
      Native.callUIFunction(viewRef.value, 'translationRight', [])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'TabsView',
        {
          ref: viewRef,
          onLoadPageData: (evt: Record<string, any>) => {
            context.emit('load-page', evt)
          },
          onTabsEvent: (evt: Record<string, any>) => {
            context.emit('tab-event', evt)
          },
          onPageChanged: (evt: Record<string, any>) => {
            context.emit('page-changed', evt)
          },
          onScrollToStart: (evt: Record<string, any>) => {
            context.emit('scroll-to-start', evt)
          },
          onScrollToEnd: (evt: Record<string, any>) => {
            context.emit('scroll-to-end', evt)
          },
          onLoadMoreData: (evt: Record<string, any>) => {
            context.emit('load-more', evt)
          },
          onShowLoading: (evt: Record<string, any>) => {
            context.emit('show-loading', evt)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      blockRootFocus,
      unBlockRootFocus,
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
      setAutoFocus,
      translationLeft,
      translationRight,
      insertPageData,
    }
  },
  render() {
    return this.render()
  },
})

export default TabsView
