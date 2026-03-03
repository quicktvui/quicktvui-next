---
title: Variable
lang: zh-CN
---

# 变量

## CSS 变量速查表

| 名称           | 示例                                                                 | 描述                                  | 支持情况 |
|----------------|----------------------------------------------------------------------|---------------------------------------|-----------|
| 定义变量       | `--main-color: #3498db;`                                             | 在某个选择器（如 `:root`）中定义变量 | ✅        |
| 使用变量       | `color: var(--main-color);`                                          | 使用 `var()` 调用已定义的变量         | ✅        |
| 作用域         | `:root { --a: 1px } .box { var(--a) }`                               | 变量在定义它的选择器及子元素中有效   | ❌        |
| 继承性         | 父元素设置 `--x: 10px`，子元素自动继承                               | CSS 变量支持继承                      | ❌        |
| fallback 默认值| `var(--not-exist, red)`                                              | 若变量不存在，使用备用值              | ❌        |
| JavaScript 读取| `element.style.getPropertyValue('--main-color')`                    | 用 JS 获取变量值                      | ❌        |
| JavaScript 设置| `element.style.setProperty('--main-color', '#000')`                 | 用 JS 设置变量值                      | ❌        |
| 嵌套函数中使用 | `padding: calc(var(--space) * 2);`                                   | 可配合 `calc()` 使用                  | ✅        |
| 响应式应用     | 可根据主题类修改 `--变量`，实现样式切换                             | 支持响应式主题                        | ✅        |
| 动画中使用     | `@keyframes { from { color: var(--start) } to { color: var(--end) } }` | 动画属性中也可使用变量               | ❌        |
