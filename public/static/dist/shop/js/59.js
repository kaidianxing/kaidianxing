(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59,126,186],{"03a7":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("5530")),i=n("2f62"),s={computed:(0,o.default)((0,o.default)({},(0,i.mapState)("decorate",{currentModal:function(e){return e.currentModal}})),{},{getBtns:function(){return[{id:"pageSet",name:"海报设置"},{id:"asPage",name:"保存"},{id:"asPage",name:"保存并应用",btntype:"primary",action:"publish"}]},getMenuTab:function(){var e={goodposter:[{id:"goodposter",name:"商品海报装修",icon:"icon-haibao-shangpinhaibao-top"}],commissionposter:[{id:"commissionposter",name:"分销海报装修",icon:"icon-haibao-fenxiaohaibao-top"}],followposter:[{id:"poster_pushsetting",name:"推送设置",icon:"icon-haibao-tuisongshezhi-top"},{id:"poster_reward",name:"奖励设置",icon:"icon-haibao-jianglishezhi-top"}]};return e[this.$route.params.page]}}),props:{loading:{type:Boolean,default:!1}},watch:{currentModal:function(){"poster_pushsetting"!=this.currentModal.id&&"poster_pushsetting"==this.checkId?this.checkId=this.getMenuTab[0].id:"poster_pushsetting"==this.currentModal.id&&(this.checkId="poster_pushsetting")}},data:function(){return{checkId:null}},mounted:function(){this.checkId=this.getMenuTab[0].id},methods:{goBack:function(){this.$router.go(-1)},clickBtn:function(e,t){this.loading||this.$emit("click",e,t)},clickTab:function(e){var t=this;"poster_reward"==e||"poster_pushsetting"==e?this.checkId!=e&&(this.checkId=e,this.$store.commit("decorate/changeFocus",{item:{id:e,type:e},pageId:this.$route.params.page})):this.checkId!==e&&(this.checkId=e,setTimeout((function(){t.$emit("clickTab",e)}),100))}}};t.default=s},"17fe":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.poster_reward=t.poster_pushsetting=void 0,n("a4d3"),n("e01a");var a=function(e){var t=e.data.push;return{id:"poster_pushsetting",type:"poster_pushsetting",name:"推送设置",isfixed:1,asPageInfo:!0,params:{type:t.type,thumb:t.thumb,title:t.title,content:t.description,linkurl:t.url,linkurl_name:t.url_name,draggable:!1,resizable:!1,delable:!1},style:{width:"100%",top:0,left:0,height:"100%"},data:[]}};t.poster_pushsetting=a;var o=function(e){var t=e.data.award,n=[],a=[];return 1==t.rec_credit_enable&&n.push("score"),1==t.rec_cash_enable&&n.push("cash"),1==t.rec_coupon_enable&&n.push("coupon"),1==t.sub_credit_enable&&a.push("score"),1==t.sub_cash_enable&&a.push("cash"),1==t.sub_coupon_enable&&a.push("coupon"),{id:"poster_reward",type:"poster_reward",name:"奖励设置",isfixed:1,asPageInfo:!0,notemplate:!0,params:{open:t.status,recommend:{reward:n,score:{num:t.rec_credit,limit:t.rec_credit_limit},cash:{num:t.rec_cash,limit:t.rec_cash_limit,type:1==t.rec_cash_type?"balance":"redpackets"},coupon:{list:t.rec_coupon?[t.rec_coupon]:[],limit:t.rec_coupon_limit}},follower:{reward:a,score:{num:t.sub_credit},cash:{type:1==t.sub_cash_type?"balance":"redpackets",num:t.sub_cash},coupon:{list:t.sub_coupon?[t.sub_coupon]:[]}}},style:{},data:[]}};t.poster_reward=o},"19b0":function(e,t,n){"use strict";n("28fa")},"1bc5":function(e,t,n){},"1ce0":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf"),n("4e82"),n("b64b"),n("d3b7"),n("159b"),n("498a"),n("ac1f"),n("841c"),n("b0c0");var o=a(n("1da1")),i=a(n("ade3")),s=a(n("5530")),r=n("2f62"),c=n("950b"),u=n("c79a"),d=a(n("f54f")),l={computed:(0,s.default)((0,s.default)((0,s.default)({},(0,r.mapGetters)("decorate",["getModal","getAllModalName","getPageItems"])),(0,r.mapState)("decorate",{pageList:function(e){return e.pageList},topItem:function(e){return e.topItem},currentModal:function(e){return e.currentModal},onlyOne:function(e){return e.onlyOneComponent}})),{},{pageItems:function(){var e=this.getPageItems(this.$route.params.page),t=Object.keys(e).sort((function(e,t){return(0,c.groupInfo)(e).yIndex-(0,c.groupInfo)(t).yIndex})),n={};return t.forEach((function(t){n[(0,c.groupInfo)(t).yIndex]=e[t]})),n}}),watch:{search:{immediate:!0,handler:function(){var e=this;this.search.trim()?function(){var t=e.pageItems,n={},a=function(a){t[a].forEach((function(t,o){(t.type.indexOf(e.search)>-1||t.name.indexOf(e.search)>-1)&&(n[a]?n[a][o]=t:n[a]=(0,i.default)({},o,t))}))};for(var o in t)a(o);e.showComponents=n}():this.showComponents=this.pageItems,this.noResult=Object.keys(this.showComponents).length}},pageItems:{immediate:!0,handler:function(){var e=this.pageItems;this.showComponents=this.pageItems,1==this.onlyOne&&this.clickBtn(e[5][0],"global")}}},data:function(){return{noResult:!1,search:"",showComponents:{},openIndex:["1","2","3","4","5","6"],permsChecker:{}}},created:function(){this.permsChecker=(0,d.default)()},methods:(0,s.default)((0,s.default)({hasItem:function(e,t,n){var a=-1;return e.forEach((function(e,o){e[n]==t[n]&&(a=o)})),a},clickBtn:function(e,t){var n=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var o,i,s,r,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=(0,c.getModal)(e.type),!o.istop||!n.topItem.length){a.next=9;break}if(i=n.hasItem(n.topItem,o,"id"),s="",i>-1?s="此元素最多允许添加1个":"followbar"!=o.id&&(1==n.topItem.length&&"followbar"!=n.topItem[0].id||n.topItem.length>1)&&(i=0,s="已有顶部固定元素，请删除后添加"),!s){a.next=9;break}return n.$Message["error"]({background:!0,content:s}),n.changeFocus({item:n.topItem[i],pageId:n.$route.params.page}),a.abrupt("return");case 9:if(e.groupType=t,!o.max){a.next=17;break}if(r=0,n.pageList.forEach((function(e){e.id==o.id&&(r+=1,d=e)})),!(r>=o.max)){a.next=17;break}return n.$Message["error"]({background:!0,content:"此元素最多允许添加".concat(o.max,"个")}),n.changeFocus({item:d,pageId:n.$route.params.page}),a.abrupt("return");case 17:n.addModal({list:e,pageId:n.$route.params.page}).then((function(e){var t=e[0];if(t){var n=!0;"diymenu"==t.id&&(n=!1),(0,u.scrollTo)(t,n)}}));case 18:case"end":return a.stop()}}),a)})))()}},(0,r.mapActions)("decorate",["addModal"])),(0,r.mapMutations)("decorate",["changeFocus"]))};t.default=l},"238d":function(e,t,n){"use strict";n.r(t);var a=n("1ce0"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"28fa":function(e,t,n){},3247:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-content"},[a("div",{staticClass:"row relative w840"},[a("div",{staticClass:"diy-phone"},[a("div",{staticClass:"phone-body"},[a("div",{staticClass:"phone-title",class:[e.currentModal.id],on:{click:function(t){return e.changeFocus({item:e.pageInfo,pageId:e.$route.params.page})}}},[a("div",{staticClass:"phone-top"},[a("div",{staticClass:"custom-navbar",staticStyle:{width:"375px",height:"64px"},style:{background:e.pageInfo.params.navbgcolor}},[a("img",{staticStyle:{width:"375px",height:"20px",position:"absolute",top:"0",left:"0","z-index":"100"},attrs:{src:"white"==e.pageInfo.params.funbtncolor?n("fb23"):n("a267"),alt:""}}),"img"==e.pageInfo.params.navbgtype&&e.pageInfo.params.navbgimg?a("img",{staticClass:"navbgimg",attrs:{src:e.$media(e.pageInfo.params.navbgimg),alt:""}}):e._e(),a("img",{attrs:{src:n("white"==e.pageInfo.params.funbtncolor?"3db2":"d585"),alt:""}})])]),e.pageInfo.title?a("p",{staticClass:"page-title",style:{color:e.pageInfo.params.funbtncolor}},[e._v(e._s(e._f("sliceStr")(e.pageInfo.title)))]):"goods-detail"===e.pageId?a("p",{staticClass:"page-title page-title-left",style:{color:e.pageInfo.params.funbtncolor}},[e._v("2020年夏季新款韩版宽色短款...")]):e._e()]),a("div",{staticClass:"phone-main",class:{"phone-img-box":e.bgImg},style:{background:e.pageInfo.background_color||"#F4F6F8"},attrs:{id:"toCanvas"}},[e._t("top"),a("div",{staticStyle:{flex:"1",width:"100%","min-height":"100%"}},[e.bgImg?a("img",{staticClass:"phone-main-img",attrs:{src:e.bgImg}}):e._e(),a("draggable",{attrs:{options:{draggable:".drag-item"}},on:{end:e.onEnd},model:{value:e.sortAbleList,callback:function(t){e.sortAbleList=t},expression:"sortAbleList"}},[a("transition-group",{attrs:{name:"flip-list",tag:"div"}},[e._t("default")],2)],1)],1),a("div",{staticClass:"bottom-items",staticStyle:{width:"100%"}},[e._t("bottom")],2),e._t("fixed"),e.pageList.length?e._e():a("p",{staticStyle:{"text-align":"center","line-height":"400px"}},[e._v("您还没有添加任何元素")])],2)])])]),a("input",{attrs:{type:"text",id:"forFocus"},on:{keyup:[function(t){return(t.type.indexOf("key")||67===t.keyCode)&&t.ctrlKey?e.copy.apply(null,arguments):null},function(t){return(t.type.indexOf("key")||86===t.keyCode)&&t.ctrlKey?e.past.apply(null,arguments):null}]}})])},o=[]},"34b24":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:{loading:e.loading,title:e.spinTitle},expression:"{\n        loading,\n        title:spinTitle\n    }"}],staticClass:"decorate-index"},[!e.currentModal.asPageInfo||e.currentModal.notemplate?n("oper-panel"):e._e(),n("div",{staticClass:"phone-area"},[n("div",{staticClass:"scroll-body"},[e.currentModal.asPageInfo&&!e.currentModal.notemplate?n("diy-phone",{key:1},[n("template",{slot:"fixed"},[n("DragableResizeItemBox",{staticClass:"fixed-item",attrs:{item:e.currentModal}},[n(e.getComponentName(e.currentModal),{tag:"component",attrs:{"component-data":e.currentModal}})],1)],1)],2):n("diy-phone",{key:2},[n("template",{slot:"fixed"},e._l(e.pageList,(function(t,a){return n("DragableResizeItemBox",{key:t._comIndex_,staticClass:"fixed-item",class:{currentModal:e.currentModal===t&&"poster_bgimg"!==t.id},style:{zIndex:void 0===t.style.zIndex?a+1:t.style.zIndex},attrs:{item:t,index:a}},[n(e.getComponentName(t),{tag:"component",attrs:{"component-data":t}})],1)})),1)],2)],1)]),e.changeComponent?n("component-setter"):e._e(),n("bottom-bar",{staticStyle:{"z-index":"1000"},attrs:{backing:e.isAutoBack},on:{click:e.toSave,clickTab:e.clickTab}}),e._t("default")],2)},o=[]},"35d3":function(e,t,n){"use strict";n("a6e8")},"39c5":function(e,t,n){var a=n("dbce").default,o=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("fb6a"),n("4de4"),n("ac1f"),n("5319");var i=o(n("1da1")),s=o(n("5530")),r=n("8875"),c=o(n("f00e")),u=o(n("f85f")),d=o(n("d1e6")),l=o(n("3e9a")),p=o(n("a743")),f=n("2f62"),m=n("f616"),h=a(n("adfe")),g={index:10,"goods-detail":11,"vip-center":12,custom:0,distribution:20},A={data:function(){return{changeComponent:!0,loading:!1,key:0,previewPage:!1,tabId:"",advsItem:{},currentItem:{},spinTitle:"",isAutoBack:!1,pageId:"",tplId:"",actType:""}},components:(0,s.default)((0,s.default)({},r.posterComponents),{},{OperPanel:u.default,DiyPhone:d.default,BottomBar:l.default,ComponentSetter:p.default,PageInfo:c.default,TmpSaveModal:function(){return n.e(24).then(n.bind(null,"2b4b"))},DragItemBox:function(){return n.e(22).then(n.bind(null,"df776"))},FloatItemBox:function(){return n.e(25).then(n.bind(null,"11b3"))},DragableResizeItemBox:function(){return n.e(191).then(n.bind(null,"a246"))}}),watch:{$route:{deep:!0,handler:function(){0==this.$route.path.indexOf("/decorate/")&&window.location.reload()}}},computed:(0,s.default)((0,s.default)((0,s.default)({},(0,f.mapGetters)("decorate",["getModal","getAllModalName"])),(0,f.mapState)("decorate",{pageInfo:function(e){return e.pageInfo},pageList:function(e){return e.pageList},currentModal:function(e){return e.currentModal},sortAbleList:function(e){return e.sortAbleList},topItem:function(e){return e.topItem},bottomItem:function(e){return e.bottomItem},fixedItem:function(e){return e.fixedItem},html2canvasing:function(e){return e.html2canvasing},asPageInfo:function(e){return e.asPageInfo}})),{},{getSortableList:function(){return this.html2canvasing>0?this.sortAbleList.slice(0,this.html2canvasing):this.sortAbleList}}),updated:function(){this.changeComponent=!0},methods:(0,s.default)((0,s.default)((0,s.default)({},(0,f.mapMutations)("decorate",["changeFocus","clear","setPageList","setPageInfo","refreshCurrentModal","refreshPageInfo","setHtml2canvasing"])),(0,f.mapActions)("decorate",["createPoster","checkForm"])),{},{filterAdvs:function(e){return e.filter((function(e){return"advs"!==e.id}))},beforeChange:function(){this.changeComponent=!1},getPoster:function(){var e=this;return this.clickTmp(),new Promise((function(t,n){e.$nextTick((function(){e.createPoster(e.pageId).then((function(e){t(e)})).catch((function(e){n(e)}))}))}))},clickTmp:function(e){h.clickTmp(this.pageId,e)},getComponentName:function(e){var t;return"Tpl"+(null===(t=e.id)||void 0===t?void 0:t.replace(/^./,(function(e){return e.toUpperCase()})))},toSave:function(e,t){var n=this;return(0,i.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,"pageSet"!=e){a.next=4;break}return n.clickTmp(),a.abrupt("return");case 4:return n.spinTitle="正在校验数据格式...",n.loading=!0,a.next=8,n.checkForm(n.$route);case 8:n.$nextTick((function(){n.loading=!0,n.spinTitle="正在生成预览图...",n.getPoster().then((function(a){n.spinTitle="数据正在保存中...",m.setPage.call(n,t,a).then((function(t){if(0==t.error){var a="publish"===e?"发布成功":"保存成功";n.$Message.success(a),"asPage"==e?setTimeout((function(){n.replacePath()}),1e3):n.previewPage=!0}})).finally((function(){console.log(" finally close"),n.loading=!1}))})).catch((function(e){console.log(e,"error"),n.loading=!1,n.$Message.error("生成缩略图失败")}))})),a.next=16;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0,"err"),n.loading=!1,a.t0.message&&n.$Message.error(a.t0.message);case 16:case"end":return a.stop()}}),a,null,[[0,11]])})))()},replacePath:function(){window.onbeforeunload=null,this.isAutoBack=!0,g[this.pageId]?this.$router.replace({path:"/shop/list/system"}):"diymenu"==this.pageId?this.$router.replace({path:"/shop/custom-menu"}):this.$router.go(-1)},clickTab:function(){this.clickTmp()}}),beforeRouteLeave:function(e,t,n){var a=this;this.isAutoBack?n():this.$Modal.confirm({title:"确定离开",content:"系统可能不会保存您所做的更改",onOk:function(){n()},onCancel:function(){a.isAutoBack=!1,n(!1)}})},mounted:function(){window.onbeforeunload=function(){return"系统可能不会保存您所做的更改"},this.pageId=this.$route.params.page,this.tplId=this.$route.query.id,this.actType=this.$route.query.type,m.getPage.call(this,{pageId:this.pageId,type:this.actType,tplId:this.tplId})},beforeDestroy:function(){this.loading=!1,this.clear()},destroyed:function(){window.onbeforeunload=null}};t.default=A},"3db2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAgCAMAAABQMRQnAAAAb1BMVEUAAAAAAAB9fX3U1NRaWlr4+Pg/Pz9qamokJCT////////Jycnv7+/Ly8ugoKC1tbV2dnaGhobi4uL////8/Pyjo6Pk5OS/v7+/v7/z8/Pq6urc3NyKiopfX1/h4eH///+xsbGdnZ3d3d2Hh4f///8S8CgIAAAAJHRSTlMzADOZR+Y/TDMGAx7MjGYsLC8cEvIps4B/2b+mWTMgCXNmplmmfcUHAAABw0lEQVRIx7WW6XKrMAyFFXxt44UshEAIJG1uz/s/Y7FDKWbClDr0/MCekfyNkBeJNoP08XY6JLE6nMxRf8MGrsqTlF5Tmhg14eo8oTV0NXrMVbuU1lG6U9/ctz2tp/3bF1ctxIqFYPXg6h0t07+FfjvtuSaN5m6bukBhz5Mc546rrhTJFf/Ri28DQ6I6rqFIrqiB5i6orTgQhpxvSCexXAsu+ykDgogTTcc0klt57ADmYpzhIxmK5HL/7yJjPtIa2dh4o9MTgLTg7AfuFtx5cgDONcNlZOyoh/DgsLZ3RuaCOYun3AFkAfjcSvCRsaMG29Z6pwpOBdEFsHNc5sOEUz8LNi7kMu/E4PVYNR9v030LAP6QiSn3ECYN+PBfH6kFLnPcd1hP78SlW1mHeQj3rWV3F3bvLKpsNr8CEM6Vw8puLFEGTwTd6InubADOcekyJklAjo0m/l7IAmyYczQU3ov4e1wBpXzkmqMWk3u8yWO5VBWAbVjphjBtxr2TSSyXZAkvnk2qp3Lveh7/rpN8Z+zcTmun+V0dEovr0FA319Re/VGd/9u+xEub6yrYJNfTvs+83vft86HvC/pU81Kfehv3qZ+FqyHdl+pL5wAAAABJRU5ErkJggg=="},"3e9a":function(e,t,n){"use strict";n.r(t);var a=n("d79f"),o=n("c287");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("19b0");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"0173654b",null);t["default"]=r.exports},4027:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("159b");var o=a(n("5530")),i=a(n("b76a")),s=n("2f62"),r={props:{bgImg:{type:String,default:""}},computed:(0,o.default)((0,o.default)({},(0,s.mapState)("decorate",{pageList:function(e){return e.pageList},pageInfo:function(e){return e.pageInfo},currentModal:function(e){return e.currentModal},topItem:function(e){return e.topItem},copyComponent:function(e){return e.copyModal},onlyOne:function(e){return e.onlyOneComponent}})),{},{sortAbleList:{get:function(){return this.$store.state.decorate.sortAbleList},set:function(e){this.$store.state.decorate.sortAbleList=e}},pageList:{get:function(){return this.$store.state.decorate.pageList},set:function(e){this.$store.state.decorate.pageList=e}},pageId:function(){return this.$route.params.page}}),components:{draggable:i.default},methods:(0,o.default)((0,o.default)({},(0,s.mapMutations)("decorate",["changeFocus","copyModal","pastModal"])),{},{hasItem:function(e,t,n){var a=-1;return e.forEach((function(e,o){e[n]==t[n]&&(a=o)})),a},copy:function(){var e=this;this.onlyOne?this.$Message.error("无法复制该模板"):this.$nextTick((function(){e.copyModal((function(t){t&&e.$Message.success("复制成功")}))}))},past:function(){var e=this;if(!this.onlyOne)if(this.copyComponent){if(this.copyComponent.istop&&this.topItem.length){var t=this.hasItem(this.topItem,this.copyComponent,"id"),n="";if(t>-1?n="此元素最多允许添加1个":"followbar"!=this.copyComponent.id&&(1==this.topItem.length&&"followbar"!=this.topItem[0].id||this.topItem.length>1)&&(t=0,n="已有顶部固定元素，请删除后添加"),n)return void this.$Message["error"]({background:!0,content:n});if(this.copyComponent.max){var a=0;if(this.pageList.forEach((function(t){t.id==e.copyComponent.id&&(a+=1)})),a>=this.copyComponent.max)return void this.$Message["error"]({background:!0,content:"此元素最多允许添加".concat(this.copyComponent.max,"个")})}}this.pastModal(this.$route.params.page)}else this.$Message.error("请先复制一个模板")},onEnd:function(){this.$store.commit("decorate/mergeStortableListPageList")}}),filters:{sliceStr:function(e){return"string"==typeof e&&e.length>11?(e=e.substring(0,11)+"…",e):e}}};t.default=r},"5a18":function(e,t,n){"use strict";n("cc3d")},"61c7":function(e,t,n){"use strict";n.r(t);var a=n("34b24"),o=n("ed1e");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("35d3");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"a7d8f178",null);t["default"]=r.exports},"755f":function(e,t,n){"use strict";n.r(t);var a=n("4027"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"89d4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.onlyOne?e._e():a("div",{staticClass:"oper-panel",staticStyle:{overflow:"auto"}},[a("Input",{staticClass:"oper-panel-search",attrs:{prefix:"md-search",placeholder:"搜索组件名称 模糊搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("Collapse",{attrs:{simple:""},model:{value:e.openIndex,callback:function(t){e.openIndex=t},expression:"openIndex"}},e._l(e.pageItems,(function(t,o){return a("Panel",{directives:[{name:"show",rawName:"v-show",value:e.showComponents[o],expression:"showComponents[key]"}],key:o,attrs:{name:o,"hide-arrow":""}},[a("i",{staticClass:"ivu-icon icon-full-right iconfont"}),e._v(" "+e._s(t[0].groupName)+" "),a("div",{staticClass:"buttonGroup",attrs:{slot:"content"},slot:"content"},e._l(t,(function(t,i){return a("Button",{directives:[{name:"show",rawName:"v-show",value:e.showComponents[o]&&e.showComponents[o][i]&&!1!==t.show&&!0===e.permsChecker.cachePerms[t.type].showOperBtn,expression:"showComponents[key]&&showComponents[key][index]&&item.show!==false&&permsChecker.cachePerms[item.type].showOperBtn===true"}],key:i,staticClass:"oper-btn",attrs:{type:"primary"},on:{click:function(n){return e.clickBtn(t,o)}}},[t.svg?a("img",{staticClass:"btn-svg",attrs:{src:n("590d")("./"+t.svg+".svg"),alt:""}}):a("i",{staticClass:"btn-icon",class:t.icon,style:{color:t.color}}),e._v(" "+e._s(t.name)+" ")])})),1)])})),1),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.noResult,expression:"!noResult"}],staticClass:"no-result"},[a("i",{staticClass:"icon-fenxiao-leijiyongjin- iconfont"}),a("span",[e._v("暂无结果")])])],1)},o=[]},a267:function(e,t){e.exports="data:image/png;base64,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"},a6e8:function(e,t,n){},adfe:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.clickTmp=s;var o=a(n("5530")),i=a(n("4360"));function s(e,t){t?i.default.commit("decorate/changeFocus",{item:t,pageId:e}):i.default.commit("decorate/changeFocus",{item:(0,o.default)((0,o.default)({},i.default.state.decorate.pageInfo),{},{name:"海报设置"}),pageId:e})}},c287:function(e,t,n){"use strict";n.r(t);var a=n("03a7"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},cc3d:function(e,t,n){},d024:function(e,t,n){"use strict";n("1bc5")},d1e6:function(e,t,n){"use strict";n.r(t);var a=n("3247"),o=n("755f");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("5a18");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"6fd53634",null);t["default"]=r.exports},d585:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAgCAMAAABQMRQnAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFHRSTlMACQMOfxnfIEC/b++fj2BfMM+vT7CeTHgAAAFWSURBVEjHtZZbsoMgEETR4Y6ALzS9/7VemVBWiMEYKPsD+WiPLc9RL2pqpT6obZpWlSqPkI8VKo9pqSJrntRWhk0jt79i6UcwqWv6u+ijnV/KNePSo7fz+7qIbSGXRkSxOY5Eowq5tACjIeUnBuYUXMO14C52NWASrmQu406C3cFM6Qg3qpDL8u/ktCRd4JLAH7mdBesvXAMOTgYQrA7rGddoH81wIcxMGW4EWQSZ7R3wCdeLaRJzr9QK2BxXS0xxxt4JV4tJQ/R8K5933NoegCwyOuUaAF5aSWqBNcd9wAodkHVhsJyNr5fZ1dFMk6MclwAKVobdnGrAkOGm0+fo2zpbX0kd0CXc8n3R9dB7nzGmJ0/FPp6A4RnywVio6nxIwT1gRz2EB6mEW3VOqm6AiN3hxqg414X80Hr2h/v+6j1U5BP+/RdyPfamuuSeOurmuu+uOvUfgNAQKU9byBQAAAAASUVORK5CYII="},d79f:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"left"},[n("div",{staticClass:"modal-name",on:{click:e.goBack}},[n("Icon",{attrs:{type:"md-arrow-back"}}),e._v("返回 ")],1),n("div",{staticClass:"tabs"},e._l(e.getMenuTab,(function(t){return n("div",{key:t.id,staticClass:"tab",class:{on:e.checkId==t.id},on:{click:function(n){return e.clickTab(t.id)}}},[n("i",{staticClass:"iconfont tab-icon",class:t.icon}),n("span",{staticClass:"tab-name"},[e._v(e._s(t.name))])])})),0)]),n("div",{staticClass:"right"},[n("div",{staticClass:"btn-group"},e._l(e.getBtns,(function(t,a){return n("div",{key:a,class:"primary"==t.btntype?"btn-apply":"btn",on:{click:function(n){return e.clickBtn(t.id,t.action)}}},["pageSet"==t.id?n("i",{staticClass:"iconfont icon-zujian-yemianshezhi apply-icon pageSet-icon"}):e._e(),n("div",[e._v(e._s(t.name))]),"primary"==t.btntype?n("i",{staticClass:"iconfont icon-send apply-icon"}):e._e()])})),0)])])},o=[]},ed1e:function(e,t,n){"use strict";n.r(t);var a=n("39c5"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},f616:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getPage=c,t.setPage=u;var o=a(n("5530"));n("b0c0"),n("d3b7"),n("e9c4");var i=n("17fe"),s={},r={goodposter:10,commissionposter:20};function c(e){var t=this,n=e.pageId,a=void 0===n?"":n,r=e.type,c=void 0===r?"":r,u=e.tplId,d=void 0===u?"":u;s={pageId:a,type:c,tplId:d},d?"add"==c||""==c?this.$api.posterApi.getTempDetail({id:d}).then((function(e){if(0==e.error){t.pageInfo.title=e.data.name;var n=e.data.content;try{n=JSON.parse(n)}catch(o){n=[]}t.setPageList({list:n,pageId:a}),"followposter"==a&&t.clickTmp({id:"poster_pushsetting"}),t.clickTmp()}})):(this.loading=!0,this.$api.posterApi.editPoster({id:d}).then((function(e){if(0==e.error){var n=e.data.profile,r=n.content;s.id=n.id,s.tmpId=n.template_id;try{r=JSON.parse(r)}catch(c){r=[]}r=Array.isArray(r)?r:[],t.setPageList({list:r,pageId:a}),t.pageInfo.title=n.name,t.pageInfo.params={status:n.status},20==n.type?t.pageInfo.params=(0,o.default)((0,o.default)({},t.pageInfo.params),{},{linkid:n.visit_page}):30==n.type&&(t.pageInfo.keywords=n.keyword,t.pageInfo.params=(0,o.default)((0,o.default)({},t.pageInfo.params),{},{linkid:n.visit_page,expire_start_time:n.expire_start_time,expire_end_time:n.expire_end_time,expire_time:n.expire_time/24/3600,access_type:n.access_type}),t.asPageInfo.poster_pushsetting=(0,i.poster_pushsetting)(e),t.asPageInfo.poster_reward=(0,i.poster_reward)(e)),t.clickTmp()}})).finally((function(){setTimeout((function(){t.loading=!1}),500)}))):("/decorate/poster/followposter"==this.$route.path&&this.addModal({pageId:this.$route.params.page,list:[{id:"poster_pushsetting"},{id:"poster_reward"}]}),this.clickTmp())}function u(e,t){var n,a,i,c=s,u=c.pageId,d=void 0===u?"":u,l=c.type,p=void 0===l?"":l,f={name:this.pageInfo.title,visit_page:null===(n=this.pageInfo.params)||void 0===n?void 0:n.linkid,keyword:this.pageInfo.keywords,expire_start_time:this.pageInfo.params.expire_start_time,expire_end_time:this.pageInfo.params.expire_end_time,expire_time:this.pageInfo.params.expire_time,access_type:this.pageInfo.params.access_type,status:this.pageInfo.params.status||0},m={};if(null!==(a=this.asPageInfo)&&void 0!==a&&a.poster_pushsetting){var h,g=null===(h=this.asPageInfo)||void 0===h?void 0:h.poster_pushsetting;m={push_type:g.params.type,push_title:g.params.title,push_thumb:g.params.thumb,push_desc:g.params.content,push_url:g.params.linkurl,push_url_name:g.params.linkurl_name}}var A={};if(null!==(i=this.asPageInfo)&&void 0!==i&&i.poster_reward){var b,v,y,I=null===(b=this.asPageInfo)||void 0===b?void 0:b.poster_reward;A={award_status:I.params.open,rec_credit_enable:I.params.recommend.reward.indexOf("score")>-1?1:0,rec_cash_enable:I.params.recommend.reward.indexOf("cash")>-1?1:0,rec_coupon_enable:I.params.recommend.reward.indexOf("coupon")>-1?1:0,rec_credit:I.params.recommend.score.num,rec_credit_limit:I.params.recommend.score.limit,rec_cash:I.params.recommend.cash.num,rec_cash_limit:I.params.recommend.cash.limit,rec_cash_type:"balance"==I.params.recommend.cash.type?1:2,rec_coupon:null===(v=I.params.recommend.coupon.list[0])||void 0===v?void 0:v.id,rec_coupon_limit:I.params.recommend.coupon.limit,sub_credit_enable:I.params.follower.reward.indexOf("score")>-1?1:0,sub_cash_enable:I.params.follower.reward.indexOf("cash")>-1?1:0,sub_coupon_enable:I.params.follower.reward.indexOf("coupon")>-1?1:0,sub_credit:I.params.follower.score.num,sub_cash:I.params.follower.cash.num,sub_cash_type:"balance"==I.params.follower.cash.type?1:2,sub_coupon:null===(y=I.params.follower.coupon.list[0])||void 0===y?void 0:y.id}}var x=(0,o.default)((0,o.default)((0,o.default)((0,o.default)({type:r[d],thumb:t,template_id:s.tplId||0},f),m),A),{},{content:JSON.stringify(this.pageList)});return"publish"===e&&(x.status="1"),"edit"==p?(x.id=s.id,this.$api.posterApi.savePoster(x)):this.$api.posterApi.addPoster(x)}},f85f:function(e,t,n){"use strict";n.r(t);var a=n("89d4e"),o=n("238d");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("d024");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"24db67dc",null);t["default"]=r.exports},fb23:function(e,t){e.exports="data:image/png;base64,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"}}]);