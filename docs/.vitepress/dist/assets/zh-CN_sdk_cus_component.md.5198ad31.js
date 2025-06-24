import{o as s,c as a,a as t}from"./app.417ed19d.js";const l='{"title":"Component\u662F\u4EC0\u4E48\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Component\u662F\u4EC0\u4E48\uFF1F","slug":"component\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F","slug":"\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F"},{"level":3,"title":"Android\u7AEF\u4EE3\u7801:","slug":"android\u7AEF\u4EE3\u7801"},{"level":2,"title":"\u6CE8\u518C","slug":"\u6CE8\u518C"},{"level":3,"title":"1. SDK\u6CE8\u518C\u65B9\u5F0F","slug":"_1-sdk\u6CE8\u518C\u65B9\u5F0F"},{"level":3,"title":"2. Vue\u6CE8\u518C\u65B9\u5F0F","slug":"_2-vue\u6CE8\u518C\u65B9\u5F0F"},{"level":2,"title":"Vue\u8C03\u7528","slug":"vue\u8C03\u7528"}],"relativePath":"zh-CN/sdk/cus_component.md","lastUpdated":1750328994000}',e={},i=Object.assign(e,{__name:"cus_component",setup(o){return(p,n)=>(s(),a("div",null,n[0]||(n[0]=[t(`<h2 id="component\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">Component\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor vp-link" href="#component\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>Component\u662F\u4E3Asdk\u63D0\u4F9B\u6269\u5C55\u663E\u793A\u7EC4\u4EF6\u7684\u6A21\u5757\uFF0C\u4F8B\u5982\u64AD\u653E\u5668\u7B49\u3002 \u5982\u679CSDK\u9ED8\u8BA4\u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u65B9\u5F0F\u5B9E\u73B0\u81EA\u5DF1\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u81EA\u5DF1\u7684UI\u7EC4\u4EF6\u3002</p><h2 id="\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F" tabindex="-1">\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F <a class="header-anchor vp-link" href="#\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F" aria-hidden="true">#</a></h2><p>\u81EA\u5B9A\u4E49\u529F\u80FD\u9700\u8981\u6CE8\u610F\u4E00\u4E0B\u51E0\u70B9\uFF1A</p><ul><li>Component\u5B9E\u73B0IEsComponent\u63A5\u53E3</li><li>View\u5B9E\u73B0IEsComponentView\u63A5\u53E3</li><li>\u65B9\u6CD5\u5FC5\u987B\u662Fpublic\u65B9\u6CD5\uFF0C\u4E14\u540C\u4E00\u4E2AComponent\u4E2D\u4E0D\u5141\u8BB8\u540C\u540D\u65B9\u6CD5</li><li>\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5FC5\u987B\u662F\u81EA\u5B9A\u4E49\u7684View\u672C\u8EAB</li><li>\u5C5E\u6027\u65B9\u6CD5\u5FC5\u987B\u4F7F\u7528EsComponentAttribute\u7684\u6CE8\u89E3</li><li>\u6CE8\u89E3\u53EF\u8BBE\u7F6Eindex\u6765\u51B3\u5B9A\u5C5E\u6027\u8BBE\u7F6E\u7684\u4F18\u5148\u7EA7\uFF0C\u503C\u8D8A\u5C0F\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u53D6\u503C\u8303\u56F40~100\uFF0C\u9ED8\u8BA4\u503C100</li><li>\u53C2\u6570\u652F\u6301\u7C7B\u578B\uFF1A</li><li>\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A<code>int</code>, <code>String</code>, <code>boolean</code></li><li>\u6570\u7EC4\u7C7B\u578B\uFF1A<code>EsMap</code>, <code>EsArray</code></li><li>\u56DE\u8C03\u7C7B\u578B\uFF1A<code>EsPromise</code></li></ul><h3 id="android\u7AEF\u4EE3\u7801" tabindex="-1">Android\u7AEF\u4EE3\u7801: <a class="header-anchor vp-link" href="#android\u7AEF\u4EE3\u7801" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>\u70B9\u51FB\u67E5\u770B\u6E90\u7801</summary><div class="language-java"><pre><code><span class="token comment">// \u521B\u5EFAView // \u5B9E\u73B0IEsComponentView\u63A5\u53E3</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">VideoPlayerView</span> <span class="token keyword">extends</span> <span class="token class-name">FrameLayout</span> <span class="token keyword">implements</span> <span class="token class-name">IEsComponentView</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">VideoPlayerView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5C06View\u4E0EComponent\u5173\u8054 \u5B9E\u73B0IEsComponent\u63A5\u53E3</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyVideoComponent</span> <span class="token keyword">implements</span> <span class="token class-name">IEsComponent</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">VideoComponent<span class="token punctuation">.</span>VideoPlayerView</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">VideoPlayerView</span> <span class="token function">createView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VideoPlayerView</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5BF9\u5E94vue\u6807\u7B7E\u7684\u5C5E\u6027 &lt;video-player ref=&quot;video&quot; :autoPlay=false /&gt;</span>
    <span class="token annotation punctuation">@EsComponentAttribute</span><span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// \u5982\u679C\u5404\u5C5E\u6027\u4E4B\u95F4\u5B58\u5728\u987A\u5E8F\u6267\u884C\u95EE\u9898\uFF0C\u53EF\u6307\u5B9A\u5C5E\u6027\u8C03\u7528\u987A\u5E8F</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">autoPlay</span><span class="token punctuation">(</span><span class="token class-name">VideoPlayerView</span> view<span class="token punctuation">,</span> <span class="token keyword">boolean</span> auto<span class="token punctuation">)</span><span class="token punctuation">{</span>
        view<span class="token punctuation">.</span><span class="token function">autoPlay</span><span class="token punctuation">(</span>auto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5BF9\u5E94vue\u6807\u7B7E\u7684\u5C5E\u6027  &lt;video-player ref=&quot;video&quot; :src=videoUrl /&gt;</span>
    <span class="token annotation punctuation">@EsComponentAttribute</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token class-name">VideoPlayerView</span> view<span class="token punctuation">,</span> <span class="token class-name">String</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        view<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5BF9\u5E94vue\u6807\u7B7E\u7684\u65B9\u6CD5 this.$refs.video.pause()</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dispatchFunction</span><span class="token punctuation">(</span><span class="token class-name">VideoPlayerView</span> view<span class="token punctuation">,</span> <span class="token class-name">String</span> eventName<span class="token punctuation">,</span> <span class="token class-name">EsArray</span> params<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">EsPromise</span> promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;play&quot;</span><span class="token operator">:</span>
                <span class="token class-name">String</span> url <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;pause&quot;</span><span class="token operator">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;getPosition&quot;</span><span class="token operator">:</span> <span class="token comment">// \u83B7\u53D6\u64AD\u653E\u8FDB\u5EA6</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>promise <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span><span class="token function">getCurrentPlayPositioin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5BF9\u5E94vue\u6807\u7B7E\u7684\u56DE\u8C03  &lt;video-player @player-status-changed=&quot;onPlayerStatusChanged&quot; /&gt;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerStatusChanged</span><span class="token punctuation">(</span><span class="token keyword">int</span> playerStatus<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">RemoteException</span> <span class="token punctuation">{</span>
         <span class="token class-name">EsMap</span> esMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         esMap<span class="token punctuation">.</span><span class="token function">pushInt</span><span class="token punctuation">(</span><span class="token string">&quot;playerStatus&quot;</span><span class="token punctuation">,</span> playerStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//sendUIEvent\u65B9\u6CD5\uFF1A\u5411UI\u63A7\u4EF6\u53D1\u9001\u4E8B\u4EF6</span>
         <span class="token class-name">EsProxy</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendUIEvent</span><span class="token punctuation">(</span>view<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;onPlayerStatusChanged&quot;</span><span class="token punctuation">,</span> esMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token class-name">VideoView</span> view<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h2 id="\u6CE8\u518C" tabindex="-1">\u6CE8\u518C <a class="header-anchor vp-link" href="#\u6CE8\u518C" aria-hidden="true">#</a></h2><h3 id="_1-sdk\u6CE8\u518C\u65B9\u5F0F" tabindex="-1">1. SDK\u6CE8\u518C\u65B9\u5F0F <a class="header-anchor vp-link" href="#_1-sdk\u6CE8\u518C\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-java"><pre><code><span class="token class-name">InitConfig</span> initConfig <span class="token operator">=</span> <span class="token class-name">InitConfig</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
initConfig<span class="token punctuation">.</span><span class="token function">setAppId</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CE8\u518C\u7684APPID&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">setSdkInitCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EsKitInitCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u4F7F\u7528EsKitInitCallback\u76D1\u542C \u6CE8\u518C\u4F60\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u6A21\u5757</span>
       <span class="token annotation punctuation">@Override</span>
       <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEsKitInitSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token comment">// \u6CE8\u518C\u5230SDK</span>
           <span class="token class-name">EsManager</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span><span class="token class-name">MyVideoComponent</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-vue\u6CE8\u518C\u65B9\u5F0F" tabindex="-1">2. Vue\u6CE8\u518C\u65B9\u5F0F <a class="header-anchor vp-link" href="#_2-vue\u6CE8\u518C\u65B9\u5F0F" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>vue3\u6CE8\u518C\u65B9\u5F0F</summary><div class="language-text"><pre><code>//vue3\u6CE8\u518C\u65B9\u5F0F

/**
 * \u64AD\u653E\u5668view
 */
function registerMyVideoPlayerViewComponent(app: ESApp) {

  const videoViewComponent = {
    component: {
      name: &#39;MyVideoComponent&#39;,
      processEventData(evtData, nativeEventParams: {
        position: number
      }) {
        const {handler: event, __evt: nativeEventName} = evtData;
        switch (nativeEventName) {
          //------------------\u64AD\u653E\u8FDB\u5EA6\u56DE\u8C03-----------------------
          case &#39;onPlayerPositionChanged&#39;:
            event.position = nativeEventParams.position;
            break;
          default:
        }
        return event;
      },
    },
  }
  registerElement(&#39;MyVideoComponent&#39;, videoViewComponent);

  //
  const VideoViewImpl = defineComponent({
    emits: [
      &#39;player-position-changed&#39;,
      //\u9700\u8981\u81EA\u5DF1\u6DFB\u52A0 \u540D\u5B57\u81EA\u62DF
    ],
    setup(props, context) {
      const videoPlayerViewComponentRef = ref()

      const start = (progress: number): void =&gt; {
        console.log(&#39;-------ESVideoPlayerViewComponent--------start--------&gt;&gt;&gt;&gt;&#39;)
        Native.callUIFunction(videoPlayerViewComponentRef.value, &#39;start&#39;, [progress], (res) =&gt; {
          //console.log(&#39;res--------&gt;&gt;&gt;&gt;&#39; , res)
        });
      }
      const seekTo = (progress: number): void =&gt; {
        Native.callUIFunction(videoPlayerViewComponentRef.value, &#39;seekTo&#39;, [progress], (res) =&gt; {
          //console.log(&#39;res--------&gt;&gt;&gt;&gt;&#39; , res)
        });
      }
      const pause = (): void =&gt; {
        console.log(&#39;-------ESVideoPlayerViewComponent--------pause--------&gt;&gt;&gt;&gt;&#39;)
        Native.callUIFunction(videoPlayerViewComponentRef.value, &#39;pause&#39;, (res) =&gt; {
          //console.log(&#39;res--------&gt;&gt;&gt;&gt;&#39; , res)
        });
      }
      const getCurrentPosition = (): void =&gt; {
        Native.callUIFunction(videoPlayerViewComponentRef.value, &#39;getCurrentPosition&#39;,
          (res) =&gt; {
            //console.log(&#39;res--------&gt;&gt;&gt;&gt;&#39; , res)
          });
      }
      const getDuration = (): void =&gt; {
        Native.callUIFunction(videoPlayerViewComponentRef.value, &#39;getDuration&#39;,
          (res) =&gt; {
            //console.log(&#39;res--------&gt;&gt;&gt;&gt;&#39; , res)
          });
      }

      return () =&gt; {
        return h(
          &#39;MyVideoComponent&#39;, {
            ref: videoPlayerViewComponentRef,
            onPlayerPositionChanged: (evt) =&gt; {
              context.emit(&#39;player-status-changed&#39;, evt.position);
            },
          },
        )
      }
    },
  })
  app.component(&#39;VideoPlayer&#39;, VideoViewImpl);
}

</code></pre></div></details><details class="details custom-block"><summary>Vue2\u6CE8\u518C\u65B9\u5F0F</summary><div class="language-text"><pre><code>  //vu2\u6CE8\u518C\u65B9\u5F0F
function ESAndroidPlayerViewComponent() {
  Vue.registerElement(&#39;MyVideoComponent&#39;, {
    component: {
        name: &#39;MyVideoComponent&#39;,
    }
  }),
  Vue.component(&#39;VideoPlayer&#39;, {
    methods: {
        pause(){
            Vue.Native.callUIFunction(this.$refs.player, &#39;pause&#39;, [], (res) =&gt; {
              console.log(&#39;res&#39;, res)
            });
        },
        seekTo(position){
            Vue.Native.callUIFunction(this.$refs.player, &#39;seekTo&#39;, [position], (res) =&gt; {
                console.log(&#39;res&#39;, res)
            });
        },
        getCurrentPositoin(callback){
            Vue.Native.callUIFunction(this.$refs.player, &#39;getCurrentPosition&#39;, [],
          (res) =&gt; {
            callback(res)
          });
        },
    }
  })
}

</code></pre></div></details><h2 id="vue\u8C03\u7528" tabindex="-1">Vue\u8C03\u7528 <a class="header-anchor vp-link" href="#vue\u8C03\u7528" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>\u70B9\u51FB\u67E5\u770B\u6E90\u7801</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video-player</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:autoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>videoUrl<span class="token punctuation">&#39;</span></span>
  <span class="token attr-name">@player-status-changed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>onPlayerStatusChanged<span class="token punctuation">&#39;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-text"><pre><code>function onPlayerStatusChanged(e) {
   const playerStatus = e.playerStatus;
   console.log(\`\u63A5\u6536\u5230\u7684\u64AD\u653E\u72B6\u6001:\${  playerStatus}\`);
}

this.$refs.video.seekTo(1000)
this.$refs.video.pause()
</code></pre></div></details>`,15)])))}});export{l as __pageData,i as default};
