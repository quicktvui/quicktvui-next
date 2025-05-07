import { withInstall } from '@quicktvui/utils'

import View from './src/view.vue'

export const QtView = withInstall(View)
export default QtView

export * from './src/view-props'
export * from './src/view-instance'
export * from './src/view-types'
export * from './src/view-api'
