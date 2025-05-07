<template>
  <div
    keyName="_id"
    :type="-1001"
    :focusable="false"
    flexStyle="${style}"
    gradientBackground="${style.gradientBackground}"
    :class="ns.e('end-section')"
  >
    <text-view
      :class="ns.em('end-section', 'text')"
      :focusable="false"
      gravity="center"
      flexStyle="${titleStyle}"
      typeface="${titleTypeface}"
      textSize="${titleStyle.fontSize}"
      text="${title}"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'
export default defineComponent({
  name: 'EndSection',
  setup() {
    const ns = useNamespace('waterfall')
    return { ns }
  },
})
</script>
