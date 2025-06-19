## Component是什么？

Component是为sdk提供扩展显示组件的模块，例如播放器等。 如果SDK默认提供的组件无法满足需求，可以通过自定义的方式实现自己的功能，例如自己的UI组件。

## 如何自定义？

自定义功能需要注意一下几点：

* Component实现IEsComponent接口
* View实现IEsComponentView接口
* 方法必须是public方法，且同一个Component中不允许同名方法
* 方法的第一个参数必须是自定义的View本身
* 属性方法必须使用EsComponentAttribute的注解
* 注解可设置index来决定属性设置的优先级，值越小，优先级越高，取值范围0~100，默认值100
* 参数支持类型：
* 基本数据类型：`int`, `String`, `boolean`
* 数组类型：`EsMap`, `EsArray`
* 回调类型：`EsPromise`

### Android端代码:

::: details 点击查看源码

``` java
// 创建View // 实现IEsComponentView接口
public final class VideoPlayerView extends FrameLayout implements IEsComponentView {
    public VideoPlayerView(Context context) {
        super(context);
    }
}

//将View与Component关联 实现IEsComponent接口
public class MyVideoComponent implements IEsComponent<VideoComponent.VideoPlayerView> {
    @Override
    public VideoPlayerView createView(Context context) {
        return new VideoPlayerView(context);
    }
    // 对应vue标签的属性 <video-player ref="video" :autoPlay=false />
    @EsComponentAttribute(index = 0) // 如果各属性之间存在顺序执行问题，可指定属性调用顺序
    public void autoPlay(VideoPlayerView view, boolean auto){
        view.autoPlay(auto);
    }
    // 对应vue标签的属性  <video-player ref="video" :src=videoUrl />
    @EsComponentAttribute
    public void src(VideoPlayerView view, String url) {
        view.setUrl(url);
    }

    // 对应vue标签的方法 this.$refs.video.pause()
    @Override
    public void dispatchFunction(VideoPlayerView view, String eventName, EsArray params, @Nullable EsPromise promise) {
        switch (eventName){
            case "play":
                String url = params.getString("url");
                break;
            case "pause":
                break;
            case "getPosition": // 获取播放进度
                if(promise != null) {
                    promise.resolve(view.getCurrentPlayPositioin());
                }
                break;
        }
    }

    // 对应vue标签的回调  <video-player @player-status-changed="onPlayerStatusChanged" />
    @Override
    public void onPlayerStatusChanged(int playerStatus) throws RemoteException {
         EsMap esMap = new EsMap();
         esMap.pushInt("playerStatus", playerStatus);
         //sendUIEvent方法：向UI控件发送事件
         EsProxy.get().sendUIEvent(view.getId(), "onPlayerStatusChanged", esMap);
    }

    @Override
    public void destroy(VideoView view) {
    }
}
```

:::

## 注册

### 1. SDK注册方式

``` java
InitConfig initConfig = InitConfig.getDefault();
initConfig.setAppId("注册的APPID")
   .setSdkInitCallback(new EsKitInitCallback() { //使用EsKitInitCallback监听 注册你需要的自定义模块
       @Override
       public void onEsKitInitSuccess() {
           // 注册到SDK
           EsManager.get().registerComponent(MyVideoComponent.class.getName());
       }
   });
```

### 2. Vue注册方式

::: details vue3注册方式

```text
//vue3注册方式

/**
 * 播放器view
 */
function registerMyVideoPlayerViewComponent(app: ESApp) {

  const videoViewComponent = {
    component: {
      name: 'MyVideoComponent',
      processEventData(evtData, nativeEventParams: {
        position: number
      }) {
        const {handler: event, __evt: nativeEventName} = evtData;
        switch (nativeEventName) {
          //------------------播放进度回调-----------------------
          case 'onPlayerPositionChanged':
            event.position = nativeEventParams.position;
            break;
          default:
        }
        return event;
      },
    },
  }
  registerElement('MyVideoComponent', videoViewComponent);

  //
  const VideoViewImpl = defineComponent({
    emits: [
      'player-position-changed',
      //需要自己添加 名字自拟
    ],
    setup(props, context) {
      const videoPlayerViewComponentRef = ref()

      const start = (progress: number): void => {
        console.log('-------ESVideoPlayerViewComponent--------start-------->>>>')
        Native.callUIFunction(videoPlayerViewComponentRef.value, 'start', [progress], (res) => {
          //console.log('res-------->>>>' , res)
        });
      }
      const seekTo = (progress: number): void => {
        Native.callUIFunction(videoPlayerViewComponentRef.value, 'seekTo', [progress], (res) => {
          //console.log('res-------->>>>' , res)
        });
      }
      const pause = (): void => {
        console.log('-------ESVideoPlayerViewComponent--------pause-------->>>>')
        Native.callUIFunction(videoPlayerViewComponentRef.value, 'pause', (res) => {
          //console.log('res-------->>>>' , res)
        });
      }
      const getCurrentPosition = (): void => {
        Native.callUIFunction(videoPlayerViewComponentRef.value, 'getCurrentPosition',
          (res) => {
            //console.log('res-------->>>>' , res)
          });
      }
      const getDuration = (): void => {
        Native.callUIFunction(videoPlayerViewComponentRef.value, 'getDuration',
          (res) => {
            //console.log('res-------->>>>' , res)
          });
      }

      return () => {
        return h(
          'MyVideoComponent', {
            ref: videoPlayerViewComponentRef,
            onPlayerPositionChanged: (evt) => {
              context.emit('player-status-changed', evt.position);
            },
          },
        )
      }
    },
  })
  app.component('VideoPlayer', VideoViewImpl);
}

```

:::

::: details Vue2注册方式

```text
  //vu2注册方式
function ESAndroidPlayerViewComponent() {
  Vue.registerElement('MyVideoComponent', {
    component: {
        name: 'MyVideoComponent',
    }
  }),
  Vue.component('VideoPlayer', {
    methods: {
        pause(){
            Vue.Native.callUIFunction(this.$refs.player, 'pause', [], (res) => {
              console.log('res', res)
            });
        },
        seekTo(position){
            Vue.Native.callUIFunction(this.$refs.player, 'seekTo', [position], (res) => {
                console.log('res', res)
            });
        },
        getCurrentPositoin(callback){
            Vue.Native.callUIFunction(this.$refs.player, 'getCurrentPosition', [],
          (res) => {
            callback(res)
          });
        },
    }
  })
}

```

:::

## Vue调用

::: details 点击查看源码

```vue
<video-player
  ref="video"
  class="video"
  :autoPlay="false"
  :src='videoUrl'
  @player-status-changed='onPlayerStatusChanged'
/>
```

```text
function onPlayerStatusChanged(e) {
   const playerStatus = e.playerStatus;
   console.log(`接收到的播放状态:${  playerStatus}`);
}

this.$refs.video.seekTo(1000)
this.$refs.video.pause()
```

:::
