(self.webpackChunk=self.webpackChunk||[]).push([[5276],{3518:function(e,s,a){"use strict";a.r(s),a.d(s,{data:function(){return n}});const n={key:"v-c9e498e2",path:"/reference/store/menu.html",title:"菜单管理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"API",slug:"api",children:[]},{level:2,title:"State",slug:"state",children:[]},{level:2,title:"Actions",slug:"actions",children:[{level:3,title:"setMenu",slug:"setmenu",children:[]},{level:3,title:"setSearchKeyword",slug:"setsearchkeyword",children:[]}]},{level:2,title:"Getters",slug:"getters",children:[{level:3,title:"routesPool",slug:"routespool",children:[]},{level:3,title:"searchRoutes",slug:"searchroutes",children:[]}]}],filePathRelative:"reference/store/menu.md",git:{updatedTime:162511603e4,contributors:[]}}},6782:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return t}});const n=(0,a(6252).uE)('<h1 id="菜单管理" tabindex="-1"><a class="header-anchor" href="#菜单管理" aria-hidden="true">#</a> 菜单管理</h1><p><code>@/store/sys/menu.ts</code></p><p>用于管理菜单的 store。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> useMenuStore <span class="token keyword">from</span> <span class="token string">&#39;@/store/sys/menu&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> menuStore <span class="token operator">=</span> <span class="token function">useMenuStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menu</td><td>菜单信息</td><td>RouteRecordRaw[]</td><td>frameIn（来源于 routes）</td></tr><tr><td>searchKeyword</td><td>搜索的关键词</td><td>string</td><td>&#39;&#39;</td></tr></tbody></table><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h2><h3 id="setmenu" tabindex="-1"><a class="header-anchor" href="#setmenu" aria-hidden="true">#</a> setMenu</h3><p>设置菜单。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>menuStore<span class="token punctuation">.</span><span class="token function">setMenu</span><span class="token punctuation">(</span>menus<span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="setsearchkeyword" tabindex="-1"><a class="header-anchor" href="#setsearchkeyword" aria-hidden="true">#</a> setSearchKeyword</h3><p>设置模糊搜索关键词。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>menuStore<span class="token punctuation">.</span><span class="token function">setSearchKeyword</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h2><h3 id="routespool" tabindex="-1"><a class="header-anchor" href="#routespool" aria-hidden="true">#</a> routesPool</h3><p>相比于 <code>&lt;RouteRecordRaw&gt;</code> 类型增加了两个新的属性：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PoolRouteRecordRow</span> <span class="token keyword">extends</span> <span class="token class-name">_RouteRecordBase</span> <span class="token punctuation">{</span>\n  fullTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  fullPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>fullTitle</td><td>根据路由父子关系合并后的标题</td><td>string</td></tr><tr><td>fullPath</td><td>根据路由父子关系合并后的路径</td><td>string</td></tr></tbody></table><h3 id="searchroutes" tabindex="-1"><a class="header-anchor" href="#searchroutes" aria-hidden="true">#</a> searchRoutes</h3><p>基于 routesPool 进行的模糊查询，搜索的结果也是一维数组，类型与 routesPool 一致。</p>',21);var t={render:function(e,s){return n}}}}]);