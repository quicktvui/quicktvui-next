---
title: PlayerManager
lang: zh-CN
---

# 自定义播放视图

## 第一步、自定义播放视图

自定义组件，并实现`ESIPlayerManagerView`接口中的方法，处理显示业务逻辑。

:::demo

component/player-manager/player-view

:::

## 第二步、注册自定义播放视图

```ts
const playerViewList = [markRaw(ESPlayerManagerView)]
const playerViewListRef = ref(playerViewList)
```

:::demo

component/player-manager/custom-player-view

:::

## 第三步、视频播放的时候，会显示自定义的播放视图，并调用播放视图的方法。
