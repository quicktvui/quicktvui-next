<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-button :focusable="true" text="横向" @click="btnClick(1)" />
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 1080px; background-color: transparent" :clipChildren="false">
      <qt-radio-group
        :orientation="0"
        :clipChildren="false"
        class="item-radio-group-view-css"
        @onCheckedChanged="onCheckedChanged"
      >
        <qt-radio-button
          size="small"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :checked="true"
          :viewId="1"
          :clipChildren="false"
          :value='"small"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="8"
          :drawablePadding="8"
          :borderRadius="16"
          :drawableSize="24"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          size="default"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="2"
          :value='"default"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="16"
          :drawablePadding="16"
          :borderRadius="16"
          :drawableSize="32"
          drawableLocation="left"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          size="large"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="3"
          :value='"large左"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="24"
          :drawablePadding="24"
          :borderRadius="16"
          :drawableSize="48"
          drawableLocation="left"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          class="item-radio-button-view-css"
          size="large"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="4"
          :value='"large右"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="24"
          :drawablePadding="24"
          :borderRadius="16"
          :drawableSize="48"
          drawableLocation="right"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          size="large"
          class="item-radio-button-view-css"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="false"
          :clipChildren="false"
          :value='"禁用状态"'
          fillColor="#333eee"
          textColor="#000000"
          :padding="24"
          :drawablePadding="24"
          :borderRadius="16"
          :drawableSize="48"
          :disabled="true"
          defaultColor="#42FFFFFF"
          focusCheckColor="#42FFFFFF"
          disabledColor="#42FFFFFF"
          :disabledDrawable="selectDrawable"
        />
      </qt-radio-group>

      <qt-radio-group
        :orientation="1"
        :clipChildren="false"
        class="item-radio-group-view-css1"
        @onCheckedChanged="onCheckedChanged1"
      >
        <qt-radio-button
          size="small"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :checked="true"
          :viewId="1"
          :clipChildren="false"
          :value='"small"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="8"
          :drawablePadding="8"
          :borderRadius="16"
          :drawableSize="24"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          size="default"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="2"
          :value='"default"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="16"
          :drawablePadding="16"
          :borderRadius="16"
          :drawableSize="32"
          drawableLocation="left"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          size="large"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="3"
          :value='"large左"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="24"
          :drawablePadding="24"
          :borderRadius="16"
          :drawableSize="48"
          drawableLocation="left"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          class="item-radio-button-view-css"
          size="large"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="4"
          :value='"large右"'
          fillColor="#409eff"
          textColor="#000000"
          :padding="24"
          :drawablePadding="24"
          :borderRadius="16"
          :drawableSize="48"
          drawableLocation="right"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          defaultColor="#42FFFFFF"
          focusCheckColor="#FFFFFF"
        />
        <qt-radio-button
          size="large"
          class="item-radio-button-view-css"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="false"
          :clipChildren="false"
          :value='"禁用状态"'
          fillColor="#333eee"
          textColor="#000000"
          :padding="24"
          :drawablePadding="24"
          :borderRadius="16"
          :drawableSize="48"
          :disabled="true"
          defaultColor="#42FFFFFF"
          focusCheckColor="#42FFFFFF"
          disabledColor="#42FFFFFF"
          :disabledDrawable="selectDrawable"
        />
      </qt-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ESLogLevel, useESLog, useESToast } from "@extscreen/es3-core";
import defaultDrawable from "../../assets/ic_radio_normal.png";
import selectDrawable from "../../assets/ic_radio_select.png";
import focusDrawable from "../../assets/ic_radio_focus.png";
import { ref } from "vue";
import { QtRadioAPI } from "quicktvui";

const TAG = "RadioGroup";

export default defineComponent({
  name: "单选框-横向+纵向",
  setup: function() {
    const log = useESLog();
    const toast = useESToast();
    const radioGroup = ref<QtRadioAPI>();
    const radioGroupTwo = ref<QtRadioAPI>();

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>");
      }
    };

    const onESResume = () => {
      log.e(TAG, "-------onESResume---------->>>>>");
    };


    const onESPause = () => {
      log.e(TAG, "-------onESPause---------->>>>>");
    };
    const onESDestroy = () => {
      log.e(TAG, "-------onESDestroy---------->>>>>");
    };

    const btnClick = (tag: number) => {
      //toast.showToast(`点击了按钮: ${tag}`)
      radioGroup?.value?.testApi();
      radioGroupTwo?.value?.testApi();
      // qtiInputView.value?.setWidth(600)
    };

    function onCheckedChanged(id: number, text: string): void {
      // const id = e.id
      // const text = e.text
      toast.showToast("当前选中value---------->" + text + "viewId--->" + id);
      // toast.showToast('当前选中value---------->'+ JSON.stringify(e))
    }

    function onCheckedChanged1(id: number, text: string): void {
      // const id = e.id
      // const text = e.text
      toast.showToast("当前选中value---------->" + text + "viewId--->" + id);
      // toast.showToast('当前选中value---------->'+ JSON.stringify(e))
    }


    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      defaultDrawable,
      selectDrawable,
      focusDrawable,
      btnClick,
      radioGroup,
      radioGroupTwo,
      onCheckedChanged,
      onCheckedChanged1
    };
  }
});
</script>

<style scoped>

.item-radio-group-view-css {
  position: absolute;
  width: 1920px;
  height: 200px;
  background-color: transparent;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}


.item-radio-group-view-css1 {
  position: absolute;
  width: 300px;
  height: 600px;
  background-color: transparent;
  left: 0;
  margin-top: 100px;
  margin-left: 100px;
  margin-bottom: 20px;
}


.item-radio-button-view-css {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px 20px 20px 20px;
}
</style>
