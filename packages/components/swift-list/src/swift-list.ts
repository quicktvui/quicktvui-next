import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { swiftListProps } from './swift-list-props'

const SwiftList = defineComponent({
  name: 'QtSwiftList',
  props: swiftListProps,
  emits: ['load-data', 'item-click'],
  setup(props, context) {
    const viewRef = ref()

    function setPageData(page: number, data: Array<any>) {
      Native.callUIFunction(viewRef.value, 'setPageData', [page, data])
    }

    function updateData(position: number, data: any) {
      Native.callUIFunction(viewRef.value, 'updateData', [position, data])
    }

    function notifyNoMoreData() {
      Native.callUIFunction(viewRef.value, 'notifyNoMoreData', [])
    }

    function requestMore() {
      Native.callUIFunction(viewRef.value, 'notifyNoMoreData', [])
    }

    function scrollToPosition(pos: number) {
      Native.callUIFunction(viewRef.value, 'scrollToPosition', [pos])
    }

    function scrollToPositionWithOffset(
      pos: number,
      offset: number,
      anim: boolean
    ) {
      Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [
        pos,
        offset,
      ])
    }

    function requestChildFocus(position: number) {
      Native.callUIFunction(viewRef.value, 'requestChildFocus', [position])
    }

    function setSelectChildPosition(position: number) {
      Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position])
    }

    function setFocusTargetChildPosition(position: number) {
      Native.callUIFunction(viewRef.value, 'setFocusTargetChildPosition', [
        position,
      ])
    }

    const render = () => {
      return h('SwiftListComponent', {
        ref: viewRef,
        onLoadPageData: (evt: Record<string, any>) => {
          context.emit('load-data', evt)
        },
        onItemClick: (evt: Record<string, any>) => {
          context.emit('item-click', evt)
        },
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      setPageData,
      updateData,
      notifyNoMoreData,
      requestMore,
      scrollToPosition,
      scrollToPositionWithOffset,
      requestChildFocus,
      setSelectChildPosition,
      setFocusTargetChildPosition,
    }
  },
  render() {
    return this.render()
  },
})

export default SwiftList
