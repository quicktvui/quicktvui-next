<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import VPLink from '../common/vp-link.vue'
import VPMarkdown from '../common/vp-markdown.vue'
import type { ServerResponse } from '../../types'
import type { AxiosResponse } from 'axios'

interface AppCategory {
  categoryName: string
  extAppAccountResultList: AppInfo[]
}

interface AppInfo {
  app: App
}

interface App {
  packageName: string
  appIcon: number
  appName: string
}

const loading = ref(true)
const appCategoryList = ref<AppCategory[]>([])

function request<T = any>(url: string, data: string): Promise<T> {
  return axios
    .post<ServerResponse<T>>(
      url,
      {
        developer: {
          apikey: '2V29G3SD',
          secretkey: '5faa1c397ed64d09a17ab89b6b19d373',
        },
        data,
        data1: 'webPageFlag',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response: AxiosResponse<ServerResponse<T>>) =>
      Promise.resolve(response.data.data)
    )
}
const downloadUrl = (item) => {
  let url = ''
  if (item.app.appName == '1905TV极速版') {
    url =
      'https://extcdn.hsrc.tv/extend_screen/files/es_app/quicktv_app_general_2.9.1550_20250414112128_release.apk'
  } else {
    url =
      'https://extcdn.hsrc.tv/extend_screen/files/es_app/quicktv_app_general_2.9.1550_20250414112128_release.apk'
  }
  window.open(url)
}

onMounted(async () => {
  try {
    const newAppList = await request<AppInfo[]>(
      'https://extscreen.huan.tv/extend_api/api/v2/zero/arrange/layoutMyApp',
      '最新上线'
    )
    const categoryAppList = await request<AppCategory[]>(
      'https://extscreen.huan.tv/extend_api/api/v2/zero/arrange/layoutCategoryAndApp',
      ''
    )
    categoryAppList.unshift({
      categoryName: '最新上线',
      extAppAccountResultList: newAppList,
    })
    appCategoryList.value = categoryAppList
  } catch {
    appCategoryList.value = []
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <p class="apps-title">开发案例</p>
  <div v-for="(item, index) in appCategoryList" :key="index" class="apps-cards">
    <p class="apps-category-title">{{ item.categoryName }}</p>
    <div class="apps-card-item">
      <div
        v-for="(appItem, appIndex) in item.extAppAccountResultList"
        :key="appIndex"
        class="apps-item-root"
      >
        <img class="apps-item-icon" :src="appItem.app.appIcon" />
        <p class="apps-item-text">{{ appItem.app.appName }}</p>
        <div class="apps-item-download" @click="downloadUrl(appItem)">
          <img
            class="apps-item-download-icon"
            src="/images/home/ic-app-download.png"
          />
        </div>
      </div>
      <div style="flex: 1" />
    </div>
  </div>
</template>

<style lang="scss">
.home-page {
  .apps-title {
    font-size: 30px;
    color: var(--text-color);
    // margin: 30px 0;
    margin: auto;
    font-weight: 600;
    text-align: left;
    // padding-left: 40px;
    // width: 1145px;
  }
  @media (min-width: 1193px) {
    .apps-title {
      width: 1225px;
      padding-left: 40px;
    }
    .apps-cards {
      margin: auto;
      padding-left: 40px;
      width: 1225px;
      .apps-card-item {
        margin-right: 40px;
      }
    }

    .apps-item-root {
      margin-right: 40px;
    }
  }
  @media (max-width: 1193px) {
    .apps-title {
      width: 100%;
      padding-left: 40px;
    }
    .apps-cards {
      margin: auto;
      padding-left: 40px;
      width: 100%;
      .apps-card-item {
        margin-right: 40px;
      }
    }

    .apps-item-root {
      margin-right: 40px;
    }
  }
  @media (max-width: 720px) {
    .apps-title {
      width: 300px;
      // background: #c00;
    }
    .apps-cards {
      margin: auto;
      width: 300px;
      // background: #c00;
      .apps-card-item {
        margin-right: 10px;
      }
    }

    .apps-item-root {
      margin-right: 0px;
    }
  }

  .apps-cards {
    margin: auto;
    // width:1145px;
    .apps-category-title {
      color: var(--text-color);
      font-size: 20px;
      font-weight: 500;
      // margin-left: 40px;
    }

    .apps-card-item {
      // margin: 0 0 0 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .apps-item-root {
        width: 75px;
        overflow-x: hidden;
        position: relative;
        // margin-right: 40px;

        .apps-item-icon {
          width: 75px;
          height: 75px;
          border-radius: 15px;
          border: 1px solid #f1eeee;
        }

        .apps-item-text {
          font-size: 14px;
          color: var(--text-color);
          line-height: 20px;
          width: 75px;
          text-align: center;
          margin-top: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .apps-item-download {
          width: 75px;
          height: 75px;
          background: rgba(0, 0, 0, 0.7);
          position: absolute;
          top: 0px;
          left: 0px;
          opacity: 0;
          border-radius: 15px;
          transition: all 0.3s ease;

          .apps-item-download-icon {
            width: 17px;
            height: 16px;
            margin-top: 29px;
            margin-left: 29px;
          }
        }
      }

      .apps-item-root:hover .apps-item-download {
        opacity: 1;
      }
    }
  }
}
</style>
