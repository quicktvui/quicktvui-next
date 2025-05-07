import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import { selectSeriesProps } from './select-series-props'
import type { QTSelectSeries } from './select-series-types'

const SelectSeries = defineComponent({
  name: 'QtSelectSeries',
  props: selectSeriesProps,
  emits: ['load-data', 'item-click', 'item-focused', 'group-item-focused'],
  setup(props, context) {
    const viewRef = ref()

    function setInitData(totalCount: number, pageSize: number): void {
      Native.callUIFunction(viewRef.value, 'setInitData', [
        totalCount,
        pageSize,
      ])
    }

    function setVisible(display: boolean): void {
      Native.callUIFunction(viewRef.value, 'setDisplay', [display])
    }

    function setPageData(page: number, data: Array<QTSelectSeries>): void {
      Native.callUIFunction(viewRef.value, 'setPageData', [page, data])
    }

    function scrollTo(pos: number): void {
      Native.callUIFunction(viewRef.value, 'scrollToPosition', [pos])
    }

    function scrollToWithOffset(
      pos: number,
      offset: number,
      anim: boolean
    ): void {
      Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [
        pos,
        offset,
        anim,
      ])
    }

    function requestFocus(position: number): void {
      Native.callUIFunction(viewRef.value, 'requestChildFocus', [position])
    }

    function setSelected(position: number): void {
      Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position])
    }

    function setup(): void {
      Native.callUIFunction(viewRef.value, 'setup', [])
    }

    function setGroupSelected(position: number): void {
      Native.callUIFunction(
        viewRef.value,
        'setGroupChildSelectByItemPosition',
        [position]
      )
    }

    function release(): void {
      Native.callUIFunction(viewRef.value, 'destroy', [])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'RippleViewComponent',
        {
          ref: viewRef,
          onLoadPageData: (evt: Record<string, any>) => {
            context.emit('load-data', evt)
          },
          onItemClick: (evt: Record<string, any>) => {
            context.emit('item-click', evt)
          },
          onItemFocused: (evt: Record<string, any>) => {
            context.emit('item-focused', evt)
          },
          onGroupItemFocused: (evt: Record<string, any>) => {
            context.emit('group-item-focused', evt)
          },
        },
        children
      )
    }

    return {
      viewRef,
      render,
      setup,
      setInitData,
      setVisible,
      setPageData,
      scrollTo,
      scrollToWithOffset,
      requestFocus,
      setSelected,
      setGroupSelected,
      release,
    }
  },
  render() {
    return this.render()
  },
})

export default SelectSeries
