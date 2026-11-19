customElements.define("esa-card",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.feature=this.getAttribute("feature"),this.compact=this.getAttribute("compact"),this.light=this.getAttribute("light"),this.dark=this.getAttribute("dark"),this.image=this.getAttribute("image"),this.icon=this.getAttribute("icon"),this.overline=this.getAttribute("overline"),this.tag=this.getAttribute("tag"),this.tagColor=this.getAttribute("tag-color"),this.title=this.getAttribute("title"),this.description=this.getAttribute("description"),this.date=this.getAttribute("date"),this.action=this.getAttribute("action"),this.link=this.getAttribute("link"),this.css=`
          :host {
            --padding-x: 30px;
            --card-dimmer-background-image: linear-gradient(to top, rgba(0, 50, 71, 0.8), rgba(0, 50, 71, 0));
          }
          a.card-container {
            position: relative;
            width: 300px;
            height: 100%;
            min-height: calc(${this.image!==null?this.compact!==null?"140px + ":"250px + ":this.icon!==null?"60px + ":""}175px${this.action!==null?" + 75px":""});
            background: white;
            color: #003247;
            ${this.dark!==null?"background: #003247; color: white;":""}
            ${this.feature!==null?"background: #335E6F; color: white;":""}
            font-family: Arial, sans-serif;
            text-decoration: none;
            box-shadow: 0 20px 30px rgba(0,0,0,0.1);
            overflow: hidden;
            display: grid;
            grid-template-areas: "image" "content" "action";
            grid-template-rows: ${this.image!==null?this.compact!==null?"140px":"250px":this.icon!==null?"60px":"0px"} auto ${this.action!==null?"75":"0"}px; 
          }
          .image-container {
            width: 100%;
            height: 100%;
            grid-area: image;
            ${this.feature!==null?"grid-row: 1 / 3;":""}
            overflow: hidden;
            position: relative;
            z-index: 0;
          }
          .overlay-container {
            box-sizing: border-box;
            grid-area: image;
            padding: var(--padding-x);
            z-index: 1;
          }
          .image-container img {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 1s 0.05s ease;
          }
          .image-container .dimmer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: var(--card-dimmer-background-image);
            background-color: transparent;
          }
          .card-container.link:hover .image-container img {
            transform: scale(1.1);
          }
          .content {
            grid-area: content;
            padding: 40px var(--padding-x)${this.action!==null?" 0 var(--padding-x)":""};
            z-index: 1;
          }
          h3,
          h4 {
            font-family: NotesESAbold, sans-serif;
            margin-top: 0;
          }
          h3 {
            font-size: 1.5rem;
          }
          h4 {
            font-size: 1rem;
          }
          p {
            font-size: 0.875rem;
            line-height: 1.3125rem;
          }
          .description > p {
            opacity: .5;
          }
          .action {
            grid-area: action;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: var(--padding-x);
            padding-right: var(--padding-x);
            font-size: 0.75rem;
            letter-spacing: 0.21875rem;
            text-transform: uppercase;
          }
          .overline {
            color: white;
            font-size: 0.75rem;
            letter-spacing: 0.15625rem;
            text-transform: uppercase;
          }
          .tag {
            ${this.image!==null?`
              position: absolute;
              top: ${this.compact!==null?140:250}px;
              transform: translateY(-50%);
              left: var(--padding-x);
              `:`
              display: inline-block;
              margin-bottom: 20px;
              `}
            color: white;
            background: ${this.tagColor||"#003247"};
            font-family: NotesESAbold, sans-serif;
            font-size: 0.8125rem;
            letter-spacing: 0.0625px;
            text-transform: uppercase;
            padding: 3px 5px;
          }
          .card-container.link {
            transition: all 0.35s ease;
          }
          .card-container.link:hover {
            transform: translateY(-10px);
          }
          .description a {
            border-bottom: 0.125rem solid #00AE9D;
            padding-bottom: 0.15625rem;
            transition: all .5s ease;
            text-decoration: none;
            color: currentColor;
          }
          .description a:hover {
            padding-bottom: .3125rem;
            color: #00AE9D;
          }
          @keyframes cta-arrow {
            0%,
            100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(50%);
            }
          }
          .card-container.link:hover .action svg {
            animation: cta-arrow 1s ease-in-out infinite;
          }
          @media (max-width: 767px) {
            :host {
              width: 100%;
              --padding-x: 15px;
            }
            a.card-container {
              width: 100%;
              min-height: unset;
              height: 128px;
              display: grid;
              grid-template-areas: "image content";
              grid-template-columns: ${this.image!==null||this.icon!==null?"128":0}px auto;
              grid-template-rows: 128px;
            }
            .overline {
              font-size: 0.625rem;
            }
            .tag {
              position: relative;
              font-size: 0.625rem;
              top: unset;
              left: unset;
              transform: unset;
              display: inline-block;
              margin-bottom: 10px;
            }
            .content h3 {
              font-size: 1rem;
            }
            .content p {
              font-size: 0.75rem;
              color: #8197A6;
            }
            .content p.description {
              display: none;
            }
            .action {
              display: none;
            }
            .content {
              padding: var(--padding-x);
            }
          }
        `,this.shadowRoot.innerHTML=`
          <style>${this.css}</style>
          <a
            class="card-container${this.action!==null?` link" href="${this.link}"`:'"'}
          >
            <div class="image-container">
              ${this.image!==null?`

                <img src="${this.image}" />
                <div class="dimmer"></div>
              `:""}
            </div>
            <div class="overlay-container">
              ${this.icon!==null?this.icon:""}
              ${this.overline!==null?`<span class="overline">${this.overline}</span>`:""}
            </div>
            <div class="content">
              ${this.tag!==null?`<div class="tag">
                  ${this.tag}
                </div>`:""}
              <h3 class="heading">${this.title}</h3>
                ${this.description!==null?'<p class="description subheading"></p>':""}
                ${this.date!==null?`<p class="date subheading">${this.date}</p>`:""}
            </div>
              ${this.action!==null?`<div class="action">
                  ${this.action}
                  <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3996 0.637314L12.1234 0.913486C11.9404 1.09653 11.9404 1.39333 12.1234 1.57642L15.4018 4.83595H0.71875C0.459883 4.83595 0.25 5.04583 0.25 5.3047V5.69532C0.25 5.95419 0.459883 6.16407 0.71875 6.16407H15.4018L12.1234 9.4236C11.9404 9.60665 11.9404 9.90345 12.1234 10.0865L12.3996 10.3627C12.5827 10.5458 12.8795 10.5458 13.0625 10.3627L17.6127 5.83146C17.7957 5.64841 17.7957 5.35161 17.6127 5.16853L13.0625 0.637314C12.8795 0.454229 12.5827 0.454229 12.3996 0.637314Z" fill="currentColor"/></svg>
                </div>`:""}
          </a>
        `,this.description!==null&&(this.shadowRoot.querySelector(".description").innerHTML=this.description)}});customElements.define("esa-cards",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var s;if(this.carousel=this.getAttribute("carousel"),this.moreLink=this.getAttribute("more-link"),this.moreText=this.getAttribute("more-text"),this.css=`
      .card.more {
        background: none;
        box-shadow: none;
        padding: 20px;
        text-decoration: none;
        transition: all 0.35s ease;
      }
      .card.more:hover {
        transform: translateY(0) scale(1.025);
      }
      .card.more .outline {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: 3px dashed #8197A6;
      }
      .dark .card.more .outline {
        border-color: #335E6F;
      }
      .card.more .heading {
        text-transform: uppercase;
        color: #8197A6;
        text-align: center;
        font-family: 'NotesESAbold', sans-serif;
        font-size: 24px;
      }
      .dark .card.more .heading {
        color: #335E6F;
      }
      @media (max-width: 767px) {
        .card.more {
          width: 100%;
        }  
        .card.more .outline {
          width: 100%;
          height: 108px;
        }
        .card.more .heading {
          overflow: visible;
          height: auto;
          font-size: 1rem;
        }
      }
      ${this.carousel!==null?`
            .container {
              display: flex;
              gap: 40px;
              overflow-x: hidden;
              position: relative;
              width: calc(var(--vw, 1vw) * 100);
              left: 50%;
              margin-left: calc(var(--vw, 1vw) * -50);
              margin-bottom: -40px;
              padding-bottom: 40px;
            }
            .carousel-buttons {
              position: relative;
              z-index: 1;
            }
            .carousel-buttons button {
              opacity: 0.1;
              width: 2.25rem;
              height: 2.25rem;
              border: 0.15625rem solid #8197A6;
              border-radius: 100px;
              padding: 0.46875rem;
              transition: all 0.15s ease;
              background: none;
              outline: none;
              margin: 10px 10px 10px 0;
            }
            .carousel-buttons button:not(:disabled) {
              opacity: 1;
              cursor: pointer;
            }
            .carousel-buttons button:not(:disabled):hover {
              transform: scale(1.1);
            }
            @media (max-width: 767px) {
              .container {
                gap: 0;
              }
              .carousel-buttons button {
                margin: 30px 10px 30px 0;
              }
            }
            `:`
            .container {
              display: grid;
              grid-gap: 40px;
              grid-template-columns: repeat(auto-fill, 300px);
              grid-auto-rows: 1fr;
            }
            @media (max-width: 767px) {
              .container {
                display: flex;
                flex-wrap: wrap;
                gap: 30px;
              }
            }
            `}
      `,this.shadowRoot.innerHTML=`
        <style>${this.css}</style>
        <div class="container"><slot></slot>${this.moreText?`
          <a class="card more" href="${this.moreLink}" ${(s=this.moreLink)!=null&&s.startsWith("http")?'target="_blank"}':""}>
            <div class="outline">
              <h3 class="heading">${this.moreText}</h3>
            </div>
          </a>`:""}</div>
        ${this.carousel!==null?`
          <div class="carousel-buttons">
            <button class="left" disabled>
              <svg fill="#8197A6" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>
            </button>
            <button class="right">
              <svg fill="#8197A6" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>
            </button>
          </div>
        `:""}
      `,this.carousel!==null){(e=>{const i=o=>e.setPointerCapture(o.pointerId),n=o=>e.releasePointerCapture(o.pointerId),d=o=>e.hasPointerCapture(o.pointerId)&&(e.scrollLeft-=o.movementX);e.addEventListener("pointerdown",i),e.addEventListener("pointerup",n),e.addEventListener("pointermove",d)})(this.shadowRoot.querySelector(".container"));const t=this.shadowRoot.querySelector(".container"),a=this.shadowRoot.querySelector(".carousel-buttons button.left"),r=this.shadowRoot.querySelector(".carousel-buttons button.right"),l=e=>{let i;t.addEventListener("scroll",()=>{clearTimeout(i),i=setTimeout(function(){t.scrollLeft<1?a.setAttribute("disabled",""):a.removeAttribute("disabled"),t.scrollWidth-t.scrollLeft-t.clientWidth<1?r.setAttribute("disabled",""):r.removeAttribute("disabled")},100)}),t.scrollTo({left:t.scrollLeft+e,behavior:"smooth"})};a.addEventListener("click",()=>l(t.scrollWidth*-.3)),r.addEventListener("click",()=>l(t.scrollWidth*.3)),new ResizeObserver(()=>{let e=document.documentElement.clientWidth/100;document.documentElement.style.setProperty("--vw",`${e}px`);const i=t.getRootNode().host.getBoundingClientRect().x-t.getBoundingClientRect().x,n=this.shadowRoot.querySelector("slot").assignedElements();n[0].style.marginLeft=`${i}px`,n[n.length-1].style.marginRight=`${i}px`}).observe(document.documentElement)}}});
