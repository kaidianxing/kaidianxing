(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[130,143,161,169,170,171,172,173,174,175,176,177,178,179],{"0a5e":function(t,o,e){"use strict";e.r(o);var n=e("ab7c"),a=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(o,t,(function(){return n[t]}))}(i);o["default"]=a.a},"2b74":function(t,o,e){"use strict";var n;e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return n}));var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.componentData&&"gotop"==t.componentData.id&&t.componentData.show||t.$isPC?e("div",{staticClass:"gotop isfixed",class:[t.componentData.params.iconposition],style:{bottom:t.getBottom,width:t.px2rpx(t.componentData.style.width),borderRadius:"0"==t.componentData.params.gotoptype?"50%":"0",background:"0"==t.componentData.params.gotoptype?t.componentData.style.background:"",opacity:1==t.componentData.params.gotoptype?1:t.componentData.style.opacity,margin:t.getMargin},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.clickGoTop.apply(void 0,arguments)}}},[1==t.componentData.params.gotoptype?e("img",{staticClass:"img",attrs:{mode:"widthFix","lazy-load":!0,src:t.$utils.mediaUrl(t.componentData.params.imgurl),alt:""}}):e("i",{staticClass:"iconfont-icon",class:[t.componentData.params.iconclass],style:{fontSize:t.px2rpx(t.componentData.style.width/1.5),lineHeight:t.px2rpx(t.componentData.style.width),color:t.componentData.style.iconcolor}})]):t._e(),e("div",{staticClass:"layerBody"},[t.showImg?e("div",{staticClass:"fullscreen qrcode-img-box"},[e("div",{staticClass:"bg"}),e("div",{staticClass:"imgbox"},[e("img",{staticClass:"qrcode-img",attrs:{mode:"widthFix","show-menu-by-longpress":"true","lazy-load":!0,src:t.$utils.mediaUrl(t.componentData.qrcodeurl),alt:""}})]),e("i",{staticClass:"icon-m-haibaoxieyi1 iconfont-m-",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.closeQrcode.apply(void 0,arguments)}}})]):t._e()])])},i=[]},"9c6f":function(t,o,e){var n=e("ed14");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5576182c",n,!0,{sourceMap:!1,shadowMode:!1})},ab7c:function(t,o,e){var n=e("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e("c984")),i={mixins:[a.default],name:"blockgroup",computed:{getMargin:function(){return"".concat(this.px2rpx(1*this.componentData.style.top+100)," ").concat(this.px2rpx(1*this.componentData.style.left+30))},getBottom:function(){if(!this.$isPC&&this.componentData.params){var t=this.componentData.params.iconposition?this.componentData.params.iconposition:this.componentData.position;return t.indexOf("bottom")>-1?this.$store.state.areaBottom+"px":0}return 0}},data:function(){return{showImg:!1,errorImg:""}},methods:{clickGoTop:function(){this.$emit("custom-event",{target:"gotop/clickGoTop",data:this.componentData})},closeQrcode:function(){this.showImg=!1,this.$isPC||this.$decorator.setMaskStatus(!1),this.$emit("custom-event",{target:"layer/clickItem",data:{showImg:this.showImg}})}}};o.default=i},b868:function(t,o,e){"use strict";var n=e("9c6f"),a=e.n(n);a.a},c984:function(t,o,e){var n=e("4ea4");e("8e6e"),e("ac6a"),e("456d"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e("ade3")),i=e("2f62"),r=e("dc11");function c(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?c(Object(e),!0).forEach((function(o){(0,a.default)(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}var d={computed:s({},(0,i.mapState)("decorate",{pageList:function(t){return t.pageList}})),props:{startLoadImg:{type:Boolean,default:!0},componentData:{type:Object,default:function(){return{style:{},params:{}}}}},methods:{px2rpx:r.px2rpx}};o.default=d},cb4d:function(t,o,e){"use strict";e.r(o);var n=e("2b74"),a=e("0a5e");for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(o,t,(function(){return a[t]}))}(i);e("b868");var r,c=e("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"b318e98e",null,!1,n["a"],r);o["default"]=s.exports},dc11:function(t,o,e){function n(){new Promise((function(t,o){uni?uni.getSystemInfo({success:function(o){t(o)}}):t({pixelRatio:window.devicePixelRatio})}))}function a(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return void 0===t&&(t=e),t||(t=0),t*o+"rpx"}Object.defineProperty(o,"__esModule",{value:!0}),o.getSystemInfo=n,o.px2rpx=a,e("4917")},ed14:function(t,o,e){var n=e("24fb");o=n(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-b318e98e], .istop[data-v-b318e98e]{z-index:999990}._i[data-v-b318e98e]{display:inline}uni-view[data-v-b318e98e]{box-sizing:border-box}.def-pad[data-v-b318e98e]{padding:%?8?% %?16?%}*[data-v-b318e98e]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-b318e98e]{list-style:none}ul[data-v-b318e98e]{padding:0}uni-image[data-v-b318e98e]{height:auto}\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.fullscreen[data-v-b318e98e]{position:fixed!important;background:rgba(33,33,33,.7);z-index:9999999}.gotop[data-v-b318e98e]{position:absolute;bottom:%?12.21498?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;z-index:99999;border-radius:%?12?%}.gotop.top[data-v-b318e98e]{top:0}.gotop.bottom[data-v-b318e98e]{bottom:0}.gotop.left[data-v-b318e98e]{left:0}.gotop.right[data-v-b318e98e]{right:0}.gotop .iconfont-icon[data-v-b318e98e]{width:100%;text-align:center;margin:auto;display:block;height:100%}.gotop .img[data-v-b318e98e]{width:100%;height:auto;display:block;margin:auto}.layerBody[data-v-b318e98e]{width:100%}.layerBody .layer[data-v-b318e98e]{background:none;position:absolute}.layerBody .layer[data-v-b318e98e]::after{border:0}.layerBody .layer.top[data-v-b318e98e]{top:0}.layerBody .layer.left[data-v-b318e98e]{left:0}.layerBody .layer.right[data-v-b318e98e]{right:0}.layerBody .fullscreen[data-v-b318e98e]{position:absolute;width:100%;height:100%;top:0;left:0}.layerBody .fullscreen .bg[data-v-b318e98e]{position:absolute;width:100%;height:100%;background:rgba(33,33,33,.7)}.layerBody .fullscreen .imgbox[data-v-b318e98e]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?512?%;height:%?512?%;box-sizing:initial;padding:%?24?%;background:#fff;border-radius:%?12?%;overflow:scroll}.layerBody .fullscreen .icon-m-haibaoxieyi1[data-v-b318e98e]{color:#fff;width:%?60?%;height:%?60?%;font-size:%?60?%;position:absolute;left:0;right:0;top:calc(50% + 164px);margin:auto}.layerBody .fullscreen .qrcode-img[data-v-b318e98e]{width:%?512?%;height:%?512?%;border:1px solid #e6e7eb;box-sizing:border-box;border-radius:%?12?%}',""]),t.exports=o}}]);