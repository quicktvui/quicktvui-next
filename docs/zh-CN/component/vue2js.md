---
title: WebView
lang: zh-CN
---

# Vue调用Html5

## 基础用法

### 一、html js 中自定义`function`

```js
function sayHello(value) {
  return `Hello Js~${value}`;
}
```

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

### 二、Vue中使用`evaluateJavascript`方法调用html中的`sayHello`方法

:::demo

component/web-view/vue-2-js

:::
