<template>
  <tv-item
    ref="listSection"
    keyName="_id"
    :type="sectionType"
    :clipPadding="false"
    :clipChildren="false"
    focusScrollTarget="${isFocusScrollTarget==true}"
    :class="ns.e('list-section')"
    scrollOverride="${scrollOverride}"
    @item-click="onItemClick"
    @item-bind="onItemBind"
    @item-unbind="onItemRecycled"
    @item-focused="onItemFocused"
  >
    <div
      :class="ns.e('list-section')"
      :focusable="false"
      flexStyle="${style}"
      gradientBackground="${style.gradientBackground}"
      :blockFocusDirections="['right']"
      :clipChildren="false"
      :useAdvancedFocusSearch="true"
      :bringFocusChildToFront="true"
    >
      <text-view
        :class="ns.em('list-section', 'title')"
        :postDelay="300"
        autoWidth
        autoHeight
        flexStyle="${titleStyle}"
        typeface="${titleTypeface}"
        :focusable="false"
        textSize="${titleStyle.fontSize}"
        text="${title}"
      />
      <img
        :postDelay="300"
        flexStyle="${imgTitleStyle}"
        :focusable="false"
        :src="imgTitle"
      />

      <tv-list
        list="${itemList}"
        horizontal
        :clipChildren="false"
        :focusable="false"
        name="QUICKTVUI_WARTERFALL_LIST"
        :resetOnDetach="true"
        enableKeepFocus="${enableKeepFocus==true}"
        endHintEnabled="${enableEndHit}"
        useDiff="${enableDiff}"
        sid="${listSID}"
        :cachePool="cachePool"
        :onScrollEnable="false"
        :setSelectChildPosition="0"
        :enablePlaceholder="enablePlaceholder"
        :blockFocusDirections="blockDirections"
      >
        <qt-poster :type="standItemType" />

        <div
          :type="tabItemType"
          :class="ns.em('list-section', 'tab')"
          :clipChildren="false"
          flexStyle="${style}"
          style="
            padding-left: 24px;
            padding-right: 23px;
            justify-content: center;
            height: 50px;
          "
          autoWidth
          name="QUICKTVUI_TAB_2"
          :focusable="true"
          eventClick
          eventFocus
        >
          <text-view
            :class="ns.em('list-section', 'tab-text')"
            autoWidth
            flexStyle="${textStyle}"
            gravity="center"
            :font-size="36"
            :lines="1"
            :focusable="false"
            :duplicateParentState="true"
            style="height: 50px"
            text="${text}"
          />
        </div>
        <slot />
      </tv-list>
    </div>
  </tv-item>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { useNamespace } from '@quicktvui/hooks'
import { QTWaterfallSectionType } from '../waterfall-types'

const TAG = 'list-section'

export default defineComponent({
  name: 'ListSection',
  props: {
    enablePlaceholder: {
      type: Boolean,
      default: true,
    },
    isSwitchBgScroll: {
      type: Boolean,
      default: false,
    },
    standItemType: {
      type: Number,
      default: 10001,
    },
    tabItemType: {
      type: Number,
      default: 10002,
    },
    sectionType: {
      type: Number,
      default: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_LIST,
    },
    fetchPendingData: {
      type: Function,
      default: null,
    },
    arrangeType: {
      type: String,
      default: 'TB',
      // TB ,LR, RL ,BT
    },
    cachePool: {
      type: Object,
    },
  },
  setup(props, context) {
    const log = useESLog()
    const blockDirections = ['left', 'right']
    const ns = useNamespace('waterfall')
    const imgTitle = ref<string>('${imgTitle}')
    function onItemRecycled(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemRecycled-------------->>>', e)
      }
    }

    function onItemBind(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemBind-------------->>>', e)
      }
    }

    function onItemFocused(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemFocused-------------->>>', e)
      }
    }

    function onItemClick(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemClick-------------->>>', e)
      }
    }

    return {
      ns,
      imgTitle,
      blockDirections,
      onItemBind,
      onItemClick,
      onItemRecycled,
      onItemFocused,
    }
  },
})
</script>
