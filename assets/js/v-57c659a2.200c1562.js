(self.webpackChunk=self.webpackChunk||[]).push([[8663],{3802:function(n,s,a){"use strict";a.r(s),a.d(s,{data:function(){return t}});const t={key:"v-57c659a2",path:"/guide/core/emitter.html",title:"组件通讯",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"3.x 重要更新",slug:"_3-x-重要更新",children:[]},{level:2,title:"为什么选择 mitt ？",slug:"为什么选择-mitt",children:[]},{level:2,title:"如何使用 mitt ？",slug:"如何使用-mitt",children:[{level:3,title:"引入",slug:"引入",children:[]},{level:3,title:"API",slug:"api",children:[]}]}],filePathRelative:"guide/core/emitter.md",git:{updatedTime:1625449028e3,contributors:[]}}},1261:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var t=a(6252);const e=(0,t.Wm)("h1",{id:"组件通讯",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#组件通讯","aria-hidden":"true"},"#"),(0,t.Uk)(" 组件通讯")],-1),p=(0,t.Wm)("h2",{id:"_3-x-重要更新",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#_3-x-重要更新","aria-hidden":"true"},"#"),(0,t.Uk)(" 3.x 重要更新")],-1),o=(0,t.Uk)("如果你曾经是 Vue2.x 的开发者，那么请阅读下面引用"),c={href:"https://v3.cn.vuejs.org/guide/migration/events-api.html#_3-x-%E6%9B%B4%E6%96%B0",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("官方文档"),l=(0,t.Uk)("的一段话："),r=(0,t.uE)('<blockquote><p>我们从实例中完全移除了 <code>$on</code>、<code>$off</code> 和 <code>$once</code> 方法。<code>$emit</code> 仍然包含于现有的 API 中，因为它用于触发由父组件声明式添加的事件处理函数。</p><p>在 Vue 3 中，已经不可能使用这些 API 从组件内部监听组件自己发出的事件了，该用例暂没有迁移的方法。但是该 eventHub 模式可以被替换为实现了事件触发器接口的外部库，例如 <code>mitt</code> 或 <code>tiny-emitter</code>。</p></blockquote><h2 id="为什么选择-mitt" tabindex="-1"><a class="header-anchor" href="#为什么选择-mitt" aria-hidden="true">#</a> 为什么选择 mitt ？</h2><ul><li>足够小，仅有 200bytes。</li><li>支持全部事件的监听和批量移除。</li><li>无依赖，不论是什么框架都可以直接使用。</li></ul><div class="custom-container warning"><p class="custom-container-title">严重警告</p><p>我们已经无法在项目中使用 <strong>eventBus</strong>，我们仅推荐你在<strong>特殊场合</strong>下使用 mitt，<strong>它并不是开发的常态</strong>，你一定要确保知道自己在做什么？否则你的项目将难以维护！！！</p></div><h2 id="如何使用-mitt" tabindex="-1"><a class="header-anchor" href="#如何使用-mitt" aria-hidden="true">#</a> 如何使用 mitt ？</h2>',5),u=(0,t.Uk)("在使用 mitt 前请阅读"),k={href:"https://github.com/developit/mitt",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("官方文档"),d=(0,t.Uk)("："),b=(0,t.uE)('<h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><p>脚手架默认提供一个可以直接使用的对象：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> emitter <span class="token keyword">from</span> <span class="token string">&#39;@/libs/emitter&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当然你也可以引入已经安装好的 mitt：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span>\n\n<span class="token keyword">const</span> emitter <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><p>mitt 提供了非常简单的 API，下面代码是官方演示：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// listen to an event</span>\nemitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> e <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">)</span>\n\n<span class="token comment">// listen to all events</span>\nemitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>type<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">)</span>\n\n<span class="token comment">// fire an event</span>\nemitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// clearing all events</span>\nemitter<span class="token punctuation">.</span>all<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// working with handler references:</span>\n<span class="token keyword">function</span> <span class="token function">onFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nemitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> onFoo<span class="token punctuation">)</span>   <span class="token comment">// listen</span>\nemitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> onFoo<span class="token punctuation">)</span>  <span class="token comment">// unlisten</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',8);var h={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,p,(0,t.Wm)("p",null,[o,(0,t.Wm)("a",c,[i,(0,t.Wm)(a)]),l]),r,(0,t.Wm)("p",null,[u,(0,t.Wm)("a",k,[m,(0,t.Wm)(a)]),d]),b],64)}}}}]);