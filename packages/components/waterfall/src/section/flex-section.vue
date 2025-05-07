<template>
  <div
    :class="ns.e('flex-section')"
    :blockFocusDirections="['left', 'right']"
    :clipChildren="false"
    :clipPadding="false"
    :type="sectionType"
    :focusable="false"
    focusScrollTarget="${isFocusScrollTarget==true}"
    keyName="_id"
    flexStyle="${style}"
    scrollOverride="${scrollOverride}"
    gradientBackground="${style.gradientBackground}"
    :bringFocusChildToFront="true"
    :useAdvancedFocusSearch="true"
  >
    <text-view
      :class="ns.em('flex-section', 'text')"
      :postDelay="300"
      autoWidth
      autoHeight
      typeface="${titleTypeface}"
      flexStyle="${titleStyle}"
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
    <qt-flex-view
      :class="ns.e('flex-section')"
      name="QUICKTVUI_WARTERFALL_LIST"
      :blockFocusDirections="['left', 'right']"
      :clipChildren="false"
      :clipPadding="false"
      :bringFocusChildToFront="true"
      :cachePool="cachePool"
      :useDiff="useDiff"
      keyName="_id"
      sid="${listSID}"
      :enablePlaceholder="enablePlaceholder"
      focusScrollTarget="${isFocusScrollTarget==true}"
      list="${itemList}"
    >
      <!-- poster -->
      <qt-poster :loadDelay="500" :type="standItemType" />

      <!-- plugin -->
      <qt-plugin-item
        @onPluginLoadSuccess="onPluginLoadSuccess"
        @onPluginLoadError="onPluginLoadError"
      />

      <!-- card -->
      <card-item @focus="onFocus" />

      <slot />
    </qt-flex-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { useNamespace } from '@quicktvui/hooks'
import { QTWaterfallItemType, QTWaterfallSectionType } from '../waterfall-types'
import CardItem from '../item/card-item.vue'
import PluginItem from '../item/plugin-item.vue'
import type { QTPluginViewEvent } from '../../../plugin-view'

const TAG = 'QTFlexSection'

export default defineComponent({
  name: 'StandardSection',
  components: {
    'card-item': CardItem,
    'qt-plugin-item': PluginItem,
  },
  props: {
    enablePlaceholder: {
      type: Boolean,
      default: true,
    },
    plateData: {
      type: String,
      default: '',
    },
    useDiff: {
      type: Boolean,
      default: true,
    },
    cachePool: {
      type: Object,
    },
    sectionType: {
      type: Number,
      default: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    },
    standItemType: {
      type: Number,
      default: QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_POSTER,
    },
    currentPageIndex: {
      type: Number,
      default: -1,
    },
    itemFocusScale: {
      type: Number,
      default: 1.1,
    },
  },
  emits: ['onPluginLoadSuccess', 'onPluginLoadError', 'focus'],
  setup(props, context) {
    const log = useESLog()
    const ns = useNamespace('waterfall')
    const imgTitle = ref<string>('${imgTitle}')

    function onFocus(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '------onFocus--------->>>>', e)
      }
      context.emit('focus', e)
    }

    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `------onPluginLoadSuccess--------->>>>${JSON.stringify(event)}`
        )
      }
      context.emit('onPluginLoadSuccess', event)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          `------onPluginLoadError--------->>>>${JSON.stringify(event)}`
        )
      }
      context.emit('onPluginLoadError', event)
    }

    return {
      imgTitle,
      ns,
      onFocus,
      onPluginLoadSuccess,
      onPluginLoadError,
    }
  },
})
</script>
