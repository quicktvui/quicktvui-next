import{o as a,c as s,a as t}from"./app.f9d0994b.js";const l='{"title":"Page\u72B6\u6001\u7BA1\u7406","description":"","frontmatter":{"title":"Page\u72B6\u6001\u7BA1\u7406","lang":"zh-CN"},"headers":[{"level":2,"title":"\u9875\u9762\u7C7B\u578B","slug":"\u9875\u9762\u7C7B\u578B-1"},{"level":2,"title":"\u5BF9\u8BDD\u6846\u7C7B\u578B","slug":"\u5BF9\u8BDD\u6846\u7C7B\u578B"}],"relativePath":"zh-CN/guide/page/type.md","lastUpdated":1746602666000}',e={},i=Object.assign(e,{__name:"type",setup(p){return(o,n)=>(a(),s("div",null,n[0]||(n[0]=[t(`<h1 id="\u9875\u9762\u7C7B\u578B" tabindex="-1">\u9875\u9762\u7C7B\u578B <a class="header-anchor vp-link" href="#\u9875\u9762\u7C7B\u578B" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A\u58F0\u660E\u5728\u8DEF\u7531\u8868 routes.ts \u91CC\u9762\u7684\u7EC4\u4EF6\u624D\u80FD\u4F5C\u4E3A\u5FEB\u5E94\u7528\u7684 Page \u6216\u8005 Dialog\u3002</p><p><code>routes.ts</code>\u914D\u7F6E\u7684\u8DEF\u7531\uFF0C\u5982\u679C\u4E0D\u6DFB\u52A0\u7C7B\u578B\uFF0C\u5219\u9ED8\u8BA4\u662F Page \u7C7B\u578B\u3002</p></div><h2 id="\u9875\u9762\u7C7B\u578B-1" tabindex="-1">\u9875\u9762\u7C7B\u578B <a class="header-anchor vp-link" href="#\u9875\u9762\u7C7B\u578B-1" aria-hidden="true">#</a></h2><p>\u8DEF\u7531\u914D\u7F6E\u4E2D\u6DFB\u52A0\u7C7B\u578B\uFF1A<code>type: ESRouteType.ES_ROUTE_TYPE_PAGE</code></p><p>\u4E0B\u9762\u4EE5<code>index.vue</code>\u9875\u9762\u4E3A\u4F8B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&quot;./views/index.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> index<span class="token punctuation">,</span>
    type<span class="token operator">:</span> ESRouteType<span class="token punctuation">.</span><span class="token constant">ES_ROUTE_TYPE_PAGE</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u5BF9\u8BDD\u6846\u7C7B\u578B" tabindex="-1">\u5BF9\u8BDD\u6846\u7C7B\u578B <a class="header-anchor vp-link" href="#\u5BF9\u8BDD\u6846\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u4EE5<code>index.vue</code>\u9875\u9762\u4E3A\u4F8B\uFF1A</p><p>\u8DEF\u7531\u914D\u7F6E\u4E2D\u6DFB\u52A0\u7C7B\u578B\uFF1A<code>type: ESRouteType.ES_ROUTE_TYPE_DIALOG</code></p><div class="language-ts"><pre><code><span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&quot;./views/index.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> index<span class="token punctuation">,</span>
    type<span class="token operator">:</span> ESRouteType<span class="token punctuation">.</span><span class="token constant">ES_ROUTE_TYPE_DIALOG</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div>`,10)])))}});export{l as __pageData,i as default};
