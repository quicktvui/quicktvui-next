export interface QTRangeSeekBarEvent {
  progress: number
}

export interface QTRangeSeekBarProgress {
  leftProgress: number
  rightProgress?: number
}

export interface QTRangeSeekBarRange {
  min: number
  max: number
  minInterval?: number
}
