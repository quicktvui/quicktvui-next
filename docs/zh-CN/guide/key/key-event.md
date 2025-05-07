---
title: KeyEvent
lang: zh-CN
---

# 按键事件

::: warning 注意

仅在[`Page`](/zh-CN/guide/page/type)中使用生效

:::

## 基础用法

在`setup`中编写 `onKeyDown` 和 `onKeyUp` 方法，并在`return`中返回此方法。

```ts

function onKeyDown(keyEvent: ESKeyEvent) {
  //按键被按下
  //处理业务逻辑
}

function onKeyUp(keyEvent: ESKeyEvent) {
  //按键被抬起
  //处理业务逻辑
}

return {
  onKeyDown,
  onKeyUp,
}
```

:::demo

module/key/es-event

:::

## API

### DataStructure

#### ESKeyEvent

按键事件

| Name                        | Description                   | Type                        | Default |
| --------------------------- | ------------------------------| ----------------------------|---------|
| action                      | 按键动作                        | ^[ESKeyAction]              |   -    |
| keyCode                     | 键值                           | ^[ESKeyCode]                |   -    |
| keyRepeat                   | 重复按键的次数                   | ^[number]                   |   -    |

#### ESKeyAction

按键动作

| Name                        | Description                   | Type                        |   Default   |
| --------------------------- | ------------------------------| ----------------------------|---------|
| ES_KEY_ACTION_DOWN          | 按下                 | ^[ESKeyAction]                     |   -    |
| ES_KEY_ACTION_UP            | 抬起                 | ^[ESKeyAction]                    |   -    |

#### ESKeyCode

按键值

| Name                        | Description                   | Type                        |   Default   |
| --------------------------- | ------------------------------| ----------------------------|---------|
| ES_KEYCODE_ENTER            | 回车键                         | ^[number]                     |   66    |
| ES_KEYCODE_DPAD_CENTER      | 导航键 确定键                 | ^[number]                    |   23    |
| ES_KEYCODE_DPAD_UP          | 导航键 向上                 | ^[number]                    |   19    |
| ES_KEYCODE_DPAD_DOWN        | 导航键 向下                 | ^[number]                    |   20    |
| ES_KEYCODE_DPAD_LEFT        | 导航键 向左                 | ^[number]                    |   21    |
| ES_KEYCODE_DPAD_RIGHT       | 导航键 向右                 | ^[number]                    |   22    |
| ES_KEYCODE_BACK             | 返回键                 | ^[number]                    |   4    |
| ES_KEYCODE_ESCAPE           | 回退键                 | ^[number]                    |   111    |
| ES_KEYCODE_MENU             | 菜单键                 | ^[number]                    |   82    |
| ES_KEYCODE_SEARCH           | 搜索键                 | ^[number]                    |   84    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| onKeyDown                    | 监听按键按下                 | ^[Function]`onKeyDown(keyEvent: ESKeyEvent): void`   |
| onKeyUp                    | 监听按键抬起                 | ^[Function]`onKeyUp(keyEvent: ESKeyEvent): void`   |
