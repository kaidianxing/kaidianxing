(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[102],{"3b02":function(t,a,e){var s=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.Export=void 0;var i=s(e("5530")),n=e("d8cc"),l=s(e("4328")),c=e("384d"),r=s(e("1cc8")),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.log(t,"---------downloadPath"),t){var e="";if(-1===t.indexOf(n.config.base_url)){var s={baseURL:n.config.base_url,url:t};(0,r.default)(s),e=s.baseURL+s.url}else e=t;e=e.indexOf("?")>-1?e:e+"?",a=(0,i.default)((0,i.default)({},a),(0,c.getUserInfo)()),e+="&".concat(l.default.stringify(a)),window.open(e)}};a.Export=o},"4fadc":function(t,a,e){var s=e("23e7"),i=e("6f53").entries;s({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"6f53":function(t,a,e){var s=e("83ab"),i=e("e330"),n=e("df75"),l=e("fc6a"),c=e("d1e7").f,r=i(c),o=i([].push),d=function(t){return function(a){var e,i=l(a),c=n(i),d=c.length,u=0,p=[];while(d>u)e=c[u++],s&&!r(i,e)||o(p,t?[e,i[e]]:i[e]);return p}};t.exports={entries:d(!0),values:d(!1)}},"7e5e":function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("kdx-header-bar",[e("Form",{ref:"form",attrs:{model:t.searchData,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"关键词："}},[e("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"昵称/姓名/手机号"},on:{"on-enter":t.handleSearch},model:{value:t.searchData.keywords,callback:function(a){t.$set(t.searchData,"keywords",a)},expression:"searchData.keywords"}})],1),e("FormItem",{attrs:{label:"会员等级："}},[e("Select",{staticClass:"width-160",model:{value:t.searchData.level_id,callback:function(a){t.$set(t.searchData,"level_id",a)},expression:"searchData.level_id"}},t._l(t.levels,(function(a,s){return e("Option",{key:s,attrs:{value:a.value}},[t._v(" "+t._s(a.label)+" ")])})),1)],1),e("FormItem",{attrs:{label:"提现方式："}},[e("Select",{staticClass:"width-160",model:{value:t.searchData.type,callback:function(a){t.$set(t.searchData,"type",a)},expression:"searchData.type"}},t._l(t.pay_type,(function(a,s){return e("Option",{key:s,attrs:{value:a.value}},[t._v(" "+t._s(a.label)+" ")])})),1)],1),e("FormItem",{attrs:{label:"提现状态："}},[e("Select",{staticClass:"width-160",model:{value:t.searchData.status,callback:function(a){t.$set(t.searchData,"status",a)},expression:"searchData.status"}},t._l(t.type,(function(a,s){return e("Option",{key:s,attrs:{value:a.value}},[t._v(" "+t._s(a.label)+" ")])})),1)],1),e("FormItem",{attrs:{label:"申请时间："}},[e("DatePicker",{staticClass:"width-340",attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择",confirm:!0},model:{value:t.selectDate,callback:function(a){t.selectDate=a},expression:"selectDate"}})],1),e("div",{staticClass:"ivu-form-item-btn"},[e("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),e("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"text"},on:{click:t.handleExport}},[t._v("导出")])],1)],1)],1),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list-wrap"},[e("div",{staticClass:"custom-table"},[t._m(0),t.list.length?e("div",{staticClass:"tbody"},t._l(t.list,(function(a,s){return e("div",{key:s,staticClass:"tr"},[e("div",{staticClass:"code"},[e("div",{staticClass:"text"},[t._v("提现编号：")]),t._v(" "+t._s(a.apply_no)+" "),e("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.apply_no,expression:"item.apply_no",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"copy"},[t._v(" 复制 ")])]),e("ul",[e("li",[e("div",{staticClass:"box"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:a.avatar,alt:""},on:{error:function(a){return t.replaceImage(a,"avatar")}}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"name",on:{click:function(e){return t.jumpVip(a.member_id)}}},[t._v(" "+t._s(a.nickname)+" ")]),e("div",{staticClass:"icon"},["10"===a.client_type?e("span",{staticClass:"iconfont icon-H"}):"20"===a.client_type?e("span",{staticClass:"iconfont icon-weixin"}):"21"===a.client_type?e("span",{staticClass:"iconfont icon-weixinxiaochengxu"}):"30"===a.client_type?e("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-qudao-toutiao2"}}):"32"===a.client_type?e("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-qudao-toutiaojisuban"}}):"31"===a.client_type?e("kdx-svg-icon",{staticClass:"iconfont",attrs:{type:"icon-douyin"}}):t._e()],1)])])]),e("li",[e("div",{staticClass:"box"},[e("div",{staticClass:"left"},["1"!=a.is_default?e("kdx-svg-icon",{attrs:{type:"icon-huiyuan-bg"}}):t._e()],1),e("div",{staticClass:"right"},[t._v(" "+t._s(a.level_name)+" ")])])]),e("li",[e("div",{staticClass:"box"},[t._v("￥"+t._s(a.apply_commission))])]),e("li",{staticStyle:{display:"none"}},[e("div",{staticClass:"box"},[t._v(" ￥"+t._s(a.deduct_money)+" ")])]),e("li",{staticStyle:{display:"none"}},[e("div",{staticClass:"box"},[t._v(" ￥"+t._s(a.real_money)+" ")])]),e("li",[e("div",{staticClass:"box"},[e("div",{staticClass:"box-item channel"},[e("div",{staticClass:"left"},[t._v("渠道：")]),e("div",{staticClass:"right"},["1"===a.type?e("span",{staticClass:"iconfont icon-money-pay"}):t._e(),"20"===a.type?e("span",{staticClass:"iconfont icon-wechatpay"}):t._e(),"30"===a.type?e("span",{staticClass:"iconfont icon-alipay"}):t._e(),"4"===a.type?e("kdx-svg-icon",{attrs:{type:"icon-zhifu-yinlian"}}):t._e(),t._v(" "+t._s(a.type_text)+" ")],1)]),a.apply_commission&&"20"!==a.type?e("div",{staticClass:"box-item name"},[e("div",{staticClass:"left"},[t._v("姓名：")]),e("div",{staticClass:"right"},[t._v(" "+t._s(a.realname)+" ")])]):t._e(),a.apply_commission&&"20"!==a.type?e("div",{staticClass:"box-item account"},[e("div",{staticClass:"left"},[t._v("账号：")]),e("div",{staticClass:"right"},[t._v(" "+t._s(a.alipay)+" ")])]):t._e()])]),e("li",[e("div",{staticClass:"box",class:{applying:"0"===a.status,paid:"10"===a.status,payment:"11"===a.status,refuse:"40"===a.status}},[t._v(" "+t._s("0"===a.status?"待审核":a.status_text)+" ")])]),e("li",[e("div",{staticClass:"box"},[t._v(" "+t._s(a.created_at)+" ")])]),e("li",["10"!==a.status&&"11"!==a.status&&"40"!==a.status&&"20"!==a.status?e("div",{staticClass:"box"},[e("Button",{attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(e){return t.handleWithdraw(a)}}},[t._v(" "+t._s("20"===a.type?"微信打款":"支付宝打款")+" ")]),e("Button",{staticClass:"mL-10",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(e){return t.handleStatus(a,"11")}}},[t._v(" 手动打款 ")]),e("Button",{staticClass:"mL-10",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(e){return t.handleStatus(a,"40")}}},[t._v(" 拒绝 ")])],1):e("div",{staticClass:"box"},[t._v("-")])])])])})),0):e("div",{staticClass:"nodata"},[t._v("暂无数据")])]),e("div",{staticClass:"footer-page"},[e("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)]),t._t("default")],2)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"theader"},[e("ul",[e("li",[t._v("会员")]),e("li",[t._v("会员等级")]),e("li",[t._v("申请金额")]),e("li",{staticStyle:{display:"none"}},[t._v("手续费")]),e("li",{staticStyle:{display:"none"}},[t._v("实际到账金额")]),e("li",[t._v("提现方式")]),e("li",[t._v("提现状态")]),e("li",[t._v("申请时间")]),e("li",[t._v("操作")])])])}]},"9d6a":function(t,a,e){"use strict";e("cef1")},a51d:function(t,a,e){"use strict";e.r(a);var s=e("7e5e"),i=e("ed14");for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("9d6a");var l=e("2877"),c=Object(l["a"])(i["default"],s["a"],s["b"],!1,null,"44f47521",null);a["default"]=c.exports},b2a1:function(t,a,e){var s=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=s(e("2909"));e("d81d"),e("4fadc"),e("99af");var n=e("d1be"),l=e("d8cc"),c=e("3b02"),r={inject:["returnToTop"],components:{},props:{},data:function(){return{withdraw_fee:"",total:0,page:1,pagesize:10,list:[],selectDate:["",""],searchData:{startTime:"",endTime:"",level_id:"all",status:"all",type:"all",keywords:"",export:""},type:[{value:"all",label:"全部"},{value:"0",label:"待审核"},{value:"10",label:"提现成功"},{value:"11",label:"手动打款"},{value:"20",label:"已拒绝"}],pay_type:[],levels:[],loading:!1}},watch:{selectDate:{handler:function(t){this.searchData.startTime=""===t[0]?"":(0,n.formatDate)(new Date(t[0]),"yyyy-MM-dd hh:mm:ss"),this.searchData.endTime=""===t[1]?"":(0,n.formatDate)(new Date(t[1]),"yyyy-MM-dd hh:mm:ss")},deep:!0,immediate:!0}},computed:{noManagePerm:function(){return!this.$getPermMap("merchant_finance.commission.manage")}},created:function(){this.getIntegralSetting(),this.getWithdrawApplyLabel(),this.getWithdrawList()},methods:{getIntegralSetting:function(){var t=this;this.$api.settingApi.getBalanceSetting({}).then((function(a){0===a.error&&(t.withdraw_fee=a.withdraw_fee)}))},getWithdrawApplyLabel:function(){var t=this;this.$api.financeApi.getWithdrawApplyLabel({}).then((function(a){0==a.error&&(t.pay_type=Object.entries(a.pay_type).map((function(t){return{value:t[0],label:t[1]}})),t.pay_type.unshift({value:"all",label:"全部"}),t.levels=Object.entries(a.levels).map((function(t){return{value:t[0],label:t[1]}})),t.levels.unshift({value:"all",label:"全部"}))}))},getWithdrawList:function(){var t=this;this.returnToTop(),this.loading=!0;var a={level_id:"all"===this.searchData.level_id?"":this.searchData.level_id,status:"all"===this.searchData.status?"":this.searchData.status,type:"all"===this.searchData.type?"":this.searchData.type,keywords:this.searchData.keywords,export:this.searchData.export,page:this.page,pagesize:this.pagesize};this.searchData.startTime&&(a["created_at[0]"]=this.searchData.startTime),this.searchData.endTime&&(a["created_at[1]"]=this.searchData.endTime),this.$api.financeApi.getCommissionList(a).then((function(a){t.loading=!1,0==a.error&&(t.total=a.total,t.list=(0,i.default)(a.list))}))},handleSearch:function(){this.page=1,this.pagesize=10,this.$refs["page"].reset(),this.getWithdrawList()},handleReset:function(){this.selectDate=["",""],this.searchData.startTime="",this.searchData.endTime="",this.searchData.level_id="all",this.searchData.status="all",this.searchData.type="all",this.searchData.keywords="",this.searchData.export="",this.page=1,this.pagesize=10,this.$refs["page"].reset(),this.getWithdrawList()},handleExport:function(){var t=l.config.base_url,a="all"===this.searchData.level_id?"":this.searchData.level_id,e="all"===this.searchData.status?"":this.searchData.status,s="all"===this.searchData.type?"":this.searchData.type,i=this.searchData.keywords,n=this.page,r=this.pagesize,o="".concat(t,"manage/apps/merchant/platform/merchant/commission/withdraw/export&level_id=").concat(a,"&status=").concat(e,"&type=").concat(s,"&keywords=").concat(i,"&page=").concat(n,"&pagesize=").concat(r,"&export=1");this.searchData.startTime&&(o="".concat(o,"&created_at[0]=").concat(this.searchData.startTime)),this.searchData.endTime&&(o="".concat(o,"&created_at[1]=").concat(this.searchData.endTime)),(0,c.Export)(o)},changePage:function(t){this.page=t.pageNumber,this.pagesize=t.pageSize,this.getWithdrawList()},onCopySuccess:function(){this.$Message.success("内容已复制到剪切板！")},onCopyError:function(){this.$Message.error("抱歉，复制失败！")},handleWithdraw:function(t){var a,e=this;a="20"===t.type?"确认微信打款?":"确认支付宝打款?",this.$Modal.confirm({title:"提示",content:a,onOk:function(){e.withdrawApply(t)},onCancel:function(){}})},withdrawApply:function(t){var a=this;this.$api.financeApi.autoWithdrawApply({id:t.id}).then((function(e){var s;0==e.error&&(s="20"===t.type?"微信打款成功":"支付宝打款成功",a.$Message.success(s),a.getWithdrawList())}))},handleStatus:function(t,a){var e,s=this;e="11"===a?"确认手动打款?":"确认拒绝?",this.$Modal.confirm({title:"提示",content:e,onOk:function(){s.updateStatus(t,a)},onCancel:function(){}})},updateStatus:function(t,a){var e=this,s=11===+a?"doWithdrawApply":"doReject";this.$api.financeApi[s]({status:a,id:t.id}).then((function(t){0==t.error&&(e.$Message.success("操作成功"),e.getWithdrawList())}))},jumpVip:function(t){this.$utils.openNewWindowPage("/member/detail",{id:t})}}};a.default=r},cef1:function(t,a,e){},ed14:function(t,a,e){"use strict";e.r(a);var s=e("b2a1"),i=e.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return s[t]}))}(n);a["default"]=i.a}}]);