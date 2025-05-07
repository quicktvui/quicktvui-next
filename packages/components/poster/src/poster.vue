<template>
  <qt-item-view
    ref="viewRef"
    :type="type"
    layout="${layout}"
    flexStyle="${style}"
    focusScale="${focus.scale}"
    :focusable="true"
    eventClick
    eventFocus
    name="poster"
    :class="ns.b()"
    itemShowShimmer="${shimmer.enable}"
    hideShadow="${shadow.enable}"
    shimmerSize="${size}"
  >
    <!--封面-->
    <img
      :class="ns.e('img')"
      :duplicateParentState="true"
      :postDelay="300"
      :focusable="false"
      enableFocusBorder="${focus.border}"
      flexStyle="${image.style}"
      :style="{ borderRadius: `${borderRadius}px` }"
      :src="image"
    />
    <!-- -->
    <text-view
      :class="ns.e('score')"
      :duplicateParentState="true"
      :focusable="false"
      :clipChildren="false"
      flexStyle="${score.style}"
      textSize="${score.style.fontSize}"
      :ellipsizeMode="2"
      :lines="1"
      gravity="center"
      :postDelay="350"
      autoWidth
      text="${score.text}"
    />

    <!--   焦点选中时的标题 -->
    <qt-poster-focus-title
      :focusable="false"
      :borderRadius="borderRadius"
      showOnState="focused"
      :bgColor="focusBgColor"
      :titleColor="focusTitleColor"
      :subTitleColor="focusSubTitleColor"
    />

    <qt-view
      style="
        flex-direction: column;
        background-color: transparent;
        z-index: 999;
      "
      :duplicateParentState="true"
      :focusable="false"
      flexStyle="${titleStyle}"
      showOnState="normal"
    >
      <!--  浮动标题 -->
      <qt-view
        flexStyle="${floatTitle.style}"
        :class="[ns.e('title')]"
        :gradientBackground="{
          colors: floatTitleBgColor,
          cornerRadii4: [0, 0, borderRadius, borderRadius],
          orientation: 4,
        }"
        :duplicateParentState="true"
        :focusable="false"
        showIf="${floatTitle.enable}"
      >
        <text-view
          :duplicateParentState="true"
          :focusable="false"
          :textSize="26"
          :ellipsizeMode="2"
          enablePostTask
          :postDelay="200"
          :lines="1"
          gravity="left"
          style="z-index: 999; height: 50px"
          flexStyle="${floatTitle.style}"
          text="${floatTitle.text}"
        />
      </qt-view>

      <!--  主标题-->
      <text-view
        :duplicateParentState="true"
        :focusable="false"
        :textSize="30"
        :ellipsizeMode="2"
        :lines="1"
        :postDelay="200"
        gravity="left"
        :paddingRect="[16, 8, 0, 0]"
        gradientBackground="${title.background}"
        style="z-index: 999; height: 60px"
        flexStyle="${title.style}"
        text="${title.text}"
        showIf="${title.enable}"
      />
    </qt-view>
    <qt-view
      flexStyle="${ripple.style}"
      :class="ns.e('ripple')"
      showOnState="focused"
      :focusable="false"
      :clipChildren="false"
    >
      <qt-ripple-view
        :class="ns.em('ripple', 'view')"
        :delayLoad="800"
        :focusable="false"
        :duplicateParentState="true"
        :color="rippleColor"
        isShowRipple="${ripple.enable}"
        rippleVisible="invisible"
      />

      <img
        :src="ripple"
        :class="ns.em('ripple', 'img')"
        :focusable="false"
        :duplicateParentState="true"
        showIf="${ripple.enable==true}"
        :delayLoad="800"
      />
    </qt-view>

    <qt-poster-corner-title
      showIf="${corner.showCornerRight==true}"
      :focusable="false"
      flexStyle="${corner.style}"
      mode="right"
    />
    <qt-poster-corner-title
      showIf="${corner.showCornerLeft==true}"
      :focusable="false"
      flexStyle="${corner.style}"
      mode="left"
    />
    <slot />
  </qt-item-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { posterProps } from './poster-props'
import QtPosterFocusTitle from './poster-focus-title.vue'
import QtPosterCornerTitle from './poster-corner-title.vue'

export default defineComponent({
  name: 'QtPoster',
  components: {
    'qt-poster-corner-title': QtPosterCornerTitle,
    'qt-poster-focus-title': QtPosterFocusTitle,
  },
  props: posterProps,
  emits: ['focus', 'click'],
  setup(props, context) {
    const viewRef = ref()

    const ns = useNamespace('poster')
    const placeholderImg = ref<string>('${placeholderImg.src}')
    const image = ref<string>('${image.src}')
    const ripple = ref<string>('${ripple.src}')

    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
      placeholderImg,
      image,
      ripple,
    }
  },
})
</script>
