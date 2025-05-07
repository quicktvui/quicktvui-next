<template>
  <div
    :class="ns.e('text-item')"
    :focusable="true"
    :focusScale="1"
    :style="{ width: `${itemWidth}px`, height: `${itemHeight}px` }"
    :gradientBackground="gradientBackground"
  >
    <div
      :class="ns.em('text-item', 'background')"
      :style="{ width: `${itemWidth}px`, height: `${itemHeight}px` }"
      :duplicateParentState="true"
      showOnState="focused"
      :focusable="false"
      :gradientBackground="gradientFocusBackground"
    />
    <div
      :class="ns.em('text-item', 'container')"
      :style="{ width: `${itemWidth}px`, height: `${itemHeight}px` }"
      style="
        position: absolute;
        align-items: center;
        background-color: transparent;
      "
      :duplicateParentState="true"
    >
      <div
        :style="{
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: `${itemWidth}px`,
          height: `${itemHeight}px`,
          backgroundColor: 'transparent',
        }"
        showOnState="selected"
        :duplicateParentState="true"
      >
        <qt-play-mark
          :duplicateParentState="true"
          flexStyle="${normalMarkStyle}"
          style="
            width: 24px;
            height: 25px;
            position: absolute;
            left: 20px;
            margin-right: 10px;
          "
          :markColor="markColor"
        />
        <qt-play-mark
          :duplicateParentState="true"
          flexStyle="${vipMarkStyle}"
          style="
            width: 24px;
            height: 25px;
            position: absolute;
            left: 20px;
            margin-right: 10px;
          "
          :markColor="markVipColor"
        />
      </div>

      <text-view
        :duplicateParentState="true"
        :maxLines="1"
        :ellipsizeMode="2"
        flexStyle="${normalTitleStyle}"
        :fontSize="30"
        :class="ns.em('text-item', 'text')"
        gravity="centerVertical"
        :style="{
          color: textColors.color,
          focusColor: textColors.focusColor,
          selectColor: textColors.selectColor,
        }"
        text="${title}"
      />

      <text-view
        :duplicateParentState="true"
        :maxLines="1"
        :ellipsizeMode="2"
        flexStyle="${vipTitleStyle}"
        :fontSize="30"
        :class="ns.em('text-item', 'text-vip')"
        gravity="centerVertical"
        :style="{
          color: textVipColors.color,
          focusColor: textVipColors.focusColor,
          selectColor: textVipColors.selectColor,
        }"
        text="${title}"
      />
    </div>

    <div
      :class="ns.em('text-item', 'vip')"
      showIf="${vip.enable==true}"
      :gradientBackground="iconGradientBackground"
    >
      <text-view
        :duplicateParentState="true"
        :class="ns.em('text-item', 'vip-text')"
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
  name: 'MediaSeriesTextItem',
  props: seriesItemProps,
  setup(props, context) {
    const ns = useNamespace('media-series')
    return {
      ns,
    }
  },
})
</script>
