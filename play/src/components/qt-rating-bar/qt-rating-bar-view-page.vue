<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 800px;" :clipChildren="false">
      <qt-column class="column_root">
        <text-view
          text="评价图标1"
          :fontSize="30"
          class="t-view"
        />
        <qt-rating-bar
          :focusable="true"
          :enableFocusBorder="true"
          ref="ratingRef"
          :icon="startHeartFull"
          :voidIcon="startHeartEmpty"
          :starCount="5"
          :starSize="40"
          :scoreNum="2"
          :starDistance="20"
          :verticalMargin="10"
          :horizontalMargin="10"
          :clipChildren="true"
          class="item-rating-view-css" />

        <text-view
          text="评价图标2"
          :fontSize="30"
          class="t-view"
        />
        <qt-rating-bar
          :focusable="true"
          :enableFocusBorder="true"
          ref="ratingBarTwoRef"
          :icon="startOneFull"
          :voidIcon="startOneEmpty"
          :starCount="5"
          :scoreNum="3"
          :starSize="45"
          :starDistance="20"
          :verticalMargin="10"
          :horizontalMargin="10"
          :clipChildren="false"
          class="item-rating-big-view-css" />

        <text-view
          text="评价内嵌文字"
          :fontSize="30"
          class="t-view"
        />
        <qt-view class="item-rating-view-css-root1" eventClick eventFocus :focusable="false" :clipChildren="false">
          <qt-rating-bar
            :focusable="true"
            :enableFocusBorder="true"
            ref="ratingBarThreeRef"
            :icon="startFull"
            :voidIcon="startEmpty"
            :starCount="5"
            :scoreNum="4"
            :starSize="50"
            :starDistance="20"
            :verticalMargin="10"
            :horizontalMargin="10"
            :clipChildren="true"
            @onScoreChanged="onScoreChanged1"
            class="item-rating-view-css" />
            <s-text-view class="item-rating-child-textview" :text="'当前积分：' + currentScore" />
        </qt-view>

        <qt-view class="item-rating-view-css-root" eventClick eventFocus :focusable="false" :clipChildren="false">
          <text-view
            text="半角 父标签是div"
            :fontSize="20"
            class="t-view-child"
          />
          <qt-rating-bar
            eventClick eventFocus
            :enableFocusBorder="true"
            :autofocus="true"
            :focusable="true"
            :clipChildren="false"
            ref="ratingBarFourRef"
            :icon="startFull"
            :voidIcon="startEmpty"
            :allowHalf="true"
            :scoreNum="2.5"
            :starCount="5"
            :starSize="30"
            :starDistance="10"
            :verticalMargin="10"
            :horizontalMargin="10"
            @onScoreChanged="onScoreChanged"
            class="item-rating-view-css-four">
          </qt-rating-bar>

        </qt-view>
        <text-view
          text="展示评分-不可上焦"
          :fontSize="30"
          class="t-view"
        />
        <qt-rating-bar
          ref="ratingBarThreeRef"
          :icon="startFull"
          :voidIcon="startEmpty"
          :starCount="5"
          :scoreNum="4"
          :starSize="50"
          :starDistance="20"
          :clipChildren="true"
          class="item-rating-view-css" />
      </qt-column>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ESLogLevel, useESLog, useESToast } from "@extscreen/es3-core";

import startEmpty from "../../assets/ic_star_empty.png";
import startFull from "../../assets/ic_star_full.png";

import startHeartEmpty from "../../assets/ic_start_heart_empty.png";
import startHeartFull from "../../assets/ic_start_heart_full.png";

import startOneEmpty from "../../assets/ic_start_one_empty.png";
import startOneFull from "../../assets/ic_start_one_full.png";

import startTwoEmpty from "../../assets/ic_start_two_empty.png";
import startTwoFull from "../../assets/ic_start_two_full.png";

import { ref } from "vue";
import { QtRatingBarAPI } from "quicktvui";

const TAG = "RadioGroup";

export default defineComponent({
  name: "评价组件",
  setup: function() {
    const log = useESLog();
    const toast = useESToast();
    const ratingRef = ref<QtRatingBarAPI>();
    const currentScore = ref<string>('好')

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>");
      }
      setTimeout(() => {
        toast.showToast('执行了')
        ratingRef?.value?.setStarMark('3');
      }, 1500);
    };

    const onESResume = () => {
      log.e(TAG, "-------onESResume---------->>>>>");
    };

    const onESPause = () => {
      log.e(TAG, "-------onESPause---------->>>>>");
    };
    const onESDestroy = () => {
      log.e(TAG, "-------onESDestroy---------->>>>>");
    };

    function onScoreChanged(scoreNum: string): void {
      toast.showToast("当前评分---->" + scoreNum);
      console.log("值----------------", scoreNum);
      console.log("值----------------", scoreNum);
      console.log("值----------------", JSON.stringify(scoreNum));
    }

    function onScoreChanged1(scoreNum: string): void {
      toast.showToast("当前评分---->" + scoreNum);
      switch (scoreNum) {
        case '1.0':{
          currentScore.value= "极差"
          break
        }
        case '2.0':{
          currentScore.value= "差"
          break
        }
        case '3.0':{
          currentScore.value= "中"
          break
        }
        case '4.0':{
          currentScore.value= "好"
          break
        }
        case '5.0':{
          currentScore.value= "很好"
          break
        }
      }
    }

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      startEmpty,
      startFull,
      startHeartEmpty,
      startHeartFull,
      startOneEmpty,
      startOneFull,
      startTwoEmpty,
      startTwoFull,
      onScoreChanged,
      onScoreChanged1,
      ratingRef,
      currentScore
    };
  }
});
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
  margin-top: 10px;
  margin-bottom: 10px;
}


.item-rating-view-css-root {
  width: 400px;
  height: 70px;
  background-color: lightsteelblue;
  margin-top: 20px;
  margin-bottom: 20px;
}

.item-rating-view-css-root1 {
  width: 700px;
  height: 80px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
}

.item-rating-view-css-four {
  width: 300px;
  height: 70px;
  margin-left: 100px;
  background-color: transparent;
  position: absolute;
}

.item-rating-big-view-css {
  width: 400px;
  height: 100px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 20px;
}

.t-view {
  width: 1900px;
  height: 40px;
}


.t-view-child {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 99;
  color: #0a0a0a;
}

.item-rating-child-textview {
  position: absolute;
  margin-top: 10px;
  left: 400px;
  margin-left: 400px;
}

</style>
