<template>
  <div
    :type="1008"
    :class="ns.e('plugin-section')"
    :clipChildren="false"
    :clipPadding="false"
    focusScrollTarget="${isFocusScrollTarget==true}"
    keyName="_id"
    flexStyle="${style}"
    scrollOverride="${scrollOverride}"
    gradientBackground="${style.gradientBackground}"
    :bringFocusChildToFront="true"
    :useAdvancedFocusSearch="true"
  >
    <text-view
      :postDelay="300"
      :class="ns.em('plugin-section', 'title')"
      autoWidth
      autoHeight
      typeface="${titleTypeface}"
      flexStyle="${titleStyle}"
      :focusable="false"
      textSize="${titleStyle.fontSize}"
      text="${title}"
    />

    <qt-plugin-view
      :class="ns.em('plugin-section', 'plugin')"
      :clipChildren="false"
      :clipPadding="false"
      eventClick
      eventFocus
      sid="${_id}"
      pluginKey="${pluginKey}"
      flexStyle="${pluginStyle}"
      @onPluginLoadSuccess="onPluginLoadSuccess"
      @onPluginLoadError="onPluginLoadError"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'
import type { QTPluginViewEvent } from '../../../plugin-view'

export default defineComponent({
  name: 'QtPluginSection',
  props: {
    pluginKey: {
      type: String,
      default: '',
    },
  },
  emits: ['onPluginLoadSuccess', 'onPluginLoadError', 'focus'],
  setup(props, context) {
    const ns = useNamespace('waterfall')

    function onFocus(e) {
      context.emit('focus', e)
    }

    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      context.emit('onPluginLoadSuccess', event)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      context.emit('onPluginLoadError', event)
    }

    return {
      ns,
      onFocus,
      onPluginLoadSuccess,
      onPluginLoadError,
    }
  },
})
</script>
