import{_ as y,E as B,c as d,r as p,aI as V,a1 as C,Z as s,a3 as i,b as f,a4 as o,V as m,a0 as M,$ as l,b6 as g,b7 as v,b8 as h,b9 as E,ba as I,bb as P}from"./index-f8dxmXZV.js";import $ from"./ExportState-DAZjFepP.js";import j from"./PopUp-CwLirwdi.js";import S from"./EodashItemFilter-D1nPKI6i.js";import"./index-CENMPn2W.js";import"./VImg-BuRJS72Q.js";import"./transition-DggmaiKO.js";import"./VOverlay-BmpqS1j0.js";import"./forwardRefs-ZmBkf6BX.js";import"./lit-element-CWYiTkeG.js";import"./unsafe-html-DlVJRlTN.js";import"./directive-CiXpmpUr.js";import"./radio.style-n0IccuDp.js";import"./toolcool-range-slider.min-55OLyAA1.js";import"./orient2d-DArCjZZA.js";const w={__name:"EodashMapBtns",props:{exportMap:{type:Boolean,default:!0},changeProjection:{type:Boolean,default:!0},compareIndicators:{type:Boolean,default:!0}},setup(n){const{smAndDown:u}=B(),x=d(()=>u?"70%":"500px"),b=d(()=>u?"90%":"500px"),r=p(!1),a=p(!1),c=p(null),k=()=>{P("compare"),a.value=!a.value};return V(c),(H,e)=>(l(),C("div",{ref_key:"rootRef",ref:c,class:"d-flex flex-column align-end justify-end my-3 pa-2"},[n.exportMap?(l(),s(m,{key:0,class:"map-btn",icon:[o(g)],onClick:e[0]||(e[0]=t=>r.value=!r.value)},null,8,["icon"])):i("v-if",!0),n.exportMap?(l(),s($,{key:1,modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t)},null,8,["modelValue"])):i("v-if",!0),n.changeProjection&&o(v)?(l(),s(m,{key:2,class:"map-btn",icon:[o(E)],onClick:e[2]||(e[2]=t=>o(h)(o(v)))},null,8,["icon"])):i("v-if",!0),n.compareIndicators?(l(),s(m,{key:3,class:"map-btn",icon:[o(I)],onClick:e[3]||(e[3]=t=>a.value=!a.value)},null,8,["icon"])):i("v-if",!0),f(j,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value=t),maxWidth:x.value,maxHeight:b.value},{default:M(()=>[f(S,{enableCompare:!0,"filters-title":"","results-title":"Select an indicator to compare","filter-properties":[],onSelect:k})]),_:1},8,["modelValue","maxWidth","maxHeight"])],512))}},L=y(w,[["__scopeId","data-v-37c140ec"]]);export{L as default};
