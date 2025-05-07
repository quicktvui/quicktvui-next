<template>
  <tv-item
    :class="ns.e('section')"
    :type="1007"
    keyName="_id"
    :blockFocusDirections="blockFocusDirections"
    :clipChildren="false"
    :clipPadding="false"
    focusScrollTarget="${isFocusScrollTarget==true}"
    flexStyle="${style}"
    scrollOverride="${scrollOverride}"
    singleton
  >
    <slot />
  </tv-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'
export default defineComponent({
  name: 'VueSection',
  props: {
    blockFocusDirections: {
      type: Array,
      default: () => ['left', 'right'],
    },
  },
  setup() {
    const ns = useNamespace('waterfall')
    return {
      ns,
    }
  },
})
</script>
