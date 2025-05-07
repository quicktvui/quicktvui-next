<template>
  <div
    :focusable="false"
    :type="-1000"
    keyName="_id"
    flexStyle="${style}"
    gradientBackground="${style.gradientBackground}"
    :class="ns.e('section')"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'

export default defineComponent({
  name: 'BlankSection',
  setup() {
    const ns = useNamespace('waterfall')
    return { ns }
  },
})
</script>
