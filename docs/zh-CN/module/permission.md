---
title: 权限模块
lang: zh-CN
---

# 权限模块

此模块用于管理`android`的应用权限。

:::demo ## 基础用法

module/permission/es-basic

:::

:::demo ## qt.permission 用法 ^(alpha)

module/permission/qt-basic

:::

## API

### DataStructure

#### ESRequestPermissionsResult

请求权限结果

| Name                      | Description           | Type               |   Default   |
| ------------------------- | ----------------------| ------------------ |---------|
| granted                   | 是否授权               | ^[boolean]          |   -    |
| grantedList               | 授权权限列表            | ^[Array<string>]    |   -    |
| deniedList                | 拒绝权限列表            | ^[Array<string>]    |   -    |
| deniedForeverList         | 永远拒绝权限列表         | ^[Array<string>]    |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| isPermissionsGranted             | 该方法判断权限是否授权          | ^[Function]`isPermissionsGranted(permissionList: Array<string>) => Promise<ESRequestPermissionsResult>`   |
| requestPermissions               | 该方法请求用户授权             | ^[Function]`requestPermissions(permissionList: Array<string>) => Promise<ESRequestPermissionsResult>`   |
