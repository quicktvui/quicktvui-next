import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { lottieProps } from './lottie-props'
import type {
  QTLottieAsyncUpdates,
  QTLottieEvent,
  QTLottieRenderMode,
  QTLottieRepeatMode,
} from './lottie-types'

const Lottie = defineComponent({
  name: 'QtLottie',
  props: lottieProps,
  emits: [
    'onAnimationEnd',
    'onAnimationCancel',
    'onAnimationStart',
    'onAnimationRepeat',
    'onAnimationPause',
    'onAnimationResume',
    'onAnimationUpdate',
  ],
  setup(props, context) {
    const viewRef = ref()

    const loadRaw = (res: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_rawRes', [res])
    }
    const loadFile = (fileName: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_localRes', [fileName])
    }
    const loadUrl = (url: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_url', [url])
    }
    const loadCacheUrl = (url: string, cacheKey: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_cache_url', [url, cacheKey])
    }
    const setFallbackResource = (res: number) => {
      Native.callUIFunction(viewRef.value, 'lottie_fallbackRes', [res])
    }
    const setAutoPlay = (auto: boolean) => {
      Native.callUIFunction(viewRef.value, 'lottie_autoPlay', [auto])
    }
    const setLottieLoop = (loop: boolean) => {
      Native.callUIFunction(viewRef.value, 'lottie_loop', [loop])
    }
    const setRepeatMode = (mode: QTLottieRepeatMode) => {
      Native.callUIFunction(viewRef.value, 'lottie_repeatMode', [mode])
    }
    const setRepeatCount = (repeatCount: number) => {
      Native.callUIFunction(viewRef.value, 'lottie_repeatCount', [repeatCount])
    }
    const setSpeed = (speed: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_speed', [speed])
    }
    const setClipToCompositionBounds = (clipToCompositionBounds: boolean) => {
      Native.callUIFunction(viewRef.value, 'lottie_clipToCompositionBounds', [
        clipToCompositionBounds,
      ])
    }
    const setDefaultFontFileExtension = (extension: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_defaultFontFileExtension', [
        extension,
      ])
    }
    const setImageAssetsFolder = (imageAssetsFolder: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_imageAssetsFolder', [
        imageAssetsFolder,
      ])
    }
    const setProgress = (progress: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_progress', [progress])
    }
    const enableMergePathsForKitKatAndAbove = (enable: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'lottie_enableMergePathsForKitKatAndAbove',
        [enable]
      )
    }
    const setColorFilter = (colorRes: string) => {
      Native.callUIFunction(viewRef.value, 'lottie_colorFilter', [colorRes])
    }
    const setRenderMode = (renderModeOrdinal: QTLottieRenderMode) => {
      Native.callUIFunction(viewRef.value, 'lottie_renderMode', [
        renderModeOrdinal,
      ])
    }
    const setAsyncUpdate = (asyncUpdatesOrdinal: QTLottieAsyncUpdates) => {
      Native.callUIFunction(viewRef.value, 'lottie_asyncUpdates', [
        asyncUpdatesOrdinal,
      ])
    }
    const setIgnoreDisabledSystemAnimations = (ignore: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'lottie_ignoreDisabledSystemAnimations',
        [ignore]
      )
    }
    const setUseCompositionFrameRate = (useCompositionFrameRate: boolean) => {
      Native.callUIFunction(viewRef.value, 'lottie_useCompositionFrameRate', [
        useCompositionFrameRate,
      ])
    }
    const playAnimation = () => {
      Native.callUIFunction(viewRef.value, 'playAnimation', [])
    }
    const resumeAnimation = () => {
      Native.callUIFunction(viewRef.value, 'resumeAnimation', [])
    }
    const pauseAnimation = () => {
      Native.callUIFunction(viewRef.value, 'pauseAnimation', [])
    }
    const cancelAnimation = () => {
      Native.callUIFunction(viewRef.value, 'cancelAnimation', [])
    }
    const cacheComposition = (cache: boolean) => {
      Native.callUIFunction(viewRef.value, 'cacheComposition', [cache])
    }
    const removeAllListener = () => {
      Native.callUIFunction(viewRef.value, 'removeAllListener', [])
    }

    const render = () => {
      const children = context.slots.default && context.slots.default()

      const lottieProps = {
        ref: viewRef,
        onAnimationEvent: (evt: QTLottieEvent) => {
          const value = evt.value ?? ''
          switch (evt.eventName) {
            case 'onAnimationStart':
              context.emit('onAnimationStart')
              break
            case 'onAnimationEnd':
              context.emit('onAnimationEnd')
              break
            case 'onAnimationCancel':
              context.emit('onAnimationCancel')
              break
            case 'onAnimationRepeat':
              context.emit('onAnimationRepeat')
              break
            case 'onAnimationUpdate':
              context.emit('onAnimationUpdate', value)
              break
            case 'onAnimationPause':
              context.emit('onAnimationPause')
              break
            case 'onAnimationResume':
              context.emit('onAnimationResume')
              break
          }
        },
      }

      if (props.rawResource != undefined) {
        Object.assign(lottieProps, {
          lottie_rawRes: props.rawResource,
        })
      }
      if (props.fileName != undefined) {
        Object.assign(lottieProps, {
          lottie_fileName: props.fileName,
        })
      }
      if (props.localResource != undefined) {
        Object.assign(lottieProps, {
          lottie_localRes: props.localResource,
        })
      }
      if (props.url != undefined) {
        Object.assign(lottieProps, {
          lottie_url: props.url,
        })
      }
      if (props.fallbackResource != undefined) {
        Object.assign(lottieProps, {
          lottie_fallbackRes: props.fallbackResource,
        })
      }
      if (props.autoPlay != undefined) {
        Object.assign(lottieProps, {
          lottie_autoPlay: props.autoPlay,
        })
      }
      if (props.loop != undefined) {
        Object.assign(lottieProps, {
          lottie_loop: props.loop,
        })
      }
      if (props.repeatMode != undefined) {
        Object.assign(lottieProps, {
          lottie_repeatMode: props.repeatMode,
        })
      }
      if (props.repeatCount != undefined) {
        Object.assign(lottieProps, {
          lottie_repeatCount: props.repeatCount,
        })
      }
      if (props.speed != undefined) {
        Object.assign(lottieProps, {
          lottie_speed: props.speed,
        })
      }
      if (props.clipToCompositionBounds != undefined) {
        Object.assign(lottieProps, {
          lottie_clipToCompositionBounds: props.clipToCompositionBounds,
        })
      }
      if (props.defaultFontFileExtension != undefined) {
        Object.assign(lottieProps, {
          lottie_defaultFontFileExtension: props.defaultFontFileExtension,
        })
      }
      if (props.imageAssetsFolder != undefined) {
        Object.assign(lottieProps, {
          lottie_imageAssetsFolder: props.imageAssetsFolder,
        })
      }
      if (props.progress != undefined) {
        Object.assign(lottieProps, {
          lottie_progress: props.progress,
        })
      }
      if (props.enableMergePathsForKitKatAndAbove != undefined) {
        Object.assign(lottieProps, {
          lottie_enableMergePathsForKitKatAndAbove:
            props.enableMergePathsForKitKatAndAbove,
        })
      }
      if (props.colorFilter != undefined) {
        Object.assign(lottieProps, {
          lottie_colorFilter: props.colorFilter,
        })
      }
      if (props.renderMode != undefined) {
        Object.assign(lottieProps, {
          lottie_renderMode: props.renderMode,
        })
      }
      if (props.asyncUpdates != undefined) {
        Object.assign(lottieProps, {
          lottie_asyncUpdates: props.asyncUpdates,
        })
      }
      if (props.ignoreDisabledSystemAnimations != undefined) {
        Object.assign(lottieProps, {
          lottie_ignoreDisabledSystemAnimations:
            props.ignoreDisabledSystemAnimations,
        })
      }
      if (props.useCompositionFrameRate != undefined) {
        Object.assign(lottieProps, {
          lottie_useCompositionFrameRate: props.useCompositionFrameRate,
        })
      }
      if (props.cacheComposition != undefined) {
        Object.assign(lottieProps, {
          cacheComposition: props.cacheComposition,
        })
      }
      if (props.animationListenerState != undefined) {
        Object.assign(lottieProps, {
          animationListenerState: props.animationListenerState,
        })
      }
      if (props.animationUpdateState != undefined) {
        Object.assign(lottieProps, {
          animationUpdateState: props.animationUpdateState,
        })
      }

      return h('ESLottieViewComponent', lottieProps, children)
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      loadRaw,
      loadFile,
      loadUrl,
      loadCacheUrl,
      setFallbackResource,
      setAutoPlay,
      setLottieLoop,
      setRepeatMode,
      setRepeatCount,
      setSpeed,
      setClipToCompositionBounds,
      setDefaultFontFileExtension,
      setImageAssetsFolder,
      setProgress,
      enableMergePathsForKitKatAndAbove,
      setColorFilter,
      setRenderMode,
      setAsyncUpdate,
      playAnimation,
      setIgnoreDisabledSystemAnimations,
      setUseCompositionFrameRate,
      resumeAnimation,
      pauseAnimation,
      cancelAnimation,
      cacheComposition,
      removeAllListener,
    }
  },
  render() {
    return this.render()
  },
})

export default Lottie
