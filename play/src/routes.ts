import splash from './views/splash.vue'
import home from './views/home.vue'
import error from './views/error.vue'
import QTAPINavPageList from './views/nav'
import QTViewPageList from './components/qt-view'
import QTLoadingPageList from './components/qt-loading'
import QTQRCodePageList from './components/qt-qr-code'
import QTWebViewComponentList from './components/qt-web-view'
import QTX5WebViewComponentList from './components/qt-x5web-view'
import QTTextPageList from './components/qt-text'
import QTImagePageList from './components/qt-image'
import QTCollapsePageList from './components/qt-collapse'
import QTAnimationPageList from './components/qt-animation'
import QTAppIconPageList from './components/qt-app-icon'
import QTRowPageList from './components/qt-row'
import QTColumnPageList from './components/qt-column'
import QTSeekBarPageList from './components/qt-seek-bar'
import QTRangeSeekBarPageList from './components/qt-range-seek-bar'
import QTProgressBarPageList from './components/qt-progress-bar'
import QTPosterPageList from './components/qt-poster'
import QTButtonPageList from './components/qt-button'
import QTNavBarPageList from './components/qt-nav-bar'
import QTPluginViewPageList from './components/qt-plugin-view'
import QTClassifiedListViewPageList from './components/qt-classified-list-view'
import QTRadioViewPageList from './components/qt-radio-group'
import QTHeaderPageList from './components/qt-header'
import QTFooterPageList from './components/qt-footer'
import QTContainerPageList from './components/qt-container'
import QTAsidePageList from './components/qt-aside'
import QTMainPageList from './components/qt-main'
import QTInputViewPageList from './components/qt-input'
import QTRatingBarViewPageList from './components/qt-rating-bar'
import QTSwitchViewPageList from './components/qt-switch'
import QTLongImageViewPageList from './components/qt-long-image'
import QTIndicatorListViewPageList from './components/qt-indicator-list-view'
import QTCheckBoxViewPageList from './components/qt-checkbox-group'

import {
  QTWaterfallPageList,
  QTWaterfallItemPageList,
  QTWaterfallSectionPageList
} from './components/qt-waterfall'
import {
  QTTabsWaterfallPageList,
  QTTabsWaterfallSectionPageList,
  QTTabsWaterfallItemPageList,
  QTTabsWaterfallSamplePageList
} from './components/qt-tabs-waterfall'
import QTGridViewPageList from './components/qt-grid-view'
import QTListViewPageList from './components/qt-list-view'
import QTSelectSeriesPageList from './components/qt-select-series'
import QTAppIconSamplePageList from './components/qt-app-icon-sample'
import QTThemePageList from './components/qt-theme'

const routes = [
  {
    path: '/splash',
    name: 'splash',
    component: splash
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/error',
    name: 'error',
    component: error
  },
  ...Object.keys(QTAPINavPageList)
    .map(item => ({
      path: `/nav/${item}`,
      name: `nav/${item}`,
      component: QTAPINavPageList[item].component
    })),
  ...Object.keys(QTViewPageList)
    .map(item => ({
      path: `/view/${item}`,
      name: `view/${item}`,
      component: QTViewPageList[item].component
    })),
  ...Object.keys(QTLoadingPageList)
    .map(item => ({
      path: `/loading${item}`,
      name: `loading/${item}`,
      component: QTLoadingPageList[item].component
    })),
  ...Object.keys(QTQRCodePageList)
    .map(item => ({
      path: `/qrcode${item}`,
      name: `qrcode/${item}`,
      component: QTQRCodePageList[item].component
    })),
  ...Object.keys(QTWebViewComponentList)
    .map(item => ({
      path: `/webview${item}`,
      name: `webview/${item}`,
      component: QTWebViewComponentList[item].component
    })),
  ...Object.keys(QTX5WebViewComponentList)
    .map(item => ({
      path: `/x5webview${item}`,
      name: `x5webview/${item}`,
      component: QTX5WebViewComponentList[item].component
    })),
  ...Object.keys(QTCollapsePageList)
    .map(item => ({
      path: `/collapse${item}`,
      name: `collapse/${item}`,
      component: QTCollapsePageList[item].component
    })),
  ...Object.keys(QTTextPageList)
    .map(item => ({
      path: `/text/${item}`,
      name: `text/${item}`,
      component: QTTextPageList[item].component
    })),
  ...Object.keys(QTImagePageList)
    .map(item => ({
      path: `/image/${item}`,
      name: `image/${item}`,
      component: QTImagePageList[item].component
    })),
  ...Object.keys(QTAnimationPageList)
    .map(item => ({
      path: `/animation${item}`,
      name: `animation/${item}`,
      component: QTAnimationPageList[item].component
    })),
  ...Object.keys(QTAppIconPageList)
    .map(item => ({
      path: `/qt-app-icon${item}`,
      name: `qt-app-icon/${item}`,
      component: QTAppIconPageList[item].component
    })),
  ...Object.keys(QTRowPageList)
    .map(item => ({
      path: `/row/${item}`,
      name: `row/${item}`,
      component: QTRowPageList[item].component
    })),
  ...Object.keys(QTColumnPageList)
    .map(item => ({
      path: `/column/${item}`,
      name: `column/${item}`,
      component: QTColumnPageList[item].component
    })),
  ...Object.keys(QTSeekBarPageList)
    .map(item => ({
      path: `/seekbar${item}`,
      name: `seekbar/${item}`,
      component: QTSeekBarPageList[item].component
    })),
  ...Object.keys(QTRangeSeekBarPageList)
    .map(item => ({
      path: `/range-seekbar${item}`,
      name: `range-seekbar/${item}`,
      component: QTRangeSeekBarPageList[item].component
    })),
  ...Object.keys(QTProgressBarPageList)
    .map(item => ({
      path: `/progressbar${item}`,
      name: `progressbar/${item}`,
      component: QTProgressBarPageList[item].component
    })),
  ...Object.keys(QTPosterPageList)
    .map(item => ({
      path: `/poster/${item}`,
      name: `poster/${item}`,
      component: QTPosterPageList[item].component
    })),
  ...Object.keys(QTButtonPageList)
    .map(item => ({
      path: `/button/${item}`,
      name: `button/${item}`,
      component: QTButtonPageList[item].component
    })),
  ...Object.keys(QTNavBarPageList)
    .map(item => ({
      path: `/nav-bar/${item}`,
      name: `nav-bar/${item}`,
      component: QTNavBarPageList[item].component
    })),

  ...Object.keys(QTWaterfallPageList)
    .map(item => ({
      path: `/waterfall/${item}`,
      name: `waterfall/${item}`,
      component: QTWaterfallPageList[item].component
    })),
  ...Object.keys(QTWaterfallItemPageList)
    .map(item => ({
      path: `/waterfall/${item}`,
      name: `waterfall/${item}`,
      component: QTWaterfallItemPageList[item].component
    })),
  ...Object.keys(QTWaterfallSectionPageList)
    .map(item => ({
      path: `/waterfall/${item}`,
      name: `waterfall/${item}`,
      component: QTWaterfallSectionPageList[item].component
    })),
  ...Object.keys(QTTabsWaterfallPageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallPageList[item].component
    })),
  ...Object.keys(QTTabsWaterfallSectionPageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallSectionPageList[item].component
    })),
  ...Object.keys(QTTabsWaterfallItemPageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallItemPageList[item].component
    })),
  ...Object.keys(QTTabsWaterfallSamplePageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallSamplePageList[item].component
    })),

  ...Object.keys(QTGridViewPageList)
    .map(item => ({
      path: `/grid-view/${item}`,
      name: `grid-view/${item}`,
      component: QTGridViewPageList[item].component
    })),
  ...Object.keys(QTListViewPageList)
    .map(item => ({
      path: `/list-view/${item}`,
      name: `list-view/${item}`,
      component: QTListViewPageList[item].component
    })),
  ...Object.keys(QTPluginViewPageList)
    .map(item => ({
      path: `/plugin-view${item}`,
      name: `plugin-view/${item}`,
      component: QTPluginViewPageList[item].component
    })),
  ...Object.keys(QTSelectSeriesPageList)
    .map(item => ({
      path: `/select-series${item}`,
      name: `select-series/${item}`,
      component: QTSelectSeriesPageList[item].component
    })),
  ...Object.keys(QTClassifiedListViewPageList)
    .map(item => ({
      path: `/classified-list-view/${item}`,
      name: `classified-list-view/${item}`,
      component: QTClassifiedListViewPageList[item].component
    })),
  ...Object.keys(QTRadioViewPageList)
    .map(item => ({
      path: `/radio-group-view/${item}`,
      name: `radio-group-view/${item}`,
      component: QTRadioViewPageList[item].component
    })),
  ...Object.keys(QTHeaderPageList)
    .map(item => ({
      path: `/header/${item}`,
      name: `header/${item}`,
      component: QTHeaderPageList[item].component
    })),
  ...Object.keys(QTFooterPageList)
    .map(item => ({
      path: `/footer/${item}`,
      name: `footer/${item}`,
      component: QTFooterPageList[item].component
    })),
  ...Object.keys(QTContainerPageList)
    .map(item => ({
      path: `/container/${item}`,
      name: `container/${item}`,
      component: QTContainerPageList[item].component
    })),
  ...Object.keys(QTAsidePageList)
    .map(item => ({
      path: `/aside/${item}`,
      name: `aside/${item}`,
      component: QTAsidePageList[item].component
    })),
  ...Object.keys(QTMainPageList)
    .map(item => ({
      path: `/main/${item}`,
      name: `main/${item}`,
      component: QTMainPageList[item].component
    })),
  ...Object.keys(QTInputViewPageList)
    .map(item => ({
      path: `/input/${item}`,
      name: `input/${item}`,
      component: QTInputViewPageList[item].component
    })),
  ...Object.keys(QTRatingBarViewPageList)
    .map(item => ({
      path: `/rating-bar-view/${item}`,
      name: `rating-bar-view/${item}`,
      component: QTRatingBarViewPageList[item].component
    })),
  ...Object.keys(QTSwitchViewPageList)
    .map(item => ({
      path: `/switch/${item}`,
      name: `switch/${item}`,
      component: QTSwitchViewPageList[item].component
    })),
  ...Object.keys(QTLongImageViewPageList)
    .map(item => ({
      path: `/long-image-view/${item}`,
      name: `long-image-view/${item}`,
      component: QTLongImageViewPageList[item].component
    })),
  ...Object.keys(QTIndicatorListViewPageList)
    .map(item => ({
      path: `/indicator-list-view/${item}`,
      name: `indicator-list-view/${item}`,
      component: QTIndicatorListViewPageList[item].component
    })),
  ...Object.keys(QTAppIconSamplePageList)
    .map(item => ({
      path: `/qt-app-icon-sample/${item}`,
      name: `qt-app-icon-sample/${item}`,
      component: QTAppIconSamplePageList[item].component
    })),
  ...Object.keys(QTCheckBoxViewPageList)
    .map(item => ({
      path: `/checkbox-group-view/${item}`,
      name: `checkbox-group-view/${item}`,
      component: QTCheckBoxViewPageList[item].component
    })),
  ...Object.keys(QTThemePageList)
    .map(item => ({
      path: `/qt-theme/${item}`,
      name: `qt-theme/${item}`,
      component: QTThemePageList[item].component
    })),
]

export default routes
