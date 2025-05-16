import{b as n,o as s,w as u,j as b,N as c,k as i,c as p,e as d,aB as g,H as w,K as f,F as x,B as v,T as _}from"./framework.Ci57ZDG0.js";import{y as $,b4 as A}from"./eo-dash.1CY7szAX.js";import{V as k}from"./VMain-CevfwHIM.C7ClZRsA.js";import"./commonjsHelpers.BosuxZz1.js";import"./ssrBoot-Zgc_Ttvi.ky3YEwr3.js";class B extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(t,o,e){o!==e&&(this[t]=e),this.render()}}class E extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.parentElement?this.render():setTimeout(()=>{this.render()})}render(){var o;const t=(e,r=0)=>e!=null&&e.toString().includes("/")?e.split("/")[r]:e;this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;
        }
          ${(o=this.parentElement)==null?void 0:o.mediaBreakpoints.map((e,r)=>`
              @media (min-width: ${e}px) {
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
    `}attributeChangedCallback(t,o,e){o!==e&&(this[t]=e),this.render()}}customElements.define("eox-layout",B);customElements.define("eox-layout-item",E);const L=["gap"],T=["id","h","w","x","y"],C={__name:"DashboardLayout",setup(m){const{bgWidget:t,importedWidgets:o,gap:e}=A();return(r,y)=>(s(),n(k,null,{default:u(()=>{var h;return[b("eox-layout",{gap:i(e),style:c(`padding: ${i(e)}px`)},[(h=i(t))!=null&&h.component?(s(),p("eox-layout-item",{key:i(t).id,class:"bg-panel bg-surface",style:c(`margin: -${i(e)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(s(),n(g,null,{default:u(()=>{var a,l;return[(s(),n(w((a=i(t))==null?void 0:a.component),f({id:"bg-widget"},(l=i(t))==null?void 0:l.props),null,16))]}),_:1}))],4)):d("v-if",!0),(s(!0),p(x,null,v(i(o),(a,l)=>(s(),n(_,{key:l,name:"fade"},{default:u(()=>[a.value.component?(s(),p("eox-layout-item",{id:a.value.id.toString(),key:a.value.id,class:"panel bg-surface",h:a.value.layout.h,w:a.value.layout.w,x:a.value.layout.x,y:a.value.layout.y},[(s(),n(g,null,{default:u(()=>[(s(),n(w(a.value.component),f({key:a.value.id,ref_for:!0},a.value.props),null,16))]),_:2},1024))],8,T)):d("v-if",!0)]),_:2},1024))),128))],12,L)]}),_:1}))}},I=$(C,[["__scopeId","data-v-7294ae56"]]);export{I as default};
