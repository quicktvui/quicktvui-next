<script setup lang="ts">
import { ref } from 'vue'
import VPLink from '../common/vp-link.vue'

const item = ref({})
</script>

<template>
  <div class="repository-container">
    <VPLink
      :class="{
        'is-menu-link': true,
      }"
      href="http://hub.quicktv.net/"
      :noIcon="true"
    >
      QuickTV仓库
    </VPLink>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;

.repository-container {
  display: none;
  height: 24px;
  padding: 0 12px;

  .is-menu-link {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
    transition: color var(--el-transition-duration);
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom-color: var(--brand-color);
    }

    &:hover {
      color: var(--brand-color);
    }
  }

  @include respond-to('md') {
    display: block;
  }
}
</style>
