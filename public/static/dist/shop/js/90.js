(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{"2f5b":function(e,t,a){"use strict";a.r(t);var i=a("a920"),l=a("9742");for(var r in l)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(r);a("abec");var o=a("2877"),s=Object(o["a"])(l["default"],i["a"],i["b"],!1,null,"b1293aea",null);t["default"]=s.exports},"4dcf":function(e,t,a){},"4fadc":function(e,t,a){var i=a("23e7"),l=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(e){return l(e)}})},"62b1":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{desc:String,accept:String,status:{type:Boolean,default:!1}},methods:{upload:function(e){return this.$emit("change",e),!1}}};t.default=a},6708:function(e,t,a){"use strict";a("e750")},"6f53":function(e,t,a){var i=a("83ab"),l=a("e330"),r=a("df75"),o=a("fc6a"),s=a("d1e7").f,c=l(s),n=l([].push),p=function(e){return function(t){var a,l=o(t),s=r(l),p=s.length,d=0,u=[];while(p>d)a=s[d++],i&&!c(l,a)||n(u,e?[a,l[a]]:l[a]);return u}};e.exports={entries:p(!0),values:p(!1)}},"70c8":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[i("Button",{staticClass:"primary-long",staticStyle:{"margin-right":"10px"},on:{click:e.handleSave}},[e._v("提交")]),i("Button",{on:{click:e.backList}},[e._v("返回列表")])]},proxy:!0}])},[i("div",{staticClass:"add-module"},[i("div",{staticClass:"content"},[i("kdx-form-title",[e._v("添加模板")]),i("Form",{ref:"form",attrs:{model:e.model,"label-width":205,rules:e.rules}},[i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"支付名称：",prop:"title"}},[i("Input",{attrs:{placeholder:"方便选择与记忆的支付名称"},model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),i("FormItem",{attrs:{label:"支付方式："}},[i("RadioGroup",{model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}},[i("Radio",{attrs:{label:1}},[i("span",[e._v("微信支付")])]),i("Radio",{attrs:{label:2}},[i("span",[e._v("支付宝支付")])])],1)],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"支付类型：",prop:"pay_type"}},[i("Select",{model:{value:e.model.pay_type,callback:function(t){e.$set(e.model,"pay_type",t)},expression:"model.pay_type"}},e._l(e.getPayTypes,(function(t){return i("Option",{key:t.value,attrs:{value:parseInt(t.value)}},[e._v(e._s(t.label))])})),1)],1),1==e.model.type?[i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"商户名称：",prop:"merchant_name"}},[i("Input",{model:{value:e.model.merchant_name,callback:function(t){e.$set(e.model,"merchant_name",t)},expression:"model.merchant_name"}})],1),11==e.model.pay_type?[i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"服务商公众号 (AppId)：",prop:"appid"}},[i("Input",{model:{value:e.model.appid,callback:function(t){e.$set(e.model,"appid",t)},expression:"model.appid"}})],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"服务商支付商户号 (Mch_Id)：",prop:"mch_id"}},[i("Input",{model:{value:e.model.mch_id,callback:function(t){e.$set(e.model,"mch_id",t)},expression:"model.mch_id"}})],1)]:e._e(),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"公众号/小程序 (AppID)：",prop:"sub_appid"}},[i("Input",{model:{value:e.model.sub_appid,callback:function(t){e.$set(e.model,"sub_appid",t)},expression:"model.sub_appid"}}),11==e.model.pay_type?i("hint-text",[e._v("子商户绑定的AppID")]):e._e()],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"支付商户号 (Mch_Id)：",prop:"sub_mch_id"}},[i("Input",{model:{value:e.model.sub_mch_id,callback:function(t){e.$set(e.model,"sub_mch_id",t)},expression:"model.sub_mch_id"}}),11==e.model.pay_type?i("hint-text",[e._v("子商户的sub_mch_id")]):e._e()],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"支付密钥 (APIKEY)：",prop:"api_key"}},[i("Input",{model:{value:e.model.api_key,callback:function(t){e.$set(e.model,"api_key",t)},expression:"model.api_key"}}),11==e.model.pay_type?i("hint-text",[e._v("服务商支付密钥")]):e._e()],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"CERT文件证书："}},[i("upload-file",{attrs:{desc:11==e.model.pay_type?"服务商支付证书：下载证书cert.zip中的 apiclient_cert.pem文件":"下载证书cert.zip中的 apiclient_cert.pem文件",accept:".pem",status:!!e.model.wechat_cert},on:{change:e.certUpload}})],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"KEY密钥文件："}},[i("upload-file",{attrs:{desc:11==e.model.pay_type?"服务商支付证书：下载证书cert.zip中的 apiclient_key.pem文件":"下载证书cert.zip中的 apiclient_key.pem文件",accept:".pem",status:!!e.model.wechat_key},on:{change:e.keyUpload}})],1),i("FormItem",{attrs:{label:"ROOT文件："}},[i("upload-file",{attrs:{action:"",desc:"下载证书cert.zip中的 rootca.pem文件",accept:".pem",status:!!e.model.wechat_root_cert},on:{change:e.rootUpload}})],1)]:e._e(),2==e.model.type?i("div",[i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"APPID：",prop:"appid"}},[i("Input",{model:{value:e.model.appid,callback:function(t){e.$set(e.model,"appid",t)},expression:"model.appid"}}),i("kdx-hint-text",[e._v("开放平台应用id")])],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"验签方式(SIGN_TYPE)：",prop:"sign_type"}},[i("RadioGroup",{model:{value:e.model.sign_type,callback:function(t){e.$set(e.model,"sign_type",t)},expression:"model.sign_type"}},[i("Radio",{attrs:{label:1}},[i("span",[e._v("RSA")])]),i("Radio",{attrs:{label:2}},[i("span",[e._v("RSA2")])])],1),i("kdx-hint-text",[e._v(" 请选择正确的验证签名方式，否则支付宝支付不起作用（ "),i("span",{staticStyle:{color:"red"}},[e._v("建议使用RSA2")]),e._v("） ")])],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"应用私钥(PRIVATE_KEY)：",prop:"ali_private_key"}},[i("Input",{attrs:{type:"textarea"},model:{value:e.model.ali_private_key,callback:function(t){e.$set(e.model,"ali_private_key",t)},expression:"model.ali_private_key"}}),i("kdx-hint-text",[e._v("一行且不能有空格")])],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"商户证书：",prop:"app_cert_public_key"}},[i("upload-file",{attrs:{desc:"下载证书中的 appCertPublicKey.crt文件",accept:".crt",status:!!e.model.app_cert_public_key},on:{change:e.aliCertUpload},scopedSlots:e._u([{key:"example",fn:function(){return[i("kdx-hint-tooltip",{attrs:{width:"474px",maxWidth:500,type:"image",image:a("e7c1")}})]},proxy:!0}],null,!1,1929877076)}),i("div",{staticClass:"upload-tip"},[e._v("登录支付宝账号 然后在“接口加密方式”中的“应用公钥证书”位置，点击“下载证书”。")])],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"支付宝公钥证书：",prop:"alipay_cert_public_key_rsa2"}},[i("upload-file",{attrs:{accept:".crt",desc:"下载证书中的 alipayCertPublicKey_RSA2.crt文件",status:!!e.model.alipay_cert_public_key_rsa2},on:{change:e.aliKeyUpload}})],1),i("FormItem",{staticClass:"ivu-form-item-required",attrs:{label:"支付宝根证书：",prop:"alipay_root_cert"}},[i("upload-file",{attrs:{action:"",accept:".crt",desc:"下载证书中的 alipayRootCert.crt文件",status:!!e.model.alipay_root_cert},on:{change:e.aliRootUpload}})],1)],1):e._e()],2)],1)])])},l=[]},9742:function(e,t,a){"use strict";a.r(t);var i=a("62b1"),l=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=l.a},a920:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Upload",{attrs:{"before-upload":e.upload,action:"",accept:e.accept}},[a("Button",{staticClass:"upload-btn"},[e._v(e._s(e.status?"重新上传":"上传文件"))]),a("span",{on:{click:function(e){e.stopPropagation()}}},[e._t("example")],2)],1),e.desc?a("div",{staticClass:"upload-tip"},[e._v(e._s(e.desc))]):e._e(),e.status?a("div",{staticClass:"flex align-center status"},[a("i",{staticClass:"iconfont icon-yes status-icon"}),a("span",{staticClass:"status-text"},[e._v("已上传")])]):e._e()],1)},l=[]},abec:function(e,t,a){"use strict";a("4dcf")},b28b:function(e,t,a){"use strict";a.r(t);var i=a("d3b6"),l=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=l.a},b6ef:function(e,t,a){"use strict";a.r(t);var i=a("70c8"),l=a("b28b");for(var r in l)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(r);a("6708");var o=a("2877"),s=Object(o["a"])(l["default"],i["a"],i["b"],!1,null,"1905d94c",null);t["default"]=s.exports},d3b6:function(e,t,a){var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7"),a("159b"),a("4fadc"),a("b0c0");var l=i(a("5530")),r=a("d08c"),o=i(a("2f5b")),s={name:"addMould",components:{UploadFile:o.default},data:function(){var e=this,t=function(t,a,i){var l=t.message;e.isSubmit||i(),a&&i(),i(l)};return{model:{title:"",type:1,pay_type:"",wechat_cert:"",wechat_key:"",sub_appid:"",sub_mch_id:"",api_key:"",wechat_root_cert:"",appid:"",mch_id:"",sub_appsecret:"",sign_type:1,is_raw:"",app_cert_public_key:"",alipay_cert_public_key_rsa2:"",alipay_root_cert:"",merchant_name:""},wePayTypes:[{value:"10",label:"微信支付"},{value:"11",label:"微信支付子商户"}],aliPayTypes:[{value:"20",label:"支付宝"}],rules:{title:[{validator:t,message:"请填写支付名称"}],pay_type:[{validator:t,message:"请选择支付类型"}],merchant_name:[{validator:t,message:"请填写商户名称"}],sub_appid:[{validator:t,message:"请填写公众号"}],sub_mch_id:[{validator:t,message:"请填写支付商户号"}],mch_id:[{validator:t,message:"请填写服务商支付商户号"}],api_key:[{validator:t,message:"请填写支付密钥"}],appid:[{validator:t,message:function(){return 1==e.model.type?"请填写公众号（AppId）":"请填写appid"}}],wechat_cert:[{validator:t,message:"请上传CERT文件证书"}],wechat_key:[{validator:t,message:"请上传KEY密钥文件"}],sign_type:[{validator:t,message:"请填写验签方式"}],ali_private_key:[{validator:t,message:"请填写应用私钥"}],app_cert_public_key:[{validator:t,message:"请上传支付宝商户证书"}],alipay_cert_public_key_rsa2:[{validator:t,message:"请上传支付宝公钥证书 "}],alipay_root_cert:[{validator:t,message:"请上传支付宝根证书 "}]},id:"",isSubmit:!1}},computed:{getPayTypes:function(){return 1===this.model.type?this.wePayTypes:this.aliPayTypes}},mounted:function(){var e=this.$route.query,t=e.id,a=e.type;a&&(this.model.type=parseFloat(a)),t&&(this.id=t,this.getInfo())},methods:{getInfo:function(){var e=this;this.$api.settingApi.getPayMouldDetail({id:this.id}).then((function(t){t&&(e.model=(0,l.default)((0,l.default)({},e.model),t.data))}))},handleSave:function(){var e=this;this.isSubmit=!0,this.$refs.form.validate((function(t){e.isSubmit=!1,t&&(!e.id&&e.addTemplate(),e.id&&e.editTemplate())}))},addTemplate:function(){var e=this,t=this.formatData(this.model);(0,r.uploadFile)("manage/sysset/pay-template-set/add",t).then((function(t){0===t.error&&(e.$Message.success("保存成功"),e.$router.back())}))},editTemplate:function(){var e=this,t=this.formatData(this.filterFileData((0,l.default)((0,l.default)({},this.model),{},{id:this.id})));(0,r.uploadFile)("manage/sysset/pay-template-set/update",t).then((function(t){0===t.error&&(e.$Message.success("保存成功"),e.$router.back())}))},filterFileData:function(e){var t=["wechat_cert","wechat_key","wechat_root_cert","app_cert_public_key","alipay_cert_public_key_rsa2","alipay_root_cert"];return t.forEach((function(t){"[object File]"!==Object.prototype.toString.call(e[t])&&delete e[t]})),e},formatData:function(e){var t=new FormData;return Object.entries(e).forEach((function(e){t.append(e[0],e[1])})),t},certUpload:function(e){return this.checkType(e)&&(this.model.wechat_cert=e),!1},keyUpload:function(e){return this.checkType(e)&&(this.model.wechat_key=e),!1},rootUpload:function(e){return this.checkType(e)&&(this.model.wechat_root_cert=e),!1},aliCertUpload:function(e){return this.checkAliType(e)&&(this.model.app_cert_public_key=e),!1},aliKeyUpload:function(e){return console.log("file",e),this.checkAliType(e)&&(this.model.alipay_cert_public_key_rsa2=e,console.log("file1",this.model.alipay_cert_public_key_rsa2)),!1},aliRootUpload:function(e){return this.checkAliType(e)&&(this.model.alipay_root_cert=e),!1},checkType:function(e){return e.name.indexOf(".pem")>-1||(this.$Message.error("请上传正确格式的pem文件"),!1)},checkAliType:function(e){return e.name.indexOf(".crt")>-1||(this.$Message.error("请上传正确格式的pem文件"),!1)},backList:function(){this.$router.push({path:"/setting/paymentSettings/mould/list"})}}};t.default=s},e750:function(e,t,a){},e7c1:function(e,t,a){e.exports=a.p+"static/dist/shop/img/alipay_certificate.png"}}]);