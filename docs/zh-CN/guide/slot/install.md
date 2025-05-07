# 集成

## 第1步：`package.json`引入库

```
"@extscreen/es3-core": "1.1.12",
"@extscreen/es3-router": "^1.1.0"
```

## 第2步：创建`RouteMap`

创建`routes.ts`加入页面路由配置。

下面以`index.vue`页面为例：

```js
import index from "./views/index.vue";

const routes = [
	{
		path: '/index',
		name: 'index',
		component: index,
	}
]
```

## 第3步：`main.ts`中初始化

```js

import {createESSlot} from '@extscreen/es3-router'
import routes from "./routes.ts";
import type { Router} from '@extscreen/es3-router';

const routerOptions = {
	routes,
}

//创建slot router
const router: Router = createESSlot(routerOptions)
const app: ESApp = createESApp(application, router);
app.use(install);

```

## 第4步：`App.vue`中初始化

使用`es-slot-view`轻卡路由标签

``` js
<template>
  <div id="root">
    <es-slot-view/>
  </div>
</template>
```

配置完成，并且初始化成功后就可以进行轻卡的开发了。
