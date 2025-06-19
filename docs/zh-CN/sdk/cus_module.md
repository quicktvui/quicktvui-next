## Moudle是什么？

Module是基于快应用基础架构扩展出来的自定义模块，是为sdk提供扩展功能的模块，例如下载功能、Toast等。

如果SDK默认提供的功能无法满足需求，可以通过自定义的方式实现自己的功能，例如自己的加密算法、支付模块等。

## 如何自定义？

自定义功能需要注意一下几点：

* Module实现IEsModule接口

* 方法必须是public方法，且同一个Module中不允许同名方法

* 参数支持类型：

* 基本数据类型：`int`, `String`, `boolean`

* 数组类型：`EsMap`, `EsArray`

* 回调类型：`EsPromise`

### Android端代码:

::: details 点击查看源码

``` java
// 实现IEsModule接口
public class MyModule implements IEsModule {

    @Override
    public void init(Context context) {

    }

    // 显示Toast
    public void showToast(String message) {
        //ToastUtils.showToastShort(msg);
        Toast.makeText(mContext, message, Toast.LENGTH_SHORT).show();
    }

    // ❌ 错误！！！同一个Module中不允许同名方法
    // 会导致vue调用不成功
    public void showToast() {}

    // 检测应用是否安装 带promise的回调方式
    public void isAppInstall(String packageName, EsPromise promise) {
        try {
            PackageInfo info = mContext.getPackageManager().getPackageInfo(packageName, 0);
            if(info != null) {
                PromiseHolder.create(promise).singleData(true).sendSuccess();
                return;
            }
        } catch (Exception e) {
        }
        PromiseHolder.create(promise).singleData(false).sendSuccess();//用内部提供个的工具直接发送
        //或者通过EsMap调用发送 promise必须要返回 否则vue层会有阻塞
        EsMap map = new EsMap();
        map.pushInt(key,value)
        map.pushString(key,value)
        try {
            promise.resolve(map);
        } catch (Throwable e) {
            promise.reject("程序异常");
            e.printStackTrace();
        }
    }

    @Override
    public void destroy() {

    }

    @Override
    public void destroy() {

    }
}

// 向指定的IEsComponent或者IEsModule发送事件(全局事件)
private void sendNativeEvent() {
    EsMap esMap = new EsMap();
    esMap.pushInt("status", 1);
    EsProxy.get().sendNativeEventTraceable(this, "onStatusChanged", esMap);
}
```

:::

## 注册

``` java
InitConfig initConfig = InitConfig.getDefault();
initConfig.setAppId("注册的APPID")
   .setSdkInitCallback(new EsKitInitCallback() { //使用EsKitInitCallback监听 注册你需要的自定义模块
       @Override
       public void onEsKitInitSuccess() {
           // 注册到SDK
           EsManager.get().registerModule(MyModule.class.getName());
       }
   });
```

## Vue调用

::: details Vue3

```text
import { Native } from "@extscreen/es3-vue";
// 参数1: module名称  参数2: 方法名称  参数3: 方法参数
Native.callNative('MyModule', 'showToast', "hello");

// 调用需要返回值的方法
Native.callNativeWithPromise('MyModule', 'isAppInstall', 'com.extscreen.runtime')
  .then((isInstall) => {
    console.log('isAppInstall', isInstall)
  });

// vue层接收回调信息
import { EventBus } from "@extscreen/es3-vue";

//注册：
EventBus.$on('onStatusChanged', this.onStatusChanged);

//取消注册：
EventBus.$off('onStatusChanged', this.onStatusChanged);

//处理回调
function onStatusChanged(e) {
  const status = e.status;
  console.log(`接收到的状态码:${status}`);
}
```

:::

::: details Vue2

```text
// 参数1: module名称  参数2: 方法名称  参数3: 方法参数
Vue.Native.callNative('MyModule', 'showToast', "hello");

// 调用需要返回值的方法
Vue.Native.callNativeWithPromise('MyModule', 'isAppInstall', 'com.extscreen.runtime')
    .then((isInstall)=>{
        console.log('isAppInstall', isInstall)
    });

// vue层接收回调信息
//注册：
ESApp.$on('onStatusChanged', this.onStatusChanged);

//取消注册：
ESApp.$off('onStatusChanged', this.onStatusChanged);

//处理回调
function onStatusChanged(e) {
   const status = e.status;
   console.log(`接收到的状态码:${  status}`);
}
```

:::
