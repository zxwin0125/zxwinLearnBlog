"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6720],{3386:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,l]of s)a[i]=l;return a}},2108:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>t});var l=a(6254);const n={},e=(0,a(3386).A)(n,[["render",function(i,s){return(0,l.uX)(),(0,l.CE)("div",null,s[0]||(s[0]=[(0,l.Fv)('<h2 id="vue-js-基础结构" tabindex="-1"><a class="header-anchor" href="#vue-js-基础结构"><span>Vue.js 基础结构</span></a></h2><ul><li>这是最基础一段 Vue 代码，在创建 Vue 实例的时候，传入了 el 和 data 选项</li><li>Vue 内部会把 data 中的数据填充到 el 指向的模版中，并把模版渲染到浏览器</li></ul><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;名字：{{ person.name }}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;年龄：{{ person.age }}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://csn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#app&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      person</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;张三&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  })</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再来看一段代码，这段代码执行效果和上面一样</li><li>这里使用 render 选项和 $mount 方法</li><li>我们使用 Vue-cli 脚手架创建的项目和这段代码结构是一样的</li></ul><div class="hint-container important"><p class="hint-container-title">重要</p><p>render 方法接收一个参数，这个参数是 h 函数</p><ul><li>h 函数的作用是创建虚拟 DOM</li><li>render 方法把 h 函数创建的虚拟 DOM 返回</li><li>$mount 方法把虚拟 DOM 转换成真实 DOM 渲染到浏览器</li></ul></div><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://csn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      person</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;张三&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        age</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    render</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;div&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, [</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;p&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;名字：&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;p&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;年龄：&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75;">age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ])</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$mount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;#app&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-js-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-js-生命周期"><span>Vue.js 生命周期</span></a></h2><div class="hint-container important"><p class="hint-container-title">重要</p><p>在创建 Vue 实例的过程中会发生很多事情</p><ol><li>初始化事件、生命周期相关的成员，包括 h 函数都是在这个位置初始化的</li><li>触发生命周期中 beforeCreate 钩子函数</li><li>初始化注入操作，把 props、data、methods 等成员注入到 Vue 的实例上</li><li>触发 created 钩子函数，可以访问到 props、data、methods 等成员</li></ol></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>创建 Vue 实例过后，进行模版编译</p><ol><li>判断选项中是否设置了 el 选项，如果没有设置 el 选项，就调用 $mount 方法，$mount 方法就是把 el 转换为模版 template，之后把模版编译成 render 函数</li><li>判断是否设置模版 template，如果没有设置模版 template，会把 el 元素的外层 HTML 作为模版，然后把 template 模版编译到渲染函数中，渲染函数就是用来生成虚拟 DOM 的</li></ol></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>如何挂载 DOM</p><ol><li>触发 beforeMount 钩子函数，DOM 挂载之前执行的钩子函数，这个函数中无法获取新元素的内容</li><li>准备挂载 DOM，把新的结构渲染到页面上，再触发 mounted 钩子函数，这个函数可以访问到新的 DOM 结构中的内容，DOM 挂载完毕</li></ol></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>更新 DOM</p><ol><li>DOM 挂载完毕后，修改 data 中成员的时候，触发 beforeUpdate 钩子函数，在这个函数中，如果直接访问浏览器中的渲染内容，还是上一次的结果</li><li>进行新旧虚拟 DOM 对比，把差异重新渲染到浏览器中</li><li>触发 updated 钩子函数，这个函数中可以获取页面最新的结果</li></ol></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>销毁 DOM</p><ol><li>调用 vm.$destroy 这个函数，触发 beforeDestroy 钩子函数</li><li>执行一些清理工作</li><li>执行 destroyed 钩子函数</li></ol></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果使用单文件组件的话，模版编译是在打包或构建的时候完成的，不在运行的时候处理模版编译的工作<br> Vue 始终推荐提前去编译模版，性能会更好</p></div><figure><img src="https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/img/Frame/Vue/01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="vue-js-语法和概念" tabindex="-1"><a class="header-anchor" href="#vue-js-语法和概念"><span>Vue.js 语法和概念</span></a></h2><h3 id="_1-差值表达式" tabindex="-1"><a class="header-anchor" href="#_1-差值表达式"><span>1. 差值表达式</span></a></h3><blockquote><p>可以通过 <code>{{}}</code> 把 data 中的成员显示在模版中的任何位置</p></blockquote><ul><li>如果内容中有 HTML 字符串，差值表达式会把内容解析为普通文本，HTML 内容会被转译</li><li>如果想把内容作为 HTML 输出，可以使用 <code>v-html</code> 指令</li></ul><h3 id="_2-指令" tabindex="-1"><a class="header-anchor" href="#_2-指令"><span>2. 指令</span></a></h3><blockquote><p>Vue 中的内置指令有 14 个，可以帮助我们做很多事情</p></blockquote><ul><li>如果指令不满足需求，可以创建自定义指令，在自定义指令中操作 DOM <ul><li>例如，让文本框在页面打开的时候获取焦点</li></ul></li></ul><h3 id="_3-计算属性和侦听器" tabindex="-1"><a class="header-anchor" href="#_3-计算属性和侦听器"><span>3. 计算属性和侦听器</span></a></h3><ul><li>当模版中有太多的逻辑需要处理的时候，推荐使用计算属性，计算属性的结果会被缓存，下次再访问该计算属性的时候，会从缓存中获取相应的结果，提高性能</li><li>如果需要监听数据的变化，做一些比较复杂的操作，可以使用侦听器 <ul><li>例如，异步操作、开销比较大的操作</li></ul></li></ul><h3 id="_4-class-和-style-绑定" tabindex="-1"><a class="header-anchor" href="#_4-class-和-style-绑定"><span>4. class 和 style 绑定</span></a></h3><blockquote><p>当绑定样式的时候，可以使用 class 和 style</p></blockquote><ul><li>分别可以绑定数组和对象，实际开发中，推荐使用 class 绑定，让样式可以复用</li></ul><h3 id="_5-条件渲染-列表渲染" tabindex="-1"><a class="header-anchor" href="#_5-条件渲染-列表渲染"><span>5. 条件渲染/列表渲染</span></a></h3><blockquote><p>可以通过 <code>v-if</code> 或者 <code>v-show</code> 控制元素的显示和隐藏，<code>v-for</code> 进行列表渲染</p></blockquote><ul><li><code>v-if</code> 是如果条件为 false 时，不输出元素，<code>v-show</code> 是元素会渲染到页面，通过样式控制其隐藏</li><li>使用<code>v-for</code> 进行列表渲染时，推荐在循环项中设置一个 key，用来跟踪每个节点的身份，让每一项都能最大程度的复用，提高性能</li></ul><h3 id="_6-表单输入绑定" tabindex="-1"><a class="header-anchor" href="#_6-表单输入绑定"><span>6. 表单输入绑定</span></a></h3><ul><li>使用 v-model 绑定表单元素的时候，负责监听用户的输入事件以及更新数据，也就是双向绑定</li></ul><h3 id="_7-组件" tabindex="-1"><a class="header-anchor" href="#_7-组件"><span>7. 组件</span></a></h3><blockquote><p>组件就是可复用的 Vue 实例</p></blockquote><ul><li>一个组件封装了 HTML、CSS、JavaScript，可以实现页面上的一个功能区域，可以无限次的被复用</li></ul><h3 id="_8-插槽" tabindex="-1"><a class="header-anchor" href="#_8-插槽"><span>8. 插槽</span></a></h3><blockquote><p>插槽可以在一个自定义组件中挖一个坑，在使用这个组件的时候去填坑，目的是让组件更灵活</p></blockquote><ul><li>例如，vue-router 中的 router-link 这个组件里面的文本是在外部使用的时候传递进来的，内部就是使用插槽来进行占位的</li></ul><h3 id="_9-插件" tabindex="-1"><a class="header-anchor" href="#_9-插件"><span>9. 插件</span></a></h3><blockquote><p>Vue 的插件机制，vue-router、vuex 都是插件</p></blockquote><h3 id="_10-混入-mixin" tabindex="-1"><a class="header-anchor" href="#_10-混入-mixin"><span>10. 混入 mixin</span></a></h3><blockquote><p>如果多个组件都有相同选项，就可以使用混入的方式，把相同的选项进行合并进行组件复用</p></blockquote><h3 id="_11-深入响应式原理" tabindex="-1"><a class="header-anchor" href="#_11-深入响应式原理"><span>11. 深入响应式原理</span></a></h3><h3 id="_12-不同构建版本的-vue" tabindex="-1"><a class="header-anchor" href="#_12-不同构建版本的-vue"><span>12. 不同构建版本的 Vue</span></a></h3><blockquote><p>Vue 打包之后会生成不同版本的 Vue，支持不同的模块化方式，以及带编译器和不带编译器版本的 Vue</p></blockquote>',44)]))}]]),t=JSON.parse('{"path":"/knowledge/frontEnd/frame/vue/vueBasics.html","title":"基础回顾","lang":"zh-CN","frontmatter":{"title":"基础回顾","order":1,"description":"Vue.js 基础结构 这是最基础一段 Vue 代码，在创建 Vue 实例的时候，传入了 el 和 data 选项 Vue 内部会把 data 中的数据填充到 el 指向的模版中，并把模版渲染到浏览器 再来看一段代码，这段代码执行效果和上面一样 这里使用 render 选项和 $mount 方法 我们使用 Vue-cli 脚手架创建的项目和这段代码结构...","head":[["meta",{"property":"og:url","content":"https://www.zxwin0125.top/knowledge/frontEnd/frame/vue/vueBasics.html"}],["meta",{"property":"og:site_name","content":"欢迎来到三金的Blog！"}],["meta",{"property":"og:title","content":"基础回顾"}],["meta",{"property":"og:description","content":"Vue.js 基础结构 这是最基础一段 Vue 代码，在创建 Vue 实例的时候，传入了 el 和 data 选项 Vue 内部会把 data 中的数据填充到 el 指向的模版中，并把模版渲染到浏览器 再来看一段代码，这段代码执行效果和上面一样 这里使用 render 选项和 $mount 方法 我们使用 Vue-cli 脚手架创建的项目和这段代码结构..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/img/Frame/Vue/01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-21T07:02:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-21T07:02:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础回顾\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zxwin0125/image-repo/img/Frame/Vue/01.png\\"],\\"dateModified\\":\\"2024-12-21T07:02:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三金\\",\\"url\\":\\"https://www.zxwin0125.top\\"}]}"]]},"headers":[{"level":2,"title":"Vue.js 基础结构","slug":"vue-js-基础结构","link":"#vue-js-基础结构","children":[]},{"level":2,"title":"Vue.js 生命周期","slug":"vue-js-生命周期","link":"#vue-js-生命周期","children":[]},{"level":2,"title":"Vue.js 语法和概念","slug":"vue-js-语法和概念","link":"#vue-js-语法和概念","children":[{"level":3,"title":"1. 差值表达式","slug":"_1-差值表达式","link":"#_1-差值表达式","children":[]},{"level":3,"title":"2. 指令","slug":"_2-指令","link":"#_2-指令","children":[]},{"level":3,"title":"3. 计算属性和侦听器","slug":"_3-计算属性和侦听器","link":"#_3-计算属性和侦听器","children":[]},{"level":3,"title":"4. class 和 style 绑定","slug":"_4-class-和-style-绑定","link":"#_4-class-和-style-绑定","children":[]},{"level":3,"title":"5. 条件渲染/列表渲染","slug":"_5-条件渲染-列表渲染","link":"#_5-条件渲染-列表渲染","children":[]},{"level":3,"title":"6. 表单输入绑定","slug":"_6-表单输入绑定","link":"#_6-表单输入绑定","children":[]},{"level":3,"title":"7. 组件","slug":"_7-组件","link":"#_7-组件","children":[]},{"level":3,"title":"8. 插槽","slug":"_8-插槽","link":"#_8-插槽","children":[]},{"level":3,"title":"9. 插件","slug":"_9-插件","link":"#_9-插件","children":[]},{"level":3,"title":"10. 混入 mixin","slug":"_10-混入-mixin","link":"#_10-混入-mixin","children":[]},{"level":3,"title":"11. 深入响应式原理","slug":"_11-深入响应式原理","link":"#_11-深入响应式原理","children":[]},{"level":3,"title":"12. 不同构建版本的 Vue","slug":"_12-不同构建版本的-vue","link":"#_12-不同构建版本的-vue","children":[]}]}],"git":{"createdTime":1734764565000,"updatedTime":1734764565000,"contributors":[{"name":"zxwin0125","email":"zxwin_0125@163.com","commits":1}]},"readingTime":{"minutes":5.1,"words":1530},"filePathRelative":"knowledge/frontEnd/frame/vue/vueBasics.md","localizedDate":"2024年12月21日","excerpt":"<h2>Vue.js 基础结构</h2>\\n<ul>\\n<li>这是最基础一段 Vue 代码，在创建 Vue 实例的时候，传入了 el 和 data 选项</li>\\n<li>Vue 内部会把 data 中的数据填充到 el 指向的模版中，并把模版渲染到浏览器</li>\\n</ul>","autoDesc":true}')}}]);