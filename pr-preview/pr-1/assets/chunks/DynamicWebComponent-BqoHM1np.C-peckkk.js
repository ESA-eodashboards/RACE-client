import{a as m}from"./eo-dash.CdZYmsUC.js";import{aC as u,p as d,v as f,x as p,c as g,o as s,b as y,K as k,H as _}from"./framework.MubbJdOF.js";import"./commonjsHelpers.BosuxZz1.js";const h={class:"d-flex flex-column fill-height overflow-auto"},P={__name:"DynamicWebComponent",props:{link:{type:[String,Function],required:!0},constructorProp:String,tagName:{type:String,required:!0},properties:{type:Object,default:()=>({})},onMounted:Function,onUnmounted:Function},async setup(o){let n,a;const e=o,i=async()=>{var t;return typeof e.link=="string"?await import(e.link):await((t=e.link)==null?void 0:t.call(e))},l=customElements.get(e.tagName)?null:([n,a]=u(()=>i().catch(t=>{console.error(t)})),n=await n,a(),n);if(!customElements.get(e.tagName)&&e.constructorProp)try{const t=l[e.constructorProp];customElements.define(e.tagName,t)}catch(t){console.error(`[eodash] ${e.tagName} is not defined, please add a valid link or constructorProp`),console.error(t)}const c=m(),r=d(null);return f(()=>{var t;(t=e.onMounted)==null||t.call(e,r.value,c)}),p(()=>{var t;(t=e.onUnmounted)==null||t.call(e,r.value,c)}),(t,x)=>(s(),g("span",h,[(s(),y(_(o.tagName),k(o.properties,{ref_key:"elementRef",ref:r}),null,16))]))}};export{P as default};
