---
title: PlayerManager
lang: zh-CN
---

# 播放起始位置

播放位置常用于视频从上次播放的位置继续播放。`ESPlayerPosition`用来控制是否支持从指定位置起播。

只需要在`ESMediaItem`中添加`position`字段即可。

```ts
const position: ESPlayerPosition = {
  position: 30000,//起播的位置3s
  support: true,//支持
}
const mediaItem: ESMediaItem = {
  mediaSourceList,
  position,
}
```

:::demo ## 完整示例

component/player-manager/start-position

:::
