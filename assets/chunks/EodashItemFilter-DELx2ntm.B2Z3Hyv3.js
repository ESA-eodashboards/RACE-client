var xo=Object.defineProperty;var lr=t=>{throw TypeError(t)};var _o=(t,e,n)=>e in t?xo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xt=(t,e,n)=>_o(t,typeof e!="symbol"?e+"":e,n),sn=(t,e,n)=>e.has(t)||lr("Cannot "+n);var K=(t,e,n)=>(sn(t,e,"read from private field"),n?n.call(t):e.get(t)),U=(t,e,n)=>e.has(t)?lr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),we=(t,e,n,r)=>(sn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),C=(t,e,n)=>(sn(t,e,"access private method"),n);import{u as Mo,a as So,W as cr}from"./eo-dash.PV-gecK0.js";import{r as it,E as xt,x as L}from"./lit-element.Deg-YTNa.js";import{a as ve,o as Ne}from"./unsafe-html.DNUn9bWx.js";import{n as N}from"./when.BR7zwNJC.js";import{s as Lo}from"./directive.CYRYfAMD.js";import{d as Jt,c as $o}from"./repeat.vdkOBBOK.js";import{_ as Be,s as Co,a as Ao}from"./index.H62imwlA.js";import{s as Dt,u as ur}from"./static.3li6NsVA.js";import"./toolcool-range-slider.min.Ch_Z5G3w.js";import{o as Ro}from"./orient2d.DArCjZZA.js";import{f as $e,a as un,b as Eo,m as Po,l as To}from"./index.BSpBAx16.js";import{c as bt,g as Rr}from"./commonjsHelpers.BosuxZz1.js";import{h as ko,p as jo,c as Oo,o as Do,j as fr,t as hr,K as Io,k as No}from"./framework.CfLZVW8t.js";const Bo=`
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
  overflow-y: auto;
}
details {
  width: 100%;
}
`,ee=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
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
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
}
* {
  font-family: Roboto, sans-serif;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
}
eox-itemfilter-container {
  min-width: 200px;
  display: var(--filter-display);
}
eox-itemfilter-results {
  flex-grow: 1;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  margin-left: auto;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
  padding: 0;
  border: none;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
  display: flex;
  justify-content: space-between;
}
ul#results .result-action {
  display: flex;
  align-items: center;
  height: fit-content;
  line-height: 1;
  opacity: .5;
  transition: opacity .3s ease-in-out;
}
ul#results .result-action:hover {
  opacity: 1;
}
ul#results .highlighted .result-action > * {
  filter: invert(1);
}
eox-layout {
  padding: .5rem var(--padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
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
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
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
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
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
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
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
}
.select-overflow {
  max-height: 185px;
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
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
input {
  background-color: var(--background-color);
}
`;var je,Er;class Ho extends it{constructor(){super();U(this,je);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return L`
      <style>
        ${!this.unstyled&&ee}
      </style>

      ${N(this.filterObject.featured,()=>L`<slot name="filter"></slot>`,()=>L`<details
            @toggle="${C(this,je,Er)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||xt}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}je=new WeakSet,Er=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Ho);function dt(t){return Array.isArray?Array.isArray(t):kr(t)==="[object Array]"}function qo(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Uo(t){return t==null?"":qo(t)}function et(t){return typeof t=="string"}function Pr(t){return typeof t=="number"}function Wo(t){return t===!0||t===!1||Go(t)&&kr(t)=="[object Boolean]"}function Tr(t){return typeof t=="object"}function Go(t){return Tr(t)&&t!==null}function V(t){return t!=null}function on(t){return!t.trim().length}function kr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ko="Incorrect 'index' type",Vo=t=>`Invalid value for key ${t}`,zo=t=>`Pattern length exceeds max of ${t}.`,Yo=t=>`Missing ${t} property in key`,Xo=t=>`Property 'weight' in key '${t}' must be a positive integer`,dr=Object.prototype.hasOwnProperty;class Jo{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=jr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function jr(t){let e=null,n=null,r=null,i=1,o=null;if(et(t)||dt(t))r=t,e=pr(t),n=fn(t);else{if(!dr.call(t,"name"))throw new Error(Yo("name"));const a=t.name;if(r=a,dr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Xo(a));e=pr(a),n=fn(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function pr(t){return dt(t)?t:t.split(".")}function fn(t){return dt(t)?t.join("."):t}function Fo(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(V(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!V(f))return;if(l===a.length-1&&(et(f)||Pr(f)||Wo(f)))n.push(Uo(f));else if(dt(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(t,et(e)?e.split("."):e,0),r?n:n[0]}const Zo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Qo={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ta={location:0,threshold:.6,distance:100},ea={useExtendedSearch:!1,getFn:Fo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...Qo,...Zo,...ta,...ea};const na=/[^ ]+/g;function ra(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(na).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class En{constructor({getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){this.norm=ra(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,et(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();et(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!V(e)||on(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(V(a)){if(dt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(V(h))if(et(h)&&!on(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else dt(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(et(a)&&!on(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Or(t,e,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const i=new En({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(jr)),i.setSources(e),i.create(),i}function ia(t,{getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new En({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function xe(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function sa(t=[],e=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Ct=32;function oa(t,e,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:u=_.includeMatches,ignoreLocation:f=_.ignoreLocation}={}){if(e.length>Ct)throw new Error(zo(Ct));const h=e.length,p=t.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,$=x?Array(p):[];let S;for(;(S=t.indexOf(e,b))>-1;){let D=xe(e,{currentLocation:S,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(D,g),b=S+h,x){let Z=0;for(;Z<h;)$[S+Z]=1,Z+=1}}b=-1;let E=[],A=1,T=h+p;const j=1<<h-1;for(let D=0;D<h;D+=1){let Z=0,W=T;for(;Z<W;)xe(e,{errors:D,currentLocation:y+W,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Z=W:T=W,W=Math.floor((T-Z)/2+Z);T=W;let re=Math.max(1,y-W+1),Vt=a?p:Math.min(y+W,p)+h,pt=Array(Vt+2);pt[Vt+1]=(1<<D)-1;for(let G=Vt;G>=re;G-=1){let kt=G-1,ie=n[t.charAt(kt)];if(x&&($[kt]=+!!ie),pt[G]=(pt[G+1]<<1|1)&ie,D&&(pt[G]|=(E[G+1]|E[G])<<1|1|E[G+1]),pt[G]&j&&(A=xe(e,{errors:D,currentLocation:kt,expectedLocation:y,distance:i,ignoreLocation:f}),A<=g)){if(g=A,b=kt,b<=y)break;re=Math.max(1,2*y-b)}}if(xe(e,{errors:D+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;E=pt}const ot={isMatch:b>=0,score:Math.max(.001,A)};if(x){const D=sa($,l);D.length?u&&(ot.indices=D):ot.isMatch=!1}return ot}function aa(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Dr{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:aa(y),startIndex:g})},p=this.pattern.length;if(p>Ct){let y=0;const g=p%Ct,b=p-g;for(;y<b;)h(this.pattern.substr(y,Ct),y),y+=Ct;if(g){const x=p-Ct;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,e.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:$})=>{const{isMatch:S,score:E,indices:A}=oa(e,b,x,{location:i+$,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});S&&(y=!0),p+=E,S&&A&&(h=[...h,...A])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _t{constructor(e){this.pattern=e}static isMultiMatch(e){return gr(e,this.multiRegex)}static isSingleMatch(e){return gr(e,this.singleRegex)}search(){}}function gr(t,e){const n=t.match(e);return n?n[1]:null}class la extends _t{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ca extends _t{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ua extends _t{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class fa extends _t{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ha extends _t{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class da extends _t{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ir extends _t{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){super(e),this._bitapSearch=new Dr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Nr extends _t{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const hn=[la,Nr,ua,fa,da,ha,ca,Ir],yr=hn.length,pa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ga="|";function ya(t,e={}){return t.split(ga).map(n=>{let r=n.trim().split(pa).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<yr;){const h=hn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,e)),u=!0)}if(!u)for(f=-1;++f<yr;){const h=hn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,e));break}}}return i})}const ma=new Set([Ir.type,Nr.type]);class ba{constructor(e,{isCaseSensitive:n=_.isCaseSensitive,includeMatches:r=_.includeMatches,minMatchCharLength:i=_.minMatchCharLength,ignoreLocation:o=_.ignoreLocation,findAllMatches:a=_.findAllMatches,location:l=_.location,threshold:u=_.threshold,distance:f=_.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=ya(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:$}=g.search(e);if(b){if(o+=1,l+=$,r){const S=g.constructor.type;ma.has(S)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const dn=[];function wa(...t){dn.push(...t)}function pn(t,e){for(let n=0,r=dn.length;n<r;n+=1){let i=dn[n];if(i.condition(t,e))return new i(t,e)}return new Dr(t,e)}const Ce={AND:"$and",OR:"$or"},gn={PATH:"$path",PATTERN:"$val"},yn=t=>!!(t[Ce.AND]||t[Ce.OR]),va=t=>!!t[gn.PATH],xa=t=>!dt(t)&&Tr(t)&&!yn(t),mr=t=>({[Ce.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Br(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=va(i);if(!a&&o.length>1&&!yn(i))return r(mr(i));if(xa(i)){const u=a?i[gn.PATH]:o[0],f=a?i[gn.PATTERN]:i[u];if(!et(f))throw new Error(Vo(u));const h={keyId:fn(u),pattern:f};return n&&(h.searcher=pn(f,e)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];dt(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return yn(t)||(t=mr(t)),r(t)}function _a(t,{ignoreFieldNorm:e=_.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function Ma(t,e){const n=t.matches;e.matches=[],V(n)&&n.forEach(r=>{if(!V(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function Sa(t,e){e.score=t.score}function La(t,e,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const i=[];return n&&i.push(Ma),r&&i.push(Sa),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Mt{constructor(e,n={},r){this.options={..._,...n},this.options.useExtendedSearch,this._keyStore=new Jo(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof En))throw new Error(Ko);this._myIndex=n||Or(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){V(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=et(e)?et(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return _a(u,{ignoreFieldNorm:l}),o&&u.sort(a),Pr(n)&&n>-1&&(u=u.slice(0,n)),La(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=pn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=Br(e,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===Ce.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(V(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=pn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!V(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!V(n))return[];let i=[];if(dt(n))n.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}Mt.version="7.0.0";Mt.createIndex=Or;Mt.parseIndex=ia;Mt.config=_;Mt.parseQuery=Br;wa(ba);function Hr(t,e){const n=new Mt(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function $a(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const mn=Math.min,It=Math.max,Ae=Math.round,_e=Math.floor,nt=t=>({x:t,y:t});function qr(t){return t.split("-")[0]}function Ca(t){return t.split("-")[1]}function Aa(t){return t==="x"?"y":"x"}function Ra(t){return t==="y"?"height":"width"}function Ur(t){return["top","bottom"].includes(qr(t))?"y":"x"}function Ea(t){return Aa(Ur(t))}function Wr(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function br(t,e,n){let{reference:r,floating:i}=t;const o=Ur(e),a=Ea(e),l=Ra(a),u=qr(e),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Ca(e)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Pa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=br(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:$,fn:S}=l[x],{x:E,y:A,data:T,reset:j}=await S({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:t,floating:e}});h=E??h,p=A??p,g={...g,[$]:{...g[$],...T}},j&&b<=50&&(b++,typeof j=="object"&&(j.placement&&(y=j.placement),j.rects&&(f=j.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):j.rects),{x:h,y:p}=br(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function He(){return typeof window<"u"}function Wt(t){return Gr(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(Gr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Gr(t){return He()?t instanceof Node||t instanceof z(t).Node:!1}function Q(t){return He()?t instanceof Element||t instanceof z(t).Element:!1}function rt(t){return He()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function wr(t){return!He()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function ne(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function Ta(t){return["table","td","th"].includes(Wt(t))}function qe(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Pn(t){const e=Tn(),n=Q(t)?tt(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function ka(t){let e=wt(t);for(;rt(e)&&!Ht(e);){if(Pn(e))return e;if(qe(e))return null;e=wt(e)}return null}function Tn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ht(t){return["html","body","#document"].includes(Wt(t))}function tt(t){return z(t).getComputedStyle(t)}function Ue(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(Wt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||wr(t)&&t.host||st(t);return wr(e)?e.host:e}function Kr(t){const e=wt(t);return Ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ne(e)?e:Kr(e)}function Ft(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Kr(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=z(i);if(o){const l=bn(a);return e.concat(a,a.visualViewport||[],ne(i)?i:[],l&&n?Ft(l):[])}return e.concat(i,Ft(i,[],n))}function bn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Vr(t){const e=tt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=rt(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Ae(n)!==o||Ae(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function kn(t){return Q(t)?t:t.contextElement}function Nt(t){const e=kn(t);if(!rt(e))return nt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Vr(e);let a=(o?Ae(n.width):n.width)/r,l=(o?Ae(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const ja=nt(0);function zr(t){const e=z(t);return!Tn()||!e.visualViewport?ja:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Oa(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==z(t)?!1:e}function At(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=kn(t);let a=nt(1);e&&(r?Q(r)&&(a=Nt(r)):a=Nt(t));const l=Oa(o,n,r)?zr(o):nt(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=z(o),g=r&&Q(r)?z(r):r;let b=y,x=bn(b);for(;x&&r&&g!==b;){const $=Nt(x),S=x.getBoundingClientRect(),E=tt(x),A=S.left+(x.clientLeft+parseFloat(E.paddingLeft))*$.x,T=S.top+(x.clientTop+parseFloat(E.paddingTop))*$.y;u*=$.x,f*=$.y,h*=$.x,p*=$.y,u+=A,f+=T,b=z(x),x=bn(b)}}return Wr({width:h,height:p,x:u,y:f})}function jn(t,e){const n=Ue(t).scrollLeft;return e?e.left+n:At(st(t)).left+n}function Yr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:jn(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function Da(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=st(r),l=e?qe(e.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=nt(1);const h=nt(0),p=rt(r);if((p||!p&&!o)&&((Wt(r)!=="body"||ne(a))&&(u=Ue(r)),rt(r))){const g=At(r);f=Nt(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?Yr(a,u,!0):nt(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Ia(t){return Array.from(t.getClientRects())}function Na(t){const e=st(t),n=Ue(t),r=t.ownerDocument.body,i=It(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=It(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+jn(t);const l=-n.scrollTop;return tt(r).direction==="rtl"&&(a+=It(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Ba(t,e){const n=z(t),r=st(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Tn();(!f||f&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Ha(t,e){const n=At(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=rt(t)?Nt(t):nt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function vr(t,e,n){let r;if(e==="viewport")r=Ba(t,n);else if(e==="document")r=Na(st(t));else if(Q(e))r=Ha(e,n);else{const i=zr(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Wr(r)}function Xr(t,e){const n=wt(t);return n===e||!Q(n)||Ht(n)?!1:tt(n).position==="fixed"||Xr(n,e)}function qa(t,e){const n=e.get(t);if(n)return n;let r=Ft(t,[],!1).filter(l=>Q(l)&&Wt(l)!=="body"),i=null;const o=tt(t).position==="fixed";let a=o?wt(t):t;for(;Q(a)&&!Ht(a);){const l=tt(a),u=Pn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ne(a)&&!u&&Xr(t,a))?r=r.filter(h=>h!==a):i=l,a=wt(a)}return e.set(t,r),r}function Ua(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?qe(e)?[]:qa(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=vr(e,h,i);return f.top=It(p.top,f.top),f.right=mn(p.right,f.right),f.bottom=mn(p.bottom,f.bottom),f.left=It(p.left,f.left),f},vr(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Wa(t){const{width:e,height:n}=Vr(t);return{width:e,height:n}}function Ga(t,e,n){const r=rt(e),i=st(e),o=n==="fixed",a=At(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const u=nt(0);if(r||!r&&!o)if((Wt(e)!=="body"||ne(i))&&(l=Ue(e)),r){const y=At(e,!0,o,e);u.x=y.x+e.clientLeft,u.y=y.y+e.clientTop}else i&&(u.x=jn(i));const f=i&&!r&&!o?Yr(i,l):nt(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function an(t){return tt(t).position==="static"}function xr(t,e){if(!rt(t)||tt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return st(t)===n&&(n=n.ownerDocument.body),n}function Jr(t,e){const n=z(t);if(qe(t))return n;if(!rt(t)){let i=wt(t);for(;i&&!Ht(i);){if(Q(i)&&!an(i))return i;i=wt(i)}return n}let r=xr(t,e);for(;r&&Ta(r)&&an(r);)r=xr(r,e);return r&&Ht(r)&&an(r)&&!Pn(r)?n:r||ka(t)||n}const Ka=async function(t){const e=this.getOffsetParent||Jr,n=this.getDimensions,r=await n(t.floating);return{reference:Ga(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Va(t){return tt(t).direction==="rtl"}const za={convertOffsetParentRelativeRectToViewportRelativeRect:Da,getDocumentElement:st,getClippingRect:Ua,getOffsetParent:Jr,getElementRects:Ka,getClientRects:Ia,getDimensions:Wa,getScale:Nt,isElement:Q,isRTL:Va};function Fr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ya(t,e){let n=null,r;const i=st(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||e(),!y||!g)return;const b=_e(p),x=_e(i.clientWidth-(h+y)),$=_e(i.clientHeight-(p+g)),S=_e(h),A={rootMargin:-b+"px "+-x+"px "+-$+"px "+-S+"px",threshold:It(0,mn(1,u))||1};let T=!0;function j(ot){const D=ot[0].intersectionRatio;if(D!==u){if(!T)return a();D?a(!1,D):r=setTimeout(()=>{a(!1,1e-7)},1e3)}D===1&&!Fr(f,t.getBoundingClientRect())&&a(),T=!1}try{n=new IntersectionObserver(j,{...A,root:i.ownerDocument})}catch{n=new IntersectionObserver(j,A)}n.observe(t)}return a(!0),o}function Xa(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=kn(t),h=i||o?[...f?Ft(f):[],...Ft(e)]:[];h.forEach(S=>{i&&S.addEventListener("scroll",n,{passive:!0}),o&&S.addEventListener("resize",n)});const p=f&&l?Ya(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(S=>{let[E]=S;E&&E.target===f&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var A;(A=g)==null||A.observe(e)})),n()}),f&&!u&&g.observe(f),g.observe(e));let b,x=u?At(t):null;u&&$();function $(){const S=At(t);x&&!Fr(x,S)&&n(),x=S,b=requestAnimationFrame($)}return n(),()=>{var S;h.forEach(E=>{i&&E.removeEventListener("scroll",n),o&&E.removeEventListener("resize",n)}),p==null||p(),(S=g)==null||S.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Ja=(t,e,n)=>{const r=new Map,i={platform:za,...n},o={...i.platform,_c:r};return Pa(t,e,{...i,platform:o})};function Fa(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Xa(e,n,()=>{n.matches(":popover-open")&&Ja(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Zr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Hr({target:{value:""}},t)}function Za(t,e){e.inlineMode&&t.stopPropagation()}function Qa(t){t.inlineMode&&(t.showDropdown=!0)}function tl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function el(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Zr(e),e.showDropdown=!1)}function nl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Zr(e),e.showDropdown=!1)}function rl(t,e){var n,r,i=0,o,a,l,u,f,h,p,y=t[0],g=t[1],b=e.length;for(n=0;n<b;n++){r=0;var x=e[n],$=x.length-1;if(h=x[0],h[0]!==x[$][0]&&h[1]!==x[$][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<$;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=Ro(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Qr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function il(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function qt(t){return t.type==="Feature"?t.geometry:t}function F(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Qr(t),i=qt(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&sl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=rl(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function sl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class ti{constructor(e=[],n=ol){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function ol(t,e){return t<e?-1:t>e?1:0}function ei(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function al(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class _r{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function ll(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)Mr(n[r],e)}else Mr(t,e)}let Me=0,Se=0,Le=0;function Mr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Se=Se+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new _r(a,Me,Se,Le),h=new _r(l,Me,Se,Le+1);f.otherEvent=h,h.otherEvent=f,ei(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=l,Le=Le+1}}Me=Me+1}class cl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function ul(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),$=r+g*(o-r);return[x,$]}return!1}function fl(t,e){e=e||!1;const n=[],r=new ti([],al);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new cl(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=ul(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function hl(t,e){const n=new ti([],ei);return ll(t,n),fl(n,e)}var dl=hl;function On(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push($e(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push($e(e));const a=dl(un(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return un(l.map(u=>Eo(u)))}function ni(t,e,n){if(t!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=t.type,b=g==="FeatureCollection",x=g==="Feature",$=b?t.features.length:1,S=0;S<$;S++){f=b?t.features[S].geometry:x?t.geometry:t,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var E=0;E<l;E++){var A=0,T=0;if(a=y?f.geometries[E]:f,a!==null){u=a.coordinates;var j=a.type;switch(h=0,j){case null:break;case"Point":if(e(u,p,S,A,T)===!1)return!1;p++,A++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],p,S,A,T)===!1)return!1;p++,j==="MultiPoint"&&A++}j==="LineString"&&A++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],p,S,A,T)===!1)return!1;p++}j==="MultiLineString"&&A++,j==="Polygon"&&T++}j==="Polygon"&&A++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(T=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(e(u[r][i][o],p,S,A,T)===!1)return!1;p++}T++}A++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ni(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function pl(t,e){var n,r,i,o,a,l,u,f,h,p,y=0,g=t.type==="FeatureCollection",b=t.type==="Feature",x=g?t.features.length:1;for(n=0;n<x;n++){for(l=g?t.features[n].geometry:b?t.geometry:t,f=g?t.features[n].properties:b?t.properties:{},h=g?t.features[n].bbox:b?t.bbox:void 0,p=g?t.features[n].id:b?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(e(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Re(t,e){pl(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e($e(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(e($e(p,i),r,f)===!1)return!1}})}function wn(t,e={}){const n=qt(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return gl(n,e);case"MultiPolygon":return yl(n,e);default:throw new Error("invalid poly")}}function gl(t,e={}){const r=qt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return ri(r,i)}function yl(t,e={}){const r=qt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(ri(a,i))}),un(o)}function ri(t,e){return t.length>1?Po(t,e):To(t[0],e)}function ml(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Re(t,i=>{Re(e,o=>{if(r===!1)return!1;r=bl(i.geometry,o.geometry,n)})}),r}function bl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!_l(t.coordinates,e.coordinates);case"LineString":return!Sr(e,t);case"Polygon":return!F(t,e)}break;case"LineString":switch(e.type){case"Point":return!Sr(t,e);case"LineString":return!wl(t,e,n);case"Polygon":return!Lr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!F(e,t);case"LineString":return!Lr(t,e,n);case"Polygon":return!vl(e,t,n)}}return!1}function Sr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(xl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function wl(t,e,n){return On(t,e,{ignoreSelfIntersections:n}).features.length>0}function Lr(t,e,n){for(const i of e.coordinates)if(F(i,t))return!0;return On(e,wn(t),{ignoreSelfIntersections:n}).features.length>0}function vl(t,e,n){for(const i of t.coordinates[0])if(F(i,e))return!0;for(const i of e.coordinates[0])if(F(i,t))return!0;return On(wn(t),wn(e),{ignoreSelfIntersections:n}).features.length>0}function xl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function _l(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ml(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Re(t,i=>{Re(e,o=>{if(r===!0)return!0;r=!ml(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var Sl=Ml;function Ee(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return ni(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Pe(t,e,n={}){const r=Qr(t),i=il(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),Ll(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Ll(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],u=t[1],f=e[0],h=e[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function $l(t,e){var n=qt(t),r=qt(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Cl(n,r);case"LineString":return Pe(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return F(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Al(n,r);case"LineString":return Rl(n,r);case"Polygon":case"MultiPolygon":return El(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Pl(n,r);case"Polygon":case"MultiPolygon":return Tl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return kl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Cl(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(si(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Al(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)si(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Rl(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Pe(t.coordinates[r],e))return!1;n||(n=Pe(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function El(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=F(t.coordinates[i],e),!r){n=!1;break}r=F(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function Pl(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Pe(t.coordinates[n],e))return!1;return!0}function Tl(t,e){var n=Ee(e),r=Ee(t);if(!ii(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!F(t.coordinates[o],e))return!1;if(i||(i=F(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=jl(t.coordinates[o],t.coordinates[o+1]);i=F(a,e,{ignoreBoundary:!0})}}return i}function kl(t,e){var n=Ee(t),r=Ee(e);if(!ii(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!F(t.coordinates[0][i],e))return!1;return!0}function ii(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function si(t,e){return t[0]===e[0]&&t[1]===e[1]}function jl(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Ol=$l;const Dl=(t,e)=>e?Sl(t,e):!0,Il=(t,e)=>e?Ol(t,e):!0;function Nl(t,e="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let oi;const Bl=(t,e)=>{oi=new Mt(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Hl=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=oi.search(l);i=n.enableHighlighting?Nl(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Jt(b).unix():b,g=Zt(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Zt(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Il(p,a[h].geometry):Dl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function ql(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function We(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function $r(t,e){return t*2+e}function Ul(t){return Object.keys(t).map(e=>({title:L`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function vn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Wl(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function ai(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Zt(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var R,li,xn,_n,ci,Mn,Sn,ui,Ln,fi,hi;class Gl extends it{constructor(){super();U(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=C(this,R,ci).bind(this),this._handleKeyDown=C(this,R,Mn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&C(this,R,xn).call(this)}disconnectedCallback(){this.inlineMode&&C(this,R,_n).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?C(this,R,xn).call(this):C(this,R,_n).call(this))}render(){return L`
      <style>
        ${!this.unstyled&&ee}
      </style>
      ${this.inlineMode?L`
            <div
              class="inline-container-wrapper"
              @click="${C(this,R,Sn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Ul(this.filters)}
                      .controller=${{remove:n=>C(this,R,fi).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${N(vn(this.filters),()=>L`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${vn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${C(this,R,Sn)}"
                    @focus="${C(this,R,ui)}"
                    @input="${C(this,R,hi)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${C(this,R,Mn)}"
                  @click="${C(this,R,Ln)}"
                  @focus="${C(this,R,Ln)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:L`<slot name="section"></slot>`}
    `}}R=new WeakSet,li=function(){setTimeout(()=>this._overlayCleanup=Fa(this))},xn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),C(this,R,li).call(this)},_n=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ci=function(n){nl(n,this)},Mn=function(n){el(n,this)},Sn=function(n){tl(n,this)},ui=function(){Qa(this)},Ln=function(n){Za(n,this)},fi=function(n){$a(n,this)},hi=function(n){Hr(n,this)};customElements.define("eox-itemfilter-container",Gl);function Kl(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",We(t.filterObject),t.requestUpdate()}function Vl(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const $n="ddd, D MMM YYYY HH:mm:ss";function zl(t){if(t.filterObject=We(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Yl(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Jt.unix(n).format($n)} - ${Jt.unix(r).format($n)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Xl(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?Jt.unix(i).format($n):i;return L`<div class="range-${e}">${o}</div>`}function Jl(t){Fl(-1,t),We(t.filterObject),t.requestUpdate()}function Fl(t,e){e.selectedItems=[],Dn(e),pi(e)}function di(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),Dn(e),pi(e)}function Zl(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function Ql(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&di(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function tc(t,e){(t.has("suggestions")||t.has("query"))&&Dn(e)}function ec(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return e.sort(n).map(i=>i)}function Dn(t){var n,r,i;let e;t.query&&(e=new Mt(t.suggestions,{threshold:.4}).search(t.query).map(a=>a.item)),t.filteredSuggestions=ec(t,e||t.suggestions),(n=t.filterObject)!=null&&n.filterKeys&&(t.filteredSuggestions=(r=t.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),t.filterObject.state=(i=t.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function pi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function nc(t){We(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function rc(t){t.renderRoot.querySelector("#eox-map").innerHTML="",gi(t)}function ic(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function gi(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&sc(t.geometry),r=ql(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function sc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var Oe;class oc extends it{constructor(){super();U(this,Oe,()=>{Vl(this)});Xt(this,"debouncedInputHandler",Be(K(this,Oe),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Kl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return L`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
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
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}Oe=new WeakMap;customElements.define("eox-itemfilter-text",oc);function ac(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}function lc(t,e){return L`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||xt}
    >
      <summary>
        <span class="title">
          ${t}
          <span class="count"
            >${e.aggregateResults(e.results,t).length}</span
          >
        </span>
      </summary>
      <div>
        ${yi(e,t)}
      </div>
    </details>
  `}function yi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xt};return ur`
    ${t.resultType==="cards"?Dt("<eox-layout fill-grid>"):Dt("<ul>")}
      ${$o(r,a=>a.id,a=>ur`
        ${t.resultType==="cards"?Dt("<eox-layout-item"):Dt("<li")}
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${N(i.subTitleProperty||i.imageProperty,()=>L`
                  ${Zt(i.imageProperty,a)?L`
                        <img
                          class="image"
                          src="${Zt(i.imageProperty,a)}"
                        />
                      `:L`
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
                  <div class="title-container">
                    <span class="title"
                      >${ve(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${ve(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>L`
                  <span class="title"
                    >${ve(a[i.titleProperty])}</span
                  >
                `)}
            </span>
            ${N(t.enableResultAction,()=>L`
                <span
                  class="result-action"
                  @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >${ve(t.resultActionIcon)}</span
                >
              `)}
          </li>
        `)}
    ${t.resultType==="cards"?Dt("</eox-layout>"):Dt("</ul>")}
  `}var Et,Cn,mi;class cc extends it{constructor(){super();U(this,Et);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return ac(n,r,this)}createRenderRoot(){return this}handleAccordion(n){ai(n,this.config,this)}render(){return L`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${N(this.results.length<1,()=>L`<small class="no-results">No matching items</small>`,()=>xt)}
          <ul id="results" part="results">
            ${N(this.config.aggregateResults,()=>Ne(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>L`${N(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>L`<div style="margin-left: -8px">
                          ${C(this,Et,Cn).call(this,n)}
                        </div>`,()=>C(this,Et,mi).call(this,n))}`),()=>C(this,Et,Cn).call(this))}
          </ul>
        </div>
      </section>
    `}}Et=new WeakSet,Cn=function(n){return yi(this,n)},mi=function(n){return lc(n,this)};customElements.define("eox-itemfilter-results",cc);var vt,wi,vi,xi;class bi extends it{constructor(){super();U(this,vt);Xt(this,"debouncedInputHandler",Be(C(this,vt,xi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){tc(n,this)}reset(){Jl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xt;return L`
      <style>
        ${!this.unstyled&&ee}
        ${!this.unstyled&&Co}
        ${!this.unstyled&&Ao}
      </style>
      ${N(this.suggestions.length>10,()=>L`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${C(this,vt,wi)}
                @keydown=${C(this,vt,vi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>L`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label>
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}vt=new WeakSet,wi=function(n){Zl(n,this)},vi=function(n){Ql(n,this)},xi=function(n){di(n,this)},Xt(bi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",bi);var Pt,Mi,An;class _i extends it{constructor(){super();U(this,Pt);this.filterObject={},this.tabIndex=0,this.inputHandler=C(this,Pt,Mi).bind(this),this.debouncedInputHandler=Be(this.inputHandler,500,{leading:!1})}reset(){zl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>L`
        ${C(this,Pt,An).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${C(this,Pt,An).call(this,"max","after")}
      `)}}Pt=new WeakSet,Mi=function(n){Yl(n,this)},An=function(n,r){return Xl(n,r,this)},Xt(_i,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",_i);var De,Si;class uc extends it{constructor(){super();U(this,De);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){nc(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return L`
        <form style="display: inline">
          ${Ne(["intersects","within"],r=>L`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xt}"
                  value="${r}"
                  @click=${()=>C(this,De,Si).call(this,r)}
                />
                <small>${r} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
          @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `})}}De=new WeakSet,Si=function(n){ic(n,this)};customElements.define("eox-itemfilter-spatial",uc);var Ie,Li;class fc extends it{constructor(){super();U(this,Ie);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){C(this,Ie,Li).call(this)}reset(){rc(this)}render(){return L`<div id="eox-map"></div>`}}Ie=new WeakSet,Li=function(){gi(this)};customElements.define("eox-itemfilter-spatial-filter",fc);function hc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function dc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&pc(n,t.target.value??"",e))}function pc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Tt,Rn,$i;class gc extends it{constructor(){super();U(this,Tt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",C(this,Tt,Rn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",C(this,Tt,Rn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return L`
      <style>
        ${ee}
      </style>
      <span class="chip-container">
        ${Ne(this.items,n=>L`
            <span class="chip" @click=${C(this,Tt,$i).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}Tt=new WeakSet,Rn=function(n){dc(n,this)},$i=function(n){hc(n,this)};customElements.define("eox-itemfilter-chips",gc);const yc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Cr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var mc=200,In="__lodash_hash_undefined__",bc=1/0,wc="[object Function]",vc="[object GeneratorFunction]",xc=/[\\^$.*+?()[\]{}|]/g,_c=/^\[object .+?Constructor\]$/,Mc=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Sc=typeof self=="object"&&self&&self.Object===Object&&self,Nn=Mc||Sc||Function("return this")();function Lc(t,e){var n=t?t.length:0;return!!n&&Cc(t,e,0)>-1}function $c(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function Cc(t,e,n){if(e!==e)return $c(t,Ac,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Ac(t){return t!==t}function Rc(t,e){return t.has(e)}function Ec(t,e){return t==null?void 0:t[e]}function Pc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Ci(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Tc=Array.prototype,kc=Function.prototype,Ai=Object.prototype,ln=Nn["__core-js_shared__"],Ar=function(){var t=/[^.]+$/.exec(ln&&ln.keys&&ln.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ri=kc.toString,Bn=Ai.hasOwnProperty,jc=Ai.toString,Oc=RegExp("^"+Ri.call(Bn).replace(xc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Dc=Tc.splice,Ic=Hn(Nn,"Map"),cn=Hn(Nn,"Set"),Qt=Hn(Object,"create");function Rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Nc(){this.__data__=Qt?Qt(null):{}}function Bc(t){return this.has(t)&&delete this.__data__[t]}function Hc(t){var e=this.__data__;if(Qt){var n=e[t];return n===In?void 0:n}return Bn.call(e,t)?e[t]:void 0}function qc(t){var e=this.__data__;return Qt?e[t]!==void 0:Bn.call(e,t)}function Uc(t,e){var n=this.__data__;return n[t]=Qt&&e===void 0?In:e,this}Rt.prototype.clear=Nc;Rt.prototype.delete=Bc;Rt.prototype.get=Hc;Rt.prototype.has=qc;Rt.prototype.set=Uc;function Gt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Wc(){this.__data__=[]}function Gc(t){var e=this.__data__,n=Ge(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Dc.call(e,n,1),!0}function Kc(t){var e=this.__data__,n=Ge(e,t);return n<0?void 0:e[n][1]}function Vc(t){return Ge(this.__data__,t)>-1}function zc(t,e){var n=this.__data__,r=Ge(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Gt.prototype.clear=Wc;Gt.prototype.delete=Gc;Gt.prototype.get=Kc;Gt.prototype.has=Vc;Gt.prototype.set=zc;function Kt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Yc(){this.__data__={hash:new Rt,map:new(Ic||Gt),string:new Rt}}function Xc(t){return Ke(this,t).delete(t)}function Jc(t){return Ke(this,t).get(t)}function Fc(t){return Ke(this,t).has(t)}function Zc(t,e){return Ke(this,t).set(t,e),this}Kt.prototype.clear=Yc;Kt.prototype.delete=Xc;Kt.prototype.get=Jc;Kt.prototype.has=Fc;Kt.prototype.set=Zc;function Te(t){var e=-1,n=t?t.length:0;for(this.__data__=new Kt;++e<n;)this.add(t[e])}function Qc(t){return this.__data__.set(t,In),this}function tu(t){return this.__data__.has(t)}Te.prototype.add=Te.prototype.push=Qc;Te.prototype.has=tu;function Ge(t,e){for(var n=t.length;n--;)if(lu(t[n][0],e))return n;return-1}function eu(t){if(!Ei(t)||su(t))return!1;var e=cu(t)||Pc(t)?Oc:_c;return e.test(ou(t))}function nu(t,e,n){var r=-1,i=Lc,o=t.length,a=!0,l=[],u=l;if(o>=mc){var f=ru(t);if(f)return Ci(f);a=!1,i=Rc,u=new Te}else u=l;t:for(;++r<o;){var h=t[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue t;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var ru=cn&&1/Ci(new cn([,-0]))[1]==bc?function(t){return new cn(t)}:uu;function Ke(t,e){var n=t.__data__;return iu(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Hn(t,e){var n=Ec(t,e);return eu(n)?n:void 0}function iu(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function su(t){return!!Ar&&Ar in t}function ou(t){if(t!=null){try{return Ri.call(t)}catch{}try{return t+""}catch{}}return""}function au(t){return t&&t.length?nu(t):[]}function lu(t,e){return t===e||t!==t&&e!==e}function cu(t){var e=Ei(t)?jc.call(t):"";return e==wc||e==vc}function Ei(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function uu(){}var fu=au;const Pi=Rr(fu);var ke={exports:{}};ke.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",x="[object Map]",$="[object Number]",S="[object Object]",E="[object Promise]",A="[object RegExp]",T="[object Set]",j="[object String]",ot="[object Symbol]",D="[object WeakMap]",Z="[object ArrayBuffer]",W="[object DataView]",re="[object Float32Array]",Vt="[object Float64Array]",pt="[object Int8Array]",qn="[object Int16Array]",G="[object Int32Array]",kt="[object Uint8Array]",ie="[object Uint8ClampedArray]",Oi="[object Uint16Array]",Di="[object Uint32Array]",Ii=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ni=/^\w*$/,Bi=/^\./,Hi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qi=/[\\^$.*+?()[\]{}|]/g,Ui=/\\(\\)?/g,Wi=/^\[object .+?Constructor\]$/,Gi=/^(?:0|[1-9]\d*)$/,P={};P[re]=P[Vt]=P[pt]=P[qn]=P[G]=P[kt]=P[ie]=P[Oi]=P[Di]=!0,P[u]=P[f]=P[Z]=P[h]=P[W]=P[p]=P[y]=P[g]=P[x]=P[$]=P[S]=P[A]=P[T]=P[j]=P[D]=!1;var Un=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Ki=typeof self=="object"&&self&&self.Object===Object&&self,gt=Un||Ki||Function("return this")(),Wn=e&&!e.nodeType&&e,Gn=Wn&&!0&&t&&!t.nodeType&&t,Vi=Gn&&Gn.exports===Wn,Kn=Vi&&Un.process,Vn=function(){try{return Kn&&Kn.binding("util")}catch{}}(),zn=Vn&&Vn.isTypedArray;function zi(s,c){for(var d=-1,m=s?s.length:0,v=Array(m);++d<m;)v[d]=c(s[d],d,s);return v}function Yi(s,c){for(var d=-1,m=c.length,v=s.length;++d<m;)s[v+d]=c[d];return s}function Xi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Ji(s){return function(c){return c==null?void 0:c[s]}}function Fi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Zi(s){return function(c){return s(c)}}function Qi(s,c){return s==null?void 0:s[c]}function Ve(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function ts(s){var c=-1,d=Array(s.size);return s.forEach(function(m,v){d[++c]=[v,m]}),d}function es(s,c){return function(d){return s(c(d))}}function ns(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var rs=Array.prototype,is=Function.prototype,se=Object.prototype,ze=gt["__core-js_shared__"],Yn=function(){var s=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Xn=is.toString,at=se.hasOwnProperty,jt=se.toString,ss=RegExp("^"+Xn.call(at).replace(qi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),oe=gt.Symbol,Jn=gt.Uint8Array,os=se.propertyIsEnumerable,as=rs.splice,Fn=oe?oe.isConcatSpreadable:void 0,ls=es(Object.keys,Object),Ye=Ot(gt,"DataView"),zt=Ot(gt,"Map"),Xe=Ot(gt,"Promise"),Je=Ot(gt,"Set"),Fe=Ot(gt,"WeakMap"),Yt=Ot(Object,"create"),cs=Lt(Ye),us=Lt(zt),fs=Lt(Xe),hs=Lt(Je),ds=Lt(Fe),ae=oe?oe.prototype:void 0,Ze=ae?ae.valueOf:void 0,Zn=ae?ae.toString:void 0;function St(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ps(){this.__data__=Yt?Yt(null):{}}function gs(s){return this.has(s)&&delete this.__data__[s]}function ys(s){var c=this.__data__;if(Yt){var d=c[s];return d===i?void 0:d}return at.call(c,s)?c[s]:void 0}function ms(s){var c=this.__data__;return Yt?c[s]!==void 0:at.call(c,s)}function bs(s,c){var d=this.__data__;return d[s]=Yt&&c===void 0?i:c,this}St.prototype.clear=ps,St.prototype.delete=gs,St.prototype.get=ys,St.prototype.has=ms,St.prototype.set=bs;function lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ws(){this.__data__=[]}function vs(s){var c=this.__data__,d=ce(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():as.call(c,d,1),!0}function xs(s){var c=this.__data__,d=ce(c,s);return d<0?void 0:c[d][1]}function _s(s){return ce(this.__data__,s)>-1}function Ms(s,c){var d=this.__data__,m=ce(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}lt.prototype.clear=ws,lt.prototype.delete=vs,lt.prototype.get=xs,lt.prototype.has=_s,lt.prototype.set=Ms;function ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function Ss(){this.__data__={hash:new St,map:new(zt||lt),string:new St}}function Ls(s){return ue(this,s).delete(s)}function $s(s){return ue(this,s).get(s)}function Cs(s){return ue(this,s).has(s)}function As(s,c){return ue(this,s).set(s,c),this}ct.prototype.clear=Ss,ct.prototype.delete=Ls,ct.prototype.get=$s,ct.prototype.has=Cs,ct.prototype.set=As;function le(s){var c=-1,d=s?s.length:0;for(this.__data__=new ct;++c<d;)this.add(s[c])}function Rs(s){return this.__data__.set(s,i),this}function Es(s){return this.__data__.has(s)}le.prototype.add=le.prototype.push=Rs,le.prototype.has=Es;function ut(s){this.__data__=new lt(s)}function Ps(){this.__data__=new lt}function Ts(s){return this.__data__.delete(s)}function ks(s){return this.__data__.get(s)}function js(s){return this.__data__.has(s)}function Os(s,c){var d=this.__data__;if(d instanceof lt){var m=d.__data__;if(!zt||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ct(m)}return d.set(s,c),this}ut.prototype.clear=Ps,ut.prototype.delete=Ts,ut.prototype.get=ks,ut.prototype.has=js,ut.prototype.set=Os;function Ds(s,c){var d=ft(s)||en(s)?Fi(s.length,String):[],m=d.length,v=!!m;for(var w in s)at.call(s,w)&&!(v&&(w=="length"||nr(w,m)))&&d.push(w);return d}function ce(s,c){for(var d=s.length;d--;)if(sr(s[d][0],c))return d;return-1}var Is=to(Hs);function Ns(s,c,d,m,v){var w=-1,M=s.length;for(d||(d=oo),v||(v=[]);++w<M;){var k=s[w];d(k)?Yi(v,k):v[v.length]=k}return v}var Bs=eo();function Hs(s,c){return s&&Bs(s,c,ye)}function Qn(s,c){c=fe(c,s)?[c]:tr(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[he(c[d++])];return d&&d==m?s:void 0}function qs(s){return jt.call(s)}function Us(s,c){return s!=null&&c in Object(s)}function Qe(s,c,d,m,v){return s===c?!0:s==null||c==null||!pe(s)&&!ge(c)?s!==s&&c!==c:Ws(s,c,Qe,d,m,v)}function Ws(s,c,d,m,v,w){var M=ft(s),k=ft(c),O=f,I=f;M||(O=yt(s),O=O==u?S:O),k||(I=yt(c),I=I==u?S:I);var H=O==S&&!Ve(s),q=I==S&&!Ve(c),B=O==I;if(B&&!H)return w||(w=new ut),M||go(s)?er(s,c,d,m,v,w):no(s,c,O,d,m,v,w);if(!(v&a)){var Y=H&&at.call(s,"__wrapped__"),X=q&&at.call(c,"__wrapped__");if(Y||X){var mt=Y?s.value():s,ht=X?c.value():c;return w||(w=new ut),d(mt,ht,m,v,w)}}return B?(w||(w=new ut),ro(s,c,d,m,v,w)):!1}function Gs(s,c,d,m){var v=d.length,w=v;if(s==null)return!w;for(s=Object(s);v--;){var M=d[v];if(M[2]?M[1]!==s[M[0]]:!(M[0]in s))return!1}for(;++v<w;){M=d[v];var k=M[0],O=s[k],I=M[1];if(M[2]){if(O===void 0&&!(k in s))return!1}else{var H=new ut,q;if(!(q===void 0?Qe(I,O,m,o|a,H):q))return!1}}return!0}function Ks(s){if(!pe(s)||lo(s))return!1;var c=or(s)||Ve(s)?ss:Wi;return c.test(Lt(s))}function Vs(s){return ge(s)&&nn(s.length)&&!!P[jt.call(s)]}function zs(s){return typeof s=="function"?s:s==null?wo:typeof s=="object"?ft(s)?Fs(s[0],s[1]):Js(s):vo(s)}function Ys(s){if(!co(s))return ls(s);var c=[];for(var d in Object(s))at.call(s,d)&&d!="constructor"&&c.push(d);return c}function Xs(s,c){var d=-1,m=de(s)?Array(s.length):[];return Is(s,function(v,w,M){m[++d]=c(v,w,M)}),m}function Js(s){var c=io(s);return c.length==1&&c[0][2]?ir(c[0][0],c[0][1]):function(d){return d===s||Gs(d,s,c)}}function Fs(s,c){return fe(s)&&rr(c)?ir(he(s),c):function(d){var m=mo(d,s);return m===void 0&&m===c?bo(d,s):Qe(c,m,void 0,o|a)}}function Zs(s){return function(c){return Qn(c,s)}}function Qs(s){if(typeof s=="string")return s;if(rn(s))return Zn?Zn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function tr(s){return ft(s)?s:uo(s)}function to(s,c){return function(d,m){if(d==null)return d;if(!de(d))return s(d,m);for(var v=d.length,w=-1,M=Object(d);++w<v&&m(M[w],w,M)!==!1;);return d}}function eo(s){return function(c,d,m){for(var v=-1,w=Object(c),M=m(c),k=M.length;k--;){var O=M[++v];if(d(w[O],O,w)===!1)break}return c}}function er(s,c,d,m,v,w){var M=v&a,k=s.length,O=c.length;if(k!=O&&!(M&&O>k))return!1;var I=w.get(s);if(I&&w.get(c))return I==c;var H=-1,q=!0,B=v&o?new le:void 0;for(w.set(s,c),w.set(c,s);++H<k;){var Y=s[H],X=c[H];if(m)var mt=M?m(X,Y,H,c,s,w):m(Y,X,H,s,c,w);if(mt!==void 0){if(mt)continue;q=!1;break}if(B){if(!Xi(c,function(ht,$t){if(!B.has($t)&&(Y===ht||d(Y,ht,m,v,w)))return B.add($t)})){q=!1;break}}else if(!(Y===X||d(Y,X,m,v,w))){q=!1;break}}return w.delete(s),w.delete(c),q}function no(s,c,d,m,v,w,M){switch(d){case W:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Jn(s),new Jn(c)));case h:case p:case $:return sr(+s,+c);case y:return s.name==c.name&&s.message==c.message;case A:case j:return s==c+"";case x:var k=ts;case T:var O=w&a;if(k||(k=ns),s.size!=c.size&&!O)return!1;var I=M.get(s);if(I)return I==c;w|=o,M.set(s,c);var H=er(k(s),k(c),m,v,w,M);return M.delete(s),H;case ot:if(Ze)return Ze.call(s)==Ze.call(c)}return!1}function ro(s,c,d,m,v,w){var M=v&a,k=ye(s),O=k.length,I=ye(c),H=I.length;if(O!=H&&!M)return!1;for(var q=O;q--;){var B=k[q];if(!(M?B in c:at.call(c,B)))return!1}var Y=w.get(s);if(Y&&w.get(c))return Y==c;var X=!0;w.set(s,c),w.set(c,s);for(var mt=M;++q<O;){B=k[q];var ht=s[B],$t=c[B];if(m)var ar=M?m($t,ht,B,c,s,w):m(ht,$t,B,s,c,w);if(!(ar===void 0?ht===$t||d(ht,$t,m,v,w):ar)){X=!1;break}mt||(mt=B=="constructor")}if(X&&!mt){var me=s.constructor,be=c.constructor;me!=be&&"constructor"in s&&"constructor"in c&&!(typeof me=="function"&&me instanceof me&&typeof be=="function"&&be instanceof be)&&(X=!1)}return w.delete(s),w.delete(c),X}function ue(s,c){var d=s.__data__;return ao(c)?d[typeof c=="string"?"string":"hash"]:d.map}function io(s){for(var c=ye(s),d=c.length;d--;){var m=c[d],v=s[m];c[d]=[m,v,rr(v)]}return c}function Ot(s,c){var d=Qi(s,c);return Ks(d)?d:void 0}var yt=qs;(Ye&&yt(new Ye(new ArrayBuffer(1)))!=W||zt&&yt(new zt)!=x||Xe&&yt(Xe.resolve())!=E||Je&&yt(new Je)!=T||Fe&&yt(new Fe)!=D)&&(yt=function(s){var c=jt.call(s),d=c==S?s.constructor:void 0,m=d?Lt(d):void 0;if(m)switch(m){case cs:return W;case us:return x;case fs:return E;case hs:return T;case ds:return D}return c});function so(s,c,d){c=fe(c,s)?[c]:tr(c);for(var m,v=-1,M=c.length;++v<M;){var w=he(c[v]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var M=s?s.length:0;return!!M&&nn(M)&&nr(w,M)&&(ft(s)||en(s))}function oo(s){return ft(s)||en(s)||!!(Fn&&s&&s[Fn])}function nr(s,c){return c=c??l,!!c&&(typeof s=="number"||Gi.test(s))&&s>-1&&s%1==0&&s<c}function fe(s,c){if(ft(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||rn(s)?!0:Ni.test(s)||!Ii.test(s)||c!=null&&s in Object(c)}function ao(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function lo(s){return!!Yn&&Yn in s}function co(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||se;return s===d}function rr(s){return s===s&&!pe(s)}function ir(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var uo=tn(function(s){s=yo(s);var c=[];return Bi.test(s)&&c.push(""),s.replace(Hi,function(d,m,v,w){c.push(v?w.replace(Ui,"$1"):m||d)}),c});function he(s){if(typeof s=="string"||rn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Lt(s){if(s!=null){try{return Xn.call(s)}catch{}try{return s+""}catch{}}return""}function fo(s,c){return Ns(ho(s,c))}function ho(s,c){var d=ft(s)?zi:Xs;return d(s,zs(c))}function tn(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,v=c?c.apply(this,m):m[0],w=d.cache;if(w.has(v))return w.get(v);var M=s.apply(this,m);return d.cache=w.set(v,M),M};return d.cache=new(tn.Cache||ct),d}tn.Cache=ct;function sr(s,c){return s===c||s!==s&&c!==c}function en(s){return po(s)&&at.call(s,"callee")&&(!os.call(s,"callee")||jt.call(s)==u)}var ft=Array.isArray;function de(s){return s!=null&&nn(s.length)&&!or(s)}function po(s){return ge(s)&&de(s)}function or(s){var c=pe(s)?jt.call(s):"";return c==g||c==b}function nn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function pe(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function ge(s){return!!s&&typeof s=="object"}function rn(s){return typeof s=="symbol"||ge(s)&&jt.call(s)==ot}var go=zn?Zi(zn):Vs;function yo(s){return s==null?"":Qs(s)}function mo(s,c,d){var m=s==null?void 0:Qn(s,c);return m===void 0?d:m}function bo(s,c){return s!=null&&so(s,c,Us)}function ye(s){return de(s)?Ds(s):Ys(s)}function wo(s){return s}function vo(s){return fe(s)?Ji(he(s)):Zs(s)}t.exports=fo})(ke,ke.exports);var hu=ke.exports;const Ti=Rr(hu);function du(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Jt(f).unix():parseFloat(f);e.forEach(f=>{var h,p;if(o.type==="range"){const y=Zt(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Pi(Ti(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Bl(e,Object.assign({keys:i},t.fuseConfig)),r}async function pu(t,e,n){let r;n.externalFilter?r=await Wl(e,n.filters,t):r=await Hl(e,n.filters,t),n.results=n.sortResults(r)}function gu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return L`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return L`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Pi(Ti(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return L`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return L`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return L``}}function yu(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function mu(t,e,n){return L`
    ${N(t.dirty,()=>L`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":xt}
        </button>
      `)}
  `}function bu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var te,Bt,J,Ut,ki,ji;class wu extends it{constructor(){super();U(this,Ut);U(this,te,[]);U(this,Bt,[]);U(this,J,yc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Be(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="#004170" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){we(this,te,du(K(this,J),K(this,Bt),this)),this.search()}async searchHandler(){await pu(K(this,J),K(this,Bt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return yu(n,K(this,J))}resetFilters(){bu(this)}firstUpdated(n){var i;let r={};Cr.map(o=>{r={...r,[o]:this[o]}}),we(this,J,r),we(this,Bt,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Cr.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return L`
      <style>
        ${Bo}
        ${!this.unstyled&&ee}
        ${!this.unstyled&&Lo}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xt}
        @submit="${r=>r.preventDefault()}"
      >
        ${N(this.filterProperties,()=>L`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${N(!this.inlineMode,()=>L`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Ne(Object.values(this.filters),(r,i)=>L` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>ai(o,K(this,J),this)}
                          data-details="${r.key}"
                        >
                          ${C(this,Ut,ji).call(this,r,$r(i,1))}
                          ${C(this,Ut,ki).call(this,r,$r(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${N(!this.inlineMode&&K(this,J).filterProperties&&!this.inlineMode&&K(this,J).filterProperties&&vn(this.filters),()=>L`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${N(((n=K(this,J))==null?void 0:n.showResults)&&this.results,()=>L`
            <eox-itemfilter-results
              .config=${K(this,J)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${K(this,te)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}te=new WeakMap,Bt=new WeakMap,J=new WeakMap,Ut=new WeakSet,ki=function(n,r){return gu(n,r,this)},ji=function(n,r){return mu(n,r,this)};customElements.define("eox-itemfilter",wu);const vu=[".items"],xu={slot:"filterstitle",style:{margin:"14px 8px"}},_u={slot:"resultstitle",style:{margin:"14px 8px"}},Iu={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(t,{emit:e}){const n=e,r=t,i=async p=>{cr.value&&(cr.value=""),p?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(p.href),n("select",p)):h.selectedStac=null},o=p=>{p&&(h.loadSelectedCompareSTAC(p.href),n("select",p))},a=async p=>{const y=p.detail;r.enableCompare?o(y):i(y)},{smAndDown:l}=Mo(),u=ko(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:l.value?"":r.filterProperties})),f=jo(null),h=So();return(p,y)=>{var g;return Do(),Oo("eox-itemfilter",Io({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":(g=No(h).stac)==null?void 0:g.filter(b=>b.rel==="child")}),[fr("h4",xu,hr(t.filtersTitle),1),fr("h4",_u,hr(t.resultsTitle),1)],48,vu)}}};export{Iu as default};
