<template>
  <media-series
    v-if="show"
    ref="viewRef"
    :clipChildren="false"
    :initParam="params"
    :height="height"
    :customItem="seriesType !== 'leftRight'"
    :scrollParam="scrollParams"
    :groupParam="groupParams"
    :commonParam="commonParams"
    @load-data="onLoadData"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    @group-item-focused="onGroupItemFocused"
  >
    <media-series-number-item
      v-if="seriesType === 'number'"
      :isVip="isVip"
      :gradientBackground="gradientBackground"
      :gradientFocusBackground="gradientFocusBackground"
      :markColor="markColor"
      :markVipColor="markVipColor"
      :iconGradientBackground="iconGradientBackground"
      :textColors="textColors"
      :textVipColors="textVipColors"
    />
    <media-series-text-item
      v-else-if="seriesType === 'text'"
      :isVip="isVip"
      :gradientBackground="gradientBackground"
      :gradientFocusBackground="gradientFocusBackground"
      :markColor="markColor"
      :markVipColor="markVipColor"
      :iconGradientBackground="iconGradientBackground"
      :itemHeight="itemDivHeight"
      :itemWidth="itemDivWidth"
      :textColors="textColors"
      :textVipColors="textVipColors"
    />
    <slot v-else-if="seriesType === 'custom'" />
  </media-series>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { nextTick } from '@vue/runtime-core'
import { Native } from '@extscreen/es3-vue'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import useBaseView from '../../base/src/useBaseView'
import { seriesProps } from './series-props'
import mediaSeriesNumberItem from './item/media-series-number-item.vue'
import mediaSeriesTextItem from './item/media-series-text-item.vue'
import mediaSeries from './component/media-series.vue'

import { QTMediaSeriesType } from './series-types'
import {
  buildCommonParams,
  buildGroupParams,
  buildLeftRightParams,
  buildMediaSeriesHeight,
  buildScrollParams,
  buildSeriesLeftRightData,
  buildSeriesLeftRightHeight,
  buildSeriesNumberData,
  buildSeriesTextData,
  buildSeriesTopDownData,
} from './DataAdapter'
import type { QTISelectSeries } from './component/select-series-instance'
import type {
  QTMediaSeries,
  QTMediaSeriesData,
  QTMediaSeriesGroup,
  QTMediaSeriesStyleType,
} from './series-types'

const TAG = 'MediaSeries'

export default defineComponent({
  name: 'QtMediaSeries',
  components: {
    'media-series-number-item': mediaSeriesNumberItem,
    'media-series-text-item': mediaSeriesTextItem,
    'media-series': mediaSeries,
  },
  props: seriesProps,
  emits: ['load-data', 'item-click', 'item-focused', 'group-item-focused'],
  setup(props, context) {
    const viewRef = ref<QTISelectSeries>()

    const show = ref(false)
    const log = useESLog()

    const params = ref()
    const commonParams = ref()
    const scrollParams = ref()
    const groupParams = ref()
    const height = ref<number>(0)

    const isVip = ref<boolean>(false)

    const seriesType = ref<QTMediaSeriesType>(
      QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER
    )
    let seriesData: QTMediaSeriesData

    const setInitData = (
      type: QTMediaSeriesType,
      group: QTMediaSeriesGroup,
      styleType: QTMediaSeriesStyleType,
      data: QTMediaSeriesData
    ) => {
      seriesType.value = type
      seriesData = data

      if (QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT !== type) {
        commonParams.value = buildCommonParams(type, group, styleType, data)
        scrollParams.value = buildScrollParams(type, group, styleType, data)
        groupParams.value = buildGroupParams(type, group, styleType, data)

        if (QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_CUSTOM == type)
          height.value = props.itemHeight + (group.enable ? 70 : 0)
        else height.value = buildMediaSeriesHeight(type, group, styleType, data)
        nextTick(() => {
          if (viewRef.value) {
            viewRef.value?.setInitData(data.totalCount, data.pageSize)
          }
        })
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----setInitData---->>>>', height.value)
        }
      } else {
        params.value = buildLeftRightParams(type, group, styleType, data)

        height.value = buildSeriesLeftRightHeight(
          type,
          group,
          styleType,
          data,
          params
        )
        params.value.totalCount = data.totalCount
        params.value.pageSize = data.pageSize
      }
      show.value = true
    }
    //-------------------------------------------------------------
    const setPageData = (page: number, dataArray: Array<QTMediaSeries>) => {
      let arr = dataArray
      if (seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER) {
        arr = buildSeriesNumberData(page, seriesData.pageSize, dataArray)
      } else if (
        seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TEXT
      ) {
        arr = buildSeriesTextData(page, seriesData.pageSize, dataArray)
      } else if (
        seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT
      ) {
        arr = buildSeriesLeftRightData(page, seriesData.pageSize, dataArray)
      } else if (
        seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TOP_DOWN
      ) {
        arr = buildSeriesTopDownData(page, seriesData.pageSize, dataArray)
      }
      viewRef.value?.setPageData(page, arr)
    }
    const scrollTo = (pos) => {
      viewRef.value?.scrollTo(pos)
    }
    const scrollToWithOffset = (pos, offset, anim) => {
      viewRef.value?.scrollToWithOffset(pos, offset, anim)
    }
    const requestFocus = (position) => {
      viewRef.value?.requestFocus(position)
    }
    const setSelected = (position) => {
      viewRef.value?.setSelected(position)
    }
    const setup = () => {
      viewRef.value?.setup()
    }
    const setGroupSelected = (position) => {
      viewRef.value?.setGroupSelected(position)
    }
    const release = () => {
      viewRef.value?.release()
      show.value = false
    }
    const blockRootFocus = () => {
      if (viewRef.value) {
        Native.callUIFunction(viewRef.value, 'blockRootFocus', [])
      }
    }
    const unBlockRootFocus = () => {
      if (viewRef.value) {
        Native.callUIFunction(viewRef.value, 'unBlockRootFocus', [])
      }
    }
    //-------------------------------------------------------------
    const onLoadData = (event) => {
      context.emit('load-data', event)
    }
    const onItemClick = (event) => {
      context.emit('item-click', event)
    }
    const onItemFocused = (event) => {
      context.emit('item-focused', event)
    }
    const onGroupItemFocused = (event) => {
      context.emit('group-item-focused', event)
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      isVip,
      seriesType,
      params,
      commonParams,
      scrollParams,
      groupParams,
      show,
      height,
      onLoadData,
      setInitData,
      setPageData,
      onItemClick,
      onItemFocused,
      onGroupItemFocused,
      scrollTo,
      scrollToWithOffset,
      requestFocus,
      setSelected,
      setup,
      setGroupSelected,
      release,
      blockRootFocus,
      unBlockRootFocus,
    }
  },
})
</script>
