<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-button :focusable="true" text="纵向" @click="btnClick(1)"/>
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 1080px;" :clipChildren="false">
      <div class="es-sdk-content-row-css">
        <text-view
          text="基于全局样式"
          :fontSize="30"
          class="t-view"
        />
        <qt-checkbox-group
          ref="checkbox"
          :orientation="1"
          :clipChildren="false"
          class="item-checkbox-group-view-css"
          @onCheckedChanged="onCheckedChanged"
        >
          <qt-checkbox
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
            focusCheckColor="#409eff"
          />
          <qt-checkbox
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
            focusCheckColor="#409eff"
          />
          <qt-checkbox
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
            focusCheckColor="#409eff"
          />
          <qt-checkbox
            class="item-checkbox-button-view-css"
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
            focusCheckColor="#409eff"
          />
          <qt-checkbox
            size="large"
            class="item-checkbox-button-view-css"
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
        </qt-checkbox-group>
        <text-view
          text="纵向 背景+边框 上焦支持"
          :fontSize="30"
          class="t-view"
        />
        <qt-checkbox-group
          ref="checkbox"
          :orientation="1"
          :clipChildren="false"
          class="item-checkbox-group-view-css"
          @onCheckedChanged="onCheckedChanged1"
        >
          <qt-checkbox
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
          <qt-checkbox
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
          <qt-checkbox
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
          <qt-checkbox
            class="item-checkbox-button-view-css"
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
          <qt-checkbox
            size="large"
            class="item-checkbox-button-view-css"
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
        </qt-checkbox-group>
        <text-view
          text="纵向 背景 上焦支持"
          :fontSize="30"
          class="t-view"
        />
        <qt-checkbox-group
          ref="checkbox1"
          :orientation="1"
          :clipChildren="false"
          class="item-checkbox-group-view-css"
          @onCheckedChanged="onCheckedChanged2"
        >
          <qt-checkbox
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
          <qt-checkbox
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
          <qt-checkbox
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
          <qt-checkbox
            class="item-checkbox-button-view-css"
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
          <qt-checkbox
            size="large"
            class="item-checkbox-button-view-css"
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
        </qt-checkbox-group>
        <text-view
          text="纵向 边框 上焦支持"
          :fontSize="30"
          class="t-view"
        />
        <qt-checkbox-group
          :orientation="1"
          :clipChildren="false"
          class="item-checkbox-group-view-css"
          @onCheckedChanged="onCheckedChanged3"
        >
          <qt-checkbox
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
          <qt-checkbox
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
          <qt-checkbox
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
          <qt-checkbox
            class="item-checkbox-button-view-css"
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
          <qt-checkbox
            size="large"
            class="item-checkbox-button-view-css"
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
        </qt-checkbox-group>
      </div>
<!--      <qt-checkbox-group
        ref="checkbox"
        :orientation="1"
        :clipChildren="false"
        class="item-radio-group-view-css"
        @onCheckedChanged="onCheckedChanged"
      >
        <qt-checkbox
          class="item-radio-button-view-css"
          :enableFocusBorder="true"
          :enableFocusBackground="true"
          :focusable="true"
          :checked="true"
          :viewId="1"
          :clipChildren="false"
          :value='1'
          :fill="'#409eff'"
          textColor="#f6e707"
          :padding="8"
          :drawablePadding="8"
          :borderRadius="16"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          :defaultColor="'#42FFFFFF'"
          :focusCheckColor="'#0883ec'"
        />
        <qt-checkbox
          class="item-radio-button-view-css"
          :enableFocusBorder="true"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="2"
          :value='2'
          :fill="'#409eff'"
          textColor="#f6e707"
          :padding="8"
          :drawablePadding="8"
          :borderRadius="16"
          drawableLocation="left"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          :defaultColor="'#42FFFFFF'"
          :focusCheckColor="'#0883ec'"
        />
        <qt-checkbox
          class="item-radio-button-view-css"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="3"
          :value='3'
          :fill="'#409eff'"
          textColor="#f6e707"
          :drawablePadding="8"
          :borderRadius="16"
          drawableLocation="top"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          :defaultColor="'#42FFFFFF'"
          :focusCheckColor="'#0883ec'"
        />
        <qt-checkbox
          class="item-radio-button-view-css"
          :enableFocusBorder="true"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="4"
          :value='4'
          :fill="'#409eff'"
          textColor="#f6e707"
          :drawablePadding="8"
          :borderRadius="16"
          drawableLocation="right"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          :defaultColor="'#42FFFFFF'"
          :focusCheckColor="'#0883ec'"
        />
        <qt-checkbox
          class="item-radio-button-view-css"
          :enableFocusBorder="false"
          :enableFocusBackground="true"
          :focusable="true"
          :clipChildren="false"
          :viewId="5"
          :value='5'
          :fill="'#409eff'"
          textColor="#f6e707"
          :padding="8"
          :drawablePadding="8"
          :borderRadius="16"
          drawableLocation="bottom"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          :defaultColor="'#42FFFFFF'"
          :focusCheckColor="'#0883ec'"
        />
        <qt-checkbox
          class="item-radio-button-view-css"
          :enableFocusBorder="true"
          :enableFocusBackground="true"
          :focusable="false"
          :clipChildren="false"
          :viewId="6"
          :value='6'
          fillColor="#333eee"
          textColor="#f6e707"
          :padding="8"
          :borderRadius="16"
          :drawablePadding="8"
          :drawableSize="48"
          :disabled="true"
          defaultColor="#42FFFFFF"
          focusCheckColor="#0883ec"
          :disabledDrawable="selectDrawable"
        />
      </qt-checkbox-group>-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ESLogLevel, useESLog, useESToast } from "@extscreen/es3-core";
import defaultDrawable from '../../assets/ic_checkbox_default.png'
import selectDrawable from '../../assets/ic_checkbox_checked.png'
import focusDrawable from '../../assets/ic_checkbox_focus.png'
import { ref } from "vue";
import { QtRadioAPI } from "quicktvui";
const TAG = "Checkbox";

export default defineComponent({
  name: "多选-竖向",
  setup: function() {
    const log = useESLog();
    const toast = useESToast();
    // const radioGroup = ref<QtRadioAPI>()

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
      // radioGroup?.value?.testApi();
      // qtiInputView.value?.setWidth(600)
    }

    function onCheckedChanged(evt:Array<any>): void {
      toast.showToast('回调 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
    }

    function onCheckedChanged1(evt:Array<any>): void {
      toast.showToast('回调1 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
    }

    function onCheckedChanged2(evt:Array<any>): void {
      toast.showToast('回调2 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
    }

    function onCheckedChanged3(evt:Array<any>): void {
      toast.showToast('回调3 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
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
      onCheckedChanged,
      onCheckedChanged1,
      onCheckedChanged2,
      onCheckedChanged3
    };
  }
});
</script>

<style scoped>

.item-checkbox-group-view-css {
  width: 300px;
  height: 500px;
  top: 0;
  left:0;
  background-color: transparent;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.item-checkbox-button-view-css {
  /*width: 200px;
  height: 100px;
  background-color: transparent;*/
  margin-top: 20px;
  margin-bottom: 20px;
}

.t-view {
  width: 100px;
  height: 300px;
}

</style>
