import{b as r,o as a,w as u,j as b,N as d,k as o,c as i,e as h,az as m,H as y,K as g,F as f,B as x,T as _}from"./framework.MubbJdOF.js";import{F as v,b2 as w}from"./eo-dash.CdZYmsUC.js";import{V as k}from"./VMain-eZDKIfmJ.BQvSz5gI.js";import"./commonjsHelpers.BosuxZz1.js";import"./ssrBoot-BP7SYRyC.B6-QWvq3.js";class L extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}class A extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}customElements.define("eox-layout",L);customElements.define("eox-layout-item",A);const $=["gap"],C=["id","h","w","x","y"],E={__name:"DashboardLayout",setup(c){const{bgWidget:s,importedWidgets:n,gap:t}=w();return(T,B)=>(a(),r(k,null,{default:u(()=>{var p;return[b("eox-layout",{gap:o(t),style:d(`padding: ${o(t)}px`)},[(p=o(s))!=null&&p.component?(a(),i("eox-layout-item",{key:o(s).id,class:"bg-panel bg-surface",style:d(`margin: -${o(t)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(a(),r(m,null,{default:u(()=>{var e,l;return[(a(),r(y((e=o(s))==null?void 0:e.component),g({id:"bg-widget"},(l=o(s))==null?void 0:l.props),null,16))]}),_:1}))],4)):h("v-if",!0),(a(!0),i(f,null,x(o(n),(e,l)=>(a(),r(_,{key:l,name:"fade"},{default:u(()=>[e.value.component?(a(),i("eox-layout-item",{id:e.value.id.toString(),key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(a(),r(m,null,{default:u(()=>[(a(),r(y(e.value.component),g({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,C)):h("v-if",!0)]),_:2},1024))),128))],12,$)]}),_:1}))}},z=v(E,[["__scopeId","data-v-7294ae56"]]);export{z as default};
