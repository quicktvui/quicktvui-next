import { buildProps, definePropType } from '@quicktvui/utils'
import type { QTStateListColor } from '../../base'
import type { QTGradient } from '../../gradient'
import type { ExtractPropTypes } from 'vue'

export const seriesProps = buildProps({
  itemHeight: {
    type: Number,
    default: 0,
  },
  gradientBackground: {
    type: definePropType<QTGradient>(Object),
    default: () => {
      return {
        colors: ['#1AFFFFFF', '#1AFFFFFF'],
        orientation: 6,
        cornerRadius: 8,
      }
    },
  },
  gradientFocusBackground: {
    type: definePropType<QTGradient>(Object),
    default: () => {
      return { colors: ['#FFFFFF', '#FFFFFF'], orientation: 6, cornerRadius: 8 }
    },
  },
  iconGradientBackground: {
    type: definePropType<QTGradient>(Object),
    default: () => {
      return {
        colors: ['#FFB67827', '#FFDBAF5C'],
        cornerRadius: 4,
        orientation: 6,
      }
    },
  },
  markColor: {
    type: String,
    default: '#FF4E46',
  },
  markVipColor: {
    type: String,
    default: '#FFD97C',
  },
  textColors: {
    type: definePropType<QTStateListColor>(Object),
    default: () => {
      return {
        color: 'rgba(255, 255, 255, .5)',
        focusColor: 'rgba(0, 0, 0, 1)',
        selectColor: 'rgba(255, 255, 255, .5)',
      }
    },
  },
  textVipColors: {
    type: definePropType<QTStateListColor>(Object),
    default: () => {
      return {
        color: '#FFD97C',
        focusColor: '#B67827',
        selectColor: '#B67827',
      }
    },
  },
  itemDivWidth: {
    type: Number,
    default: 490,
  },
  itemDivHeight: {
    type: Number,
    default: 100,
  },
} as const)

export const seriesItemProps = buildProps({
  isVip: {
    type: Boolean,
    default: false,
  },
  gradientBackground: {
    type: definePropType<QTGradient>(Object),
    default: () => {
      return {
        colors: ['#1AFFFFFF', '#1AFFFFFF'],
        orientation: 6,
        cornerRadius: 8,
      }
    },
  },
  gradientFocusBackground: {
    type: definePropType<QTGradient>(Object),
    default: () => {
      return { colors: ['#FFFFFF', '#FFFFFF'], orientation: 6, cornerRadius: 8 }
    },
  },
  iconGradientBackground: {
    type: definePropType<QTGradient>(Object),
    default: () => {
      return {
        colors: ['#FFB67827', '#FFDBAF5C'],
        cornerRadius: 4,
        orientation: 6,
      }
    },
  },
  markColor: {
    type: String,
    default: '#FF4E46',
  },
  markVipColor: {
    type: String,
    default: '#FFD97C',
  },
  textColors: {
    type: definePropType<QTStateListColor>(Object),
    default: () => {
      return {
        color: 'rgba(255, 255, 255, .50)',
        focusColor: 'rgba(0, 0, 0, 1)',
        selectColor: 'rgba(255, 255, 255, .50)',
      }
    },
  },
  textVipColors: {
    type: definePropType<QTStateListColor>(Object),
    default: () => {
      return {
        color: '#FFD97C',
        focusColor: '#B67827',
        selectColor: '#B67827',
      }
    },
  },
  itemWidth: {
    type: Number,
    default: 490,
  },
  itemHeight: {
    type: Number,
    default: 100,
  },
} as const)

export type SeriesProps = ExtractPropTypes<typeof seriesProps>
export type SeriesItemProps = ExtractPropTypes<typeof seriesItemProps>
