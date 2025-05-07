---
title: WebView
lang: zh-CN
---

# Html5调用Vue

## 基础用法

### 一、html js 中调用`window.Js2Vue.js2Vue(字符串参数)`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue和Html5通信</title>
</head>
<body>

<script lang="js">
  window.Js2Vue.js2Vue('Hello Vue~');

  function sayHello(value) {
    return 'Hello Js~' + value;
  }
</script>

<p>Vue和Html5通信</p>

</body>
</html>

```

### 二、`<qt-web-view>`组件监听`onJs2Vue`事件，获取html传递的参数。

:::demo

component/web-view/js-2-vue

:::

