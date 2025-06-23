import{o as p,c as o,a,d as s,e as t,b as l,_ as c}from"./app.417ed19d.js";var u="/guide/sample/ai-dev.png";const i={href:"https://gitee.com/chenddcoder/esapp-puzzle.git",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h='{"title":"\u5F15\u8A00\uFF1A\u8BA4\u8BC6QuickTVUI","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F15\u8A00\uFF1A\u8BA4\u8BC6QuickTVUI","slug":"\u5F15\u8A00\uFF1A\u8BA4\u8BC6quicktvui"},{"level":2,"title":"\u7B2C\u4E00\u6B65\uFF1A\u667A\u80FD\u751F\u6210Vue\u4EE3\u7801\uFF08DeepSeek\u52A9\u529B\uFF09","slug":"\u7B2C\u4E00\u6B65\uFF1A\u667A\u80FD\u751F\u6210vue\u4EE3\u7801\uFF08deepseek\u52A9\u529B\uFF09"},{"level":3,"title":"\u5173\u952E\u63D0\u793A\u8BCD\u8981\u70B9","slug":"\u5173\u952E\u63D0\u793A\u8BCD\u8981\u70B9"},{"level":3,"title":"\u53C2\u8003\u63D0\u793A\u8BCD","slug":"\u53C2\u8003\u63D0\u793A\u8BCD"},{"level":3,"title":"\u751F\u6210\u7684\u9875\u9762\u4EE3\u7801","slug":"\u751F\u6210\u7684\u9875\u9762\u4EE3\u7801"},{"level":3,"title":"\u751F\u6210\u7684\u65B9\u6CD5\u903B\u8F91","slug":"\u751F\u6210\u7684\u65B9\u6CD5\u903B\u8F91"},{"level":2,"title":"\u7B2C\u4E8C\u6B65\uFF1A\u96C6\u6210\u5230\u5DE5\u7A0B\u9879\u76EE","slug":"\u7B2C\u4E8C\u6B65\uFF1A\u96C6\u6210\u5230\u5DE5\u7A0B\u9879\u76EE"},{"level":2,"title":"\u7B2C\u4E09\u6B65\uFF1AUI\u4F18\u5316\u4E0E\u7126\u70B9\u63A7\u5236","slug":"\u7B2C\u4E09\u6B65\uFF1Aui\u4F18\u5316\u4E0E\u7126\u70B9\u63A7\u5236"},{"level":3,"title":"\u95EE\u9898\u53D1\u73B0","slug":"\u95EE\u9898\u53D1\u73B0"},{"level":3,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848"},{"level":2,"title":"\u6700\u7EC8\u6548\u679C\u5C55\u793A","slug":"\u6700\u7EC8\u6548\u679C\u5C55\u793A"},{"level":2,"title":"\u9879\u76EE\u5730\u5740\u4E0E\u6E90\u7801","slug":"\u9879\u76EE\u5730\u5740\u4E0E\u6E90\u7801"},{"level":2,"title":"\u5F00\u53D1\u603B\u7ED3","slug":"\u5F00\u53D1\u603B\u7ED3"}],"relativePath":"zh-CN/sample/ai-dev.md","lastUpdated":1750673869000}',r={},v=Object.assign(r,{__name:"ai-dev",setup(k){return(d,n)=>{const e=c;return p(),o("div",null,[n[2]||(n[2]=a(`<h2 id="\u5F15\u8A00\uFF1A\u8BA4\u8BC6quicktvui" tabindex="-1">\u5F15\u8A00\uFF1A\u8BA4\u8BC6QuickTVUI <a class="header-anchor vp-link" href="#\u5F15\u8A00\uFF1A\u8BA4\u8BC6quicktvui" aria-hidden="true">#</a></h2><p>QuickTVUI\u662F\u4E00\u4E2A\u4E13\u6CE8\u4E8E<strong>\u5927\u5C4F\u5E94\u7528</strong>\u5FEB\u901F\u5F00\u53D1\u7684\u8F7B\u91CF\u7EA7\u6846\u67B6\u3002\u5B83\u57FA\u4E8EVue\u8BED\u6CD5\uFF0C\u5F00\u53D1\u8005\u53EA\u9700\u7F16\u5199\u6807\u51C6\u7684Vue\u9875\u9762\u4EE3\u7801\uFF0C\u5373\u53EF\u9AD8\u6548\u5B8C\u6210\u5927\u5C4F\u5E94\u7528\u7684\u5F00\u53D1\u5DE5\u4F5C\u3002\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A\u5B8C\u6574\u7684<strong>\u62FC\u56FE\u6E38\u620F\u6848\u4F8B</strong>\uFF0C\u6F14\u793A\u4ECE\u9700\u6C42\u5230\u5B9E\u73B0\u7684\u5B8C\u6574\u6D41\u7A0B\u3002</p><hr><h2 id="\u7B2C\u4E00\u6B65\uFF1A\u667A\u80FD\u751F\u6210vue\u4EE3\u7801\uFF08deepseek\u52A9\u529B\uFF09" tabindex="-1">\u7B2C\u4E00\u6B65\uFF1A\u667A\u80FD\u751F\u6210Vue\u4EE3\u7801\uFF08DeepSeek\u52A9\u529B\uFF09 <a class="header-anchor vp-link" href="#\u7B2C\u4E00\u6B65\uFF1A\u667A\u80FD\u751F\u6210vue\u4EE3\u7801\uFF08deepseek\u52A9\u529B\uFF09" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u83B7\u53D6\u7B26\u5408QuickTVUI\u89C4\u8303\u7684Vue\u4EE3\u7801\u3002\u901A\u8FC7\u7CBE\u5FC3\u8BBE\u8BA1\u7684\u63D0\u793A\u8BCD\uFF0CDeepSeek\u80FD\u591F\u51C6\u786E\u751F\u6210\u6240\u9700\u4EE3\u7801\uFF1A</p><h3 id="\u5173\u952E\u63D0\u793A\u8BCD\u8981\u70B9" tabindex="-1">\u5173\u952E\u63D0\u793A\u8BCD\u8981\u70B9 <a class="header-anchor vp-link" href="#\u5173\u952E\u63D0\u793A\u8BCD\u8981\u70B9" aria-hidden="true">#</a></h3><div class="language-"><pre><code>1. **\u8BED\u6CD5\u89C4\u8303**\uFF1AVue2\u8BED\u6CD5 + TailwindCSS\u6837\u5F0F
2. **\u6837\u5F0F\u9650\u5236**\uFF1A\u7981\u7528\u52A8\u6001\u5BBD\u5EA6(w-[700px])\u3001\u9634\u5F71\u3001\u52A8\u753B\u3001\u9F20\u6807\u6837\u5F0F\u3001grid\u5E03\u5C40
3. **\u6807\u7B7E\u8981\u6C42**\uFF1A\u7981\u7528svg/iframe/button/i\u6807\u7B7E\uFF0C\u5217\u8868\u5FC5\u987B\u4F7F\u7528&lt;ul :horizontal=&quot;true&quot;&gt;\u6807\u8BC6\u6A2A\u5411
4. **\u6587\u672C\u89C4\u5219**\uFF1A\u6240\u6709\u6587\u5B57\u5FC5\u987B\u7528&lt;span&gt;\u5305\u88F9\u4E14\u660E\u786E\u5BF9\u9F50\u65B9\u5F0F(text-center\u7B49)
5. **\u6570\u636E\u7ED1\u5B9A**\uFF1A\u7EDF\u4E00\u4F7F\u7528this.model\u8FDB\u884C\u6570\u636E\u7BA1\u7406
6. **\u65B9\u6CD5\u89C4\u8303**\uFF1A\u521D\u59CB\u5316\u4F7F\u7528init()\u65B9\u6CD5\uFF0C\u7981\u7528computed\u5C5E\u6027
</code></pre></div><p>\uFF08\u6CE8\u610F:QuickTVUI\u652F\u6301Vue3\uFF0C\u6211\u7F16\u5199\u7684\u9879\u76EE\u6A21\u7248\u8981\u6C42\u4F7F\u7528Vue2\u8BED\u6CD5\uFF0C \u4EC5\u4EC5\u662F\u4E3A\u4E86\u4E0EDeepSeek\u9AD8\u6548\u7ED3\u5408\uFF09</p><h3 id="\u53C2\u8003\u63D0\u793A\u8BCD" tabindex="-1">\u53C2\u8003\u63D0\u793A\u8BCD <a class="header-anchor vp-link" href="#\u53C2\u8003\u63D0\u793A\u8BCD" aria-hidden="true">#</a></h3><div class="language-"><pre><code>\u6211\u7F16\u5199\u4E86\u4E00\u4E2A\u7F51\u7AD9VUE\u7F16\u8F91\u5C0F\u7AD9\uFF0C\u5B83\u652F\u6301\u5728\u7EBF\u5F00\u53D1VUE\u9879\u76EE\u3002
\u7F16\u5199\u9879\u76EE\u9700\u8981\u8F93\u51652\u90E8\u5206\u5185\u5BB9\uFF0C\u4E00\u90E8\u5206\u662F\u7F16\u5199\u7684\u9875\u9762\u6807\u7B7E\uFF0C\u53E6\u4E00\u90E8\u5206\u662F\u7F16\u5199\u9875\u9762\u65B9\u6CD5\u3002
\u9875\u9762\u6807\u7B7E\u7684\u89C4\u5219\u5982\u4E0B\uFF1A
1\u3001\u9875\u9762\u662FVue2\u8BED\u6CD5
2\u3001\u9875\u9762\u4F7F\u7528tailwindcss\u6837\u5F0F\uFF0C\u4E0D\u652F\u6301w-[700px]\u8FD9\u6837\u7684\u6307\u5B9A\u5BBD\u5EA6
\u4E0D\u652F\u6301\u9634\u5F71\uFF0C\u4E0D\u652F\u6301\u52A8\u753B\uFF0C\u4E0D\u652F\u6301\u9F20\u6807\u6837\u5F0Fcursor-\uFF0C\u4E0D\u652F\u6301auto\u503C\uFF0C\u542B\u6709flex\u65F6\u660E\u786Eflex-row\u8FD8\u662Fflex-col\uFF0C
\u4E0D\u652F\u6301grid\u5E03\u5C40
3\u3001\u6839\u6807\u7B7E\u4E0D\u9700\u8981\u4F7F\u7528template\u56E0\u4E3A\u6211\u5185\u90E8\u5DF2\u7ECF\u5904\u7406
4\u3001\u9875\u9762\u4E0D\u652F\u6301&lt;svg&gt;&lt;iframe&gt;&lt;button&gt;&lt;i&gt;\u6807\u7B7E
5\u3001\u5217\u8868\u4F7F\u7528ul\u6807\u7B7E\uFF0Cli\u6807\u7B7E\uFF0C\u5F53\u4E3A\u6A2A\u5411\u5217\u8868\u65F6\u52A0\u5165\u5C5E\u6027&lt;ul :horizontal=&quot;true&quot;&gt;\uFF0C\u5982\u679C\u672A\u8D85\u51FA\u5C4F\u5E55\uFF0C\u5219\u65E0\u9700\u4F7F\u7528
6\u3001class\u4E0D\u652F\u6301\u7EE7\u627F\uFF0C\u6240\u6709\u7684\u6587\u5B57\u9700\u8981\u7528span\u6807\u7B7E
7\u3001span\u9700\u8981\u6807\u8BC6\u6587\u5B57\u5BF9\u9F50\u4F8B\u5982text-center
8\u3001\u6240\u6709\u7684\u7ED1\u5B9A\u6570\u636E\u5728this.model\u4E0A
9\u3001\u5982\u679C\u8BBE\u7F6Eborder\u9700\u8981\u8BBE\u7F6Eborder-color
\u9875\u9762\u65B9\u6CD5\u7684\u89C4\u5219\u5982\u4E0B\uFF1A
1\u3001\u9875\u9762\u521D\u59CB\u5316\u65F6\u9ED8\u8BA4\u4F1A\u8C03\u7528init\u65B9\u6CD5\uFF0C\u6211\u4E00\u822C\u5728init\u65B9\u6CD5\u4E2D\u5199this.model={...this.model}
2\u3001\u4E0D\u652F\u6301computed\uFF0C\u4E0D\u8981\u5728\u65B9\u6CD5\u4F53\u4E2D\u52A0\u5165computed
3\u3001\u683C\u5F0F\u662F\u8FD9\u6837\u7684
methods:{
  init(){
    this.model={...this.model}
  }
}
\u6839\u636E\u4E0A\u8FF0\u89C4\u5219\uFF0C\u5E2E\u6211\u5199\u4E00\u4E2A\u62FC\u56FE\u6E38\u620F
</code></pre></div><h3 id="\u751F\u6210\u7684\u9875\u9762\u4EE3\u7801" tabindex="-1">\u751F\u6210\u7684\u9875\u9762\u4EE3\u7801 <a class="header-anchor vp-link" href="#\u751F\u6210\u7684\u9875\u9762\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-col items-center justify-center h-screen bg-gray-100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-lg font-bold text-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u62FC\u56FE\u6E38\u620F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-col border-2 border-gray-400 bg-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(row, rowIndex) in model.board<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rowIndex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(tile, colIndex) in row<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>colIndex<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moveTile(rowIndex, colIndex)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border border-gray-300 flex items-center justify-center<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
          width: &#39;80px&#39;,
          height: &#39;80px&#39;,
          backgroundColor: tile === 0 ? &#39;#e5e7eb&#39; : &#39;#f3f4f6&#39;,
          cursor: tile !== 0 ? &#39;pointer&#39; : &#39;default&#39;
        }<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tile !== 0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-2xl font-bold text-center text-gray-700<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ tile }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resetGame<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-6 py-2 bg-blue-500 text-white rounded text-center<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u91CD\u65B0\u5F00\u59CB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u751F\u6210\u7684\u65B9\u6CD5\u903B\u8F91" tabindex="-1">\u751F\u6210\u7684\u65B9\u6CD5\u903B\u8F91 <a class="header-anchor vp-link" href="#\u751F\u6210\u7684\u65B9\u6CD5\u903B\u8F91" aria-hidden="true">#</a></h3><div class="language-text"><pre><code>methods: {
  init() {
    this.model = {
      ...this.model,
      board: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
      ],
      solved: false
    }
  },

  moveTile(row, col) {
    if (this.model.solved) return;

    const tileValue = this.model.board[row][col];
    if (tileValue === 0) return;

    // \u68C0\u67E5\u4E0A\u4E0B\u5DE6\u53F3\u662F\u5426\u6709\u7A7A\u767D\u683C\u5B50
    const directions = [
      {dx: -1, dy: 0},  // \u4E0A
      {dx: 1, dy: 0},   // \u4E0B
      {dx: 0, dy: -1},  // \u5DE6
      {dx: 0, dy: 1}    // \u53F3
    ];

    for (const dir of directions) {
      const newRow = row + dir.dx;
      const newCol = col + dir.dy;

      if (newRow &gt;= 0 &amp;amp;&amp;amp; newRow &amp;lt; 3 &amp;amp;&amp;amp; newCol &gt;= 0 &amp;amp;&amp;amp; newCol &amp;lt; 3) {
        if (this.model.board[newRow][newCol] === 0) {
          // \u79FB\u52A8\u683C\u5B50
          const newBoard = JSON.parse(JSON.stringify(this.model.board));
          newBoard[newRow][newCol] = tileValue;
          newBoard[row][col] = 0;

          this.model.board = newBoard;
          this.checkSolved();
          break;
        }
      }
    }
  },

  checkSolved() {
    const solvedState = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0]
    ];

    const isEqual = JSON.stringify(this.model.board) === JSON.stringify(solvedState);
    if (isEqual) {
      this.model.solved = true;
      setTimeout(() =&gt; {
        alert(&#39;\u606D\u559C\uFF01\u62FC\u56FE\u5B8C\u6210\uFF01&#39;);
      }, 100);
    }
  },

  resetGame() {
    // \u521B\u5EFA\u521D\u59CB\u72B6\u6001
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];

    // Fisher-Yates \u6D17\u724C\u7B97\u6CD5
    for (let i = tiles.length - 1; i &gt; 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }

    // \u8F6C\u6362\u4E3A\u4E8C\u7EF4\u6570\u7EC4
    const newBoard = [];
    while (tiles.length) {
      newBoard.push(tiles.splice(0, 3));
    }

    this.model.board = newBoard;
    this.model.solved = false;
  }
}
</code></pre></div><hr><h2 id="\u7B2C\u4E8C\u6B65\uFF1A\u96C6\u6210\u5230\u5DE5\u7A0B\u9879\u76EE" tabindex="-1">\u7B2C\u4E8C\u6B65\uFF1A\u96C6\u6210\u5230\u5DE5\u7A0B\u9879\u76EE <a class="header-anchor vp-link" href="#\u7B2C\u4E8C\u6B65\uFF1A\u96C6\u6210\u5230\u5DE5\u7A0B\u9879\u76EE" aria-hidden="true">#</a></h2><ol><li><strong>\u83B7\u53D6\u57FA\u7840\u5DE5\u7A0B</strong>\uFF1A</li></ol><div class="language-bash"><pre><code><span class="token function">git</span> clone https://gitee.com/chenddcoder/esapp-public.git
</code></pre></div><ol start="2"><li><strong>\u5728IDE\u4E2D\u6253\u5F00</strong>\uFF08\u63A8\u8350WebStorm/IDEA\uFF09</li><li><strong>\u4EE3\u7801\u96C6\u6210</strong>\uFF1A <ul><li>\u9875\u9762\u4EE3\u7801 \u2192 \u63D2\u5165\u5230\xA0<code>home.vue</code>\xA0\u7684\xA0<code>&lt;ark-page&gt;</code>\xA0\u6807\u7B7E\u5185</li><li>\u65B9\u6CD5\u4EE3\u7801 \u2192 \u63D2\u5165\u5230\xA0<code>methods</code>\xA0\u5BF9\u8C61\u4E2D</li></ul></li></ol><hr><h2 id="\u7B2C\u4E09\u6B65\uFF1Aui\u4F18\u5316\u4E0E\u7126\u70B9\u63A7\u5236" tabindex="-1">\u7B2C\u4E09\u6B65\uFF1AUI\u4F18\u5316\u4E0E\u7126\u70B9\u63A7\u5236 <a class="header-anchor vp-link" href="#\u7B2C\u4E09\u6B65\uFF1Aui\u4F18\u5316\u4E0E\u7126\u70B9\u63A7\u5236" aria-hidden="true">#</a></h2><h3 id="\u95EE\u9898\u53D1\u73B0" tabindex="-1">\u95EE\u9898\u53D1\u73B0 <a class="header-anchor vp-link" href="#\u95EE\u9898\u53D1\u73B0" aria-hidden="true">#</a></h3><p>\u521D\u59CB\u6548\u679C\u57FA\u672C\u53EF\u7528\uFF0C\u4F46\u5B58\u5728\u4E24\u4E2A\u660E\u663E\u95EE\u9898\uFF1A</p><ol><li>\u62FC\u56FE\u683C\u5B50\u5C3A\u5BF8\u8FC7\u5C0F\uFF0880x80px\uFF09</li><li>\u7F3A\u5C11TV\u7AEF\u5FC5\u5907\u7684\u7126\u70B9\u63A7\u5236</li></ol><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor vp-link" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h3><p><strong>1. \u8C03\u6574\u683C\u5B50\u5C3A\u5BF8</strong>\uFF08\u4FEE\u6539style\u4E2D\u7684\u5BBD\u9AD8\u503C\uFF09\uFF1A</p><div class="language-text"><pre><code>:style=&quot;{
  width: &#39;160px&#39;,  // \u653E\u5927\u5230160px
  height: &#39;160px&#39;,
  ...
}&quot;
</code></pre></div><p><strong>2. \u6DFB\u52A0\u7126\u70B9\u63A7\u5236</strong>\uFF1A</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u4E3A\u53EF\u4EA4\u4E92\u5143\u7D20\u6DFB\u52A0\u7126\u70B9\u5C5E\u6027 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moveTile(...)<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:focusable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:enableFocusBorder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:focusScale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.05<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>3. \u8BBE\u7F6E\u521D\u59CB\u7126\u70B9</strong>\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:requestFocus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
</code></pre></div><hr><h2 id="\u6700\u7EC8\u6548\u679C\u5C55\u793A" tabindex="-1">\u6700\u7EC8\u6548\u679C\u5C55\u793A <a class="header-anchor vp-link" href="#\u6700\u7EC8\u6548\u679C\u5C55\u793A" aria-hidden="true">#</a></h2><img width="95%" src="`+u+'"><p><em>\u5B8C\u6210\u540E\u7684\u62FC\u56FE\u6E38\u620F\u754C\u9762\uFF0C\u652F\u6301\u7126\u70B9\u5BFC\u822A\u548C\u653E\u5927\u4EA4\u4E92</em></p><hr><h2 id="\u9879\u76EE\u5730\u5740\u4E0E\u6E90\u7801" tabindex="-1">\u9879\u76EE\u5730\u5740\u4E0E\u6E90\u7801 <a class="header-anchor vp-link" href="#\u9879\u76EE\u5730\u5740\u4E0E\u6E90\u7801" aria-hidden="true">#</a></h2>',37)),s("p",null,[n[1]||(n[1]=t("\u5B8C\u6574\u9879\u76EE\u5DF2\u5F00\u6E90\uFF0C\u6B22\u8FCE\u53C2\u8003\uFF1A \u{1F517}\xA0")),s("a",i,[n[0]||(n[0]=t("https://gitee.com/chenddcoder/esapp-puzzle.git")),l(e,{class:"link-icon"})])]),n[3]||(n[3]=a('<hr><h2 id="\u5F00\u53D1\u603B\u7ED3" tabindex="-1">\u5F00\u53D1\u603B\u7ED3 <a class="header-anchor vp-link" href="#\u5F00\u53D1\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u901A\u8FC7QuickTVUI\u6846\u67B6\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\uFF1A</p><ol><li><strong>\u9AD8\u6548\u5F00\u53D1</strong>\uFF1A\u5229\u7528DeepSeek\u751F\u6210\u57FA\u7840\u4EE3\u7801</li><li><strong>\u5FEB\u901F\u96C6\u6210</strong>\uFF1A10\u5206\u949F\u5B8C\u6210\u9879\u76EE\u642D\u5EFA</li><li><strong>\u7CBE\u51C6\u4F18\u5316</strong>\uFF1A\u9488\u5BF9\u6027\u89E3\u51B3TV\u7AEF\u7279\u6709\u9700\u6C42</li><li><strong>\u7126\u70B9\u63A7\u5236</strong>\uFF1A\u5B8C\u7F8E\u9002\u914D\u9065\u63A7\u5668\u64CD\u4F5C</li></ol><p>QuickTVUI\u5927\u5E45\u964D\u4F4E\u4E86TV\u7AEF\u5F00\u53D1\u95E8\u69DB\uFF0C\u5C24\u5176\u9002\u5408\u9700\u8981\u5FEB\u901F\u8FED\u4EE3\u7684\u5927\u5C4F\u5E94\u7528\u573A\u666F\u3002\u5176\u300CVue\u8BED\u6CD5+\u667A\u80FD\u751F\u6210+\u7126\u70B9\u7CFB\u7EDF\u300D\u7684\u7EC4\u5408\uFF0C\u4E3A\u4F20\u7EDFTV\u5F00\u53D1\u63D0\u4F9B\u4E86\u73B0\u4EE3\u5316\u89E3\u51B3\u65B9\u6848\u3002</p>',5))])}}});export{h as __pageData,v as default};
