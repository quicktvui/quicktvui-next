<template>
  <qt-plugin-view
    ref="viewRef"
    :type="10004"
    :clipChildren="false"
    :clipPadding="false"
    layout="${layout}"
    flexStyle="${style}"
    :focusable="true"
    pluginKey="${pluginKey}"
    eventClick
    eventFocus
    name="qt-plugin-item"
    focusScale="1.1"
    :enableFocusBorder="true"
    :class="ns.e('item')"
    @focus="onFocus"
    @onPluginLoadSuccess="onPluginLoadSuccess"
    @onPluginLoadError="onPluginLoadError"
  />
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'
import type { QTPluginViewEvent } from '../../../plugin-view'

export default defineComponent({
  name: 'QtPluginItem',
  emits: ['onPluginLoadSuccess', 'onPluginLoadError', 'focus'],
  setup(props, context) {
    const viewRef = ref()
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
      viewRef,
      onFocus,
      onPluginLoadSuccess,
      onPluginLoadError,
    }
  },
})
</script>
