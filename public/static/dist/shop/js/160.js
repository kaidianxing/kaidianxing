(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[160],{"0a52":function(e,t,a){"use strict";a.r(t);var o=a("cc85"),s=a("ed3d");for(var l in s)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(l);a("8775");var n=a("2877"),i=Object(n["a"])(s["default"],o["a"],o["b"],!1,null,"a69f05f4",null);t["default"]=i.exports},"4b80":function(e,t,a){},8775:function(e,t,a){"use strict";a("4b80")},cc85:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"handler-btn primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"container"},[a("Form",{ref:"form",staticClass:"content",attrs:{model:e.model,rules:e.rules,"label-width":140},on:{"on-validate":e.onValidate}},[a("div",{staticClass:"content-box"},[a("kdx-form-title",[e._v("基础设置")]),a("FormItem",{attrs:{label:"客服管理：",prop:"status"}},[a("RadioGroup",{model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("开启")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("关闭")])])],1)],1),a("FormItem",{attrs:{label:"客服名称：",prop:"name"}},[a("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"6","show-word-limit":""},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("FormItem",{attrs:{label:"姓名显示："}},[a("RadioGroup",{model:{value:e.model.service_name_show,callback:function(t){e.$set(e.model,"service_name_show",t)},expression:"model.service_name_show"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("显示")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("隐藏")])])],1)],1),a("FormItem",{attrs:{label:"客服姓名："}},[a("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"6","show-word-limit":""},model:{value:e.model.service_name,callback:function(t){e.$set(e.model,"service_name",t)},expression:"model.service_name"}})],1),a("FormItem",{attrs:{label:"QQ客服："}},[a("RadioGroup",{model:{value:e.model.qq_show,callback:function(t){e.$set(e.model,"qq_show",t)},expression:"model.qq_show"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("显示")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("隐藏")])])],1)],1),a("FormItem",{attrs:{label:"标题："}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"classFortItem"},[a("Input",{staticClass:"width-150",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"6","show-word-limit":""},model:{value:e.model.qq_title,callback:function(t){e.$set(e.model,"qq_title",t)},expression:"model.qq_title"}})],1),a("div",{staticClass:"classFortItem"},[a("FormItem",{attrs:{label:"QQ号码："}},[a("div",{staticClass:"flex"},[a("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"10","show-word-limit":""},model:{value:e.model.qq_number,callback:function(t){e.$set(e.model,"qq_number",t)},expression:"model.qq_number"}})],1)])],1)])]),a("FormItem",{attrs:{label:"微信客服："}},[a("RadioGroup",{model:{value:e.model.wechat_show,callback:function(t){e.$set(e.model,"wechat_show",t)},expression:"model.wechat_show"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("显示")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("隐藏")])])],1)],1),a("FormItem",{attrs:{label:"标题："}},[a("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"6","show-word-limit":""},model:{value:e.model.wechat_title,callback:function(t){e.$set(e.model,"wechat_title",t)},expression:"model.wechat_title"}})],1),a("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.logo",modifiers:{logo:!0}}],attrs:{label:"二维码："}},[a("kdx-image-video",{attrs:{type:"image",current:e.model.wechat_qrcode},on:{"on-change":function(t){return e.changeThumb(t,"wechat_qrcode")}}}),a("kdx-hint-text",[e._v("建议尺寸142*142")])],1),a("FormItem",{attrs:{label:"服务热线："}},[a("RadioGroup",{model:{value:e.model.service_phone_show,callback:function(t){e.$set(e.model,"service_phone_show",t)},expression:"model.service_phone_show"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("显示")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("隐藏")])])],1)],1),a("FormItem",{attrs:{label:"标题："}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"classFortItem"},[a("Input",{staticClass:"width-150",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"6","show-word-limit":""},model:{value:e.model.service_phone_title,callback:function(t){e.$set(e.model,"service_phone_title",t)},expression:"model.service_phone_title"}})],1),a("div",{staticClass:"classFortItem"},[a("FormItem",{attrs:{label:"电话："}},[a("div",{staticClass:"flex"},[a("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请输入",maxlength:"11","show-word-limit":""},model:{value:e.model.service_phone_number,callback:function(t){e.$set(e.model,"service_phone_number",t)},expression:"model.service_phone_number"}})],1)])],1)])])],1)])],1)])},s=[]},d860:function(e,t,a){var o=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7");var s=o(a("ade3")),l=o(a("5530")),n=a("2f62"),i={name:"serviceManaging",computed:(0,l.default)((0,l.default)({},(0,n.mapState)("account",{shopId:function(e){return e.shop.shopId}})),{},{noManagePerm:function(){return!this.$getPermMap("pc.sysset.customer-service.manage")},isRoot:function(){var e,t;return 1==(null===(e=this.$store.state.config)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.is_root)},goodSelector:function(){return 0==this.goodsSelectType||1==this.goodsSelectType||2==this.goodsSelectType?"GoodSelector"+this.goodsSelectType:""},addGoods:function(){var e=this;return!this.goodsList.some((function(t){return e.goodsSelectType&&e.goodsSelectType==t.id}))}}),data:function(){return{linkFlg:0,showUnionSelect:!1,currentModal:{},model:{status:"",name:"",title:"",service_name_show:"",service_name:"",qq_show:"",qq_title:"",qq_number:"",wechat_show:"",wechat_title:"",wechat_qrcode:"",service_phone_show:"",service_phone_title:"",service_phone_number:""},rules:{status:[{required:!0,message:"请选择客服状态"}],name:[{required:!0,message:"请输入客服名称"}]},submitLoading:!1}},methods:{changeThumb:function(e,t){this.$set(this.model,t,e)},getData:function(){var e=this;this.$api.homeApi.servicGet({}).then((function(t){0===t.error&&(e.model=Object.assign({},t.data))}))},onValidate:function(e,t){this.cacheError=(0,l.default)((0,l.default)({},this.cacheError),{},(0,s.default)({},e,t))},validate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise((function(a){e.$refs["form"].validate((function(o){a(o),t(o),e.$nextTick((function(){if(!o)for(var t in e.cacheError)if(!e.cacheError[t]){e.$focusError(t);break}}))}))}))},handleSave:function(){var e=this;this.validate((function(t){t&&e.$api.homeApi.servicSet(e.model).then((function(t){0===t.error&&(e.$Message.success("操作成功"),e.getData())}))}))}},mounted:function(){this.getData()}};t.default=i},ed3d:function(e,t,a){"use strict";a.r(t);var o=a("d860"),s=a.n(o);for(var l in o)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(l);t["default"]=s.a}}]);