<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'
import { useToc } from '../../composables/use-toc'

import sponsorLocale from '../../../i18n/component/sponsor.json'
import { useLang } from '../../composables/lang'
import SponsorsButton from '../sponsors/sponsors-button.vue'
import SponsorRightBigLogoList from '../sponsors/right-big-logo-list.vue'
import SponsorRightTextList from '../sponsors/right-richtext-list.vue'
import SponsorRightLogoSmallList from '../sponsors/right-logo-small-list.vue'
import tag from '../../../plugins/tag'
import homeLocale from '../../../i18n/pages/home.json'
// import SponsorLarge from '../vp-sponsor-large.vue'

const localMd = MarkdownIt().use(tag)
const headers = useToc()
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])
const sponsor = computed(() => sponsorLocale[lang.value])
</script>

<template>
  <aside ref="container" class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">{{ homeLang['contents'] }}</h3>
      <ClientOnly>
        <el-anchor :offset="70" :bound="120">
          <el-anchor-link
            v-for="{ link, text, children } in headers"
            :key="link"
            :href="link"
            :title="text"
          >
            <div v-html="localMd.render(text)" />
            <template v-if="children" #sub-link>
              <el-anchor-link
                v-for="{ link: childLink, text: childText } in children"
                :key="childLink"
                :href="childLink"
                :title="text"
              >
                <div v-html="localMd.render(childText)" />
              </el-anchor-link>
            </template>
          </el-anchor-link>
        </el-anchor>
      </ClientOnly>
      <!-- <SponsorLarge
        class="mt-8 toc-ads flex flex-col"
        item-style="width: 180px; height: 55px;"
      /> -->
      <!--      <p class="text-14px font-300 color-$text-color-secondary">-->
      <!--        {{ sponsor.sponsoredBy }}-->
      <!--      </p>-->
      <!--      <sponsors-button class="sponsors-button mt-4 w-100%" />-->
      <!--      <sponsor-right-big-logo-list />-->
      <!--      <sponsor-right-logo-small-list />-->
      <!--      <sponsor-right-text-list />-->
    </nav>
  </aside>
</template>
<style scoped lang="scss">
.sponsors-button:deep {
  button {
    width: 100%;
  }
}
</style>
