(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[156],{3112:function(t,e,o){var a=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(o("c984")),n={mixins:[i.default],name:"Customer",components:{},props:{},data:function(){return{}},computed:{isShow:function(){return"1"===this.componentData.params.customerType&&this.componentData.params.imgurl||"0"===this.componentData.params.customerType},getCustomerImg:function(){return this.componentData.params.img?this.$utils.mediaUrl(this.componentData.params.img):this.$utils.staticMediaUrl("decorate/customer.png")},getBottom:function(){return!this.$isPC&&this.componentData.position.indexOf("bottom")>-1?this.$store.state.areaBottom+"px":0},getMargin:function(){return this.$isPC?"".concat(this.px2rpx(1*this.componentData.style.offset_up_down+110)," ").concat(this.px2rpx(1*this.componentData.style.offset_left_right+30)):"".concat(this.px2rpx(1*this.componentData.style.offset_up_down+110)," ").concat(this.px2rpx(1*this.componentData.style.offset_left_right))},positionClass:function(){return 0===+this.componentData.style.offset_left_right?this.componentData.position.indexOf("left")>-1?"left":"right":"border"}},created:function(){},mounted:function(){},methods:{clickItem:function(){this.$emit("custom-event",{target:"customer/clickItem",data:this.componentData})}}};e.default=n},3859:function(t,e,o){"use strict";var a;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.componentData&&"customer"==t.componentData.id?o("v-uni-button",{staticClass:"customer isfixed",class:[t.componentData.position,t.componentData.style.styleType],style:{bottom:t.getBottom,margin:t.getMargin},attrs:{"open-type":"wx"==t.componentData.params.customer?"contact":""},on:{click:function(e){if(e.target!==e.currentTarget)return null;arguments[0]=e=t.$handleEvent(e),t.clickItem.apply(void 0,arguments)}}},["1"===t.componentData.style.showType?o("div",{style:{width:t.px2rpx(t.componentData.style.width),height:t.px2rpx(t.componentData.style.width)}},[o("img",{staticClass:"customer-only-img",attrs:{mode:"widthFix","lazy-load":!0,src:t.getCustomerImg,alt:""}})]):o("div",{},["one"===t.componentData.style.styleType?o("div",{staticClass:"style-one",style:{width:t.px2rpx(104),transform:"scale("+t.componentData.style.width/104+")"}},[t.isShow?o("div",{staticClass:"icon-box",style:{borderColor:t.componentData.style.bordercolor}},[o("div",{staticClass:"border",style:{borderColor:t.componentData.style.bordercolor}}),"0"===t.componentData.params.customerType?o("i",{staticClass:"iconfont-icon",class:[t.componentData.params.iconclass],style:{color:t.componentData.style.iconcolor}}):o("img",{staticClass:"customer-img",attrs:{mode:"widthFix","lazy-load":!0,src:t.$utils.mediaUrl(t.componentData.params.imgurl),alt:""}})]):t._e(),o("div",{staticClass:"title",class:{"no-mt":!t.isShow},style:{backgroundColor:t.componentData.style.bgcolor}},[o("span",{staticClass:"text",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(t.componentData.params.titlename))])])]):"two"===t.componentData.style.styleType?o("div",{staticClass:"style-two",style:{width:t.px2rpx(190),transform:"scale("+t.componentData.style.width/190+")"}},[o("div",{staticClass:"bg-color",class:t.positionClass,style:{backgroundColor:t.componentData.style.bgcolor,opacity:t.componentData.opacity}}),o("div",{staticClass:"flex"},[t.isShow?o("div",{staticClass:"icon-box"},["0"===t.componentData.params.customerType?o("i",{staticClass:"iconfont-icon",class:[t.componentData.params.iconclass],style:{color:t.componentData.style.iconcolor}}):t._e(),"1"===t.componentData.params.customerType&&t.componentData.params.imgurl?o("img",{staticClass:"customer-img",attrs:{mode:"widthFix","lazy-load":!0,src:t.$utils.mediaUrl(t.componentData.params.imgurl),alt:""}}):t._e()]):t._e(),o("div",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(t.componentData.params.titlename))])])]):"three"===t.componentData.style.styleType?o("div",{staticClass:"style-three",style:{width:t.px2rpx(54),transform:"scale("+t.componentData.style.width/54+")"}},[o("div",{staticClass:"bg-color",class:t.positionClass,style:{backgroundColor:t.componentData.style.bgcolor,opacity:t.componentData.opacity}}),o("div",{staticClass:"content"},[t.isShow?o("div",{staticClass:"icon-box"},["0"===t.componentData.params.customerType?o("i",{staticClass:"iconfont-icon",class:[t.componentData.params.iconclass],style:{color:t.componentData.style.iconcolor}}):t._e(),"1"===t.componentData.params.customerType&&t.componentData.params.imgurl?o("img",{staticClass:"customer-img",attrs:{mode:"widthFix","lazy-load":!0,src:t.$utils.mediaUrl(t.componentData.params.imgurl),alt:""}}):t._e()]):t._e(),o("div",{staticClass:"title",style:{color:t.componentData.style.titlecolor}},[t._v(t._s(t.componentData.params.titlename))])])]):t._e()])]):t._e()},n=[]},"385a":function(t,e,o){"use strict";var a=o("3f5b"),i=o.n(a);i.a},"3f5b":function(t,e,o){var a=o("b688");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("23c7b689",a,!0,{sourceMap:!1,shadowMode:!1})},"98a3":function(t,e,o){"use strict";o.r(e);var a=o("3112"),i=o.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},b688:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-2f97489e], .istop[data-v-2f97489e]{z-index:999990}._i[data-v-2f97489e]{display:inline}uni-view[data-v-2f97489e]{box-sizing:border-box}.def-pad[data-v-2f97489e]{padding:%?8?% %?16?%}*[data-v-2f97489e]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-2f97489e]{list-style:none}ul[data-v-2f97489e]{padding:0}uni-image[data-v-2f97489e]{height:auto}.customer[data-v-2f97489e]{\r\n  /*height: 100%;*/height:-webkit-fit-content;height:fit-content;line-height:normal;background:none;border-radius:0;overflow:hidden;position:absolute}.customer[data-v-2f97489e]::after{border:0}.customer.top[data-v-2f97489e]{top:0}.customer.left[data-v-2f97489e]{left:0}.customer.right[data-v-2f97489e]{right:0}.customer .customer-only-img[data-v-2f97489e]{display:block;width:100%;height:100%}.customer .customer-img[data-v-2f97489e]{display:block;width:100%;height:100%;border-radius:50%}.customer .style-one[data-v-2f97489e]{position:relative}.customer .style-one .icon-box[data-v-2f97489e]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 auto;width:%?92?%;height:%?92?%;background-color:#fff;border:%?4?% solid transparent;border-radius:50%}.customer .style-one .icon-box .border[data-v-2f97489e]{position:absolute;left:%?-6?%;top:%?-6?%;width:%?96?%;height:%?96?%;background-color:initial;border:%?4?% solid transparent;opacity:.3;border-radius:50%}.customer .style-one .icon-box .iconfont-icon[data-v-2f97489e]{font-size:%?60?%}.customer .style-one .title[data-v-2f97489e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;margin-top:%?-16?%;width:100%;height:%?36?%;line-height:%?36?%;text-align:center;border-radius:%?18?%}.customer .style-one .title.no-mt[data-v-2f97489e]{margin-top:0}.customer .style-one .title .text[data-v-2f97489e]{display:inline-block;font-size:%?24?%;-webkit-transform:scale(.8);transform:scale(.8)}.customer .style-two[data-v-2f97489e]{position:relative;height:%?48?%}.customer .style-two .icon-box[data-v-2f97489e]{width:%?40?%;height:%?40?%;margin-right:%?12?%;overflow:hidden}.customer .style-two .bg-color[data-v-2f97489e]{position:absolute;left:0;top:0;width:100%;height:%?48?%}.customer .style-two .bg-color.left[data-v-2f97489e]{border-top-right-radius:%?24?%;border-bottom-right-radius:%?24?%}.customer .style-two .bg-color.right[data-v-2f97489e]{border-top-left-radius:%?24?%;border-bottom-left-radius:%?24?%}.customer .style-two .bg-color.border[data-v-2f97489e]{border-radius:%?24?%}.customer .style-two .flex[data-v-2f97489e]{position:relative;width:100%;height:%?48?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.customer .style-two .iconfont-icon[data-v-2f97489e]{line-height:%?40?%;font-size:%?40?%}.customer .style-two .title[data-v-2f97489e]{font-size:%?24?%}.customer .style-three[data-v-2f97489e]{position:relative;height:%?210?%}.customer .style-three .icon-box[data-v-2f97489e]{width:%?40?%;height:%?40?%;margin-bottom:%?14?%;overflow:hidden}.customer .style-three .bg-color[data-v-2f97489e]{position:absolute;left:0;top:0;width:100%;height:%?210?%}.customer .style-three .bg-color.left[data-v-2f97489e]{border-top-right-radius:%?24?%;border-bottom-right-radius:%?24?%}.customer .style-three .bg-color.right[data-v-2f97489e]{border-top-left-radius:%?24?%;border-bottom-left-radius:%?24?%}.customer .style-three .content[data-v-2f97489e]{position:relative;width:100%;padding:%?16?% %?6?% 0}.customer .style-three .iconfont-icon[data-v-2f97489e]{margin-bottom:%?14?%;font-size:%?40?%}.customer .style-three .title[data-v-2f97489e]{line-height:%?32?%;font-size:%?24?%}',""]),t.exports=e},d037:function(t,e,o){"use strict";o.r(e);var a=o("3859"),i=o("98a3");for(var n in i)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(n);o("385a");var r,s=o("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2f97489e",null,!1,a["a"],r);e["default"]=c.exports}}]);