import { defineComponent, h, onMounted, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import type { QTX5WebViewEvent } from './x5-webview-types'

const X5webView = defineComponent({
  name: 'QtX5webView',
  emits: [
    'onCanGoBack',
    'onCanGoForward',
    'onCanGoBackOrForward',
    'onPageStarted',
    'onPageFinished',
    'onLoadResource',
    'onReceivedSslError',
    'onReceivedError',
    'shouldOverrideUrlLoading',
    'onJs2Vue',
  ],
  setup(props, context) {
    const viewRef = ref()

    onMounted(() => {
      setJavaScriptEnabled(true)
      setJavaScriptCanOpenWindowsAutomatically(true)
      setAllowFileAccess(true)
      setSupportZoom(true)
      setBuiltInZoomControls(true)
      setUseWideViewPort(true)
      setSupportMultipleWindows(true)
      setAppCacheEnabled(true)
      setDomStorageEnabled(true)
      setGeolocationEnabled(true)
      setPluginState(1)
      setCacheMode(2)
    })

    const loadUrl = (url: string) => {
      Native.callUIFunction(viewRef.value, 'loadUrl', [url], () => {
        //
      })
    }
    const evaluateJavascript = (
      value: string
    ): Promise<string | undefined | null> => {
      return new Promise((resolve) => {
        Native.callUIFunction(
          viewRef.value,
          'evaluateJavascript',
          [value],
          (res: string) => {
            resolve(res)
          }
        )
      })
    }
    const canGoBack = () => {
      Native.callUIFunction(viewRef.value, 'canGoBack', [], (res: boolean) => {
        context.emit('onCanGoBack', res)
      })
    }
    const goBack = () => {
      Native.callUIFunction(viewRef.value, 'goBack', [], () => {
        //
      })
    }
    const canGoForward = () => {
      Native.callUIFunction(
        viewRef.value,
        'canGoForward',
        [],
        (res: boolean) => {
          context.emit('onCanGoForward', res)
        }
      )
    }
    const goForward = () => {
      Native.callUIFunction(viewRef.value, 'goForward', [], () => {
        //
      })
    }
    const canGoBackOrForward = (steps: number) => {
      Native.callUIFunction(
        viewRef.value,
        'canGoBackOrForward',
        [steps],
        (res: boolean) => {
          context.emit('onCanGoBackOrForward', res)
        }
      )
    }
    const goBackOrForward = (steps: number) => {
      Native.callUIFunction(viewRef.value, 'goBackOrForward', [steps], () => {
        //
      })
    }
    const onResume = () => {
      Native.callUIFunction(viewRef.value, 'onResume', [], () => {
        //
      })
    }
    const onPause = () => {
      Native.callUIFunction(viewRef.value, 'onPause', [], () => {
        //
      })
    }
    const pauseTimers = () => {
      Native.callUIFunction(viewRef.value, 'pauseTimers', [], () => {
        //
      })
    }
    const resumeTimers = () => {
      Native.callUIFunction(viewRef.value, 'resumeTimers', [], () => {
        //
      })
    }
    const destroy = () => {
      Native.callUIFunction(viewRef.value, 'destroy', [], () => {
        //
      })
    }
    const setJavaScriptEnabled = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setJavaScriptEnabled',
        [value],
        () => {
          //
        }
      )
    }
    const setPluginState = (value: number) => {
      Native.callUIFunction(viewRef.value, 'setPluginState', [value], () => {
        //
      })
    }
    const setJavaScriptCanOpenWindowsAutomatically = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setJavaScriptCanOpenWindowsAutomatically',
        [value],
        () => {
          //
        }
      )
    }
    const setUseWideViewPort = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setUseWideViewPort',
        [value],
        () => {
          //
        }
      )
    }
    const setLoadWithOverviewMode = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setLoadWithOverviewMode',
        [value],
        () => {
          //
        }
      )
    }
    const setSupportZoom = (value: boolean) => {
      Native.callUIFunction(viewRef.value, 'setSupportZoom', [value], () => {
        //
      })
    }
    const setBuiltInZoomControls = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setBuiltInZoomControls',
        [value],
        () => {
          //
        }
      )
    }
    const setDisplayZoomControls = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setDisplayZoomControls',
        [value],
        () => {
          //
        }
      )
    }
    const setAllowFileAccess = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setAllowFileAccess',
        [value],
        () => {
          //
        }
      )
    }
    const setDomStorageEnabled = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setDomStorageEnabled',
        [value],
        () => {
          //
        }
      )
    }
    const setDatabaseEnabled = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setDatabaseEnabled',
        [value],
        () => {
          //
        }
      )
    }
    const setAppCacheEnabled = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setAppCacheEnabled',
        [value],
        () => {
          //
        }
      )
    }
    const setAppCachePath = (value: boolean) => {
      Native.callUIFunction(viewRef.value, 'setAppCachePath', [value], () => {
        //
      })
    }
    const setMediaPlaybackRequiresUserGesture = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setMediaPlaybackRequiresUserGesture',
        [value],
        () => {
          //
        }
      )
    }
    const setStandardFontFamily = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setStandardFontFamily',
        [value],
        () => {
          //
        }
      )
    }
    const setFixedFontFamily = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setFixedFontFamily',
        [value],
        () => {
          //
        }
      )
    }
    const setSansSerifFontFamily = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setSansSerifFontFamily',
        [value],
        () => {
          //
        }
      )
    }
    const setSerifFontFamily = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setSerifFontFamily',
        [value],
        () => {
          //
        }
      )
    }
    const setCursiveFontFamily = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setCursiveFontFamily',
        [value],
        () => {
          //
        }
      )
    }
    const setFantasyFontFamily = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setFantasyFontFamily',
        [value],
        () => {
          //
        }
      )
    }
    const setTextZoom = (value: number) => {
      Native.callUIFunction(viewRef.value, 'setTextZoom', [value], () => {
        //
      })
    }
    const setMinimumFontSize = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setMinimumFontSize',
        [value],
        () => {
          //
        }
      )
    }
    const setDefaultFontSize = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setDefaultFontSize',
        [value],
        () => {
          //
        }
      )
    }
    const setLayoutAlgorithm = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setLayoutAlgorithm',
        [value],
        () => {
          //
        }
      )
    }
    const setLoadsImagesAutomatically = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setLoadsImagesAutomatically',
        [value],
        () => {
          //
        }
      )
    }
    const setDefaultTextEncodingName = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setDefaultTextEncodingName',
        [value],
        () => {
          //
        }
      )
    }
    const setNeedInitialFocus = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setNeedInitialFocus',
        [value],
        () => {
          //
        }
      )
    }
    const setGeolocationEnabled = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setGeolocationEnabled',
        [value],
        () => {
          //
        }
      )
    }
    const setBlockNetworkLoads = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setBlockNetworkLoads',
        [value],
        () => {
          //
        }
      )
    }
    const setSupportMultipleWindows = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setSupportMultipleWindows',
        [value],
        () => {
          //
        }
      )
    }
    const setAppCacheMaxSize = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setAppCacheMaxSize',
        [value],
        () => {
          //
        }
      )
    }
    const setRenderPriority = (value: number) => {
      Native.callUIFunction(viewRef.value, 'setRenderPriority', [value], () => {
        //
      })
    }
    const setCacheMode = (value: number) => {
      Native.callUIFunction(viewRef.value, 'setCacheMode', [value], () => {
        //
      })
    }
    //-----------------------------------------------
    const setAllowContentAccess = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setAllowContentAccess',
        [value],
        () => {
          //
        }
      )
    }
    const setEnableSmoothTransition = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setEnableSmoothTransition',
        [value],
        () => {
          //
        }
      )
    }
    const setSaveFormData = (value: boolean) => {
      Native.callUIFunction(viewRef.value, 'setSaveFormData', [value], () => {
        //
      })
    }
    const setSavePassword = (value: boolean) => {
      Native.callUIFunction(viewRef.value, 'setSavePassword', [value], () => {
        //
      })
    }
    const setTextSize = (value: number) => {
      Native.callUIFunction(viewRef.value, 'setTextSize', [value], () => {
        //
      })
    }
    const setDefaultZoom = (value: number) => {
      Native.callUIFunction(viewRef.value, 'setDefaultZoom', [value], () => {
        //
      })
    }
    const setLightTouchEnabled = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setLightTouchEnabled',
        [value],
        () => {
          //
        }
      )
    }
    const setMinimumLogicalFontSize = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setMinimumLogicalFontSize',
        [value],
        () => {
          //
        }
      )
    }
    const setDefaultFixedFontSize = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setDefaultFixedFontSize',
        [value],
        () => {
          //
        }
      )
    }
    const setBlockNetworkImage = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setBlockNetworkImage',
        [value],
        () => {
          //
        }
      )
    }
    const setAllowUniversalAccessFromFileURLs = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setAllowUniversalAccessFromFileURLs',
        [value],
        () => {
          //
        }
      )
    }
    const setAllowFileAccessFromFileURLs = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setAllowFileAccessFromFileURLs',
        [value],
        () => {
          //
        }
      )
    }
    const setDatabasePath = (value: string) => {
      Native.callUIFunction(viewRef.value, 'setDatabasePath', [value], () => {
        //
      })
    }
    const setGeolocationDatabasePath = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setGeolocationDatabasePath',
        [value],
        () => {
          //
        }
      )
    }
    const setUserAgentString = (value: string) => {
      Native.callUIFunction(
        viewRef.value,
        'setUserAgentString',
        [value],
        () => {
          //
        }
      )
    }
    const setMixedContentMode = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setMixedContentMode',
        [value],
        () => {
          //
        }
      )
    }
    const setOffscreenPreRaster = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setOffscreenPreRaster',
        [value],
        () => {
          //
        }
      )
    }
    const setSafeBrowsingEnabled = (value: boolean) => {
      Native.callUIFunction(
        viewRef.value,
        'setSafeBrowsingEnabled',
        [value],
        () => {
          //
        }
      )
    }
    const setForceDark = (value: number) => {
      Native.callUIFunction(viewRef.value, 'setForceDark', [value], () => {
        //
      })
    }
    const setDisabledActionModeMenuItems = (value: number) => {
      Native.callUIFunction(
        viewRef.value,
        'setDisabledActionModeMenuItems',
        [value],
        () => {
          //
        }
      )
    }
    const initJavaScriptInterface = () => {
      Native.callUIFunction(
        viewRef.value,
        'initJavaScriptInterface',
        [],
        () => {
          //
        }
      )
    }
    const removeJavaScriptInterface = () => {
      Native.callUIFunction(
        viewRef.value,
        'removeJavaScriptInterface',
        [],
        () => {
          //
        }
      )
    }
    const initWebViewFocus = (delayTime: number, x: number, y: number) => {
      Native.callUIFunction(
        viewRef.value,
        'initWebViewFocus',
        [delayTime, x, y],
        () => {
          //
        }
      )
    }

    const render = () => {
      return h('ESWebViewComponent', {
        onPageStarted: (evt: QTX5WebViewEvent) => {
          const url = evt.url
          context.emit('onPageStarted', url)
        },
        onPageFinished: (evt: QTX5WebViewEvent) => {
          const url = evt.url
          context.emit('onPageFinished', url)
        },
        onLoadResource: (evt: QTX5WebViewEvent) => {
          const url = evt.url
          context.emit('onLoadResource', url)
        },
        onReceivedSslError: (evt: QTX5WebViewEvent) => {
          context.emit('onReceivedSslError', evt)
        },
        onReceivedError: (evt: QTX5WebViewEvent) => {
          const errorCode = evt.errorCode
          const description = evt.description
          const failingUrl = evt.failingUrl
          context.emit('onReceivedError', errorCode, description, failingUrl)
        },
        onShouldOverrideUrlLoading: (evt: QTX5WebViewEvent) => {
          const url = evt.url
          context.emit('shouldOverrideUrlLoading', url)
        },
        onJs2Vue: (evt: QTX5WebViewEvent) => {
          const value = evt.js2VueValue
          context.emit('onJs2Vue', value)
        },
        ref: viewRef,
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      loadUrl,
      evaluateJavascript,
      canGoBack,
      goBack,
      canGoForward,
      goForward,
      canGoBackOrForward,
      goBackOrForward,
      onResume,
      onPause,
      pauseTimers,
      resumeTimers,
      destroy,
      setJavaScriptEnabled,
      setPluginState,
      setJavaScriptCanOpenWindowsAutomatically,
      setUseWideViewPort,
      setLoadWithOverviewMode,
      setSupportZoom,
      setBuiltInZoomControls,
      setDisplayZoomControls,
      setAllowFileAccess,
      setDomStorageEnabled,
      setDatabaseEnabled,
      setAppCacheEnabled,
      setAppCachePath,
      setMediaPlaybackRequiresUserGesture,
      setStandardFontFamily,
      setFixedFontFamily,
      setSansSerifFontFamily,
      setSerifFontFamily,
      setCursiveFontFamily,
      setFantasyFontFamily,
      setTextZoom,
      setMinimumFontSize,
      setDefaultFontSize,
      setLayoutAlgorithm,
      setLoadsImagesAutomatically,
      setDefaultTextEncodingName,
      setNeedInitialFocus,
      setGeolocationEnabled,
      setBlockNetworkLoads,
      setSupportMultipleWindows,
      setAppCacheMaxSize,
      setRenderPriority,
      setCacheMode,
      setAllowContentAccess,
      setEnableSmoothTransition,
      setSaveFormData,
      setSavePassword,
      setTextSize,
      setDefaultZoom,
      setLightTouchEnabled,
      setMinimumLogicalFontSize,
      setDefaultFixedFontSize,
      setBlockNetworkImage,
      setAllowUniversalAccessFromFileURLs,
      setAllowFileAccessFromFileURLs,
      setDatabasePath,
      setGeolocationDatabasePath,
      setUserAgentString,
      setMixedContentMode,
      setOffscreenPreRaster,
      setSafeBrowsingEnabled,
      setForceDark,
      setDisabledActionModeMenuItems,
      initJavaScriptInterface,
      removeJavaScriptInterface,
      initWebViewFocus,
      render,
    }
  },
  render() {
    return this.render()
  },
})

export default X5webView
