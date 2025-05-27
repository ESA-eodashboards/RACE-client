import{b as l,o as s,w as h,j as b,k as n,c as p,e as m,N as v,aB as g,H as w,K as y,F as x,B as _,T as k}from"./framework.ClYxdTPx.js";import{K as A,bl as $}from"./eo-dash.DTIQF4Kt.js";import{V as B}from"./VMain-Dm5YrD_X.DYLAhyaI.js";import"./commonjsHelpers.BosuxZz1.js";import"./ssrBoot-Zgc_Ttvi.BoZ6uXbh.js";class E extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        --row-height: ${this.getAttribute("row-height")||"1fr"};
        --column-width: ${this.getAttribute("column-width")||"1fr"};
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        ${this.getAttribute("fill-grid")!==null?`
          grid-template-columns: repeat(auto-fill, minmax(var(--column-width, 300px), 1fr));
          grid-template-rows: repeat(auto-fill, minmax(0, var(--row-height, 300px)));
          grid-auto-columns: var(--column-width, 300px);
          grid-auto-rows: var(--row-height, 300px);
          `:`
          grid-template-columns: repeat(12, ${this.getAttribute("column-width")?"var(--column-width)":"minmax(0, var(--column-width))"});
          grid-template-rows: repeat(12, ${this.getAttribute("row-height")?"var(--row-height)":"minmax(0, var(--row-height))"});
          `}
        overflow: auto;
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(t,i,a){i!==a&&(this[t]=a),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var i,a;const t=(o,r=0)=>o!=null&&o.toString().includes("/")?o.split("/")[r]:o;this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;
        }
          ${(a=(i=this.parentElement)==null?void 0:i.mediaBreakpoints)==null?void 0:a.map((o,r)=>`
              @media (min-width: ${o}px) {
                :host {
                          ${this.parentElement&&this.parentElement.getAttribute("fill-grid")!==null?`
                          grid-column: span ${t(this.getAttribute("w"),r)};
                          grid-row: span ${t(this.getAttribute("h"),r)};
                          `:`            
                            grid-column: ${parseInt(t(this.getAttribute("x"),r))+1} / span ${t(this.getAttribute("w"),r)};
                            grid-row: ${parseInt(t(this.getAttribute("y"),r))+1} / span ${t(this.getAttribute("h"),r)};
                        `}
                  display: ${t(this.getAttribute("w"),r)==="0"||t(this.getAttribute("h"),r)==="0"?"none":"block"}
                }
              }
              `).join(`
`)}
      </style>
      <slot></slot>
    `}attributeChangedCallback(t,i,a){i!==a&&(this[t]=a),this.render()}}customElements.define("eox-layout",E);customElements.define("eox-layout-item",C);const L=["gap"],S=["id","h","w","x","y"],T={__name:"DashboardLayout",setup(d){const{bgWidget:t,importedWidgets:i,gap:a}=$(),o={padding:a.value+"px",overflow:"hidden !important"};return(r,f)=>(s(),l(B,null,{default:h(()=>{var c;return[b("eox-layout",{gap:n(a),class:"layout-container",style:o},[(c=n(t))!=null&&c.component?(s(),p("eox-layout-item",{key:n(t).id,class:"bg-panel bg-surface",style:v(`margin: -${n(a)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(s(),l(g,null,{default:h(()=>{var e,u;return[(s(),l(w((e=n(t))==null?void 0:e.component),y({id:"bg-widget"},(u=n(t))==null?void 0:u.props),null,16))]}),_:1}))],4)):m("v-if",!0),(s(!0),p(x,null,_(n(i),(e,u)=>(s(),l(k,{key:u,name:"fade"},{default:h(()=>[e.value.component?(s(),p("eox-layout-item",{id:e.value.id.toString(),key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(s(),l(g,null,{default:h(()=>[(s(),l(w(e.value.component),y({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,S)):m("v-if",!0)]),_:2},1024))),128))],8,L)]}),_:1}))}},N=A(T,[["__scopeId","data-v-77ee454d"]]);export{N as default};
