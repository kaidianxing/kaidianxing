(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{1708:function(e,t,a){"use strict";a.r(t);var n=a("ee09"),s=a("a6d9");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("d1ec");var r=a("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"0f6328dc",null);t["default"]=o.exports},"1c72":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"order-detail-refund"},[a("Card",[a("Steps",{attrs:{current:e.getCurrent,status:e.getStatus}},[a("Step",{attrs:{title:"客户申请维权",content:e.refund_info.created_at}}),a("Step",{attrs:{title:"处理维权",content:e._f("getTime")(e.refund_info.seller_accept_time)}}),e.showCustom?a("Step",{attrs:{title:"客户退回商品",content:e._f("getTime")(e.refund_info.member_express_time)}}):e._e(),a("Step",{attrs:{title:e.step.lastTitle,content:e._f("getTime")(e.refund_info.finish_time)}})],1)],1),a("div",{staticClass:"order-detail-content"},[e.info.refund_info?a("refund-detail",{attrs:{data:e.info}},[a("refund-modal",{attrs:{visible:e.modal.refundModal,data:e.info,status:e.refund_info.status}})],1):e._e()],1),a("div",{staticClass:"order-detail-con"},[a("ul",{staticClass:"detail_tab"},[a("li",{staticClass:"tab",class:{active:0==e.clickIndex},on:{click:function(t){return e.clickTab(0)}}},[e._v("商品信息")]),e.commission_info?a("li",{staticClass:"tab",class:{active:1==e.clickIndex},on:{click:function(t){return e.clickTab(1)}}},[e._v("分销商信息")]):e._e(),e.form.content?a("li",{staticClass:"tab",class:{active:2==e.clickIndex},on:{click:function(t){return e.clickTab(2)}}},[e._v("表单信息")]):e._e()]),e.form.content&&2==e.clickIndex?a("form-info",{attrs:{data:e.form.content,isShow:!1}}):e._e(),e.commission_info&&1==e.clickIndex?a("distributor-information",{attrs:{info:e.commission_info},on:{edit:e.editCommision}}):e._e(),0==e.clickIndex?a("order-detail-list",{attrs:{"is-refund":"",data:e.info},on:{"on-change-goods-info":e.changeGoodsInfo}}):e._e(),a("commission-edit",{attrs:{orderId:e.id,orderNo:e.orderNo,memberId:e.member_id,visible:e.visible},on:{"update:visible":function(t){e.visible=t},"on-success":e.getData}})],1)],1)},s=[]},"29ce":function(e,t,a){},6276:function(e,t,a){"use strict";a.r(t);var n=a("e726"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=s.a},"85e5":function(e,t,a){},a6d9:function(e,t,a){"use strict";a.r(t);var n=a("c2ff"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=s.a},c2ff:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("d3b7");var n={name:"RefundModal",props:{visible:{type:Number,default:0},data:{type:Object,default:function(){}}},data:function(){return{value:!1,model:{type:"0",address:"",style:""},address:{list:[]},rules:{address:[{required:!0,message:"请选择退货地址"}]}}},computed:{getStatus:function(){return this.data.refund_info?this.data.refund_info.status:0}},watch:{visible:function(){this.value=!0,this.getAddress()},getStatus:{handler:function(e){e>0&&(this.model.type="1")},immediate:!0}},methods:{getAddress:function(){var e=this;this.address.list.length||this.$api.settingApi.getAllRefundAddress().then((function(t){0===t.error&&(e.address.list=t.list)}))},handleCancel:function(){this.value=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this.model.type,t=this.data,a=t.id,n=t.refund_type,s=t.refund_info.order_goods_id,i={order_id:a};"2"==n&&(i.order_goods_id=s),"2"===e?(this.model.reason&&(i.reject_reason=this.model.reason),this.rejectHandler(i)):"3"===e?this.manualHandler(i):"1"===e?this.autoHandler(i):(i.refund_address_id=this.model.address,this.agreeHandler(i))},agreeHandler:function(e){var t=this;this.$refs.form.validate((function(a){a&&t.$api.orderApi.agreeReturn(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))}))},autoHandler:function(e){var t=this;this.$api.orderApi.autoRefund(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))},manualHandler:function(e){var t=this;this.$api.orderApi.manualRefund(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))},rejectHandler:function(e){var t=this;this.$api.orderApi.refundRejectOrder(e).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.$parent.$parent.getData())})).finally((function(){t.value=!1}))}}};t.default=n},d1ec:function(e,t,a){"use strict";a("29ce")},e726:function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("39c2")),i=n(a("1708")),r=n(a("f8a2")),o=n(a("ca29")),d=n(a("1c03")),l=n(a("fa75")),u=n(a("5791")),c={name:"index",mixins:[u.default],components:{RefundDetail:s.default,RefundModal:i.default,DistributorInformation:r.default,OrderDetailList:o.default,CommissionEdit:d.default,FormInfo:l.default},computed:{getCurrent:function(){var e=this.status;return-1===this.status?3:(10!==this.status&&11!==this.status||(e=3,this.showCustom||e--),3===this.status&&(e=2),e+1)},showCustom:function(){return-1!==this.status&&!!(10!==this.status&&11!==this.status||this.refund_info.member_express_sn)}},watch:{status:function(e){this.step.lastTitle=0<=e&&e<=3?"退货退款完成":10===e||11===e?"退货退款成功":"退货退款失败"}},data:function(){return{clickIndex:0}},methods:{clickTab:function(e){this.clickIndex=e}}};t.default=c},ee09:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{title:"维权处理",width:700},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("Form",{ref:"form",staticClass:"order-refund-detail-refund-modal",attrs:{"label-width":120,model:e.model,rules:e.rules}},[a("FormItem",{staticClass:"r-form-item-text",attrs:{label:"维权类型："}},[a("kdx-tag-label",{attrs:{type:"danger",size:"small"}},[e._v("退款退货")])],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"处理方式：",prop:"type"}},[a("RadioGroup",{model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}},[0===e.getStatus?a("Radio",{attrs:{label:"0"}},[e._v("通过申请")]):e._e(),a("Radio",{attrs:{label:"1"}},[e._v("同意退款")]),0===e.getStatus?a("Radio",{attrs:{label:"2"}},[e._v("驳回申请")]):e._e(),a("Radio",{attrs:{label:"3"}},[e._v("手动退款")])],1),a("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"0"===e.model.type,expression:"model.type === '0'"}],attrs:{"show-icon":!1,type:"info"}},[e._v(" 通过申请后需要收到客户寄回商品才可进行下一步操作 ")]),a("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"1"===e.model.type,expression:"model.type === '1'"}],attrs:{"show-icon":!1}},[0===e.getStatus?a("p",{staticClass:"alert-blue"},[e._v("直接同意退款无需客户寄回商品，直接进行退款")]):a("p",[e._v("请确认您已经收到客户寄出的商品后同意退款.")]),a("p",[e._v("微信支付方式：会返回到相应的支付渠道(如零钱或银行卡)")]),a("p",[e._v("其他支付方式：会返回到微信钱包(需商户平台余额充足)")]),a("p",[e._v("如有余额抵扣：会返回金额到商城用户余额")]),a("p",[e._v("如有积分抵扣：申请维权的订单抵扣积分会返回到用户积分中")])])],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"0"===e.model.type,expression:"model.type === '0'"}],attrs:{label:"退货地址：",prop:"address"}},[a("Select",{staticClass:"width-430",model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}},e._l(e.address.list,(function(e){return a("Option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"2"===e.model.type,expression:"model.type === '2'"}],attrs:{label:"驳回原因：",prop:"reason"}},[a("Input",{staticClass:"width-430",attrs:{type:"textarea",autosize:"",maxlength:200,placeholder:"请输入"},model:{value:e.model.reason,callback:function(t){e.$set(e.model,"reason",t)},expression:"model.reason"}})],1)],1)],1)},s=[]},eec4:function(e,t,a){"use strict";a.r(t);var n=a("1c72"),s=a("6276");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("fd2e");var r=a("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"e913a208",null);t["default"]=o.exports},fd2e:function(e,t,a){"use strict";a("85e5")}}]);