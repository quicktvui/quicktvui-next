---
title: USB模块
lang: zh-CN
---

# USB模块

此模块调用`android`系统`USB`相关的功能。

:::demo ## 基础用法

module/usb/es-basic

:::

:::demo ## qt.usbDevice 用法 ^(alpha)

module/usb/qt-basic

:::


## API

### DataStructure

#### ESUsbDeviceInfo

USB设备信息

| Name              | Description       | Type                        |   Default   |
| ---------------- | ------------------ | ----------------------------|---------|
| deviceName       | 设备名称             | ^[string]                   |   -    |
| vendorId         | 供应商唯一标识符       | ^[number]                    |   -    |
| productId        | 产品唯一标识符        | ^[number]                    |   -    |
| deviceId         | 设备唯一标识符        | ^[number]                    |   -    |
| deviceProtocol   | 设备协议             | ^[number]                    |   -    |
| productName      | 产品名称             | ^[string]                    |   -    |
| serialNumber     | 序列号               | ^[string]                    |   -    |
| manufacturerName | 生产商名称            | ^[string]                    |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| isUsbDevicePermissionsGranted    | 该方法判断USB设备是否授权       | ^[Function]`isUsbDevicePermissionsGranted(vendorId: number, productId: number) => Promise<boolean>`   |
| requestUsbDevicePermission       | 该方法请求授权USB设备          | ^[Function]`requestUsbDevicePermission(permission: string, vendorId: number, productId: number) => Promise<boolean>`   |
| getUsbDeviceList       | 该方法获取USB设备列表          | ^[Function]`getUsbDeviceList() => Promise<Array<ESUsbDeviceInfo>>`   |
| getUsbDevice       | 该方法获取USB设备          | ^[Function]`getUsbDevice(vendorId: number, productId: number) => Promise<ESUsbDeviceInfo>`   |
| getUsbDeviceListByArray       | 该方法获取多个USB设备          | ^[Function]`getUsbDeviceListByArray(array: Array<Array<number>>) => Promise<Array<ESUsbDeviceInfo>>`   |
| addListener       | 该方法添加USB设备监听          | ^[Function]`addListener(listener: ESUsbDeviceListener) => void`   |
| removeListener       | 该方法删除USB设备监听          | ^[Function]`removeListener(listener: ESUsbDeviceListener) => void`   |
