(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{"0001":function(t,e,i){var r=i("28cf");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("6f55626e",r,!0,{sourceMap:!1,shadowMode:!1})},"28cf":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.rules[data-v-305e63ec]{width:100%;height:100%;background-color:#fff}.credit-rules[data-v-305e63ec], .rules-explain[data-v-305e63ec]{padding:%?32?% %?24?%}.credit-rules .rules-item[data-v-305e63ec], .rules-explain .rules-item[data-v-305e63ec]{margin-bottom:%?32?%}.credit-rules .rules-item .item-title[data-v-305e63ec], .rules-explain .rules-item .item-title[data-v-305e63ec]{font-size:%?24?%;line-height:%?36?%;font-weight:600;margin-bottom:%?16?%}.credit-rules .rules-item .item-text[data-v-305e63ec], .rules-explain .rules-item .item-text[data-v-305e63ec]{font-size:12px;line-height:16px;color:#969696}',""]),t.exports=e},"67d1":function(t,e,i){"use strict";i.r(e);var r=i("cbf3"),n=i("7fd0");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7cb1");var a,c=i("f0c5"),u=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"305e63ec",null,!1,r["a"],a);e["default"]=u.exports},"7cb1":function(t,e,i){"use strict";var r=i("0001"),n=i.n(r);n.a},"7fd0":function(t,e,i){"use strict";i.r(e);var r=i("8515"),n=i.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(s);e["default"]=n.a},8515:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{},data:function(){return{type:"",credit:{credit_text:"积分",credit_limit:"",credit_limit_type:"",basic_credit_num:"",credit_num:"",credit_state:"1"},explain:{refund_rule:"",finish_order_refund_type:"0",finish_order_refund_days:"n"}}},mounted:function(){this.getType(),this.getCreditSet(),this.getShopExplain()},methods:{getType:function(){this.type=this.$Route.query.type},getCreditSet:function(){var t=this;this.$api.memberApi.getCreditSet().then((function(e){0===e.error&&(t.credit=e.data,t.setNavigationBarTitle())}))},getShopExplain:function(){var t=this;this.$api.creditShopApi.shopStatus({},{errorToast:!1}).then((function(e){0===e.error&&(t.explain=e.data,t.setNavigationBarTitle())}))},setNavigationBarTitle:function(){var t="";"1"===this.type&&(t="".concat(this.credit.credit_text,"规则")),"2"===this.type&&(t="规则说明"),uni.setNavigationBarTitle({title:t})}}};e.default=i},cbf3:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rules"},["1"==t.type?i("v-uni-view",[i("v-uni-view",{staticClass:"credit-rules"},[i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"上限")]),"2"==t.credit.credit_limit_type?i("v-uni-view",{staticClass:"item-text"},[t._v("最多可获得 "+t._s(t.credit.credit_limit)+" "+t._s(t.credit.credit_text))]):i("v-uni-view",{staticClass:"item-text"},[t._v("可获得"+t._s(t.credit.credit_text)+"无限制")])],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"换算规则")]),i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(t.credit.basic_credit_num)+" "+t._s(t.credit.credit_text)+" = "+t._s(t.credit.credit_num)+" 元")])],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"抵扣")]),i("v-uni-view",{staticClass:"item-text"},["0"===t.credit.credit_state?i("span",[t._v("不")]):t._e(),i("span",[t._v("支持"+t._s(t.credit.credit_text)+"抵扣")])])],1)],1)],1):t._e(),"2"==t.type?i("v-uni-view",[i("v-uni-view",{staticClass:"rules-explain"},[i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v("订单售后")]),"0"==t.explain.finish_order_refund_type?i("v-uni-view",{staticClass:"item-text"},[t._v("订单完成后不支持申请售后")]):t._e(),"1"==t.explain.finish_order_refund_type?i("v-uni-view",{staticClass:"item-text"},[t._v("订单完成后 "+t._s(t.explain.finish_order_refund_days)+" 天内支持申请售后")]):t._e()],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(t.credit.credit_text)+"退还规则")]),i("v-uni-view",{staticClass:"item-text"},[t._v("售后退款时，"+t._s(t.credit.credit_text)+"部分"),"1"===t.explain.refund_rule?i("span",[t._v("不")]):t._e(),t._v("支持退还")])],1),i("v-uni-view",{staticClass:"rules-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v("其他")]),i("v-uni-view",{staticClass:"item-text"},[t._v(t._s(t.credit.credit_text)+"商品订单不支持分销，不支持优惠叠加")])],1)],1)],1):t._e()],1)},s=[]}}]);