if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const b=e=>a(e,r),t={module:{uri:r},exports:d,require:b};s[r]=Promise.all(i.map((e=>t[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-git-basic.html-75a23f93.js",revision:"8ea38b84ee882c42ff9f8685fd34372a"},{url:"assets/01-git-basic.html-f418a763.js",revision:"1e9a8ace4a5c26106641e62771983cf4"},{url:"assets/02-git-branch.html-620b86f1.js",revision:"beab0ccc6c36dfe50f8245b44f34b928"},{url:"assets/02-git-branch.html-923e6c6e.js",revision:"4c7f42591fa525750cc2c249ce7ffbe7"},{url:"assets/100-git-config-proxy.html-721a0e77.js",revision:"238291363bb0a606489ac535557a00df"},{url:"assets/100-git-config-proxy.html-8f22aeff.js",revision:"06d2a8d4eadfd6623fb0eb5cf559ea8d"},{url:"assets/200-git-chinese-translate.html-5b981c16.js",revision:"3cf67e7a313cdb872b5a20fac3ac8c22"},{url:"assets/200-git-chinese-translate.html-6f994085.js",revision:"f1ee4aa58cd55baf692c4e539f197bd9"},{url:"assets/404.html-022c795f.js",revision:"2ba1faf2940ced8a53553926a6bb7d75"},{url:"assets/404.html-a202f78d.js",revision:"67878ca83c076f3a0bb6491b598c45b8"},{url:"assets/app-7769e225.js",revision:"12f47a90dad3cbec68aa61ba51b6ea06"},{url:"assets/Catalog-2f06cbd3.js",revision:"e56127563ed450384bf210bc7f887c92"},{url:"assets/framework-182bcb23.js",revision:"40f5a1fa818206595e9e5adf600ad26d"},{url:"assets/giscus-6650c2d9.js",revision:"282a7cb29f6aabbebb5de1c42a089f2c"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-145e81bd.js",revision:"4c0a038b9bd887e56fe45d1f24657ccf"},{url:"assets/index.html-169f762b.js",revision:"afd3d62c6025c57b439b7cda94a2b849"},{url:"assets/index.html-1d90605d.js",revision:"e6a8372a4ef88f4a10fda471e8b3e5b3"},{url:"assets/index.html-2d70d12f.js",revision:"b218d2793a1f838a3d25cce7e1aab53e"},{url:"assets/index.html-30fe9cd4.js",revision:"0b59969bc700365c829917bacd945955"},{url:"assets/index.html-3180956b.js",revision:"49ce9b0f4c25a7e859bf2b9798918beb"},{url:"assets/index.html-38f84e5c.js",revision:"67492c1dac694629ed152796a40f909b"},{url:"assets/index.html-3b00c042.js",revision:"8a755c7aa23f74b4685157273b65e29b"},{url:"assets/index.html-60aa903b.js",revision:"4ad13d55abb157b2564fa9e2e06fd5e7"},{url:"assets/index.html-7d498121.js",revision:"0b59969bc700365c829917bacd945955"},{url:"assets/index.html-829b56eb.js",revision:"693a48426deb6668c0bcac78ba5eb95a"},{url:"assets/index.html-87d701f4.js",revision:"67492c1dac694629ed152796a40f909b"},{url:"assets/index.html-897a05ae.js",revision:"b7f8558da2de2e8f0613fe33b6e74b29"},{url:"assets/index.html-afc39036.js",revision:"f9394c4c7a808b127f3b6e84bd8024b2"},{url:"assets/index.html-c5f629d2.js",revision:"0b59969bc700365c829917bacd945955"},{url:"assets/index.html-c70d2d89.js",revision:"772363f79410636b5f3056809cee87bc"},{url:"assets/index.html-c94e8ee4.js",revision:"0b59969bc700365c829917bacd945955"},{url:"assets/index.html-e24675f1.js",revision:"0b59969bc700365c829917bacd945955"},{url:"assets/index.html-e4cc93d8.js",revision:"0b59969bc700365c829917bacd945955"},{url:"assets/index.html-f0a8050e.js",revision:"02d238bf9df725d7687a64ea7e861eca"},{url:"assets/index.html-f150c62f.js",revision:"e158294910116305ff8c0d045d66124b"},{url:"assets/index.html-f8d69314.js",revision:"a85d9f6645f2445ca413bad7310c7efb"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/SearchResult-7936e1b5.js",revision:"6e31555a4b5f9a0b313a6a3dde616785"},{url:"assets/style-1350a3b3.css",revision:"bb40cc9145e15e9aee32f5603a963ef5"},{url:"assets/technology-site-collected.html-0fb5d8a6.js",revision:"c90aa05238818c9afd45db8acb9b46c1"},{url:"assets/technology-site-collected.html-dbd64942.js",revision:"29c5c5698e8e89b069e37d82ad57676a"},{url:"assets/vue-basic.html-27cfe4b9.js",revision:"23b772ee5a532dee08d8a9cf94cb9a23"},{url:"assets/vue-basic.html-43519ca1.js",revision:"762a8927a290ce9c4116f5610c6a10ba"},{url:"assets/布局模板.html-40fa854e.js",revision:"f848c5b68f9418f372d80ea4d3f1e9a5"},{url:"assets/布局模板.html-4a484271.js",revision:"1652274ba55482f5992918ae899f7961"},{url:"assets/文章模板.html-258774af.js",revision:"47b52fdc7f87543fa27cb20804de555d"},{url:"assets/文章模板.html-78a53f0e.js",revision:"86789e96b4f5d3a4be6b46ac19610541"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"a4c8319598cf8446774b1153105683fd"},{url:"article/index.html",revision:"b83fd1b5dc3f09b612f5cbcb20c69702"},{url:"blog/index.html",revision:"1e4cab9c763a968ced7e5dff32aa579c"},{url:"category/index.html",revision:"f01f015de42e4065ff3a42db4cfdf0ad"},{url:"index.html",revision:"d312c19e6e1826a892486e094896bef3"},{url:"project/git/01-git-basic.html",revision:"2c426246747cbf76a2d853cdafb6f951"},{url:"project/git/02-git-branch.html",revision:"332725e6e805cfe5be42de780dc9c39b"},{url:"project/git/100-git-config-proxy.html",revision:"4387448f76ecbf53147e905d29f9d733"},{url:"project/git/200-git-chinese-translate.html",revision:"d7015d9773ae08587d6a8a90453d02ed"},{url:"project/git/index.html",revision:"22f54b78acbe67ee8beaefee2b3ffbc4"},{url:"project/index.html",revision:"73d7a22337cc0d61926b70a83aa7bd4f"},{url:"project/technology-site-collected/index.html",revision:"6f98674c66774ba9d0f0533b72548156"},{url:"project/technology-site-collected/technology-site-collected.html",revision:"782513d4c5a2f20e51c7767a8e378b3f"},{url:"project/vue/index.html",revision:"1eaa1088cd1d87a695cc95045dc4b1a0"},{url:"project/vue/vue-basic.html",revision:"69c373a296aa61735e13bb5aeb9f01ca"},{url:"star/index.html",revision:"6c3ab2321807606d4ed0bb5fd979e121"},{url:"tag/index.html",revision:"65def33f91b6febac0920f9c3480483c"},{url:"timeline/index.html",revision:"2726d4df776309b062f84d0924a80b0c"},{url:"布局模板.html",revision:"861a05389b20e27863dd47a9314f055a"},{url:"文章模板.html",revision:"6e46d98a88a75a09ac6c672693da05f3"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"index-logo.png",revision:"b6433fd5076640350a3513e6c1d19861"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
