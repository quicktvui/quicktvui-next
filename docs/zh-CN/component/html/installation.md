---
title: PlayerManager
lang: zh-CN
---

# 集成

## 第一步、`package.json`添加依赖库

* `@quicktvui/html-core`![NPM Version](https://img.shields.io/npm/v/@quicktvui/html-core)
* `@extscreen/es3-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-player)
* `@extscreen/es3-video-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-video-player)
* `@extscreen/es3-audio-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-audio-player)
* `@extscreen/es3-soundpool-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-soundpool-player)

## 第二步、集成

在`main.ts`中集成

```ts
//1.集成 ESPlayer
import { createESPlayer } from "@extscreen/es3-player";

//2.集成 ESVideoPlayer
import { createESVideoPlayer } from '@extscreen/es3-video-player'

//3.集成 ESSoundPoolPlayer
import { createESSoundPoolPlayer } from '@extscreen/es3-soundpool-player'

//4.集成 ESAudioPlayer
import { createESAudioPlayer } from '@extscreen/es3-audio-player'

const player = createESPlayer();
app.use(player);

const videoPlayer = createESVideoPlayer()
app.use(videoPlayer)

const soundPlayer = createESSoundPoolPlayer()
app.use(soundPlayer)

const audioPlayer = createESAudioPlayer()
app.use(audioPlayer)
```

### 第三步、初始化

在`App.vue`中或者使用之前

```ts
import { useESPlayer } from "@extscreen/es3-player";
import type { ESPlayerConfiguration, ESPlayerDisplay } from "@extscreen/es3-player";

const playerManager = useESPlayer()
const playerDisplay: ESPlayerDisplay = {
  screenWidth: device.getScreenWidth(),//屏幕的宽度
  screenHeight: device.getScreenHeight(),//屏幕的高度
}
const config: ESPlayerConfiguration = {
  debug: true,
  display: playerDisplay,
  device: {
    deviceType: runtime.getRuntimeDeviceType() ?? ''//设备类型
  }
}
playerManager.init(config)
```
