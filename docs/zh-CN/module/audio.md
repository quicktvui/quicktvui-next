---
title: 音量模块
lang: zh-CN
---

# 音量模块

使用此模块可以控制`android`系统的音量。

:::demo ## 基础用法

module/audio/es-basic

:::

:::demo ## qt.audio 用法 ^(alpha)

module/audio/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| requestAudioFocus                 | 该方法请求音频焦点     | ^[Function]`requestAudioFocus(streamType: ESAudioStreamType, durationHint: ESAudioDurationHint) => Promise<number>`   |
| abandonAudioFocus                 | 该方法释放音频焦点     | ^[Function]`abandonAudioFocus() => Promise<number>`   |
| getStreamVoiceCallMaxVolume       | 该方法获取最大通话音量  | ^[Function]`getStreamVoiceCallMaxVolume() => Promise<number>`   |
| getStreamVoiceCallVolume       | 该方法获取当前通话音量  | ^[Function]`getStreamVoiceCallVolume() => Promise<number>`   |
| getStreamSystemMaxVolume       | 该方法获取最大系统音量  | ^[Function]`getStreamSystemMaxVolume() => Promise<number>`   |
| getStreamSystemVolume       | 该方法获取当前系统音量  | ^[Function]`getStreamSystemVolume() => Promise<number>`   |
| getStreamRingMaxVolume       | 该方法获取铃声最大音量  | ^[Function]`getStreamRingMaxVolume() => Promise<number>`   |
| getStreamRingVolume       | 该方法获取铃声当前音量  | ^[Function]`getStreamRingVolume() => Promise<number>`   |
| getStreamMusicMaxVolume       | 该方法获取最大音乐音量  | ^[Function]`getStreamMusicMaxVolume() => Promise<number>`   |
| getStreamMusicVolume       | 该方法获取当前音乐音量  | ^[Function]`getStreamMusicVolume() => Promise<number>`   |
| getStreamAlarmMaxVolume       | 该方法获取最大提示音音量  | ^[Function]`getStreamAlarmMaxVolume() => Promise<number>`   |
| getStreamAlarmVolume       | 该方法获取当前提示音音量  | ^[Function]`getStreamAlarmVolume() => Promise<number>`   |
| getStreamMaxVolume       | 该方法获最大音量  | ^[Function]`getStreamMaxVolume(streamType: ESAudioStreamType) => Promise<number>`   |
| getStreamVolume       | 该方法获当前音量  | ^[Function]`getStreamVolume(streamType: ESAudioStreamType) => Promise<number>`   |
| adjustStreamVolume       | 该方法调整音量  | ^[Function]`adjustStreamVolume(streamType: ESAudioStreamType, direction: ESAudioDirection, flags: ESAudioManagerFlag) => void`   |
| setStreamVolume       | 该方法调整音量  | ^[Function]`setStreamVolume(streamType: ESAudioStreamType, volume: number, flags: ESAudioManagerFlag) => void`   |
| setStreamMute       | 该方法设置静音  | ^[Function]`setStreamMute(streamType: ESAudioStreamType, state: boolean) => void`   |

