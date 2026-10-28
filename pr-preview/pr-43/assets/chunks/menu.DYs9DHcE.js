import{m as s}from"./main.c2F9in3F.js";customElements.define("esa-menu",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=()=>{this.shadowRoot.querySelector(".c-menu").classList.remove("is-open"),document.body.classList.remove("is-locked")};this.shadowRoot.querySelector("#menu-close").addEventListener("click",()=>{e()}),this.shadowRoot.querySelectorAll("a").forEach(t=>t.addEventListener("click",()=>{e(),this.render()}))}render(){this.css=`
            #menu-close svg {
                width: 24px;
                height: 24px;
            }
        `,this.content=`

        `,this.shadowRoot.innerHTML=`
            <style>${s}${this.css}</style>
            <nav class="c-menu">
                <button id="menu-close" class="c-icon c-menu__close">
                    <svg class="svg-inline--fa fa-times fa-w-11" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                    </svg>
                    <!-- <i class="fas fa-times"></i> -->
                </button>
                <ul class="l-list u-display-flex u-align-items-center u-mb-2">
                    ${this.getAttribute("enable-login")!==null?`
                        <li class="l-list__item">
                            <a class="c-button c-button--primary c-button--negative c-button--sm c-header__account" href="${this.getAttribute("enable-login")||"/login"}">
                                <svg style="width: 1em" class="svg-inline--fa fa-sign-in fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M137.2 110.3l21.9-21.9c9.3-9.3 24.5-9.4 33.9-.1L344.9 239c9.5 9.4 9.5 24.7 0 34.1L193 423.7c-9.4 9.3-24.5 9.3-33.9-.1l-21.9-21.9c-9.7-9.7-9.3-25.4.8-34.7l77.6-71.1H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h191.5l-77.6-71.1c-10-9.1-10.4-24.9-.7-34.5zM512 352V160c0-53-43-96-96-96h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84c53 0 96-43 96-96z"></path>
                                </svg>
                                <!-- <i class="fas fa-sign-in"></i> -->Sign in
                            </a>
                        </li>
                    `:""}
                </ul>
                <ul id="primary-menu" class="l-list">
                ${this.menuItems.map(e=>`
                    <li class="menu-item menu-item-type-post_type menu-item-object-page ${window.location.pathname===e.href?"current-menu-item":""} l-list__item"><a href="${e.href}" aria-current="page" class="c-nav-link">${e.title}</a></li>
                `).join("")}
                </ul>
            </nav>
        `}});
