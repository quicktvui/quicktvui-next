import { withInstall, withInstallElement } from '@quicktvui/utils'

//component
import SwiperSlide from './src/swiper-slide'

//element
import SwiperSlideElement from './src/swiper-slide-element'

export const QtSwiperSlide = withInstall(SwiperSlide)
export default QtSwiperSlide

export * from './src/swiper-slide-props'
export * from './src/swiper-slide-instance'
export * from './src/swiper-slide-api'

export const QtSwiperSlideElement = withInstallElement(SwiperSlideElement)
