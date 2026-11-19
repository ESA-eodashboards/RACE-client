import{m as t}from"./main.c2F9in3F.js";const e="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11.428'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23335e6f;%7D%3C/style%3E%3C/defs%3E%3Cg transform='translate(19380 17820)'%3E%3Cpath class='a' d='M13.885,128.157l-.316.316a.536.536,0,0,0,0,.758l3.747,3.725H.536a.536.536,0,0,0-.536.536v.446a.536.536,0,0,0,.536.536H17.316L13.57,138.2a.536.536,0,0,0,0,.758l.316.316a.536.536,0,0,0,.758,0l5.2-5.179a.536.536,0,0,0,0-.758l-5.2-5.179A.536.536,0,0,0,13.885,128.157Z' transform='translate(-19380 -17948)'/%3E%3C/g%3E%3C/svg%3E";customElements.define("esa-cover",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css=`
        :host {
          --cover-height: 100dvh;
          --cover-dimmer-background-image: linear-gradient(
            to right,
            rgba(0, 50, 71, 0.5),
            rgba(0, 50, 71, 0)
          );
        }
        #cover {
          height: var(--cover-height);
          padding-top: calc(var(--cover-height) / 7);
          padding-bottom: 64px;
        }
        #cover > .l-container {
          margin-top: 192px;
        }
        .c-cover__dimmer {
          background-image: var(--cover-dimmer-background-image);
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
                      <img class="arrow" src="${e}" alt="Open item" draggable="false">
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
