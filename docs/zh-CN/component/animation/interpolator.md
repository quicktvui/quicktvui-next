---
title: Animation
lang: zh-CN
---

# 插值器

## 属性动画动画插值器`QTAnimationInterpolatorType`分类

* `QTAnimationInterpolatorType.QT_ACCELERATE_DECELERATE_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_ACCELERATE_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_ANTICIPATE_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_ANTICIPATE_OVERSHOOT_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_BOUNCE_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_CYCLE_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_DECELERATE_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_LINEAR_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_OVERSHOOT_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_FAST_OUT_LINEAR_IN_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_FAST_OUT_SLOW_IN_INTERPOLATOR`
* `QTAnimationInterpolatorType.QT_PATH_INTERPOLATOR`

***`QTAnimationInterpolator`类型声明如下：***

```ts
export interface QTAnimationInterpolator {
  type: QTAnimationInterpolatorType;
  params: Array<number>
}
```



## 示例代码

```js
animationRef.value?.objectAnimator3(
  "AccelerateInterpolator",//自定义id
  QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
  QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
  "0",
  "500",
  '0',
  1500,
  -1,
  0,
  false,
  false,
  //插值器参数对象
  {
    type: QTAnimationInterpolatorType.QT_LINEAR_INTERPOLATOR,
    params: []
  },
);
```

:::demo ## 完整示例

component/animation/interpolator

:::
