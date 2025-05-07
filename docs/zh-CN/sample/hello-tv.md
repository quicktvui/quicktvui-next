
# HelloTV

HelloTV是基于 [QuickTVUI](http://quicktvui.com/) 框架的视频点播直播应用，面向使用遥控器交互的安卓大屏设备。
项目目的是让开发者通过对本项目源码的简单修改，快速实现一些TV端常见的功能页面，从而加速开发进度。如果使用者并不具备编程能力，可以参考[HelloTV-Case](https://github.com/quicktvui/HelloTV-Case)项目，简单修改该项目配置文件就可以快速实现一个标准化的视频类应用。
点播页面包括瀑布流首页、内容列表、筛选、搜索、详情、历史、收藏、登录等，直播页面包括多级列表页、播放详情页等。
以下是一些页面效果：

***瀑布流首页***

<img width="95%" src="https://extcdn.hsrc.tv/data_center/files/2024/07/10/9a62dd70-e787-4d5f-8294-d2acd79c23bf.jpeg"/>

***搜索***

<img width="95%" src="https://extcdn.hsrc.tv/data_center/files/2024/07/10/9204f370-3230-4f56-b7df-c4da1283fd89.jpeg"/>

***筛选***

<img width="95%" src="https://extcdn.hsrc.tv/data_center/files/2024/07/10/3c860f27-cefe-47a9-b3ea-c9bbe761e2e2.jpeg"/>

***详情页***

<img width="95%" src="https://extcdn.hsrc.tv/data_center/files/2024/07/10/c2c6d9e0-ca8a-4ff1-a5ce-e639395ad33f.jpeg"/>

***内容编辑页***

<img width="95%" src="https://extcdn.hsrc.tv/data_center/files/2024/07/10/fc811902-d468-4828-b030-0f7561c1816b.jpeg"/>

## 快速开始

### 调试
#### 1. 确认编译环境
建议windows:
- node version 16.20.2
- npm version 8.10


#### 2. 安装运行Runtime
下载并安装 [运行环境](/zh-CN/runtime/runtime) (需要日志时使用debug包，否则使用release)

#### 3. 安装依赖
进入项目录下
```bash
npm install --legacy-peer-deps
```
#### 4. 编译调试
```bash
npm run dev
```
#### 5. 打开运行Runtime apk，查看效果

点击下图加载测试代码

<img width="95%" src="/guide/basic/debug_runtime_ok.jpg"/>


::: warning 注意：这里电脑调试地址要改成你电脑本机ip
:::

```bash
adb shell am broadcast -a  com.extscreen.runtime.ACTION_CHANGE_DEBUG_SERVER --es ip 192.168.xx.xx(电脑IP地址)
```
关于adb等其它配置具体说明请查看 <u>[安装和环境配置](/zh-CN/guide/basic/installation) </u>


最后看到加载出页面，表示完成调试，即可随时修改源码查看效果。


#### 6. 打包生成APK

[APK配置](https://github.com/quicktvui/hellotv/blob/master/android/README.md)

``` bash
# 生成debug包
npm run build-apk-debug
# 生成release包
npm run build-apk-release
```
打包完成后apk在 `./android/app/build/outputs/apk/` 文件夹下



## 开发进度
- [x] 瀑布流首页
- [x] 搜索页
- [x] 媒资详情页
- [x] 筛选页
- [x] 多级列表页
- [x] 一键打包生成APK

以上页面开发完成

开发中
- [ ] 内容编辑页
- [ ] 短视频浏览

## 其他
更多信息请查看[源码](https://github.com/quicktvui/hellotv)
