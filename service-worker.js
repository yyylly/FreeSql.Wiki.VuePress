if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const d=e=>i(e,r),u={module:{uri:r},exports:n,require:d};s[r]=Promise.all(l.map((e=>u[e]||d(e)))).then((e=>(a(...e),n)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"e1a3966b86e7c2d38cba7487b99cb4e5"},{url:"android-chrome-192x192.png",revision:"5c5a418d7c29275f4ae6ddfcae7a2090"},{url:"android-chrome-512x512.png",revision:"dbcaf7855b3bf777e1650fcfb2533b4f"},{url:"apple-touch-icon.png",revision:"328875080674ea578a41a970f9bf2d29"},{url:"assets/css/styles.ee5862f8.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/4229.c804b0eb.js",revision:null},{url:"assets/js/4332.96c7b937.js",revision:null},{url:"assets/js/5205.2f3ca39d.js",revision:null},{url:"assets/js/8491.c5896c58.js",revision:null},{url:"assets/js/app.639da926.js",revision:null},{url:"assets/js/runtime~app.dd6872f9.js",revision:null},{url:"assets/js/v-08d798b2.5c2cccf0.js",revision:null},{url:"assets/js/v-0921d17b.31cac0c1.js",revision:null},{url:"assets/js/v-0a96cd2d.21fb2d76.js",revision:null},{url:"assets/js/v-0c785bc4.1f4d4df5.js",revision:null},{url:"assets/js/v-0ce4876c.cac08855.js",revision:null},{url:"assets/js/v-100fe338.226ac451.js",revision:null},{url:"assets/js/v-107e3a4c.17eca0bb.js",revision:null},{url:"assets/js/v-10da9644.ea85913a.js",revision:null},{url:"assets/js/v-135e4503.42c2f08c.js",revision:null},{url:"assets/js/v-13d6e5f6.594ad5ff.js",revision:null},{url:"assets/js/v-19d84912.b6ee34a8.js",revision:null},{url:"assets/js/v-19eea59d.b5abc14a.js",revision:null},{url:"assets/js/v-1b20f374.3f0c8acd.js",revision:null},{url:"assets/js/v-1cad7b10.38dd43b5.js",revision:null},{url:"assets/js/v-1d73af95.87610aaa.js",revision:null},{url:"assets/js/v-22df3c61.122ecf8c.js",revision:null},{url:"assets/js/v-24de54ee.3a320340.js",revision:null},{url:"assets/js/v-259c62e1.b039ab09.js",revision:null},{url:"assets/js/v-2648ac1a.aff0995b.js",revision:null},{url:"assets/js/v-275e2a2f.2bb6ef91.js",revision:null},{url:"assets/js/v-28c3945c.0584e6e1.js",revision:null},{url:"assets/js/v-29d78daa.cd7829b4.js",revision:null},{url:"assets/js/v-2b3a8924.cdd6fdfb.js",revision:null},{url:"assets/js/v-2d0a870d.60d296ff.js",revision:null},{url:"assets/js/v-300af17d.6c189e04.js",revision:null},{url:"assets/js/v-3392574c.38b7c3df.js",revision:null},{url:"assets/js/v-3464e36c.0e03b43e.js",revision:null},{url:"assets/js/v-3706649a.2449d72c.js",revision:null},{url:"assets/js/v-3889ebcd.034a542c.js",revision:null},{url:"assets/js/v-38f50e54.a06cf92c.js",revision:null},{url:"assets/js/v-3bb27ea9.c4ecd0cd.js",revision:null},{url:"assets/js/v-3d21f522.9e677763.js",revision:null},{url:"assets/js/v-3e6e95f0.9c19e495.js",revision:null},{url:"assets/js/v-466b2cb2.6647068f.js",revision:null},{url:"assets/js/v-46acd16b.818a2fd0.js",revision:null},{url:"assets/js/v-4e3df5b1.93af797d.js",revision:null},{url:"assets/js/v-52acee36.08b676fc.js",revision:null},{url:"assets/js/v-53a22a9b.2fbad0ef.js",revision:null},{url:"assets/js/v-578131e6.b95fbc38.js",revision:null},{url:"assets/js/v-5ccd7e2c.b1460cc9.js",revision:null},{url:"assets/js/v-5d526c16.08b5b4bb.js",revision:null},{url:"assets/js/v-5fa3f531.49ad7ed5.js",revision:null},{url:"assets/js/v-6059229c.fe97c7da.js",revision:null},{url:"assets/js/v-60c55912.afb53c66.js",revision:null},{url:"assets/js/v-68763ece.629167f2.js",revision:null},{url:"assets/js/v-6879b57d.d1d87610.js",revision:null},{url:"assets/js/v-6cdf9fd9.c2b433bd.js",revision:null},{url:"assets/js/v-6ce48554.fb95c565.js",revision:null},{url:"assets/js/v-6dc1ceac.f52f4134.js",revision:null},{url:"assets/js/v-6e61f61e.08bc768d.js",revision:null},{url:"assets/js/v-737e532c.3e5f5a4c.js",revision:null},{url:"assets/js/v-786147a6.0ab393d8.js",revision:null},{url:"assets/js/v-7919c9a2.2c4373e1.js",revision:null},{url:"assets/js/v-7aa8fa6a.0f81f98f.js",revision:null},{url:"assets/js/v-7ad3128b.39a94486.js",revision:null},{url:"assets/js/v-7ce4c14a.96df791a.js",revision:null},{url:"assets/js/v-8daa1a0e.3a37856b.js",revision:null},{url:"assets/js/v-945cf558.8bc66bea.js",revision:null},{url:"assets/js/v-9b6c7ddc.8f76a361.js",revision:null},{url:"assets/js/v-9d037942.2d6807dc.js",revision:null},{url:"assets/js/v-9d397e8e.f589d53c.js",revision:null},{url:"assets/js/v-a1a49808.32b76f93.js",revision:null},{url:"assets/js/v-aa863f00.8b887afb.js",revision:null},{url:"assets/js/v-aaf75552.5d252f9d.js",revision:null},{url:"assets/js/v-b147b508.ffe555ff.js",revision:null},{url:"assets/js/v-b7d94a60.7dc81304.js",revision:null},{url:"assets/js/v-bb011780.a2989e7d.js",revision:null},{url:"assets/js/v-bea7aa1c.61e2766e.js",revision:null},{url:"assets/js/v-bfa4a14a.37dc2284.js",revision:null},{url:"assets/js/v-ca9835b8.ffa9e405.js",revision:null},{url:"assets/js/v-cc6d4d78.1c435e49.js",revision:null},{url:"assets/js/v-ce832304.84d238e5.js",revision:null},{url:"assets/js/v-d5ba0b9c.cada5008.js",revision:null},{url:"assets/js/v-d6ed953a.79d89a8d.js",revision:null},{url:"assets/js/v-e45cc9ec.5f64ab9a.js",revision:null},{url:"assets/js/v-e6412400.c176980f.js",revision:null},{url:"assets/js/v-f07fc1be.481ad56e.js",revision:null},{url:"assets/js/v-fb0f0066.cc5f7204.js",revision:null},{url:"assets/js/v-fffb8e28.93a01595.js",revision:null},{url:"contributing.html",revision:"ef7a02dee37673b16d8ac929accc05ea"},{url:"en/guide/Cascade-Saving.html",revision:"f28eba80d77a209e26820864f474c7c6"},{url:"en/guide/CodeFirst-Mode.html",revision:"d3fe8f2038fe2433ccd3f4014f2ae0f9"},{url:"en/guide/Delete-Data.html",revision:"55a4aa30f71271bdd9e659e8d0a9ba4c"},{url:"en/guide/getting-started.html",revision:"a21dee6a2fe2d154e2cbaa99a7a3d48a"},{url:"en/guide/Greed-Loading.html",revision:"8b9fe3e4aaa1f5118dda684a8d76160c"},{url:"en/guide/Group-Aggregation-Query.html",revision:"f25e063df837b0cd6ff0886ed24ba095"},{url:"en/guide/index.html",revision:"cf0991ff23cc3b8201459af49458beb9"},{url:"en/guide/Insert-Data.html",revision:"61e3f45f3721ea62298cbc063b95bd25"},{url:"en/guide/insert-or-update.html",revision:"ccc8b99d7e6ef9a78f7001a99bffd9c5"},{url:"en/guide/install.html",revision:"76d1b45bac168946588849f9a7cfd187"},{url:"en/guide/Lazy-Loading.html",revision:"08d3257165caaf312b3b63b82ea97580"},{url:"en/guide/Linq-to-Sql.html",revision:"151f1988a6820a5f0e2f7e2897d4a7f1"},{url:"en/guide/Pagination.html",revision:"e94962a465222f3a4bd78a4204e8879d"},{url:"en/guide/Parent-Child-Relationship-Query.html",revision:"fe6c20856a13edb7ad041c5e8e26c81d"},{url:"en/guide/Query-Data.html",revision:"831052aeb5246b17c2b365551e407c23"},{url:"en/guide/Query-from-Multi-Table.html",revision:"0761fd79093a693bfb99c10c9e33ce27"},{url:"en/guide/Query-from-Single-Table.html",revision:"81213decc3631a6327d0d158805d575b"},{url:"en/guide/Repository-Layer.html",revision:"0112d9b95284187cbb30e39d1dc1f096"},{url:"en/guide/Return-Data.html",revision:"3ff0cca54427ea26136320be8acaba89"},{url:"en/guide/type-mapping.html",revision:"653ee0aecb4cc1f32f5851b57fe1578e"},{url:"en/guide/Unit-of-Work-Manager.html",revision:"6d1c07e4416a8edc2c9249bd8c001781"},{url:"en/guide/Unit-of-Work.html",revision:"94f8e26df2114cbac8bc8c2d55e74c93"},{url:"en/guide/Update-Data.html",revision:"a51aa10213186cf71ddc63340565fdf9"},{url:"en/guide/With-Sql.html",revision:"9d9e8b3f30d2391521892fd6d1d31786"},{url:"en/index.html",revision:"167218b7bc4e656654a791262ed941ab"},{url:"favicon-16x16.png",revision:"85e898664445fdc5f71a2cca96278f52"},{url:"favicon-32x32.png",revision:"376de207c8dd3f4c2baa4445600d07cb"},{url:"guide/ado.html",revision:"ccc3fb72d9dffc1696f0e42ebfebbad3"},{url:"guide/aop.html",revision:"4e2af5bec455672487f0d7e4cc9ea59b"},{url:"guide/BaseEntity.html",revision:"f015ec862062973a0960cb31b3145658"},{url:"guide/cascade-saving.html",revision:"ac460fd176d0e9d710520ca3327d4192"},{url:"guide/code-first.html",revision:"1122d9ae8521285cd25aceb14aad7202"},{url:"guide/config-entity-from-db-first.html",revision:"77874efbad4ef54dac2578081c28ca85"},{url:"guide/custom-attribute.html",revision:"877026f504f0efa69dbdd167a325786b"},{url:"guide/db-context.html",revision:"c99d3689f899a5679e58859342ed3564"},{url:"guide/db-first.html",revision:"2f7c5158149801bc3fffb6c690f208d0"},{url:"guide/delegate.html",revision:"dfb3fd9e8583eef72e9ad6802810d67f"},{url:"guide/delete.html",revision:"c953acd06a4917ec5457d86ae08d42eb"},{url:"guide/entity-attribute.html",revision:"a2a68828b12050f5590bb5cb82464294"},{url:"guide/expression-function.html",revision:"cb9e60a495a9047b373a9c3139fa1e52"},{url:"guide/filters.html",revision:"45a34a9d835105529c426c22a5aec6b5"},{url:"guide/fluent-api.html",revision:"18f0c94025666d60ed34878c6d4a283f"},{url:"guide/getting-started.html",revision:"74fa6e48cac2151c30740c7e7eecf028"},{url:"guide/ifreesql-context.html",revision:"62e25d98b9adc85807163c021cd521ba"},{url:"guide/index.html",revision:"f937ec7bec0ffc968ed586c6c1b097a7"},{url:"guide/insert-or-update.html",revision:"8f822d34b3f3ae9bbadfeb85e1b3ac86"},{url:"guide/insert.html",revision:"9a296d0150cd0d911fea55712c2a9efd"},{url:"guide/install.html",revision:"69fcc85f23e7cd4dfea0244cdf435c5e"},{url:"guide/linq-to-sql.html",revision:"4c760970d801bd0462e2f9e2bdb9029d"},{url:"guide/more.html",revision:"aa6312b9df0b88254bb4af2138da442f"},{url:"guide/multi-tenancy.html",revision:"e1322f9ebb28c7fdb98dd027e7a15768"},{url:"guide/navigate-attribute.html",revision:"b12c12d9bf98a14d03a0824353695583"},{url:"guide/paging.html",revision:"96815e1ec1ad1cef09ebb41b3855c400"},{url:"guide/performance.html",revision:"03142b6aae1296d52424d66e27997c7a"},{url:"guide/read-write-splitting.html",revision:"e928f53ea526359fe4b4deff606aa06b"},{url:"guide/repository.html",revision:"e85ff88dac1dfd4d4a9ef655ca865fe0"},{url:"guide/select-as-tree.html",revision:"4d3e74a1863325c0b713c6ea0107036f"},{url:"guide/select-group-by.html",revision:"3ea0e0ec5da8ccb7163a8047d7551ee3"},{url:"guide/select-include.html",revision:"11f7d32ca26314c3a5fe97656b693576"},{url:"guide/select-lazy-loading.html",revision:"99866acbecc0e3a4aebeff8d2bb27df1"},{url:"guide/select-multi-table.html",revision:"a74e0eb247a93e60d2d40ba3fb3e8763"},{url:"guide/select-return-data.html",revision:"d222570b326ea49e1bf97f55e0a7104a"},{url:"guide/select-single-table.html",revision:"92b74d4d9360323274fb1a06de6d690b"},{url:"guide/select.html",revision:"31c3623e1dcc8df866d8090276673f55"},{url:"guide/sharding.html",revision:"665506a1d2d93700aae328d9bd20e8a1"},{url:"guide/transaction.html",revision:"3df9ac1079e93ae928151a029d7ca87f"},{url:"guide/type-mapping.html",revision:"88ea72a39ed76b2d258a4f84520aa5bb"},{url:"guide/unit-of-work.html",revision:"27496b0cbd6c9b65e2358fd752998734"},{url:"guide/unitofwork-manager.html",revision:"a4e78274148982d21237e7779abb5d82"},{url:"guide/update.html",revision:"14b4334c0d8ef17b67f00f4a45bc1c12"},{url:"guide/withsql.html",revision:"9211ddec96c4788125d5c22ba4909ca5"},{url:"index.html",revision:"b399593e7cb0f684fb9c6a226fc5b9a9"},{url:"logo.png",revision:"994ed032d78dce0ef491b36fa4dc95d8"},{url:"mstile-150x150.png",revision:"905e91d3fe4a006d32a842f1e4473456"},{url:"reference/api.html",revision:"3c27dc37b8a2ff08bd2b5422e8c97856"},{url:"reference/awesome-freesql.html",revision:"2053efb1f58296fc29bf6c27529d8ece"},{url:"reference/change-log.html",revision:"c69840581613c30eae4018d10a442f6f"},{url:"reference/donation.html",revision:"ab036a8b8e70c10d6a75ba903ff5d05d"},{url:"reference/faq.html",revision:"f4bf598175ed7e595ec6b5a3a05f3d90"},{url:"reference/vs-dapper.html",revision:"522d266e70a468160f34da62b6cbc5df"},{url:"reference/vs-entity-framework.html",revision:"7b61d845f6d32d03768103bea50e4241"},{url:"wechat_qrcode.jpg",revision:"44d32d516f6ed4cfe9aa55eac560ea74"}],{})}));