import{o as s,c as a,a as t}from"./app.f9d0994b.js";const u='{"title":"NativeComponent","description":"","frontmatter":{"title":"NativeComponent","lang":"zh-CN"},"headers":[{"level":2,"title":"\u7B2C\u4E00\u6B65\u3001\u6CE8\u518C Element","slug":"\u7B2C\u4E00\u6B65\u3001\u6CE8\u518C-element"},{"level":2,"title":"\u7B2C\u4E8C\u6B65\u3001\u5C01\u88C5 Component","slug":"\u7B2C\u4E8C\u6B65\u3001\u5C01\u88C5-component"},{"level":2,"title":"\u7B2C\u4E09\u6B65\u3001\u4F7F\u7528 Component","slug":"\u7B2C\u4E09\u6B65\u3001\u4F7F\u7528-component"}],"relativePath":"zh-CN/guide/sfc-component/native-component.md","lastUpdated":1746602666000}',p={},l=Object.assign(p,{__name:"native-component",setup(o){return(e,n)=>(s(),a("div",null,n[0]||(n[0]=[t(`<h1 id="\u81EA\u5B9A\u4E49\u539F\u751F\u7EC4\u4EF6" tabindex="-1">\u81EA\u5B9A\u4E49\u539F\u751F\u7EC4\u4EF6 <a class="header-anchor vp-link" href="#\u81EA\u5B9A\u4E49\u539F\u751F\u7EC4\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u7B2C\u4E00\u6B65\u3001\u6CE8\u518C-element" tabindex="-1">\u7B2C\u4E00\u6B65\u3001\u6CE8\u518C Element <a class="header-anchor vp-link" href="#\u7B2C\u4E00\u6B65\u3001\u6CE8\u518C-element" aria-hidden="true">#</a></h2><ul><li>\u5B89\u5353\u7AEF\u81EA\u5B9A\u4E49\u4E86\u4E2A\u539F\u751F\u7EC4\u4EF6 <code>XXXNativeComponent</code>\u3002</li><li>\u5728 <code>main.ts</code>\u4E2D\u8C03\u7528<code>registerElement</code>\u6CE8\u518C<code>Element</code></li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@extscreen/es3-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xxxxElement <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. XXXNativeComponent \u5BF9\u5E94 android \u7AEF\u7EC4\u4EF6\u7684\u540D\u79F0</span>
    name<span class="token operator">:</span> <span class="token string">&#39;XXXNativeComponent&#39;</span><span class="token punctuation">,</span>
    <span class="token function">processEventData</span><span class="token punctuation">(</span>evtData<span class="token punctuation">,</span> nativeEventParams<span class="token operator">:</span> <span class="token punctuation">{</span>
      eventName<span class="token operator">:</span> <span class="token builtin">string</span>
      eventData<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> handler<span class="token operator">:</span> event<span class="token punctuation">,</span> __evt<span class="token operator">:</span> nativeEventName <span class="token punctuation">}</span> <span class="token operator">=</span> evtData<span class="token punctuation">;</span>
      <span class="token comment">// 2. \u5904\u7406 android \u7AEF\u7EC4\u4EF6\u53D1\u51FA\u7684\u4E8B\u4EF6\uFF0C\u5E76\u5904\u7406\u53C2\u6570</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>nativeEventName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// android \u7AEF\u53D1\u51FA\u4E8B\u4EF6 onXXXNativeEvent</span>
        <span class="token keyword">case</span> <span class="token string">&#39;onXXXNativeEvent&#39;</span><span class="token operator">:</span>
          event<span class="token punctuation">.</span>eventName <span class="token operator">=</span> nativeEventParams<span class="token punctuation">.</span>eventName<span class="token punctuation">;</span>
          event<span class="token punctuation">.</span>eventData <span class="token operator">=</span> nativeEventParams<span class="token punctuation">.</span>eventData<span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> event<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">&#39;XXXNativeComponent&#39;</span><span class="token punctuation">,</span> xxxxElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A\u6CE8\u518C\u7684 Element \u7684 tag \u548C name \u90FD\u8981\u548C android \u7AEF\u6CE8\u518C\u7684\u7EC4\u4EF6\u7684\u540D\u79F0\u76F8\u540C\u3002</p></div><h2 id="\u7B2C\u4E8C\u6B65\u3001\u5C01\u88C5-component" tabindex="-1">\u7B2C\u4E8C\u6B65\u3001\u5C01\u88C5 Component <a class="header-anchor vp-link" href="#\u7B2C\u4E8C\u6B65\u3001\u5C01\u88C5-component" aria-hidden="true">#</a></h2><ul><li>\u6E32\u67D3 <code>XXXNativeComponent</code> <code>Element</code>\u3002</li><li>\u5728 <code>ESApp</code>\u4E2D\u8C03\u7528<code>component</code>\u65B9\u6CD5\u6CE8\u518C<code>component</code></li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ESApp<span class="token punctuation">,</span> Native<span class="token punctuation">,</span> registerElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@extscreen/es3-vue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 1\u3001\u81EA\u5B9A\u4E49vue component \u540D\u79F0\u4E3A\uFF1Axxx-view</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;XxxView&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// XXX-event \u4E8B\u4EF6</span>
  emits<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;XXX-event&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> viewRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//2\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65B9\u6CD5</span>
    <span class="token keyword">function</span> <span class="token function">setXXXParams</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u8C03\u7528 android \u7AEF\u7EC4\u4EF6\u7684 setXXXParamsXXX \u65B9\u6CD5</span>
      Native<span class="token punctuation">.</span><span class="token function">callUIFunction</span><span class="token punctuation">(</span>viewRef<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;setXXXParamsXXX&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>text<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    context<span class="token punctuation">.</span><span class="token function">expose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//3.\u66B4\u9732\u7EC4\u4EF6\u65B9\u6CD5</span>
      setXXXParams<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> children <span class="token operator">=</span> context<span class="token punctuation">.</span>slots<span class="token punctuation">.</span>default <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>
        <span class="token comment">//4.\u8C03\u7528h\u51FD\u6570\u6E32\u67D3 XXXNativeComponent Element</span>
        <span class="token string">&#39;XXXNativeComponent&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          ref<span class="token operator">:</span> viewRef<span class="token punctuation">,</span>
          <span class="token comment">//5.\u63A5\u53D7 android \u7EC4\u4EF6\u53D1\u51FA\u7684 onXXXNativeEvent \u4E8B\u4EF6\uFF0C\u5E76\u8F6C\u53D1 XXX-event \u4E8B\u4EF6</span>
          <span class="token function-variable function">onXXXNativeEvent</span><span class="token operator">:</span> <span class="token punctuation">(</span>evt<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;XXX-event&#39;</span><span class="token punctuation">,</span> evt<span class="token punctuation">.</span>eventName<span class="token punctuation">,</span> evt<span class="token punctuation">.</span>eventData<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//6. \u6E32\u67D3slot</span>
        children
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7B2C\u4E09\u6B65\u3001\u4F7F\u7528-component" tabindex="-1">\u7B2C\u4E09\u6B65\u3001\u4F7F\u7528 Component <a class="header-anchor vp-link" href="#\u7B2C\u4E09\u6B65\u3001\u4F7F\u7528-component" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u4F7F\u7528 xxx-view \u7EC4\u4EF6--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xxx-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>es-sdk-root-css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/runtime-core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Index&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">//</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.es-sdk-root-css</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1080px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,10)])))}});export{u as __pageData,l as default};
