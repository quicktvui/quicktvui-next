---
title: 'Fetch'
lang: zh-CN
---

# Axios

QuickTVUI 使用的是兼容官方`1.7.9`版本的 [`Axios`](https://axios-http.com)。

::: warning 注意：

* ***兼容官方`1.7.9`版本的 API，[`点击查看 Axios API`](https://axios-http.com/docs/api_intro)***
* ***不支持`XMLHttpRequest`***
* ***不支持使用`node`的`http` `https`库***
:::

## 集成

### 第一步、`package.json`添加依赖库

* `@extscreen/es3-axios`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-axios)

### 第二步、引入`Axios`

```ts
import axios, {AxiosError} from '@extscreen/es3-axios';
```

## 示例

````ts

axios({
        method: 'get',
        url: 'https://quicktvui.com',
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        }).finally(() => {
        // always executed
      });

````
