(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[143],{"25e9":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowSale?i("div",{staticClass:"detail_sale",style:{padding:t.px2rpx(t.componentData.style.margintop)+" "+t.px2rpx(t.componentData.style.marginleft)+" "+t.px2rpx(t.componentData.style.marginbottom)}},[i("div",{staticStyle:{overflow:"hidden"},style:{"border-radius":t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius)}},[i("div",["groups"==t.componentData.params.activityName&&t.getGroupsTeam.length?i("detail-sale-group",{attrs:{info:t.componentData.params.activityData,team:t.getGroupsTeam},on:{"click-all":function(e){arguments[0]=e=t.$handleEvent(e),t.clickGroups.apply(void 0,arguments)},"click-detail":function(e){arguments[0]=e=t.$handleEvent(e),t.clickGroupsItem.apply(void 0,arguments)},"special-click":function(e){arguments[0]=e=t.$handleEvent(e),t.clickBuyItem.apply(void 0,arguments)}}}):t._e()],1),i("ul",{staticClass:"container",style:{"border-radius":t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.topradius)+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius),background:t.componentData.style.background,color:t.componentData.style.textcolor}},t._l(t.getList,(function(e){return i("li",{key:e.type,staticClass:"item van-hairline--bottom"},[i("div",{staticClass:"label",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(e.label))]),i("div",{staticClass:"body",class:{"body-coupon":"coupon"==e.type}},["coupon"==e.type?i("ul",{staticClass:"coupons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("coupon")}}},t._l(e.items,(function(e,a){return i("li",{key:a,staticClass:"coupon",style:{background:t.componentData.style.couponBackground,borderColor:t.componentData.style.couponBackground}},[t._v(t._s(e.content)),i("i",{staticClass:"after",style:{borderColor:t.componentData.style.couponBackground}})])})),0):"biaoqian"==e.type?i("ul",{staticClass:"biaoqians",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("biaoqian")}}},t._l(t.severList,(function(e,a){return i("li",{key:a,staticClass:"biaoqian"},[i("p",{staticClass:"word",class:t.getLabelStyle?"":"bg-color",style:{backgroundColor:t.getLabelStyle?t.componentData.style.background:t.componentData.style.servercolor,color:t.componentData.style.textcolor}},[i("i",{class:t.getLabelStyle,style:{color:t.componentData.style.servercolor}}),i("span",{style:{color:t.componentData.style.serverTextColor}},[t._v(t._s(e.name))])])])})),0):"bupeisong"==e.type?i("div",{staticClass:"common"},[i("p",{staticClass:"words",style:{color:t.componentData.style.textcolor}},[t._v(t._s(0!=t.componentData.params.hidedispatch?e.content.value:"待下单时查看"))]),e.showIcon?i("p",{staticStyle:{color:"#969696","font-size":"24rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("bupeisong")}}},[t._v("查看发货区域")]):t._e()]):"samecity"==e.type?i("v-uni-view",{staticClass:"samecity",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("samecity")}}},[i("v-uni-view",{staticClass:"words line-hide",style:{color:t.componentData.style.textcolor}},[t._v(t._s(e.content.value))])],1):"active"==e.type?i("ul",{staticClass:"actives",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("active")}}},t._l(t.activeList,(function(e,a){return i("li",{key:a,staticClass:"active"},[e?i("p",{staticClass:"icon-word",style:{color:t.componentData.style.activeTagColor,borderColor:t.componentData.style.activeTagColor,color:t.componentData.style.activeTagColor}},["score"==e.type?i("span",[t._v(t._s(t.credit_text))]):"balance"==e.type?i("span",[t._v(t._s(t.balance_text))]):i("span",[t._v(t._s(e.name))])]):t._e(),"full"==e.type?i("div",{staticClass:"demon"},[t._v("全场满"),i("i",{style:{color:t.componentData.style.numcolor}},[t._v("￥"+t._s(e.enough))]),t._v("立减"),i("i",{style:{color:t.componentData.style.numcolor}},[t._v("￥"+t._s(e.deduct))])]):t._e(),"freeExpress"==e.type?i("div",{staticClass:"demon"},["full_free_dispatch"==e.classify?i("p",{staticClass:"demon-text"},[t._v("全场满"),i("i",{style:{color:t.componentData.style.numcolor}},[t._v("￥"+t._s(e.value))]),t._v("包邮")]):t._e(),"single_full_unit_num"==e.classify?i("p",{staticClass:"demon-text"},[t._v("单商品满"),i("i",{style:{color:t.componentData.style.numcolor}},[t._v(t._s(e.value)+"件")]),t._v("包邮")]):t._e(),"single_full_quota_price"==e.classify?i("p",{staticClass:"demon-text"},[t._v("单商品满"),i("i",{style:{color:t.componentData.style.numcolor}},[t._v("￥"+t._s(e.value))]),t._v("包邮")]):t._e(),"all_dispatch"==e.classify?i("p",[t._v("该商品支持全国包邮")]):t._e()]):t._e(),"score"==e.type&&"0"!=e.deduction_type?i("p",{staticClass:"demon"},["1"==e.deduction_type?i("span",[t._v("支持"+t._s(t.credit_text)+"抵扣")]):t._e(),"2"==e.deduction_type?i("span",[t._v("支持"+t._s(t.credit_text)+"抵扣"),i("i",{style:{color:t.componentData.style.numcolor}},[t._v(t._s(e.deduction_price))]),t._v("元")]):t._e()]):t._e(),"balance"==e.type?i("p",{staticClass:"demon"},["1"==e.deduction_type?i("span",[t._v("支持"+t._s(t.balance_text)+"抵扣")]):t._e(),"2"==e.deduction_type?i("span",[t._v("支持"+t._s(t.balance_text)+"抵扣"),i("i",{style:{color:t.componentData.style.numcolor}},[t._v(t._s(e.deduction_price))]),t._v("元")]):t._e()]):t._e()])})),0):"bupeisong"==e.type?i("div",{staticClass:"common",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("bupeisong")}}},[e.content.iconword?i("p",{staticClass:"icon-word"},[t._v(t._s(e.content.iconword))]):t._e(),i("p",{staticClass:"words"},[t._v(t._s(e.content.value))])]):t._e()],1),e.items&&e.items.length||e.chooseAdr?i("i",{staticClass:"iconfont-m- icon-m-right",style:{color:t.componentData.style.titlecolor}}):t._e()])})),0)])]):t._e()},o=[]},3341:function(t,e,i){var a=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("ade3")),o=i("2f62"),r=i("dc11");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={computed:l({},(0,o.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:r.px2rpx}};e.default=c},"58bc":function(t,e,i){var a=i("cf83");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6fb33e0c",a,!0,{sourceMap:!1,shadowMode:!1})},"67a0":function(t,e,i){"use strict";i.r(e);var a=i("fd50"),n=i("e43a");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a342");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6c6dec61",null,!1,a["a"],r);e["default"]=l.exports},"83b2":function(t,e,i){var a=i("b8b9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("293c3847",a,!0,{sourceMap:!1,shadowMode:!1})},a342:function(t,e,i){"use strict";var a=i("58bc"),n=i.n(a);n.a},a4a1:function(t,e,i){"use strict";var a=i("83b2"),n=i.n(a);n.a},accb:function(t,e,i){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("3835"));i("a481"),i("96cf");var o=a(i("1da1"));i("456d"),i("ac6a");var r={props:{info:{type:Object,default:function(){}},team:{type:Array,default:function(){return[]}}},data:function(){return{lists:[]}},computed:{filterList:function(){return this.lists.slice(0,2)},isLadderGroup:function(){return"1"==this.info.inner_type},getLadderPrice:function(){var t=this.info,e=t.inner_type,i=t.rules.success_num,a=t.every_ladder_min_price,n="";return"1"!=e||(Object.keys(i).forEach((function(t){n+="".concat(i[t],"人团¥").concat(a[t],"，")})),n=n.slice(0,-1)),n}},watch:{team:{handler:function(){var t=this;this.lists=this.team||[],this.lists.forEach((function(e){return t.getTime(e)}))},immediate:!0}},mounted:function(){},methods:{clickItem:function(){this.lists.length>2&&this.$emit("click-all")},clickJoin:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"1"==e.is_join?this.$emit("click-detail",e):(i={btn:"buy",activeName:"groups",is_join:"1",team_id:e.id},"1"==this.info.inner_type&&(i.ladder=e.ladder),this.$emit("special-click",i));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getSurplus:function(t){var e=t.count,i=void 0===e?0:e,a=t.success_num,n=void 0===a?0:a;return+n-+i},getTime:function(t){var e=this,i=new Date(Date.parse(t.end_time.replace(/-/g,"/"))).getTime(),a=parseInt(i/1e3),o=function(){var i=e.$utils.countDown(a,!1);if(!1!==i){var o=(0,n.default)(i,4),s=o[0],l=o[1],c=o[2],d=o[3];e.$set(t,"countTime","".concat(s,"天").concat(l,":").concat(c,":").concat(d))}else e.lists=e.lists.filter((function(e){return e!==t})),clearInterval(r)};o();var r=setInterval((function(){o()}),1e3);this.$once("hook:beforeDestroy",(function(){clearInterval(r)}))}}};e.default=r},b8b9:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-56e05952], .istop[data-v-56e05952]{z-index:999990}._i[data-v-56e05952]{display:inline}uni-view[data-v-56e05952]{box-sizing:border-box}.def-pad[data-v-56e05952]{padding:%?8?% %?16?%}*[data-v-56e05952]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-56e05952]{list-style:none}ul[data-v-56e05952]{padding:0}uni-image[data-v-56e05952]{height:auto}.detail_sale[data-v-56e05952]{width:100%}.detail_sale .container[data-v-56e05952]{width:100%;box-sizing:border-box;padding-left:%?24?%}.detail_sale .container .item[data-v-56e05952]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding-right:%?24?%}.detail_sale .container .item.van-hairline--bottom[data-v-56e05952]:after{border-bottom-color:#e6e7eb;border-style:solid}.detail_sale .container .item:last-child.van-hairline--bottom[data-v-56e05952]:after{border-width:0}.detail_sale .container .label[data-v-56e05952]{box-sizing:border-box;font-size:%?24?%;min-width:%?96?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-height:%?80?%;color:#969696}.detail_sale .container .body[data-v-56e05952]{width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;line-height:%?56.18893?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.detail_sale .container .body.body-coupon[data-v-56e05952]{height:%?80?%;overflow:hidden}.detail_sale .container .body .coupons[data-v-56e05952]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.detail_sale .container .body .coupons .coupon[data-v-56e05952]{height:%?36?%;line-height:%?36?%;margin:%?22?% %?22?% %?22?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?20?%;color:#fff;text-align:center;padding:0 %?16?%;background:red;position:relative;border-top-left-radius:%?4?%;border-bottom-left-radius:%?4?%}.detail_sale .container .body .coupons .coupon .after[data-v-56e05952]{position:absolute;top:0;bottom:0;width:0}.detail_sale .container .body .coupons .coupon .after[data-v-56e05952]{border-left:%?2.443?% dotted red;right:%?-2.443?%}.detail_sale .container .body .biaoqians[data-v-56e05952]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.detail_sale .container .body .biaoqians .biaoqian[data-v-56e05952]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;font-size:%?24?%;font-weight:500;margin-right:%?24?%}.detail_sale .container .body .biaoqians .biaoqian .word[data-v-56e05952]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;position:relative;font-size:%?24?%}.detail_sale .container .body .biaoqians .biaoqian .word .icon-m-yes1[data-v-56e05952]{margin-right:%?8?%;font-size:%?28?%}.detail_sale .container .body .biaoqians .biaoqian .word .icon-m-dian[data-v-56e05952]{margin-right:%?8?%;font-size:%?28?%}.detail_sale .container .body .biaoqians .biaoqian .word.bg-color[data-v-56e05952]{height:%?38?%;line-height:%?24?%;padding:%?8?% %?16?%;border-radius:%?38?%;overflow:hidden}.detail_sale .container .body .biaoqians .biaoqian .word.bg-color .bg[data-v-56e05952]{position:absolute;top:0;left:0;bottom:0;right:0}.detail_sale .container .body .actives[data-v-56e05952]{padding:%?14?% 0}.detail_sale .container .body .actives .active[data-v-56e05952]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.detail_sale .container .body .actives .active i[data-v-56e05952]{font-style:normal}.detail_sale .container .body .actives .active .demon[data-v-56e05952], .detail_sale .container .body .actives .active .demon-text[data-v-56e05952]{line-height:%?24?%;font-size:%?24?%;margin:%?8?% 0;color:#212121}.detail_sale .container .body .actives .active .demon i[data-v-56e05952], .detail_sale .container .body .actives .active .demon-text i[data-v-56e05952]{line-height:%?24?%;font-size:%?24?%}.detail_sale .container .body .common[data-v-56e05952]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?24?%;font-size:%?24?%;margin:auto 0}.detail_sale .container .body .common i[data-v-56e05952]{font-style:normal}.detail_sale .container .body .common .words[data-v-56e05952]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:auto 0;padding:%?6?% 0;font-weight:500;font-size:%?24?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.detail_sale .container .body .words[data-v-56e05952]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:auto 0;font-weight:400;font-size:%?24?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.detail_sale .container .body .samecity[data-v-56e05952]{color:#212121;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;height:%?88?%;line-height:%?88?%;padding-left:%?20?%}.detail_sale .container .body .icon-word[data-v-56e05952]{font-size:%?20?%;height:%?32?%;line-height:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border:%?1?% solid #ff3c29;color:#ff3c29;border-radius:%?16?%;padding:%?6?% %?16?%;margin:%?8?% %?16?% %?8?% 0}.detail_sale .container .icon-m-right[data-v-56e05952]{position:relative;-webkit-flex-shrink:0;flex-shrink:0;line-height:%?32?%;height:%?32?%;margin:auto 0 auto %?2?%;font-size:%?32?%;color:#969696}',""]),t.exports=e},c200:function(t,e,i){"use strict";i.r(e);var a=i("25e9"),n=i("fabd");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a4a1");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"56e05952",null,!1,a["a"],r);e["default"]=l.exports},cf83:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.detail_sale__group[data-v-6c6dec61]{padding-left:%?24?%;margin-bottom:%?16?%;background:#fff}.detail_sale__group .title-box[data-v-6c6dec61]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?24?%;height:%?80?%}.detail_sale__group .title-box.van-hairline--bottom[data-v-6c6dec61]:after{border-bottom-color:#e6e7eb;border-style:solid}.detail_sale__group .title-box .title[data-v-6c6dec61]{font-size:%?28?%}.detail_sale__group .title-box .touch-content[data-v-6c6dec61]{height:%?80?%;line-height:%?80?%;padding-left:%?40?%}.detail_sale__group .title-box .icon-m-right[data-v-6c6dec61]{font-size:%?32?%;color:#969696}.detail_sale__group .groups.van-hairline--bottom[data-v-6c6dec61]:after{border-bottom-color:#e6e7eb;border-style:solid}.detail_sale__group .groups .group[data-v-6c6dec61]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?126?%}.detail_sale__group .groups .group-left[data-v-6c6dec61], .detail_sale__group .groups .group-right[data-v-6c6dec61]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.detail_sale__group .groups .group-right[data-v-6c6dec61]{padding-right:%?24?%}.detail_sale__group .groups .group-avatar[data-v-6c6dec61]{margin-right:%?16?%;border-radius:50%;height:%?76?%;width:%?76?%}.detail_sale__group .groups .group-leader[data-v-6c6dec61]{width:%?240?%}.detail_sale__group .groups .group-leader-name[data-v-6c6dec61]{font-size:%?24?%;line-height:%?34?%}.detail_sale__group .groups .group-leader-tag[data-v-6c6dec61]{display:inline-block;border-radius:%?4?%;border:%?2?% solid #ffdaa3;padding:%?2?% %?8?%;font-size:%?20?%;line-height:%?28?%;color:#ff6f29;background:#fff9f0}.detail_sale__group .groups .group-info[data-v-6c6dec61]{margin-right:%?16?%}.detail_sale__group .groups .group-info-desc[data-v-6c6dec61]{font-size:12px;line-height:17px;text-align:right;color:#212121}.detail_sale__group .groups .group-info-user[data-v-6c6dec61]{margin:0 %?8?%;color:#ff3c29}.detail_sale__group .groups .group-time-desc[data-v-6c6dec61], .detail_sale__group .groups .group-time-num[data-v-6c6dec61]{font-size:%?22?%;line-height:%?30?%;color:#969696}.detail_sale__group .groups .group-time-num[data-v-6c6dec61]{font-family:PingFang SC;font-variant-numeric:tabular-nums;font-family:Helvetica Neue;text-align:right;display:inline-block}.detail_sale__group .groups .group-time-desc[data-v-6c6dec61]{margin-right:%?4?%}.detail_sale__group .groups .group-btn[data-v-6c6dec61]{width:%?136?%;height:%?54?%;font-size:%?24?%;font-weight:700;line-height:%?54?%;text-align:center;color:#fff;background:-webkit-linear-gradient(335.43deg,#ff8a00 19.05%,#ff4c14 87.67%);background:linear-gradient(114.57deg,#ff8a00 19.05%,#ff4c14 87.67%);border-radius:24px}.detail_sale__group .group-tip[data-v-6c6dec61]{padding:%?24?% %?24?% %?24?% 0;font-size:%?24?%;line-height:%?34?%;color:#212121}',""]),t.exports=e},d9d3:function(t,e,i){var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6"),i("ac6a");var n=a(i("3341")),o=a(i("67a0")),r={mixins:[n.default],name:"detail_sale",components:{DetailSaleGroup:o.default},data:function(){return{balance_text:"余额",credit_text:"积分",activeList:[],severList:[]}},computed:{isShowSale:function(){return this.componentData&&"detail_sale"==this.componentData.id&&(this.getList.length||"groups"==this.componentData.params.activityName&&this.getGroupsTeam.length)&&(this.componentData.params.isBargain||!this.componentData.params.buy_button_status)&&6!=this.componentData.params.goods.type},getLabelStyle:function(){return"0"==this.componentData.params.label_style?"":1==this.componentData.params.label_style?"icon-m-dian iconfont-m-":"icon-m-yes1 iconfont-m-"},getGroupsTeam:function(){var t,e,i;return this.$isPC?[]:(null===(t=this.componentData)||void 0===t||null===(e=t.params)||void 0===e||null===(i=e.activityData)||void 0===i?void 0:i.team)||[]},getList:function(){var t,e={yushou:!1,erci:!1,huiyuan:!0,youhui:!1,jifen:!1,bupeisong:!0,biaoqian:!0,coupon:!0,zengpin:!1,fullback:!1,active:!0,samecity:!0,verify:!0};return null!==(t=this.componentData)&&void 0!==t&&t.data?this.componentData.data.filter((function(t){return e[t.type]})).filter((function(t){return t.label&&(t.items&&t.items.length||t.content)})):[]}},watch:{getList:{handler:function(t){var e=[],i=[];t.forEach((function(t){"active"==t.type?e=t.items:"biaoqian"==t.type&&(i=t.items)})),this.activeList=this.dealData(e),this.severList=i.slice(0,3)},immediate:!0}},methods:{clickItem:function(t){this.$emit("custom-event",{target:"detail_sale/clickItem",data:{type:t,data:this.componentData}})},clickBuyItem:function(t){this.$emit("custom-event",{target:"detail_navbar/clickItem",data:t})},clickGroupsItem:function(t){this.$emit("custom-event",{target:"detail_sale/clickGroupsItem",data:{data:this.componentData,item:t}})},clickGroups:function(){this.$emit("custom-event",{target:"detail_sale/clickGroups",data:{info:this.componentData.params.activityData}})},dealData:function(t){if(this.$isPC)return t;var e={},i=t.filter((function(t){if(!e[t.type])return e[t.type]=!0,t}));return i},sliceList:function(t){return t?t.slice(0,3):[]},is_active:function(t){var e=["seckill","preheat_activity"];return t&&e.some((function(e){return t[e]}))}},filters:{priceUnit:function(t){var e=t||0,i=Number(e);if(!(i<100))return i=Number(e/1e3),i>100?i=">100km":i+="km",i;i="<100m"}},beforeMount:function(){var t,e;this.$isPC||(this.balance_text=null===(t=this.$store.state.setting.systemSetting)||void 0===t?void 0:t.balance_text,this.credit_text=null===(e=this.$store.state.setting.systemSetting)||void 0===e?void 0:e.credit_text)}};e.default=r},e43a:function(t,e,i){"use strict";i.r(e);var a=i("accb"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},fabd:function(t,e,i){"use strict";i.r(e);var a=i("d9d3"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},fd50:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.filterList.length?i("div",{staticClass:"detail_sale__group"},[i("div",{staticClass:"title-box van-hairline--bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem.apply(void 0,arguments)}}},[i("span",{staticClass:"title"},[t._v("以下用户正在拼团，可直接参与拼团")]),t.lists.length>2?i("div",{staticClass:"touch-content"},[i("i",{staticClass:"iconfont-m- icon-m-right"})]):t._e()]),i("ul",{staticClass:"groups van-hairline--bottom"},t._l(t.filterList,(function(e,a){return i("li",{key:a,staticClass:"group"},[i("div",{staticClass:"group-left"},[i("img",{staticClass:"group-avatar",attrs:{src:t.$utils.mediaUrl(e.avatar)||t.$utils.staticMediaUrl("decorate/avatar_mobile.png")}}),i("div",{staticClass:"group-leader"},[i("div",{staticClass:"group-leader-name line-hide"},[t._v(t._s(e.nickname))]),t.isLadderGroup?i("div",{staticClass:"group-leader-tag"},[t._v(t._s(e.success_num)+"人团")]):t._e()])]),i("div",{staticClass:"group-right"},[i("div",{staticClass:"group-info"},[i("div",{staticClass:"group-info-desc"},[t._v("还差"),i("span",{staticClass:"group-info-user"},[t._v(t._s(t.getSurplus(e))+"人")]),t._v("成团")]),i("div",{staticClass:"group-time-box"},[i("span",{staticClass:"group-time-desc"},[t._v("剩余")]),i("span",{staticClass:"group-time-num"},[t._v(t._s(e.countTime))])])]),i("div",{staticClass:"group-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickJoin(e)}}},[t._v("去参团")])])])})),0),t.isLadderGroup?i("div",{staticClass:"group-tip"},[t._v("拼团玩法："+t._s(t.getLadderPrice)+"先选择参团人数，支付开团邀请好友参团，人数不足将自动退款")]):i("div",{staticClass:"group-tip"},[t._v("拼团玩法：支持开团邀请好友参团，人数不足自动退款")])]):t._e()},o=[]}}]);