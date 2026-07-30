var Y=Object.defineProperty;var U=e=>{throw TypeError(e)};var D=(e,s,t)=>s in e?Y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var w=(e,s,t)=>D(e,typeof s!="symbol"?s+"":s,t),q=(e,s,t)=>s.has(e)||U("Cannot "+t);var d=(e,s,t)=>(q(e,s,"read from private field"),t?t.call(e):s.get(e)),p=(e,s,t)=>s.has(e)?U("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),y=(e,s,t,r)=>(q(e,s,"write to private field"),r?r.call(e,t):s.set(e,t),t);import{A as M,a as J,b as l}from"./lit-element.BMPlKsWQ.js";import{e as E,i as T}from"./directive.CvdRHFdJ.js";import{p as ee}from"./directive-helpers.DDXwWjbG.js";import{n as O}from"./when.BR7zwNJC.js";import{e as te,a as se}from"./addCommonStyleSheet.B0XXRREc.js";import{ai as re,aj as ae}from"./Object.DcVsVtBM.js";import{g as ie}from"./getElement.COiK8z0h.js";import{e as ne,f as le}from"./GeoJSON.DoKboHFD.js";import{W as oe}from"./WKT.DsDt_o91.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=E(class extends T{constructor(){super(...arguments),this.key=M}render(e,s){return this.key=e,s}update(e,[s,t]){return s!==this.key&&(ee(e),this.key=s),t}}),de=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",s),e.clickInteraction.selectStyleLayer.on("change",s)},ue=(e,s,t)=>{if(e.clickId===s)return;const r=t?[]:[s];e.hoverInteraction.highlightById(r)},he=(e,s,t)=>{e.stopPropagation();const r=Number(e.target.getAttribute("index")),a=s.drawLayer.getSource().getFeatures()[r];s.drawLayer.getSource().removeFeature(a),s.drawnFeatures.splice(r,1),t.emitDrawnFeatures(),s.requestUpdate()},j={duration:750,padding:[20,20,20,20]},K={type:"FeatureCollection",features:[]},pe=(e,s)=>{const{clickId:t,drawLayer:r,olMap:a,clickInteraction:i}=s,c=i.getId(e);if(t===c){const n=r.getSource().getExtent();a.getView().fit(n,j),i.highlightById([])}else{const n=s.eoxMap.projection||"EPSG:3857",h=s.eoxDrawTools.projection,f=e.clone().getGeometry().transform(h,n).getExtent();i.highlightById([c]),a.getView().fit(f,j)}s.requestUpdate()};class R extends J{constructor(){super();w(this,"hoverInteraction");w(this,"clickInteraction");w(this,"hoverId");w(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){he(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){pe(t,this)}_handleHoverFeature(t,r=!1){ue(this,t,r)}firstUpdated(){de(this)}createRenderRoot(){return this}render(){var r,a;this.hoverId=(r=this.hoverInteraction)==null?void 0:r.selectedFids[0],this.clickId=(a=this.clickInteraction)==null?void 0:a.selectedFids[0];const t=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return l`
      <ul class="list no-space">
        ${this.drawnFeatures.map((i,c)=>{var g;const o=c+1,n=Object.values(this.eoxMap.selectInteractions)[0].getId(i),h=this.hoverId===n,f=this.clickId===n,m=h?"surface-container-low":f?"fill":M,v=(g=this.featureNameKey)==null?void 0:g.split("."),b=i.get(this.featureNameKey)||(v==null?void 0:v.reduce((N,X)=>N==null?void 0:N[X],{...i.getProperties()})),u=b||`${this.featureName} ${o}`;return ce(o,l`
              <li
                class="${m} no-round"
                @mouseover=${()=>this._handleHoverFeature(n)}
                @mouseout=${()=>this._handleHoverFeature(n,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
              >
                <div class="max">
                  <span class="title">${u}</span>
                </div>
                <button
                  index=${c}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":l`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}w(R,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",R);const ye=e=>{const{multipleFeatures:s,drawnFeatures:t,currentlyDrawing:r}=e,a=!s&&(t==null?void 0:t.length)>0||r,i=!(t!=null&&t.length)&&!r;return{drawDisabled:a,discardDisabled:i}};function fe(e){navigator.clipboard.writeText(e).then(function(){},function(s){console.error("Could not copy text: ",s)})}const ge=(e,s)=>new ne().writeFeaturesObject(e,s),me=(e,s)=>new oe().writeFeatures(e,s);var I,$;class Z extends J{constructor(){super();p(this,I,!0);p(this,$,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:r}=ye(this);y(this,I,t),y(this,$,r)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",r={Polygon:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},a=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,i=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,c=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,o=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,n=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return l`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${d(this,I)||M}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:l`
                  <i class="small"
                    >${this.select?a:r[this.type]}</i
                  >
                  <span class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </span>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${d(this,$)||M}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":l`
                  <i class="small">${i}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${O(this.showEditor,()=>l`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":l`
                    <i class="small">${c}</i>
                    <span class="tooltip bottom">Edit features</span>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${O(this.importFeatures,()=>l`
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
              ${this.unstyled?"import":l`
                    <i class="small">${o}</i>
                    <span class="tooltip bottom">Import features</span>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${O(this.showEditor,()=>l`
          <div id="editor" class="field border extra hidden">
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
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
              @click=${()=>fe(this.geoJSON)}
            >
              ${this.unstyled?"copy":l`
                    <i class="tiny">${n}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}}I=new WeakMap,$=new WeakMap,w(Z,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",Z);se();const we=`
  ${te}
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
`,ve=e=>{(()=>{var t;if(e.emitDrawnFeatures(),!e.multipleFeatures)(t=e.draw)==null||t.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const a=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!a)return;e.drawLayer.getSource().addFeature(a),e.drawnFeatures=[a]}})(),e.requestUpdate()},Fe=e=>{const s=()=>{var r;e.drawLayer.set("isDrawingEnabled",!0),(r=e.draw)==null||r.setActive(!0),e.selectionEvents.addSelectionEvent()},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};s(),t()},G=(e,s,t)=>{var n,h,f,m;if(!t||!s)return;const r=s.getLayerById(t),a=r?JSON.parse(JSON.stringify(r.get("_jsonDefinition"))):null;if(!a){console.error(`Layer with id ${t} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((n=e.featureStyles)==null?void 0:n.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},c={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((h=e.featureStyles)==null?void 0:h.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};a.interactions=[i,c],s.addOrUpdateLayer(a),z(s.layers,t,[a]);const o=e.draw;e.draw=s.selectInteractions.SelectLayerClickInteraction,o==null||o.setActive(!1),(f=s.selectInteractions.SelectLayerClickInteraction)==null||f.setActive(!1),(m=s.selectInteractions.SelectLayerHoverInteraction)==null||m.setActive(!1)};function z(e,s,t){const r=e.findIndex(a=>a.properties.id===s);if(r!==-1)return e.splice(r,1,...t),e;for(const a of e)if(a.type==="Group"){const i=z(a.layers,s,t);i!=null&&i.length&&(a.layers=i)}return e}const F=e=>{const s=e.getGeometry();if(!s)return;let t="";if(s.getType()==="Polygon"||s.getType()==="MultiPolygon"){const r=re(s);r>1e6?t=(r/1e6).toFixed(2)+" km²":t=r.toFixed(2)+" m²"}else if(s.getType()==="LineString"||s.getType()==="MultiLineString"){const r=ae(s);r>1e3?t=(r/1e3).toFixed(2)+" km":t=r.toFixed(2)+" m"}else if(s.getType()==="Circle"){const r=s.getRadius(),a=Math.PI*Math.pow(r,2);a>1e6?t=(a/1e6).toFixed(2)+" km²":t=a.toFixed(2)+" m²"}t&&e.get("measure")!==t&&e.set("measure",t)},He=e=>{const s=e.drawLayer.getSource(),t=r=>{const a=r.feature;a&&(F(a),a.getGeometry().on("change",()=>F(a)))};s.on("addfeature",t),s.getFeatures().forEach(r=>{F(r),r.getGeometry().on("change",()=>F(r))})},_=(e,s)=>{var h,f,m,v,b;const r=ie(e.for),a=r.map,i="0, 65, 112";e.drawLayer=r.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((h=e.featureStyles)==null?void 0:h.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((f=e.featureStyles)==null?void 0:f.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},...e.layerId?[]:[{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((m=e.featureStyles)==null?void 0:m.hover)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((v=e.featureStyles)==null?void 0:v.click)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=r.interactions.drawInteraction,e.modify=r.interactions.drawInteraction_modify,G(e,r,e.layerId),e.measure&&He(e);const c=()=>e.onModifyEnd(),o=()=>ve(e);return(b=e.modify)==null||b.on("modifyend",c),e.measure&&e.draw&&typeof e.draw.on=="function"&&e.draw.on("drawstart",u=>{const g=u.feature;F(g),g.getGeometry().on("change",()=>F(g))}),r.addEventListener("addfeatures",o),{EoxMap:r,OlMap:a,reset:u=>{var g;!u.eoxMap||!u.drawLayer||(u.drawLayer.getSource().clear(),u.eoxMap.map.removeLayer(u.drawLayer),(g=u.modify)==null||g.un("modifyend",c),u.eoxMap.removeEventListener("addfeatures",o),u.layerId||(u.draw=null),u.modify=null)}}},Ve=e=>{const s=()=>{var a;e.drawnFeatures=[],(a=e.draw)==null||a.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},t=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),t()},Se=(e,s)=>{setTimeout(()=>{const r=e.drawLayer.getSource().getFeatures(),a=e.eoxMap.projection||"EPSG:3857",i=e.projection,c=i?r.map(n=>{n=n.clone();const h=n.getGeometry().transform(a,i);return n.setGeometry(h),n}):r;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(c):e.drawnFeatures=c;let o;switch(e.format){case"geojson":o=ge(e.drawnFeatures);break;case"wkt":o=me(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),s(o)},0)},Le=e=>{const s=a=>{(a==null?void 0:a.detail.id)!=="SelectLayerClickInteraction"||!a.detail.feature||(typeof a.detail.feature.getGeometry().getCoordinates!="function"&&(a.detail.feature=le(a.detail.feature)),e.drawLayer.getSource().addFeature(a.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:a.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const a=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;a==null||a.setActive(!0),e.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var i;const a=(i=e.eoxMap.selectInteractions)==null?void 0:i.SelectLayerHoverInteraction;a&&(a.selectedFids=[],a==null||a.setActive(!1)),e.eoxMap.removeEventListener("select",s)}}},be=(e,s,t,r)=>{if(s){if(t){r&&t!==r&&P(e,s),G(e,s,t);return}if(!t&&r){P(e,s);return}}};function P(e,s){s&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}const W=e=>{var s;e.currentlyDrawing&&((s=e.draw)==null||s.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())},Me=(e,s)=>{e.key==="Escape"&&W(s)};function Ie(e,s){const t=e.drawnFeatures.indexOf(s);t>-1&&x(e,t)}function x(e,s){if(s>-1&&s<e.drawnFeatures.length){const t=[...e.drawnFeatures];t.splice(s,1),e.drawnFeatures=t,e.emitDrawnFeatures()}}function $e(e,s){function t(i){i.preventDefault(),i.stopPropagation()}function r(i){i.srcElement.style.opacity="0.4"}function a(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{s.addEventListener(i,t,!1),["dragenter","dragover"].includes(i)?s.addEventListener(i,r,!1):s.addEventListener(i,a,!1)}),s.addEventListener("drop",i=>Q(i,e),!1)}function ke(e){e.preventDefault(),e.stopPropagation()}function Q(e,s){ke(e);let t;"dataTransfer"in e&&e.dataTransfer?t=e.dataTransfer.files:e.target&&"files"in e.target?t=e.target.files:t=[],Array.from(t).forEach(r=>Be(r,s)),e.target&&"value"in e.target&&(e.target.value="")}function Be(e,s){const t=new FileReader;t.readAsText(e),t.onloadend=function(){typeof t.result=="string"&&s.handleFeatureChange(t.result)}}var H,k,B,V,S,C,L,A;class Ce extends J{constructor(){super();p(this,H);p(this,k);p(this,B);p(this,V);p(this,S,!1);p(this,C);p(this,L,[]);p(this,A,t=>Me(t,this));this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){y(this,C,t),t&&(this.multipleFeatures=!0)}get continuous(){return d(this,C)}setDrawnFeaturesInternal(t){y(this,S,!0),this.drawnFeatures=t,y(this,S,!1)}set drawnFeatures(t){var a;const r=d(this,L);if(y(this,L,t),this.drawLayer&&!d(this,S)){if(this.drawLayer.getSource().clear(),t!=null&&t.length){const i=((a=this.eoxMap)==null?void 0:a.projection)||"EPSG:3857",c=this.projection||"EPSG:4326";let o=t;i!==c&&(o=t.map(n=>{n=n.clone();const h=n.getGeometry().transform(c,i);return n.setGeometry(h),n})),this.drawLayer.getSource().addFeatures(o)}this.updateGeoJSON()}this.requestUpdate("drawnFeatures",r)}get drawnFeatures(){return d(this,L)}set layerId(t){be(this,this.eoxMap,t,d(this,V)),y(this,V,t)}get layerId(){return d(this,V)}startDrawing(){Fe(this)}stopDrawing(){W(this)}discardDrawing(){Ve(this)}removeFeature(t){Ie(this,t)}removeFeatureByIndex(t){x(this,t)}handleFeatureChange(t,r=!1,a=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(K),this.drawLayer,this.eoxMap,r,a)}handleFilesChange(t){Q(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){y(this,B,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||K,void 0,2))}emitDrawnFeatures(){Se(this,r=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:r}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);const{EoxMap:t,OlMap:r,reset:a}=_(this,this.multipleFeatures);this.resetLayer=a,this.eoxMap=t,y(this,k,r)}firstUpdated(){var t;this.updateLayer(),this.selectionEvents=Le(this),this.importFeatures&&$e(this,this.eoxMap),((t=this.drawnFeatures)==null?void 0:t.length)>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(t){((a=>t.has(a)&&t.get(a)!==void 0)("for")||t.has("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return d(this,H)}set eoxMap(t){const r=d(this,H);y(this,H,t),this.requestUpdate("eoxMap",r)}connectedCallback(){if(super.connectedCallback(),document.addEventListener("keydown",d(this,A)),this.drawLayer&&this.eoxMap){const{reset:t}=_(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("keydown",d(this,A)),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return l`
      <style>
        :host { display: block; }
        ${!this.unstyled&&we}
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
        .geoJSON=${d(this,B)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?l`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${d(this,k)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:M}
    `}}H=new WeakMap,k=new WeakMap,B=new WeakMap,V=new WeakMap,S=new WeakMap,C=new WeakMap,L=new WeakMap,A=new WeakMap;customElements.define("eox-drawtools",Ce);export{Ce as EOxDrawTools};
