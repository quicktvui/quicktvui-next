---
title: PlayerManager
lang: zh-CN
---

# 多类型播放

下面以定义了左右两个显示的文字播放器为例

### 第一步、定义左边显示的文字播放器

自定义文字播放器，类型为 10

```ts

//1.组件中添加 type: 10, //自定义播放器的类型为10
//2.getType()方法返回 10
function getType(): number {
  return 10
}
```

设置宽度为屏幕一半，显示在左边
```css
.es-text-left-player-root-css {
  width: 960px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: red;
  position: absolute;
  left: 0;
}
```

:::demo ## 完整示例

component/player-manager/text-left-player

:::

## 第二步、定义右边显示的文字播放器

自定义文字播放器，类型为 11

```ts

//1.组件中添加 type: 11, //自定义播放器的类型为11
//2.getType()方法返回 11
function getType(): number {
  return 11
}
```

设置宽度为屏幕一半，显示在右边
```css
.es-text-right-player-root-css {
  width: 960px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: green;
  position: absolute;
  right: 0;
}

```

:::demo ## 完整示例

component/player-manager/text-right-player

:::

## 第三步、同时使用左右播放器

````ts
//---------------------------拼装左边文字播放器需要的数据--------------------------------------
//1.播放地址为文字：左文本
const leftMediaSource: ESMediaSource = {
  uri: '左文本',
}
const leftMediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [leftMediaSource],
}
const leftMediaItem: ESMediaItem = {
  mediaSourceList: leftMediaSourceList,
  //2.设置播放类型为：10
  playerType: 10,
}

//----------------------------拼装右边文字播放器需要的数据-------------------------------------
//1.播放地址为文字：右文本
const rightMediaSource: ESMediaSource = {
  uri: '右文本',
}
const rightMediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [rightMediaSource],
}
const rightMediaItem: ESMediaItem = {
  mediaSourceList: rightMediaSourceList,
  //2.设置播放类型为：11
  playerType: 11,
}
//---------------------------调用播放进行播放--------------------------------------
const playList: ESMediaItemList = {
  index: 0,
  list: [leftMediaItem, rightMediaItem],
}
playerManager.value?.initialize()
playerManager.value?.playMediaList(playList)
````

:::demo ## 完整示例

component/player-manager/multi-player

:::
