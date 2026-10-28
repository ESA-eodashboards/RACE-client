import{m as t}from"./main.c2F9in3F.js";customElements.define("esa-cover",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css=`
        :host {
          --cover-height: 100dvh;
        }
        #cover {
          height: var(--cover-height);
          padding-top: calc(var(--cover-height) / 7);
          padding-bottom: 64px;
        }
        #cover > .l-container {
          margin-top: 192px;
        }
        .feature a.cta {
          white-space: nowrap;
        }
        .feature a.cta label {
          font-weight: 500;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.35rem;
          cursor: pointer;
          font-family: Arial, sans-serif;
        }
        .feature a.cta.alt {
          color: white;
          background: transparent;
          border: 2px solid white;
          border-radius: 2px;
        }
      `,this.content="",this.shadowRoot.innerHTML=`
        <style>${t}${this.css}</style>
        <section id="cover" class="c-cover c-cover--image feature">
          <div class="l-container u-z-1">
            <div class="l-row">
              <div
                class="l-col-12 l-col-sm-12 l-col-md-6 l-col-lg-6 l-col-xl-6 ${this.getAttribute("image")?"":"l-offset-sm-1 l-offset-lg-2"}"
                style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 2rem;"
              >
                ${this.getAttribute("overline")?`
                  <p class="t-overline">
                    ${this.getAttribute("overline")}
                  </p>
                `:""}
                <h1 class="c-cover__title">
                ${this.getAttribute("title")}
                </h1>
                ${this.getAttribute("underline")?`
                  <p class="t-underline">
                    ${this.getAttribute("underline")}
                  </p>
                `:""}
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  ${this.getAttribute("cta")!==null?`
                    <a
                      class="cta"
                      href="${this.getAttribute("cta-link")}"
                      ${this.getAttribute("cta-link").startsWith("http")?'target="_blank"':""}
                    >
                      <label>${this.getAttribute("cta-text")}</label>
                      <img class="arrow" src="https://esa.int/extension/pillars/design/pillars/images/arrow.svg" alt="Open item" draggable="false">
                    </a>
                  `:""}
                  ${this.getAttribute("alt")!==null?`
                    <a
                      class="cta alt"
                      href="${this.getAttribute("alt-link")}"
                      ${this.getAttribute("alt-link").startsWith("http")?'target="_blank"':""}
                    >
                      <label>${this.getAttribute("alt-text")}</label>
                    </a>
                  `:""}
                </div>
              </div>
              <!-- /.l-col -->
              ${this.getAttribute("image")?`
                <div class="l-col-12 l-col-sm-12 l-col-md-6 l-col-lg-6 l-col-xl-6">
                    ${this.getAttribute("image").startsWith("<")?this.getAttribute("image"):`<img src="${this.getAttribute("image")}" alt="${this.getAttribute("image-alt")}" />`}
                </div>
              `:""}
            </div>
            <!-- /.l-row -->
          </div>
          <!-- /.l-container -->
          <figure class="c-background-image c-cover__background u-z-0">
            <div class="c-dimmer c-cover__dimmer c-cover__dimmer--nav"></div>
            <div class="c-dimmer c-cover__dimmer"></div>
            <img src="${this.getAttribute("background-image")}" width="1500" height="1000" alt="">
          </figure>
        </section>
        `}});
