---
title: Animation
lang: zh-CN
---

# 使用方法

## 第一步、注册动画组件

```vue

<qt-animation
  ref='animationRef'
  class='animation-view-css'>
<!-- 包裹需要执行动画的vue组件-->
<div class='animation-inner-view-class' />
</qt-animation>
```

## 第二步、创建动画

创建单个动画和动画合集都需要自定义`不重复的id`，用来后续执行动画的各种操作。

```ts
animationRef.value?.animator(                                //创建属性值的动画
  "1",                                                       //自定义id
  QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,        //动画属性值类型
  QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,  //动画属性类型
  ["0", "1"],                                                //属性值
  1000,                                                      //动画执行时间
  -1,                                                        //动画重复执行模式
  0,                                                         //动画重复执行次数
  false,                                                     //是否监听动画执行状态变化
  false,                                                     //是否监听动画执行属性值变化
  {                                                          //插值器参数对象
    type: QTAnimationInterpolatorType.QT_ACCELERATE_INTERPOLATOR,
  }
);
```

## 第三步、执行动画

### 开始动画

参数为创建的动画的`id`

`animationViewRef.value?.start("1");`

### 延迟开始动画

参数为创建的动画的`id`

`animationViewRef.value?.startDelay("1", 2000);`

### 暂停动画

参数为创建的动画的`id`

`animationViewRef.value?.pause("1");`

### 恢复动画

参数为创建的动画的`id`

`animationViewRef.value?.resume("1");`

### 取消动画

参数为创建的动画的`id`

`animationViewRef.value?.cancel("1");`

### 翻转动画

参数为创建的动画的`id`

`animationViewRef.value?.reverse("1");`

### 重置所有动画

`animationViewRef.value?.reset();`

:::demo ## 完整示例

component/animation/basic

:::
