<template>
  <div
    ref="viewRef"
    :clipChildren="false"
    :focusable="focusable"
    :enableFocusBorder="focusBorder"
    :focusScale="focusScale"
    name="textButton"
    eventClick
    eventFocus
    :class="buttonKls"
    @click="onClick"
    @focus="onFocus"
  >
    <!-- ------------------------------gradient--------------------------- -->
    <div
      v-if="gradientFocusBackground"
      :class="gradientKls"
      :gradientBackground="gradientFocusBackground"
      :focusable="false"
      showOnState="focused"
    />
    <div
      v-if="gradientSelectedBackground"
      :class="gradientKls"
      :gradientBackground="gradientSelectedBackground"
      :focusable="false"
      showOnState="selected"
    />
    <div
      v-if="gradientBackground"
      :class="gradientKls"
      :gradientBackground="gradientBackground"
      :focusable="false"
      showOnState="normal"
    />

    <!-- -----------------------------icon--------------------------------- -->
    <div
      v-if="iconRootVisible"
      :duplicateParentState="true"
      :class="iconParentKls"
    >
      <img
        v-if="iconVisible"
        :duplicateParentState="true"
        :class="iconKls"
        :focusable="false"
        :src="enableFlexStyle ? '${' + icon + '}' : icon"
        showOnState="normal"
      />

      <img
        v-if="iconFocusVisible"
        :class="iconKls"
        :focusable="false"
        :duplicateParentState="true"
        :src="enableFlexStyle ? '${' + focusIcon + '}' : focusIcon"
        showOnState="focused"
      />
    </div>
    <!-- -----------------------------text--------------------------------- -->
    <text-view
      v-if="enableFlexStyle"
      duplicateParentState
      :class="textKls"
      :focusable="false"
      :text="'${' + text + '}'"
      autoWidth
      autoHeight
    />
    <span
      v-else-if="text && !$slots.default"
      duplicateParentState
      :class="textKls"
      :focusable="false"
      >{{ text }}</span
    >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { buttonProps } from './button-props'

export default defineComponent({
  name: 'QtButton',
  props: buttonProps,
  emits: ['focus', 'click'],
  setup(props, context) {
    const viewRef = ref()
    const focused = ref(false)
    const ns = useNamespace('button')

    const buttonKls = computed(() => [
      ns.b(),
      ns.m(props.size),
      ns.is('round', props.round),
    ])

    //BEM: block-name__element-name--modifier-name
    const textKls = computed(() => [ns.e('text'), ns.em('text', props.size)])

    const gradientKls = computed(() => [ns.e('gradient')])

    const iconKls = computed(() => [ns.e('icon'), ns.em('icon', props.size)])

    const iconRootKls = computed(() => [
      ns.e('icon-root'),
      ns.em('icon-root', props.size),
    ])

    const iconRootVisible = computed(() => {
      return (props.icon || props.focusIcon) && !context.slots.default
    })

    const iconVisible = computed(() => {
      return props.icon && !context.slots.default
    })

    const iconFocusVisible = computed(() => {
      return props.focusIcon && !context.slots.default
    })

    function onFocus(e) {
      focused.value = e.isFocused
      context.emit('focus', e.isFocused)
    }

    function onClick(e) {
      context.emit('click')
    }

    return {
      viewRef,
      textKls,
      buttonKls,
      gradientKls,
      iconKls,
      iconRootVisible,
      iconVisible,
      iconFocusVisible,
      iconParentKls: iconRootKls,
      ...useBaseView(viewRef),
      focused,
      onFocus,
      onClick,
    }
  },
})
</script>
