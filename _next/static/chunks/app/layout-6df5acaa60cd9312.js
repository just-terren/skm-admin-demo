(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1556:function(e,t,n){Promise.resolve().then(n.bind(n,3490)),Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.t.bind(n,9646,23))},6074:function(e){e.exports={output:"export",basePath:"/skm-admin-demo"}},3490:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(7437),a=n(2265);let o=(0,a.memo)(function(e){let{onHeightChange:t}=e,n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=new ResizeObserver(e=>{e.forEach(e=>{null==t||t(e.borderBoxSize[0].blockSize)})});return n.current&&e.observe(n.current),()=>{e.disconnect()}},[t]),(0,r.jsx)("div",{className:"sticky top-0 bg-slate-50 px-7 py-4",ref:n,children:(0,r.jsx)("div",{className:"py-1 text-xl",children:"SKM派報設定中台"})})});var s=n(4033),c=n(6074),l=n.n(c);let i=()=>{let e=(0,s.usePathname)(),t=(0,a.useCallback)(t=>"".concat(l().basePath?l().basePath:"").concat(t)===e,[e]);return(0,a.useMemo)(()=>({isHrefActive:t}),[t])};var u=n(153),f=n(2744),p=n.n(f),m=n(1396),d=n.n(m);let h=Object.values(u.v),v=(0,a.memo)(function(e){let{className:t}=e,{isHrefActive:n}=i();return(0,r.jsx)("div",{className:p()("flex flex-col gap-4 bg-slate-50 p-4 pt-14",t),children:h.map(e=>{let{href:t,name:a}=e;return(0,r.jsx)(d(),{className:p()("text-sm",{"font-bold":n(t)}),href:t,children:a},t)})})});var x=(0,a.memo)(function(e){let{children:t}=e,[n,s]=(0,a.useState)(60);return(0,r.jsxs)("div",{className:"flex flex-col divide-y",children:[(0,r.jsx)(o,{onHeightChange:s}),(0,r.jsxs)("div",{className:"flex grow divide-x",style:{height:"calc(100dvh - ".concat(n,"px)")},children:[(0,r.jsx)(v,{className:"shrink-0"}),(0,r.jsx)("div",{className:"grow overflow-auto px-6 py-12",children:t})]})]})})},153:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});let r={rptSchedule:{href:"/RPTschedule",name:"新增訂閱"},rptDataMng:{href:"/RPTData-mng",name:"派報排程管理"},mapRptDataMng:{href:"/MapRPTData-mng",name:"派報群組管理"},odGroupDataMng:{href:"/ODGroupData-mng",name:"收件群組管理"}}},3385:function(){},9646:function(e){e.exports={style:{fontFamily:"'__Inter_fb0cbc', '__Inter_Fallback_fb0cbc'",fontStyle:"normal"},className:"__className_fb0cbc"}},4033:function(e,t,n){e.exports=n(5313)},2744:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}(n)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[176,971,938,744],function(){return e(e.s=1556)}),_N_E=e.O()}]);