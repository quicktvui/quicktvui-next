import qt_theme_component_style_page from './qt-theme-component-style-page'
import qt_theme_component_class_page from './qt-theme-component-class-page'
import qt_theme_global_page from './qt-theme-global-page'

const QTThemePageList = {
  qt_theme_component_style_page: {
    name: '组件样式：style',
    component: qt_theme_component_style_page
  },
  qt_theme_component_class_page: {
    name: '组件样式：class',
    component: qt_theme_component_class_page
  },
  qt_theme_global_page: {
    name: '全局样式',
    component: qt_theme_global_page
  }
}
export default QTThemePageList
