<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="发送广播A"
          @onButtonClicked="onSendBroadcastAButtonClicked"
        />
        <s-text-button
          text="注册广播接受者A"
          @onButtonClicked="onRegisterReceiverAButtonClicked"
        />
        <s-text-button
          text="取消注册广播接受者A"
          @onButtonClicked="onUnregisterReceiverAButtonClicked"
        />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="发送广播B"
          @onButtonClicked="onSendBroadcastBButtonClicked"
        />
        <s-text-button
          text="注册广播接受者B"
          @onButtonClicked="onRegisterReceiverBButtonClicked"
        />
        <s-text-button
          text="取消注册广播接受者B"
          @onButtonClicked="onUnregisterReceiverBButtonClicked"
        />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="发送广播C"
          @onButtonClicked="onSendBroadcastCButtonClicked"
        />
        <s-text-button
          text="注册广播接受者C"
          @onButtonClicked="onRegisterReceiverCButtonClicked"
        />
        <s-text-button
          text="取消注册广播接受者C"
          @onButtonClicked="onUnregisterReceiverCButtonClicked"
        />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="发送广播D"
          @onButtonClicked="onSendBroadcastDButtonClicked"
        />
        <s-text-button
          text="注册广播接受者D"
          @onButtonClicked="onRegisterReceiverDButtonClicked"
        />
        <s-text-button
          text="取消注册广播接受者D"
          @onButtonClicked="onUnregisterReceiverDButtonClicked"
        />
      </div>
    </div>
    <s-text-view :text="intentText" />
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import {
  ESLogLevel,
  useESBroadcast,
  useESLog,
  useESToast,
} from '@extscreen/es3-core'
import type { ESBroadcastReceiver, ESIntentFilter } from '@extscreen/es3-core'

const TAG = 'BroadcastPage'
export default defineComponent({
  name: '广播模块',
  setup() {
    const intentText = ref('')

    const broadcast = useESBroadcast()
    const toast = useESToast()
    const log = useESLog()

    const receiverAIntentFilter = {
      action: ['android.intent.action.TEST_BC_A'],
      // scheme: ['package'],
    }
    const receiverBIntentFilter = {
      action: ['android.intent.action.TEST_BC_B'],
      // scheme: ['package'],
    }
    const receiverCIntentFilter = {
      action: ['android.intent.action.TEST_BC_C'],
    }
    const receiverDIntentFilter = {
      action: ['com.huan.appstore.intent.action.ext'],
    }

    const broadcastReceiverA: ESBroadcastReceiver = {
      onReceive(intent: ESIntentFilter) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------BroadcastReceiverA--onReceive--->>>${intent}`)
        }
        intentText.value = JSON.stringify(intent)
      },
    }

    const broadcastReceiverB: ESBroadcastReceiver = {
      onReceive(intent: ESIntentFilter) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------BroadcastReceiverB--onReceive--->>>${intent}`)
        }
        intentText.value = JSON.stringify(intent)
      },
    }

    const broadcastReceiverC: ESBroadcastReceiver = {
      onReceive(intent: ESIntentFilter) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------BroadcastReceiverC--onReceive--->>>${intent}`)
        }
        intentText.value = JSON.stringify(intent)
      },
    }

    const broadcastReceiverD: ESBroadcastReceiver = {
      onReceive(intent: ESIntentFilter) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------BroadcastReceiverD--onReceive--->>>${intent}`)
        }
        intentText.value = JSON.stringify(intent)
      },
    }

    function onSendBroadcastAButtonClicked() {
      const paramsArray = [
        ['-a', 'android.intent.action.TEST_BC_A'],
        ['--es', 'stringKey', 'stringValue'],
      ]
      broadcast.sendBroadcast(paramsArray)
    }

    function onSendBroadcastBButtonClicked() {
      const paramsArray = [
        ['-a', 'android.intent.action.TEST_BC_B'],
        ['--ez', 'booleanKey', true],
        ['--ei', 'intKey', 1000],
      ]
      broadcast.sendBroadcast(paramsArray)
    }

    function onSendBroadcastCButtonClicked() {
      const paramsArray = [['-a', 'android.intent.action.TEST_BC_C']]
      broadcast.sendBroadcast(paramsArray)
    }

    function onSendBroadcastDButtonClicked() {
      const paramsArray = [['-a', 'com.huan.appstore.intent.action.ext']]
      broadcast.sendBroadcast(paramsArray)
    }

    function onRegisterReceiverAButtonClicked() {
      broadcast
        .registerReceiver(broadcastReceiverA, receiverAIntentFilter)
        .then(
          () => {
            toast.showToast('注册广播成功！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '---A---registerReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `---A---registerReceiver---error-->>>${error}`)
            }
          }
        )
    }

    function onRegisterReceiverBButtonClicked() {
      broadcast
        .registerReceiver(broadcastReceiverB, receiverBIntentFilter)
        .then(
          () => {
            toast.showToast('注册广播成功！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '--B----registerReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `--B----registerReceiver---error-->>>${error}`)
            }
          }
        )
    }

    function onRegisterReceiverCButtonClicked() {
      //传null,接收不到广播
      broadcast
        .registerReceiver(broadcastReceiverC, receiverCIntentFilter)
        .then(
          () => {
            toast.showToast('注册广播成功！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '--C----registerReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `--C----registerReceiver---error-->>>${error}`)
            }
          }
        )
    }

    function onRegisterReceiverDButtonClicked() {
      broadcast
        .registerReceiver(broadcastReceiverD, receiverDIntentFilter)
        .then(
          () => {
            toast.showToast('注册广播成功！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '--D----registerReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `--D----registerReceiver---error-->>>${error}`)
            }
          }
        )
    }

    function onUnregisterReceiverAButtonClicked() {
      broadcast
        .unregisterReceiver(broadcastReceiverA, receiverAIntentFilter)
        .then(
          () => {
            toast.showToast('取消注册广播成功！')
            intentText.value = ''
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '--A----unregisterReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('取消注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `--A----unregisterReceiver---error-->>>${error}`)
            }
          }
        )
    }

    function onUnregisterReceiverBButtonClicked() {
      broadcast
        .unregisterReceiver(broadcastReceiverB, receiverBIntentFilter)
        .then(
          () => {
            intentText.value = ''
            toast.showToast('取消注册广播成功！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '--B----unregisterReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('取消注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `--B----unregisterReceiver---error-->>>${error}`)
            }
          }
        )
    }

    function onUnregisterReceiverCButtonClicked() {
      broadcast
        .unregisterReceiver(broadcastReceiverC, receiverCIntentFilter)
        .then(
          () => {
            intentText.value = ''
            toast.showToast('取消注册广播成功！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '---C---unregisterReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('取消注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `---C---unregisterReceiver---error-->>>${error}`)
            }
          }
        )
    }

    function onUnregisterReceiverDButtonClicked() {
      broadcast
        .unregisterReceiver(broadcastReceiverD, receiverDIntentFilter)
        .then(
          () => {
            intentText.value = ''
            toast.showToast('取消注册广播成功！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '---D---unregisterReceiver---success-->>>')
            }
          },
          (error) => {
            toast.showToast('取消注册广播失败！')
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, `---D---unregisterReceiver---error-->>>${error}`)
            }
          }
        )
    }

    return {
      intentText,
      onSendBroadcastAButtonClicked,
      onSendBroadcastBButtonClicked,
      onSendBroadcastCButtonClicked,
      onSendBroadcastDButtonClicked,
      onRegisterReceiverAButtonClicked,
      onRegisterReceiverBButtonClicked,
      onRegisterReceiverCButtonClicked,
      onRegisterReceiverDButtonClicked,
      onUnregisterReceiverAButtonClicked,
      onUnregisterReceiverBButtonClicked,
      onUnregisterReceiverCButtonClicked,
      onUnregisterReceiverDButtonClicked,
    }
  },
})
</script>
<style></style>
