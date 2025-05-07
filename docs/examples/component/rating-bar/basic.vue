<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div
      class="es-sdk-content-column-css"
      style="width: 1920px; height: 800px"
      :clipChildren="false"
    >
      <qt-column class="column_root">
        <qt-rating-bar
          ref="ratingBarThreeRef"
          :focusable="true"
          :enableFocusBorder="true"
          :icon="startFull"
          :voidIcon="startEmpty"
          :starCount="5"
          :scoreNum="4"
          :starSize="50"
          :starDistance="20"
          :verticalMargin="10"
          :horizontalMargin="10"
          :clipChildren="true"
          class="item-rating-view-css"
        />
        <text-view text="展示评分-半角" :fontSize="30" class="t-view" />
        <qt-view
          class="item-rating-view-css-root"
          eventClick
          eventFocus
          :focusable="false"
          :clipChildren="false"
        >
          <qt-rating-bar
            ref="ratingBarFourRef"
            eventClick
            eventFocus
            :enableFocusBorder="true"
            :autofocus="true"
            :focusable="true"
            :clipChildren="false"
            :icon="startFull"
            :voidIcon="startEmpty"
            allowHalf
            :scoreNum="2.5"
            :starCount="5"
            :starSize="30"
            :starDistance="10"
            :verticalMargin="10"
            :horizontalMargin="10"
            class="item-rating-view-css-four"
            @onScoreChanged="onScoreChanged"
          />
        </qt-view>
        <text-view text="展示评分-不可上焦" :fontSize="30" class="t-view" />
        <qt-rating-bar
          ref="ratingBarThreeRef"
          :icon="startFull"
          :voidIcon="startEmpty"
          :starCount="5"
          :scoreNum="4"
          :starSize="50"
          :starDistance="20"
          :clipChildren="true"
          class="item-rating-view-css"
        />
      </qt-column>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog, useESToast } from '@extscreen/es3-core'

import startEmpty from '../../assets/ic_star_empty.png'
import startFull from '../../assets/ic_star_full.png'

import type { QtRatingBarAPI } from 'quicktvui'

const TAG = 'RadioGroup'

export default defineComponent({
  name: '评价组件',
  setup() {
    const log = useESLog()
    const toast = useESToast()
    const ratingRef = ref<QtRatingBarAPI>()

    const onESCreate = (params) => {
      setTimeout(() => {
        ratingRef?.value?.setStarMark('3')
      }, 1500)
    }
    function onScoreChanged(scoreNum: string): void {
      console.log('评价分值----------------', scoreNum)
    }

    return {
      onESCreate,
      startEmpty,
      startFull,
      ratingRef,
      onScoreChanged,
    }
  },
})
</script>

<style>
.column_root {
  position: absolute;
  left: 200px;
}

.item-rating-view-css {
  width: 350px;
  height: 70px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
}

.item-rating-view-css-root {
  width: 300px;
  height: 70px;
  background-color: lightsteelblue;
  margin-top: 20px;
  margin-bottom: 20px;
}

.item-rating-view-css-four {
  width: 300px;
  height: 70px;
  background-color: transparent;
  position: absolute;
}

.item-rating-big-view-css {
  width: 500px;
  height: 100px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
}

.t-view {
  width: 1900px;
  height: 40px;
}
</style>
