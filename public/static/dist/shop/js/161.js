(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[161],{2679:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"fans-label"},[n("kdx-hint-alert",{staticStyle:{margin:"10px 0"}},[t._v("提示：自定义菜单只能有一个菜单生效。")]),n("kdx-header-bar",{attrs:{type:"little"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"header-btn"},[n("Button",{attrs:{type:"primary",disabled:t.noManagePerm},on:{click:t.to}},[t._v("+新建菜单")])],1)]},proxy:!0}])}),n("div",{staticClass:"t-wp"},[n("Table",{attrs:{columns:t.columns,data:t.data}}),n("kdx-page-component",{ref:"page",staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{total:t.total,pageSize:t.page.pagesize},on:{"on-change":t.handlePageChange}})],1)],1)},i=[]},"826c":function(t,e,n){"use strict";n.r(e);var a=n("f9cc"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"8b76":function(t,e,n){"use strict";n.r(e);var a=n("2679"),i=n("826c");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9630");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"4d4b2606",null);e["default"]=s.exports},9630:function(t,e,n){"use strict";n("c348")},c348:function(t,e,n){},f9cc:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o={created:function(){this.getList()},data:function(){var t=this,e=this.$createElement;return{page:{pagesize:10,page:1},total:0,loading:!1,columns:[{title:"菜单名称",key:"name"},{title:"显示对象",key:"name",render:function(){return e("div",["全部粉丝"])}},{title:"是否启用",key:"status",render:function(t,e){return t("div",[1==e.row.status?"已启用":"已禁用"])}},{title:"操作",key:"action",render:function(e,n){return e("div",{class:"opts"},[e("Button",{class:"btn",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){return t.opt(n.row.status,n.row.id)}}},[1==n.row.status?"禁用":"启用"]),e("Button",{class:"btn",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){return t.edit(n.row.id)}}},["编辑"]),e("Button",{class:"btn",attrs:{disabled:t.noManagePerm,type:"text"},on:{click:function(){return t.del(n.row.id)}}},["删除"])])}}],data:[]}},computed:{noManagePerm:function(){return!this.$getPermMap("channel.wechat.manage")}},methods:{opt:function(t,e){var n=this,a=1==t?"禁用":"启用";this.$Modal.confirm({title:"提示",content:"确认".concat(a,"吗?"),onOk:function(){n.$api.homeApi.disableMenu({menu_id:e,status:1==t?"0":"1"}).then((function(t){0==t.error&&(n.resetPage(),n.$Message.success("".concat(a,"成功")))}))}})},del:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除吗?",onOk:function(){e.$api.homeApi.deleteMenu({id:t}).then((function(t){0==t.error&&(e.resetPage(),e.$Message.success("删除成功"))}))}})},edit:function(t){this.$router.push({path:"/home/public/lib",query:{id:t}})},resetPage:function(){var t;this.page={pagesize:10,page:1},null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getList()},handlePageChange:function(t){this.page.pagesize=t.pageSize,this.page.page=t.pageNumber,this.getList()},getList:function(){var t=this;this.$api.homeApi.customMenuList((0,i.default)({},this.page)).then((function(e){t.total=e.total,t.data=e.list}))},to:function(){this.$router.push({path:"/home/public/lib"})}}};e.default=o}}]);