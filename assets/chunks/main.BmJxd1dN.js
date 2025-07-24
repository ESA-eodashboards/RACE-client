var Z=Object.defineProperty;var C=t=>{throw TypeError(t)};var x=(t,s,e)=>s in t?Z(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var y=(t,s,e)=>x(t,typeof s!="symbol"?s+"":s,e),A=(t,s,e)=>s.has(t)||C("Cannot "+e);var d=(t,s,e)=>(A(t,s,"read from private field"),e?e.call(t):s.get(t)),p=(t,s,e)=>s.has(t)?C("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),h=(t,s,e,r)=>(A(t,s,"write to private field"),r?r.call(t,e):s.set(t,e),e);import{E as w,r as $,x as n}from"./lit-element.Deg-YTNa.js";import{e as z,i as W}from"./directive.CvdRHFdJ.js";import{m as Q}from"./directive-helpers.oNa9w_hR.js";import{n as M}from"./when.BR7zwNJC.js";import{e as X,a as Y}from"./addCommonStyleSheet.C1Vj32jp.js";import{g as D}from"./getElement.DO5DovG0.js";import{z as E}from"./GeoJSON.KR0DzGW7.js";import{W as T}from"./WKT.D8lvLaMd.js";import"./extent.Bl2mvS2n.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=z(class extends W{constructor(){super(...arguments),this.key=w}render(t,s){return this.key=t,s}update(t,[s,e]){return s!==this.key&&(Q(t),this.key=s),e}}),et=t=>{t.hoverInteraction=t.eoxMap.selectInteractions.SelectLayerHoverInteraction,t.clickInteraction=t.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{t.requestUpdate()};t.hoverInteraction.selectStyleLayer.on("change",s),t.clickInteraction.selectStyleLayer.on("change",s)},st=(t,s,e)=>{if(t.clickId===s)return;const r=e?[]:[s];t.hoverInteraction.highlightById(r)},rt=(t,s,e)=>{t.stopPropagation();const r=Number(t.target.getAttribute("index")),a=s.drawLayer.getSource().getFeatures()[r];s.drawLayer.getSource().removeFeature(a),s.drawnFeatures.splice(r,1),e.emitDrawnFeatures(),s.requestUpdate()},N={duration:750,padding:[20,20,20,20]},O={type:"FeatureCollection",features:[]},it=(t,s)=>{const{clickId:e,drawLayer:r,olMap:a,clickInteraction:i}=s,l=i.getId(t);if(e===l){const o=r.getSource().getExtent();a.getView().fit(o,N),i.highlightById([])}else{const o=s.eoxMap.projection||"EPSG:3857",u=s.eoxDrawTools.projection,f=t.clone().getGeometry().transform(u,o).getExtent();i.highlightById([l]),a.getView().fit(f,N)}s.requestUpdate()};class q extends ${constructor(){super();y(this,"hoverInteraction");y(this,"clickInteraction");y(this,"hoverId");y(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(e){rt(e,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(e){it(e,this)}_handleHoverFeature(e,r=!1){st(this,e,r)}firstUpdated(){et(this)}createRenderRoot(){return this}render(){var r,a;this.hoverId=(r=this.hoverInteraction)==null?void 0:r.selectedFids[0],this.clickId=(a=this.clickInteraction)==null?void 0:a.selectedFids[0];const e=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return n`
      <ul class="list no-space">
        ${this.drawnFeatures.map((i,l)=>{var B;const c=l+1,o=Object.values(this.eoxMap.selectInteractions)[0].getId(i),u=this.hoverId===o,f=this.clickId===o,_=u?"surface-container-low":f?"fill":w,b=(B=this.featureNameKey)==null?void 0:B.split("."),k=i.get(this.featureNameKey)||(b==null?void 0:b.reduce((I,R)=>I==null?void 0:I[R],{...i.getProperties()})),K=k||`${this.featureName} ${c}`;return tt(c,n`
              <li
                class="${_} no-round"
                @mouseover=${()=>this._handleHoverFeature(o)}
                @mouseout=${()=>this._handleHoverFeature(o,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
              >
                <div class="max">
                  <span class="title">${K}</span>
                </div>
                <button
                  index=${l}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":n`<i class="small">${e}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}y(q,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",q);const at=t=>{const{multipleFeatures:s,drawnFeatures:e,currentlyDrawing:r}=t,a=!s&&(e==null?void 0:e.length)>0||r,i=!(e!=null&&e.length)&&!r;return{drawDisabled:a,discardDisabled:i}};function nt(t){navigator.clipboard.writeText(t).then(function(){},function(s){console.error("Could not copy text: ",s)})}const lt=(t,s)=>new E().writeFeaturesObject(t,s),ot=(t,s)=>new T().writeFeatures(t,s);var H,V;class G extends ${constructor(){super();p(this,H,!0);p(this,V,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:e,discardDisabled:r}=at(this);h(this,H,e),h(this,V,r)}createRenderRoot(){return this}render(){this.updateButtonStates();const e=this.currentlyDrawing?"drawing":"draw",r={Polygon:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},a=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,i=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,l=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,c=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,o=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return n`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${d(this,H)||w}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?e:n`
                  <i class="small"
                    >${this.select?a:r[this.type]}</i
                  >
                  <div class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </div>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${d(this,V)||w}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":n`
                  <i class="small">${i}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${M(this.showEditor,()=>n`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":n`
                    <i class="small">${l}</i>
                    <div class="tooltip bottom">Edit features</div>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${M(this.importFeatures,()=>n`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Import features":""}"
              @click=${()=>this.querySelector("#import-file").click()}
            >
              ${this.unstyled?"import":n`
                    <i class="small">${c}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${M(this.showEditor,()=>n`
          <div id="editor" class="field textarea border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin"
              @click=${()=>nt(this.geoJSON)}
            >
              ${this.unstyled?"copy":n`
                    <i class="tiny">${o}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}H=new WeakMap,V=new WeakMap,y(G,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",G);Y();const ct=`
  ${X}
  :host {
    --padding: 0.5rem;
  }
  .drawtitle {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .hidden {
    display: none;
  }
`,dt=t=>{(()=>{if(t.emitDrawnFeatures(),!t.multipleFeatures)t.draw.setActive(!1),t.selectionEvents.removeSelectionEvent(),t.currentlyDrawing=!1;else if(t.continuous)if(!t.layerId)t.drawLayer.getSource().clear(),t.drawnFeatures=[];else{const r=t.drawLayer.getSource().getFeatures().at(-1);if(t.drawLayer.getSource().clear(),!r)return;t.drawLayer.getSource().addFeature(r),t.drawnFeatures=[r]}})(),t.requestUpdate()},ut=t=>{const s=()=>{t.drawLayer.set("isDrawingEnabled",!0),t.draw.setActive(!0),t.selectionEvents.addSelectionEvent()},e=()=>{t.currentlyDrawing=!0,t.requestUpdate()};s(),e(),document.addEventListener("keydown",({key:r})=>{r==="Escape"&&t.currentlyDrawing&&(t.draw.setActive(!1),t.currentlyDrawing=!1,t.requestUpdate())})},J=(t,s)=>{var l,c,o,u,f;const r=D(t.for),a=r.map,i="0, 65, 112";return t.drawLayer=r.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((l=t.featureStyles)==null?void 0:l.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:t.type,modify:t.allowModify,stopClick:!0,style:((c=t.featureStyles)==null?void 0:c.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((o=t.featureStyles)==null?void 0:o.hover)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((u=t.featureStyles)==null?void 0:u.click)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]}),t.draw=r.interactions.drawInteraction,t.modify=r.interactions.drawInteractionmodify,L(t,r,t.layerId),(f=t.modify)==null||f.on("modifyend",()=>t.onModifyEnd()),r.addEventListener("addfeatures",()=>dt(t)),{EoxMap:r,OlMap:a}},ht=t=>{const s=()=>{t.drawnFeatures=[],t.draw.setActive(!1),t.selectionEvents.removeSelectionEvent(),t.drawLayer.getSource().clear(),t.geoJSON=null},e=()=>{t.emitDrawnFeatures(),t.currentlyDrawing=!1,t.requestUpdate()};s(),e()},pt=(t,s)=>{setTimeout(()=>{const r=t.drawLayer.getSource().getFeatures(),a=t.eoxMap.projection||"EPSG:3857",i=t.projection;t.drawnFeatures=i?r.map(c=>{c=c.clone();const o=c.getGeometry().transform(a,i);return c.setGeometry(o),c}):r;let l;switch(t.format){case"geojson":l=lt(t.drawnFeatures);break;case"wkt":l=ot(t.drawnFeatures);break;case"feature":l=t.drawnFeatures;break;default:l=t.drawnFeatures;break}t.updateGeoJSON(),t.requestUpdate(),s(l)},0)},yt=t=>{const s=a=>{(a==null?void 0:a.detail.id)!=="SelectLayerClickInteraction"||!a.detail.feature||(t.drawLayer.getSource().addFeature(a.detail.feature),t.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:a.detail})))};return{addSelectionEvent:()=>{t.layerId&&(t.eoxMap.selectInteractions.SelectLayerHoverInteraction.setActive(!0),t.eoxMap.addEventListener("select",s))},removeSelectionEvent:()=>{var i;const a=(i=t.eoxMap.selectInteractions)==null?void 0:i.SelectLayerHoverInteraction;a&&(a.selectedFids=[],a.setActive(!1)),t.eoxMap.removeEventListener("select",s)}}},L=(t,s,e)=>{var o,u;if(!e||!s)return;const r=s.getLayerById(e),a=r?JSON.parse(JSON.stringify(r.get("_jsonDefinition"))):null;if(!a){console.error(`Layer with id ${e} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((o=t.featureStyles)==null?void 0:o.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},l={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:t.multipleFeatures,modify:t.allowModify,active:!1,style:((u=t.featureStyles)==null?void 0:u.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};a.interactions=[i,l],s.addOrUpdateLayer(a),P(s.layers,e,[a]);const c=t.draw;t.draw=s.selectInteractions.SelectLayerClickInteraction,c.setActive(!1),s.selectInteractions.SelectLayerClickInteraction.setActive(!1),s.selectInteractions.SelectLayerHoverInteraction.setActive(!1)};function P(t,s,e){const r=t.findIndex(a=>a.properties.id===s);if(r!==-1)return t.splice(r,1,...e),t;for(const a of t)if(a.type==="Group"){const i=P(a.layers,s,e);i!=null&&i.length&&(a.layers=i)}return t}const ft=(t,s,e,r)=>{if(s){if(e){r&&e!==r&&U(t,s),L(t,s,e);return}if(!e&&r){U(t,s);return}}};function U(t,s){s&&(t.discardDrawing(),t.selectionEvents.removeSelectionEvent(),t.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}function gt(t,s){function e(i){i.preventDefault(),i.stopPropagation()}function r(i){i.srcElement.style.opacity="0.4"}function a(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{s.addEventListener(i,e,!1),["dragenter","dragover"].includes(i)?s.addEventListener(i,r,!1):s.addEventListener(i,a,!1)}),s.addEventListener("drop",i=>j(i,t),!1)}function mt(t){t.preventDefault(),t.stopPropagation()}function j(t,s){mt(t);const e=t.dataTransfer?t.dataTransfer.files:t.target.files;Array.from(e).forEach(r=>vt(r,s))}function vt(t,s){const e=new FileReader;e.readAsText(t),e.onloadend=function(){typeof e.result=="string"&&s.handleFeatureChange(e.result)}}var g,m,S,v,F;class wt extends ${constructor(){super();p(this,g);p(this,m);p(this,S);p(this,v);p(this,F);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(e){h(this,F,e),e&&(this.multipleFeatures=!0)}get continuous(){return d(this,F)}set layerId(e){ft(this,this.eoxMap,e,d(this,v)),h(this,v,e)}get layerId(){return d(this,v)}startDrawing(){ut(this)}discardDrawing(){ht(this)}handleFeatureChange(e,r=!1,a=!0){this.eoxMap.parseTextToFeature(e||JSON.stringify(O),this.drawLayer,this.eoxMap,r,{dataProjection:this.eoxMap.projection,featureProjection:this.projection},a)}handleFilesChange(e){j(e,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){h(this,S,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||O,void 0,2))}emitDrawnFeatures(){pt(this,r=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:r}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:e,OlMap:r}=J(this,this.multipleFeatures);this.eoxMap=e,h(this,m,r),this.selectionEvents=yt(this),this.importFeatures&&gt(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(e){if(e.has("for")){const{EoxMap:r,OlMap:a}=J(this,this.multipleFeatures);this.eoxMap=r,h(this,m,a)}}get eoxMap(){return d(this,g)}set eoxMap(e){const r=d(this,g);h(this,g,e),this.requestUpdate("eoxMap",r)}disconnectedCallback(){var e;(e=this.eoxMap)==null||e.map.removeLayer(this.drawLayer),super.disconnectedCallback()}render(){var e;return n`
      <style>
        :host { display: block; }
        ${!this.unstyled&&ct}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:r=>this.handleFeatureChange(r.target.value,!0),import:r=>this.handleFilesChange(r)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${d(this,S)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((e=this.drawnFeatures)!=null&&e.length)?n`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${d(this,m)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:w}
    `}}g=new WeakMap,m=new WeakMap,S=new WeakMap,v=new WeakMap,F=new WeakMap;customElements.define("eox-drawtools",wt);export{wt as EOxDrawTools};
