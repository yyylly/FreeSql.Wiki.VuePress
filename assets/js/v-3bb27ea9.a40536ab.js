(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[3471],{4960:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-3bb27ea9",path:"/guide/sharding.html",title:"分表分库",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"理论知识",slug:"理论知识",children:[]},{level:2,title:"分表 AsTable",slug:"分表-astable",children:[]},{level:2,title:"分库 IdleBus",slug:"分库-idlebus",children:[]}],filePathRelative:"guide/sharding.md",git:{updatedTime:1617157176e3,contributors:[]}}},4560:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="分表分库"><a class="header-anchor" href="#分表分库">#</a> 分表分库</h1><h2 id="理论知识"><a class="header-anchor" href="#理论知识">#</a> 理论知识</h2><p>分表 - 从表面意思上看呢，就是把一张表分成N多个小表，每一个小表都是完正的一张表。分表后数据都是存放在分表里，总表只是一个外壳，存取数据发生在一个一个的分表里面。分表后单表的并发能力提高了，磁盘I/O性能也提高了。并发能力为什么提高了呢，因为查寻一次所花的时间变短了，如果出现高并发的话，总表可以根据不同 的查询，将并发压力分到不同的小表里面。</p><p>分库 - 把原本存储于一个库的数据分块存储到多个库上，把原本存储于一个表的数据分块存储到多个表上。数据库中的数据量不一定是可控的，在未进行分表分库的情况下，随着时间和业务的发展，库中的表会越来越多，表中的数据量也会越来越大，相应地，数据操作，增删改查的开销也会越来越大；另外，一台服务器的资源（CPU、磁盘、内存、IO等）是有限的，最终数据库所能承载的数据量、数据处理能力都将遭遇瓶颈。</p><h2 id="分表-astable"><a class="header-anchor" href="#分表-astable">#</a> 分表 AsTable</h2><p>FreeSql 原生用法、FreeSql.Repository 仓储用法 都提供了 AsTable 方法对分表进行 CRUD 操作，例如：</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>var repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span>GetRepository<span class="token operator">&lt;</span>Log<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span>oldname <span class="token operator">=</span><span class="token operator">&gt;</span> $<span class="token string">&quot;{oldname}_201903&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//对 Log_201903 表 CRUD</span>\n\nrepo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>new Log <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>跨库，但是在同一个数据库服务器下，也可以使用 AsTable(oldname =&gt; $&quot;db2.dbo.{oldname}&quot;)</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//跨表查询</span>\n<span class="token class-name"><span class="token keyword">var</span></span> sql <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> oldname<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;table_1&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> oldname<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;table_2&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//select * from (SELECT a.&quot;Id&quot; as1 FROM &quot;table_1&quot; a) ftb </span>\n<span class="token comment">//UNION ALL</span>\n<span class="token comment">//select * from (SELECT a.&quot;Id&quot; as1 FROM &quot;table_2&quot; a) ftb </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>分表总结：</p><ul><li>分表、相同服务器跨库 可以使用 AsTable 进行 CRUD；</li><li>AsTable CodeFirst 会自动创建不存在的分表；</li><li>不可在分表分库的实体类型中使用《延时加载》；</li></ul><p>SqlServer 跨库事务 可以使用 TransactionScope，如下：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repoLog <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Log<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> repoComment <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Comment<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrepoLog<span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span>oldname <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token number">201903</span></span><span class="token punctuation">}</span></span><span class="token string">.dbo.</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldname</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrepoComment<span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span>oldname <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token number">201903</span></span><span class="token punctuation">}</span></span><span class="token string">.dbo.</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldname</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">TransactionScope</span> ts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TransactionScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    repoComment<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Comment</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    repoLog<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Log</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ts<span class="token punctuation">.</span><span class="token function">Complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="分库-idlebus"><a class="header-anchor" href="#分库-idlebus">#</a> 分库 IdleBus</h2><p>IFreeSql 对应一个数据库，分库是不是要定义N个 IFreeSql？分库的租户场景，那不要定义10000个？</p><p>IdleBus 空闲对象管理容器，有效组织对象重复利用，自动创建、销毁，解决【实例】过多且长时间占用的问题。有时候想做一个单例对象重复使用提升性能，但是定义多了，有的又可能一直空闲着占用资源。专门解决：又想重复利用，又想少占资源的场景。https://github.com/2881099/IdleBus</p><blockquote><p>dotnet add package IdleBus</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromMinutes</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nib<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;db1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;str1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nib<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;db2&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;str2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nib<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;db3&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>SqlServer<span class="token punctuation">,</span> <span class="token string">&quot;str3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//...注册很多个</span>\n\nib<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;db1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>IdleBus 也是【单例】设计！主要的两个方法，注册，获取。使用 IdleBus 需要弱化 IFreeSql 的存在，每次使用 ib.Get 获取。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IdleBusExtesions</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token class-name">AsyncLocal<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> asyncLocalTenantId <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AsyncLocal<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> <span class="token function">ChangeTenant</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> tenantId<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        asyncLocalTenantId<span class="token punctuation">.</span>Value <span class="token operator">=</span> tenantId<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> ib<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ib<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>asyncLocalTenantId<span class="token punctuation">.</span>Value <span class="token operator">??</span> <span class="token string">&quot;db1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IBaseRepository<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib<span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token class-name">T</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token keyword">class</span></span> <span class="token operator">=&gt;</span> ib<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//-------------------------------------------------------</span>\n\n    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//单例注入</span>\n\n        <span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> ib<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取当前租户对应的 IFreeSql</span>\n\n        <span class="token class-name"><span class="token keyword">var</span></span> fsql00102 <span class="token operator">=</span> ib<span class="token punctuation">.</span><span class="token function">ChangeTenant</span><span class="token punctuation">(</span><span class="token string">&quot;00102&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//切换租户，后面的操作都是针对 00102</span>\n\n        <span class="token class-name"><span class="token keyword">var</span></span> songRepository <span class="token operator">=</span> ib<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> detailRepository <span class="token operator">=</span> ib<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Detail<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//-------------------------------------------------------</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IServiceCollection</span> <span class="token function">AddIdleBusRepository</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">IServiceCollection</span> services<span class="token punctuation">,</span> <span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name">Assembly<span class="token punctuation">[</span><span class="token punctuation">]</span></span> assemblies<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        services<span class="token punctuation">.</span><span class="token function">AddSingleton</span><span class="token punctuation">(</span>ib<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        services<span class="token punctuation">.</span><span class="token function">AddScoped</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IBaseRepository<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">YourDefaultRepository<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        services<span class="token punctuation">.</span><span class="token function">AddScoped</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">BaseRepository<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">YourDefaultRepository<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        services<span class="token punctuation">.</span><span class="token function">AddScoped</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IBaseRepository<span class="token punctuation">&lt;</span><span class="token punctuation">,</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">YourDefaultRepository<span class="token punctuation">&lt;</span><span class="token punctuation">,</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        services<span class="token punctuation">.</span><span class="token function">AddScoped</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">BaseRepository<span class="token punctuation">&lt;</span><span class="token punctuation">,</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">YourDefaultRepository<span class="token punctuation">&lt;</span><span class="token punctuation">,</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>assemblies<span class="token punctuation">?.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n            <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> asse <span class="token keyword">in</span> assemblies<span class="token punctuation">)</span> <span class="token comment">//批量注册</span>\n                <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token keyword">in</span> asse<span class="token punctuation">.</span><span class="token function">GetTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>IsAbstract <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IBaseRepository</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsAssignableFrom</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    services<span class="token punctuation">.</span><span class="token function">AddScoped</span><span class="token punctuation">(</span>repo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> services<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">YourDefaultRepository<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseRepository<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span> <span class="token keyword">where</span> <span class="token class-name">T</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token keyword">class</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">YourDefaultRepository</span><span class="token punctuation">(</span><span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>ib<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">YourDefaultRepository<span class="token punctuation">&lt;</span>T<span class="token punctuation">,</span> TKey<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseRepository<span class="token punctuation">&lt;</span>T<span class="token punctuation">,</span> TKey<span class="token punctuation">&gt;</span></span></span> <span class="token keyword">where</span> <span class="token class-name">T</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token keyword">class</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">YourDefaultRepository</span><span class="token punctuation">(</span><span class="token class-name">IdleBus<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> ib<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>ib<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>分库总结：</p><ul><li>跨库 可以使用 ib.Get() 获取 IFreeSql 进行 CRUD；</li><li>跨库 事务不好处理，注意了；</li><li>跨库 查询不好处理，注意了；</li></ul>',22),t={render:function(n,s){return p}}}}]);