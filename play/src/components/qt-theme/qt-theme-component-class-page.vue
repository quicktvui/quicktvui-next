<template>
  <qt-view class='es-sdk-root-css' :clipChildren='false'>
    <s-title-view class='es-sdk-content-title-css' :text='this.$options.name' />
    <qt-view class='es-sdk-content-divider-css' />
    <div class='es-sdk-content-column-css' :clipChildren='false'>
      <s-text-view style='text-align: left' text='
          //注意：需要加上scoped，否则会污染全局样式，除非有需要
          // 覆写button的根样式 .qt-button
          .qt-button {
            align-items: center;
            background-color: gold;
            flex-direction: row;
            justify-content: center;
            focus-background-color: $color-error;
          }
          // 焦点颜色引入 quicktvui 样式变量 $color-error
          //focus-background-color: $color-error;
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
  name: '组件样式：class',
  setup(props, context) {
    return {}
  }
})
</script>

<style lang='scss' scoped>

//注意：需要加上scoped，否则会污染全局样式，除非有需要

// 覆写button的根样式 .qt-button
.qt-button {
  align-items: center;
  background-color: gold;
  flex-direction: row;
  justify-content: center;
  //自定义样式打开此注释
  //focus-background-color: $color-error;
}

// 焦点颜色引入 quicktvui 样式变量 $color-error
//focus-background-color: $color-error;

</style>
