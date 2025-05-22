import{o as e,c as o,d as s,e as a,b as p,a as l,_ as c}from"./app.139c528e.js";const r={class:"tip custom-block"},u={href:"https://webpack.docschina.org/concepts/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},i={href:"https://github.com/quicktvui/quicktvui-playground/tree/master/es-split-chunks",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vue-loader.vuejs.org/zh-CN/guide/asset-url.html",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},f='{"title":"Resource","description":"","frontmatter":{"title":"Resource","lang":"zh-CN"},"headers":[{"level":3,"title":"\u4E00\u3001\u4F7F\u7528 url-loader \u7F16\u8BD1","slug":"\u4E00\u3001\u4F7F\u7528-url-loader-\u7F16\u8BD1"},{"level":3,"title":"\u4E8C\u3001\u4F7F\u7528 file-loader \u7F16\u8BD1","slug":"\u4E8C\u3001\u4F7F\u7528-file-loader-\u7F16\u8BD1"}],"relativePath":"zh-CN/guide/compile/resource.md","lastUpdated":1746602666000}',d={},v=Object.assign(d,{__name:"resource",setup(g){return(m,n)=>{const t=c;return e(),o("div",null,[n[7]||(n[7]=s("h1",{id:"\u6587\u4EF6\u8D44\u6E90",tabindex:"-1"},[a("\u6587\u4EF6\u8D44\u6E90 "),s("a",{class:"header-anchor vp-link",href:"#\u6587\u4EF6\u8D44\u6E90","aria-hidden":"true"},"#")],-1)),s("div",r,[n[6]||(n[6]=s("p",{class:"custom-block-title"},"\u9879\u76EE\u4F7F\u7528 Webpack \u8FDB\u884C\u7F16\u8BD1\u548C\u6253\u5305",-1)),s("ul",null,[s("li",null,[s("p",null,[n[1]||(n[1]=a("\u70B9\u51FB\u67E5\u770B ")),s("a",u,[n[0]||(n[0]=a("Webpack \u6587\u6863")),p(t,{class:"link-icon"})])])]),s("li",null,[s("p",null,[n[3]||(n[3]=a("\u70B9\u51FB\u67E5\u770B ")),s("a",i,[n[2]||(n[2]=a("quicktvui-playground \u793A\u4F8B")),p(t,{class:"link-icon"})])])]),s("li",null,[s("p",null,[n[5]||(n[5]=a("\u70B9\u51FB\u67E5\u770B ")),s("a",k,[n[4]||(n[4]=a("Vue Loader \u5B98\u65B9\u6587\u6863")),p(t,{class:"link-icon"})])])])])]),n[8]||(n[8]=l(`<div class="warning custom-block"><p class="custom-block-title">\u63A8\u8350\u4F7F\u7528 file-loader \u7F16\u8BD1\u6587\u4EF6\u8D44\u6E90\uFF08\u56FE\u7247\u548C\u6587\u4EF6\uFF09</p><p><em><strong>1\u3001\u56FE\u7247\u4F7F\u7528<code>import</code>\u65B9\u5F0F\u52A0\u8F7D\u3002<code>import logo from &#39;../../assets/logo.png&#39;</code></strong></em></p><p><em><strong>2\u3001<code>file-loader</code>\u4E0D\u652F\u6301\u4F7F\u7528<code>require</code></strong></em></p><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../assets/logo.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/runtime-core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//file-loader \u4E0D\u652F\u6301\u4F7F\u7528 require</span>
<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">&#39;../../assets/logo.png&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      logo
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div><h3 id="\u4E00\u3001\u4F7F\u7528-url-loader-\u7F16\u8BD1" tabindex="-1">\u4E00\u3001\u4F7F\u7528 <code>url-loader</code> \u7F16\u8BD1 <a class="header-anchor vp-link" href="#\u4E00\u3001\u4F7F\u7528-url-loader-\u7F16\u8BD1" aria-hidden="true">#</a></h3><p><code>webpack.android.js</code>\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4E8C\u3001\u4F7F\u7528-file-loader-\u7F16\u8BD1" tabindex="-1">\u4E8C\u3001\u4F7F\u7528 <code>file-loader</code> \u7F16\u8BD1 <a class="header-anchor vp-link" href="#\u4E8C\u3001\u4F7F\u7528-file-loader-\u7F16\u8BD1" aria-hidden="true">#</a></h3><p><code>webpack.android.js</code>\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
    <span class="token comment">//\u8D44\u6E90\u547D\u540D\u89C4\u5219</span>
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&#39;[hash][ext][query]&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;assets/&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;assets/&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7))])}}});export{f as __pageData,v as default};
