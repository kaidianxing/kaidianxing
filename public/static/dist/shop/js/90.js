(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{"113f":function(e,t,a){},"13eb":function(e,t,a){"use strict";a.r(t);var n=a("6af0"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"167f":function(e,t,a){"use strict";a("8191")},"27e7":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"good-group-table-list"},[a("Table",{ref:"table",attrs:{columns:e.columns,data:e.data},on:{"on-selection-change":e.selectChange}}),e.data.length>0?a("div",{staticClass:"footer-action"},[a("Checkbox",{attrs:{disabled:e.noManagePerm},on:{"on-change":e.checkboxChange},model:{value:e.isSelectAll,callback:function(t){e.isSelectAll=t},expression:"isSelectAll"}}),a("Button",{attrs:{disabled:e.isDisabled||e.noManagePerm},on:{click:e.handleBatchDelete}},[e._v("删除")])],1):e._e(),a("div",{staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.changePage}})],1)],1)},i=[]},"2c62":function(e,t,a){"use strict";a.r(t);var n=a("4d2e"),i=a("13eb");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("167f");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"19396651",null);t["default"]=s.exports},"4d2e":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vip-group"},[a("kdx-header-bar",{attrs:{type:"little"},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"flex space-between"},[a("Button",{attrs:{type:"primary",disabled:e.noManagePerm},on:{click:e.addLabelGroup}},[e._v("+添加标签组")]),a("div",{staticClass:"flex"},[a("Form",{ref:"form",attrs:{model:e.model,"label-width":100,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"标签组名称："}},[a("Input",{staticClass:"width-160",attrs:{type:"text",placeholder:"关键词查询"},on:{"on-enter":e.handleSearch},model:{value:e.model.keyword,callback:function(t){e.$set(e.model,"keyword",t)},expression:"model.keyword"}})],1)],1),a("div",{staticClass:"btn"},[a("Button",{staticClass:"mL-20",attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),a("Button",{staticClass:"mL-20",attrs:{type:"text"},on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1)]},proxy:!0}])}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-list"},[a("table-list",{ref:"tableList",attrs:{data:e.list,total:e.total},on:{"on-edit":e.handleEdit,getList:e.getList,"on-page-change":e.changePage}})],1),a("kdx-modal-frame",{attrs:{title:e.modalTitle},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.group.modal,callback:function(t){e.$set(e.group,"modal",t)},expression:"group.modal"}},[e.group.modal?a("Form",{ref:"form",attrs:{model:e.group.model,rules:e.rules,"label-width":120}},[a("FormItem",{staticStyle:{"margin-top":"20px"},attrs:{label:"标签名称：",prop:"group_name"}},[a("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"标签名称"},model:{value:e.group.model.group_name,callback:function(t){e.$set(e.group.model,"group_name",t)},expression:"group.model.group_name"}})],1),a("FormItem",{attrs:{label:"标签描述："}},[a("Input",{staticClass:"width-340",attrs:{type:"textarea",placeholder:"标签描述",autosize:{minRows:6}},model:{value:e.group.model.description,callback:function(t){e.$set(e.group.model,"description",t)},expression:"group.model.description"}})],1)],1):e._e()],1),e._t("default")],2)},i=[]},"6af0":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("e9c4"),a("a4d3"),a("e01a");var i=n(a("5530")),o=n(a("bcb5")),r={name:"index",inject:["returnToTop"],components:{TableList:o.default},data:function(){return{list:[],model:{keyword:""},modalTitle:"添加标签组",total:0,page:{pageSize:10,pageNumber:1},optionData:{status:[{value:"",name:"全部"},{value:"1",name:"启用"},{value:"0",name:"禁用"}]},group:{modal:!1,model:{group_name:"",description:""}},rules:{group_name:[{required:!0,message:"请填写标签名称",trigger:"blur"}]},loading:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("member.group.manage")}},created:function(){},mounted:function(){var e=this;this.$history.setRoute(this.$route).getData((function(t){e.model=t.model||{keyword:""},e.page=t.page||{pageSize:10,pageNumber:1},e.$refs.tableList.reset(e.page)})),this.getList()},methods:{getList:function(){var e=this;this.returnToTop(),this.loading=!0;var t={keyword:this.model.keyword,pagesize:this.page.pageSize,page:this.page.pageNumber};this.$history.setData({model:this.model,page:this.page}),this.$api.memberApi.getGroupList(t).then((function(t){e.loading=!1,0==t.error&&(e.list=t.list,e.total=t.total)}))},handleSearch:function(){this.list=[],this.page={pageSize:10,pageNumber:1},this.getList()},handleReset:function(){this.model.keyword="",this.getList()},addLabelGroup:function(){this.group.modal=!0,this.modalTitle="添加标签组",this.group.model={group_name:"",description:""}},handleCancel:function(){this.group.modal=!1},handleOk:function(){var e=this;this.$refs["form"].validate((function(t){t&&e.$api.memberApi[e.group.model.id?"editGroup":"addGroup"]((0,i.default)({},e.group.model)).then((function(t){0==t.error&&(e.getList(),e.$Message.success("保存成功")),e.group.modal=!1,e.modalTitle="添加标签组",e.group.model={group_name:"",description:""}}))}))},handleEdit:function(e){this.group.model=JSON.parse(JSON.stringify({group_name:e.group_name,description:e.description,id:e.id})),this.modalTitle="编辑标签组",this.group.modal=!0},changePage:function(e){this.page=e,this.getList()}}};t.default=r},8191:function(e,t,a){},"95a8":function(e,t,a){"use strict";a.r(t);var n=a("f2ec"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},a17f:function(e,t,a){"use strict";a("113f")},bcb5:function(e,t,a){"use strict";a.r(t);var n=a("27e7"),i=a("95a8");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("a17f");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"2789d63c",null);t["default"]=s.exports},f2ec:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("a4d3"),a("e01a"),a("d81d");var n={name:"TableList",props:{data:{type:Array,default:function(){return[]}},total:{type:[String,Number],default:0}},data:function(){var e=this;this.$createElement;return{columns:[{type:"selection",width:40,align:"center"},{title:"标签组名称",key:"group_name"},{title:"标签组描述",key:"description",render:function(e,t){return e("div",[t.row.description?t.row.description:"-"])}},{title:"会员数",key:"member_count"},{title:"操作",key:"action",width:200,render:function(t,a){return t("div",{class:"action"},[t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(){e.lookVipStatistics(a.row)}}},["会员统计"]),t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(){e.handleEdit(a.row)}}},["编辑"]),t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(){e.handleDelete(a.row.id)}}},["删除"])])}}],selectRows:[],isSelectAll:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("member.group.manage")},isDisabled:function(){return 0===this.selectRows.length}},methods:{selectChange:function(e){this.selectRows=e,this.isSelectAll=this.selectRows.length===this.data.length},checkboxChange:function(e){this.$refs["table"].selectAll(e)},reset:function(e){var t;null===(t=this.$refs["page"])||void 0===t||t.reset(e)},changePage:function(e){this.$emit("on-page-change",e),this.initFooterData()},initFooterData:function(){this.isSelectAll=!1,this.selectRows=[]},handleEdit:function(e){this.$emit("on-edit",e)},handleDelete:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"确认彻底删除此标签组？",onOk:function(){t.$api.memberApi.deleteGroup({id:e}).then((function(e){0==e.error&&(t.$Message.success("删除成功"),t.$emit("getList"))}))},onCancel:function(){}})},handleBatchDelete:function(){var e=this;this.$Modal.confirm({title:"提示",content:"确认批量删除？",onOk:function(){var t=e.selectRows.map((function(e){return e.id}));e.$api.memberApi.deleteGroup({id:t}).then((function(t){0==t.error&&(e.$Message.success("删除成功"),e.$emit("getList"))}))},onCancel:function(){}})},lookVipStatistics:function(e){this.$router.push({path:"/member/list",query:{group_id:e.id}})}}};t.default=n}}]);