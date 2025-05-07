<template>
  <div
    :class="[ns.e('title')]"
    :blockFocusDirections="['left', 'right']"
    :clipChildren="false"
    :clipPadding="false"
    :type="type"
    keyName="_id"
    :focusable="false"
    :bringFocusChildToFront="true"
    :useAdvancedFocusSearch="true"
  >
    <text-view
      :class="[ns.e('title-text')]"
      :postDelay="300"
      :style="{ marginLeft: plateTitleLeftMargin + 'px' }"
      typeface="${titleTypeface}"
      :focusable="false"
      textSize="${titleStyle.fontSize}"
      text="${title}"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'
import { QTWaterfallSectionType } from '../waterfall-types'
export default defineComponent({
  props: {
    plateTitleLeftMargin: {
      type: Number,
      default: 0,
    },
    type: {
      type: Number,
      default: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_TITLE,
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
