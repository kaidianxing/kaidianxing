(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"0659":function(t,e,s){"use strict";s.r(e);var a=s("f859"),i=s("6da0");for(var n in i)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(n);s("efdd");var o=s("2877"),r=Object(o["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"535a0aa6",null);e["default"]=r.exports},"2e1d":function(t,e,s){var a=s("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("2909")),n=a(s("5530")),o=a(s("b85c"));s("a9e3"),s("a434"),s("4de4"),s("d3b7"),s("14d9"),s("159b"),s("ac1f"),s("841c");var r={name:"goodsSelector",props:{current:{type:[String,Object],default:function(){}},currentList:{type:Array,default:function(){return[]}},value:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},limit:{type:Number},isStore:{type:Boolean,default:!1},params:{type:Object,default:function(){}},type:{type:String,default:""},flag:{type:String,default:""},status:{type:Number,default:5},show_activity:{type:[Number],default:0},is_shopping_reward:{type:[Number],default:0}},computed:{columns:function(){var t=this,e=(this.$createElement,[{title:"商品",key:"shop",minWidth:450,render:function(e,s){var a;switch(s.row.type){case"0":a={goodsText:"实"};break;case"1":a={goodsText:"虚"};break;case"2":a={goodsText:"密"};break;case"3":a={goodsText:"预"};break}return e("div",{class:{"shop-box":!0}},[e("div",{class:{image:!0}},[e("img",{attrs:{src:t.$media(s.row.thumb)},on:{error:function(e){t.replaceImage(e)}}})]),e("div",{class:{content:!0}},[e("div",{class:{"content-text":!0}},[e("span",{class:{mark:!0},style:{display:"1"===s.row.has_option?"inline-block":"none"}},"多"),e("span",{class:{mark:!0,real:"0"===s.row.type,virtual:"1"===s.row.type,secret:"2"===s.row.type}},a.goodsText),e("span",{class:{text:!0}},s.row.title)])])])}},{title:"价格",key:"price",minWidth:60,render:function(t,e){return"1"===e.row.has_option?t("div",{class:"price"},[t("span",["￥",e.row.min_price," ~ ￥",e.row.max_price])]):t("div",{class:"price"},[t("span",["￥",e.row[e.column.key]])])}},{title:"库存",key:"stock",width:60,render:function(t,e){var s=parseInt(e.row[e.column.key]);return"3"==e.row.type?t("div","-"):t("div",s||0===s?s<=999?s:"999+":"-")}},{title:"操作",key:"action",width:80,render:function(e,s){return e("div",{class:"action"},[e("Button",{class:"default-primary",attrs:{disabled:1===s.row.is_select},style:{display:s.row.checked?"none":"block"},on:{click:function(){t.setChecked(s.index,!0)}}},["选择"]),e("Button",{attrs:{type:"primary"},style:{display:s.row.checked?"block":"none"},on:{click:function(){t.setChecked(s.index,!1)}}},["已选"])])}}]);return this.show_activity&&e.splice(-1,0,{title:"营销活动",key:"is_activity_goods",width:130,render:function(e,s){return e("div",{class:1===s.row.is_activity_goods?"brand-color pointer":"pointer",on:{click:function(){t.viewActivity(s.row)}}},[1===s.row.is_activity_goods?"查看参与的活动":"未参与活动"])}}),e}},data:function(){var t=this.$createElement;return{search:{keywords:"",group:""},goodsGroup:[],page:{pageSize:10,pageNumber:1},selectRows:[],selectRow:{},table:{data:[],loading:!1,total:0},activity:{show:!1,columns:[{title:"活动名称",key:"title"},{title:"活动状态",key:"status",slot:"status"},{title:"活动时间",key:"time",slot:"date"},{title:"活动类型",key:"type_text"},{title:"活动来源",key:"sub_shop_id",render:function(){return t("div",["平台"])}}],data:[]}}},created:function(){this.activity.columns=this.activity.columns.filter((function(t){return"sub_shop_id"!==t.key}))},methods:{handleSearch:function(){this.resetPage(),this.getShopList()},resetPage:function(){var t;this.page={pageSize:10,pageNumber:1},null===(t=this.$refs["page"])||void 0===t||t.reset()},handlePageChange:function(t){this.page=t,this.getShopList();try{this.$refs.scrollBox.scrollTop=0}catch(e){console.log(e)}},setChecked:function(t,e){var s=this;if(this.multiple){if(this.limit&&this.selectRows.length===this.limit&&e)return void this.$Message.error("已超出最大可选数量");this.$set(this.table.data[t],"checked",e),0===this.selectRows.length||e?this.selectRows.push(this.table.data[t]):this.selectRows=this.selectRows.filter((function(e){return e.id!==s.table.data[t].id}))}else e?(this.table.data.forEach((function(t,e){s.$set(s.table.data[e],"checked",!1)})),this.$set(this.table.data[t],"checked",!0),this.selectRow=this.table.data[t]):(this.$set(this.table.data[t],"checked",!1),this.selectRow={})},defaultChecked:function(){var t,e=this,s=this.isStore?"broadcast_goods_id":"id",a=this.isStore?"broadcast_goods_id":"id";this.multiple?this.table.data.forEach((function(t,i){var n,r=(0,o.default)(e.selectRows);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(c[a]===t[s]){e.$set(e.table.data[i],"checked",!0);break}}}catch(d){r.e(d)}finally{r.f()}})):null===(t=this.table.data)||void 0===t||t.forEach((function(t,i){e.selectRow&&t[s]===e.selectRow[a]?e.$set(e.table.data[i],"checked",!0):e.$set(e.table.data[i],"checked",!1)}))},getShopList:function(){var t=this;if(this.isStore)this.getGoodsStore();else{this.table.loading=!0;var e=Object.assign((0,n.default)({page:this.page.pageNumber,pagesize:this.page.pageSize,status:-1===this.status?"":this.status,type:this.type,flag:this.flag,show_activity:this.show_activity,is_shopping_reward:this.is_shopping_reward},this.params),this.search);this.$api.goodsApi.goodsList(e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total,t.defaultChecked())})).catch()}},getGoodsStore:function(){var t=this;this.table.loading=!0;var e=Object.assign({page:this.page.pageNumber,pagesize:this.page.pageSize,bro_goods_status:2},{title:this.search.keywords});this.$api.liverApi.getGoodsStore(e).then((function(e){t.table.loading=!1,0===e.error&&(t.table.data=e.list,t.table.total=e.total,t.defaultChecked())})).catch()},goodGroupList:function(){var t=this;this.$api.goodsApi.goodGroupList({pager:0}).then((function(e){0===e.error?t.goodsGroup=e.list:t.$Message.error("商品组获取失败")}))},handleSave:function(){this.multiple?this.$emit("on-change",this.selectRows):this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel"),this.activity.show=!1},resetSearch:function(){this.search={keywords:"",group:""}},viewActivity:function(t){console.log(t,"data>>>>>>>>viewActivity"),t.is_activity_goods&&(this.activity.show=!0,this.activity.data=t.join_activity)},getTime:function(t){return"0000-00-00 00:00:00"===t?"-":t}},watch:{value:{handler:function(t){t&&(this.multiple?this.selectRows=(0,i.default)(this.currentList)||[]:this.selectRow=this.current,this.resetSearch(),this.resetPage(),this.getShopList())},immediate:!0}}};e.default=r},3084:function(t,e){t.exports="data:image/png;base64,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"},"32c0":function(t,e,s){},"6da0":function(t,e,s){"use strict";s.r(e);var a=s("2e1d"),i=s.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},bb47:function(t,e){t.exports="data:image/png;base64,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"},efdd:function(t,e,s){"use strict";s("32c0")},f859:function(t,e,s){"use strict";var a=s("fc6b");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},fc6b:function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,s("ac1f"),s("841c");var a=function(){var t=this,e=t._self._c;return e("kdx-modal-frame",{attrs:{value:t.value,title:"商品选择器",width:"1000","ok-text":"保存"},on:{"on-ok":t.handleSave,"on-cancel":t.handleCancel},scopedSlots:t._u([{key:"footer",fn:function(){return[t.activity.show?e("div",{staticClass:"btn-group"},[e("Button",{attrs:{type:"primary"},on:{click:function(e){t.activity.show=!1}}},[t._v("返回选择商品")])],1):t._e()]},proxy:!0}])},[e("div",{staticClass:"goods-preview"},[e("div",{ref:"scrollBox",staticClass:"goods-preview-content"},[t.activity.show?t._e():e("div",{staticClass:"search"},[e("Input",{staticClass:"width-250",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":t.handleSearch,"on-enter":t.handleSearch},model:{value:t.search.keywords,callback:function(e){t.$set(t.search,"keywords",e)},expression:"search.keywords"}})],1),t.activity.show?t._e():e("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],ref:"table",attrs:{columns:t.columns,data:t.table.data}}),t.activity.show?e("Table",{ref:"activityTable",attrs:{columns:t.activity.columns,data:t.activity.data},scopedSlots:t._u([{key:"status",fn:function(s){var a=s.row;return[1===+a.status?e("kdx-status-text",{attrs:{type:"success"}},[t._v("进行中")]):t._e(),-1===+a.status?e("kdx-status-text",{attrs:{type:"danger"}},[t._v("已停止")]):t._e(),-2===+a.status?e("kdx-status-text",{attrs:{type:"danger"}},[t._v("手动停止")]):t._e(),0===+a.status?e("kdx-status-text",{attrs:{type:"warning"}},[t._v("未开始")]):t._e()]}},{key:"date",fn:function(s){var a=s.row;return[e("div",{staticClass:"time"},[t._v("起："+t._s(t.getTime(a.start_time)))]),e("div",{staticClass:"time"},[t._v("止："+t._s(t.getTime(a.end_time)))])]}}],null,!1,940490386)}):t._e()],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.table.total>10&&!t.activity.show,expression:"table.total > 10&&!activity.show"}],staticClass:"footer-page"},[e("kdx-page-component",{ref:"page",attrs:{total:t.table.total},on:{"on-change":t.handlePageChange}})],1)])])};e.render=a;var i=[];e.staticRenderFns=i}}]);