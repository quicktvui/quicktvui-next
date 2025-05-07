---
title: VideoPlayer
lang: zh-CN
---

# 渲染方式

内置渲染方式如下：

* `ES_PLAYER_RENDER_NONE = 0`
* `ES_PLAYER_RENDER_SURFACE_VIEW = 1`
* `ES_PLAYER_RENDER_TEXTURE_VIEW = 2`

## 监听渲染方式事件

* 支持的渲染方式列表：`onPlayerRenderListChanged`
* 当渲染方式发生变化：`onPlayerRenderChanged`

::: tip 播放器事件
[点击查看详细事件说明](/zh-CN/component/player/player#Events)
:::

## 获取当前渲染方式

```ts
const playerRenderManager = useESPlayerRenderManager()
playerRenderManager.getRender()
```

## 设置渲染方式

```ts
videoPlayer.value?.setRender(ESPlayerRender.ES_PLAYER_RENDER_TEXTURE_VIEW)
```

或者

```ts
const playerRenderManager = useESPlayerRenderManager()
playerRenderManager.setRender(ESPlayerRender.ES_PLAYER_RENDER_TEXTURE_VIEW)
```

:::demo ## 完整示例

component/video-player/render

:::
