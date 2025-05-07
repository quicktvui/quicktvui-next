---
title: NativeComponent
lang: zh-CN
---

# 自定义原生组件

## 第一步、注册 Element

* 安卓端自定义了个原生组件 `XXXNativeComponent`。
* 在 `main.ts`中调用`registerElement`注册`Element`

```ts
import { registerElement } from "@extscreen/es3-vue";

const xxxxElement = {
  component: {
    // 1. XXXNativeComponent 对应 android 端组件的名称
    name: 'XXXNativeComponent',
    processEventData(evtData, nativeEventParams: {
      eventName: string
      eventData: string
    }) {
      const { handler: event, __evt: nativeEventName } = evtData;
      // 2. 处理 android 端组件发出的事件，并处理参数
      switch (nativeEventName) {
        // android 端发出事件 onXXXNativeEvent
        case 'onXXXNativeEvent':
          event.eventName = nativeEventParams.eventName;
          event.eventData = nativeEventParams.eventData;
          break;
        default:
          break;
      }
      return event;
    },
  },
}
registerElement('XXXNativeComponent', xxxxElement);

```

::: warning 注意：注册的 Element 的 tag 和 name 都要和 android 端注册的组件的名称相同。
:::

## 第二步、封装 Component

* 渲染 `XXXNativeComponent` `Element`。
* 在 `ESApp`中调用`component`方法注册`component`

```ts
import { ESApp, Native, registerElement } from "@extscreen/es3-vue";

// 1、自定义vue component 名称为：xxx-view
app.component('XxxView', {
  // XXX-event 事件
  emits: [
    'XXX-event',
  ],
  setup(props, context) {
    const viewRef = ref()

    //2、自定义组件方法
    function setXXXParams(text: string) {
      //调用 android 端组件的 setXXXParamsXXX 方法
      Native.callUIFunction(viewRef.value, 'setXXXParamsXXX', [text], (res) => {
        //
      });
    }

    context.expose({
      //3.暴露组件方法
      setXXXParams,
    })
    return () => {
      const children = context.slots.default && context.slots.default()
      return h(
        //4.调用h函数渲染 XXXNativeComponent Element
        'XXXNativeComponent',
        {
          ref: viewRef,
          //5.接受 android 组件发出的 onXXXNativeEvent 事件，并转发 XXX-event 事件
          onXXXNativeEvent: (evt) => {
            context.emit('XXX-event', evt.eventName, evt.eventData);
          },
        },
        //6. 渲染slot
        children
      )
    }
  },
});
```

## 第三步、使用 Component

```vue

<template>
  <!-- 使用 xxx-view 组件-->
  <xxx-view class="es-sdk-root-css" />
</template>
<script>

import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Index',
  setup() {
    //
    return {
      //
    }
  },
});

</script>
<style>
.es-sdk-root-css {
  width: 1920px;
  height: 1080px;
}
</style>

```


