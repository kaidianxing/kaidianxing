(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1b40":function(e,t,n){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac6a");var a=i(n("d225")),s=i(n("b0b4")),o=function(){function e(t){(0,a.default)(this,e),this.pageInfo={},this.pageInfo=t}return(0,s.default)(e,[{key:"notice",value:function(e){return Math.min(66,66+e.style.marginbottom+e.style.margintop)}},{key:"banner",value:function(e){return e.style.imgheight>0?e.style.imgheight:284}},{key:"richtext",value:function(e){return 122}},{key:"title",value:function(e){return 80+2*e.style.paddingtop}},{key:"search",value:function(e){return 60+2*e.style.paddingtop}},{key:"line",value:function(e){return 1*e.style.height+2*e.style.padding}},{key:"blank",value:function(e){return 1*e.style.height}},{key:"menu",value:function(e){return 2==e.style.pagenum?e.data.length>e.style.rownum?376:346:e.data.length>e.style.rownum?203:173}},{key:"menu2",value:function(e){return 80+1*e.style.margintop}},{key:"picture",value:function(e){var t=0,n=750-2*e.style.paddingleft,i=n/750;return e.data.forEach((function(n){t+=Math.min(n.imgheight*i||0,423)+2*(e.style.paddingtop||0)})),t}},{key:"picturew",value:function(e){return 0}},{key:"pictures",value:function(e){return 292+2*e.style.paddingtop}},{key:"goods",value:function(e){var t=e.data;return this.pageInfo[e._comIndex_]&&(t=this.pageInfo[e._comIndex_].data||e.data),1==e.params.goodsscroll?"block two"==e.style.liststyle||"block"==e.style.liststyle?440+(1*e.style.marginbottom||0)+(1*e.style.margintop||0):"block three"==e.style.liststyle?320+(1*e.style.marginbottom||0)+(1*e.style.margintop||0):"block one"==e.style.liststyle?404+(1*e.style.marginbottom||0)+(1*e.style.margintop||0):0:"block two"==e.style.liststyle||"block"==e.style.liststyle?472*Math.ceil(t.length/2)+(1*e.style.marginbottom||0)+(1*e.style.margintop||0):"block three"==e.style.liststyle?346*Math.ceil(t.length/3)+(1*e.style.marginbottom||0)+(1*e.style.margintop||0):"block one"==e.style.liststyle?450*t.length+(1*e.style.marginbottom||0)+(1*e.style.margintop||0):"list"==e.style.liststyle?312*t.length+(1*e.style.marginbottom||0)+(1*e.style.margintop||0):0}},{key:"diymod",value:function(e){return 0}},{key:"listmenu",value:function(e){return 96*e.data.length}},{key:"wxcard",value:function(e){return 0}},{key:"member",value:function(e){return 280}},{key:"distributor",value:function(e){return 516}},{key:"icongroup",value:function(e){return 170*Math.ceil(e.data.length/e.params.rownum)}},{key:"bindmobile",value:function(e){return 102+(1*e.style.margintop||0)+(1*e.style.marginbottom||0)}},{key:"logout",value:function(e){return(1*e.style.margintop||0)+(1*e.style.marginbottom||0)+80}},{key:"video",value:function(e){return"0"==e.style.ratio?394:"1"==e.style.ratio?526:"2"==e.style.ratio?702:0}},{key:"memberc",value:function(e){return 280}},{key:"commission_block",value:function(e){return 0}},{key:"commission_sharecode",value:function(e){return 96+(1*e.style.margintop||0)+(1*e.style.marginbottom||0)}},{key:"blockgroup",value:function(e){return 232*Math.ceil(e.data.length/e.params.rownum)}},{key:"detail_tab",value:function(e){return 0}},{key:"detail_swipe",value:function(e){return 750}},{key:"detail_info",value:function(e){return 200}},{key:"detail_sale",value:function(e){var t,n=null===(t=this.pageInfo.detail_sale)||void 0===t?void 0:t.params,i="{}"!=JSON.stringify(n);return i?70*e.data.length:0}},{key:"detail_spec",value:function(e){var t,n=null===(t=this.pageInfo.detail_sale)||void 0===t?void 0:t.params,i="{}"!=JSON.stringify(n);return i?70+(1*e.style.margintop||0)+(1*e.style.marginbottom||0):0}},{key:"detail_shop",value:function(e){return 0}},{key:"detail_comment",value:function(e){return Math.max(192,180*e.data.length+60)}},{key:"detail_buyshow",value:function(e){return 0}},{key:"detail_store",value:function(e){return 0}},{key:"detail_package",value:function(e){return 0}},{key:"detail_pullup",value:function(e){return 80}},{key:"detail_navbar",value:function(e){return 0}},{key:"detail_seckill",value:function(e){return 0}},{key:"audio",value:function(e){return 0}},{key:"seckillgroup",value:function(e){return 0}},{key:"seckill_times",value:function(e){return 0}},{key:"seckill_rooms",value:function(e){return 0}},{key:"seckill_advs",value:function(e){return 0}},{key:"seckill_list",value:function(e){return 0}},{key:"coupon",value:function(e){return e.data.length?224*Math.ceil(e.data.length/e.params.num_row)+26:0}},{key:"fixedsearch",value:function(e){return 92}},{key:"exchange_banner",value:function(e){return 0}},{key:"exchange_input",value:function(e){return 0}},{key:"exchange_rule",value:function(e){return 0}},{key:"tabbar",value:function(e){return 1==e.style.showtype?80:80*Math.min(Math.ceil(e.data.length/4),2)}},{key:"topmenu",value:function(e){return 80}},{key:"gotop",value:function(e){return 0}},{key:"diymenu",value:function(e){return 0}},{key:"followbar",value:function(e){return 96}},{key:"liver",value:function(e){return 120}},{key:"cube",value:function(e){if("cell_two"==e.params.cubestyle||"cell_three"==e.params.cubestyle){var t={cell_two:2,cell_three:3},n=t[e.params.cubestyle],i=e.style,a=i.margininside,s=i.marginleft,o=(750-2*s-a*(n-1))/n,l=e.params,r=l.imgheight,u=l.imgwidth;return parseInt(r*o/u)}return 750}},{key:"seckill",value:function(e){var t=0;if(e){var n=this.pageInfo[e._comIndex_]||{},i=(null===n||void 0===n?void 0:n.data)||e.data;if(0==i.length)return 0;t="scroll"==e.style.listtype?474+e.style.margintop+e.style.marginbottom:80+272*i.length+e.style.margintop+e.style.marginbottom}return t}},{key:"credit",value:function(e){return 494}},{key:"wxTransaction",value:function(e){return 0}}]),e}();t.default=o},"67e9":function(e,t,n){(function(e){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.LazyLoadList=void 0,n("96cf");var a=i(n("3b8d")),s=i(n("75fc")),o=i(n("d225")),l=i(n("b0b4")),r=n("b72c"),u=i(n("1b40")),h=i(n("5ea3")),c=function(){function t(e,n){var i=this;(0,o.default)(this,t),this.pageInfo={},this.pageList=[],this.showingList=[],this.cacheCallbacks=null,this.screenHeight=0,this.px2upx=1,this.container=null,this.checkDistance=!1,this.scrollTop=-1,this.newAddPageBoxHeight=0,this.hodedPageHeight=0,this.pageBoxHeight=0,this.pageType=-1,this.loader=null,this.throttleCheckPageList=null,this.throttleGetMore=null,this.screenHeightPx=null,this.lastLazyComponent=null,this.lastLazyComponentIdx=-1,this.isNotLazyCom={},this.loader=new u.default(h.default.getPage(n).pageInfo),this.pageType=n,this.container=document.getElementsByClassName("decorate-page"),this.px2upx=uni.upx2px(10)/10,e&&(this.cacheCallbacks=e),h.default.$off("getPageBoxHeight"),h.default.$on("getPageBoxHeight",(function(e){i.checkPageList()}))}return(0,l.default)(t,[{key:"getSysInfo",value:function(){var e=this;return new Promise((function(t,n){e.screenHeight&&t(e.screenHeight),uni.getSystemInfo({success:function(n){e.screenHeightPx=n.windowHeight,e.screenHeight=n.windowHeight/n.windowWidth*750,t(e.screenHeight)}})}))}},{key:"initPageList",value:function(e){if(!(0,r.deepCompare)(this.pageList,e)){this.showingList=[],this.pageList=(0,s.default)(e),this.scrollTop=0,this.newAddPageBoxHeight=0,this.hodedPageHeight=0,this.lastLazyComponent=null,this.lastLazyComponentIdx=-1,this.isNotLazyCom={};var t=h.default.getPage(this.pageType);h.default.onGetMorePageList([].concat((0,s.default)(t.isBottom||[]),(0,s.default)(t.isTop||[]),(0,s.default)(t.isFixed||[])),this,this.pageType)}}},{key:"refresh",value:function(){return this.scrollTop=0,this.pageList=[],this.showingList=[],this.newAddPageBoxHeight=0,this.hodedPageHeight=0,this.lastLazyComponent=null,this.lastLazyComponentIdx=-1,this.isNotLazyCom={},this}},{key:"lazyComponent",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=null,a=!0,s=h.default.getModule(t.id),i=null===s||void 0===s||null===(n=s.onLoadAll)||void 0===n?void 0:n.call(s,t,this.pageType),!(i&&i instanceof Promise)){e.next=21;break}return e.prev=5,e.next=8,i;case 8:if(a=e.sent,!a){e.next=13;break}return e.abrupt("return");case 13:if("function"!=typeof s.onLoadMore){e.next=16;break}return this.lastLazyComponent=s,e.abrupt("return",t);case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e["catch"](5),e.abrupt("return");case 21:return e.abrupt("return");case 22:case"end":return e.stop()}}),e,this,[[5,18]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getComponentsLength",value:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n,i){var a,s,o,l,r,u=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=u.length>2&&void 0!==u[2]?u[2]:0,s=0,o=0,l=null,r=a;case 5:if(!(r<n.length)){t.next=27;break}if(l=n[r],this.isNotLazyCom[r]){t.next=19;break}return this.isNotLazyCom[r]=!0,t.prev=9,t.next=12,this.lazyComponent(l);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](9),this.lastLazyComponent=null,this.lastLazyComponentIdx=-1;case 18:this.lastLazyComponent&&(this.lastLazyComponentIdx=r,this.isNotLazyCom[r]=!1);case 19:if("function"==typeof this.loader[l.id]?o+=this.loader[l.id](l):e.error("请完善组件：".concat(l.id,"对应的./Calculater.js中尺寸计算功能！！")),!(o>=i)){t.next=24;break}return s=r+1,0==a&&(this.hodedPageHeight=o),t.abrupt("break",27);case 24:r++,t.next=5;break;case 27:return s=Math.min(s,n.length)||n.length,t.abrupt("return",s);case 29:case"end":return t.stop()}}),t,this,[[9,14]])})));function n(e,n){return t.apply(this,arguments)}return n}()},{key:"getNewAddNum",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,t=0,n=0,i=null,a=this.showingList.length;a<=this.pageList.length;a++)if(i=this.pageList[a],i&&(t+=this.loader[i.id](i),t>e)){n=a-this.showingList.length;break}return n||(n=this.pageList.length-this.showingList.length),n}},{key:"checkPageList",value:function(){var e=this;clearTimeout(this.throttleCheckPageList),this.throttleCheckPageList=setTimeout((0,a.default)(regeneratorRuntime.mark((function t(){var n,i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getComponentsLength(e.pageList,e.hodedPageHeight,0);case 2:if(n=t.sent,!(n>e.showingList.length&&e.showingList.length<=e.pageList.length)){t.next=24;break}if(i=e.pageList.slice(e.showingList.length,n),a=e.pageList.slice(0,n),!i.length||a.length==e.showingList.length){t.next=23;break}if(!e.lastLazyComponent){t.next=22;break}return t.prev=8,t.next=11,e.lastLazyComponent.onLoadAll(e.pageList[e.lastLazyComponentIdx],e.pageType);case 11:return s=t.sent,s?(e.lastLazyComponent=null,e.lastLazyComponentIdx=-1):e.lastLazyComponent.onLoadMore(e.pageType),t.abrupt("return");case 16:t.prev=16,t.t0=t["catch"](8),e.lastLazyComponent=null,e.lastLazyComponentIdx=-1;case 20:t.next=23;break;case 22:h.default.onGetMorePageList(i,e,e.pageType);case 23:e.cacheCallbacks&&a.length!=e.showingList.length&&(e.showingList=a,e.cacheCallbacks&&e.cacheCallbacks((0,r.deepCopy)(e.showingList)));case 24:case"end":return t.stop()}}),t,null,[[8,16]])}))),500)}},{key:"getAll",value:function(e){this.showingList=(0,s.default)(e),h.default.onGetMorePageList((0,s.default)(e),this,this.pageType),this.cacheCallbacks((0,r.deepCopy)(this.showingList))}},{key:"getMore",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,i,a,s,o,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:0,l.length>2?l[2]:void 0,e.prev=2,e.next=5,this.getSysInfo();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](2);case 9:if(!this.lastLazyComponent){e.next=27;break}return e.prev=10,e.next=13,this.lastLazyComponent.onLoadAll(this.pageList[this.lastLazyComponentIdx],this.pageType);case 13:if(i=e.sent,i){e.next=19;break}return this.lastLazyComponent.onLoadMore(this.pageType),e.abrupt("return");case 19:this.lastLazyComponent=null,this.lastLazyComponentIdx=-1;case 21:e.next=27;break;case 23:e.prev=23,e.t1=e["catch"](10),this.lastLazyComponent=null,this.lastLazyComponentIdx=-1;case 27:return this.scrollTop=n,this.initPageList(t),0==this.newAddPageBoxHeight?(this.newAddPageBoxHeight=Math.max(1.1*this.screenHeight,this.scrollTop),this.hodedPageHeight=this.newAddPageBoxHeight):(this.newAddPageBoxHeight=.5*this.screenHeight,this.hodedPageHeight=this.hodedPageHeight+this.newAddPageBoxHeight),e.next=32,this.getComponentsLength(this.pageList,this.newAddPageBoxHeight,this.showingList.length);case 32:if(a=e.sent,a!=this.showingList.length||!this.lastLazyComponent){e.next=38;break}return e.next=36,this.lastLazyComponent.onLoadMore(this.pageType);case 36:e.next=39;break;case 38:a<=this.pageList.length&&a<=this.showingList.length&&(a=Math.min(this.pageList.length,this.showingList.length+(this.getNewAddNum(.5*this.screenHeight)||1)));case 39:a>this.showingList.length&&this.showingList.length<=this.pageList.length&&(s=this.pageList.slice(this.showingList.length,a),s.length&&h.default.onGetMorePageList(s,this,this.pageType),o=this.pageList.slice(0,a),this.cacheCallbacks&&o.length!=this.showingList.length&&(this.showingList=o,this.cacheCallbacks((0,r.deepCopy)(this.showingList))));case 40:case"end":return e.stop()}}),e,this,[[2,7],[10,23]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"h5ReachBottom",value:function(e){var t=this,n=document.getElementsByTagName("body")[0],i=document.documentElement,a=200/this.px2upx;n.onscroll=function(){t.scrollTop=n.scrollTop||i.scrollTop,clearTimeout(t.checkDistance),t.checkDistance=setTimeout((function(){var n;e&&Math.abs(((null===(n=t.container[0])||void 0===n?void 0:n.clientHeight)-t.scrollTop)/t.px2upx-t.screenHeight)<a&&e({scrollTop:t.scrollTop}),t.checkDistance=!1}),60)}}}]),t}();t.LazyLoadList=c}).call(this,n("5a52")["default"])}}]);