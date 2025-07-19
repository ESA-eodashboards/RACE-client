var st=Object.defineProperty;var $=e=>{throw TypeError(e)};var it=(e,t,r)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var f=(e,t,r)=>it(e,typeof t!="symbol"?t+"":t,r),A=(e,t,r)=>t.has(e)||$("Cannot "+r);var d=(e,t,r)=>(A(e,t,"read from private field"),r?r.call(e):t.get(e)),y=(e,t,r)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),p=(e,t,r,s)=>(A(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r);import{E as M,r as x,x as l}from"./lit-element.Deg-YTNa.js";import{e as nt,i as at}from"./directive.CvdRHFdJ.js";import{m as ot}from"./directive-helpers.oNa9w_hR.js";import{n as N}from"./when.BR7zwNJC.js";import{e as lt,a as ct}from"./addCommonStyleSheet.C1Vj32jp.js";import{g as ut}from"./getElement.DO5DovG0.js";import{X as dt,_ as ht,H as O,Z as E,Q as k,O as pt,N as yt,K as ft,P as mt,L as gt,I as wt}from"./GeoJSON.BLR3doXB.js";import{s as g}from"./extent.BF0uOnv8.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=nt(class extends at{constructor(){super(...arguments),this.key=M}render(e,t){return this.key=e,t}update(e,[t,r]){return t!==this.key&&(ot(e),this.key=t),r}}),Lt=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const t=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",t),e.clickInteraction.selectStyleLayer.on("change",t)},Mt=(e,t,r)=>{if(e.clickId===t)return;const s=r?[]:[t];e.hoverInteraction.highlightById(s)},Ft=(e,t,r)=>{e.stopPropagation();const s=Number(e.target.getAttribute("index")),i=t.drawLayer.getSource().getFeatures()[s];t.drawLayer.getSource().removeFeature(i),t.drawnFeatures.splice(s,1),r.emitDrawnFeatures(),t.requestUpdate()},R={duration:750,padding:[20,20,20,20]},B={type:"FeatureCollection",features:[]},Ht=(e,t)=>{const{clickId:r,drawLayer:s,olMap:i,clickInteraction:n}=t,o=n.getId(e);if(r===o){const c=s.getSource().getExtent();i.getView().fit(c,R),n.highlightById([])}else{const c=t.eoxMap.projection||"EPSG:3857",h=t.eoxDrawTools.projection,m=e.clone().getGeometry().transform(h,c).getExtent();n.highlightById([o]),i.getView().fit(m,R)}t.requestUpdate()};class J extends x{constructor(){super();f(this,"hoverInteraction");f(this,"clickInteraction");f(this,"hoverId");f(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(r){Ft(r,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(r){Ht(r,this)}_handleHoverFeature(r,s=!1){Mt(this,r,s)}firstUpdated(){Lt(this)}createRenderRoot(){return this}render(){var s,i;this.hoverId=(s=this.hoverInteraction)==null?void 0:s.selectedFids[0],this.clickId=(i=this.clickInteraction)==null?void 0:i.selectedFids[0];const r=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return l`
      <ul class="list no-space">
        ${this.drawnFeatures.map((n,o)=>{var T;const u=o+1,c=Object.values(this.eoxMap.selectInteractions)[0].getId(n),h=this.hoverId===c,m=this.clickId===c,tt=h?"surface-container-low":m?"fill":M,V=(T=this.featureNameKey)==null?void 0:T.split("."),C=n.get(this.featureNameKey)||(V==null?void 0:V.reduce((b,rt)=>b==null?void 0:b[rt],{...n.getProperties()})),et=C||`${this.featureName} ${u}`;return vt(u,l`
              <li
                class="${tt} no-round"
                @mouseover=${()=>this._handleHoverFeature(c)}
                @mouseout=${()=>this._handleHoverFeature(c,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(n)}"
              >
                <div class="max">
                  <span class="title">${et}</span>
                </div>
                <button
                  index=${o}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":l`<i class="small">${r}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}f(J,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",J);const _t=e=>{const{multipleFeatures:t,drawnFeatures:r,currentlyDrawing:s}=e,i=!t&&(r==null?void 0:r.length)>0||s,n=!(r!=null&&r.length)&&!s;return{drawDisabled:i,discardDisabled:n}};function St(e){navigator.clipboard.writeText(e).then(function(){},function(t){console.error("Could not copy text: ",t)})}const It=(e,t)=>new dt().writeFeaturesObject(e,t);class Vt extends ht{constructor(){super()}getType(){return"text"}readFeature(t,r){return this.readFeatureFromText(I(t),this.adaptOptions(r))}readFeatureFromText(t,r){return g()}readFeatures(t,r){return this.readFeaturesFromText(I(t),this.adaptOptions(r))}readFeaturesFromText(t,r){return g()}readGeometry(t,r){return this.readGeometryFromText(I(t),this.adaptOptions(r))}readGeometryFromText(t,r){return g()}readProjection(t){return this.readProjectionFromText(I(t))}readProjectionFromText(t){return this.dataProjection}writeFeature(t,r){return this.writeFeatureText(t,this.adaptOptions(r))}writeFeatureText(t,r){return g()}writeFeatures(t,r){return this.writeFeaturesText(t,this.adaptOptions(r))}writeFeaturesText(t,r){return g()}writeGeometry(t,r){return this.writeGeometryText(t,this.adaptOptions(r))}writeGeometryText(t,r){return g()}}function I(e){return typeof e=="string"?e:""}const bt={POINT:wt,LINESTRING:gt,POLYGON:mt,MULTIPOINT:ft,MULTILINESTRING:yt,MULTIPOLYGON:pt},Y="EMPTY",Z="Z",X="M",Nt="ZM",a={START:0,TEXT:1,LEFT_PAREN:2,RIGHT_PAREN:3,NUMBER:4,COMMA:5,EOF:6},kt={Point:"POINT",LineString:"LINESTRING",Polygon:"POLYGON",MultiPoint:"MULTIPOINT",MultiLineString:"MULTILINESTRING",MultiPolygon:"MULTIPOLYGON",GeometryCollection:"GEOMETRYCOLLECTION",Circle:"CIRCLE"};class Pt{constructor(t){this.wkt=t,this.index_=-1}isAlpha_(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}isNumeric_(t,r){return r=r!==void 0?r:!1,t>="0"&&t<="9"||t=="."&&!r}isWhiteSpace_(t){return t==" "||t=="	"||t=="\r"||t==`
`}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){const t=this.nextChar_(),r=this.index_;let s=t,i;if(t=="(")i=a.LEFT_PAREN;else if(t==",")i=a.COMMA;else if(t==")")i=a.RIGHT_PAREN;else if(this.isNumeric_(t)||t=="-")i=a.NUMBER,s=this.readNumber_();else if(this.isAlpha_(t))i=a.TEXT,s=this.readText_();else{if(this.isWhiteSpace_(t))return this.nextToken();if(t==="")i=a.EOF;else throw new Error("Unexpected character: "+t)}return{position:r,value:s,type:i}}readNumber_(){let t;const r=this.index_;let s=!1,i=!1;do t=="."?s=!0:(t=="e"||t=="E")&&(i=!0),t=this.nextChar_();while(this.isNumeric_(t,s)||!i&&(t=="e"||t=="E")||i&&(t=="-"||t=="+"));return parseFloat(this.wkt.substring(r,this.index_--))}readText_(){let t;const r=this.index_;do t=this.nextChar_();while(this.isAlpha_(t));return this.wkt.substring(r,this.index_--).toUpperCase()}}class xt{constructor(t){this.lexer_=t,this.token_={position:0,type:a.START},this.layout_="XY"}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(t){return this.token_.type==t}match(t){const r=this.isTokenType(t);return r&&this.consume_(),r}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let t="XY";const r=this.token_;if(this.isTokenType(a.TEXT)){const s=r.value;s===Z?t="XYZ":s===X?t="XYM":s===Nt&&(t="XYZM"),t!=="XY"&&this.consume_()}return t}parseGeometryCollectionText_(){if(this.match(a.LEFT_PAREN)){const t=[];do t.push(this.parseGeometry_());while(this.match(a.COMMA));if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(a.LEFT_PAREN)){const t=this.parsePoint_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(a.LEFT_PAREN)){const t=this.parsePointList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(a.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(a.LEFT_PAREN)){let t;if(this.token_.type==a.LEFT_PAREN?t=this.parsePointTextList_():t=this.parsePointList_(),this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(a.LEFT_PAREN)){const t=this.parseLineStringTextList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(a.LEFT_PAREN)){const t=this.parsePolygonTextList_();if(this.match(a.RIGHT_PAREN))return t}throw new Error(this.formatErrorMessage_())}parsePoint_(){const t=[],r=this.layout_.length;for(let s=0;s<r;++s){const i=this.token_;if(this.match(a.NUMBER))t.push(i.value);else break}if(t.length==r)return t;throw new Error(this.formatErrorMessage_())}parsePointList_(){const t=[this.parsePoint_()];for(;this.match(a.COMMA);)t.push(this.parsePoint_());return t}parsePointTextList_(){const t=[this.parsePointText_()];for(;this.match(a.COMMA);)t.push(this.parsePointText_());return t}parseLineStringTextList_(){const t=[this.parseLineStringText_()];for(;this.match(a.COMMA);)t.push(this.parseLineStringText_());return t}parsePolygonTextList_(){const t=[this.parsePolygonText_()];for(;this.match(a.COMMA);)t.push(this.parsePolygonText_());return t}isEmptyGeometry_(){const t=this.isTokenType(a.TEXT)&&this.token_.value==Y;return t&&this.consume_(),t}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){const t=this.token_;if(this.match(a.TEXT)){const r=t.value;this.layout_=this.parseGeometryLayout_();const s=this.isEmptyGeometry_();if(r=="GEOMETRYCOLLECTION"){if(s)return new k([]);const o=this.parseGeometryCollectionText_();return new k(o)}const i=bt[r];if(!i)throw new Error("Invalid geometry type: "+r);let n;if(s)r=="POINT"?n=[NaN,NaN]:n=[];else switch(r){case"POINT":{n=this.parsePointText_();break}case"LINESTRING":{n=this.parseLineStringText_();break}case"POLYGON":{n=this.parsePolygonText_();break}case"MULTIPOINT":{n=this.parseMultiPointText_();break}case"MULTILINESTRING":{n=this.parseMultiLineStringText_();break}case"MULTIPOLYGON":{n=this.parseMultiPolygonText_();break}}return new i(n,this.layout_)}throw new Error(this.formatErrorMessage_())}}class Gt extends Vt{constructor(t){super(),t=t||{},this.splitCollection_=t.splitCollection!==void 0?t.splitCollection:!1}parse_(t){const r=new Pt(t);return new xt(r).parse()}readFeatureFromText(t,r){const s=this.readGeometryFromText(t,r),i=new O;return i.setGeometry(s),i}readFeaturesFromText(t,r){let s=[];const i=this.readGeometryFromText(t,r);this.splitCollection_&&i.getType()=="GeometryCollection"?s=i.getGeometriesArray():s=[i];const n=[];for(let o=0,u=s.length;o<u;++o){const c=new O;c.setGeometry(s[o]),n.push(c)}return n}readGeometryFromText(t,r){const s=this.parse_(t);return E(s,!1,r)}writeFeatureText(t,r){const s=t.getGeometry();return s?this.writeGeometryText(s,r):""}writeFeaturesText(t,r){if(t.length==1)return this.writeFeatureText(t[0],r);const s=[];for(let n=0,o=t.length;n<o;++n)s.push(t[n].getGeometry());const i=new k(s);return this.writeGeometryText(i,r)}writeGeometryText(t,r){return W(E(t,!0,r))}}function q(e){const t=e.getCoordinates();return t.length===0?"":t.join(" ")}function Ct(e){const t=[],r=e.getPoints();for(let s=0,i=r.length;s<i;++s)t.push("("+q(r[s])+")");return t.join(",")}function Tt(e){const t=[],r=e.getGeometries();for(let s=0,i=r.length;s<i;++s)t.push(W(r[s]));return t.join(",")}function G(e){const t=e.getCoordinates(),r=[];for(let s=0,i=t.length;s<i;++s)r.push(t[s].join(" "));return r.join(",")}function $t(e){const t=[],r=e.getLineStrings();for(let s=0,i=r.length;s<i;++s)t.push("("+G(r[s])+")");return t.join(",")}function K(e){const t=[],r=e.getLinearRings();for(let s=0,i=r.length;s<i;++s)t.push("("+G(r[s])+")");return t.join(",")}function At(e){const t=[],r=e.getPolygons();for(let s=0,i=r.length;s<i;++s)t.push("("+K(r[s])+")");return t.join(",")}function Ot(e){const t=e.getLayout();let r="";return(t==="XYZ"||t==="XYZM")&&(r+=Z),(t==="XYM"||t==="XYZM")&&(r+=X),r}const Et={Point:q,LineString:G,Polygon:K,MultiPoint:Ct,MultiLineString:$t,MultiPolygon:At,GeometryCollection:Tt};function W(e){const t=e.getType(),r=Et[t],s=r(e);let i=kt[t];if(typeof e.getFlatCoordinates=="function"){const n=Ot(e);n.length>0&&(i+=" "+n)}return s.length===0?i+" "+Y:i+"("+s+")"}const Rt=(e,t)=>new Gt().writeFeatures(e,t);var F,H;class z extends x{constructor(){super();y(this,F,!0);y(this,H,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:r,discardDisabled:s}=_t(this);p(this,F,r),p(this,H,s)}createRenderRoot(){return this}render(){this.updateButtonStates();const r=this.currentlyDrawing?"drawing":"draw",s={Polygon:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      `},i=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,n=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,o=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,u=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,c=l`<svg
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
            ?disabled="${d(this,F)||M}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?r:l`
                  <i class="small"
                    >${this.select?i:s[this.type]}</i
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
            ?disabled="${d(this,H)||M}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":l`
                  <i class="small">${n}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${N(this.showEditor,()=>l`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":l`
                    <i class="small">${o}</i>
                    <div class="tooltip bottom">Edit features</div>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${N(this.importFeatures,()=>l`
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
                    <i class="small">${u}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${N(this.showEditor,()=>l`
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
              @click=${()=>St(this.geoJSON)}
            >
              ${this.unstyled?"copy":l`
                    <i class="tiny">${c}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}F=new WeakMap,H=new WeakMap,f(z,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",z);ct();const Bt=`
  ${lt}
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
`,Ut=e=>{(()=>{if(e.emitDrawnFeatures(),!e.multipleFeatures)e.draw.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const s=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!s)return;e.drawLayer.getSource().addFeature(s),e.drawnFeatures=[s]}})(),e.requestUpdate()},jt=e=>{const t=()=>{e.drawLayer.set("isDrawingEnabled",!0),e.draw.setActive(!0),e.selectionEvents.addSelectionEvent()},r=()=>{e.currentlyDrawing=!0,e.requestUpdate()};t(),r(),document.addEventListener("keydown",({key:s})=>{s==="Escape"&&e.currentlyDrawing&&(e.draw.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())})},U=(e,t)=>{var o,u,c,h,m;const s=ut(e.for),i=s.map,n="0, 65, 112";return e.drawLayer=s.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:t},source:{type:"Vector"},style:((o=e.featureStyles)==null?void 0:o.layer)||{"fill-color":`rgba(${n}, 0.1)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${n}, 1)`},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((u=e.featureStyles)==null?void 0:u.layer)||{"fill-color":`rgba(${n}, 0.1)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${n}, 1)`}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((c=e.featureStyles)==null?void 0:c.hover)||{"fill-color":`rgba(${n}, 0.2)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((h=e.featureStyles)==null?void 0:h.click)||{"fill-color":`rgba(${n}, 0.2)`,"stroke-color":`rgba(${n}, 1)`,"stroke-width":2}}}]}),e.draw=s.interactions.drawInteraction,e.modify=s.interactions.drawInteractionmodify,P(e,s,e.layerId),(m=e.modify)==null||m.on("modifyend",()=>e.onModifyEnd()),s.addEventListener("addfeatures",()=>Ut(e)),{EoxMap:s,OlMap:i}},Jt=e=>{const t=()=>{e.drawnFeatures=[],e.draw.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},r=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};t(),r()},Yt=(e,t)=>{setTimeout(()=>{const s=e.drawLayer.getSource().getFeatures(),i=e.eoxMap.projection||"EPSG:3857",n=e.projection;e.drawnFeatures=n?s.map(u=>{u=u.clone();const c=u.getGeometry().transform(i,n);return u.setGeometry(c),u}):s;let o;switch(e.format){case"geojson":o=It(e.drawnFeatures);break;case"wkt":o=Rt(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),t(o)},0)},Zt=e=>{const t=i=>{(i==null?void 0:i.detail.id)!=="SelectLayerClickInteraction"||!i.detail.feature||(e.drawLayer.getSource().addFeature(i.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:i.detail})))};return{addSelectionEvent:()=>{e.layerId&&(e.eoxMap.selectInteractions.SelectLayerHoverInteraction.setActive(!0),e.eoxMap.addEventListener("select",t))},removeSelectionEvent:()=>{var n;const i=(n=e.eoxMap.selectInteractions)==null?void 0:n.SelectLayerHoverInteraction;i&&(i.selectedFids=[],i.setActive(!1)),e.eoxMap.removeEventListener("select",t)}}},P=(e,t,r)=>{var c,h;if(!r||!t)return;const s=t.getLayerById(r),i=s?JSON.parse(JSON.stringify(s.get("_jsonDefinition"))):null;if(!i){console.error(`Layer with id ${r} not found`);return}const n={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((c=e.featureStyles)==null?void 0:c.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},o={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((h=e.featureStyles)==null?void 0:h.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};i.interactions=[n,o],t.addOrUpdateLayer(i),Q(t.layers,r,[i]);const u=e.draw;e.draw=t.selectInteractions.SelectLayerClickInteraction,u.setActive(!1),t.selectInteractions.SelectLayerClickInteraction.setActive(!1),t.selectInteractions.SelectLayerHoverInteraction.setActive(!1)};function Q(e,t,r){const s=e.findIndex(i=>i.properties.id===t);if(s!==-1)return e.splice(s,1,...r),e;for(const i of e)if(i.type==="Group"){const n=Q(i.layers,t,r);n!=null&&n.length&&(i.layers=n)}return e}const Xt=(e,t,r,s)=>{if(t){if(r){s&&r!==s&&j(e,t),P(e,t,r);return}if(!r&&s){j(e,t);return}}};function j(e,t){t&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=t.interactions.drawInteraction,t.selectInteractions.SelectLayerClickInteraction.remove(),t.selectInteractions.SelectLayerHoverInteraction.remove())}function qt(e,t){function r(n){n.preventDefault(),n.stopPropagation()}function s(n){n.srcElement.style.opacity="0.4"}function i(n){n.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(n=>{t.addEventListener(n,r,!1),["dragenter","dragover"].includes(n)?t.addEventListener(n,s,!1):t.addEventListener(n,i,!1)}),t.addEventListener("drop",n=>D(n,e),!1)}function Kt(e){e.preventDefault(),e.stopPropagation()}function D(e,t){Kt(e);const r=e.dataTransfer?e.dataTransfer.files:e.target.files;Array.from(r).forEach(s=>Wt(s,t))}function Wt(e,t){const r=new FileReader;r.readAsText(e),r.onloadend=function(){typeof r.result=="string"&&t.handleFeatureChange(r.result)}}var w,v,_,L,S;class zt extends x{constructor(){super();y(this,w);y(this,v);y(this,_);y(this,L);y(this,S);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(r){p(this,S,r),r&&(this.multipleFeatures=!0)}get continuous(){return d(this,S)}set layerId(r){Xt(this,this.eoxMap,r,d(this,L)),p(this,L,r)}get layerId(){return d(this,L)}startDrawing(){jt(this)}discardDrawing(){Jt(this)}handleFeatureChange(r,s=!1,i=!0){this.eoxMap.parseTextToFeature(r||JSON.stringify(B),this.drawLayer,this.eoxMap,s,{dataProjection:this.eoxMap.projection,featureProjection:this.projection},i)}handleFilesChange(r){D(r,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){p(this,_,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||B,void 0,2))}emitDrawnFeatures(){Yt(this,s=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:s}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:r,OlMap:s}=U(this,this.multipleFeatures);this.eoxMap=r,p(this,v,s),this.selectionEvents=Zt(this),this.importFeatures&&qt(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(r){if(r.has("for")){const{EoxMap:s,OlMap:i}=U(this,this.multipleFeatures);this.eoxMap=s,p(this,v,i)}}get eoxMap(){return d(this,w)}set eoxMap(r){const s=d(this,w);p(this,w,r),this.requestUpdate("eoxMap",s)}disconnectedCallback(){var r;(r=this.eoxMap)==null||r.map.removeLayer(this.drawLayer),super.disconnectedCallback()}render(){var r;return l`
      <style>
        :host { display: block; }
        ${!this.unstyled&&Bt}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:s=>this.handleFeatureChange(s.target.value,!0),import:s=>this.handleFilesChange(s)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${d(this,_)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((r=this.drawnFeatures)!=null&&r.length)?l`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${d(this,v)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:M}
    `}}w=new WeakMap,v=new WeakMap,_=new WeakMap,L=new WeakMap,S=new WeakMap;customElements.define("eox-drawtools",zt);export{zt as EOxDrawTools};
