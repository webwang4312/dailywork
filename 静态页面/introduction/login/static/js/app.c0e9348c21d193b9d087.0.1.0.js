(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17ac":function(e,t,n){},2395:function(e,t,n){},4528:function(e,t,n){"use strict";var r=n("17ac"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("5f5f");var r=n("f253"),o=(n("ac1e"),n("543e")),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u=(n("7c55"),n("2877")),c={},l=Object(u["a"])(c,s,i,!1,null,null,null),d=l.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("p",{staticClass:"title"},[e._v("区块浏览器")]),r("img",{staticClass:"zhong",attrs:{src:n("9d11")}}),r("p",{staticClass:"title2",attrs:{id:"title2"},on:{click:e.lookForward}},[e._v("敬请期待...")])])},g=[],m={data:function(){return{}},watch:{},created:function(){},mounted:function(){},methods:{lookForward:function(){window.android.setUrl("http://www.uenc.io/")}}},h=m,w=(n("4528"),Object(u["a"])(h,p,g,!1,null,null,null)),v=w.exports;a["default"].use(f["a"]);var y=[{path:"/",name:"Registered",component:v}],b=new f["a"]({routes:y}),P=b,O=n("2f62");a["default"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=n("bc3a"),k=n.n(x),_=n("4897"),C=n.n(_),E=n("a925"),z=n("5530"),M=n("b2d6"),q=n.n(M),$=Object(z["a"])({titletop:["EnergyClub APP"],titlesecond:["Industry leading blockchain knowledge learning community APP"],content:[" Integrate answering questions, live learning, communication, mining, and games in one, with 110,000+ real-name registered users"],title:["Yuexi Knowledge Wisdom Incentives Create the Future"],contenttitle:["Here, you can learn blockchain knowledge by answering questions and watching live broadcasts and obtain corresponding energy block rewards, and then synthesize valuable assets"],name:["Enter your nickname"],phone:["Enter your mobile phone number"],yanzhengma:["Enter confirmation code"],password:["Enter your password"],confirmpassword:[" Confirm your password "],notpassword:["Password input is inconsistent"],yaoqingma:["Invitation code"],zhuce:["Registered"],xiazai:["Download EnergyClub APP"],language:["Chose language"],yanzhengma2:["Verification"],android:["Android download"],ios:["ios  download"]},q.a),A=$,S=n("f0d9"),R=n.n(S),I=Object(z["a"])({titletop:["EnergyClub APP"],titlesecond:["行业领先的区块链知识学习类社区APP"],content:[" 集答题、直播学习、交流、挖矿、游戏于一体 拥有11万+实名注册用户"],title:["悦习知识 智赢激励 创享未来"],contenttitle:["在这里，可以通过答题、观看直播学习区块链知识并获得相应的能量块奖励，进而合成有价资产"],name:["输入您的昵称"],phone:["输入您的手机号"],yanzhengma:["输入验证码"],password:["请输入您的密码"],confirmpassword:["再次确认您的密码"],notpassword:["密码输入不一致"],yaoqingma:["邀请码"],zhuce:["注册"],xiazai:["下载 EnergyClub APP"],language:["选择语言"],yanzhengma2:["获取验证码"],error:["手机号输入错误"],android:["Android版本下载"],ios:["ios版本下载"]},R.a),T=I,F={en:A,cn:T};a["default"].use(E["a"]);var J=new E["a"]({locale:localStorage.lang||"English",messages:F,silentTranslationWarn:!0});C.a.i18n((function(e,t){return J.t(e,t)}));var W=J,D=(n("d3b7"),n("5c96")),H=n.n(D);function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){k.a.get(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){r(e)}))}))}function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){k.a.post(e,t).then((function(e){n(e.data)})).catch((function(e){r(e)}))}))}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){k.a.put(e,t).then((function(e){n(e.data)})).catch((function(e){r(e)}))}))}function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){k.a.delete(e,t).then((function(e){n(e.data)})).catch((function(e){r(e)}))}))}k.a.interceptors.request.use((function(e){return e}),(function(e){return D["Message"].error({message:"请求超时"}),Promise.resolve(e)})),k.a.interceptors.response.use((function(e){if(!e.status||200!=e.status||"error"!=e.data.status)return e;D["Message"].error({message:e.data.msg})}),(function(e){return console.log(e),e.response?(504==e.response.status||404==e.response.status?D["Message"].error({message:"服务器又炸了？"}):403==e.response.status?D["Message"].error({message:"权限不足,请联系管理员!"}):D["Message"].error({message:"网络连接失败"}),Promise.resolve(e)):Object(D["Message"])({message:"加载中"})}));n("0fae"),n("499a");var B=n("8237"),G=n.n(B);a["default"].config.productionTip=!1,a["default"].use(o["a"]),a["default"].use(r["a"]),k.a.defaults.timeout=3e4,a["default"].prototype.$http=k.a,a["default"].prototype.$getRequest=K,a["default"].prototype.$postRequest=U,a["default"].prototype.$putRequest=V,a["default"].prototype.$deleteRequest=Y,a["default"].use(H.a),a["default"].prototype.$md5=G.a,new a["default"]({router:P,store:j,i18n:W,render:function(e){return e(d)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},"9d11":function(e,t,n){e.exports=n.p+"static/img/0903@3x.a53becdc.png"}});