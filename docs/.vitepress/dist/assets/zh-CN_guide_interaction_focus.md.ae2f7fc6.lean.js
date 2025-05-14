import{o as s,c as n,a as t}from"./app.456cf701.js";const l='{"title":"Click","description":"","frontmatter":{"title":"Click","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/guide/interaction/focus.md","lastUpdated":1746602666000}',p={},u=Object.assign(p,{__name:"focus",setup(o){return(e,a)=>(s(),n("div",null,a[0]||(a[0]=[t(`<h1 id="\u7126\u70B9" tabindex="-1">\u7126\u70B9 <a class="header-anchor vp-link" href="#\u7126\u70B9" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u7126\u70B9\u76F8\u5173</p><p><em><strong><a href="/zh-CN/guide/focus/basic.html" class="vp-link">\u70B9\u51FB\u67E5\u770B</a></strong></em></p></div><ul><li>\u5728\u7EC4\u4EF6\u4E0A\u8BBE\u7F6E\u5C5E\u6027<code>:focusable=&quot;true&quot;</code>\uFF0C\u53EF\u4F7F\u7EC4\u4EF6\u53EF\u83B7\u7126</li><li>\u76D1\u542C<code>focus</code>\u4E8B\u4EF6<code>@focus=&quot;onFocus&quot;</code></li><li>\u663E\u793A\u7126\u70B9\u8FB9\u6846<code>:enableFocusBorder=&quot;true&quot;</code></li><li>\u8BBE\u7F6E\u7126\u70B9\u653E\u5927\u500D\u6570<code>:focusScale=&quot;1.1&quot;</code></li></ul><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
<span class="token attr-name">:focusable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:enableFocusBorder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:focusScale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.1<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFocus<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;TextButton&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">const</span> <span class="token function-variable function">onFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> focused <span class="token operator">=</span> e<span class="token punctuation">.</span>isFocused<span class="token punctuation">;</span>
  <span class="token comment">//\u5904\u7406\u7126\u70B9\u4E8B\u4EF6</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4)])))}});export{l as __pageData,u as default};
