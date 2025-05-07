import qt_nav_view_page from './qt-nav-view-page.vue'
import qt_nav_loading_page from './qt-nav-loading-page.vue'
import qt_nav_qrcode_page from './qt-nav-qrcode-page.vue'
import qt_nav_webview_page from './qt-nav-webview-page.vue'
import qt_nav_x5webview_page from './qt-nav-x5webview-page.vue'
import qt_nav_text_page from './qt-nav-text-page.vue'
import qt_nav_image_page from './qt-nav-image-page.vue'
import qt_nav_collapse_page from './qt-nav-collapse-page.vue'
import qt_nav_animation_page from './qt-nav-animation-page.vue'
import qt_nav_app_icon_page from './qt-nav-app-icon-page.vue'
import qt_nav_row_page from './qt-nav-row-page.vue'
import qt_nav_column_page from './qt-nav-column-page.vue'
import qt_nav_seek_bar_page from './qt-nav-seek-bar-page.vue'
import qt_nav_range_seek_bar_page from './qt-nav-range-seek-bar-page.vue'
import qt_nav_progress_bar_page from './qt-nav-progress-bar-page.vue'
import qt_nav_poster_view_page from './qt-nav-poster-view-page.vue'
import qt_nav_button_page from './qt-nav-button-page.vue'
import qt_nav_bar_page from './qt-nav-bar-page.vue'
import qt_nav_grid_view_page from './qt-nav-grid-view-page.vue'
import qt_nav_list_view_page from './qt-nav-list-view-page.vue'
import qt_nav_waterfall_page from './qt-nav-waterfall-page.vue'
import qt_nav_tabs_waterfall_page from './qt-nav-tabs-waterfall-page.vue'
import qt_nav_plugin_view_page from './qt-nav-plugin-view-page.vue'
import qt_nav_classified_list_view_page from './qt-nav-classified-list-view-page.vue'
import qt_nav_select_series_page from './qt-nav-media-series-page.vue'
import qt_nav_radio_group_page from './qt-nav-radio-group-view-page.vue'
import qt_nav_header_page from './qt-nav-header-page.vue'
import qt_nav_container_page from './qt-nav-container-page.vue'
import qt_nav_aside_page from './qt-nav-aside-page.vue'
import qt_nav_footer_page from './qt-nav-footer-page.vue'
import qt_nav_input_view_page from './qt-nav-input-view-page.vue'
import qt_nav_main_page from './qt-nav-main-page.vue'
import qt_nav_rating_bar_page from './qt-nav-rating-bar-view-page.vue'
import qt_nav_switch_page from './qt-nav-switch-view-page.vue'
import qt_nav_long_image_page from './qt-nav-long-image-view-page.vue'
import qt_nav_indicator_page from './qt-nav-indicator-list-view-page.vue'
import qt_check_box_group_page from './qt-nav-checkbox-group-view-page.vue'
import qt_nav_app_icon_sample_page from './qt-nav-app-icon-sample-page.vue'
import qt_nav_theme_page from './qt-nav-theme-page.vue'

const QTAPINavPageList = {
  qt_nav_view_page: {
    name: 'QTView',
    component: qt_nav_view_page
  },
  qt_nav_loading_page: {
    name: 'QTLoading',
    component: qt_nav_loading_page
  },
  qt_nav_qrcode_page: {
    name: 'QTQRCode',
    component: qt_nav_qrcode_page
  },
  qt_nav_webview_page: {
    name: 'QTWebView',
    component: qt_nav_webview_page
  },
  qt_nav_x5webview_page: {
    name: 'QTX5WebView',
    component: qt_nav_x5webview_page
  },
  qt_nav_collapse_page: {
    name: 'QTCollapse',
    component: qt_nav_collapse_page
  },
  qt_nav_text_page: {
    name: 'QTText',
    component: qt_nav_text_page
  },
  qt_nav_image_page: {
    name: 'QTImage',
    component: qt_nav_image_page
  },
  qt_nav_animation_page: {
    name: 'QTAnimation',
    component: qt_nav_animation_page
  },
  qt_nav_app_icon_page: {
    name: 'QTAppIcon',
    component: qt_nav_app_icon_page
  },
  qt_nav_row_page: {
    name: 'QTRow',
    component: qt_nav_row_page
  },
  qt_nav_column_page: {
    name: 'QTColumn',
    component: qt_nav_column_page
  },
  qt_nav_range_seek_bar_page: {
    name: 'QTRangeSeekBar',
    component: qt_nav_range_seek_bar_page
  },
  qt_nav_seek_bar_page: {
    name: 'QTSeekBar',
    component: qt_nav_seek_bar_page
  },
  qt_nav_progress_bar_page: {
    name: 'QTProgressBar',
    component: qt_nav_progress_bar_page
  },
  qt_nav_button_page: {
    name: 'QTButton',
    component: qt_nav_button_page
  },
  qt_nav_poster_view_page: {
    name: 'QTPoster',
    component: qt_nav_poster_view_page
  },
  qt_nav_bar_page: {
    name: 'QTNavBar',
    component: qt_nav_bar_page
  },
  qt_nav_waterfall_page: {
    name: 'QTWaterfall',
    component: qt_nav_waterfall_page
  },
  qt_nav_tabs_waterfall_page: {
    name: 'QTTabsWaterfall',
    component: qt_nav_tabs_waterfall_page
  },
  qt_nav_plugin_view_page: {
    name: 'QTPluginView',
    component: qt_nav_plugin_view_page
  },
  qt_nav_classified_list_view_page: {
    name: 'QTClassifiedListView',
    component: qt_nav_classified_list_view_page
  },
  qt_nav_select_series_page: {
    name: 'QTMediaSeries',
    component: qt_nav_select_series_page
  },
  qt_nav_grid_view_page: {
    name: 'QTGridView',
    component: qt_nav_grid_view_page
  },
  qt_nav_list_view_page: {
    name: 'QTListView',
    component: qt_nav_list_view_page
  },
  qt_nav_header_page: {
    name: 'QTHeader',
    component: qt_nav_header_page
  },
  qt_nav_footer_page: {
    name: 'QTFooter',
    component: qt_nav_footer_page
  },
  qt_nav_aside_page: {
    name: 'QTAside',
    component: qt_nav_aside_page
  },
  qt_nav_main_page: {
    name: 'QTMain',
    component: qt_nav_main_page
  },
  qt_nav_container_page: {
    name: 'QTContainer',
    component: qt_nav_container_page
  },
  qt_nav_radio_group_page: {
    name: 'QTRadioGroup',
    component: qt_nav_radio_group_page
  },
  qt_nav_input_view_page: {
    name: 'QTInputView',
    component: qt_nav_input_view_page
  },
  qt_nav_rating_bar_page: {
    name: 'QTRatingBarView',
    component: qt_nav_rating_bar_page
  },
  qt_nav_switch_page: {
    name: 'QTSwitchView',
    component: qt_nav_switch_page
  },
  qt_nav_long_image_page: {
    name: 'QTLongImageView',
    component: qt_nav_long_image_page
  },
  qt_nav_indicator_page: {
    name: 'QTIndicatorListView',
    component: qt_nav_indicator_page
  },
  qt_check_box_group_page: {
    name: 'QTCheckBoxGroup',
    component: qt_check_box_group_page
  },
  qt_nav_app_icon_sample_page: {
    name: 'QTAppIconSample',
    component: qt_nav_app_icon_sample_page
  },
  qt_nav_theme_page: {
    name: 'QTTheme',
    component: qt_nav_theme_page
  }
}

export default QTAPINavPageList
