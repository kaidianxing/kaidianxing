(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{"04f4":function(t,e,n){t.exports=n.p+"static/dist/shop/img/pink_list.png"},"0fa3":function(t,e,n){t.exports=n.p+"static/dist/shop/img/black_option.png"},"14d1":function(t,e,n){},"16b8":function(t,e,n){t.exports=n.p+"static/dist/shop/img/black_order.png"},"193f":function(t,e,n){var o={"./black/black_list.png":"a6db","./black/black_option.png":"0fa3","./black/black_order.png":"16b8","./blue/blue_list.png":"a52e","./blue/blue_option.png":"e1aed","./blue/blue_order.png":"2a4a1","./default/default_list.png":"6c74","./default/default_option.png":"274e","./default/default_order.png":"a0b3","./green/green_list.png":"c84c","./green/green_option.png":"92a2","./green/green_order.png":"dfbc","./pink/pink_list.png":"04f4","./pink/pink_option.png":"493a","./pink/pink_order.png":"da8b","./purple/purple_list.png":"40a8","./purple/purple_option.png":"4638","./purple/purple_order.png":"1f94","./yellow/yellow_list.png":"d066b","./yellow/yellow_option.png":"c8c4","./yellow/yellow_order.png":"27bb"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="193f"},"1f94":function(t,e,n){t.exports=n.p+"static/dist/shop/img/purple_order.png"},"274e":function(t,e,n){t.exports=n.p+"static/dist/shop/img/default_option.png"},"27bb":function(t,e,n){t.exports=n.p+"static/dist/shop/img/yellow_order.png"},"2a4a1":function(t,e,n){t.exports=n.p+"static/dist/shop/img/blue_order.png"},"40a8":function(t,e,n){t.exports=n.p+"static/dist/shop/img/purple_list.png"},4638:function(t,e,n){t.exports=n.p+"static/dist/shop/img/purple_option.png"},4913:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[n("Button",{staticClass:"primary-long",attrs:{loading:t.loading,disabled:t.noManagePerm},on:{click:t.handleConfirm}},[t._v("保存")])]},proxy:!0}])},[n("div",{staticClass:"theme-setting"},[n("kdx-form-title",[t._v("主题色设置")]),n("Form",{attrs:{"label-width":120}},[n("FormItem",{attrs:{label:"主题色选择："}},[n("div",{staticClass:"theme"},t._l(t.themes,(function(e){return n("div",{key:e.id,staticClass:"theme-item",class:{active:e.id==t.theme_color},on:{click:function(n){return t.handleChoose(e.id)}}},[n("div",{staticClass:"theme-color"},[n("span",{staticClass:"circle",style:{background:e.primary}}),n("span",{staticClass:"circle subcolor",style:{background:e.subcolor}})]),n("div",{staticClass:"theme-text"},[t._v(t._s(e.name))]),e.id==t.theme_color?n("i",{staticClass:"iconfont icon-yes1 theme-choose"}):t._e()])})),0)]),n("FormItem",{attrs:{label:"主题色色值："}},[n("div",{staticClass:"circle-box"},[n("kdx-copy-text",{attrs:{text:t.getChooseTheme.primary}},[n("div",{staticClass:"flex theme-color-tip"},[n("span",{staticClass:"circle",style:{background:t.getChooseTheme.primary}}),n("span",{staticClass:"text"},[t._v(t._s(t.getChooseTheme.primary))])])]),n("kdx-copy-text",{attrs:{text:t.getChooseTheme.subcolor}},[n("div",{staticClass:"flex theme-color-tip"},[n("span",{staticClass:"circle ml-20",style:{background:t.getChooseTheme.subcolor}}),n("span",{staticClass:"text"},[t._v(t._s(t.getChooseTheme.subcolor))])])])],1)]),n("FormItem",{attrs:{label:"主题色示例："}},[n("div",{staticClass:"preview"},t._l(t.getPreviewImgs,(function(t,e){return n("div",{key:e,staticClass:"preview-img"},[n("img",{attrs:{src:t,alt:"",srcset:""}})])})),0)])],1)],1)])},i=[]},"493a":function(t,e,n){t.exports=n.p+"static/dist/shop/img/pink_option.png"},"61ac":function(t,e,n){"use strict";n("14d1")},"642b":function(t,e,n){"use strict";n.r(e);var o=n("4913"),i=n("88a6");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("61ac");var r=n("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"594c8668",null);e["default"]=a.exports},"6c74":function(t,e,n){t.exports=n.p+"static/dist/shop/img/default_list.png"},"88a6":function(t,e,n){"use strict";n.r(e);var o=n("8eaf"),i=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a},"8eaf":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d81d"),n("99af"),n("4de4"),n("d3b7");var o={data:function(){return{loading:!1,themes:[{id:"default",name:"经典红",primary:"#FF3C29",subcolor:"#212121"},{id:"yellow",name:"活力橙",primary:"#F9D72A",subcolor:"#FFF9DA"},{id:"pink",name:"樱花粉",primary:"#FB496F",subcolor:"#FEE2E4"},{id:"green",name:"玛瑙绿",primary:"#19B038",subcolor:"#DCF1E1"},{id:"purple",name:"魅力紫",primary:"#8150F2",subcolor:"#ECE3FC"},{id:"blue",name:"宝石蓝",primary:"#277CF4",subcolor:"#D2E6F9"},{id:"black",name:"曜石黑",primary:"#2A2A2E",subcolor:"#E8E9EF"}],theme_color:"default"}},computed:{getPreviewImgs:function(){var t=this.theme_color,e=["list","option","order"];return e.map((function(e){return n("193f")("./".concat(t,"/").concat(t,"_").concat(e,".png"))}))},noManagePerm:function(){return!this.$getPermMap("diypage.theme_color.manage")},getChooseTheme:function(){var t=this;return this.themes.filter((function(e){return e.id==t.theme_color}))[0]||{}}},created:function(){this.getInfo()},methods:{handleChoose:function(t){this.theme_color=t},getInfo:function(){var t=this;this.loading=!0,this.$api.shopApi.getTheme().then((function(e){0==e.error&&(t.theme_color=e.theme_color||"default")})).finally((function(){t.loading=!1}))},handleConfirm:function(){var t=this;this.$Modal.confirm({title:"提示",content:"您将更换商城内全部页面的主题色,个性化装修页面的各组件颜色请自行调整,确定保存？",onOk:function(){t.handleSave()},onCancel:function(){}})},handleSave:function(){var t=this;this.loading=!0,this.$api.shopApi.setTheme({theme_color:this.theme_color}).then((function(e){0==e.error&&(t.getInfo(),t.$Message.success("操作成功"))})).finally((function(){t.loading=!1}))}}};e.default=o},"92a2":function(t,e,n){t.exports=n.p+"static/dist/shop/img/green_option.png"},a0b3:function(t,e,n){t.exports=n.p+"static/dist/shop/img/default_order.png"},a52e:function(t,e,n){t.exports=n.p+"static/dist/shop/img/blue_list.png"},a6db:function(t,e,n){t.exports=n.p+"static/dist/shop/img/black_list.png"},c84c:function(t,e,n){t.exports=n.p+"static/dist/shop/img/green_list.png"},c8c4:function(t,e,n){t.exports=n.p+"static/dist/shop/img/yellow_option.png"},d066b:function(t,e,n){t.exports=n.p+"static/dist/shop/img/yellow_list.png"},da8b:function(t,e,n){t.exports=n.p+"static/dist/shop/img/pink_order.png"},dfbc:function(t,e,n){t.exports=n.p+"static/dist/shop/img/green_order.png"},e1aed:function(t,e,n){t.exports=n.p+"static/dist/shop/img/blue_option.png"}}]);