---
title: Animation
lang: zh-CN
---

# 使用属性

## 第一步、注册动画组件

```vue

<qt-animation
  ref='animationRef'
  class='animation-view-css'
  :animator='animator'>
<!-- 包裹需要执行动画的vue组件-->
<div class='animation-inner-view-class' />
</qt-animation>
```

## 第二步、创建动画

```ts
 animator.value = {
  type: QTAnimationType.ALPHA,
  values: [0, 1],
  duration: 1000,
}
```

## 第三步、执行动画

### 开始动画

`animationViewRef.value?.start();`

### 延迟开始动画

`animationViewRef.value?.startDelay(2000);`

### 暂停动画

`animationViewRef.value?.pause();`

### 恢复动画

`animationViewRef.value?.resume();`

### 取消动画

`animationViewRef.value?.cancel();`

### 翻转动画

`animationViewRef.value?.reverse();`

### 重置所有动画

`animationViewRef.value?.reset();`


## 完整示例：使用属性创建动画

:::demo

component/animation/animator-props

:::

## 完整示例：使用属性创建动画合集

:::demo

component/animation/animators-props

:::
