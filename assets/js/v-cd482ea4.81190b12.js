(self.webpackChunk=self.webpackChunk||[]).push([[5281],{1699:function(n,a,s){"use strict";s.r(a),s.d(a,{data:function(){return e}});const e={key:"v-cd482ea4",path:"/guide/core/request.html",title:"HTTP",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"异步请求封装",slug:"异步请求封装",children:[{level:3,title:"接口定义",slug:"接口定义",children:[]},{level:3,title:"配置接口地址",slug:"配置接口地址",children:[]},{level:3,title:"响应拦截",slug:"响应拦截",children:[]}]},{level:2,title:"跨域问题",slug:"跨域问题",children:[{level:3,title:"CORS",slug:"cors",children:[]},{level:3,title:"本地代理",slug:"本地代理",children:[]}]},{level:2,title:"Mock 数据",slug:"mock-数据",children:[]}],filePathRelative:"guide/core/request.md",git:{updatedTime:1625449028e3,contributors:[]}}},4481:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return h}});var e=s(6252);const p=(0,e.Wm)("h1",{id:"http",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#http","aria-hidden":"true"},"#"),(0,e.Uk)(" HTTP")],-1),t=(0,e.Wm)("h2",{id:"异步请求封装",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#异步请求封装","aria-hidden":"true"},"#"),(0,e.Uk)(" 异步请求封装")],-1),r=(0,e.Uk)("脚手架推荐使用 "),l=(0,e.Wm)("code",null,"@/libs/request.ts",-1),c=(0,e.Uk)(" 发送请求，request.ts 是基于 "),i={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("axios"),u=(0,e.Uk)(" 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 request.ts 它封装了全局 request 拦截器、response 拦截器、统一的错误处理、baseURL 设置等。"),d=(0,e.uE)('<h3 id="接口定义" tabindex="-1"><a class="header-anchor" href="#接口定义" aria-hidden="true">#</a> 接口定义</h3><ul><li>所有的接口应定义在 <code>@/api</code> 文件夹内。</li></ul><h3 id="配置接口地址" tabindex="-1"><a class="header-anchor" href="#配置接口地址" aria-hidden="true">#</a> 配置接口地址</h3><p>默认的请求地址在 .env</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">VUE_APP_API</span><span class="token operator">=</span>/api/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="环境区分" tabindex="-1"><a class="header-anchor" href="#环境区分" aria-hidden="true">#</a> 环境区分</h4><p>如果希望不同的环境使用不同的请求地址，可以在 .env.development 、.env.test 或 .env.production 中添加设置：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">VUE_APP_API</span><span class="token operator">=</span>/api-dev/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="响应拦截" tabindex="-1"><a class="header-anchor" href="#响应拦截" aria-hidden="true">#</a> 响应拦截</h3><p>在 @/libs/request.ts 中定义响应拦截。</p><h4 id="默认约定" tabindex="-1"><a class="header-anchor" href="#默认约定" aria-hidden="true">#</a> 默认约定</h4><p>默认设置下 response.data 的数据格式应为如下所示：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token comment">// 接口约定的状态码 非 http 状态码</span>\n  code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token comment">// 接口返回请求状态信息</span>\n  msg<span class="token operator">:</span> <span class="token string">&#39;返回信息&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// data 内才是真正的返回数据</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在响应拦截器中会对 http 状态码以及 response.data.code 进行判断，如果全部为正常将会返回 response.data.data，如果有错误将会触发日志记录和信息显示，如果是登录状态失效将自动清空本地的登录状态并退回到登录页面。所有的判断逻辑根据实际业务需要自行修改。</p><h2 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题</h2><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS 全称为 Cross Origin Resource Sharing（跨域资源共享）。这种方案对于前端来说没有什么工作量，和正常发送请求写法上没有任何区别，工作量基本都在后端这里。每一次请求，浏览器必须先以 OPTIONS 请求方式发送一个预请求（也不是所有请求都会发送 options，展开介绍 点我），通过预检请求从而获知服务器端对跨源请求支持的 HTTP 方法。在确认服务器允许该跨源请求的情况下，再以实际的 HTTP 请求方法发送那个真正的请求。推荐的原因是：只要第一次配好了，之后不管有多少接口和项目复用就可以了，一劳永逸的解决了跨域问题，而且不管是开发环境还是正式环境都能方便的使用。</p><h3 id="本地代理" tabindex="-1"><a class="header-anchor" href="#本地代理" aria-hidden="true">#</a> 本地代理</h3><p>本地配置代理：<code>vue.config.js</code>，仅能在开发环境使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>devServer<span class="token operator">:</span> <span class="token punctuation">{</span>\n  proxy<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      target<span class="token operator">:</span> <span class="token string">&#39;http://47.100.186.132/your-path/api&#39;</span><span class="token punctuation">,</span>\n      ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="mock-数据" tabindex="-1"><a class="header-anchor" href="#mock-数据" aria-hidden="true">#</a> Mock 数据</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>功能保留，暂未开发。</p></div>',22);var h={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,t,(0,e.Wm)("p",null,[r,l,c,(0,e.Wm)("a",i,[o,(0,e.Wm)(s)]),u]),d],64)}}}}]);