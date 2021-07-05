(self.webpackChunk=self.webpackChunk||[]).push([[3218],{9397:function(s,n,a){"use strict";a.r(n),a.d(n,{data:function(){return e}});const e={key:"v-0a4b00a3",path:"/reference/store/user.html",title:"用户管理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"API",slug:"api",children:[]},{level:2,title:"State",slug:"state",children:[]},{level:2,title:"Actions",slug:"actions",children:[{level:3,title:"setUserInfo",slug:"setuserinfo",children:[]},{level:3,title:"resetUserInfo",slug:"resetuserinfo",children:[]},{level:3,title:"getUserInfo",slug:"getuserinfo",children:[]},{level:3,title:"login",slug:"login",children:[]},{level:3,title:"logout",slug:"logout",children:[]},{level:3,title:"verification",slug:"verification",children:[]}]}],filePathRelative:"reference/store/user.md",git:{updatedTime:1625449028e3,contributors:[]}}},7121:function(s,n,a){"use strict";a.r(n),a.d(n,{default:function(){return t}});const e=(0,a(6252).uE)('<h1 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h1><p><code>@/store/sys/user.ts</code></p><p>用于管理用户信息（包括 UA 查询）与登录的 store。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> useUserStore <span class="token keyword">from</span> <span class="token string">&#39;@/store/sys/user&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>userInfo</td><td>用户信息</td><td><code>UserInfo</code></td><td>-</td></tr><tr><td>ua</td><td>用户 UA</td><td><code>UaResult</code></td><td>-</td></tr></tbody></table><p>UserInfo:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  roles<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>UaResult:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IResult <span class="token keyword">as</span> UaResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ua-parser-js&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h2><h3 id="setuserinfo" tabindex="-1"><a class="header-anchor" href="#setuserinfo" aria-hidden="true">#</a> setUserInfo</h3><p>设置用户信息，并将 id 与 token 保存在 LocalStorage 中。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>userStore<span class="token punctuation">.</span><span class="token function">setUserInfo</span><span class="token punctuation">(</span>payload<span class="token operator">:</span> UserInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>LocalStorage:</p><table><thead><tr><th>KEY</th><th>说明</th></tr></thead><tbody><tr><td>USER_ID</td><td>用户 ID</td></tr><tr><td>ACCESS_TOKEN</td><td>服务器返回的 token</td></tr></tbody></table><p>发送请求时，ACCESS_TOKEN 会附带在请求头上，前提是你需要使用脚手架封装的 axios。</p><h3 id="resetuserinfo" tabindex="-1"><a class="header-anchor" href="#resetuserinfo" aria-hidden="true">#</a> resetUserInfo</h3><p>重置用户信息，退出登录时会调用此方法。</p><h3 id="getuserinfo" tabindex="-1"><a class="header-anchor" href="#getuserinfo" aria-hidden="true">#</a> getUserInfo</h3><p>获取用户信息，会从 LocalStorage 获取用户 ID，查询逻辑需要你自己编辑。</p><h3 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h3><p>用户登录，登录逻辑需要自己编写。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>userStore<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> password<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="logout" tabindex="-1"><a class="header-anchor" href="#logout" aria-hidden="true">#</a> logout</h3><p>退出登录，会清掉用户信息。</p><h3 id="verification" tabindex="-1"><a class="header-anchor" href="#verification" aria-hidden="true">#</a> verification</h3><p>如果有独立验证 token 的接口可以使用此方法校验。</p>',29);var t={render:function(s,n){return e}}}}]);