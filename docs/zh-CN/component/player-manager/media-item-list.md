---
title: PlayerManager
lang: zh-CN
---

# 操作播放列表

某些业务场景下，播放列表可能需要异步获取，或者需要分页获取，这个时候就需要动态操作播放列表。

## 操作播放列表

* 向播放列表末尾添加数据：`addMediaToLast(mediaItemList: Array<ESMediaItem>): void;`
* 向播放列表头部添加数据：`addMediaToFirst(mediaItemList: Array<ESMediaItem>): void;`
* 向播放列表指定索引添加数据：`addMediaToIndex(index: number, mediaItemList: Array<ESMediaItem>): void;`
* 替换播放列表中指定索引位置的数据：`replaceMedia(beginIndex: number, mediaItemList: Array<ESMediaItem>): void;`
* 重置清空播放列表：`resetMediaList(): void;`

## 获取正在播放媒资信息

* 获取播放列表：`getMediaList(): SparseArray<ESMediaItem> | null;`
* 获取正在播放的`ESMediaItem`的索引：`getPlayingMediaIndex(): number;`
* 获取正在播放的`ESMediaItem`：`getPlayingMedia(): ESMediaItem | null;`
* 获取正在播放的`ESMediaSourceList`：`getMediaSourceList(): Array<ESMediaSource> | null;`
* 获取正在播放的`ESMediaSource`的索引：`getPlayingMediaSourceIndex(): number;`
* 获取正在播放的`ESMediaSource`：`getPlayingMediaSource(): ESMediaSource | null;`

:::demo ## 完整示例

component/player-manager/media-item-list

:::
