<template>
  <qt-list-view
    v-if="horizontal"
    ref="viewRef"
    :clipChildren="false"
    :clipPadding="false"
    :horizontalFadingEdgeEnabled="horizontalFadingEdgeEnabled"
    :fadingEdgeLength="fadingEdgeLength"
    horizontal
    :class="tabNavBarClass"
    @item-click="onTabClick"
    @item-focused="onTabChange"
  >
    <div
      :class="ns.e('item')"
      :type="20000"
      autoWidth
      :focusable="true"
      eventFocus
      flexStyle="${style}"
      :clipChildren="false"
      :stateTextColor="textColor"
      :sateBackgroundPadding="bgPadding"
    >
      <qt-text
        autoWidth
        gravity="center"
        :lines="1"
        :font-size="44"
        :class="ns.em('item', 'text')"
        :duplicateParentState="true"
        text="${text}"
      />
    </div>
    <slot />
  </qt-list-view>
  <qt-list-view
    v-else
    ref="viewRef"
    :clipChildren="false"
    :clipPadding="false"
    :class="tabNavBarClass"
    :verticalFadingEdgeEnabled="verticalFadingEdgeEnabled"
    :fadingEdgeLength="fadingEdgeLength"
    @item-click="onTabClick"
    @item-focused="onTabChange"
  >
    <div
      :class="ns.e('item')"
      :type="20000"
      flexStyle="${style}"
      eventFocus
      autoWidth
      :focusable="true"
      :stateTextColor="textColor"
      :sateBackgroundPadding="bgPadding"
      :clipChildren="false"
    >
      <qt-text
        autoWidth
        gravity="center"
        :lines="1"
        :font-size="44"
        :class="ns.em('item', 'text')"
        :duplicateParentState="true"
        text="${text}"
      />
    </div>
    <slot />
  </qt-list-view>
</template>

<script lang="ts">
import { reactive, ref, watch } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '../../../hooks'
import useBaseView from '../../base/src/useBaseView'
import { navBarProps } from './nav-bar-props'
import type { QTNavBar, QTNavBarItem } from './nav-bar-types'
import type { QTIListView } from '../../list-view'

export default defineComponent({
  name: 'QtNavBar',
  props: navBarProps,
  emits: ['tab-focus', 'tab-click', 'tab-select'],
  setup(props, context) {
    const ns = useNamespace('nav-bar')

    const viewRef = ref<QTIListView>()
    const focusColor = ref('#f5f5f5')
    const textColor = reactive({
      normal: '#80ffff',
      focused: '#000000',
      selected: '#F5F5F5',
    })
    const bgPadding = [10, 10]

    let selectTimer: any = -1
    let initSelectTimer: any = -1

    watch(
      () => props.navs,
      (newVal: Array<any>) => {
        if (newVal.length > 0) {
          initNavBarItem(newVal)
        }
      }
    )

    const scrollToPosition = (index) => {
      viewRef.value?.scrollToPosition(index)
    }
    const scrollToTop = () => {
      viewRef.value?.scrollToTop()
    }

    const init = (navBar: QTNavBar): void => {
      initNavBarItem(navBar.data)
    }

    const initNavBarItem = (list: Array<QTNavBarItem>) => {
      if (!list) list = []
      list.forEach((item, index) => {
        if (props.itemGap !== 0) {
          if (props.horizontal) {
            item.decoration = {
              right: props.itemGap,
            }
          } else {
            item.decoration = {
              bottom: props.itemGap,
            }
          }
        }
        if (!item.type) {
          item.type = 20000
        }
      })
      viewRef.value?.setListData(list)
      clearTimeout(initSelectTimer)
      const initIndex = props.initSelect
      if (initIndex > -1) {
        viewRef.value?.scrollToPosition(initIndex)
        initSelectTimer = setTimeout(() => {
          viewRef.value?.setItemSelected(initIndex, true)
          onTabSelect(initIndex)
        }, 300)
      }
    }
    const onTabClick = (e) => {
      context.emit('tab-click', e.item)
    }
    const onTabChange = (e) => {
      if (e.hasFocus === true) {
        context.emit('tab-focus', e)
        onTabSelect(e.position)
      }
    }
    const onTabSelect = (index) => {
      clearTimeout(selectTimer)
      selectTimer = setTimeout(() => {
        context.emit('tab-select', { position: index })
      }, 300)
    }
    return {
      ns,
      viewRef,
      ...useBaseView(viewRef),
      focusColor,
      textColor,
      bgPadding,
      onTabChange,
      onTabClick,
      scrollToPosition,
      scrollToTop,
      init,
    }
  },
})
</script>
