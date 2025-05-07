import { defineComponent, h, onBeforeUnmount, ref, watchEffect } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import useBaseListView from '../../base/src/useBaseListView'
import { indicatorListViewProps } from './indicator-list-view-props'
import type {
  QTIndicatorListViewEvent,
  QTListViewItem,
} from './indicator-list-view-types'

const QTIndicatorListView = defineComponent({
  name: 'QtIndicatorListView',
  props: indicatorListViewProps,
  emits: [
    'item-click',
    'scroll',
    'item-focused',
    'item-attached',
    'item-detached',
    'item-bind',
    'item-unbind',
    'load-more',
    'scroll-state-changed',
    'focus-search-failed',
    'scrollYGreaterReference',
    'scrollYLesserReference',
    'current-indicator-page-index',
  ],
  setup(props, context) {
    const viewRef = ref()
    let recordTarget: Array<QTListViewItem> = []
    const changeTarget: Array<QTListViewItem> = []
    let pageNo = -1
    const setListDataTimer: any = -1
    let stopPageTimer: any = -1
    const defaultFocusTimer: any = -1
    const pushDataTimer: any = -1

    const {
      scrollToPosition,
      setSelectChildPosition,
      deleteItemRange,
      updateItemRange,
    } = useBaseListView(viewRef)

    const { requestChildFocus } = useBaseView(viewRef)

    watchEffect(() => {
      if (props.openPage) {
        pageNo = 1
        props.loadMore(pageNo)
      }
    })
    //监听list操作
    const init = (
      target: Array<QTListViewItem>,
      isInit?: boolean
    ): Array<QTListViewItem> => {
      return target
    }
    const stopPage = () => {
      if (stopPageTimer) clearTimeout(stopPageTimer)
      stopPageTimer = setTimeout(() => {
        deleteItemRange(recordTarget.length, 1)
      }, 400)
    }

    const deleteItem = (position: number, count: number) => {
      deleteItemRange(position, count)
    }

    const updateItemList = (
      position: number,
      count: number,
      data: Array<QTListViewItem>
    ) => {
      updateItemRange(position, count, data)
    }

    const setItemSelected = (position: number, requestFocus: boolean) => {
      setSelectChildPosition(position, requestFocus)
    }

    const scrollToSelected = (pos: number, b: boolean) => {
      scrollToPosition(pos)
      setItemSelected(pos, b)
    }

    const scrollToFocused = (pos: number) => {
      scrollToPosition(pos)
      setItemFocused(pos)
    }
    //----------------------------------------------------------

    const setItemFocused = (position: number) => {
      requestChildFocus(position)
    }

    const resetData = () => {
      recordTarget = []
      changeTarget.length = 0
      if (setListDataTimer) clearTimeout(setListDataTimer)
      if (defaultFocusTimer) clearTimeout(defaultFocusTimer)
      if (pushDataTimer) clearTimeout(pushDataTimer)
      if (stopPageTimer) clearTimeout(stopPageTimer)
    }

    onBeforeUnmount(() => {
      pageNo = 1
      resetData()
    })

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'IndicatorListView',
        {
          ref: viewRef,
          ...(props.loadMore !== undefined && { loadMore: props.loadMore }),
          ...(props.openPage !== undefined && { openPage: props.openPage }),
          ...(props.preloadNo !== undefined && { preloadNo: props.preloadNo }),
          ...(props.defaultFocus !== undefined && {
            defaultFocus: props.defaultFocus,
          }),
          ...(props.loadingDecoration !== undefined && {
            loadingDecoration: props.loadingDecoration,
          }),
          onItemClick: (evt: QTIndicatorListViewEvent) => {
            context.emit('item-click', evt)
          },
          onScroll: (evt: QTIndicatorListViewEvent) => {
            context.emit('scroll', evt)
          },
          onItemFocused: (evt: QTIndicatorListViewEvent) => {
            context.emit('item-focused', evt)
          },
          onAttachedToWindow: (evt: QTIndicatorListViewEvent) => {
            context.emit('item-attached', evt)
          },
          onDetachedFromWindow: (evt: QTIndicatorListViewEvent) => {
            context.emit('item-detached', evt)
          },
          onBindItem: (evt: QTIndicatorListViewEvent) => {
            let myPreloadNo = props.preloadNo
            if (props.preloadNo < 0) {
              myPreloadNo = 0
            }
            if (props.preloadNo > recordTarget.length - 1) {
              myPreloadNo = 0
            }
            if (evt.position == recordTarget.length - 1 - myPreloadNo) {
              pageNo++
              props.loadMore(pageNo)
            }
            context.emit('item-bind', evt)
          },
          onUnbindItem: (evt: QTIndicatorListViewEvent) => {
            context.emit('item-unbind', evt)
          },
          onLoadMore: (evt: QTIndicatorListViewEvent) => {
            context.emit('load-more', evt)
          },
          onScrollStateChanged: (evt: QTIndicatorListViewEvent) => {
            context.emit('scroll-state-changed', evt)
          },
          onFocusSearchFailed: (evt: QTIndicatorListViewEvent) => {
            context.emit('focus-search-failed', evt)
          },
          onScrollYGreaterReference: (evt: QTIndicatorListViewEvent) => {
            context.emit('scrollYGreaterReference', evt)
          },
          onScrollYLesserReference: (evt: QTIndicatorListViewEvent) => {
            context.emit('scrollYLesserReference', evt)
          },
          onCurrentIndicatorPageIndex: (evt: QTIndicatorListViewEvent) => {
            context.emit('current-indicator-page-index', evt)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      ...useBaseListView(viewRef),
      render,
      init,
      deleteItem,
      updateItemList,
      scrollToFocused,
      scrollToSelected,
      setItemFocused,
      setItemSelected,
      stopPage,
    }
  },
  render() {
    return this.render()
  },
})

export default QTIndicatorListView
