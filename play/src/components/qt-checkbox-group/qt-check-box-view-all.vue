<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-button :focusable="true" text="全选" @click="btnClick(1)"/>
    <qt-button :focusable="true" style="margin-top: 50px;top: 20px" text="取消全选" @click="btnClick(2)"/>
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 1000px;" :clipChildren="false">
      <text-view
        text="基于全局样式"
        :fontSize="30"
        class="t-view"
      />
      <qt-checkbox-group
        ref="checkGroup"
        :orientation="0"
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
import { QtCheckboxAPI }  from "quicktvui";
const TAG = "Checkbox";

export default defineComponent({
  name: "全选模式",
  setup: function() {
    const log = useESLog();
    const toast = useESToast();
    const checkGroup = ref<QtCheckboxAPI>()

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
      // toast.showToast(`点击了按钮: ${tag}`)
      if (tag === 1){
        checkGroup?.value?.selectAll();
      } else if (tag === 2){
        checkGroup?.value?.cancelAll();
      }
    }

    function onCheckedChanged(evt:Array<any>): void {
      // const id = e.id
      // const text = e.text
      // toast.showToast('当前选中value---------->'+text + 'viewId--->'+id)
      toast.showToast('回调 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
      // toast.showToast('当前选中value---------->'+ JSON.stringify(evt))
    }

    function onCheckedChanged1(evt:Array<any>): void {
      // const id = e.id
      // const text = e.text
      // toast.showToast('当前选中value---------->'+text + 'viewId--->'+id)
      toast.showToast('回调1 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
      // toast.showToast('当前选中value---------->'+ JSON.stringify(evt))
    }

    function onCheckedChanged2(evt:Array<any>): void {
      // const id = e.id
      // const text = e.text
      // toast.showToast('当前选中value---------->'+text + 'viewId--->'+id)
      toast.showToast('回调2 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
      // toast.showToast('当前选中value---------->'+ JSON.stringify(evt))
    }

    function onCheckedChanged3(evt:Array<any>): void {
      // const id = e.id
      // const text = e.text
      // toast.showToast('当前选中value---------->'+text + 'viewId--->'+id)
      toast.showToast('回调3 当前选中value---------->'+ evt)
      console.log('当前选中value---------->', evt)
      // toast.showToast('当前选中value---------->'+ JSON.stringify(evt))
    }


    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      defaultDrawable,
      selectDrawable,
      focusDrawable,
      checkGroup,
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
  width: 1500px;
  height: 100px;
  background-color: transparent;
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
  width: 1920px;
  height: 40px;
  top: 20px;
  margin-top: 20px;
}
</style>
