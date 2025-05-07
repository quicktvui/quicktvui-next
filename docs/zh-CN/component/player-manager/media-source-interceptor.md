---
title: PlayerManager
lang: zh-CN
---

# MediaSource 拦截器

***`ESMediaSource`拦截器是`ESPlayerManager`调用`ESMediaSource`之前执行的钩子函数。***

拦截器中，可以对`ESMediaSource`中所有的数据进行操作。

***应用场景一：***

播放`ESMediaSource`之前需要根据业务逻辑切换播放地址的域名。

```ts
const mediaSource: ESMediaSource = {
  uri: '/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4',
  interceptors: [interceptor]
}

```

可以通过拦截器执行业务逻辑，拼接播放地址，赋值给`ESMediaSource`中的`uri`。

## MediaSource 全局拦截器

`ESMediaSource`全局拦截器可以在***整个应用中所有播放视频的位置***对`ESMediaSource`执行钩子函数操作。

### 第一步、声明全局拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确保整个应用唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaSource`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaSource`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
export function createESPlayerMediaSourceGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    //1.转换成 ESMediaSource
    const mediaSource = params[0] as ESMediaSource
    //2.模拟操作：给 ESMediaSource 添加数据
    mediaSource.metadata = '全局拦截器添加的附加信息'
    //3.如果返回 Promise.resolve(result)  播放继续
    // 则会把 ESPlayerInterceptResult中的 result 字段全部赋值到 ESMediaSource
    // 如果返回 PPromise.reject('模拟失败') 播放终止，返回错误
    //
    const result: ESPlayerInterceptResult = {
      result: {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4',
        desc: '拦截器添加的新的字段'
      }
    }
    return Promise.resolve(result)
    // return Promise.reject('模拟失败')
  }

  function release(): void {
    //
  }

  return {
    id: 'ESPlayerMediaSourceGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE,
    intercept,
    release
  }
}
```

#### 第二步、注册全局拦截器

```ts
//1.创建全局拦截器
const globalInterceptor = createESPlayerMediaSourceGlobalInterceptor()
//2.注册全局拦截器
const globalInterceptorManager = useESPlayerInterceptorManager()
globalInterceptorManager.addInterceptor(globalInterceptor)
```

## MediaSource 局部拦截器

`ESMediaSource`局部拦截器可以在***此次播放中***对`ESMediaSource`执行钩子函数操作。

### 第一步、声明局部拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确保整个应用唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaSource`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaSource`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
import {
  ESPlayerInterceptorType
} from "@extscreen/es3-player";
import type {
  ESIPlayerInterceptor, ESMediaSource,
  ESPlayerInterceptResult
} from "@extscreen/es3-player";

export function createESPlayerMediaSourceGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaSource = params[0] as ESMediaSource
    mediaSource.metadata = '全局拦截器添加的附加信息'
    const result: ESPlayerInterceptResult = {
      result: {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4',
        desc: '拦截器添加的新的字段'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
    //
  }

  return {
    id: 'ESPlayerMediaSourceGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE,
    intercept,
    release
  }
}
```

#### 第二步、注册局部拦截器

```ts
//1.创建局部拦截器
const interceptor = createESPlayerMediaSourceInterceptor()
//2.注册局部拦截器
const mediaSource: ESMediaSource = {
  interceptors: [interceptor],
  uri: null
}
const mediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [mediaSource],
}
const mediaItem: ESMediaItem = {
  mediaSourceList,
}
const playList: ESMediaItemList = {
  index: 0,
  list: [mediaItem],
}
playerManager.value?.initialize()
```

:::demo ## 完整示例

component/player-manager/media-source-interceptor

:::

