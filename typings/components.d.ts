// For this project development
import '@vue/runtime-core'
import { QtAside } from '../packages/components/aside'
import { QtClassifiedListView } from '../packages/components/classified-list-view'
import { QtTransitionImg } from '../packages/components/transition-img'
import {
  QtCheckbox,
  QtCheckboxGroup,
} from '../packages/components/checkbox-group'
import { QtAppIconSample } from '../packages/components/app-icon-sample'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    QtConfigProvider: typeof import('../packages/quicktvui')['QtConfigProvider']
    QtLoadingView: typeof import('../packages/quicktvui')['QtLoadingView']
    QtRow: typeof import('../packages/quicktvui')['QtRow']
    QtColumn: typeof import('../packages/quicktvui')['QtColumn']
    QtView: typeof import('../packages/quicktvui')['QtView']
    QtAnimation: typeof import('../packages/quicktvui')['QtAnimation']
    QtWebView: typeof import('../packages/quicktvui')['QtWebView']
    QtX5webView: typeof import('../packages/quicktvui')['QtX5webView']
    QtQrCode: typeof import('../packages/quicktvui')['QtQrCode']
    QtAppIcon: typeof import('../packages/quicktvui')['QtAppIcon']
    QtText: typeof import('../packages/quicktvui')['QtText']
    QtDialog: typeof import('../packages/quicktvui')['QtDialog']
    QtProgressBar: typeof import('../packages/quicktvui')['QtProgressBar']
    QtSeekBar: typeof import('../packages/quicktvui')['QtSeekBar']
    QtCollapse: typeof import('../packages/quicktvui')['QtCollapse']
    QtScrollView: typeof import('../packages/quicktvui')['QtScrollView']
    QtPoster: typeof import('../packages/quicktvui')['QtPoster']
    QtVueSection: typeof import('../packages/quicktvui')['QtVueSection']
    QtLottie: typeof import('../packages/quicktvui')['QtLottie']
    QtListItem: typeof import('../packages/quicktvui')['QtListItem']
    QtPluginView: typeof import('../packages/quicktvui')['QtPluginView']
    QtWaterfall: typeof import('../packages/quicktvui')['QtWaterfall']
    QtListView: typeof import('../packages/quicktvui')['QtListView']
    QtNavBar: typeof import('../packages/quicktvui')['QtNavBar']
    QtTabs: typeof import('../packages/quicktvui')['QtTabs']
    QtImage: typeof import('../packages/quicktvui')['QtImage']
    QtButton: typeof import('../packages/quicktvui')['QtButton']
    QtGridView: typeof import('../packages/quicktvui')['QtGridView']
    QtMediaSeries: typeof import('../packages/quicktvui')['QtMediaSeries']
    QtClassifiedListView: typeof import('../packages/quicktvui')['QtClassifiedListView']
    QtSurfaceView: typeof import('../packages/quicktvui')['QtSurfaceView']
    QtFlexView: typeof import('../packages/quicktvui')['QtFlexView']
    QtTransitionImg: typeof import('../packages/quicktvui')['QtTransitionImg']
    QtRippleView: typeof import('../packages/quicktvui')['QtRippleView']
    QtPlayMarkView: typeof import('../packages/quicktvui')['QtPlayMarkView']
    QtItemView: typeof import('../packages/quicktvui')['QtItemView']
    QtSwiftList: typeof import('../packages/quicktvui')['QtSwiftList']
    QtLargeList: typeof import('../packages/quicktvui')['QtLargeList']
    QtViewPager: typeof import('../packages/quicktvui')['QtViewPager']
    QtReplaceChild: typeof import('../packages/quicktvui')['QtReplaceChild']
    QtSelectSeries: typeof import('../packages/quicktvui')['QtSelectSeries']
    QtSwiperSlide: typeof import('../packages/quicktvui')['QtSwiperSlide']
    QtItemStore: typeof import('../packages/quicktvui')['QtItemStore']
    QtCardContainer: typeof import('../packages/quicktvui')['QtCardContainer']
    QtCard: typeof import('../packages/quicktvui')['QtCard']
    QtTabsView: typeof import('../packages/quicktvui')['QtTabsView']
    QtRadioGroup: typeof import('../packages/quicktvui')['QtRadioGroup']
    QtRadioButton: typeof import('../packages/quicktvui')['QtRadioButton']
    QtHeader: typeof import('../packages/quicktvui')['QtHeader']
    QtFooter: typeof import('../packages/quicktvui')['QtFooter']
    QtAside: typeof import('../packages/quicktvui')['QtAside']
    QtContainer: typeof import('../packages/quicktvui')['QtContainer']
    QtMain: typeof import('../packages/quicktvui')['QtMain']
    QtInputView: typeof import('../packages/quicktvui')['QtInputView']
    QtRatingbar: typeof import('../packages/quicktvui')['QtRatingbar']
    QtSwitch: typeof import('../packages/quicktvui')['QtSwitch']
    QtLongImage: typeof import('../packages/quicktvui')['QtLongImage']
    QtIndicatorListView: typeof import('../packages/quicktvui')['QtIndicatorListView']
    QtCheckboxGroup: typeof import('../packages/quicktvui')['QtCheckboxGroup']
    QtCheckbox: typeof import('../packages/quicktvui')['QtCheckbox']
    QtAppIconSample: typeof import('../packages/quicktvui')['QtAppIconSample']
  }

  // interface ComponentCustomProperties {
  // }
}

export {}
