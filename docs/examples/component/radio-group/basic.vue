<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-radio-group
      ref="radioGroup"
      :orientation="0"
      :clipChildren="false"
      class="item-radio-group-view-css"
      @onCheckedChanged="onCheckedChanged"
    >
      <qt-radio-button
        class="item-radio-button-view-css"
        size="default"
        :enableFocusBorder="true"
        :enableFocusBackground="true"
        :focusable="true"
        :checked="true"
        :viewId="1"
        :clipChildren="false"
        :value="1"
        fill="#409eff"
        textColor="#f6e707"
        :padding="8"
        :borderRadius="16"
        :drawablePadding="8"
        :defaultDrawable="defaultDrawable"
        :selectDrawable="selectDrawable"
        :focusDrawable="focusDrawable"
        :focusBackground="'#ffffff'"
      />
      <qt-radio-button
        class="item-radio-button-view-css"
        :enableFocusBorder="true"
        :enableFocusBackground="true"
        :focusable="false"
        :clipChildren="false"
        :viewId="6"
        :value="6"
        fill="#333eee"
        textColor="#f6e707"
        :padding="8"
        :borderRadius="16"
        :drawablePadding="8"
        :drawableSize="24"
        :disabled="true"
        :disabledDrawable="selectDrawable"
      />
    </qt-radio-group>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESToast } from '@extscreen/es3-core'
import defaultDrawable from '../../assets/ic_radio_normal.png'
import selectDrawable from '../../assets/ic_radio_select.png'
import focusDrawable from '../../assets/ic_radio_focus.png'
import type { QtRadioAPI } from 'quicktvui'

const TAG = 'RadioGroup'

export default defineComponent({
  name: '单选框-横向',
  setup() {
    const toast = useESToast()
    const radioGroup = ref<QtRadioAPI>()
    const radioGroupTwo = ref<QtRadioAPI>()

    function onCheckedChanged(id: number, text: string): void {
      toast.showToast(`当前选中value---------->${text}viewId--->${id}`)
    }

    return {
      defaultDrawable,
      selectDrawable,
      focusDrawable,
      radioGroup,
      radioGroupTwo,
      onCheckedChanged,
    }
  },
})
</script>

<style scoped>
.item-radio-group-view-css {
  position: absolute;
  width: 1920px;
  height: 200px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
}

.item-radio-button-view-css {
  width: 200px;
  height: 100px;
  background-color: gold;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px 20px 20px 20px;
}
</style>
