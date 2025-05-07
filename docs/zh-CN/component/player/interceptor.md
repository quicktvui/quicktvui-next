---
title: PagePlayer
lang: zh-CN
---

# 播放数据拦截器

拦截器是调用数据之前执行的对数据处理的钩子函数。拦截器可以处理复杂的异步播放数据。

支持以下播放数据拦截：

* [`MediaItemList` 拦截器](/zh-CN/component/player-manager/media-item-list-interceptor)
* [`MediaItem` 拦截器](/zh-CN/component/player-manager/media-item-interceptor)
* [`MediaSourceList` 拦截器](/zh-CN/component/player-manager/media-source-list-interceptor)
* [`MediaSource` 拦截器](/zh-CN/component/player-manager/media-source-interceptor)

## 应用场景一：媒资详情页，需要通过 id 获取媒资分集列表

播放`MediaItemList`数据结构中分集列表`list`设置为`[]`，通过设置`MediaItemList`拦截器异步请求数据填充分集列表`list`。

## 应用场景二：播放媒资分集时，需要通过媒资分集信息进行用户播放权益鉴权

通过设置`MediaItem`拦截器异步请求鉴权数据，根据鉴权结果决定是否继续播放。

## 应用场景三：播放媒资分集时，需要通过媒资分集 id 获取播放地址列表

播放`MediaItem`数据结构中播放源列表`mediaSourceList`设置为`[]`，通过设置`MediaItem`拦截器异步请求数据填充播放源列表`mediaSourceList`。

## 应用场景四：播放媒资源时，需要给视频地址动态拼接参数

通过设置`MediaSource` 局部拦截器处理播放地址参数。

## 应用场景四：对整个应用获取的媒资播放源地址进行处理，

例如：整个应用播放视频源地址域名动态切换，通过设置`MediaSource` 全局拦截器处理播放地址参数。













