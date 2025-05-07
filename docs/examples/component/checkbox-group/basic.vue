<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div
      class="es-sdk-content-column-css"
      style="width: 1920px; height: 800px"
      :clipChildren="false"
    >
      <qt-checkbox-group
        ref="checkbox"
        :orientation="0"
        :clipChildren="false"
        class="item-checkbox-group-view-css"
        @onCheckedChanged="onCheckedChanged"
      >
        <qt-checkbox
          class="item-checkbox-button-view-css"
          :enableFocusBorder="true"
          :enableFocusBackground="true"
          :focusable="true"
          :checked="true"
          :viewId="1"
          :clipChildren="false"
          :value="1"
          :fill="'#409eff'"
          :textColor="'#f6e707'"
          :padding="8"
          :drawablePadding="8"
          :defaultDrawable="defaultDrawable"
          :selectDrawable="selectDrawable"
          :focusDrawable="focusDrawable"
          :focusBackground="'#ffffff'"
        />
        <qt-checkbox
          class="item-checkbox-button-view-css"
          :enableFocusBorder="true"
          :enableFocusBackground="true"
          :focusable="false"
          :clipChildren="false"
          :viewId="6"
          :value="6"
          :fill="'#333eee'"
          :textColor="'#f6e707'"
          :padding="8"
          :drawablePadding="8"
          :drawableSize="48"
          :disabled="true"
          :disabledDrawable="selectDrawable"
        />
      </qt-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import defaultDrawable from '../../assets/ic_checkbox_default.png'
import selectDrawable from '../../assets/ic_checkbox_checked.png'
import focusDrawable from '../../assets/ic_checkbox_focus.png'
const TAG = 'Checkbox'

export default defineComponent({
  name: '多选-横向',
  setup() {
    function onCheckedChanged(evt: Array<any>): void {
      console.log('当前选中value---------->', evt)
    }

    return {
      defaultDrawable,
      selectDrawable,
      focusDrawable,
      onCheckedChanged,
    }
  },
})
</script>

<style>
.item-checkbox-group-view-css {
  position: absolute;
  width: 1200px;
  height: 200px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
}

.item-checkbox-button-view-css {
  width: 200px;
  height: 100px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
