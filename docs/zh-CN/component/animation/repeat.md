---
title: Animation
lang: zh-CN
---

# 重复模式

## 属性动画重复模式

`Defines what this animation should do when it reaches the end. This setting is applied only when the repeat count is either greater than 0 or INFINITE. Defaults to RESTART.`

* `restart`
* `reverse`
* `infinite`

属性动画重复模式`QTAnimationRepeatMode`的值定义：

* `QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_RESTART`
* `QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_REVERSE`
* `QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_INFINITE`

## 属性动画重复次数：

`Sets how many times the animation should be repeated. If the repeat count is 0, the animation is never repeated. If the repeat count is greater than 0 or INFINITE, the repeat mode will be taken into account. The repeat count is 0 by default.`

示例代码

```js
 animationViewRef.value?.objectAnimator(
  "2",//自定义id
  QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
  QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
  [0, 300, 0, -300, 0],
  1000,
  QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_REVERSE,
  2,
  false,
  false,
);
```

:::demo ## 完整示例

component/animation/repeat

:::
