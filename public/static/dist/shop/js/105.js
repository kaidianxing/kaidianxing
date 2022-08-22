(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{2571:function(t,e,a){"use strict";a.r(e);var n=a("4d63c"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"2fc4":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("b0c0"),a("ac1f"),a("841c");var i=n(a("d41c")),s={name:"index",components:{TableList:i.default},inject:["returnToTop"],data:function(){return{search:{name:""},table:{data:[],loading:!1,total:0},page:{pageSize:10,pageNumber:1}}},methods:{handleSearch:function(){this.refreshTable()},handleReset:function(){this.search.name="",this.refreshTable()},refreshTable:function(){this.page={pageSize:10,pageNumber:1},this.$refs["tableList"].reset(),this.getList()},changePage:function(t){this.page=t,this.getList()},getList:function(){var t=this;this.returnToTop(),this.table.loading=!0;var e=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber,pager:1},this.search);this.$history.setData({page:this.page,search:this.search}),this.$api.goodsApi.goodGroupList(e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total)})).catch()}},mounted:function(){var t=this;this.$history.setRoute(this.$route).getData((function(e){t.page=t.$utils.deepCopy(e.page)||t.page,t.search=t.$utils.deepCopy(e.search)||t.search,t.$refs.tableList.reset(t.page),t.getList()}))}};e.default=s},"49ca":function(t,e,a){"use strict";a.r(e);var n=a("7cb1"),i=a("b75d");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("a340");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"9c56cf28",null);e["default"]=r.exports},"4d63c":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("d81d");var n={name:"TableList",props:{data:{type:Array,default:function(){return[]}},total:{type:Number,default:0}},data:function(){var t=this;this.$createElement;return{columns:[{type:"selection",width:40,align:"center"},{title:"商品分组名称",key:"name"},{title:"状态",key:"status",width:100,render:function(t,e){return"1"===e.row[e.column.key]?t("kdx-status-text",{attrs:{type:"success"}},["启用"]):"0"===e.row[e.column.key]?t("kdx-status-text",{attrs:{type:"disabled"}},["禁用"]):void 0}},{title:"操作",key:"action",width:200,render:function(e,a){var n;return n="0"===a.row.status?e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.editStatus({type:"single",row:a.row,status:1})}}},["启用"]):e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.editStatus({type:"single",row:a.row,status:0})}}},["禁用"]),e("div",{class:"action"},[n,e("Button",{attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){t.toEdit("/goods/group/edit",a.row.id)}}},["编辑"]),e("Button",{attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){t.handleDelete({type:"single",row:a.row})}}},["删除"])])}}],selectRows:[],isSelectAll:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("goods.group.manage")},isDisabled:function(){return 0===this.selectRows.length},getTableData:function(){var t=this;return this.data.map((function(e){return e._disabled=t.noManagePerm,e}))}},methods:{toEdit:function(t,e){this.$router.push({path:t,query:{id:e}})},selectChange:function(t){this.selectRows=t,this.isSelectAll=this.selectRows.length===this.data.length},checkboxChange:function(t){this.$refs["table"].selectAll(t)},editStatus:function(t){var e,a=this,n=t.type,i=t.status,s=t.row;"single"===n?e=s.id:"multiple"===n&&(e=this.selectRows.map((function(t){return t.id}))),this.$api.goodsApi.editGoodGroupStatus({id:e,status:i}).then((function(t){0===t.error&&(a.$Message.success("商品组状态修改成功"),a.initFooterData(),a.$emit("on-refresh"))}))},handleDelete:function(t){var e=this,a=t.type,n=t.row;this.$Modal.confirm({title:"提示",content:"是否删除该商品组？",onOk:function(){if("single"===a)e.deleteGroup(n.id);else if("multiple"===a){var t=e.selectRows.map((function(t){return t.id}));e.deleteGroup(t)}}})},deleteGroup:function(t){var e=this;this.$api.goodsApi.deleteGoodGroup({id:t}).then((function(t){0===t.error&&(e.$Message.success("该商品组删除成功"),e.$emit("on-refresh"),e.initFooterData())})).catch()},reset:function(t){this.$refs["page"].reset(t)},changePage:function(t){this.$emit("on-page-change",t)},initFooterData:function(){this.isSelectAll=!1,this.selectRows=[]}}};e.default=n},"6b6aa":function(t,e,a){},"7cb1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"good-group"},[a("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[a("Button",{directives:[{name:"perm",rawName:"v-perm.disabled",value:"goods.group.manage",expression:"'goods.group.manage'",modifiers:{disabled:!0}}],attrs:{type:"primary",to:"/goods/group/add"}},[t._v("+添加商品分组")])]},proxy:!0}])},[a("Form",{ref:"form",attrs:{"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"商品组名称："}},[a("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"商品组名称"},on:{"on-enter":t.handleSearch},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1),a("div",{staticClass:"ivu-form-item-btn"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),a("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")])],1)],1)],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],staticClass:"table-list"},[a("table-list",{ref:"tableList",attrs:{data:t.table.data,total:t.table.total},on:{"on-refresh":t.getList,"on-page-change":t.changePage}})],1),t._t("default")],2)},i=[]},"8b84":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"good-group-table-list"},[a("Table",{ref:"table",attrs:{columns:t.columns,data:t.getTableData},on:{"on-selection-change":t.selectChange}}),t.getTableData.length>0?a("div",{staticClass:"footer-action"},[a("Checkbox",{attrs:{disabled:t.noManagePerm},on:{"on-change":t.checkboxChange},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}}),a("Button",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.editStatus({type:"multiple",status:1})}}},[t._v("启用")]),a("Button",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.editStatus({type:"multiple",status:0})}}},[t._v("禁用")]),a("Button",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.handleDelete({type:"multiple"})}}},[t._v("删除")])],1):t._e(),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1)},i=[]},"9bd5":function(t,e,a){},a340:function(t,e,a){"use strict";a("6b6aa")},b75d:function(t,e,a){"use strict";a.r(e);var n=a("2fc4"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},cdcb:function(t,e,a){"use strict";a("9bd5")},d41c:function(t,e,a){"use strict";a.r(e);var n=a("8b84"),i=a("2571");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("cdcb");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"6efa477e",null);e["default"]=r.exports}}]);