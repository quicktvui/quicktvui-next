import{o as s,c as a,a as t}from"./app.417ed19d.js";const u='{"title":"Moudle\u662F\u4EC0\u4E48\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Moudle\u662F\u4EC0\u4E48\uFF1F","slug":"moudle\u662F\u4EC0\u4E48\uFF1F"},{"level":2,"title":"\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F","slug":"\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F"},{"level":3,"title":"Android\u7AEF\u4EE3\u7801:","slug":"android\u7AEF\u4EE3\u7801"},{"level":2,"title":"\u6CE8\u518C","slug":"\u6CE8\u518C"},{"level":2,"title":"Vue\u8C03\u7528","slug":"vue\u8C03\u7528"}],"relativePath":"zh-CN/sdk/cus_module.md","lastUpdated":1750328994000}',p={},l=Object.assign(p,{__name:"cus_module",setup(o){return(e,n)=>(s(),a("div",null,n[0]||(n[0]=[t(`<h2 id="moudle\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">Moudle\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor vp-link" href="#moudle\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>Module\u662F\u57FA\u4E8E\u5FEB\u5E94\u7528\u57FA\u7840\u67B6\u6784\u6269\u5C55\u51FA\u6765\u7684\u81EA\u5B9A\u4E49\u6A21\u5757\uFF0C\u662F\u4E3Asdk\u63D0\u4F9B\u6269\u5C55\u529F\u80FD\u7684\u6A21\u5757\uFF0C\u4F8B\u5982\u4E0B\u8F7D\u529F\u80FD\u3001Toast\u7B49\u3002</p><p>\u5982\u679CSDK\u9ED8\u8BA4\u63D0\u4F9B\u7684\u529F\u80FD\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u65B9\u5F0F\u5B9E\u73B0\u81EA\u5DF1\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u81EA\u5DF1\u7684\u52A0\u5BC6\u7B97\u6CD5\u3001\u652F\u4ED8\u6A21\u5757\u7B49\u3002</p><h2 id="\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F" tabindex="-1">\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F <a class="header-anchor vp-link" href="#\u5982\u4F55\u81EA\u5B9A\u4E49\uFF1F" aria-hidden="true">#</a></h2><p>\u81EA\u5B9A\u4E49\u529F\u80FD\u9700\u8981\u6CE8\u610F\u4E00\u4E0B\u51E0\u70B9\uFF1A</p><ul><li><p>Module\u5B9E\u73B0IEsModule\u63A5\u53E3</p></li><li><p>\u65B9\u6CD5\u5FC5\u987B\u662Fpublic\u65B9\u6CD5\uFF0C\u4E14\u540C\u4E00\u4E2AModule\u4E2D\u4E0D\u5141\u8BB8\u540C\u540D\u65B9\u6CD5</p></li><li><p>\u53C2\u6570\u652F\u6301\u7C7B\u578B\uFF1A</p></li><li><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A<code>int</code>, <code>String</code>, <code>boolean</code></p></li><li><p>\u6570\u7EC4\u7C7B\u578B\uFF1A<code>EsMap</code>, <code>EsArray</code></p></li><li><p>\u56DE\u8C03\u7C7B\u578B\uFF1A<code>EsPromise</code></p></li></ul><h3 id="android\u7AEF\u4EE3\u7801" tabindex="-1">Android\u7AEF\u4EE3\u7801: <a class="header-anchor vp-link" href="#android\u7AEF\u4EE3\u7801" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>\u70B9\u51FB\u67E5\u770B\u6E90\u7801</summary><div class="language-java"><pre><code><span class="token comment">// \u5B9E\u73B0IEsModule\u63A5\u53E3</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyModule</span> <span class="token keyword">implements</span> <span class="token class-name">IEsModule</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// \u663E\u793AToast</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//ToastUtils.showToastShort(msg);</span>
        <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token function">makeText</span><span class="token punctuation">(</span>mContext<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token class-name">Toast</span><span class="token punctuation">.</span><span class="token constant">LENGTH_SHORT</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u274C \u9519\u8BEF\uFF01\uFF01\uFF01\u540C\u4E00\u4E2AModule\u4E2D\u4E0D\u5141\u8BB8\u540C\u540D\u65B9\u6CD5</span>
    <span class="token comment">// \u4F1A\u5BFC\u81F4vue\u8C03\u7528\u4E0D\u6210\u529F</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// \u68C0\u6D4B\u5E94\u7528\u662F\u5426\u5B89\u88C5 \u5E26promise\u7684\u56DE\u8C03\u65B9\u5F0F</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">isAppInstall</span><span class="token punctuation">(</span><span class="token class-name">String</span> packageName<span class="token punctuation">,</span> <span class="token class-name">EsPromise</span> promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">PackageInfo</span> info <span class="token operator">=</span> mContext<span class="token punctuation">.</span><span class="token function">getPackageManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPackageInfo</span><span class="token punctuation">(</span>packageName<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>info <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">PromiseHolder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">singleData</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">PromiseHolder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">singleData</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7528\u5185\u90E8\u63D0\u4F9B\u4E2A\u7684\u5DE5\u5177\u76F4\u63A5\u53D1\u9001</span>
        <span class="token comment">//\u6216\u8005\u901A\u8FC7EsMap\u8C03\u7528\u53D1\u9001 promise\u5FC5\u987B\u8981\u8FD4\u56DE \u5426\u5219vue\u5C42\u4F1A\u6709\u963B\u585E</span>
        <span class="token class-name">EsMap</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">pushInt</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span>
        map<span class="token punctuation">.</span><span class="token function">pushString</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A0B\u5E8F\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5411\u6307\u5B9A\u7684IEsComponent\u6216\u8005IEsModule\u53D1\u9001\u4E8B\u4EF6(\u5168\u5C40\u4E8B\u4EF6)</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">sendNativeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EsMap</span> esMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    esMap<span class="token punctuation">.</span><span class="token function">pushInt</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">EsProxy</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendNativeEventTraceable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;onStatusChanged&quot;</span><span class="token punctuation">,</span> esMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details><h2 id="\u6CE8\u518C" tabindex="-1">\u6CE8\u518C <a class="header-anchor vp-link" href="#\u6CE8\u518C" aria-hidden="true">#</a></h2><div class="language-java"><pre><code><span class="token class-name">InitConfig</span> initConfig <span class="token operator">=</span> <span class="token class-name">InitConfig</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
initConfig<span class="token punctuation">.</span><span class="token function">setAppId</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CE8\u518C\u7684APPID&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">setSdkInitCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EsKitInitCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u4F7F\u7528EsKitInitCallback\u76D1\u542C \u6CE8\u518C\u4F60\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u6A21\u5757</span>
       <span class="token annotation punctuation">@Override</span>
       <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEsKitInitSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token comment">// \u6CE8\u518C\u5230SDK</span>
           <span class="token class-name">EsManager</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token class-name">MyModule</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="vue\u8C03\u7528" tabindex="-1">Vue\u8C03\u7528 <a class="header-anchor vp-link" href="#vue\u8C03\u7528" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>Vue3</summary><div class="language-text"><pre><code>import { Native } from &quot;@extscreen/es3-vue&quot;;
// \u53C2\u65701: module\u540D\u79F0  \u53C2\u65702: \u65B9\u6CD5\u540D\u79F0  \u53C2\u65703: \u65B9\u6CD5\u53C2\u6570
Native.callNative(&#39;MyModule&#39;, &#39;showToast&#39;, &quot;hello&quot;);

// \u8C03\u7528\u9700\u8981\u8FD4\u56DE\u503C\u7684\u65B9\u6CD5
Native.callNativeWithPromise(&#39;MyModule&#39;, &#39;isAppInstall&#39;, &#39;com.extscreen.runtime&#39;)
  .then((isInstall) =&gt; {
    console.log(&#39;isAppInstall&#39;, isInstall)
  });

// vue\u5C42\u63A5\u6536\u56DE\u8C03\u4FE1\u606F
import { EventBus } from &quot;@extscreen/es3-vue&quot;;

//\u6CE8\u518C\uFF1A
EventBus.$on(&#39;onStatusChanged&#39;, this.onStatusChanged);

//\u53D6\u6D88\u6CE8\u518C\uFF1A
EventBus.$off(&#39;onStatusChanged&#39;, this.onStatusChanged);

//\u5904\u7406\u56DE\u8C03
function onStatusChanged(e) {
  const status = e.status;
  console.log(\`\u63A5\u6536\u5230\u7684\u72B6\u6001\u7801:\${status}\`);
}
</code></pre></div></details><details class="details custom-block"><summary>Vue2</summary><div class="language-text"><pre><code>// \u53C2\u65701: module\u540D\u79F0  \u53C2\u65702: \u65B9\u6CD5\u540D\u79F0  \u53C2\u65703: \u65B9\u6CD5\u53C2\u6570
Vue.Native.callNative(&#39;MyModule&#39;, &#39;showToast&#39;, &quot;hello&quot;);

// \u8C03\u7528\u9700\u8981\u8FD4\u56DE\u503C\u7684\u65B9\u6CD5
Vue.Native.callNativeWithPromise(&#39;MyModule&#39;, &#39;isAppInstall&#39;, &#39;com.extscreen.runtime&#39;)
    .then((isInstall)=&gt;{
        console.log(&#39;isAppInstall&#39;, isInstall)
    });

// vue\u5C42\u63A5\u6536\u56DE\u8C03\u4FE1\u606F
//\u6CE8\u518C\uFF1A
ESApp.$on(&#39;onStatusChanged&#39;, this.onStatusChanged);

//\u53D6\u6D88\u6CE8\u518C\uFF1A
ESApp.$off(&#39;onStatusChanged&#39;, this.onStatusChanged);

//\u5904\u7406\u56DE\u8C03
function onStatusChanged(e) {
   const status = e.status;
   console.log(\`\u63A5\u6536\u5230\u7684\u72B6\u6001\u7801:\${  status}\`);
}
</code></pre></div></details>`,13)])))}});export{u as __pageData,l as default};
