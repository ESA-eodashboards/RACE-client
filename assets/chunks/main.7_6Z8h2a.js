class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=new MutationObserver(()=>this._setupSlots())}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          flex: 1 1 100%;
          overflow: hidden;
        }
        ::slotted([slot="map"]) {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 0 !important;
          display: block !important;
        }
        .sidebar, .sidebar-left {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 400px;
          max-width: calc(100% - 2rem);
          max-height: calc(100% - 2rem);
          z-index: 10;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px;
        }
        .sidebar-right {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 400px;
          max-width: calc(100% - 2rem);
          max-height: calc(100% - 2rem);
          z-index: 10;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px;
        }
        @media (max-width: 900px) {
          .sidebar, .sidebar-left, .sidebar-right {
            width: min(320px, calc(50% - 1.5rem));
            max-width: calc(50% - 1.5rem);
          }
        }
        .sidebar::-webkit-scrollbar, .sidebar-left::-webkit-scrollbar, .sidebar-right::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar::-webkit-scrollbar-thumb, .sidebar-left::-webkit-scrollbar-thumb, .sidebar-right::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 4px;
        }
        ::slotted([slot="sidebar"]),
        ::slotted([slot="sidebar-left"]),
        ::slotted([slot="sidebar-right"]),
        ::slotted([slot="right"]) {
          pointer-events: auto !important;
          width: 100% !important;
          height: auto !important;
          box-sizing: border-box !important;
        }
      </style>
      <slot name="map"></slot>
      <div class="sidebar sidebar-left">
        <slot name="sidebar"></slot>
        <slot name="sidebar-left"></slot>
      </div>
      <div class="sidebar-right">
        <slot name="sidebar-right"></slot>
        <slot name="right"></slot>
      </div>
      <slot></slot>
    `,this._setupSlots(),this._observer.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect()}_setupSlots(){const i=Array.from(this.children);if(i.length===0)return;const e=i[0];if(e){e.hasAttribute("slot")||e.setAttribute("slot","map"),e.style.width="100%",e.style.height="100%",e.style.display="flex",e.style.flexDirection="row",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.zIndex="0";const r=Array.from(e.children||[]);r.length>=2&&r.forEach(t=>{t.style.flex="1 1 50%",t.style.width="50%",t.style.height="100%",t.style.position="relative",t.style.display="block",(t.querySelectorAll?Array.from(t.querySelectorAll("eox-map")):[]).forEach(s=>{s.style.width="100%",s.style.height="100%",s.style.display="block",s.map&&s.map.updateSize()})})}let o=!1;for(let r=1;r<i.length;r++){const t=i[r];t.id==="right_col"||t.getAttribute("slot")==="sidebar-right"||t.getAttribute("slot")==="right"||i.length>=3&&r>=2&&t.id!=="left_col"?(o=!0,(!t.hasAttribute("slot")||t.getAttribute("slot")!=="sidebar-right")&&t.setAttribute("slot","sidebar-right")):(!t.hasAttribute("slot")||t.getAttribute("slot")!=="sidebar")&&t.setAttribute("slot","sidebar"),t.style.width="100%",t.style.height="auto",t.style.boxSizing="border-box",(t.querySelectorAll?Array.from(t.querySelectorAll("a2ui-card, a2ui-basic-card")):[]).forEach(l=>{l.style.margin="0",l.style.width="100%",l.style.maxWidth="100%",l.style.height="auto",l.style.boxSizing="border-box",l.style.wordBreak="break-word",l.style.overflowWrap="break-word"})}if(this.shadowRoot){const r=this.shadowRoot.querySelector(".sidebar-right");r&&(r.style.display=o?"flex":"none")}}}customElements.define("eox-map-workspace",h);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .container {
          display: flex !important;
          flex-direction: row !important;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }
        ::slotted(*) {
          flex: 1 1 50% !important;
          width: 50% !important;
          height: 100% !important;
          position: relative !important;
          display: block !important;
          box-sizing: border-box !important;
        }
      </style>
      <div class="container">
        <slot></slot>
      </div>
    `}}customElements.get("eox-map-side-by-side")||customElements.define("eox-map-side-by-side",d);class p extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(i,e,o){e!==o&&(this[i]=o),this.render()}}class m extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,o;const i=(r,t=0)=>r!=null&&r.toString().includes("/")?r.split("/")[t]:r;this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;
        }
          ${(o=(e=this.parentElement)==null?void 0:e.mediaBreakpoints)==null?void 0:o.map((r,t)=>`
              @media (min-width: ${r}px) {
                :host {
                          ${this.parentElement&&this.parentElement.getAttribute("fill-grid")!==null?`
                          grid-column: span ${i(this.getAttribute("w"),t)};
                          grid-row: span ${i(this.getAttribute("h"),t)};
                          `:`            
                            grid-column: ${parseInt(i(this.getAttribute("x"),t))+1} / span ${i(this.getAttribute("w"),t)};
                            grid-row: ${parseInt(i(this.getAttribute("y"),t))+1} / span ${i(this.getAttribute("h"),t)};
                        `}
                  display: ${i(this.getAttribute("w"),t)==="0"||i(this.getAttribute("h"),t)==="0"?"none":"block"}
                }
              }
              `).join(`
`)}
      </style>
      <slot></slot>
    `}attributeChangedCallback(i,e,o){e!==o&&(this[i]=o),this.render()}}customElements.define("eox-layout",p);customElements.define("eox-layout-item",m);export{p as EOxLayout,m as EOxLayoutItem,d as EOxMapSideBySide,h as EOxMapWorkspace};
