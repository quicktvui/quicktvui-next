<template>
  <div>
    <qt-input-view
      ref="inputRef"
      :text="text"
      hintText="回调测试"
      class="input2"
      @onTextChange="onTextChange"
      @onFocusChanged="onFocusChanged"
    />

    <s-text-button text="按钮" @click="btnClick"/>
    <text-view
      :text="msg"
      :fontSize="50"
      class="t-view"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { QTIInputView } from 'quicktvui'
import {useESToast} from "@extscreen/es3-core";

// const inputRef = ref<QTIInputView>()
const inputRef = ref()
const text = ref('')
const toast = useESToast()
const msg = ref('')

const onTextChange = (e: any) => {
  console.log('===wk==', e, e.nativeParams.text);
  msg.value = e.nativeParams.text
}

const onFocusChanged = (e: any) => {
  console.log('===wk===focus=', e.nativeParams.isFocused);
}

const btnClick = () => {
  console.log('===wk===btnClick', inputRef.value);
  inputRef.value?.getEsInfo((res: any) => {
    console.log('===getEsInfo==', res)
    toast.showToast(res)
  })


}


</script>
<style scoped>
.input2 {
  width: 300px;
  height: 200px;
}
.t-view {
  width: 1000px;
  height: 60px;
}
</style>
