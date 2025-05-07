<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="发送给所有应用消息A"
          @onButtonClicked="onSendMessageAButtonClicked"
        />
        <s-text-button
          text="注册消息接受者A"
          @onButtonClicked="onRegisterReceiverAButtonClicked"
        />
        <s-text-button
          text="取消注册消息接受者A"
          @onButtonClicked="onUnregisterReceiverAButtonClicked"
        />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="发送给所有应用消息B"
          @onButtonClicked="onSendMessageBButtonClicked"
        />
        <s-text-button
          text="注册消息接受者B"
          @onButtonClicked="onRegisterReceiverBButtonClicked"
        />
        <s-text-button
          text="取消注册消息接受者B"
          @onButtonClicked="onUnregisterReceiverBButtonClicked"
        />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="给八阿哥发送消息C"
          @onButtonClicked="onSendMessageCButtonClicked"
        />
        <s-text-button
          text="注册消息接受者C"
          @onButtonClicked="onRegisterReceiverCButtonClicked"
        />
        <s-text-button
          text="取消注册消息接受者C"
          @onButtonClicked="onUnregisterReceiverCButtonClicked"
        />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="给七阿哥发送消息D"
          @onButtonClicked="onSendMessageDButtonClicked"
        />
        <s-text-button
          text="注册消息接受者D"
          @onButtonClicked="onRegisterReceiverDButtonClicked"
        />
        <s-text-button
          text="取消注册消息接受者D"
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
import { ESLogLevel, useESIAC, useESLog } from '@extscreen/es3-core'
import type { ESIACMessage, ESIACReceiver } from '@extscreen/es3-core'

const TAG = 'ESIACPage'

export default defineComponent({
  name: '应用间通信模块',
  setup() {
    const intentText = ref('')

    const iac = useESIAC()
    const log = useESLog()

    const receiverAMessageFilter = {
      action: ['android.intent.action.TEST_BC_A'],
    }
    const receiverBMessageFilter = {
      action: ['android.intent.action.TEST_BC_B'],
    }
    const receiverCMessageFilter = {
      action: ['android.intent.action.TEST_BC_C'],
    }
    const receiverDMessageFilter = {
      action: ['com.huan.appstore.intent.action.ext'],
    }

    const messageReceiverA: ESIACReceiver = {
      onReceive(message: ESIACMessage) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------messageReceiverA--onReceive--->>>${message}`)
        }
        intentText.value = JSON.stringify(message)
      },
    }

    const messageReceiverB: ESIACReceiver = {
      onReceive(message: ESIACMessage) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------messageReceiverB--onReceive--->>>${message}`)
        }
        intentText.value = JSON.stringify(message)
      },
    }

    const messageReceiverC: ESIACReceiver = {
      onReceive(message: ESIACMessage) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------messageReceiverC--onReceive--->>>${message}`)
        }
        intentText.value = JSON.stringify(message)
      },
    }

    const messageReceiverD: ESIACReceiver = {
      onReceive(message: ESIACMessage) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, `------messageReceiverD--onReceive--->>>${message}`)
        }
        intentText.value = JSON.stringify(message)
      },
    }

    function onSendMessageAButtonClicked() {
      const message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_A',
      }
      iac.sendMessage(message)
    }

    function onSendMessageBButtonClicked() {
      const message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_B',
      }
      iac.sendMessage(message)
    }

    function onSendMessageCButtonClicked() {
      const message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_C',
        package: 'es.test.eight',
      }
      iac.sendMessage(message)
    }

    function onSendMessageDButtonClicked() {
      const message: ESIACMessage = {
        action: 'android.intent.action.TEST_BC_D',
        package: 'es.test.seven',
      }
      iac.sendMessage(message)
    }

    function onRegisterReceiverAButtonClicked() {
      iac.registerReceiver(messageReceiverA, receiverAMessageFilter)
    }

    function onRegisterReceiverBButtonClicked() {
      iac.registerReceiver(messageReceiverB, receiverBMessageFilter)
    }

    function onRegisterReceiverCButtonClicked() {
      iac.registerReceiver(messageReceiverC, receiverCMessageFilter)
    }

    function onRegisterReceiverDButtonClicked() {
      iac.registerReceiver(messageReceiverD, receiverDMessageFilter)
    }

    function onUnregisterReceiverAButtonClicked() {
      iac.unregisterReceiver(messageReceiverA)
    }

    function onUnregisterReceiverBButtonClicked() {
      iac.unregisterReceiver(messageReceiverB)
    }

    function onUnregisterReceiverCButtonClicked() {
      iac.unregisterReceiver(messageReceiverC)
    }

    function onUnregisterReceiverDButtonClicked() {
      iac.unregisterReceiver(messageReceiverD)
    }

    return {
      intentText,
      onSendMessageAButtonClicked,
      onSendMessageBButtonClicked,
      onSendMessageCButtonClicked,
      onSendMessageDButtonClicked,
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
