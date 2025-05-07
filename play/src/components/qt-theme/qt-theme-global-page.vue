<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <div class='es-sdk-content-column-css' :clipChildren='false'>
      <s-text-view style='text-align: left' text="
          1、去掉 main.ts 中全局样式引入：import 'quicktvui/dist/index.css'
2、自定义样式覆盖全局样式：./src/styles/quicktvui/index.scss，覆盖QuickTVUI默认全局背景颜色：$bg-color 等
3、/scripts/quicktvui-webpack.dev.ts中配置全局引入:./src/styles/quicktvui/index.scss
      " />
      <div class='es-sdk-content-row-css' :clipChildren='false'>
        <qt-button text='按钮' style='margin: 20px' />
        <qt-button text='按钮' style='margin: 20px' />
      </div>
    </div>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '全局样式',
  setup(props, context) {
    return {}
  },
});
</script>

<style>

</style>
