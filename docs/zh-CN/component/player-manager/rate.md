---
title: PlayerManager
lang: zh-CN
---

# 播放倍速

内置倍速如下：

* 0.5倍速：`ES_PLAYER_RATE_0_5 = '0.5'`
* 0.75倍速：`ES_PLAYER_RATE_0_7_5 = '0.75'`
* 1倍速：`ES_PLAYER_RATE_1 = '1'`
* 1.2倍速：`ES_PLAYER_RATE_1_2 = '1.2'`
* 1.25倍速：`ES_PLAYER_RATE_1_2_5 = '1.25'`
* 1.5倍速：`ES_PLAYER_RATE_1_5 = '1.5'`
* 1.75倍速：`ES_PLAYER_RATE_1_7_5 = '1.75'`
* 2.0倍速：`ES_PLAYER_RATE_2 = '2.0'`
* 2.5倍速：`ES_PLAYER_RATE_2_5 = '2.5'`

## 监听倍速事件

* 支持的倍速列表：`onPlayerPlayRateListChanged`
* 当倍速发生变化：`onPlayerPlayRateChanged`

::: tip 播放器事件
[点击查看详细事件说明](/zh-CN/component/player/player#Events)
:::

## 获取当前倍速

```ts
const playerRateManager = useESPlayerRateManager()
playerRateManager.getPlayRate()
```

## 设置倍速

```ts
playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_5)
```

或者

```ts
const playerRateManager = useESPlayerRateManager()
playerRateManager.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_5)
```

:::demo ## 完整示例

component/player-manager/play-rate

:::
