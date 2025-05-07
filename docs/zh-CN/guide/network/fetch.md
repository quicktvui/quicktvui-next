---
title: 'Fetch'
lang: zh-CN
---

# Fetch

提供了跟 W3C 标准基本一致的 [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
方法，可以直接参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)。

::: warning 注意：
* ***fetch 目前仅支持 JSON 对象的传输，别的格式暂时无法支持。***
:::

## 发起请求

如果需要请求远程地址，只需要在 fetch 函数参数值传入地址即可，如下：

```js
fetch('//mywebsite.com/mydata.json');
```

fetch 函数也支持 HTTP 请求的配置。

```js
fetch('//mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
```

完整的 fetch 请求属性列表可以[点击此处查看](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)。

## 处理返回值

返回数据将以 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的形式返回，示例如下：

```js
function getMoviesFromApi() {
  return fetch('//mywebsite.com/demo.json')
    .then(rsp => rsp.json())
    .then(json => json.movies)
    .catch(error => console.error(error));
}
```

可以使用 [async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 处理 fetch
返回的数据。

```js
async function getMoviesFromApi() {
  try {
    const rsp = await fetch('//mywebsite.com/demo.json');
    const json = await rsp.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
```

::: warning 注意：在使用 fetch 发起网络请求的时候，需要记得捕获错误，否则错误会被静默丢弃。
:::
