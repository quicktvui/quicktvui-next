# 启动快应用参数问题

## 一、以模板项目为例

项目中有两个路由页面：`home`和`error`

```js
const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/error',
    name: 'error',
    component: error
  }
]
```

## 二、外部启动快应用传递参数

### 1、`adb shell am start`启动方式

```shell
am start -d 'esapp://action/start?pkg=com.esapp.demo&from=cmd&args={"url":"home", "params":{"message":"hello vue~"}}'
```

参数说明：

* `esapp://action/start` 固定协议
* `pkg`快应用的包名
* `from`启动来源。从命令行启动，参数值固定为`cmd`
* `args`启动参数。

::: warning 注意：
***`args`固定格式如下：***

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

### 2、android程序启动方式

参数格式和`adb shell`启动方式相同

## 三、快应用内部接收参数

1、`App.vue`中`onESCreate`方法用于接受启动应用参数

```js
function onESCreate(app: ESApp, params: ESAppParams) {
  //app   :ESApp实例对象
  //params:接收到的启动参数
}
```

2、`home.vue`中`onESCreate`方法用于接受启动页面参数

```js
function onESCreate(params: ESPageParams) {
  //params:接收到的启动参数
}
```

## 四、示例

1、`adb shell`启动快应用

* 打开快应用中的`home`页面
* 给`home`页面传递参数`{"message":"hello vue~"}`
* 给快应用传递额外参数`extra:{"extraMessage":"hello app~"}`

```shell
am start -d 'esapp://action/start?pkg=com.esapp.demo&from=cmd&args={"url":"home", "params":{"message":"hello vue~"}, "extra":{"extraMessage":"hello app~"}}'
```

2、
`App.vue`中`onESCreate`方法接收到的`params`参数如下：

```json
{
  "name": "home",
  "url": "home",
  "params": {
    "message": "hello vue~"
  },
  "extra": {
    "extraMessage": "hello app~"
  },
  "sourcePath": "/index.android.js",
  "__instanceName__": "EsApp",
  "__instanceId__": 20
}

```

::: warning 注意：adb shell 命令中的 args={"url":"home", "params":{"message":"hello vue~"}} 中的 args 对象等于 App.vue 中 onESCreate 方法的 params 对象。
:::

3、`home.vue`中`onESCreate`方法接收到的`params`参数如下：

```json
{
  "message": "hello vue~"
}
```

::: warning 注意：adb shell 命令中的 args={"url":"home", "params":{"message":"hello vue~"}} 中的 params 对象等于 home.vue 中 onESCreate 方法的 params 对象。
:::
