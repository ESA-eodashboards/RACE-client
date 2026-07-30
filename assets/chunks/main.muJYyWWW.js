var xo=Object.defineProperty;var wi=e=>{throw TypeError(e)};var _o=(e,t,n)=>t in e?xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Je=(e,t,n)=>_o(e,typeof t!="symbol"?t+"":t,n),un=(e,t,n)=>t.has(e)||wi("Cannot "+n);var F=(e,t,n)=>(un(e,t,"read from private field"),n?n.call(e):t.get(e)),K=(e,t,n)=>t.has(e)?wi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),He=(e,t,n,i)=>(un(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),R=(e,t,n)=>(un(e,t,"access private method"),n);import{a as se,A as _e,b as C}from"./lit-element.BMPlKsWQ.js";import{o as Ht}from"./map.DiiNQ3pp.js";import{n as I}from"./when.BR7zwNJC.js";import{e as Ao,a as Co}from"./addCommonStyleSheet.B0XXRREc.js";import{d as k}from"./dayjs.min.lahZ2SOr.js";import{_ as Ft}from"./index.BUIxO2d3.js";import{s as Fe,u as xi}from"./static.BLGvt9Xq.js";import{c as Mo}from"./repeat.BH3fx7cN.js";import{o as xt}from"./unsafe-html.WWnMP6dQ.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{g as et,f as St,b as ne,l as Nn,a as $t,c as Lt,d as So}from"./index.D3cbb77C.js";import{a as Ii,m as $o,l as Ni,f as Lo}from"./index.CxojoGlr.js";import{g as Hi,c as xe}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./orient2d.DArCjZZA.js";const Ro=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  height: 100%;
  overflow: hidden;
}
details {
  width: 100%;
}
`;Co();const Hn=`
${Ao}
.field {
  margin-block-end: 0;
}
.field>:is(input,textarea,select) {
  width: 100%;
}
.field.small>:is(input,textarea,select) {
  font-size: 0.75rem;
}

:host, :root {
  --primary-color: var(--primary);
  --secondary-color: var(--secondary);
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--surface) 80%,
    transparent
  );
  --item-select-color: var(--surface-variant);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --_background-color: var(--background-color, var(--eox-background-color, transparent));
  --_padding: var(--padding, 0.5rem);
  --_padding-vertical: var(--padding-vertical, 0.25rem);
  --_list-padding: var(--list-padding, 2rem);
  --_text-transform: var(--text-transform, capitalize);
  --_form-flex-direction: var(--form-flex-direction, column);
  --_filter-display: var(--filter-display, block);
  background-color: var(--_background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--_form-flex-direction);
  margin-top: 0;
}
eox-itemfilter-container {
  min-width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;
}
eox-itemfilter-results {
  flex-grow: 1;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
eox-itemfilter-results button.chip {
  pointer-events: none;
}
.list li {
  padding: 0 var(--_padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--_text-transform);
}
.title.highlight-enabled {
  text-transform: inherit;
}
.subtitle {
  opacity: .7;
}
.image {
  object-fit: cover;
  overflow: hidden;
}
.title-container {
  display: flex;
  flex-direction: column;
}
eox-itemfilter-expandcontainer {
  max-height: 400px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
form#itemfilter.inline eox-itemfilter-expandcontainer {
  max-height: none;
}
form#itemfilter.inline eox-itemfilter-expandcontainer > [data-type=filter] {
  height: auto;
  overflow: visible;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--_text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--_padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
summary > * {
  pointer-events: all;
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--_list-padding) !important;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
#container-results {
  border-radius: none;
}
.no-results {
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: var(--_padding-vertical) var(--_padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
  transition: var(--card-transition);
  box-shadow: var(--card-box-shadow);
}
eox-layout-item:hover {
  transform: var(--card-hover-transform);
}
eox-layout-item > span {
  display: block;
  height: 100%;
}
eox-layout-item .image {
  width: 100%;
  height: 100%;
  transition: filter .3s ease-in-out;
  margin: 0;
}
eox-layout-item:hover .image {
  filter: brightness(.5);
}
eox-layout-item nav {
  height: 100%;
}
eox-layout-item .title-container {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    transparent
  );
  padding-top: 25px;
}
eox-layout-item .title {
  font-weight: bold;
  font-family: var(--card-title-font);
}
eox-layout-item .result-action {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffffbb;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
ul#results eox-layout-item.highlighted .result-action > * {
  filter: none;
}
section {
  position: relative;
  background-color: var(--_background-color);
}
nav.title-nav {
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
eox-itemfilter-range {
  display: block;
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
.range-wrapper {
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
tc-range-slider {
  width: 100%;
  --width: 100%;
}
.range-labels {
  display: flex;
  justify-content: space-between;
}
.range-before,
.range-after {
  font-size: x-small;
}

.inline-content {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
  height: var(--inline-container-height, auto);
}
.inline-container {
  position: relative;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
-container-results::-webkit-scrollbar,
.inline-container::-webkit-scrollbar,
.inline-content::-webkit-scrollbar,
form#itemfilter > div::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb,
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb,
form#itemfilter > div:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
}
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: transparent; 
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
}
.autocomplete-container .field input,
.text-container .field input {
  background: none !important;
  border-block-end-color: var(--outline);
  border-radius: 0 !important;
  box-shadow: none !important;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li,
.multiselect li,
eox-itemfilter-results li {
  border-radius: .5rem !important;
  display: flex;
  justify-content: space-between;
  min-block-size: 32px !important;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover,
details summary:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  background: var(--item-select-color);
}
mark.highlight {
  all: inherit;
  display: inline;
  background: yellow;
  color: black;
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
  max-width: 170px;
}
.select-overflow {
  max-height: calc(32px * var(--select-filter-max-items));
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
  align-items: center;
  height: var(--inline-container-height, auto);
}
.chip {
  white-space: nowrap;
  max-height: calc(var(--inline-container-height, auto) - .5rem);
}
.input-container.field {
  min-width: 10rem;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: #ba1a1a !important;
  font-size: x-small;
}
.row {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--_background-color);
}
`;var Bt,Fi;class ko extends se{constructor(){super();K(this,Bt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return C`
      <style>
        ${!this.unstyled&&Hn}
      </style>

      ${I(this.filterObject.featured,()=>C`<slot name="filter"></slot>`,()=>C`<details
            @toggle="${R(this,Bt,Fi)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||_e}
          >
            <summary class="square">
              <nav class="responsive tiny-space">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
                <span
                  class="title max"
                  style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
                >
                  ${this.filterObject.title||this.filterObject.key||"Filter"}
                </span>
                <slot name="reset-button"></slot>
              </nav>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}Bt=new WeakSet,Fi=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ko);function Ce(e){return Array.isArray?Array.isArray(e):qi(e)==="[object Array]"}function To(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function yn(e){return e==null?"":To(e)}function z(e){return typeof e=="string"}function Ct(e){return typeof e=="number"}function Eo(e){return e===!0||e===!1||Do(e)&&qi(e)=="[object Boolean]"}function zi(e){return typeof e=="object"}function Do(e){return zi(e)&&e!==null}function Z(e){return e!=null}function _t(e){return!e.trim().length}function qi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const jo="Incorrect 'index' type",bn="Invalid doc index: must be a non-negative integer within the bounds of the docs array",Oo=e=>`Invalid value for key ${e}`,Bo=e=>`Pattern length exceeds max of ${e}.`,Po=e=>`Missing ${e} property in key`,Io=e=>`Property 'weight' in key '${e}' must be a positive integer`,No="Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.",_i=Object.prototype.hasOwnProperty;var Ho=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{const i=Ki(n);this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function Ki(e){let t=null,n=null,i=null,r=1,o=null;if(z(e)||Ce(e))i=e,t=Ai(e),n=Mt(e);else{if(!_i.call(e,"name"))throw new Error(Po("name"));const a=e.name;if(i=a,_i.call(e,"weight")&&e.weight!==void 0&&(r=e.weight,r<=0))throw new Error(Io(Mt(a)));t=Ai(a),n=Mt(a),o=e.getFn??null}return{path:t,id:n,weight:r,src:i,getFn:o}}function Ai(e){return Ce(e)?e:e.split(".")}function Mt(e){return Ce(e)?e.join("."):e}function Fo(e,t){const n=[];let i=!1;const r=(o,a,c,u)=>{if(Z(o))if(!a[c])n.push(u!==void 0?{v:o,i:u}:o);else{const f=o[a[c]];if(!Z(f))return;if(c===a.length-1&&(z(f)||Ct(f)||Eo(f)||typeof f=="bigint"))n.push(u!==void 0?{v:yn(f),i:u}:yn(f));else if(Ce(f)){i=!0;for(let h=0,p=f.length;h<p;h+=1)r(f[h],a,c+1,h)}else a.length&&r(f,a,c+1,u)}};return r(e,z(t)?t.split("."):t,0),i?n:n[0]}const zo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},qo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Ko={location:0,threshold:.6,distance:100},Uo={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:"any",getFn:Fo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},M=Object.freeze({...qo,...zo,...Ko,...Uo});function Wo(e){return e>=9&&e<=13||e===32||e===160}function Vo(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(r){let o=0,a=!1;for(let u=0;u<r.length;u++)Wo(r.charCodeAt(u))?a=!1:a||(o++,a=!0);if(o===0&&(o=1),n.has(o))return n.get(o);const c=Math.round(i/Math.pow(o,.5*e))/i;return n.set(o,c),c},clear(){n.clear()}}}var Fn=class{constructor({getFn:e=M.getFn,fieldNormWeight:t=M.fieldNormWeight}={}){this.norm=Vo(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;const e=this.docs.length;this.records=new Array(e);let t=0;if(z(this.docs[0]))for(let n=0;n<e;n++){const i=this._createStringRecord(this.docs[n],n);i&&(this.records[t++]=i)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw new Error(bn);if(z(e)){const i=this._createStringRecord(e,t);return i&&this.records.push(i),i}const n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw new Error(bn);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&(this.records[t].i-=1)}removeAll(e){const t=new Set;for(const i of e)Number.isInteger(i)&&i>=0&&t.add(i);if(t.size===0)return;this.records=this.records.filter(i=>!t.has(i.i));const n=Array.from(t).sort((i,r)=>i-r);for(const i of this.records){let r=0,o=n.length;for(;r<o;){const a=r+o>>>1;n[a]<i.i?r=a+1:o=a}i.i-=r}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!Z(e)||_t(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){const n={i:t,$:{}};for(let i=0,r=this.keys.length;i<r;i++){const o=this.keys[i],a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Z(a)){if(Ce(a)){const c=[];for(let u=0,f=a.length;u<f;u+=1){const h=a[u];if(Z(h)){if(z(h)){if(!_t(h)){const p={v:h,i:u,n:this.norm.get(h)};c.push(p)}}else if(Z(h.v)){const p=z(h.v)?h.v:yn(h.v);if(!_t(p)){const g={v:p,i:h.i,n:this.norm.get(p)};c.push(g)}}}}n.$[i]=c}else if(z(a)&&!_t(a)){const c={v:a,n:this.norm.get(a)};n.$[i]=c}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function Ui(e,t,{getFn:n=M.getFn,fieldNormWeight:i=M.fieldNormWeight}={}){const r=new Fn({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(Ki)),r.setSources(t),r.create(),r}function Go(e,{getFn:t=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:i,records:r}=e,o=new Fn({getFn:t,fieldNormWeight:n});return o.setKeys(i),o.setIndexRecords(r),o}function Yo(e=[],t=M.minMatchCharLength){const n=[];let i=-1,r=-1,o=0;for(let a=e.length;o<a;o+=1){const c=e[o];c&&i===-1?i=o:!c&&i!==-1&&(r=o-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}function Xo(e,t,n,{location:i=M.location,distance:r=M.distance,threshold:o=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:f=M.ignoreLocation}={}){if(t.length>32)throw new Error(Bo(32));const h=t.length,p=e.length,g=Math.max(0,Math.min(i,p));let m=o,v=g;const b=(E,P)=>{const W=E/h;if(f)return W;const $e=Math.abs(g-P);return r?W+$e/r:$e?1:W},A=c>1||u,_=A?Array(p):[];let $;for(;($=e.indexOf(t,v))>-1;){const E=b(0,$);if(m=Math.min(E,m),v=$+h,A){let P=0;for(;P<h;)_[$+P]=1,P+=1}}v=-1;let L=[],j=1,Q=0,N=h+p;const me=1<<h-1;for(let E=0;E<h;E+=1){let P=0,W=N;for(;P<W;)b(E,g+W)<=m?P=W:N=W,W=Math.floor((N-P)/2+P);N=W;let $e=Math.max(1,g-W+1);const Ye=a?p:Math.min(g+W,p)+h,ye=Array(Ye+2);ye[Ye+1]=(1<<E)-1;for(let J=Ye;J>=$e;J-=1){const Xe=J-1,Xt=n[e[Xe]];if(ye[J]=(ye[J+1]<<1|1)&Xt,E&&(ye[J]|=(L[J+1]|L[J])<<1|1|L[J+1]),ye[J]&me&&(j=b(E,Xe),j<=m)){if(m=j,v=Xe,Q=E,v<=g)break;$e=Math.max(1,2*g-v)}}if(b(E+1,g)>m)break;L=ye}if(A&&v>=0){const E=Math.min(p-1,v+h-1+Q);for(let P=v;P<=E;P+=1)n[e[P]]&&(_[P]=1)}const oe={isMatch:v>=0,score:Math.max(.001,j)};if(A){const E=Yo(_,c);E.length?u&&(oe.indices=E):oe.isMatch=!1}return oe}function Qo(e){const t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}function zn(e){if(e.length<=1)return e;e.sort((n,i)=>n[0]-i[0]||n[1]-i[1]);const t=[e[0]];for(let n=1,i=e.length;n<i;n+=1){const r=t[t.length-1],o=e[n];o[0]<=r[1]+1?r[1]=Math.max(r[1],o[1]):t.push(o)}return t}const Wi={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Zo=new RegExp("["+Object.keys(Wi).join("")+"]","g"),tt=typeof String.prototype.normalize=="function"?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Zo,t=>Wi[t]):e=>e;var qn=class{constructor(e,{location:t=M.location,threshold:n=M.threshold,distance:i=M.distance,includeMatches:r=M.includeMatches,findAllMatches:o=M.findAllMatches,minMatchCharLength:a=M.minMatchCharLength,isCaseSensitive:c=M.isCaseSensitive,ignoreDiacritics:u=M.ignoreDiacritics,ignoreLocation:f=M.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f},e=c?e:e.toLowerCase(),e=u?tt(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const h=(g,m)=>{this.chunks.push({pattern:g,alphabet:Qo(g),startIndex:m})},p=this.pattern.length;if(p>32){let g=0;const m=p%32,v=p-m;for(;g<v;)h(this.pattern.substr(g,32),g),g+=32;if(m){const b=p-32;h(this.pattern.substr(b),b)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i}=this.options;if(e=t?e:e.toLowerCase(),e=n?tt(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};const v={isMatch:!0,score:0};return i&&(v.indices=[[0,e.length-1]]),v}const{location:r,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options,h=[];let p=0,g=!1;this.chunks.forEach(({pattern:v,alphabet:b,startIndex:A})=>{const{isMatch:_,score:$,indices:L}=Xo(e,v,b,{location:r+A,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:f});_&&(g=!0),p+=$,_&&L&&h.push(...L)});const m={isMatch:g,score:g?p/this.chunks.length:1};return g&&i&&(m.indices=zn(h)),m}};const Jo=new Set(["fuzzy","include"]);function ea(e){return e.startsWith("inverse")}const vn=[{type:"exact",multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:"exact",search(t){const n=t===e;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"include",multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:"include",search(t){let n=0,i;const r=[],o=e.length;for(;(i=t.indexOf(e,n))>-1;)n=i+o,r.push([i,n-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}})},{type:"prefix-exact",multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:"prefix-exact",search(t){const n=t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"inverse-prefix-exact",multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:"inverse-prefix-exact",search(t){const n=!t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"inverse-suffix-exact",multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:"inverse-suffix-exact",search(t){const n=!t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"suffix-exact",multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:"suffix-exact",search(t){const n=t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[t.length-e.length,t.length-1]}}})},{type:"inverse-exact",multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:"inverse-exact",search(t){const n=t.indexOf(e)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"fuzzy",multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{const n=new qn(e,{location:t.location??M.location,threshold:t.threshold??M.threshold,distance:t.distance??M.distance,includeMatches:t.includeMatches??M.includeMatches,findAllMatches:t.findAllMatches??M.findAllMatches,minMatchCharLength:t.minMatchCharLength??M.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??M.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??M.ignoreDiacritics,ignoreLocation:t.ignoreLocation??M.ignoreLocation});return{type:"fuzzy",search(i){return n.searchIn(i)}}}}],Ci=vn.length,ta="\0",na="|";function ia(e){const t=[],n=e.length;let i=0;for(;i<n;){for(;i<n&&e[i]===" ";)i++;if(i>=n)break;let r=i;for(;r<n&&e[r]!==" "&&e[r]!=='"';)r++;if(r<n&&e[r]==='"'){for(r++;r<n;){if(e[r]==='"'){const o=r+1;if(o>=n||e[o]===" "){r++;break}if(e[o]==="$"&&(o+1>=n||e[o+1]===" ")){r+=2;break}}r++}t.push(e.substring(i,r)),i=r}else{for(;r<n&&e[r]!==" ";)r++;t.push(e.substring(i,r)),i=r}}return t}function Mi(e,t){const n=e.match(t);return n?n[1]:null}function ra(e,t={}){return e.replace(/\\\|/g,ta).split(na).map(n=>{const i=ia(n.replace(/\u0000/g,"|").trim()).filter(o=>o&&!!o.trim()),r=[];for(let o=0,a=i.length;o<a;o+=1){const c=i[o];let u=!1,f=-1;for(;!u&&++f<Ci;){const h=vn[f],p=Mi(c,h.multiRegex);p&&(r.push(h.create(p,t)),u=!0)}if(!u)for(f=-1;++f<Ci;){const h=vn[f],p=Mi(c,h.singleRegex);if(p){r.push(h.create(p,t));break}}}return r})}var sa=class{constructor(e,{isCaseSensitive:t=M.isCaseSensitive,ignoreDiacritics:n=M.ignoreDiacritics,includeMatches:i=M.includeMatches,minMatchCharLength:r=M.minMatchCharLength,ignoreLocation:o=M.ignoreLocation,findAllMatches:a=M.findAllMatches,location:c=M.location,threshold:u=M.threshold,distance:f=M.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:f},e=t?e:e.toLowerCase(),e=n?tt(e):e,this.pattern=e,this.query=ra(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i,ignoreDiacritics:r}=this.options;e=i?e:e.toLowerCase(),e=r?tt(e):e;let o=0;const a=[];let c=0,u=!1;for(let f=0,h=t.length;f<h;f+=1){const p=t[f];a.length=0,o=0,u=!1;for(let g=0,m=p.length;g<m;g+=1){const v=p[g],{isMatch:b,indices:A,score:_}=v.search(e);if(b)o+=1,c+=_,ea(v.type)&&(u=!0),n&&(Jo.has(v.type)?a.push(...A):a.push(A));else{c=0,o=0,a.length=0,u=!1;break}}if(o){const g={isMatch:!0,score:c/o};return u&&(g.hasInverse=!0),n&&(g.indices=zn(a)),g}}return{isMatch:!1,score:1}}};const wn=[];function Kn(...e){wn.push(...e)}function Rt(e,t){for(let n=0,i=wn.length;n<i;n+=1){const r=wn[n];if(r.condition(e,t))return new r(e,t)}return new qn(e,t)}const kt={AND:"$and",OR:"$or"},xn={PATH:"$path",PATTERN:"$val"},_n=e=>!!(e[kt.AND]||e[kt.OR]),oa=e=>!!e[xn.PATH],aa=e=>!Ce(e)&&zi(e)&&!_n(e),Si=e=>({[kt.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Vi(e,t,{auto:n=!0}={}){const i=r=>{if(z(r)){const u={keyId:null,pattern:r};return n&&(u.searcher=Rt(r,t)),u}const o=Object.keys(r),a=oa(r);if(!a&&o.length>1&&!_n(r))return i(Si(r));if(aa(r)){const u=a?r[xn.PATH]:o[0],f=a?r[xn.PATTERN]:r[u];if(!z(f))throw new Error(Oo(u));const h={keyId:Mt(u),pattern:f};return n&&(h.searcher=Rt(f,t)),h}const c={children:[],operator:o[0]};return o.forEach(u=>{const f=r[u];Ce(f)&&f.forEach(h=>{c.children.push(i(h))})}),c};return _n(e)||(e=Si(e)),i(e)}function An(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){let n=1;return e.forEach(({key:i,norm:r,score:o})=>{const a=i?i.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:r))}),n}function la(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){e.forEach(n=>{n.score=An(n.matches,{ignoreFieldNorm:t})})}var ca=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){const t=this.heap;for(;e>0;){const n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;const i=t[e];t[e]=t[n],t[n]=i,e=n}}_sinkDown(e){const t=this.heap,n=t.length;let i=e;do{e=i;const r=2*e+1,o=2*e+2;if(r<n&&this.comparator(t[r],t[i])>0&&(i=r),o<n&&this.comparator(t[o],t[i])>0&&(i=o),i!==e){const a=t[e];t[e]=t[i],t[i]=a}}while(i!==e)}};function ua(e){const t=[];return e.matches.forEach(n=>{if(!Z(n.indices)||!n.indices.length)return;const i={indices:n.indices,value:n.value};n.key&&(i.key=n.key.id),n.idx>-1&&(i.refIndex=n.idx),t.push(i)}),t}function fa(e,t,{includeMatches:n=M.includeMatches,includeScore:i=M.includeScore}={}){return e.map(r=>{const{idx:o}=r,a={item:t[o],refIndex:o};return n&&(a.matches=ua(r)),i&&(a.score=r.score),a})}const ha=/[\p{L}\p{M}\p{N}_]+/gu,$i=new WeakSet;function da(e){$i.has(e)||($i.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function pa(e){if(typeof e=="function"){let t=!1;return n=>{const i=e(n);if(!t&&(t=!0,!Array.isArray(i)||i.some(r=>typeof r!="string")))throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(i)?"array containing non-strings":typeof i}.`);return i}}return e instanceof RegExp?(e.global||da(e),t=>t.match(e)||[]):t=>t.match(ha)||[]}function Cn({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){const i=pa(n);return{tokenize(r){return e||(r=r.toLowerCase()),t&&(r=tt(r)),i(r)}}}var ga=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=Cn({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});const n=this.analyzer.tokenize(e),{df:i,fieldCount:r}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(const o of n){this.termSearchers.push(new qn(o,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const a=i.get(o)||0,c=Math.log(1+(r-a+.5)/(a+.5));this.idfWeights.push(c)}this.combineAll=t.tokenMatch==="all",this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let n=0,i=0,r=0,o=0;const a=this.combineAll&&!this.useMask?new Set:null;for(let f=0;f<this.termSearchers.length;f++){const h=this.termSearchers[f].searchIn(e),p=this.idfWeights[f];i+=p,h.isMatch&&(r++,n+=p*(1-h.score),h.indices&&t.push(...h.indices),this.combineAll&&(this.useMask?o|=1<<f:a.add(f)))}if(r===0)return{isMatch:!1,score:1};const c=i>0?1-n/i:0,u={isMatch:!0,score:Math.max(.001,c)};return this.options.includeMatches&&t.length&&(u.indices=zn(t)),this.combineAll&&(this.useMask?u.matchedMask=o:u.matchedTerms=a,u.termCount=this.numTerms),u}};function fn(e,t,n,i){const r=i.tokenize(t);if(!r.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);const o=new Set(r);let a=e.docTermFieldHits.get(n);a||(a=new Map,e.docTermFieldHits.set(n,a));for(const c of o)a.set(c,(a.get(c)||0)+1),e.df.set(c,(e.df.get(c)||0)+1)}function Gi(e,t,n,i){const{i:r,v:o,$:a}=t;if(o!==void 0){fn(e,o,r,i);return}if(a)for(let c=0;c<n;c++){const u=a[c];if(u)if(Array.isArray(u))for(const f of u)fn(e,f.v,r,i);else fn(e,u.v,r,i)}}function ma(e,t,n){const i={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(const r of e)Gi(i,r,t,n);return i}function ya(e,t,n,i){Gi(e,t,n,i)}function ba(e,t){const n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);const i=e.docTermFieldHits.get(t);if(i){for(const[r,o]of i){const a=(e.df.get(r)||0)-o;a<=0?e.df.delete(r):e.df.set(r,a)}e.docTermFieldHits.delete(t)}}function Li(e,t){if(t.length===0)return;const n=Array.from(new Set(t)).sort((c,u)=>c-u);for(const c of n)ba(e,c);const i=c=>{let u=0,f=n.length;for(;u<f;){const h=u+f>>>1;n[h]<c?u=h+1:f=h}return c-u},r=n[0],o=new Map;for(const[c,u]of e.docFieldCount)o.set(c>r?i(c):c,u);e.docFieldCount=o;const a=new Map;for(const[c,u]of e.docTermFieldHits)a.set(c>r?i(c):c,u);e.docTermFieldHits=a}var Me=class{constructor(e,t,n){this.options={...M,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Ho(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const t=Rt(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Fn))throw new Error(jo);if(this._myIndex=t||Ui(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const n=Cn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=ma(this._myIndex.records,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}add(e){if(!Z(e))return;this._docs.push(e);const t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){const n=Cn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});ya(this._invertedIndex,t,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}remove(e=()=>!1){const t=[],n=[];for(let i=0,r=this._docs.length;i<r;i+=1)e(this._docs[i],i)&&(t.push(this._docs[i]),n.push(i));if(n.length){this._invertedIndex&&Li(this._invertedIndex,n);const i=new Set(n);this._docs=this._docs.filter((r,o)=>!i.has(o)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw new Error(bn);this._invertedIndex&&Li(this._invertedIndex,[e]);const t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){const{limit:n=-1}=t||{},{includeMatches:i,includeScore:r,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;if(z(e)&&!e.trim()){let g=this._docs.map((m,v)=>({item:m,refIndex:v}));return Ct(n)&&n>-1&&(g=g.slice(0,n)),g}const u=o&&Ct(n)&&n>0&&z(e),f=a,h=(g,m)=>f(g,m)||g.idx-m.idx;let p;if(u){const g=new ca(n,h);z(this._docs[0])?this._searchStringList(e,{heap:g,ignoreFieldNorm:c}):this._searchObjectList(e,{heap:g,ignoreFieldNorm:c}),p=g.extractSorted()}else p=z(e)?z(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),la(p,{ignoreFieldNorm:c}),o&&p.sort(z(e)?h:f),Ct(n)&&n>-1&&(p=p.slice(0,n));return fa(p,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=t?null:[];return o.forEach(({v:c,i:u,n:f})=>{if(!Z(c))return;const h=i.searchIn(c);if(h.isMatch){const p={score:h.score,value:c,norm:f,indices:h.indices};r&&(p.matchedMask=h.matchedMask,p.matchedTerms=h.matchedTerms,p.termCount=h.termCount);const g=[p];if(!r||this._coversAllTokens(g)){const m={item:c,idx:u,matches:g};t?(m.score=An(m.matches,{ignoreFieldNorm:n}),t.insert(m)):a.push(m)}}}),a}_searchLogical(e){const t=Vi(e,this.options),n=this._normalizedKeys(),i=(c,u,f)=>{if(!("children"in c)){const{keyId:m,searcher:v}=c;let b;return m===null?(b=[],n.forEach((A,_)=>{b.push(...this._findMatches({key:A,value:u[_],searcher:v}))})):b=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:v}),b&&b.length?[{idx:f,item:u,matches:b}]:[]}const{children:h,operator:p}=c,g=[];for(let m=0,v=h.length;m<v;m+=1){const b=h[m],A=i(b,u,f);if(A.length)g.push(...A);else if(p===kt.AND)return[]}return g},r=this._myIndex.records,o=new Map,a=[];return r.forEach(({$:c,i:u})=>{if(Z(c)){const f=i(t,c,u);f.length&&(o.has(u)||(o.set(u,{idx:u,item:c,matches:[]}),a.push(o.get(u))),f.forEach(({matches:h})=>{o.get(u).matches.push(...h)}))}}),a}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=this._normalizedKeys(),c=t?null:[];return o.forEach(({$:u,i:f})=>{if(!Z(u))return;const h=[];let p=!1,g=!1;if(a.forEach((m,v)=>{const b=this._findMatches({key:m,value:u[v],searcher:i});b.length?(h.push(...b),b[0].hasInverse&&(g=!0)):p=!0}),!(g&&p)&&h.length&&(!r||this._coversAllTokens(h))){const m={idx:f,item:u,matches:h};t?(m.score=An(m.matches,{ignoreFieldNorm:n}),t.insert(m)):c.push(m)}}),c}_findMatches({key:e,value:t,searcher:n}){if(!Z(t))return[];const i=[];if(Ce(t))t.forEach(({v:r,i:o,n:a})=>{if(!Z(r))return;const c=n.searchIn(r);if(c.isMatch){const u={score:c.score,key:e,value:r,idx:o,norm:a,indices:c.indices,hasInverse:c.hasInverse};c.termCount!==void 0&&(u.matchedMask=c.matchedMask,u.matchedTerms=c.matchedTerms,u.termCount=c.termCount),i.push(u)}});else{const{v:r,n:o}=t,a=n.searchIn(r);if(a.isMatch){const c={score:a.score,key:e,value:r,norm:o,indices:a.indices,hasInverse:a.hasInverse};a.termCount!==void 0&&(c.matchedMask=a.matchedMask,c.matchedTerms=a.matchedTerms,c.termCount=a.termCount),i.push(c)}}return i}_coversAllTokens(e){const t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let i=0;for(let r=0;r<e.length;r++)i|=e[r].matchedMask||0;return i===2**t-1}const n=new Set;for(let i=0;i<e.length;i++){const r=e[i].matchedTerms;if(r)for(const o of r)n.add(o)}return n.size===t}};Me.version="7.5.0";Me.createIndex=Ui;Me.parseIndex=Go;Me.config=M;Me.match=function(e,t,n){if(n&&n.useTokenSearch)throw new Error(No);return Rt(e,{...M,...n}).searchIn(t)};Me.parseQuery=Vi;Kn(sa);Kn(ga);Me.use=function(...e){e.forEach(t=>Kn(t))};var Un=Me;function Yi(e,t){const n=new Un(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const i=e.target.value,o=n.search(i).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!i?"":"none"})}function va(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const Mn=Math.min,ze=Math.max,Tt=Math.round,At=Math.floor,de=e=>({x:e,y:e});function wa(e,t){return typeof e=="function"?e(t):e}function xa(e){return e.split("-")[0]}function _a(e){return e.split("-")[1]}function Aa(e){return e==="x"?"y":"x"}function Ca(e){return e==="y"?"height":"width"}function Xi(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Ma(e){return Aa(Xi(e))}function Sa(e){var t,n,i,r;return{top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(i=e.bottom)!=null?i:0,left:(r=e.left)!=null?r:0}}function $a(e){return typeof e!="number"?Sa(e):{top:e,right:e,bottom:e,left:e}}function Et(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function Ri(e,t,n){let{reference:i,floating:r}=e;const o=Xi(t),a=Ma(t),c=Ca(a),u=xa(t),f=o==="y",h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[c]/2-r[c]/2;let m;switch(u){case"top":m={x:h,y:i.y-r.height};break;case"bottom":m={x:h,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:p};break;case"left":m={x:i.x-r.width,y:p};break;default:m={x:i.x,y:i.y}}const v=_a(t);return v&&(m[a]+=g*(v==="end"?1:-1)*(n&&f?-1:1)),m}async function La(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:a,elements:c,strategy:u}=e,{boundary:f="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:g=!1,padding:m=0}=wa(t,e),v=$a(m),A=c[g?p==="floating"?"reference":"floating":p],_=Et(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(A)))==null||n?A:A.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:f,rootBoundary:h,strategy:u})),$=p==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,L=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),j=await(o.isElement==null?void 0:o.isElement(L))&&await(o.getScale==null?void 0:o.getScale(L))||{x:1,y:1},Q=Et(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:$,offsetParent:L,strategy:u}):$);return{top:(_.top-Q.top+v.top)/j.y,bottom:(Q.bottom-_.bottom+v.bottom)/j.y,left:(_.left-Q.left+v.left)/j.x,right:(Q.right-_.right+v.right)/j.x}}const Ra=50,ka=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:a}=n,c=a.detectOverflow?a:{...a,detectOverflow:La},u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:p}=Ri(f,i,u),g=i,m=0;const v={};for(let b=0;b<o.length;b++){const A=o[b];if(!A)continue;const{name:_,fn:$}=A,{x:L,y:j,data:Q,reset:N}=await $({x:h,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:v,rects:f,platform:c,elements:{reference:e,floating:t}});h=L??h,p=j??p,v[_]={...v[_],...Q},N&&m<Ra&&(m++,typeof N=="object"&&(N.placement&&(g=N.placement),N.rects&&(f=N.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):N.rects),{x:h,y:p}=Ri(f,g,u)),b=-1)}return{x:h,y:p,placement:g,strategy:r,middlewareData:v}};function zt(){return typeof window<"u"}function We(e){return Qi(e)?(e.nodeName||"").toLowerCase():"#document"}function X(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ge(e){var t;return(t=(Qi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Qi(e){return zt()?e instanceof Node||e instanceof X(e).Node:!1}function ie(e){return zt()?e instanceof Element||e instanceof X(e).Element:!1}function Se(e){return zt()?e instanceof HTMLElement||e instanceof X(e).HTMLElement:!1}function ki(e){return!zt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof X(e).ShadowRoot}function qt(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=re(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&r!=="inline"&&r!=="contents"}function Ta(e){return/^(table|td|th)$/.test(We(e))}function Kt(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Ea=/transform|translate|scale|rotate|perspective|filter/,Da=/paint|layout|strict|content/,Te=e=>!!e&&e!=="none";let hn;function Wn(e){const t=ie(e)?re(e):e;return Te(t.transform)||Te(t.translate)||Te(t.scale)||Te(t.rotate)||Te(t.perspective)||!Vn()&&(Te(t.backdropFilter)||Te(t.filter))||Ea.test(t.willChange||"")||Da.test(t.contain||"")}function ja(e){let t=De(e);for(;Se(t)&&!nt(t);){if(Wn(t))return t;if(Kt(t))return null;t=De(t)}return null}function Vn(){return hn==null&&(hn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),hn}function nt(e){return/^(html|body|#document)$/.test(We(e))}function re(e){return X(e).getComputedStyle(e)}function Ut(e){return ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function De(e){if(We(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ki(e)&&e.host||ge(e);return ki(t)?t.host:t}function Zi(e){const t=De(e);return nt(t)?(e.ownerDocument||e).body:Se(t)&&qt(t)?t:Zi(t)}function it(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Zi(e),o=r===((i=e.ownerDocument)==null?void 0:i.body),a=X(r);if(o){const c=Sn(a);return t.concat(a,a.visualViewport||[],qt(r)?r:[],c&&n?it(c):[])}else return t.concat(r,it(r,[],n))}function Sn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ji(e){const t=re(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Se(e),o=r?e.offsetWidth:n,a=r?e.offsetHeight:i,c=Tt(n)!==o||Tt(i)!==a;return c&&(n=o,i=a),{width:n,height:i,$:c}}function Gn(e){return ie(e)?e:e.contextElement}function qe(e){const t=Gn(e);if(!Se(t))return de(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=Ji(t);let a=(o?Tt(n.width):n.width)/i,c=(o?Tt(n.height):n.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Oa=de(0);function er(e){const t=X(e);return!Vn()||!t.visualViewport?Oa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ba(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===X(e)}function je(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=Gn(e);let a=de(1);t&&(i?ie(i)&&(a=qe(i)):a=qe(e));const c=Ba(o,n,i)?er(o):de(0);let u=(r.left+c.x)/a.x,f=(r.top+c.y)/a.y,h=r.width/a.x,p=r.height/a.y;if(o&&i){const g=X(o),m=ie(i)?X(i):i;let v=g,b=Sn(v);for(;b&&m!==v;){const A=qe(b),_=b.getBoundingClientRect(),$=re(b),L=_.left+(b.clientLeft+parseFloat($.paddingLeft))*A.x,j=_.top+(b.clientTop+parseFloat($.paddingTop))*A.y;u*=A.x,f*=A.y,h*=A.x,p*=A.y,u+=L,f+=j,v=X(b),b=Sn(v)}}return Et({width:h,height:p,x:u,y:f})}function Wt(e,t){const n=Ut(e).scrollLeft;return t?t.left+n:je(ge(e)).left+n}function tr(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-Wt(e,n),r=n.top+t.scrollTop;return{x:i,y:r}}function Pa(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const o=r==="fixed",a=ge(i),c=t?Kt(t.floating):!1;if(i===a||c&&o)return n;let u={scrollLeft:0,scrollTop:0},f=de(1);const h=de(0),p=Se(i);if((p||!o)&&((We(i)!=="body"||qt(a))&&(u=Ut(i)),p)){const m=je(i);f=qe(i),h.x=m.x+i.clientLeft,h.y=m.y+i.clientTop}const g=a&&!p&&!o?tr(a,u):de(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+g.x,y:n.y*f.y-u.scrollTop*f.y+h.y+g.y}}function Ia(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Na(e){const t=Ut(e),n=e.ownerDocument.body,i=ze(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=ze(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let o=-t.scrollLeft+Wt(e);const a=-t.scrollTop;return re(n).direction==="rtl"&&(o+=ze(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const Ha=25;function Fa(e,t,n){n===void 0&&(n="viewport");const i=n==="layoutViewport",r=X(e),o=ge(e),a=r.visualViewport;let c=o.clientWidth,u=o.clientHeight,f=0,h=0;if(a){const g=!Vn()||t==="fixed";i?g||(f=-a.offsetLeft,h=-a.offsetTop):(c=a.width,u=a.height,g&&(f=a.offsetLeft,h=a.offsetTop))}if(Wt(o)<=0){const g=o.ownerDocument,m=g.body,v=getComputedStyle(m),b=g.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,A=Math.abs(o.clientWidth-m.clientWidth-b),_=getComputedStyle(o).scrollbarGutter==="stable both-edges"?A/2:A;_<=Ha&&(c-=_)}return{width:c,height:u,x:f,y:h}}function za(e,t){const n=je(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=qe(e),a=e.clientWidth*o.x,c=e.clientHeight*o.y,u=r*o.x,f=i*o.y;return{width:a,height:c,x:u,y:f}}function Ti(e,t,n){let i;if(t==="viewport"||t==="layoutViewport")i=Fa(e,n,t);else if(t==="document")i=Na(ge(e));else if(ie(t))i=za(t,n);else{const r=er(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Et(i)}function qa(e,t){const n=t.get(e);if(n)return n;let i=it(e,[],!1).filter(c=>ie(c)&&We(c)!=="body"),r=null;const o=re(e).position==="fixed";let a=o?De(e):e;for(;ie(a)&&!nt(a);){const c=re(a),u=Wn(a),f=r?r.position:o?"fixed":"";!u&&(f==="fixed"||f==="absolute"&&c.position==="static")?i=i.filter(p=>p!==a):r=c,a=De(a)}return t.set(e,i),i}function Ka(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const a=[...n==="clippingAncestors"?Kt(t)?[]:qa(t,this._c):[].concat(n),i],c=Ti(t,a[0],r);let u=c.top,f=c.right,h=c.bottom,p=c.left;for(let g=1;g<a.length;g++){const m=Ti(t,a[g],r);u=ze(m.top,u),f=Mn(m.right,f),h=Mn(m.bottom,h),p=ze(m.left,p)}return{width:f-p,height:h-u,x:p,y:u}}function Ua(e){const{width:t,height:n}=Ji(e);return{width:t,height:n}}function Wa(e,t,n){const i=Se(t),r=ge(t),o=n==="fixed",a=je(e,!0,o,t);let c={scrollLeft:0,scrollTop:0};const u=de(0);if((i||!o)&&((We(t)!=="body"||qt(r))&&(c=Ut(t)),i)){const g=je(t,!0,o,t);u.x=g.x+t.clientLeft,u.y=g.y+t.clientTop}!i&&r&&(u.x=Wt(r));const f=r&&!i&&!o?tr(r,c):de(0),h=a.left+c.scrollLeft-u.x-f.x,p=a.top+c.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function dn(e){return re(e).position==="static"}function Ei(e,t){if(!Se(e)||re(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return ge(e)===n&&(n=n.ownerDocument.body),n}function nr(e,t){const n=X(e);if(Kt(e))return n;if(!Se(e)){let r=De(e);for(;r&&!nt(r);){if(ie(r)&&!dn(r))return r;r=De(r)}return n}let i=Ei(e,t);for(;i&&Ta(i)&&dn(i);)i=Ei(i,t);return i&&nt(i)&&dn(i)&&!Wn(i)?n:i||ja(e)||n}const Va=async function(e){const t=this.getOffsetParent||nr,n=this.getDimensions,i=await n(e.floating);return{reference:Wa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ga(e){return re(e).direction==="rtl"}const Ya={convertOffsetParentRelativeRectToViewportRelativeRect:Pa,getDocumentElement:ge,getClippingRect:Ka,getOffsetParent:nr,getElementRects:Va,getClientRects:Ia,getDimensions:Ua,getScale:qe,isElement:ie,isRTL:Ga};function ir(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Xa(e,t,n){let i=null,r;const o=ge(e);function a(){var h;clearTimeout(r),(h=i)==null||h.disconnect(),i=null}function c(h,p){h===void 0&&(h=!1),p===void 0&&(p=1),a();const g=e.getBoundingClientRect(),{left:m,top:v,width:b,height:A}=g;if(h||t(),!b||!A)return;const _=At(v),$=At(o.clientWidth-(m+b)),L=At(o.clientHeight-(v+A)),j=At(m),N={rootMargin:-_+"px "+-$+"px "+-L+"px "+-j+"px",threshold:ze(0,Mn(1,p))||1};let me=!0;function oe(E){const P=E[0].intersectionRatio;if(!ir(g,e.getBoundingClientRect()))return c();if(P!==p){if(!me)return c();P?c(!1,P):r=setTimeout(()=>{c(!1,1e-7)},1e3)}me=!1}try{i=new IntersectionObserver(oe,{...N,root:o.ownerDocument})}catch{i=new IntersectionObserver(oe,N)}i.observe(e)}const u=X(e),f=()=>c(n);return u.addEventListener("resize",f),c(!0),()=>{u.removeEventListener("resize",f),a()}}function Qa(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,f=Gn(e),h=r||o?[...f?it(f):[],...t?it(t):[]]:[];h.forEach(_=>{r&&_.addEventListener("scroll",n),o&&_.addEventListener("resize",n)});const p=f&&c?Xa(f,n,o):null;let g=-1,m=null;a&&(m=new ResizeObserver(_=>{let[$]=_;$&&$.target===f&&m&&t&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var L;(L=m)==null||L.observe(t)})),n()}),f&&!u&&m.observe(f),t&&m.observe(t));let v,b=u?je(e):null;u&&A();function A(){const _=je(e);b&&!ir(b,_)&&n(),b=_,v=requestAnimationFrame(A)}return n(),()=>{var _;h.forEach($=>{r&&$.removeEventListener("scroll",n),o&&$.removeEventListener("resize",n)}),p==null||p(),(_=m)==null||_.disconnect(),m=null,u&&cancelAnimationFrame(v)}}const Za=(e,t,n)=>{const i=new Map,r=n??{},o={...Ya,...r.platform,_c:i};return ka(e,t,{...r,platform:o})};function Ja(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Qa(t,n,()=>{n.matches(":popover-open")&&Za(t,n,{strategy:"fixed"}).then(({x:r,y:o})=>{Object.assign(n.style,{left:`${r}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function rr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Yi({target:{value:""}},e)}function el(e,t){t.inlineMode&&e.stopPropagation()}function tl(e){e.inlineMode&&(e.showDropdown=!0)}function nl(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function il(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(rr(t),t.showDropdown=!1)}function rl(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(rr(t),t.showDropdown=!1)}function $n(e,t={}){const n=et(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return sl(n,t);case"MultiPolygon":return ol(n,t);default:throw new Error("invalid poly")}}function sl(e,t={}){const i=et(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{};return sr(i,r)}function ol(e,t={}){const i=et(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return i.forEach(a=>{o.push(sr(a,r))}),Ii(o)}function sr(e,t){return e.length>1?$o(e,t):Ni(e[0],t)}function al(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let i=!0;return St(e,r=>{St(t,o=>{if(i===!1)return!1;i=ll(r.geometry,o.geometry,n)})}),i}function ll(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!hl(e.coordinates,t.coordinates);case"LineString":return!Di(t,e);case"Polygon":return!ne(e,t)}break;case"LineString":switch(t.type){case"Point":return!Di(e,t);case"LineString":return!cl(e,t,n);case"Polygon":return!ji(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!ne(t,e);case"LineString":return!ji(e,t,n);case"Polygon":return!ul(t,e,n)}}return!1}function Di(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(fl(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function cl(e,t,n){return Nn(e,t,{ignoreSelfIntersections:n}).features.length>0}function ji(e,t,n){for(const r of t.coordinates)if(ne(r,e))return!0;return Nn(t,$n(e),{ignoreSelfIntersections:n}).features.length>0}function ul(e,t,n){for(const r of e.coordinates[0])if(ne(r,t))return!0;for(const r of t.coordinates[0])if(ne(r,e))return!0;return Nn($n(e),$n(t),{ignoreSelfIntersections:n}).features.length>0}function fl(e,t,n){const i=n[0]-e[0],r=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return i*a-r*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function hl(e,t){return e[0]===t[0]&&e[1]===t[1]}function dl(e,t,{ignoreSelfIntersections:n=!0}={}){let i=!1;return St(e,r=>{St(t,o=>{if(i===!0)return!0;i=!al(r.geometry,o.geometry,{ignoreSelfIntersections:n})})}),i}var pl=dl;function gl(e,t){var n=et(e),i=et(t),r=n.type,o=i.type;switch(r){case"Point":switch(o){case"MultiPoint":return ml(n,i);case"LineString":return $t(n,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return ne(n,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return yl(n,i);case"LineString":return bl(n,i);case"Polygon":case"MultiPolygon":return vl(n,i);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return wl(n,i);case"Polygon":case"MultiPolygon":return _l(n,i);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Al(n,i);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+r+" geometry not supported")}}function ml(e,t){var n,i=!1;for(n=0;n<t.coordinates.length;n++)if(ar(t.coordinates[n],e.coordinates)){i=!0;break}return i}function yl(e,t){for(var n=0;n<e.coordinates.length;n++){for(var i=!1,r=0;r<t.coordinates.length;r++)ar(e.coordinates[n],t.coordinates[r])&&(i=!0);if(!i)return!1}return!0}function bl(e,t){for(var n=!1,i=0;i<e.coordinates.length;i++){if(!$t(e.coordinates[i],t))return!1;n||(n=$t(e.coordinates[i],t,{ignoreEndVertices:!0}))}return n}function vl(e,t){for(var n=!0,i=!1,r=0;r<e.coordinates.length;r++){if(i=ne(e.coordinates[r],t),!i){n=!1;break}i=ne(e.coordinates[r],t,{ignoreBoundary:!0})}return n&&i}function wl(e,t){for(var n=0;n<e.coordinates.length;n++)if(!$t(e.coordinates[n],t))return!1;return!0}function xl(e,t){const n=e.coordinates,i=[];for(let r=0;r<n.length-1;r++){const o=Ni([n[r],n[r+1]]),a=So(o,Lo(t));a.features.length===0?i.push(o):i.push(...a.features)}return Ii(i)}function _l(e,t){const n=Lt(t),i=Lt(e);if(!or(n,i))return!1;for(const a of e.coordinates)if(!ne(a,t))return!1;let r=!1;const o=xl(e,t);for(const a of o.features){const c=Cl(a.geometry.coordinates[0],a.geometry.coordinates[1]);if(!ne(c,t))return!1;!r&&ne(c,t,{ignoreBoundary:!0})&&(r=!0)}return r}function Al(e,t){var n=Lt(e),i=Lt(t);if(!or(i,n))return!1;for(var r=0;r<e.coordinates[0].length;r++)if(!ne(e.coordinates[0][r],t))return!1;return!0}function or(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function ar(e,t){return e[0]===t[0]&&e[1]===t[1]}function Cl(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Ml=gl;const Sl=(e,t)=>t?pl(e,t):!0,$l=(e,t)=>t?Ml(e,t):!0;function Ll(e,t="highlight",n="title"){const i=(r,o=[])=>{let a="",c=0,u=0;return o.forEach((f,h)=>{const p=f[1]+1;h&&u>f[0]||(u=f[1],a+=[r.substring(c,f[0]),`<mark class="${t}">`,r.substring(f[0],p),"</mark>"].join(""),c=p)}),a+=r.substring(c),a};return e.filter(({matches:r})=>r&&r.length).map(({item:r,matches:o})=>{const a={...r};return o.forEach(c=>{if(c.key!==n)return;const u=i(jl(c.value),Ol(c.indices));a.highlightedText=u}),a})}let lr;const Rl=(e,t)=>{lr=new Un(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},kl=async(e,t,n)=>{const i=Object.entries(t).filter(([,c])=>c.type==="text"||c.type==="select"||c.type==="multiselect").reduce((c,[u,f])=>{const h="$or",p=[],g=(m,v)=>{const b={};f.type==="text"?b[m]=`${v}`:b[u]=`="${m}"`,p.push(b)};return Object.entries(f.state).filter(([,m])=>m).forEach(([m,v])=>g(m,v)),p.length>0&&c.push({[h]:p}),c},[]);let r;if(!(i.length>0)&&n.matchAllWhenEmpty!==!1)r=e;else{const c={$and:[...i]},u=lr.search(c);r=n.enableHighlighting?Ll(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,c])=>c.type==="range").reduce((c,[u,f])=>{const h=p=>f.format==="date"?k(p).valueOf():parseFloat(p);return c[u]={min:h(f.state.min),max:h(f.state.max),format:f.format},c},{});if(Object.keys(o).length>0){const c=[];for(let u=0;u<r.length;u++){const f={};for(const[h,p]of Object.entries(o)){const g=v=>p.format==="date"?k(v).valueOf():parseFloat(v),m=U(h,r[u]);m?Array.isArray(m)?f[h]=o[h].min<=g(m[1])&&g(m[0])<=o[h].max:g(m)>=o[h].min&&g(m)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&c.push(r[u])}r=[...c]}const a=Object.entries(t).filter(([,c])=>c.type==="spatial").reduce((c,[u,f])=>(c[u]={geometry:f.state.geometry,mode:f.state.mode},c),{});if(Object.values(a).map(c=>c.geometry).filter(c=>!!c).length>0){const c=[];for(let u=0;u<r.length;u++){const f={};for(const h of Object.keys(a)){const p=U(h,r[u]),g=a[h].mode||"within";p&&(g==="within"?$l(p,a[h].geometry):Sl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&c.push(r[u])}r=[...c]}return r};function Tl(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function Vt(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Oi(e,t){return e*2+t}function El(e){return Object.keys(e).map(t=>({title:C`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function Ln(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Dl(e,t,n){const i=n.externalFilter(e,t),r=typeof i=="string"||i instanceof String?i:i.url,o=typeof i=="object"&&"fetchFn"in i?await i.fetchFn(r):await fetch(r).then(async a=>await a.json());return i.key?U(i.key,o):o}function cr(e,t,n){let i;if(e.detail?i=e.detail.target:i=e.target,i!=null&&i.classList.contains("details-filter")){if(!i.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const o=r.shadowRoot.querySelector(".details-filter");o&&o!==i&&o.removeAttribute("open")})}else{if(!(i!=null&&i.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(r=>{r!==i&&r.removeAttribute("open")})}}function U(e,t){return typeof e=="function"?e(t):e!=null&&e.includes(".")?e.split(".").reduce((n,i)=>n&&n[i],t):t[e]}function jl(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Ol(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([r,o])=>r<=o?[r,o]:[o,r]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),i=[];for(const[r,o]of n){if(i.length===0){i.push([r,o]);continue}const a=i[i.length-1];(t?r<=a[1]+1:r<=a[1])?o>a[1]&&(a[1]=o):i.push([r,o])}return i}function Dt(e){return e.format==="date"}var T,ur,Rn,kn,fr,Tn,En,hr,Dn,dr,pr;class Bl extends se{constructor(){super();K(this,T);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=R(this,T,fr).bind(this),this._handleKeyDown=R(this,T,Tn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&R(this,T,Rn).call(this)}disconnectedCallback(){this.inlineMode&&R(this,T,kn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?R(this,T,Rn).call(this):R(this,T,kn).call(this))}render(){return C`
      <style>
        ${!this.unstyled&&Hn}
      </style>
      ${this.inlineMode?C`
            <div
              class="inline-container-wrapper"
              @click="${R(this,T,En)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${El(this.filters)}
                      .controller=${{remove:n=>R(this,T,dr).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(Ln(this.filters),()=>C`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":C`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>close</title>
                                  <path
                                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                  />
                                </svg>
                              </i>
                            `}
                      </button>
                    `)}
                </div>
                <div
                  class="input-container field no-margin ${Ln(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${R(this,T,En)}"
                    @focus="${R(this,T,hr)}"
                    @input="${R(this,T,pr)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                popover="manual"
                class="square surface-container-lowest small-elevate"
              >
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${R(this,T,Tn)}"
                  @click="${R(this,T,Dn)}"
                  @focus="${R(this,T,Dn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:C`<slot name="section"></slot>`}
    `}}T=new WeakSet,ur=function(){setTimeout(()=>this._overlayCleanup=Ja(this))},Rn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),R(this,T,ur).call(this)},kn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},fr=function(n){rl(n,this)},Tn=function(n){il(n,this)},En=function(n){nl(n,this)},hr=function(){tl(this)},Dn=function(n){el(n,this)},dr=function(n){va(n,this)},pr=function(n){Yi(n,this)};customElements.define("eox-itemfilter-container",Bl);function Pl(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",Vt(e.filterObject),e.requestUpdate()}function Il(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const Nl=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),pn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],Ke="YYYY-MM-DD";function Hl(e){if(Vt(e.filterObject),e.filterObject){const t=e.filterObject.min,n=e.filterObject.max,i=e.querySelector("eox-timecontrol");i&&i.dateChange([k(t).format(),k(n).format()],i);const r=e.querySelector("tc-range-slider");r&&(r.value1!==t&&(r.value1=t),r.value2!==n&&(r.value2=n))}e.requestUpdate()}function Bi(e,t){const n=m=>Dt(t.filterObject)?k(m).valueOf():parseFloat(m),i=n(e.detail.values[0]),r=n(e.detail.values[1]),o=n(t.filterObject.state.min),a=n(t.filterObject.state.max),c=n(t.filterObject.min),u=n(t.filterObject.max);let f,h,p,g;Dt(t.filterObject)?(f=k(i).isSame(k(c),"day"),h=k(r).isSame(k(u),"day"),p=k(i).isSame(k(o),"day"),g=k(r).isSame(k(a),"day")):(f=i===c,h=r===u,p=i===o,g=r===a),!(p&&g)&&([t.filterObject.state.min,t.filterObject.state.max]=[i,r],f&&h?(delete t.filterObject.dirty,delete t.filterObject.stringifiedState):t.filterObject.dirty=!0,t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${k(i).format(Ke)} - ${k(r).format(Ke)}`:`${i} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),f&&h?t.reset():t.requestUpdate())}function Fl(e,t,n){const i=n.filterObject.state[e],r=Dt(n.filterObject)?k(i).format(Ke):i;return C`<div class="range-${t}">${r}</div>`}function zl(e){ql(-1,e),Vt(e.filterObject),e.requestUpdate()}function ql(e,t){t.selectedItems=[],Yn(t),mr(t)}function gr(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((i,r)=>r!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Yn(t),mr(t)}function Kl(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function Ul(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&gr(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Wl(e,t){(e.has("suggestions")||e.has("query"))&&Yn(t)}function Vl(e,t){var i;const n=((i=e.filterObject)==null?void 0:i.sort)||((r,o)=>r.toString().localeCompare(o.toString(),void 0,{numeric:!0}));return t.sort(n).map(r=>r)}function Yn(e){var i,r,o;const t=(((i=e.filterObject)==null?void 0:i.filterKeys)||e.suggestions).map(a=>`${a}`);let n=t;e.query&&(n=new Un(t,{threshold:.4,ignoreLocation:!0}).search(e.query).map(c=>c.item)),e.filteredSuggestions=(r=e.filterObject)!=null&&r.filterKeys?n:Vl(e,n),(o=e.filterObject)!=null&&o.filterKeys&&(e.filterObject.state=t.reduce((a,c)=>(c in a||(a[c]=void 0),a),e.filterObject.state)),e.highlightedIndex=-1}function mr(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Gl(e){Vt(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function Yl(e){e.renderRoot.querySelector("#eox-map").innerHTML="",yr(e)}function Xl(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function yr(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&Ql(e.geometry),i=Tl(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=i;const r=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{r(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{r(o.features.getArray()[0])})},1e3)}function Ql(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var st,Pt;class Zl extends se{constructor(){super();K(this,st,()=>{Il(this)});K(this,Pt,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",F(this,st).call(this))});Je(this,"debouncedInputHandler",Ft(F(this,st),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Pl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return C`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--_list-padding)"
          >
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${i=>i.stopPropagation()}
              @keydown=${F(this,Pt)}
            />
          </div>
        </div>
        <small
          class="error-validation"
          style="margin-left: var(--_list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}st=new WeakMap,Pt=new WeakMap;customElements.define("eox-itemfilter-text",Zl);function Jl(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const i=n.config.aggregateResults;return t==="No category"?e.filter(r=>{const o=r[i];return Array.isArray(o)?o.filter(Boolean).length===0:!o}):e.filter(r=>{const o=r[i];if(Array.isArray(o)){if(o.filter(Boolean).length===0)return!1}else if(!o)return!1;let a;return n.filters[i]&&(a=Object.keys(n.filters[i]).filter(u=>n.filters[i].state[u])),(a!=null&&a.length?a.includes(t):!0)&&Array.isArray(o)?o.includes(t):o===t})}function ec(e,t){return C`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||_e}
    >
      <summary class="square">
        <nav class="responsive tiny-space">
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </i>
          <span class="title"> ${e} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${t.aggregateResults(t.results,e).length}
          </button>
        </nav>
      </summary>
      <div>
        ${br(t,e)}
      </div>
    </details>
  `}function br(e,t){const n=e.results,i=t?e.aggregateResults(n,t):n,r=e.config,o=a=>{var c;return((c=e.selectedResult)==null?void 0:c[r.idProperty])===a[r.idProperty]?"highlighted":_e};return xi`
    ${e.resultType==="cards"?Fe("<eox-layout fill-grid>"):Fe('<ul id="results" class="list no-space" part="results">')}
      ${Mo(i,a=>a.id,a=>xi`
        ${e.resultType==="cards"?Fe("<eox-layout-item"):Fe("<li")}
            class="${o(a)}"
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:a}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:a}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${I(r.subTitleProperty||r.imageProperty,()=>C`
                  ${I(e.resultType==="cards",()=>U(r.imageProperty,a)?C`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${U(r.imageProperty,a)}"
                            />
                          `:C`
                            <svg
                              class="image"
                              width="100%"
                              height="100%"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill="var(--primary-color)"
                              />
                            </svg>
                          `,()=>C`
                      <i class="small">
                        ${U(r.imageProperty,a)?C`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${U(r.imageProperty,a)}"
                              />
                            `:C`
                              <svg
                                class="image"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="var(--primary-color)"
                                />
                              </svg>
                            `}
                      </i>
                    `)}
                  <div class="title-container small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      >${xt(a.highlightedText||U(r.titleProperty,a).toString())}</span
                    >
                    ${I(!!U(r.subTitleProperty,a),()=>C`
                        <small class="subtitle no-line truncate"
                          >${xt(U(r.subTitleProperty,a).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>C`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      >${xt(a.highlightedText||a[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${I(e.enableResultAction,()=>C`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${c=>{c.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${xt(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${e.resultType==="cards"?Fe("</eox-layout>"):Fe("</ul>")}
  `}var pe,jn,vr,wr;class tc extends se{constructor(){super();K(this,pe);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,i){return Jl(n,i,this)}createRenderRoot(){return this}handleAccordion(n){cr(n,this.config,this)}render(){return C`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>C`<small class="no-results">No matching items</small>`,()=>_e)}
          ${I(this.config.aggregateResults,()=>Ht(R(this,pe,wr).call(this),n=>C`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>C`<div style="margin-left: -8px">
                        ${R(this,pe,jn).call(this,n)}
                      </div>`,()=>R(this,pe,vr).call(this,n))}`),()=>R(this,pe,jn).call(this))}
        </div>
      </section>
    `}}pe=new WeakSet,jn=function(n){return br(this,n)},vr=function(n){return ec(n,this)},wr=function(){const n=this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",tc);var Ae,_r,Ar,Cr;class xr extends se{constructor(){super();K(this,Ae);Je(this,"debouncedInputHandler",Ft(R(this,Ae,Cr),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){n.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(i=>this.filterObject.state[i]?i:null).filter(i=>!!i)),Wl(n,this)}reset(){zl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",i=this.filteredSuggestions.length>5?"select-overflow scroll":_e;return C`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${I((this.filterObject.filterKeys||this.suggestions).length>=10,()=>C`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--_list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${R(this,Ae,_r)}
                @keydown=${R(this,Ae,Ar)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${i}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(r=>C`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label class="${n} small max">
                  <input
                    type="${n}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${r}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Ae=new WeakSet,_r=function(n){Kl(n,this)},Ar=function(n){Ul(n,this)},Cr=function(n){gr(n,this)},Je(xr,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",xr);var Be,Sr,On;class Mr extends se{constructor(){super();K(this,Be);this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=R(this,Be,Sr).bind(this),this.debouncedInputHandler=Ft(this.inputHandler,500,{leading:!1})}reset(){Hl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>C`
        ${I(Dt(this.filterObject),()=>C`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(n=>typeof n=="object"?n:{date:n})}]}
              .initDate=${[k(this.filterObject.state.min||this.filterObject.min).format(),k(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${n=>Bi(new CustomEvent("values",{detail:{values:[k(n.detail.date[0]).valueOf(),k(n.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${Ke}
              ></eox-timecontrol-date>
              <eox-timecontrol-picker
                style="${this.inlineMode?"margin-bottom: 1rem; display: block;":""}"
                ?popup=${!this.inlineMode}
                range
                show-dots
                .position=${["bottom","left"]}
              ></eox-timecontrol-picker>
            </eox-timecontrol>
          `,()=>C`
            <div style="display: flex; gap: .5rem; align-items: center;">
              ${R(this,Be,On).call(this,"min","before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min||this.filterObject.min}"
                value2="${this.filterObject.state.max||this.filterObject.max}"
                step="${this.filterObject.step||1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${R(this,Be,On).call(this,"max","after")}
            </div>
          `)}
      `)}}Be=new WeakSet,Sr=function(n){Bi(n,this)},On=function(n,i){return Fl(n,i,this)},Je(Mr,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-range",Mr);var It,$r;class nc extends se{constructor(){super();K(this,It);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Gl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return C`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${Ht(["intersects","within"],i=>C`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===i||_e}"
                    value="${i}"
                    @click=${()=>R(this,It,$r).call(this,i)}
                  />
                  <span style="font-size: x-small">${i} geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${i=>{this.filterObject.state.geometry=i.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial-filter>
        </div>
      `})}}It=new WeakSet,$r=function(n){Xl(n,this)};customElements.define("eox-itemfilter-spatial",nc);var Nt,Lr;class ic extends se{constructor(){super();K(this,Nt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){R(this,Nt,Lr).call(this)}reset(){Yl(this)}render(){return C`<div id="eox-map"></div>`}}Nt=new WeakSet,Lr=function(){yr(this)};customElements.define("eox-itemfilter-spatial-filter",ic);function rc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function sc(e,t){const{code:n,target:i}=e;i instanceof HTMLElement&&i.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&oc(n,e.target.value??"",t))}function oc(e,t,n){const i=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&i&&i.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){i&&(i.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(i),1));const r=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(r=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),r=r+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&r<0&&(r=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&r>n.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}var Pe,Bn,Rr;class ac extends se{constructor(){super();K(this,Pe);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",R(this,Pe,Bn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",R(this,Pe,Bn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return C`
      <span class="chip-container">
        ${Ht(this.items,n=>C`
            <span class="chip tiny-margin" @click=${R(this,Pe,Rr).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${i=>{i.stopPropagation(),this.controller.remove(i),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}Pe=new WeakSet,Bn=function(n){sc(n,this)},Rr=function(n){rc(n,this)};customElements.define("eox-itemfilter-chips",ac);var lc=200,Xn="__lodash_hash_undefined__",cc=1/0,uc="[object Function]",fc="[object GeneratorFunction]",hc=/[\\^$.*+?()[\]{}|]/g,dc=/^\[object .+?Constructor\]$/,pc=typeof xe=="object"&&xe&&xe.Object===Object&&xe,gc=typeof self=="object"&&self&&self.Object===Object&&self,Qn=pc||gc||Function("return this")();function mc(e,t){var n=e?e.length:0;return!!n&&bc(e,t,0)>-1}function yc(e,t,n,i){for(var r=e.length,o=n+-1;++o<r;)if(t(e[o],o,e))return o;return-1}function bc(e,t,n){if(t!==t)return yc(e,vc,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function vc(e){return e!==e}function wc(e,t){return e.has(t)}function xc(e,t){return e==null?void 0:e[t]}function _c(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function kr(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Ac=Array.prototype,Cc=Function.prototype,Tr=Object.prototype,gn=Qn["__core-js_shared__"],Pi=function(){var e=/[^.]+$/.exec(gn&&gn.keys&&gn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Er=Cc.toString,Zn=Tr.hasOwnProperty,Mc=Tr.toString,Sc=RegExp("^"+Er.call(Zn).replace(hc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$c=Ac.splice,Lc=Jn(Qn,"Map"),mn=Jn(Qn,"Set"),rt=Jn(Object,"create");function Oe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Rc(){this.__data__=rt?rt(null):{}}function kc(e){return this.has(e)&&delete this.__data__[e]}function Tc(e){var t=this.__data__;if(rt){var n=t[e];return n===Xn?void 0:n}return Zn.call(t,e)?t[e]:void 0}function Ec(e){var t=this.__data__;return rt?t[e]!==void 0:Zn.call(t,e)}function Dc(e,t){var n=this.__data__;return n[e]=rt&&t===void 0?Xn:t,this}Oe.prototype.clear=Rc;Oe.prototype.delete=kc;Oe.prototype.get=Tc;Oe.prototype.has=Ec;Oe.prototype.set=Dc;function Ve(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function jc(){this.__data__=[]}function Oc(e){var t=this.__data__,n=Gt(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():$c.call(t,n,1),!0}function Bc(e){var t=this.__data__,n=Gt(t,e);return n<0?void 0:t[n][1]}function Pc(e){return Gt(this.__data__,e)>-1}function Ic(e,t){var n=this.__data__,i=Gt(n,e);return i<0?n.push([e,t]):n[i][1]=t,this}Ve.prototype.clear=jc;Ve.prototype.delete=Oc;Ve.prototype.get=Bc;Ve.prototype.has=Pc;Ve.prototype.set=Ic;function Ge(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Nc(){this.__data__={hash:new Oe,map:new(Lc||Ve),string:new Oe}}function Hc(e){return Yt(this,e).delete(e)}function Fc(e){return Yt(this,e).get(e)}function zc(e){return Yt(this,e).has(e)}function qc(e,t){return Yt(this,e).set(e,t),this}Ge.prototype.clear=Nc;Ge.prototype.delete=Hc;Ge.prototype.get=Fc;Ge.prototype.has=zc;Ge.prototype.set=qc;function jt(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ge;++t<n;)this.add(e[t])}function Kc(e){return this.__data__.set(e,Xn),this}function Uc(e){return this.__data__.has(e)}jt.prototype.add=jt.prototype.push=Kc;jt.prototype.has=Uc;function Gt(e,t){for(var n=e.length;n--;)if(Jc(e[n][0],t))return n;return-1}function Wc(e){if(!Dr(e)||Xc(e))return!1;var t=eu(e)||_c(e)?Sc:dc;return t.test(Qc(e))}function Vc(e,t,n){var i=-1,r=mc,o=e.length,a=!0,c=[],u=c;if(o>=lc){var f=Gc(e);if(f)return kr(f);a=!1,r=wc,u=new jt}else u=c;e:for(;++i<o;){var h=e[i],p=h;if(h=h!==0?h:0,a&&p===p){for(var g=u.length;g--;)if(u[g]===p)continue e;c.push(h)}else r(u,p,n)||(u!==c&&u.push(p),c.push(h))}return c}var Gc=mn&&1/kr(new mn([,-0]))[1]==cc?function(e){return new mn(e)}:tu;function Yt(e,t){var n=e.__data__;return Yc(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Jn(e,t){var n=xc(e,t);return Wc(n)?n:void 0}function Yc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Xc(e){return!!Pi&&Pi in e}function Qc(e){if(e!=null){try{return Er.call(e)}catch{}try{return e+""}catch{}}return""}function Zc(e){return e&&e.length?Vc(e):[]}function Jc(e,t){return e===t||e!==e&&t!==t}function eu(e){var t=Dr(e)?Mc.call(e):"";return t==uc||t==fc}function Dr(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function tu(){}var nu=Zc;const Pn=Hi(nu);var Ot={exports:{}};Ot.exports;(function(e,t){var n=200,i="Expected a function",r="__lodash_hash_undefined__",o=1,a=2,c=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",g="[object Error]",m="[object Function]",v="[object GeneratorFunction]",b="[object Map]",A="[object Number]",_="[object Object]",$="[object Promise]",L="[object RegExp]",j="[object Set]",Q="[object String]",N="[object Symbol]",me="[object WeakMap]",oe="[object ArrayBuffer]",E="[object DataView]",P="[object Float32Array]",W="[object Float64Array]",$e="[object Int8Array]",Ye="[object Int16Array]",ye="[object Int32Array]",J="[object Uint8Array]",Xe="[object Uint8ClampedArray]",Xt="[object Uint16Array]",Br="[object Uint32Array]",Pr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ir=/^\w*$/,Nr=/^\./,Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fr=/[\\^$.*+?()[\]{}|]/g,zr=/\\(\\)?/g,qr=/^\[object .+?Constructor\]$/,Kr=/^(?:0|[1-9]\d*)$/,D={};D[P]=D[W]=D[$e]=D[Ye]=D[ye]=D[J]=D[Xe]=D[Xt]=D[Br]=!0,D[u]=D[f]=D[oe]=D[h]=D[E]=D[p]=D[g]=D[m]=D[b]=D[A]=D[_]=D[L]=D[j]=D[Q]=D[me]=!1;var ei=typeof xe=="object"&&xe&&xe.Object===Object&&xe,Ur=typeof self=="object"&&self&&self.Object===Object&&self,be=ei||Ur||Function("return this")(),ti=t&&!t.nodeType&&t,ni=ti&&!0&&e&&!e.nodeType&&e,Wr=ni&&ni.exports===ti,ii=Wr&&ei.process,ri=function(){try{return ii&&ii.binding("util")}catch{}}(),si=ri&&ri.isTypedArray;function Vr(s,l){for(var d=-1,y=s?s.length:0,x=Array(y);++d<y;)x[d]=l(s[d],d,s);return x}function Gr(s,l){for(var d=-1,y=l.length,x=s.length;++d<y;)s[x+d]=l[d];return s}function Yr(s,l){for(var d=-1,y=s?s.length:0;++d<y;)if(l(s[d],d,s))return!0;return!1}function Xr(s){return function(l){return l==null?void 0:l[s]}}function Qr(s,l){for(var d=-1,y=Array(s);++d<s;)y[d]=l(d);return y}function Zr(s){return function(l){return s(l)}}function Jr(s,l){return s==null?void 0:s[l]}function Qt(s){var l=!1;if(s!=null&&typeof s.toString!="function")try{l=!!(s+"")}catch{}return l}function es(s){var l=-1,d=Array(s.size);return s.forEach(function(y,x){d[++l]=[x,y]}),d}function ts(s,l){return function(d){return s(l(d))}}function ns(s){var l=-1,d=Array(s.size);return s.forEach(function(y){d[++l]=y}),d}var is=Array.prototype,rs=Function.prototype,at=Object.prototype,Zt=be["__core-js_shared__"],oi=function(){var s=/[^.]+$/.exec(Zt&&Zt.keys&&Zt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),ai=rs.toString,ae=at.hasOwnProperty,Ie=at.toString,ss=RegExp("^"+ai.call(ae).replace(Fr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),lt=be.Symbol,li=be.Uint8Array,os=at.propertyIsEnumerable,as=is.splice,ci=lt?lt.isConcatSpreadable:void 0,ls=ts(Object.keys,Object),Jt=Ne(be,"DataView"),Qe=Ne(be,"Map"),en=Ne(be,"Promise"),tn=Ne(be,"Set"),nn=Ne(be,"WeakMap"),Ze=Ne(Object,"create"),cs=Re(Jt),us=Re(Qe),fs=Re(en),hs=Re(tn),ds=Re(nn),ct=lt?lt.prototype:void 0,rn=ct?ct.valueOf:void 0,ui=ct?ct.toString:void 0;function Le(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var y=s[l];this.set(y[0],y[1])}}function ps(){this.__data__=Ze?Ze(null):{}}function gs(s){return this.has(s)&&delete this.__data__[s]}function ms(s){var l=this.__data__;if(Ze){var d=l[s];return d===r?void 0:d}return ae.call(l,s)?l[s]:void 0}function ys(s){var l=this.__data__;return Ze?l[s]!==void 0:ae.call(l,s)}function bs(s,l){var d=this.__data__;return d[s]=Ze&&l===void 0?r:l,this}Le.prototype.clear=ps,Le.prototype.delete=gs,Le.prototype.get=ms,Le.prototype.has=ys,Le.prototype.set=bs;function le(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var y=s[l];this.set(y[0],y[1])}}function vs(){this.__data__=[]}function ws(s){var l=this.__data__,d=ft(l,s);if(d<0)return!1;var y=l.length-1;return d==y?l.pop():as.call(l,d,1),!0}function xs(s){var l=this.__data__,d=ft(l,s);return d<0?void 0:l[d][1]}function _s(s){return ft(this.__data__,s)>-1}function As(s,l){var d=this.__data__,y=ft(d,s);return y<0?d.push([s,l]):d[y][1]=l,this}le.prototype.clear=vs,le.prototype.delete=ws,le.prototype.get=xs,le.prototype.has=_s,le.prototype.set=As;function ce(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var y=s[l];this.set(y[0],y[1])}}function Cs(){this.__data__={hash:new Le,map:new(Qe||le),string:new Le}}function Ms(s){return ht(this,s).delete(s)}function Ss(s){return ht(this,s).get(s)}function $s(s){return ht(this,s).has(s)}function Ls(s,l){return ht(this,s).set(s,l),this}ce.prototype.clear=Cs,ce.prototype.delete=Ms,ce.prototype.get=Ss,ce.prototype.has=$s,ce.prototype.set=Ls;function ut(s){var l=-1,d=s?s.length:0;for(this.__data__=new ce;++l<d;)this.add(s[l])}function Rs(s){return this.__data__.set(s,r),this}function ks(s){return this.__data__.has(s)}ut.prototype.add=ut.prototype.push=Rs,ut.prototype.has=ks;function ue(s){this.__data__=new le(s)}function Ts(){this.__data__=new le}function Es(s){return this.__data__.delete(s)}function Ds(s){return this.__data__.get(s)}function js(s){return this.__data__.has(s)}function Os(s,l){var d=this.__data__;if(d instanceof le){var y=d.__data__;if(!Qe||y.length<n-1)return y.push([s,l]),this;d=this.__data__=new ce(y)}return d.set(s,l),this}ue.prototype.clear=Ts,ue.prototype.delete=Es,ue.prototype.get=Ds,ue.prototype.has=js,ue.prototype.set=Os;function Bs(s,l){var d=fe(s)||an(s)?Qr(s.length,String):[],y=d.length,x=!!y;for(var w in s)ae.call(s,w)&&!(x&&(w=="length"||pi(w,y)))&&d.push(w);return d}function ft(s,l){for(var d=s.length;d--;)if(yi(s[d][0],l))return d;return-1}var Ps=eo(Hs);function Is(s,l,d,y,x){var w=-1,S=s.length;for(d||(d=oo),x||(x=[]);++w<S;){var O=s[w];d(O)?Gr(x,O):x[x.length]=O}return x}var Ns=to();function Hs(s,l){return s&&Ns(s,l,bt)}function fi(s,l){l=dt(l,s)?[l]:hi(l);for(var d=0,y=l.length;s!=null&&d<y;)s=s[pt(l[d++])];return d&&d==y?s:void 0}function Fs(s){return Ie.call(s)}function zs(s,l){return s!=null&&l in Object(s)}function sn(s,l,d,y,x){return s===l?!0:s==null||l==null||!mt(s)&&!yt(l)?s!==s&&l!==l:qs(s,l,sn,d,y,x)}function qs(s,l,d,y,x,w){var S=fe(s),O=fe(l),B=f,H=f;S||(B=ve(s),B=B==u?_:B),O||(H=ve(l),H=H==u?_:H);var V=B==_&&!Qt(s),G=H==_&&!Qt(l),q=B==H;if(q&&!V)return w||(w=new ue),S||go(s)?di(s,l,d,y,x,w):no(s,l,B,d,y,x,w);if(!(x&a)){var ee=V&&ae.call(s,"__wrapped__"),te=G&&ae.call(l,"__wrapped__");if(ee||te){var we=ee?s.value():s,he=te?l.value():l;return w||(w=new ue),d(we,he,y,x,w)}}return q?(w||(w=new ue),io(s,l,d,y,x,w)):!1}function Ks(s,l,d,y){var x=d.length,w=x;if(s==null)return!w;for(s=Object(s);x--;){var S=d[x];if(S[2]?S[1]!==s[S[0]]:!(S[0]in s))return!1}for(;++x<w;){S=d[x];var O=S[0],B=s[O],H=S[1];if(S[2]){if(B===void 0&&!(O in s))return!1}else{var V=new ue,G;if(!(G===void 0?sn(H,B,y,o|a,V):G))return!1}}return!0}function Us(s){if(!mt(s)||lo(s))return!1;var l=bi(s)||Qt(s)?ss:qr;return l.test(Re(s))}function Ws(s){return yt(s)&&ln(s.length)&&!!D[Ie.call(s)]}function Vs(s){return typeof s=="function"?s:s==null?vo:typeof s=="object"?fe(s)?Qs(s[0],s[1]):Xs(s):wo(s)}function Gs(s){if(!co(s))return ls(s);var l=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&l.push(d);return l}function Ys(s,l){var d=-1,y=gt(s)?Array(s.length):[];return Ps(s,function(x,w,S){y[++d]=l(x,w,S)}),y}function Xs(s){var l=ro(s);return l.length==1&&l[0][2]?mi(l[0][0],l[0][1]):function(d){return d===s||Ks(d,s,l)}}function Qs(s,l){return dt(s)&&gi(l)?mi(pt(s),l):function(d){var y=yo(d,s);return y===void 0&&y===l?bo(d,s):sn(l,y,void 0,o|a)}}function Zs(s){return function(l){return fi(l,s)}}function Js(s){if(typeof s=="string")return s;if(cn(s))return ui?ui.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function hi(s){return fe(s)?s:uo(s)}function eo(s,l){return function(d,y){if(d==null)return d;if(!gt(d))return s(d,y);for(var x=d.length,w=-1,S=Object(d);++w<x&&y(S[w],w,S)!==!1;);return d}}function to(s){return function(l,d,y){for(var x=-1,w=Object(l),S=y(l),O=S.length;O--;){var B=S[++x];if(d(w[B],B,w)===!1)break}return l}}function di(s,l,d,y,x,w){var S=x&a,O=s.length,B=l.length;if(O!=B&&!(S&&B>O))return!1;var H=w.get(s);if(H&&w.get(l))return H==l;var V=-1,G=!0,q=x&o?new ut:void 0;for(w.set(s,l),w.set(l,s);++V<O;){var ee=s[V],te=l[V];if(y)var we=S?y(te,ee,V,l,s,w):y(ee,te,V,s,l,w);if(we!==void 0){if(we)continue;G=!1;break}if(q){if(!Yr(l,function(he,ke){if(!q.has(ke)&&(ee===he||d(ee,he,y,x,w)))return q.add(ke)})){G=!1;break}}else if(!(ee===te||d(ee,te,y,x,w))){G=!1;break}}return w.delete(s),w.delete(l),G}function no(s,l,d,y,x,w,S){switch(d){case E:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case oe:return!(s.byteLength!=l.byteLength||!y(new li(s),new li(l)));case h:case p:case A:return yi(+s,+l);case g:return s.name==l.name&&s.message==l.message;case L:case Q:return s==l+"";case b:var O=es;case j:var B=w&a;if(O||(O=ns),s.size!=l.size&&!B)return!1;var H=S.get(s);if(H)return H==l;w|=o,S.set(s,l);var V=di(O(s),O(l),y,x,w,S);return S.delete(s),V;case N:if(rn)return rn.call(s)==rn.call(l)}return!1}function io(s,l,d,y,x,w){var S=x&a,O=bt(s),B=O.length,H=bt(l),V=H.length;if(B!=V&&!S)return!1;for(var G=B;G--;){var q=O[G];if(!(S?q in l:ae.call(l,q)))return!1}var ee=w.get(s);if(ee&&w.get(l))return ee==l;var te=!0;w.set(s,l),w.set(l,s);for(var we=S;++G<B;){q=O[G];var he=s[q],ke=l[q];if(y)var vi=S?y(ke,he,q,l,s,w):y(he,ke,q,s,l,w);if(!(vi===void 0?he===ke||d(he,ke,y,x,w):vi)){te=!1;break}we||(we=q=="constructor")}if(te&&!we){var vt=s.constructor,wt=l.constructor;vt!=wt&&"constructor"in s&&"constructor"in l&&!(typeof vt=="function"&&vt instanceof vt&&typeof wt=="function"&&wt instanceof wt)&&(te=!1)}return w.delete(s),w.delete(l),te}function ht(s,l){var d=s.__data__;return ao(l)?d[typeof l=="string"?"string":"hash"]:d.map}function ro(s){for(var l=bt(s),d=l.length;d--;){var y=l[d],x=s[y];l[d]=[y,x,gi(x)]}return l}function Ne(s,l){var d=Jr(s,l);return Us(d)?d:void 0}var ve=Fs;(Jt&&ve(new Jt(new ArrayBuffer(1)))!=E||Qe&&ve(new Qe)!=b||en&&ve(en.resolve())!=$||tn&&ve(new tn)!=j||nn&&ve(new nn)!=me)&&(ve=function(s){var l=Ie.call(s),d=l==_?s.constructor:void 0,y=d?Re(d):void 0;if(y)switch(y){case cs:return E;case us:return b;case fs:return $;case hs:return j;case ds:return me}return l});function so(s,l,d){l=dt(l,s)?[l]:hi(l);for(var y,x=-1,S=l.length;++x<S;){var w=pt(l[x]);if(!(y=s!=null&&d(s,w)))break;s=s[w]}if(y)return y;var S=s?s.length:0;return!!S&&ln(S)&&pi(w,S)&&(fe(s)||an(s))}function oo(s){return fe(s)||an(s)||!!(ci&&s&&s[ci])}function pi(s,l){return l=l??c,!!l&&(typeof s=="number"||Kr.test(s))&&s>-1&&s%1==0&&s<l}function dt(s,l){if(fe(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||cn(s)?!0:Ir.test(s)||!Pr.test(s)||l!=null&&s in Object(l)}function ao(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function lo(s){return!!oi&&oi in s}function co(s){var l=s&&s.constructor,d=typeof l=="function"&&l.prototype||at;return s===d}function gi(s){return s===s&&!mt(s)}function mi(s,l){return function(d){return d==null?!1:d[s]===l&&(l!==void 0||s in Object(d))}}var uo=on(function(s){s=mo(s);var l=[];return Nr.test(s)&&l.push(""),s.replace(Hr,function(d,y,x,w){l.push(x?w.replace(zr,"$1"):y||d)}),l});function pt(s){if(typeof s=="string"||cn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Re(s){if(s!=null){try{return ai.call(s)}catch{}try{return s+""}catch{}}return""}function fo(s,l){return Is(ho(s,l))}function ho(s,l){var d=fe(s)?Vr:Ys;return d(s,Vs(l))}function on(s,l){if(typeof s!="function"||l&&typeof l!="function")throw new TypeError(i);var d=function(){var y=arguments,x=l?l.apply(this,y):y[0],w=d.cache;if(w.has(x))return w.get(x);var S=s.apply(this,y);return d.cache=w.set(x,S),S};return d.cache=new(on.Cache||ce),d}on.Cache=ce;function yi(s,l){return s===l||s!==s&&l!==l}function an(s){return po(s)&&ae.call(s,"callee")&&(!os.call(s,"callee")||Ie.call(s)==u)}var fe=Array.isArray;function gt(s){return s!=null&&ln(s.length)&&!bi(s)}function po(s){return yt(s)&&gt(s)}function bi(s){var l=mt(s)?Ie.call(s):"";return l==m||l==v}function ln(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=c}function mt(s){var l=typeof s;return!!s&&(l=="object"||l=="function")}function yt(s){return!!s&&typeof s=="object"}function cn(s){return typeof s=="symbol"||yt(s)&&Ie.call(s)==N}var go=si?Zr(si):Ws;function mo(s){return s==null?"":Js(s)}function yo(s,l,d){var y=s==null?void 0:fi(s,l);return y===void 0?d:y}function bo(s,l){return s!=null&&so(s,l,zs)}function bt(s){return gt(s)?Bs(s):Gs(s)}function vo(s){return s}function wo(s){return dt(s)?Xr(pt(s)):Zs(s)}e.exports=fo})(Ot,Ot.exports);var iu=Ot.exports;const In=Hi(iu);function ru(e,t,n){let i=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{var p,g,m,v;const a={},c=b=>o.format==="date"?k(b).valueOf():parseFloat(b);t.forEach(b=>{var A,_;if(o.type==="range"){const $=U(o.key,b);if(Array.isArray($)){const L=[c($[0]),c($[1])];a.min=a.min!==void 0?Math.min(a.min,L[0]):L[0],a.max=a.max!==void 0?Math.max(a.max,L[1]):L[1]}else{const L=c($);a.min=a.min!==void 0?Math.min(a.min,L):L,a.max=a.max!==void 0?Math.max(a.max,L):L}return}Array.isArray(b[o.key])?b[o.key].forEach($=>{a[$]=void 0}):o.type==="spatial"?(a.geometry=((A=o==null?void 0:o.state)==null?void 0:A.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(_=o.key)!=null&&_.includes(".")?Pn(In(n.items,o.key)).filter($=>$).forEach($=>{a[$]=void 0}):a[b[o.key]]=void 0});const u=o.key||o.keys.join("|"),f=n.filters[u];let h;if(o.state)if(o.type==="range"){const b=j=>o.format==="date"?k(j).valueOf():parseFloat(j),A=b(o.state.min),_=b(o.state.max),$=b(o.min??a.min),L=b(o.max??a.max);o.format==="date"?h=!k(A).isSame(k($),"day")||!k(_).isSame(k(L),"day")||void 0:h=A!==$||_!==L||void 0}else h=Object.values(o.state).some(b=>b)||void 0;if(n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:h||(f==null?void 0:f.dirty),key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),o.type==="range"&&n.filters[u].dirty){const b=$=>o.format==="date"?k($).valueOf():parseFloat($),A=b(((p=o.state)==null?void 0:p.min)!==void 0?o.state.min:(g=f==null?void 0:f.state)==null?void 0:g.min),_=b(((m=o.state)==null?void 0:m.max)!==void 0?o.state.max:(v=f==null?void 0:f.state)==null?void 0:v.max);n.filters[u].stringifiedState=o.format==="date"?`${k(A).format(Ke)} - ${k(_).format(Ke)}`:`${A} - ${_}`}if(n.filters[u].state=Object.assign({},a,(f==null?void 0:f.state)||{},o.state),o.type==="range"&&o.state){const b=A=>o.format==="date"?k(A).valueOf():parseFloat(A);o.state.min!==void 0&&(n.filters[u].state.min=b(o.state.min)),o.state.max!==void 0&&(n.filters[u].state.max=b(o.state.max))}}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(i=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).filter(o=>o).sort((o,a)=>o.localeCompare(a)));const r=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{r.includes(a)||r.push(a)}):(o.type==="select"||o.type==="multiselect")&&(r.includes(o.key)||r.push(o.key))}),Rl(t,Object.assign({keys:r},e.fuseConfig)),i}async function su(e,t,n){let i;n.externalFilter?i=await Dl(t,n.filters,e):i=await kl(t,n.filters,e),n.results=n.sortResults(i,{isExternalResult:!!n.externalFilter})}function ou(e,t,n){const i=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return C`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${i}"
        .tabIndex=${t}
        .filterObject=${e}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return C`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${i}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Pn(In(n.items,e.key)).filter(r=>r)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return C`
        <eox-itemfilter-range
          .inlineMode=${n.inlineMode||!1}
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Pn(In(n.items,e.key)).filter(r=>r)}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return C`
        <eox-itemfilter-spatial
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return C``}}function au(e,t,n={}){var a;const{resultSorting:i}=t;if(i===!1)return e;if(i===void 0)return n.isExternalResult||(a=t.fuseConfig)!=null&&a.shouldSort?e:[...e].sort((c,u)=>{const f=U(t.titleProperty,c)||"",h=U(t.titleProperty,u)||"";return f.toString().localeCompare(h.toString())});if(typeof i=="function")return[...e].sort(i);const r=typeof i=="string"?i:i.key,o=typeof i=="object"&&i.order==="desc"?-1:1;return r?[...e].sort((c,u)=>{const f=U(r,c)||"",h=U(r,u)||"";return f.toString().localeCompare(h.toString())*o}):e}function lu(e,t,n){return C`
    ${I(e.dirty,()=>C`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${i=>{const r=i.target.parentElement.querySelector("[slot=filter]");r&&typeof r.reset=="function"&&r.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":C`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <span class="tooltip left">Reset filter</span>
              `}
        </button>
      `)}
  `}function cu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var ot,Ee,Y,Ue,jr,Or;class uu extends se{constructor(){super();K(this,Ue);K(this,ot,[]);K(this,Ee,[]);K(this,Y,Nl);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Ft(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){He(this,Y,pn.reduce((n,i)=>(n[i]=this[i],n),{})),He(this,ot,ru(F(this,Y),F(this,Ee),this)),this.search()}async searchHandler(){await su(F(this,Y),F(this,Ee),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n,i){return au(n,F(this,Y),i)}resetFilters(){cu(this)}firstUpdated(n){var r;let i={};pn.map(o=>{i={...i,[o]:this[o]}}),He(this,Y,i),He(this,Ee,((r=this.items)==null?void 0:r.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){var o;let i=!1,r=!1;pn.forEach(a=>{n.has(a)&&(F(this,Y)[a]=this[a],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(a)?i=!0:a==="resultSorting"&&(r=!0))}),i?(He(this,Ee,((o=this.items)==null?void 0:o.map((a,c)=>Object.assign({id:a[this.idProperty]||`item-${c}`},a)))||[]),this.apply()):r&&this.search()}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return C`
      <style>
        ${Ro}
        ${!this.unstyled&&Hn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":_e}
        @submit="${i=>i.preventDefault()}"
      >
        ${I(this.filterProperties,()=>C`
            <div
              style="display: var(--filter-display); min-height: ${this.inlineMode?"100%":this.filterProperties.length>2?"50%":this.filterProperties.length*32+105+"px"}"
            >
              <eox-itemfilter-container
                .filters=${this.filters}
                .filterProperties=${this.filterProperties}
                .inlineMode=${this.inlineMode||!1}
                @reset=${()=>this.resetFilters()}
                @filter=${()=>this.search()}
              >
                <section
                  slot="section"
                  style="height: 100%; overflow: hidden; display: flex; flex-direction: column;"
                >
                  ${I(!this.inlineMode,()=>C`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${I(!this.inlineMode&&F(this,Y).filterProperties&&!this.inlineMode&&F(this,Y).filterProperties&&Ln(this.filters),()=>C`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?_e:C`
                                    <i class="small">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <title>close</title>
                                        <path
                                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                        />
                                      </svg>
                                    </i>
                                  `}
                              <span class="small-text">Reset all</span>
                            </button>
                          `)}
                      </nav>
                    `)}
                  <div class="scroll" style="flex: 1; max-height: 100%">
                    <ul id="filters" class="list no-space">
                      ${Ht(Object.values(this.filters),(i,r)=>C` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${i}
                              @details-toggled=${o=>cr(o,F(this,Y),this)}
                              data-details="${i.key}"
                            >
                              ${R(this,Ue,Or).call(this,i,Oi(r,1))}
                              ${R(this,Ue,jr).call(this,i,Oi(r,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${I(((n=F(this,Y))==null?void 0:n.showResults)&&this.results,()=>C`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${F(this,Y)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${F(this,ot)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @mouseenter:result=${this.mouseEnterResult}
              @mouseleave:result=${this.mouseLeaveResult}
              @click:result-action=${this.emitResultAction}
            >
              <nav class="title-nav">
                <slot name="resultstitle"
                  ><p><strong>Results</strong></p></slot
                >
              </nav>
            </eox-itemfilter-results>
          `)}
      </form>
    `}}ot=new WeakMap,Ee=new WeakMap,Y=new WeakMap,Ue=new WeakSet,jr=function(n,i){return ou(n,i,this)},Or=function(n,i){return lu(n,i,this)};customElements.define("eox-itemfilter",uu);export{uu as EOxItemFilter};
