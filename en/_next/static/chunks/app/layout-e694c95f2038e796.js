(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{62489:(e,t,n)=>{Promise.resolve().then(n.bind(n,16269)),Promise.resolve().then(n.bind(n,1521)),Promise.resolve().then(n.bind(n,89142)),Promise.resolve().then(n.bind(n,64527)),Promise.resolve().then(n.bind(n,43226)),Promise.resolve().then(n.bind(n,35761)),Promise.resolve().then(n.bind(n,49757)),Promise.resolve().then(n.bind(n,12884)),Promise.resolve().then(n.bind(n,12806)),Promise.resolve().then(n.bind(n,76536)),Promise.resolve().then(n.bind(n,30620)),Promise.resolve().then(n.bind(n,85129)),Promise.resolve().then(n.bind(n,72004)),Promise.resolve().then(n.bind(n,41129)),Promise.resolve().then(n.bind(n,36799)),Promise.resolve().then(n.bind(n,11769)),Promise.resolve().then(n.bind(n,89283)),Promise.resolve().then(n.bind(n,1297)),Promise.resolve().then(n.bind(n,66307)),Promise.resolve().then(n.bind(n,14413)),Promise.resolve().then(n.bind(n,11077)),Promise.resolve().then(n.bind(n,42989)),Promise.resolve().then(n.bind(n,94969)),Promise.resolve().then(n.bind(n,87303)),Promise.resolve().then(n.bind(n,39063)),Promise.resolve().then(n.bind(n,90293)),Promise.resolve().then(n.bind(n,24761)),Promise.resolve().then(n.bind(n,16031)),Promise.resolve().then(n.bind(n,981)),Promise.resolve().then(n.bind(n,85619)),Promise.resolve().then(n.bind(n,94509)),Promise.resolve().then(n.bind(n,9183)),Promise.resolve().then(n.t.bind(n,33775,23)),Promise.resolve().then(n.bind(n,37782)),Promise.resolve().then(n.bind(n,94543)),Promise.resolve().then(n.bind(n,33221)),Promise.resolve().then(n.bind(n,87882)),Promise.resolve().then(n.bind(n,69970)),Promise.resolve().then(n.bind(n,61789)),Promise.resolve().then(n.bind(n,46067))},37782:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var r=n(95155),i=n(6574),o=n(1046);function s(){let{data:e,isLoading:t,error:n}=(0,i.Xe)();return!t&&!n&&e&&e.meta.googleAnalyticsId.length>0?(0,r.jsx)(o.GoogleAnalytics,{gaId:e.meta.googleAnalyticsId}):(0,r.jsx)(r.Fragment,{})}},94543:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(95155),i=n(6574),o=n(24736),s=n(66656);function l(){let{data:e,isLoading:t,error:n}=(0,i.Xe)();return t||n||!e?(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)(o.A,{mt:2,variant:"caption",sx:{color:"text.secondary"},children:[(0,r.jsx)(s.A,{href:"https://github.com/bourquep/weewx-me.teo",target:"_blank",children:e.meta.skin})," | ",(0,r.jsx)(s.A,{href:"https://github.com/weewx/weewx",target:"_blank",children:e.meta.generator})]})}},33221:(e,t,n)=>{"use strict";n.d(t,{default:()=>g});var r=n(95155),i=n(69970),o=n(6574),s=n(92483),l=n(35761),a=n(86898),d=n(89142),c=n(1521),h=n(11451),u=n(46805),v=n(75436),m=n(24736),x=n(96854),f=n(7026),b=n(5480),j=n(894),p=n(7266),P=n(76046),A=n(12115);function g(){let e=(0,l.default)(),t=(0,a.A)(e.breakpoints.down("sm")),{data:n,isLoading:s,error:j}=(0,o.Xe)(),{title:g,subtitle:y}=(0,i.c)(),C=(0,P.useRouter)(),M=(0,p.useTranslations)(),[T,I]=(0,A.useState)(null),O=e=>{I(e.currentTarget)},S=()=>{I(null)},W=e=>{S(),C.push(e)},E=(0,d.default)("div")(e=>{let{theme:t}=e;return t.mixins.toolbar});return(0,r.jsxs)(c.default,{children:[(0,r.jsx)(h.A,{children:(0,r.jsx)(u.A,{children:s||j||!n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.A,{flexGrow:1}),(0,r.jsxs)(m.A,{variant:"caption",color:"error",children:[s&&(0,r.jsx)(x.A,{}),j&&"Error loading data",!s&&!j&&!n&&"No data available"]}),(0,r.jsx)(v.A,{flexGrow:1})]}):t?(0,r.jsx)(w,{data:n,title:g,subtitle:y,openMenu:O,onCloseMenu:S}):(0,r.jsx)(k,{data:n,title:g,subtitle:y,openMenu:O,onCloseMenu:S})})}),(0,r.jsxs)(f.A,{anchorEl:T,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!T,onClose:S,children:[(0,r.jsx)(b.A,{onClick:()=>W("/"),children:M("Current.PageTitle")}),(0,r.jsx)(b.A,{onClick:()=>W("/week-to-date"),children:M("WeekToDate.PageTitle")}),(0,r.jsx)(b.A,{onClick:()=>W("/month-to-date"),children:M("MonthToDate.PageTitle")}),(0,r.jsx)(b.A,{onClick:()=>W("/day"),children:M("Day.PageTitle")}),(0,r.jsx)(b.A,{onClick:()=>W("/month"),children:M("Month.PageTitle")}),(0,r.jsx)(b.A,{onClick:()=>W("/year"),children:M("Year.PageTitle")})]}),(0,r.jsx)(E,{})]})}function w(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.default,{sx:{minWidth:0,flex:1},children:[(0,r.jsxs)(c.default,{direction:"row",children:[(0,r.jsx)(m.A,{variant:"h6",component:"div",noWrap:!0,sx:{textOverflow:"ellipsis",overflow:"hidden"},children:e.data.station.location}),(0,r.jsx)(v.A,{flexGrow:1}),(0,r.jsx)(j.A,{size:"small",onClick:e.openMenu,children:(0,r.jsx)(s.A,{fontSize:"inherit"})})]}),(0,r.jsxs)(c.default,{direction:"row",children:[(0,r.jsx)(m.A,{variant:"caption",component:"div",noWrap:!0,sx:{textOverflow:"ellipsis",overflow:"hidden"},children:e.subtitle}),(0,r.jsx)(v.A,{flexGrow:1}),(0,r.jsx)(m.A,{variant:"caption",component:"div",noWrap:!0,sx:{textOverflow:"ellipsis",overflow:"hidden",cursor:"pointer"},onClick:e.openMenu,children:e.title})]})]})})}function k(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.default,{sx:{minWidth:0,flex:1},children:[(0,r.jsx)(m.A,{variant:"h6",component:"div",noWrap:!0,sx:{textOverflow:"ellipsis",overflow:"hidden"},children:e.data.station.location}),(0,r.jsx)(m.A,{variant:"caption",component:"div",noWrap:!0,sx:{textOverflow:"ellipsis",overflow:"hidden"},children:"".concat(e.data.station.latitude,", ").concat(e.data.station.longitude,", ").concat(e.data.station.altitude)})]}),(0,r.jsxs)(c.default,{textAlign:"end",alignItems:"flex-end",sx:{minWidth:0,cursor:"pointer"},onClick:e.openMenu,children:[(0,r.jsx)(m.A,{variant:"h6",component:"div",noWrap:!0,sx:{textOverflow:"ellipsis",overflow:"hidden"},children:e.title}),(0,r.jsx)(m.A,{variant:"caption",component:"div",noWrap:!0,sx:{textOverflow:"ellipsis",overflow:"hidden"},children:e.subtitle})]}),(0,r.jsx)(j.A,{size:"large",onClick:e.openMenu,children:(0,r.jsx)(s.A,{fontSize:"inherit"})})]})}},87882:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var r=n(95155),i=n(67663),o=n(16847);function s(e){let{children:t,locale:n}=e;return(0,r.jsx)(i.$,{dateAdapter:o.R,adapterLocale:n,children:t})}n(83552),n(34026),n(82855)},69970:(e,t,n)=>{"use strict";n.d(t,{NavigationProvider:()=>l,c:()=>s});var r=n(95155),i=n(12115);let o=(0,i.createContext)({title:"",setTitle:()=>{},subtitle:"",setSubtitle:()=>{}}),s=()=>(0,i.useContext)(o);function l(e){let{children:t}=e,[n,s]=(0,i.useState)(""),[l,a]=(0,i.useState)("");return(0,r.jsx)(o.Provider,{value:{title:n,setTitle:s,subtitle:l,setSubtitle:a},children:t})}},61789:(e,t,n)=>{"use strict";n.d(t,{StaticNextIntlClientProvider:()=>s});var r=n(95155),i=n(7266),o=n(12115);function s(e){let{locale:t,messages:n,children:s}=e,[l,a]=(0,o.useState)("UTC");return(0,o.useEffect)(()=>{a(Intl.DateTimeFormat().resolvedOptions().timeZone)},[]),(0,r.jsx)(i.NextIntlClientProvider,{locale:t,timeZone:l,messages:n,children:s})}},6574:(e,t,n)=>{"use strict";n.d(t,{$N:()=>f,Fm:()=>u,Ts:()=>v,Xe:()=>c,bc:()=>h,k4:()=>m,ko:()=>x});var r=n(21455),i=n.n(r),o=n(31052),s=n.n(o),l=n(86679);i().extend(s());let a=async e=>{let t=await fetch(e);if(!t.ok){if(404===t.status)return;throw Error("Status code does not indicate success: ".concat(t.status))}return t.json()},d="/data";function c(){return(0,l.Ay)("".concat(d,"/global.json"),a)}function h(){return(0,l.Ay)("".concat(d,"/current.json"),a,{refreshInterval:i().duration(1,"minute").asMilliseconds()})}function u(){return(0,l.Ay)("".concat(d,"/week-to-date.json"),a,{refreshInterval:i().duration(1,"hour").asMilliseconds()})}function v(){return(0,l.Ay)("".concat(d,"/month-to-date.json"),a,{refreshInterval:i().duration(1,"hour").asMilliseconds()})}function m(e){return(0,l.Ay)("".concat(d,"/day-").concat(e,".json"),a,{refreshInterval:i().duration(1,"minute").asMilliseconds()})}function x(e){return(0,l.Ay)("".concat(d,"/month-").concat(e,".json"),a,{refreshInterval:i().duration(1,"day").asMilliseconds()})}function f(e){return(0,l.Ay)("".concat(d,"/year-").concat(e,".json"),a,{refreshInterval:i().duration(1,"day").asMilliseconds()})}},46067:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var r=n(29428),i=n(23872),o=n(14826),s=n(35651);let l=(0,o.A)({typography:{fontFamily:"var(--font-roboto)"},palette:{primary:{main:r.A[400]},secondary:{main:"#da3b26"},grey:i.A},colorSchemes:{light:!0,dark:!0},cssVariables:!0}),a=l=(0,s.A)(l)}},e=>{var t=t=>e(e.s=t);e.O(0,[122,870,126,673,441,517,358],()=>t(62489)),_N_E=e.O()}]);