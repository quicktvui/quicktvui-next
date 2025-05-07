<template>
  <div ref="viewRef" :focusable="false" :clipChildren="false">
    <qt-list-view
      ref="contentListView"
      :class="className"
      :clipChildren="false"
      :clipPadding="false"
      horizontal
      :blockFocusDirections="['left', 'right']"
      :descendantFocusability="descendantFocusability"
      name="contentListView"
      @item-click="onSItemClick"
      @item-focused="onSItemFocused"
    >
      <div
        :type="10001"
        name="clv_item"
        class="clv_item"
        :focusable="true"
        :enableFocusBorder="true"
        :clipChildren="false"
        eventClick
        eventFocus
        :focusScale="focusScale"
      >
        <img class="coverV" :src="coverV" :focusable="false" :postDelay="300" />
        <div
          class="titMask"
          :focusable="false"
          showIf="${isPlaying}"
          :gradientBackground="{
            colors: ['#00000000', '#FF000000'],
            cornerRadii4: [0, 0, 18, 18],
          }"
        />
        <div :focusable="false" class="clv_item_text_box" showIf="${isPlaying}">
          <div class="playMark" :focusable="false">
            <qt-play-mark
              :style="{ width: '28px', height: '20px' }"
              :markColor="'#ffffff'"
              :gap="-1"
              style="margin-left: 16px"
              :focusable="false"
            />
          </div>
          <text-view
            :focusable="false"
            :ellipsizeMode="2"
            :fontSize="30"
            gravity="centerVertical"
            :lines="1"
            :maxLines="1"
            class="clv_item_text"
            text="${assetTitle}"
            :paddingRect="[6, 0, 0, 0]"
          />
        </div>
      </div>
      <slot name="item" />
    </qt-list-view>
    <!-- listview  first nav -->
    <qt-list-view
      ref="navListView"
      :class="classNavName"
      :clipChildren="false"
      :clipPadding="false"
      :nextFocusName="{ up: 'contentListView' }"
      horizontal
      :blockFocusDirections="['left', 'right']"
      @item-click="onFItemClick"
      @item-focused="onFItemFocused"
    >
      <div
        :type="navType"
        name="nav_item"
        class="nav_item"
        :focusable="true"
        :enableFocusBorder="false"
        focusScale="1"
        eventClick
        eventFocus
        :clipChildren="false"
      >
        <div
          class="line"
          :focusable="false"
          showOnState="selected"
          :duplicateParentState="true"
        />
        <div
          :duplicateParentState="true"
          class="nav_item_text_focused"
          showOnState="focused"
          :focusable="false"
          :gradientBackground="{
            colors: ['#FF2F7CEB', '#FF1163D8'],
            cornerRadius: 40,
          }"
        />
        <div
          class="nav_item_text"
          :focusable="false"
          :duplicateParentState="true"
        >
          <text-view
            :focusable="false"
            :ellipsizeMode="2"
            :duplicateParentState="true"
            :fontSize="44"
            gravity="center"
            :lines="1"
            class="text_selected"
            text="${categoryName}"
            :showOnState="['selected']"
          />
          <text-view
            :focusable="false"
            :ellipsizeMode="2"
            :duplicateParentState="true"
            :fontSize="44"
            gravity="center"
            :lines="1"
            :maxLines="1"
            class="text"
            text="${categoryName}"
            showOnState="focused"
          />
          <text-view
            :focusable="false"
            :ellipsizeMode="2"
            :duplicateParentState="true"
            :fontSize="44"
            gravity="center"
            :lines="1"
            class="text"
            text="${categoryName}"
            :showOnState="['normal']"
          />
        </div>
      </div>
      <slot name="navItem" />
    </qt-list-view>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent, nextTick } from '@vue/runtime-core'
import useBaseView from '../../base/src/useBaseView'
import { classifiedListViewProps } from './classified-list-view-props'
import type { QTIListView } from '../../list-view'
import type { QTClassifiedListViewItem } from './classified-list-view-types'

export default defineComponent({
  name: 'QtClassifiedListView',
  props: classifiedListViewProps,
  emits: ['item-click', 'item-focused'],
  setup(props, context) {
    const viewRef = ref()
    const descendantFocusability = ref(1)
    const contentListView = ref<QTIListView>()
    const navListView = ref<QTIListView>()
    const navList: Array<QTClassifiedListViewItem> = []
    let recordCurrentIndex = -1
    let recordCurrentNavIndex = -1
    let recordList: Array<QTClassifiedListViewItem> = []

    const coverV = ref<string>('${coverV}')

    const init = (itemList: Array<QTClassifiedListViewItem>) => {
      itemList.forEach((el, index) => {
        el.isPlaying = false
        if (props.currentFocusIndex == index) el.isPlaying = true
        let flag = false
        for (const [i, item] of navList.entries()) {
          if (el.categoryName == item.categoryName) {
            el.navIndex = i
            flag = true
          }
        }
        if (!flag) {
          if (!el.navIndex) el.navIndex = navList.length
          navList.push({
            type: el.type,
            decoration: { left: 50 },
            categoryName: el.categoryName,
            startIndex: index,
            isNeedFocus: true,
          })
        }
        recordList = itemList
      })
      nextTick(() => {
        navList[navList.length - 1].decoration!.right = 50
        contentListView.value?.setListData(itemList)
        navListView.value?.setListData(navList)
        setTimeout(() => {
          recordCurrentIndex = props.currentFocusIndex
          recordCurrentNavIndex = itemList[props.currentFocusIndex].navIndex
          contentListView.value?.scrollToFocused(recordCurrentIndex)
          navListView.value?.scrollToSelected(recordCurrentNavIndex, true)
        }, 300)
      })
    }
    let sItemFocusedTimer: any = -1
    const onSItemFocused = (e) => {
      clearTimeout(sItemFocusedTimer)
      sItemFocusedTimer = setTimeout(() => {
        if (!e.hasFocus) {
          recordCurrentNavIndex = e.item.navIndex
          // navListView.value?.scrollToFocused(e.item.navIndex)
        } else {
          if (recordCurrentIndex != e.position) {
            if (recordCurrentIndex > -1) {
              const updateItem = recordList[recordCurrentIndex]
              updateItem.isPlaying = false
              contentListView.value?.updateItem(recordCurrentIndex, updateItem)
            }
            const updateItem = recordList[e.position]
            updateItem.isPlaying = true
            contentListView.value?.updateItem(e.position, updateItem)
          }
          recordCurrentIndex = e.position
          if (recordCurrentNavIndex != e.item.navIndex) {
            recordCurrentNavIndex = e.item.navIndex
            navListView.value?.scrollToSelected(e.item.navIndex, true)
          }
          context.emit('item-focused', e)
        }
      }, 300)
    }
    let fItemFocusedTimer: any = -1
    let fItemSelectedTimer: any = -1
    const onFItemFocused = (e) => {
      if (e.position == '0') contentListView.value?.setItemSelected(1, true)
      clearTimeout(fItemFocusedTimer)
      clearTimeout(fItemSelectedTimer)
      if (e.hasFocus) {
        if (recordCurrentNavIndex != e.position) {
          descendantFocusability.value = 2
          recordCurrentNavIndex = e.position
          if (recordList[e.item.startIndex].isNeedFocus) {
            contentListView.value?.scrollToIndex(
              -1,
              e.item.startIndex,
              false,
              props.yOffest
            )
            fItemSelectedTimer = setTimeout(() => {
              contentListView.value?.setItemSelected(e.item.startIndex, true)
              fItemFocusedTimer = setTimeout(() => {
                descendantFocusability.value = 1
              }, 200)
            }, 400)
          } else {
            contentListView.value?.scrollToIndex(
              -1,
              e.item.startIndex + 1,
              false,
              props.yOffest
            )
            fItemSelectedTimer = setTimeout(() => {
              contentListView.value?.setItemSelected(
                e.item.startIndex + 1,
                true
              )
              fItemFocusedTimer = setTimeout(() => {
                descendantFocusability.value = 1
              }, 200)
            }, 400)
          }
        }
      }
    }
    const scrollToIndex = (index: number, anim = true, offset = 802) => {
      contentListView.value?.scrollToIndex(-1, index, anim, offset)
    }
    const scrollToFocused = (index: number) => {
      descendantFocusability.value = 1
      setTimeout(() => {
        contentListView.value?.scrollToFocused(index)
      }, 300)
    }
    const setItemFocused = (index: number) => {
      setTimeout(() => {
        descendantFocusability.value = 1
      }, 300)
      contentListView.value?.setItemFocused(index)
    }
    const scrollToSelected = (index: number, b = true) => {
      contentListView.value?.scrollToSelected(index, b)
    }
    const setItemSelected = (index: number, b = true) => {
      contentListView.value?.setItemSelected(index, true)
    }
    const updateItem = (position: number, data: QTClassifiedListViewItem) => {
      recordList[position] = data
      recordList.forEach((el, index) => {
        for (const [i, item] of navList.entries()) {
          if (el.categoryName == item.categoryName) {
            el.navIndex = i
          }
        }
      })
      contentListView.value?.updateItem(position, recordList[position])
    }
    const onSItemClick = (e) => {
      context.emit('item-click', e)
    }
    const onFItemClick = (e) => {
      context.emit('item-click', e)
    }
    const onItemBind = () => {
      //
    }
    return {
      viewRef,
      ...useBaseView(viewRef),
      coverV,
      descendantFocusability,
      contentListView,
      navListView,
      init,
      onItemBind,
      onSItemClick,
      onFItemClick,
      scrollToIndex,
      scrollToFocused,
      setItemFocused,
      scrollToSelected,
      setItemSelected,
      onSItemFocused,
      onFItemFocused,
      updateItem,
    }
  },
})
</script>
