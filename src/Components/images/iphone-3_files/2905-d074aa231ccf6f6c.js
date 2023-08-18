"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2905],{12410:function(e,n,t){t.d(n,{Q:function(){return i}});var i=(0,t(8740).ZL)()(function(e){var n=e.typography,t=e.palette,i=e.tokens,o=i.spacing,r=i.color,a=i.font,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).width;return{bold:{fontWeight:n.fontWeightBold},radioButtonContainer:{display:"flex",alignItems:"flex-start"},radioButton:{marginRight:o.s,padding:o.xs},selectedRadioButton:{"&&.Mui-checked":{color:t.info.main}},disabledRadioButton:{color:t.secondary.disabled},disabledText:{color:t.secondary.disabled},row:{display:"flex",flexDirection:"row",width:s?"calc(".concat(s,")"):"100%"},separator:{padding:"0 ".concat(o.xs),fontWeight:n.fontWeightBold},freeTrial:{fontWeight:n.fontWeightBold,color:r.blue.aqua},descriptionContainer:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},textSection:{display:"flex",flexDirection:"column",width:s?"calc(".concat(s,")"):"100%"},topRow:{display:"flex",flexDirection:"row",width:s?"calc(".concat(s,")"):"100%",justifyContent:"space-between"},productDescriptionText:{paddingTop:o.xs},highlightedInfo:{color:t.info.main},descriptionSection:{maxWidth:"74%"},input:{padding:"0 ".concat(o.s," 0 ").concat(o.s),fontSize:a.size.s,color:t.info.main,"&& svg":{color:t.info.main},"&:before":{content:"none"},"&:after":{content:"none"}},inputSelect:{paddingRight:"".concat(o.s," !important"),marginRight:"".concat(o.s," !important")}}})},30902:function(e,n,t){t.d(n,{O:function(){return o}});var i=t(78287),o=(0,t(12281).g)(i.Z)},45848:function(e,n,t){t.d(n,{N:function(){return a}});var i=t(25237),o=t.n(i),r=t(46159),a=o()(function(){return t.e(61668).then(t.bind(t,96367)).then(function(e){return e.AddToCartButton})},{loadableGenerated:{webpack:function(){return[96367]}},ssr:!1,loading:r.F})},58534:function(e,n,t){t.d(n,{N:function(){return a}});var i=t(25237),o=t.n(i),r=t(46159),a=o()(function(){return Promise.all([t.e(30656),t.e(57353)]).then(t.bind(t,11201)).then(function(e){return e.BuyAndDownloadButton})},{loadableGenerated:{webpack:function(){return[11201]}},ssr:!1,loading:r.F})},38605:function(e,n,t){t.d(n,{e:function(){return y}});var i=t(70865),o=t(52322),r=t(45848),a=t(46159),s=t(58534),c=t(25237),d=t.n(c),l=d()(function(){return t.e(15646).then(t.bind(t,15646)).then(function(e){return e.GetAnotherPlanButton})},{loadableGenerated:{webpack:function(){return[15646]}},ssr:!1,loading:function(){return(0,o.jsx)(a.F,{monitoringOrigin:"GetAnotherPlanButton"})}}),u=t(55577),p=d()(function(){return t.e(80792).then(t.bind(t,80792)).then(function(e){return e.RedownloadButton})},{loadableGenerated:{webpack:function(){return[80792]}},ssr:!1}),f=t(10597),m=t(18510),v=t(86669),h=t(29292),g=t(44297),b=t(73377),y=function(e){var n=e.asset,t=e.eligibility,c=e.eligibilityError,d=e.isLoadingData,y=e.onAddToCartSuccess,x=e.onAddToCartFailure,_=e.onLicensingSuccess,w=e.onRedownloadSuccess,S=e.RedownloadSecondaryButton,P=e.redownloadSecondaryButtonProps,C=e.selectedAssetSize,L=e.selectedPaymentPlan,Z=e.selectedProductLicenseType,j=e.selectedShadowsOption,T=e.showAddToCartButton,B=e.showBuyAndDownloadButton,I=e.showGetAnotherPlanButton,A=e.showLicenseButton,D=e.showRedownloadButton,k=e.showWarningMessage,R=e.clickAnalyticsLabels,N=(0,m.R)(null==t?void 0:t.subscriptions),M=N.lowestCostEntry,E=N.debitableIdentifier,F=(0,f.B)(n,t).isEligible,W={eligibilityCurrency:F?null==M?void 0:M.currency:void 0,debitableIdentifier:F?E:void 0};if(d)return(0,o.jsx)(a.F,{monitoringOrigin:"DrawerCta-".concat(null==n?void 0:n.type)});var O=t.licenses,z=(0,g.PD)(n),G={brandCategory:(0,h.f_)(n),productLine:(0,h.Rz)(n)};return T?(0,o.jsx)(r.N,(0,i.Z)({asset:n,itemsToAdd:[(0,v.zg)({asset:n,assetSize:C,license:null==Z?void 0:Z.license})],isDisabled:c,onAddToCartSuccess:y,onAddToCartFailure:x,selectedProductLicenseType:Z,setAddToCartStatus:k,clickAnalyticsLabel:(0,b.U_)((void 0===R?{}:R).addToCartButton)},z&&G)):D?(0,o.jsx)(p,(0,i.Z)({asset:n,licenses:void 0===O?[]:O,isDisabled:c,onRedownloadSuccess:w,SecondaryButton:S,secondaryButtonProps:P,selectedAssetSize:C,selectedShadowsOption:j,showWarningMessage:k},z&&G)):A?(0,o.jsx)(u.f,{assetInfo:{asset:n,selectedAssetSize:C,paymentPlan:L,licenseName:null==Z?void 0:Z.license,selectedShadowsOption:j},isDisabled:(null==L?void 0:L.isDisabled)||c,onLicensingSuccess:_,setLicensingStatus:k}):B?(0,o.jsx)(s.N,{asset:n,assetSize:C,product:Z,selectedShadowsOption:j,selectedProductLicenseType:Z,setCreateOrderStatus:k,isDisabled:c,eligibilityData:W}):I?(0,o.jsx)(l,{}):null};y.defaultProps={eligibility:{},eligibilityError:!1,onAddToCartSuccess:function(){},onAddToCartFailure:function(){},onLicensingSuccess:function(){},onRedownloadSuccess:function(){},RedownloadSecondaryButton:null,redownloadSecondaryButtonProps:{},selectedPaymentPlan:{},selectedProductLicenseType:{},showAddToCartButton:!1,showBuyAndDownloadButton:!1,showLicenseButton:!1,showRedownloadButton:!1,showGetAnotherPlanButton:!1,showWarningMessage:function(){}}},41913:function(e,n,t){t.d(n,{X:function(){return p}});var i=t(47842),o=t(70865),r=t(96670),a=t(44699),s=t(60591),c=t(87646),d=t(34293),l=t(87414),u=t(2784),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.allSizesAssetEligibility,t=e.products,p=e.selectedProductLicenseType,f=e.setSelectedProductLicenseType,m=e.isFlexProduct,v=e.isOffsetAsset,h=void 0!==v&&v,g=e.isRedownloadFlow,b=e.paymentPlansForCreditCostCalculation,y=e.showPaymentPlanSelect,x=e.hasExistingLicenseForSelectedLicenseType,_=e.labels,w=void 0===_?{}:_,S=(0,u.useMemo)(function(){return Array.isArray(t)?(h?s.$I:s.Ji).map(function(e){return null==t?void 0:t.find(function(n){return n.name===e})}):[]},[t,h]),P=(0,u.useMemo)(function(){return(0,c.V)({eligibility:n,licenseTypes:[s.ur,s.HS]})},[n]),C=P.ownsStandardLicense,L=P.ownsEnhancedLicense,Z=(0,u.useMemo)(function(){return{hasEligibleSubscriptionForEnhancedLicense:(0,d.i)({subscriptions:n.subscriptions,licenseName:s.HS}),hasEligibleSubscriptionForStandardLicense:(0,d.i)({subscriptions:n.subscriptions,licenseName:s.ur})}},[n]),j=Z.hasEligibleSubscriptionForEnhancedLicense,T=Z.hasEligibleSubscriptionForStandardLicense,B=(0,u.useMemo)(function(){var e;return m?(e={},(0,i.Z)(e,s.ur,(0,l.Kg)({paymentPlans:b,licenseType:s.ur})),(0,i.Z)(e,s.HS,(0,l.Kg)({paymentPlans:b,licenseType:s.HS})),e):{}},[b,m]),I=(0,u.useMemo)(function(){return S.map(function(e){var n=(null==e?void 0:e.license)===s.ur,t=(null==e?void 0:e.license)===s.HS;return(0,r.Z)((0,o.Z)({},e,n&&{displayIncluded:C||L&&h||T&&!m,displayPrice:h,isDisabled:L},t&&{displayIncluded:L||j&&!m,displayPrice:h,isDisabled:!1}),{creditCostsByLicenseType:B,analyticsLabel:(null==e?void 0:e.license)&&"typeSelected - ".concat(null==e?void 0:e.license,"License")})})},[B,j,T,L,C,S,m,h]),A=(0,u.useMemo)(function(){return g?x?{status:a.H_,message:w.alreadyLicensed}:y?{status:a.cM,message:w.alreadyLicensedInStandardButCanLicenseInEnhanced}:{status:a.cM,message:w.alreadyLicensedInStandard}:null},[x,g,w.alreadyLicensed,w.alreadyLicensedInStandard,w.alreadyLicensedInStandardButCanLicenseInEnhanced,y]);return(0,u.useEffect)(function(){var e,t=(null==p?void 0:p.id)===(null==S?void 0:null===(e=S[0])||void 0===e?void 0:e.id);if((!p||t&&L)&&(null==S?void 0:S[0])&&(null==n?void 0:n.subscriptions)){if(L||!C&&(0,d.i)({subscriptions:n.subscriptions,licenseName:s.HS})&&!(0,d.i)({subscriptions:n.subscriptions,licenseName:s.ur})){f(S[1]);return}f(S[0])}},[n.subscriptions,L,C,S,p,f]),{formattedProductLicenseTypes:I,licenseTypeDrawerStatusMessageProps:A}}},14625:function(e,n,t){t.d(n,{GN:function(){return y},K9:function(){return m},NP:function(){return u},PU:function(){return d},XC:function(){return l},Xh:function(){return b},Y4:function(){return x},l_:function(){return _},wZ:function(){return w}});var i,o,r=t(47842),a=t(70865),s=t(96670),c=t(27739),d="subscription",l="onDemand",u="enhanced",p={translations:{title:"choose_monthly_plan",caption:["activation-drawers:sub_product_disclaimer"]},items:[{name:c.v8,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.tq,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.dm,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}}]},f={translations:{title:"choose_monthly_plan",caption:["activation-drawers:sub_product_disclaimer","activation-drawers:sub_product_sub_disclaimer"]},items:[{name:c.tq,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.cz,translations:{price:"activation-drawers:price_per_month"}},{name:c.dF,translations:{price:"activation-drawers:price_per_month"}}]},m={translations:{title:"choose_a_plan",caption:["activation-drawers:sub_product_sub_disclaimer"]},items:[{name:c.EV,translations:{price:"activation-drawers:price_per_year",description:"flex_sub_details"}},{name:c.KB,translations:{price:"activation-drawers:price_per_year"}},{name:c.Dy,translations:{price:"activation-drawers:price_per_year"}}]},v={translations:{title:"on_demand_title",caption:"on_demand_caption"},items:[{name:c._x},{name:c.vC},{name:c.cL}]},h={translations:{title:"on_demand_title",caption:"on_demand_caption"},items:[{name:c.cd,translations:{price:"price_standard_license"}},{name:c.vC,translations:{price:"price_standard_license"}},{name:c._x,translations:{price:"price_standard_license"}},{name:c.cL,translations:{price:"price_standard_license"}}],initialItemIndex:1},g={translations:{title:"enhanced_legal_protections",caption:"on_demand_caption"},items:[{name:c.vI},{name:c.zW},{name:c.jh}]},b=(i={},(0,r.Z)(i,d,p),(0,r.Z)(i,l,h),(0,r.Z)(i,u,g),i),y=(o={},(0,r.Z)(o,d,p),(0,r.Z)(o,l,v),(0,r.Z)(o,u,g),o),x=(0,s.Z)((0,a.Z)({},b),(0,r.Z)({},d,f)),_=(0,s.Z)((0,a.Z)({},y),(0,r.Z)({},d,f)),w=[{translations:"subscriptions",analyticsLabel:"subscriptionTab"},{translations:"on_demand_packs",analyticsLabel:"onDemandTab"}]},26515:function(e,n,t){t.d(n,{y:function(){return r}});var i=t(47842),o=t(13011),r=(0,t(8740).ZL)()(function(e){var n=e.breakpoints;return{root:(0,i.Z)({},n.down("lg"),{minWidth:o.r0})}})},1104:function(e,n,t){t.d(n,{Gk:function(){return v},JU:function(){return h},aY:function(){return l},lk:function(){return p}});var i=t(47842),o=t(70865),r=t(96670),a=t(26297),s=t(27739),c=t(75),d=t(14625),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.productSelectorsMap,t=void 0===n?{}:n;return Object.keys(t).reduce(function(e,n){var a,s,c,d,l,u,p,f,m=(null===(a=t[n])||void 0===a?void 0:a.initialItemIndex)||0;return(0,r.Z)((0,o.Z)({},e),(0,i.Z)({},n,{name:null===(s=t[n])||void 0===s?void 0:null===(c=s.items)||void 0===c?void 0:null===(d=c[m])||void 0===d?void 0:d.name,id:null===(l=t[n])||void 0===l?void 0:null===(u=l.items)||void 0===u?void 0:null===(p=u[m])||void 0===p?void 0:null===(f=p.product)||void 0===f?void 0:f.id}))},{})},u=function(e){var n=e.productSelectorsMap,t=e.isIndiaRegion;if(!e.overrideProductSelectorsMap)return n;var a=n;return t&&(a=(0,r.Z)((0,o.Z)({},a),(0,i.Z)({},d.PU,d.K9))),a},p=function(e){var n=e.id;return e.products.find(function(e){return e.id===n})||{}},f=function(e){var n=e.name;return e.products.find(function(e){return e.name===n})||{}},m=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.item,i=void 0===t?{}:t,o=n.products,r=void 0===o?[]:o,a=n.t,c=void 0===a?function(e){return e}:a,d=i.discountPercentage,l=i.name,u=void 0===l?"":l,m=i.translations,v=void 0===m?{}:m,h=i.id,g=void 0===h?"":h,b=g?p({id:g,products:r}):f({name:u,products:r}),y=v.header?c(v.header):null;e=b.downloadCredits?1===b.downloadCredits?c("feature-collections:number_images_single"):c("common:image_count_plural",{NUM_ASSETS:b.downloadCredits}):c(s.C5.includes(b.name)?"flex_plans_license_credits_plural":"credits_count",{NUM:b.allotmentCredits});var x=v.description?c(v.description,{NUM:b.allotmentCredits}):null;return{discountPercentage:d,name:u,labels:{header:y,title:e,description:x,productName:c("product-names:".concat(null==b?void 0:b.name)),perAsset:c("activation-drawers:per_image")},translations:{price:v.price||null},product:b}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.productSelectorsMap,t=e.products,a=void 0===t?[]:t,s=e.t,d=void 0===s?function(e){return e}:s,l=e.locale,p=e.isIndiaRegion,f=e.overrideProductSelectorsMap,v=(void 0===l?{}:l).currencyData.currency,h=u({productSelectorsMap:void 0===n?{}:n,isIndiaRegion:void 0!==p&&p,overrideProductSelectorsMap:void 0===f||f});return Object.keys(h).reduce(function(e,n){var t=h[n],s=t.items,l=t.translations,u=void 0===l?{}:l,p=u.caption,f=u.namespace,g=u.title,b=t.initialItemIndex;return(0,r.Z)((0,o.Z)({},e),(0,i.Z)({},n,{labels:{caption:Array.isArray(p)?p.map(function(e){return d(e)}):d(p,{CURRENCY_FULL_FORM:d("".concat(c.Fx_,"::common:currency_full_form_").concat(v.toLowerCase()))}),title:f?d(g,{ns:f}):d(g)},items:(void 0===s?[]:s).map(function(e){return m({item:e,products:a,t:d})}),initialItemIndex:void 0===b?0:b}))},{})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.tabs,t=e.t,i=void 0===t?function(e){return e}:t;return(void 0===n?[]:n).map(function(e){var n=e.translations,t=(0,a.Z)(e,["translations"]);return(0,r.Z)((0,o.Z)({},t),{label:i(n)})})}},55577:function(e,n,t){t.d(n,{f:function(){return s}});var i=t(52322),o=t(25237),r=t.n(o),a=t(46159),s=r()(function(){return t.e(39499).then(t.bind(t,39499)).then(function(e){return e.LicensingButton})},{loadableGenerated:{webpack:function(){return[39499]}},ssr:!1,loading:function(){return(0,i.jsx)(a.F,{monitoringOrigin:"LicensingButton"})}})},72253:function(e,n,t){t.d(n,{p:function(){return h}});var i=t(52322),o=t(67550),r=t(62197),a=t(14245),s=t(75),c=t(59877),d=function(e){var n=e.classes,t=e.cx,d=e.labels,l=e.data,u=e.highlightComponent;return(0,i.jsxs)("div",{className:n.row,children:[(0,i.jsx)("div",{className:n.radioButtonContainer,children:(0,i.jsx)(a.Y,{checked:l.isSelected,classes:{root:n.radioButton,checked:n.selectedRadioButton},inputProps:{"aria-label":d.productName},clickTrack:l.clickTrack})}),(0,i.jsxs)(o.Z,{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"flex-start",children:[(0,i.jsxs)(o.Z,{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",className:n.descriptionSection,children:[!!u&&u,d.header&&(0,i.jsx)(r.Z,{variant:"body2",children:(0,i.jsx)("span",{className:t(n.bold,n.header),children:d.header})}),(0,i.jsx)(r.Z,{variant:"body2",children:(0,i.jsx)("span",{className:n.bold,children:d.title})}),d.description&&(0,i.jsx)(r.Z,{variant:"caption",color:"textSecondary",children:d.description}),(0,i.jsx)(o.Z,{display:"flex",justifyContent:"center",alignItems:"flex-start",children:(0,i.jsx)(r.Z,{variant:"caption",children:l.priceTranslation?(0,i.jsx)(c.cC,{ns:s.AH,i18nKey:l.priceTranslation,values:{VALUE:l.price},components:{strong:(0,i.jsx)("b",{})}}):(0,i.jsx)("strong",{children:l.price})})})]}),(0,i.jsxs)(o.Z,{display:"flex",justifyContent:"center",alignItems:"flex-end",flexDirection:"column",flex:1,children:[l.discountPercentage&&(0,i.jsx)(r.Z,{variant:"body2",className:n.discountOriginalPrice,children:(0,i.jsx)("span",{className:n.bold,children:l.pricePerAsset})}),(0,i.jsx)(r.Z,{variant:"body2",children:l.discountPercentage?(0,i.jsx)("span",{className:n.discountPrice,children:l.pricePerAssetDiscounted}):(0,i.jsx)("span",{className:n.bold,children:l.pricePerAsset})}),(0,i.jsxs)(r.Z,{variant:"caption",children:[d.perAsset,l.discountPercentage&&"**"]})]})]})]})};d.defaultProps={highlightComponent:null,classes:{},labels:{},data:{},cx:""};var l=t(88167),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.analytics,t=(void 0===n?{}:n).pageSection,i=void 0===t?"licenseDrawer":t,o=e.item,r=void 0===o?{}:o,a=e.selectedItemId,s=e.selectedProductLicenseType,c=r.discountPercentage,d=r.name,u=void 0===d?"":d,p=r.product,f=void 0===p?{}:p,m=r.translations,v=void 0===m?{}:m,h=(0,l.IW)({downloadsPerMonth:null==f?void 0:f.downloadCredits,product:f,discountPercentage:c}),g=h.formattedPricePerAsset,b=h.formattedPricePerAssetDiscounted,y=h.formattedPricePerPaymentInterval;return{clickTrack:s?"".concat(i,".").concat(s,"LicenseSelected - ").concat(u):"".concat(i,".").concat(u),discountPercentage:c,price:y,pricePerAsset:g,pricePerAssetDiscounted:b,priceTranslation:null==v?void 0:v.price,isSelected:u===a}},p=t(70865),f=t(12410),m=(0,t(8740).ZL)()(function(e){var n=e.palette,t=e.tokens,i=t.fontSize,o=t.fontWeight;return{discountOriginalPrice:{fontSize:i.xs,textDecoration:"line-through"},discountPrice:{color:n.secondary.main,fontWeight:o.bold},header:{color:"#fff",backgroundColor:"#0070F0",padding:"4px 8px",borderRadius:2}}}),v=function(){var e=(0,f.Q)().classes,n=m(),t=n.classes,i=n.cx;return{classes:(0,p.Z)({},e,t),cx:i}},h=function(e){var n=e.item,t=e.selectedItemId,o=e.selectedProductLicenseType,r=e.highlightComponent,a=v(),s=a.classes,c=a.cx,l=u({item:n,selectedItemId:t,selectedProductLicenseType:o});return(0,i.jsx)(d,{classes:s,cx:c,data:l,labels:n.labels,highlightComponent:r})}},52417:function(e,n,t){t.d(n,{H:function(){return l}});var i=t(70865),o=t(52322),r=t(80422),a=t(39514),s=t(85966),c=t(9867),d=(0,t(8740).ZL)()(function(e){var n=e.palette;return{listTitle:{marginTop:0},listItemRoot:{display:"flex",flexDirection:"column",padding:c.W0.base,paddingLeft:c.W0.s,alignItems:"start","&:not(:last-child)":{borderBottom:"".concat(c.Cg.width.default," solid ").concat(n.border1Color)}},listRoot:{border:"".concat(c.Cg.width.default," solid ").concat(n.border1Color),borderRadius:c.Cg.radius.m,display:"flex",flexDirection:"column",padding:0,width:"100%"}}}),l=function(e){var n=e.analyticsLabel,t=e.drawerStatusMessageProps,c=e.ItemComponent,l=e.itemProps,u=e.onValueChange,p=e.title,f=e.values,m=d().classes;return(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)("h5",{className:m.listTitle,children:p}),t&&(0,o.jsx)(a.l,(0,i.Z)({},t)),(0,o.jsx)(r.Z,{classes:{root:m.listRoot},"aria-label":p,children:f.map(function(e){return(0,o.jsx)(s.H,{classes:{root:m.listItemRoot},onClick:function(){e.isDisabled||u(e)},labelTrack:e.analyticsLabel||n,children:(0,o.jsx)(c,(0,i.Z)({item:e},l))},e.name)})})]})};l.defaultProps={analyticsLabel:"",drawerStatusMessageProps:null,itemProps:{},onValueChange:function(){},title:"",values:[{}]}}}]);
//# sourceMappingURL=2905-d074aa231ccf6f6c.js.map