(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f5d468b","chunk-11fadca4"],{2280:function(t,a,n){"use strict";var e=n("4ad8"),s=n.n(e);s.a},"3ab3":function(t,a,n){t.exports=n.p+"static/img/logo.f65451f1.png"},"4ad8":function(t,a,n){},"537e":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"transactiondetails"},[n("headertop"),n("div",{staticClass:"transactionzong"},[n("search",{on:{test:t.ceshi}}),n("div",{staticClass:"transactioncontent"},[n("p",{staticClass:"title"},[t._v(t._s(t.$t("transaction.content[0]")))]),n("br"),n("span",{staticClass:"haxi"},[t._v(t._s(t.shiyan))]),n("span",{staticClass:"yue"},[t._v(t._s(t.$t("transaction.content[3]"))+":")]),n("span",{staticClass:"yue2"},[t._v(t._s(t.yue))]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"addressltable",staticStyle:{width:"100%"},attrs:{data:t.transactionData},on:{"row-click":t.gototransactiondetail}},[t.tables?n("el-table-column",{attrs:{prop:"transaction_hash2",label:t.$t("transaction.content[1]"),width:"180"}}):t._e(),n("el-table-column",{attrs:{prop:"transaction_hash",label:t.$t("transaction.content[1]"),width:"180"}}),n("el-table-column",{attrs:{prop:"time",label:t.$t("publicsection[8]"),width:"180"}}),n("el-table-column",{attrs:{prop:"amount",label:t.$t("publicsection[5]")}}),n("el-table-column",{attrs:{prop:"from_address",label:t.$t("publicsection[6]")}}),n("el-table-column",{attrs:{prop:"to_address",label:t.$t("publicsection[7]")}}),n("el-table-column",{attrs:{prop:"gas",label:t.$t("transaction.content[2]")}})],1),n("div",{staticClass:"block"},[0!=t.totalNum?n("el-pagination",{ref:"transactionpagination",attrs:{"current-page":t.transmedianum,"page-size":20,"pager-count":5,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"update:currentPage":function(a){t.transmedianum=a},"update:current-page":function(a){t.transmedianum=a},"current-change":t.change}}):t._e()],1)],1),n("v-footer")],1)],1)},s=[],i=n("a34a"),o=n.n(i),r=n("cdaa"),c=n("9b18"),l=n("b207");function u(t,a,n,e,s,i,o){try{var r=t[i](o),c=r.value}catch(l){return void n(l)}r.done?a(c):Promise.resolve(c).then(e,s)}function h(t){return function(){var a=this,n=arguments;return new Promise((function(e,s){var i=t.apply(a,n);function o(t){u(i,e,s,o,r,"next",t)}function r(t){u(i,e,s,o,r,"throw",t)}o(void 0)}))}}var d={name:"transaction",data:function(){return{loading:!0,shiyan:"",tables:!1,yue:"",language:"",choselanguage:["中文","EN"],nowLang:"",fullscreenLoading:!1,transmedianum:1,totalNum:"",transactionData:[],blue1:!1,blue2:!1}},watch:{transmedianum:function(t){this.blue1=1==t}},components:{VFooter:r["a"],Search:c["default"],headertop:l["default"]},created:function(){this.nowLang=this.$i18n.locale,this.shiyan=this.$route.query.addressvalue,this.transmedianum=1,this.addresssearch(),1==this.transmedianum&&(this.blue1=!0)},methods:{ceshi:function(t){this.shiyan=t,this.addresssearch()},addresssearch:function(){var t=this;return h(o.a.mark((function a(){var n,e;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t,e=[],a.next=4,n.$http.get("/search_transactionInfo_walletAddress",{params:{wallet_address:t.shiyan,pageNum:t.transmedianum,pageSize:20}}).then((function(a){t.loading=!1,t.yue=a.data[0].search_wallet_balance_for_walletAddress[0].account_balance+"\n\nUENC",t.totalNum=a.data[0].total_record[0].total_record;var n=a.data[0].search_transaction_list_for_walletAddress;if("cn"==t.nowLang)for(var s=0;s<n.length+1;s++){var i={},o=[],r=n[s].time,c=Date.parse(new Date)/1e3,l=c-r,u=parseInt(l/86400*24*60);u<60&&(0==u?o.push("刚刚"):o.push(parseInt(u)+"分钟前"),i.time=o),u>=60&&u<=1440&&(o.push(parseInt(u/60)+"小时前"),i.time=o),u>1440&&(o.push(parseInt(u/1440)+"天前"),i.time=o),i.transaction_hash2=n[s].transaction_hash,i.transaction_hash=n[s].transaction_hash.substring(0,10)+"...",i.amount=n[s].amount,i.from_address=n[s].from_address.substring(0,10)+"...",i.to_address=n[s].to_address.substring(0,10)+"...",i.gas=n[s].gas,e[s]=i,t.transactionData=e}else for(var h=0;h<n.length+1;h++){i={};var d=[],g=n[h].time,m=Date.parse(new Date)/1e3,f=m-g,p=parseInt(f/86400*24*60);p<60&&(0==p?d.push("just"):d.push(parseInt(p)+"minutes ago"),i.time=d),p>=60&&p<=1440&&(d.push(parseInt(p/60)+"hour ago"),i.time=d),p>1440&&(d.push(parseInt(p/1440)+"days ago"),i.time=d),i.transaction_hash2=n[h].transaction_hash,i.transaction_hash=n[h].transaction_hash.substring(0,10)+"...",i.amount=n[h].amount,i.from_address=n[h].from_address.substring(0,10)+"...",i.to_address=n[h].to_address.substring(0,10)+"...",i.gas=n[h].gas,e[h]=i,t.transactionData=e}})).catch((function(t){}));case 4:case"end":return a.stop()}}),a)})))()},timestampToTime:function(t){var a=new Date(1e3*t),n=a.getFullYear()+"-",e=(a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1)+"-",s=a.getDate()+" ",i=a.getHours()+":",o=a.getMinutes()+":",r=a.getSeconds();return n+e+s+i+o+r},gotofirst:function(){this.transmedianum=1,this.blue2=!1,this.blue1=!0,this.transactionlist()},gotolast:function(){this.blue1=!1,this.blue2=!0,this.totalNum%20==0?this.transmedianum=this.totalNum/20:this.transmedianum=parseInt(this.totalNum/20)+1,this.transactionlist()},gototransactiondetail:function(t,a,n){this.$router.push({path:"/transactiondetail",query:{transaction_hash:t.transaction_hash2}})},setContextData:function(t,a){"string"==typeof a?sessionStorage.setItem(t,a):sessionStorage.setItem(t,JSON.stringify(a))},getContextData:function(t){var a=sessionStorage.getItem(t);if("string"==typeof a)try{return JSON.parse(a)}catch(n){return a}},change:function(t){this.transmedianum=t,this.setContextData("currentpage2",this.transmedianum),this.addresssearch()}}},g=d,m=(n("d498"),n("2877")),f=Object(m["a"])(g,e,s,!1,null,null,null);a["default"]=f.exports},7554:function(t,a,n){"use strict";var e=n("d77f7"),s=n.n(e);s.a},"7e21":function(t,a,n){t.exports=n.p+"static/img/中英文.4f8c879b.png"},aaeb:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAA8CAYAAABCbxWWAAAEnUlEQVR4Xu2dPW8zRRDHZ87nO/vsO5/jWFZiiYDoXDwKLQ00FIGGJl8hXykfIRUFTURBgYREi0QKWkIRiQgI7xCS3KL/Pl7ruMfBlpyxJmJGWt1L1rPj/y8zu3eS75jWNyai9rzFRISGc2bbUcAR0f283RERGs6ttHUgRUSUEVEyh7qW45UjW4dNFQCHv4noTyKq/svZKsiAm24ajX1eXIG/5rCXDvQYZGRvn4iwhVn2inPaeABk8+/LsnoZZIDNa0MGwAZ6Yw7iDsDojyboJuSQwTiPD4QWojPg4pw2HgCMUL4XSdmEHEp0HXA9gw3yxgy24gClG4syb3XInfkiCx2akA3uVtg86SC43HqoQw7zMGAGyHXY9cWXzc1PykLUGa6lF5ncnd/kCJCXZXNzXhaNzpw/iQLgWIVyPZiXaH+ytv/Y3PwkEZgTcQV80oZblbjp0QRs5VqcwVYG8JBRqnHLMkBels02J2+Fh8ggDpDrl0110PVFmEEW0X8rTj3k5nxcz+QA2iBvhYfMIKsgh3nZIMvovxWvgFwumY+bK2yDvBUcMoMYZBldVXk1yKpwyARjkGV0VeXVIKvCIROMQZbRVZVXg6wKh0wwBllGV1VeDbIqHDLBGGQZXVV5NciqcMgEY5BldFXl1SCrwiETjEGW0VWVV4OsCodMMAZZRldVXg2yKhwywRhkGV1VeTXIqnDIBGOQZXRV5dUgq8IhE4xBltFVlVeDrAqHTDAGWUZXVV4NsiocMsEYZBldVXk1yKpwyARjkGV0VeW1Drn+KInmLxsXj3pyzh4ZoorgGsFwWZb4wRvt7u5WaZpWnU6nSpLElWVZ9ft9NxwO3f7+vpvNZp7u8fHxGm6tiyYF+PDwsByNRi3AzbKsyvO82tnZ8YCLovCQJ5OJOzg48JBns5mm+C2W1Qo4Pjo6KqbTaTeOY9fr9arpdFoNh8Oq1+shg/3TVwF6NBp5yJPJZLVb66FJgTs+OTnJxuPxCFmLko1Svbe3V3W7XX8M2Ig4z3O/LYpC0xewWFYr8Cs75/j09PSNLMsYZTpNUxqPx9i6wWCAOdrDBXRsswwPCjJ7JgqgEn+H1TWdnZ3t53m+UxSFz9x2u+0wJyOr0QAcDX3xT2D2bBT4mZm/95DPz8/TwWDwIkkSRsaGBtiYq7EFbPRtt/GGArNnoAB4fc3Mdx4y7OLi4s0oil5HJiNrATeOYwrlGsfoh3Nmz0KBb5n5G0S6gOyciy4vL99JkmSQJAm1Wi00F7YBMo7N1CvwCxF9zsz+6mgBGQfX19f9qqo+SNO0A5go0ziP/SiKFvvqv+L/O0C8eOQTZv4tyPAvyDh5dXW1m2XZh61WKwvzbxRFPqvxd+ybqVUA76D4mJl/qEf4CmT88ebmpkyS5DiKor1QpgNcg6wW8BURfcTMPzUjXAoZnZxz8e3t7XvM/G700vxnDbI6yHg6/WdE9Ckz42n1r9ijkENP59zo4eHhfWZ++yVjK9dKMGNR9QWugJvlee1MbnZ0zmX39/dvxXH8goheI6IREeG9FbbclqeObMUbYn4koksi+oqIvmRmvB5opf0DKVVNXqTbuZAAAAAASUVORK5CYII="},b207:function(t,a,n){"use strict";n.r(a);var e,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"headertop",class:{sticky:t.sticky}},[e("div",{staticClass:"headerzong"},[t._m(0),e("ul",{staticClass:"header-right"},t._l(t.nav,(function(a,s){return e("li",{key:s,staticClass:"lifirst",class:{nav_li:t.active===s},on:{click:function(n){return t.gorouter(a.path)}}},[e("ul",{staticClass:"lili"},[t.active==s?e("img",{staticClass:"anxia",attrs:{src:n("aaeb")}}):e("div",{staticClass:"tuqi"}),e("li",[e("img",{attrs:{src:a.src}}),e("span",{staticClass:"title"},[t._v(t._s(a.title))])])])])})),0),e("div",{staticClass:"searchlanguage",on:{mouseenter:function(a){return t.switchLan()},mouseleave:function(a){return t.switchLan2()}}},[t.show?e("img",{staticClass:"qiehuan",attrs:{src:n("7e21")}}):e("img",{staticClass:"qiehuan2",attrs:{src:n("e898")}}),t.show?e("img",{staticClass:"righticon",attrs:{src:n("e512")}}):t._e(),e("span",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"headerselect"},[t._v(t._s(t.chose))]),t.show?t._e():e("img",{staticClass:"righticon2",attrs:{src:n("e512")}}),t.show?t._e():e("ul",{staticClass:"language"},[e("li",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],on:{click:t.chinese}},[t._v(" 中文 ")]),e("li",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],on:{click:t.english}},[t._v(" EN ")])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header-left"},[e("img",{attrs:{src:n("3ab3")}})])}],o=n("c8fa"),r=n("b7d1");function c(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}var l=(e={name:"headertop",data:function(){return{active:"",fullscreenLoading:!1,nav:[],sticky:!1,show:!0,nowLang:"",chose:""}},created:function(){var t=this;this.nowLang=this.$i18n.locale,"cn"===this.nowLang&&(this.nav=o["a"].nav,this.chose="语言"),"en"===this.nowLang&&(this.nav=r["a"].nav,this.chose="lan"),this.nav.forEach((function(a,n){"/transactiondetail"==t.$route.path&&(t.active=2),"/transactiondetails"==t.$route.path&&(t.active=2),"/blockdetail"==t.$route.path&&(t.active=1),"/blockdetails"==t.$route.path&&(t.active=1),"/notfound"==t.$route.path&&(t.active=10),a.path===t.$route.path&&(t.active=n)}))},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>0&&(this.sticky=!0),t<10&&(this.sticky=!1)},gorouter:function(t){this.$router.push({path:t})},switchLan2:function(){this.show=!0},switchLan:function(){this.show=!this.show},chinese:function(){var t=this;this.fullscreenLoading=!0,this.$i18n.locale="cn",localStorage.setItem("lang","cn"),setTimeout((function(){t.$router.go(0)}),1500)},english:function(){var t=this;this.fullscreenLoading=!0,this.$i18n.locale="en",localStorage.setItem("lang","en"),setTimeout((function(){t.$router.go(0)}),1500)}}},c(e,"mounted",(function(){window.addEventListener("scroll",this.handleScroll)})),c(e,"destroyed",(function(){window.removeEventListener("scroll",this.handleScroll)})),e),u=l,h=(n("2280"),n("2877")),d=Object(h["a"])(u,s,i,!1,null,null,null);a["default"]=d.exports},b50b:function(t,a,n){},cdaa:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"uenc_foot"},[n("div",{staticClass:"footer"},[n("p",[t._v("Copyright©2015-2018 UENC.All Rights Reserved UENC")])])])}],i={name:"foot",data:function(){return{nowLang:"en",show:!1}},created:function(){},mounted:function(){},methods:{}},o=i,r=(n("7554"),n("2877")),c=Object(r["a"])(o,e,s,!1,null,null,null);a["a"]=c.exports},d498:function(t,a,n){"use strict";var e=n("b50b"),s=n.n(e);s.a},d77f7:function(t,a,n){},e512:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAPCAYAAAA2yOUNAAAA4klEQVQoU2O02FKj+Z+RKZ3hz5/2k/5tLxmwAEaLLfWTGRkZcv4z/L/+l4HJ6bR3wwt0dYxWO+vF/v/+v4+BkVEbl0JGkC5CCsGKCCmEK8KnEEURssL/DAzaDAyMN36z/HbCUARSaL6xzpWRhWEnIwMj47///0swFJlvrNJjZGHdy8jAIPKfgWHHN5avISiKUBQwMmx7w/Au6I7X5J9wRbgUgKwHK8KnAKzIdFOtNjMz0wGwG5CsQI4aRottDZMY///P/c/wf/sbxveBIDdgxJ3ljgahf3/+hrxl+rAQmwKQBgALopDQFb3PcQAAAABJRU5ErkJggg=="},e898:function(t,a,n){t.exports=n.p+"static/img/中英文2.8830eab8.png"}}]);