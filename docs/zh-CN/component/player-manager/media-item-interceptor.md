---
title: PlayerManager
lang: zh-CN
---

# MediaItem 拦截器

***`ESMediaItem`拦截器是`ESPlayerManager`调用`ESMediaItem`之前执行的钩子函数。***

拦截器中，可以对`ESMediaItem`中所有的数据进行操作。

***应用场景一：***

播放`ESMediaItem`之前需要根据媒资分集 id 获取播放地址信息。

设置数据`ESMediaItem`中的`mediaSourceList`暂时为空

```ts
const mediaItem: ESMediaItem = {
  index: 0,
  mediaSourceList: [],
  interceptors: [interceptor]//添加异步获取播放地址拦截器
}

```

可以通过拦截器异步请求到播放地址数据后，赋值给`ESMediaItem`中的`mediaSourceList`。

***应用场景二：***

播放媒资分集`ESMediaItem`之前需要判断用户是否有媒资分集`ESMediaItem`播放权益。

```ts

const mediaItem: ESMediaItem = {
  index: 0,
  mediaSourceList: [],
  interceptors: [interceptor]//添加分集鉴权拦截器
}
```

可以通过拦截器异步鉴权，并返回拦截结果，决定用户是否可以播放分集。

## MediaItem 全局拦截器

`ESMediaItem`全局拦截器可以在***整个应用中所有播放视频的位置***对`ESMediaItem`执行钩子函数操作。

### 第一步、声明全局拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确保整个应用唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaItem`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaItem`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
export function createESPlayerMediaItemGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    //1.转换成 ESMediaItem
    const item = params[0] as ESMediaItem
    //2.模拟操作：给 ESMediaItem 添加数据
    item.metadata = '全局拦截器添加的附加信息'
    const mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4'
    }
    const mediaSourceList: ESMediaSourceList = {
      index: 0,
      list: [mediaSource]
    }

    //3.如果返回 Promise.resolve(result)  播放继续
    // 则会把 ESPlayerInterceptResult中的 result 字段全部赋值到 ESMediaItem
    // 如果返回 PPromise.reject('模拟失败') 播放终止，返回错误
    //
    const result: ESPlayerInterceptResult = {
      result: {
        mediaSourceList,
        desc: '全局拦截器添加的附加字段'
      }
    }
    return Promise.resolve(result)
    // return Promise.reject('模拟失败')
  }

  function release(): void {
    //
  }

  return {
    id: 'ESPlayerMediaItemGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM,
    intercept,
    release
  }
}
```

#### 第二步、注册全局拦截器

```ts
//1.创建全局拦截器
const globalInterceptor = createESPlayerMediaItemGlobalInterceptor()
//2.注册全局拦截器
const globalInterceptorManager = useESPlayerInterceptorManager()
globalInterceptorManager.addInterceptor(globalInterceptor)
```

## MediaItem 局部拦截器

`ESMediaItem`局部拦截器可以在***此次播放中***对`ESMediaItem`执行钩子函数操作。

### 第一步、声明局部拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确保整个应用唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaItem`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaItem`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
import {
  ESPlayerInterceptorType
} from "@extscreen/es3-player";
import type {
  ESIPlayerInterceptor, ESMediaSource, ESMediaSourceList,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";
import type { ESMediaItem } from "@extscreen/es3-player-manager";

export function createESPlayerMediaItemGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    //1.
    const item = params[0] as ESMediaItem
    item.metadata = '全局拦截器添加的附加信息'

    //2.
    const mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4'
    }
    const mediaSourceList: ESMediaSourceList = {
      index: 0,
      list: [mediaSource]
    }

    const result: ESPlayerInterceptResult = {
      result: {
        mediaSourceList,
        desc: '全局拦截器添加的附加字段'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
    //
  }

  return {
    id: 'ESPlayerMediaItemGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM,
    intercept,
    release
  }
}


```

#### 第二步、注册局部拦截器

```ts
//1.创建局部拦截器
const interceptor = createESPlayerMediaItemInterceptor()
//2.注册局部拦截器
const mediaItem: ESMediaItem = {
  interceptors: [interceptor]
}
const playList: ESMediaItemList = {
  index: 0,
  list: [mediaItem],
}
playerManager.value?.initialize()
```

:::demo ## 完整示例

component/player-manager/media-item-interceptor

:::
