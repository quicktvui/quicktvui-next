import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const lottieProps = buildProps({
  rawResource: {
    type: String,
    default: '',
  },
  fileName: {
    type: String,
    default: '',
  },
  localResource: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  fallbackResource: {
    type: String,
    default: '',
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  repeatMode: {
    type: Number,
    default: 0,
  },
  repeatCount: {
    type: Number,
    default: 0,
  },
  speed: {
    type: String,
    default: '1',
  },
  clipToCompositionBounds: {
    type: Boolean,
    default: false,
  },
  defaultFontFileExtension: {
    type: String,
    default: '',
  },
  imageAssetsFolder: {
    type: String,
    default: '',
  },
  progress: {
    type: String,
    default: '',
  },
  enableMergePathsForKitKatAndAbove: {
    type: Boolean,
    default: false,
  },
  colorFilter: {
    type: String,
    default: '',
  },
  renderMode: {
    type: Number,
    default: 0,
  },
  asyncUpdates: {
    type: Number,
    default: 0,
  },
  ignoreDisabledSystemAnimations: {
    type: Boolean,
    default: false,
  },
  useCompositionFrameRate: {
    type: Boolean,
    default: false,
  },
  cacheComposition: {
    type: Boolean,
    default: false,
  },
  animationListenerState: {
    type: Boolean,
    default: false,
  },
  animationUpdateState: {
    type: Boolean,
    default: false,
  },
} as const)
export type LottieProps = ExtractPropTypes<typeof lottieProps>
