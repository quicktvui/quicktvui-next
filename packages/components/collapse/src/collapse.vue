<template>
  <div
    ref="viewRef"
    :class="ns.b()"
    :clipChildren="false"
    :clipPadding="false"
    :style="{ width: collapseWidth, height: collapseHeight }"
  >
    <qt-animation
      v-for="(item, index) in collapseItemComponentList"
      :key="item.name"
      :ref="(el) => initAnimComponentRef(el, item, index)"
      class="qt-collapse-item-css"
    >
      <component
        :is="item"
        :key="item.name"
        :ref="(el) => initComponentRef(el, item, index)"
      />
    </qt-animation>
  </div>
</template>

<script lang="ts">
import { nextTick, ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { useNamespace } from '../../../hooks'
import { QTAnimationPropertyName, QTAnimationValueType } from '../../animation'
import useBaseView from '../../base/src/useBaseView'
import { collapseProps } from './collapse-props'
import type { QTIAnimation } from '../../animation'
import type {
  QTCollapse,
  QTCollapseItem,
  QTICollapseItem,
} from './collapse-types'

const TAG = 'QTCollapse'

export default defineComponent({
  name: 'QtCollapse',
  props: collapseProps,
  emits: ['onCollapseItemExpand'],
  setup(props, context) {
    const log = useESLog()
    const viewRef = ref()
    const ns = useNamespace('collapse')

    const collapseItemComponentList = ref()

    let collapseItemList: Array<QTCollapseItem>
    let collapseItemIndex: number
    const collapseWidth = ref<number>(0)
    const collapseHeight = ref<number>(0)
    let expandDuration = 200

    const componentRefs: Record<string, QTICollapseItem> = {}

    function initComponentRef(
      el: QTICollapseItem,
      item: { name: string },
      index: number
    ) {
      if (el) {
        componentRefs[`${index}`] = el
      }
    }

    const animComponentRefs: Record<string, QTIAnimation> = {}

    function initAnimComponentRef(
      el: QTIAnimation,
      item: { name: string },
      index: number
    ) {
      if (el) {
        animComponentRefs[`${index}`] = el
      }
    }

    function getAnimItem(index: number): QTIAnimation {
      return animComponentRefs[`${index}`]
    }

    function init(collapse: QTCollapse): void {
      collapseItemComponentList.value =
        context.slots.default && context.slots.default()

      collapseItemIndex = collapse.defaultIndex ?? 0
      collapseItemList = collapse.itemList
      collapseWidth.value = collapse.width
      collapseHeight.value = collapse.height
      expandDuration = collapse.expandDuration ?? 200

      if (collapseItemIndex < 0) {
        collapseItemIndex = 0
      }

      if (collapseItemIndex >= collapseItemList.length) {
        collapseItemIndex = collapseItemList.length - 1
      }

      initCollapseItem()
      nextTick(() => {
        expandItemDelay(collapseItemIndex, 0)
      })
    }

    function initCollapseItem() {
      if (!collapseItemList || collapseItemList.length <= 0) {
        return
      }
      const length = collapseItemList.length
      let itemY = 0
      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        itemY = itemY + item.height
        item.__y = collapseHeight.value - itemY
        item.__translationY = 0
      }

      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----initCollapseItem---->>>>', collapseItemList)
      }
    }

    function expandItem(index: number) {
      expandItemDelay(index, expandDuration)
    }

    function expand() {
      const length = collapseItemList.length
      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        try {
          const itemRef: QTICollapseItem = getItem(i)
          if (itemRef) {
            itemRef.onCollapseItemExpand(true)
          }
        } catch {}
        const animItemRef: QTIAnimation = getAnimItem(i)
        if (animItemRef) {
          translationItem(`${i}`, item, animItemRef, item.__translationY, 0, 0)
        }
      }
    }

    function collapse() {
      const length = collapseItemList.length
      const item = collapseItemList[length - 1]
      const itemY = item.__y
      const translationY = collapseHeight.value - item.height - itemY
      let itemTotalY = 0

      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        const itemCollapseHeight = item.collapseHeight
        itemTotalY = itemTotalY + itemCollapseHeight
        try {
          const itemRef: QTICollapseItem = getItem(i)
          if (itemRef) {
            itemRef.onCollapseItemExpand(false)
          }
        } catch {}

        const animItemRef: QTIAnimation = getAnimItem(i)
        if (animItemRef) {
          translationItem(
            `${i}`,
            item,
            animItemRef,
            item.__translationY,
            translationY + itemTotalY,
            0
          )
        }
      }
    }

    function expandItemDelay(index: number, delay: number) {
      const item = collapseItemList[index]
      const itemY = item.__y
      const translationY = collapseHeight.value - item.height - itemY
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------expandItem------->>>>', index, translationY, itemY)
      }
      //
      let itemTotalY = 0
      const length = collapseItemList.length

      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        // const itemHeight = item.height;
        const itemCollapseHeight = item.collapseHeight

        if (i < index) {
          itemTotalY = itemTotalY + itemCollapseHeight
        }

        try {
          const itemRef: QTICollapseItem = getItem(i)
          if (itemRef) {
            itemRef.onCollapseItemExpand(i == index)
          }
        } catch {}

        const animItemRef: QTIAnimation = getAnimItem(i)
        if (animItemRef) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(
              TAG,
              '-------expandItem----translationY--->>>>',
              item,
              i,
              item.__translationY,
              translationY + itemTotalY
            )
          }
          translationItem(
            `${i}`,
            item,
            animItemRef,
            item.__translationY,
            translationY + itemTotalY,
            delay
          )
        }
      }

      try {
        context.emit('onCollapseItemExpand', index, item)
      } catch {}
    }

    function translationItem(
      id: string,
      item: QTCollapseItem,
      animItemRef: QTIAnimation,
      fromY: number,
      toY: number,
      duration: number
    ) {
      animItemRef.objectAnimator2(
        id,
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        fromY,
        toY,
        duration,
        -1,
        0,
        false,
        false
      )
      animItemRef.startAnimator(id)
      item.__translationY = toY
    }

    function getItem(index: number): QTICollapseItem {
      return componentRefs[`${index}`]
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
      collapseItemComponentList,
      initComponentRef,
      initAnimComponentRef,
      init,
      getItem,
      expandItem,
      collapse,
      expand,
      collapseWidth,
      collapseHeight,
    }
  },
})
</script>
