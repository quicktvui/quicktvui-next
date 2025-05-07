---
title: Collapsable
lang: zh-CN
---

# collapsable

Android 里如果一个 `View` 只用于布局它的子组件，则它可能会为了优化而从原生布局树中移除，因此该节点 DOM 的引用会丢失 `（比如调用 measureInAppWindow 无法获取到大小和位置信息）`。
把此属性设为 `false` 可以禁用这个优化，以确保对应视图在原生结构中存在。`(也可作为 View 的 Attribute 属性设置)`， 默认值为 `true`。

| Name               | Description      | Type                         | Default |
|--------------------|------------------|------------------------------| ------- |
| collapsable         |- | ^[enum]`'false' \| 'true'`|  `true`|
