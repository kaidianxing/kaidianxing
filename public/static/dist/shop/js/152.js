(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[152],{8005:function(t,a,i){"use strict";i.d(a,"a",(function(){return s})),i.d(a,"b",(function(){return e}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"chart-panel"},[i("Row",[i("i-col",{class:{checked:"order_pay_price"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("order_pay_price")}}},[i("div",{staticClass:"tit"},[t._v("成交总额(元)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.order_pay_price)))]),i("div",{staticClass:"box"})])]),i("i-col",{class:{checked:"order_pay"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("order_pay")}}},[i("div",{staticClass:"tit"},[t._v("订单数(件)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.order_pay)))]),i("div",{staticClass:"box"})])]),i("i-col",{class:{checked:"unit_price"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("unit_price")}}},[i("div",{staticClass:"tit"},[t._v("笔单价(元)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.unit_price)))]),i("div",{staticClass:"box"})])]),i("i-col",{class:{checked:"order_pay_member"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("order_pay_member")}}},[i("div",{staticClass:"tit"},[t._v("支付人数(人)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.order_pay_member)))]),i("div",{staticClass:"box"})])]),i("i-col",{class:{checked:"guest_unit_price"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("guest_unit_price")}}},[i("div",{staticClass:"tit"},[t._v("客单价(元)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.guest_unit_price)))]),i("div",{staticClass:"box"})])]),i("i-col",{class:{checked:"pv"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("pv")}}},[i("div",{staticClass:"tit"},[t._v("浏览量(PV)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.pv)))]),i("div",{staticClass:"box"})])]),i("i-col",{class:{checked:"uv"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("uv")}}},[i("div",{staticClass:"tit"},[t._v("独立访客(UV)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.uv)))]),i("div",{staticClass:"box"})])]),i("i-col",{class:{checked:"new_member"===t.type},attrs:{span:"3"}},[i("div",{staticClass:"inner",on:{click:function(a){return t.handleClick("new_member")}}},[i("div",{staticClass:"tit"},[t._v("新增会员(人)")]),i("div",{staticClass:"number"},[t._v(t._s(t.$utils.formatNumberData(t.data.new_member)))]),i("div",{staticClass:"box"})])])],1)],1)},e=[]},"834f":function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{data:{type:Object,default:function(){}},type:{type:String,default:"order_pay_price"}},data:function(){return{}},methods:{handleClick:function(t){this.$emit("on-change",t)}}};a.default=i},"8f76":function(t,a,i){"use strict";i.r(a);var s=i("8005"),e=i("e29e");for(var c in e)["default"].indexOf(c)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(c);i("ab5f");var n=i("2877"),r=Object(n["a"])(e["default"],s["a"],s["b"],!1,null,"3fb465de",null);a["default"]=r.exports},ab5f:function(t,a,i){"use strict";i("d4ca")},d4ca:function(t,a,i){},e29e:function(t,a,i){"use strict";i.r(a);var s=i("834f"),e=i.n(s);for(var c in s)["default"].indexOf(c)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(c);a["default"]=e.a}}]);