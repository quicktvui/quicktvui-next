<script>
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, ESSlotEventName, useESLog } from '@extscreen/es3-core'
import type { ESData, ESSlotEvent } from '@extscreen/es3-core'

const TAG = 'Lifecycle'

export default defineComponent({
  name: 'JsView生命周期',
  setup() {
    const log = useESLog()

    function onESCreate(params) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESCreate----->>>', params)
      }
    }

    function onESBind(data: ESData) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESBind----->>>', data)
      }
    }

    function onESAttached(data: ESData) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESAttached----->>>', data)
      }
    }

    function onESStart() {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESStart----->>>')
      }
    }

    function onESRestart() {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESRestart----->>>')
      }
    }

    function onESResume() {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESResume----->>>')
      }
    }

    function onESPause() {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESPause----->>>')
      }
    }

    function onESStop() {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESStop----->>>')
      }
    }

    function onESDetached(data: ESData) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESDetached----->>>', data)
      }
    }

    function onESRecycle() {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESRecycle----->>>')
      }
    }

    function onESDestroy() {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---onESDestroy----->>>')
      }
    }

    function onESSlotEvent(event: ESSlotEvent) {
      //JsView焦点事件
      if (event.eventName == ESSlotEventName.ES_SLOT_EVENT_NAME_FOCUS) {
        if (event.eventData.isFocused) {
          //
        } else {
          //
        }
      }
    }

    return {
      onESBind,
      onESRecycle,
      onESCreate,
      onESStart,
      onESResume,
      onESPause,
      onESStop,
      onESDestroy,
      onESRestart,
      onESAttached,
      onESDetached,
      onESSlotEvent,
    }
  },
})
</script>
