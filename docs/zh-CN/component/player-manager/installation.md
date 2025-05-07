---
title: PlayerManager
lang: zh-CN
---

# 集成

## 第一步、`package.json`添加依赖库

* `@extscreen/es3-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-player)
* `@extscreen/es3-player-manager`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-player-manager)

## 第二步、集成`ESPlayer`

[点击查看详细](/zh-CN/component/player/player#集成)

## 第三步、集成`ESPlayerManager`

在`main.ts`中集成

```ts
import { createESPlayerManager } from "@extscreen/es3-player-manager";

const playerManager = createESPlayerManager()
app.use(playerManager);
```

## 示例

你可以在[quicktvui-playground](https://github.com/quicktvui/quicktvui-playground/tree/master/es-player-manager) 上查看示例。

你可以在[quicktvui-api-demo-vue3](https://github.com/quicktvui/quicktvui-api-demo-vue3/tree/main/src/components/es-player-manager)
上查看API Demo。
