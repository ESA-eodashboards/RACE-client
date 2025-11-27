import{m as o}from"./main.c2F9in3F.js";customElements.define("esa-footer",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css=`
            #site-footer {
                padding-top: 0;
            }
            #site-footer.small {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              background-color: #fff;
              padding: 3em 0;
            }
            .footer__signature {
                font-family: 'NotesESAbold', sans-serif;
                margin: 0 2em 3em 0;
            }
            .footer-nav {
              display: flex;
              flex-direction: column;
              font-family: 'NotesESAregular', sans-serif;
              font-weight: normal;
              margin-bottom: 3em;
            }
            .footer-nav > * {
              margin: 1em 0;
              width: -moz-fit-content;
              width: fit-content;
            }
            .footer-nav a {
              color: #003247;
            }
            .footer-nav a:hover {
                text-decoration: underline;
            }
            @media (min-width: 1024px) {
              #site-footer.small {
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                /*padding-left: 6em;
                padding-right: 6em;*/
              }
              .footer__signature {
                margin: 0 4em 0 0;
              }
              .footer-nav {
                flex-direction: row;
                margin-bottom: 0;
                margin-right: auto;
              }
              .footer-nav > * {
                margin: 0 2em 0 0;
              }
            }
        `,this.shadowRoot.innerHTML=`
            <style>${o}${this.css}</style>
            <section id="site-footer" ${this.getAttribute("small")!==null?'class="small"':""}>   
              ${this.getAttribute("small")!==null?`
                  <span class="footer__signature">${this.getAttribute("title")}</span>
                  <div class="footer-nav">
                    ${this.footerItems.map(t=>`<a href="${t.href}">${t.title}</a>`).join("")}
                  </div>
                  `:`
                  <div class="l-container" style="padding: 0;">
                      <div class="c-footer u-py-5 u-py-sm-6">
                      <div class="l-row">
                          <div class="l-col-12 l-col-sm-6 l-col-md-4 l-col-lg-3">
                          <h3 class="u-mt-0 u-mb-2">
                              ${this.getAttribute("title")}					
                          </h3>
                          <p class="u-f-sm">
                          ${this.getAttribute("description")}
                          </p>
                          ${this.getAttribute("contact-link")?`
                            <a class="c-button c-button--primary u-mt-1" href="${this.getAttribute("contact-link")}">
                              ${this.getAttribute("contact-text")||"Contact us"}
                            </a>
                          `:""}
                          </div>
                          <!-- /.l-col -->
                          <div class="l-col-12 l-col-sm-4 l-offset-sm-2 l-col-md-7 l-offset-md-1 l-col-lg-6 l-offset-lg-2">
                          <nav class="c-nav u-mr-0 u-display-block">
                              <div class="l-row">
                                  ${this.footerItems.map(t=>`
                                          <div class="l-col-12 l-col-md-4">
                                              <ul class="l-list u-mt-5 u-mt-sm-0">
                                                  ${t.map(e=>`
                                                      <li class="l-list__item">
                                                          <a class="c-nav__link" href="${e.href}">
                                                              ${e.title}
                                                          </a>
                                                      </li>
                                                  `).join("")}
                                              </ul>
                                          </div>
                                          <!-- /.l-col -->
                                      `).join("")}
                              </div>
                              <!-- /.l-row -->
                          </nav>
                          </div>
                          <!-- /.l-col -->
                      </div>
                      <!-- /.l-row -->
                      </div>
                      <!-- /.c-footer -->
                      <p class="u-f-sm u-mt-4 u-mb-0">ESA – European Space Agency © 2020-${new Date().getFullYear()}</p>
                  </div>
                  <!-- /.l-container -->
                  `}
                </section>
        `}});
