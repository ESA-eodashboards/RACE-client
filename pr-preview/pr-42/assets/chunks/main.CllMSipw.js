class h extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(t,s,i){s!==i&&(this[t]=i),this.render()}}class n extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var s,i;const t=(r,e=0)=>r!=null&&r.toString().includes("/")?r.split("/")[e]:r;this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;
        }
          ${(i=(s=this.parentElement)==null?void 0:s.mediaBreakpoints)==null?void 0:i.map((r,e)=>`
              @media (min-width: ${r}px) {
                :host {
                          ${this.parentElement&&this.parentElement.getAttribute("fill-grid")!==null?`
                          grid-column: span ${t(this.getAttribute("w"),e)};
                          grid-row: span ${t(this.getAttribute("h"),e)};
                          `:`            
                            grid-column: ${parseInt(t(this.getAttribute("x"),e))+1} / span ${t(this.getAttribute("w"),e)};
                            grid-row: ${parseInt(t(this.getAttribute("y"),e))+1} / span ${t(this.getAttribute("h"),e)};
                        `}
                  display: ${t(this.getAttribute("w"),e)==="0"||t(this.getAttribute("h"),e)==="0"?"none":"block"}
                }
              }
              `).join(`
`)}
      </style>
      <slot></slot>
    `}attributeChangedCallback(t,s,i){s!==i&&(this[t]=i),this.render()}}customElements.define("eox-layout",h);customElements.define("eox-layout-item",n);export{h as EOxLayout,n as EOxLayoutItem};
