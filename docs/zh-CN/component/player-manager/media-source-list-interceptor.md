---
title: PlayerManager
lang: zh-CN
---

# MediaSourceList 拦截器

***`ESMediaSourceList`拦截器是`ESPlayerManager`调用`ESMediaSourceList`之前执行的钩子函数。***

拦截器中，可以对`ESMediaSourceList`中所有的数据进行操作。

***应用场景一：***

播放地址列表之前需要根据媒资 id 获取所有地址列表信息。

设置数据`ESMediaSourceList`中的`list`暂时为空

```ts
const mediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [],
  interceptors: [interceptor],//添加异步获取地址拦截器
}

```

可以通过拦截器异步请求到地址列表数据后，赋值给`ESMediaSourceList`中的`list`。

## MediaSourceList 全局拦截器

`ESMediaSourceList`全局拦截器可以在***整个应用中所有播放视频的位置***对`ESMediaSourceList`执行钩子函数操作。

### 第一步、声明全局拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确保整个应用唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE_LIST`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaSourceList`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaSourceList`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
export function createESPlayerMediaSourceListGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    //1.转换成 ESMediaSourceList
    const mediaSourceList = params[0] as ESMediaSourceList

    //2.模拟操作：给 ESMediaSourceList 添加数据
    mediaSourceList.metadata = '全局拦截器添加的附加信息'
    const mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4'
    }

    //3.如果返回 Promise.resolve(result)  播放继续
    // 则会把 ESPlayerInterceptResult中的 result 字段全部赋值到 ESMediaSourceList
    // 如果返回 PPromise.reject('模拟失败') 播放终止，返回错误
    //
    const result: ESPlayerInterceptResult = {
      result: {
        list: [mediaSource],
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
    id: 'ESPlayerMediaSourceListGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE_LIST,
    intercept,
    release
  }
}
```

#### 第二步、注册全局拦截器

```ts
//1.创建全局拦截器
const globalInterceptor = createESPlayerMediaSourceListGlobalInterceptor()
//2.注册全局拦截器
const globalInterceptorManager = useESPlayerInterceptorManager()
globalInterceptorManager.addInterceptor(globalInterceptor)
```

## MediaSourceList 局部拦截器

`ESMediaSourceList`局部拦截器可以在***此次播放中***对`ESMediaSourceList`执行钩子函数操作。

### 第一步、声明局部拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确此次播放中的唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE_LIST`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaSourceList`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaSourceList`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
export function createESPlayerMediaSourceListInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaSourceList = params[0] as ESMediaSourceList
    mediaSourceList.metadata = '拦截器添加的附加信息'
    const mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
    }
    const result: ESPlayerInterceptResult = {
      result: {
        list: [mediaSource],
        desc: '拦截器添加的新的字段'
      }
    }
    return Promise.resolve(result)
  }

  function release(): void {
    //
  }

  return {
    id: 'ESPlayerMediaSourceListInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_SOURCE_LIST,
    intercept,
    release
  }
}


```

#### 第二步、注册局部拦截器

```ts
//1.创建局部拦截器
const interceptor = createESPlayerMediaSourceListInterceptor()
//2.注册局部拦截器
const mediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [],
  interceptors: [interceptor]
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

component/player-manager/media-source-list-interceptor

:::
