---
title: Media
lang: zh-CN
---

# 媒体查询

## CSS 媒体查询速查表


| 媒体查询类型 / 特性         | 说明                                   | 典型用法示例                        | 是否支持 |
|----------------------------|--------------------------------------|-----------------------------------|----------|
| all                        | 适用于所有设备                         | `@media all { ... }`               | ❌       |
| print                      | 打印设备                             | `@media print { ... }`             | ❌       |
| screen                     | 屏幕显示设备                         | `@media screen { ... }`            | ❌       |
| speech                     | 语音合成设备                         | `@media speech { ... }`            | ❌  |
| width                      | 设备视口宽度                        | `@media (width: 768px) { ... }`   | ❌       |
| min-width                  | 设备视口最小宽度                    | `@media (min-width: 768px) { ... }` | ❌     |
| max-width                  | 设备视口最大宽度                    | `@media (max-width: 1024px) { ... }` | ❌     |
| height                     | 设备视口高度                        | `@media (height: 600px) { ... }`  | ❌       |
| orientation                | 设备方向（portrait / landscape）  | `@media (orientation: portrait) { ... }` | ❌   |
| resolution                 | 设备分辨率                         | `@media (resolution: 2dppx) { ... }` | ❌     |
| aspect-ratio               | 设备宽高比                         | `@media (aspect-ratio: 16/9) { ... }` | ❌     |
| prefers-color-scheme       | 用户偏好的配色方案（light/dark）    | `@media (prefers-color-scheme: dark) { ... }` | ❌   |
| pointer                    | 指针设备的精确度                   | `@media (pointer: fine) { ... }`  | ❌       |
| hover                      | 设备是否支持悬停                   | `@media (hover: hover) { ... }`   | ❌       |
| any-pointer                | 任意指针设备的精确度               | `@media (any-pointer: coarse) { ... }` | ❌    |
