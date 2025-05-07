<template>
 <div>
   <text-view
     text="size属性: 使用size属性,style中不可设置height"
     :fontSize="50"
     class="t-view"
   />
   <div class="div-wrap">
     <qt-input-view
       text=""
       size="large"
       style="margin-right: 20px;"
       hintText="large"
       />
     <qt-input-view
       text=""
       hintText="default"
       class="input1"
     />
     <qt-input-view
       text=""
       size="small"
       hintText="small"
       :strokeRadius="8"
       class="input1"
     />
   </div>

   <text-view
     text="文字边框属性:"
     :fontSize="50"
     class="t-view"
   />
   <div class="div-wrap">
     <qt-input-view
       hintText="文字颜色，大小"
       hintColor="#0c61c9"
       textColor="#ff0000"
       :textSize="15"
       class="input2"
     />
     <qt-input-view
       :strokeWidth="3"
       :focusStrokeWidth="5"
       strokeColor="#0c61c9"
       focusStrokeColor="#ff0000"
       hintText="边框属性"
       hintColor="#0c61c9"
       textColor="#ff0000"
       class="input2"
     />
   </div>


   <text-view
     text="输入类型:"
     :fontSize="50"
     class="t-view"
   />
   <div class="div-wrap">
     <qt-input-view
       hintText="text"
       EType="text"
       class="input2"
     />
     <qt-input-view
       hintText="number"
       EType="number"
       class="input2"
     />
     <qt-input-view
       hintText="password"
       EType="password"
       class="input2"
     />
   </div>

   <text-view
     text="suffixIcon:"
     :fontSize="50"
     class="t-view"
   />
   <div class="div-wrap">
     <qt-input-view
       hintText="psd"
       suffixIcon="psd"
       class="input3"
     />
     <qt-input-view
       hintText="psdvis"
       suffixIcon="psdvis"
       class="input3"
     />
     <qt-input-view
       hintText="error"
       suffixIcon="error"
       class="input3"
     />
     <qt-input-view
       hintText="succ"
       suffixIcon="succ"
       class="input3"
     />
   </div>

   <text-view
     text="禁用:"
     :fontSize="50"
     class="t-view"
   />
   <div class="div-wrap">
     <qt-input-view
       hintText="禁用"
       class="input4"
       :disable="true"
     />
     <s-text-button text="按钮" />
   </div>

   <text-view
     text="mutiline属性:"
     :fontSize="50"
     class="t-view"
   />
   <div class="div-wrap">
     <qt-input-view
       hintText="换行"
       :mutiline="true"
       class="input2"
     />
   </div>

 </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { QTIInputView } from 'quicktvui'
import {useESToast} from "@extscreen/es3-core";
</script>
<style scoped>
.t-view {
  width: 1900px;
  height: 60px;
}
.div-wrap {
  width: 1920px;
  height: 80px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.input1 {
  margin-right: 20px;
}
.input2 {
  width: 500px;
  height: 80px;
  margin-right: 20px;
}
.input3 {
  width: 300px;
  height: 60px;
  margin-right: 20px;
}
.input4 {
  width: 450px;
  height: 60px;
  margin-right: 20px;
}
</style>
