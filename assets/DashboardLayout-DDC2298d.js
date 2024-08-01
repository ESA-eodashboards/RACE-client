import{_ as m,x as y,W as x,X as d,$ as t,a0 as r,a1 as l,a9 as _,a3 as n,a6 as u,a2 as c,a4 as p,d as h,a5 as g,F as f,a7 as v,ab as w}from"./index-S-7q3Wbj.js";import{V as k}from"./VMain-Dnts6hC9.js";import"./ssrBoot-BgCDgmZM.js";class A extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          background: lightgrey;
          border: 1px solid darkgrey;
          border-radius: 4px;
          padding: 4px 8px;
          overflow: hidden;


          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(a,s,o){s!==o&&(this[a]=o),this.render()}}customElements.define("eox-layout",A);customElements.define("eox-layout-item",C);const L=["gap"],$={key:0,class:"bg-panel",x:"0",y:"0",h:"12",w:"12"},E=["h","w","x","y"],M={__name:"DashboardLayout",setup(i){const a=y(x),[s]=d([a.template?.background]),o=d(a.template?.widgets);return(T,B)=>(t(),r(k,null,{default:l(()=>[_("eox-layout",{gap:n(a).template.gap??2},[n(s).component?(t(),u("eox-layout-item",$,[(t(),r(c,{suspensible:""},{default:l(()=>[(t(),r(p(n(s).component),h({id:"bg-widget"},n(s).props),null,16))]),_:1}))])):g("v-if",!0),(t(!0),u(f,null,v(n(o),(e,b)=>(t(),r(w,{key:b,name:"fade"},{default:l(()=>[e.value.component?(t(),u("eox-layout-item",{key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(t(),r(c,{suspensible:""},{default:l(()=>[(t(),r(p(e.value.component),h({key:e.value.id},e.value.props),null,16))]),_:2},1024))],8,E)):g("v-if",!0)]),_:2},1024))),128))],8,L)]),_:1}))}},I=m(M,[["__scopeId","data-v-a859692c"]]);export{I as default};
