(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[158],{2710:function(e,t,a){"use strict";a.r(t);var o=a("329fa"),s=a("d787");for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("6413");var r=a("2877"),l=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,"9429995c",null);t["default"]=l.exports},"28d7":function(e,t,a){},"329fa":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"handler-btn primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"container"},[a("Form",{ref:"form",staticClass:"content",attrs:{model:e.model,rules:e.rules,"label-width":140},on:{"on-validate":e.onValidate}},[a("div",{staticClass:"content-box"},[a("kdx-form-title",[e._v("基础信息")]),a("FormItem",{attrs:{label:"渠道状态：",prop:"channel_status"}},[a("RadioGroup",{model:{value:e.model.channel_status,callback:function(t){e.$set(e.model,"channel_status",t)},expression:"model.channel_status"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("开启")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("关闭")])])],1)],1),a("FormItem",{attrs:{label:"默认访问地址：",prop:"default_url"}},[a("Input",{staticClass:"width-300",attrs:{disabled:!0,placeholder:"请输入"},model:{value:e.model.default_url,callback:function(t){e.$set(e.model,"default_url",t)},expression:"model.default_url"}})],1),a("FormItem",{directives:[{name:"error-item",rawName:"v-error-item.logo",modifiers:{logo:!0}}],attrs:{label:"登录页LOGO：",prop:"logo"}},[a("kdx-image-video",{attrs:{type:"image",current:e.model.logo},on:{"on-change":function(t){return e.changeThumb(t,"logo")}}})],1),a("kdx-form-title",[e._v("微信开放平台设置")]),a("FormItem",{attrs:{"label-width":0}},[a("kdx-hint-alert",{attrs:{"show-icon":!1}},[e._v(" 微信扫码登录需要在微信开放平台创建网站应用并审核通过，同时开发平台需要开发者资质认证通过。 "),a("a",{attrs:{href:"https://kf.qq.com/faq/170824URbmau170824r2uY7j.html",target:"_blank"}},[e._v("查看配置引导")])])],1),a("FormItem",{attrs:{label:"微信扫码登录：",prop:"qrcode_login_status"}},[a("RadioGroup",{model:{value:e.model.qrcode_login_status,callback:function(t){e.$set(e.model,"qrcode_login_status",t)},expression:"model.qrcode_login_status"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("关闭")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("开启")])])],1)],1),a("FormItem",{attrs:{label:"AppId：",prop:"app_id"}},[a("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请填写AppId"},model:{value:e.model.app_id,callback:function(t){e.$set(e.model,"app_id",t)},expression:"model.app_id"}})],1),a("FormItem",{attrs:{label:"AppSecret：",prop:"secret"}},[a("Input",{staticClass:"width-300",attrs:{disabled:e.noManagePerm,placeholder:"请填写AppSecret"},model:{value:e.model.secret,callback:function(t){e.$set(e.model,"secret",t)},expression:"model.secret"}})],1),a("kdx-form-title",[e._v("推广设置")]),a("FormItem",{attrs:{label:"网站标题："}},[a("Input",{staticClass:"width-500",attrs:{disabled:e.noManagePerm,placeholder:"请输入"},model:{value:e.model.site_title,callback:function(t){e.$set(e.model,"site_title",t)},expression:"model.site_title"}})],1),a("FormItem",{attrs:{label:"网站图标："}},[a("kdx-image-video",{attrs:{type:"image",current:e.model.site_logo},on:{"on-change":function(t){return e.changeThumb(t,"site_logo")}}}),a("kdx-hint-text",[e._v("建议尺寸100*100")])],1),a("FormItem",{attrs:{label:"网站描述："}},[a("Input",{staticClass:"width-500",attrs:{disabled:e.noManagePerm,placeholder:"请输入"},model:{value:e.model.site_description,callback:function(t){e.$set(e.model,"site_description",t)},expression:"model.site_description"}})],1),a("FormItem",{attrs:{label:"网站关键词："}},[a("Input",{staticClass:"width-500",attrs:{disabled:e.noManagePerm,placeholder:"请输入"},model:{value:e.model.site_keywords,callback:function(t){e.$set(e.model,"site_keywords",t)},expression:"model.site_keywords"}})],1),a("FormItem",{attrs:{label:"工具代码："}},[a("Input",{staticClass:"width-500",attrs:{disabled:e.noManagePerm,type:"textarea",placeholder:"请输入",rows:8},model:{value:e.model.site_analysis_code,callback:function(t){e.$set(e.model,"site_analysis_code",t)},expression:"model.site_analysis_code"}}),a("kdx-hint-text",[e._v("支持CNZZ网站统计、百度统计等，请前往相应网站统计后台，获取代码。")])],1)],1)])],1)])},s=[]},6413:function(e,t,a){"use strict";a("28d7")},7364:function(e,t,a){var o=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7");var s=o(a("ade3")),n=o(a("5530")),r=a("2f62"),l={name:"settings",computed:(0,n.default)((0,n.default)({},(0,r.mapState)("account",{shopId:function(e){return e.shop.shopId}})),{},{noManagePerm:function(){return!this.$getPermMap("pc.sysset.basic.manage")},isRoot:function(){var e,t;return 1==(null===(e=this.$store.state.config)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.is_root)},goodSelector:function(){return 0==this.goodsSelectType||1==this.goodsSelectType||2==this.goodsSelectType?"GoodSelector"+this.goodsSelectType:""},addGoods:function(){var e=this;return!this.goodsList.some((function(t){return e.goodsSelectType&&e.goodsSelectType==t.id}))}}),data:function(){return{model:{channel_status:"",logo:"",wx_scan_login_status:"",wx_app_id:"",wx_app_secret:"",site_title:"",site_logo:"",site_description:"",site_keywords:"",site_analysis_code:"",default_url:""},rules:{channel_status:[{required:!0,message:"请选择渠道状态"}],default_url:[{required:!0,message:"请输入默认访问地址"}],logo:[{required:!0,message:"请上传登陆页LOGO",trigger:"change"}],app_id:[{required:!0,message:"请输入AppId",trigger:"change"}],secret:[{required:!0,message:"请输入AppSecret"}]}}},methods:{validateGoodsForm:function(){var e=this;this.$nextTick((function(){e.$refs.goods.validate().then((function(t){t&&e.errorInfo===e.currentModal&&e.checkError(null)}))}))},changeThumb:function(e,t){this.$set(this.model,t,e)},getData:function(){var e=this;this.$api.homeApi.basicGet({}).then((function(t){0===t.error&&(e.model=Object.assign({},t.data))}))},onValidate:function(e,t){this.cacheError=(0,n.default)((0,n.default)({},this.cacheError),{},(0,s.default)({},e,t))},validate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new Promise((function(a){e.$refs["form"].validate((function(o){a(o),t(o),e.$nextTick((function(){if(!o)for(var t in e.cacheError)if(!e.cacheError[t]){e.$focusError(t);break}}))}))}))},handleSave:function(){var e=this;console.log(this.model,"model"),this.validate((function(t){t&&e.$api.homeApi.basicSet(e.model).then((function(t){0===t.error&&(e.$Message.success("操作成功"),e.getData())}))}))}},mounted:function(){this.getData()}};t.default=l},d787:function(e,t,a){"use strict";a.r(t);var o=a("7364"),s=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=s.a}}]);