export interface QTLottieEvent {
  eventName: string
  params?: string
  value?: string
}

export enum QTLottieAsyncUpdates {
  QT_LOTTIE_ASYNC_UPDATE_AUTOMATIC = 0,
  QT_LOTTIE_ASYNC_UPDATE_ENABLED = 1,
  QT_LOTTIE_ASYNC_UPDATE_DISABLED = 2,
}

export enum QTLottieRenderMode {
  QT_LOTTIE_RENDER_MODE_AUTOMATIC = 0,
  QT_LOTTIE_RENDER_MODE_HARDWARE = 1,
  QT_LOTTIE_RENDER_MODE_SOFTWARE = 2,
}

export enum QTLottieRepeatMode {
  QT_LOTTIE_REPEAT_MODE_RESTART = 1,
  QT_LOTTIE_REPEAT_MODE_REVERSE = 2,
  QT_LOTTIE_REPEAT_MODE_INFINITE = -1,
}
