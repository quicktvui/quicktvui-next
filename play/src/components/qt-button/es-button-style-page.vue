<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="false">
      <qt-button class="text-button-class" text="自定义按钮样式"
                 :style="{backgroundColor: '#FF0022', height: '100px'}" />
      <qt-button text="自定义文字样式"
                 :text-style="{width:'100px', backgroundColor:'#FF8022', fontSize: '20px'}"
                 class="text-button-class">
      </qt-button>
      <qt-button style="width: 400px;background-color: green; margin: 20px">
        <div class="es-sdk-content-row-css">
          <span style="font-size: 20px; color: red">自定义内容1</span>
          <span style="font-size: 30px; color: #7415B1">自定义内容1</span>
        </div>
      </qt-button>
      <qt-button size="large" text="自定义图标样式"
                 :icon-style="{width: '50px', height: '50px'}"
                 :focus-icon-style="{backgroundColor: '#FF9933', width: '20px', height: '20px'}"
                 :icon="imageA"
                 :focusIcon="imageB"
                 class="text-button-class">
      </qt-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import imageA from "../../../src/assets/add-circle.png";
import imageB from "../../../src/assets/ashbin.png";
import imageC from "../../../src/assets/ic_radio_selected.png";
import imageD from "../../../src/assets/ic_radio_selected_focus.png";

export default defineComponent({
  name: "自定义",
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

<style>
.text-button-class {
  margin: 20px;
}


</style>
