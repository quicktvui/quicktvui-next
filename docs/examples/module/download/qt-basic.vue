<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-view text="下载状态:" />
        <s-text-view :text="downloadStatus" />
        <s-text-view text="|" />
        <s-text-view text="文件总长度:" />
        <s-text-view :text="totalSizeRef + ''" />
        <s-text-view text="|" />
        <s-text-view text="下载文件长度:" />
        <s-text-view :text="downloadSizeRef + ''" />
      </div>
      <div class="es-sdk-content-column-css">
        <div class="es-sdk-content-row-css">
          <s-text-button
            text="初始化下载"
            @onButtonClicked="initDownloadModule"
          />
          <s-text-button text="下载" @onButtonClicked="downloadFile" />
          <s-text-button text="开始" @onButtonClicked="startDownload" />
          <s-text-button text="停止" @onButtonClicked="stopDownload" />
          <s-text-button text="取消" @onButtonClicked="cancelDownload" />
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <div class="es-sdk-content-row-css">
          <s-text-button
            text="初始化自定义路径"
            @onButtonClicked="initDownloadPath"
          />
          <s-text-button text="下载" @onButtonClicked="downloadFile2" />
          <s-text-button text="开始" @onButtonClicked="startDownload2" />
          <s-text-button text="停止" @onButtonClicked="stopDownload2" />
          <s-text-button text="取消" @onButtonClicked="cancelDownload2" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import type { ESDownloadInfo, ESDownloadListener } from '@extscreen/es3-core'

export default defineComponent({
  name: '下载模块',
  setup() {
    const downloadStatus = ref('')
    const totalSizeRef = ref(0)
    const downloadSizeRef = ref(0)

    const listener: ESDownloadListener = {
      onDownloadInit(download: ESDownloadInfo) {
        downloadStatus.value = `下载初始化${JSON.stringify(download)}`
      },

      onDownloadStart(download: ESDownloadInfo) {
        downloadStatus.value = `下载开始${JSON.stringify(download)}`
      },

      onDownloadStop(download: ESDownloadInfo) {
        downloadStatus.value = `下载停止${JSON.stringify(download)}`
      },

      onDownloadCancel(download: ESDownloadInfo) {
        downloadStatus.value = `下载取消${JSON.stringify(download)}`
      },

      onDownloadSuccess(download: ESDownloadInfo) {
        downloadStatus.value = `下载成功${JSON.stringify(download)}`
      },

      onDownloadError(download: ESDownloadInfo) {
        downloadStatus.value = `下载失败${JSON.stringify(download)}`
      },

      onDownloadProgress(
        download: ESDownloadInfo,
        downloadSize: number,
        totalSize: number
      ) {
        downloadStatus.value = '正在下载'
        totalSizeRef.value = totalSize
        downloadSizeRef.value = downloadSize
      },
    }

    const d2: ESDownloadInfo = {
      id: 2,
      fileUrl:
        'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/07/a2d3da6d-469e-4f99-a2d0-c001741003f8.mp4',
      fileMD5: '8d7b49d28365bad9728ba0490b0d5014',
      fileName: 'bbbbbb.mp4',
    }

    function onESCreate() {
      qt.download.addListener(d2, listener)
    }

    function onESDestroy() {
      qt.download.removeListener(listener)
    }

    function initDownloadModule() {
      qt.download.initDownload()
    }

    function downloadFile() {
      qt.download.download(d2)
    }

    function startDownload() {
      qt.download.start(d2)
    }

    function stopDownload() {
      qt.download.stop(d2)
    }

    function cancelDownload() {
      qt.download.cancel(d2)
    }

    //-------------------------------------------------
    function initDownloadPath() {
      qt.download.initDownloadPath('/video', 1000)
    }

    function downloadFile2() {
      qt.download.download(d2)
    }

    function startDownload2() {
      qt.download.start(d2)
    }

    function stopDownload2() {
      qt.download.stop(d2)
    }

    function cancelDownload2() {
      qt.download.cancel(d2)
    }

    return {
      downloadStatus,
      totalSizeRef,
      downloadSizeRef,
      initDownloadModule,
      downloadFile,
      startDownload,
      stopDownload,
      cancelDownload,
      initDownloadPath,
      downloadFile2,
      startDownload2,
      stopDownload2,
      cancelDownload2,
      onESCreate,
      onESDestroy,
    }
  },
})
</script>
<style></style>
