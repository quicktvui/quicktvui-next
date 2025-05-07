<template>
  <div
    :class="ns.e('number-item')"
    :focusable="true"
    :focusScale="1"
    :gradientBackground="gradientBackground"
  >
    <div
      :class="ns.em('number-item', 'background')"
      :duplicateParentState="true"
      showOnState="focused"
      :focusable="false"
      :gradientBackground="gradientFocusBackground"
    />
    <!-- 文字-->
    <div
      :class="ns.em('number-item', 'text-root')"
      :duplicateParentState="true"
    >
      <div
        style="
          position: absolute;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 160px;
          height: 80px;
          background-color: transparent;
        "
        showOnState="selected"
        :duplicateParentState="true"
      >
        <qt-play-mark
          :duplicateParentState="true"
          flexStyle="${normalMarkStyle}"
          style="width: 24px; height: 25px; position: absolute; left: 20px"
          :markColor="markColor"
        />
        <qt-play-mark
          :duplicateParentState="true"
          flexStyle="${vipMarkStyle}"
          style="width: 24px; height: 25px; position: absolute; left: 20px"
          :markColor="markVipColor"
        />
      </div>
      <text-view
        :duplicateParentState="true"
        :fontSize="36"
        gravity="center"
        autoWidth
        :lines="1"
        flexStyle="${normalTitleStyle}"
        :class="ns.em('number-item', 'text')"
        :style="{
          color: textColors.color,
          focusColor: textColors.focusColor,
          selectColor: textColors.selectColor,
        }"
        text="${title}"
      />
      <text-view
        :duplicateParentState="true"
        :fontSize="36"
        gravity="center"
        flexStyle="${vipTitleStyle}"
        autoWidth
        :class="ns.em('number-item', 'vip-text')"
        :style="{
          color: textVipColors.color,
          focusColor: textVipColors.focusColor,
          selectColor: textVipColors.selectColor,
        }"
        :lines="1"
        text="${title}"
      />
    </div>

    <!-- vip角标 -->
    <div
      :class="ns.em('number-item', 'vip-root')"
      showIf="${vip.enable==true}"
      :gradientBackground="iconGradientBackground"
    >
      <text-view
        :duplicateParentState="true"
        :class="ns.em('number-item', 'vip-root-text')"
        :fontSize="20"
        gravity="center"
        text="${vip.text}"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '../../../../hooks'
import { seriesItemProps } from '../series-props'

export default defineComponent({
  name: 'MediaSeriesNumberItem',
  props: seriesItemProps,
  setup(props, context) {
    const ns = useNamespace('media-series')
    return {
      ns,
    }
  },
})
</script>
