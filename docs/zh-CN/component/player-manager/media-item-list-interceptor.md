---
title: PlayerManager
lang: zh-CN
---

# MediaItemList 拦截器

***`MediaItemList`拦截器是`ESPlayerManager`调用`MediaItemList`之前执行的钩子函数。***

拦截器中，可以对`ESMediaItemList`中所有的数据进行操作。

***应用场景一：***

播放媒资之前需要根据媒资 id 获取所有分集信息。

设置数据`ESMediaItemList`中的`list`暂时为空

```ts
const playList: ESMediaItemList = {
  id: '123456',
  index: 0,
  list: [],
  interceptors: [interceptor],//添加异步获取分集拦截器
}
```

可以通过拦截器异步请求到分集数据后，赋值给`ESMediaItemList`中的`list`。

***应用场景二：***

播放媒资之前需要判断用户是否有整个媒资的播放权益。

```ts
const playList: ESMediaItemList = {
  index: 0,
  list: [mediaItem],
  interceptors: [interceptor],//添加鉴权拦截器
}
```

可以通过拦截器异步鉴权，并返回拦截结果，决定用户是否可以播放。

## MediaItemList 全局拦截器

`MediaItemList`全局拦截器可以在***整个应用中所有播放视频的位置***对`MediaItemList`执行钩子函数操作。

### 第一步、声明全局拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确保整个应用唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM_LIST`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaItemList`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaSourceList`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
export function createESPlayerMediaItemListGlobalInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    //1.转换成 ESMediaItemList
    const mediaItemList = params[0] as ESMediaItemList

    //2.模拟操作：给 ESMediaItemList 添加数据
    mediaItemList.metadata = '全局拦截器添加的附加信息'
    const mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4'
    }
    const mediaSourceList: ESMediaSourceList = {
      index: 0,
      list: [mediaSource]
    }
    const mediaItem: ESMediaItem = {
      mediaSourceList,
    }

    //3.如果返回 Promise.resolve(result)  播放继续
    // 则会把 ESPlayerInterceptResult中的 result 字段全部赋值到 ESMediaSourceList
    // 如果返回 PPromise.reject('模拟失败') 播放终止，返回错误
    //
    const result: ESPlayerInterceptResult = {
      result: {
        list: [mediaItem],
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
    id: 'ESPlayerMediaItemListGlobalInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM_LIST,
    intercept,
    release
  }
}
```

#### 第二步、注册全局拦截器

```ts
//1.创建全局拦截器
const globalInterceptor = createESPlayerMediaItemListGlobalInterceptor()
//2.注册全局拦截器
const globalInterceptorManager = useESPlayerInterceptorManager()
globalInterceptorManager.addInterceptor(globalInterceptor)
```

## MediaItemList 局部拦截器

`MediaItemList`局部拦截器可以在***此次播放中***对`MediaItemList`执行钩子函数操作。

### 第一步、声明局部拦截器

实现`ESIPlayerInterceptor`接口。

* `id`需确此次播放中的唯一性。
* ***`type`需明确指定为`ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM_LIST`***
* ***`intercept`方法的参数`params`中`params[0]`即`ESMediaItemList`。 在次方法中进行业务逻辑，需要返回`promise`。
  如果业务逻辑认为拦截成功则需返回`Promise.resolve(ESPlayerInterceptResult)`此时`ESPlayerInterceptResult`中的`result`字段会全部赋值到
  `ESMediaSourceList`播放继续进行。 如果业务逻辑认为拦截失败则返回`Promise.reject()`播放返回错误，终止进行。***
* `release`方法中有需回收资源

```ts
export function createESPlayerMediaItemListInterceptor(): ESIPlayerInterceptor {

  function intercept(...params: Array<any>): Promise<ESPlayerInterceptResult> {
    const mediaItemList = params[0] as ESMediaItemList
    mediaItemList.metadata = '拦截器添加的附加信息'
    const mediaSource: ESMediaSource = {
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4'
    }
    const mediaSourceList: ESMediaSourceList = {
      index: 0,
      list: [mediaSource]
    }
    const mediaItem: ESMediaItem = {
      mediaSourceList,
    }

    const result: ESPlayerInterceptResult = {
      result: {
        list: [mediaItem],
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
    id: 'ESPlayerMediaItemListInterceptor',
    type: ESPlayerInterceptorType.ES_PLAYER_INTERCEPTOR_TYPE_MEDIA_ITEM_LIST,
    intercept,
    release
  }
}

```

#### 第二步、注册局部拦截器

```ts
//1.创建局部拦截器
const interceptor = createESPlayerMediaItemListInterceptor()
//2.注册局部拦截器
const playList: ESMediaItemList = {
  index: 0,
  list: [],
  interceptors: [interceptor]
}
playerManager.value?.initialize()
```

:::demo ## 完整示例

component/player-manager/media-item-list-interceptor

:::
