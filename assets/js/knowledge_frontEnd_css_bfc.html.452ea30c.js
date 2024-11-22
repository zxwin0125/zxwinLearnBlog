"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[583],{3386:(i,s)=>{s.A=(i,s)=>{const l=i.__vccOpts||i;for(const[i,a]of s)l[i]=a;return l}},5877:(i,s,l)=>{l.r(s),l.d(s,{comp:()=>t,data:()=>e});var a=l(6254);const n={},t=(0,l(3386).A)(n,[["render",function(i,s){const l=(0,a.g2)("font");return(0,a.uX)(),(0,a.CE)("div",null,[s[14]||(s[14]=(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"我们 CSS 深入一个概念 —— BFC"),(0,a.Lk)("li",null,[(0,a.eW)("BFC 是前端面试中的一个超级热点，今日头条某部门曾经就问过： "),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.eW)("请解释一下 "),(0,a.Lk)("strong",null,"BFC 是什么？"),(0,a.eW)(" 回答这个问题并不困难，但是可以继续追问： "),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.Lk)("strong",null,"BFC 会引起哪些布局现象？")])])])])])],-1)),s[15]||(s[15]=(0,a.Lk)("h3",{id:"bfc-是什么",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#bfc-是什么"},[(0,a.Lk)("span",null,"BFC 是什么")])],-1)),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[s[5]||(s[5]=(0,a.eW)("简单来说，BFC 就是： ")),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[s[1]||(s[1]=(0,a.eW)("BFC 是 Block Formatting Context 的简写，可以直接翻译成「")),(0,a.Lk)("strong",null,[(0,a.bF)(l,{color:"red"},{default:(0,a.k6)((()=>s[0]||(s[0]=[(0,a.eW)("块级格式化上下文")]))),_:1})]),s[2]||(s[2]=(0,a.eW)("」"))]),s[3]||(s[3]=(0,a.Lk)("li",null,[(0,a.Lk)("strong",null,"它会创建一个特殊的区域，在这个区域中，只有 block box 参与布局")],-1)),s[4]||(s[4]=(0,a.Lk)("li",null,[(0,a.eW)("而 BFC 的一套特点和规则就规定了在这个特殊的区域中 "),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"如何进行布局"),(0,a.Lk)("li",null,"如何进行定位"),(0,a.Lk)("li",null,"区域内元素的相互关系和相互作用"),(0,a.Lk)("li",null,"并且这个特殊的区域不受外界影响")])],-1))])]),(0,a.Lk)("li",null,[s[7]||(s[7]=(0,a.eW)("上面提到了 block box 的概念，")),(0,a.Lk)("strong",null,[(0,a.bF)(l,{color:"red"},{default:(0,a.k6)((()=>s[6]||(s[6]=[(0,a.eW)("block box 是指 display 属性为 block、list-item、table 的元素")]))),_:1})])]),(0,a.Lk)("li",null,[s[10]||(s[10]=(0,a.eW)("顺便插一个问题：还知道其他哪些 box 类型呢？ ")),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[s[9]||(s[9]=(0,a.eW)("相应地，")),(0,a.Lk)("strong",null,[(0,a.bF)(l,{color:"red"},{default:(0,a.k6)((()=>s[8]||(s[8]=[(0,a.eW)("我们有 inline box，它是指 display 属性为 inline、inline-block、inline-table 的元素")]))),_:1})])])])])]),s[16]||(s[16]=(0,a.Lk)("h3",{id:"如何形成-bfc",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#如何形成-bfc"},[(0,a.Lk)("span",null,"如何形成 BFC")])],-1)),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[s[12]||(s[12]=(0,a.eW)("那么 ")),(0,a.Lk)("strong",null,[(0,a.bF)(l,{color:"red"},{default:(0,a.k6)((()=>s[11]||(s[11]=[(0,a.eW)("什么样的情况会创建一个 BFC 呢？")]))),_:1})]),s[13]||(s[13]=(0,a.Fv)(" MDN 总结如下： <ul><li>根元素或其他包含它的元素</li><li>浮动元素 (元素的 float 不是 none)</li><li>绝对定位元素 (元素具有 position 为 absolute 或 fixed)</li><li>内联块 (元素具有 display: inline-block)</li><li>表格单元格 (元素具有 display: table-cell，HTML 表格单元格默认属性)</li><li>表格标题 (元素具有 display: table-caption, HTML 表格标题默认属性)</li><li>具有 overflow 且值不是 visible 的块元素</li><li>display: flow-root 的元素</li><li>column-span: all 的元素</li></ul>",2))])]),s[17]||(s[17]=(0,a.Fv)('<h3 id="bfc-决定了什么" tabindex="-1"><a class="header-anchor" href="#bfc-决定了什么"><span>BFC 决定了什么</span></a></h3><ul><li>我们上面谈到了 BFC 的一套规则，那么这些<strong>规则都有哪些呢？</strong><ul><li>内部的 box 将会独占宽度，且在垂直方向，一个接一个排列</li><li>box 垂直方向的间距由 margin 属性决定，但是同一个 BFC 的两个相邻 box 的 margin 会出现边距折叠现象</li><li>每个 box 水平方向上左边缘，与 BFC 左边缘相对齐，即使存在浮动也是如此</li><li>BFC 区域不会与浮动元素重叠，而是会依次排列</li><li>BFC 区域内是一个独立的渲染容器，容器内元素和 BFC 区域外元素不会形成任何干扰</li><li>浮动元素的高度也参与到 BFC 高度的计算当中</li></ul></li><li>从这些规则中，我们至少能总结出一些<strong>关键要点</strong>，比如： <ul><li>边距折叠</li><li>清除浮动</li><li>自适应多栏布局</li></ul></li><li>这也是我选取 BFC 这个概念来剖析的原因，理解了 BFC，这些常见、常考知识点我们都可以融会贯通，具体来看下下面的场景</li></ul><h3 id="bfc-实战应用" tabindex="-1"><a class="header-anchor" href="#bfc-实战应用"><span>BFC 实战应用</span></a></h3><h4 id="例题-1" tabindex="-1"><a class="header-anchor" href="#例题-1"><span>例题 1</span></a></h4><ul><li>给出如下代码：</li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">\tbody</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\twidth: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">600</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tposition: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">relative</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">\t.left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\twidth: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\theight: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">150</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tfloat: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tbackground: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">\t.right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\theight: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tbackground: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;left&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;right&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>得到布局如图：</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/01.png" alt="示意图" width="500" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><ul><li>请在不修改已有内容情况下，加入样式，实现自适应（.left 宽度固定，.right 占满剩下宽度）两栏布局</li><li>来思考： <ul><li>根据 BFC 布局规则： <ul><li>「<strong>每个 box 水平方向上左边缘，与 BFC 左边缘相对齐，即使存在浮动也是如此</strong>」，因此 .left 和 .right 的左边相接触</li><li>出现如此布局结果并不意外</li></ul></li></ul></li><li>同时，再想想 BFC 布局规则： <ul><li>「<strong>BFC 区域不会与浮动元素重叠，而是会依次排列</strong>」</li><li>因此可以使 .right 形成 BFC，来实现自适应两栏布局</li><li>如何形成 BFC 前面已经做过介绍了，于是添加：</li></ul></li></ul><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\toverflow: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">hidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>就可以得到：</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/02.png" alt="示意图" width="500" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><ul><li>当然，这种布局可以用更先进的 flex 或者 grid 手段解决，但是对于 BFC 这些 CSS 基础知识，同样要做到了然于胸</li></ul><h4 id="例题-2" tabindex="-1"><a class="header-anchor" href="#例题-2"><span>例题 2</span></a></h4><ul><li>看代码：</li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">\t.root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tborder: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\twidth: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">\t.child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tborder: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\twidth: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\theight: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tfloat: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;root&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;child child1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;child child2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先来回答第一个问：.root 的高度是多少？ <ul><li>事实上，因为 .child 为浮动元素，因此造成了「<strong>高度塌陷</strong>」现象，.root 的高度为 0</li></ul></li></ul><figure><img src="https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/03.png" alt="示意图" width="400" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><ul><li>那么如何解决「高度塌陷」问题呢？ <ul><li>想想 BFC 规则： <ul><li>「<strong>浮动元素的高度也参与到 BFC 高度的计算当中</strong>」</li><li>因此使 .root 形成 BFC，就能解决问题：</li></ul></li></ul></li></ul><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\toverflow: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">hidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/04.png" alt="示意图" width="400" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><ul><li>看此时高度已经被你撑开了</li></ul><h4 id="例题-3" tabindex="-1"><a class="header-anchor" href="#例题-3"><span>例题 3</span></a></h4><ul><li>代码：</li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">\tp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tcolor: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tbackground: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\twidth: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tline-height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\ttext-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tmargin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">40</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;paragraph 1&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;paragraph 2&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先回答问题：两段之间的垂直距离为多少？</li><li>想想 BFC 规则： <ul><li>「<strong>box 垂直方向的间距由 margin 属性决定，但是同一个BFC 的两个相邻 box 的 margin 会出现边距折叠现象</strong>」</li><li>事实上，因为边距折叠现象，答案为 40px</li></ul></li><li>那么如何解决这个问题呢？ <ul><li>最简单地，我们可以在 p 标签再包裹一个元素，并触发该元素形成一个BFC</li><li>那么这两个 p 标签，不再属于同一个 BFC，从而解决问题</li></ul></li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">\tp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tcolor: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tbackground: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\twidth: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">400</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tline-height: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\ttext-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\tmargin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">40</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">\t.wraper</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\toverflow: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">hidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t}</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;paragraph 1&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;wraper&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;paragraph 2&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/05.png" alt="示意图" width="400" tabindex="0" loading="lazy"><figcaption>示意图</figcaption></figure><ul><li>总结：通过分析 BFC 是什么、如何形成、布局规则，融会贯通了 CSS 当中很多关键问题</li><li>也许不少开发者能够解决「边距折叠」、「多栏自适应」、「高度塌陷」等问题，但是并不能说出解决问题的原理</li></ul>',29))])}]]),e=JSON.parse('{"path":"/knowledge/frontEnd/css/bfc.html","title":"BFC 背后的布局问题","lang":"zh-CN","frontmatter":{"title":"BFC 背后的布局问题","date":"2024-08-13T00:00:00.000Z","category":["CSS3"],"tag":["CSS BFC"],"order":1,"description":"我们 CSS 深入一个概念 —— BFC BFC 是前端面试中的一个超级热点，今日头条某部门曾经就问过： 请解释一下 BFC 是什么？ 回答这个问题并不困难，但是可以继续追问： BFC 会引起哪些布局现象？ BFC 是什么 简单来说，BFC 就是： BFC 是 Block Formatting Context 的简写，可以直接翻译成「」 它会创建一个特...","head":[["meta",{"property":"og:url","content":"https://www.zxwin0125.top/knowledge/frontEnd/css/bfc.html"}],["meta",{"property":"og:site_name","content":"欢迎来到我的Blog"}],["meta",{"property":"og:title","content":"BFC 背后的布局问题"}],["meta",{"property":"og:description","content":"我们 CSS 深入一个概念 —— BFC BFC 是前端面试中的一个超级热点，今日头条某部门曾经就问过： 请解释一下 BFC 是什么？ 回答这个问题并不困难，但是可以继续追问： BFC 会引起哪些布局现象？ BFC 是什么 简单来说，BFC 就是： BFC 是 Block Formatting Context 的简写，可以直接翻译成「」 它会创建一个特..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/01.png =500x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T06:55:57.000Z"}],["meta",{"property":"article:tag","content":"CSS BFC"}],["meta",{"property":"article:published_time","content":"2024-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T06:55:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BFC 背后的布局问题\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/01.png =500x\\",\\"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/02.png =500x\\",\\"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/03.png =400x\\",\\"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/04.png =400x\\",\\"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/image/CSS/05.png =400x\\"],\\"datePublished\\":\\"2024-08-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T06:55:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三金\\",\\"url\\":\\"https://www.zxwin0125.top\\"}]}"]]},"headers":[{"level":3,"title":"BFC 是什么","slug":"bfc-是什么","link":"#bfc-是什么","children":[]},{"level":3,"title":"如何形成 BFC","slug":"如何形成-bfc","link":"#如何形成-bfc","children":[]},{"level":3,"title":"BFC 决定了什么","slug":"bfc-决定了什么","link":"#bfc-决定了什么","children":[]},{"level":3,"title":"BFC 实战应用","slug":"bfc-实战应用","link":"#bfc-实战应用","children":[]}],"git":{"createdTime":1732172157000,"updatedTime":1732172157000,"contributors":[{"name":"zxwin0125","email":"zxwin_0125@163.com","commits":1}]},"readingTime":{"minutes":4.83,"words":1448},"filePathRelative":"knowledge/frontEnd/css/bfc.md","localizedDate":"2024年8月13日","excerpt":"<ul>\\n<li>我们 CSS 深入一个概念 —— BFC</li>\\n<li>BFC 是前端面试中的一个超级热点，今日头条某部门曾经就问过：\\n<ul>\\n<li>请解释一下 <strong>BFC 是什么？</strong> 回答这个问题并不困难，但是可以继续追问：\\n<ul>\\n<li><strong>BFC 会引起哪些布局现象？</strong></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n<h3>BFC 是什么</h3>\\n<ul>\\n<li>简单来说，BFC 就是：\\n<ul>\\n<li>BFC 是 Block Formatting Context 的简写，可以直接翻译成「<strong></strong>」</li>\\n<li><strong>它会创建一个特殊的区域，在这个区域中，只有 block box 参与布局</strong></li>\\n<li>而 BFC 的一套特点和规则就规定了在这个特殊的区域中\\n<ul>\\n<li>如何进行布局</li>\\n<li>如何进行定位</li>\\n<li>区域内元素的相互关系和相互作用</li>\\n<li>并且这个特殊的区域不受外界影响</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>上面提到了 block box 的概念，<strong></strong></li>\\n<li>顺便插一个问题：还知道其他哪些 box 类型呢？\\n<ul>\\n<li>相应地，<strong></strong></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}')}}]);