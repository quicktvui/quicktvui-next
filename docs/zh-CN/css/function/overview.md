---
title: Color
lang: zh-CN
---

# 函数

## 一、CSS 函数速查表


# CSS 函数速查表

| 函数名           | 说明                                               | 示例                                    | 是否支持 |
|------------------|----------------------------------------------------|-----------------------------------------|----------|
| `calc()`         | 动态计算长度值                                     | `width: calc(100% - 50px)`              | ✅       |
| `var()`          | 使用 CSS 自定义变量                                 | `color: var(--main-color)`              | ✅       |
| `url()`          | 引用资源（如图片、字体）                            | `background-image: url('img.png')`      | ❌       |
| `rgb()`          | 设置 RGB 颜色值                                     | `color: rgb(255, 0, 0)`                 | ✅       |
| `rgba()`         | 设置 RGBA 颜色值，支持透明度                        | `color: rgba(255, 0, 0, 0.5)`           | ✅       |
| `hsl()`          | 设置 HSL 色彩值                                     | `color: hsl(120, 100%, 50%)`            | ✅       |
| `hsla()`         | 设置 HSLA 色彩值，支持透明度                        | `color: hsla(120, 100%, 50%, 0.3)`      | ✅       |
| `min()`          | 返回最小值，用于响应式布局                           | `width: min(100%, 600px)`               | ✅       |
| `max()`          | 返回最大值                                           | `width: max(300px, 50%)`                | ✅       |
| `clamp()`        | 设置一个值的最小、首选和最大范围                    | `width: clamp(300px, 50%, 600px)`       | ✅       |
| `attr()`         | 获取 HTML 属性值，用于 `content` 中                 | `content: attr(data-label)`             | ❌） |
| `env()`          | 用于读取环境变量（如 `safe-area-inset-*`）         | `padding: env(safe-area-inset-bottom)`  | ❌       |
| `repeat()`       | 在 `grid-template-columns` 等中重复模板             | `repeat(3, 1fr)`                         | ❌       |
| `linear-gradient()` | 创建线性渐变                                   | `background: linear-gradient(red, blue)`| ❌       |
| `radial-gradient()` | 创建放射状渐变                                  | `background: radial-gradient(red, blue)`| ❌       |
| `conic-gradient()`  | 创建圆锥渐变                                    | `background: conic-gradient(red, blue)` | ❌ |
