(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{"0e50":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[i("Button",{staticClass:"primary-long",on:{click:t.handleSave}},[t._v("保存")]),i("Button",{staticClass:"default-long",attrs:{to:"/goods/classify"}},[t._v("返回")])]},proxy:!0}])},[i("div",{staticClass:"good-classification-add"},[i("Form",{ref:"form",attrs:{model:t.model,"label-width":120}},[i("kdx-form-title",[t._v("广告设置")]),i("FormItem",{attrs:{label:"分类广告：",prop:"advimg"}},[i("kdx-image-video",{attrs:{type:"ad",current:t.model.advimg},on:{"on-change":t.changeAdvertising}}),i("div",{staticClass:"flex",staticStyle:{"margin-top":"10px"}},[i("kdx-hint-text",{attrs:{content:"推荐分类的广告图，建议尺寸750*250像素，或者比例为3:1的图片。"}}),i("kdx-hint-tooltip",{attrs:{type:"image",image:n("f247")}})],1)],1),i("FormItem",{attrs:{label:"广告链接：",prop:"advurl"}},[i("Button",{directives:[{name:"show",rawName:"v-show",value:!t.model.advurl,expression:"!model.advurl"}],staticClass:"default-primary",on:{click:t.openAdvertisingSelector}},[t._v("+添加")]),i("Button",{directives:[{name:"show",rawName:"v-show",value:t.model.advurl,expression:"model.advurl"}],staticClass:"default-primary",on:{click:t.openAdvertisingSelector}},[t._v("编辑")]),i("div",{staticClass:"ad-link-content"},[i("p",[t._v(t._s(t.model.advurl))]),i("Button",{directives:[{name:"show",rawName:"v-show",value:t.model.advurl,expression:"model.advurl"}],attrs:{type:"text"},on:{click:t.deleteAdLink}},[t._v("删除")])],1)],1)],1),i("Spin",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{fix:""}})],1),i("link-selector",{attrs:{current:t.model.advurl},on:{"on-cancel":t.handleCancel,"on-change":t.advertisingChange},model:{value:t.advertising.value,callback:function(e){t.$set(t.advertising,"value",e)},expression:"advertising.value"}})],1)},a=[]},3107:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kdx-modal-frame",{attrs:{value:t.value,title:"链接选择器",width:"1000",loading:t.loading,"ok-text":"保存"},on:{"on-ok":t.handleSave,"on-cancel":t.handleCancel}},[n("div",{staticClass:"selector-shopping-mall"},[n("Tabs",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[n("TabPane",{attrs:{label:"商城链接",name:"shop"}},[n("div",{staticClass:"shopping-mall-link"},[n("div",{staticClass:"search"},[n("Input",{staticClass:"width-300",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":t.handleSearch},model:{value:t.search.content,callback:function(e){t.$set(t.search,"content",e)},expression:"search.content"}})],1),t.list&&t.list.length>0?n("div",{staticClass:"content"},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"content-item"},[n("p",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),e.links&&e.links.length>0?n("ul",t._l(e.links,(function(e,a){return n("li",{key:a,class:{checked:e.checked},on:{click:function(e){return t.setChecked(i,a)}}},[n("Icon",{attrs:{type:e.icon}}),n("span",{staticClass:"name"},[t._v(t._s(e.name))])],1)})),0):t._e()])})),0):n("div",{staticStyle:{"text-align":"center"}},[t._v("暂无数据")])])]),n("TabPane",{attrs:{label:"自定义链接",name:"custom"}},[n("div",{staticClass:"image-selector-network"},[n("Form",{staticClass:"custom-link",attrs:{"label-width":120},nativeOn:{submit:function(t){t.preventDefault()}}},[n("FormItem",{attrs:{label:"链接地址："}},[n("Input",{attrs:{"enter-button":"提取链接",search:"",placeholder:"请输入"},on:{"on-search":t.handleSave},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}})],1)],1)],1)])],1)],1)])},a=[]},"3aaf":function(t,e,n){"use strict";n("b44a")},"421d":function(t,e,n){"use strict";n("7f314")},5511:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("159b"),n("b0c0"),n("ac1f"),n("841c"),n("d81d"),n("4de4"),n("9911");var i={name:"LinkSelector",props:{current:{type:[Object,String],required:!0},value:{type:Boolean,default:!1}},data:function(){return{name:"shop",search:{content:""},data:[],list:[],selectRow:null,loading:!1,link:"",keyword:["shop","goods","member"]}},methods:{handleSearch:function(){var t=this,e=[];this.data.forEach((function(n){var i;if(n.name.indexOf(t.search.content)>-1)e.push(n);else if(null!==(i=n.links)&&void 0!==i&&i.length){var a=[];n.links.forEach((function(e){e.name.indexOf(t.search.content)>-1&&a.push(e)})),a.length>0&&e.push({item:n,links:a})}})),this.list=e},defaultChecked:function(){var t=this;this.list.forEach((function(e,n){e.links&&e.links.length>0&&e.links.forEach((function(e,i){var a;e.url===(null===(a=t.selectRow)||void 0===a?void 0:a.url)?t.$set(t.list[n].links[i],"checked",!0):t.$set(t.list[n].links[i],"checked",!1)}))}))},setChecked:function(t,e){var n=this,i=this.list[t].links[e];i.checked?(this.selectRow={},this.$set(this.list[t].links[e],"checked",!1)):(this.list.forEach((function(t,e){t.links.forEach((function(t,i){n.$set(n.list[e].links[i],"checked",!1)}))})),this.$set(this.list[t].links[e],"checked",!0),this.selectRow=this.list[t].links[e])},getData:function(){var t=this;this.loading=!0,this.$api.shopApi.getLinkList().then((function(e){t.loading=!1,0===e.error&&(t.data=e.list.map((function(t){return t.links=t.links.filter((function(t){return"wx_service"!=t.url})),t})),t.list=t.data,t.defaultChecked())}))},handleSave:function(){"custom"===this.name?this.$emit("on-change",{url:this.link}):this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel")}},watch:{value:{handler:function(t){t&&(this.getData(),this.current?"string"===typeof this.current?this.selectRow={url:this.current}:this.selectRow=this.current:this.selectRow={},this.name="shop",this.link="",this.search.content="")},immediate:!0}}};e.default=i},"650b":function(t,e,n){},"7f314":function(t,e,n){},9688:function(t,e,n){var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a58b")),s={name:"index",components:{LinkSelector:a.default},data:function(){return{model:{advurl:"",advimg:""},advertising:{value:!1},id:0,loading:!1}},methods:{changeAdvertising:function(t){this.model.advimg=t},handleSave:function(){var t=this;this.$refs["form"].validate((function(e){e&&t.editGoodClassify()}))},editGoodClassify:function(){var t=this;this.loading=!0;var e=Object.assign({id:this.id},this.model);this.$api.goodsApi.editGoodClassify(e).then((function(e){t.loading=!1,0===e.error&&(t.$Message.success("广告设置成功"),t.$router.push({path:"/goods/classify"}))})).catch()},advertisingChange:function(t){this.model.advurl=t.url,this.handleCancel()},openAdvertisingSelector:function(){this.advertising.value=!0},deleteAdLink:function(){this.model.advurl=""},handleCancel:function(){this.advertising.value=!1},getData:function(){var t=this;this.$api.goodsApi.getGoodClassify({id:this.id}).then((function(e){t.model.advurl=e.data.advurl||"",t.model.advimg=e.data.advimg||""})).catch()},resetModel:function(){this.model={advurl:"",advimg:""}}},mounted:function(){var t;this.resetModel(),this.id=(null===(t=this.$route.query)||void 0===t?void 0:t.id)||0,this.id&&this.getData()}};e.default=s},9911:function(t,e,n){"use strict";var i=n("23e7"),a=n("857a"),s=n("af03");i({target:"String",proto:!0,forced:s("link")},{link:function(t){return a(this,"a","href",t)}})},a58b:function(t,e,n){"use strict";n.r(e);var i=n("3107"),a=n("c6ed");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("d0668"),n("3aaf");var l=n("2877"),o=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"90370ac6",null);e["default"]=o.exports},ad4e:function(t,e,n){"use strict";n.r(e);var i=n("9688"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},b286:function(t,e,n){"use strict";n.r(e);var i=n("0e50"),a=n("ad4e");for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("421d");var l=n("2877"),o=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"24177219",null);e["default"]=o.exports},b44a:function(t,e,n){},c6ed:function(t,e,n){"use strict";n.r(e);var i=n("5511"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},d0668:function(t,e,n){"use strict";n("650b")},f247:function(t,e,n){t.exports=n.p+"static/dist/shop/img/classify_ad.png"}}]);