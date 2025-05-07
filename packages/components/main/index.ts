import { withInstall } from '@quicktvui/utils'

import Main from './src/main.vue'

export const QtMain = withInstall(Main)
export default QtMain

export * from './src/main-props'
export * from './src/main-instance'
