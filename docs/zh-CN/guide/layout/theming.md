---
title: 'Theming'
lang: zh-CN
---

# 自定义主题

## 第一步：main.ts 中注册主题样式

```ts
const app: ESAppContext = createESApp(application, router, {
  debug: false
});
//主题管理器
const themeManager = app.theme;
//注册主题
themeManager.registerTheme("light", {
  "--primary-color": "#9890ff",
  "--text-color": "#000000",
  "--bg-color": "#ffffff",
  "--divider-color": "#40b883",
});

themeManager.registerTheme("dark", {
  "--primary-color": "#ff4d4f",
  "--text-color": "red",
  "--bg-color": "#1f1f1f",
  "--divider-color": "#91b200",
});

```

## 第二步：main.ts 中使用指定的主题样式

```ts
themeManager.setTheme("light");
```

## 第三步：页面和组件中使用注册的主题的样式的 CSS 变量即可
