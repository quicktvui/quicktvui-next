---
title: API
lang: zh-CN
---

# qt 全局变量 ^(alpha)

全局变量`qt`中支持组件`API`快捷调用

示例代码

```ts
const viewRef = ref<QtIView>()
qt.view.requestFocus(viewRef)
```

### Component

| Name                       |    Component               | Description                                                         |
| ------------------------- | --------------------------- | ------------------------------------------------------------------- |
| `qt.animation`            |   QtAnimation               | [点击查看详细API](/zh-CN/component/animation/introduction#exposes)                 |
| `qt.appIcon`              |   QtAppIcon                 | [点击查看详细API](/zh-CN/component/app-icon#exposes)                  |
| `qt.button`               |   QtButton                  | [点击查看详细API](/zh-CN/component/button#exposes)                    |
| `qt.card`                 |   QtCard                    | [点击查看详细API](/zh-CN/component/card#exposes)                      |
| `qt.cardContainer`        |   QtCardContainer           | [点击查看详细API](/zh-CN/component/card-container#exposes)            |
| `qt.classifiedListView`   |   QtClassifiedListView      | [点击查看详细API](/zh-CN/component/classified-list-view#exposes)      |
| `qt.collapse`             |   QtCollapse                | [点击查看详细API](/zh-CN/component/collapse#exposes)                  |
| `qt.column`               |   QtColumn                  | [点击查看详细API](/zh-CN/component/column#exposes)                    |
| `qt.flexView`             |   QtFlexView                | [点击查看详细API](/zh-CN/component/flex-view#exposes)                 |
| `qt.gridView`             |   QtGridView                | [点击查看详细API](/zh-CN/component/grid-view#exposes)                 |
| `qt.image`                |   QtImage                   | [点击查看详细API](/zh-CN/component/image#exposes)                     |
| `qt.itemStore`            |   QtItemStore               | [点击查看详细API](/zh-CN/component/item-store#exposes)                |
| `qt.itemView`             |   QtItemView                | [点击查看详细API](/zh-CN/component/item-view#exposes)                 |
| `qt.largeList`            |   QtLargeList               | [点击查看详细API](/zh-CN/component/large-list#exposes)                |
| `qt.listItem`             |   QtListItem                | [点击查看详细API](/zh-CN/component/list-item#exposes)                 |
| `qt.listView`             |   QtListView                | [点击查看详细API](/zh-CN/component/list-view#exposes)                 |
| `qt.loading`              |   QtLoadingView             | [点击查看详细API](/zh-CN/component/loading#exposes)                   |
| `qt.lottieView`           |   QtLottie                  | [点击查看详细API](/zh-CN/component/lottie/introduction#exposes)                    |
| `qt.navBar`               |   QtNavBar                  | [点击查看详细API](/zh-CN/component/nav-bar#exposes)                   |
| `qt.playMarkView`         |   QtPlayMarkView            | [点击查看详细API](/zh-CN/component/play-mark-view#exposes)            |
| `qt.pluginView`           |   QtPluginView              | [点击查看详细API](/zh-CN/component/plugin-view#exposes)               |
| `qt.poster`               |   QtPoster                  | [点击查看详细API](/zh-CN/component/poster#exposes)                    |
| `qt.progressBar`          |   QtProgressBar             | [点击查看详细API](/zh-CN/component/progress-bar#exposes)              |
| `qt.qrCode`               |   QtQrCode                  | [点击查看详细API](/zh-CN/component/qr-code#exposes)                   |
| `qt.replaceChildView`     |   QtReplaceChild            | [点击查看详细API](/zh-CN/component/replace-child#exposes)             |
| `qt.rippleView`           |   QtRippleView              | [点击查看详细API](/zh-CN/component/ripple-view#exposes)               |
| `qt.row`                  |   QtRow                     | [点击查看详细API](/zh-CN/component/row#exposes)                       |
| `qt.scrollView`           |   QtScrollView              | [点击查看详细API](/zh-CN/component/scroll-view#exposes)               |
| `qt.section`              |   QtVueSection              | [点击查看详细API](/zh-CN/component/vue-section#exposes)               |
| `qt.seekBar`              |   QtSeekBar                 | [点击查看详细API](/zh-CN/component/seek-bar#exposes)                  |
| `qt.mediaSeries`          |   QtMediaSeries             | [点击查看详细API](/zh-CN/component/media-series#exposes)              |
| `qt.surfaceView`          |   QtSurfaceView             | [点击查看详细API](/zh-CN/component/surface-view#exposes)              |
| `qt.swiftList`            |   QtSwiftList               | [点击查看详细API](/zh-CN/component/swift-list#exposes)                |
| `qt.swiperSlide`          |   QtSwiperSlide             | [点击查看详细API](/zh-CN/component/swiper-slide#exposes)              |
| `qt.tabs`                 |   QtTabs                    | [点击查看详细API](/zh-CN/component/tabs#exposes)                      |
| `qt.tabsView`             |   QtTabsView                | [点击查看详细API](/zh-CN/component/tabs-view#exposes)                 |
| `qt.text`                 |   QtText                    | [点击查看详细API](/zh-CN/component/text#exposes)                      |
| `qt.transitionImg`        |   QtTransitionImg           | [点击查看详细API](/zh-CN/component/transition-img#exposes)            |
| `qt.view`                 |   QtView                    | [点击查看详细API](/zh-CN/component/view#exposes)                      |
| `qt.viewPager`            |   QtViewPager               | [点击查看详细API](/zh-CN/component/view-pager#exposes)                |
| `qt.waterfall`            |   QtWaterfall               | [点击查看详细API](/zh-CN/component/waterfall#exposes)                 |
| `qt.webView`              |   QtWebView                 | [点击查看详细API](/zh-CN/component/web-view#exposes)                  |
| `qt.x5WebView`            |   QtX5webView               | [点击查看详细API](/zh-CN/component/x5web-view#exposes)                |

### Module

| Name                      |    Module                   | Description                                                         |
| ------------------------- | --------------------------- | ------------------------------------------------------------------- |
| `qt.log`                  |   ESLog                     | [点击查看详细API](/zh-CN/module/log#exposes)                 |
| `qt.es`                   |   ES                        | [点击查看详细API](/zh-CN/module/es#exposes)                  |
| `qt.develop`              |   ESDevelop                 | [点击查看详细API](/zh-CN/module/develop#exposes)                    |
| `qt.toast`                |   ESToast                   | [点击查看详细API](/zh-CN/module/toast#exposes)                      |
| `qt.storage`              |   ESLocalStorage            | [点击查看详细API](/zh-CN/module/local-storage#exposes)            |
| `qt.device`               |   ESDevice                  | [点击查看详细API](/zh-CN/module/device#exposes)      |
| `qt.display`              |   ESDisplay                 | [点击查看详细API](/zh-CN/module/display#exposes)                  |
| `qt.network`              |   ESNetwork                 | [点击查看详细API](/zh-CN/module/network#exposes)                    |
| `qt.appList`              |   ESAppList                 | [点击查看详细API](/zh-CN/module/app-list#exposes)                 |
| `qt.power`                |   ESPower                   | [点击查看详细API](/zh-CN/module/power#exposes)                 |
| `qt.permission`           |   ESPermission              | [点击查看详细API](/zh-CN/module/permission#exposes)                 |
| `qt.usbDevice`            |   ESUsbDevice               | [点击查看详细API](/zh-CN/module/usb#exposes)                 |
| `qt.broadcast`            |   ESBroadcast               | [点击查看详细API](/zh-CN/module/broadcast#exposes)                 |
| `qt.audio`                |   ESAudio                   | [点击查看详细API](/zh-CN/module/audio#exposes)                 |
| `qt.shareData`            |   ESShareData               | [点击查看详细API](/zh-CN/module/share-data#exposes)                 |
| `qt.runtime`              |   ESRuntime                 | [点击查看详细API](/zh-CN/module/runtime#exposes)                 |
| `qt.plugin`               |   ESPlugin                  | [点击查看详细API](/zh-CN/module/plugin#exposes)                 |
| `qt.download`             |   ESDownload                | [点击查看详细API](/zh-CN/module/download#exposes)                 |
| `qt.upload`               |   ESUpload                  | [点击查看详细API](/zh-CN/module/upload#exposes)                 |
| `qt.actionBar`            |   ESActionBar               | [点击查看详细API](/zh-CN/module/action-bar#exposes)                 |
| `qt.iac`                  |   ESIAC                     | [点击查看详细API](/zh-CN/module/iac#exposes)                 |
| `qt.location`             |   ESLocation                | [点击查看详细API](/zh-CN/module/location#exposes)                 |
| `qt.provider`             |   ESContentProvider         | [点击查看详细API](/zh-CN/module/content-provider#exposes)                 |
| `qt.eventBus`             |   ESEventBus                | [点击查看详细API](/zh-CN/module/event-bus#exposes)                 |
| `qt.xlog`                 |   ESXLog                    | [点击查看详细API](/zh-CN/module/xlog#exposes)                 |
| `qt.brightness`           |   ESBrightness              | [点击查看详细API](/zh-CN/module/brightness#exposes)                 |
| `qt.service`              |   ESService                 | [点击查看详细API](/zh-CN/module/service#exposes)                 |








