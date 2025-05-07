---
title: Power
lang: zh-CN
---

# 电源模块

使用此模块可以控制`android`电源是否唤醒。

`wakeLockAcquire` 和 `wakeLockRelease` 是与 Android 设备的电源管理相关的两个操作，它们通常用于控制设备的唤醒状态，确保应用在执行某些需要保持设备唤醒的任务时，设备不会进入休眠状态。

### wakeLockAcquire

`wakeLockAcquire` 指的是获取一个唤醒锁（Wake Lock）。在 Android
中，唤醒锁是一种机制，允许应用请求系统保持CPU运行和屏幕亮起，即使在没有用户交互的情况下。这通常用于需要长时间运行的任务，比如下载文件、播放音乐或视频等。通过获取唤醒锁，应用可以防止设备在这些任务进行时进入休眠状态。

### wakeLockRelease

`wakeLockRelease` 指的是释放之前获取的唤醒锁。当应用完成需要保持设备唤醒的任务后，应该释放唤醒锁，以允许设备根据需要进入休眠状态。这是非常重要的，因为不释放唤醒锁会导致设备持续保持唤醒状态，从而消耗更多的电池电量。

### 使用注意事项

- **适时获取和释放**：确保在需要时获取唤醒锁，并在任务完成后立即释放。
- **考虑电池消耗**：频繁或长时间地持有唤醒锁会显著影响电池寿命，因此应谨慎使用。
- **权限要求**：获取唤醒锁需要相应的权限（`android.permission.WAKE_LOCK`），需要在应用的`AndroidManifest.xml`文件中声明。
- **API版本兼容性**：不同版本的Android系统对唤醒锁的管理可能有所不同，开发时应考虑目标设备的API版本。

正确使用唤醒锁对于提升用户体验和节省电池电量至关重要。开发者应根据应用的实际需求合理管理唤醒锁，避免不必要的电池消耗。

:::demo ## 基础用法

module/power/es-basic

:::

:::demo ## qt.power 用法 ^(alpha)

module/power/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                |
| -------------------------------- | --------------------------- | ------------------------------------|
| wakeLockAcquire                  | 获取一个唤醒锁                 | ^[Function]`() => Promise<boolean>`   |
| wakeLockRelease                  | 释放之前获取的唤醒锁            | ^[Function]`() => Promise<boolean>`   |


