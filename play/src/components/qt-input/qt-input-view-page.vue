<template>
  <div>
    <s-text-button text="按钮"/>

    <div class="div-wrap">
<!--      <qt-input-view-->
<!--        text="你好"-->
<!--        hintText="请输入"-->
<!--        strokeColor="#ff0000"-->
<!--        size="large"-->
<!--      />-->
<!--      <qt-input-view-->
<!--        text="default"-->
<!--        hintText="请输入"-->
<!--        strokeColor="#ff0000"-->
<!--      />-->
      <qt-input-view
        text="small"
        hintText="请输入"
        strokeColor="#ff0000"
        size="small"
        :textSize="35"
        style="width: 600px; height: 100px;"
        @onTextChange="onTextChange"
        @onFocusChanged="onFocusChanged"
        name="inputSamll"
      />
      <qt-input-view
        text="small"
        hintText="请输入"
        :textSize="35"
        style="width: 600px; height: 100px;"
      />
    </div>


  </div>

<!--  git commit --no-verify -am "input组件注册"-->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QTIInputView } from 'quicktvui'
import {useESToast} from "@extscreen/es3-core";
const TAG = '===wk==='

const qt_input = ref<QTIInputView>()
const toast = useESToast()

/**
 * {text: 'smally', name: 'inputSamll'}
 * @param
 */
const onTextChange = (e) => {
  console.log(TAG, 'onTextChange', e.nativeParams)
}

/**
 * {name: 'inputSamll', isFocused: true}
 * @param
 */
const onFocusChanged = (e) => {
  console.log(TAG, 'onFocusChanged', e.nativeParams)
}

</script>

<style scoped>
.div-wrap {
  width: 1920px;
  height: 150px;
  display: flex;
  flex-direction: row;
}
.input2 {
  width: 600px;
  height: 200px;
  margin-left: 20px;
}
</style>
