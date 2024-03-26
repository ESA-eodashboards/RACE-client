function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{w as m,a as p,x as d,ac as f,a6 as _,aD as g,o as u,f as y,y as k,J as h,A as v,_ as w}from"./index-Cf7-fAKn.js";const x={class:"d-flex flex-column fill-height overflow-auto"},N={__name:"DynamicWebComponent",props:{link:{type:[String,Function],required:!0},constructorProp:String,tagName:{type:String,required:!0},properties:{type:Object,default:()=>({})},onMounted:Function,onUnmounted:Function},async setup(o){let t,s;const e=o,i=async()=>typeof e.link=="string"?await w(()=>import(e.link),__vite__mapDeps([])):await e.link(),l=customElements.get(e.tagName)?null:([t,s]=m(()=>i().catch(n=>{console.error(n)})),t=await t,s(),t);if(!customElements.get(e.tagName)&&e.constructorProp){const n=l[e.constructorProp];customElements.define(e.tagName,n)}const a=p(),r=d(null),c=f();return _(()=>{e.onMounted?.(r.value,a,c)}),g(()=>{e.onUnmounted?.(r.value,a,c)}),(n,P)=>(u(),y("span",x,[(u(),k(v(o.tagName),h(o.properties,{ref_key:"elementRef",ref:r}),null,16))]))}};export{N as default};
