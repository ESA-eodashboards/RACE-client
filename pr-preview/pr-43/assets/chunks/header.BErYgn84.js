import{m as e}from"./main.c2F9in3F.js";customElements.define("esa-header",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.css=`
        esa-header {
          position: absolute;
          top: 0;
          width: 100%;
        }
        #esa-header {
          position: ${this.getAttribute("fixed")!==null?"fixed":"absolute"};
        }
      `,this.content="",this.shadowRoot.innerHTML=`
            <style>${e}${this.css}</style>
            <section id="esa-header" class="esa-header">
                <div class="esa-header__left">
                    <img class="esa-header__title" src="https://brand.esa.int/wp-content/themes/brandcentre/assets/img/ESA_Title.svg" alt="ESA signature">
                </div>
                <div class="esa-header__right">
                    <a class="esa-header__link" href="https://www.esa.int">
                    <img class="esa-header__logo" src="https://brand.esa.int/wp-content/themes/brandcentre/assets/img/ESA_Logo.svg" alt="ESA logo">
                    </a>
                </div>
            </section>
        `}});
