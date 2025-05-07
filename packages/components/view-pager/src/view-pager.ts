import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { viewPagerProps } from './view-pager-props'
import type { QTPageData } from './view-pager-types'

const ViewPager = defineComponent({
  name: 'QtViewPager',
  props: viewPagerProps,
  setup(props, context) {
    const viewRef = ref()

    function setPageData(page: number, data: QTPageData): void {
      Native.callUIFunction(viewRef.value, 'setListData', [
        page,
        {
          useDiff: data.useDiff,
          disableScrollOnFirstScreen: data.disableScrollOnFirstScreen,
          firstFocusTargetID: data.firstFocusTargetID,
        },
        data.data,
      ])
    }

    function translationLeft(): void {
      Native.callUIFunction(viewRef.value, 'translationLeft', [])
    }

    function translationRight(): void {
      Native.callUIFunction(viewRef.value, 'translationRight', [])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'RecyclerViewPager',
        {
          ref: viewRef,
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      setPageData,
      translationLeft,
      translationRight,
    }
  },
  render() {
    return this.render()
  },
})

export default ViewPager
