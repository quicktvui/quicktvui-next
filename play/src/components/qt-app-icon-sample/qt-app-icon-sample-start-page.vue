<template>
  <qt-view class='es-sdk-root-css' :clipChildren='false'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <qt-view class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css' :clipChildren='false'>
      <div class='es-sdk-content-row-css' :clipChildren='false'>
        <qt-app-icon-sample packageName='com.extscreen.runtime'
                            style='background-color: green;margin: 20px' />
        <qt-app-icon-sample style='height: 250px;width: 250px;background-color: red;'
                            packageName='com.extscreen.runtime' />
      </div>
      <div class='es-sdk-content-row-css' :clipChildren='false'>
        <qt-app-icon-sample size='mini'
                            style='margin: 20px; height: 550px;width: 550px; background-color: yellow;'
                            packageName='com.extscreen.runtime' />
        <qt-app-icon-sample size='small'
                            style='margin: 20px; background-color: palevioletred;'
                            packageName='com.extscreen.runtime' />
        <qt-app-icon-sample size='default'
                            style='margin: 20px; background-color: purple;'
                            packageName='com.extscreen.runtime' />
        <qt-app-icon-sample size='large'
                            style='margin: 20px; background-color: mediumpurple;'
                            packageName='com.extscreen.runtime' />
      </div>
    </div>

  </qt-view>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QTAppIconSample',
  setup(props, context) {
    return {}
  }
})
</script>

<style>

</style>
