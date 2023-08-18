"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56668,36655,96591,28026,27503,10312,69440],{70642:function(e,t,n){n.r(t),n.d(t,{AiSearch:function(){return b}});var r=n(87394),o=n(52322),a=n(79400),i=n(9823),s=n(62767),c=function(e){var t=e.defaultHandleClick,n=e.openModal,r=(0,i.D)().isBrandSstk,o=(0,s.av)().data;return!r||(null==o?void 0:o.totalNumSubscriptionsActive)?{handleOnClick:t,hasFeatureGate:!1}:{handleOnClick:n,hasFeatureGate:!0}},l=n(52309),u=n(73017),d=n(25237),h=n.n(d),p=n(2784),m=n(80638),f=h()(function(){return Promise.all([n.e(27310),n.e(81503),n.e(76412),n.e(28903),n.e(66198),n.e(88249),n.e(22653),n.e(97993),n.e(97361),n.e(440),n.e(37546),n.e(53959),n.e(71950)]).then(n.bind(n,75451)).then(function(e){return e.FilterModal})},{loadableGenerated:{webpack:function(){return[75451]}},ssr:!1}),v=h()(function(){return Promise.all([n.e(27310),n.e(81503),n.e(23846),n.e(37546),n.e(87321)]).then(n.bind(n,7654)).then(function(e){return e.FeatureGateModal})},{loadableGenerated:{webpack:function(){return[7654]}},ssr:!1}),b=function(){var e=(0,r.Z)((0,p.useState)(0),2),t=e[0],n=e[1],i=(0,r.Z)((0,p.useState)(!1),2),s=i[0],d=i[1],h=(0,u.t)({setScrollY:n}),b=h.anchorEl,g=h.handleClick,x=h.handleClose,y=(0,a.l)(),Z=Boolean(b),C=c({defaultHandleClick:g,openModal:function(){return d(!0)}}),k=C.hasFeatureGate,w=C.handleOnClick,j=(0,l.B)(Z);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.s,{onClick:w,isActive:y}),k?s&&(0,o.jsx)(v,{isModalOpen:s,closeModal:function(){return d(!1)}}):j&&(0,o.jsx)(f,{anchorEl:b,isOpen:Z,handleClose:x,scrollY:t})]})}},80638:function(e,t,n){n.d(t,{s:function(){return Z}});var r=n(47842),o=n(70865),a=n(96670),i=n(52322),s=n(47746),c=n(32162),l=n(75),u=n(58287),d=n(59877),h=n(8740),p=function(e){var t=e.t;return{title:t("tour:ai_search_heading"),description:t("tour:ai_search_description"),close:t("common:actions_close")}},m=(0,h.ZL)()(function(e){var t=e.typography,n=e.tokens.fontSize,r=e.zIndex;return{title:{fontWeight:t.fontWeightBold,fontSize:n.m},body:{fontSize:n.s},popper:{zIndex:r.speedDial}}}),f=function(){var e=p({t:(0,d.$G)(l.WBN).t}),t=(0,s.Z)().spacing,n=[-(0,u.C)(t(5)),(0,u.C)(t(3))],r=m().classes;return(0,i.jsx)(c.Oj,{name:"aiSearch",delay:1e3,steps:[{title:(0,i.jsx)("span",{className:r.title,children:e.title}),selector:"[data-tour-stop=ai-search-button]",placement:"bottom-start",body:(0,i.jsx)("span",{className:r.body,children:e.description}),offset:n,primaryActionLabel:e.close,primaryAction:c.$Y}],styleOverrides:{popper:r.popper}})},v=n(66358),b=n(58603),g=n(776),x=n(47999),y=(0,h.ZL)()(function(e,t){var n=e.palette,r=e.tokens,o=r.color,a=r.border,i=r.spacing,s=t.isActive;return{actionTooltip:{display:"block",width:"100%"},outlined:{borderColor:n.border1Color,borderRadius:a.radius["rounded-button"],"&:hover":{borderRadius:a.radius["rounded-button"]},"&&":{padding:i.base}},root:{width:i.xl,minWidth:i.xl,height:i.m,minHeight:i.m,background:s?n.brandAccent.main:n.common.white,"& .MuiSvgIcon-root":{fill:s?n.common.white:n.brandAccent.secondary},"&:hover":{background:n.brandAccent.main,"& .MuiSvgIcon-root":{fill:n.common.white}}},overlay:{"&&":{width:i.l,minWidth:i.l,height:i.m,minHeight:i.m}},outlinedOverlay:{"&&":{padding:"9px",boxShadow:"0 0 0 ".concat("5px"," ").concat(o["black-38"])},"&:hover":{boxShadow:"0 0 0 ".concat("5px"," ").concat(n.background.default)}}}}),Z=function(e){var t=e.isActive,n=e.isOverlay,s=e.onClick,c=e.withTourTooltip,u=e.disableAnalytics,h=y({isActive:t}),p=h.classes,m=h.cx,Z={aiPoweredSearchLabel:(0,({t:(0,d.$G)(l.WuT).t}).t)("ai-search-title")}.aiPoweredSearchLabel;return(0,i.jsxs)(g.Mp,{value:v.Yii,children:[(0,i.jsx)(x.z,(0,a.Z)((0,o.Z)({classes:{root:m(p.root,(0,r.Z)({},p.overlay,n)),outlined:m(p.outlined,(0,r.Z)({},p.outlinedOverlay,n))},"aria-label":Z,onClick:s,size:"small",variant:"outlined","data-tour-stop":"ai-search-button"},!u&&{labelTrack:"aiSearch"}),{children:(0,i.jsx)(b.X,(0,o.Z)({},n&&{style:{width:"18px"}}))})),c&&(0,i.jsx)(f,{})]})};Z.defaultProps={isActive:!1,onClick:function(){},withTourTooltip:!1,disableAnalytics:!1}},59312:function(e,t,n){n.d(t,{l:function(){return b}});var r=n(47842),o=n(70865),a=n(96670),i=n(26297),s=n(87394),c=n(52322),l=n(67550),u=n(91609),d=n(776),h=n(25237),p=n.n(h),m=n(2784),f=(0,n(8740).ZL)()(function(e){var t=e.palette,n=e.tokens.color,r=t.mode===u.oc.DARK,o=r?n["white-96"]:n.gray["onyx-87"];return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle"},popper:{pointerEvents:"all"},tooltip:{"&&":{color:r?t.common.black:t.common.white,backgroundColor:o}},arrow:{"&&":{color:o}},tooltipHidden:{"&&":{visibility:"hidden"}}}}),v=p()(function(){return Promise.all([n.e(27310),n.e(55199),n.e(23883),n.e(71169)]).then(n.bind(n,97415))},{loadableGenerated:{webpack:function(){return[97415]}},ssr:!1}),b=function(e){var t=e.className,n=e.tooltipClassName,u=e.children,h=e.title,p=e.isHidden,b=e.analyticsEventLabel,g=e.onMouseEnter,x=(0,i.Z)(e,["className","tooltipClassName","children","title","isHidden","analyticsEventLabel","onMouseEnter"]),y=f(),Z=y.classes,C=y.cx,k=(0,s.Z)((0,m.useState)(!1),2),w=k[0],j=k[1],S=(0,s.Z)((0,m.useState)(!1),2),B=S[0],A=S[1],L=(0,d.yh)().analytics,_=(0,d.wU)();return(0,m.useEffect)(function(){A(!0)},[w]),(0,c.jsx)(c.Fragment,{children:h?(0,c.jsx)(l.Z,{className:C(Z.root,t),onMouseEnter:function(e){j(!0),g?g(e):b&&L.hover({pageSection:_,eventLabel:b})},onClick:function(){b&&L.click({pageSection:_,eventLabel:b})},children:B&&(0,c.jsx)(v,(0,a.Z)((0,o.Z)({disableInteractive:!0,title:h,"data-automation":h,classes:{tooltip:C(Z.tooltip,n,(0,r.Z)({},Z.tooltipHidden,p)),arrow:Z.arrow,popper:Z.popper}},x),{children:u}))||u}):(0,c.jsx)(c.Fragment,{children:u})})}},32162:function(e,t,n){n.d(t,{Oj:function(){return x},$Y:function(){return b}});var r=n(47842),o=n(70865),a=n(96670),i=n(87394),s=n(52322),c=n(94909),l=n(13271),u=n(2784),d=n(55199),h=n(35744),p=n(67550),m=n(47999),f=(0,n(8740).ZL)()(function(e){var t=e.tokens,n=t.border,r=t.color,o=t.spacing;return{popper:{zIndex:e.zIndex.modal,"&[x-out-of-boundaries]":{display:"none"}},tooltip:{position:"relative",maxWidth:220,padding:o.base,margin:o.s,color:r.white,background:r.blue.azure,borderRadius:n.radius.xl,boxShadow:"none"},arrow:{height:o.m,width:o.m,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"},'[data-popper-placement*="left"] &':{"&":{right:0,marginRight:"-".concat(o.s),"&::before":{borderWidth:"1em 0 1em 1em",borderColor:"transparent transparent transparent ".concat(r.blue.azure)}}},'[data-popper-placement*="bottom"] &':{"&":{top:0,marginTop:"-".concat(o.s),"&::before":{borderWidth:"0 1em 1em 1em",borderColor:"transparent transparent ".concat(r.blue.azure," transparent")}}},'[data-popper-placement*="top"] &':{"&":{bottom:0,left:0,marginBottom:"-".concat(o.s),"&::before":{borderWidth:"1em 1em 0 1em",borderColor:"".concat(r.blue.azure," transparent transparent transparent")}}},'[data-popper-placement*="right"] &':{"&":{left:0,marginLeft:"-".concat(o.s),"&::before":{borderWidth:"1em 1em 1em 0",borderColor:"transparent ".concat(r.blue.azure," transparent transparent")}}}},body:{margin:"".concat(o.s," 0")},primaryButton:{color:"currentColor",borderColor:"currentColor"},secondaryButton:{color:"currentColor",borderColor:"transparent",fontWeight:"normal"}}}),v=function(e){var t=e.analyticsLabels,n=e.anchorEl,r=e.arrowRef,o=e.placement,a=e.title,i=e.body,c=e.offset,l=e.setArrowRef,u=e.primaryActionLabel,v=e.secondaryActionLabel,b=e.primaryAction,g=e.secondaryAction,x=e.next,y=e.done,Z=e.dataAutomation,C=void 0===Z?"tourComponent":Z,k=e.styleOverrides,w=f().classes;return(0,s.jsxs)(d.Z,{open:!0,className:(void 0===k?{}:k).popper||w.popper,anchorEl:n,modifiers:[{name:"offset",enabled:!0,options:{offset:void 0===c?[0,8]:c}},{name:"arrow",enabled:!0,options:{element:r}}],placement:o,"data-automation":"".concat(C,"_popper"),children:[(0,s.jsx)("div",{ref:l,className:w.arrow}),(0,s.jsxs)(h.Z,{className:w.tooltip,children:[a,(0,s.jsx)(p.Z,{className:w.body,children:i}),(0,s.jsxs)(p.Z,{children:[u&&(0,s.jsx)(m.z,{size:"small",variant:"outlined",className:w.primaryButton,"data-automation":"".concat(C,"_button_").concat(u),clickTrack:null==t?void 0:t.primaryAction,onClick:function(){return b&&b({next:x,done:y})},children:u}),v&&(0,s.jsx)(m.z,{size:"small",variant:"outlined",className:w.secondaryButton,"data-automation":"".concat(C,"_button_").concat(v),clickTrack:null==t?void 0:t.secondaryAction,onClick:function(){return g&&g({next:x,done:y})},children:v})]})]})]})},b=function(e){return(0,e.done)()},g=function(e){var t=(0,l._)("onboarding",void 0),n=t.storedValue,i=t.setValue;return{isComplete:Boolean(null==n?void 0:n[e]),finish:(0,u.useCallback)(function(){i((0,a.Z)((0,o.Z)({},n),(0,r.Z)({},e,Date.now())))},[i,n,e])}},x=function(e){var t=e.analyticsLabels,n=e.delay,r=void 0===n?2e3:n,o=e.name,a=e.steps,l=e.styleOverrides,d=g(o),h=d.isComplete,p=d.finish,m=(0,i.Z)((0,u.useState)(),2),f=m[0],b=m[1],x=(0,i.Z)((0,u.useState)(),2),y=x[0],Z=x[1],C=(0,i.Z)((0,u.useState)(0),2),k=C[0],w=C[1],j=(0,i.Z)((0,u.useState)(!r),2),S=j[0],B=j[1],A=(0,c.d)({breakpoint:"md"});(0,u.useEffect)(function(){k<a.length&&Z(document.querySelector(a[k].selector))},[k,a]),(0,u.useEffect)(function(){S||setTimeout(function(){B(!0)},r)},[r,S,B]);var L=(0,u.useCallback)(function(){return w(k+1)},[k,w]),_=(0,u.useCallback)(function(){w(a.length),p()},[w,p,a.length]);if(h||!S||!y||!a[k]||A)return null;var T=a[k],I=T.title,M=T.body,z=T.offset,R=T.placement,V=T.primaryActionLabel,N=T.secondaryActionLabel,F=T.primaryAction,H=T.secondaryAction;return(0,s.jsx)(v,{analyticsLabels:t,anchorEl:y,arrowRef:f,placement:R,title:I,body:M,offset:z,primaryActionLabel:V,secondaryActionLabel:N,setArrowRef:b,primaryAction:F,secondaryAction:H,next:L,done:_,styleOverrides:void 0===l?{}:l})}},2678:function(e,t,n){n.d(t,{v:function(){return eo}});var r,o=n(47842),a=n(70865),i=n(87394),s=n(52322),c=n(41075),l=n(63040),u=n(62197),d=n(70642),h=n(39232),p=n(27764),m=n(5632),f=/^\/search(.+)?$/,v=function(e){var t,n=e.searchBarType,r=(t=(0,m.useRouter)().asPath,f.test((0,p.oY)(t))),o=n===h.k4||n===h.pV;return r&&o?(0,s.jsx)(d.AiSearch,{}):null};v.defaultProps={searchBarType:null};var b=n(44500),g=n(59312),x=n(25237),y=n.n(x),Z=y()(function(){return n.e(88357).then(n.bind(n,88357)).then(function(e){return e.GenerateButton})},{loadableGenerated:{webpack:function(){return[88357]}},ssr:!0}),C=n(59481),k=n(94380),w=n(82056),j=n(28903),S=n(77612),B=n(48289),A=n(33301),L=n(29284),_=n(9823),T=n(92405),I=n(776),M=n(75),z=n(59877),R=n(2784),V=n(8740),N=n(22863),F=(0,V.ZL)()(function(e,t){var n=e.tokens,r=n.radius,o=n.size,a=n.spacing,i=t.splitCategories;return{select:{"&":{display:"flex !important",alignItems:"center",padding:"".concat(a.s," ").concat(a.base),height:o.density.base,boxSizing:"border-box","&:focus":{backgroundColor:"transparent"}}},icon:{marginRight:a.s},input:{borderRadius:i?r.l:"".concat(r.l," 0 0 ").concat(r.l)},label:{paddingRight:a.m},disableBorder:{borderLeft:"none",borderTop:"none",borderBottom:"none"},nested:{marginLeft:a.base},divider:{margin:"".concat(a.s," ").concat(a.base)}}}),H=function(e,t){var n=N.zH[t]||N.zH[h.k4],r=n.analyticsLabel,o=n.value;return"".concat(e,".").concat(r||o)},P=function(e){var t,n=e.disableBorder,r=e.selectedAssetType,o=e.setSelectedAssetType,a=e.showSearchByAsset,i=e.showSelectedAssetTypeLabel,c=e.openSearchDialog,u=e.splitCategories,d=(0,I.yh)().analytics,p=(0,I.wU)(),m=F({splitCategories:u}),f=m.classes,v=m.cx,b=(0,z.$G)(M.WuT).t,g=(0,_.D)().isBrandEnterprise,x=(0,R.useCallback)(function(e){var t=e.Icon,n=e.label,r=e.value,o=e.nested;return(0,s.jsxs)(k.Z,{value:r,children:[(0,s.jsx)(t,{color:"primary",className:f.icon,classes:{root:v(o&&f.nested)}}),(0,s.jsx)(w.Z,{primaryTypographyProps:{variant:"body2"},primary:b(n),"data-automation":b(n)})]},r)},[f,v,b]),y=g?A.pO:A.Y$,Z=(0,T.p)(y,!1,!1,!0),C=(0,L.d)().hasAccess,V=(0,R.useMemo)(function(){return Object.keys(N.zH).filter(function(e){var t=!Z&&e===h.w5,n=g&&e===h.hv,r=!C&&e===h.Nk;return!n&&!r&&!t}).map(function(e){return x(N.zH[e])})},[g,C,Z,x]),P=(0,R.useMemo)(function(){return Object.keys(N.BE).filter(function(e){return a[e]}).map(function(e){return x(N.BE[e])})},[x,a]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(j.Z,{variant:"standard",MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},value:r,onChange:function(e){var t=e.target.value,n=N.Pu[t];n?(d.inlineClick("".concat(p,".").concat(t,"Dropdown")),c(n)):(d.inlineClick(H(p,t)),o(t))},onOpen:function(){return d.inlineClick("".concat(p,".").concat("expand"))},renderValue:function(e){var t=N.zH[e]||N.zH[h.k4],n=t.Icon,r=t.label;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{color:"primary",className:f.icon}),i&&(0,s.jsx)(l.Z,{mdDown:!0,implementation:"css",children:(0,s.jsx)(w.Z,{primary:b(r),className:f.label})})]})},classes:{icon:f.icon,select:f.select},input:(0,s.jsx)(S.Z,{classes:{root:f.input,notchedOutline:v(n&&f.disableBorder)}}),inputProps:{"aria-label":b((null===(t=N.zH[r])||void 0===t?void 0:t.label)||N.zH[h.k4].label)},"data-automation":"dynamicSearchBarDropDown",children:[V,P.length>0&&(0,s.jsx)(B.Z,{classes:{root:f.divider},variant:"middle"}),P]})})};P.defaultProps={disableBorder:!1,showSearchByAsset:(r={},(0,o.Z)(r,h.k4,!0),(0,o.Z)(r,h.xF,!1),r),showSelectedAssetTypeLabel:!0,splitCategories:!1};var D=n(38613),E=n(8083),O=n(16133),G=n(66358),W=n(76279),X=n(31294),Y=n(51793),q=n(5528),$=n(43110),U=n(32787),J=n(97024),Q=n(10312),K=(0,V.ZL)()(function(e,t){var n=e.breakpoints,r=e.palette,i=e.tokens,s=i.border,c=i.spacing,l=i.radius,u=t.splitCategories,d=t.showLeftBorderWhenSplit;return{gridRoot:(0,a.Z)({width:"100%",borderRadius:s.radius.l,maxHeight:W.GL},u&&{background:"transparent"}),searchBarGridRoot:(0,a.Z)({display:"flex",alignItems:"center",width:"100%",position:"relative",border:"".concat(s.width.s," solid ").concat(r.border2Color),borderLeft:d?"":"none",borderRight:"none",overflow:"hidden",background:r.background.default},u&&{borderRadius:"".concat(l.l," 0 0 ").concat(l.l)}),filterDrawerIcon:(0,o.Z)({borderRadius:0,borderTop:"".concat(s.width.s," solid ").concat(r.border2Color),borderBottom:"".concat(s.width.s," solid ").concat(r.border2Color),borderLeft:"".concat(s.width.s," solid ").concat(r.border2Color),color:r.primary.main},n.up("sm"),{display:"none"}),searchByAssetGridRoot:{display:"flex",alignItems:"center",border:"solid ".concat(r.border2Color),borderWidth:"".concat(s.width.s," 0 ").concat(s.width.s," 0"),background:r.background.default},searchByAssetIconButton:{padding:"0 ".concat(c.s)},assetTypeSelection:(0,a.Z)({display:"flex",background:r.background.default,borderRadius:"".concat(l.l," 0 0 ").concat(l.l)},u&&(0,o.Z)({marginRight:c.m,borderRadius:"".concat(l.l)},n.down("md"),{marginRight:c.s})),aiSearchButton:{marginLeft:c.xs},searchBarButtons:{display:"flex"},searchButton:{height:"100%"},reverseSearchImageButton:{paddingLeft:c.base,paddingRight:c.base,borderRadius:s.radius.l,borderLeft:"".concat(s.width.s," solid ").concat(r.border2Color),borderRight:"".concat(s.width.s," solid ").concat(r.border2Color)},reverseSearchImageGrid:{marginLeft:c.s,borderRadius:s.radius.l},reverseSearchImageText:{color:r.common.black}}}),ee=y()(function(){return n.e(57758).then(n.bind(n,34025)).then(function(e){return e.RASDetailsTour})},{loadableGenerated:{webpack:function(){return[34025]}},ssr:!1}),et=y()(function(){return Promise.all([n.e(31563),n.e(4252)]).then(n.bind(n,98334)).then(function(e){return e.SearchByAssetDialog})},{loadableGenerated:{webpack:function(){return[98334]}},ssr:!1}),en={imageIllustration:"illustration",editorialImage:"editorialImage",editorialVideo:"editorialVideo",imagePhoto:"photo",imageGenerated:"generated",imageVector:"vector",video:"video",template:"template",sfx:"sfx",music:"music"},er=function(e){var t=e.className,n=e.disableBorder,r=e.hasFilterPills,a=e.hideSearchByAsset,d=e.openFilterDrawer,p=e.showSelectedAssetTypeLabel,f=e.allowFilterDrawerIcon,x=e.splitCategories,y=e.shouldUseLicensedContentMixForDropdown,k=e.shouldUseBrowsedContentMixForDropdown,w=e.showLeftBorderWhenSplit,j=e.searchTerm,S=e.isAssetTypeVectorLocms454,B=(0,m.useRouter)(),L=(0,q.c)(),V=(0,$.B)(),F=K({splitCategories:x,showLeftBorderWhenSplit:w||L&&!V}),H=F.classes,W=F.cx,er=(0,z.$G)([M.WuT]).t,eo=(0,U.w)().data,ea=(0,X.Q)().decodeSearchTerm,ei=(0,_.D)(),es=ei.isBrandEnterprise,ec=ei.isBrandSstk,el=B.query,eu=el.term,ed=el.prompt,eh=(0,J.JI)(),ep=eh.assetSubType,em=ea(eh.fullAssetType===h.Nk?ed:eu),ef=(0,i.Z)((0,R.useState)(S?"vector":ep),2),ev=ef[0],eb=ef[1],eg=(0,T.p)(A.I6),ex=(0,R.useMemo)(function(){var e;return e={},(0,o.Z)(e,h.k4,!D.dA.includes(h.wW[ev]||ev)&&!a),(0,o.Z)(e,h.xF,(!0===eg||!es)&&ev===h.xF&&!a),e},[ev,a,eg,es]);(0,R.useEffect)(function(){var e,t,n,r,o,a,i=null,s=y?null==eo?void 0:null===(e=eo.data)||void 0===e?void 0:null===(t=e.attributes)||void 0===t?void 0:null===(n=t.contentMix)||void 0===n?void 0:n.licensed:null==eo?void 0:null===(r=eo.data)||void 0===r?void 0:null===(o=r.attributes)||void 0===o?void 0:null===(a=o.contentMix)||void 0===a?void 0:a.browsed;if(s&&Object.values(s).length>0&&L&&(y||k)&&ec){var c=Object.entries(s);c.sort(function(e,t){return t[1]-e[1]}),(i=en[c[0][0]])&&eb(i)}},[]);var ey=(0,R.useRef)(null),eZ=(0,Y.Rx)({assetType:ev}).doSearch,eC=function(){var e;eZ(null===(e=ey.current)||void 0===e?void 0:e.value)},ek=(0,i.Z)((0,R.useState)(null),2),ew=ek[0],ej=ek[1],eS=ex[h.xF]?D.sT:"",eB=ex[h.k4]||ex[h.xF],eA=(0,R.useMemo)(function(){return Object.keys(D.lH).filter(function(e){return ex[e]}).map(function(e){var t=D.lH[e],n=t.title,r=t.Icon;return(0,s.jsx)(c.ZP,{item:!0,classes:{root:eB?W(H.searchByAssetGridRoot,H.reverseSearchImageGrid):W(H.searchByAssetGridRoot,H.searchByAssetIconButton)},"data-tour-stop":eS,children:(0,s.jsx)(l.Z,{implementation:"css",lgDown:!0,children:(0,s.jsx)(g.l,{title:er(n),placement:"top",children:(0,s.jsxs)(C.h,{"aria-label":er(n),classes:{root:eB?H.reverseSearchImageButton:H.searchByAssetIconButton},onClick:function(){return ej(e)},clickTrack:"".concat(G.Yii,".").concat(N.BE[e].value,"Button"),size:"large",children:[(0,s.jsx)(r,{}),eB&&(0,s.jsx)(u.Z,{ml:3,"data-automation":"ReverseSearch_ImageButton",className:H.reverseSearchImageText,children:er(ev===h.xF?"music:reverse_audio_search_page_title":"image:reverse_image_search_page_title")})]})})})},e)})},[ex,eB,W,H,eS,er,ev]),eL=(0,R.useMemo)(function(){return eS&&(0,s.jsx)(l.Z,{lgDown:!0,children:(0,s.jsx)(b.Y,{children:(0,s.jsx)(ee,{})})})},[eS]);return(0,s.jsx)(I.Mp,{value:G.Yii,children:(0,s.jsxs)(c.ZP,{container:!0,className:t,classes:{root:H.gridRoot},children:[(0,s.jsx)(c.ZP,{item:!0,xs:"auto",className:H.assetTypeSelection,children:(0,s.jsx)(P,{disableBorder:n,searchTerm:null!=j?j:em,selectedAssetType:ev,setSelectedAssetType:eb,showSelectedAssetTypeLabel:p,showSearchByAsset:ex,openSearchDialog:ej,splitCategories:x})}),(0,s.jsxs)(c.ZP,{item:!0,xs:!0,classes:{root:H.searchBarGridRoot},children:[(0,s.jsx)("div",{className:H.aiSearchButton,children:(0,s.jsx)(v,{searchBarType:ev})}),(0,s.jsx)(E.E,{hasFilterPills:r,inputRef:ey,searchTerm:null!=j?j:em,selectedAsset:ev})]}),!eB&&eA,(0,s.jsxs)(c.ZP,{item:!0,className:H.searchBarButtons,children:[f&&(0,s.jsx)(C.h,{"aria-label":er("license-history:filter_button_closed"),classes:{root:H.filterDrawerIcon},onClick:d,size:"large",children:(0,s.jsx)(Q.Filter,{})}),ev===h.Nk?(0,s.jsx)(Z,{className:H.searchButton,onClick:eC}):(0,s.jsx)(O.m,{className:H.searchButton,onClick:eC}),eB&&eA]}),ew&&(0,s.jsx)(et,{closeDialog:function(){return ej(null)},dialogType:ew,assetType:ev,isDialogOpen:!0}),eL]})})},eo=(0,R.memo)(er);er.defaultProps={className:"",disableBorder:!1,hasFilterPills:void 0,hideSearchByAsset:!1,openFilterDrawer:function(){},showSelectedAssetTypeLabel:!0,allowFilterDrawerIcon:!1,splitCategories:!1,shouldUseLicensedContentMixForDropdown:!1,shouldUseBrowsedContentMixForDropdown:!1,showLeftBorderWhenSplit:!1,searchTerm:void 0,isAssetTypeVectorLocms454:!1}},22863:function(e,t,n){n.d(t,{BE:function(){return B},Pu:function(){return j},zH:function(){return S}});var r,o,a,i=n(47842),s=n(39232),c=n(57631),l=n(22939),u=n(96591),d=n(27503),h=n(28026),p=n(71680),m=n(25681),f=n(95693),v=n(68702),b=n(44015),g=n(36655),x=n(57613),y=n(69440),Z=n(33446),C="reverseImageSearch",k="reverseAudioSearch",w="reverseVideoSearch",j=(r={},(0,i.Z)(r,C,s.k4),(0,i.Z)(r,w,s.pX),(0,i.Z)(r,k,s.xF),r),S=(o={},(0,i.Z)(o,s.k4,{label:"common:filters_image_type_all",Icon:c.AllImages,value:s.k4}),(0,i.Z)(o,s.pV,{label:"common:filters_image_type_photo",Icon:l.Photos,value:s.pV,nested:!0,analyticsLabel:"".concat(s.k4,"-").concat(s.pV)}),(0,i.Z)(o,s.w5,{label:"site-header:3d-objects",Icon:u.Photo3d,value:s.w5,nested:!0,analyticsLabel:"".concat(s.k4,"-").concat(s.w5)}),(0,i.Z)(o,s.ox,{label:"common:image_size_vector",Icon:d.Vectors,value:s.ox,nested:!0,analyticsLabel:"".concat(s.k4,"-").concat(s.ox)}),(0,i.Z)(o,s.X2,{label:"common:filters_image_type_illustration",Icon:h.Illustrations,value:s.X2,nested:!0,analyticsLabel:"".concat(s.k4,"-").concat(s.X2)}),(0,i.Z)(o,s.e3,{label:"common:filters_image_type_ai_generated",Icon:p.m,value:s.e3,nested:!0,analyticsLabel:s.yV}),(0,i.Z)(o,s.gP,{label:"common:links_editorial",Icon:m.Editorial,value:s.gP}),(0,i.Z)(o,s.VT,{label:"ent:editorial_image",Icon:c.AllImages,value:s.VT,nested:!0,analyticsLabel:"".concat(s.gP,"-").concat(s.k4)}),(0,i.Z)(o,s.nj,{label:"ent:editorial_video",Icon:f.Video,value:s.nj,nested:!0,analyticsLabel:"".concat(s.gP,"-").concat(s.pX)}),(0,i.Z)(o,s.pX,{label:"site-header:video",Icon:f.Video,value:s.pX}),(0,i.Z)(o,s.xF,{label:"common:links_music",Icon:v.Music,value:s.xF}),(0,i.Z)(o,s.tn,{label:"site-header:sfx",Icon:b.SoundEffects,value:s.tn}),(0,i.Z)(o,s.hv,{label:"common:links_templates",Icon:g.AllTemplates,value:s.hv}),(0,i.Z)(o,s.Nk,{label:"generate_ai_generator",Icon:x.C,value:s.Nk,analyticsLabel:"aigenerator"}),o),B=(a={},(0,i.Z)(a,s.k4,{value:C,Icon:y.SearchByImage,label:"image:reverse_image_search_page_title"}),(0,i.Z)(a,s.pX,{value:w,Icon:y.SearchByImage,label:"image:reverse_image_search_page_title"}),(0,i.Z)(a,s.xF,{value:k,Icon:Z.X,label:"music:reverse_audio_search_page_title"}),a)},38613:function(e,t,n){n.d(t,{dA:function(){return c},lH:function(){return l},sT:function(){return u}});var r,o=n(47842),a=n(39232),i=n(69440),s=n(33446),c=[a.xF,a.gP,a.VT,a.nj,a.tn,a.Nk,a.hv,a.w5],l=(r={},(0,o.Z)(r,a.k4,{title:"image:reverse_image_search_page_title",Icon:i.SearchByImage}),(0,o.Z)(r,a.xF,{title:"music:reverse_audio_search_page_title",Icon:s.X}),r),u="RAS-icon"},79400:function(e,t,n){n.d(t,{l:function(){return c}});var r=n(76279),o=n(3704),a=n(87111),i=n(5632),s=n(2784),c=function(){var e=(0,i.useRouter)(),t=(0,a.k)({filterType:r.hh.AI_SEARCH});return(0,s.useMemo)(function(){return!!t&&Object.values(t).every(function(t){var n=t.urlValue;return(0,o.QV)({router:e,urlValue:n})})},[t,e])}},31294:function(e,t,n){n.d(t,{Q:function(){return a}});var r=n(48417),o=n(2784),a=function(){return{encodeSearchTerm:(0,o.useCallback)(function(e){return(0,r.U9)(e)},[]),decodeSearchTerm:(0,o.useCallback)(function(e){return(0,r.JF)(e)},[])}}},5528:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(85129),o=n(11181),a=n(5632),i=function(){return(0,a.useRouter)().pathname===r.aD[o.BRANDS.SSTK]}},73017:function(e,t,n){n.d(t,{t:function(){return a}});var r=n(87394),o=n(2784),a=function(e){var t=e.onClick,n=void 0===t?function(){}:t,a=e.setScrollY,i=(0,r.Z)((0,o.useState)(null),2),s=i[0],c=i[1];return(0,o.useEffect)(function(){var e=function(){a(window.scrollY)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),{anchorEl:s,handleClick:function(e){c(e.currentTarget),n(e)},handleClose:function(){c(null)}}}},97024:function(e,t,n){n.d(t,{JI:function(){return h},MJ:function(){return u},Wo:function(){return c},Ws:function(){return m},a$:function(){return l},jm:function(){return d}});var r=n(39232),o=n(76279),a=n(21770),i=n(27764),s=n(5632),c=function(){var e=(0,s.useRouter)().query[o.jS];return Number(void 0===e?1:e)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultPageSize,n=void 0===t?10:t,r=(0,s.useRouter)().query[o.dp],i=void 0===r?n:r;return(0,a.k)(i)?Number(i):n},u=function(){var e=(0,s.useRouter)().query;return{endDate:e[o.BD],startDate:e[o.yZ]}},d=function(){return{orderBy:(0,s.useRouter)().query[o.qk]}},h=function(){var e,t=(0,s.useRouter)(),n=t.query,a=n[o.Tv],c=n[o.cb],l=t.asPath,u=(0,i.oY)(l),d=r.cp[c],h=(null===(e=u.match(i._g))||void 0===e?void 0:e[1])||a||r.k4,p=(0,i.N6)(u),m=a||d||p,f=(0,i.EV)(u,m),v=r.p_[m];return{assetType:h,assetSubType:f,fullAssetType:m,fullAssetTypeFromPath:p,editorialAssetType:v}},p=/^\/editorial/i,m=function(){var e=(0,s.useRouter)().asPath;return p.test(e)}},71680:function(e,t,n){n.d(t,{m:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("path",{d:"M22.61,0H10.3c-2.8,0-5.13,1.94-5.73,4.56-.56,.13-1.09,.34-1.58,.61-.65,.38-1.22,.86-1.69,1.43-.42,.52-.76,1.12-.98,1.78-.22,.61-.34,1.26-.34,1.93v13.7H13.71c2.8,0,5.13-1.94,5.73-4.56,2.62-.6,4.57-2.93,4.57-5.73V0h-1.39ZM6.37,7.49s.01,0,.02,0v-1.64c0-.51,.1-.99,.28-1.43h0s0,0,0,0c.05-.12,.11-.23,.17-.34,.04-.08,.08-.16,.13-.24,.07-.11,.14-.22,.22-.32,.05-.07,.1-.13,.16-.19,.09-.1,.18-.2,.27-.3,.05-.04,.1-.08,.15-.12,.19-.16,.39-.3,.61-.42,.08-.05,.17-.1,.26-.14,.11-.05,.21-.09,.32-.13,.11-.04,.22-.07,.34-.11,.1-.03,.2-.05,.3-.07,.2-.04,.4-.06,.6-.06,.03,0,.05,0,.07,0h11.77v3.82h0s-7.72,7.73-7.72,7.73l-2.61-2.61-5.33,5.33v-6.71s0,0,0,0h0v-2.03Zm-4.21,1.61c.24-.71,.66-1.31,1.21-1.78,.31-.27,.67-.49,1.06-.65v.5l-2.38,2.38c.03-.16,.06-.31,.11-.46Zm-.19,3.3l2.46-2.46v2.75l-2.46,2.46v-2.75Zm0,5.51l2.46-2.46v2.75l-2.46,2.46v-2.75Zm3.93,4.15H3.32l2.46-2.46h2.57l-2.46,2.46Zm5.33,0h-2.57l2.46-2.46h2.57l-2.46,2.46Zm2.78-.02l2.43-2.43h.9c-.54,1.35-1.82,2.32-3.34,2.43Zm8.04-8.31v.02s0,.03,0,.05c0,.22-.03,.43-.06,.64-.02,.09-.04,.18-.06,.26-.03,.14-.07,.27-.12,.4-.03,.09-.07,.18-.11,.27-.06,.13-.13,.25-.2,.37-.06,.1-.12,.19-.18,.28-.1,.14-.22,.28-.34,.41-.07,.07-.15,.14-.22,.21-.09,.08-.18,.16-.28,.23-.08,.06-.17,.12-.25,.17-.12,.07-.24,.14-.36,.2-.08,.04-.15,.08-.23,.11-.01,0-.02,.01-.03,.02h0c-.44,.17-.92,.27-1.42,.27h-.54v.02h-3.53s.02-.01,.03-.02H7.75l3.96-3.96,2.61,2.61,7.73-7.73v5.18Z"}),(0,o.jsx)("circle",{cx:"11.04",cy:"6.28",r:"2"})]}),"AiGenerated.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 24.01 24"},e))}},58603:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsx)("path",{d:"M22.1984 0C22.8742 0 23.4216 0.549859 23.4216 1.22568C23.4216 1.90149 22.8742 2.44893 22.1984 2.44893C21.5225 2.44893 20.9727 1.89907 20.9727 1.22568C20.9751 0.549859 21.5225 0 22.1984 0ZM1.78818 9.55107C2.464 9.55107 3.01143 10.1009 3.01143 10.7767C3.01143 11.4526 2.464 12 1.78818 12C1.11236 12 0.5625 11.4501 0.5625 10.7767C0.5625 10.1009 1.11236 9.55107 1.78818 9.55107ZM12.3009 0C13.4297 0.00726686 14.5439 0.528058 15.2682 1.40977C15.4983 1.69076 15.6897 2.00565 15.8326 2.33508C16.7531 4.48849 17.6566 6.64675 18.577 8.79774C18.7732 9.24829 19.2504 9.55591 19.7591 9.52927C20.3962 9.49536 20.9678 8.93823 20.9703 8.25273V4.67259C20.9799 4.53452 20.9751 4.50061 21.009 4.36496C21.0986 4.01373 21.3506 3.71094 21.6776 3.55591C22.0966 3.35971 22.6247 3.42269 22.988 3.72063C23.2254 3.91926 23.3853 4.20751 23.4265 4.51514C23.4313 4.56601 23.4313 4.61688 23.4361 4.67017C23.4361 5.86677 23.4386 7.06581 23.4361 8.26484C23.4289 9.61889 22.6489 10.9366 21.416 11.5737C20.4761 12.0606 19.3279 12.126 18.3397 11.736C17.4531 11.3847 16.7143 10.675 16.3292 9.80057C16.3243 9.79088 16.3195 9.77877 16.3146 9.76908C15.3942 7.61809 14.4906 5.45741 13.5702 3.304C13.3837 2.87283 12.9719 2.55309 12.5116 2.478C11.9012 2.37868 11.2472 2.72992 10.9977 3.31369L7.638 11.2442C7.61377 11.2903 7.59439 11.3387 7.56775 11.3823C7.35943 11.7384 6.9646 11.9782 6.55039 11.9952C6.18947 12.0097 5.82613 11.8547 5.5839 11.5858C5.34409 11.3169 5.23024 10.939 5.28353 10.5805C5.30291 10.4449 5.32229 10.4134 5.36832 10.2826L8.73045 2.35204C9.18341 1.2935 10.1184 0.462657 11.2278 0.145337C11.5742 0.0484458 11.9351 0 12.3009 0Z"}),"AiSearchLogo.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 24 12"},e))}},36655:function(e,t,n){n.r(t),n.d(t,{AllTemplates:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{d:"M15.3496 15.3428C14.666 16.0264 13.8389 16.3682 12.8682 16.3682H0.625V0.618164H16.375V12.8818C16.375 13.8389 16.0332 14.6592 15.3496 15.3428ZM2.36816 2.38187V14.625H5.875V2.38187H2.36816ZM14.6318 2.38187L14.6311 5.86891L7.61816 5.8682V2.38187H14.6318ZM14.6311 7.63199L7.61816 7.63183V14.625H12.8682C13.3604 14.625 13.7773 14.4541 14.1191 14.1123L14.2267 13.9958C14.4968 13.6785 14.6318 13.3072 14.6318 12.8818L14.6311 7.63199Z"})}),"Template.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 17 17"},e))}},10312:function(e,t,n){n.r(t),n.d(t,{Filter:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsx)("path",{d:"M29.333 8H17.146c-.636-2.285-2.699-3.935-5.147-3.935S7.488 5.714 6.861 7.962l-4.196.037v2.667h4.187c.636 2.285 2.699 3.935 5.147 3.935s4.511-1.649 5.138-3.897l12.196-.037zM12 12c-1.473 0-2.667-1.194-2.667-2.667S10.527 6.666 12 6.666c1.473 0 2.667 1.194 2.667 2.667S13.473 12 12 12zM29.333 21.333h-4.187c-.636-2.285-2.699-3.935-5.147-3.935s-4.511 1.649-5.138 3.897l-12.196.038V24h12.187c.636 2.285 2.699 3.935 5.147 3.935s4.511-1.649 5.138-3.897L29.333 24zm-9.333 4c-1.473 0-2.667-1.194-2.667-2.667s1.194-2.667 2.667-2.667c1.473 0 2.667 1.194 2.667 2.667S21.473 25.333 20 25.333z"}),"Filter.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 32 32"},e))}},28026:function(e,t,n){n.r(t),n.d(t,{Illustrations:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsx)("path",{d:"M16 21.6c1.2-.267 2.933-.667 4.933-2.667 4.933-4.933 7.733-10 7.867-10.267l.533-1.333-4-4L24 3.866c-.267.133-5.2 2.8-10.267 7.867-2 2-2.267 3.733-2.533 4.933-2.533 1.2-3.467 4.667-3.867 6.267l-.533 2.8 2.533-.533c1.733-.4 5.467-1.067 6.667-3.6zm-.4-8c3.6-3.6 7.733-6.267 9.067-6.8l1.2 1.2c-.533 1.2-3.2 5.333-6.8 9.067-1.6 1.6-3.2 2-3.733 2l-1.733-1.733c0-.533.4-2.133 2-3.733zm-3.467 5.467l1.467 1.467c-.933 1.067-2.133 1.733-3.733 2.133.533-1.467 1.2-2.667 2.267-3.6zM2.667 30h24l2.667-2.667h-24L2.667 30z"}),"Illustrations.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 32 32"},e))}},96591:function(e,t,n){n.r(t),n.d(t,{Photo3d:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsx)("path",{d:"M17.516 24.705 17.516 18.36 22.916 15.66 22.916 22.005 17.516 24.705ZM9.416 15.66 14.816 18.36 14.816 24.705 9.416 22.005 9.416 15.66ZM16.166 15.93 11.036 13.5 16.166 10.935 21.296 13.5 16.166 15.93ZM29.126 24.435 25.616 22.141 25.616 12.691 17.516 8.641 17.516 4.05C17.516 3.375 16.976 2.7 16.166 2.7 15.356 2.7 14.816 3.241 14.816 4.05L14.816 8.641 6.716 12.691 6.716 22.141 3.206 24.435C2.666 24.841 2.531 25.65 2.936 26.191 3.206 26.595 3.611 26.73 4.016 26.73 4.286 26.73 4.556 26.595 4.826 26.46L8.201 24.166 16.166 28.35 24.131 24.435 27.506 26.73C27.776 26.866 28.046 27 28.316 27 28.721 27 29.126 26.73 29.396 26.46 29.801 25.65 29.666 24.841 29.126 24.435Z"}),"Photo3d.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 32 32"},e))}},69440:function(e,t,n){n.r(t),n.d(t,{SearchByImage:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("path",{d:"M26.667 21.333C26.667 22.8 25.467 24 24 24H5.333V12h5.333c.8 0 1.333-.533 1.333-1.333V8h4V5.333H9.332v4H2.665v17.333h21.333c2.933 0 5.333-2.4 5.333-5.333v-8h-2.667v8z"}),(0,o.jsx)("path",{d:"M10.667 17.333c0 2.933 2.4 5.333 5.333 5.333s5.333-2.4 5.333-5.333S18.933 12 16 12s-5.333 2.4-5.333 5.333zm8 0C18.667 18.8 17.467 20 16 20s-2.667-1.2-2.667-2.667 1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667zM25.333 5.333v-4h-2.667v4h-4V8h4v4h2.667V8h4V5.333z"})]}),"SearchByImage.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 32 32"},e))}},33446:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsxs)("g",{children:[(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M22,2L12,5v2l8-2.3v7.9c-0.6-0.3-1.3-0.6-2-0.6c-2.2,0-4,1.8-4,4    s1.8,4,4,4s4-1.8,4-4l0,0l0,0V2z M18,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S19.1,18,18,18z"}),(0,o.jsx)("path",{d:"M8,11L8,11v3.6C7.4,14.2,6.7,14,6,14c-2.2,0-4,1.8-4,4s1.8,4,4,4    s4-1.8,4-4v-7l0,0H8z M6,20c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S7.1,20,6,20z"})]}),(0,o.jsx)("path",{d:"M7,5V2H5v3H2v2h3v3h2V7h3V5H7z"})]}),"SearchByMusic.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 24 24"},e))}},27503:function(e,t,n){n.r(t),n.d(t,{Vectors:function(){return i}});var r=n(70865),o=n(52322),a=(0,n(6620).Z)((0,o.jsx)("path",{d:"M26.667 14c-.933 0-1.867.533-2.267 1.333h-3.467C23.6 13.2 25.466 9.733 25.466 6V3.333h-2.667V6c0 5.2-4.133 9.333-9.333 9.333H7.599c-.4-.8-1.333-1.333-2.267-1.333-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667c.933 0 1.867-.533 2.267-1.333h3.467c-2.667 2.133-4.4 5.6-4.4 9.333v2.667h2.667v-2.667c0-5.2 4.133-9.333 9.333-9.333h5.733c.4.8 1.333 1.333 2.267 1.333 1.467 0 2.667-1.2 2.667-2.667S28.133 14 26.666 14z"}),"Vectors.svg"),i=function(e){return(0,o.jsx)(a,(0,r.Z)({viewBox:"0 0 32 32"},e))}},38337:function(e,t,n){n.d(t,{V:function(){return h}});var r,o=n(47842),a=n(58013),i=n(77251),s=n(38398),c=n.n(s),l=n(85208),u="predict",d=(0,o.Z)({},u,(r={},(0,o.Z)(r,l.Dx,"/".concat(u)),(0,o.Z)(r,"new","/".concat(u,"/").concat("new")),r)),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)({},(0,i.Z)(e)),n=c().format({pathname:d[u][l.Dx],query:t});return[n,n]}},21770:function(e,t,n){n.d(t,{k:function(){return r}});var r=function(e){return!Number.isNaN(Number.parseFloat(e))&&!Number.isNaN(+e)}}}]);
//# sourceMappingURL=56668-9974bed7a1f5d6e8.js.map