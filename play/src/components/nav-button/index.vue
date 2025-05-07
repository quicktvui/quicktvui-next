<template>
  <qt-button class='nav-button-root-css'
             :focusable='true'
             :focus-border='true'
             :focus-scale='1.1'
             :text='text'
             size='small'
             @click='onClick'
             @focus='onFocus' />
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'
import { useESRouter } from '@extscreen/es3-router'

export default defineComponent({
  name: 's-nav-button',
  props: {
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const router = useESRouter()

    const onFocus = (e) => {
      let focused = e.isFocused
    }

    const onClick = (e) => {
      console.log('--------路由跳转----------->>>>>' + props.url)
      router.push({
        name: props.url,
        params: {}
      })
    }

    return {
      onFocus,
      onClick
    }
  }
})

</script>

<style scoped>

.nav-button-root-css {
  margin: 20px;
}

</style>
