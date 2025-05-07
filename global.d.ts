// GlobalComponents for Volar
import { createQtAPI } from 'quicktvui'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    QtLoadingView: typeof import('quicktvui')['QtLoadingView']
    QtColumn: typeof import('quicktvui')['QtColumn']
    QtRow: typeof import('quicktvui')['QtRow']
    QtView: typeof import('quicktvui')['QtView']
    QtAnimation: typeof import('quicktvui')['QtAnimation']
    QtWebView: typeof import('quicktvui')['QtWebView']
    QtX5webView: typeof import('quicktvui')['QtX5webView']
    QtQrCode: typeof import('quicktvui')['QtQrCode']
    QtAppIcon: typeof import('quicktvui')['QtAppIcon']
    QtText: typeof import('quicktvui')['QtText']
    QtDialog: typeof import('quicktvui')['QtDialog']
    QtProgressBar: typeof import('quicktvui')['QtProgressBar']
    QtSeekBar: typeof import('quicktvui')['QtSeekBar']
    QtCollapse: typeof import('quicktvui')['QtCollapse']
    QtScrollView: typeof import('quicktvui')['QtScrollView']
    QtPoster: typeof import('quicktvui')['QtPoster']
    QtVueSection: typeof import('quicktvui')['QtVueSection']
    QtLottie: typeof import('quicktvui')['QtLottie']
    QtListItem: typeof import('quicktvui')['QtListItem']
    QtPluginView: typeof import('quicktvui')['QtPluginView']
    QtWaterfall: typeof import('quicktvui')['QtWaterfall']
    QtListView: typeof import('quicktvui')['QtListView']
    QtNavBar: typeof import('quicktvui')['QtNavBar']
    QtTabs: typeof import('quicktvui')['QtTabs']
    QtImage: typeof import('quicktvui')['QtImage']
    QtButton: typeof import('quicktvui')['QtButton']
    QtGridView: typeof import('quicktvui')['QtGridView']
    QtMediaSeries: typeof import('quicktvui')['QtMediaSeries']
    QtClassifiedListView: typeof import('quicktvui')['QtClassifiedListView']
    QtSurfaceView: typeof import('quicktvui')['QtSurfaceView']
    QtFlexView: typeof import('quicktvui')['QtFlexView']
    QtTransitionImg: typeof import('quicktvui')['QtTransitionImg']
    QtRippleView: typeof import('quicktvui')['QtRippleView']
    QtPlayMarkView: typeof import('quicktvui')['QtPlayMarkView']
    QtItemView: typeof import('quicktvui')['QtItemView']
    QtSwiftList: typeof import('quicktvui')['QtSwiftList']
    QtLargeList: typeof import('quicktvui')['QtLargeList']
    QtViewPager: typeof import('quicktvui')['QtViewPager']
    QtReplaceChild: typeof import('quicktvui')['QtReplaceChild']
    QtSelectSeries: typeof import('quicktvui')['QtSelectSeries']
    QtSwiperSlide: typeof import('quicktvui')['QtSwiperSlide']
    QtItemStore: typeof import('quicktvui')['QtItemStore']
    QtCardContainer: typeof import('quicktvui')['QtCardContainer']
    QtCard: typeof import('quicktvui')['QtCard']
    QtTabsView: typeof import('quicktvui')['QtTabsView']
    QtRadioGroup: typeof import('quicktvui')['QtRadioGroup']
    QtRadioButton: typeof import('quicktvui')['QtRadioButton']
    QtHeader: typeof import('quicktvui')['QtHeader']
    QtFooter: typeof import('quicktvui')['QtFooter']
    QtAside: typeof import('quicktvui')['QtAside']
    QtContainer: typeof import('quicktvui')['QtContainer']
    QtMain: typeof import('quicktvui')['QtMain']
    QtInputView: typeof import('quicktvui')['QtInputView']
    QtRatingbar: typeof import('quicktvui')['QtRatingbar']
    QtSwitch: typeof import('quicktvui')['QtSwitch']
    QtLongImage: typeof import('quicktvui')['QtLongImage']
    QtIndicatorListView: typeof import('quicktvui')['QtIndicatorListView']
    QtCheckboxGroup: typeof import('quicktvui')['QtCheckboxGroup']
    QtCheckbox: typeof import('quicktvui')['QtCheckbox']
    QtAppIconSample: typeof import('quicktvui')['QtAppIconSample']
  }

  // interface ComponentCustomProperties {
  // }
}

const qt = createQtAPI()

export { qt }
