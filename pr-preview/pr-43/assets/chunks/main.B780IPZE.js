var wo=Object.defineProperty;var wi=e=>{throw TypeError(e)};var xo=(e,t,n)=>t in e?wo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Qe=(e,t,n)=>xo(e,typeof t!="symbol"?t+"":t,n),ln=(e,t,n)=>t.has(e)||wi("Cannot "+n);var F=(e,t,n)=>(ln(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?wi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ne=(e,t,n,i)=>(ln(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),R=(e,t,n)=>(ln(e,t,"access private method"),n);import{a as se,A as ne,b as A}from"./lit-element.BMPlKsWQ.js";import{o as It}from"./map.DiiNQ3pp.js";import{n as I}from"./when.BR7zwNJC.js";import{e as _o,a as Ao}from"./addCommonStyleSheet.BQJIwBZH.js";import{d as k}from"./dayjs.min.lahZ2SOr.js";import{_ as Nt}from"./index.BUIxO2d3.js";import{s as He,u as xi}from"./static.BLGvt9Xq.js";import{c as Co}from"./repeat.BH3fx7cN.js";import{o as wt}from"./unsafe-html.WWnMP6dQ.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{g as Pn,f as _i,b as Je,l as In,a as Mo}from"./index.uTKpKi59.js";import{a as So,m as $o,l as Lo}from"./index.DEU_HeW8.js";import{g as Ii,c as xe}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";const Ro=`
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
`;Ao();const Nn=`
${_o}
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
  height: auto;
}
.select li label,
.multiselect li label {
  min-width: 0;
  max-width: 100%;
}
.select li label .title,
.multiselect li label .title {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  width: 100%;
  overflow: visible;
}
.select li label .title .title-text,
.multiselect li label .title .title-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  max-width: 100%;
  width: 100%;
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
`;var jt,Ni;class To extends se{constructor(){super();U(this,jt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return A`
      <style>
        ${!this.unstyled&&Nn}
      </style>

      ${I(this.filterObject.featured,()=>A`<slot name="filter"></slot>`,()=>A`<details
            @toggle="${R(this,jt,Ni)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||ne}
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
    `}}jt=new WeakSet,Ni=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",To);function Ae(e){return Array.isArray?Array.isArray(e):Fi(e)==="[object Array]"}function ko(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function gn(e){return e==null?"":ko(e)}function q(e){return typeof e=="string"}function At(e){return typeof e=="number"}function Do(e){return e===!0||e===!1||Eo(e)&&Fi(e)=="[object Boolean]"}function Hi(e){return typeof e=="object"}function Eo(e){return Hi(e)&&e!==null}function Q(e){return e!=null}function xt(e){return!e.trim().length}function Fi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const jo="Incorrect 'index' type",mn="Invalid doc index: must be a non-negative integer within the bounds of the docs array",Bo=e=>`Invalid value for key ${e}`,Oo=e=>`Pattern length exceeds max of ${e}.`,Po=e=>`Missing ${e} property in key`,Io=e=>`Property 'weight' in key '${e}' must be a positive integer`,No="Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.",Ai=Object.prototype.hasOwnProperty;var Ho=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{const i=zi(n);this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function zi(e){let t=null,n=null,i=null,r=1,o=null;if(q(e)||Ae(e))i=e,t=Ci(e),n=Ct(e);else{if(!Ai.call(e,"name"))throw new Error(Po("name"));const a=e.name;if(i=a,Ai.call(e,"weight")&&e.weight!==void 0&&(r=e.weight,r<=0))throw new Error(Io(Ct(a)));t=Ci(a),n=Ct(a),o=e.getFn??null}return{path:t,id:n,weight:r,src:i,getFn:o}}function Ci(e){return Ae(e)?e:e.split(".")}function Ct(e){return Ae(e)?e.join("."):e}function Fo(e,t){const n=[];let i=!1;const r=(o,a,l,u)=>{if(Q(o))if(!a[l])n.push(u!==void 0?{v:o,i:u}:o);else{const h=o[a[l]];if(!Q(h))return;if(l===a.length-1&&(q(h)||At(h)||Do(h)||typeof h=="bigint"))n.push(u!==void 0?{v:gn(h),i:u}:gn(h));else if(Ae(h)){i=!0;for(let f=0,p=h.length;f<p;f+=1)r(h[f],a,l+1,f)}else a.length&&r(h,a,l+1,u)}};return r(e,q(t)?t.split("."):t,0),i?n:n[0]}const zo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},qo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Ko={location:0,threshold:.6,distance:100},Uo={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:"any",getFn:Fo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},M=Object.freeze({...qo,...zo,...Ko,...Uo});function Wo(e){return e>=9&&e<=13||e===32||e===160}function Vo(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(r){let o=0,a=!1;for(let u=0;u<r.length;u++)Wo(r.charCodeAt(u))?a=!1:a||(o++,a=!0);if(o===0&&(o=1),n.has(o))return n.get(o);const l=Math.round(i/Math.pow(o,.5*e))/i;return n.set(o,l),l},clear(){n.clear()}}}var Hn=class{constructor({getFn:e=M.getFn,fieldNormWeight:t=M.fieldNormWeight}={}){this.norm=Vo(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;const e=this.docs.length;this.records=new Array(e);let t=0;if(q(this.docs[0]))for(let n=0;n<e;n++){const i=this._createStringRecord(this.docs[n],n);i&&(this.records[t++]=i)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw new Error(mn);if(q(e)){const i=this._createStringRecord(e,t);return i&&this.records.push(i),i}const n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw new Error(mn);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&(this.records[t].i-=1)}removeAll(e){const t=new Set;for(const i of e)Number.isInteger(i)&&i>=0&&t.add(i);if(t.size===0)return;this.records=this.records.filter(i=>!t.has(i.i));const n=Array.from(t).sort((i,r)=>i-r);for(const i of this.records){let r=0,o=n.length;for(;r<o;){const a=r+o>>>1;n[a]<i.i?r=a+1:o=a}i.i-=r}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!Q(e)||xt(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){const n={i:t,$:{}};for(let i=0,r=this.keys.length;i<r;i++){const o=this.keys[i],a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Q(a)){if(Ae(a)){const l=[];for(let u=0,h=a.length;u<h;u+=1){const f=a[u];if(Q(f)){if(q(f)){if(!xt(f)){const p={v:f,i:u,n:this.norm.get(f)};l.push(p)}}else if(Q(f.v)){const p=q(f.v)?f.v:gn(f.v);if(!xt(p)){const g={v:p,i:f.i,n:this.norm.get(p)};l.push(g)}}}}n.$[i]=l}else if(q(a)&&!xt(a)){const l={v:a,n:this.norm.get(a)};n.$[i]=l}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function qi(e,t,{getFn:n=M.getFn,fieldNormWeight:i=M.fieldNormWeight}={}){const r=new Hn({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(zi)),r.setSources(t),r.create(),r}function Go(e,{getFn:t=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:i,records:r}=e,o=new Hn({getFn:t,fieldNormWeight:n});return o.setKeys(i),o.setIndexRecords(r),o}function Yo(e=[],t=M.minMatchCharLength){const n=[];let i=-1,r=-1,o=0;for(let a=e.length;o<a;o+=1){const l=e[o];l&&i===-1?i=o:!l&&i!==-1&&(r=o-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}function Xo(e,t,n,{location:i=M.location,distance:r=M.distance,threshold:o=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:h=M.ignoreLocation}={}){if(t.length>32)throw new Error(Oo(32));const f=t.length,p=e.length,g=Math.max(0,Math.min(i,p));let m=o,v=g;const b=(D,P)=>{const W=D/f;if(h)return W;const Se=Math.abs(g-P);return r?W+Se/r:Se?1:W},C=l>1||u,_=C?Array(p):[];let $;for(;($=e.indexOf(t,v))>-1;){const D=b(0,$);if(m=Math.min(D,m),v=$+f,C){let P=0;for(;P<f;)_[$+P]=1,P+=1}}v=-1;let L=[],j=1,Z=0,N=f+p;const me=1<<f-1;for(let D=0;D<f;D+=1){let P=0,W=N;for(;P<W;)b(D,g+W)<=m?P=W:N=W,W=Math.floor((N-P)/2+P);N=W;let Se=Math.max(1,g-W+1);const Ge=a?p:Math.min(g+W,p)+f,ye=Array(Ge+2);ye[Ge+1]=(1<<D)-1;for(let J=Ge;J>=Se;J-=1){const Ye=J-1,Gt=n[e[Ye]];if(ye[J]=(ye[J+1]<<1|1)&Gt,D&&(ye[J]|=(L[J+1]|L[J])<<1|1|L[J+1]),ye[J]&me&&(j=b(D,Ye),j<=m)){if(m=j,v=Ye,Z=D,v<=g)break;Se=Math.max(1,2*g-v)}}if(b(D+1,g)>m)break;L=ye}if(C&&v>=0){const D=Math.min(p-1,v+f-1+Z);for(let P=v;P<=D;P+=1)n[e[P]]&&(_[P]=1)}const oe={isMatch:v>=0,score:Math.max(.001,j)};if(C){const D=Yo(_,l);D.length?u&&(oe.indices=D):oe.isMatch=!1}return oe}function Zo(e){const t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}function Fn(e){if(e.length<=1)return e;e.sort((n,i)=>n[0]-i[0]||n[1]-i[1]);const t=[e[0]];for(let n=1,i=e.length;n<i;n+=1){const r=t[t.length-1],o=e[n];o[0]<=r[1]+1?r[1]=Math.max(r[1],o[1]):t.push(o)}return t}const Ki={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Qo=new RegExp("["+Object.keys(Ki).join("")+"]","g"),et=typeof String.prototype.normalize=="function"?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Qo,t=>Ki[t]):e=>e;var zn=class{constructor(e,{location:t=M.location,threshold:n=M.threshold,distance:i=M.distance,includeMatches:r=M.includeMatches,findAllMatches:o=M.findAllMatches,minMatchCharLength:a=M.minMatchCharLength,isCaseSensitive:l=M.isCaseSensitive,ignoreDiacritics:u=M.ignoreDiacritics,ignoreLocation:h=M.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreDiacritics:u,ignoreLocation:h},e=l?e:e.toLowerCase(),e=u?et(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const f=(g,m)=>{this.chunks.push({pattern:g,alphabet:Zo(g),startIndex:m})},p=this.pattern.length;if(p>32){let g=0;const m=p%32,v=p-m;for(;g<v;)f(this.pattern.substr(g,32),g),g+=32;if(m){const b=p-32;f(this.pattern.substr(b),b)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i}=this.options;if(e=t?e:e.toLowerCase(),e=n?et(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};const v={isMatch:!0,score:0};return i&&(v.indices=[[0,e.length-1]]),v}const{location:r,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:h}=this.options,f=[];let p=0,g=!1;this.chunks.forEach(({pattern:v,alphabet:b,startIndex:C})=>{const{isMatch:_,score:$,indices:L}=Xo(e,v,b,{location:r+C,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});_&&(g=!0),p+=$,_&&L&&f.push(...L)});const m={isMatch:g,score:g?p/this.chunks.length:1};return g&&i&&(m.indices=Fn(f)),m}};const Jo=new Set(["fuzzy","include"]);function ea(e){return e.startsWith("inverse")}const yn=[{type:"exact",multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:"exact",search(t){const n=t===e;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"include",multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:"include",search(t){let n=0,i;const r=[],o=e.length;for(;(i=t.indexOf(e,n))>-1;)n=i+o,r.push([i,n-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}})},{type:"prefix-exact",multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:"prefix-exact",search(t){const n=t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"inverse-prefix-exact",multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:"inverse-prefix-exact",search(t){const n=!t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"inverse-suffix-exact",multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:"inverse-suffix-exact",search(t){const n=!t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"suffix-exact",multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:"suffix-exact",search(t){const n=t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[t.length-e.length,t.length-1]}}})},{type:"inverse-exact",multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:"inverse-exact",search(t){const n=t.indexOf(e)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"fuzzy",multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{const n=new zn(e,{location:t.location??M.location,threshold:t.threshold??M.threshold,distance:t.distance??M.distance,includeMatches:t.includeMatches??M.includeMatches,findAllMatches:t.findAllMatches??M.findAllMatches,minMatchCharLength:t.minMatchCharLength??M.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??M.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??M.ignoreDiacritics,ignoreLocation:t.ignoreLocation??M.ignoreLocation});return{type:"fuzzy",search(i){return n.searchIn(i)}}}}],Mi=yn.length,ta="\0",na="|";function ia(e){const t=[],n=e.length;let i=0;for(;i<n;){for(;i<n&&e[i]===" ";)i++;if(i>=n)break;let r=i;for(;r<n&&e[r]!==" "&&e[r]!=='"';)r++;if(r<n&&e[r]==='"'){for(r++;r<n;){if(e[r]==='"'){const o=r+1;if(o>=n||e[o]===" "){r++;break}if(e[o]==="$"&&(o+1>=n||e[o+1]===" ")){r+=2;break}}r++}t.push(e.substring(i,r)),i=r}else{for(;r<n&&e[r]!==" ";)r++;t.push(e.substring(i,r)),i=r}}return t}function Si(e,t){const n=e.match(t);return n?n[1]:null}function ra(e,t={}){return e.replace(/\\\|/g,ta).split(na).map(n=>{const i=ia(n.replace(/\u0000/g,"|").trim()).filter(o=>o&&!!o.trim()),r=[];for(let o=0,a=i.length;o<a;o+=1){const l=i[o];let u=!1,h=-1;for(;!u&&++h<Mi;){const f=yn[h],p=Si(l,f.multiRegex);p&&(r.push(f.create(p,t)),u=!0)}if(!u)for(h=-1;++h<Mi;){const f=yn[h],p=Si(l,f.singleRegex);if(p){r.push(f.create(p,t));break}}}return r})}var sa=class{constructor(e,{isCaseSensitive:t=M.isCaseSensitive,ignoreDiacritics:n=M.ignoreDiacritics,includeMatches:i=M.includeMatches,minMatchCharLength:r=M.minMatchCharLength,ignoreLocation:o=M.ignoreLocation,findAllMatches:a=M.findAllMatches,location:l=M.location,threshold:u=M.threshold,distance:h=M.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:h},e=t?e:e.toLowerCase(),e=n?et(e):e,this.pattern=e,this.query=ra(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i,ignoreDiacritics:r}=this.options;e=i?e:e.toLowerCase(),e=r?et(e):e;let o=0;const a=[];let l=0,u=!1;for(let h=0,f=t.length;h<f;h+=1){const p=t[h];a.length=0,o=0,u=!1;for(let g=0,m=p.length;g<m;g+=1){const v=p[g],{isMatch:b,indices:C,score:_}=v.search(e);if(b)o+=1,l+=_,ea(v.type)&&(u=!0),n&&(Jo.has(v.type)?a.push(...C):a.push(C));else{l=0,o=0,a.length=0,u=!1;break}}if(o){const g={isMatch:!0,score:l/o};return u&&(g.hasInverse=!0),n&&(g.indices=Fn(a)),g}}return{isMatch:!1,score:1}}};const bn=[];function qn(...e){bn.push(...e)}function Mt(e,t){for(let n=0,i=bn.length;n<i;n+=1){const r=bn[n];if(r.condition(e,t))return new r(e,t)}return new zn(e,t)}const St={AND:"$and",OR:"$or"},vn={PATH:"$path",PATTERN:"$val"},wn=e=>!!(e[St.AND]||e[St.OR]),oa=e=>!!e[vn.PATH],aa=e=>!Ae(e)&&Hi(e)&&!wn(e),$i=e=>({[St.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Ui(e,t,{auto:n=!0}={}){const i=r=>{if(q(r)){const u={keyId:null,pattern:r};return n&&(u.searcher=Mt(r,t)),u}const o=Object.keys(r),a=oa(r);if(!a&&o.length>1&&!wn(r))return i($i(r));if(aa(r)){const u=a?r[vn.PATH]:o[0],h=a?r[vn.PATTERN]:r[u];if(!q(h))throw new Error(Bo(u));const f={keyId:Ct(u),pattern:h};return n&&(f.searcher=Mt(h,t)),f}const l={children:[],operator:o[0]};return o.forEach(u=>{const h=r[u];Ae(h)&&h.forEach(f=>{l.children.push(i(f))})}),l};return wn(e)||(e=$i(e)),i(e)}function xn(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){let n=1;return e.forEach(({key:i,norm:r,score:o})=>{const a=i?i.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:r))}),n}function la(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){e.forEach(n=>{n.score=xn(n.matches,{ignoreFieldNorm:t})})}var ca=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){const t=this.heap;for(;e>0;){const n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;const i=t[e];t[e]=t[n],t[n]=i,e=n}}_sinkDown(e){const t=this.heap,n=t.length;let i=e;do{e=i;const r=2*e+1,o=2*e+2;if(r<n&&this.comparator(t[r],t[i])>0&&(i=r),o<n&&this.comparator(t[o],t[i])>0&&(i=o),i!==e){const a=t[e];t[e]=t[i],t[i]=a}}while(i!==e)}};function ua(e){const t=[];return e.matches.forEach(n=>{if(!Q(n.indices)||!n.indices.length)return;const i={indices:n.indices,value:n.value};n.key&&(i.key=n.key.id),n.idx>-1&&(i.refIndex=n.idx),t.push(i)}),t}function ha(e,t,{includeMatches:n=M.includeMatches,includeScore:i=M.includeScore}={}){return e.map(r=>{const{idx:o}=r,a={item:t[o],refIndex:o};return n&&(a.matches=ua(r)),i&&(a.score=r.score),a})}const fa=/[\p{L}\p{M}\p{N}_]+/gu,Li=new WeakSet;function da(e){Li.has(e)||(Li.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function pa(e){if(typeof e=="function"){let t=!1;return n=>{const i=e(n);if(!t&&(t=!0,!Array.isArray(i)||i.some(r=>typeof r!="string")))throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(i)?"array containing non-strings":typeof i}.`);return i}}return e instanceof RegExp?(e.global||da(e),t=>t.match(e)||[]):t=>t.match(fa)||[]}function _n({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){const i=pa(n);return{tokenize(r){return e||(r=r.toLowerCase()),t&&(r=et(r)),i(r)}}}var ga=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=_n({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});const n=this.analyzer.tokenize(e),{df:i,fieldCount:r}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(const o of n){this.termSearchers.push(new zn(o,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const a=i.get(o)||0,l=Math.log(1+(r-a+.5)/(a+.5));this.idfWeights.push(l)}this.combineAll=t.tokenMatch==="all",this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let n=0,i=0,r=0,o=0;const a=this.combineAll&&!this.useMask?new Set:null;for(let h=0;h<this.termSearchers.length;h++){const f=this.termSearchers[h].searchIn(e),p=this.idfWeights[h];i+=p,f.isMatch&&(r++,n+=p*(1-f.score),f.indices&&t.push(...f.indices),this.combineAll&&(this.useMask?o|=1<<h:a.add(h)))}if(r===0)return{isMatch:!1,score:1};const l=i>0?1-n/i:0,u={isMatch:!0,score:Math.max(.001,l)};return this.options.includeMatches&&t.length&&(u.indices=Fn(t)),this.combineAll&&(this.useMask?u.matchedMask=o:u.matchedTerms=a,u.termCount=this.numTerms),u}};function cn(e,t,n,i){const r=i.tokenize(t);if(!r.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);const o=new Set(r);let a=e.docTermFieldHits.get(n);a||(a=new Map,e.docTermFieldHits.set(n,a));for(const l of o)a.set(l,(a.get(l)||0)+1),e.df.set(l,(e.df.get(l)||0)+1)}function Wi(e,t,n,i){const{i:r,v:o,$:a}=t;if(o!==void 0){cn(e,o,r,i);return}if(a)for(let l=0;l<n;l++){const u=a[l];if(u)if(Array.isArray(u))for(const h of u)cn(e,h.v,r,i);else cn(e,u.v,r,i)}}function ma(e,t,n){const i={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(const r of e)Wi(i,r,t,n);return i}function ya(e,t,n,i){Wi(e,t,n,i)}function ba(e,t){const n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);const i=e.docTermFieldHits.get(t);if(i){for(const[r,o]of i){const a=(e.df.get(r)||0)-o;a<=0?e.df.delete(r):e.df.set(r,a)}e.docTermFieldHits.delete(t)}}function Ri(e,t){if(t.length===0)return;const n=Array.from(new Set(t)).sort((l,u)=>l-u);for(const l of n)ba(e,l);const i=l=>{let u=0,h=n.length;for(;u<h;){const f=u+h>>>1;n[f]<l?u=f+1:h=f}return l-u},r=n[0],o=new Map;for(const[l,u]of e.docFieldCount)o.set(l>r?i(l):l,u);e.docFieldCount=o;const a=new Map;for(const[l,u]of e.docTermFieldHits)a.set(l>r?i(l):l,u);e.docTermFieldHits=a}var Ce=class{constructor(e,t,n){this.options={...M,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Ho(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const t=Mt(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Hn))throw new Error(jo);if(this._myIndex=t||qi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const n=_n({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=ma(this._myIndex.records,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}add(e){if(!Q(e))return;this._docs.push(e);const t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){const n=_n({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});ya(this._invertedIndex,t,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}remove(e=()=>!1){const t=[],n=[];for(let i=0,r=this._docs.length;i<r;i+=1)e(this._docs[i],i)&&(t.push(this._docs[i]),n.push(i));if(n.length){this._invertedIndex&&Ri(this._invertedIndex,n);const i=new Set(n);this._docs=this._docs.filter((r,o)=>!i.has(o)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw new Error(mn);this._invertedIndex&&Ri(this._invertedIndex,[e]);const t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){const{limit:n=-1}=t||{},{includeMatches:i,includeScore:r,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;if(q(e)&&!e.trim()){let g=this._docs.map((m,v)=>({item:m,refIndex:v}));return At(n)&&n>-1&&(g=g.slice(0,n)),g}const u=o&&At(n)&&n>0&&q(e),h=a,f=(g,m)=>h(g,m)||g.idx-m.idx;let p;if(u){const g=new ca(n,f);q(this._docs[0])?this._searchStringList(e,{heap:g,ignoreFieldNorm:l}):this._searchObjectList(e,{heap:g,ignoreFieldNorm:l}),p=g.extractSorted()}else p=q(e)?q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),la(p,{ignoreFieldNorm:l}),o&&p.sort(q(e)?f:h),At(n)&&n>-1&&(p=p.slice(0,n));return ha(p,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=t?null:[];return o.forEach(({v:l,i:u,n:h})=>{if(!Q(l))return;const f=i.searchIn(l);if(f.isMatch){const p={score:f.score,value:l,norm:h,indices:f.indices};r&&(p.matchedMask=f.matchedMask,p.matchedTerms=f.matchedTerms,p.termCount=f.termCount);const g=[p];if(!r||this._coversAllTokens(g)){const m={item:l,idx:u,matches:g};t?(m.score=xn(m.matches,{ignoreFieldNorm:n}),t.insert(m)):a.push(m)}}}),a}_searchLogical(e){const t=Ui(e,this.options),n=this._normalizedKeys(),i=(l,u,h)=>{if(!("children"in l)){const{keyId:m,searcher:v}=l;let b;return m===null?(b=[],n.forEach((C,_)=>{b.push(...this._findMatches({key:C,value:u[_],searcher:v}))})):b=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:v}),b&&b.length?[{idx:h,item:u,matches:b}]:[]}const{children:f,operator:p}=l,g=[];for(let m=0,v=f.length;m<v;m+=1){const b=f[m],C=i(b,u,h);if(C.length)g.push(...C);else if(p===St.AND)return[]}return g},r=this._myIndex.records,o=new Map,a=[];return r.forEach(({$:l,i:u})=>{if(Q(l)){const h=i(t,l,u);h.length&&(o.has(u)||(o.set(u,{idx:u,item:l,matches:[]}),a.push(o.get(u))),h.forEach(({matches:f})=>{o.get(u).matches.push(...f)}))}}),a}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=this._normalizedKeys(),l=t?null:[];return o.forEach(({$:u,i:h})=>{if(!Q(u))return;const f=[];let p=!1,g=!1;if(a.forEach((m,v)=>{const b=this._findMatches({key:m,value:u[v],searcher:i});b.length?(f.push(...b),b[0].hasInverse&&(g=!0)):p=!0}),!(g&&p)&&f.length&&(!r||this._coversAllTokens(f))){const m={idx:h,item:u,matches:f};t?(m.score=xn(m.matches,{ignoreFieldNorm:n}),t.insert(m)):l.push(m)}}),l}_findMatches({key:e,value:t,searcher:n}){if(!Q(t))return[];const i=[];if(Ae(t))t.forEach(({v:r,i:o,n:a})=>{if(!Q(r))return;const l=n.searchIn(r);if(l.isMatch){const u={score:l.score,key:e,value:r,idx:o,norm:a,indices:l.indices,hasInverse:l.hasInverse};l.termCount!==void 0&&(u.matchedMask=l.matchedMask,u.matchedTerms=l.matchedTerms,u.termCount=l.termCount),i.push(u)}});else{const{v:r,n:o}=t,a=n.searchIn(r);if(a.isMatch){const l={score:a.score,key:e,value:r,norm:o,indices:a.indices,hasInverse:a.hasInverse};a.termCount!==void 0&&(l.matchedMask=a.matchedMask,l.matchedTerms=a.matchedTerms,l.termCount=a.termCount),i.push(l)}}return i}_coversAllTokens(e){const t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let i=0;for(let r=0;r<e.length;r++)i|=e[r].matchedMask||0;return i===2**t-1}const n=new Set;for(let i=0;i<e.length;i++){const r=e[i].matchedTerms;if(r)for(const o of r)n.add(o)}return n.size===t}};Ce.version="7.5.0";Ce.createIndex=qi;Ce.parseIndex=Go;Ce.config=M;Ce.match=function(e,t,n){if(n&&n.useTokenSearch)throw new Error(No);return Mt(e,{...M,...n}).searchIn(t)};Ce.parseQuery=Ui;qn(sa);qn(ga);Ce.use=function(...e){e.forEach(t=>qn(t))};var Kn=Ce;const va=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),un=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],qe="YYYY-MM-DD",wa=.3;function Vi(e,t){const n=l=>l.inlineSearch&&l.type==="text",i=new Kn(t.filterProperties,{keys:["title"],...t.filterProperties.some(n)&&{threshold:wa}});if(!(e.target instanceof HTMLInputElement))return;const r=e.target.value,a=i.search(r).map(l=>l.item.key||l.item.keys.join("|"));Object.keys(t.filters).forEach(l=>{n(t.filters[l])||(t.querySelector(`[data-details="${l}"]`).parentElement.style.display=a.includes(l)||!r?"":"none")})}function Un(e){const t=e.renderRoot.querySelector("#eox-itemfilter-input-search");t.value="",e.inlineSearchText="",Vi({target:t},e)}function Gi(e){const t=e.renderRoot.querySelector("#eox-itemfilter-input-search"),n=t.value.trim(),i=Yi(e);!n||!i.length||(i.forEach(r=>{var o;(o=e.querySelector(`#${CSS.escape(`filter-${r.key}`.replace("|","-"))}`))==null||o.appendText(n)}),Un(e),t.focus(),e.showDropdown=!1)}function xa(e,t){e.key!=="Enter"||e.isComposing||Gi(t)}function Yi(e){return Object.values(e.filters).filter(t=>t.inlineSearch&&t.type==="text")}function _a(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#${CSS.escape(`filter-${n}`)}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const An=Math.min,Fe=Math.max,$t=Math.round,_t=Math.floor,de=e=>({x:e,y:e});function Aa(e,t){return typeof e=="function"?e(t):e}function Ca(e){return e.split("-")[0]}function Ma(e){return e.split("-")[1]}function Sa(e){return e==="x"?"y":"x"}function $a(e){return e==="y"?"height":"width"}function Xi(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function La(e){return Sa(Xi(e))}function Ra(e){var t,n,i,r;return{top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(i=e.bottom)!=null?i:0,left:(r=e.left)!=null?r:0}}function Ta(e){return typeof e!="number"?Ra(e):{top:e,right:e,bottom:e,left:e}}function Lt(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function Ti(e,t,n){let{reference:i,floating:r}=e;const o=Xi(t),a=La(t),l=$a(a),u=Ca(t),h=o==="y",f=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[l]/2-r[l]/2;let m;switch(u){case"top":m={x:f,y:i.y-r.height};break;case"bottom":m={x:f,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:p};break;case"left":m={x:i.x-r.width,y:p};break;default:m={x:i.x,y:i.y}}const v=Ma(t);return v&&(m[a]+=g*(v==="end"?1:-1)*(n&&h?-1:1)),m}async function ka(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:a,elements:l,strategy:u}=e,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:m=0}=Aa(t,e),v=Ta(m),C=l[g?p==="floating"?"reference":"floating":p],_=Lt(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(C)))==null||n?C:C.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:h,rootBoundary:f,strategy:u})),$=p==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,L=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),j=await(o.isElement==null?void 0:o.isElement(L))&&await(o.getScale==null?void 0:o.getScale(L))||{x:1,y:1},Z=Lt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:$,offsetParent:L,strategy:u}):$);return{top:(_.top-Z.top+v.top)/j.y,bottom:(Z.bottom-_.bottom+v.bottom)/j.y,left:(_.left-Z.left+v.left)/j.x,right:(Z.right-_.right+v.right)/j.x}}const Da=50,Ea=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:a}=n,l=a.detectOverflow?a:{...a,detectOverflow:ka},u=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:p}=Ti(h,i,u),g=i,m=0;const v={};for(let b=0;b<o.length;b++){const C=o[b];if(!C)continue;const{name:_,fn:$}=C,{x:L,y:j,data:Z,reset:N}=await $({x:f,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:v,rects:h,platform:l,elements:{reference:e,floating:t}});f=L??f,p=j??p,v[_]={...v[_],...Z},N&&m<Da&&(m++,typeof N=="object"&&(N.placement&&(g=N.placement),N.rects&&(h=N.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):N.rects),{x:f,y:p}=Ti(h,g,u)),b=-1)}return{x:f,y:p,placement:g,strategy:r,middlewareData:v}};function Ht(){return typeof window<"u"}function Ue(e){return Zi(e)?(e.nodeName||"").toLowerCase():"#document"}function X(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ge(e){var t;return(t=(Zi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Zi(e){return Ht()?e instanceof Node||e instanceof X(e).Node:!1}function ie(e){return Ht()?e instanceof Element||e instanceof X(e).Element:!1}function Me(e){return Ht()?e instanceof HTMLElement||e instanceof X(e).HTMLElement:!1}function ki(e){return!Ht()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof X(e).ShadowRoot}function Ft(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=re(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&r!=="inline"&&r!=="contents"}function ja(e){return/^(table|td|th)$/.test(Ue(e))}function zt(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Ba=/transform|translate|scale|rotate|perspective|filter/,Oa=/paint|layout|strict|content/,Te=e=>!!e&&e!=="none";let hn;function Wn(e){const t=ie(e)?re(e):e;return Te(t.transform)||Te(t.translate)||Te(t.scale)||Te(t.rotate)||Te(t.perspective)||!Vn()&&(Te(t.backdropFilter)||Te(t.filter))||Ba.test(t.willChange||"")||Oa.test(t.contain||"")}function Pa(e){let t=De(e);for(;Me(t)&&!tt(t);){if(Wn(t))return t;if(zt(t))return null;t=De(t)}return null}function Vn(){return hn==null&&(hn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),hn}function tt(e){return/^(html|body|#document)$/.test(Ue(e))}function re(e){return X(e).getComputedStyle(e)}function qt(e){return ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function De(e){if(Ue(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ki(e)&&e.host||ge(e);return ki(t)?t.host:t}function Qi(e){const t=De(e);return tt(t)?(e.ownerDocument||e).body:Me(t)&&Ft(t)?t:Qi(t)}function nt(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Qi(e),o=r===((i=e.ownerDocument)==null?void 0:i.body),a=X(r);if(o){const l=Cn(a);return t.concat(a,a.visualViewport||[],Ft(r)?r:[],l&&n?nt(l):[])}else return t.concat(r,nt(r,[],n))}function Cn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ji(e){const t=re(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Me(e),o=r?e.offsetWidth:n,a=r?e.offsetHeight:i,l=$t(n)!==o||$t(i)!==a;return l&&(n=o,i=a),{width:n,height:i,$:l}}function Gn(e){return ie(e)?e:e.contextElement}function ze(e){const t=Gn(e);if(!Me(t))return de(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=Ji(t);let a=(o?$t(n.width):n.width)/i,l=(o?$t(n.height):n.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Ia=de(0);function er(e){const t=X(e);return!Vn()||!t.visualViewport?Ia:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Na(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===X(e)}function Ee(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=Gn(e);let a=de(1);t&&(i?ie(i)&&(a=ze(i)):a=ze(e));const l=Na(o,n,i)?er(o):de(0);let u=(r.left+l.x)/a.x,h=(r.top+l.y)/a.y,f=r.width/a.x,p=r.height/a.y;if(o&&i){const g=X(o),m=ie(i)?X(i):i;let v=g,b=Cn(v);for(;b&&m!==v;){const C=ze(b),_=b.getBoundingClientRect(),$=re(b),L=_.left+(b.clientLeft+parseFloat($.paddingLeft))*C.x,j=_.top+(b.clientTop+parseFloat($.paddingTop))*C.y;u*=C.x,h*=C.y,f*=C.x,p*=C.y,u+=L,h+=j,v=X(b),b=Cn(v)}}return Lt({width:f,height:p,x:u,y:h})}function Kt(e,t){const n=qt(e).scrollLeft;return t?t.left+n:Ee(ge(e)).left+n}function tr(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-Kt(e,n),r=n.top+t.scrollTop;return{x:i,y:r}}function Ha(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const o=r==="fixed",a=ge(i),l=t?zt(t.floating):!1;if(i===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},h=de(1);const f=de(0),p=Me(i);if((p||!o)&&((Ue(i)!=="body"||Ft(a))&&(u=qt(i)),p)){const m=Ee(i);h=ze(i),f.x=m.x+i.clientLeft,f.y=m.y+i.clientTop}const g=a&&!p&&!o?tr(a,u):de(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-u.scrollLeft*h.x+f.x+g.x,y:n.y*h.y-u.scrollTop*h.y+f.y+g.y}}function Fa(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function za(e){const t=qt(e),n=e.ownerDocument.body,i=Fe(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=Fe(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let o=-t.scrollLeft+Kt(e);const a=-t.scrollTop;return re(n).direction==="rtl"&&(o+=Fe(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const qa=25;function Ka(e,t,n){n===void 0&&(n="viewport");const i=n==="layoutViewport",r=X(e),o=ge(e),a=r.visualViewport;let l=o.clientWidth,u=o.clientHeight,h=0,f=0;if(a){const g=!Vn()||t==="fixed";i?g||(h=-a.offsetLeft,f=-a.offsetTop):(l=a.width,u=a.height,g&&(h=a.offsetLeft,f=a.offsetTop))}if(Kt(o)<=0){const g=o.ownerDocument,m=g.body,v=getComputedStyle(m),b=g.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,C=Math.abs(o.clientWidth-m.clientWidth-b),_=getComputedStyle(o).scrollbarGutter==="stable both-edges"?C/2:C;_<=qa&&(l-=_)}return{width:l,height:u,x:h,y:f}}function Ua(e,t){const n=Ee(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=ze(e),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=r*o.x,h=i*o.y;return{width:a,height:l,x:u,y:h}}function Di(e,t,n){let i;if(t==="viewport"||t==="layoutViewport")i=Ka(e,n,t);else if(t==="document")i=za(ge(e));else if(ie(t))i=Ua(t,n);else{const r=er(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Lt(i)}function Wa(e,t){const n=t.get(e);if(n)return n;let i=nt(e,[],!1).filter(l=>ie(l)&&Ue(l)!=="body"),r=null;const o=re(e).position==="fixed";let a=o?De(e):e;for(;ie(a)&&!tt(a);){const l=re(a),u=Wn(a),h=r?r.position:o?"fixed":"";!u&&(h==="fixed"||h==="absolute"&&l.position==="static")?i=i.filter(p=>p!==a):r=l,a=De(a)}return t.set(e,i),i}function Va(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const a=[...n==="clippingAncestors"?zt(t)?[]:Wa(t,this._c):[].concat(n),i],l=Di(t,a[0],r);let u=l.top,h=l.right,f=l.bottom,p=l.left;for(let g=1;g<a.length;g++){const m=Di(t,a[g],r);u=Fe(m.top,u),h=An(m.right,h),f=An(m.bottom,f),p=Fe(m.left,p)}return{width:h-p,height:f-u,x:p,y:u}}function Ga(e){const{width:t,height:n}=Ji(e);return{width:t,height:n}}function Ya(e,t,n){const i=Me(t),r=ge(t),o=n==="fixed",a=Ee(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=de(0);if((i||!o)&&((Ue(t)!=="body"||Ft(r))&&(l=qt(t)),i)){const g=Ee(t,!0,o,t);u.x=g.x+t.clientLeft,u.y=g.y+t.clientTop}!i&&r&&(u.x=Kt(r));const h=r&&!i&&!o?tr(r,l):de(0),f=a.left+l.scrollLeft-u.x-h.x,p=a.top+l.scrollTop-u.y-h.y;return{x:f,y:p,width:a.width,height:a.height}}function fn(e){return re(e).position==="static"}function Ei(e,t){if(!Me(e)||re(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return ge(e)===n&&(n=n.ownerDocument.body),n}function nr(e,t){const n=X(e);if(zt(e))return n;if(!Me(e)){let r=De(e);for(;r&&!tt(r);){if(ie(r)&&!fn(r))return r;r=De(r)}return n}let i=Ei(e,t);for(;i&&ja(i)&&fn(i);)i=Ei(i,t);return i&&tt(i)&&fn(i)&&!Wn(i)?n:i||Pa(e)||n}const Xa=async function(e){const t=this.getOffsetParent||nr,n=this.getDimensions,i=await n(e.floating);return{reference:Ya(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Za(e){return re(e).direction==="rtl"}const Qa={convertOffsetParentRelativeRectToViewportRelativeRect:Ha,getDocumentElement:ge,getClippingRect:Va,getOffsetParent:nr,getElementRects:Xa,getClientRects:Fa,getDimensions:Ga,getScale:ze,isElement:ie,isRTL:Za};function ir(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ja(e,t,n){let i=null,r;const o=ge(e);function a(){var f;clearTimeout(r),(f=i)==null||f.disconnect(),i=null}function l(f,p){f===void 0&&(f=!1),p===void 0&&(p=1),a();const g=e.getBoundingClientRect(),{left:m,top:v,width:b,height:C}=g;if(f||t(),!b||!C)return;const _=_t(v),$=_t(o.clientWidth-(m+b)),L=_t(o.clientHeight-(v+C)),j=_t(m),N={rootMargin:-_+"px "+-$+"px "+-L+"px "+-j+"px",threshold:Fe(0,An(1,p))||1};let me=!0;function oe(D){const P=D[0].intersectionRatio;if(!ir(g,e.getBoundingClientRect()))return l();if(P!==p){if(!me)return l();P?l(!1,P):r=setTimeout(()=>{l(!1,1e-7)},1e3)}me=!1}try{i=new IntersectionObserver(oe,{...N,root:o.ownerDocument})}catch{i=new IntersectionObserver(oe,N)}i.observe(e)}const u=X(e),h=()=>l(n);return u.addEventListener("resize",h),l(!0),()=>{u.removeEventListener("resize",h),a()}}function el(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,h=Gn(e),f=r||o?[...h?nt(h):[],...t?nt(t):[]]:[];f.forEach(_=>{r&&_.addEventListener("scroll",n),o&&_.addEventListener("resize",n)});const p=h&&l?Ja(h,n,o):null;let g=-1,m=null;a&&(m=new ResizeObserver(_=>{let[$]=_;$&&$.target===h&&m&&t&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var L;(L=m)==null||L.observe(t)})),n()}),h&&!u&&m.observe(h),t&&m.observe(t));let v,b=u?Ee(e):null;u&&C();function C(){const _=Ee(e);b&&!ir(b,_)&&n(),b=_,v=requestAnimationFrame(C)}return n(),()=>{var _;f.forEach($=>{r&&$.removeEventListener("scroll",n),o&&$.removeEventListener("resize",n)}),p==null||p(),(_=m)==null||_.disconnect(),m=null,u&&cancelAnimationFrame(v)}}const tl=(e,t,n)=>{const i=new Map,r=n??{},o={...Qa,...r.platform,_c:i};return Ea(e,t,{...r,platform:o})};function nl(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return el(t,n,()=>{n.matches(":popover-open")&&tl(t,n,{strategy:"fixed"}).then(({x:r,y:o})=>{Object.assign(n.style,{left:`${r}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function il(e,t){t.inlineMode&&e.stopPropagation()}function rl(e){e.inlineMode&&(e.showDropdown=!0)}function sl(e,t){e.target instanceof HTMLInputElement&&(t.showDropdown=!0,Vi(e,t),t.inlineSearchText=e.target.value.trim())}function ol(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function al(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Un(t),t.showDropdown=!1)}function ll(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Un(t),t.showDropdown=!1)}function Mn(e,t={}){const n=Pn(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return cl(n,t);case"MultiPolygon":return ul(n,t);default:throw new Error("invalid poly")}}function cl(e,t={}){const i=Pn(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{};return rr(i,r)}function ul(e,t={}){const i=Pn(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return i.forEach(a=>{o.push(rr(a,r))}),So(o)}function rr(e,t){return e.length>1?$o(e,t):Lo(e[0],t)}function hl(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let i=!0;return _i(e,r=>{_i(t,o=>{if(i===!1)return!1;i=fl(r.geometry,o.geometry,n)})}),i}function fl(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!ml(e.coordinates,t.coordinates);case"LineString":return!Rt(t,e);case"Polygon":return!Je(e,t)}break;case"LineString":switch(t.type){case"Point":return!Rt(e,t);case"LineString":return!dl(e,t,n);case"Polygon":return!ji(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!Je(t,e);case"LineString":return!ji(e,t,n);case"Polygon":return!pl(t,e,n)}}return!1}function Rt(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(gl(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function dl(e,t,n){if(In(e,t,{ignoreSelfIntersections:n}).features.length>0)return!0;for(const r of e.coordinates)if(Rt(t,{coordinates:r}))return!0;for(const r of t.coordinates)if(Rt(e,{coordinates:r}))return!0;return!1}function ji(e,t,n){for(const r of t.coordinates)if(Je(r,e))return!0;return In(t,Mn(e),{ignoreSelfIntersections:n}).features.length>0}function pl(e,t,n){for(const r of e.coordinates[0])if(Je(r,t))return!0;for(const r of t.coordinates[0])if(Je(r,e))return!0;return In(Mn(e),Mn(t),{ignoreSelfIntersections:n}).features.length>0}function gl(e,t,n){const i=n[0]-e[0],r=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return i*a-r*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function ml(e,t){return e[0]===t[0]&&e[1]===t[1]}function yl(e,t,{ignoreSelfIntersections:n=!0}={}){return!hl(e,t,{ignoreSelfIntersections:n})}var bl=yl;function vl(e,t){return Mo(t,e)}var wl=vl;const xl=(e,t)=>t?bl(e,t):!0,_l=(e,t)=>t?wl(e,t):!0;function Al(e,t="highlight",n="title"){const i=(r,o=[])=>{let a="",l=0,u=0;return o.forEach((h,f)=>{const p=h[1]+1;f&&u>h[0]||(u=h[1],a+=[r.substring(l,h[0]),`<mark class="${t}">`,r.substring(h[0],p),"</mark>"].join(""),l=p)}),a+=r.substring(l),a};return e.filter(({matches:r})=>r&&r.length).map(({item:r,matches:o})=>{const a={...r};return o.forEach(l=>{if(l.key!==n)return;const u=i(Tt(l.value),Rl(l.indices));a.highlightedText=u}),a})}let sr;const Cl=(e,t)=>{sr=new Kn(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},Ml=async(e,t,n)=>{const i=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,h])=>{const f="$or",p=[],g=(m,v)=>{const b={};h.type==="text"?b[m]=`${v}`:b[u]=`="${m}"`,p.push(b)};return Object.entries(h.state).filter(([,m])=>m).forEach(([m,v])=>g(m,v)),p.length>0&&l.push({[f]:p}),l},[]);let r;if(!(i.length>0)&&n.matchAllWhenEmpty!==!1)r=e;else{const l={$and:[...i]},u=sr.search(l);r=n.enableHighlighting?Al(u,"highlight",n.titleProperty):u.map(h=>h.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,h])=>{const f=p=>h.format==="date"?k(p).valueOf():parseFloat(p);return l[u]={min:f(h.state.min),max:f(h.state.max),format:h.format},l},{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<r.length;u++){const h={};for(const[f,p]of Object.entries(o)){const g=v=>p.format==="date"?k(v).valueOf():parseFloat(v),m=z(f,r[u]);m?Array.isArray(m)?h[f]=o[f].min<=g(m[1])&&g(m[0])<=o[f].max:g(m)>=o[f].min&&g(m)<=o[f].max?h[f]=!0:h[f]=!1:h[f]=!0}Object.values(h).every(f=>!!f)&&l.push(r[u])}r=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,h])=>(l[u]={geometry:h.state.geometry,mode:h.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<r.length;u++){const h={};for(const f of Object.keys(a)){const p=z(f,r[u]),g=a[f].mode||"within";p&&(g==="within"?_l(p,a[f].geometry):xl(p,a[f].geometry))?h[f]=!0:h[f]=!1}Object.values(h).every(f=>!!f)&&l.push(r[u])}r=[...l]}return r};function Sl(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function Ut(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Bi(e,t){return e*2+t}function $l(e){return Object.keys(e).map(t=>({title:A`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function Sn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Ll(e,t,n){const i=n.externalFilter(e,t),r=typeof i=="string"||i instanceof String?i:i.url,o=typeof i=="object"&&"fetchFn"in i?await i.fetchFn(r):await fetch(r).then(async a=>await a.json());return i.key?z(i.key,o):o}function or(e,t,n){let i;if(e.detail?i=e.detail.target:i=e.target,i!=null&&i.classList.contains("details-filter")){if(!i.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const o=r.shadowRoot.querySelector(".details-filter");o&&o!==i&&o.removeAttribute("open")})}else{if(!(i!=null&&i.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(r=>{r!==i&&r.removeAttribute("open")})}}function z(e,t){return typeof e=="function"?e(t):e!=null&&e.includes(".")?e.split(".").reduce((n,i)=>n&&n[i],t):t[e]}function Tt(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Rl(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([r,o])=>r<=o?[r,o]:[o,r]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),i=[];for(const[r,o]of n){if(i.length===0){i.push([r,o]);continue}const a=i[i.length-1];(t?r<=a[1]+1:r<=a[1])?o>a[1]&&(a[1]=o):i.push([r,o])}return i}function kt(e){return e.format==="date"}var T,ar,$n,Ln,lr,Rn,Tn,cr,kn,ur,hr,fr,dr;class Tl extends se{constructor(){super();U(this,T);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this.inlineSearchText="",this._handleClickOutside=R(this,T,lr).bind(this),this._handleKeyDown=R(this,T,Rn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object},inlineSearchText:{state:!0,type:String}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&R(this,T,$n).call(this)}disconnectedCallback(){this.inlineMode&&R(this,T,Ln).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?R(this,T,$n).call(this):R(this,T,Ln).call(this))}render(){return A`
      <style>
        ${!this.unstyled&&Nn}
      </style>
      ${this.inlineMode?A`
            <div
              class="inline-container-wrapper"
              @click="${R(this,T,Tn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${$l(this.filters)}
                      .controller=${{remove:n=>R(this,T,ur).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(Sn(this.filters),()=>A`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":A`
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
                  class="input-container field no-margin ${Sn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${R(this,T,Tn)}"
                    @focus="${R(this,T,cr)}"
                    @input="${R(this,T,hr)}"
                    @keydown="${R(this,T,fr)}"
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
                  @keydown="${R(this,T,Rn)}"
                  @click="${R(this,T,kn)}"
                  @focus="${R(this,T,kn)}"
                >
                  ${I(this.inlineSearchText&&Yi(this).length,()=>A`
                      <button
                        type="button"
                        class="transparent responsive left-align no-margin"
                        data-cy="inline-search-action"
                        @click=${R(this,T,dr)}
                      >
                        ${this.unstyled?ne:A`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>search</title>
                                  <path
                                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                  />
                                </svg>
                              </i>
                            `}
                        <span class="truncate"
                          >Search for "${this.inlineSearchText}"</span
                        >
                      </button>
                    `)}
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:A`<slot name="section"></slot>`}
    `}}T=new WeakSet,ar=function(){setTimeout(()=>this._overlayCleanup=nl(this))},$n=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),R(this,T,ar).call(this)},Ln=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},lr=function(n){ll(n,this)},Rn=function(n){al(n,this)},Tn=function(n){ol(n,this)},cr=function(){rl(this)},kn=function(n){il(n,this)},ur=function(n){_a(n,this)},hr=function(n){sl(n,this)},fr=function(n){xa(n,this)},dr=function(){Gi(this)};customElements.define("eox-itemfilter-container",Tl);function kl(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",Ut(e.filterObject),e.requestUpdate()}function Dl(e,t){const n=t.renderRoot.querySelector("input[type='text']");n.value=[n.value,e].filter(Boolean).join(" "),t.debouncedInputHandler()}function El(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}function jl(e){if(Ut(e.filterObject),e.filterObject){const t=e.filterObject.min,n=e.filterObject.max,i=e.querySelector("eox-timecontrol");i&&i.dateChange([k(t).format(),k(n).format()],i);const r=e.querySelector("tc-range-slider");r&&(r.value1!==t&&(r.value1=t),r.value2!==n&&(r.value2=n))}e.requestUpdate()}function Oi(e,t){const n=m=>kt(t.filterObject)?k(m).valueOf():parseFloat(m),i=n(e.detail.values[0]),r=n(e.detail.values[1]),o=n(t.filterObject.state.min),a=n(t.filterObject.state.max),l=n(t.filterObject.min),u=n(t.filterObject.max);let h,f,p,g;kt(t.filterObject)?(h=k(i).isSame(k(l),"day"),f=k(r).isSame(k(u),"day"),p=k(i).isSame(k(o),"day"),g=k(r).isSame(k(a),"day")):(h=i===l,f=r===u,p=i===o,g=r===a),!(p&&g)&&([t.filterObject.state.min,t.filterObject.state.max]=[i,r],h&&f?(delete t.filterObject.dirty,delete t.filterObject.stringifiedState):t.filterObject.dirty=!0,t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${k(i).format(qe)} - ${k(r).format(qe)}`:`${i} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),h&&f?t.reset():t.requestUpdate())}function Bl(e,t,n){const i=n.filterObject.state[e],r=kt(n.filterObject)?k(i).format(qe):i;return A`<div class="range-${t}">${r}</div>`}function Ol(e){Pl(-1,e),Ut(e.filterObject),e.requestUpdate()}function Pl(e,t){t.selectedItems=[],Yn(t),gr(t)}function pr(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((i,r)=>r!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Yn(t),gr(t)}function Il(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function Nl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&pr(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Hl(e,t){(e.has("suggestions")||e.has("query"))&&Yn(t)}function Fl(e,t){var i;const n=((i=e.filterObject)==null?void 0:i.sort)||((r,o)=>r.toString().localeCompare(o.toString(),void 0,{numeric:!0}));return t.sort(n).map(r=>r)}function Yn(e){var i,r,o;const t=(((i=e.filterObject)==null?void 0:i.filterKeys)||e.suggestions).map(a=>`${a}`);let n=t;e.query&&(n=new Kn(t,{threshold:.4,ignoreLocation:!0}).search(e.query).map(l=>l.item)),e.filteredSuggestions=(r=e.filterObject)!=null&&r.filterKeys?n:Fl(e,n),(o=e.filterObject)!=null&&o.filterKeys&&(e.filterObject.state=t.reduce((a,l)=>(l in a||(a[l]=void 0),a),e.filterObject.state)),e.highlightedIndex=-1}function gr(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function zl(e){Ut(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function ql(e){e.renderRoot.querySelector("#eox-map").innerHTML="",mr(e)}function Kl(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function mr(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&Ul(e.geometry),i=Sl(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=i;const r=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{r(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{r(o.features.getArray()[0])})},1e3)}function Ul(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var rt,Bt;class Wl extends se{constructor(){super();U(this,rt,()=>{El(this)});U(this,Bt,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",F(this,rt).call(this))});Qe(this,"debouncedInputHandler",Nt(F(this,rt),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){kl(this)}appendText(n){Dl(n,this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
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
              @keydown=${F(this,Bt)}
            />
          </div>
        </div>
        <small
          class="error-validation"
          style="margin-left: var(--_list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}rt=new WeakMap,Bt=new WeakMap;customElements.define("eox-itemfilter-text",Wl);function Vl(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const i=n.config.aggregateResults;return t==="No category"?e.filter(r=>{const o=r[i];return Array.isArray(o)?o.filter(Boolean).length===0:!o}):e.filter(r=>{const o=r[i];if(Array.isArray(o)){if(o.filter(Boolean).length===0)return!1}else if(!o)return!1;let a;return n.filters[i]&&(a=Object.keys(n.filters[i]).filter(u=>n.filters[i].state[u])),(a!=null&&a.length?a.includes(t):!0)&&Array.isArray(o)?o.includes(t):o===t})}function Gl(e,t){return A`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||ne}
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
        ${yr(t,e)}
      </div>
    </details>
  `}function yr(e,t){const n=e.results,i=t?e.aggregateResults(n,t):n,r=e.config,o=a=>{var l;return((l=e.selectedResult)==null?void 0:l[r.idProperty])===a[r.idProperty]?"highlighted":ne};return xi`
    ${e.resultType==="cards"?He("<eox-layout fill-grid>"):He('<ul id="results" class="list no-space" part="results">')}
      ${Co(i,a=>a.id,a=>{var h;const l=((h=z(r.titleProperty,a))==null?void 0:h.toString())||"",u=a.highlightedText?l:Tt(l);return xi`
        ${e.resultType==="cards"?He("<eox-layout-item"):He("<li")}
            class="${o(a)}"
            title="${u}"
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:a}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:a}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${I(r.subTitleProperty||r.imageProperty,()=>A`
                  ${I(e.resultType==="cards",()=>z(r.imageProperty,a)?A`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${z(r.imageProperty,a)}"
                            />
                          `:A`
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
                          `,()=>A`
                      <i class="small">
                        ${z(r.imageProperty,a)?A`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${z(r.imageProperty,a)}"
                              />
                            `:A`
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
                      title="${u}"
                      >${wt(a.highlightedText||z(r.titleProperty,a).toString())}</span
                    >
                    ${I(!!z(r.subTitleProperty,a),()=>A`
                        <small class="subtitle no-line truncate"
                          >${wt(z(r.subTitleProperty,a).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>A`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      title="${u}"
                      >${wt(a.highlightedText||a[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${I(e.enableResultAction,()=>A`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${f=>{f.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${wt(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `})}
    ${e.resultType==="cards"?He("</eox-layout>"):He("</ul>")}
  `}var pe,Dn,br,vr;class Yl extends se{constructor(){super();U(this,pe);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,i){return Vl(n,i,this)}createRenderRoot(){return this}handleAccordion(n){or(n,this.config,this)}render(){return A`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>A`<small class="no-results">No matching items</small>`,()=>ne)}
          ${I(this.config.aggregateResults,()=>It(R(this,pe,vr).call(this),n=>A`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>A`<div style="margin-left: -8px">
                        ${R(this,pe,Dn).call(this,n)}
                      </div>`,()=>R(this,pe,br).call(this,n))}`),()=>R(this,pe,Dn).call(this))}
        </div>
      </section>
    `}}pe=new WeakSet,Dn=function(n){return yr(this,n)},br=function(n){return Gl(n,this)},vr=function(){const n=this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",Yl);var _e,xr,_r,Ar;class wr extends se{constructor(){super();U(this,_e);Qe(this,"debouncedInputHandler",Nt(R(this,_e,Ar),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){n.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(i=>this.filterObject.state[i]?i:null).filter(i=>!!i)),Hl(n,this)}reset(){Ol(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",i=this.filteredSuggestions.length>5?"select-overflow scroll":ne;return A`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${I((this.filterObject.filterKeys||this.suggestions).length>=10,()=>A`<div class="autocomplete-container">
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
                @input=${R(this,_e,xr)}
                @keydown=${R(this,_e,_r)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${i}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(r=>A`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label
                  class="${n} small max"
                  title="${Tt(r.toString())}"
                >
                  <input
                    type="${n}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span
                    class="title small-line"
                    title="${Tt(r.toString())}"
                  >
                    <span class="title-text">${r}</span>
                  </span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}_e=new WeakSet,xr=function(n){Il(n,this)},_r=function(n){Nl(n,this)},Ar=function(n){pr(n,this)},Qe(wr,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",wr);var Be,Mr,En;class Cr extends se{constructor(){super();U(this,Be);this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=R(this,Be,Mr).bind(this),this.debouncedInputHandler=Nt(this.inputHandler,500,{leading:!1})}reset(){jl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>A`
        ${I(kt(this.filterObject),()=>A`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(n=>typeof n=="object"?n:{date:n})}]}
              .initDate=${[k(this.filterObject.state.min||this.filterObject.min).format(),k(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${n=>Oi(new CustomEvent("values",{detail:{values:[k(n.detail.date[0]).valueOf(),k(n.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${qe}
              ></eox-timecontrol-date>
              <eox-timecontrol-picker
                style="${this.inlineMode?"margin-bottom: 1rem; display: block;":""}"
                ?popup=${!this.inlineMode}
                range
                show-dots
                .position=${["bottom","left"]}
              ></eox-timecontrol-picker>
            </eox-timecontrol>
          `,()=>A`
            <div style="display: flex; gap: .5rem; align-items: center;">
              ${R(this,Be,En).call(this,"min","before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min||this.filterObject.min}"
                value2="${this.filterObject.state.max||this.filterObject.max}"
                step="${this.filterObject.step||1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${R(this,Be,En).call(this,"max","after")}
            </div>
          `)}
      `)}}Be=new WeakSet,Mr=function(n){Oi(n,this)},En=function(n,i){return Bl(n,i,this)},Qe(Cr,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-range",Cr);var Ot,Sr;class Xl extends se{constructor(){super();U(this,Ot);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){zl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${It(["intersects","within"],i=>A`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===i||ne}"
                    value="${i}"
                    @click=${()=>R(this,Ot,Sr).call(this,i)}
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
      `})}}Ot=new WeakSet,Sr=function(n){Kl(n,this)};customElements.define("eox-itemfilter-spatial",Xl);var Pt,$r;class Zl extends se{constructor(){super();U(this,Pt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){R(this,Pt,$r).call(this)}reset(){ql(this)}render(){return A`<div id="eox-map"></div>`}}Pt=new WeakSet,$r=function(){mr(this)};customElements.define("eox-itemfilter-spatial-filter",Zl);function Ql(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function Jl(e,t){const{code:n,target:i}=e;i instanceof HTMLElement&&i.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&ec(n,e.target.value??"",t))}function ec(e,t,n){const i=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&i&&i.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){i&&(i.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(i),1));const r=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(r=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),r=r+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&r<0&&(r=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&r>n.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}var Oe,jn,Lr;class tc extends se{constructor(){super();U(this,Oe);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",R(this,Oe,jn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",R(this,Oe,jn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return A`
      <span class="chip-container">
        ${It(this.items,n=>A`
            <span class="chip tiny-margin" @click=${R(this,Oe,Lr).bind(this)}>
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
    `}}Oe=new WeakSet,jn=function(n){Jl(n,this)},Lr=function(n){Ql(n,this)};customElements.define("eox-itemfilter-chips",tc);var nc=200,Xn="__lodash_hash_undefined__",ic=1/0,rc="[object Function]",sc="[object GeneratorFunction]",oc=/[\\^$.*+?()[\]{}|]/g,ac=/^\[object .+?Constructor\]$/,lc=typeof xe=="object"&&xe&&xe.Object===Object&&xe,cc=typeof self=="object"&&self&&self.Object===Object&&self,Zn=lc||cc||Function("return this")();function uc(e,t){var n=e?e.length:0;return!!n&&fc(e,t,0)>-1}function hc(e,t,n,i){for(var r=e.length,o=n+-1;++o<r;)if(t(e[o],o,e))return o;return-1}function fc(e,t,n){if(t!==t)return hc(e,dc,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function dc(e){return e!==e}function pc(e,t){return e.has(t)}function gc(e,t){return e==null?void 0:e[t]}function mc(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Rr(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var yc=Array.prototype,bc=Function.prototype,Tr=Object.prototype,dn=Zn["__core-js_shared__"],Pi=function(){var e=/[^.]+$/.exec(dn&&dn.keys&&dn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),kr=bc.toString,Qn=Tr.hasOwnProperty,vc=Tr.toString,wc=RegExp("^"+kr.call(Qn).replace(oc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xc=yc.splice,_c=Jn(Zn,"Map"),pn=Jn(Zn,"Set"),it=Jn(Object,"create");function je(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Ac(){this.__data__=it?it(null):{}}function Cc(e){return this.has(e)&&delete this.__data__[e]}function Mc(e){var t=this.__data__;if(it){var n=t[e];return n===Xn?void 0:n}return Qn.call(t,e)?t[e]:void 0}function Sc(e){var t=this.__data__;return it?t[e]!==void 0:Qn.call(t,e)}function $c(e,t){var n=this.__data__;return n[e]=it&&t===void 0?Xn:t,this}je.prototype.clear=Ac;je.prototype.delete=Cc;je.prototype.get=Mc;je.prototype.has=Sc;je.prototype.set=$c;function We(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Lc(){this.__data__=[]}function Rc(e){var t=this.__data__,n=Wt(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():xc.call(t,n,1),!0}function Tc(e){var t=this.__data__,n=Wt(t,e);return n<0?void 0:t[n][1]}function kc(e){return Wt(this.__data__,e)>-1}function Dc(e,t){var n=this.__data__,i=Wt(n,e);return i<0?n.push([e,t]):n[i][1]=t,this}We.prototype.clear=Lc;We.prototype.delete=Rc;We.prototype.get=Tc;We.prototype.has=kc;We.prototype.set=Dc;function Ve(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Ec(){this.__data__={hash:new je,map:new(_c||We),string:new je}}function jc(e){return Vt(this,e).delete(e)}function Bc(e){return Vt(this,e).get(e)}function Oc(e){return Vt(this,e).has(e)}function Pc(e,t){return Vt(this,e).set(e,t),this}Ve.prototype.clear=Ec;Ve.prototype.delete=jc;Ve.prototype.get=Bc;Ve.prototype.has=Oc;Ve.prototype.set=Pc;function Dt(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ve;++t<n;)this.add(e[t])}function Ic(e){return this.__data__.set(e,Xn),this}function Nc(e){return this.__data__.has(e)}Dt.prototype.add=Dt.prototype.push=Ic;Dt.prototype.has=Nc;function Wt(e,t){for(var n=e.length;n--;)if(Vc(e[n][0],t))return n;return-1}function Hc(e){if(!Dr(e)||Kc(e))return!1;var t=Gc(e)||mc(e)?wc:ac;return t.test(Uc(e))}function Fc(e,t,n){var i=-1,r=uc,o=e.length,a=!0,l=[],u=l;if(o>=nc){var h=zc(e);if(h)return Rr(h);a=!1,r=pc,u=new Dt}else u=l;e:for(;++i<o;){var f=e[i],p=f;if(f=f!==0?f:0,a&&p===p){for(var g=u.length;g--;)if(u[g]===p)continue e;l.push(f)}else r(u,p,n)||(u!==l&&u.push(p),l.push(f))}return l}var zc=pn&&1/Rr(new pn([,-0]))[1]==ic?function(e){return new pn(e)}:Yc;function Vt(e,t){var n=e.__data__;return qc(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Jn(e,t){var n=gc(e,t);return Hc(n)?n:void 0}function qc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Kc(e){return!!Pi&&Pi in e}function Uc(e){if(e!=null){try{return kr.call(e)}catch{}try{return e+""}catch{}}return""}function Wc(e){return e&&e.length?Fc(e):[]}function Vc(e,t){return e===t||e!==e&&t!==t}function Gc(e){var t=Dr(e)?vc.call(e):"";return t==rc||t==sc}function Dr(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Yc(){}var Xc=Wc;const Bn=Ii(Xc);var Et={exports:{}};Et.exports;(function(e,t){var n=200,i="Expected a function",r="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",h="[object Array]",f="[object Boolean]",p="[object Date]",g="[object Error]",m="[object Function]",v="[object GeneratorFunction]",b="[object Map]",C="[object Number]",_="[object Object]",$="[object Promise]",L="[object RegExp]",j="[object Set]",Z="[object String]",N="[object Symbol]",me="[object WeakMap]",oe="[object ArrayBuffer]",D="[object DataView]",P="[object Float32Array]",W="[object Float64Array]",Se="[object Int8Array]",Ge="[object Int16Array]",ye="[object Int32Array]",J="[object Uint8Array]",Ye="[object Uint8ClampedArray]",Gt="[object Uint16Array]",Br="[object Uint32Array]",Or=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pr=/^\w*$/,Ir=/^\./,Nr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hr=/[\\^$.*+?()[\]{}|]/g,Fr=/\\(\\)?/g,zr=/^\[object .+?Constructor\]$/,qr=/^(?:0|[1-9]\d*)$/,E={};E[P]=E[W]=E[Se]=E[Ge]=E[ye]=E[J]=E[Ye]=E[Gt]=E[Br]=!0,E[u]=E[h]=E[oe]=E[f]=E[D]=E[p]=E[g]=E[m]=E[b]=E[C]=E[_]=E[L]=E[j]=E[Z]=E[me]=!1;var ei=typeof xe=="object"&&xe&&xe.Object===Object&&xe,Kr=typeof self=="object"&&self&&self.Object===Object&&self,be=ei||Kr||Function("return this")(),ti=t&&!t.nodeType&&t,ni=ti&&!0&&e&&!e.nodeType&&e,Ur=ni&&ni.exports===ti,ii=Ur&&ei.process,ri=function(){try{return ii&&ii.binding("util")}catch{}}(),si=ri&&ri.isTypedArray;function Wr(s,c){for(var d=-1,y=s?s.length:0,x=Array(y);++d<y;)x[d]=c(s[d],d,s);return x}function Vr(s,c){for(var d=-1,y=c.length,x=s.length;++d<y;)s[x+d]=c[d];return s}function Gr(s,c){for(var d=-1,y=s?s.length:0;++d<y;)if(c(s[d],d,s))return!0;return!1}function Yr(s){return function(c){return c==null?void 0:c[s]}}function Xr(s,c){for(var d=-1,y=Array(s);++d<s;)y[d]=c(d);return y}function Zr(s){return function(c){return s(c)}}function Qr(s,c){return s==null?void 0:s[c]}function Yt(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Jr(s){var c=-1,d=Array(s.size);return s.forEach(function(y,x){d[++c]=[x,y]}),d}function es(s,c){return function(d){return s(c(d))}}function ts(s){var c=-1,d=Array(s.size);return s.forEach(function(y){d[++c]=y}),d}var ns=Array.prototype,is=Function.prototype,ot=Object.prototype,Xt=be["__core-js_shared__"],oi=function(){var s=/[^.]+$/.exec(Xt&&Xt.keys&&Xt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),ai=is.toString,ae=ot.hasOwnProperty,Pe=ot.toString,rs=RegExp("^"+ai.call(ae).replace(Hr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),at=be.Symbol,li=be.Uint8Array,ss=ot.propertyIsEnumerable,os=ns.splice,ci=at?at.isConcatSpreadable:void 0,as=es(Object.keys,Object),Zt=Ie(be,"DataView"),Xe=Ie(be,"Map"),Qt=Ie(be,"Promise"),Jt=Ie(be,"Set"),en=Ie(be,"WeakMap"),Ze=Ie(Object,"create"),ls=Le(Zt),cs=Le(Xe),us=Le(Qt),hs=Le(Jt),fs=Le(en),lt=at?at.prototype:void 0,tn=lt?lt.valueOf:void 0,ui=lt?lt.toString:void 0;function $e(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var y=s[c];this.set(y[0],y[1])}}function ds(){this.__data__=Ze?Ze(null):{}}function ps(s){return this.has(s)&&delete this.__data__[s]}function gs(s){var c=this.__data__;if(Ze){var d=c[s];return d===r?void 0:d}return ae.call(c,s)?c[s]:void 0}function ms(s){var c=this.__data__;return Ze?c[s]!==void 0:ae.call(c,s)}function ys(s,c){var d=this.__data__;return d[s]=Ze&&c===void 0?r:c,this}$e.prototype.clear=ds,$e.prototype.delete=ps,$e.prototype.get=gs,$e.prototype.has=ms,$e.prototype.set=ys;function le(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var y=s[c];this.set(y[0],y[1])}}function bs(){this.__data__=[]}function vs(s){var c=this.__data__,d=ut(c,s);if(d<0)return!1;var y=c.length-1;return d==y?c.pop():os.call(c,d,1),!0}function ws(s){var c=this.__data__,d=ut(c,s);return d<0?void 0:c[d][1]}function xs(s){return ut(this.__data__,s)>-1}function _s(s,c){var d=this.__data__,y=ut(d,s);return y<0?d.push([s,c]):d[y][1]=c,this}le.prototype.clear=bs,le.prototype.delete=vs,le.prototype.get=ws,le.prototype.has=xs,le.prototype.set=_s;function ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var y=s[c];this.set(y[0],y[1])}}function As(){this.__data__={hash:new $e,map:new(Xe||le),string:new $e}}function Cs(s){return ht(this,s).delete(s)}function Ms(s){return ht(this,s).get(s)}function Ss(s){return ht(this,s).has(s)}function $s(s,c){return ht(this,s).set(s,c),this}ce.prototype.clear=As,ce.prototype.delete=Cs,ce.prototype.get=Ms,ce.prototype.has=Ss,ce.prototype.set=$s;function ct(s){var c=-1,d=s?s.length:0;for(this.__data__=new ce;++c<d;)this.add(s[c])}function Ls(s){return this.__data__.set(s,r),this}function Rs(s){return this.__data__.has(s)}ct.prototype.add=ct.prototype.push=Ls,ct.prototype.has=Rs;function ue(s){this.__data__=new le(s)}function Ts(){this.__data__=new le}function ks(s){return this.__data__.delete(s)}function Ds(s){return this.__data__.get(s)}function Es(s){return this.__data__.has(s)}function js(s,c){var d=this.__data__;if(d instanceof le){var y=d.__data__;if(!Xe||y.length<n-1)return y.push([s,c]),this;d=this.__data__=new ce(y)}return d.set(s,c),this}ue.prototype.clear=Ts,ue.prototype.delete=ks,ue.prototype.get=Ds,ue.prototype.has=Es,ue.prototype.set=js;function Bs(s,c){var d=he(s)||sn(s)?Xr(s.length,String):[],y=d.length,x=!!y;for(var w in s)ae.call(s,w)&&!(x&&(w=="length"||pi(w,y)))&&d.push(w);return d}function ut(s,c){for(var d=s.length;d--;)if(yi(s[d][0],c))return d;return-1}var Os=Js(Ns);function Ps(s,c,d,y,x){var w=-1,S=s.length;for(d||(d=so),x||(x=[]);++w<S;){var B=s[w];d(B)?Vr(x,B):x[x.length]=B}return x}var Is=eo();function Ns(s,c){return s&&Is(s,c,yt)}function hi(s,c){c=ft(c,s)?[c]:fi(c);for(var d=0,y=c.length;s!=null&&d<y;)s=s[dt(c[d++])];return d&&d==y?s:void 0}function Hs(s){return Pe.call(s)}function Fs(s,c){return s!=null&&c in Object(s)}function nn(s,c,d,y,x){return s===c?!0:s==null||c==null||!gt(s)&&!mt(c)?s!==s&&c!==c:zs(s,c,nn,d,y,x)}function zs(s,c,d,y,x,w){var S=he(s),B=he(c),O=h,H=h;S||(O=ve(s),O=O==u?_:O),B||(H=ve(c),H=H==u?_:H);var V=O==_&&!Yt(s),G=H==_&&!Yt(c),K=O==H;if(K&&!V)return w||(w=new ue),S||po(s)?di(s,c,d,y,x,w):to(s,c,O,d,y,x,w);if(!(x&a)){var ee=V&&ae.call(s,"__wrapped__"),te=G&&ae.call(c,"__wrapped__");if(ee||te){var we=ee?s.value():s,fe=te?c.value():c;return w||(w=new ue),d(we,fe,y,x,w)}}return K?(w||(w=new ue),no(s,c,d,y,x,w)):!1}function qs(s,c,d,y){var x=d.length,w=x;if(s==null)return!w;for(s=Object(s);x--;){var S=d[x];if(S[2]?S[1]!==s[S[0]]:!(S[0]in s))return!1}for(;++x<w;){S=d[x];var B=S[0],O=s[B],H=S[1];if(S[2]){if(O===void 0&&!(B in s))return!1}else{var V=new ue,G;if(!(G===void 0?nn(H,O,y,o|a,V):G))return!1}}return!0}function Ks(s){if(!gt(s)||ao(s))return!1;var c=bi(s)||Yt(s)?rs:zr;return c.test(Le(s))}function Us(s){return mt(s)&&on(s.length)&&!!E[Pe.call(s)]}function Ws(s){return typeof s=="function"?s:s==null?bo:typeof s=="object"?he(s)?Xs(s[0],s[1]):Ys(s):vo(s)}function Vs(s){if(!lo(s))return as(s);var c=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&c.push(d);return c}function Gs(s,c){var d=-1,y=pt(s)?Array(s.length):[];return Os(s,function(x,w,S){y[++d]=c(x,w,S)}),y}function Ys(s){var c=io(s);return c.length==1&&c[0][2]?mi(c[0][0],c[0][1]):function(d){return d===s||qs(d,s,c)}}function Xs(s,c){return ft(s)&&gi(c)?mi(dt(s),c):function(d){var y=mo(d,s);return y===void 0&&y===c?yo(d,s):nn(c,y,void 0,o|a)}}function Zs(s){return function(c){return hi(c,s)}}function Qs(s){if(typeof s=="string")return s;if(an(s))return ui?ui.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function fi(s){return he(s)?s:co(s)}function Js(s,c){return function(d,y){if(d==null)return d;if(!pt(d))return s(d,y);for(var x=d.length,w=-1,S=Object(d);++w<x&&y(S[w],w,S)!==!1;);return d}}function eo(s){return function(c,d,y){for(var x=-1,w=Object(c),S=y(c),B=S.length;B--;){var O=S[++x];if(d(w[O],O,w)===!1)break}return c}}function di(s,c,d,y,x,w){var S=x&a,B=s.length,O=c.length;if(B!=O&&!(S&&O>B))return!1;var H=w.get(s);if(H&&w.get(c))return H==c;var V=-1,G=!0,K=x&o?new ct:void 0;for(w.set(s,c),w.set(c,s);++V<B;){var ee=s[V],te=c[V];if(y)var we=S?y(te,ee,V,c,s,w):y(ee,te,V,s,c,w);if(we!==void 0){if(we)continue;G=!1;break}if(K){if(!Gr(c,function(fe,Re){if(!K.has(Re)&&(ee===fe||d(ee,fe,y,x,w)))return K.add(Re)})){G=!1;break}}else if(!(ee===te||d(ee,te,y,x,w))){G=!1;break}}return w.delete(s),w.delete(c),G}function to(s,c,d,y,x,w,S){switch(d){case D:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case oe:return!(s.byteLength!=c.byteLength||!y(new li(s),new li(c)));case f:case p:case C:return yi(+s,+c);case g:return s.name==c.name&&s.message==c.message;case L:case Z:return s==c+"";case b:var B=Jr;case j:var O=w&a;if(B||(B=ts),s.size!=c.size&&!O)return!1;var H=S.get(s);if(H)return H==c;w|=o,S.set(s,c);var V=di(B(s),B(c),y,x,w,S);return S.delete(s),V;case N:if(tn)return tn.call(s)==tn.call(c)}return!1}function no(s,c,d,y,x,w){var S=x&a,B=yt(s),O=B.length,H=yt(c),V=H.length;if(O!=V&&!S)return!1;for(var G=O;G--;){var K=B[G];if(!(S?K in c:ae.call(c,K)))return!1}var ee=w.get(s);if(ee&&w.get(c))return ee==c;var te=!0;w.set(s,c),w.set(c,s);for(var we=S;++G<O;){K=B[G];var fe=s[K],Re=c[K];if(y)var vi=S?y(Re,fe,K,c,s,w):y(fe,Re,K,s,c,w);if(!(vi===void 0?fe===Re||d(fe,Re,y,x,w):vi)){te=!1;break}we||(we=K=="constructor")}if(te&&!we){var bt=s.constructor,vt=c.constructor;bt!=vt&&"constructor"in s&&"constructor"in c&&!(typeof bt=="function"&&bt instanceof bt&&typeof vt=="function"&&vt instanceof vt)&&(te=!1)}return w.delete(s),w.delete(c),te}function ht(s,c){var d=s.__data__;return oo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function io(s){for(var c=yt(s),d=c.length;d--;){var y=c[d],x=s[y];c[d]=[y,x,gi(x)]}return c}function Ie(s,c){var d=Qr(s,c);return Ks(d)?d:void 0}var ve=Hs;(Zt&&ve(new Zt(new ArrayBuffer(1)))!=D||Xe&&ve(new Xe)!=b||Qt&&ve(Qt.resolve())!=$||Jt&&ve(new Jt)!=j||en&&ve(new en)!=me)&&(ve=function(s){var c=Pe.call(s),d=c==_?s.constructor:void 0,y=d?Le(d):void 0;if(y)switch(y){case ls:return D;case cs:return b;case us:return $;case hs:return j;case fs:return me}return c});function ro(s,c,d){c=ft(c,s)?[c]:fi(c);for(var y,x=-1,S=c.length;++x<S;){var w=dt(c[x]);if(!(y=s!=null&&d(s,w)))break;s=s[w]}if(y)return y;var S=s?s.length:0;return!!S&&on(S)&&pi(w,S)&&(he(s)||sn(s))}function so(s){return he(s)||sn(s)||!!(ci&&s&&s[ci])}function pi(s,c){return c=c??l,!!c&&(typeof s=="number"||qr.test(s))&&s>-1&&s%1==0&&s<c}function ft(s,c){if(he(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||an(s)?!0:Pr.test(s)||!Or.test(s)||c!=null&&s in Object(c)}function oo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function ao(s){return!!oi&&oi in s}function lo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||ot;return s===d}function gi(s){return s===s&&!gt(s)}function mi(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var co=rn(function(s){s=go(s);var c=[];return Ir.test(s)&&c.push(""),s.replace(Nr,function(d,y,x,w){c.push(x?w.replace(Fr,"$1"):y||d)}),c});function dt(s){if(typeof s=="string"||an(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Le(s){if(s!=null){try{return ai.call(s)}catch{}try{return s+""}catch{}}return""}function uo(s,c){return Ps(ho(s,c))}function ho(s,c){var d=he(s)?Wr:Gs;return d(s,Ws(c))}function rn(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(i);var d=function(){var y=arguments,x=c?c.apply(this,y):y[0],w=d.cache;if(w.has(x))return w.get(x);var S=s.apply(this,y);return d.cache=w.set(x,S),S};return d.cache=new(rn.Cache||ce),d}rn.Cache=ce;function yi(s,c){return s===c||s!==s&&c!==c}function sn(s){return fo(s)&&ae.call(s,"callee")&&(!ss.call(s,"callee")||Pe.call(s)==u)}var he=Array.isArray;function pt(s){return s!=null&&on(s.length)&&!bi(s)}function fo(s){return mt(s)&&pt(s)}function bi(s){var c=gt(s)?Pe.call(s):"";return c==m||c==v}function on(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function gt(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function mt(s){return!!s&&typeof s=="object"}function an(s){return typeof s=="symbol"||mt(s)&&Pe.call(s)==N}var po=si?Zr(si):Us;function go(s){return s==null?"":Qs(s)}function mo(s,c,d){var y=s==null?void 0:hi(s,c);return y===void 0?d:y}function yo(s,c){return s!=null&&ro(s,c,Fs)}function yt(s){return pt(s)?Bs(s):Vs(s)}function bo(s){return s}function vo(s){return ft(s)?Yr(dt(s)):Zs(s)}e.exports=uo})(Et,Et.exports);var Zc=Et.exports;const On=Ii(Zc);function Qc(e,t,n){let i=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{var p,g,m,v;const a={},l=b=>o.format==="date"?k(b).valueOf():parseFloat(b);t.forEach(b=>{var C,_;if(o.type==="range"){const $=z(o.key,b);if(Array.isArray($)){const L=[l($[0]),l($[1])];a.min=a.min!==void 0?Math.min(a.min,L[0]):L[0],a.max=a.max!==void 0?Math.max(a.max,L[1]):L[1]}else{const L=l($);a.min=a.min!==void 0?Math.min(a.min,L):L,a.max=a.max!==void 0?Math.max(a.max,L):L}return}o.type!=="text"&&(Array.isArray(b[o.key])?b[o.key].forEach($=>{a[$]=void 0}):o.type==="spatial"?(a.geometry=((C=o==null?void 0:o.state)==null?void 0:C.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(_=o.key)!=null&&_.includes(".")?Bn(On(n.items,o.key)).filter($=>$).forEach($=>{a[$]=void 0}):a[b[o.key]]=void 0)});const u=o.key||o.keys.join("|"),h=n.filters[u];let f;if(o.state)if(o.type==="range"){const b=j=>o.format==="date"?k(j).valueOf():parseFloat(j),C=b(o.state.min),_=b(o.state.max),$=b(o.min??a.min),L=b(o.max??a.max);o.format==="date"?f=!k(C).isSame(k($),"day")||!k(_).isSame(k(L),"day")||void 0:f=C!==$||_!==L||void 0}else f=Object.values(o.state).some(b=>b)||void 0;if(n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:f||(h==null?void 0:h.dirty),key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),o.type==="range"&&n.filters[u].dirty){const b=$=>o.format==="date"?k($).valueOf():parseFloat($),C=b(((p=o.state)==null?void 0:p.min)!==void 0?o.state.min:(g=h==null?void 0:h.state)==null?void 0:g.min),_=b(((m=o.state)==null?void 0:m.max)!==void 0?o.state.max:(v=h==null?void 0:h.state)==null?void 0:v.max);n.filters[u].stringifiedState=o.format==="date"?`${k(C).format(qe)} - ${k(_).format(qe)}`:`${C} - ${_}`}if(n.filters[u].state=Object.assign({},a,(h==null?void 0:h.state)||{},o.state),o.type==="text"&&(n.filters[u].stringifiedState=Object.values(n.filters[u].state).find(Boolean)),o.type==="range"&&o.state){const b=C=>o.format==="date"?k(C).valueOf():parseFloat(C);o.state.min!==void 0&&(n.filters[u].state.min=b(o.state.min)),o.state.max!==void 0&&(n.filters[u].state.max=b(o.state.max))}}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(i=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).filter(o=>o).sort((o,a)=>o.localeCompare(a)));const r=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{r.includes(a)||r.push(a)}):(o.type==="select"||o.type==="multiselect")&&(r.includes(o.key)||r.push(o.key))}),Cl(t,Object.assign({keys:r},e.fuseConfig)),i}async function Jc(e,t,n){let i;n.externalFilter?i=await Ll(t,n.filters,e):i=await Ml(t,n.filters,e),n.results=n.sortResults(i,{isExternalResult:!!n.externalFilter})}function eu(e,t,n){const i=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return A`<eox-itemfilter-text
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
      ></eox-itemfilter-text>`;case"multiselect":case"select":return A`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${i}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Bn(On(n.items,e.key)).filter(r=>r)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return A`
        <eox-itemfilter-range
          .inlineMode=${n.inlineMode||!1}
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Bn(On(n.items,e.key)).filter(r=>r)}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return A`
        <eox-itemfilter-spatial
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return A``}}function tu(e,t,n={}){var a;const{resultSorting:i}=t;if(i===!1)return e;if(i===void 0)return n.isExternalResult||(a=t.fuseConfig)!=null&&a.shouldSort?e:[...e].sort((l,u)=>{const h=z(t.titleProperty,l)||"",f=z(t.titleProperty,u)||"";return h.toString().localeCompare(f.toString())});if(typeof i=="function")return[...e].sort(i);const r=typeof i=="string"?i:i.key,o=typeof i=="object"&&i.order==="desc"?-1:1;return r?[...e].sort((l,u)=>{const h=z(r,l)||"",f=z(r,u)||"";return h.toString().localeCompare(f.toString())*o}):e}function nu(e,t,n){return A`
    ${I(e.dirty,()=>A`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${i=>{const r=i.target.parentElement.querySelector("[slot=filter]");r&&typeof r.reset=="function"&&r.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":A`
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
  `}function iu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var st,ke,Y,Ke,Er,jr;class ru extends se{constructor(){super();U(this,Ke);U(this,st,[]);U(this,ke,[]);U(this,Y,va);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Nt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Ne(this,Y,un.reduce((n,i)=>(n[i]=this[i],n),{})),Ne(this,st,Qc(F(this,Y),F(this,ke),this)),this.search()}async searchHandler(){await Jc(F(this,Y),F(this,ke),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n,i){return tu(n,F(this,Y),i)}resetFilters(){iu(this)}firstUpdated(n){var r;let i={};un.map(o=>{i={...i,[o]:this[o]}}),Ne(this,Y,i),Ne(this,ke,((r=this.items)==null?void 0:r.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){var o;let i=!1,r=!1;un.forEach(a=>{n.has(a)&&(F(this,Y)[a]=this[a],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(a)?i=!0:a==="resultSorting"&&(r=!0))}),i?(Ne(this,ke,((o=this.items)==null?void 0:o.map((a,l)=>Object.assign({id:a[this.idProperty]||`item-${l}`},a)))||[]),this.apply()):r&&this.search()}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return A`
      <style>
        ${Ro}
        ${!this.unstyled&&Nn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":ne}
        @submit="${i=>i.preventDefault()}"
      >
        ${I(this.filterProperties,()=>A`
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
                  ${I(!this.inlineMode,()=>A`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${I(!this.inlineMode&&F(this,Y).filterProperties&&!this.inlineMode&&F(this,Y).filterProperties&&Sn(this.filters),()=>A`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?ne:A`
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
                      ${It(Object.values(this.filters),(i,r)=>A` <li
                            class="no-padding"
                            style=${this.inlineMode&&i.inlineSearch&&i.type==="text"?"display: none":ne}
                          >
                            <eox-itemfilter-expandcontainer
                              .filterObject=${i}
                              @details-toggled=${o=>or(o,F(this,Y),this)}
                              data-details="${i.key}"
                            >
                              ${R(this,Ke,jr).call(this,i,Bi(r,1))}
                              ${R(this,Ke,Er).call(this,i,Bi(r,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${I(((n=F(this,Y))==null?void 0:n.showResults)&&this.results,()=>A`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${F(this,Y)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${F(this,st)}
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
    `}}st=new WeakMap,ke=new WeakMap,Y=new WeakMap,Ke=new WeakSet,Er=function(n,i){return eu(n,i,this)},jr=function(n,i){return nu(n,i,this)};customElements.define("eox-itemfilter",ru);export{ru as EOxItemFilter};
