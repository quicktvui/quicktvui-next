---
title: Lottie
lang: zh-CN
---

# 基础用法

## 第一步、注册动画组件

```vue

<qt-lottie-view
  ref='lottieRef'
  class='lottie-view-root-css'
  :lottie_loop='true'
  :lottie_speed='10'
  :lottie_autoPlay='true'
  :lottie_url="'https://extcdn.hsrc.tv/channelzero_image/web_static/extend_screen/mood/lottie1.json'"
/>
```

## 第二步、执行动画

### 开始动画

`lottieRef.value?.playAnimation()`

### 暂停动画

`lottieRef.value?.pauseAnimation()`

### 恢复动画

`lottieRef.value?.resumeAnimation()`

### 取消动画

`lottieRef.value?.cancelAnimation()`

### 设置进度

```ts
lottieRef.value?.setProgress('0.5')
lottieRef.value?.resumeAnimation()
```

:::demo ## 完整示例

component/lottie/basic

:::
