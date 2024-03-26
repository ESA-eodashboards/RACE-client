import{e as f,f as w,r as x,V as k,t as r,J as d,K as p,P as h,y as t,L as m,M as v,N as C,v as g,F as A,O as L,x as y,z as V,T as E}from"./index-DvLaIhV0.js";import{u as b,V as $}from"./VMain-Bt3mKmQL.js";import{_ as B}from"./Dashboard-DZXmAt0Y.js";import{V as M,a as I}from"./ssrBoot-BILDvPDh.js";import"./color-CQsUKrQN.js";class P extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(a,o,e){o!==e&&(this[a]=e),this.render()}}class T extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(a,o,e){o!==e&&(this[a]=e),this.render()}}customElements.define("eox-layout",P);customElements.define("eox-layout-item",T);const z=["gap"],D={class:"bg-widget",x:"0",y:"0",h:"12",w:"12"},H=["x","y","h","w"],S={__name:"DashboardLayout",setup(u){const a=f(w),[o]=b([a.template?.background]),e=a.template?.widgets,l=b(e),c=x([]),{slideBtns:n,slideInOut:_}=k(c,e);return(N,R)=>(r(),d($,null,{default:p(()=>[h("eox-layout",{gap:t(a).template.gap??2},[h("eox-layout-item",D,[(r(),d(m(t(o).component),v(C(t(o).props)),null,16))]),(r(!0),g(A,null,L(t(e),(i,s)=>(r(),g("eox-layout-item",{ref_for:!0,ref_key:"itemEls",ref:c,key:s,class:"custom-widget",x:i.layout.x,y:i.layout.y,h:i.layout.h,w:i.layout.w},[y(M,{position:"absolute",variant:"tonal",style:V(t(n)[s].style),class:"slide-btn",onClick:W=>t(_)(s)},{default:p(()=>[y(I,{icon:t(n)[s].active?t(n)[s].icon.in:t(n)[s].icon.out},null,8,["icon"])]),_:2},1032,["style","onClick"]),(r(),d(m(t(l)[s].value.component),E({key:t(l)[s].value.id},t(l)[s].value.props),null,16))],8,H))),128))],8,z)]),_:1}))}},q=B(S,[["__scopeId","data-v-8f2ecaa3"]]);export{q as default};
