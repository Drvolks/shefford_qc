"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{77573:(t,e,n)=>{n.d(e,{A:()=>L});var i=n(95155),a=n(9816),r=n(95140),l=n(45309),o=n(77738),s=n(35761),d=n(86898),c=n(64665),u=n(63551),x=n(49234),h=n(42479),m=n(1521),v=n(24736),f=n(34883),p=n(51105),A=n(3698),g=n(21455),j=n.n(g),y=n(7266),b=n(93962);function L(t){var e,n,g,L,w,M,T,k;let C=(0,y.useTranslations)(),P=(0,y.useFormatter)(),I=(0,s.default)(),E=(0,d.A)(I.breakpoints.down("sm")),S=t.graphData.map(t=>{let[,e]=t;return null!=e?Number(e.toFixed(1)):null}),V=t.graphData.map(t=>{let[e]=t;return null!=e?j().unix(e).toDate():null}),D=null!==(e=t.graphMinValue)&&void 0!==e?e:Math.min(...S.filter(t=>null!=t)),_=null!==(n=t.graphMaxValue)&&void 0!==n?n:Math.max(...S.filter(t=>null!=t));function F(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{maximumFractionDigits:1};return"number"==typeof t?P.number(t,e):t}function N(t){return void 0===t?"":P.dateTime(j().unix(t).toDate(),{weekday:"short",hour:"numeric",minute:"2-digit"})}let z=null!==(g=t.formattedMinValue)&&void 0!==g?g:F(t.minValue),U=N(t.minTimestamp),K=null!==(L=t.formattedMaxValue)&&void 0!==L?L:F(t.maxValue),R=N(t.maxTimestamp),W=null!==(w=t.formattedSumValue)&&void 0!==w?w:F(t.sumValue),G=null!==(M=t.formattedAvgValue)&&void 0!==M?M:F(t.avgValue);return(0,i.jsxs)(c.A,{variant:"outlined",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(u.A,{title:t.cardTitle,action:t.metricUnit.length>0&&(0,i.jsx)(x.A,{variant:"outlined",size:"small",color:"info",label:t.metricUnit})}),(0,i.jsx)(h.A,{sx:E?{paddingY:0}:{},children:(0,i.jsxs)(m.default,{direction:"row",spacing:2,sx:{justifyContent:"flex-start"},children:[void 0!==z&&(0,i.jsxs)(m.default,{sx:{alignItems:"start"},children:[(0,i.jsx)(b.A,{icon:r.A,label:z}),(0,i.jsx)(v.A,{variant:"caption",sx:{color:"text.secondary"},children:U})]}),void 0!==K&&(0,i.jsxs)(m.default,{sx:{alignItems:"start"},children:[(0,i.jsx)(b.A,{icon:l.A,label:K}),(0,i.jsx)(v.A,{variant:"caption",sx:{color:"text.secondary"},children:R})]}),void 0!==G&&(0,i.jsxs)(m.default,{sx:{alignItems:"start"},children:[(0,i.jsx)(b.A,{icon:a.A,label:G}),(0,i.jsx)(v.A,{variant:"caption",sx:{color:"text.secondary"},children:null!==(T=t.avgLabel)&&void 0!==T?T:C("Labels.Average")})]}),void 0!==W&&(0,i.jsxs)(m.default,{sx:{alignItems:"start"},children:[(0,i.jsx)(b.A,{icon:o.A,label:W}),(0,i.jsx)(v.A,{variant:"caption",sx:{color:"text.secondary"},children:null!==(k=t.sumLabel)&&void 0!==k?k:C("Labels.Sum")})]})]})}),(0,i.jsxs)(f.A,{children:["line"===t.graphPlotType&&(0,i.jsx)(p.b,{grid:{horizontal:!E},series:[{data:S,showMark:!1,area:"wind"!==t.metricKind,color:I.palette.grey[200],curve:"wind"===t.metricKind?"step":"linear"}],xAxis:[{data:V,scaleType:"time"}],yAxis:[{min:D,max:_,tickInterval:"wind"===t.metricKind?[0,90,180,270,360]:"auto",valueFormatter:"wind"===t.metricKind?t=>{let e=(t+360)%360;return e>=337.5||e<22.5?C("CardinalPoints.North"):e>=22.5&&e<67.5?C("CardinalPoints.NorthEast"):e>=67.5&&e<112.5?C("CardinalPoints.East"):e>=112.5&&e<157.5?C("CardinalPoints.SouthEast"):e>=157.5&&e<202.5?C("CardinalPoints.South"):e>=202.5&&e<247.5?C("CardinalPoints.SouthWest"):e>=247.5&&e<292.5?C("CardinalPoints.West"):C("CardinalPoints.NorthWest")}:void 0}],height:E?100:300,margin:E?{top:4,right:4,bottom:4,left:4}:{},bottomAxis:E?null:void 0,leftAxis:E?null:void 0,slotProps:E?{popper:{placement:"top-end"}}:{}}),"bar"===t.graphPlotType&&(0,i.jsx)(A.E,{grid:{horizontal:!E},series:[{data:S,color:I.palette.grey[200]}],xAxis:[{data:V,scaleType:"band"}],yAxis:[{min:D,max:_}],height:E?100:300,margin:E?{top:4,right:4,bottom:4,left:4}:{},bottomAxis:E?null:void 0,leftAxis:E?null:void 0,slotProps:E?{popper:{placement:"top-end"}}:{}})]})]})}},93962:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(95155),a=n(24736);function r(t){return(0,i.jsxs)(a.A,{sx:{display:"flex",alignItems:"center"},children:[t.icon&&(0,i.jsx)(t.icon,{fontSize:"inherit",sx:{color:"text.secondary"}}),t.label]})}},81699:(t,e,n)=>{n.d(e,{A:()=>d});var i=n(95155),a=n(75436),r=n(96854),l=n(1396),o=n(93950),s=n(7266);function d(t){var e;let{data:n,isLoading:d,error:c,expectUndefinedData:u}=t,x=(0,s.useTranslations)();return d?(0,i.jsx)(a.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:(0,i.jsx)(r.A,{})}):null!==(e=!c&&void 0===n&&u)&&void 0!==e&&e?(0,i.jsx)(i.Fragment,{}):c||void 0===n?(0,i.jsx)(a.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:(0,i.jsxs)(l.A,{severity:"error",children:[(0,i.jsx)(o.A,{children:x("Global.DataLoadErrorTitle")}),"".concat(c||x("Global.DataLoadUnexpectedErrorMessage"))]})}):(0,i.jsx)(i.Fragment,{})}},69970:(t,e,n)=>{n.d(e,{NavigationProvider:()=>o,c:()=>l});var i=n(95155),a=n(12115);let r=(0,a.createContext)({title:"",setTitle:()=>{},subtitle:"",setSubtitle:()=>{}}),l=()=>(0,a.useContext)(r);function o(t){let{children:e}=t,[n,l]=(0,a.useState)(""),[o,s]=(0,a.useState)("");return(0,i.jsx)(r.Provider,{value:{title:n,setTitle:l,subtitle:o,setSubtitle:s},children:e})}},6574:(t,e,n)=>{n.d(e,{$N:()=>f,Fm:()=>x,Ts:()=>h,Xe:()=>c,bc:()=>u,k4:()=>m,ko:()=>v});var i=n(21455),a=n.n(i),r=n(31052),l=n.n(r),o=n(86679);a().extend(l());let s=async t=>{let e=await fetch(t);if(!e.ok){if(404===e.status)return;throw Error("Status code does not indicate success: ".concat(e.status))}return e.json()},d="/data";function c(){return(0,o.Ay)("".concat(d,"/global.json"),s)}function u(){return(0,o.Ay)("".concat(d,"/current.json"),s,{refreshInterval:a().duration(1,"minute").asMilliseconds()})}function x(){return(0,o.Ay)("".concat(d,"/week-to-date.json"),s,{refreshInterval:a().duration(1,"hour").asMilliseconds()})}function h(){return(0,o.Ay)("".concat(d,"/month-to-date.json"),s,{refreshInterval:a().duration(1,"hour").asMilliseconds()})}function m(t){return(0,o.Ay)("".concat(d,"/day-").concat(t,".json"),s,{refreshInterval:a().duration(1,"minute").asMilliseconds()})}function v(t){return(0,o.Ay)("".concat(d,"/month-").concat(t,".json"),s,{refreshInterval:a().duration(1,"day").asMilliseconds()})}function f(t){return(0,o.Ay)("".concat(d,"/year-").concat(t,".json"),s,{refreshInterval:a().duration(1,"day").asMilliseconds()})}},56706:(t,e,n)=>{function i(t){return["rainRate","rain","UV","ET"].includes(t)?"bar":"line"}function a(t){switch(t){case"windDir":return[0,360];case"windSpeed":case"windGust":case"rainRate":case"rain":case"lightning_strike_count":case"UV":return[0,void 0];default:return[void 0,void 0]}}n.d(e,{M:()=>i,h:()=>a})},9816:(t,e,n)=>{n.d(e,{A:()=>r});var i=n(95155),a=n(88241);let r=function(t){return(0,i.jsx)(a.A,{...t,viewBox:"0 0 24 24",children:(0,i.jsx)("g",{id:"average_24px",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",fillOpacity:"0.87",children:(0,i.jsx)("path",{d:"M12.4140625,12.6289062 L15.2265625,8 L17.7578125,8 L13.609375,14.2695312 L17.8867188,20.6796875 L15.3789062,20.6796875 L12.4492188,15.9335938 L9.51953125,20.6796875 L7,20.6796875 L11.2773438,14.2695312 L7.12890625,8 L9.63671875,8 L12.4140625,12.6289062 Z M8,4 L17,4 L17,6 L8,6 Z",fill:"#5F6368",fillRule:"nonzero"})})})}}}]);