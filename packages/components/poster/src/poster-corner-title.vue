<template>
  <div :focusable="false" :class="[ns.e('corner'), ns.is(mode)]">
    <!-- 角标-->
    <text-view
      :duplicateParentState="true"
      :focusable="false"
      :clipChildren="false"
      :textSize="fontSize"
      :ellipsizeMode="2"
      :lines="1"
      typeface="bold"
      gravity="center"
      :postDelay="350"
      style="color: white; padding: 4px 8px; height: 36px; margin: 4px"
      gradientBackground="${corner.background}"
      autoWidth
      text="${corner.text}"
      showIf="${corner.enable==true}"
    />
    <img
      :focusable="false"
      :class="[ns.em('corner', 'img'), ns.is(mode)]"
      flexStyle="${corner.styleImg}"
      :src="corner"
      showIf="${corner.enableImg}"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-core'
import { useNamespace } from '@quicktvui/hooks'
import { posterTitleProps } from './poster-props'

defineOptions({
  name: 'PosterCornerTitle',
})
const props = defineProps(posterTitleProps)
const ns = useNamespace('poster')
const corner = ref<string>('${corner.src}')
</script>
