(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[109],{"0071":function(e,t,n){},1787:function(e,t,n){"use strict";n.r(t);var r=n("3a0e"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"280f":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"remind-label"},[t("span",{staticClass:"box"},[e._v(" "+e._s(e.title)+" "),t("span")])])};t.render=n;var r=[];t.staticRenderFns=r},"3a0e":function(e,t,n){var r=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("c6072")),a={name:"index",components:{RemindLabel:i.default},data:function(){return{type:"1",submitLoading:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("member.level_upgrade.manage")}},created:function(){},mounted:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.$api.memberApi.getUpgrade({}).then((function(t){0==t.error&&(e.type=t.type)}))},handleSave:function(){var e=this;this.submitLoading=!0,this.$api.memberApi.setUpgrade({update_type:this.type}).then((function(t){0==t.error&&(e.getDetail(),e.$Message.success("保存成功")),e.submitLoading=!1}))}}};t.default=a},"43be":function(e,t,n){"use strict";var r=n("280f");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]}))},"440f":function(e,t,n){},8192:function(e,t,n){"use strict";var r=n("c2f0");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]}))},"870e":function(e,t,n){"use strict";n.r(t);var r=n("b50f"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},9610:function(e,t,n){"use strict";n("0071")},b50f:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"RemindLabel",props:{title:{type:String}}};t.default=n},c2f0:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[t("Button",{attrs:{type:"primary",loading:e.submitLoading,disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[t("div",{staticClass:"vip-setting"},[t("div",{staticClass:"content"},[t("kdx-form-title",[e._v(" 会员升级设置 ")]),t("RadioGroup",{staticClass:"r-form-item-checkbox",staticStyle:{"margin-left":"20px"},attrs:{vertical:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[t("Radio",{attrs:{label:"1"}},[t("span",[e._v("订单完成后")]),t("remind-label",{attrs:{title:"推荐"}})],1),t("Radio",{attrs:{label:"2"}},[t("span",[e._v("付款后")]),t("kdx-hint-text",{staticStyle:{display:"inline-block"},attrs:{errContent:"【风险】用户在付款后申请维权，来刷取会员等级的折扣"}})],1)],1)],1)])])};t.render=n;var r=[];t.staticRenderFns=r},c6072:function(e,t,n){"use strict";n.r(t);var r=n("43be"),i=n("870e");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("9610");var s=n("2877"),d=Object(s["a"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"110ea137",null);t["default"]=d.exports},c636:function(e,t,n){"use strict";n("440f")},ce79:function(e,t,n){"use strict";n.r(t);var r=n("8192"),i=n("1787");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("c636");var s=n("2877"),d=Object(s["a"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"780af316",null);t["default"]=d.exports}}]);