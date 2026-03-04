import{o as s,c as e,a as o,d as a,e as p,b as c,_ as l}from"./app.9d3738b3.js";const i={href:"https://github.com/quicktvui/quicktvui-next/blob/dev/docs/zh-CN/component/waterfall_structure.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m='{"title":"Waterfall Structure (AI)","description":"","frontmatter":{"title":"Waterfall Structure (AI)","lang":"zh-CN"},"headers":[{"level":2,"title":"1. \u5C42\u7EA7\u5173\u7CFB","slug":"_1-\u5C42\u7EA7\u5173\u7CFB"},{"level":2,"title":"2. \u56FE\u4E2D\u89C6\u89C9\u5C42\u4E0E\u8BED\u4E49\u6620\u5C04","slug":"_2-\u56FE\u4E2D\u89C6\u89C9\u5C42\u4E0E\u8BED\u4E49\u6620\u5C04"},{"level":2,"title":"3. \u5B57\u6BB5\u6620\u5C04\uFF08\u4E0E\u4EE3\u7801\u4E00\u81F4\uFF09","slug":"_3-\u5B57\u6BB5\u6620\u5C04\uFF08\u4E0E\u4EE3\u7801\u4E00\u81F4\uFF09"},{"level":2,"title":"4. \u5E03\u5C40\u89C4\u5219\uFF08Flex Section\uFF09","slug":"_4-\u5E03\u5C40\u89C4\u5219\uFF08flex-section\uFF09"},{"level":2,"title":"5. \u5173\u952E\u7EA6\u675F\uFF08AI \u5FC5\u987B\u9075\u5B88\uFF09","slug":"_5-\u5173\u952E\u7EA6\u675F\uFF08ai-\u5FC5\u987B\u9075\u5B88\uFF09"},{"level":3,"title":"5.1 \u9ED8\u8BA4\u8BED\u5883","slug":"_5-1-\u9ED8\u8BA4\u8BED\u5883"},{"level":3,"title":"5.2 \u81EA\u5B9A\u4E49 Item \u6839\u8282\u70B9\u786C\u7EA6\u675F","slug":"_5-2-\u81EA\u5B9A\u4E49-item-\u6839\u8282\u70B9\u786C\u7EA6\u675F"},{"level":3,"title":"5.3 \u4E0D\u5199\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF08\u6839\u56E0\uFF09","slug":"_5-3-\u4E0D\u5199\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF08\u6839\u56E0\uFF09"},{"level":3,"title":"5.4 AI \u751F\u6210\u4EE3\u7801\u68C0\u67E5\u6E05\u5355","slug":"_5-4-ai-\u751F\u6210\u4EE3\u7801\u68C0\u67E5\u6E05\u5355"},{"level":3,"title":"5.5 \u672C\u5730\u56FE\u7247\u5FC5\u987B\u52A0 file://\uFF08Waterfall / Tabs-Waterfall\uFF09","slug":"_5-5-\u672C\u5730\u56FE\u7247\u5FC5\u987B\u52A0-file-\uFF08waterfall-tabs-waterfall\uFF09"},{"level":2,"title":"6. AI\u53EF\u89E3\u6790\u6570\u636E\u7ED3\u6784\uFF08YAML\uFF09","slug":"_6-ai\u53EF\u89E3\u6790\u6570\u636E\u7ED3\u6784\uFF08yaml\uFF09"},{"level":2,"title":"7. \u6700\u5C0F\u793A\u4F8B\uFF08JSON\uFF09","slug":"_7-\u6700\u5C0F\u793A\u4F8B\uFF08json\uFF09"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"zh-CN/component/waterfall_structure.md","lastUpdated":1772522415000}',u={},h=Object.assign(u,{__name:"waterfall_structure",setup(r){return(d,n)=>{const t=l;return s(),e("div",null,[n[1]||(n[1]=o(`<h1 id="waterfall-\u7ED3\u6784\uFF08ai\u53EF\u8BFB\u7248\uFF09" tabindex="-1">Waterfall \u7ED3\u6784\uFF08AI\u53EF\u8BFB\u7248\uFF09 <a class="header-anchor vp-link" href="#waterfall-\u7ED3\u6784\uFF08ai\u53EF\u8BFB\u7248\uFF09" aria-hidden="true">#</a></h1><p>\u672C\u6587\u5C06 <code>waterfall_structure.jpg</code> \u8F6C\u4E3A\u6587\u672C\u7ED3\u6784\uFF0C\u65B9\u4FBF AI \u7406\u89E3\u5C42\u7EA7\u3001\u5B57\u6BB5\u548C\u5E03\u5C40\u89C4\u5219\u3002</p><h2 id="_1-\u5C42\u7EA7\u5173\u7CFB" tabindex="-1">1. \u5C42\u7EA7\u5173\u7CFB <a class="header-anchor vp-link" href="#_1-\u5C42\u7EA7\u5173\u7CFB" aria-hidden="true">#</a></h2><div class="language-text"><pre><code>Waterfall
\u2514\u2500\u2500 Section[]
    \u251C\u2500\u2500 SectionTitle
    \u2514\u2500\u2500 SectionContent
        \u2514\u2500\u2500 Item[]
</code></pre></div><p>\u8BF4\u660E\uFF1A</p><ul><li><code>Waterfall</code> \u662F\u6839\u5BB9\u5668\u3002</li><li>\u6BCF\u4E2A <code>Section</code> \u81F3\u5C11\u5305\u542B <code>style</code>\u3001<code>itemList</code>\uFF0C\u53EF\u9009 <code>title</code>\u3001<code>titleStyle</code>\u3001<code>decoration</code>\u3002</li><li><code>SectionContent</code> \u4E2D\u653E\u7F6E\u591A\u4E2A <code>Item</code>\u3002</li></ul><h2 id="_2-\u56FE\u4E2D\u89C6\u89C9\u5C42\u4E0E\u8BED\u4E49\u6620\u5C04" tabindex="-1">2. \u56FE\u4E2D\u89C6\u89C9\u5C42\u4E0E\u8BED\u4E49\u6620\u5C04 <a class="header-anchor vp-link" href="#_2-\u56FE\u4E2D\u89C6\u89C9\u5C42\u4E0E\u8BED\u4E49\u6620\u5C04" aria-hidden="true">#</a></h2><p>\u56FE\u4E2D\u4ECE\u5916\u5230\u5185\u53EF\u7406\u89E3\u4E3A\uFF1A</p><div class="language-text"><pre><code>Section Decoration (\u7EA2\u8272\u865A\u7EBF)
  -&gt; Item Decoration (\u9ED1\u8272\u70B9\u865A\u7EBF)
    -&gt; Item Margin (\u7D2B\u8272\u865A\u7EBF)
      -&gt; Item Padding (\u84DD\u8272\u70B9\u7EBF)
        -&gt; Item Content (\u7070\u8272\u5757)
</code></pre></div><p>\u65B9\u5411\u7EDF\u4E00\u4E3A\u56DB\u8FB9\uFF1A<code>top / right / bottom / left</code>\u3002</p><h2 id="_3-\u5B57\u6BB5\u6620\u5C04\uFF08\u4E0E\u4EE3\u7801\u4E00\u81F4\uFF09" tabindex="-1">3. \u5B57\u6BB5\u6620\u5C04\uFF08\u4E0E\u4EE3\u7801\u4E00\u81F4\uFF09 <a class="header-anchor vp-link" href="#_3-\u5B57\u6BB5\u6620\u5C04\uFF08\u4E0E\u4EE3\u7801\u4E00\u81F4\uFF09" aria-hidden="true">#</a></h2><div class="vp-table"><table><thead><tr><th>\u56FE\u4E2D\u6982\u5FF5</th><th>\u4EE3\u7801\u5B57\u6BB5</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>Waterfall</td><td><code>QTWaterfall</code></td><td><code>width</code>, <code>height</code>, <code>visibleType</code></td></tr><tr><td>Section</td><td><code>QTWaterfallSection</code></td><td><code>type</code>, <code>style</code>, <code>itemList</code>, <code>title</code>, <code>titleStyle</code>, <code>decoration</code></td></tr><tr><td>Item</td><td><code>QTWaterfallItem</code></td><td><code>type</code>, <code>style</code>, <code>decoration</code></td></tr><tr><td>Section Decoration</td><td><code>section.decoration.{left,top,right,bottom}</code></td><td>\u56DB\u8FB9\u88C5\u9970\u95F4\u8DDD</td></tr><tr><td>Item Decoration</td><td><code>item.decoration.{left,top,right,bottom}</code></td><td>\u56DB\u8FB9\u88C5\u9970\u95F4\u8DDD\uFF08\u53C2\u4E0E\u5E03\u5C40\u8BA1\u7B97\uFF09</td></tr><tr><td>Item Margin</td><td><code>item.style.margin*</code></td><td><code>margin</code>, <code>marginTop</code> \u7B49</td></tr><tr><td>Item Padding</td><td><code>item.style.padding*</code></td><td><code>padding</code>, <code>paddingTop</code> \u7B49</td></tr><tr><td>Section \u95F4\u8DDD</td><td><code>section.style.spacing</code></td><td>\u884C\u5185/\u6761\u76EE\u95F4\u8DDD\uFF08layout \u8BA1\u7B97\u4F7F\u7528\uFF09</td></tr></tbody></table></div><p>\u76F8\u5173\u7C7B\u578B\u5B9A\u4E49\u6765\u6E90\uFF1A</p><ul><li><code>packages/components/waterfall/src/waterfall-types.ts</code></li><li><code>packages/components/flex/src/flex-types.ts</code></li></ul><h2 id="_4-\u5E03\u5C40\u89C4\u5219\uFF08flex-section\uFF09" tabindex="-1">4. \u5E03\u5C40\u89C4\u5219\uFF08Flex Section\uFF09 <a class="header-anchor vp-link" href="#_4-\u5E03\u5C40\u89C4\u5219\uFF08flex-section\uFF09" aria-hidden="true">#</a></h2><p><code>QT_WATERFALL_SECTION_TYPE_FLEX</code> \u7684\u6838\u5FC3\u5E03\u5C40\u903B\u8F91\u5728\uFF1A</p><ul><li><code>packages/components/waterfall/src/QTWaterfallDataAdapter.ts</code></li></ul><p>\u53EF\u7B80\u5316\u4E3A\uFF1A</p><div class="language-text"><pre><code>for each item in section.itemList:
  width  = item.style.width
  height = item.style.height

  if item.style.x and item.style.y are defined:
    item.layout = [x, y, width, height]
  else:
    deco = item.decoration (left/top/right/bottom)

    if rightMost + width + deco.right &gt; sectionWidth:
      wrap to next line
      downMost += lineHeight + section.style.spacing
      rightMost = 0
      lineHeight = 0

    item.layout.x = rightMost + deco.left
    item.layout.y = downMost + deco.top

    lineHeight = max(lineHeight, height + deco.top + deco.bottom)
    sectionHeight = max(sectionHeight, item.layout.y + height + deco.bottom)
    rightMost += width + section.style.spacing + deco.left + deco.right

final section height =
  sectionHeight
  + titleStyle.height
  + titleStyle.marginTop + titleStyle.marginBottom
  + titleStyle.paddingTop + titleStyle.paddingBottom
</code></pre></div><p>\u6CE8\u610F\uFF1A</p><ul><li>\u5F53\u524D <code>layoutItem</code> \u4E2D\uFF0C<code>section.decoration</code> \u76F8\u5173\u8BA1\u7B97\u662F\u6CE8\u91CA\u72B6\u6001\uFF1B<code>item.decoration</code> \u4F1A\u53C2\u4E0E\u5E03\u5C40\u3002</li><li>\u82E5 <code>item.style.x/y</code> \u5B58\u5728\uFF0C\u5219\u8BE5\u6761\u76EE\u8D70\u7EDD\u5BF9\u5E03\u5C40\u5750\u6807\uFF0C\u4E0D\u53C2\u4E0E\u81EA\u52A8\u6392\u5E03\u3002</li></ul><h2 id="_5-\u5173\u952E\u7EA6\u675F\uFF08ai-\u5FC5\u987B\u9075\u5B88\uFF09" tabindex="-1">5. \u5173\u952E\u7EA6\u675F\uFF08AI \u5FC5\u987B\u9075\u5B88\uFF09 <a class="header-anchor vp-link" href="#_5-\u5173\u952E\u7EA6\u675F\uFF08ai-\u5FC5\u987B\u9075\u5B88\uFF09" aria-hidden="true">#</a></h2><p>\u8FD9\u662F\u6700\u5BB9\u6613\u88AB\u5FFD\u7565\u3001\u4F46\u4F1A\u76F4\u63A5\u5BFC\u81F4 UI \u9519\u8BEF\u7684\u89C4\u5219\u3002</p><h3 id="_5-1-\u9ED8\u8BA4\u8BED\u5883" tabindex="-1">5.1 \u9ED8\u8BA4\u8BED\u5883 <a class="header-anchor vp-link" href="#_5-1-\u9ED8\u8BA4\u8BED\u5883" aria-hidden="true">#</a></h3><ul><li><code>qt-waterfall</code> \u7684 <code>#item</code> \u63D2\u69FD\u662F\u5728 <code>flex-section</code> \u5185\u6E32\u67D3\u7684\u3002</li><li>\u56E0\u6B64\u81EA\u5B9A\u4E49 <code>item</code> \u9ED8\u8BA4\u8981\u6309 <code>QT_WATERFALL_SECTION_TYPE_FLEX</code> \u7684\u5E03\u5C40\u89C4\u5219\u5904\u7406\u3002</li></ul><h3 id="_5-2-\u81EA\u5B9A\u4E49-item-\u6839\u8282\u70B9\u786C\u7EA6\u675F" tabindex="-1">5.2 \u81EA\u5B9A\u4E49 Item \u6839\u8282\u70B9\u786C\u7EA6\u675F <a class="header-anchor vp-link" href="#_5-2-\u81EA\u5B9A\u4E49-item-\u6839\u8282\u70B9\u786C\u7EA6\u675F" aria-hidden="true">#</a></h3><p>\u81EA\u5B9A\u4E49 <code>item</code> \u6839\u8282\u70B9\u5FC5\u987B\u900F\u4F20\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF1A</p><div class="language-vue"><pre><code>layout=&quot;\${layout}&quot;
flexStyle=&quot;\${style}&quot;
</code></pre></div><p>\u63A8\u8350\u6700\u5C0F\u5199\u6CD5\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${layout}<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">flexStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${style}<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:focusable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">eventClick</span>
    <span class="token attr-name">eventFocus</span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u5185\u5BB9 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_5-3-\u4E0D\u5199\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF08\u6839\u56E0\uFF09" tabindex="-1">5.3 \u4E0D\u5199\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF08\u6839\u56E0\uFF09 <a class="header-anchor vp-link" href="#_5-3-\u4E0D\u5199\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF08\u6839\u56E0\uFF09" aria-hidden="true">#</a></h3><ul><li>\u7F3A\u5C11 <code>layout=&quot;\${layout}&quot;</code>\uFF1A <code>x/y/width/height</code> \u4E0D\u80FD\u6309 Waterfall \u8BA1\u7B97\u7ED3\u679C\u843D\u5230 item \u4E0A\uFF0C\u591A\u4E2A item \u5F80\u5F80\u51FA\u73B0\u5728\u76F8\u540C\u8D77\u70B9\uFF08\u5E38\u89C1\u4E3A\u5DE6\u4E0A\u89D2\uFF09\uFF0C\u8868\u73B0\u4E3A\u201C\u5806\u53E0\u5230\u4E00\u5757\u201D\u3002</li><li>\u7F3A\u5C11 <code>flexStyle=&quot;\${style}&quot;</code>\uFF1A item \u7684\u52A8\u6001\u6837\u5F0F\u4E0A\u4E0B\u6587\u65E0\u6CD5\u5B8C\u6574\u900F\u4F20\uFF0C\u6837\u5F0F\u4E0E\u6570\u636E\u53EF\u80FD\u8131\u8282\uFF08\u5C3A\u5BF8\u3001\u95F4\u8DDD\u3001\u7126\u70B9\u6001\u7B49\uFF09\uFF0C\u5728\u590D\u6742\u573A\u666F\u4E0B\u540C\u6837\u4F1A\u653E\u5927\u91CD\u53E0/\u9519\u4F4D\u95EE\u9898\u3002</li></ul><h3 id="_5-4-ai-\u751F\u6210\u4EE3\u7801\u68C0\u67E5\u6E05\u5355" tabindex="-1">5.4 AI \u751F\u6210\u4EE3\u7801\u68C0\u67E5\u6E05\u5355 <a class="header-anchor vp-link" href="#_5-4-ai-\u751F\u6210\u4EE3\u7801\u68C0\u67E5\u6E05\u5355" aria-hidden="true">#</a></h3><p>AI \u751F\u6210\u81EA\u5B9A\u4E49 <code>item</code> \u4EE3\u7801\u65F6\uFF0C\u5FC5\u987B\u9010\u6761\u68C0\u67E5\uFF1A</p><ul><li>\u6839\u8282\u70B9\u662F\u5426\u5305\u542B <code>layout=&quot;\${layout}&quot;</code>\u3002</li><li>\u6839\u8282\u70B9\u662F\u5426\u5305\u542B <code>flexStyle=&quot;\${style}&quot;</code>\u3002</li><li>\u6839\u8282\u70B9\u662F\u5426\u53EF\u805A\u7126\uFF08\u6309\u4E1A\u52A1\u9700\u8981\u8BBE\u7F6E <code>:focusable</code>\u3001<code>eventFocus</code>\u3001<code>eventClick</code>\uFF09\u3002</li><li><code>section.type</code> \u662F\u5426\u4E3A <code>QT_WATERFALL_SECTION_TYPE_FLEX</code>\uFF08\u6216\u4E0E\u63D2\u69FD\u8BED\u4E49\u4E00\u81F4\uFF09\u3002</li><li>\u672A\u7528\u7EAF CSS \u5B9A\u4F4D\u66FF\u4EE3 <code>layout</code> \u7ED1\u5B9A\u3002</li></ul><h3 id="_5-5-\u672C\u5730\u56FE\u7247\u5FC5\u987B\u52A0-file-\uFF08waterfall-tabs-waterfall\uFF09" tabindex="-1">5.5 \u672C\u5730\u56FE\u7247\u5FC5\u987B\u52A0 <code>file://</code>\uFF08Waterfall / Tabs-Waterfall\uFF09 <a class="header-anchor vp-link" href="#_5-5-\u672C\u5730\u56FE\u7247\u5FC5\u987B\u52A0-file-\uFF08waterfall-tabs-waterfall\uFF09" aria-hidden="true">#</a></h3><p>\u5F53\u56FE\u7247\u6765\u6E90\u662F\u672C\u5730\u8D44\u6E90\uFF08\u4F8B\u5982 <code>import icon from &#39;...png&#39;</code>\uFF09\u4E14\u8BE5\u503C\u8FDB\u5165 Waterfall/Tabs-Waterfall \u7684\u6570\u636E\u5BF9\u8C61\u65F6\uFF0C\u5FC5\u987B\u8865\u534F\u8BAE\u5934\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">const</span> localIcon <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">file://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><p>\u9519\u8BEF\u5199\u6CD5\uFF08\u5BB9\u6613\u5728\u7011\u5E03\u6D41\u6761\u76EE\u91CC\u4E0D\u663E\u793A\u6216\u663E\u793A\u5F02\u5E38\uFF09\uFF1A</p><div class="language-ts"><pre><code>icon
</code></pre></div><p>\u6B63\u786E\u5199\u6CD5\uFF1A</p><div class="language-ts"><pre><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">file://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><p>\u63A8\u8350\u5E94\u7528\u4F4D\u7F6E\uFF1A</p><ul><li><code>item.image.normal / focused</code></li><li><code>item.corner</code></li><li><code>item.icon / iconFocus</code></li><li>\u5176\u4ED6\u6700\u7EC8\u5582\u7ED9 <code>src</code> \u7684\u6570\u636E\u5B57\u6BB5\uFF08\u901A\u8FC7 <code>\${...}</code> \u7ED1\u5B9A\u5230 <code>img</code> / <code>qt-image</code>\uFF09</li></ul><h2 id="_6-ai\u53EF\u89E3\u6790\u6570\u636E\u7ED3\u6784\uFF08yaml\uFF09" tabindex="-1">6. AI\u53EF\u89E3\u6790\u6570\u636E\u7ED3\u6784\uFF08YAML\uFF09 <a class="header-anchor vp-link" href="#_6-ai\u53EF\u89E3\u6790\u6570\u636E\u7ED3\u6784\uFF08yaml\uFF09" aria-hidden="true">#</a></h2><div class="language-yaml"><pre><code><span class="token key atrule">waterfall</span><span class="token punctuation">:</span>
  <span class="token key atrule">width</span><span class="token punctuation">:</span> number
  <span class="token key atrule">height</span><span class="token punctuation">:</span> number
  <span class="token key atrule">visibleType</span><span class="token punctuation">:</span> none<span class="token punctuation">|</span>normal<span class="token punctuation">|</span>center
  <span class="token key atrule">sectionList</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">_id</span><span class="token punctuation">:</span> string
      <span class="token key atrule">type</span><span class="token punctuation">:</span> number
      <span class="token key atrule">title</span><span class="token punctuation">:</span> string
      <span class="token key atrule">style</span><span class="token punctuation">:</span>
        <span class="token key atrule">width</span><span class="token punctuation">:</span> number
        <span class="token key atrule">height</span><span class="token punctuation">:</span> number
        <span class="token key atrule">spacing</span><span class="token punctuation">:</span> number
        <span class="token key atrule">left</span><span class="token punctuation">:</span> number
        <span class="token key atrule">top</span><span class="token punctuation">:</span> number
        <span class="token key atrule">right</span><span class="token punctuation">:</span> number
        <span class="token key atrule">bottom</span><span class="token punctuation">:</span> number
      <span class="token key atrule">decoration</span><span class="token punctuation">:</span>
        <span class="token key atrule">left</span><span class="token punctuation">:</span> number
        <span class="token key atrule">top</span><span class="token punctuation">:</span> number
        <span class="token key atrule">right</span><span class="token punctuation">:</span> number
        <span class="token key atrule">bottom</span><span class="token punctuation">:</span> number
      <span class="token key atrule">itemList</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">_id</span><span class="token punctuation">:</span> string
          <span class="token key atrule">type</span><span class="token punctuation">:</span> number
          <span class="token key atrule">style</span><span class="token punctuation">:</span>
            <span class="token key atrule">width</span><span class="token punctuation">:</span> number
            <span class="token key atrule">height</span><span class="token punctuation">:</span> number
            <span class="token key atrule">x</span><span class="token punctuation">:</span> number
            <span class="token key atrule">y</span><span class="token punctuation">:</span> number
            <span class="token key atrule">margin</span><span class="token punctuation">:</span> number
            <span class="token key atrule">marginTop</span><span class="token punctuation">:</span> number
            <span class="token key atrule">marginRight</span><span class="token punctuation">:</span> number
            <span class="token key atrule">marginBottom</span><span class="token punctuation">:</span> number
            <span class="token key atrule">marginLeft</span><span class="token punctuation">:</span> number
            <span class="token key atrule">padding</span><span class="token punctuation">:</span> number
            <span class="token key atrule">paddingTop</span><span class="token punctuation">:</span> number
            <span class="token key atrule">paddingRight</span><span class="token punctuation">:</span> number
            <span class="token key atrule">paddingBottom</span><span class="token punctuation">:</span> number
            <span class="token key atrule">paddingLeft</span><span class="token punctuation">:</span> number
          <span class="token key atrule">decoration</span><span class="token punctuation">:</span>
            <span class="token key atrule">left</span><span class="token punctuation">:</span> number
            <span class="token key atrule">top</span><span class="token punctuation">:</span> number
            <span class="token key atrule">right</span><span class="token punctuation">:</span> number
            <span class="token key atrule">bottom</span><span class="token punctuation">:</span> number
</code></pre></div><h2 id="_7-\u6700\u5C0F\u793A\u4F8B\uFF08json\uFF09" tabindex="-1">7. \u6700\u5C0F\u793A\u4F8B\uFF08JSON\uFF09 <a class="header-anchor vp-link" href="#_7-\u6700\u5C0F\u793A\u4F8B\uFF08json\uFF09" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span>
  <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sectionList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sec-1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1002</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SectionTitle&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spacing&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;decoration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
        <span class="token property">&quot;top&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token property">&quot;right&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bottom&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;itemList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;item-1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">10001</span><span class="token punctuation">,</span>
          <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
            <span class="token property">&quot;padding&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;margin&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;decoration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;left&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;top&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;right&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;bottom&quot;</span><span class="token operator">:</span> <span class="token number">8</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor vp-link" href="#source" aria-hidden="true">#</a></h2>`,49)),a("p",null,[a("a",i,[n[0]||(n[0]=p("Docs",-1)),c(t,{class:"link-icon"})])])])}}});export{m as __pageData,h as default};
