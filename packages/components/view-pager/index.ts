import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import ViewPager from './src/view-pager'

//element
import ViewPagerElement from './src/view-pager-element'

export const QtViewPager = withInstall(ViewPager)
export default QtViewPager

export * from './src/view-pager-props'
export * from './src/view-pager-instance'
export * from './src/view-pager-types'
export * from './src/view-pager-api'

export const QtViewPagerElement = withInstallElement(ViewPagerElement)
