<template>
  <div
    :focusable="false"
    :type="-1"
    keyName="_id"
    :class="ns.e('loading-section')"
    gradientBackground="${style.gradientBackground}"
  >
    <qt-loading-view :class="ns.em('loading-section', 'loading')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'

export default defineComponent({
  name: 'LoadingSection',
  setup() {
    const ns = useNamespace('waterfall')
    return { ns }
  },
})
</script>
