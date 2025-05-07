# 轻卡开发

## 一、开发轻卡

和开发快应用相同，只需要编写一个普通的vue组件。

以`home.vue`为例

:::demo

guide/slot/basic

:::

## 二、注册轻卡

在`main.ts`路由表中注册第一步编写的组件

```js
import home from "./views/home.vue";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
  }
]
```

## 三、调试轻卡

```shell
adb shell am start -d 'ejs://debug?name=home&uri=http://192.168.40.180:38989'
```

* `name`参数指定路由的名称
* `uri`参数指定调试的IP地址

## 四、查看调试效果

<img width="95%" src="/guide/slot/hello-jsview.png" />
