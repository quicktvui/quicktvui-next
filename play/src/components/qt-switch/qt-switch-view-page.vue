<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" style="width: 1920px;height: 900px;" :clipChildren="false">
      <qt-button text="按钮" />
      <text-view
        text="默认属性"
        :fontSize="30"
        class="qt-text-css"
      />
      <div class="switch-box-css">
        <qt-switch class="qt-switch-class" size="large" />
      </div>

      <text-view
        text="背景色（打开）：#F85B14；背景色（关闭）：#292929；边框颜色：#959595；边框宽度：2；摇杆颜色：#00FF00"
        :fontSize="30"
        class="qt-text-css"
      />
      <div class="switch-box-css">
        <qt-switch
          ref="switch2Ref"
          class="qt-switch-class"
          :modelValue="true"
          activeColor="#F85B14"
          inactiveColor="#292929"
          sliderColor="#00FF00"
          inactiveBorderColor="#959595"
          @onSwitchChange="onSwitchChange"
          :borderSize=3
        />
      </div>

      <text-view
        text="禁用状态（打开）;disabled：禁用"
        :fontSize="30"
        class="qt-text-css"
      />
      <div class="switch-box-css">
        <qt-switch
          ref="switch3Ref"
          class="qt-switch-class"
          :disabled="true"
          :focusable="true"
          :modelValue="true"
          sliderColor="#FFFFFF"
          :borderSize=3
        />
      </div>

      <text-view
        text="禁用状态背景色（打开）：#7C2FBF；disabled：禁用    禁用和非禁用颜色对比"
        :fontSize="30"
        class="qt-text-css"
      />
      <div class="switch-box-css">
        <qt-switch
          ref="switch3Ref"
          class="qt-switch-class"
          activeColor="#7C2FBF"
          :disabled="true"
          :modelValue="true"
          sliderColor="#FFFFFF"
          :borderSize=3
        />

        <qt-switch
          class="qt-switch-class"
          activeColor="#7C2FBF"
          :modelValue="true"
          sliderColor="#FFFFFF"
          :borderSize=3
        />
      </div>

      <text-view
        text="禁用状态背景色（关闭）：#A1A1A1；disabled：禁用"
        :fontSize="30"
        class="qt-text-css"
      />
      <div class="switch-box-css">
        <qt-switch
          ref="switch4Ref"
          class="qt-switch-class"
          :disabled="true"
          :focusable="true"
          :modelValue="false"
          inactiveColor="#A1A1A1"
          inactiveBorderColor="#A1A1A1"
          sliderColor="#FFFFFF"
          disabledInactiveBgColor="#797979"
          :borderSize=3
        />
      </div>
      <div class="switch-content-row-css">
        <div class="switch-content-column-css">
          <text-view
            text="滑杆按钮设置assets本地图片"
            :fontSize="30"
            class="qt-text-800-css"
          />
          <div class="switch-box-800-css">
            <qt-switch
              ref="switch5Ref"
              class="qt-switch-class"
              :modelValue="true"
              :sliderAssetsIcon="startEmpty"
              activeColor="#51168A"
              :borderSize=3
            />
          </div>
        </div>
        <div class="switch-content-column-css">
          <text-view
            text="滑杆按钮设置网络图片"
            :fontSize="30"
            class="qt-text-800-css"
          />
          <div class="switch-box-800-css">
            <qt-switch
              ref="switch5Ref"
              class="qt-switch-class"
              :modelValue="true"
              :sliderNetworkIcon="'https://gips2.baidu.com/it/u=3071740117,2311836862&fm=3039&app=3039&f=JPEG?w=1024&h=1024'"
              activeColor="#6250F5"
              :borderSize=3
            />
          </div>
        </div>
      </div>
      <qt-button text="按钮" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog, useESToast } from '@extscreen/es3-core'

import { ref } from 'vue'
import { QTISwitch } from 'quicktvui'
import startEmpty from '../../assets/star.png'

const TAG = 'switch'

export default defineComponent({
  name: 'switch组件',
  setup: function() {
    const log = useESLog()
    const toast = useESToast()
    const switch2Ref = ref<QTISwitch>()
    const switch3Ref = ref<QTISwitch>()
    const switch4Ref = ref<QTISwitch>()

    const onESCreate = (params) => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onESCreate---------->>>>>')
      }

      switch3Ref.value.setDisabled(true)
      switch4Ref.value.setDisabled(true)
    }

    const onESResume = () => {
      log.e(TAG, '-------onESResume---------->>>>>')
    }


    const onESPause = () => {
      log.e(TAG, '-------onESPause---------->>>>>')
    }
    const onESDestroy = () => {
      log.e(TAG, '-------onESDestroy---------->>>>>')
    }

    const onSwitchChange = (event: any) => {
      console.log(event.nativeParams)
      toast.showToast(event.nativeParams)
    }

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      switch2Ref,
      switch3Ref,
      switch4Ref,
      onSwitchChange,
      startEmpty
    }
  }
})
</script>

<style>

.switch-box-css {
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.switch-content-row-css {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  background-color: transparent;
}

.switch-content-column-css {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: transparent;
}

.switch-box-800-css {
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.qt-text-800-css {
  width: 800px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
}

.qt-switch-class {
  width: 100px;
  height: 66px;
}

.qt-text-css {
  width: 1920px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
}

</style>
