---
title: transform
lang: zh-CN
---

# Transform

## CSS Transform 函数速查表

| 函数名              | 描述                            | 示例                                   | 是否支持 |
|---------------------|---------------------------------|----------------------------------------|----------|
| `translate(x, y)`   | 沿 X 和 Y 轴平移元素             | `transform: translate(50px, 20px);`    | ✅       |
| `translateX(x)`     | 沿 X 轴平移                     | `transform: translateX(50px);`         | ✅       |
| `translateY(y)`     | 沿 Y 轴平移                     | `transform: translateY(20px);`         | ✅       |
| `scale(x, y)`       | 沿 X 和 Y 轴缩放                | `transform: scale(1.5, 2);`            | ✅       |
| `scaleX(x)`         | 沿 X 轴缩放                     | `transform: scaleX(2);`                | ✅       |
| `scaleY(y)`         | 沿 Y 轴缩放                     | `transform: scaleY(0.5);`              | ✅       |
| `rotate(angle)`     | 旋转元素（单位为 deg 或 rad）   | `transform: rotate(45deg);`            | ✅       |
| `skew(x-angle, y)`  | 倾斜元素                        | `transform: skew(30deg, 20deg);`       | ❌       |
| `skewX(angle)`      | 沿 X 轴倾斜                    | `transform: skewX(30deg);`             | ❌       |
| `skewY(angle)`      | 沿 Y 轴倾斜                    | `transform: skewY(20deg);`             | ❌       |
| `matrix(a, b, c, d, e, f)` | 以 2D 矩阵形式定义变换     | `transform: matrix(1, 0, 0, 1, 30, 20);` | ❌     |
| `perspective(n)`    | 设置透视距离（3D 变换）         | `transform: perspective(500px);`       | ❌       |
