import{o as s,c as a,a as t}from"./app.4e94bd7f.js";const u='{"title":"\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F","slug":"\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F"}],"relativePath":"zh-CN/sdk/cus_splash.md","lastUpdated":1746602666000}',p={},l=Object.assign(p,{__name:"cus_splash",setup(o){return(e,n)=>(s(),a("div",null,n[0]||(n[0]=[t(`<h2 id="\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F" tabindex="-1">\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F <a class="header-anchor vp-link" href="#\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F" aria-hidden="true">#</a></h2><p>\u5FEB\u5E94\u7528sdk\u652F\u6301\u81EA\u5B9A\u4E49\u542F\u52A8\u9875\u9762\uFF0C\u9700\u8981\u4E00\u4E0B\u51E0\u4E2A\u6539\u52A8\u3002</p><ul><li>1.\u81EA\u5B9A\u4E49view \u5B9E\u73B0IEsCoverView\u63A5\u53E3</li><li>2.\u521B\u5EFAxml \u4F7F\u7528\u4F60\u81EA\u5B9A\u4E49\u7684view</li><li>3.\u5728\u542F\u52A8\u5FEB\u5E94\u7528\u7684\u65F6\u5019\u901A\u8FC7EsData().setCoverLayoutId(resId) \u8BBE\u7F6E\u8FDB\u53BB</li></ul><div class="language-java"><pre><code>
<span class="token comment">//\u81EA\u5B9A\u4E49\u542F\u52A8\u56FEView \u9700\u8981\u5B9E\u73B0 IEsCoverView \u63A5\u53E3</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyCustomCoverView</span> <span class="token keyword">extends</span> <span class="token class-name">ImageView</span> <span class="token keyword">implements</span> <span class="token class-name">IEsCoverView</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Context</span> mContext<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyCustomCoverView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mContext <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyCustomCoverView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mContext <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyCustomCoverView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">,</span> <span class="token keyword">int</span> defStyleAttr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> defStyleAttr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mContext <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequiresApi</span><span class="token punctuation">(</span>api <span class="token operator">=</span> <span class="token class-name">Build</span><span class="token punctuation">.</span><span class="token constant">VERSION_CODES</span><span class="token punctuation">.</span><span class="token constant">LOLLIPOP</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">MyCustomCoverView</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">AttributeSet</span> attrs<span class="token punctuation">,</span> <span class="token keyword">int</span> defStyleAttr<span class="token punctuation">,</span> <span class="token keyword">int</span> defStyleRes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> defStyleAttr<span class="token punctuation">,</span> defStyleRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mContext <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> serializable<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//init\u65F6\u5019\u53EF\u4EE5\u88C5\u5165\u81EA\u5DF1\u7684\u56FE\u7247 \u6CA1\u6709\u76F4\u63A5\u5728xml\u4E2D\u8BBE\u7F6E\u5373\u53EF \u4F8B\u5982\u4E0B\u9762xml\u4E2D\u7684  android:src=&quot;@drawable/splash_bg_default&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mContext <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Glide</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span>mContext<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">asGif</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>test<span class="token punctuation">)</span><span class="token comment">//\u53EF\u4EE5\u52A0\u8F7D\u81EA\u5DF1\u7684\u56FE\u7247</span>
                    <span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEsRenderSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u6E32\u67D3\u5FEB\u5E94\u7528\u6210\u529F\u540E\u53EF\u4EE5\u4F7F\u7528\u6E05\u7406\u56FE\u7247\u6216\u8005\u8FDB\u4E00\u6B65\u52A0\u8F7D\u540E\u7EED\u56FE\u7247\u7B49\u64CD\u4F5C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">postDelayed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ViewGroup</span><span class="token punctuation">)</span> <span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>mContext <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Glide</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span>mContext<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token function">setBackgroundResource</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>custon_cover_view_bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEsRenderFailed</span><span class="token punctuation">(</span><span class="token class-name">EsException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">suspend</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unSuspend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//xml</span>
<span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span>  encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span>coustom<span class="token punctuation">.</span></span>MyCustomCoverView</span>
    xmlns<span class="token operator">:</span>android<span class="token operator">=</span><span class="token string">&quot;http://schemas.android.com/apk/res/android&quot;</span>
    android<span class="token operator">:</span>layout_width<span class="token operator">=</span><span class="token string">&quot;match_parent&quot;</span>
    android<span class="token operator">:</span>layout_height<span class="token operator">=</span><span class="token string">&quot;match_parent&quot;</span>
    android<span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;@drawable/splash_bg_default&quot;</span>
    android<span class="token operator">:</span>scaleType<span class="token operator">=</span><span class="token string">&quot;fitXY&quot;</span>
    android<span class="token operator">:</span>background<span class="token operator">=</span><span class="token string">&quot;@drawable/custon_cover_view_bg&quot;</span>
     <span class="token operator">/</span><span class="token operator">&gt;</span>

 <span class="token comment">//\u5728\u9700\u8981\u8C03\u7528\u542F\u52A8\u5FEB\u5E94\u7528\u7684\u4F4D\u7F6E</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">EsData</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EsData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    data<span class="token punctuation">.</span><span class="token function">setAppPackage</span><span class="token punctuation">(</span><span class="token string">&quot;es.xxx.xxx.xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5C0F\u7A0B\u5E8F\u5305\u540D</span>
    data<span class="token punctuation">.</span><span class="token function">setCoverLayoutId</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>my_custom_cover<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u81EA\u5B9A\u4E49\u7684xml</span>
    <span class="token comment">//\u542F\u52A8\u5FEB\u5E94\u7528</span>
    <span class="token class-name">EsManager</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div>`,4)])))}});export{u as __pageData,l as default};
