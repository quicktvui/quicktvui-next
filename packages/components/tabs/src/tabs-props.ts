import { buildProps } from '@quicktvui/utils'
import type { ExtractPropTypes } from 'vue'

export const DataStrategy = ['oneShot', 'always', 'overTime'] as const

export const tabsProps = buildProps({
  enablePlaceholder: {
    type: Boolean,
    default: true,
  },
  preloadNumber: {
    type: Number,
    default: 3,
  },
  tabNavBarClass: {
    type: String,
    default: '',
  },
  tabNavBarSid: {
    type: String,
    default: '',
  },
  tabClass: {
    type: String,
    default: '',
  },
  tabsDataStrategy: {
    type: String,
    default: 'overTime',
    values: DataStrategy,
  },
  tabPageClass: {
    type: String,
    default: '',
  },
  horizontal: {
    type: Boolean,
    default: true,
  },
  pageTransform: {
    type: Boolean,
    default: true,
  },
  hideOnSingleTab: {
    type: Boolean,
    default: true,
  },
  floatNavBar: {
    type: Boolean,
    default: true,
  },
  useNavBarBg: {
    type: Boolean,
    default: true,
  },
  contentNextFocus: {
    type: Object,
    default: () => ({
      up: 'tabList',
      left: 'tabList',
    }),
  },
  triggerTask: {
    type: Array,
    default: () => [],
  },
  blockViewPager: {
    type: Array,
    default: () => [],
  },
  blockViewPagerVertical: {
    type: Array,
    default: () => [],
  },
  tabContentBlockFocusDirections: {
    type: Array,
    default: () => ['down'],
  },
  tabContentResumeDelay: {
    type: Number,
    default: 300,
  },
  tabContentSwitchDelay: {
    type: Number,
    default: 0,
  },
  slidingEnable: {
    type: Boolean,
    default: false,
  },
  slidingMode: {
    type: String,
    default: '',
  },
  initTranslation: {
    type: Number,
    default: 0,
  },
  rightTranslation: {
    type: Number,
    default: 0,
  },
  leftTranslation: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 1000,
  },
  interpolatorType: {
    type: Number,
    default: 1,
  },
  endHintEnabled: {
    type: Boolean,
    default: true,
  },
  outOfDateTime: {
    type: Number,
    default: 5 * 60 * 1000,
  },
  customPool: {
    type: Object,
  },
  customItemPool: {
    type: Object,
  },
  navBarNextFocusName: {
    type: Object,
    default: () => ({
      down: 'content',
    }),
  },
  horizontalFadingEdgeEnabled: {
    type: Boolean,
    default: false,
  },
  verticalFadingEdgeEnabled: {
    type: Boolean,
    default: false,
  },
  fadingEdgeLength: {
    type: Number,
    default: 0,
  },
} as const)

export type TabsProps = ExtractPropTypes<typeof tabsProps>
