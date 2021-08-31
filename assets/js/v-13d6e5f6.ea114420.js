"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[6460],{6736:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-13d6e5f6",path:"/guide/select-include.html",title:"贪婪加载✨",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1、导航属性 ManyToOne",slug:"_1、导航属性-manytoone",children:[]},{level:2,title:"2、导航属性 OneToMany/ManyToMany",slug:"_2、导航属性-onetomany-manytomany",children:[]},{level:2,title:"3、变异",slug:"_3、变异",children:[]},{level:2,title:"4、IncludeMany 扩展方法",slug:"_4、includemany-扩展方法",children:[]},{level:2,title:"5、IncludeMany 两种方式对比",slug:"_5、includemany-两种方式对比",children:[]}],filePathRelative:"guide/select-include.md",git:{updatedTime:1630421127e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]}}},3001:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="贪婪加载✨" tabindex="-1"><a class="header-anchor" href="#贪婪加载✨" aria-hidden="true">#</a> 贪婪加载✨</h1><h2 id="_1、导航属性-manytoone" tabindex="-1"><a class="header-anchor" href="#_1、导航属性-manytoone" aria-hidden="true">#</a> 1、导航属性 ManyToOne</h2><p>ManyToOne 导航属性通过 ToList(includeNestedMembers: false) 加载，参数说明：</p><p>false: 返回 2级 Join 的导航数据（默认）；</p><p>true: 返回所有层级深度 Join 的导航数据（未使用的导航数据不会返回）；</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Parent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//这样写，不需要再标记 Join，解析表达式时自动处理成 LeftJoin</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2、导航属性-onetomany-manytomany" tabindex="-1"><a class="header-anchor" href="#_2、导航属性-onetomany-manytomany" aria-hidden="true">#</a> 2、导航属性 OneToMany/ManyToMany</h2><p>IncludeMany 贪婪加载集合的导航属性，其实是分两次查询，在 ToList 后进行了数据重装。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>IncludeMany 有第二个参数，可以进行二次查询前的修饰工作。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">,</span> \n    then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>song <span class="token operator">=&gt;</span> song<span class="token punctuation">.</span>User <span class="token operator">==</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其实在 then 那里，还可以继续进行向下 Include/IncludeMany。只要你喜欢，向下 100 层都没问题。</p><h2 id="_3、变异" tabindex="-1"><a class="header-anchor" href="#_3、变异" aria-hidden="true">#</a> 3、变异</h2><p>没有配置导航关系，也可以贪婪加载。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TestManys<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>TagId <span class="token operator">==</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>只查询每项子集合的前几条数据，避免像EfCore加载所有数据导致IO性能低下（比如某商品下有2000条评论）。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TestManys<span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>子集合返回部分字段，避免字段过多的问题。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TestManys<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestMany</span> <span class="token punctuation">{</span> Title <span class="token operator">=</span> b<span class="token punctuation">.</span>Title <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_4、includemany-扩展方法" tabindex="-1"><a class="header-anchor" href="#_4、includemany-扩展方法" aria-hidden="true">#</a> 4、IncludeMany 扩展方法</h2><p>当主数据已存在内存中，子数据怎么加载？所以我们增加了 List&lt;T&gt; 扩展方法，示例如下：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> song1<span class="token punctuation">,</span> song2<span class="token punctuation">,</span> song3 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Tags<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5、includemany-两种方式对比" tabindex="-1"><a class="header-anchor" href="#_5、includemany-两种方式对比" aria-hidden="true">#</a> 5、IncludeMany 两种方式对比</h2><p>方式一（IncludeMany 扩展方法）：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list111 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SysModule<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//查询数据 id</span>\n    <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SysModule</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//内存操作</span>\n    <span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Permissions<span class="token punctuation">,</span> then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> as1 \n<span class="token keyword">FROM</span> <span class="token string">&quot;SysModule&quot;</span> a \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>\n\n<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span> \na__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> as5<span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EventName&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EnCode&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Icon&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Sort&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;CreateTime&quot;</span> \n<span class="token keyword">FROM</span> <span class="token string">&quot;SysModulePermission&quot;</span> a \n<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token string">&quot;SysModuleButton&quot;</span> a__Button <span class="token keyword">ON</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span> \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;menu2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr><p>方式二（直接 IncludeMany + ToList）：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list222 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SysModule<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>m <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>Permissions<span class="token punctuation">,</span> then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;ParentId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Icon&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;UrlAddress&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;IsShow&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Sort&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Description&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;CreateTime&quot;</span> \n<span class="token keyword">FROM</span> <span class="token string">&quot;SysModule&quot;</span> a \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>\n\n<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span> \na__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> as5<span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EventName&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EnCode&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Icon&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Sort&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;CreateTime&quot;</span> \n<span class="token keyword">FROM</span> <span class="token string">&quot;SysModulePermission&quot;</span> a \n<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token string">&quot;SysModuleButton&quot;</span> a__Button <span class="token keyword">ON</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span> \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;menu2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>案例：查询 Vod 表，分类1、分类2、分类3 各10条数据</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Vod</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TypeId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//定义临时类，也可以是 Dto 类</span>\n<span class="token keyword">class</span> <span class="token class-name">Dto</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TypeId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Vod<span class="token punctuation">&gt;</span></span> Vods <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dto</span> <span class="token punctuation">{</span> TypeId <span class="token operator">=</span> a <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndto<span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> d <span class="token operator">=&gt;</span> d<span class="token punctuation">.</span>Vods<span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>vod <span class="token operator">=&gt;</span> vod<span class="token punctuation">.</span>TypeId <span class="token operator">==</span> d<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//执行后，dto 每个元素.Vods 将只有 10条记录</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',32),p={render:function(n,s){return t}}}}]);