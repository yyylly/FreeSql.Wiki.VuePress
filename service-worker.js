if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"88c55ac14ca3cd5f78e06cfea4eab865"},{url:"android-chrome-192x192.png",revision:"5c5a418d7c29275f4ae6ddfcae7a2090"},{url:"android-chrome-512x512.png",revision:"dbcaf7855b3bf777e1650fcfb2533b4f"},{url:"apple-touch-icon.png",revision:"328875080674ea578a41a970f9bf2d29"},{url:"assets/css/styles.c04fa669.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/3293.c4ec1f20.js",revision:null},{url:"assets/js/5205.4c544b72.js",revision:null},{url:"assets/js/8491.b80c4414.js",revision:null},{url:"assets/js/9399.d0409be8.js",revision:null},{url:"assets/js/app.6993edb2.js",revision:null},{url:"assets/js/runtime~app.b0695b77.js",revision:null},{url:"assets/js/v-08d798b2.d8af5a95.js",revision:null},{url:"assets/js/v-0921d17b.0343dee6.js",revision:null},{url:"assets/js/v-0a96cd2d.eab104c7.js",revision:null},{url:"assets/js/v-0c785bc4.ef69f42f.js",revision:null},{url:"assets/js/v-0ce4876c.bc1cb8f7.js",revision:null},{url:"assets/js/v-100fe338.f5559ca2.js",revision:null},{url:"assets/js/v-10da9644.caf898ce.js",revision:null},{url:"assets/js/v-113a600e.ffbc2c6c.js",revision:null},{url:"assets/js/v-135e4503.1d615f0a.js",revision:null},{url:"assets/js/v-13d6e5f6.ea114420.js",revision:null},{url:"assets/js/v-19d84912.5a3974c1.js",revision:null},{url:"assets/js/v-19eea59d.e9a8c43c.js",revision:null},{url:"assets/js/v-1cad7b10.8d20e982.js",revision:null},{url:"assets/js/v-1d73af95.09bf2f1e.js",revision:null},{url:"assets/js/v-22df3c61.daadbfa4.js",revision:null},{url:"assets/js/v-24de54ee.e0e27cfe.js",revision:null},{url:"assets/js/v-259c62e1.1cccfad7.js",revision:null},{url:"assets/js/v-2648ac1a.c298f538.js",revision:null},{url:"assets/js/v-275e2a2f.1bf829c4.js",revision:null},{url:"assets/js/v-29d78daa.f9b9758a.js",revision:null},{url:"assets/js/v-2b3a8924.f40a5168.js",revision:null},{url:"assets/js/v-2c73b3ee.2bd0e036.js",revision:null},{url:"assets/js/v-2d0a870d.64b5ef74.js",revision:null},{url:"assets/js/v-31e9efb0.433b966e.js",revision:null},{url:"assets/js/v-3392574c.4d04dacc.js",revision:null},{url:"assets/js/v-3706649a.5490dc33.js",revision:null},{url:"assets/js/v-3bb27ea9.894f882a.js",revision:null},{url:"assets/js/v-3d21f522.c00edbe8.js",revision:null},{url:"assets/js/v-3e6e95f0.102bb08d.js",revision:null},{url:"assets/js/v-466b2cb2.0a0d3f04.js",revision:null},{url:"assets/js/v-4df21bc0.9421be49.js",revision:null},{url:"assets/js/v-52acee36.ac2156c1.js",revision:null},{url:"assets/js/v-578131e6.e2f82780.js",revision:null},{url:"assets/js/v-5ccd7e2c.34c6315f.js",revision:null},{url:"assets/js/v-5d526c16.1757cf75.js",revision:null},{url:"assets/js/v-5fa3f531.c19ee839.js",revision:null},{url:"assets/js/v-6059229c.8173d816.js",revision:null},{url:"assets/js/v-60c55912.503cb090.js",revision:null},{url:"assets/js/v-60ef9b5d.32b2a210.js",revision:null},{url:"assets/js/v-67ea3990.294975db.js",revision:null},{url:"assets/js/v-68763ece.f7ccc611.js",revision:null},{url:"assets/js/v-6879b57d.fa8b5184.js",revision:null},{url:"assets/js/v-6cdf9fd9.ccefcd0f.js",revision:null},{url:"assets/js/v-6ce48554.6bb641a7.js",revision:null},{url:"assets/js/v-6dc1ceac.7ec5860e.js",revision:null},{url:"assets/js/v-6e61f61e.e5538c9c.js",revision:null},{url:"assets/js/v-786147a6.414aee74.js",revision:null},{url:"assets/js/v-7919c9a2.77b53ac1.js",revision:null},{url:"assets/js/v-7aa8fa6a.decbb36f.js",revision:null},{url:"assets/js/v-8a005a66.1ad94250.js",revision:null},{url:"assets/js/v-8daa1a0e.53022762.js",revision:null},{url:"assets/js/v-945cf558.b6d062b5.js",revision:null},{url:"assets/js/v-9d397e8e.047a3b7d.js",revision:null},{url:"assets/js/v-a1a49808.a614fe04.js",revision:null},{url:"assets/js/v-aa863f00.30746717.js",revision:null},{url:"assets/js/v-aaf75552.71f190a1.js",revision:null},{url:"assets/js/v-b147b508.8493d861.js",revision:null},{url:"assets/js/v-bb011780.8bf82afd.js",revision:null},{url:"assets/js/v-c7808842.96efd4a0.js",revision:null},{url:"assets/js/v-ca9835b8.4543958b.js",revision:null},{url:"assets/js/v-cc6d4d78.add80051.js",revision:null},{url:"assets/js/v-ce832304.6269aa04.js",revision:null},{url:"assets/js/v-d6ed953a.b642dd9f.js",revision:null},{url:"assets/js/v-e45cc9ec.6ba3acce.js",revision:null},{url:"assets/js/v-e6412400.3b5cf546.js",revision:null},{url:"assets/js/v-f07fc1be.96bb0cb8.js",revision:null},{url:"assets/js/v-fb0f0066.21f588da.js",revision:null},{url:"assets/js/v-fffb8e28.c14437e2.js",revision:null},{url:"contributing.html",revision:"c91565432ace8292ee11e057caa6084e"},{url:"en/guide/code-first.html",revision:"ca55f9967f1fade42e1a53c0c8fc6af1"},{url:"en/guide/delete.html",revision:"19049767616c47f931febfdc68cf804f"},{url:"en/guide/getting-started.html",revision:"838653f73d4d81066b24199e5aec096c"},{url:"en/guide/index.html",revision:"1cc023005dfaa2d27b4f08eac13e8bc7"},{url:"en/guide/insert-or-update.html",revision:"fffd01169cd312952806f9b77bf73533"},{url:"en/guide/insert.html",revision:"13bc4010d5c0ddcce85f17025e60c0c4"},{url:"en/guide/install.html",revision:"a80d62e3af2edfbb05bbce87e9d2e3d6"},{url:"en/guide/paging.html",revision:"f638d9c65f5bfba6552da12f82dd2bf3"},{url:"en/guide/select-multi-table.html",revision:"e518b4fb187700dfda0db4dbe8ed938c"},{url:"en/guide/select-single-table.html",revision:"ea8491ec7a037450d592d124b93e7089"},{url:"en/guide/select.html",revision:"beac4d501ee1d4930aef17a77528f1fd"},{url:"en/guide/type-mapping.html",revision:"90b7faf72786a56632104ec7df1bbe39"},{url:"en/guide/update.html",revision:"50f2cfced4956812945a3f182adf5771"},{url:"en/index.html",revision:"6af1cec5e1bed4bfa9d001e9b18b9d9d"},{url:"favicon-16x16.png",revision:"85e898664445fdc5f71a2cca96278f52"},{url:"favicon-32x32.png",revision:"376de207c8dd3f4c2baa4445600d07cb"},{url:"guide/ado.html",revision:"1b396496df97b83b42e1352b6f8c32a4"},{url:"guide/aop.html",revision:"005b721740f18cb62b9c735b23ff3a69"},{url:"guide/BaseEntity.html",revision:"66cab9ae889069257594f10f4be02a4f"},{url:"guide/cascade-saving.html",revision:"1db94581e859eae06aa28cb86945b13e"},{url:"guide/code-first.html",revision:"74ac80c7abcc955c41611950621e991c"},{url:"guide/config-entity-from-db-first.html",revision:"e7fac049d4d9bfcfc5575b5b845448b6"},{url:"guide/custom-attribute.html",revision:"e22ea9bd64e1671f6bae0f0a2a7dd395"},{url:"guide/db-context.html",revision:"532f41e652e65ec82d435e41a3062614"},{url:"guide/db-first.html",revision:"6c413007120ec51c7bfdd4e2d063b62a"},{url:"guide/delegate.html",revision:"6909e327a0aea1d7ec1144ca1b822d81"},{url:"guide/delete.html",revision:"44664e3f15075f36ece8e06d516390b0"},{url:"guide/entity-attribute.html",revision:"7612ba41660d1bee909752f48b4a8a49"},{url:"guide/expression-function.html",revision:"6ae65a9f684ea8e07e53e04e6b159a6b"},{url:"guide/filters.html",revision:"d2ce968ea552a8826083c2f1005ac4d0"},{url:"guide/fluent-api.html",revision:"797e6eaf1c12d6987452911e42221d48"},{url:"guide/getting-started.html",revision:"95ec81779de02bbd416cf2464ab05b04"},{url:"guide/ifreesql-context.html",revision:"e6eeccc76c3c9a9448a1fa2dd097458e"},{url:"guide/index.html",revision:"83218615d240cfcc6ad535a0192308da"},{url:"guide/insert-or-update.html",revision:"854422bdcb5d7626b72783f05344b073"},{url:"guide/insert.html",revision:"50e7b8f1ca127286c72b30c3b59e6851"},{url:"guide/install.html",revision:"ba1a618d7e5ef40666bea66aadd19aca"},{url:"guide/linq-to-sql.html",revision:"4da14b5b39801bb472c5c82a4c005792"},{url:"guide/more.html",revision:"9ffa27f5c1da1b0af2f66343ff9e7baf"},{url:"guide/multi-tenancy.html",revision:"88d7d67176de6b7fd11dab88d6f0d1a6"},{url:"guide/navigate-attribute.html",revision:"8a9f059bde3e16c9d6770de29a02889c"},{url:"guide/paging.html",revision:"33c6a18bea1dd53f918f815d8a86af4f"},{url:"guide/performance.html",revision:"5f41e6ecb557e6fb04435024cb6dbd0e"},{url:"guide/read-write-splitting.html",revision:"50385eff6ddea8746c2df4c98b70baf8"},{url:"guide/repository.html",revision:"b7eb315670ba6c5fd1d4d381d707767f"},{url:"guide/select-as-tree.html",revision:"698c00e1b15524d355db3fb8e0d51396"},{url:"guide/select-group-by.html",revision:"f99af5dcede7558e604d29c388e7ee49"},{url:"guide/select-include.html",revision:"f859f9b1013cd37933d85f3d293c93dd"},{url:"guide/select-lazy-loading.html",revision:"6320e676d0adb5198494bf22a5577e3e"},{url:"guide/select-multi-table.html",revision:"b0c04d6a4a2e028177622b386f1230bc"},{url:"guide/select-return-data.html",revision:"4cc8dd206a7ff071735daec857afcaf8"},{url:"guide/select-single-table.html",revision:"2c65ca842bb8ce8a5606e9af32646866"},{url:"guide/select.html",revision:"c1119cd3d80dca09954b2cd47ccb698e"},{url:"guide/sharding.html",revision:"a09f496ffab4ab229bfa60090a3dc6d5"},{url:"guide/transaction.html",revision:"2b78543898415a917113f9848d5ccd36"},{url:"guide/type-mapping.html",revision:"58eed7da3eba1e8d57835ea824022570"},{url:"guide/unit-of-work.html",revision:"3a08ccf0763a79e3a10ed08e95e7a138"},{url:"guide/unitofwork-manager.html",revision:"be4620f49d92743b25c78525ac5af0b4"},{url:"guide/update.html",revision:"f5c9249a358f688d19395b47d709edd4"},{url:"guide/withsql.html",revision:"cb7f428965719bc5f6c8b8fc31170df2"},{url:"index.html",revision:"47a39c67fd4aec4b9e0595623f27f8f5"},{url:"logo.png",revision:"994ed032d78dce0ef491b36fa4dc95d8"},{url:"mstile-150x150.png",revision:"905e91d3fe4a006d32a842f1e4473456"},{url:"reference/api.html",revision:"5edd85c71061128fa8f72c9830959062"},{url:"reference/awesome-freesql.html",revision:"379f9bbaff59be19e08e902e5c19a13e"},{url:"reference/change-log.html",revision:"03ff95f39bd9a67c82f50b7c2e005bf8"},{url:"reference/donation.html",revision:"088cabfd0425952168cd70d7d1c55d0a"},{url:"reference/faq.html",revision:"317075613b76f20630e0debf9f8a38a7"},{url:"reference/vs-dapper.html",revision:"f46b9b2e43a8586453ea43c73e0e8547"},{url:"reference/vs-entity-framework.html",revision:"e4e8b2d962cac0322b66b676d9d966ff"},{url:"wechat_qrcode.jpg",revision:"44d32d516f6ed4cfe9aa55eac560ea74"}],{})}));
