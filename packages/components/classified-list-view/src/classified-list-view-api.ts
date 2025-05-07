import type { Ref } from '@vue/reactivity'
import type { QTIClassifiedListView } from './classified-list-view-instance'
import type { QTClassifiedListViewItem } from './classified-list-view-types'

export interface QtClassifiedListViewAPI {
  init(
    instance: Ref<QTIClassifiedListView | undefined>,
    itemList: Array<QTClassifiedListViewItem>
  ): void

  scrollToIndex(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    anim: boolean,
    offset: number
  ): void

  setItemFocused(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number
  ): void

  scrollToFocused(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number
  ): void

  setItemSelected(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    b: boolean
  ): void

  scrollToSelected(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    b: boolean
  ): void

  updateItem(
    instance: Ref<QTIClassifiedListView | undefined>,
    position: number,
    data: QTClassifiedListViewItem
  ): void
}

export function createQtClassifiedListViewAPI(): QtClassifiedListViewAPI {
  function init(
    instance: Ref<QTIClassifiedListView | undefined>,
    itemList: Array<QTClassifiedListViewItem>
  ): void {
    instance.value?.init(itemList)
  }

  function scrollToIndex(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    anim: boolean,
    offset: number
  ): void {
    instance.value?.scrollToIndex(index, anim, offset)
  }

  function setItemFocused(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number
  ): void {
    instance.value?.setItemFocused(index)
  }

  function scrollToFocused(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number
  ): void {
    instance.value?.scrollToFocused(index)
  }

  function setItemSelected(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    b: boolean
  ): void {
    instance.value?.setItemSelected(index, b)
  }

  function scrollToSelected(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    b: boolean
  ): void {
    instance.value?.scrollToSelected(index, b)
  }

  function updateItem(
    instance: Ref<QTIClassifiedListView | undefined>,
    position: number,
    data: QTClassifiedListViewItem
  ): void {
    instance.value?.updateItem(position, data)
  }

  return {
    init,
    scrollToIndex,
    setItemFocused,
    scrollToFocused,
    setItemSelected,
    scrollToSelected,
    updateItem,
  }
}
