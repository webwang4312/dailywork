(function(e){function n(n){for(var o,a,i=n[0],u=n[1],s=n[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var i=t[a];0!==c[i]&&(o=!1)}o&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},a={app:0},c={app:0},r=[];function i(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-13dab316":"56d6b92f","chunk-0d9ee7d1":"cd993bf7","chunk-5316da32":"c8c30a1b","chunk-9774b9b0":"0d00d808","chunk-7c5e09bf":"866caca6","chunk-5920373d":"49564bed","chunk-0d396cdd":"2c3f8f27","chunk-21c1b89c":"08883a7d","chunk-272f9d6c":"8517a973","chunk-2be448ca":"4c9d1b5a","chunk-2dc6fb26":"e02316fb","chunk-351c7f91":"808dbd0d","chunk-626fe2c5":"7d72614e","chunk-6780e65a":"95cd0a4a","chunk-7f977758":"a2b7a037","chunk-89fcb670":"a76ec83e","chunk-c9e42d02":"31b33684","chunk-fc8d2b1c":"44ba84dc","chunk-bdadfafe":"dd5abb20","chunk-36e337b3":"a3c6718a","chunk-e56439e4":"ff5f27bf"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-0d9ee7d1":1,"chunk-5316da32":1,"chunk-7c5e09bf":1,"chunk-5920373d":1,"chunk-0d396cdd":1,"chunk-21c1b89c":1,"chunk-272f9d6c":1,"chunk-2be448ca":1,"chunk-2dc6fb26":1,"chunk-351c7f91":1,"chunk-626fe2c5":1,"chunk-6780e65a":1,"chunk-7f977758":1,"chunk-89fcb670":1,"chunk-c9e42d02":1,"chunk-fc8d2b1c":1,"chunk-bdadfafe":1,"chunk-36e337b3":1,"chunk-e56439e4":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="static/css/"+({}[e]||e)+"."+{"chunk-13dab316":"31d6cfe0","chunk-0d9ee7d1":"987b3f7e","chunk-5316da32":"f475f377","chunk-9774b9b0":"31d6cfe0","chunk-7c5e09bf":"4ca9c33c","chunk-5920373d":"8f37e076","chunk-0d396cdd":"786d7f33","chunk-21c1b89c":"0afb01eb","chunk-272f9d6c":"dfced296","chunk-2be448ca":"29c50d35","chunk-2dc6fb26":"9c69a36c","chunk-351c7f91":"b0a07615","chunk-626fe2c5":"eee17aef","chunk-6780e65a":"e5ea51f8","chunk-7f977758":"2d5c9745","chunk-89fcb670":"45a3eb22","chunk-c9e42d02":"15b016bb","chunk-fc8d2b1c":"a925806d","chunk-bdadfafe":"66776a13","chunk-36e337b3":"d1ebcf29","chunk-e56439e4":"9141cc4a"}[e]+".css",c=u.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===c))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===o||l===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],f.parentNode.removeChild(f),t(r)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("8bbf"),a=t.n(o),c=(t("db4d"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e.$route.meta.keepAlive&&e.isRouterAlive?t("keep-alive",[t("router-view")],1):e._e(),!e.$route.meta.keepAlive&&e.isRouterAlive?t("router-view"):e._e()],1)}),r=[],i={name:"app",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},created:function(){var e=this;localStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(localStorage.getItem("store")))),window.addEventListener("beforeunload",(function(){localStorage.setItem("store",JSON.stringify(e.$store.state))}))},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},mounted:function(){var e=this;(window.ActiveXObject||"ActiveXObject"in window)&&window.addEventListener("hashchange",(function(){var n=window.location.hash.slice(1);e.$route.path!==n&&e.$router.push(n)}),!1)}},u=i,s=(t("7c55"),t("2877")),l=Object(s["a"])(u,c,r,!1,null,null,null),d=l.exports,f=t("6389"),h=t.n(f);a.a.use(h.a);var b=[{path:"/",redirect:"/index"},{path:"/login",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf")]).then(t.bind(null,"080e"))}},{path:"/ceshi",component:function(){return t.e("chunk-36e337b3").then(t.bind(null,"cd20"))}},{path:"/forgetpassword",name:"forgetpassword",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-5316da32"),t.e("chunk-9774b9b0")]).then(t.bind(null,"c96b"))},meta:{keepAlive:!1}},{path:"/swiper",name:"swiper",component:function(){return t.e("chunk-e56439e4").then(t.bind(null,"c991"))},meta:{keepAlive:!1}},{path:"/fastoken",name:"fastoken",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-0d9ee7d1")]).then(t.bind(null,"acd1"))},meta:{keepAlive:!1}},{path:"/fastokensecond",name:"fastokensecond",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-bdadfafe")]).then(t.bind(null,"89f6"))},meta:{keepAlive:!1}},{path:"/header",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-2be448ca")]).then(t.bind(null,"d784"))}},{path:"/index",name:"index",component:function(e){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-21c1b89c")]).then(function(){var n=[t("d504")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/about",name:"about",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-272f9d6c")]).then(t.bind(null,"f820"))},meta:{keepAlive:!1}},{path:"/FAQ",name:"FAQ",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-2dc6fb26")]).then(t.bind(null,"0b2e"))},meta:{keepAlive:!1}},{path:"/news",name:"news",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-fc8d2b1c")]).then(t.bind(null,"89b15"))},meta:{keepAlive:!1}},{path:"/partner",name:"partner",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-6780e65a")]).then(t.bind(null,"b084"))},meta:{keepAlive:!1}},{path:"/detail",name:"detail",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-c9e42d02")]).then(t.bind(null,"c84b"))},meta:{keepAlive:!1}},{path:"/proposal",name:"proposal",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-7f977758")]).then(t.bind(null,"2f56"))},meta:{keepAlive:!1}},{path:"/toproposal",name:"toproposal",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-0d396cdd")]).then(t.bind(null,"4130"))},meta:{keepAlive:!1}},{path:"/proposaldetail",name:"proposaldetail",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-89fcb670")]).then(t.bind(null,"4fe0"))},meta:{keepAlive:!1}},{path:"/vote",name:"vote",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-351c7f91")]).then(t.bind(null,"29c8"))},meta:{keepAlive:!1}},{path:"/votedetail",name:"votedetail",component:function(){return Promise.all([t.e("chunk-13dab316"),t.e("chunk-7c5e09bf"),t.e("chunk-5316da32"),t.e("chunk-5920373d"),t.e("chunk-626fe2c5")]).then(t.bind(null,"ef50"))},meta:{keepAlive:!1}}],p=new h.a({routes:b}),m=p,k=t("2f62");a.a.use(k["a"]);var g,v=new k["a"].Store({state:{login:!0,showlogin:!1,number:"",forget:!1,username:"",userId:"",fastoken:!1,fastokensecond:!1,votenumber:!1,votenumbers:""},mutations:{voteNumber:function(e){e.votenumber=!e.votenumber},loginShow:function(e){e.showlogin=!e.showlogin},fastokenShow:function(e){return 0==e.fastoken?e.fastoken=!0:1==e.fastoken?e.fastoken=!1:void 0},fastokensecondShow:function(e){return 0==e.fastokensecond?e.fastokensecond=!0:1==e.fastokensecond?e.fastokensecond=!1:void 0},fastokenHide:function(e){if(1==e.fastoken)return e.fastoken=!1},fastokensecondHide:function(e){if(1==e.fastokensecond)return e.fastokensecond=!1},numberShow:function(e){return e.number=0},numberShow2:function(e){return e.number=1},leavelogin:function(e){localStorage.setItem("loginState",new Date),e.username=void 0;var n={password1:"",token:"",userId:"",username:"",username1:""};localStorage.setItem("store",JSON.stringify(n))},login:function(e){return e.login=!1},forget:function(e){if(0==e.forget)return e.forget=!0},forgetlogin:function(e){if(1==e.forget)return e.forget=!1},forgetFastoken:function(e){if(1==e.fastoken)return e.fastoken=!1}},actions:{login:function(e){e.commit("login")},loginShow:function(e){e.commit("loginShow")},fastokenShow:function(e){e.commit("fastokenShow")},fastokensecondShow:function(e){e.commit("fastokensecondShow")},fastokenHide:function(e){e.commit("fastokenHide")},numberShow:function(e){e.commit("numberShow")},numberShow2:function(e){e.commit("numberShow2")},leavelogin:function(e){e.commit("leavelogin")},forget:function(e){e.commit("forget")},forgetlogin:function(e){e.commit("forgetlogin")},forgetFastoken:function(e){e.commit("forgetFastoken")}},modules:{}}),w=t("cebe"),P=t.n(w),y=t("4897"),E=t.n(y),C=t("a925"),O=t("b2d6"),N=t.n(O);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var U=S((g={nav:[{PageTo:"首页",title:"Home"},{PageTo:"FAQ",title:"FAQ"},{PageTo:"关于项目",title:"About"},{PageTo:"关于社区",title:"Community"},{PageTo:"媒体公告",title:"News"},{PageTo:"合作伙伴",title:"Partner"}],liulanqi:["ChainExplorer"],baipishu:["Download white paper>"],recommendtitle:["UENC mainnet is online"],recommendshorttitle:["The Testing Ends When Block Height Reaches 500,000"],learnmore:["Learn more"],video:["UENC Video"],project:["Achievements of UENC"],videotitle:["UENC is a scalable public chain with cross-chain technology that allows users to use digital assets safely and quickly."],height:["Block Height"],number:["Full network nodes"],jiangli:["Rewards"],sum:["Transactions"],contactus:["Contact Us"],contactcontent:["UENC implements a non-competitive mining and decentralized mechanism that enables everyone to build UENC network infrastructure and ecosystem and share dividends of global token economic growth altogether.","Welcome to contact us.","We need more information to provide a better solution.Please fill in the blanks and we will get back to you asap."],meidaannouncement:["Media announcement"],phone:["phone"],email:["mailbox"],submit:["submit","success"],Partner:["Partner"]},j(g,"Partner",["Partner"]),j(g,"Mediaannouncement",["News"]),j(g,"shangbiao",["Copyright©2015-2020 UENC All rights reserved UENC"]),j(g,"about",["About"]),j(g,"aboutcontent",["Team building","Project introduction","Technology Roadmap"]),j(g,"aboutdescription",["Technical Elements of UENC","Based on DHT, CPS and self-developed DPOW consensus, UENC is featured by highly efficient node structure and high speed transaction.","Application Value of UENC","UENC offers on-chain transaction of high-concurrency, high speed and low cost, which fits the underlayer technical requirement of developing token economy in the future.","EnergyClub APP introduction","EngergyClub is an education APP for Blockchain fans who can get digital asset reward through learning.","About UENC Main Net Wallet","UENC main net wallet is a fully decentralized wallet based on Blockchain technology","UENC","A scalable basic public chain with cross-chain technology as its direction, UENC relies on innovative technologies such as DHT mesh network and cross-parallel storage technology (CPS).Based on self-developed DPOW consensus algorithm,UENC can provide high-concurrency and efficient transaction.",'In the future, UENC will apply cross-chain technology and solve Bitcoin"s increasing congestion problem. UENC will further develop trusted network, develop basic cross-chain interface and build SDK, and create a global trusted value network.']),j(g,"partner",["Partner"]),j(g,"index",["Home"]),j(g,"media",["News"]),j(g,"FAQ",["Common problem"]),j(g,"time",["2018","2019","2020","2021","2022"]),j(g,"jieduan",["Q1","Q2","Q3","Q4","July","August","September","October","November","December"]),j(g,"jieduancontent",["Design architecture of public chain","R&D of Peer to Peer network","Design and develop distributed storage query network","Design and develop service components of encryption and decryption","R&D of secure and smart contract components","R&D of DPOW, a self-developed consensus algorithm","Develop application scenario and public chain iteration","Function development of mainnet (Phase I)","Mainnet (Phase I) opens","Optimize function of mainnet (Phase I)","Mainnet (Phase II) opens","Optimize function of mainnet (Phase II)","Officially launches mainnet","Optimize architecture of Virtual Machine, Construct highly efficient and secure smart contract;Develop DAPP and SDK;R&D of cross-chain with Bitcoin network and integrate consensus layer","Develop UENC 2.0;Solve scalability problem","Smart transmission of on/off chain data;Increase transparency of on-chain data","Classify storage distribution in multiple devices;Implement token application for 10,000 enterprises"]),j(g,"login",["Login","Register","username","password","login","remember password","forgot password","mobile phone number","verification","confirm password","email","Remember login"]),j(g,"forgetpassword",["Forgot Password","Mobile Number","Verification","Enter Password","Enter Password Again","Confirm"]),j(g,"fastoken",["Bind wallet","Enter wallet address","Enter UENC quantity","Enter transaction hash","Confirm","After binding the wallet address, the wallet address cannot be changed, please check carefully","Transfer to wallet address"]),g),N.a),D=U,T=t("f0d9"),x=t.n(T);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var R=Q({nav:[{PageTo:"首页",title:"首页"},{PageTo:"FAQ",title:"FAQ"},{PageTo:"关于项目",title:"关于项目"},{PageTo:"关于社区",title:"关于社区"},{PageTo:"媒体公告",title:"媒体公告"},{PageTo:"合作伙伴",title:"合作伙伴"}],liulanqi:["区块链浏览器"],baipishu:["下载白皮书>"],recommendtitle:["UENC主网已上线"],recommendshorttitle:["本次公测在主网区块高度达50万时结束"],learnmore:["了解更多"],video:["UENC 视频简介"],project:["UENC 项目成果"],videotitle:["UENC是一条具有跨链技术的可扩展公链，能让用户安全、快捷地使用数字资产。"],height:["区块高度"],number:["全网节点"],jiangli:["发放奖励"],sum:["累计交易笔数"],contactus:["联系我们"],contactcontent:["UENC实行无竞争挖矿及去中心化机制，人人都可参与UENC网络基础设施及生态发展建设，共享全球通证经济生态增长红利。","我们欢迎您与我们联系。 我们需要您的问题详情和有关您的更多信息，以便能够为您提供更好的解决方案。","请填写右方表格，我们将为您提供有关您的问题的更多信息。"],meidaannouncement:["媒体公告"],phone:["电话"],email:["邮箱"],submit:["提交","提交成功"],Partner:["合作伙伴"],Mediaannouncement:["媒体公告"],shangbiao:["Copyright©2015-2020 UENC 保留所有权利UENC"],about:["关于项目"],aboutcontent:["团队建设","项目介绍","技术路线图"],aboutdescription:["UENC技术原理","UENC公链基于DHT网状网络、交叉式并行存储技术（CPS），建立了高效的节点组合结构，通过自主研发DPOW共识算法，实现了高效链上交易。","UENC应用价值","UENC实现了高并发、高速度、低成本的用户链上交易体验，满足了未来通证经济高速发展的底层技术需求。","EnergyClub APP介绍","EnergyClub APP是一款集学习、游戏、赚钱为一体的区块链知识社区工具，零门槛，不花钱，趣味学习、提升认知，为你打开区块链财富之门。","UENC主网钱包介绍","UENC主网钱包是一个基于区块链技术的完全去中心化钱包。","UENC","UENC是一个以跨链为技术方向的可扩展基础公链，基于DHT网状网络、交叉式并行存储技术（CPS）等创新技术，通过自主研发DPOW共识算法，实现了高并发、高速度、低成本的用户链上交易体验，满足了未来通证经济高速发展的底层技术需求。","未来，UENC率先完成与比特币网络的跨链技术开发和应用，解决比特币日益增加的网络拥堵问题，进一步研发可信网络，开发基础跨链接口并构建SDK，最终构建全球可信价值网络。"],partner:["合作伙伴"],index:["首页"],media:["媒体公告"],FAQ:["常见问题"],time:["2018","2019","2020","2021","2022"],jieduan:["Q1","Q2","Q3","Q4","7月","8月","9月","10月","11月","12月"],jieduancontent:["公链架构设计","点对点网络设计研发","分布式存储查询网络设计研发","加解密服务组件设计研发","安全智能合约组件设计研发","创新型DPOW共识算法设计研发","应用场景开发及公链迭代研发","主网第一阶段功能开发","主网第一阶段公测","主网第一阶段功能优化","主网第二阶段公测","主网并发交易开发","主网正式上线","优化虚拟机架构； 搭建高效安全的智能合约； DAPP应用SDK开发；比特币跨链研发，共识层融合。","UENC2.0开发，解决区块链高度不断延展的并发瓶颈。","链上与链下数据智能传输；增加链上数据的可信度","多形态设备承担分类存储；完成一万家企业通证应用落地。"],login:["登录","注册","用户名","密码","登录","记住密码","忘记密码","手机号","发送验证码","确认密码","邮箱","下次自动登录"],forgetpassword:["忘记密码","手机号","验证码","输入密码","再次输入密码","确认"],fastoken:["绑定钱包","输入钱包地址","输入UENC数量","输入交易哈希","确认","绑定了钱包地址后，将无法更改钱包地址，请认真核对","转入钱包地址"]},x.a),H=R,_={en:D,cn:H};a.a.use(C["a"]);var B=new C["a"]({locale:localStorage.lang||"cn",messages:_});E.a.i18n((function(e,n){return B.t(e,n)}));var M=B,$=(t("499a"),t("98c9")),L=t("8832"),W=t.n(L),q={install:function(e){e.directive("preventClick",{inserted:function(e,n){e.addEventListener("click",(function(){e.disabled||(e.disabled=!0,setTimeout((function(){e.disabled=!1}),4e3))}))}})}};a.a.use($["a"]),a.a.component("paginate",W.a),a.a.config.productionTip=!1,a.a.use(q),a.a.prototype.$http=P.a,m.afterEach((function(e,n,t){window.scrollTo(0,0)})),new a.a({router:m,store:v,i18n:M,render:function(e){return e(d)}}).$mount("#app")},6389:function(e,n){e.exports=VueRouter},"7c55":function(e,n,t){"use strict";var o=t("2395"),a=t.n(o);a.a},"8bbf":function(e,n){e.exports=Vue},cebe:function(e,n){e.exports=axios}});