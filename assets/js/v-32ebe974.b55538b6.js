(self.webpackChunk=self.webpackChunk||[]).push([[8201],{6797:function(t,e,d){"use strict";d.r(e),d.d(e,{data:function(){return r}});const r={key:"v-32ebe974",path:"/guide/standard/commit-lint.html",title:"CommitLint",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"格式",slug:"格式",children:[]},{level:2,title:"Type 类型",slug:"type-类型",children:[]}],filePathRelative:"guide/standard/commit-lint.md",git:{updatedTime:1625449028e3,contributors:[]}}},4921:function(t,e,d){"use strict";d.r(e),d.d(e,{default:function(){return a}});const r=(0,d(6252).uE)('<h1 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> CommitLint</h1><p>在多人协作的背景下，git 仓库和 workflow 的作用很重要。而对于 commit 提交的信息说明存在一定规范，现使用 <code>commitlint</code> + <code>husky</code> 规范 <code>git commit -m &quot;&quot;</code> 中的描述信息。我们都知道，在使用 git commit 时，git 会提示我们填入此次提交的信息。可不要小看了这些 commit，团队中规范了 commit 可以更清晰的查看每一次代码提交记录，还可以根据自定义的规则，自动生成 changeLog 文件。</p><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><p>提交格式（注意冒号后面有空格）</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">[</span>optional scope<span class="token punctuation">]</span>: <span class="token operator">&lt;</span>description<span class="token operator">&gt;</span>\n</code></pre></div><ul><li><strong>type</strong> ：用于表明我们这次提交的改动类型。</li><li><strong>optional scope</strong>：可选，用于标识此次提交主要涉及到代码中哪个模块。</li><li><strong>description</strong>：一句话描述此次提交的主要内容，做到言简意赅。</li></ul><h2 id="type-类型" tabindex="-1"><a class="header-anchor" href="#type-类型" aria-hidden="true">#</a> Type 类型</h2><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>build</td><td>编译相关的修改，例如发布版本、对项目构建或者依赖的改动</td></tr><tr><td>chore</td><td>其他修改, 比如改变构建流程、或者增加依赖库、工具等</td></tr><tr><td>ci</td><td>持续集成修改</td></tr><tr><td>docs</td><td>文档修改</td></tr><tr><td>feat</td><td>新特性、新功能</td></tr><tr><td>fix</td><td>修改bug</td></tr><tr><td>perf</td><td>优化相关，比如提升性能、体验</td></tr><tr><td>refactor</td><td>代码重构</td></tr><tr><td>revert</td><td>回滚到上一个版本</td></tr><tr><td>style</td><td>代码格式修改, 注意不是 css 修改</td></tr><tr><td>test</td><td>测试用例修改</td></tr></tbody></table>',8);var a={render:function(t,e){return r}}}}]);