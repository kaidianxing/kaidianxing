(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"087f":function(t,e,a){"use strict";a.r(e);var n=a("d29c"),i=a("adf6");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("2167");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"a838f616",null);e["default"]=r.exports},"11a6":function(t,e,a){t.exports=a.p+"static/dist/shop/img/module-custom.png"},"15c4":function(t,e,a){},2167:function(t,e,a){"use strict";a("6112")},"2ac2":function(t,e,a){t.exports=a.p+"static/dist/shop/img/module-index.png"},"2f94":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("841c"),a("b0c0");var i=n(a("3ba7")),o=n(a("659d")),s={name:"index",inject:["returnToTop"],components:{SearchHeader:function(){return a.e(197).then(a.bind(null,"7cfb"))},PageList:i.default,SelectPageType:o.default},data:function(){return{tab:{name:null,data:[]},pageList:{data:[]},table:{data:[],loading:!1,total:0},page:{pageSize:10,pageNumber:1},goodsId:"",tempType:"10",loadStatus:!1,firstLoadNum:1}},methods:{editPage:function(t){var e;e="10"==t.type?"/decorate/index":"11"==t.type?"/decorate/goods-detail":"12"==t.type?"/decorate/vip-center":"/decorate/custom",this.$router.push({path:e,query:{id:t.id,type:"edit"}})},handleSearch:function(t){this.search=t,this.refreshTable()},clickTab:function(){this.refreshTable()},addPage:function(){this.$refs["select_page_type"].setValue()},changeSelectPage:function(t){var e,a;this.tempType=t,"11"==this.tempType?(e="/decorate/goods-detail",a=2):"12"==this.tempType?(e="/decorate/vip-center",a=3):"10"==this.tempType?(e="/decorate/index",a=1):(e="/decorate/custom",a=""),this.$router.push({path:e,query:{id:a,type:"add"}})},changePage:function(t){this.page=t,this.getList()},refreshTable:function(){var t;this.page={pageSize:10,pageNumber:1},null===(t=this.$refs["page_list_".concat(this.tab.name)][0])||void 0===t||t.reset(),this.getList(),this.getPageTotal()},getList:function(){var t=this;1===this.firstLoadNum&&(this.loadStatus=!0),this.table.loading=!0;var e=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},this.search),a="getNewPageList";"0"===this.tab.name?a="getNewCustomList":e.type=this.tab.name,this.$api.shopApi[a](e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list||[],t.table.total=e.total)})).finally((function(){t.setFirstLoad()}))},getPageTotal:function(){var t=this;1===this.firstLoadNum&&(this.loadStatus=!0),this.$api.shopApi.getNewPageTotal().then((function(e){var a=e.error,n=e.page_type,i=e.used_page;0===a&&(t.tab.data=n,t.pageList.data=i)})).finally((function(){t.setFirstLoad()}))},getRanGoodsId:function(){var t=this;this.$api.goodsApi.getGoodsRanId().then((function(e){0===e.error&&(t.goodsId=e.goods_id)}))},setFirstLoad:function(){this.firstLoadNum+=1,3===this.firstLoadNum&&(this.loadStatus=!1)}},mounted:function(){this.getList(),this.getPageTotal()},beforeMount:function(){this.getRanGoodsId()}};e.default=s},"35f7":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{title:"选择页面类型",width:1e3,"class-name":"select-page-type-modal","ok-text":"确认选择"},on:{"on-cancel":t.handleCancel,"on-ok":t.handleOk},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("div",{staticClass:"select-page-type"},[a("div",{staticClass:"type-content"},t._l(t.codeList,(function(e,n){return a("div",{key:n,staticClass:"type-item",class:{"item-checked":t.type===e},on:{click:function(a){return t.selectPage(e)}}},[t.type===e?a("i",{staticClass:"iconfont icon-yes1 check-icon"}):t._e(),a("div",{staticClass:"type-container"},[a("div",{staticClass:"type-mask"}),a("div",{staticClass:"image"},[a("img",{attrs:{src:t.getPageSet(e).src,alt:""}})]),a("div",{staticClass:"radio",class:{checked:t.type===e}},[a("i",{staticClass:"iconfont page-icon",class:t.getPageSet(e).icon}),a("span",{staticClass:"name"},[t._v(t._s(t.getPageSet(e).text))])])])])})),0)])])},i=[]},"3ba7":function(t,e,a){"use strict";a.r(e);var n=a("4aab"),i=a("bcb3");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("976e");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"4abf1476",null);e["default"]=r.exports},"4aab":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-page-list"},[a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{columns:t.columns,data:t.data}}),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.handlePageChange}})],1)],1)},i=[]},"4e1f":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"SelectPageType",props:{codeList:{type:Array,default:function(){return["10","11","12","0"]}}},data:function(){return{type:"10",value:!1}},watch:{codeList:{handler:function(){this.type=this.codeList[0]},immediate:!0}},methods:{setValue:function(){this.value=!this.value},handleOk:function(){this.$emit("on-change",this.type),this.setValue()},handleCancel:function(){this.setValue()},selectPage:function(t){this.type=t},getPageSet:function(t){var e={0:{src:a("11a6"),text:"自定义页面",icon:"icon-zidingyiyemian"},10:{src:a("2ac2"),text:"商城首页",icon:"icon-zuocedaohang-dianpu"},11:{src:a("5474"),text:"商品详情",icon:"icon-yemianleixing-xiangqing"},12:{src:a("cf8e"),text:"会员中心",icon:"icon-zuocedaohang-huiyuan"},20:{src:a("2ac2"),text:"分销中心"}};return e[t]}}};e.default=n},6112:function(t,e,a){},"659d":function(t,e,a){"use strict";a.r(e);var n=a("35f7"),i=a("dda9");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("d326");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"458e7287",null);e["default"]=r.exports},"976e":function(t,e,a){"use strict";a("15c4")},adf6:function(t,e,a){"use strict";a.r(e);var n=a("2f94"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},bcb3:function(t,e,a){"use strict";a.r(e);var n=a("e08a"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},cf8e:function(t,e,a){t.exports=a.p+"static/dist/shop/img/module-vip.png"},d29c:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadStatus,expression:"loadStatus"}],staticClass:"shop-system-page"},[a("search-header",{on:{"add-page":t.addPage,"on-change":t.handleSearch}}),a("div",{staticClass:"tab-content"},[a("Tabs",{attrs:{animated:!1},on:{"on-click":t.clickTab},model:{value:t.tab.name,callback:function(e){t.$set(t.tab,"name",e)},expression:"tab.name"}},t._l(t.tab.data,(function(e){return a("TabPane",{key:e.type,attrs:{label:e.name+"("+e.total+")",name:null!=e.type?e.type.toString():e.type}},[a("page-list",{directives:[{name:"show",rawName:"v-show",value:1*e.type==1*t.tab.name,expression:"item.type*1==tab.name*1"}],ref:"page_list_"+e.type,refInFor:!0,attrs:{data:t.table.data,total:t.table.total,"goods-id":t.goodsId,loading:t.table.loading},on:{"on-refresh":t.refreshTable,"on-page-change":t.changePage,"on-edit":t.editPage}})],1)})),1)],1),a("select-page-type",{ref:"select_page_type",on:{"on-change":t.changeSelectPage}}),t._t("default")],2)},i=[]},d326:function(t,e,a){"use strict";a("ff39")},dda9:function(t,e,a){"use strict";a.r(e);var n=a("4e1f"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},e08a:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={name:"PageList",props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0},loading:{type:Boolean,default:!1},goodsId:{type:String,default:"0"}},data:function(){var t=this;this.$createElement;return{columns:[{title:"页面名称",key:"name",render:function(t,e){return t("div",{class:"page-title"},[t("span",{class:"title"},[e.row[e.column.key]]),t("span",{class:"default",style:{display:"1"===e.row.is_default?"inline-block":"none"}},["默认"])])}},{title:"页面类型",key:"type",render:function(t,e){var a;return"10"==e.row.type?a=t("span",{class:"iconfont icon-shouye1"}):"11"==e.row.type?a=t("span",{class:"iconfont icon-xiangqing"}):"12"==e.row.type&&(a=t("span",{class:"iconfont icon-huiyuanzhongxin1"})),e.row.type_text?t("div",{class:"page-type"},[a,t("span",{class:"page-name"},[e.row.type_text])]):t("div",["-"])}},{title:"状态",key:"status",render:function(t,e){var a=e.row,n=a.status,i=a.type,o=a.status_text;return"1"===n?t("kdx-tag-label",{attrs:{type:"success"}},["应用中"]):0==i?t("div",{class:"custom-tag"},["-"]):t("kdx-tag-label",{attrs:{type:"disabled"}},[o])}},{title:"修改时间",key:"updated_at",render:function(t,e){return"0000-00-00 00:00:00"===e.row.updated_at?t("div",[e.row.created_at]):t("div",[e.row.updated_at])}},{title:"操作",key:"action",render:function(e,a){var n;"10"==a.row.type?n=e("kdx-hint-tooltip",{attrs:{type:"qrCode",url:t.getPreviewUrl(a.row,"page-index",""),text:"复制页面链接"}},[e("Button",{attrs:{type:"text"}},["预览"])]):"11"==a.row.type?n=e("kdx-hint-tooltip",{attrs:{type:"qrCode",url:t.getPreviewUrl(a.row,"page-detail",t.goodsId),text:"复制页面链接"}},[e("Button",{attrs:{type:"text"}},["预览"])]):"12"==a.row.type?n=e("kdx-hint-tooltip",{attrs:{type:"qrCode",url:t.getPreviewUrl(a.row,"page-vip",a.row.id),text:"复制页面链接"}},[e("Button",{attrs:{type:"text"}},["预览"])]):"20"==a.row.type?n=e("kdx-hint-tooltip",{attrs:{type:"qrCode",url:t.getPreviewUrl(a.row,"page-commission",a.row.id),text:"复制页面链接"}},[e("Button",{attrs:{type:"text"}},["预览"])]):"0"==a.row.type&&(n=e("kdx-hint-tooltip",{attrs:{type:"qrCode",url:t.getPreviewUrl(a.row,"page-custom",a.row.id),text:"复制页面链接"}},[e("Button",{attrs:{type:"text"}},["预览"])]));var i="0"==a.row.status?e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleDelete(a.row)}},style:{display:"1"===a.row.is_used?"none":"inline-block"}},["删除"]):null;return e("div",{class:"action"},[e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.editPage(a.row)}}},["编辑"]),n,i])}}]}},computed:{noManagePerm:function(){return!this.$getPermMap("diypage.page.list.manage")}},methods:{handlePageChange:function(t){this.$emit("on-page-change",t)},editPage:function(t){this.$emit("on-edit",t)},handleDelete:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认彻底删除此页面？",onOk:function(){e.$api.shopApi.deletePage({id:t.id,type:t.type}).then((function(t){0===t.error&&(e.$Message.success("该页面删除成功"),e.handleRefresh())}))},onCancel:function(){}})},handleRefresh:function(){this.$emit("on-refresh"),this.reset()},reset:function(){this.$refs["page"].reset()},getPreviewUrl:function(t,e,a){var n=t.id,i=t.status,o=this.$utils,s=o.addQueryParams,r=o.getPreviewUrl,c=r(e,a);return"0"==i&&(c=s(c,{previewId:n})),c}}};e.default=n},ff39:function(t,e,a){}}]);