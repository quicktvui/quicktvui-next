import { withInstall } from '@quicktvui/utils'

import Container from './src/container.vue'

export const QtContainer = withInstall(Container)
export default QtContainer

export * from './src/container-props'
export * from './src/container-instance'
