"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[542],{3386:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,n]of s)e[i]=n;return e}},6856:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>t,data:()=>a});var n=e(6254);const l={},t=(0,e(3386).A)(l,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<blockquote><p>目前在前端项目中除了 JavaScript 代码是需要被 lint 之外，CSS 代码同样也是需要去被 lint <br> 对于 CSS 代码的 link 操作一般都会去使用 StyleLink 的工具，与 ESLint 基本上是一致的</p></blockquote><h2 id="stylelint-介绍" tabindex="-1"><a class="header-anchor" href="#stylelint-介绍"><span>StyleLint 介绍</span></a></h2><ul><li>提供默认的代码检查规则</li><li>提供 CLI 工具，快速调用</li><li>通过插件支持 Sass Less PostCSS</li><li>支持 Gulp 或 Webpack 集成</li></ul><h2 id="stylelint-使用" tabindex="-1"><a class="header-anchor" href="#stylelint-使用"><span>StyleLint 使用</span></a></h2><ul><li>安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stylelint</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>StyleLint 的内部并没有提供任何可用的共享配置，所以需要安装 standard 插件</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stylelint-config-standard</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>创建 .stylelintrc.js 配置文件，并修改 extends 字段</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// .stylelintrc.js</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  extends</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;stylelint-config-standard&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行 <code>npx stylelint ./index.css</code>，加上参数 --fix 可以自动修复部分格式问题</li></ul><h3 id="sass-代码校验" tabindex="-1"><a class="header-anchor" href="#sass-代码校验"><span>Sass 代码校验</span></a></h3><ul><li>安装 stylelint-config-sass-guidelines 插件</li><li>修改 .stylelintrc.js 文件中的 extends 为数组，添加 sass 插件</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// .stylelintrc.js</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  extends</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;stylelint-config-standard&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;stylelint-config-sass-guidelines&#39;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',14)]))}]]),a=JSON.parse('{"path":"/knowledge/frontEnd/engineering/normalize/styleLint.html","title":"StyleLint","lang":"zh-CN","frontmatter":{"title":"StyleLint","order":3,"description":"目前在前端项目中除了 JavaScript 代码是需要被 lint 之外，CSS 代码同样也是需要去被 lint 对于 CSS 代码的 link 操作一般都会去使用 StyleLink 的工具，与 ESLint 基本上是一致的 StyleLint 介绍 提供默认的代码检查规则 提供 CLI 工具，快速调用 通过插件支持 Sass Less PostCS...","head":[["meta",{"property":"og:url","content":"https://www.zxwin0125.top/knowledge/frontEnd/engineering/normalize/styleLint.html"}],["meta",{"property":"og:site_name","content":"欢迎来到三金的Blog！"}],["meta",{"property":"og:title","content":"StyleLint"}],["meta",{"property":"og:description","content":"目前在前端项目中除了 JavaScript 代码是需要被 lint 之外，CSS 代码同样也是需要去被 lint 对于 CSS 代码的 link 操作一般都会去使用 StyleLink 的工具，与 ESLint 基本上是一致的 StyleLint 介绍 提供默认的代码检查规则 提供 CLI 工具，快速调用 通过插件支持 Sass Less PostCS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-04T07:59:25.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-04T07:59:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"StyleLint\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-04T07:59:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三金\\",\\"url\\":\\"https://www.zxwin0125.top\\"}]}"]]},"headers":[{"level":2,"title":"StyleLint 介绍","slug":"stylelint-介绍","link":"#stylelint-介绍","children":[]},{"level":2,"title":"StyleLint 使用","slug":"stylelint-使用","link":"#stylelint-使用","children":[{"level":3,"title":"Sass 代码校验","slug":"sass-代码校验","link":"#sass-代码校验","children":[]}]}],"git":{"createdTime":1738655965000,"updatedTime":1738655965000,"contributors":[{"name":"zxwin0125","email":"zxwin_0125@163.com","commits":1}]},"readingTime":{"minutes":0.78,"words":233},"filePathRelative":"knowledge/frontEnd/engineering/normalize/styleLint.md","localizedDate":"2025年2月4日","excerpt":"<blockquote>\\n<p>目前在前端项目中除了 JavaScript 代码是需要被 lint 之外，CSS 代码同样也是需要去被 lint <br>\\n对于 CSS 代码的 link 操作一般都会去使用 StyleLink 的工具，与 ESLint 基本上是一致的</p>\\n</blockquote>","autoDesc":true}')}}]);