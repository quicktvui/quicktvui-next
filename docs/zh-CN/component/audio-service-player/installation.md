---
title: AudioPlayerService
lang: zh-CN
---

# 集成

## 第一步、`package.json`添加依赖库

* `@extscreen/es3-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-player)
* `@extscreen/es3-audio-service-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-audio-service-player)

## 第二步、集成`ESPlayer`

[点击查看详细](/zh-CN/component/player/player#集成)

## 第三步、集成`ESAudioServicePlayer`

在`main.ts`中集成

```ts
import { createESAudioServicePlayer } from "@extscreen/es3-audio-service-player";

const audioServicePlayer = createESAudioServicePlayer();
app.use(audioServicePlayer);
```
