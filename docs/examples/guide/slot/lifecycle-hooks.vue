<script>
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, ESSlotEventName, useESLog } from '@extscreen/es3-core'
import {
  onESAttached,
  onESBind,
  onESCreate,
  onESDestroy,
  onESDetached,
  onESNewIntent,
  onESPause,
  onESRecycle,
  onESRestart,
  onESRestoreInstanceState,
  onESResume,
  onESSaveInstanceState,
  onESSlotEvent,
  onESStart,
  onESStop,
} from '@extscreen/es3-vue'
import type { ESData, ESSlotEvent } from '@extscreen/es3-core'

const TAG = 'Lifecycle'

export default defineComponent({
  name: 'JsView生命周期',
  setup() {
    const log = useESLog()

    onESCreate((params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESCreate----->>>', params)
      }
    })

    onESBind((data: ESData) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESBind----->>>', data)
      }
    })

    onESAttached((data: ESData) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESAttached----->>>', data)
      }
    })

    onESStart(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESStart----->>>')
      }
    })

    onESRestart(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESRestart----->>>')
      }
    })

    onESResume(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESResume----->>>')
      }
    })

    onESPause(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESPause----->>>')
      }
    })

    onESStop(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESStop----->>>')
      }
    })

    onESDetached((data: ESData) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESDetached----->>>', data)
      }
    })

    onESRecycle(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESRecycle----->>>')
      }
    })

    onESDestroy(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESDestroy----->>>')
      }
    })

    onESSlotEvent((event: ESSlotEvent) => {
      //JsView焦点事件
      if (event.eventName == ESSlotEventName.ES_SLOT_EVENT_NAME_FOCUS) {
        if (event.eventData.isFocused) {
          //
        } else {
          //
        }
      }
    })
  },
})
</script>
