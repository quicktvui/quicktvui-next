---
title: Animation
lang: zh-CN
---

# 简介

## 一、 动画是执行的单一动画，动画合集是多个动画组成的执行合集。

## 二、 动画和动画合集通过自定义的 动画id 执行所有的操作。

## 三、 动画类型：

* `alpha`透明度动画
* `scale`变形动画
* `translation`平移动画
* `rotation`旋转动画

***动画属性类型`QTAnimationPropertyName`的值定义***

* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_X`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_Y`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_Z`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_X`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_Y`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_Z`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y`
* `QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z`

## 四、 动画的操作：

* 创建动画
* 开始动画
* 暂停动画
* 恢复动画
* 取消动画
* 翻转动画

## 五、 动画的值类型`QTAnimationValueType`：

* `QT_ANIMATION_VALUE_TYPE_INT = "ofInt"`
* `QT_ANIMATION_VALUE_TYPE_FLOAT = "ofFloat"`

## API

### Events

| Name           | Description                          | Type                                                                |
| ----------------- | --------------------------------- | ------------------------------------------------------------------- |
| onAnimationEnd    | 动画结束事件                         | ^[Function]`(id: QTAnimatorId, isReverse: boolean) => void`                               |
| onAnimationCancel | 动画取消事件                         | ^[Function]`(id: QTAnimatorId) => void`                               |
| onAnimationStart  | 动画开始事件                         | ^[Function]`(id: QTAnimatorId, isReverse: boolean) => void`                               |
| onAnimationRepeat | 动画重复执行事件                      | ^[Function]`(id: QTAnimatorId) => void`                               |
| onAnimationPause  | 动画暂停事件                         | ^[Function]`(id: QTAnimatorId) => void`                               |
| onAnimationResume | 动画恢复事件                         | ^[Function]`(id: QTAnimatorId) => void`                               |
| onAnimationUpdate | 动画更新事件                         | ^[Function]`(id: QTAnimatorId, value: string) => void`                               |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | 需要执行动画的组件 |

### Exposes

| Name              | Description       | Type                                          |
| ----------------- | ----------------- | --------------------------------------------- |
| setPivotX    | 设置x轴方向的旋转点        | ^[Function]`(pivotX: number) => void`     |
| setPivotY    | 设置y轴方向的旋转点        | ^[Function]`(pivotY: number) => void`     |
| resetPivot    | 重置旋转点        | ^[Function]`() => void`     |
| resetAnimators    | 重置所有动画        | ^[Function]`() => void`     |
| animatorSet    | 创建动画集合        | ^[Function]`(animatorId: QTAnimatorId, duration: number, listenAnimator: boolean) => void`     |
| startAnimator    | 开始动画        | ^[Function]`(animatorId: QTAnimatorId) => void`     |
| startAnimatorDelay    | 延迟开始动画        | ^[Function]`(animatorId: QTAnimatorId, delay: number) => void`     |
| pauseAnimator    | 暂停动画        | ^[Function]`(animatorId: QTAnimatorId) => void`     |
| resumeAnimator    | 恢复动画        | ^[Function]`(animatorId: QTAnimatorId) => void`     |
| cancelAnimator    | 取消动画        | ^[Function]`(animatorId: QTAnimatorId) => void`     |
| reverseAnimator    | 逆转动画        | ^[Function]`(animatorId: QTAnimatorId) => void`     |
| play    | 播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) => void`     |
| playWith    | 同时播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) => void`     |
| playBefore    | 在之前播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) => void`     |
| playAfter    | 在之后播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) => void`     |
| playAfterDelay    | 在之后延迟播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) => void`     |
| playSequentially1    | 顺序播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) => void`     |
| playSequentially2    | 顺序播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId) => void`     |
| playSequentially3    | 顺序播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId) => void`     |
| playSequentially4    | 顺序播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId) => void`     |
| playSequentially5    | 顺序播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId, animatorId5: QTAnimatorId) => void`     |
| playTogether1    | 同时播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId) => void`     |
| playTogether2    | 同时播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId) => void`     |
| playTogether3    | 同时播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId) => void`     |
| playTogether4    | 同时播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId) => void`     |
| playTogether5    | 同时播放动画        | ^[Function]`(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId, animatorId5: QTAnimatorId) => void`     |
| objectAnimator1    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator2    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator3    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator4    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator5    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, value5: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator6    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator7    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator8    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number, value8: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator9    | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number, value8: number, value9: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
| objectAnimator10   | 创建动画        | ^[Function]`(id: QTAnimatorId, valueType: QTAnimationValueType, propertyName: QTAnimationPropertyName, value1: number, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number, value8: number, value9: number, value10: number, duration: number, repeatMode: QTAnimationRepeatMode, repeatCount: number, listenAnimator: boolean, listenAnimatorValue: boolean, interpolator?: QTAnimationInterpolator) => void`     |
