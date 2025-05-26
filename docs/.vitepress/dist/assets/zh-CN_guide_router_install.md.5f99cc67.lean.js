import{o as a,c as s,a as t}from"./app.f9d0994b.js";const l='{"title":"\u96C6\u6210","description":"","frontmatter":{"title":"\u96C6\u6210","lang":"zh-CN"},"headers":[{"level":2,"title":"\u7B2C1\u6B65\uFF1Apackage.json\u5F15\u5165\u5E93","slug":"\u7B2C1\u6B65\uFF1Apackage-json\u5F15\u5165\u5E93"},{"level":2,"title":"\u7B2C2\u6B65\uFF1A\u521B\u5EFARouteMap","slug":"\u7B2C2\u6B65\uFF1A\u521B\u5EFAroutemap"},{"level":2,"title":"\u7B2C3\u6B65\uFF1Amain.ts\u4E2D\u521D\u59CB\u5316","slug":"\u7B2C3\u6B65\uFF1Amain-ts\u4E2D\u521D\u59CB\u5316"},{"level":2,"title":"\u7B2C4\u6B65\uFF1AApp.vue\u4E2D\u521D\u59CB\u5316","slug":"\u7B2C4\u6B65\uFF1Aapp-vue\u4E2D\u521D\u59CB\u5316"}],"relativePath":"zh-CN/guide/router/install.md","lastUpdated":1746602666000}',p={},u=Object.assign(p,{__name:"install",setup(e){return(o,n)=>(a(),s("div",null,n[0]||(n[0]=[t(`<h1 id="\u96C6\u6210" tabindex="-1">\u96C6\u6210 <a class="header-anchor vp-link" href="#\u96C6\u6210" aria-hidden="true">#</a></h1><h2 id="\u7B2C1\u6B65\uFF1Apackage-json\u5F15\u5165\u5E93" tabindex="-1">\u7B2C1\u6B65\uFF1A<code>package.json</code>\u5F15\u5165\u5E93 <a class="header-anchor vp-link" href="#\u7B2C1\u6B65\uFF1Apackage-json\u5F15\u5165\u5E93" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;@extscreen/es3-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7B2C2\u6B65\uFF1A\u521B\u5EFAroutemap" tabindex="-1">\u7B2C2\u6B65\uFF1A\u521B\u5EFA<code>RouteMap</code> <a class="header-anchor vp-link" href="#\u7B2C2\u6B65\uFF1A\u521B\u5EFAroutemap" aria-hidden="true">#</a></h2><p>\u521B\u5EFA<code>routes.ts</code>\u52A0\u5165\u9875\u9762\u8DEF\u7531\u914D\u7F6E\u3002</p><p>\u4E0B\u9762\u4EE5<code>index.vue</code>\u9875\u9762\u4E3A\u4F8B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&quot;./views/index.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> index<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/error&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> error<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u7B2C3\u6B65\uFF1Amain-ts\u4E2D\u521D\u59CB\u5316" tabindex="-1">\u7B2C3\u6B65\uFF1A<code>main.ts</code>\u4E2D\u521D\u59CB\u5316 <a class="header-anchor vp-link" href="#\u7B2C3\u6B65\uFF1Amain-ts\u4E2D\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createESRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@extscreen/es3-router&#39;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&quot;./routes.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@extscreen/es3-router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routerOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  main<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
  error<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  limit<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> router<span class="token operator">:</span> Router <span class="token operator">=</span> <span class="token function">createESRouter</span><span class="token punctuation">(</span>routerOptions<span class="token punctuation">)</span>
<span class="token keyword">const</span> app<span class="token operator">:</span> ESApp <span class="token operator">=</span> <span class="token function">createESApp</span><span class="token punctuation">(</span>application<span class="token punctuation">,</span> router<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>install<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u7B2C4\u6B65\uFF1Aapp-vue\u4E2D\u521D\u59CB\u5316" tabindex="-1">\u7B2C4\u6B65\uFF1A<code>App.vue</code>\u4E2D\u521D\u59CB\u5316 <a class="header-anchor vp-link" href="#\u7B2C4\u6B65\uFF1Aapp-vue\u4E2D\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>es-router-view</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u914D\u7F6E\u5B8C\u6210\uFF0C\u5E76\u4E14\u521D\u59CB\u5316\u6210\u529F\u540E\u5C31\u53EF\u4EE5\u8FDB\u884C\u9875\u9762\u7684\u8DF3\u8F6C\u4E86\u3002</p>`,12)])))}});export{l as __pageData,u as default};
