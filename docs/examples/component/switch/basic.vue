<template>
  <div>
    <qt-switch
      ref="switchRef"
      class="qt-switch-class"
      :modelValue="true"
      activeColor="#F85B14"
      inactiveColor="#292929"
      sliderColor="#00FF00"
      inactiveBorderColor="#959595"
      :borderSize="3"
      @onSwitchChange="onSwitchChange"
    />
  </div>
</template>
<script setup lang="ts">
const onSwitchChange = (e: any) => {
  console.log(e, e.nativeParams)
}
</script>
<style scoped>
.qt-switch-class {
  width: 100px;
  height: 66px;
}
</style>
