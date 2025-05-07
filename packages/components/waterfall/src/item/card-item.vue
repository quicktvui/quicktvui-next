<template>
  <es-card-container
    keyName="_id"
    :clipChildren="false"
    :clipPadding="false"
    :autoRecycle="true"
    disablePlaceholder
    layout="${layout}"
    flexStyle="${style}"
    cardId="${cardId}"
    focusScale="${cardPlaceHolder.focusScale}"
    focusable="${cardPlaceHolder.focusable}"
    showPlaceHolder="${cardPlaceHolder.enable}"
    placeHolderRadius="${cardPlaceHolder.radius}"
    placeHolderRect="${cardPlaceHolder.rect}"
    :type="10003"
    :class="ns.e('item')"
    @focus="onFocus"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { useNamespace } from '@quicktvui/hooks'

export default defineComponent({
  name: 'CardItem',
  setup(props, context) {
    const log = useESLog()
    const ns = useNamespace('waterfall')
    function onFocus(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d('card-item', '------onFocus--------->>>>', e)
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
