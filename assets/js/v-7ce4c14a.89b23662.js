"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[7272],{7011:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-7ce4c14a",path:"/en/guide/Unit-of-Work.html",title:"Unit of Work",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"Interface Definition",slug:"interface-definition",children:[]},{level:2,title:"Entity Changing Event",slug:"entity-changing-event",children:[]},{level:2,title:"Reference",slug:"reference",children:[]}],filePathRelative:"en/guide/Unit-of-Work.md",git:{updatedTime:1637482407e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]}}},2097:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(6252);const e=(0,t.uE)('<h1 id="unit-of-work" tabindex="-1"><a class="header-anchor" href="#unit-of-work" aria-hidden="true">#</a> Unit of Work</h1><p>Unit of work can put multiple repositories into one unit for internal management and execution, and finally execute all operations through <code>Commit</code>. Unit of work internally uses database transactions.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token comment">//Automatically synchronize the entity structure to the database.</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> \n    <span class="token comment">//Be sure to define as singleton mode</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> songRepo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token class-name"><span class="token keyword">var</span></span> userRepo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  songRepo<span class="token punctuation">.</span>UnitOfWork <span class="token operator">=</span> uow<span class="token punctuation">;</span> <span class="token comment">//Manually bind unit of work</span>\n  userRepo<span class="token punctuation">.</span>UnitOfWork <span class="token operator">=</span> uow<span class="token punctuation">;</span>\n\n  songRepo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  userRepo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  uow<span class="token punctuation">.</span>Orm<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//Note: uow.Orm and fsql are both IFreeSql</span>\n  <span class="token comment">//uow.Orm CRUD and uow are the same transaction (understood as temporary IFreeSql)</span>\n  <span class="token comment">//fsql CRUD and uow are not in the same transaction</span>\n\n  uow<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',5),p=(0,t.Uk)("Reference: "),o={href:"https://github.com/dotnetcore/FreeSql/issues/289",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Use TransactionalAttribute + UnitOfWorkManager in ASP.NET Core to achieve multiple transaction propagation"),l=(0,t.uE)('<h2 id="interface-definition" tabindex="-1"><a class="header-anchor" href="#interface-definition" aria-hidden="true">#</a> Interface Definition</h2><p>The <code>uow.GetOrBeginTransaction()</code> method can get the transaction object.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IUnitOfWork</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDisposable</span></span>\n<span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// The object Select/Delete/Insert/Update/InsertOrUpdate is consistent with the unit of work transaction and can be omitted to pass WithTransaction</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token return-type class-name">IFreeSql</span> Orm <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// Open the transaction, or return to the opened transaction</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isCreate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>If the transaction is not opened, then open<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>returns</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>returns</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token return-type class-name">DbTransaction</span> <span class="token function">GetOrBeginTransaction</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> isCreate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token return-type class-name">IsolationLevel<span class="token punctuation">?</span></span> IsolationLevel <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n  <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// Entity change tracking within the unit of work</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token return-type class-name">DbContext<span class="token punctuation">.</span>EntityChangeReport</span> EntityChangeReport <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="entity-changing-event" tabindex="-1"><a class="header-anchor" href="#entity-changing-event" aria-hidden="true">#</a> Entity Changing Event</h2><p>Global Settings:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">SetDbContextOptions</span><span class="token punctuation">(</span>opt <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  opt<span class="token punctuation">.</span>OnEntityChange <span class="token operator">=</span> report <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>report<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Individual Settings:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> uow <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token function">CreateUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuow<span class="token punctuation">.</span>OnEntityChange <span class="token operator">=</span> report <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>report<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The parameter <code>report</code> is a list collection, and the type of the collection elements is defined as follows:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChangeInfo</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> Object <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token return-type class-name">EntityChangeType</span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token doc-comment comment">/// When Type = Update, get the object before the update</span>\n  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> BeforeObject <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">EntityChangeType</span> <span class="token punctuation">{</span> Insert<span class="token punctuation">,</span> Update<span class="token punctuation">,</span> Delete<span class="token punctuation">,</span> SqlRaw <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><table><thead><tr><th>Type of Change</th><th>Description</th></tr></thead><tbody><tr><td>Insert</td><td>The entity object is inserted</td></tr><tr><td>Update</td><td>The entity object is updated</td></tr><tr><td>Delete</td><td>The entity object is deleted</td></tr><tr><td>SqlRaw</td><td>SQL statement executed</td></tr></tbody></table><p>SqlRaw currently has two special features:</p><ul><li>When the navigation properties are updated in the many-to-many cascade, delete the relevant data in the intermediate table.</li><li>The common repository <code>BaseRepository</code> has a Delete method, and the parameter is an expression, not an entity.</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token class-name">Expression<span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span>TEntity<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>DbContext.SaveChanges</code> or Repository&#39;s Insert/Update/Delete method of the entity, or <code>UnitOfWork.Commit</code> operation will trigger this event at most once.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Tenant">《Tenant》</a></li><li><a href="Using-Read-Write-Separation">《Using Read/Write Separation》</a></li><li><a href="Sharding-Tables-and-Database">《Sharding Tables and Database》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Aspect-Oriented-Programming">《AOP》</a></li><li><a href="Batabase-Context">《DbContext》</a></li></ul>',17),u={},i=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[p,(0,t._)("a",o,[c,(0,t.Wm)(a)])]),l],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);