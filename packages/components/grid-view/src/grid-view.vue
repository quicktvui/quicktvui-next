<template>
  <tv-list
    ref="viewRef"
    class="tv_list"
    name="tv_list"
    :spanCount="apkVersion < 2.2 ? '' : spanCount"
    :blockFocusDirections="blockFocusDirections"
    @item-bind="onItemBind"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    @item-unbind="onItemUnbind"
    @scroll="onScroll"
    @scroll-state-changed="onScrollStateChanged"
    @setListData="setListData"
  >
    <template v-if="apkVersion < 2.2">
      <slot name="header" />
      <tv-list
        ref="${name}"
        class="tv_list_inner"
        list="${list}"
        name="tv_list_inner"
        type="1"
        :clipChildren="false"
        :focusable="false"
        horizontal
        :style="{ width: areaWidth + 'px' }"
        :endHintEnabled="false"
        :blockFocusDirections="blockFocusDirections"
      >
        <slot />
      </tv-list>
      <slot name="footer" />
      <slot name="loading" />
    </template>
    <template v-else>
      <slot name="header" />
      <slot />
      <slot name="footer" />
      <slot name="loading" />
    </template>
  </tv-list>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref, watchEffect } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import useBaseListView from '../../base/src/useBaseListView'
import { gridViewProps } from './grid-view-props'
import type { QTGridViewItem } from './grid-view-types'

export default defineComponent({
  name: 'QtGridView',
  props: gridViewProps,
  emits: [
    'item-click',
    'scroll',
    'item-unbind',
    'scroll-state-changed',
    'item-bind',
    'item-focused',
  ],
  setup(props, context) {
    const viewRef = ref()
    const apkVersion = ref(2.5)
    let recordTarget: Array<QTGridViewItem> = []
    const changeTarget: Array<QTGridViewItem> = []
    let listResult: Array<any> = []
    let pageNo = -1
    const isStopPage = ref(false)
    let setListDataTimer: any = -1
    let stopPageTimer: any = -1
    const defaultFocusTimer: any = -1
    const pushDataTimer: any = -1
    const isRestartPage = ref(false)

    watchEffect(() => {
      if (props.openPage) {
        pageNo = 1
        isStopPage.value = false
        props.loadMore(pageNo)
      }
    })
    //初始化组件 监听list操作
    const init = (target: Array<QTGridViewItem>): Array<QTGridViewItem> => {
      return target
    }
    const onItemClick = (e) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1
        const pos = e.position
        const ppos = e.parentPosition
        for (let i = 0; i < e.parentPosition + 1; i++) {
          const el = listResult[i]
          if (el.type == '1003') {
            curKey++
          } else {
            for (let j = 0; j < el.list.length; j++) {
              curKey++
              if (pos == j && ppos == i) {
                e.position = curKey
              }
            }
          }
        }
      }
      context.emit('item-click', e)
    }
    const onItemBind = (e) => {
      let myPreloadNo = props.preloadNo
      if (props.preloadNo < 0) {
        myPreloadNo = 0
      }
      if (props.preloadNo > recordTarget.length - 1) {
        myPreloadNo = 0
      }
      if (apkVersion.value < 2.2) {
        if (
          !isStopPage.value &&
          e.position == listResult.length - 1 - myPreloadNo / props.spanCount
        ) {
          pageNo++
          props.loadMore(pageNo)
        }
      } else {
        if (
          !isStopPage.value &&
          e.position == recordTarget.length - 1 - myPreloadNo
        ) {
          pageNo++
          props.loadMore(pageNo)
        }
      }
      context.emit('item-bind', e)
    }
    const onItemFocused = (e) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1
        const pos = e.position
        const ppos = e.parentPosition
        for (let i = 0; i < e.parentPosition + 1; i++) {
          const el = listResult[i]
          if (el.type == '1003') {
            curKey++
          } else {
            for (let j = 0; j < el.list.length; j++) {
              curKey++
              if (pos == j && ppos == i) {
                e.position = curKey
              }
            }
          }
        }
      }
      context.emit('item-focused', e)
    }
    const onItemUnbind = (e) => {
      context.emit('item-unbind', e)
    }
    const onScroll = (e) => {
      context.emit('scroll', e)
    }
    const onScrollStateChanged = (e) => {
      context.emit('scroll-state-changed', e)
    }
    //当分页数据加载完毕时 调用该方法 清掉加载loading样式
    const stopPage = () => {
      if (stopPageTimer) {
        clearTimeout(stopPageTimer)
      }
      stopPageTimer = setTimeout(() => {
        if (apkVersion.value < 2.2) {
          if (props.pageSize) {
            if (props.pageSize / props.spanCount <= listResult.length)
              viewRef.value.deleteItem(listResult.length, 1)
          } else {
            if (pageNo > 2) {
              viewRef.value.deleteItem(listResult.length, 1)
            }
          }
        } else {
          if (props.pageSize) {
            if (props.pageSize <= recordTarget.length)
              viewRef.value.deleteItem(recordTarget.length, 1)
          } else {
            if (pageNo > 2) {
              viewRef.value.deleteItem(recordTarget.length, 1)
            }
          }
        }
      }, 400)
      isStopPage.value = true
    }
    const scrollToTop = () => {
      viewRef.value.scrollToTop()
    }
    const clearFocus = () => {
      viewRef.value.clearFocus()
    }
    const blockRootFocus = () => {
      viewRef.value.blockRootFocus()
    }
    const unBlockRootFocus = () => {
      viewRef.value.unBlockRootFocus()
    }
    const setDisplay = (display: boolean) => {
      viewRef.value.setDisplay(display)
    }
    const scrollToPosition = (index: number) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1
        for (const [i, el] of listResult.entries()) {
          if (el.type == '1003') {
            curKey++
            if (curKey == index) {
              viewRef.value.scrollToPosition(i)
            }
          } else {
            for (let j = 0; j < el.list.length; j++) {
              curKey++
              if (curKey == index) {
                viewRef.value.scrollToPosition(i)
              }
            }
          }
        }
      } else {
        viewRef.value.scrollToPosition(index)
      }
    }
    const scrollToIndex = (y: number, anim: boolean, offset: number) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1
        for (const [i, el] of listResult.entries()) {
          if (el.type == '1003') {
            curKey++
            if (curKey == y) {
              viewRef.value.scrollToIndex(0, i, anim, offset)
            }
          } else {
            for (let j = 0; j < el.list.length; j++) {
              curKey++
              if (curKey == y) {
                viewRef.value.scrollToIndex(0, i, anim, offset)
              }
            }
          }
        }
      } else {
        viewRef.value.scrollToIndex(0, y, anim, offset)
      }
    }
    const setItemFocused = (pos: number) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1
        let num1 = 0
        let num2 = 0
        for (const [i, el] of listResult.entries()) {
          if (el.type == '1003') {
            curKey++
          } else {
            for (let j = 0; j < el.list.length; j++) {
              el.list[j]
              curKey++
              if (pos == curKey) {
                num1 = i
                num2 = j
              }
            }
          }
        }
        viewRef.value.dispatchItemFunction(
          num1,
          'tv_list_inner',
          'requestChildFocus',
          [num2]
        )
      } else {
        viewRef.value.requestFocus(pos)
      }
    }
    const scrollToFocused = (pos: number) => {
      scrollToPosition(pos)
      setItemFocused(pos)
    }
    const setItemSelected = (pos: number, b: boolean) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1
        let num1 = 0
        let num2 = 0
        for (const [i, el] of listResult.entries()) {
          if (el.type == '1003') {
            curKey++
          } else {
            for (let j = 0; j < el.list.length; j++) {
              el.list[j]
              curKey++
              if (pos == curKey) {
                num1 = i
                num2 = j
              }
            }
          }
        }
        viewRef.value.dispatchItemFunction(
          num1,
          'tv_list_inner',
          'setSelectChildPosition',
          [num2]
        )
      } else {
        viewRef.value.setSelectPosition(pos, b)
      }
    }
    const scrollToSelected = (pos: number, b: boolean) => {
      scrollToPosition(pos)
      setItemSelected(pos, b)
    }
    const setInitPosition = (pos: number) => {
      viewRef.value.setInitPosition(pos)
    }
    const setListData = (dataArr: Array<QTGridViewItem>) => {
      if (setListDataTimer) clearTimeout(setListDataTimer)
      setListDataTimer = setTimeout(() => {
        viewRef.value.setListData(dataArr)
      }, 100)
    }
    const insertItem = (pos: number, data: Array<QTGridViewItem>) => {
      viewRef.value.addItem(pos, data)
    }
    const clearPostTask = () => {
      viewRef.value.clearPostTask()
    }
    const destroy = () => {
      viewRef.value.destroy()
    }
    const resetData = () => {
      isRestartPage.value = false
      recordTarget = []
      listResult = []
      changeTarget.length = 0
      isStopPage.value = false
      isStopPage.value = false
      if (setListDataTimer) clearTimeout(setListDataTimer)
      if (pushDataTimer) {
        clearTimeout(pushDataTimer)
      }
      if (stopPageTimer) {
        clearTimeout(stopPageTimer)
      }
      if (defaultFocusTimer) clearTimeout(defaultFocusTimer)
    }
    onBeforeUnmount(() => {
      pageNo = 1
      resetData()
    })
    let delayResetTimer: any = -1
    const restartPage = () => {
      clearTimeout(delayResetTimer)
      let delayResetTimerTime = 0
      if (!isStopPage.value) {
        delayResetTimerTime = 420
        stopPage()
      }
      delayResetTimer = setTimeout(() => {
        isRestartPage.value = true
        pageNo = 1
        isStopPage.value = false
        props.loadMore(pageNo)
      }, delayResetTimerTime)
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      ...useBaseListView(viewRef),
      apkVersion,
      init,
      onItemClick,
      onItemBind,
      onItemFocused,
      restartPage,
      isRestartPage,
      onItemUnbind,
      onScroll,
      onScrollStateChanged,
      stopPage,
      scrollToTop,
      clearFocus,
      blockRootFocus,
      unBlockRootFocus,
      setDisplay,
      scrollToPosition,
      scrollToIndex,
      setItemFocused,
      scrollToFocused,
      setItemSelected,
      scrollToSelected,
      setInitPosition,
      setListData,
      insertItem,
      clearPostTask,
      destroy,
    }
  },
})
</script>
