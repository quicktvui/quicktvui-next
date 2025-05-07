<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarRef"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        :seekBarMode='1'
        :progressHeight='20'
        :gravity='2'
        :progressRadius='100'
        :progress='20'
        focusScale="1.1"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTISeekBar} from "quicktvui";

export default defineComponent({
  name: '进度条（属性）',
  emits:[],
  setup() {

    const seekBarRef = ref<QTISeekBar>()

    return {
      seekBarRef,
    }
  },
});

</script>

<style>
.es-range-seek-bar-css {
  width: 1000px;
  height: 200px;
  background-color: darkgray;
}

.es-vertical-range-seek-bar-css {
  width: 500px;
  height: 800px;
  background-color: darkgray;
}

</style>
