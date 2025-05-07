---
title: 日志模块
lang: zh-CN
---

# 日志模块

:::demo ## 基础用法

module/xlog/es-basic

:::

:::demo ## qt.xlog 用法 ^(alpha)

module/xlog/qt-basic

:::

## API

### DataStructure

#### ESXLogLevel

打印日志级别

| Name           | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| VERBOSE        | 开发调试过程中一些详细信息，不应该编译进产品中，只在开发阶段使用。  | ^[number]                      |   2    |
| DEBUG          | 用于调试的信息，编译进产品，但可以在运行时关闭。               | ^[number]                      |   3    |
| INFO           | 运行时的状态信息，这些状态信息在出现问题的时候能提供帮助。         | ^[number]                      |   4    |
| WARN           | 警告程序出现了异常，即将出现错误。                               | ^[number]                      |   5    |
| ERROR          | 程序已经出现了错误。                                         | ^[number]                      |   6    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| isLoggable                    | 判断对应级别日志是否打印     | ^[Function]`isLoggable(level: ESLogLevel) => boolean`   |
| setMinimumLoggingLevel         | 设置日志打印的最小级别      | ^[Function]`setMinimumLoggingLevel(level: ESLogLevel) => void`   |
| v                           | 打印`VERBOSE`级别日志      | ^[Function]`v(tag: string, ...args: any[]) => void`   |
| d                           | 打印`DEBUG`级别日志      | ^[Function]`d(tag: string, ...args: any[]) => void`   |
| i                           | 打印`INFO`级别日志      | ^[Function]`i(tag: string, ...args: any[]) => void`   |
| w                           | 打印`WARN`级别日志      | ^[Function]`w(tag: string, ...args: any[]) => void`   |
| e                           | 打印`ERROR`级别日志      | ^[Function]`e(tag: string, ...args: any[]) => void`   |


