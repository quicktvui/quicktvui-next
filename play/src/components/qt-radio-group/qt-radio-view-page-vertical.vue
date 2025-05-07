<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-button :focusable="true" text="纵向" @click="btnClick(1)" />
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 1080px; background-color: transparent" :clipChildren="false">
      <div class="es-sdk-content-row-css">
        <text-view
          text="基于全局样式"
          :fontSize="30"
          class="t-view"
        />
        <qt-radio-group
          ref="radioGroup"
          :orientation="1"
          :clipChildren="false"
          class="item-radio-group-view-css"
          @onCheckedChanged="onCheckedChanged"
        >
          <qt-radio-button
            size="small"
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :checked="true"
            :viewId="1"
            :clipChildren="false"
            :value='"small"'
            fillColor="#409eff"
            textColor="#f6e707"
            :padding="8"
            :drawablePadding="8"
            :borderRadius="16"
            :drawableSize="24"
            :defaultDrawable="defaultDrawable"
            :selectDrawable="selectDrawable"
            :focusDrawable="focusDrawable"
          />
          <qt-radio-button
            size="default"
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :clipChildren="false"
            :viewId="2"
            :value='"default"'
            fillColor="#409eff"
            textColor="#f6e707"
            :padding="8"
            :drawablePadding="8"
            :borderRadius="16"
            :drawableSize="32"
            drawableLocation="left"
            :defaultDrawable="defaultDrawable"
            :selectDrawable="selectDrawable"
            :focusDrawable="focusDrawable"
          />
          <qt-radio-button
            size="large"
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :clipChildren="false"
            :viewId="3"
            :value='"large左"'
            fillColor="#409eff"
            textColor="#f6e707"
            :drawablePadding="8"
            :borderRadius="16"
            :drawableSize="48"
            drawableLocation="left"
            :defaultDrawable="defaultDrawable"
            :selectDrawable="selectDrawable"
            :focusDrawable="focusDrawable"
          />
          <qt-radio-button
            class="item-radio-button-view-css"
            size="large"
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :clipChildren="false"
            :viewId="4"
            :value='"large右"'
            fillColor="#409eff"
            textColor="#f6e707"
            :drawablePadding="8"
            :borderRadius="16"
            :drawableSize="48"
            drawableLocation="right"
            :defaultDrawable="defaultDrawable"
            :selectDrawable="selectDrawable"
            :focusDrawable="focusDrawable"
          />
          <qt-radio-button
            size="large"
            class="item-radio-button-view-css"
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="false"
            :clipChildren="false"
            :value='"禁用状态"'
            fillColor="#333eee"
            textColor="#f6e707"
            :padding="8"
            :drawablePadding="8"
            :borderRadius="16"
            :drawableSize="48"
            :disabled="true"
            defaultColor="#42FFFFFF"
            focusCheckColor="#42FFFFFF"
            disabledColor="#42FFFFFF"
            :disabledDrawable="selectDrawable"
          />
        </qt-radio-group>
        <text-view
          text="纵向 背景+边框 上焦支持"
          :fontSize="30"
          class="t-view"
        />
        <qt-radio-group
          ref="radioGroupTwo"
          :orientation="1"
          :clipChildren="false"
          class="item-radio-group-view-css"
          @onCheckedChanged="onCheckedChanged1"
        >
          <qt-radio-button
            size="small"
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :checked="true"
            :viewId="1"
            :clipChildren="false"
            :value='"small"'
            fillColor="#409eff"
            textColor="#f6e707"
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
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :clipChildren="false"
            :viewId="2"
            :value='"default"'
            fillColor="#409eff"
            textColor="#f6e707"
            :padding="8"
            :drawablePadding="8"
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
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :clipChildren="false"
            :viewId="3"
            :value='"large左"'
            fillColor="#409eff"
            textColor="#f6e707"
            :drawablePadding="8"
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
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="true"
            :clipChildren="false"
            :viewId="4"
            :value='"large右"'
            fillColor="#409eff"
            textColor="#f6e707"
            :drawablePadding="8"
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
            :enableFocusBorder="true"
            :enableFocusBackground="true"
            :focusable="false"
            :clipChildren="false"
            :value='"禁用状态"'
            fillColor="#333eee"
            textColor="#f6e707"
            :padding="8"
            :drawablePadding="8"
            :borderRadius="16"
            :drawableSize="48"
            :disabled="true"
            defaultColor="#42FFFFFF"
            focusCheckColor="#42FFFFFF"
            disabledColor="#42FFFFFF"
            :disabledDrawable="selectDrawable"
          />
        </qt-radio-group>
        <text-view
          text="纵向 背景 上焦支持"
          :fontSize="30"
          class="t-view"
        />
        <qt-radio-group
          :orientation="1"
          :clipChildren="false"
          class="item-radio-group-view-css"
          @onCheckedChanged="onCheckedChanged2"
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
        <text-view
          text="纵向 边框 上焦支持"
          :fontSize="30"
          class="t-view"
        />
        <qt-radio-group
          :orientation="1"
          :clipChildren="false"
          class="item-radio-group-view-css"
          @onCheckedChanged="onCheckedChanged3"
        >
          <qt-radio-button
            size="small"
            :enableFocusBorder="true"
            :enableFocusBackground="false"
            :focusable="true"
            :checked="true"
            :viewId="1"
            :clipChildren="false"
            :value='"small"'
            fillColor="#409eff"
            textColor="#000000"
            :padding="10"
            :drawablePadding="10"
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
            :enableFocusBorder="true"
            :enableFocusBackground="false"
            :focusable="true"
            :clipChildren="false"
            :viewId="2"
            :value='"default"'
            fillColor="#409eff"
            textColor="#000000"
            :padding="24"
            :drawablePadding="24"
            :borderRadius="24"
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
            :enableFocusBorder="true"
            :enableFocusBackground="false"
            :focusable="true"
            :clipChildren="false"
            :viewId="3"
            :value='"large"'
            fillColor="#409eff"
            textColor="#000000"
            :padding="32"
            :drawablePadding="24"
            :borderRadius="32"
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
            :enableFocusBorder="true"
            :enableFocusBackground="false"
            :focusable="true"
            :clipChildren="false"
            :viewId="4"
            :value='"large右"'
            fillColor="#409eff"
            textColor="#000000"
            :padding="32"
            :drawablePadding="24"
            :borderRadius="32"
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
            :enableFocusBorder="true"
            :enableFocusBackground="false"
            :focusable="false"
            :clipChildren="false"
            :value='"禁用状态"'
            fillColor="#333eee"
            textColor="#000000"
            :padding="32"
            :drawablePadding="24"
            :borderRadius="32"
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
  name: "单选框-纵向",
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
      toast.showToast("当前选中value---------->" + text + "viewId--->" + id);
    }

    function onCheckedChanged1(id: number, text: string): void {
      toast.showToast("当前选中value---------->" + text + "viewId--->" + id);
    }

    function onCheckedChanged2(id: number, text: string): void {
      toast.showToast("当前选中value---------->" + text + "viewId--->" + id);
    }

    function onCheckedChanged3(id: number, text: string): void {
      toast.showToast("当前选中value---------->" + text + "viewId--->" + id);
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
      onCheckedChanged1,
      onCheckedChanged2,
      onCheckedChanged3
    };
  }
});
</script>

<style scoped>

.item-radio-group-view-css {
  width: 300px;
  height: 600px;
  top: 0;
  left:0;
  background-color: transparent;
  top: 0;
  left: 0;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
}

.item-radio-button-view-css {
  /*width: 200px;
  height: 100px;
  background-color: transparent;*/
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 24px;
}

.t-view {
  width: 100px;
  height: 300px;
}
</style>
