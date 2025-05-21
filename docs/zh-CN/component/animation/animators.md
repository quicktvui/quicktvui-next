---
title: Animation
lang: zh-CN
---

# 动画合集

## 一、创建动画合集参数

```js
animationRef.value?.animatorSet(
  'SequentiallyAnimatorsId',  //动画合集的id
  -1,                         //动画合集执行的时长
  false                       //是否监听动画合集执行状态
);
```

* ### 动画合集的id

动画合集通过自定义的`动画id`执行所有的操作。

* ### 动画合集执行的时长
  `Sets the length of each of the current child animations of this AnimatorSet. By default, each child animation will use its own duration. If the duration is set on the AnimatorSet, then each child animation inherits this duration.`

* ### 监听动画合集执行状态

## 二、动画合集执行顺序

* `playSequentially`
* `playTogether`
* `with`
* `before`
* `after`

### 1、playSequentially

<img src="/component/animation/animators_play_sequentially.gif" />

#### 第1步：创建动画合集

```js
//动画合集的id为：SequentiallyAnimatorsId
animationRef.value?.animatorSet('SequentiallyAnimatorsId', -1, false);
```

#### 第2步：创建动画并加入到动画合集

``` js
animationRef.value?.animator('AlphaAnimationId');
animationRef.value?.animator('ScaleAnimationId');
animationRef.value?.animator('RotationAnimationId');
animationRef.value?.animator('TranslationAnimationId');

//playSequentially4
animationRef.value?.playSequentially(
    //动画合集的id
    'SequentiallyAnimatorsId',
    //动画的id
    [
      "AlphaAnimationId",
      "ScaleAnimationId",
      "RotationAnimationId",
      "TranslationAnimationId"
    ]
);

```

#### 第3步：执行动画合集

```js
animationRef.value?.start('SequentiallyAnimatorsId');
```

### 2、playTogether

<img src="/component/animation/animators_play_together.gif" />

#### 第1步：创建动画合集

```js
//动画合集的id为：TogetherAnimatorsId
animationRef.value?.animatorSet('TogetherAnimatorsId', -1, false);
```

#### 第2步：创建动画并加入到动画合集

``` js
animationRef.value?.animator('AlphaAnimationId');
animationRef.value?.animator('ScaleAnimationId');
animationRef.value?.animator('RotationAnimationId');
animationRef.value?.animator('TranslationAnimationId');

//playTogether4
animationRef.value?.playTogether(
    //动画合集的id
    'TogetherAnimatorsId',
    //动画的id
    [
      "AlphaAnimationId",
      "ScaleAnimationId",
      "RotationAnimationId",
      "TranslationAnimationId"
    ]
);

```

#### 第3步：执行动画合集

```js
animationRef.value?.start('TogetherAnimatorsId');
```

### 3、with

<img src="/component/animation/animators_play_with.gif" />

#### 第1步：创建动画合集

```js
//动画合集的id为：WithAnimatorsId
animationRef.value?.animatorSet('WithAnimatorsId', -1, false);
```

#### 第2步：创建动画并加入到动画合集

```js
animationRef.value?.animator('AlphaAnimationId');
animationRef.value?.animator('ScaleAnimationId');

//AlphaAnimationId
animationRef.value?.play(
  'WithAnimatorsId',
  "AlphaAnimationId",
);
//ScaleAnimationId
animationRef.value?.with(
  'WithAnimatorsId',
  "ScaleAnimationId",
);

```

#### 第3步：执行动画合集

```js
animationRef.value?.start('WithAnimatorsId');
```

### 4、before

<img src="/component/animation/animators_play_before.gif" />

#### 第1步：创建动画合集

```js
//动画合集的id为：BeforeAnimatorsId
animationRef.value?.animatorSet('BeforeAnimatorsId', -1, false);
```

#### 第2步：创建动画并加入到动画合集

```js
animationRef.value?.animator('AlphaAnimationId');
animationRef.value?.animator('ScaleAnimationId');

//AlphaAnimationId
animationRef.value?.play(
  'BeforeAnimatorsId',
  "AlphaAnimationId",
);
//ScaleAnimationId
animationRef.value?.before(
  'BeforeAnimatorsId',
  "ScaleAnimationId",
);

```

#### 第3步：执行动画合集

```js
animationRef.value?.start('BeforeAnimatorsId');
```

### 5、after

<img src="/component/animation/animators_play_after.gif" />

#### 第1步：创建动画合集

```js
//动画合集的id为：AfterAnimatorsId
animationRef.value?.animatorSet('AfterAnimatorsId', -1, false);
```

#### 第2步：创建动画并加入到动画合集

```js
animationRef.value?.animator('AlphaAnimationId');
animationRef.value?.animator('ScaleAnimationId');

//AlphaAnimationId
animationRef.value?.play(
  'AfterAnimatorsId',
  "AlphaAnimationId",
);
//ScaleAnimationId
animationRef.value?.after(
  'AfterAnimatorsId',
  "ScaleAnimationId",
);

```

#### 第3步：执行动画合集

```js
animationRef.value?.start('AfterAnimatorsId');
```

:::demo ## 完整示例

component/animation/animators

:::
