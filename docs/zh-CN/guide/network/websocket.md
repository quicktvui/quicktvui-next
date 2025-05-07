---
title: 'WebSocket'
lang: zh-CN
---

# WebSocket

`WebSocket` 协议可以在单个TCP连接上提供全双工的通信信道，是一种长连接的网络通道。

## 方法

### constructor

`(url: string, protocals: array, extrasHeaders: object)`
创建一个 WebSocket 对象，并开始向指定的 url 建立 Websocket 连接

* `url`: string - WebSocket 的连接地址，以 ws:// 或 wss:// 开头的 url；
* `protocals`: array - 可选字段，指定WebSocket希望采用的交流协议，array 内部的单个元素为必须为字符串类型，按优先级排序，该字段会最终组装到 WebSocket 的
  Sec-WebSocket-Protocol 请求头中；
* `extrasHeaders`: object - 可选字段，指定建立 WebSocket 时的一些额外请求头；

### close

`(code:  number, reason: string)`
主动关闭一条WebSocket，并向对端返回指定的code和reason

* `code`: number - 可选字段，WebSocket关闭时，返回给对端的状态码；
* `reason`: string - 可选字段，WebSocket关闭时，返回给对端的原因描述字符串；

### send

`(data: string)`
向对端发送一段数据，现阶段仅支持发送文本数据，注意，请在明确收到 onopen 事件后才能真正发送数据，在连接尚未建立或已关闭的情况下发送数据会导致错误；

* `data`: string - 向WebSocket对端发送的字符串数据；

## 属性

### readyState

`number，只读属性`
当前WebSocket的状态，取值为以下4种：

* `0` - WebSocket正在连接中（Connecting）；
* `1` - WebSocket连接建立成功，当前可以收发数据（Open）；
* `2` - WebSocket连接正在关闭（Closing）；
* `3` - WebSocket连接已关闭（Closed）；

### url

`string，只读属性`
当前 WebSocket 使用的 url

### onopen

`function，只写属性`
设置当前 WebSocket 在连接建立成功后的回调函数

### onclose

`function，只写属性`
设置当前WebSocket在连接关闭时的回调函数，回调函数带有一个参数（Object类型），参数属性说明如下：

* `code` - number，连接关闭的状态码；
* `reason` - string，连接关闭的原因描述；

### onmessage

`function，只写属性`
设置当前 WebSocket 在收到数据时的回调函数，回调函数带有一个参数（Object类型），参数属性说明如下：

* `data` - string，实际收到的数据，由于当前WebSocket仅支持字符串数据的收发，这里一定为string类型；
* `type` - string，收到的数据的类型，当前恒定为‘text’；

### onerror

`function，只写属性`
设置当前 WebSocket 在连接出现错误时的回调函数，回调函数带有一个参数（Object类型），参数属性说明如下：

* `reason` - string，连接出现错误的的原因描述；

## 示例

```js
this.ws = new WebSocket("ws://websocket.test.qq.com/websocket");
this.ws.onopen = () => {
  console.log("WebSocket onOpen");
  this.ws.send("Hello WebSocket")
};

this.ws.onclose = (param) => {
  console.log(`WebSocket onClose: code = ${  param.code  }, reason = ${  param.reason}`);
};

this.ws.onerror = (param) => {
  console.log(`WebSocket onError: reason = ${  param.reason}`);
};

this.ws.onmessage = (message) => {
  console.log(`WebSocket onMessage: data type = ${  message.type}`);

  // text 类型的回包数据
  if (message.type == 'text') {
    console.log(`WebSocket onMessage: data type = ${  message.data}`);
  }
};
```
