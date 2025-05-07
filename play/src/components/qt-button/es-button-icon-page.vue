<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="false">
      <div class="es-sdk-content-row-css" :clipChildren="false">
        <qt-button text="按钮"
                   size="small"
                   style="margin: 20px"
                   :icon="imageA"
                   :focusIcon="imageB" />

        <qt-button text="按钮"
                   style="margin: 20px"
                   :icon="imageA"
                   :focusIcon="imageB" />

        <qt-button text="按钮"
                   size="large"
                   style="margin: 20px"
                   :icon="imageA"
                   :focusIcon="imageB" />
      </div>
      <div class="es-sdk-content-row-css" :clipChildren="false">
        <qt-button text="网络图标" round
                   icon="http://qcloudimg.a311.ottcn.com/project/zero/img_test/2021/41/30bae62fda-5150-4ec9-93e2-86d24b32309d.jpg"
                   focusIcon="http://qcloudimg.a311.ottcn.com/project/zero/img_test/2021/41/30f0ce3f83-9cb7-4593-ad5c-911f223db6f1.jpg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import imageA from "../../../src/assets/add-circle.png";
import imageB from "../../../src/assets/ashbin.png";
import imageC from "../../../src/assets/ic_radio_selected.png";
import imageD from "../../../src/assets/ic_radio_selected_focus.png";

// import 'quicktvui/es/components/button/style/index'

// import {QtButton} from 'quicktvui'

export default defineComponent({
  name: "Icon",
  // components:{
  //   QtButton
  // },
  setup(props, context) {
    return {
      imageA,
      imageB,
      imageC,
      imageD
    };
  }
});
</script>

<style lang='scss' >
//src='quicktvui/theme-chalk/src/button.scss'
//src='quicktvui/theme-chalk/src/button.scss'
// src='src/styles/button.scss'
//@use "./src/styles/element/index.scss" as *;

//@use 'quicktvui/theme-chalk/src/button.scss' as *;
//@use "./src/styles/element/index.scss" as *;

//@use 'sass:map';
//.test-css{
//  width: 1920px;
//  color: white;
//  height: 80px;
//  font-size: 40px;
//  margin-left: 20px;
//  margin-right: 20px;
//  text-align: center;
//  padding-top: 5px;
//  padding-bottom: 5px;
//  //background-color: map.get($button-bg-color, 'default');
//}

//.qt-button {
//  align-items: center;
//  background-color: red;
//  flex-direction: row;
//  justify-content: center;
//  focus-background-color: map.get($button-bg-color, 'default');
//}

</style>
