(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[117],{6695:function(e,t,n){"use strict";n("8402")},"68ba":function(e,t,n){"use strict";n.r(t);var a=n("e160"),o=n("bff9");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("6695");var s=n("2877"),i=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"aa36a4ee",null);t["default"]=i.exports},8402:function(e,t,n){},bff9:function(e,t,n){"use strict";n.r(t);var a=n("ea1a"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},e160:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"condition-consumption"},[n("FormItem",{attrs:{label:"消费条件：","label-width":120,prop:"become_order_money"}},[n("kdx-rr-input",{staticStyle:{width:"250px"},attrs:{fixed:2,"min-value":.01,number:"","max-value":9999999.99,maxlength:10,disabled:e.noManagePerm},model:{value:e.settings.become_order_money,callback:function(t){e.$set(e.settings,"become_order_money",t)},expression:"settings.become_order_money"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("消费满")]),n("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])])],1),n("FormItem",{staticStyle:{"margin-bottom":"0"},attrs:{label:"统计方式：","label-width":120,prop:"become_order_status"}},[n("MyRadioGroup",{attrs:{items:e.type},model:{value:e.settings.become_order_status,callback:function(t){e.$set(e.settings,"become_order_status",t)},expression:"settings.become_order_status"}})],1)],1)},o=[]},ea1a:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d81d");var o=a(n("5530")),r=a(n("5471")),s=n("2f62"),i={components:{MyRadioGroup:r.default},computed:(0,o.default)((0,o.default)({},(0,s.mapState)("commission/settings",{settings:function(e){return e.settings}})),{},{noManagePerm:function(){return!this.$getPermMap("commission.settings.commission.manage")},type:function(){var e=this;return[{label:"订单付款后",id:"1"},{label:"订单完成后",id:"2"}].map((function(t){return t.disabled=e.noManagePerm,t}))}})};t.default=i}}]);