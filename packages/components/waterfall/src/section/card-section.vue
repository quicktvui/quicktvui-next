<template>
  <div
    :type="1006"
    :class="ns.e('card')"
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
      :class="ns.em('card', 'title')"
      flexStyle="${titleStyle}"
      typeface="${titleTypeface}"
      :focusable="false"
      textSize="${titleStyle.fontSize}"
      text="${title}"
    />

    <es-card-container
      cardId="${cardId}"
      :clipChildren="false"
      :clipPadding="false"
      :autoRecycle="true"
      focusScale="${cardPlaceHolder.focusScale}"
      focusable="${cardPlaceHolder.focusable}"
      showPlaceHolder="${cardPlaceHolder.enable}"
      placeHolderRadius="${cardPlaceHolder.radius}"
      placeHolderRect="${cardPlaceHolder.rect}"
      flexStyle="${cardStyle}"
      :class="ns.e('card')"
      @focus="onFocus"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { useNamespace } from '@quicktvui/hooks'

export default defineComponent({
  name: 'CardSection',
  setup(props, context) {
    const log = useESLog()
    const ns = useNamespace('waterfall')

    function onFocus(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d('card-section', '------onFocus--------->>>>', e)
      }
      context.emit('focus', e)
    }

    return {
      ns,
      onFocus,
    }
  },
})
</script>
