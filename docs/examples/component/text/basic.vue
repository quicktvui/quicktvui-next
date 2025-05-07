<template>
  <qt-text class="qt-text" text="文本标签" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
//注意：文本标签必须设置宽高
export default defineComponent({
  setup() {
    // ...
  },
})
</script>
<style lang="css" scoped>
.qt-text {
  width: 100px;
  height: 50px;
  font-size: 88px;
  color: aqua;
}
</style>
