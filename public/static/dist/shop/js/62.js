(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{"0184":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存 ")])]},proxy:!0}])},[a("div",{staticClass:"channel-register"},[a("Form",{ref:"form",attrs:{"label-width":180,model:t.form,rules:t.rules}},[a("div",{staticClass:"item-box"},[a("div",{staticClass:"form-title-box"},[a("kdx-form-title",{attrs:{hasMargin:!1}},[t._v("授权登录")]),a("kdx-hint-alert",{staticClass:"hint-tip",attrs:{"show-icon":!1}},[t._v("用户访问商城时，是否需要授权/登录后才可进行流程商城。")]),a("form-item",{attrs:{label:"强制授权登录："}},[a("RadioGroup",{model:{value:t.model.coerce_auth,callback:function(e){t.$set(t.model,"coerce_auth",e)},expression:"model.coerce_auth"}},[a("Radio",{attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1),a("kdx-hint-text",[t._v("系统默认关闭强制授权登录，当触发加入购物车、立即购买、提交表单、领取优惠券时需要获取用户用户登录信息。 "),a("kdx-hint-tooltip",{attrs:{type:"image",image:n("9da5")}})],1),a("kdx-hint-text",[t._v("开启强制授权登录时，用户访问商城必须授权后才可进行商城浏览及下单操作。 "),a("kdx-hint-tooltip",{attrs:{type:"image",image:n("148c")}})],1),"1"==t.model.coerce_auth?a("div",{staticClass:"nest-box"},[a("form-item",{staticClass:"channel-item",attrs:{label:"适用渠道：","label-width":120,prop:"channels"}},[a("CheckboxGroup",{model:{value:t.form.channels,callback:function(e){t.$set(t.form,"channels",e)},expression:"form.channels"}},t._l(t.filterChannel,(function(e){return a("Checkbox",{key:e.key,attrs:{label:e.key}},[t._v(t._s(e.name)+" ")])})),1),a("kdx-hint-text",[t._v(" 因微信小程序用户登录规范要求不能强制弹窗要求登录，小程序开启此功能可能会被封号，暂不支持微信小程序。 ")])],1)],1):t._e()],1),a("form-item",{attrs:{label:"手机浏览器H5 登录方式："}},[a("RadioGroup",{model:{value:t.model.h5_login_method,callback:function(e){t.$set(t.model,"h5_login_method",e)},expression:"model.h5_login_method"}},[a("Radio",{attrs:{label:1}},[t._v("短信验证码登录 "),a("kdx-hint-tooltip",{attrs:{type:"image",image:n("bd1d")}}),t._v(" > ")],1),a("Radio",{attrs:{label:0}},[t._v("账号密码登录 "),a("kdx-hint-tooltip",{attrs:{type:"image",image:n("27b2")}}),t._v(" > ")],1)],1),a("kdx-hint-text",[t._v("手机浏览器H5用户登录时默认登录方式")])],1)],1)]),a("div",{staticClass:"item-box"},[a("div",{staticClass:"form-title-box"},[a("kdx-form-title",{attrs:{hasMargin:!1},scopedSlots:t._u([{key:"text",fn:function(){return[t._v(" （适用于全渠道账号统一）使用全网渠道商城，强烈推荐绑定手机号 ")]},proxy:!0}])},[t._v(" 绑定手机号 ")]),a("kdx-hint-alert",{staticStyle:{margin:"10px 0 30px 0"}},[a("p",{staticClass:"register-text"},[t._v("提示：")]),a("p",{staticClass:"register-text"},[t._v(" 买家通过微信授权登录商城后，引导买家绑定手机号，识别买家唯一身份，解决买家在微信（公众号和小程序）等不同渠道账号不同的问题 ")]),a("p",{staticClass:"register-text"},[t._v("需要开启消息通知功能。")]),a("Button",{attrs:{type:"text"},on:{click:t.routePage}},[t._v("【立即开启】 ")])],1)],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"绑定类型：",prop:"bind_method","label-width":120}},[a("RadioGroup",{staticStyle:{"margin-bottom":"-10px",width:"100%"},model:{value:t.model.bind_method,callback:function(e){t.$set(t.model,"bind_method",e)},expression:"model.bind_method"}},[a("div",{staticClass:"inventory-settings"},[a("Radio",{attrs:{label:2,disabled:t.noManagePerm}},[a("span",[t._v("强制绑定")]),a("remind-label",{attrs:{title:"推荐"}})],1),a("kdx-hint-text",[a("span",[t._v("买家进入商城授权后，必须进行绑定手机号成功后才可访问商城")]),a("kdx-hint-tooltip",{attrs:{type:"image",image:n("c39a")}})],1),a("div",{staticClass:"nest-box"},[a("form-item",{attrs:{label:"","label-width":0,prop:"scenes"}},[a("CheckboxGroup",{model:{value:t.form.scenes,callback:function(e){t.$set(t.form,"scenes",e)},expression:"form.scenes"}},t._l(t.filterScenes,(function(e){return a("Checkbox",{key:e.key,attrs:{label:e.key}},[t._v(t._s(e.name)+" ")])})),1)],1)],1)],1),a("div",{staticClass:"inventory-settings"},[a("Radio",{attrs:{label:1,disabled:t.noManagePerm}},[a("span",[t._v("手动绑定")])]),a("kdx-hint-text",[a("span",[t._v("买家通过授权登录商城后，需要用户在个人中心主动操作绑定手机号")]),a("kdx-hint-tooltip",{attrs:{type:"image",image:n("45b9")}})],1)],1)])],1)],1),a("div",{staticClass:"item-box"},[a("kdx-form-title",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v(" （需配置微信开放平台） ")]},proxy:!0}])},[t._v(" 微信账号体系 ")]),a("div",{staticClass:"title-box"},[a("div",{staticClass:"title"},[a("span",{staticClass:"number"},[t._v("01")]),a("span",[t._v("需要同时开启微信小程序渠道 、开启微信公众号渠道")])]),a("div",{staticClass:"text"},[t._v(" 同时开启时，用户可进行多渠道访问商城。 ")])]),a("div",{staticClass:"title-box"},[a("div",{staticClass:"title"},[a("span",{staticClass:"number"},[t._v("02")]),a("span",[t._v("在微信开放平台进行绑定配置")])]),a("div",{staticClass:"btn"},[a("Button",{attrs:{type:"success"},on:{click:t.openConfig}},[t._v("立即配置 ")]),a("Button",{staticClass:"default-success",on:{click:t.openGuide}},[t._v("配置引导 ")])],1),a("div",{staticClass:"text"},[t._v(" 未配置开放平台前，同一个微信生成的不同会员，配置开放平台后也无法统一账号，只能通过手机号进行绑定。 ")]),a("div",{staticClass:"text"},[t._v(" 注：未配置开发平台前，同一个微信生成一个会员时，配置开放平台后生成另一个会员时会自动执行微信账号统一，识别买家唯一微信身份。 ")])])],1)])],1),a("Guide-modal",{ref:"guide_modal"})],1)},i=[]},"08bb":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{title:"开放平台配置引导",width:910,isOk:!1,cancelText:"关闭"},on:{"on-cancel":t.handleCancel},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("div",{staticClass:"guide-modal"},[a("p",{staticClass:"title"},[t._v("1. 登录微信开放平台( "),a("a",{attrs:{href:"https://open.weixin.qq.com/",target:"_blank"}},[t._v("open.weixin.qq.com")]),t._v(" )")]),a("p",{staticClass:"title"},[t._v("2. 把公众号和小程序绑定到同一个开放平台帐号下")]),a("p",{staticClass:"text"},[t._v("公众号绑定开放平台：管理中心 - 公众帐号 - 绑定公众号")]),a("div",{staticClass:"image"},[a("img",{attrs:{src:n("efae"),alt:""}})]),a("p",{staticClass:"text"},[t._v("小程序绑定开放平台：管理中心 - 小程序 - 绑定小程序")]),a("div",{staticClass:"image"},[a("img",{attrs:{src:n("54df"),alt:""}})])])])},i=[]},1005:function(t,e,n){"use strict";n.r(e);var a=n("4ad6"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"148c":function(t,e,n){t.exports=n.p+"static/dist/shop/img/force-login.png"},"23a9":function(t,e,n){},"27b2":function(t,e,n){t.exports=n.p+"static/dist/shop/img/login-pass.png"},"2da85":function(t,e,n){"use strict";n("23a9")},"3fb7":function(t,e,n){"use strict";n.r(e);var a=n("08bb"),i=n("1005");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("6379");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"502b2c72",null);e["default"]=r.exports},"43be":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"remind-label"},[n("span",{staticClass:"box"},[t._v(" "+t._s(t.title)+" "),n("span")])])},i=[]},"45b9":function(t,e,n){t.exports=n.p+"static/dist/shop/img/bind_mobile_btn.png"},"4ad6":function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"GuideModal",data:function(){return{value:!1}},methods:{setValue:function(){this.value=!this.value},handleCancel:function(){this.setValue()}}};e.default=n},"54df":function(t,e,n){t.exports=n.p+"static/dist/shop/img/weixin2.png"},"622a":function(t,e,n){"use strict";n("f374")},6379:function(t,e,n){"use strict";n("b93b")},"723a":function(t,e,n){"use strict";n.r(e);var a=n("ade5"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"870e":function(t,e,n){"use strict";n.r(e);var a=n("b50f"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"9da5":function(t,e,n){t.exports=n.p+"static/dist/shop/img/get-info.png"},ade5:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("4de4"),n("d3b7"),n("b64b"),n("159b"),n("caad"),n("2532");var s=a(n("c6072")),o=a(n("3fb7")),r={name:"index",components:{RemindLabel:s.default,GuideModal:o.default},data:function(){var t=this;return{rules:{channels:[{validator:function(e,n,a){0==n.length&&1==t.model.coerce_auth?a(new Error("请选择一个渠道")):a()}}],scenes:[{validator:function(e,n,a){0==n.length&&2==t.model.bind_method?a(new Error("请选择一个场景")):a()}}]},form:{channels:[],scenes:[]},channelsData:[{key:"wechat",name:"微信公众号"},{key:"h5",name:"手机浏览器H5"},{key:"byte_dance",name:"头条/抖音小程序"}],scenesData:[{key:"add_cart",name:"点击加入购物车"},{key:"buy",name:"点击立即购买"},{key:"share",name:"买家进行分享"},{key:"submit_form",name:"买家提交表单"},{key:"get_coupon",name:"买家领取优惠券"}],model:{bind_method:1,coerce_auth:1,h5_login_method:1}}},computed:{noManagePerm:function(){return!this.$getPermMap("channel.registry.manage")},filterChannel:function(){return this.channelsData},filterScenes:function(){return this.scenesData}},methods:{getData:function(){var t=this;this.$api.settingApi.getRegisterSetting().then((function(e){if(0===e.error){var n=e.data,a=n.bind_method,i=n.h5_login_method,s=n.bind_scene,o=n.coerce_auth,r=n.coerce_auth_channel;t.form.scenes=Object.keys(s).filter((function(t){return 1===+s[t]})),t.form.channels=Object.keys(r).filter((function(t){return 1===+r[t]})),t.model={bind_method:+a,h5_login_method:+i,coerce_auth:+o}}}))},handleSave:function(){var t=this;this.$refs.form.validate((function(e){if(e){var n={},a={};t.channelsData.forEach((function(e){n[e.key]=t.form.channels.includes(e.key)?"1":"0"})),t.scenesData.forEach((function(e){a[e.key]=t.form.scenes.includes(e.key)?"1":"0"})),t.$api.settingApi.setRegisterSetting({data:(0,i.default)((0,i.default)({},t.model),{},{coerce_auth_channel:n,bind_scene:a})}).then((function(e){0===e.error&&(t.$Message.success("绑定设置，设置成功"),t.getData())}))}}))},openGuide:function(){this.$refs["guide_modal"].setValue()},openConfig:function(){window.open("https://open.weixin.qq.com/")},routePage:function(){this.$utils.openNewWindowPage("/notice/buyer/basic")}},mounted:function(){this.getData()}};e.default=r},b50f:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"RemindLabel",props:{title:{type:String}}};e.default=n},b93b:function(t,e,n){},bd1d:function(t,e,n){t.exports=n.p+"static/dist/shop/img/login-code.png"},c39a:function(t,e,n){t.exports=n.p+"static/dist/shop/img/bind_mobile.png"},c6072:function(t,e,n){"use strict";n.r(e);var a=n("43be"),i=n("870e");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("622a");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"110ea137",null);e["default"]=r.exports},c893:function(t,e,n){"use strict";n.r(e);var a=n("0184"),i=n("723a");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("2da85");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"1289c7a2",null);e["default"]=r.exports},efae:function(t,e,n){t.exports=n.p+"static/dist/shop/img/weixin1.png"},f374:function(t,e,n){}}]);