import{F as ke,ar as J,O as y,Z as g,as as be,U as f,Q as b,X as A,at as W,ab as N,au as pe,av as H,aw as L,ax as G,ay as p,a5 as $,az as K,aA as Q,aB as X,aC as Y,aD as Ce,b as x,aE as S,aF as Ve,aG as he,aH as xe,aI as Se,aJ as Ae,Y as Ie,aK as Pe,T as _e,aL as Te,aM as Be,aN as we,aO as Ne,aP as Le,aQ as $e,aa as z,aR as I,aS as De,aT as Fe,aU as ze,aV as P,V as E,aW as Ee,W as Me,w as M,H as O,aX as q,aY as Oe}from"./eo-dash.O8EGefss.js";import Re from"./PopUp-D3IyjsN4.Bz1I-oVh.js";import{V as je}from"./index-Bt5GEGxl.BCfh69TR.js";import{V as Z}from"./VImg-BmCNSu3X.DzE-jTky.js";import{G as a,F as B,h as w,as as Ue,at as Je,K as We,ap as He,aP as Ge,aE as Ke,p as Qe,b as Xe,o as _,w as c,j as k,a as h,t as R,k as T,c as j,e as Ye,B as qe}from"./framework.CzX0e2Xk.js";import"./commonjsHelpers.BosuxZz1.js";import"./VOverlay-BS-E4Z6g.BHf_1xeA.js";import"./forwardRefs-lhDuXD-N.D7UOGI_e.js";import"./transition-DHEuQX4I.lDMIPrLq.js";const Ze=J("v-spacer","div","VSpacer"),ee=y()({name:"VCardActions",props:g(),setup(e,l){let{slots:t}=l;return be({VBtn:{slim:!0,variant:"text"}}),f(()=>{var n;return a("div",{class:["v-card-actions",e.class],style:e.style},[(n=t.default)==null?void 0:n.call(t)])}),{}}}),ea=b({opacity:[Number,String],...g(),...A()},"VCardSubtitle"),aa=y()({name:"VCardSubtitle",props:ea(),setup(e,l){let{slots:t}=l;return f(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),ae=J("v-card-title"),ta=b({start:Boolean,end:Boolean,icon:p,image:String,text:String,...G(),...g(),...L(),...H(),...pe(),...A(),...N(),...W({variant:"flat"})},"VAvatar"),U=y()({name:"VAvatar",props:ta(),setup(e,l){let{slots:t}=l;const{themeClasses:n}=$(e),{borderClasses:u}=K(e),{colorClasses:o,colorStyles:v,variantClasses:r}=Q(e),{densityClasses:s}=X(e),{roundedClasses:i}=Y(e),{sizeClasses:d,sizeStyles:m}=Ce(e);return f(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,u.value,o.value,s.value,i.value,d.value,r.value,e.class],style:[v.value,m.value,e.style]},{default:()=>[t.default?a(S,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?a(Z,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(x,{key:"icon",icon:e.icon},null):e.text,q(!1,"v-avatar")]})),{}}}),na=b({appendAvatar:String,appendIcon:p,prependAvatar:String,prependIcon:p,subtitle:[String,Number],title:[String,Number],...g(),...L()},"VCardItem"),sa=y()({name:"VCardItem",props:na(),setup(e,l){let{slots:t}=l;return f(()=>{var i;const n=!!(e.prependAvatar||e.prependIcon),u=!!(n||t.prepend),o=!!(e.appendAvatar||e.appendIcon),v=!!(o||t.append),r=!!(e.title!=null||t.title),s=!!(e.subtitle!=null||t.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[u&&a("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?a(S,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):a(B,null,[e.prependAvatar&&a(U,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(x,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[r&&a(ae,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),s&&a(aa,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),v&&a("div",{key:"append",class:"v-card-item__append"},[t.append?a(S,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):a(B,null,[e.appendIcon&&a(x,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(U,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),la=b({opacity:[Number,String],...g(),...A()},"VCardText"),te=y()({name:"VCardText",props:la(),setup(e,l){let{slots:t}=l;return f(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),ia=b({appendAvatar:String,appendIcon:p,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:p,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...G(),...g(),...L(),...Ie(),...Ae(),...Se(),...xe(),...he(),...H(),...Ve(),...A(),...N(),...W({variant:"elevated"})},"VCard"),da=y()({name:"VCard",directives:{Ripple:Pe},props:ia(),setup(e,l){let{attrs:t,slots:n}=l;const{themeClasses:u}=$(e),{borderClasses:o}=K(e),{colorClasses:v,colorStyles:r,variantClasses:s}=Q(e),{densityClasses:i}=X(e),{dimensionStyles:d}=_e(e),{elevationClasses:m}=Te(e),{loaderClasses:ne}=Be(e),{locationStyles:se}=we(e),{positionClasses:le}=Ne(e),{roundedClasses:ie}=Y(e),C=Le(e,t),de=w(()=>e.link!==!1&&C.isLink.value),V=w(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return f(()=>{const re=de.value?"a":e.tag,oe=!!(n.title||e.title!=null),ce=!!(n.subtitle||e.subtitle!=null),ue=oe||ce,ve=!!(n.append||e.appendAvatar||e.appendIcon),me=!!(n.prepend||e.prependAvatar||e.prependIcon),ye=!!(n.image||e.image),ge=ue||me||ve,fe=!!(n.text||e.text!=null);return Ue(a(re,We({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":V.value},u.value,o.value,v.value,i.value,m.value,ne.value,le.value,ie.value,s.value,e.class],style:[r.value,d.value,se.value,e.style],onClick:V.value&&C.navigate,tabindex:e.disabled?-1:void 0},C.linkProps),{default:()=>{var D;return[ye&&a("div",{key:"image",class:"v-card__image"},[n.image?a(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):a(Z,{key:"image-img",cover:!0,src:e.image},null)]),a(Oe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),ge&&a(sa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),fe&&a(te,{key:"text"},{default:()=>{var F;return[((F=n.text)==null?void 0:F.call(n))??e.text]}}),(D=n.default)==null?void 0:D.call(n),n.actions&&a(ee,null,{default:n.actions}),q(V.value,"v-card")]}}),[[Je("ripple"),V.value&&e.ripple]])}),{}}}),ra=b({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...g(),...N()},"VDivider"),oa=y()({name:"VDivider",props:ra(),setup(e,l){let{attrs:t,slots:n}=l;const{themeClasses:u}=$(e),{textColorClasses:o,textColorStyles:v}=$e(He(e,"color")),r=w(()=>{const s={};return e.length&&(s[e.vertical?"height":"width"]=z(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=z(e.thickness)),s});return f(()=>{const s=a("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},u.value,o.value,e.class],style:[r.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return n.default?a("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[s,a("div",{class:"v-divider__content"},[n.default()]),s]):s}),{}}}),ca={class:"pa-3 code-block"},ua={style:{position:"absolute",bottom:"15px"}},va={key:0,class:"text-success mr-3"},ma={__name:"ExportState",props:Ge({getLayers:{type:Function,default:Me}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Ke(e,"modelValue"),t=e,n=Qe(!1),u=[{id:Symbol(),copyFn:async()=>await P(v(),n),copyAs:"simple map"},{id:Symbol(),copyFn:async()=>await P(JSON.stringify(t.getLayers()),n),copyAs:"layers configuration"},{id:Symbol(),copyFn:async()=>await P(o(),n),copyAs:"map tour section"}],o=()=>{const[r,s,i]=M.value,d="### <!--{ layers=",m=`zoom="${i}" center=[${[r,s]}] projection="${O.value}" animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
`;return`${d}'${JSON.stringify(I(t.getLayers()))}' ${m}`},v=()=>{const[r,s,i]=M.value,d='## Map Example <!--{as="eox-map" style="width: 100%; height: 500px;" layers=',m=`zoom="${i}" center=[${[r,s]}] projection="${O.value}" }-->`;return`${d}'${JSON.stringify(I(t.getLayers()))}' ${m}`};return(r,s)=>(_(),Xe(Re,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i)},{default:c(()=>[a(da,{style:{"max-height":"498px"}},{default:c(()=>[a(ae,{class:"bg-primary",style:{"max-height":"49px"}},{default:c(()=>s[2]||(s[2]=[k("h5",{class:"text-h5"},"Storytelling map configuration",-1)])),_:1}),a(te,{class:"py-5 overflow-auto",style:{height:"400px"}},{default:c(()=>[s[4]||(s[4]=k("p",{class:"text-body-2"},[h(" Copy and paste this code into the map "),k("b",null,"layers field"),h(" of the storytelling editor: ")],-1)),k("div",ca,R(T(I)(e.getLayers())),1),k("div",ua,[a(je,null,{default:c(()=>[n.value?(_(),j("div",va,[a(x,{color:"success",left:"",icon:[T(De)]},null,8,["icon"]),s[3]||(s[3]=k("small",null,"copied!",-1))])):Ye("v-if",!0)]),_:1})]),a(Fe,{class:"d-flex pt-3 justify-end"},{default:c(()=>[a(ze,{cols:"6",class:"flex-column align-center text-end"},{default:c(()=>[(_(),j(B,null,qe(u,i=>a(E,{class:"text-body-2",onClick:i.copyFn,key:i.id,small:"",variant:"text","prepend-icon":[T(Ee)]},{default:c(()=>[h(" copy as "+R(i.copyAs),1)]),_:2},1032,["onClick","prepend-icon"])),64))]),_:1})]),_:1})]),_:1}),a(oa),a(ee,{style:{"max-height":"49px"}},{default:c(()=>[a(Ze),a(E,{variant:"text",onClick:s[0]||(s[0]=i=>l.value=!l.value)},{default:c(()=>s[5]||(s[5]=[h(" Close ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},xa=ke(ma,[["__scopeId","data-v-a263a06d"]]);export{xa as default};
