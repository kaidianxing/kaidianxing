(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"0a3b":function(t,i,e){var o=e("6374");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("5fc20e84",o,!0,{sourceMap:!1,shadowMode:!1})},"1ab3":function(t,i,e){var o=e("4ea4");e("8e6e"),e("ac6a"),e("456d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("ade3")),n=e("eab7"),s=e("2f62");function r(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?r(Object(e),!0).forEach((function(i){(0,a.default)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var c={name:"GoodsInfo",props:{goodsData:{type:Object,default:function(){}},show_style:{type:Boolean,default:!1},isAddIcon:{type:Boolean,default:!1},quickPurchase:{type:Boolean,default:!1}},data:function(){return{loading:!0,preloading:!0}},computed:d(d({},(0,s.mapState)("setting",{sale_out:function(t){var i,e;return(null===(i=t.systemSetting)||void 0===i||null===(e=i.basic)||void 0===e?void 0:e.sale_out)||""}})),{},{getSoldOutIcon:function(){return this.sale_out?this.$utils.mediaUrl(this.sale_out):this.$utils.staticMediaUrl("decorate/sale_out.png")},getLoadingSrc:function(){var t,i;return null!==(t=this.$store.state.setting.systemSetting)&&void 0!==t&&null!==(i=t.basic)&&void 0!==i&&i.loading?this.$store.state.setting.cacheLoadingImg||this.$utils.mediaUrl(this.$store.state.setting.systemSetting.basic.loading):this.$utils.staticMediaUrl("decorate/goods_col2.png")},getActName:function(){return this.goodsData.activities?(0,n.getActivityName)(this.goodsData.activities):""},getSeckillPrice:function(){if("1"==this.goodsData.has_option){var t,i,e=(null===(t=this.goodsData.activities)||void 0===t||null===(i=t.seckill)||void 0===i?void 0:i.price_range)||{},o=e.min_price;return"".concat(o)}var a,n,s,r;return null===(a=this.goodsData)||void 0===a||null===(n=a.activities)||void 0===n||null===(s=n.seckill)||void 0===s||null===(r=s.goods_info[0])||void 0===r?void 0:r.activity_price},backgroundImage:function(){return"background-image:url(".concat(this.$utils.staticMediaUrl("decorate/goods_col2.png"),")")}}),mounted:function(){var t=this;setTimeout((function(){t.preloading=!1}),3e3)},methods:{loaded:function(t){this.loading=!1},addCart:function(){this.quickPurchase?this.$emit("custom-event",{type:"addCart",data:{goods_id:this.goodsData.id}}):this.toDetail(this.goodsData.id)},toDetail:function(t){this.$Router.auto({path:"/kdxGoods/detail/index",query:{goods_id:t}})}},filters:{formatMoney:function(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseFloat(t/1e4)+"万":parseFloat(t):0}}};i.default=c},"2e95":function(t,i,e){"use strict";var o;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.list.length>0?e("v-uni-view",{staticClass:"goods-like"},[e("v-uni-view",{staticClass:"like-title"},[t._v("你可能会喜欢")]),e("v-uni-view",{staticClass:"card-list flex"},t._l(t.list,(function(t,i){return e("v-uni-view",{key:i},[e("goods-info",{attrs:{goodsData:t,show_style:!0,isAddIcon:!0}})],1)})),1)],1):t._e()},n=[]},"44c8":function(t,i,e){"use strict";var o;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("theme-content",[e("v-uni-view",{staticClass:"goods-info-box",class:t.show_style?"two-lines flex":""},[e("v-uni-view",{staticClass:"goods-card-item line",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(t.goodsData.id)}}},[e("v-uni-view",{staticClass:"goods-card-inner",class:t.show_style?"flex-column":"flex"},[e("v-uni-view",{staticClass:"label-box"},[e("v-uni-view",{staticClass:"label-icon"},[t.goodsData.stock<1?e("v-uni-view",{staticClass:"sale-img"},[e("v-uni-image",{staticClass:"sale-img-soldout",attrs:{src:t.getSoldOutIcon}})],1):"seckill"==t.getActName?[e("v-uni-view",{staticClass:"seckill-tag"},[e("i",{staticClass:"iconfont-m- icon-m-shandian badge-icon"}),e("span",{staticClass:"badge-text"},[t._v("限时秒杀")])])]:[1==t.goodsData.is_recommand?e("v-uni-view",{staticClass:"recommend"},[e("v-uni-image",{attrs:{src:t.$utils.staticMediaUrl("goods/3.png")}}),e("span",[t._v("推荐")])],1):1==t.goodsData.is_new?e("v-uni-view",{staticClass:"recommend"},[e("v-uni-image",{attrs:{src:t.$utils.staticMediaUrl("goods/1.png")}}),e("span",[t._v("新品")])],1):1==t.goodsData.is_hot?e("v-uni-view",{staticClass:"hot"},[e("v-uni-image",{attrs:{src:t.$utils.staticMediaUrl("goods/4.png")}}),e("span",[t._v("热卖")])],1):t._e()]],2),t.goodsData.activities&&t.goodsData.activities.commission?e("v-uni-view",{staticClass:"commision-money"},[t._v("预计佣金￥"+t._s(t.goodsData.activities.commission))]):t._e(),e("v-uni-view",{staticClass:"goods-img",style:t.backgroundImage},[t.loading&&t.preloading?e("v-uni-image",{staticClass:"goods-img-img preload",attrs:{src:t.getLoadingSrc}}):t._e(),e("v-uni-image",{staticClass:"goods-img-img",class:{loading:t.loading&&t.preloading},attrs:{src:t.$utils.mediaUrl(t.goodsData.thumb)},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.loaded.apply(void 0,arguments)},error:function(i){arguments[0]=i=t.$handleEvent(i),t.loaded.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"goods-info flex1 flex-column flex-between"},[e("v-uni-view",{staticClass:"goods-title"},[e("v-uni-view",{staticClass:"title two-line-hide"},[t._v(t._s(t.goodsData.title))]),t.show_style?t._e():e("v-uni-view",{staticClass:"sub-title line-hide"},[t._v(t._s(t.goodsData.sub_name))])],1),[e("v-uni-view",{staticClass:"price-box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[e("v-uni-view",{staticClass:"flex-between"},[e("v-uni-view",[[t.goodsData.activities&&null!=t.goodsData.activities.member_price?e("v-uni-view",{staticClass:"price"},[t._v("￥"),e("v-uni-text",{staticClass:"primary-price"},[t._v(t._s(t.goodsData.activities.member_price))])],1):"seckill"==t.getActName?e("v-uni-view",{staticClass:"price"},[t._v(t._s(t.getSeckillPrice))]):e("v-uni-view",{staticClass:"price"},[t._v("￥"),e("v-uni-text",{staticClass:"primary-price"},[t._v(t._s(t.goodsData.price))])],1)],t.goodsData.original_price&&0!=t.goodsData.original_price?e("v-uni-view",{staticClass:"original_price"},[t._v("￥"+t._s(t._f("formatMoney")(t.goodsData.original_price)))]):t._e()],2),t.getActName?[t.goodsData.ext_field&&1==t.goodsData.ext_field.show_sales&&"seckill"!==t.getActName?e("v-uni-view",{staticClass:"sales"},[t._v("销量:"+t._s(t.goodsData.sales))]):t._e(),e("div",{staticClass:"buy-btn-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(t.goodsData.id)}}},[e("div",{staticClass:"btn  theme-primary-border"},[e("span",{staticClass:"buybtn theme-primary-color"},[t._v("去购买")]),e("i",{staticClass:"iconfont-m- icon-m-right theme-primary-color"})])])]:[e("v-uni-view",{staticClass:"right"},[t.isAddIcon?e("v-uni-view",{staticClass:"cart-icon",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.addCart.apply(void 0,arguments)}}},[e("i",{staticClass:"iconfont-m- icon-m-buy1 theme-primary-color"})]):t._e(),t.goodsData.ext_field&&1==t.goodsData.ext_field.show_sales?e("v-uni-view",{staticClass:"sales"},[t._v("销量:"+t._s(t.goodsData.sales))]):t._e()],1)]],2)],1)]],2)],1)],1)],1)],1)},n=[]},4538:function(t,i,e){"use strict";e.r(i);var o=e("2e95"),a=e("c78d");for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("95aef");var s,r=e("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"0de6fcce",null,!1,o["a"],s);i["default"]=d.exports},4543:function(t,i,e){"use strict";e.r(i);var o=e("1ab3"),a=e.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=a.a},6374:function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods-info-box .loading[data-v-7f129d6c]{display:block;height:0;opacity:0}.goods-info-box.two-lines[data-v-7f129d6c]{-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.goods-info-box.two-lines .goods-card-item[data-v-7f129d6c]{width:%?344?%;margin-bottom:%?16?%;background-color:#fff;border-radius:%?12?%;box-sizing:border-box}.goods-info-box.two-lines .goods-card-item .label-box[data-v-7f129d6c]{position:relative}.goods-info-box.two-lines .goods-card-item.line[data-v-7f129d6c]::after{content:"";border:0}.goods-info-box.two-lines .goods-card-item .goods-info[data-v-7f129d6c]{padding:%?16?%;height:%?204?%;box-sizing:border-box}.goods-info-box.two-lines .goods-card-item .goods-info .goods-title[data-v-7f129d6c]{height:%?130?%}.goods-info-box.two-lines .goods-card-item .goods-img[data-v-7f129d6c]{width:%?344?%;height:%?344?%;background-repeat:no-repeat;background-size:cover}.goods-info-box.two-lines .goods-card-item .goods-img .goods-img-img[data-v-7f129d6c]{width:%?344?%;height:%?344?%}.goods-info-box.two-lines .goods-card-item .deposit[data-v-7f129d6c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?8?%}.goods-info-box.two-lines .goods-card-item .deposit .deposit-text[data-v-7f129d6c]{width:%?74?%;height:%?38?%;font-size:%?24?%;border-radius:%?20?% 0 0 %?20?%;background-color:#ff3c29;color:#fff;text-align:center}.goods-info-box.two-lines .goods-card-item .deposit .deposit-price[data-v-7f129d6c]{padding:0 %?16?%;height:%?38?%;font-size:%?24?%;border-radius:0 %?20?% %?20?% 0;background-color:#fff;color:#ff3c29;border:1px solid #ff3c29}.goods-info-box.two-lines .goods-card-item .buy-btn-box[data-v-7f129d6c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods-info-box.two-lines .goods-card-item .buy-btn-box .btn[data-v-7f129d6c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?16?%;height:%?54?%;margin:0;border-radius:%?30?%;border:1px solid #ff3c29}.goods-info-box.two-lines .goods-card-item .buy-btn-box .btn .buybtn[data-v-7f129d6c]{margin-right:%?8?%;font-size:%?24?%;line-height:%?34?%;color:#ff3c29}.goods-info-box.two-lines .goods-card-item .buy-btn-box .btn .iconfont-m-[data-v-7f129d6c]{font-size:%?24?%;color:#ff3c29}.goods-info-box.two-lines .goods-card-item .sub-title[data-v-7f129d6c]{height:%?50?%}.commision-money[data-v-7f129d6c]{position:absolute;bottom:0;left:0;z-index:999;width:100%;height:%?42?%;font-size:%?20?%;line-height:%?42?%;text-align:center;color:#fff;background:-webkit-linear-gradient(278.34deg,#ff3c29,#ff6f29 94.38%);background:linear-gradient(171.66deg,#ff3c29,#ff6f29 94.38%)}.goods-card-item .goods-card-inner .goods-info .price.bargaining[data-v-7f129d6c]{font-size:%?28?%}',""]),t.exports=i},"7aa3":function(t,i,e){"use strict";e.r(i);var o=e("44c8"),a=e("4543");for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("ad51");var s,r=e("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"7f129d6c",null,!1,o["a"],s);i["default"]=d.exports},"95aef":function(t,i,e){"use strict";var o=e("bc97"),a=e.n(o);a.a},"9ebc":function(t,i,e){var o=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("2909")),n=o(e("7aa3")),s={components:{goodsInfo:n.default},data:function(){return{list:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$api.goodApi.goodList({is_recommand:1,get_activity:1}).then((function(i){0==i.error&&t.handleRandom(i.list)}))},todetail:function(t){this.$Router.auto({path:"/kdxGoods/detail/index",query:{goods_id:t}})},handleRandom:function(t){var i=[];if(t.length<=6)i=(0,a.default)(t);else{var e=JSON.parse(JSON.stringify(t));while(i.length<6){var o=Math.floor(Math.random()*e.length);i.push(e.splice(o,1)[0])}}this.list=i}}};i.default=s},ad51:function(t,i,e){"use strict";var o=e("0a3b"),a=e.n(o);a.a},bc97:function(t,i,e){var o=e("e0ff");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("75b0657a",o,!0,{sourceMap:!1,shadowMode:!1})},c78d:function(t,i,e){"use strict";e.r(i);var o=e("9ebc"),a=e.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=a.a},e0ff:function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods-like[data-v-0de6fcce]{padding:%?0?% %?24?%;overflow:hidden}.goods-like .like-title[data-v-0de6fcce]{height:%?80?%;line-height:%?80?%;font-weight:700;color:#212121;font-size:%?32?%;text-align:center}.goods-like .card-list[data-v-0de6fcce]{-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=i}}]);