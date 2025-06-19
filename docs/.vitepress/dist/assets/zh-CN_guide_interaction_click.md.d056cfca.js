import{o as n,c as s,a as t}from"./app.db97d03c.js";const l='{"title":"Click","description":"","frontmatter":{"title":"Click","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/guide/interaction/click.md","lastUpdated":1746602666000}',p={},u=Object.assign(p,{__name:"click",setup(o){return(c,a)=>(n(),s("div",null,a[0]||(a[0]=[t(`<h1 id="\u70B9\u51FB" tabindex="-1">\u70B9\u51FB <a class="header-anchor vp-link" href="#\u70B9\u51FB" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A\u53EA\u6709\u53EF\u83B7\u5F97\u7126\u70B9\u7684\u7EC4\u4EF6\uFF0C\u5728\u7126\u70B9\u72B6\u6001\u624D\u53EF\u4EE5\u70B9\u51FB\u3002</p></div><p><em><strong>\u7EC4\u4EF6\u88AB\u70B9\u51FB\u89E6\u53D1\u70B9\u51FB\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u53D1\u9001<code>click</code>\u4E8B\u4EF6</strong></em></p><ul><li>\u8BBE\u7F6E\u53EF\u83B7\u5F97\u7126\u70B9<code>:focusable=&quot;true&quot;</code></li><li>\u76D1\u542C<code>click</code>\u4E8B\u4EF6<code>@click=&quot;onClick&quot;</code></li></ul><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
<span class="token attr-name">:focusable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:enableFocusBorder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:focusScale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.1<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;TextButton&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5904\u7406\u70B9\u51FB\u4E8B\u4EF6</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5)])))}});export{l as __pageData,u as default};
