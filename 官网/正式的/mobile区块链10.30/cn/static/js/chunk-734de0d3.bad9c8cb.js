(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-734de0d3"],{"537e":function(t,a,s){"use strict";s.r(a);var e=s("a34a"),n=s.n(e);function i(t,a,s,e,n,i,r){try{var o=t[i](r),c=o.value}catch(t){return void s(t)}o.done?a(c):Promise.resolve(c).then(e,n)}var r={name:"transaction",data:function(){return{loadingtext:"",show_silde:!1,listloading2:!1,finished2:!1,blockmedianum:1,pageSize2:6,total2:"",loading:!0,sticky2:!1,shiyan:"",tables:!1,yue:"",language:"",chose:"",show:!0,choselanguage:["中文","EN"],nowLang:"",cur:"",fullscreenLoading:!0,transmedianum:1,totalNum:"",transactionData:[]}},watch:{},components:{vSearch:s("9b18").a},created:function(){this.$i18n.locale="cn",this.transactionData=[],this.nowLang=this.$i18n.locale,this.cur=2,this.shiyan=this.$route.query.addressvalue,this.transmedianum=1,this.addresssearch(),"en"==this.nowLang&&(this.loadingtext="Loading..."),"cn"==this.nowLang&&(this.loadingtext="加载中...")},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeRouteEnter:function(t,a,s){localStorage.setItem("toname",t.name),localStorage.setItem("fromname",a.name),s()},methods:{callBack:function(){var t=navigator.userAgent,a=-1<t.indexOf("Android")||-1<t.indexOf("Adr"),s=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);try{s&&window.webkit.messageHandlers.returnBack.postMessage("ok"),a&&window.android.back()}catch(t){}},gotoblockdetail:function(t){this.$router.push({path:"/transactiondetail",query:{transaction_hash:t}})},returnBack:function(){this.$router.go(-1)},onLoad2:function(){if(!(this.transmedianum<this.total2+Number(1)))return this.listloading2=!1;this.transmedianum+=1,this.addresssearch()},openPop:function(){this.show_silde=!0},closePop:function(){this.show_silde=!1},ceshi:function(t){this.shiyan=t,this.transmedianum=1,this.transactionData=[],this.addresssearch()},addresssearch:function(){var t,a=this;return t=n.a.mark((function t(){var s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a,t.next=3,s.$http.get("/search_transactionInfo_walletAddress",{params:{wallet_address:a.shiyan,pageNum:a.transmedianum,pageSize:5}}).then((function(t){if(a.fullscreenLoading=!1,a.listloading2=!1,a.total2=t.data[0].total_page[0].totalPageNum,a.transactionData=a.transactionData.concat(t.data[0].search_transaction_list_for_walletAddress),a.yue=t.data[0].search_wallet_balance_for_walletAddress[0].account_balance+"\n\nUENC",a.totalNum=t.data[0].total_record[0].total_record,"cn"==a.nowLang)for(var s=0;s<t.data[0].search_transaction_list_for_walletAddress.length+1;s++){var e=t.data[0].search_transaction_list_for_walletAddress[s].time,n=Date.parse(new Date)/1e3,i=parseInt((n-e)/86400*24*60);i<60&&(t.data[0].search_transaction_list_for_walletAddress[s].time=0==i?"刚刚":i+"分钟前"),60<=i&&i<=1440&&(t.data[0].search_transaction_list_for_walletAddress[s].time=parseInt(i/60)+"小时前"),1440<i&&(t.data[0].search_transaction_list_for_walletAddress[s].time=parseInt(i/1440)+"天前")}else for(var r=0;r<t.data[0].search_transaction_list_for_walletAddress.length+1;r++){var o=t.data[0].search_transaction_list_for_walletAddress[r].time,c=Date.parse(new Date)/1e3,l=parseInt((c-o)/86400*24*60);l<60&&(t.data[0].search_transaction_list_for_walletAddress[r].time=0==l?"Just":l+"Minutes ago"),60<=l&&l<=1440&&(t.data[0].search_transaction_list_for_walletAddress[r].time=parseInt(l/60)+"Hours ago"),1440<l&&(t.data[0].search_transaction_list_for_walletAddress[r].time=parseInt(l/1440)+"Days ago")}})).catch((function(t){}));case 3:case"end":return t.stop()}}),t)})),function(){var a=this,s=arguments;return new Promise((function(e,n){var r=t.apply(a,s);function o(t){i(r,e,n,o,c,"next",t)}function c(t){i(r,e,n,o,c,"throw",t)}o(void 0)}))}()},timestampToTime:function(t){var a=new Date(1e3*t);return a.getFullYear()+"-"+(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;0<t&&(this.sticky2=!0),t<10&&(this.sticky2=!1)},gototransactiondetail:function(t){this.$router.push({path:"/transactiondetail",query:{transaction_hash:t.transaction_hash2}})},setContextData:function(t,a){"string"==typeof a?sessionStorage.setItem(t,a):sessionStorage.setItem(t,JSON.stringify(a))},getContextData:function(t){var a=sessionStorage.getItem(t);if("string"==typeof a)try{return JSON.parse(a)}catch(t){return a}},jump:function(t,a){if(this.cur=2,"/d"!=this.$route.path)switch(a){case"首页":this.$router.push({name:"index"});break;case"区块":this.$router.push({name:"block"});break;case"交易":this.$router.push({name:"transaction"});break;case"地址":this.$router.push({name:"addressed"});break;case"Home":this.$router.push({name:"index"});break;case"Block":this.$router.push({name:"block"});break;case"Trans":this.$router.push({name:"transaction"});break;case"Address":this.$router.push({name:"addressed"})}}},computed:{nav:{get:function(){return this.$t("nav")},set:function(){}}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},o=(s("d498"),s("2877")),c=Object(o.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"transactiondetails"},[e("div",{staticClass:"headertop",class:{sticky2:t.sticky2}},[e("img",{attrs:{src:s("fd13"),id:"slideleft"},on:{click:t.returnBack}}),e("p",{staticClass:"header_title"},[t._v(t._s(t.$t("nav[3].title")))]),e("div",{attrs:{id:"topbutton"}},[e("img",{attrs:{src:s("e34a"),id:"slideright"},on:{click:t.openPop}}),e("div",{staticClass:"buttonline"}),e("img",{attrs:{src:s("4990"),id:"slideright2"},on:{click:t.callBack}})]),e("van-popup",{attrs:{position:"top",overlay:!0,"overlay-class":"popstyle"},model:{value:t.show_silde,callback:function(a){t.show_silde=a},expression:"show_silde"}},[e("img",{attrs:{src:s("305f")},on:{click:t.closePop}}),e("ul",{staticClass:"title_list"},t._l(t.nav,(function(a,s){return e("li",{key:s,class:{active:t.cur==s},on:{click:function(e){return t.jump(s,a.title)}}},[t.cur==s?e("img",{attrs:{src:a.src2}}):e("img",{attrs:{src:a.src}}),e("p",[t._v(t._s(a.title))])])})),0)])],1),e("v-search",{on:{test:t.ceshi}}),e("div",{staticClass:"detailstop"},[e("p",[t._v(t._s(t.shiyan))]),e("p",[e("span",[t._v(t._s(t.$t("transaction.content[3]"))+":")]),t._v(" "+t._s(t.yue)+" ")])]),e("van-list",{attrs:{finished:t.finished2,"immediate-check":!1,"finished-text":"没有更多了",offset:10,"loading-text":t.loadingtext},on:{load:t.onLoad2},model:{value:t.listloading2,callback:function(a){t.listloading2=a},expression:"listloading2"}},t._l(t.transactionData,(function(a){return e("van-cell",{key:a.id,staticClass:"vancell2",on:{click:function(s){return t.gotoblockdetail(a.transaction_hash)}}},[e("div",{staticClass:"pdetail2"},[e("p",[e("span",[t._v(t._s(t.$t("home.contenttop[1]"))+":")]),e("span",[t._v(t._s(a.transaction_hash.substring(0,18)+"..."))])]),e("p",[e("span",[t._v(t._s(t.$t("publicsection[8]"))+":")]),e("span",[t._v(t._s(a.time))])]),e("p",[e("span",[t._v(t._s(t.$t("publicsection[6]"))+":")]),e("span",[t._v(t._s(a.from_address.substring(0,18)+"..."))])]),e("p",[e("span",[t._v(t._s(t.$t("publicsection[7]"))+":")]),e("span",[t._v(t._s(a.to_address.substring(0,18)+"..."))])]),e("p",[e("span",[t._v(t._s(t.$t("publicsection[5]"))+":")]),e("span",[t._v(t._s(a.amount))])])])])})),1)],1)}),[],!1,null,null,null);a.default=c.exports},b50b:function(t,a,s){},d498:function(t,a,s){"use strict";var e=s("b50b");s.n(e).a}}]);