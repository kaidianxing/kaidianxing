(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125],{3247:function(t,e,A){"use strict";A.d(e,"a",(function(){return n})),A.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticClass:"row relative w840"},[n("div",{staticClass:"diy-phone"},[n("div",{staticClass:"phone-body"},[n("div",{staticClass:"phone-title",class:[t.currentModal.id],on:{click:function(e){return t.changeFocus({item:t.pageInfo,pageId:t.$route.params.page})}}},[n("div",{staticClass:"phone-top"},[n("div",{staticClass:"custom-navbar",staticStyle:{width:"375px",height:"64px"},style:{background:t.pageInfo.params.navbgcolor}},[n("img",{staticStyle:{width:"375px",height:"20px",position:"absolute",top:"0",left:"0","z-index":"100"},attrs:{src:"white"==t.pageInfo.params.funbtncolor?A("fb23"):A("a267"),alt:""}}),"img"==t.pageInfo.params.navbgtype&&t.pageInfo.params.navbgimg?n("img",{staticClass:"navbgimg",attrs:{src:t.$media(t.pageInfo.params.navbgimg),alt:""}}):t._e(),n("img",{attrs:{src:A("white"==t.pageInfo.params.funbtncolor?"3db2":"d585"),alt:""}})])]),t.pageInfo.title?n("p",{staticClass:"page-title",style:{color:t.pageInfo.params.funbtncolor}},[t._v(t._s(t._f("sliceStr")(t.pageInfo.title)))]):"goods-detail"===t.pageId?n("p",{staticClass:"page-title page-title-left",style:{color:t.pageInfo.params.funbtncolor}},[t._v("2020年夏季新款韩版宽色短款...")]):t._e()]),n("div",{staticClass:"phone-main",class:{"phone-img-box":t.bgImg},style:{background:t.pageInfo.background_color||"#F4F6F8"},attrs:{id:"toCanvas"}},[t._t("top"),n("div",{staticStyle:{flex:"1",width:"100%","min-height":"100%"}},[t.bgImg?n("img",{staticClass:"phone-main-img",attrs:{src:t.bgImg}}):t._e(),n("draggable",{attrs:{options:{draggable:".drag-item"}},on:{end:t.onEnd},model:{value:t.sortAbleList,callback:function(e){t.sortAbleList=e},expression:"sortAbleList"}},[n("transition-group",{attrs:{name:"flip-list",tag:"div"}},[t._t("default")],2)],1)],1),n("div",{staticClass:"bottom-items",staticStyle:{width:"100%"}},[t._t("bottom")],2),t._t("fixed"),t.pageList.length?t._e():n("p",{staticStyle:{"text-align":"center","line-height":"400px"}},[t._v("您还没有添加任何元素")])],2)])])]),n("input",{attrs:{type:"text",id:"forFocus"},on:{keyup:[function(e){return(e.type.indexOf("key")||67===e.keyCode)&&e.ctrlKey?t.copy.apply(null,arguments):null},function(e){return(e.type.indexOf("key")||86===e.keyCode)&&e.ctrlKey?t.past.apply(null,arguments):null}]}})])},o=[]},"3db2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAgCAMAAABQMRQnAAAAb1BMVEUAAAAAAAB9fX3U1NRaWlr4+Pg/Pz9qamokJCT////////Jycnv7+/Ly8ugoKC1tbV2dnaGhobi4uL////8/Pyjo6Pk5OS/v7+/v7/z8/Pq6urc3NyKiopfX1/h4eH///+xsbGdnZ3d3d2Hh4f///8S8CgIAAAAJHRSTlMzADOZR+Y/TDMGAx7MjGYsLC8cEvIps4B/2b+mWTMgCXNmplmmfcUHAAABw0lEQVRIx7WW6XKrMAyFFXxt44UshEAIJG1uz/s/Y7FDKWbClDr0/MCekfyNkBeJNoP08XY6JLE6nMxRf8MGrsqTlF5Tmhg14eo8oTV0NXrMVbuU1lG6U9/ctz2tp/3bF1ctxIqFYPXg6h0t07+FfjvtuSaN5m6bukBhz5Mc546rrhTJFf/Ri28DQ6I6rqFIrqiB5i6orTgQhpxvSCexXAsu+ykDgogTTcc0klt57ADmYpzhIxmK5HL/7yJjPtIa2dh4o9MTgLTg7AfuFtx5cgDONcNlZOyoh/DgsLZ3RuaCOYun3AFkAfjcSvCRsaMG29Z6pwpOBdEFsHNc5sOEUz8LNi7kMu/E4PVYNR9v030LAP6QiSn3ECYN+PBfH6kFLnPcd1hP78SlW1mHeQj3rWV3F3bvLKpsNr8CEM6Vw8puLFEGTwTd6InubADOcekyJklAjo0m/l7IAmyYczQU3ov4e1wBpXzkmqMWk3u8yWO5VBWAbVjphjBtxr2TSSyXZAkvnk2qp3Lveh7/rpN8Z+zcTmun+V0dEovr0FA319Re/VGd/9u+xEub6yrYJNfTvs+83vft86HvC/pU81Kfehv3qZ+FqyHdl+pL5wAAAABJRU5ErkJggg=="},4027:function(t,e,A){var n=A("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,A("d3b7"),A("159b");var o=n(A("5530")),a=n(A("b76a")),i=A("2f62"),s={props:{bgImg:{type:String,default:""}},computed:(0,o.default)((0,o.default)({},(0,i.mapState)("decorate",{pageList:function(t){return t.pageList},pageInfo:function(t){return t.pageInfo},currentModal:function(t){return t.currentModal},topItem:function(t){return t.topItem},copyComponent:function(t){return t.copyModal},onlyOne:function(t){return t.onlyOneComponent}})),{},{sortAbleList:{get:function(){return this.$store.state.decorate.sortAbleList},set:function(t){this.$store.state.decorate.sortAbleList=t}},pageList:{get:function(){return this.$store.state.decorate.pageList},set:function(t){this.$store.state.decorate.pageList=t}},pageId:function(){return this.$route.params.page}}),components:{draggable:a.default},methods:(0,o.default)((0,o.default)({},(0,i.mapMutations)("decorate",["changeFocus","copyModal","pastModal"])),{},{hasItem:function(t,e,A){var n=-1;return t.forEach((function(t,o){t[A]==e[A]&&(n=o)})),n},copy:function(){var t=this;this.onlyOne?this.$Message.error("无法复制该模板"):this.$nextTick((function(){t.copyModal((function(e){e&&t.$Message.success("复制成功")}))}))},past:function(){var t=this;if(!this.onlyOne)if(this.copyComponent){if(this.copyComponent.istop&&this.topItem.length){var e=this.hasItem(this.topItem,this.copyComponent,"id"),A="";if(e>-1?A="此元素最多允许添加1个":"followbar"!=this.copyComponent.id&&(1==this.topItem.length&&"followbar"!=this.topItem[0].id||this.topItem.length>1)&&(e=0,A="已有顶部固定元素，请删除后添加"),A)return void this.$Message["error"]({background:!0,content:A});if(this.copyComponent.max){var n=0;if(this.pageList.forEach((function(e){e.id==t.copyComponent.id&&(n+=1)})),n>=this.copyComponent.max)return void this.$Message["error"]({background:!0,content:"此元素最多允许添加".concat(this.copyComponent.max,"个")})}}this.pastModal(this.$route.params.page)}else this.$Message.error("请先复制一个模板")},onEnd:function(){this.$store.commit("decorate/mergeStortableListPageList")}}),filters:{sliceStr:function(t){return"string"==typeof t&&t.length>11?(t=t.substring(0,11)+"…",t):t}}};e.default=s},"5a18":function(t,e,A){"use strict";A("cc3d")},"755f":function(t,e,A){"use strict";A.r(e);var n=A("4027"),o=A.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){A.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},a267:function(t,e){t.exports="data:image/png;base64,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"},cc3d:function(t,e,A){},d1e6:function(t,e,A){"use strict";A.r(e);var n=A("3247"),o=A("755f");for(var a in o)["default"].indexOf(a)<0&&function(t){A.d(e,t,(function(){return o[t]}))}(a);A("5a18");var i=A("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"6fd53634",null);e["default"]=s.exports},d585:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAgCAMAAABQMRQnAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFHRSTlMACQMOfxnfIEC/b++fj2BfMM+vT7CeTHgAAAFWSURBVEjHtZZbsoMgEETR4Y6ALzS9/7VemVBWiMEYKPsD+WiPLc9RL2pqpT6obZpWlSqPkI8VKo9pqSJrntRWhk0jt79i6UcwqWv6u+ijnV/KNePSo7fz+7qIbSGXRkSxOY5Eowq5tACjIeUnBuYUXMO14C52NWASrmQu406C3cFM6Qg3qpDL8u/ktCRd4JLAH7mdBesvXAMOTgYQrA7rGddoH81wIcxMGW4EWQSZ7R3wCdeLaRJzr9QK2BxXS0xxxt4JV4tJQ/R8K5933NoegCwyOuUaAF5aSWqBNcd9wAodkHVhsJyNr5fZ1dFMk6MclwAKVobdnGrAkOGm0+fo2zpbX0kd0CXc8n3R9dB7nzGmJ0/FPp6A4RnywVio6nxIwT1gRz2EB6mEW3VOqm6AiN3hxqg414X80Hr2h/v+6j1U5BP+/RdyPfamuuSeOurmuu+uOvUfgNAQKU9byBQAAAAASUVORK5CYII="},fb23:function(t,e){t.exports="data:image/png;base64,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"}}]);