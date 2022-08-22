(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[154],{"35f1f":function(t,e,a){"use strict";a("ff00")},"7c93":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"condition-comp"},[a("condition-title",{attrs:{title:"经营状况",text:t.$store.state.config.data.updateTimeText,"max-width":340},scopedSlots:t._u([{key:"tooltip",fn:function(){return[a("Form",{attrs:{"label-width":60}},[a("FormItem",{attrs:{label:"成交总额："}},[t._v("已支付订单总金额(不包括退款的金额)")]),a("FormItem",{attrs:{label:"订单数："}},[t._v("成交订单数 - 退款订单数")]),a("FormItem",{attrs:{label:"笔单价："}},[t._v("成交金额 / 订单数")]),a("FormItem",{attrs:{label:"支付人数："}},[t._v("订单的支付人数(需剔除在筛选时间段中全部退款的支付人数(部分退款算支付人数))")]),a("FormItem",{attrs:{label:"客单价："}},[t._v("成交金额 / 支付人数")]),a("FormItem",{scopedSlots:t._u([{key:"label",fn:function(){return[a("div",{staticClass:"top"},[t._v("浏览量：")]),a("div",{staticClass:"bottom",staticStyle:{"padding-right":"10px"}},[t._v("(PV)")])]},proxy:!0}])},[t._v(" 所有用户的访问页面数量总和(1个用户多个页面计多次，多次访问同1个页面计1次) ")]),a("FormItem",{scopedSlots:t._u([{key:"label",fn:function(){return[a("div",{staticClass:"top"},[t._v("独立访客：")]),a("div",{staticClass:"bottom",staticStyle:{"padding-right":"10px"}},[t._v("(UV)")])]},proxy:!0}])},[t._v(" 商城独立访客总人数(1天多次访问商城记1次） ")]),a("FormItem",{attrs:{label:"新增会员："}},[t._v("新增的注册会员人数")])],1)]},proxy:!0},{key:"right",fn:function(){return[a("div",{staticClass:"condition-title-right"},[a("RadioGroup",{staticClass:"chart-time-type",attrs:{type:"button"},on:{"on-change":t.changePeriod},model:{value:t.lineRequestParam.period,callback:function(e){t.$set(t.lineRequestParam,"period",e)},expression:"lineRequestParam.period"}},[a("Radio",{attrs:{label:"day",disabled:t.dayDisabled}},[t._v("日")]),a("Radio",{attrs:{label:"month"}},[t._v("月")]),a("Radio",{attrs:{label:"year"}},[t._v("年")])],1),a("DatePicker",{staticClass:"width-250",attrs:{type:"daterange",confirm:"","split-panels":"",placeholder:"时间",clearable:!1,options:t.dateOptions},on:{"on-change":t.changeDate,"on-ok":t.okDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]},proxy:!0}])}),a("div",{staticClass:"chart"},[t.chart.list.length?a("chart-panel",{attrs:{data:t.panelData,type:t.lineRequestParam.type},on:{"on-change":t.changePanel}}):t._e(),a("chart-line",{ref:"chart_line",attrs:{id:"operating_conditions","is-area-style":!0,data:t.chart.list,xAxis:t.chart.xAxis,yAxis:t.chart.yAxis,legend:t.chart.legend,"legend-style":t.chart.legendStyle,"area-style":t.chart.areaStyle,loading:t.chart.loading,grid:t.chart.grid},on:{chartLineMounted:t.chartLineMounted}})],1)],1)},i=[]},8219:function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("b0c0");var r=a("d1be"),s={components:{ConditionTitle:function(){return a.e(151).then(a.bind(null,"d0eb"))},ChartPanel:function(){return a.e(150).then(a.bind(null,"8f76"))},ChartLine:function(){return Promise.all([a.e(2),a.e(141)]).then(a.bind(null,"6ab3"))}},data:function(){return{date:[(0,r.formatDate)(new Date(new Date-2592e6),"yyyy-MM-dd"),(0,r.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd")],dateOptions:{disabledDate:function(t){return t.valueOf()>Date.now()-864e5}},panelData:{},dayDisabled:!1,yAxisConfig:{order_pay_price:{name:"成交总额",yAxis:"单位(元)"},order_pay:{name:"订单数",yAxis:"单位(件)"},unit_price:{name:"笔单价",yAxis:"单位(元)"},order_pay_member:{name:"支付人数",yAxis:"单位(人)"},guest_unit_price:{name:"客单价",yAxis:"单位(元)"},pv:{name:"浏览量PV",yAxis:"单位(次)"},uv:{name:"独立访客UV",yAxis:"单位(人)"},new_member:{name:"新增会员",yAxis:"单位(人)"}},lineRequestParam:{start_date:(0,r.formatDate)(new Date(new Date-2592e6),"yyyy-MM-dd"),end_date:(0,r.formatDate)(new Date(new Date-864e5),"yyyy-MM-dd"),period:"day",type:"order_pay_price"},chart:{data:{},list:[],xAxis:[],yAxis:{name:"单位(元)",minInterval:1},legend:["成交总额"],legendStyle:{right:"50",top:"25"},grid:{left:80,right:50},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#4A67FF"},{offset:1,color:"rgba(74, 103, 255, 0.1)"}],global:!1}},loading:!1}}},created:function(){this.getManageOverview(),this.getLineData()},methods:{getManageOverview:function(){var t=this;this.$api.homeApi.getManageOverview({start_date:this.lineRequestParam.start_date,end_date:this.lineRequestParam.end_date}).then((function(e){0===e.error&&(t.panelData=(0,i.default)({},e.data))}))},getLineData:function(){var t=this;this.chart.loading=!0,this.$api.homeApi.getLineData(this.lineRequestParam).then((function(e){t.chart.loading=!1,0===e.error&&(t.chart.data=e.data,t.formatChart())}))},changePanel:function(t){this.lineRequestParam.type=t,this.getLineData()},changePeriod:function(){this.getLineData()},changeDate:function(t){this.lineRequestParam.start_date=t[0],this.lineRequestParam.end_date=t[1]},okDate:function(){this.dealDate(),this.getManageOverview(),this.getLineData()},dealDate:function(){new Date(this.lineRequestParam.end_date)-new Date(this.lineRequestParam.start_date)>15552e6?(this.dayDisabled=!0,"day"===this.lineRequestParam.period&&(this.lineRequestParam.period="month")):this.dayDisabled=!1},chartLineMounted:function(){var t=this;this.$nextTick((function(){var e;null===(e=t.$refs["chart_line"])||void 0===e||e.render()}))},formatChart:function(){var t=this;this.chart.xAxis=this.chart.data.map((function(t){return t.period})),this.chart.list=this.chart.data.map((function(t){return t.count})),this.chart.legend=[this.yAxisConfig[this.lineRequestParam.type].name],this.chart.yAxis.name=this.yAxisConfig[this.lineRequestParam.type].yAxis,this.$nextTick((function(){var e;null===(e=t.$refs["chart_line"])||void 0===e||e.render()}))}}};e.default=s},d41a:function(t,e,a){"use strict";a.r(e);var n=a("8219"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},fc1c:function(t,e,a){"use strict";a.r(e);var n=a("7c93"),i=a("d41a");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("35f1f");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"05201201",null);e["default"]=o.exports},ff00:function(t,e,a){}}]);