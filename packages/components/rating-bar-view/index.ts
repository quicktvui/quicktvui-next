import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
// import QtRatingbarView from './src/rating-bar'
import QtRatingbarView from './src/ratingbar.vue'

//element
import RadioGroupViewElement from './src/rating-bar-element'

export const QtRatingbar = withInstall(QtRatingbarView)
export default QtRatingbar

export * from './src/rating-bar-instance'
export * from './src/rating-bar-api'
export * from './src/rating-bar-types'
export * from './src/rating-bar-props'

export const QtRatingbarViewElement = withInstallElement(RadioGroupViewElement)
