import {
  actionBar,
  appList,
  audio,
  brightness,
  broadcast,
  develop,
  device,
  display,
  download,
  es,
  eventBus,
  focus,
  iac,
  location,
  log,
  logUpload,
  network,
  permission,
  plugin,
  power,
  provider,
  runtime,
  service,
  shareData,
  storage,
  toast,
  upload,
  usbDevice,
  xlog,
} from '@extscreen/es3-core'
import { createQtAnimationAPI } from '../../animation'
import { createQtAppIconAPI } from '../../app-icon'
import { createQtButtonAPI } from '../../button'
import { createQtCardAPI } from '../../card'
import { createQtCardContainerAPI } from '../../card-container'
import { createQtClassifiedListViewAPI } from '../../classified-list-view'
import { createQtCollapseAPI } from '../../collapse'
import { createQtColumnAPI } from '../../column'
import { createQtFlexViewAPI } from '../../flex-view'
import { createQtGridViewAPI } from '../../grid-view'
import { createQtImageAPI } from '../../img'
import { createQtItemStoreAPI } from '../../item-store'
import { createQtItemViewAPI } from '../../item-view'
import { createQtLargeListAPI } from '../../large-list'
import { createQtListItemAPI } from '../../list-item'
import { createQtListViewAPI } from '../../list-view'
import { createQtLoadingViewAPI } from '../../loading-view'
import { createQtLottieViewAPI } from '../../lottie'
import { createQtNavBarAPI } from '../../nav-bar'
import { createQtPlayMarkViewAPI } from '../../play-mark-view'
import { createQtPluginViewAPI } from '../../plugin-view'
import { createQtPosterAPI } from '../../poster'
import { createQtProgressBarAPI } from '../../progress-bar'
import { createQtQRCodeAPI } from '../../qr-code'
import { createQtReplaceChildViewAPI } from '../../replace-child'
import { createQtRippleViewAPI } from '../../ripple-view'
import { createQtRowAPI } from '../../row'
import { createQtScrollViewAPI } from '../../scroll-view'
import { createQtSectionAPI } from '../../section'
import { createQtSeekBarAPI } from '../../seek-bar'
import { createQtMediaSeriesAPI } from '../../series'
import { createQtSurfaceViewAPI } from '../../surface-view'
import { createQtSwiftListAPI } from '../../swift-list'
import { createQtSwiperSlideAPI } from '../../swiper-slide'
import { createQtTabAPI } from '../../tabs'
import { createQtTabsViewAPI } from '../../tabs-view'
import { createQtTextAPI } from '../../text'
import { createQtTransitionImgAPI } from '../../transition-img'
import { createQtViewAPI } from '../../view'
import { createQtViewPagerAPI } from '../../view-pager'
import { createQtWaterfallAPI } from '../../waterfall'
import { createQtWebViewAPI } from '../../webview'
import { createQtX5WebViewAPI } from '../../x5webview'
import { createQtRadioAPI } from '../../radio-group'
import { createQtCheckboxAPI } from '../../checkbox-group'
import { createQTIInputViewAPI } from '../../input'
import { createQtRatingBarAPI } from '../../rating-bar-view'
import { createQtSwitchAPI } from '../../switch'
import { createQtLongImageAPI } from '../../long-image-view'
import { createQtIndicatorListViewAPI } from '../../indicator-list-view'
import { createQtRangeSeekBarAPI } from '../../range-seek-bar'

import type {
  ES,
  ESActionBar,
  ESAppList,
  ESAudio,
  ESBrightness,
  ESBroadcast,
  ESContentProvider,
  ESDevelop,
  ESDevice,
  ESDisplay,
  ESDownload,
  ESEventBus,
  ESFocus,
  ESIAC,
  ESLocalStorage,
  ESLocation,
  ESLog,
  ESLogUpload,
  ESNetwork,
  ESPermission,
  ESPlugin,
  ESPower,
  ESRuntime,
  ESService,
  ESShareData,
  ESToast,
  ESUpload,
  ESUsbDevice,
  ESXLog,
} from '@extscreen/es3-core'

import type { QtTransitionImgAPI } from '../../transition-img'
import type { QtSwiftListAPI } from '../../swift-list'
import type { QtSurfaceViewAPI } from '../../surface-view'
import type { QtMediaSeriesAPI } from '../../series'
import type { QtSeekBarAPI } from '../../seek-bar'
import type { QtSectionAPI } from '../../section'
import type { QtScrollViewAPI } from '../../scroll-view'
import type { QtRowAPI } from '../../row'
import type { QtRippleViewAPI } from '../../ripple-view'
import type { QtReplaceChildViewAPI } from '../../replace-child'
import type { QtProgressBarAPI } from '../../progress-bar'
import type { QtPosterAPI } from '../../poster'
import type { QtPluginViewAPI } from '../../plugin-view'
import type { QtPlayMarkViewAPI } from '../../play-mark-view'
import type { QtNavBarAPI } from '../../nav-bar'
import type { QtLottieViewAPI } from '../../lottie'
import type { QtLoadingViewAPI } from '../../loading-view'
import type { QtListViewAPI } from '../../list-view'
import type { QtListItemAPI } from '../../list-item'
import type { QtLargeListAPI } from '../../large-list'
import type { QtItemViewAPI } from '../../item-view'
import type { QtItemStoreAPI } from '../../item-store'
import type { QtImageAPI } from '../../img'
import type { QtGridViewAPI } from '../../grid-view'
import type { QtFlexViewAPI } from '../../flex-view'
import type { QtColumnAPI } from '../../column'
import type { QtCollapseAPI } from '../../collapse'
import type { QtClassifiedListViewAPI } from '../../classified-list-view'
import type { QtCardContainerAPI } from '../../card-container'
import type { QtCardAPI } from '../../card'
import type { QtButtonAPI } from '../../button'
import type { QtAppIconAPI } from '../../app-icon'
import type { QtAnimationAPI } from '../../animation'
import type { QtTextAPI } from '../../text'
import type { QtTabAPI } from '../../tabs'
import type { QtTabsViewAPI } from '../../tabs-view'
import type { QtSwiperSlideAPI } from '../../swiper-slide'
import type { QtX5WebViewAPI } from '../../x5webview'
import type { QtWebViewAPI } from '../../webview'
import type { QtWaterfallAPI } from '../../waterfall'
import type { QtViewAPI } from '../../view'
import type { QtViewPagerAPI } from '../../view-pager'
import type { QtQRCodeAPI } from '../../qr-code'
import type { QTIInputViewAPI } from '../../input'
import type { QtRadioAPI } from '../../radio-group'
import type { QtCheckboxAPI } from '../../checkbox-group'
import type { QtRatingBarAPI } from '../../rating-bar-view'
import type { QtSwitchAPI } from '../../switch'
import type { QtLongImageAPI } from '../../long-image-view'
import type { QtIndicatorListViewAPI } from '../../indicator-list-view'
import type { QtRangeSeekBarAPI } from '../../range-seek-bar'

export interface QtAPI {
  animation: QtAnimationAPI
  appIcon: QtAppIconAPI
  button: QtButtonAPI
  card: QtCardAPI
  cardContainer: QtCardContainerAPI
  classifiedListView: QtClassifiedListViewAPI
  collapse: QtCollapseAPI
  column: QtColumnAPI
  flexView: QtFlexViewAPI
  gridView: QtGridViewAPI
  image: QtImageAPI
  itemStore: QtItemStoreAPI
  itemView: QtItemViewAPI
  largeList: QtLargeListAPI
  listItem: QtListItemAPI
  listView: QtListViewAPI
  loading: QtLoadingViewAPI
  lottieView: QtLottieViewAPI
  navBar: QtNavBarAPI
  playMarkView: QtPlayMarkViewAPI
  pluginView: QtPluginViewAPI
  poster: QtPosterAPI
  progressBar: QtProgressBarAPI
  qrCode: QtQRCodeAPI
  replaceChildView: QtReplaceChildViewAPI
  rippleView: QtRippleViewAPI
  row: QtRowAPI
  scrollView: QtScrollViewAPI
  section: QtSectionAPI
  seekBar: QtSeekBarAPI
  mediaSeries: QtMediaSeriesAPI
  surfaceView: QtSurfaceViewAPI
  swiftList: QtSwiftListAPI
  swiperSlide: QtSwiperSlideAPI
  tabs: QtTabAPI
  tabsView: QtTabsViewAPI
  text: QtTextAPI
  transitionImg: QtTransitionImgAPI
  view: QtViewAPI
  viewPager: QtViewPagerAPI
  waterfall: QtWaterfallAPI
  webView: QtWebViewAPI
  x5WebView: QtX5WebViewAPI
  log: ESLog
  es: ES
  develop: ESDevelop
  toast: ESToast
  storage: ESLocalStorage
  device: ESDevice
  display: ESDisplay
  network: ESNetwork
  appList: ESAppList
  power: ESPower
  permission: ESPermission
  usbDevice: ESUsbDevice
  broadcast: ESBroadcast
  audio: ESAudio
  shareData: ESShareData
  runtime: ESRuntime
  plugin: ESPlugin
  download: ESDownload
  upload: ESUpload
  actionBar: ESActionBar
  iac: ESIAC
  location: ESLocation
  focus: ESFocus
  provider: ESContentProvider
  eventBus: ESEventBus
  xlog: ESXLog
  logUpload: ESLogUpload
  brightness: ESBrightness
  service: ESService
  radioGroup: QtRadioAPI
  checkGroup: QtCheckboxAPI
  qtInput: QTIInputViewAPI
  ratingBar: QtRatingBarAPI
  switch: QtSwitchAPI
  longImage: QtLongImageAPI
  indicatorListView: QtIndicatorListViewAPI
  rangeSeekBar: QtRangeSeekBarAPI
}

export function createQtAPI(): QtAPI {
  const animationAPI: QtAnimationAPI = createQtAnimationAPI()
  const appIconAPI: QtAppIconAPI = createQtAppIconAPI()
  const buttonAPI: QtButtonAPI = createQtButtonAPI()
  const cardAPI: QtCardAPI = createQtCardAPI()
  const cardContainerAPI: QtCardContainerAPI = createQtCardContainerAPI()
  const classifiedListViewAPI: QtClassifiedListViewAPI =
    createQtClassifiedListViewAPI()
  const collapseAPI: QtCollapseAPI = createQtCollapseAPI()
  const columnAPI: QtColumnAPI = createQtColumnAPI()
  const flexViewAPI: QtFlexViewAPI = createQtFlexViewAPI()
  const gridViewAPI: QtGridViewAPI = createQtGridViewAPI()
  const imageAPI: QtImageAPI = createQtImageAPI()
  //
  const itemStoreAPI: QtItemStoreAPI = createQtItemStoreAPI()
  const itemViewAPI: QtItemViewAPI = createQtItemViewAPI()
  const largeListAPI: QtLargeListAPI = createQtLargeListAPI()
  const listItemAPI: QtListItemAPI = createQtListItemAPI()
  const listViewAPI: QtListViewAPI = createQtListViewAPI()
  const loadingViewAPI: QtLoadingViewAPI = createQtLoadingViewAPI()
  const lottieViewAPI: QtLottieViewAPI = createQtLottieViewAPI()
  const navBarAPI: QtNavBarAPI = createQtNavBarAPI()
  const playMarkViewAPI: QtPlayMarkViewAPI = createQtPlayMarkViewAPI()
  const pluginViewAPI: QtPluginViewAPI = createQtPluginViewAPI()
  const posterAPI: QtPosterAPI = createQtPosterAPI()
  const progressBarAPI: QtProgressBarAPI = createQtProgressBarAPI()
  const qrCodeAPI: QtQRCodeAPI = createQtQRCodeAPI()
  const replaceChildViewAPI: QtReplaceChildViewAPI =
    createQtReplaceChildViewAPI()
  const rippleViewAPI: QtRippleViewAPI = createQtRippleViewAPI()
  const rowAPI: QtRowAPI = createQtRowAPI()
  const scrollViewAPI: QtScrollViewAPI = createQtScrollViewAPI()
  const sectionAPI: QtSectionAPI = createQtSectionAPI()
  const seekBarAPI: QtSeekBarAPI = createQtSeekBarAPI()
  const mediaSeriesAPI: QtMediaSeriesAPI = createQtMediaSeriesAPI()
  const surfaceViewAPI: QtSurfaceViewAPI = createQtSurfaceViewAPI()
  const swiftListAPI: QtSwiftListAPI = createQtSwiftListAPI()
  const swiperSlideAPI: QtSwiperSlideAPI = createQtSwiperSlideAPI()
  const tabAPI: QtTabAPI = createQtTabAPI()
  const tabsViewAPI: QtTabsViewAPI = createQtTabsViewAPI()
  const textAPI: QtTextAPI = createQtTextAPI()
  const transitionImgAPI: QtTransitionImgAPI = createQtTransitionImgAPI()
  const viewAPI: QtViewAPI = createQtViewAPI()
  const viewPagerAPI: QtViewPagerAPI = createQtViewPagerAPI()
  const waterfallAPI: QtWaterfallAPI = createQtWaterfallAPI()
  const webViewAPI: QtWebViewAPI = createQtWebViewAPI()
  const x5WebViewAPI: QtX5WebViewAPI = createQtX5WebViewAPI()
  const radioAPI: QtRadioAPI = createQtRadioAPI()
  const checkboxAPI: QtCheckboxAPI = createQtCheckboxAPI()
  const inputAPI: QTIInputViewAPI = createQTIInputViewAPI()
  const ratingBarAPI: QtRatingBarAPI = createQtRatingBarAPI()
  const switchAPI: QtSwitchAPI = createQtSwitchAPI()
  const longImageAPI: QtLongImageAPI = createQtLongImageAPI()
  const indicatorListViewAPI: QtIndicatorListViewAPI =
    createQtIndicatorListViewAPI()
  const rangeSeekBarAPI: QtRangeSeekBarAPI = createQtRangeSeekBarAPI()

  return {
    animation: animationAPI,
    appIcon: appIconAPI,
    button: buttonAPI,
    card: cardAPI,
    cardContainer: cardContainerAPI,
    classifiedListView: classifiedListViewAPI,
    collapse: collapseAPI,
    column: columnAPI,
    flexView: flexViewAPI,
    gridView: gridViewAPI,
    image: imageAPI,
    itemStore: itemStoreAPI,
    itemView: itemViewAPI,
    largeList: largeListAPI,
    listItem: listItemAPI,
    listView: listViewAPI,
    loading: loadingViewAPI,
    lottieView: lottieViewAPI,
    navBar: navBarAPI,
    playMarkView: playMarkViewAPI,
    pluginView: pluginViewAPI,
    poster: posterAPI,
    progressBar: progressBarAPI,
    qrCode: qrCodeAPI,
    replaceChildView: replaceChildViewAPI,
    rippleView: rippleViewAPI,
    row: rowAPI,
    scrollView: scrollViewAPI,
    section: sectionAPI,
    seekBar: seekBarAPI,
    mediaSeries: mediaSeriesAPI,
    surfaceView: surfaceViewAPI,
    swiftList: swiftListAPI,
    swiperSlide: swiperSlideAPI,
    tabs: tabAPI,
    tabsView: tabsViewAPI,
    text: textAPI,
    transitionImg: transitionImgAPI,
    view: viewAPI,
    viewPager: viewPagerAPI,
    waterfall: waterfallAPI,
    webView: webViewAPI,
    x5WebView: x5WebViewAPI,
    radioGroup: radioAPI,
    checkGroup: checkboxAPI,
    qtInput: inputAPI,
    ratingBar: ratingBarAPI,
    switch: switchAPI,
    longImage: longImageAPI,
    indicatorListView: indicatorListViewAPI,
    rangeSeekBar: rangeSeekBarAPI,
    log,
    es,
    develop,
    toast,
    storage,
    device,
    display,
    network,
    appList,
    power,
    permission,
    usbDevice,
    broadcast,
    audio,
    shareData,
    runtime,
    plugin,
    download,
    upload,
    actionBar,
    iac,
    location,
    focus,
    provider,
    eventBus,
    xlog,
    logUpload,
    brightness,
    service,
  }
}
