import{f as $,u as E,E as C,b as T,w as y,i as A,a as F}from"./lit-element.BMPlKsWQ.js";import{a6 as _,a1 as S,E as b,a7 as L,a2 as w,ab as R,ac as D,ad as z,O as U,h as O}from"./sequential.BcvVcPN9.js";import{e as I,i as N,t as M}from"./directive.CvdRHFdJ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:$},B=(o=j,e,t)=>{const{kind:r,metadata:s}=t;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(t.name,o),r==="accessor"){const{name:c}=t;return{set(l){const m=e.get.call(this);e.set.call(this,l),this.requestUpdate(c,m,o,!0,l)},init(l){return l!==void 0&&this.C(c,void 0,o,l),l}}}if(r==="setter"){const{name:c}=t;return function(l){const m=this[c];e.call(this,l),this.requestUpdate(c,m,o,!0,l)}}throw Error("Unsupported decorator location: "+r)};function h(o){return(e,t)=>typeof t=="object"?B(o,e,t):((r,s,i)=>{const c=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),c?Object.getOwnPropertyDescriptor(s,i):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=(o,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(o,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(o,e){return(t,r,s)=>{const i=c=>{var l;return((l=c.renderRoot)==null?void 0:l.querySelector(o))??null};return q(t,r,{get(){return i(this)}})}}class V{constructor(e){this.cle=e}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:e,domain:t,range:r}=this.cle;this.colorScale=e?_(e).domain(t):S().range(r).domain(t).interpolate(b)}setLogColorScale(){const{interpolator:e,domain:t,range:r}=this.cle;this.colorScale=e?L(e).domain(t):w().range(r).domain(t).interpolate(b)}setDiscreteColorScale(){this.colorScale=R().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const e=this.cle.domain;this.colorScale=D().domain(e.slice(1,e.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=z().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(e){throw new Error(`invalid property scaletype: ${e}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=I(class extends N{constructor(o){var e;if(super(o),o.type!==M.ATTRIBUTE||o.name!=="class"||((e=o.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var r,s;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(e)}const t=o.element.classList;for(const i of this.st)i in e||(t.remove(i),this.st.delete(i));for(const i in e){const c=!!e[i];c===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(c?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return C}});class X{constructor(e){this.cle=e}render(){const e=this.cle.titleText?T`<p class="legend-title">${this.cle.titleText}</p>`:"",t={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return T`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${e}
      <slot name="subtitle"></slot>
      <svg
        class=${v(t)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${v(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:e,colorScale:t,domain:r}=this.cle,s={"legend-item":!0,line:e==="line",circle:e==="circle"};return T`${r.map(i=>T`<li
          class=${v(s)}
          style="--color:${t(i)}"
        >
          ${i}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:e,marginTop:t,marginLeft:r,marginRight:s,tickSize:i,width:c,range:l}=this.cle,m=this.cle.marginBottom+i,g=this.cle.height+i,u=((d=e.interpolator)==null?void 0:d.call(e))||U(b,l);return y`<image
      x=${r}
      y=${t}
      width=${c-s-r}
      height=${g-t-m}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:e,marginTop:t,marginLeft:r,colorScale:s,xScale:i}=this.cle,c=this.cle.height+e,l=this.cle.marginBottom+e,m=s.range(),g=d=>s.invertExtent(d).map(i)[0]||r,u=d=>{let[f,p]=s.invertExtent(d).map(i);return f=f||0,p=p||i.range()[1],p-f};return y`${m.map(d=>y`<rect x=${g(d)} y=${t} width=${u(d)} height=${c-t-l} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:e,tickSize:t,tickFormat:r,tickFormatter:s,tickValues:i,xScale:c,marginTop:l}=this.cle,m=this.cle.height+t,g=this.cle.marginBottom+t,u=i!=null&&i.length?i:c.ticks.apply(c,[e,r]),d=Math.max(t,0)+3,f=()=>u.map(p=>y`<g class="tick" transform='translate(${c(p)},0)'>
      <line stroke="currentColor" y2="${t}" y1="${l+g-m}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${s(p)}</text>
      </g>`);return y`<g
      class="x-axis"
      transform="translate(0, ${m-g})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(e,t=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${t}`);const s=r.getContext("2d");for(let i=0;i<t;i++)s.fillStyle=e(i/(t-1)),s.fillRect(i,0,1,1);return r}}const H=325,K=32,W=6,Y=12,Z=16,J=12,k=5,Q=6,x=".1f",ee=[0,1],te=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ie="Color Legend Element",re="circle",oe="continuous",se=["domain","range","interpolator","scaleType"],ce=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class le{constructor(e){this.cle=e}setXScale(){const{scaleType:e,marginLeft:t,width:r,marginRight:s}=this.cle;switch(e){case"continuous":this.xScale=S().domain(this.cle.domain).range([t,r-s]);break;case"log10":this.xScale=w().domain(this.cle.domain).range([t,r-s]).nice();break;case"discrete":case"threshold":this.xScale=S().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([t,r-s]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${e}`)}}handleAxisTicks(){var e,t,r;if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||k);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[s,i]=this.xScale.domain();this.cle.tickValues=[s,...((t=(e=this.cle.colorScale)==null?void 0:e.thresholds)==null?void 0:t.call(e))||this.cle.colorScale.domain(),i]}typeof this.cle.tickFormatter!="function"&&((r=this.cle.tickFormat)!=null&&r.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=O(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||k,this.cle.tickFormat||x))}}const ae=A`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var n=function(o,e,t,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var l=o.length-1;l>=0;l--)(c=o[l])&&(i=(s<3?c(i):s>3?c(e,t,i):c(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let a=class extends F{constructor(){super(...arguments),this.titleText=ie,this.width=H,this.height=K,this.marginTop=W,this.marginRight=Y,this.marginBottom=Z,this.marginLeft=J,this.scaleType=oe,this.domain=ee,this.range=te,this.markType=re,this.ticks=k,this.tickFormat=x,this.tickSize=Q,this.colorScaleSetter=new V(this),this.axisTickSetter=new le(this),this.renderer=new X(this)}get interpolator(){return this._interpolator}set interpolator(e){if(typeof e=="function"){const t=this.interpolator;this._interpolator=e,this.requestUpdate("interpolator",t)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(e){if(typeof e=="function"){const t=this.tickFormatter;this._tickFormatter=e,this.requestUpdate("tickFormatter",t)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(e){se.some(t=>e.has(t))&&this.colorScaleSetter.setColorScale(),ce.some(t=>e.has(t))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};a.styles=[ae];n([h({type:String})],a.prototype,"titleText",void 0);n([h({type:Number})],a.prototype,"width",void 0);n([h({type:Number})],a.prototype,"height",void 0);n([h({type:Number})],a.prototype,"marginTop",void 0);n([h({type:Number})],a.prototype,"marginRight",void 0);n([h({type:Number})],a.prototype,"marginBottom",void 0);n([h({type:Number})],a.prototype,"marginLeft",void 0);n([h({type:String})],a.prototype,"scaleType",void 0);n([h({type:Array})],a.prototype,"domain",void 0);n([h({type:Array})],a.prototype,"range",void 0);n([h({type:String})],a.prototype,"markType",void 0);n([h({type:Number})],a.prototype,"ticks",void 0);n([h({type:String})],a.prototype,"tickFormat",void 0);n([h({type:Number})],a.prototype,"tickSize",void 0);n([h({type:Array})],a.prototype,"tickValues",void 0);n([G("svg")],a.prototype,"svg",void 0);n([h({attribute:!1})],a.prototype,"interpolator",null);n([h({attribute:!1})],a.prototype,"tickFormatter",null);a=n([P("color-legend")],a);export{a as ColorLegendElement};
