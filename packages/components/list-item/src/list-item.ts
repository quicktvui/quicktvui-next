import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { listItemProps } from './list-item-props'
import type { QTListItemEvent } from './list-item-types'

const ListItem = defineComponent({
  name: 'QtListItem',
  props: listItemProps,
  emits: [
    'item-focused',
    'item-attached',
    'item-detached',
    'item-bind',
    'item-unbind',
  ],
  setup(props, context) {
    const viewRef = ref()

    const updateItem = (posInList: number, data: Record<string, unknown>) => {
      Native.callUIFunction(viewRef.value, 'updateItem', [posInList, data])
    }
    const dispatchItemFunction = (
      position: number,
      name: string,
      funcName: string,
      params: any
    ) => {
      Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [
        position,
        name,
        funcName,
        params,
      ])
    }
    const updateItemProps = (
      position: number,
      name: string,
      toUpdateMap: Record<string, unknown>
    ) => {
      Native.callUIFunction(viewRef.value, 'updateItemProps', [
        name,
        position,
        toUpdateMap,
        true,
      ])
    }
    const batch = (pos: number) => {
      Native.callUIFunction(viewRef.value, 'batch', [pos])
    }
    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'FastListView',
        {
          ref: viewRef,
          onBindItem: (evt: QTListItemEvent) => {
            context.emit('item-bind', evt)
          },
          onItemFocused: (evt: QTListItemEvent) => {
            context.emit('item-focused', evt)
          },
          onAttachedToWindow: (evt: QTListItemEvent) => {
            context.emit('item-attached', evt)
          },
          onDetachedFromWindow: (evt: QTListItemEvent) => {
            context.emit('item-detached', evt)
          },
          onItemRecycled: (evt: QTListItemEvent) => {
            context.emit('item-unbind', evt)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      updateItem,
      dispatchItemFunction,
      updateItemProps,
      batch,
    }
  },
  render() {
    return this.render()
  },
})

export default ListItem
