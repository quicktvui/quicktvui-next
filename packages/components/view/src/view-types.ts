export interface QTViewEvent {
  isFocused: boolean
}

export interface QTViewStateCallback {
  (viewState: QTViewState): void
}

export interface QTViewState {
  //
  left: number
  top: number
  right: number
  bottom: number
  //
  width: number
  height: number
  //
  hasFocus: boolean
  isFocused: boolean
  //
  alpha: number
  name: string
}

export interface QTViewScrollState {
  newState: number
  oldState: number
}

export interface QTViewCoordinate {
  x: number
  y: number
}
