(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-187a214a"],{"1f6b":function(t,e,s){"use strict";s.r(e);var n={name:"chart",data:function(){return{show_silde:!1,sticky2:!1,nowLang:"",cur:"",fullscreenLoading:!1,language:"",chose:"",show:!0,choselanguage:["中文","EN"]}},components:{vSearch:s("9b18").a},created:function(){this.$i18n.locale="cn",this.nowLang=this.$i18n.locale,"en"==this.nowLang&&(this.chose="lan"),"cn"==this.nowLang&&(this.chose="语言"),this.cur=3},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeRouteEnter:function(t,e,s){localStorage.setItem("toname",t.name),localStorage.setItem("fromname",e.name),s()},computed:{nav:{get:function(){return this.$t("nav")},set:function(){}}},methods:{callBack:function(){var t=navigator.userAgent,e=-1<t.indexOf("Android")||-1<t.indexOf("Adr"),s=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);try{s&&window.webkit.messageHandlers.returnBack.postMessage("ok"),e&&window.android.back()}catch(t){}},ceshi:function(){},returnBack:function(){this.$router.go(-1)},openPop:function(){this.show_silde=!0},closePop:function(){this.show_silde=!1},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;0<t&&(this.sticky2=!0),t<10&&(this.sticky2=!1)},chinese:function(){var t=this;this.fullscreenLoading=!0,this.$i18n.locale="cn",localStorage.setItem("lang","cn"),setTimeout((function(){t.$router.go(0)}),1500)},english:function(){var t=this;this.fullscreenLoading=!0,this.$i18n.locale="en",localStorage.setItem("lang","en"),setTimeout((function(){t.$router.go(0)}),1500)},switchLan2:function(){this.show=!0},switchLan:function(){this.show=!this.show},jump:function(t,e){if(this.cur=3,"/d"!=this.$route.path)switch(e){case"首页":this.$router.push({name:"index"});break;case"区块":this.$router.push({name:"block"});break;case"交易":this.$router.push({name:"transaction"});break;case"地址":this.$router.push({name:"addressed"});break;case"Home":this.$router.push({name:"index"});break;case"Block":this.$router.push({name:"block"});break;case"Trans":this.$router.push({name:"transaction"});break;case"Address":this.$router.push({name:"addressed"})}}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},i=(s("ca99"),s("2877")),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notfound"},[n("div",{staticClass:"headertop",class:{sticky2:t.sticky2}},[n("img",{attrs:{src:s("fd13"),id:"slideleft"},on:{click:t.returnBack}}),n("p",{staticClass:"header_title"},[t._v(t._s(t.$t("home.cardleft[4]")))]),n("div",{attrs:{id:"topbutton"}},[n("img",{attrs:{src:s("e34a"),id:"slideright"},on:{click:t.openPop}}),n("div",{staticClass:"buttonline"}),n("img",{attrs:{src:s("4990"),id:"slideright2"},on:{click:t.callBack}})]),n("van-popup",{attrs:{position:"top",overlay:!0,"overlay-class":"popstyle"},model:{value:t.show_silde,callback:function(e){t.show_silde=e},expression:"show_silde"}},[n("img",{attrs:{src:s("305f")},on:{click:t.closePop}}),n("ul",{staticClass:"title_list"},t._l(t.nav,(function(e,s){return n("li",{key:s,class:{active:t.cur==s},on:{click:function(n){return t.jump(s,e.title)}}},[t.cur==s?n("img",{attrs:{src:e.src2}}):n("img",{attrs:{src:e.src}}),n("p",[t._v(" "+t._s(e.title)+" ")])])})),0)])],1),n("v-search",{on:{test:t.ceshi}}),n("div",{staticClass:"not"},[n("img",{staticClass:"notimg",attrs:{src:s("87e9")}}),n("p",[t._v(t._s(t.$t("notfound[0]")))])])],1)}),[],!1,null,null,null);e.default=o.exports},"87e9":function(t,e,s){t.exports=s.p+"static/img/组 222.748dafc8.png"},ca99:function(t,e,s){"use strict";var n=s("f876");s.n(n).a},f876:function(t,e,s){}}]);