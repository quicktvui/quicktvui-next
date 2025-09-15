<script>
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import {
  onESRestoreInstanceState,
  onESSaveInstanceState,
} from '@extscreen/es3-vue'

export default defineComponent({
  name: 'Page状态管理',
  setup() {
    const log = useESLog()

    onESRestoreInstanceState((savedInstanceState) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '-------onESRestoreInstanceState------->>>>',
          savedInstanceState
        )
      }
    })

    onESSaveInstanceState((savedInstanceState) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '-------onESSaveInstanceState------->>>>',
          savedInstanceState
        )
      }
    })
  },
})
</script>
