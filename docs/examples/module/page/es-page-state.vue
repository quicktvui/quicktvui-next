<script>
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'

export default defineComponent({
  name: 'Page状态管理',
  setup() {
    const log = useESLog()

    function onESRestoreInstanceState(savedInstanceState) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '-------onESRestoreInstanceState------->>>>',
          savedInstanceState
        )
      }
    }

    function onESSaveInstanceState(savedInstanceState) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '-------onESSaveInstanceState------->>>>',
          savedInstanceState
        )
      }
    }

    return {
      onESRestoreInstanceState,
      onESSaveInstanceState,
    }
  },
})
</script>
