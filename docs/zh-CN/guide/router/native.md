---
title: 原生路由
lang: zh-CN
---

# 原生路由

原生路由(`ESNativeRouter`)是快应用调用安卓页面(`Activity`)解决方案。

## 一、`push` 打开其他快应用

`NativeRouteLocationRaw`参数

| Name            | Description       | Type                       |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| pkg            | 包名               | ^[string]                   |   -    |
| args           | 传递给快应用的参数    | ^[RouteLocationRaw]         |   -    |
| backgroundColor| 背景颜色            | ^[string]/^[number]         |   -    |
| transparent    | 是否透明背景         | ^[boolean]                  |   -    |
| splash         | 是否显示splash      | ^[number]`-1:不显示 0:默认 1:简单` |   -    |
| version        | 快应用版本号         | ^[string]                   |   -    |
| minVersion     | 快应用最小版本号      | ^[string]                   |   -    |

::: warning 注意：args 固定格式如下：

```json
{
  "url": "",
  "params": {
  }
}
```

* ***`url`: 启动的快应用的页面的名称***
* ***`params`: 启动的快应用的页面传递的参数***

:::

示例代码

```ts
const nativeRouter = useESNativeRouter()
nativeRouter.push({
  //1.打开 api demo快应用
  pkg: 'com.quicktvui.app.api',
  args: {
    "url": "home",  //2.打开 home页面
    "params": {     //3.传递参数 message
      "message": "hello vue"
    }
  }
})
```

## 二、`back` 关闭当前快应用

示例代码

```ts
const nativeRouter = useESNativeRouter()
nativeRouter.back()
```

## 三、`launch` 打开其他安卓应用

::: tip 参考 adb shell 命令
[点击查看 ***`adb shell am start`*** 命令详情](https://developer.android.google.cn/tools/adb?hl=en#IntentSpec)
:::

启动参数

| Name          | Description        | Type                          |   Default   |
| -------------- | ------------------| ----------------------------- |---------|
| -p           | package_name        | ^[string]           |   -     |
| -a           | action              | ^[string]           |   -    |
| -d           | data_uri            | ^[string]           |   -    |
| -n           | component           | ^[string]           |   -    |
| -e           | extra_key extra_string_value| ^[string]           |   -    |

::: warning 注意：`launch`方法的参数是二维数组
:::

示例代码

```ts
const nativeRouter = useESNativeRouter()
//打开腾讯视频
nativeRouter.launch(
  //二维数组
  [
    ['-d', 'tenvideo2://?action=1&cover_id=mzc00200tq7m03f&stay_flag=1&pull_from=1024041']
  ]
)
```

## 四、`launchByPackage` 根据包名打开其他安卓应用

示例代码

```ts
const nativeRouter = useESNativeRouter()
//打开腾讯视频
nativeRouter.launchByPackage('com.ktcp.video')
```
