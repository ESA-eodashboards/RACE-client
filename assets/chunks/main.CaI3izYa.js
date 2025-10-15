import{r as W,b as v,x as d,E as S}from"./lit-element.Deg-YTNa.js";import{L as I}from"./Group.DfJ6KxFj.js";import{g as A}from"./getElement.CdRlZPdn.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{e as C,a as U}from"./addCommonStyleSheet.C1Vj32jp.js";import{d as m}from"./dayjs.min.Ba62AOpW.js";import{c as L,g as O}from"./commonjsHelpers.BosuxZz1.js";import"./extent.CajDHjk1.js";const B=`
:host {
  display: block;
}
`;U();const z=`
${C}

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
`;class H extends W{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(e=>{const n=m(e).year();let s=t.find(o=>o.year===n);s||(s={year:n,dates:[]},t.push(s)),s.dates.push(e)}),t}preprocessDates(){const t=[];this.steps.forEach(e=>{const n=m(e).year();let s=t.find(o=>o.year===n);s||(s={year:n,ratio:0,dates:[]},t.push(s)),s.dates.push({date:e,isYearMarker:s.dates.length===0})});for(let e of t)e.ratio=e.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((r,n)=>{const s=this.steps.indexOf(r.dates[0].date)/(this.steps.length-1)*this.width,o=this.steps.indexOf(r.dates[r.dates.length-1].date)/(this.steps.length-1)*this.width,l=Math.max(0,o-s-2),a=[];return a.push(v`
            <rect
              key=${n}
              x=${s+2/2} // Add half the spacing to the start position
              y="0"
              width=${l}
              height="6"
              fill="#7596A2"
            ></rect>
        `),l>=30&&a.push(v`
                <text
                  key=${`label-${n}`}
                  x=${s+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${r.year}
                </text>
            `),a})}calculateIndividualTicks(){return this._years.flatMap((t,e)=>{const r=this.steps.length,n=Math.max(1,Math.floor(r/this.width));return t.dates.filter((s,o)=>o%n===0).map((s,o)=>{const a=this.steps.indexOf(s.date)/(this.steps.length-1)*this.width,h=[];return h.push(v`
                <line
                  key=${e}-${o}
                  x1=${a}
                  y1="0"
                  x2=${a}
                  y2=${s.isYearMarker?12:6}
                  stroke=${s.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),s.isYearMarker&&this.density>.03&&this.density<.5&&e%2==0&&h.push(v`
                  <text
                    key=${`label-${e}`}
                    x=${a+16}
                    y="30"
                    fill="currentColor"
                    font-size="smaller"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),h})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const r=this._years.reduce((s,o)=>{const l=Math.floor(o.year/10)*10;return s[l]||(s[l]=[]),s[l].push(...o.dates),s},{});return Object.keys(r).flatMap((s,o)=>{const l=this.steps.indexOf(r[s][0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(r[s][r[s].length-1].date)/(this.steps.length-1)*this.width,h=Math.max(0,a-l-2),u=[];return u.push(v`
            <rect
              key=${`decade-${o}`}
              x=${l+2/2}
              y="0"
              width=${h}
              height="6"
              fill="#555"
            ></rect>
        `),h>=30&&u.push(v`
                <text
                  key=${`decade-label-${o}`}
                  x=${l+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${s}
                </text>
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,e=this.width/(t-1);return Array.from({length:this.numLines},(r,n)=>n*e)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates();const t=[];let e=null;return this.lines.forEach((r,n)=>{const o=m(this.steps[n]).year();(n===0||o!==e)&&t.push({label:o,position:r}),e=o}),t}isYearLine(t){return this._yearMarks.some(r=>Math.abs(r.position-t)<1)}render(){return d`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; max-width: 100%; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",H);var P={exports:{}};(function(y,t){(function(e,r){y.exports=r()})(L,function(){var e="minute",r=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(s,o,l){var a=o.prototype;l.utc=function(i){var c={date:i,utc:!0,args:arguments};return new o(c)},a.utc=function(i){var c=l(this.toDate(),{locale:this.$L,utc:!0});return i?c.add(this.utcOffset(),e):c},a.local=function(){return l(this.toDate(),{locale:this.$L,utc:!1})};var h=a.parse;a.parse=function(i){i.utc&&(this.$u=!0),this.$utils().u(i.$offset)||(this.$offset=i.$offset),h.call(this,i)};var u=a.init;a.init=function(){if(this.$u){var i=this.$d;this.$y=i.getUTCFullYear(),this.$M=i.getUTCMonth(),this.$D=i.getUTCDate(),this.$W=i.getUTCDay(),this.$H=i.getUTCHours(),this.$m=i.getUTCMinutes(),this.$s=i.getUTCSeconds(),this.$ms=i.getUTCMilliseconds()}else u.call(this)};var g=a.utcOffset;a.utcOffset=function(i,c){var w=this.$utils().u;if(w(i))return this.$u?0:w(this.$offset)?g.call(this):this.$offset;if(typeof i=="string"&&(i=function(_){_===void 0&&(_="");var T=_.match(r);if(!T)return null;var M=(""+T[0]).match(n)||["-",0,0],V=M[0],b=60*+M[1]+ +M[2];return b===0?0:V==="+"?b:-b}(i),i===null))return this;var x=Math.abs(i)<=16?60*i:i;if(x===0)return this.utc(c);var f=this.clone();if(c)return f.$offset=x,f.$u=!1,f;var Y=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(f=this.local().add(x+Y,e)).$offset=x,f.$x.$localOffset=Y,f};var p=a.format;a.format=function(i){var c=i||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,c)},a.valueOf=function(){var i=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*i},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var $=a.toDate;a.toDate=function(i){return i==="s"&&this.$offset?l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():$.call(this)};var k=a.diff;a.diff=function(i,c,w){if(i&&this.$u===i.$u)return k.call(this,i,c,w);var x=this.local(),f=l(i).local();return k.call(x,f,c,w)}}})})(P);var q=P.exports;const G=O(q);var E={exports:{}};(function(y,t){(function(e,r){y.exports=r()})(L,function(){return function(e,r,n){r.prototype.dayOfYear=function(s){var o=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return s==null?o:this.add(s-o,"day")}}})})(E);var F=E.exports;const R=O(F);var D={exports:{}};(function(y,t){(function(e,r){y.exports=r()})(L,function(){var e="day";return function(r,n,s){var o=function(h){return h.add(4-h.isoWeekday(),e)},l=n.prototype;l.isoWeekYear=function(){return o(this).year()},l.isoWeek=function(h){if(!this.$utils().u(h))return this.add(7*(h-this.isoWeek()),e);var u,g,p,$,k=o(this),i=(u=this.isoWeekYear(),g=this.$u,p=(g?s.utc:s)().year(u).startOf("year"),$=4-p.isoWeekday(),p.isoWeekday()>4&&($+=7),p.add($,e));return k.diff(i,"week")+1},l.isoWeekday=function(h){return this.$utils().u(h)?this.day()||7:this.day(this.day()%7?h:h-7)};var a=l.startOf;l.startOf=function(h,u){var g=this.$utils(),p=!!g.u(u)||u;return g.p(h)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):a.bind(this)(h,u)}}})})(D);var j=D.exports;const Z=O(j);m.extend(R);m.extend(Z);m.extend(G);class N extends W{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const e=this.controlValues.findIndex(r=>r===t);e>-1?this._newStepIndex=e:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=A(this.for);if(t){const e=t;this.eoxMap=e}}get eoxMap(){return this._eoxMap}set eoxMap(t){const e=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",e)}_updateStep(t=1){var e;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((e=this._controlSource)==null||e.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const e=[];e.push(...t);let r=e.filter(n=>n instanceof I);for(;r.length;){const n=[];for(let s=0,o=r.length;s<o;s++){const l=r[s].getLayers().getArray();e.push(...l);const a=l.filter(h=>h instanceof I);n.push(...a)}r=n}return e}render(){if(this.layer&&this.for){const e=A(this.for).map;e.once("loadend",()=>{if(!this._originalParams){const n=this.getFlatLayersArray(e.getLayers().getArray()).find(s=>s.get("id")===this.layer);this._controlSource=n.getSource(),this._originalParams=this._controlSource.getParams()}})}return d`
      <style>
        ${B}
        ${!this.unstyled&&z}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?d`
                <button
                  part="previous"
                  class="icon previous small circle transparent no-margin"
                  @click="${()=>this.previous()}"
                >
                  ${this.unstyled?"<":d`
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
              `:S}
          <small part="current">
            ${this.displayFormat?m(this.controlValues[this._newStepIndex]).utc().format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </small>
          ${this.navigation?d`
                <button
                  part="next"
                  class="icon next small circle transparent no-margin"
                  @click="${()=>this.next()}"
                >
                  ${this.unstyled?"<":d`
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
              `:S}
          ${this.play?d`
                <button
                  part="play"
                  class="icon-text small ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this.unstyled?S:d`
                        <i class="small">
                          ${this._isAnimationPlaying?d`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>pause</title>
                                <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                              </svg>`:d`<svg
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
              `:S}
        </div>
        <div class="small-padding">
          ${this.slider?d`
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
    `}}customElements.define("eox-timecontrol",N);export{N as EOxTimeControl};
