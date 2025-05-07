---
title: MediaPlayer
lang: zh-CN
---

# MediaPlayer

## 一、简介

快应用音视频播放基于安卓`MediaPlayer`。

::: tip MediaPlayer
你可以在 [Android Documentation](https://developer.android.com/reference/android/media/MediaPlayer) 上查看更详细的介绍。
:::


## 二、播放状态

### 1、MediaPlayer 状态图

<img src="/component/player/mediaplayer_state_diagram.gif" />

`MediaPlayer`的状态图是一个反映其内部状态转换的直观工具。图中的椭圆代表`MediaPlayer`驻留的状态，而弧则代表播放控制，驱动`MediaPlayer`
状态进行过渡。这些弧有两种类型：单箭头表示同步函数调用，双箭头表示异步函数调用。

在`MediaPlayer`的生命周期中，有几个关键状态需要特别关注：

* `Idle`（就绪）状态：当`MediaPlayer`创建实例或者调用`reset()`函数后，播放器就处于这个状态。此时，播放器已经准备好，但还没有开始播放任何内容。
* `Error`（错误）状态：由于某些原因，如支持的音视频格式分辨率过高、输入数据流超时等，`MediaPlayer`可能进入错误状态。在这种状态下，播放器通常无法继续播放，需要进行错误处理。

### 2、MediaPlayer 生命周期

`MediaPlayer`的生命周期始于`Idle`状态，然后可能经过一系列的状态转换，最终结束。以下是`MediaPlayer`生命周期中的一些关键阶段：

* `Idle`（就绪）状态：这是`MediaPlayer`的起始状态，表示播放器已经准备好，但还没有开始播放。
* `Prepared`（准备）状态：在`Idle`状态之后，你需要调用`prepare()`或`prepareAsync()`方法来准备播放器。这将使播放器进入`Prepared`状态，此时播放器已经加载了音视频数据，但还没有开始播放。
* `Started`（开始）状态：一旦播放器准备好，你可以调用`start()`方法来开始播放。这将使播放器进入`Started`状态，开始从当前位置播放音视频内容。
* `Paused`（暂停）状态：在播放过程中，你可以调用`pause()`方法来暂停播放。这将使播放器进入`Paused`状态，保持当前的播放位置，以便稍后恢复播放。
* `Stopped`（停止）状态：如果你需要完全停止播放，可以调用`stop()`方法。这将使播放器进入`Stopped`状态，清除所有的播放状态，包括播放位置、音轨、字幕等。
* `Released`（释放）状态：在播放结束或者不再需要播放器时，你应该调用`release()`
  方法来释放播放器资源。这将使播放器进入`Released`状态，结束其生命周期。在这个阶段，播放器不再可用，所有的资源都被释放，无法再恢复到其他状态。


