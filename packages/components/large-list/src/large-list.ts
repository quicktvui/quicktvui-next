import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { largeListProps } from './large-list-props'

const LargeList = defineComponent({
  name: 'QtLargeList',
  props: largeListProps,
  emits: ['load-data', 'item-click', 'item-focused', 'group-item-focused'],
  setup(props, context) {
    const viewRef = ref()

    function setup() {
      Native.callUIFunction(viewRef.value, 'setup', [])
    }

    function setPageData(page: number, data: Array<any>) {
      Native.callUIFunction(viewRef.value, 'setPageData', [page, data])
    }

    function scrollTo(position: number) {
      Native.callUIFunction(viewRef.value, 'scrollToPosition', [position])
    }

    function scrollToWithOffset(
      position: number,
      offset: number,
      anim: boolean
    ) {
      Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [
        position,
        offset,
        anim,
      ])
    }

    function setSelected(position: number) {
      Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position])
    }

    function setGroupSelected(position: number) {
      Native.callUIFunction(
        viewRef.value,
        'setGroupChildSelectByItemPosition',
        [position]
      )
    }

    function release() {
      Native.callUIFunction(viewRef.value, 'destroy', [])
    }

    const render = () => {
      return h('LargeListComponent', {
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
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      setup,
      render,
      setPageData,
      scrollTo,
      scrollToWithOffset,
      setSelected,
      setGroupSelected,
      release,
    }
  },
  render() {
    return this.render()
  },
})

export default LargeList
