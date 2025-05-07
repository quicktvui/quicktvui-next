<template>
  <div>
    <text-view
      text="文字左右间距"
      :fontSize="50"
      class="t-view"
    />
    <div class="div-wrap">
      <qt-input-view
        hintText="距左侧50"
        :leftPadding="50"
        style="margin-right: 20px;"
      />
      <qt-input-view
        hintText="距右侧50"
        :rightPadding="50"
        style="margin-right: 20px;"
      />
    </div>

    <text-view
      text="文字长度限制"
      :fontSize="50"
      class="t-view"
    />
    <div class="div-wrap">
      <qt-input-view
        hintText="5字符"
        :maxlength="5"
        style="margin-right: 20px;"
      />
      <qt-input-view
        hintText="10字符"
        :maxlength="10"
        style="margin-right: 20px;"
      />
    </div>

    <text-view
      text="文字起始位置"
      :fontSize="50"
      class="t-view"
    />
    <div class="div-wrap2">
      <qt-input-view
        hintText="top"
        gravity="top"
        :mutiline="true"
        style="margin-right: 20px; width: 500px; height: 300px;"
      />
      <qt-input-view
        hintText="center"
        gravity="center"
        :mutiline="true"
        class="input"
      />
      <qt-input-view
        hintText="right"
        gravity="right"
        :mutiline="true"
        class="input"
      />
    </div>

  </div>
</template>
<script lang="ts" setup>

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
.div-wrap2 {
  width: 1920px;
  height: 320px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.input {
  width: 500px;
  height: 300px;
  margin-right: 20px;
}
</style>
