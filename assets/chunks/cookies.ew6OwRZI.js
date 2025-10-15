import{m as o}from"./main.c2F9in3F.js";customElements.define("esa-cookies",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css=`
        esa-cookies {
          transition: opacity 0.7s;
        }
        .cc-cookie-accept,
        .cc-cookie-decline {
          cursor: pointer;
        }
      `,this.content="",this.shadowRoot.innerHTML=`
        <style>${o}${this.css}</style>
        <div id="cookie_loc">
          <div class="cc-cookies">
            We use cookies which are essential for you to access our website and/or to
            provide you with our services, enable you to share our website content via
            your social media accounts and allow us to measure and improve the
            performance of our website.<br />
            <a class="cc-cookie-accept">Accept all cookies</a>
            <a class="cc-cookie-decline"
              >Accept only essential cookies</a
            >
            <a href="${this.getAttribute("link")}" title="Our cookie policy"
              >See our Cookie Notice</a
            >
          </div>
        </div>
        `;const e=()=>{this.style.opacity=0,setTimeout(()=>{this.style.visibility="hidden"},700)};this.shadowRoot.querySelector(".cc-cookie-accept").addEventListener("click",()=>{this.dispatchEvent(new Event("accept")),e()}),this.shadowRoot.querySelector(".cc-cookie-decline").addEventListener("click",()=>{this.dispatchEvent(new Event("decline")),e()})}});
