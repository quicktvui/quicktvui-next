<template>
  <qt-view class='es-sdk-root-css' :clipChildren='false'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <qt-view class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css' :clipChildren='false'>
      <s-text-view text="引入外部样式 <style src='src/styles/component/button.scss'>" />
      <s-text-view style='text-align: left' text='
          //注意：需要加上scoped，否则会污染全局样式，除非有需要
          // 覆写button的根样式 .qt-button
              .qt-button {
                align-items: center;
                background-color: red;
                flex-direction: row;
                justify-content: center;
                focus-background-color: $color-primary;
              }
        // 焦点颜色引入 quicktvui 样式变量 $color-primary
        //focus-background-color: $color-primary;
        ' />
      <div class='es-sdk-content-row-css' :clipChildren='false'>
        <qt-button text='按钮' style='margin: 20px' />
        <qt-button text='按钮' style='margin: 20px' />
      </div>
    </div>
  </qt-view>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '组件样式：style',
  setup(props, context) {
    return {}
  }
})
</script>

<style scoped src='src/styles/component/button.scss'>

</style>
