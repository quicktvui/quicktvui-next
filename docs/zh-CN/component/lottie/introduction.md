---
title: Lottie
lang: zh-CN
---

# [Lottie](http://airbnb.io/lottie/)

Lottie 是 Airbnb 开源的一套跨平台的完整的动画效果解决方案，设计师可以使用 Adobe After Effects 设计出漂亮的动画之后，使用 Lottic 提供的 Bodymovin 插件将设计好的动画导出成 JSON
格式，就可以直接运用在 iOS、Android、Web 和 React Native之上，无需其他额外操作。

[点击查看详细](http://airbnb.io/lottie/)

::: warning 注意： QuickTVUI lottie 暂时只支持 json 格式动画文件。
:::

## API

### Attributes

| Name                              | Description       | Type                 | Default |
| --------------------------------- | ----------------- | ---------------------| ------- |
| rawResource                       |                   | ^[string]            | -   |
| fileName                          |                   | ^[string]            | -   |
| localResource                     |                   | ^[string]            | -   |
| url                               |                   | ^[string]            | -   |
| fallbackResource                  |                   | ^[string]            | -   |
| autoPlay                          |                   | ^[boolean]           | -   |
| loop                              |                   | ^[boolean]           | -   |
| repeatMode                        |                   | ^[number]            | -   |
| repeatCount                       |                   | ^[number]            | 0   |
| speed                             |                   | ^[string]            | -   |
| clipToCompositionBounds           |                   | ^[boolean]           | false   |
| defaultFontFileExtension          |                   | ^[string]            | -   |
| imageAssetsFolder                 |                   | ^[string]            | -   |
| progress                          |                   | ^[string]            | -   |
| enableMergePathsForKitKatAndAbove |                   | ^[boolean]           | false   |
| colorFilter                       |                   | ^[string]            | -   |
| renderMode                        |                   | ^[number]            | 0   |
| asyncUpdates                      |                   | ^[number]            | 0   |
| ignoreDisabledSystemAnimations    |                   | ^[boolean]           | false   |
| useCompositionFrameRate           |                   | ^[boolean]           | false   |
| cacheComposition                  |                   | ^[boolean]           | false   |
| animationListenerState            |                   | ^[boolean]           | false   |
| animationUpdateState              |                   | ^[boolean]           | false   |

### Events

| Name           | Description                          | Type                                                                |
| ----------------- | --------------------------------- | ------------------------------------------------------------------- |
| onAnimationEnd    | 动画结束事件                         | ^[Function]`() => void`                               |
| onAnimationCancel | 动画取消事件                         | ^[Function]`() => void`                               |
| onAnimationStart  | 动画开始事件                         | ^[Function]`() => void`                               |
| onAnimationRepeat | 动画重复执行事件                      | ^[Function]`() => void`                               |
| onAnimationPause  | 动画暂停事件                         | ^[Function]`() => void`                               |
| onAnimationResume | 动画恢复事件                         | ^[Function]`() => void`                               |
| onAnimationUpdate | 动画更新事件                         | ^[Function]`(value: string) => void`                  |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |

### Exposes

| Name                                | Description                 | Type                                           |
| ----------------------------------- | --------------------------- | -----------------------------------------------|
| loadRaw                             |           | ^[Function]`(rawRes: string) => void`   |
| loadFile                            |           | ^[Function]`(fileName: string) => void`   |
| loadUrl                             |           | ^[Function]`(url: string) => void`   |
| loadCacheUrl                        |           | ^[Function]`(url: string, cacheKey: string) => void`   |
| setFallbackResource                 |           | ^[Function]`(res: number) => void`   |
| setAutoPlay                         |           | ^[Function]`(auto: boolean) => void`   |
| setLottieLoop                       |           | ^[Function]`(loop: boolean) => void`   |
| setRepeatMode                       |           | ^[Function]`(mode: QTLottieRepeatMode) => void`   |
| setRepeatCount                      |           | ^[Function]`(repeatCount: number) => void`   |
| setSpeed                            |           | ^[Function]`(speed: string) => void`   |
| setClipToCompositionBounds          |           | ^[Function]`(clipToCompositionBounds: boolean) => void`   |
| setDefaultFontFileExtension         |           | ^[Function]`(extension: string) => void`   |
| setImageAssetsFolder                |           | ^[Function]`(imageAssetsFolder: string) => void`   |
| setProgress                         |           | ^[Function]`(progress: string) => void`   |
| enableMergePathsForKitKatAndAbove   |           | ^[Function]`(enable: boolean) => void`   |
| setColorFilter                      |           | ^[Function]`(colorRes: string) => void`   |
| setRenderMode                       |           | ^[Function]`(renderModeOrdinal: QTLottieRenderMode) => void`   |
| setAsyncUpdate                      |           | ^[Function]`(asyncUpdatesOrdinal: QTLottieAsyncUpdates) => void`   |
| setIgnoreDisabledSystemAnimations   |           | ^[Function]`(ignore: boolean) => void`   |
| setUseCompositionFrameRate          |           | ^[Function]`(useCompositionFrameRate: boolean) => void`   |
| playAnimation                       |           | ^[Function]`() => void`   |
| resumeAnimation                     |           | ^[Function]`() => void`   |
| pauseAnimation                      |           | ^[Function]`() => void`   |
| cancelAnimation                     |           | ^[Function]`() => void`   |
| cacheComposition                    |           | ^[Function]`(cache: boolean) => void`   |
| removeAllListener                   |           | ^[Function]`() => void`   |
