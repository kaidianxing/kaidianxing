(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86],{"1d41":function(e,t,a){"use strict";a.r(t);var l=a("b22c"),n=a("9767");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("38e1");var d=a("2877"),s=Object(d["a"])(n["default"],l["a"],l["b"],!1,null,"4b81b884",null);t["default"]=s.exports},"38e1":function(e,t,a){"use strict";a("3d50")},3996:function(e,t,a){"use strict";a.r(t);var l=a("bc58"),n=a.n(l);for(var o in l)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(o);t["default"]=n.a},"3d50":function(e,t,a){},"4f81":function(e,t,a){},"6aad8":function(e,t,a){"use strict";a("4f81")},"89a21":function(e,t,a){"use strict";a.r(t);var l=a("d812c"),n=a("3996");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("6aad8");var d=a("2877"),s=Object(d["a"])(n["default"],l["a"],l["b"],!1,null,"1c2cb477",null);t["default"]=s.exports},9767:function(e,t,a){"use strict";a.r(t);var l=a("cb07"),n=a.n(l);for(var o in l)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return l[e]}))}(o);t["default"]=n.a},b22c:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return n}));var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"good-label-add"},[a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",on:{click:e.handleSave}},[e._v("保存")]),a("Button",{staticClass:"default-long",on:{click:e.goBack}},[e._v("返回列表")])]},proxy:!0}])},[a("div",{staticClass:"label-content"},[a("kdx-form-title",[e._v(e._s(e.type))]),a("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":120}},[a("FormItem",{attrs:{label:"排序：",prop:"sort_by"}},[a("Input",{staticClass:"width-160",attrs:{maxlength:"4",placeholder:"排序"},model:{value:e.model.sort_by,callback:function(t){e.$set(e.model,"sort_by",t)},expression:"model.sort_by"}})],1),a("FormItem",{attrs:{label:"标签组名称：",prop:"name"}},[a("Input",{staticClass:"width-160",attrs:{type:"text",disabled:e.isDefault,placeholder:"标签组名称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("FormItem",{attrs:{label:"添加标签：",prop:"label"}},[a("Button",{staticClass:"default-primary",staticStyle:{display:"block"},attrs:{disabled:e.isDefault},on:{click:e.addLabel}},[e._v("+添加标签")]),e.model.label&&e.model.label.length>0?a("div",{staticClass:"label-tag-box"},e._l(e.model.label,(function(t,l){return a("kdx-tag-label",{key:l,staticClass:"label-tag",attrs:{closable:!e.isDefault},on:{"on-close":function(t){return e.closeLabel(l)},"label-click":function(t){return e.addLabel(l)}}},[e._v(" "+e._s(t.name))])})),1):e._e()],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"是否启用：",prop:"status"}},[a("RadioGroup",{model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}},[a("Radio",{attrs:{label:"1"}},[e._v("是")]),a("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1)],1)]),a("add-modal",{attrs:{disabled:e.isDefault,item:e.getItem},on:{"on-submit":e.submitAdd},model:{value:e.addModal,callback:function(t){e.addModal=t},expression:"addModal"}})],1)},n=[]},bc58:function(e,t,a){var l=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("5530"));a("b0c0");var o={props:{value:{type:Boolean,default:!1},item:{type:Object,default:function(){}},disabled:{type:Boolean,default:!1}},data:function(){return{model:{name:"",content:""},rules:{name:[{required:!0,message:"请输入标签名称"}]}}},watch:{item:{handler:function(e){e?this.model={name:e.name,content:e.content}:this.$refs.form.resetFields()}}},methods:{addModalOk:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.$emit("on-submit",(0,n.default)({},e.model)),e.model={name:"",content:""},e.$refs.form.resetFields())}))},addModalClose:function(){this.$emit("input",!1)}}};t.default=o},cb07:function(e,t,a){var l=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a434");var n=l(a("89a21")),o={name:"index",components:{AddModal:n.default},data:function(){return{model:{sort_by:"",name:"",label:[],status:"1"},rules:{sort_by:[{pattern:/^(0|[1-9][0-9]*)$/,message:"排序为数字类型，最长为4位数"}],name:[{required:!0,message:"标签组名称必填"}],label:[{required:!0,type:"array",message:"标签必填"}]},label:[],itemLabel:{name:""},id:0,loading:!1,type:"添加标签组",addModal:!1,checkIndex:-1}},computed:{getItem:function(){var e;return this.checkIndex>=0&&null!==(e=this.model.label[this.checkIndex])&&void 0!==e?e:null},isDefault:function(){return"1"==this.model.is_default}},methods:{addLabel:function(e){this.checkIndex="number"==typeof e?e:-1,this.addModal=!0},submitAdd:function(e){this.checkIndex>=0?Object.assign(this.model.label[this.checkIndex],e):this.model.label.push(e),this.addModal=!1},getData:function(){var e=this;this.$api.goodsApi.getLabelGroup({id:this.id}).then((function(t){0===t.error&&(e.model=t.data)}))},init:function(){this.id=this.$route.query.id||0,this.id?(this.getData(),this.type="修改标签组"):(this.type="添加标签组",this.model={name:"",status:"1",label:[]})},closeLabel:function(e){this.model.label.splice(e,1)},handleSave:function(){var e=this;this.$refs["form"].validate((function(t){if(t)if(e.loading=!0,e.id){var a=Object.assign({id:e.id},e.model);e.$api.goodsApi.editLabelGroup(a).then((function(t){e.loading=!1,0===t.error&&(e.$Message.success("标签组修改成功"),e.$router.go(-1))}))}else e.$api.goodsApi.addLabelGroup(e.model).then((function(t){e.loading=!1,0===t.error&&(e.$Message.success("标签组新增成功"),e.$router.go(-1))}))}))},goBack:function(){this.$router.go(-1)}},mounted:function(){this.init()}};t.default=o},d812c:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return n}));var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{value:e.value,title:e.item?"修改标签":"添加标签",width:520},on:{"on-cancel":e.addModalClose,"on-ok":e.addModalOk}},[a("div",{staticClass:"add-modal"},[a("Form",{ref:"form",attrs:{rules:e.rules,"label-width":120,model:e.model}},[a("FormItem",{attrs:{label:"标签名称：",prop:"name"}},[a("Input",{attrs:{type:"text",placeholder:"请输入",disabled:e.disabled},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("FormItem",{attrs:{label:"标签描述：",prop:"content"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入"},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}})],1)],1)],1)])},n=[]}}]);