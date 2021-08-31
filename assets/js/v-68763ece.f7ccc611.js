"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[4186],{2315:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-68763ece",path:"/guide/ado.html",title:"ADO",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"查询 SQL 返回实体",slug:"查询-sql-返回实体",children:[]},{level:2,title:"参数化",slug:"参数化",children:[]},{level:2,title:"检测连接",slug:"检测连接",children:[]},{level:2,title:"CommandFluent",slug:"commandfluent",children:[]}],filePathRelative:"guide/ado.md",git:{updatedTime:1630421127e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]}}},4021:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="ado" tabindex="-1"><a class="header-anchor" href="#ado" aria-hidden="true">#</a> ADO</h1><p>Ado 是 IFreeSql 下重要的对象之一，它包括所有对 SQL 操作的封装，提供 ExecuteReader、ExecuteDataSet、ExecuteDataTable、ExecuteNonQuery、ExecuteScalar 等方法，使用起来和传统 SqlHelper 一样。</p><h2 id="查询-sql-返回实体" tabindex="-1"><a class="header-anchor" href="#查询-sql-返回实体" aria-hidden="true">#</a> 查询 SQL 返回实体</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//返回多条记录</span>\nList<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span>Query<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;select * from t1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//返回单条记录</span>\nT item <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span>QuerySingle<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;select * from t1 where id = @id&quot;</span><span class="token punctuation">,</span> new <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//返回多个结果集</span>\nvar result <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span>Query<span class="token operator">&lt;</span>T1<span class="token punctuation">,</span> T2<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;select * from t1; select * from t2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nList<span class="token operator">&lt;</span>T1<span class="token operator">&gt;</span> list1 <span class="token operator">=</span> result<span class="token punctuation">.</span>Item1<span class="token punctuation">;</span>\nList<span class="token operator">&lt;</span>T2<span class="token operator">&gt;</span> list2 <span class="token operator">=</span> result<span class="token punctuation">.</span>Item2<span class="token punctuation">;</span>\n\n<span class="token comment">// like 查询 </span>\nstring searchText <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>\nList<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> users <span class="token operator">=</span> _fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span>Query<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;select * from t1 where name like @name&quot;</span><span class="token punctuation">,</span> new <span class="token punctuation">{</span> name <span class="token operator">=</span> <span class="token string">&quot;%&quot;</span> <span class="token operator">+</span> searchText <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="参数化" tabindex="-1"><a class="header-anchor" href="#参数化" aria-hidden="true">#</a> 参数化</h2><p>Ado 下面所有参数 object parms 都可以接受匿名对象，或者字典：</p><ul><li>new { id = 1, name = &quot;xx&quot; }</li><li>new Dictionary&lt;string, object&gt; { [&quot;id&quot;] = 1, [&quot;name&quot;] = &quot;xx&quot; }</li></ul><p>关于参数前缀：</p><ul><li>odbc 是 ? 并且没有标识，所以freesql禁用了 odbc 参数化</li><li>oracle 是 :</li><li>mysql.data 是 ?</li><li>mysqlconnector 是 @</li><li>其他基本都是 @</li></ul><p>IN 参数化查询：</p><blockquote><p>当前仅支持Array和IList类型绑定</p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>var ids <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nList<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span>Query<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;select * from t1 where id in @ids&quot;</span><span class="token punctuation">,</span> new <span class="token punctuation">{</span> ids <span class="token operator">=</span> ids <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="检测连接" tabindex="-1"><a class="header-anchor" href="#检测连接" aria-hidden="true">#</a> 检测连接</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>bool isok <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span><span class="token function">ExecuteConnectTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="commandfluent" tabindex="-1"><a class="header-anchor" href="#commandfluent" aria-hidden="true">#</a> CommandFluent</h2><p>fsql.Ado 重载方法太多的情况下，建议使用 CommandFluent，例如存储过程：</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>DbParameter p2 <span class="token operator">=</span> null<span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span><span class="token function">CommandFluent</span><span class="token punctuation">(</span><span class="token string">&quot;dbo.GetICMaxNum&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">CommandType</span><span class="token punctuation">(</span>CommandType<span class="token punctuation">.</span>StoredProcedure<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">CommandTimeout</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span>\n\n    <span class="token punctuation">.</span><span class="token function">WithParameter</span><span class="token punctuation">(</span><span class="token string">&quot;TableName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tb1&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">WithParameter</span><span class="token punctuation">(</span><span class="token string">&quot;FInterID&quot;</span><span class="token punctuation">,</span> null<span class="token punctuation">,</span> p <span class="token operator">=</span><span class="token operator">&gt;</span>\n    <span class="token punctuation">{</span>\n        p2 <span class="token operator">=</span> p<span class="token punctuation">;</span> <span class="token comment">//Output 参数</span>\n        p<span class="token punctuation">.</span>DbType <span class="token operator">=</span> DbType<span class="token punctuation">.</span>Int32<span class="token punctuation">;</span>\n        p<span class="token punctuation">.</span>Direction <span class="token operator">=</span> ParameterDirection<span class="token punctuation">.</span>Output<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ExecuteNonQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//.Query&lt;T&gt;() 或者 .ExecuteDataTable() 或者 ...</span>\n\nConsole<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',17),p={render:function(n,s){return t}}}}]);