(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"11d9":function(t,e,a){"use strict";var o=a("ce7a"),i=a.n(o);i.a},"17d4":function(t,e,a){var o=a("4ea4");a("8e6e"),a("ac6a"),a("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("28a5");var i=o(a("53ca")),r=o(a("ade3")),n=o(a("c984"));function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){(0,r.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var s={red:"#FFF3F5",green:"#D5F9E6",blue:"#E6EFFF",orange:"#FFE2D4",black:"#212121"},p={1:{1:21,2:9,3:6,4:8},2:{1:21,2:9,3:6,4:8},3:{1:9,2:6,3:5,4:6},4:{1:9,2:6,3:4,4:5}},f={mixins:[n.default],name:"coupon",computed:{topBorderRadius:function(){return this.px2rpx(this.componentData.style.topradius)},topBorder2Radius:function(){var t=Math.max(1,this.componentData.style.topradius-6);return this.px2rpx(t)},itemStyle:function(){return"scroll"==this.getClass?"margin-top:0;":"margin-top:".concat(this.px2rpx(this.componentData.style.marginbetween,1,16),";")},coupon1Style:function(){return"background-image: radial-gradient(circle at ".concat(this.px2rpx(10)," ").concat(this.px2rpx(46)," ,transparent 0%, transparent ").concat(this.px2rpx(10),",#EAD3AC ").concat(this.px2rpx(10),", #EAD3AC 100%);")},coupon3Style:function(){var t={1:-154,2:-74,3:-70,4:-74},e=t[this.componentData.params.num_row];return"\n                    background-image: radial-gradient(circle at ".concat(this.px2rpx(10)," ").concat(this.px2rpx(46)," ,transparent 0%, transparent ").concat(this.px2rpx(10),",").concat(s[this.componentData.params.couponcolor||"red"]," ").concat(this.px2rpx(10),", ").concat(s[this.componentData.params.couponcolor||"red"]," 100%);\n                    background-position: ").concat(this.px2rpx(e)," -").concat(this.px2rpx(46),";\n                    background-size: 100%  ").concat(this.px2rpx(162),";\n                    border-radius: ").concat(this.topBorderRadius," ").concat(this.topBorderRadius," ").concat(this.px2rpx(this.componentData.style.bottomradius)," ").concat(this.px2rpx(this.componentData.style.bottomradius),";\n                    ")},coupon4Style:function(){return"\n            background-image:url(".concat(this.$utils.staticMediaUrl("decorate/coupon/"+this.componentData.params.couponcolor+".png"),");\n            border-radius: ").concat(this.topBorderRadius," ").concat(this.topBorderRadius," ").concat(this.px2rpx(this.componentData.style.bottomradius)," ").concat(this.px2rpx(this.componentData.style.bottomradius),";\n            ")},isIos:function(){var t,e;return/ios/i.test(null===(t=(e=this.$utils).getSystemInfo)||void 0===t?void 0:t.call(e).system)},getList:function(){var t=this,e=this.componentData.data.length?this.componentData.data:[];this.$isPC&&(e=this.componentData.data.length?this.componentData.data:[{name:"优惠券名称",desc:"满100元可用",price:"10",enough:100,couponid:"",background:"#fd5454",bordercolor:"#fd5454",textcolor:"#ffffff",couponcolor:"#55b5ff",coupon_sale_type:1},{name:"优惠券名称",desc:"满100元可用",price:"9",enough:100,couponid:"",background:"#fd5454",bordercolor:"#fd5454",textcolor:"#ffffff",couponcolor:"#55b5ff",coupon_sale_type:2}]);var a=48;3==this.componentData.params.couponstyle&&(a=56);var o=p[this.componentData.params.couponstyle][this.componentData.params.num_row];return e=e.map((function(e){return l(l({},e),{},{fontSize:t.getFontSize(e.price,o,a)})})),e},getClass:function(){var t=this.componentData.params.num_row;return 1==t?"one":2==t?"two":3==t?"three":4==t?"scroll":"one"}},methods:{hasNoMargin:function(t){return this.componentData.params.num_row<4&&t<this.componentData.params.num_row?"margin-top:0;":""},getFontSize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:48;t+="";var o=t.length||1;return t.indexOf(".")>-1&&(o-=.5),4!=this.componentData.params.num_row&&(this.componentData.style.marginleft>20&&this.componentData.style.marginleft<40?o+=1:this.componentData.style.marginleft>=40&&this.componentData.style.marginleft<60?o+=2:this.componentData.style.marginleft>=60&&(o+=3)),this.px2rpx(Math.floor(Math.min(e/o,1)*a))},getCouponPrice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"￥",a="";return a="object"==(0,i.default)(t)?t.price+"":t+"",/\.00$/.test(a)&&(a=a.split(".")[0]),"object"==(0,i.default)(t)&&1==t.coupon_sale_type?e+a:a+""},receiveCoupon:function(t){this.$emit("custom-event",{target:"coupon/receiveCoupon",data:t})}}};e.default=f},"9c0b":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-109f655e], .istop[data-v-109f655e]{z-index:999990}._i[data-v-109f655e]{display:inline}uni-view[data-v-109f655e]{box-sizing:border-box}.def-pad[data-v-109f655e]{padding:%?8?% %?16?%}*[data-v-109f655e]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-109f655e]{list-style:none}ul[data-v-109f655e]{padding:0}uni-image[data-v-109f655e]{height:auto}.d_cp[data-v-109f655e]{box-sizing:border-box;border-radius:%?12?%;overflow:hidden}.d_cp_nos[data-v-109f655e]::-webkit-scrollbar{display:none}.d_cp-list[data-v-109f655e]{overflow-x:auto}.it-ls[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-left:%?-16?%}.it-ls.two[data-v-109f655e], .it-ls.three[data-v-109f655e]{overflow:auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.it-ls.three[data-v-109f655e]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.it-ls.one[data-v-109f655e]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.it-ls.scroll[data-v-109f655e]{-webkit-flex-wrap:nowrap;flex-wrap:nowrap;overflow:auto hidden;-webkit-overflow-scrolling:touch;width:-webkit-fit-content;width:fit-content;margin-left:0}.scroll.item[data-v-109f655e]:first-child{padding-left:0}.scroll.item[data-v-109f655e]:last-child{margin-right:0}.it-ls.cp-ls-3[data-v-109f655e]{min-width:100%}.it-ls .item[data-v-109f655e]{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;overflow:hidden}.it-ls .item.two[data-v-109f655e]:nth-child(-n+2){margin-top:0}.it-ls .item.two[data-v-109f655e], .it-ls .item.three[data-v-109f655e], .it-ls.item.one[data-v-109f655e]{box-sizing:border-box;padding-left:%?16?%;margin-top:%?16?%}.it-ls .item.two[data-v-109f655e]{width:50%}.it-ls .item.three[data-v-109f655e]{width:33.33%}.it-ls .item.one[data-v-109f655e]{width:100%}.it-ls .item.one[data-v-109f655e]:nth-child(-n+1){margin-top:0}.it-ls .item.scroll[data-v-109f655e]{width:%?306?%;box-sizing:border-box;padding-left:%?16?%}.cp[data-v-109f655e]{height:%?206?%;width:100%;position:relative;overflow:hidden}.cp3[data-v-109f655e]{width:100%;height:%?162?%;border-radius:%?16?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.cp4[data-v-109f655e]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding-left:%?4?%;background-repeat:no-repeat;background-size:contain;overflow:hidden;border-radius:%?4?%}.cp .bg1[data-v-109f655e], .cp .bg2[data-v-109f655e]{position:absolute;width:100%;height:100%;top:0;left:0;background:#ead3ac;border-radius:%?4?%}.cp .bg1[data-v-109f655e]{background:transparent;background-position:%?-10?% %?88?%;background-size:100% 100%}.cp .bg2[data-v-109f655e]{padding:%?4?%;overflow:hidden}.cp .bg1[data-v-109f655e]::after, .cp .bg2[data-v-109f655e]::after{content:"";top:%?132?%;left:%?12?%;right:%?12?%;height:0;border-bottom:1px dashed hsla(0,0%,100%,.87);position:absolute}.cp .bg2 .border1[data-v-109f655e]{position:absolute;top:0;left:0;width:100%;height:100%;border:%?4?% solid #e42311;border-radius:%?12?%;background:#fff;display:block}.cp .bg2 .border2[data-v-109f655e]{position:absolute;top:%?8?%;left:%?8?%;bottom:%?8?%;right:%?8?%;border:%?1?% solid #e6e7eb;border-radius:%?4?%;box-sizing:border-box}.cp .bg2 .bottom[data-v-109f655e]{position:absolute;z-index:10;width:100%;height:%?74?%;left:0;bottom:0}.cp .name[data-v-109f655e], .cp .demon[data-v-109f655e]{position:absolute;top:%?26?%;text-align:center;left:0;right:0;font-weight:700;font-size:%?48?%;text-align:center;line-height:%?48?%;color:#a2731e}.cp .rmb[data-v-109f655e]{font-size:%?24?%}.price-unit[data-v-109f655e]{font-size:%?24?%;font-weight:700;display:inline-block}.cp .price-unit[data-v-109f655e]{-webkit-transform:translateY(-1px);transform:translateY(-1px)}.cp3 .price-unit[data-v-109f655e]{line-height:%?78?%;-webkit-transform:translateY(10%);transform:translateY(10%);color:#ff3c29;box-sizing:border-box}.cp3 .left-part[data-v-109f655e], .cp4 .leftPart[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:0}.cp3 .left-part[data-v-109f655e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;padding:0}.cp4 .leftPart[data-v-109f655e]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;height:100%;background:#09c15f}.cp .demon[data-v-109f655e]{font-weight:400;font-size:%?24?%;line-height:%?24?%;color:#a2731e;top:%?90?%}.cp .btn[data-v-109f655e]{position:absolute;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);margin:auto;bottom:%?22?%;font-size:%?28?%;line-height:%?24?%;color:#442d01;z-index:10;white-space:nowrap}.cp .btn2[data-v-109f655e]{height:26px;bottom:20pxrpx;background:#efbf16;border-radius:%?4?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);padding:%?10?% %?28?% %?14?%;color:#fff;white-space:nowrap;margin:0 auto}.cp .isIos[data-v-109f655e]{padding:%?12?% %?28?% %?12?%}.cp3.one[data-v-109f655e]{overflow:hidden}.cp3.one .price-unit[data-v-109f655e]{line-height:%?162?%;-webkit-transform:translateY(5%);transform:translateY(5%)}.cp3.one .left-part[data-v-109f655e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.cp3 .left-part .top[data-v-109f655e], .cp3.one .left-part.mid[data-v-109f655e], .cp3.one .left-part.num[data-v-109f655e], .cp3.one .left-part.rmb[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cp3.one .left-part .rmb[data-v-109f655e],\r\n.cp3.one .left-part .num[data-v-109f655e]{line-height:%?162?%}.cp3.one .left-part .mid[data-v-109f655e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?16?%}.cp3.one .right-part[data-v-109f655e]{-webkit-writing-mode:horizontal-tb;writing-mode:initial;width:%?144?%}.cp3.two .price-unit[data-v-109f655e]{-webkit-transform:translateY(10%);transform:translateY(10%)}.cp3.two .left-part[data-v-109f655e]{width:%?280?%}.cp3.two .rmb[data-v-109f655e], .cp3.scroll .rmb[data-v-109f655e]{margin:auto 0;line-height:%?78?%}.cp3.two .right-part[data-v-109f655e], .cp3.scroll .right-part[data-v-109f655e]{width:%?64?%}.cp3.three .price-unit[data-v-109f655e]{-webkit-transform:translateY(3%);transform:translateY(3%)}.cp3.three .top[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cp3.three .rmb[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-transform:translateY(3%);transform:translateY(3%)}.cp3.three .mid[data-v-109f655e]{text-align:center}.cp3.scroll .left-part[data-v-109f655e]{width:%?226?%}.cp3 .left-part .rmb[data-v-109f655e]{font-weight:600;font-size:%?24?%;line-height:1;color:#ff3c29;-webkit-transform:translateY(10%);transform:translateY(10%)}.cp3 .left-part .num[data-v-109f655e]{font-weight:700;font-size:%?56?%;line-height:%?78?%;color:#ff3c29}.cp3 .left-part .mid[data-v-109f655e],\r\n.cp3 .left-part .bot[data-v-109f655e]{font-size:%?20?%;line-height:%?28?%;margin:%?4?% 0;color:#ff3c29;text-align:center}.cp3 .right-part[data-v-109f655e]{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;width:%?80?%;height:%?116?%;font-size:%?24?%;margin:auto 0;color:#ff3c29;-webkit-writing-mode:vertical-lr;writing-mode:vertical-lr;text-align:center;vertical-align:middle;\r\n  /*从左向右 从右向左是 writing-mode: vertical-rl;*/-webkit-writing-mode:tb-lr;writing-mode:tb-lr;\r\n  /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/border-left:%?2?% dashed #ff3c29;display:-webkit-box;display:-webkit-flex;display:flex}.cp3 .right-part .text[data-v-109f655e]{margin:auto;letter-spacing:%?4?%;padding-top:%?6?%}.cp3.red .left-part .rmb[data-v-109f655e],\r\n.cp3.red .left-part .num[data-v-109f655e],\r\n.cp3.red .left-part .price-unit[data-v-109f655e],\r\n.cp3.red .left-part .mid[data-v-109f655e],\r\n.cp3.red .left-part .bot[data-v-109f655e]{color:#ff3c29}.cp3.red .right-part[data-v-109f655e]{color:#ff3c29;border-color:#ff3c29}.cp3.orange .left-part .rmb[data-v-109f655e],\r\n.cp3.orange .left-part .num[data-v-109f655e],\r\n.cp3.orange .left-part .price-unit[data-v-109f655e],\r\n.cp3.orange .left-part .mid[data-v-109f655e],\r\n.cp3.orange .left-part .bot[data-v-109f655e]{color:#ff6f29}.cp3.orange .right-part[data-v-109f655e]{color:#ff6f29;border-color:#ff6f29}.cp3.blue .left-part .rmb[data-v-109f655e],\r\n.cp3.blue .left-part .num[data-v-109f655e],\r\n.cp3.blue .left-part .price-unit[data-v-109f655e],\r\n.cp3.blue .left-part .mid[data-v-109f655e],\r\n.cp3.blue .left-part .bot[data-v-109f655e]{color:#367bf5}.cp3.blue .right-part[data-v-109f655e]{color:#367bf5;border-color:#367bf5}.cp3.green .left-part .rmb[data-v-109f655e],\r\n.cp3.green .left-part .num[data-v-109f655e],\r\n.cp3.green .left-part .price-unit[data-v-109f655e],\r\n.cp3.green .left-part .mid[data-v-109f655e],\r\n.cp3.green .left-part .bot[data-v-109f655e]{color:#09c15f}.cp3.green .right-part[data-v-109f655e]{color:#09c15f;border-color:#09c15f}.cp3.black .left-part .rmb[data-v-109f655e],\r\n.cp3.black .left-part .num[data-v-109f655e],\r\n.cp3.black .left-part .price-unit[data-v-109f655e],\r\n.cp3.black .left-part .mid[data-v-109f655e],\r\n.cp3.black .left-part .bot[data-v-109f655e]{color:#fff}.cp3.black .right-part[data-v-109f655e]{color:#fff;border-color:#fff}.cp4 .price[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cp4 .price .rmb[data-v-109f655e]{color:#fff;font-size:%?24?%;-webkit-transform:scale(.83) translateY(5%);transform:scale(.83) translateY(5%);display:inline-block;height:%?24?%;line-height:1;font-style:normal}.cp4 .price .num[data-v-109f655e]{color:#fff;font-weight:600;font-size:%?48?%;line-height:%?56?%}.cp4 .tip[data-v-109f655e]{color:#fff;font-size:%?24?%;line-height:%?26?%;-webkit-transform:scale(.75);transform:scale(.75);display:inline-block;text-align:center}.cp4 .rightPart[data-v-109f655e]{width:0;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;height:100%;background:#d5f9e6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cp4 .title[data-v-109f655e]{font-size:%?24?%;line-height:%?34?%;-webkit-transform:scale(.83);transform:scale(.83);display:inline-block;margin:0 auto;text-align:center}.cp4 .btn-box[data-v-109f655e]{width:100%;height:%?24?%;position:relative;margin-top:%?10?%}.cp4 .btn[data-v-109f655e]{position:absolute;top:50%;left:50%;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?42?%;white-space:nowrap;line-height:%?42?%;background:#09c15f;border-radius:%?42?%;font-size:%?24?%;color:#fff;text-align:center;padding:0 %?14?%;margin:0 auto;-webkit-transform:translate(-50%,-50%) scale(.58);transform:translate(-50%,-50%) scale(.58)}.cp4.red .leftPart[data-v-109f655e],\r\n.cp4.red .btn[data-v-109f655e]{background:#ff3c29}.cp4.red .rightPart[data-v-109f655e]{background:#fff3f5}.cp4.red .title[data-v-109f655e]{color:#ff3c29}.cp4.orange .leftPart[data-v-109f655e],\r\n.cp4.orange .btn[data-v-109f655e]{background:#ff6f29}.cp4.orange .rightPart[data-v-109f655e]{background:#ffe2d4}.cp4.orange .title[data-v-109f655e]{color:#ff6f29}.cp4.blue .leftPart[data-v-109f655e],\r\n.cp4.blue .btn[data-v-109f655e]{background:#367bf5}.cp4.blue .rightPart[data-v-109f655e]{background:#e6efff}.cp4.blue .title[data-v-109f655e]{color:#367bf5}.cp4.green .leftPart[data-v-109f655e],\r\n.cp4.green .btn[data-v-109f655e]{background:#09c15f}.cp4.green .rightPart[data-v-109f655e]{background:#d5f9e6}.cp4.green .title[data-v-109f655e]{color:#09c15f}.cp4.black .leftPart[data-v-109f655e],\r\n.cp4.black .btn[data-v-109f655e]{background:#212121}.cp4.black .rightPart[data-v-109f655e]{background:#fff}.cp4.black .title[data-v-109f655e]{color:#212121}.cp4.one .leftPart[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.cp4.one .price[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;margin-left:%?24?%}.cp4.one .num[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?100?%}.cp4 .rmb[data-v-109f655e]{margin:auto 0}.cp4.one .rmb[data-v-109f655e]{-webkit-transform:translateY(21%);transform:translateY(21%)}.cp4.one .tip[data-v-109f655e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:%?16?%}.cp4.one .rightPart[data-v-109f655e]{width:%?240?%}.cp4.one .title[data-v-109f655e]{font-size:%?24?%;-webkit-transform:scale(1);transform:scale(1)}.cp4.one .btn-box[data-v-109f655e]{width:100%;height:%?28?%;position:relative;margin-top:%?10?%}.cp4.one .btn[data-v-109f655e]{height:%?48?%;line-height:%?48?%;border-radius:%?48?%;padding:0 %?40?%}.cp4.two .rightPart[data-v-109f655e]{width:%?136?%}.cp4.three .rightPart[data-v-109f655e]{width:%?88?%}.cp4.scroll .rightPart[data-v-109f655e]{width:%?110?%}',""]),t.exports=e},ba7f:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.componentData&&"coupon"==t.componentData.id&&t.getList.length?a("div",{staticClass:"d_cp",style:{padding:t.px2rpx(t.componentData.style.margintop)+" "+t.px2rpx(t.componentData.style.marginleft)+" "+t.px2rpx(t.componentData.style.marginbottom)}},[a("div",{staticClass:"d_cp-list",class:t.$isPC?"":"d_cp_nos"},[a("ul",{staticClass:"it-ls",class:t.getClass+" "+(t.$isPC?"":"d_cp_nos")+" cp-ls-"+t.componentData.params.couponstyle},t._l(t.getList,(function(e,o){return a("li",{key:o,staticClass:"item",class:t.getClass,style:t.itemStyle+t.hasNoMargin(o)},[t.componentData.params.couponstyle<3?a("div",{staticClass:"cp",style:{borderRadius:t.topBorderRadius+" "+t.topBorderRadius+" "+t.px2rpx(t.componentData.style.bottomradius)+" "+t.px2rpx(t.componentData.style.bottomradius)},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.receiveCoupon(e)}}},[1==t.componentData.params.couponstyle?a("p",{staticClass:"bg bg1",style:t.coupon1Style}):a("p",{staticClass:"bg bg2"},[a("i",{staticClass:"border1",style:{borderRadius:t.topBorderRadius+" "+t.topBorderRadius+" 0 0"}}),a("i",{staticClass:"border2",style:{borderRadius:t.topBorder2Radius+" "+t.topBorder2Radius+" 0 0"}}),a("img",{staticClass:"bottom",attrs:{src:t.$utils.staticMediaUrl("coupon/bottom.png"),alt:""}})]),a("p",{staticClass:"name",style:(2==t.componentData.params.couponstyle?"color:#ff3c29;":"")+"font-size:"+e.fontSize},[2!=e.coupon_sale_type?a("span",{staticClass:"rmb"},[t._v("￥")]):t._e(),t._v(t._s(t.getCouponPrice(e,""))),2==e.coupon_sale_type?a("i",{staticClass:"price-unit"},[t._v("折")]):t._e()]),a("p",{staticClass:"demon",style:2==t.componentData.params.couponstyle?"color:#ff3c29;":""},[t._v("满￥"+t._s(t.getCouponPrice(e.enough))+"可用")]),1==t.componentData.params.couponstyle?a("p",{staticClass:"btn",class:{isIos:t.isIos},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.receiveCoupon(e)}}},[t._v("立即领取")]):a("p",{staticClass:"btn btn2",class:{isIos:t.isIos}},[t._v("立即领取")])]):t._e(),3==t.componentData.params.couponstyle?a("div",{staticClass:"cp3",class:(t.componentData.params.couponcolor||"red")+" "+t.getClass,style:t.coupon3Style,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.receiveCoupon(e)}}},[a("div",{staticClass:"left-part"},[a("div",{staticClass:"top"},[2!=e.coupon_sale_type?a("span",{staticClass:"rmb"},[t._v("￥")]):t._e(),a("span",{staticClass:"num",style:"font-size:"+e.fontSize},[t._v(t._s(t.getCouponPrice(e,"")))]),2==e.coupon_sale_type?a("i",{staticClass:"price-unit"},[t._v("折")]):t._e()]),a("div",{staticClass:"mid"},[t._v("满"+t._s(t.getCouponPrice(e.enough))+"可用")])]),"three"!=t.getClass?a("div",{staticClass:"right-part"},[a("p",{staticClass:"text"},[t._v("领取")])]):t._e()]):t._e(),4==t.componentData.params.couponstyle?a("div",{staticClass:"cp4",class:(t.componentData.params.couponcolor||"red")+" "+t.getClass,style:t.coupon4Style,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.receiveCoupon(e)}}},[a("div",{staticClass:"leftPart"},[a("p",{staticClass:"price"},[a("span",{staticClass:"num",style:"font-size:"+e.fontSize},[2!=e.coupon_sale_type?a("i",{staticClass:"rmb"},[t._v("￥")]):t._e(),t._v(t._s(t.getCouponPrice(e,""))),2==e.coupon_sale_type?a("i",{staticClass:"price-unit"},[t._v("折")]):t._e()])]),a("p",{staticClass:"tip"},[t._v("满"+t._s(t.getCouponPrice(e.enough))+"可用")])]),t._m(0,!0)]):t._e()])})),0)])]):t._e()},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rightPart"},[a("p",{staticClass:"title"},[t._v("优惠券")]),a("div",{staticClass:"btn-box"},[a("p",{staticClass:"btn"},[t._v("点击领取")])])])}]},ce7a:function(t,e,a){var o=a("9c0b");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("d73bb3c0",o,!0,{sourceMap:!1,shadowMode:!1})},d0e0:function(t,e,a){"use strict";a.r(e);var o=a("17d4"),i=a.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},ddfd:function(t,e,a){"use strict";a.r(e);var o=a("ba7f"),i=a("d0e0");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("11d9");var n,c=a("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"109f655e",null,!1,o["a"],n);e["default"]=l.exports}}]);