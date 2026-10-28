import{m as l}from"./main.c2F9in3F.js";customElements.define("esa-gateway",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.accordeonIndex=1,this.handleResize=this.handleResize.bind(this)}setAccordeonIndex(e){this.accordeonIndex=e}connectedCallback(){this.render(),window.addEventListener("resize",this.handleResize),this.applyAccordeonBehavior()}disconnectedCallback(){window.removeEventListener("resize",this.handleResize)}handleResize(){this.applyAccordeonBehavior()}applyAccordeonBehavior(){window.innerWidth<768?(this.shadowRoot.querySelectorAll(".c-gateway__block").forEach((t,a)=>{a===this.accordeonIndex?t.classList.add("open"):t.classList.remove("open")}),this.shadowRoot.querySelectorAll(".c-gateway__toggle").forEach((t,a)=>{t.addEventListener("click",()=>{this.shadowRoot.querySelectorAll(".c-gateway__block").forEach(s=>s.classList.remove("open")),t.parentElement.classList.add("open"),this.setAccordeonIndex(a)})})):this.shadowRoot.querySelectorAll(".c-gateway__block").forEach(t=>{t.classList.add("open")})}render(){this.css=`
        esa-gateway, .c-gateway {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
          padding: 0;
          background-color: #09171f;
        }

        .c-gateway__toggle {
          position: absolute;
          top: 24px;
          right: 24px;
          height: 32px;
          width: 32px;
          cursor: pointer;
          z-index: 10;
          background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-up%3C/title%3E%3Cpath d='M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z' /%3E%3C/svg%3E");
        }

        .c-gateway__block {
          position: relative;
          padding: 24px;
          background-color: #0b1d26;
          border-color: #335e6f;
          border-style: solid;
          border-top-width: 0;
          border-bottom-width: 0;
          border-left-width: 6px;
          border-right-width: 0;
        }

        .c-gateway__block:not(.open) ul {
          display: none;
        }

        .c-gateway__block:not(.open) .c-gateway__toggle {
          transform: rotate(180deg);
        }

        .c-gateway {
          grid-template-columns: repeat(${this.items.length+this.items.filter(e=>e.isLarge).length}, 1fr);
        }

        .c-gateway__title {
          font: normal 20px/24px NotesESAbold, Arial, sans-serif;
          color: #fff;
          margin-bottom: 20px;
        }

        @media (max-width: 767px) {
          .c-gateway {
            grid-template-columns: 1fr;
          }
          .c-gateway__block {
            border-left-width: 0;
            border-top-width: 6px;
          }
        }

        @media (min-width: 768px) {
          .c-gateway__toggle {
            display: none;
          }
          .c-gateway {
            grid-template-columns: repeat(2, 1fr);
          }
          .c-gateway__block {
            border-left-width: 0;
            border-top-width: 6px;
          }
        }

        .gateway-columns {
        }

        @media (min-width: 1280px) {
          .c-gateway {
            grid-template-columns: repeat(${this.items.length+this.items.filter(e=>e.isLarge).length}, 1fr);
          }
          .c-gateway__block {
            padding: 48px 0 48px 48px;
          }

          .gateway-columns {
            display: flex;
            flex-direction: row;
          }

          .gateway-column {
            padding-right: 48px;
          }

          .c-gateway__block--lg {
            grid-column: span 2;
          }
        }
      `,this.shadowRoot.innerHTML=`
        <style>${l}${this.css}</style>
        <section id="gateway" class="c-gateway">
          ${this.items.map((e,t)=>{const a=this.accordeonIndex===t;return`
                <div class="c-gateway__block ${window.innerWidth<768?a?"open":"":"open"} ${e.isLarge?"c-gateway__block--lg":""}">
                  <button key="${t}" class="c-gateway__toggle"></button>
                  <h4 class="c-gateway__title">${e.title}</h4>
                  <ul class="c-gateway__list">
                    ${e.isLarge?`<div class="gateway-columns">
                             ${e.links.map(o=>`
                               <div class="gateway-column">
                                 ${o.map(i=>`<li><a style="color: ${i.color??"#fff"}" href="${i.href}" target="_blank">${i.name}</a></li>`).join("")}
                               </div>`).join("")}
                           </div>`:e.links.map(o=>`<li><a style="color: ${o.color??"#fff"}" href="${o.href}" target="_blank">${o.name}</a></li>`).join("")}
                  </ul>
                </div>
              `}).join("")}
        </section>
      `}});
