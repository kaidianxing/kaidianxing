(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{"0fcd":function(e,t,i){var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("5ebd")),o=a(i("a64f")),r={name:"redpacket_detail",mixins:[o.default],components:{redpacket:n.default},data:function(){return{list:[],nodataTip:"暂无红包",nodataType:"noRedpacket",page:1,finished:!1,requestFlag:!1,activityType:"",activityData:{},total_money:"",redpackNum:0}},mounted:function(){this.getList(),this.getNoRedpacket()},methods:{getList:function(){var e=this;this.requestFlag=!0,this.$api.memberApi.getRedpacketList({page:this.page,pageSize:20}).then((function(t){e.requestFlag=!1,0===t.error?(e.finished=t.list.length!==t.page_size,e.list=e.list.concat(t.list),e.total_money=t.total_money):e.$toast(t.message||"出错啦")}))},getNoRedpacket:function(){var e=this;this.$api.memberApi.getNoRedpacket({page:this.page,pageSize:20}).then((function(t){if(e.redpackNum=t.list.length,0==t.error&&t.list.length){var i=t.list[0];e.activityType=s[i.scene],e.activityData={blessing:i.extend.blessing,created_at:i.created_at,expire_time:i.expire_time,limit:i.extend.limit,money:i.money,id:i.id}}}))},refreshList:function(){this.list=[],this.page=1,this.getList(),this.getNoRedpacket()},changeShowReward:function(e){e.update&&this.refreshList()}},onReachBottom:function(){this.finished?this.$toast("没有更多了~"):(this.page++,this.getList())},onPullDownRefresh:function(){this.refreshList(),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)}};t.default=r;var s={12:"consumeReward",11:"shoppingReward"}},"274f":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("page-box",[e.list.length?i("div",{staticClass:"redpacket_detail"},[i("div",{staticClass:"redpacket_total"},[i("img",{attrs:{src:e.$utils.staticMediaUrl("activity/redpacket/redpacketDetail.png"),alt:""}}),i("div",{staticClass:"redpacket_title flex-column"},[i("div",{staticClass:"text"},[e._v("累计领取金额")]),i("div",{staticClass:"money"},[e._v("￥"+e._s(e.total_money))])])]),i("ul",{staticClass:"list-item"},e._l(e.list,(function(t,a){return i("li",{key:a,staticClass:"item"},[i("div",{staticClass:"flex align-center"},[i("img",{attrs:{src:e.$utils.staticMediaUrl("activity/redpacket/smallRedpacket.png"),alt:""}}),i("div",{staticClass:"flex-column flex1",staticStyle:{"margin-left":"12px"}},[i("div",{staticClass:"title"},[e._v(e._s(t.scene_text))]),i("div",{staticClass:"receive_date"},[e._v("领取时间："+e._s(t.updated_at))])]),i("div",{staticClass:"receive_money"},[e._v("+"+e._s(t.money)+"元")])]),i("img",{staticClass:"receive-img",attrs:{src:e.$utils.staticMediaUrl("coupon/receive.png"),alt:""}})])})),0)]):e.requestFlag||e.list.length?e._e():i("default-page",{attrs:{title:e.nodataTip,imgUrl:e.$utils.staticMediaUrl("default/no_redpacket.png")}}),i("redpacket",{attrs:{activityType:e.activityType,activityData:e.activityData,redpackNum:e.redpackNum,path:!0,isShow:!1},on:{"update:visible":function(t){arguments[0]=t=e.$handleEvent(t),e.changeShowReward.apply(void 0,arguments)}}})],1)},o=[]},"30a8":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bg_redpacket[data-v-72ee2901]{position:absolute}.ticket[data-v-72ee2901]{position:fixed;left:0;top:0;z-index:9999999;width:100vw;background:rgba(0,0,0,.7);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear}.ticket.bgHidden[data-v-72ee2901]{background:transparent}.ticket .big_content[data-v-72ee2901]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?476?%;height:%?660?%}.ticket .redpacket[data-v-72ee2901]{width:%?476?%;height:%?572?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all .3s linear;transition:all .3s linear;opacity:1}.ticket .redpacket .absolute[data-v-72ee2901]{position:absolute}.ticket .redpacket > .bg-img[data-v-72ee2901]{width:100%;height:100%;top:0;left:0}.ticket .redpacket .shop_logo[data-v-72ee2901]{top:%?48?%;left:50%;margin-left:%?-50?%;height:%?100?%;width:%?100?%;border-radius:50%}.ticket .redpacket .shop_name[data-v-72ee2901]{top:%?152?%;font-size:%?28?%;line-height:%?40?%;font-weight:700;background-image:-webkit-linear-gradient(90deg,#fffcf8 1.52%,#fff3bf 99.24%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.ticket .redpacket .reward_desc[data-v-72ee2901]{top:%?204?%;font-size:%?36?%;line-height:%?50?%;font-weight:700;background-image:-webkit-linear-gradient(90deg,#fffcf8 1.52%,#fff3bf 99.24%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.ticket .redpacket .reward_good[data-v-72ee2901]{top:%?264?%;font-size:%?24?%;line-height:%?34?%;color:#fff}.ticket .redpacket .reward_open[data-v-72ee2901]{width:%?170?%;height:%?170?%;top:%?340?%}.ticket .redpacket .reward_time[data-v-72ee2901]{bottom:%?20?%;font-size:%?20?%;line-height:%?28?%;color:#fff}.ticket .scaleBot[data-v-72ee2901]{opacity:0;-webkit-transform:translate3d(-150px,200px,10px) scale(.2);transform:translate3d(-150px,200px,10px) scale(.2)}.ticket .scaleTop[data-v-72ee2901]{opacity:0;-webkit-transform:translate3d(150px,-200px,10px) scale(.2);transform:translate3d(150px,-200px,10px) scale(.2)}.ticket .redpacketOpen[data-v-72ee2901]{width:%?476?%;height:%?572?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ticket .redpacketOpen .absolute[data-v-72ee2901]{position:absolute}.ticket .redpacketOpen .foStar[data-v-72ee2901]{top:50%;margin-top:-50vw;width:100vw;height:100vw;-webkit-animation:loading-circle-data-v-72ee2901 3s linear infinite;animation:loading-circle-data-v-72ee2901 3s linear infinite;-webkit-transform:scale(1.6);transform:scale(1.6)}.ticket .redpacketOpen .openDetail[data-v-72ee2901]{width:%?476?%;height:%?572?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ticket .redpacketOpen .openDetail .shopInfo[data-v-72ee2901]{top:48pxrpx;height:%?48?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ticket .redpacketOpen .openDetail .openGet[data-v-72ee2901]{width:100%;height:100%}.ticket .redpacketOpen .openDetail .open_shop_logo[data-v-72ee2901]{width:%?48?%;height:%?48?%;border-radius:50%;margin-right:%?8?%}.ticket .redpacketOpen .openDetail .open_shop_name[data-v-72ee2901]{font-size:%?24?%;color:#6e4b19}.ticket .redpacketOpen .openDetail .reward_desc[data-v-72ee2901]{top:%?128?%;font-size:%?36?%;line-height:%?50?%;font-weight:500;color:#6e4b19}.ticket .redpacketOpen .openDetail .reward_money[data-v-72ee2901]{top:%?200?%;font-size:%?120?%;font-weight:700;line-height:%?130?%;color:#e6443b}.ticket .redpacketOpen .openDetail .reward_money span[data-v-72ee2901]{font-size:%?28?%;line-height:%?58?%}.ticket .redpacketOpen .openDetail .reward_tip[data-v-72ee2901]{top:%?356?%;font-size:%?24?%;line-height:%?34?%;color:#6e4b19}.ticket .redpacketOpen .openDetail .reward_detail[data-v-72ee2901]{bottom:%?30?%;width:%?376?%;height:%?76?%;font-weight:700;text-align:center;line-height:%?76?%;font-size:%?28?%;background-image:-webkit-linear-gradient(180deg,#fb8215 20.51%,#cd4900 81.41%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.ticket .redpacketOpen .openDetail .shopInfo[data-v-72ee2901]{top:%?48?%;height:%?48?%;line-height:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.ticket .close[data-v-72ee2901]{margin-top:%?32?%;text-align:center;height:%?56?%;line-height:%?56?%;z-index:6666}.ticket .close-icon[data-v-72ee2901]{font-size:%?56?%;color:#fff}@-webkit-keyframes loading-circle-data-v-72ee2901{0%{-webkit-transform:rotate(0deg) scale(1.6);transform:rotate(0deg) scale(1.6)}50%{-webkit-transform:rotate(180deg) scale(1.6);transform:rotate(180deg) scale(1.6)}100%{-webkit-transform:rotate(1turn) scale(1.6);transform:rotate(1turn) scale(1.6)}}@keyframes loading-circle-data-v-72ee2901{0%{-webkit-transform:rotate(0deg) scale(1.6);transform:rotate(0deg) scale(1.6)}50%{-webkit-transform:rotate(180deg) scale(1.6);transform:rotate(180deg) scale(1.6)}100%{-webkit-transform:rotate(1turn) scale(1.6);transform:rotate(1turn) scale(1.6)}}@-webkit-keyframes scale-data-v-72ee2901{0%{-webkit-transform:scale(.8);transform:scale(.8)}50%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(.2);transform:scale(.2)}}@keyframes scale-data-v-72ee2901{0%{-webkit-transform:scale(.8);transform:scale(.8)}50%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(.2);transform:scale(.2)}}.small_redpack[data-v-72ee2901]{position:fixed;left:%?28?%;bottom:%?168?%;height:%?92?%;width:%?96?%;z-index:10;-webkit-animation:redpacket_scale-data-v-72ee2901 1.2s linear infinite;animation:redpacket_scale-data-v-72ee2901 1.2s linear infinite}.small_redpack .all_redpack[data-v-72ee2901]{position:relative}.small_redpack .all_redpack img[data-v-72ee2901]{width:%?88?%;height:%?92?%}.small_redpack .all_redpack .redpack_num[data-v-72ee2901]{position:absolute;left:%?-4?%;bottom:0;width:%?96?%;height:%?26?%;line-height:%?26?%;text-align:center;color:#752626;background:-webkit-linear-gradient(339.22deg,#fee08a 7.33%,#fbc11e 86.7%);background:linear-gradient(110.78deg,#fee08a 7.33%,#fbc11e 86.7%);border-radius:6px}.small_redpack .all_redpack .redpack_num .scale_text[data-v-72ee2901]{width:%?128?%;height:%?26?%;line-height:%?28?%;margin-left:%?-16?%;font-size:%?24?%;-webkit-transform:scale(.75);transform:scale(.75)}@-webkit-keyframes redpacket_scale-data-v-72ee2901{0%{-webkit-transform:scale(1.2);transform:scale(1.2)}50%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(1.2);transform:scale(1.2)}}@keyframes redpacket_scale-data-v-72ee2901{0%{-webkit-transform:scale(1.2);transform:scale(1.2)}50%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(1.2);transform:scale(1.2)}}',""]),e.exports=t},"46bd":function(e,t,i){"use strict";i.r(t);var a=i("4ef5"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"4ef5":function(e,t,i){var a=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("ade3"));i("c5f6");var o=i("2f62");function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c={props:{activityType:{type:[String,Object],default:""},activityData:{type:Object,default:function(){}},path:{type:Boolean,default:!1},redpackNum:{type:[String,Number],default:"0"},isShow:{type:Boolean,default:!0}},data:function(){return{items:[],getRedpacket:!1,showSmall:1,visible:!1,contentScale:!1}},computed:s(s(s(s({},(0,o.mapState)(["windowHeight"])),(0,o.mapGetters)("login",["isLogin"])),(0,o.mapState)("setting",{systemSetting:function(e){return e.systemSetting}})),{},{logo:function(){var e,t;return this.$utils.mediaUrl(null===(e=this.systemSetting)||void 0===e||null===(t=e.basic)||void 0===t?void 0:t.logo)},shopName:function(){var e,t;return null===(e=this.systemSetting)||void 0===e||null===(t=e.basic)||void 0===t?void 0:t.name},getBottom:function(){return this.$store.state.areaBottom+80+"px"}}),filters:{formatActivityType:function(e){var t="";switch(e){case"consumeReward":t="消费奖励";break;case"shoppingReward":t="购物奖励";break;default:t="评价奖励";break}return t}},methods:{close:function(){var e=this;this.isShow?(this.contentScale=!1,this.visible=!1,this.$emit("update:visible",{update:!1})):(this.contentScale=!0,setTimeout((function(){e.visible=!1,e.$emit("update:visible",{update:!0})}),300))},openRedpacket:function(){var e=this;this.$api.memberApi.getRedpacket({id:this.activityData.id}).then((function(t){0==t.error?e.getRedpacket=!0:e.$toast(t.message)}))},seeRedpacketDetail:function(){this.path?(this.contentScale=!1,this.visible=!1,this.$emit("update:visible",{update:!0})):this.$Router.auto({path:"/kdxMember/detail/redpacketDetail",query:{type:4}})},openRedpack:function(){this.visible=!0,this.contentScale=!1,this.getRedpacket=!1}}};t.default=c},"5ebd":function(e,t,i){"use strict";i.r(t);var a=i("8c5a"),n=i("46bd");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("ce12");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"72ee2901",null,!1,a["a"],r);t["default"]=c.exports},8537:function(e,t,i){"use strict";i.r(t);var a=i("0fcd"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"8b8c":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.redpacket_detail[data-v-0fee7bd8]{background:#f5f5f5;padding:0 %?24?%}.redpacket_detail .redpacket_total[data-v-0fee7bd8]{height:%?224?%;overflow:hidden;border-radius:%?24?%;position:relative;margin:%?32?% 0;background-color:#ff3c29}.redpacket_detail .redpacket_total img[data-v-0fee7bd8]{width:100%;height:100%}.redpacket_detail .redpacket_total .redpacket_title[data-v-0fee7bd8]{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.redpacket_detail .redpacket_total .redpacket_title .text[data-v-0fee7bd8]{font-size:%?24?%;line-height:%?32?%;color:#fff;margin-bottom:%?8?%}.redpacket_detail .redpacket_total .redpacket_title .money[data-v-0fee7bd8]{font-weight:700;font-size:%?48?%;line-height:%?68?%;color:#fff}.redpacket_detail .item[data-v-0fee7bd8]{background-color:#fff;border-radius:%?12?%;position:relative;margin-bottom:%?16?%;padding:%?32?% %?24?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden}.redpacket_detail .item img[data-v-0fee7bd8]{width:%?64?%;height:%?64?%;border-radius:%?8?%}.redpacket_detail .item .title[data-v-0fee7bd8]{color:#212121;font-size:%?28?%;line-height:%?32?%;margin-bottom:%?8?%}.redpacket_detail .item .receive_date[data-v-0fee7bd8]{color:#969696;font-size:%?24?%;line-height:%?32?%}.redpacket_detail .item .receive_money[data-v-0fee7bd8]{z-index:999;font-weight:700;color:#ff3c29;font-size:%?28?%;line-height:%?32?%}.redpacket_detail .item .receive-img[data-v-0fee7bd8]{position:absolute;top:%?54?%;right:0;width:%?112?%;height:%?112?%;-webkit-transform:rotate(8deg);transform:rotate(8deg)}',""]),e.exports=t},"8c5a":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("page-box",{staticClass:"bg_redpacket"},[i("v-uni-view",{style:{height:e.windowHeight},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[e.visible||e.isShow?i("v-uni-view",{staticClass:"ticket",class:{bgHidden:e.contentScale},style:{height:e.windowHeight},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[i("v-uni-view",{staticClass:"big_content"},[e.getRedpacket?i("v-uni-view",{staticClass:"redpacketOpen"},[i("v-uni-image",{staticClass:"foStar absolute",attrs:{src:e.$utils.staticMediaUrl("activity/redpacket/fostar.png")}}),i("v-uni-view",{staticClass:"openDetail"},[i("v-uni-image",{staticClass:"openGet absolute",attrs:{src:e.$utils.staticMediaUrl("activity/redpacket/redpacketBack.png")}}),i("v-uni-view",{staticClass:"shopInfo absolute"},[i("img",{staticClass:"open_shop_logo",attrs:{src:e.logo,alt:""}}),i("v-uni-view",{staticClass:"open_shop_name"},[e._v(e._s(e.shopName))])],1),i("v-uni-view",{staticClass:"reward_desc absolute"},[e._v("红包领取成功")]),i("v-uni-view",{staticClass:"reward_money absolute"},[e._v(e._s(e.activityData.money)),i("span",[e._v("元")])]),i("v-uni-view",{staticClass:"reward_tip absolute"},[e._v("金额已存入到您的「微信钱包」")]),i("v-uni-view",{staticClass:"reward_detail absolute",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.seeRedpacketDetail.apply(void 0,arguments)}}},[e._v("查看明细")])],1)],1):i("v-uni-view",{staticClass:"redpacket",class:{scaleBot:e.contentScale}},[i("v-uni-image",{staticClass:"bg-img absolute",attrs:{src:e.$utils.staticMediaUrl("activity/redpacket/redpacketClose.png")}}),i("img",{staticClass:"shop_logo absolute",attrs:{src:e.logo,alt:""}}),i("v-uni-view",{staticClass:"shop_name absolute"},[e._v(e._s(e.shopName))]),i("v-uni-view",{staticClass:"reward_desc absolute"},[e._v("恭喜您获得"+e._s(e._f("formatActivityType")(e.activityType))+"红包")]),i("v-uni-view",{staticClass:"reward_good absolute"},[e._v(e._s(e.activityData.blessing))]),i("v-uni-view",{staticClass:"reward_open absolute",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openRedpacket.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"reward_time absolute"},[e._v("有效期至： "+e._s(e.activityData.expire_time))])],1),i("v-uni-view",{staticClass:"close"},[i("span",{staticClass:"iconfont-m- icon-m-haibaoxieyi1 close-icon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}})])],1)],1):e._e(),e.redpackNum>0&&!e.isShow?i("v-uni-view",{staticClass:"small_redpack",style:{bottom:e.getBottom},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openRedpack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"all_redpack"},[i("img",{attrs:{src:e.$utils.staticMediaUrl("activity/redpacket/smallRedpacket.png"),alt:""}}),i("v-uni-view",{staticClass:"redpack_num"},[i("v-uni-view",{staticClass:"scale_text"},[e._v("待领取("+e._s(e.redpackNum)+")")])],1)],1)],1):e._e()],1)],1)},o=[]},"95ae":function(e,t,i){"use strict";i.r(t);var a=i("274f"),n=i("8537");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("fd82");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0fee7bd8",null,!1,a["a"],r);t["default"]=c.exports},a64f:function(e,t,i){(function(e){var a=i("4ea4");i("8e6e"),i("ac6a"),i("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5");var n=a(i("ade3")),o=i("2f62"),r=a(i("fead")),s=(a(i("b531")),i("3014"));function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={created:function(){this.startTime=+new Date},data:function(){return{loadingFlg:0}},watch:{isSkeleton:function(e){e||++this.loadingFlg}},mounted:function(){e.error("组建的渲染时间："+this.__route__+"："+(+new Date-this.startTime))},computed:l(l({},(0,o.mapGetters)("loading",["isSkeleton"])),(0,o.mapState)("setting",{shareTitle:function(e){var t,i;return(null===(t=e.systemSetting)||void 0===t||null===(i=t.share)||void 0===i?void 0:i.title)||""},shareDesc:function(e){var t,i;return(null===(t=e.systemSetting)||void 0===t||null===(i=t.share)||void 0===i?void 0:i.description)||""},shareLogo:function(e){var t,i;return null===(t=e.systemSetting)||void 0===t||null===(i=t.share)||void 0===i?void 0:i.logo}})),methods:{handlerOptions:function(e){if(null!==e&&void 0!==e&&e.scene){for(var t=decodeURIComponent(decodeURIComponent(null===e||void 0===e?void 0:e.scene)).split("&"),i={},a=0;a<t.length;a++){var n=t[a].split("=");i[n[0]]=n[1]}null!==i&&void 0!==i&&i.inviter_id&&s.sessionStorage.setItem("inviter-id",i.inviter_id)}}},onPullDownRefresh:function(){var e=this;"function"==typeof this.pullDownRefresh&&this.pullDownRefresh(),setTimeout((function(){e.$closePageLoading()}),2e3)},onLoad:function(e){this.showTabbar=!0},onShow:function(){var e,t,i;uni.hideLoading(),r.default.setNavigationBarColor(this.$Route),this.$decorator.getPage(this.$Route.path).onLoad();var a,n,o,c,l=this.$Route.query;(null!==l&&void 0!==l&&l.inviter_id&&s.sessionStorage.setItem("inviter-id",l.inviter_id),this.$decorator.getDecorateModel({pagePath:this.$Route.path,otherdata:l}),null!==(e=this.pageInfo)&&void 0!==e&&e.gotop&&null!==(t=this.pageInfo.gotop.params)&&void 0!==t&&t.scrollTop)?this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:(null===(a=this.pageInfo.gotop)||void 0===a||null===(n=a.params)||void 0===n?void 0:n.scrollTop)>=(null===(o=this.pageInfo.gotop)||void 0===o||null===(c=o.params)||void 0===c?void 0:c.gotopheight)}},"pagemixin/onshow1"):null!==(i=this.pageInfo)&&void 0!==i&&i.gotop&&this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1,params:{scrolltop:0}}},"pagemixin/onshow2")},onHide:function(){this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1}},"pagemixin/onhide"),this.$closePageLoading()},onPageScroll:function(e){this.$decorator.getModule("gotop").onPageScroll(e,this.$Route)}};t.default=d}).call(this,i("5a52")["default"])},c458:function(e,t,i){var a=i("30a8");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("3f5a46eb",a,!0,{sourceMap:!1,shadowMode:!1})},c5f1:function(e,t,i){var a=i("8b8c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("e590e290",a,!0,{sourceMap:!1,shadowMode:!1})},ce12:function(e,t,i){"use strict";var a=i("c458"),n=i.n(a);n.a},fd82:function(e,t,i){"use strict";var a=i("c5f1"),n=i.n(a);n.a}}]);