<template>
  <div
    ref="viewRef"
    :showOnState="showOnState"
    :duplicateParentState="duplicateParentState"
    :focusable="focusable"
    :autofocus="autofocus"
    :clipChildren="clipChildren"
    :clipPadding="clipPadding"
    :enableFocusBorder="enableFocusBorder"
    :gradientBackground="gradientBackground"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import useBaseView from '../../base/src/useBaseView'
import { viewProps } from './view-props'

export default defineComponent({
  name: 'QtView',
  props: viewProps,
  emits: ['clearFocus'],
  setup() {
    const viewRef = ref()
    return {
      viewRef,
      ...useBaseView(viewRef),
    }
  },
})
</script>
