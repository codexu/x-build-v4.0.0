(self.webpackChunk=self.webpackChunk||[]).push([[7020],{12:function(e,n,s){"use strict";s.r(n),s.d(n,{data:function(){return t}});const t={key:"v-5ef4ada6",path:"/guide/core/hooks.html",title:"Hooks",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"内置 Hooks",slug:"内置-hooks",children:[{level:3,title:"State",slug:"state",children:[]},{level:3,title:"UI",slug:"ui",children:[]},{level:3,title:"SideEffect",slug:"sideeffect",children:[]}]},{level:2,title:"使用",slug:"使用",children:[]},{level:2,title:"对象用法",slug:"对象用法",children:[]}],filePathRelative:"guide/core/hooks.md",git:{updatedTime:162511603e4,contributors:[]}}},4783:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return ie}});var t=s(6252);const a=(0,t.Wm)("h1",{id:"hooks",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#hooks","aria-hidden":"true"},"#"),(0,t.Uk)(" Hooks")],-1),l=(0,t.Wm)("p",null,"Hooks 是一个基于 Composition API 的实用函数集合，使用 typescript 开发，有着良好的代码提示体验。",-1),o=(0,t.Uk)("在开始之前，我们假设您已经熟悉 "),r={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("Vue 3 Composition API"),c=(0,t.Uk)(" 的基本思想。如果你掌握 React 及 React Hooks 基础用法。那么这对你来说是十分友好的。"),p=(0,t.Wm)("h2",{id:"内置-hooks",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#内置-hooks","aria-hidden":"true"},"#"),(0,t.Uk)(" 内置 Hooks")],-1),d=(0,t.Wm)("h3",{id:"state",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#state","aria-hidden":"true"},"#"),(0,t.Uk)(" State")],-1),i=(0,t.Wm)("thead",null,[(0,t.Wm)("tr",null,[(0,t.Wm)("th",null,"Hook"),(0,t.Wm)("th",null,"说明"),(0,t.Wm)("th",null,"API")])],-1),m=(0,t.Wm)("td",null,"useDevice",-1),k=(0,t.Wm)("td",null,"查询设备信息，可用于PC、移动等适配",-1),W={href:"/docs/hooks/state/useDevice.md",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("详情"),f=(0,t.Wm)("td",null,"useBoolean",-1),b=(0,t.Wm)("td",null,"管理 boolean 值",-1),g={href:"/docs/hooks/state/useBoolean.md",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("详情"),U=(0,t.Wm)("td",null,"useToggle",-1),y=(0,t.Wm)("td",null,"用于在两个状态值间切换",-1),S={href:"/docs/hooks/state/useToggle.md",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("详情"),x=(0,t.Wm)("td",null,"useLocalStorage",-1),H=(0,t.Wm)("td",null,"储存于 LocalStorage 的值",-1),w={href:"/docs/hooks/state/useLocalStorage.md",target:"_blank",rel:"noopener noreferrer"},D=(0,t.Uk)("详情"),T=(0,t.Wm)("td",null,"useSessionStorage",-1),E=(0,t.Wm)("td",null,"储存于 SessionStorage 的值",-1),C={href:"/docs/hooks/state/useSessionStorage.md",target:"_blank",rel:"noopener noreferrer"},I=(0,t.Uk)("详情"),P=(0,t.Wm)("h3",{id:"ui",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#ui","aria-hidden":"true"},"#"),(0,t.Uk)(" UI")],-1),F=(0,t.Wm)("thead",null,[(0,t.Wm)("tr",null,[(0,t.Wm)("th",null,"Hook"),(0,t.Wm)("th",null,"说明"),(0,t.Wm)("th",null,"API")])],-1),L=(0,t.Wm)("td",null,"useLoading",-1),A=(0,t.Wm)("td",null,"方便控制页面中整体或局部的 loading 效果",-1),O={href:"/docs/hooks/ui/useLoading.md",target:"_blank",rel:"noopener noreferrer"},R=(0,t.Uk)("详情"),j=(0,t.Wm)("td",null,"useClipboard",-1),B=(0,t.Wm)("td",null,"快捷文本复制功能",-1),q={href:"/docs/hooks/ui/useClipboard.md",target:"_blank",rel:"noopener noreferrer"},V=(0,t.Uk)("详情"),Y=(0,t.Wm)("td",null,"useFullscreen",-1),z=(0,t.Wm)("td",null,"浏览器全屏的开关控制",-1),G={href:"/docs/hooks/ui/useFullscreen.md",target:"_blank",rel:"noopener noreferrer"},J=(0,t.Uk)("详情"),K=(0,t.Wm)("h3",{id:"sideeffect",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#sideeffect","aria-hidden":"true"},"#"),(0,t.Uk)(" SideEffect")],-1),M=(0,t.Wm)("thead",null,[(0,t.Wm)("tr",null,[(0,t.Wm)("th",null,"Hook"),(0,t.Wm)("th",null,"说明"),(0,t.Wm)("th",null,"API")])],-1),N=(0,t.Wm)("td",null,"useDebounce",-1),Q=(0,t.Wm)("td",null,[(0,t.Uk)("用来处理 "),(0,t.Wm)("strong",null,"值"),(0,t.Uk)(" 的防抖")],-1),X={href:"/docs/hooks/sideEffect/useDebounce.md",target:"_blank",rel:"noopener noreferrer"},Z=(0,t.Uk)("详情"),$=(0,t.Wm)("td",null,"useDebounceFn",-1),ee=(0,t.Wm)("td",null,[(0,t.Uk)("用来处理 "),(0,t.Wm)("strong",null,"函数"),(0,t.Uk)(" 的防抖")],-1),ne={href:"/docs/hooks/sideEffect/useDebounceFn.md",target:"_blank",rel:"noopener noreferrer"},se=(0,t.Uk)("详情"),te=(0,t.Wm)("td",null,"useThrottle",-1),ae=(0,t.Wm)("td",null,[(0,t.Uk)("用来处理 "),(0,t.Wm)("strong",null,"值"),(0,t.Uk)(" 的节流")],-1),le={href:"/docs/hooks/sideEffect/useThrottle.md",target:"_blank",rel:"noopener noreferrer"},oe=(0,t.Uk)("详情"),re=(0,t.Wm)("td",null,"useThrottleFn",-1),ue=(0,t.Wm)("td",null,[(0,t.Uk)("用来处理 "),(0,t.Wm)("strong",null,"函数"),(0,t.Uk)(" 的节流")],-1),ce={href:"/docs/hooks/sideEffect/useThrottleFn.md",target:"_blank",rel:"noopener noreferrer"},pe=(0,t.Uk)("详情"),de=(0,t.uE)('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>Hooks 中的大多数函数都返回一个 refs 对象或函数，你可以使用 ES6 的解构语法来获取你需要的内容。</p><p>你只需要在 <code>@/hooks</code> 中引入它即可：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> useDevice <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useDevice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="对象用法" tabindex="-1"><a class="header-anchor" href="#对象用法" aria-hidden="true">#</a> 对象用法</h2><p>如果您更喜欢将它们用作对象属性样式，则可以使用reactive(). 例如：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> device <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div>',7);var ie={render:function(e,n){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[a,l,(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[o,(0,t.Wm)("a",r,[u,(0,t.Wm)(s)]),c])]),p,d,(0,t.Wm)("table",null,[i,(0,t.Wm)("tbody",null,[(0,t.Wm)("tr",null,[m,k,(0,t.Wm)("td",null,[(0,t.Wm)("a",W,[h,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[f,b,(0,t.Wm)("td",null,[(0,t.Wm)("a",g,[v,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[U,y,(0,t.Wm)("td",null,[(0,t.Wm)("a",S,[_,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[x,H,(0,t.Wm)("td",null,[(0,t.Wm)("a",w,[D,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[T,E,(0,t.Wm)("td",null,[(0,t.Wm)("a",C,[I,(0,t.Wm)(s)])])])])]),P,(0,t.Wm)("table",null,[F,(0,t.Wm)("tbody",null,[(0,t.Wm)("tr",null,[L,A,(0,t.Wm)("td",null,[(0,t.Wm)("a",O,[R,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[j,B,(0,t.Wm)("td",null,[(0,t.Wm)("a",q,[V,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[Y,z,(0,t.Wm)("td",null,[(0,t.Wm)("a",G,[J,(0,t.Wm)(s)])])])])]),K,(0,t.Wm)("table",null,[M,(0,t.Wm)("tbody",null,[(0,t.Wm)("tr",null,[N,Q,(0,t.Wm)("td",null,[(0,t.Wm)("a",X,[Z,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[$,ee,(0,t.Wm)("td",null,[(0,t.Wm)("a",ne,[se,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[te,ae,(0,t.Wm)("td",null,[(0,t.Wm)("a",le,[oe,(0,t.Wm)(s)])])]),(0,t.Wm)("tr",null,[re,ue,(0,t.Wm)("td",null,[(0,t.Wm)("a",ce,[pe,(0,t.Wm)(s)])])])])]),de],64)}}}}]);