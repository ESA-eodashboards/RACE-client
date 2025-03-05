import{aH as Ye,p as E,v as Ge,b as O,o as C,w as L,c as G,G as h,az as fe,e as ie,k as X,H as he,K as W,F as Y,B as me,as as U,j as be,a as ge,aN as ue,t as De,h as w,ap as M,D as R,q as Ie,L as Pe,at as je,P as Ue,V as Ne}from"./framework.MubbJdOF.js";import{F as qe,b2 as Ke,b1 as Qe,V as D,O as $,Q as A,a1 as Be,aB as Ze,a6 as Je,as as et,U as p,aa as re,aQ as tt,X as ce,aw as nt,i as ot,R as Ee,u as at,b3 as ze,b4 as ye,b5 as st,a7 as xe,a3 as Re,b6 as lt,b7 as it,b8 as ut,Z as de,ay as Se,a_ as rt,a5 as ct,b9 as dt,ba as vt,ab as ft,bb as We,bc as ht,b as we}from"./eo-dash.CdZYmsUC.js";import{V as mt}from"./VMain-eZDKIfmJ.BQvSz5gI.js";import{u as bt,f as gt,b as yt,s as xt,a as St,m as wt}from"./forwardRefs-lhDuXD-N.CulvC4YU.js";import{u as kt}from"./ssrBoot-BP7SYRyC.B6-QWvq3.js";import{M as Tt}from"./transition-DHEuQX4I.RroJW5Jx.js";import{a as ke}from"./index-Bt5GEGxl.3ZnN3rpm.js";import"./commonjsHelpers.BosuxZz1.js";const Vt=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:i}=e,d=.5,a=16;e.offsetX=n-o,e.offsetY=i-t,Math.abs(e.offsetY)<d*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<d*Math.abs(e.offsetY)&&(e.up&&i<t-a&&e.up(e),e.down&&i>t+a&&e.down(e))};function Ct(e,o){var t;const n=e.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,(t=o.start)==null||t.call(o,{originalEvent:e,...o})}function _t(e,o){var t;const n=e.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,(t=o.end)==null||t.call(o,{originalEvent:e,...o}),Vt(o)}function It(e,o){var t;const n=e.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,(t=o.move)==null||t.call(o,{originalEvent:e,...o})}function Pt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>Ct(n,o),touchend:n=>_t(n,o),touchmove:n=>It(n,o)}}function Bt(e,o){var f;const n=o.value,t=n!=null&&n.parent?e.parentElement:e,i=(n==null?void 0:n.options)??{passive:!0},d=(f=o.instance)==null?void 0:f.$.uid;if(!t||!d)return;const a=Pt(o.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[d]=a,We(a).forEach(c=>{t.addEventListener(c,a[c],i)})}function Et(e,o){var d,a;const n=(d=o.value)!=null&&d.parent?e.parentElement:e,t=(a=o.instance)==null?void 0:a.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const i=n._touchHandlers[t];We(i).forEach(f=>{n.removeEventListener(f,i[f])}),delete n._touchHandlers[t]}const He={mounted:Bt,unmounted:Et},ve=Symbol.for("vuetify:v-tabs"),zt=A({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Re(lt({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Me=$()({name:"VTab",props:zt(),setup(e,o){let{slots:n,attrs:t}=o;const{textColorClasses:i,textColorStyles:d}=tt(e,"sliderColor"),a=E(),f=E(),c=w(()=>e.direction==="horizontal"),m=w(()=>{var r,u;return((u=(r=a.value)==null?void 0:r.group)==null?void 0:u.isSelected.value)??!1});function x(r){var g,v;let{value:u}=r;if(u){const k=(v=(g=a.value)==null?void 0:g.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),B=f.value;if(!k||!B)return;const H=getComputedStyle(k).color,_=k.getBoundingClientRect(),I=B.getBoundingClientRect(),y=c.value?"x":"y",S=c.value?"X":"Y",T=c.value?"right":"bottom",V=c.value?"width":"height",N=_[y],q=I[y],P=N>q?_[T]-I[T]:_[y]-I[y],K=Math.sign(P)>0?c.value?"right":"bottom":Math.sign(P)<0?c.value?"left":"top":"center",Z=(Math.abs(P)+(Math.sign(P)<0?_[V]:I[V]))/Math.max(_[V],I[V])||0,F=_[V]/I[V]||0,z=1.5;yt(B,{backgroundColor:[H,"currentcolor"],transform:[`translate${S}(${P}px) scale${S}(${F})`,`translate${S}(${P/z}px) scale${S}(${(Z-1)/z+1})`,"none"],transformOrigin:Array(3).fill(K)},{duration:225,easing:xt})}}return p(()=>{const r=D.filterProps(e);return h(D,W({symbol:ve,ref:a,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},r,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...n,default:()=>{var u;return h(Y,null,[((u=n.default)==null?void 0:u.call(n))??e.text,!e.hideSlider&&h("div",{ref:f,class:["v-tab__slider",i.value],style:d.value},null)])}})}),gt({},a)}}),$e=Symbol.for("vuetify:v-window"),Ae=Symbol.for("vuetify:v-window-group"),pe=A({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...de(),...ce(),...ft()},"VWindow"),Te=$()({name:"VWindow",directives:{Touch:He},props:pe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=ct(e),{isRtl:i}=Ee(),{t:d}=dt(),a=ze(e,Ae),f=E(),c=w(()=>i.value?!e.reverse:e.reverse),m=R(!1),x=w(()=>{const y=e.direction==="vertical"?"y":"x",T=(c.value?!m.value:m.value)?"-reverse":"";return`v-window-${y}${T}-transition`}),r=R(0),u=E(void 0),g=w(()=>a.items.value.findIndex(y=>a.selected.value.includes(y.id)));Ie(g,(y,S)=>{const T=a.items.value.length,V=T-1;T<=2?m.value=y<S:y===V&&S===0?m.value=!0:y===0&&S===V?m.value=!1:m.value=y<S}),Ne($e,{transition:x,isReversed:m,transitionCount:r,transitionHeight:u,rootRef:f});const v=w(()=>e.continuous||g.value!==0),k=w(()=>e.continuous||g.value!==a.items.value.length-1);function B(){v.value&&a.prev()}function H(){k.value&&a.next()}const _=w(()=>{const y=[],S={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:a.prev,"aria-label":d("$vuetify.carousel.prev")};y.push(v.value?n.prev?n.prev({props:S}):h(D,S,null):h("div",null,null));const T={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:a.next,"aria-label":d("$vuetify.carousel.next")};return y.push(k.value?n.next?n.next({props:T}):h(D,T,null):h("div",null,null)),y}),I=w(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?B():H()},right:()=>{c.value?H():B()},start:S=>{let{originalEvent:T}=S;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return p(()=>U(h(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var y,S;return[h("div",{class:"v-window__container",style:{height:u.value}},[(y=n.default)==null?void 0:y.call(n,{group:a}),e.showArrows!==!1&&h("div",{class:"v-window__controls"},[_.value])]),(S=n.additional)==null?void 0:S.call(n,{group:a})]}}),[[je("touch"),I.value]])),{group:a}}}),Rt=A({...Re(pe(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Wt=$()({name:"VTabsWindow",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=Pe(ve,null),i=Be(e,"modelValue"),d=w({get(){var a;return i.value!=null||!t?i.value:(a=t.items.value.find(f=>t.selected.value.includes(f.id)))==null?void 0:a.value},set(a){i.value=a}});return p(()=>{const a=Te.filterProps(e);return h(Te,W({_as:"VTabsWindow"},a,{modelValue:d.value,"onUpdate:modelValue":f=>d.value=f,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),Fe=A({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...de(),...ht(),...wt()},"VWindowItem"),Ve=$()({name:"VWindowItem",directives:{Touch:He},props:Fe(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=Pe($e),i=vt(e,Ae),{isBooted:d}=kt();if(!t||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=R(!1),f=w(()=>d.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function m(){var v;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=re((v=t.rootRef.value)==null?void 0:v.clientHeight)),t.transitionCount.value+=1)}function x(){c()}function r(v){a.value&&Ue(()=>{!f.value||!a.value||!t||(t.transitionHeight.value=re(v.clientHeight))})}const u=w(()=>{const v=t.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof v!="string"?t.transition.value:v,onBeforeEnter:m,onAfterEnter:c,onEnterCancelled:x,onBeforeLeave:m,onAfterLeave:c,onLeaveCancelled:x,onEnter:r}:!1}),{hasContent:g}=St(e,i.isSelected);return p(()=>h(Tt,{transition:u.value,disabled:!d.value},{default:()=>{var v;return[U(h("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[g.value&&((v=n.default)==null?void 0:v.call(n))]),[[ue,i.isSelected.value]])]}})),{groupItem:i}}}),Ht=A({...Fe()},"VTabsWindowItem"),Mt=$()({name:"VTabsWindowItem",props:Ht(),setup(e,o){let{slots:n}=o;return p(()=>{const t=Ve.filterProps(e);return h(Ve,W({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function $t(e){let{selectedElement:o,containerElement:n,isRtl:t,isHorizontal:i}=e;const d=j(i,n),a=Oe(i,t,n),f=j(i,o),c=Le(i,o),m=f*.4;return a>c?c-m:a+d<c+f?c-d+f+m:a}function At(e){let{selectedElement:o,containerElement:n,isHorizontal:t}=e;const i=j(t,n),d=Le(t,o),a=j(t,o);return d-i/2+a/2}function Ce(e,o){const n=e?"scrollWidth":"scrollHeight";return(o==null?void 0:o[n])||0}function pt(e,o){const n=e?"clientWidth":"clientHeight";return(o==null?void 0:o[n])||0}function Oe(e,o,n){if(!n)return 0;const{scrollLeft:t,offsetWidth:i,scrollWidth:d}=n;return e?o?d-i+t:t:n.scrollTop}function j(e,o){const n=e?"offsetWidth":"offsetHeight";return(o==null?void 0:o[n])||0}function Le(e,o){const n=e?"offsetLeft":"offsetTop";return(o==null?void 0:o[n])||0}const Ft=Symbol.for("vuetify:v-slide-group"),Xe=A({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ft},nextIcon:{type:Se,default:"$next"},prevIcon:{type:Se,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...de(),...ut({mobile:null}),...ce(),...it({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),_e=$()({name:"VSlideGroup",props:Xe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{isRtl:t}=Ee(),{displayClasses:i,mobile:d}=at(e),a=ze(e,e.symbol),f=R(!1),c=R(0),m=R(0),x=R(0),r=w(()=>e.direction==="horizontal"),{resizeRef:u,contentRect:g}=ye(),{resizeRef:v,contentRect:k}=ye(),B=st(),H=w(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),_=w(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[0]):-1),I=w(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[a.selected.value.length-1]):-1);if(xe){let l=-1;Ie(()=>[a.selected.value,g.value,k.value,r.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(g.value&&k.value){const s=r.value?"width":"height";m.value=g.value[s],x.value=k.value[s],f.value=m.value+1<x.value}if(_.value>=0&&v.el){const s=v.el.children[I.value];S(s,e.centerActive)}})})}const y=R(!1);function S(l,s){let b=0;s?b=At({containerElement:u.el,isHorizontal:r.value,selectedElement:l}):b=$t({containerElement:u.el,isHorizontal:r.value,isRtl:t.value,selectedElement:l}),T(b)}function T(l){if(!xe||!u.el)return;const s=j(r.value,u.el),b=Oe(r.value,t.value,u.el);if(!(Ce(r.value,u.el)<=s||Math.abs(l-b)<16)){if(r.value&&t.value&&u.el){const{scrollWidth:se,offsetWidth:le}=u.el;l=se-le-l}r.value?B.horizontal(l,H.value):B(l,H.value)}}function V(l){const{scrollTop:s,scrollLeft:b}=l.target;c.value=r.value?b:s}function N(l){if(y.value=!0,!(!f.value||!v.el)){for(const s of l.composedPath())for(const b of v.el.children)if(b===s){S(b);return}}}function q(l){y.value=!1}let P=!1;function K(l){var s;!P&&!y.value&&!(l.relatedTarget&&((s=v.el)!=null&&s.contains(l.relatedTarget)))&&z(),P=!1}function Q(){P=!0}function Z(l){if(!v.el)return;function s(b){l.preventDefault(),z(b)}r.value?l.key==="ArrowRight"?s(t.value?"prev":"next"):l.key==="ArrowLeft"&&s(t.value?"next":"prev"):l.key==="ArrowDown"?s("next"):l.key==="ArrowUp"&&s("prev"),l.key==="Home"?s("first"):l.key==="End"&&s("last")}function F(l,s){if(!l)return;let b=l;do b=b==null?void 0:b[s==="next"?"nextElementSibling":"previousElementSibling"];while(b!=null&&b.hasAttribute("disabled"));return b}function z(l){if(!v.el)return;let s;if(!l)s=rt(v.el)[0];else if(l==="next"){if(s=F(v.el.querySelector(":focus"),l),!s)return z("first")}else if(l==="prev"){if(s=F(v.el.querySelector(":focus"),l),!s)return z("last")}else l==="first"?(s=v.el.firstElementChild,s!=null&&s.hasAttribute("disabled")&&(s=F(s,"next"))):l==="last"&&(s=v.el.lastElementChild,s!=null&&s.hasAttribute("disabled")&&(s=F(s,"prev")));s&&s.focus({preventScroll:!0})}function J(l){const s=r.value&&t.value?-1:1,b=(l==="prev"?-s:s)*m.value;let ae=c.value+b;if(r.value&&t.value&&u.el){const{scrollWidth:se,offsetWidth:le}=u.el;ae+=se-le}T(ae)}const ee=w(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),te=w(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return f.value||Math.abs(c.value)>0;case"mobile":return d.value||f.value||Math.abs(c.value)>0;default:return!d.value&&(f.value||Math.abs(c.value)>0)}}),ne=w(()=>Math.abs(c.value)>1),oe=w(()=>{if(!u.value)return!1;const l=Ce(r.value,u.el),s=pt(r.value,u.el);return l-s-Math.abs(c.value)>1});return p(()=>h(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":te.value,"v-slide-group--is-overflowing":f.value},i.value,e.class],style:e.style,tabindex:y.value||a.selected.value.length?-1:0,onFocus:K},{default:()=>{var l,s,b;return[te.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ne.value}],onMousedown:Q,onClick:()=>ne.value&&J("prev")},[((l=n.prev)==null?void 0:l.call(n,ee.value))??h(ke,null,{default:()=>[h(we,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:V},[h("div",{ref:v,class:"v-slide-group__content",onFocusin:N,onFocusout:q,onKeydown:Z},[(s=n.default)==null?void 0:s.call(n,ee.value)])]),te.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!oe.value}],onMousedown:Q,onClick:()=>oe.value&&J("next")},[((b=n.next)==null?void 0:b.call(n,ee.value))??h(ke,null,{default:()=>[h(we,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:J,scrollOffset:c,focus:z,hasPrev:ne,hasNext:oe}}});function Ot(e){return e?e.map(o=>ot(o)?o:{text:o,value:o}):[]}const Lt=A({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Xe({mandatory:"force",selectedClass:"v-tab-item--selected"}),...nt(),...ce()},"VTabs"),Xt=$()({name:"VTabs",props:Lt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const i=Be(e,"modelValue"),d=w(()=>Ot(e.items)),{densityClasses:a}=Ze(e),{backgroundColorClasses:f,backgroundColorStyles:c}=Je(M(e,"bgColor")),{scopeId:m}=bt();return et({VTab:{color:M(e,"color"),direction:M(e,"direction"),stacked:M(e,"stacked"),fixed:M(e,"fixedTabs"),sliderColor:M(e,"sliderColor"),hideSlider:M(e,"hideSlider")}}),p(()=>{const x=_e.filterProps(e),r=!!(t.window||e.items.length>0);return h(Y,null,[h(_e,W(x,{modelValue:i.value,"onUpdate:modelValue":u=>i.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,f.value,e.class],style:[{"--v-tabs-height":re(e.height)},c.value,e.style],role:"tablist",symbol:ve},m,n),{default:()=>{var u;return[((u=t.default)==null?void 0:u.call(t))??d.value.map(g=>{var v;return((v=t.tab)==null?void 0:v.call(t,{item:g}))??h(Me,W(g,{key:g.text,value:g.value}),{default:t[`tab.${g.value}`]?()=>{var k;return(k=t[`tab.${g.value}`])==null?void 0:k.call(t,{item:g})}:void 0})})]}}),r&&h(Wt,W({modelValue:i.value,"onUpdate:modelValue":u=>i.value=u,key:"tabs-window"},m),{default:()=>{var u;return[d.value.map(g=>{var v;return((v=t.item)==null?void 0:v.call(t,{item:g}))??h(Mt,{value:g.value},{default:()=>{var k;return(k=t[`item.${g.value}`])==null?void 0:k.call(t,{item:g})}})}),(u=t.window)==null?void 0:u.call(t)]}})])}),{}}}),Yt={key:0,id:"overlay",class:"pa-2 panel bg-surface"},Gt={class:"d-flex py-2 justify-end align-end"},Dt={class:"component-container"},jt={__name:"MobileLayout",setup(e){Ye(m=>({e61d6a5e:f.value,"3e27c4c6":a.value,e8144352:c.value}));const{bgWidget:o,importedWidgets:n}=Ke(),{mainRect:t}=Qe(),i=E(-1),d=E(null),a=E(""),f=E(""),c=E("");return Ge(()=>{var m,x;f.value=t.value.top+"px",c.value=(t.value.bottom||48)+"px",a.value=t.value.bottom+(((x=(m=d.value)==null?void 0:m.$el)==null?void 0:x.clientHeight)??0)+"px"}),(m,x)=>(C(),O(mt,{class:"overflow-hidden main"},{default:L(()=>[(C(),O(fe,{suspensible:""},{default:L(()=>{var r;return[(r=X(o))!=null&&r.component?(C(),O(he(X(o).component),W({id:"bg-widget",key:X(o).id},X(o).props),null,16)):ie("v-if",!0)]}),_:1})),(C(!0),G(Y,null,me(X(n),(r,u)=>(C(),G(Y,{key:u},[r.value.component?U((C(),G("div",Yt,[be("div",Gt,[h(D,{icon:"",variant:"text",class:"close-btn",onClick:x[0]||(x[0]=g=>i.value=-1)},{default:L(()=>x[2]||(x[2]=[ge("✕")])),_:1})]),(C(),O(fe,{suspensible:""},{default:L(()=>[U(be("div",Dt,[(C(),O(he(r.value.component),W({key:r.value.id,ref_for:!0},r.value.props),null,16))],512),[[ue,i.value===u]])]),_:2},1024))],512)),[[ue,i.value===u]]):ie("v-if",!0)],64))),128)),h(Xt,{ref_key:"tabs",ref:d,"align-tabs":"center","bg-color":"surface",class:"tabs","show-arrows":"",modelValue:i.value,"onUpdate:modelValue":x[1]||(x[1]=r=>i.value=r)},{default:L(()=>[(C(!0),G(Y,null,me(X(n),(r,u)=>(C(),G(Y,{key:u},[r.value.component?(C(),O(Me,{key:0,value:u},{default:L(()=>[ge(De(r.value.title),1)]),_:2},1032,["value"])):ie("v-if",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1}))}},tn=qe(jt,[["__scopeId","data-v-d963d7c7"]]);export{tn as default};
