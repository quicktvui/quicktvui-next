<template>
  <div>
    <qt-input-view
      hintText="请输入"
      :textSize="35"
      @onTextChange="onTextChange"
      @onFocusChanged="onFocusChanged"
      class="input"
    />
  </div>
</template>
<script setup lang="ts">
const onTextChange = (e: any) => {
  console.log(e, e.nativeParams.text)
}

const onFocusChanged = (e: any) => {
  console.log(e.nativeParams.isFocused)
}
</script>
<style scoped>
.input {
  width: 450px;
  height: 60px;
}
</style>
