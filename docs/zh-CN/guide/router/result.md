---
title: 回传数据
lang: zh-CN
---

# 回传数据

你可以在[quicktvui-playground](https://github.com/quicktvui/quicktvui-playground/tree/master/es-page-result) 上查看示例。

## 第 1 步：`A`页面打开`B`页面的时候，注册回传数据监听

`A`页面：注册`resultCallback`数据回传监听

```ts
router.push({
  name: 'B',
  //注册回传数据监听
  resultCallback: {
    onResult(result: RouteResult): Promise<RouteResultData> | void {
      console.log('------收到B页面回传的数据------->', ret);
      return Promise.resolve("收到B页面回传的数据后，发送给B页面的数据")
    }
  }
})
```

## 第 2 步：在打开的`B`页面上回传数据

`B`页面：调用`setResult`方法回传数据

```ts
const router = useESRouter()
router.setResult({
  resultCode: RouteResultCode.ROUTE_RESULT_OK,
  //发送给A页面的数据
  data: {
    msg: 'hello~~~'
  }
}).then((ret) => {
  console.log('-----收到A页面回传的数据-------->', ret);
})
```
