(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[142],{"0c20":function(t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{versionInfo:{version:"",release:""}}},created:function(){this.upgradeInit()},methods:{upgradeInit:function(){var t=this;this.$api.systemApi.getUpgradeInfo().then((function(i){0===i.error&&(t.versionInfo=i)}))},startUpgrade1:function(){window.open("https://gitee.com/kaidianxing/kaidianxing")},startUpgrade2:function(){window.open("https://gitee.com/kaidianxing/kaidianxing-admin")}}};i.default=n},"0c66":function(t,i,n){"use strict";n.d(i,"a",(function(){return e})),n.d(i,"b",(function(){return a}));var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"content"},[n("div",{staticClass:"content-box"},[n("div",{staticClass:"title",on:{click:t.upgradeInit}},[n("kdx-form-title",{attrs:{hasMargin:!1}},[t._v("系统升级")])],1),n("div",{staticClass:"isnew"},[n("div",{staticClass:"version-info"},[t.versionInfo?n("div",{staticClass:"version-info-tips"},[t._v(" 当前为最新版本 ")]):t._e(),n("div",{staticClass:"version-info-code"},[t._v(" "+t._s(t.versionInfo.version)+" ")]),n("div",{staticClass:"version-info-time"},[t._v(" 发行版本号 "+t._s(t.versionInfo.release)+" ")])]),t._m(0),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"operate-btn",on:{click:t.startUpgrade1}},[t._v("下载后端代码")]),n("div",{staticClass:"operate-btn",on:{click:t.startUpgrade2}},[t._v("下载前端代码")])])]),t._t("default")],2)])},a=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"upgrade-status"},[n("div",{staticClass:"item"},[n("div",{staticClass:"text",staticStyle:{"font-size":"12px",color:"#939799","line-height":"16px"}},[t._v(" 升级请下载最新代码 ")])])])}]},2581:function(t,i,n){},"31a9":function(t,i,n){"use strict";n.r(i);var e=n("0c66"),a=n("6cc7");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(s);n("aaae");var o=n("2877"),r=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,"a6c24154",null);i["default"]=r.exports},"6cc7":function(t,i,n){"use strict";n.r(i);var e=n("0c20"),a=n.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a},aaae:function(t,i,n){"use strict";n("2581")}}]);