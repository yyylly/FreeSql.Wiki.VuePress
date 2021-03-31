(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[4166],{8609:(e,s,t)=>{"use strict";t.r(s),t.d(s,{data:()=>n});const n={key:"v-bb011780",path:"/guide/config-entity-from-db-first.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"优先级",slug:"优先级",children:[]}],filePathRelative:"guide/config-entity-from-db-first.md",git:{updatedTime:1617157176e3,contributors:[]}}},3473:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const n=(0,t(6252).uE)('<hr><hr><p>可以解决，数据库有主键 + 自增，实体层没有配置对应的特性；</p><p>从数据库导入主键、自增信息，适用 DbFirst 模式，无须在实体类型上设置 [Column(IsPrimary)] 或者 ConfigEntity；</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span>IsConfigEntityFromDbFirst <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>此功能目前可用于 mysql/sqlserver/postgresql/oracle。</p><blockquote><p>开启该功能会增加首次执行时间（耗时情况和表数量有关）</p></blockquote><h2 id="优先级"><a class="header-anchor" href="#优先级">#</a> 优先级</h2><p>数据库特性 &gt; 实体特性 &gt; FluentApi（配置特性） &gt; Aop（配置特性）</p>',9),a={render:function(e,s){return n}}}}]);