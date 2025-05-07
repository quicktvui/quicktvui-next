<template>
  <div
    flexStyle="${titleFocusStyle}"
    :class="[ns.e('focus')]"
    autoHeight
    :focusable="false"
  >
    <!-- 浮动-->
    <text-view
      :duplicateParentState="true"
      :focusable="false"
      :clipChildren="false"
      :font-size="26"
      :ellipsizeMode="2"
      :lines="1"
      :paddingRect="[16, 18, 0, 0]"
      gradientBackground="${floatTitle.background}"
      style="height: 64px; color: #ffffff"
      flexStyle="${floatTitle.style}"
      text="${floatTitle}"
      showIf="${floatTitle.enable}"
      gravity="left"
      :postDelay="250"
    />
    <div
      :class="[ns.em('focus', 'background')]"
      :style="{
        borderBottomLeftRadius: `${borderRadius}px`,
        borderBottomRightRadius: `${borderRadius}px`,
      }"
      :duplicateParentState="true"
      :focusable="false"
      :gradientBackground="bgColor"
      showIf="${focusTitle.enable}"
    >
      <!-- 主标题 -->
      <text-view
        :duplicateParentState="true"
        :focusable="false"
        :font-size="30"
        :ellipsizeMode="2"
        autoHeight
        :maxLines="2"
        gravity="left"
        :paddingRect="[16, 8, 12, 8]"
        :style="{ backgroundColor: 'transparent', color: `${titleColor}` }"
        flexStyle="${focusTitle.style}"
        text="${focusTitle.text}"
      />
      <!-- 副标题 -->
      <text-view
        :duplicateParentState="true"
        :focusable="false"
        :font-size="24"
        :ellipsizeMode="2"
        :lines="1"
        autoHeight
        gravity="left|top"
        :paddingRect="[16, 0, 0, 16]"
        :style="{ color: `${subTitleColor}`, backgroundColor: 'transparent' }"
        flexStyle="${subTitle.style}"
        text="${subTitle.text}"
        visibility="${subTitle}"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@quicktvui/hooks'
import { posterFocusTitleProps } from './poster-props'

defineOptions({
  name: 'PosterFocusTitle',
})
const props = defineProps(posterFocusTitleProps)
const ns = useNamespace('poster')
</script>
