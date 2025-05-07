<script setup lang="ts">
import { computed, getCurrentInstance, ref, toRef } from 'vue'
import { isClient, useClipboard, useToggle } from '@vueuse/core'
import { CaretBottom, CaretTop } from '@element-plus/icons-vue'
import { useLang } from '../composables/lang'
import { useSourceCode } from '../composables/source-code'
import { usePlayground } from '../composables/use-playground'

import demoBlockLocale from '../../i18n/component/demo-block.json'

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle()
const lang = useLang()
const demoSourceUrl = useSourceCode(toRef(props, 'path'))

const sourceCodeRef = ref<HTMLButtonElement>()
const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

const locale = computed(() => demoBlockLocale[lang.value])
const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const onPlaygroundClick = () => {
  const { link } = usePlayground(props.rawSource)
  if (!isClient) return
  window.open(link)
}

const onSourceVisibleKeydown = (e: KeyboardEvent) => {
  if (['Enter', 'Space'].includes(e.code)) {
    e.preventDefault()
    toggleSourceVisible(false)
    sourceCodeRef.value?.focus()
  }
}

const copyCode = async (e) => {
  e.stopPropagation()
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error(locale.value['copy-error'])
  }
  try {
    await copy()
    $message.success(locale.value['copy-success'])
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->

    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <Transition name="el-fade-in-linear">
        <div
          class="example-float-control"
          tabindex="0"
          role="button"
          @click="toggleSourceVisible()"
          @keydown="onSourceVisibleKeydown"
        >
          <div>
            <ElIcon :size="16">
              <CaretTop v-show="sourceVisible" />
              <CaretBottom v-show="!sourceVisible" />
            </ElIcon>
            <span>点击查看源码</span>
          </div>

          <div class="op-btns">
            <ElTooltip
              :content="locale['copy-code']"
              :showArrow="false"
              :trigger="['hover', 'focus']"
              :triggerKeys="[]"
            >
              <ElIcon
                :size="16"
                :aria-label="locale['copy-code']"
                class="op-btn"
                tabindex="0"
                role="button"
                @click="copyCode"
                @keydown.prevent.enter="copyCode"
                @keydown.prevent.space="copyCode"
              >
                <i-ri-file-copy-line />
              </ElIcon>
            </ElTooltip>
            <ElTooltip
              :content="locale['edit-on-github']"
              :showArrow="false"
              :trigger="['hover', 'focus']"
              :triggerKeys="[]"
            >
              <ElIcon
                :size="16"
                class="op-btn github"
                style="color: var(--text-color-light)"
              >
                <a
                  :href="demoSourceUrl"
                  :aria-label="locale['edit-on-github']"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i-ri-github-line />
                </a>
              </ElIcon>
            </ElTooltip>
          </div>
        </div>
      </Transition>

      <!--      <div class="op-btns">-->
      <!--        <ElTooltip-->
      <!--          :content="locale['copy-code']"-->
      <!--          :showArrow="false"-->
      <!--          :trigger="['hover', 'focus']"-->
      <!--          :triggerKeys="[]"-->
      <!--        >-->
      <!--          <ElIcon-->
      <!--            :size="16"-->
      <!--            :aria-label="locale['copy-code']"-->
      <!--            class="op-btn"-->
      <!--            tabindex="0"-->
      <!--            role="button"-->
      <!--            @click="copyCode"-->
      <!--            @keydown.prevent.enter="copyCode"-->
      <!--            @keydown.prevent.space="copyCode"-->
      <!--          >-->
      <!--            <i-ri-file-copy-line />-->
      <!--          </ElIcon>-->
      <!--        </ElTooltip>-->
      <!--        <ElTooltip-->
      <!--          :content="locale['view-source']"-->
      <!--          :showArrow="false"-->
      <!--          :trigger="['hover', 'focus']"-->
      <!--          :triggerKeys="[]"-->
      <!--        >-->
      <!--          <button-->
      <!--            ref="sourceCodeRef"-->
      <!--            :aria-label="-->
      <!--              sourceVisible ? locale['hide-source'] : locale['view-source']-->
      <!--            "-->
      <!--            class="reset-btn el-icon op-btn"-->
      <!--            @click="toggleSourceVisible()"-->
      <!--          >-->
      <!--            <ElIcon :size="16">-->
      <!--              <i-ri-code-line />-->
      <!--            </ElIcon>-->
      <!--          </button>-->
      <!--        </ElTooltip>-->
      <!--      </div>-->

      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);
  background-color: lightgray;

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--el-border-radius-base);
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    padding-left: 20px;
    padding-right: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
