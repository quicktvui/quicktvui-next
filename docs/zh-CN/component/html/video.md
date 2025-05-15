---
title: Video
lang: zh-CN
---

# Video

## 基础用法

:::demo

component/html/video

:::


## API

### Attributes

| Name                           | Description       | Type           | Default |
|--------------------------------| ----------------- |--------------- |---------|
| width                           | 宽                | ^[number]     | —       |
| height                           | 高               | ^[number]     | —       |
| muted                           | 是否静音                  | ^[boolean]     | false       |
| loop                       | 是否循环播放        | ^[boolean]      | false       |
| autoplay                       | 是否自动播放        | ^[boolean]      | false       |
| src                       | 播放地址        | ^[string]      | —       |
| poster                       | 封面        | ^[string]      | —       |


### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| play                      | 播放                         | ^[Function]`() => void` |
| pause                  | 暂停                         | ^[Function]`() => void` |
| load                 | 加载                         | ^[Function]`() => void` |
| stop                     | 停止                         | ^[Function]`() => void` |
