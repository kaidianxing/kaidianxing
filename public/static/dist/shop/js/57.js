(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"06c4":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{types:{type:Array,default:function(){return[]}}},data:function(){return{value:!1,checkType:null}},methods:{chooseTemp:function(e){this.checkType=e},handleCancel:function(){this.setValue()},handleOk:function(){if(null==this.checkType)return this.$Message.error("请选择菜单类型");this.$emit("choose-type",this.checkType)},setValue:function(){this.value=!this.value,this.value&&(this.checkType=null)}}};t.default=n},"090b":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("kdx-modal-frame",{staticClass:"menu-temp",attrs:{title:"选择菜单类型",width:910},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("div",{staticClass:"menu-content"},e._l(e.types,(function(t){return n("div",{key:t.id,staticClass:"menu-list",class:{on:t.type===e.checkType},on:{click:function(n){return e.chooseTemp(t.type)}}},[t.type===e.checkType?n("i",{staticClass:"iconfont icon-yes1 choose-icon"}):e._e(),n("div",{staticClass:"menu-info"},[n("i",{staticClass:"iconfont menu-icon",class:t.icon}),n("span",{staticClass:"menu-type",class:{bold:0!=t.type}},[e._v(e._s(t.text))])]),t.thumb?n("img",{staticClass:"menu-img",attrs:{src:e.$utils.media(t.thumb)}}):e._e()])})),0)])},i=[]},"0f72":function(e,t,n){},"149f":function(e,t,n){"use strict";n("0f72")},"1d2b6":function(e,t,n){"use strict";n.r(t);var a=n("06c4"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"302fd":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("4de4"),n("d3b7");var a={name:"MenuList",props:{data:{type:Array,default:function(){return[]}},total:{type:Number},loading:{type:Boolean,default:!1},types:{type:Array,default:function(){return[]}}},data:function(){var e=this;this.$createElement;return{columns:[{title:"序号",key:"id",width:80,render:function(e,t){var n;return n=parseInt(t.row.id)>999?"999+":t.row.id,e("div",[n])}},{title:"菜单名称",key:"name",render:function(e,t){return e("div",{attrs:{className:"menu-title"}},[e("span",{attrs:{className:"title"}},[t.row[t.column.key]])])}},{title:"应用类型",key:"type",render:function(t,n){var a,i=e.types.filter((function(e){return e.type==n.row.type}));return i&&i.length?("10"==i[0].type?a=t("span",{class:"iconfont icon-shouye1"}):"20"==i[0].type&&(a=t("span",{class:"iconfont icon-xiangqing"})),t("div",{class:"page-type"},[a,t("span",{class:"page-name"},[i[0].text])])):t("div",["-"])}},{title:"状态",key:"status",render:function(e,t){return"1"===t.row.status?e("kdx-tag-label",{attrs:{type:"success"}},["应用中"]):e("kdx-tag-label",{attrs:{type:"disabled"}},["未应用"])}},{title:"修改时间",key:"updated_at",render:function(e,t){return"0000-00-00 00:00:00"===t.row.updated_at?e("div",[t.row.created_at]):e("div",[t.row.updated_at])}},{title:"预览",key:"thumb",width:368,render:function(t,n){var a=e.$utils.media(n.row[n.column.key]);return t("div",{class:"preview"},[t("img",{attrs:{src:a,alt:""}})])}},{title:"操作",key:"action",render:function(t,n){var a,i;return"0"==n.row.status&&(a=t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(){e.handleDelete(n.row)}}},["删除"]),i=t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(){e.handlePublish(n.row)}}},["应用"])),t("div",{class:"action"},[t("Button",{attrs:{type:"text",disabled:e.noManagePerm,to:"/decorate/diymenu?id=".concat(n.row.id,"&type=edit")}},["编辑"]),a,i])}}]}},computed:{noManagePerm:function(){return!this.$getPermMap("diypage.menu.manage")}},methods:{changePage:function(e){this.$emit("on-page-change",e)},reset:function(){var e;null===(e=this.$refs["page"])||void 0===e||e.reset()},handleDelete:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"是否删除该菜单?",onOk:function(){t.$api.shopApi.deleteNewMenu({id:e.id}).then((function(e){0===e.error&&(t.$Message.success("菜单删除成功"),t.$emit("on-refresh"))}))}})},handlePublish:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"是否应用该菜单?",onOk:function(){t.$api.shopApi.menuApply({id:e.id}).then((function(e){0===e.error&&(t.$Message.success("菜单应用成功"),t.$emit("on-refresh"))}))}})}}};t.default=a},4458:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shop-custom-menu"},[n("search-header",{on:{"on-change":e.handleSearch,"choose-temp":e.chooseTemp}}),n("div",{staticClass:"menu-list"},[n("menu-list",{ref:"table_list",attrs:{types:e.typeList,total:e.total,data:e.table.data,loading:e.table.loading},on:{"on-page-change":e.changePage,"on-refresh":e.resetTable}})],1),n("select-menu-temp",{ref:"selectMenuTemp",attrs:{types:e.typeList},on:{"choose-type":e.chooseType}}),e._t("default")],2)},i=[]},"4bad":function(e,t,n){},5042:function(e,t,n){"use strict";n.r(t);var a=n("b42d"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},6202:function(e,t,n){"use strict";n.r(t);var a=n("dd95"),i=n("5042");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},6977:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shop-custom-menu-list"},[n("Table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{columns:e.columns,data:e.data}}),n("div",{staticClass:"footer-page"},[n("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.changePage}})],1)],1)},i=[]},7153:function(e,t,n){"use strict";n.r(t);var a=n("4458"),i=n("77bc");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("afb2");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"570adf36",null);t["default"]=s.exports},"77bc":function(e,t,n){"use strict";n.r(t);var a=n("ce6d"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"830f":function(e,t,n){},afb2:function(e,t,n){"use strict";n("4bad")},b42d:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"SearchHeader",data:function(){return{model:{keywords:""}}},computed:{noManagePerm:function(){return!this.$getPermMap("diypage.menu.manage")}},methods:{handleSearch:function(){this.$emit("on-change",this.model)},handleReset:function(){this.$emit("on-change",{}),this.model.keywords=""},addMenu:function(){this.$emit("choose-temp")}}};t.default=n},c01f:function(e,t,n){"use strict";n.r(t);var a=n("6977"),i=n("d3b1");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("f71a");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"490730b0",null);t["default"]=s.exports},ce6d:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("841c"),n("4de4"),n("d3b7");var i=a(n("6202")),r=a(n("c01f")),o=a(n("df2a")),s={name:"index",inject:["returnToTop"],components:{SearchHeader:i.default,SelectMenuTemp:o.default,MenuList:r.default},data:function(){return{data:[],page:{pageSize:10,pageNumber:1},total:10,table:{data:[],loading:!1},search:{},typeList:[]}},methods:{chooseTemp:function(){this.$refs.selectMenuTemp.setValue()},chooseType:function(e){this.$router.push({path:"/decorate/diymenu",query:{type:e}})},handleSearch:function(e){this.search=e,this.resetTable()},changePage:function(e){this.page=e,this.getList()},resetTable:function(){this.page={pageSize:10,pageNumber:1},this.$refs["table_list"].reset(),this.getList()},getList:function(){var e=this;this.returnToTop(),this.table.loading=!0;var t=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},this.search);this.$api.shopApi.getNewMenuList(t).then((function(t){e.table.loading=!1,0===t.error&&(e.table.data=t.list||[],e.total=t.total,e.typeList=t.type_list.filter((function(e){return"20"!=e.type})))}))}},mounted:function(){this.getList()}};t.default=s},d3b1:function(e,t,n){"use strict";n.r(t);var a=n("302fd"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},dd95:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("kdx-header-bar",{attrs:{type:"little"},scopedSlots:e._u([{key:"header",fn:function(){return[n("Button",{attrs:{type:"primary",disabled:e.noManagePerm},on:{click:e.addMenu}},[e._v("+新建菜单")])]},proxy:!0}])},[n("Form",{ref:"form",attrs:{model:e.model,"label-width":100,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[n("FormItem",{attrs:{label:"菜单名称："}},[n("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"请输入菜单名称"},on:{"on-enter":e.handleSearch},model:{value:e.model.keywords,callback:function(t){e.$set(e.model,"keywords",t)},expression:"model.keywords"}})],1),n("div",{staticClass:"ivu-form-item-btn"},[n("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),n("Button",{attrs:{type:"text"},on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1)},i=[]},df2a:function(e,t,n){"use strict";n.r(t);var a=n("090b"),i=n("1d2b6");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("149f");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"893b6abc",null);t["default"]=s.exports},f71a:function(e,t,n){"use strict";n("830f")}}]);