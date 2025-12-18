import{r as m,b as p,x as o,E as c}from"./lit-element.Deg-YTNa.js";import{L as y}from"./Group.DfJ6KxFj.js";import{g}from"./getElement.CdRlZPdn.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{e as x,a as w}from"./addCommonStyleSheet.zOcQQLUh.js";import{d}from"./dayjs.min.Ba62AOpW.js";import{d as v,i as _,u as k}from"./isoWeek.BWmVrYzx.js";import"./extent.CajDHjk1.js";import"./commonjsHelpers.BosuxZz1.js";const S=`
:host {
  display: block;
}
`;w();const $=`
${x}

:host, :root {
  --navigation-button-display: inline-flex;
}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

tc-range-slider {
  display: inline-block;
  width: 300px;
  margin: 0;
}
`;class M extends m{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(e=>{const r=d(e).year();let s=t.find(a=>a.year===r);s||(s={year:r,dates:[]},t.push(s)),s.dates.push(e)}),t}preprocessDates(){const t=[];this.steps.forEach(e=>{const r=d(e).year();let s=t.find(a=>a.year===r);s||(s={year:r,ratio:0,dates:[]},t.push(s)),s.dates.push({date:e,isYearMarker:s.dates.length===0})});for(let e of t)e.ratio=e.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((i,r)=>{const s=this.steps.indexOf(i.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(i.dates[i.dates.length-1].date)/(this.steps.length-1)*this.width,n=Math.max(0,a-s-2),l=[];return l.push(p`
            <rect
              key=${r}
              x=${s+2/2} // Add half the spacing to the start position
              y="0"
              width=${n}
              height="6"
              fill="#7596A2"
            ></rect>
        `),n>=30&&l.push(p`
                <text
                  key=${`label-${r}`}
                  x=${s+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${i.year}
                </text>
            `),l})}calculateIndividualTicks(){return this._years.flatMap((t,e)=>{const i=this.steps.length,r=Math.max(1,Math.floor(i/this.width));return t.dates.filter((s,a)=>a%r===0).map((s,a)=>{const l=this.steps.indexOf(s.date)/(this.steps.length-1)*this.width,h=[];return h.push(p`
                <line
                  key=${e}-${a}
                  x1=${l}
                  y1="0"
                  x2=${l}
                  y2=${s.isYearMarker?12:6}
                  stroke=${s.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),s.isYearMarker&&this.density>.03&&this.density<.5&&e%2==0&&h.push(p`
                  <text
                    key=${`label-${e}`}
                    x=${l+16}
                    y="30"
                    fill="currentColor"
                    font-size="smaller"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),h})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const i=this._years.reduce((s,a)=>{const n=Math.floor(a.year/10)*10;return s[n]||(s[n]=[]),s[n].push(...a.dates),s},{});return Object.keys(i).flatMap((s,a)=>{const n=this.steps.indexOf(i[s][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(i[s][i[s].length-1].date)/(this.steps.length-1)*this.width,h=Math.max(0,l-n-2),u=[];return u.push(p`
            <rect
              key=${`decade-${a}`}
              x=${n+2/2}
              y="0"
              width=${h}
              height="6"
              fill="#555"
            ></rect>
        `),h>=30&&u.push(p`
                <text
                  key=${`decade-label-${a}`}
                  x=${n+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${s}
                </text>
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,e=this.width/(t-1);return Array.from({length:this.numLines},(i,r)=>r*e)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates();const t=[];let e=null;return this.lines.forEach((i,r)=>{const a=d(this.steps[r]).year();(r===0||a!==e)&&t.push({label:a,position:i}),e=a}),t}isYearLine(t){return this._yearMarks.some(i=>Math.abs(i.position-t)<1)}render(){return o`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; max-width: 100%; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",M);d.extend(v);d.extend(_);d.extend(k);class b extends m{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const e=this.controlValues.findIndex(i=>i===t);e>-1?this._newStepIndex=e:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=g(this.for);if(t){const e=t;this.eoxMap=e}}get eoxMap(){return this._eoxMap}set eoxMap(t){const e=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",e)}_updateStep(t=1){var e;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((e=this._controlSource)==null||e.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const e=[];e.push(...t);let i=e.filter(r=>r instanceof y);for(;i.length;){const r=[];for(let s=0,a=i.length;s<a;s++){const n=i[s].getLayers().getArray();e.push(...n);const l=n.filter(h=>h instanceof y);r.push(...l)}i=r}return e}render(){if(this.layer&&this.for){const e=g(this.for).map;e.once("loadend",()=>{if(!this._originalParams){const r=this.getFlatLayersArray(e.getLayers().getArray()).find(s=>s.get("id")===this.layer);this._controlSource=r.getSource(),this._originalParams=this._controlSource.getParams()}})}return o`
      <style>
        ${S}
        ${!this.unstyled&&$}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?o`
                <button
                  part="previous"
                  class="icon previous small circle transparent no-margin"
                  @click="${()=>this.previous()}"
                >
                  ${this.unstyled?"<":o`
                        <i class="primary-text small">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>chevron-left-circle</title>
                            <path
                              d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"
                            />
                          </svg>
                        </i>
                      `}
                </button>
              `:c}
          <small part="current">
            ${this.displayFormat?d(this.controlValues[this._newStepIndex]).utc().format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </small>
          ${this.navigation?o`
                <button
                  part="next"
                  class="icon next small circle transparent no-margin"
                  @click="${()=>this.next()}"
                >
                  ${this.unstyled?"<":o`
                        <i class="primary-text small">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>chevron-right-circle</title>
                            <path
                              d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z"
                            />
                          </svg>
                        </i>
                      `}
                </button>
              `:c}
          ${this.play?o`
                <button
                  part="play"
                  class="icon-text small ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this.unstyled?c:o`
                        <i class="small">
                          ${this._isAnimationPlaying?o`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>pause</title>
                                <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                              </svg>`:o`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>play</title>
                                <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                              </svg>`}
                        </i>
                      `}
                  <span>${this._isAnimationPlaying?"Pause":"Play"}</span>
                </button>
              `:c}
        </div>
        <div class="small-padding">
          ${this.slider?o`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    @change="${t=>this._updateStep(this.controlValues.findIndex(e=>e===t.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}
        </div>
      </main>
    `}}customElements.define("eox-timecontrol",b);export{b as EOxTimeControl};
