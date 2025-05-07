---
title: Animation
lang: zh-CN
---

# 动画事件监听

## 一、监听动画执行状态

### 第1步：创建动画的时候需要设置是否监听动画状态变化

```js
animationRef.value?.objectAnimator2(
  "1",//自定义id
  QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
  QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
  "0",
  "1",
  1000,
  -1,
  0,
  true,//监听动画执行状态
  false,
  null,
);
```

### 第2步： `<qt-animation>`标签上监听动画执行状态

* `onAnimationStart`：动画开始
* `onAnimationEnd`：动画结束
* `onAnimationCancel`：动画取消
* `onAnimationRepeat`：动画重复执行
* `onAnimationPause`：动画暂停
* `onAnimationResume`：动画恢复

```vue

<template>
  <qt-animation
    class='animation-view-css'
    @onAnimationCancel='onAnimationCancel'
    @onAnimationEnd='onAnimationEnd'
    @onAnimationStart='onAnimationStart'
    @onAnimationRepeat='onAnimationRepeat'
    @onAnimationPause='onAnimationPause'
    @onAnimationResume='onAnimationResume'>
    <div class='animation-inner-view-css' />
  </qt-animation>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import { ESLogLevel, useESLog } from "@extscreen/es3-core";

const TAG = 'Animation'

export default defineComponent({
  setup() {

    const log = useESLog()

    function onAnimationCancel(id) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onAnimationCancel------->>>>', id)
      }
    }

    function onAnimationEnd(id, isReverse) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onAnimationEnd------->>>>', id, isReverse)
      }
    }

    function onAnimationRepeat(id) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onAnimationRepeat------->>>>', id)
      }
    }

    function onAnimationStart(id, isReverse) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onAnimationStart------->>>>', id, isReverse)
      }
    }

    function onAnimationPause(id) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onAnimationPause------->>>>', id)
      }
    }

    function onAnimationResume(id) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onAnimationResume------->>>>', id)
      }
    }

    return {
      onAnimationCancel,
      onAnimationEnd,
      onAnimationRepeat,
      onAnimationStart,
      onAnimationPause,
      onAnimationResume,
    }
  },
});

</script>
```

## 二、监听动画属性值变化

### 第1步： 创建动画的时候需要设置是否监听动画属性值变化

```js
animationViewRef.value?.objectAnimator2(
  "1",//自定义id
  QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
  QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
  "0",
  "1",
  1000,
  -1,
  0,
  false,
  true,//监听动画属性值变化
  null,
);
```

### 第2步： `<qt-animation>`标签上监听动画属性值变化

* `onAnimationUpdate(id, value)`：`id`为动画的id，`value`为动画当前时刻的属性值

```vue

<template>
  <qt-animation
    class='animation-view-css'
    @onAnimationUpdate='onAnimationUpdate'>
    <div class='animation-inner-view-css' />
  </qt-animation>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import { ESLogLevel, useESLog } from "@extscreen/es3-core";

const TAG = 'Animation'

export default defineComponent({
  setup() {

    const log = useESLog()

    function onAnimationUpdate(id, value) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onAnimationUpdate------->>>>', id, value)
      }
    }

    return {
      onAnimationUpdate,
    }
  },
});

</script>
```

:::demo ## 完整示例

component/animation/listener

:::
