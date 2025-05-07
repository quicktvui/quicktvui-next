<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="getBoolean" @onButtonClicked="getBoolean" />
        <s-text-button text="putBoolean" @onButtonClicked="putBoolean" />
        <s-text-button text="getInt" @onButtonClicked="getInt" />
        <s-text-button text="putInt" @onButtonClicked="putInt" />
        <s-text-button text="getLong" @onButtonClicked="getLong" />
        <s-text-button text="putLong" @onButtonClicked="putLong" />
        <s-text-button text="getString" @onButtonClicked="getString" />
        <s-text-button text="putString" @onButtonClicked="putString" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '本地存储',
  setup() {
    function getBoolean() {
      qt.storage.getBoolean('boolean_key', false).then((value) => {
        qt.toast.showToast(`getBoolean：${value}`)
      })
    }

    function putBoolean() {
      qt.storage.putBoolean('boolean_key', true).then(() => {
        //
      })
    }

    function getInt() {
      qt.storage.getInt('int_key', -1).then((value) => {
        qt.toast.showToast(`getInt：${value}`)
      })
    }

    function putInt() {
      qt.storage.putInt('int_key', 20000).then(() => {
        //
      })
    }

    function getLong() {
      qt.storage.getLong('long_key', 0).then((value) => {
        qt.toast.showToast(`getLong：${value}`)
      })
    }

    function putLong() {
      qt.storage.putLong('long_key', 20000000).then(() => {
        //
      })
    }

    function getString() {
      qt.storage.getString('string_key', 'default string !').then((value) => {
        qt.toast.showToast(`getString：${value}`)
      })
    }

    function putString() {
      qt.storage.putString('string_key', 'hello local storage ~~~').then(() => {
        //
      })
    }

    return {
      getBoolean,
      putBoolean,
      getInt,
      putInt,
      getLong,
      putLong,
      getString,
      putString,
    }
  },
})
</script>
<style></style>
