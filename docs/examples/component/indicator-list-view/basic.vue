<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-list-view">
      <qt-view class="list_view_row">
        <qt-list-view
          ref="listViewRef"
          class="list_view"
          :clipChildren="false"
          :clipPadding="false"
          horizontal
          :padding="'0,0,30,0'"
          :defaultFocus="defaultFocus"
          :blockFocusDirections="['left', 'right']"
        >
          <!-- item -->
          <qt-poster />
          <tv-item
            :type="6"
            flexStyle="${style}"
            :focusable="false"
            :clipChildren="false"
            class="loop-img-root-css"
          >
            <div
              duplicateParentState
              showOnState="focused"
              style="
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                background-color: transparent;
                border-color: white;
                border-radius: 9px;
                border-width: 3px;
                border-style: solid;
              "
            />
            <div
              flexStyle="${style}"
              :clipChildren="true"
              :focusable="true"
              duplicateParentState
              style="background-color: transparent"
            >
              <qt-indicator-list-view
                class="loop-img-list-css"
                horizontal
                duplicateParentState
                :clipChildren="true"
                :clipPadding="true"
                :focusable="true"
                :setIndicatorType="0"
                :setIndicatorCenterType="1"
                :setIndicatorEnable="true"
                :isAutoLoop="true"
                :loopInterval="3000"
                :setIndicatorTitle="'圆点 右下 间隔3s'"
                :drawBackground="true"
                flexStyle="${style}"
                indList="${itemList}"
              >
                <qt-view
                  :type="66"
                  flexStyle="${style}"
                  style="background-color: transparent"
                  name="loop_img_item"
                  :focusable="false"
                  eventClick
                  eventFocus
                >
                  <img
                    class="item-loop-img-css"
                    :postDelay="200"
                    src="${image.img}"
                    :focusable="false"
                    flexStyle="${image.style}"
                  />
                  <div
                    duplicateParentState
                    showOnState="focused"
                    style="
                      position: absolute;
                      top: -1px;
                      left: -1px;
                      right: -1px;
                      bottom: -1px;
                      background-color: transparent;
                      border-color: white;
                      border-radius: 9px;
                      border-width: 3px;
                      border-style: solid;
                    "
                  />
                </qt-view>
              </qt-indicator-list-view>
            </div>
          </tv-item>
        </qt-list-view>
        <qt-list-view
          ref="listViewRefCenter"
          class="list_view"
          :clipChildren="false"
          :clipPadding="false"
          horizontal
          :padding="'0,0,30,0'"
          :defaultFocus="defaultFocus"
          :blockFocusDirections="['left', 'right']"
        >
          <!-- item -->
          <qt-poster />

          <tv-item
            :type="6"
            flexStyle="${style}"
            :focusable="false"
            :clipChildren="false"
            class="loop-img-root-css"
          >
            <div
              duplicateParentState
              showOnState="focused"
              style="
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                background-color: transparent;
                border-color: white;
                border-radius: 9px;
                border-width: 3px;
                border-style: solid;
              "
            />
            <div
              flexStyle="${style}"
              :clipChildren="true"
              :focusable="true"
              duplicateParentState
              style="background-color: transparent"
            >
              <qt-indicator-list-view
                class="loop-img-list-css"
                horizontal
                duplicateParentState
                :clipChildren="true"
                :clipPadding="true"
                :focusable="true"
                :setIndicatorType="0"
                :setIndicatorCenterType="0"
                :setIndicatorEnable="true"
                :isAutoLoop="true"
                :loopInterval="1000"
                :setIndicatorTitle="'圆点 中间 间隔1s'"
                :drawBackground="true"
                flexStyle="${style}"
                indList="${itemList}"
              >
                <qt-view
                  :type="66"
                  flexStyle="${style}"
                  style="background-color: transparent"
                  name="loop_img_item"
                  :focusable="false"
                  eventClick
                  eventFocus
                >
                  <img
                    class="item-loop-img-css"
                    :postDelay="200"
                    src="${image.img}"
                    :focusable="false"
                    flexStyle="${image.style}"
                  />
                  <div
                    duplicateParentState
                    showOnState="focused"
                    style="
                      position: absolute;
                      top: -1px;
                      left: -1px;
                      right: -1px;
                      bottom: -1px;
                      background-color: transparent;
                      border-color: white;
                      border-radius: 9px;
                      border-width: 3px;
                      border-style: solid;
                    "
                  />
                </qt-view>
              </qt-indicator-list-view>
            </div>
          </tv-item>
        </qt-list-view>
        <qt-list-view
          ref="cmdListViewRef"
          class="list_view"
          :clipChildren="false"
          :clipPadding="false"
          horizontal
          :padding="'0,0,30,0'"
          :defaultFocus="defaultFocus"
          :blockFocusDirections="['left', 'right']"
        >
          <!-- item -->
          <qt-poster />
          <tv-item
            :type="5"
            flexStyle="${style}"
            :clipChildren="false"
            :focusable="false"
            class="loop-img-root-css"
          >
            <div
              duplicateParentState
              showOnState="focused"
              style="
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                background-color: transparent;
                border-color: white;
                border-radius: 9px;
                border-width: 3px;
                border-style: solid;
              "
            />
            <div
              flexStyle="${style}"
              :clipChildren="true"
              :focusable="false"
              style="background-color: transparent"
            >
              <qt-indicator-list-view
                class="loop-img-list-css"
                horizontal
                duplicateParentState
                :clipChildren="true"
                :clipPadding="true"
                :focusable="true"
                :setIndicatorType="1"
                :setIndicatorEnable="true"
                :isAutoLoop="true"
                :setIndicatorTitle="'文字右下 默认 5s间隔'"
                :drawBackground="false"
                flexStyle="${style}"
                indList="${itemList}"
                @current-indicator-page-index="onPageIndexFunction"
              >
                <qt-view
                  :type="55"
                  flexStyle="${style}"
                  style="background-color: transparent"
                  name="loop_img_item"
                  :focusable="false"
                  eventClick
                  eventFocus
                >
                  <img
                    class="item-loop-img-css"
                    :postDelay="200"
                    src="${image.img}"
                    :focusable="false"
                    flexStyle="${image.style}"
                  />
                  <div
                    duplicateParentState
                    showOnState="focused"
                    style="
                      position: absolute;
                      top: -1px;
                      left: -1px;
                      right: -1px;
                      bottom: -1px;
                      background-color: transparent;
                      border-color: white;
                      border-radius: 9px;
                      border-width: 3px;
                      border-style: solid;
                    "
                  />
                </qt-view>
              </qt-indicator-list-view>
            </div>
          </tv-item>
        </qt-list-view>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog, useESToast } from '@extscreen/es3-core'
import type { QTIndicatorListView, QTListViewItem, QTPoster } from 'quicktvui'

export default defineComponent({
  name: '使用初探',
  setup() {
    const listViewRef = ref<QTIndicatorListView>()
    const listViewRefCenter = ref<QTIndicatorListView>()
    const cmdListViewRef = ref<QTIndicatorListView>()
    const defaultFocus = ref(0)
    const listDataRec: Array<QTListViewItem> = []
    const toast = useESToast()

    const onESCreate = (params) => {
      const arr: Array<QTListViewItem> = []
      const dataList: any = []
      const poster1: QTPoster = {
        type: 6,
        style: {
          width: 400,
          height: 320,
        },
        decoration: {
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
        },
        itemList: [
          {
            type: 66,
            style: {
              width: 400,
              height: 320,
            },
            image: {
              img: 'http://cms.hmon.tv/common/static/file/2024/05/31/ce5b63bc-5f2f-4171-871c-b709b9cb822a.png',
              style: {
                width: 400,
                height: 320,
              },
            },
          },
          {
            type: 66,
            style: {
              width: 400,
              height: 320,
            },
            image: {
              img: 'http://cms.hmon.tv/common/static/file/2024/05/31/ce5b63bc-5f2f-4171-871c-b709b9cb822a.png',
              style: {
                width: 400,
                height: 320,
              },
            },
          },
        ],
      }
      dataList.push(poster1)
      const imgSrc =
        'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
      const poster2: QTPoster = {
        type: 5,
        style: {
          width: 400,
          height: 320,
        },
        decoration: {
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
        },
        itemList: [
          {
            type: 55,
            style: {
              width: 400,
              height: 320,
            },
            image: {
              img: imgSrc,
              style: {
                width: 400,
                height: 320,
              },
            },
          },
          {
            type: 55,
            style: {
              width: 400,
              height: 320,
            },
            image: {
              img: imgSrc,
              style: {
                width: 400,
                height: 320,
              },
            },
          },
        ],
      }
      dataList.push(poster1)
      listViewRef.value?.setListData(poster1)
      listViewRefCenter.value?.setListData(poster1)
      cmdListViewRef.value?.setListData(poster2)
    }

    function onPageIndexFunction(e) {
      toast.showToast(
        `----->${e.currentIndex}------->${JSON.stringify(e.currentList.image)}${
          e.currentList.type
        }`
      )
    }

    return {
      listViewRef,
      listViewRefCenter,
      cmdListViewRef,
      listDataRec,
      defaultFocus,
      onESCreate,
      onPageIndexFunction,
    }
  },
})
</script>

<style scoped>
.loop-img-root-css {
  position: absolute;
  background-color: transparent;
}

.loop-img-list-css {
  background-color: transparent;
}

.item-loop-img-css {
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.1);
}

.quick-list-view {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  padding-top: 20px;
  flex-direction: column;
}

.list_view_row {
  position: absolute;
  width: 1920px;
  height: 500px;
  background-color: transparent;
  padding-top: 20px;
  flex-direction: row;
}

.list_view_row .list_view {
  width: 500px;
  height: 400px;
  background-color: transparent;
}
.list-view-text-class {
  left: 30px;
  width: 100px;
  height: 50px;
}
</style>
