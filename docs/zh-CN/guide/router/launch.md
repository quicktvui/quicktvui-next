---
title: 启动模式
lang: zh-CN
---

# 启动模式

页面启动有三种模式。

* `Standard`标准模式

  `ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD`
* `SingleTask`单任务模式

  `ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_SINGLE_TASK`
* `ClearTask`清空任务模式

  `ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_CLEAR_TASK`

下面以4个页面为例，介绍这三种启动模式。

* `A`页面配置启动模式：清空任务模式
* `B`页面配置启动模式：标准模式
* `C`页面配置启动模式：标准模式
* `D`页面配置启动模式：单任务模式

## `Standard`标准模式

`routes.ts`配置

```ts
  [{
  path: '/index',
  name: 'index',
  component: index,
  launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_STANDARD
}]
```

* 打开页面：`A` ==> `B`==> `C`==> `D`
  <img src="/guide/router/lifecycle_standard_launch.png" />

----------

* 关闭页面：`D` ==> `C`==> `B`==> `A`
  <img src="/guide/router/lifecycle_standard_finish.png" />

## `SingleTask`单任务模式

`routes.ts`配置

```ts
  [{
  path: '/index',
  name: 'index',
  component: index,
  launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_SINGLE_TASK,
}]
```

* 打开页面：`B` ==> `D`==> `C`==> `D`
  <img src="/guide/router/lifecycle_single_task_launch.png" />

----------

* 关闭页面：`D` ==> `B`
  <img src="/guide/router/lifecycle_single_task_finish.png" />

## `ClearTask`清空任务模式

`routes.ts`配置

```ts
  [{
  path: '/index',
  name: 'index',
  component: index,
  launchMode: ESRouteLaunchMode.ES_ROUTE_LAUNCH_MODE_CLEAR_TASK,
}]
```

* 打开页面：`B` ==> `C`==> `A`==> `D`
  <img src="/guide/router/lifecycle_clear_task_launch.png" />

----------

* 关闭页面：`D` ==> `A`
  <img src="/guide/router/lifecycle_clear_task_finish.png" />
