var wo=Object.defineProperty;var cr=t=>{throw TypeError(t)};var xo=(t,e,n)=>e in t?wo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Jt=(t,e,n)=>xo(t,typeof e!="symbol"?e+"":e,n),on=(t,e,n)=>e.has(t)||cr("Cannot "+n);var B=(t,e,n)=>(on(t,e,"read from private field"),n?n.call(t):e.get(t)),q=(t,e,n)=>e.has(t)?cr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ve=(t,e,n,r)=>(on(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),A=(t,e,n)=>(on(t,e,"access private method"),n);import{r as it,E as vt,x as _}from"./lit-element.Deg-YTNa.js";import{a as we,o as Ie}from"./unsafe-html.DNVjkAgx.js";import{n as N}from"./when.BR7zwNJC.js";import{e as _o,a as Mo}from"./addCommonStyleSheet.BpSJpEYw.js";import{d as Zt}from"./dayjs.min.Ba62AOpW.js";import{_ as He}from"./index.BUIxO2d3.js";import{s as Nt,u as ur}from"./static.3li6NsVA.js";import{c as Lo}from"./repeat.DqtNkz5O.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as So}from"./orient2d.DArCjZZA.js";import{f as $e,a as fn,b as $o,m as Ao,l as Co}from"./index.BSpBAx16.js";import{g as Cr,c as bt}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.oNa9w_hR.js";const Ro=`
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
`;Mo();const Pn=`
${_o}
.field {
  margin-block-end: 0;
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
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --padding-vertical: 0.25rem;
  --list-padding: 2rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
  margin-top: 0;
}
eox-itemfilter-container {
  min-width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
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
  padding: 0 var(--padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--text-transform);
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
  max-height: 300px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--list-padding) !important;
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
  padding-left: var(--padding);
  padding-right: var(--padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
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
nav.title-nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 32px);
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

.inline-content {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
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
.inline-content::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
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
  color: white;
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
}
.chip {
  white-space: nowrap;
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
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--background-color);
}
`;var Oe,Rr;class Eo extends it{constructor(){super();q(this,Oe);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return _`
      <style>
        ${!this.unstyled&&Pn}
      </style>

      ${N(this.filterObject.featured,()=>_`<slot name="filter"></slot>`,()=>_`<details
            @toggle="${A(this,Oe,Rr)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||vt}
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
    `}}Oe=new WeakSet,Rr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Eo);function dt(t){return Array.isArray?Array.isArray(t):Tr(t)==="[object Array]"}function Po(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function To(t){return t==null?"":Po(t)}function et(t){return typeof t=="string"}function Er(t){return typeof t=="number"}function ko(t){return t===!0||t===!1||Oo(t)&&Tr(t)=="[object Boolean]"}function Pr(t){return typeof t=="object"}function Oo(t){return Pr(t)&&t!==null}function z(t){return t!=null}function an(t){return!t.trim().length}function Tr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const jo="Incorrect 'index' type",Do=t=>`Invalid value for key ${t}`,No=t=>`Pattern length exceeds max of ${t}.`,Io=t=>`Missing ${t} property in key`,Ho=t=>`Property 'weight' in key '${t}' must be a positive integer`,fr=Object.prototype.hasOwnProperty;class Bo{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=kr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function kr(t){let e=null,n=null,r=null,i=1,o=null;if(et(t)||dt(t))r=t,e=hr(t),n=hn(t);else{if(!fr.call(t,"name"))throw new Error(Io("name"));const a=t.name;if(r=a,fr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Ho(a));e=hr(a),n=hn(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function hr(t){return dt(t)?t:t.split(".")}function hn(t){return dt(t)?t.join("."):t}function qo(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(z(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!z(f))return;if(l===a.length-1&&(et(f)||Er(f)||ko(f)))n.push(To(f));else if(dt(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(t,et(e)?e.split("."):e,0),r?n:n[0]}const Uo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Wo={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Go={location:0,threshold:.6,distance:100},Ko={useExtendedSearch:!1,getFn:qo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var M={...Wo,...Uo,...Go,...Ko};const zo=/[^ ]+/g;function Vo(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(zo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Tn{constructor({getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){this.norm=Vo(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,et(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();et(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!z(e)||an(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(z(a)){if(dt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(z(h))if(et(h)&&!an(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else dt(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(et(a)&&!an(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Or(t,e,{getFn:n=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){const i=new Tn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(kr)),i.setSources(e),i.create(),i}function Yo(t,{getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Tn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function xe(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=M.distance,ignoreLocation:o=M.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function Xo(t=[],e=M.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const At=32;function Jo(t,e,n,{location:r=M.location,distance:i=M.distance,threshold:o=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:f=M.ignoreLocation}={}){if(e.length>At)throw new Error(No(At));const h=e.length,p=t.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,$=x?Array(p):[];let S;for(;(S=t.indexOf(e,b))>-1;){let D=xe(e,{currentLocation:S,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(D,g),b=S+h,x){let Q=0;for(;Q<h;)$[S+Q]=1,Q+=1}}b=-1;let E=[],C=1,T=h+p;const O=1<<h-1;for(let D=0;D<h;D+=1){let Q=0,G=T;for(;Q<G;)xe(e,{errors:D,currentLocation:y+G,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Q=G:T=G,G=Math.floor((T-Q)/2+Q);T=G;let re=Math.max(1,y-G+1),Vt=a?p:Math.min(y+G,p)+h,pt=Array(Vt+2);pt[Vt+1]=(1<<D)-1;for(let K=Vt;K>=re;K-=1){let Ot=K-1,ie=n[t.charAt(Ot)];if(x&&($[Ot]=+!!ie),pt[K]=(pt[K+1]<<1|1)&ie,D&&(pt[K]|=(E[K+1]|E[K])<<1|1|E[K+1]),pt[K]&O&&(C=xe(e,{errors:D,currentLocation:Ot,expectedLocation:y,distance:i,ignoreLocation:f}),C<=g)){if(g=C,b=Ot,b<=y)break;re=Math.max(1,2*y-b)}}if(xe(e,{errors:D+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;E=pt}const ot={isMatch:b>=0,score:Math.max(.001,C)};if(x){const D=Xo($,l);D.length?u&&(ot.indices=D):ot.isMatch=!1}return ot}function Zo(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class jr{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:i=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreLocation:f=M.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:Zo(y),startIndex:g})},p=this.pattern.length;if(p>At){let y=0;const g=p%At,b=p-g;for(;y<b;)h(this.pattern.substr(y,At),y),y+=At;if(g){const x=p-At;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,e.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:$})=>{const{isMatch:S,score:E,indices:C}=Jo(e,b,x,{location:i+$,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});S&&(y=!0),p+=E,S&&C&&(h=[...h,...C])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _t{constructor(e){this.pattern=e}static isMultiMatch(e){return dr(e,this.multiRegex)}static isSingleMatch(e){return dr(e,this.singleRegex)}search(){}}function dr(t,e){const n=t.match(e);return n?n[1]:null}class Qo extends _t{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Fo extends _t{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ta extends _t{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ea extends _t{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class na extends _t{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ra extends _t{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Dr extends _t{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:i=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreLocation:f=M.ignoreLocation}={}){super(e),this._bitapSearch=new jr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Nr extends _t{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const dn=[Qo,Nr,ta,ea,ra,na,Fo,Dr],pr=dn.length,ia=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,sa="|";function oa(t,e={}){return t.split(sa).map(n=>{let r=n.trim().split(ia).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<pr;){const h=dn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,e)),u=!0)}if(!u)for(f=-1;++f<pr;){const h=dn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,e));break}}}return i})}const aa=new Set([Dr.type,Nr.type]);class la{constructor(e,{isCaseSensitive:n=M.isCaseSensitive,includeMatches:r=M.includeMatches,minMatchCharLength:i=M.minMatchCharLength,ignoreLocation:o=M.ignoreLocation,findAllMatches:a=M.findAllMatches,location:l=M.location,threshold:u=M.threshold,distance:f=M.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=oa(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:$}=g.search(e);if(b){if(o+=1,l+=$,r){const S=g.constructor.type;aa.has(S)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const pn=[];function ca(...t){pn.push(...t)}function gn(t,e){for(let n=0,r=pn.length;n<r;n+=1){let i=pn[n];if(i.condition(t,e))return new i(t,e)}return new jr(t,e)}const Ae={AND:"$and",OR:"$or"},yn={PATH:"$path",PATTERN:"$val"},mn=t=>!!(t[Ae.AND]||t[Ae.OR]),ua=t=>!!t[yn.PATH],fa=t=>!dt(t)&&Pr(t)&&!mn(t),gr=t=>({[Ae.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ir(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=ua(i);if(!a&&o.length>1&&!mn(i))return r(gr(i));if(fa(i)){const u=a?i[yn.PATH]:o[0],f=a?i[yn.PATTERN]:i[u];if(!et(f))throw new Error(Do(u));const h={keyId:hn(u),pattern:f};return n&&(h.searcher=gn(f,e)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];dt(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return mn(t)||(t=gr(t)),r(t)}function ha(t,{ignoreFieldNorm:e=M.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function da(t,e){const n=t.matches;e.matches=[],z(n)&&n.forEach(r=>{if(!z(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function pa(t,e){e.score=t.score}function ga(t,e,{includeMatches:n=M.includeMatches,includeScore:r=M.includeScore}={}){const i=[];return n&&i.push(da),r&&i.push(pa),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Mt{constructor(e,n={},r){this.options={...M,...n},this.options.useExtendedSearch,this._keyStore=new Bo(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Tn))throw new Error(jo);this._myIndex=n||Or(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){z(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=et(e)?et(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ha(u,{ignoreFieldNorm:l}),o&&u.sort(a),Er(n)&&n>-1&&(u=u.slice(0,n)),ga(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=gn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=Ir(e,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===Ae.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(z(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=gn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!z(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!z(n))return[];let i=[];if(dt(n))n.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}Mt.version="7.0.0";Mt.createIndex=Or;Mt.parseIndex=Yo;Mt.config=M;Mt.parseQuery=Ir;ca(la);function Hr(t,e){const n=new Mt(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function ya(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const bn=Math.min,It=Math.max,Ce=Math.round,_e=Math.floor,nt=t=>({x:t,y:t});function Br(t){return t.split("-")[0]}function ma(t){return t.split("-")[1]}function ba(t){return t==="x"?"y":"x"}function va(t){return t==="y"?"height":"width"}const wa=new Set(["top","bottom"]);function qr(t){return wa.has(Br(t))?"y":"x"}function xa(t){return ba(qr(t))}function Ur(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function yr(t,e,n){let{reference:r,floating:i}=t;const o=qr(e),a=xa(e),l=va(a),u=Br(e),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(ma(e)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const _a=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=yr(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:$,fn:S}=l[x],{x:E,y:C,data:T,reset:O}=await S({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:t,floating:e}});h=E??h,p=C??p,g={...g,[$]:{...g[$],...T}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(y=O.placement),O.rects&&(f=O.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:h,y:p}=yr(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function Be(){return typeof window<"u"}function Gt(t){return Wr(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(Wr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wr(t){return Be()?t instanceof Node||t instanceof V(t).Node:!1}function F(t){return Be()?t instanceof Element||t instanceof V(t).Element:!1}function rt(t){return Be()?t instanceof HTMLElement||t instanceof V(t).HTMLElement:!1}function mr(t){return!Be()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof V(t).ShadowRoot}const Ma=new Set(["inline","contents"]);function ne(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!Ma.has(i)}const La=new Set(["table","td","th"]);function Sa(t){return La.has(Gt(t))}const $a=[":popover-open",":modal"];function qe(t){return $a.some(e=>{try{return t.matches(e)}catch{return!1}})}const Aa=["transform","translate","scale","rotate","perspective"],Ca=["transform","translate","scale","rotate","perspective","filter"],Ra=["paint","layout","strict","content"];function kn(t){const e=On(),n=F(t)?tt(t):t;return Aa.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Ca.some(r=>(n.willChange||"").includes(r))||Ra.some(r=>(n.contain||"").includes(r))}function Ea(t){let e=wt(t);for(;rt(e)&&!qt(e);){if(kn(e))return e;if(qe(e))return null;e=wt(e)}return null}function On(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Pa=new Set(["html","body","#document"]);function qt(t){return Pa.has(Gt(t))}function tt(t){return V(t).getComputedStyle(t)}function Ue(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(Gt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||mr(t)&&t.host||st(t);return mr(e)?e.host:e}function Gr(t){const e=wt(t);return qt(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ne(e)?e:Gr(e)}function Qt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Gr(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=V(i);if(o){const l=vn(a);return e.concat(a,a.visualViewport||[],ne(i)?i:[],l&&n?Qt(l):[])}return e.concat(i,Qt(i,[],n))}function vn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Kr(t){const e=tt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=rt(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Ce(n)!==o||Ce(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function jn(t){return F(t)?t:t.contextElement}function Ht(t){const e=jn(t);if(!rt(e))return nt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Kr(e);let a=(o?Ce(n.width):n.width)/r,l=(o?Ce(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Ta=nt(0);function zr(t){const e=V(t);return!On()||!e.visualViewport?Ta:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ka(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==V(t)?!1:e}function Rt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=jn(t);let a=nt(1);e&&(r?F(r)&&(a=Ht(r)):a=Ht(t));const l=ka(o,n,r)?zr(o):nt(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=V(o),g=r&&F(r)?V(r):r;let b=y,x=vn(b);for(;x&&r&&g!==b;){const $=Ht(x),S=x.getBoundingClientRect(),E=tt(x),C=S.left+(x.clientLeft+parseFloat(E.paddingLeft))*$.x,T=S.top+(x.clientTop+parseFloat(E.paddingTop))*$.y;u*=$.x,f*=$.y,h*=$.x,p*=$.y,u+=C,f+=T,b=V(x),x=vn(b)}}return Ur({width:h,height:p,x:u,y:f})}function We(t,e){const n=Ue(t).scrollLeft;return e?e.left+n:Rt(st(t)).left+n}function Vr(t,e){const n=t.getBoundingClientRect(),r=n.left+e.scrollLeft-We(t,n),i=n.top+e.scrollTop;return{x:r,y:i}}function Oa(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=st(r),l=e?qe(e.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=nt(1);const h=nt(0),p=rt(r);if((p||!p&&!o)&&((Gt(r)!=="body"||ne(a))&&(u=Ue(r)),rt(r))){const g=Rt(r);f=Ht(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?Vr(a,u):nt(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function ja(t){return Array.from(t.getClientRects())}function Da(t){const e=st(t),n=Ue(t),r=t.ownerDocument.body,i=It(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=It(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+We(t);const l=-n.scrollTop;return tt(r).direction==="rtl"&&(a+=It(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}const br=25;function Na(t,e){const n=V(t),r=st(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const h=On();(!h||h&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}const f=We(r);if(f<=0){const h=r.ownerDocument,p=h.body,y=getComputedStyle(p),g=h.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,b=Math.abs(r.clientWidth-p.clientWidth-g);b<=br&&(o-=b)}else f<=br&&(o+=f);return{width:o,height:a,x:l,y:u}}const Ia=new Set(["absolute","fixed"]);function Ha(t,e){const n=Rt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=rt(t)?Ht(t):nt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function vr(t,e,n){let r;if(e==="viewport")r=Na(t,n);else if(e==="document")r=Da(st(t));else if(F(e))r=Ha(e,n);else{const i=zr(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Ur(r)}function Yr(t,e){const n=wt(t);return n===e||!F(n)||qt(n)?!1:tt(n).position==="fixed"||Yr(n,e)}function Ba(t,e){const n=e.get(t);if(n)return n;let r=Qt(t,[],!1).filter(l=>F(l)&&Gt(l)!=="body"),i=null;const o=tt(t).position==="fixed";let a=o?wt(t):t;for(;F(a)&&!qt(a);){const l=tt(a),u=kn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&Ia.has(i.position)||ne(a)&&!u&&Yr(t,a))?r=r.filter(h=>h!==a):i=l,a=wt(a)}return e.set(t,r),r}function qa(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?qe(e)?[]:Ba(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=vr(e,h,i);return f.top=It(p.top,f.top),f.right=bn(p.right,f.right),f.bottom=bn(p.bottom,f.bottom),f.left=It(p.left,f.left),f},vr(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ua(t){const{width:e,height:n}=Kr(t);return{width:e,height:n}}function Wa(t,e,n){const r=rt(e),i=st(e),o=n==="fixed",a=Rt(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const u=nt(0);function f(){u.x=We(i)}if(r||!r&&!o)if((Gt(e)!=="body"||ne(i))&&(l=Ue(e)),r){const g=Rt(e,!0,o,e);u.x=g.x+e.clientLeft,u.y=g.y+e.clientTop}else i&&f();o&&!r&&i&&f();const h=i&&!r&&!o?Vr(i,l):nt(0),p=a.left+l.scrollLeft-u.x-h.x,y=a.top+l.scrollTop-u.y-h.y;return{x:p,y,width:a.width,height:a.height}}function ln(t){return tt(t).position==="static"}function wr(t,e){if(!rt(t)||tt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return st(t)===n&&(n=n.ownerDocument.body),n}function Xr(t,e){const n=V(t);if(qe(t))return n;if(!rt(t)){let i=wt(t);for(;i&&!qt(i);){if(F(i)&&!ln(i))return i;i=wt(i)}return n}let r=wr(t,e);for(;r&&Sa(r)&&ln(r);)r=wr(r,e);return r&&qt(r)&&ln(r)&&!kn(r)?n:r||Ea(t)||n}const Ga=async function(t){const e=this.getOffsetParent||Xr,n=this.getDimensions,r=await n(t.floating);return{reference:Wa(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ka(t){return tt(t).direction==="rtl"}const za={convertOffsetParentRelativeRectToViewportRelativeRect:Oa,getDocumentElement:st,getClippingRect:qa,getOffsetParent:Xr,getElementRects:Ga,getClientRects:ja,getDimensions:Ua,getScale:Ht,isElement:F,isRTL:Ka};function Jr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Va(t,e){let n=null,r;const i=st(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||e(),!y||!g)return;const b=_e(p),x=_e(i.clientWidth-(h+y)),$=_e(i.clientHeight-(p+g)),S=_e(h),C={rootMargin:-b+"px "+-x+"px "+-$+"px "+-S+"px",threshold:It(0,bn(1,u))||1};let T=!0;function O(ot){const D=ot[0].intersectionRatio;if(D!==u){if(!T)return a();D?a(!1,D):r=setTimeout(()=>{a(!1,1e-7)},1e3)}D===1&&!Jr(f,t.getBoundingClientRect())&&a(),T=!1}try{n=new IntersectionObserver(O,{...C,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,C)}n.observe(t)}return a(!0),o}function Ya(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=jn(t),h=i||o?[...f?Qt(f):[],...Qt(e)]:[];h.forEach(S=>{i&&S.addEventListener("scroll",n,{passive:!0}),o&&S.addEventListener("resize",n)});const p=f&&l?Va(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(S=>{let[E]=S;E&&E.target===f&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var C;(C=g)==null||C.observe(e)})),n()}),f&&!u&&g.observe(f),g.observe(e));let b,x=u?Rt(t):null;u&&$();function $(){const S=Rt(t);x&&!Jr(x,S)&&n(),x=S,b=requestAnimationFrame($)}return n(),()=>{var S;h.forEach(E=>{i&&E.removeEventListener("scroll",n),o&&E.removeEventListener("resize",n)}),p==null||p(),(S=g)==null||S.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Xa=(t,e,n)=>{const r=new Map,i={platform:za,...n},o={...i.platform,_c:r};return _a(t,e,{...i,platform:o})};function Ja(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Ya(e,n,()=>{n.matches(":popover-open")&&Xa(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Zr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Hr({target:{value:""}},t)}function Za(t,e){e.inlineMode&&t.stopPropagation()}function Qa(t){t.inlineMode&&(t.showDropdown=!0)}function Fa(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function tl(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Zr(e),e.showDropdown=!1)}function el(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Zr(e),e.showDropdown=!1)}function nl(t,e){var n,r,i=0,o,a,l,u,f,h,p,y=t[0],g=t[1],b=e.length;for(n=0;n<b;n++){r=0;var x=e[n],$=x.length-1;if(h=x[0],h[0]!==x[$][0]&&h[1]!==x[$][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<$;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=So(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Qr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function rl(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ut(t){return t.type==="Feature"?t.geometry:t}function Z(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Qr(t),i=Ut(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&il(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=nl(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function il(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Fr{constructor(e=[],n=sl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function sl(t,e){return t<e?-1:t>e?1:0}function ti(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function ol(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class xr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function al(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)_r(n[r],e)}else _r(t,e)}let Me=0,Le=0,Se=0;function _r(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Le=Le+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new xr(a,Me,Le,Se),h=new xr(l,Me,Le,Se+1);f.otherEvent=h,h.otherEvent=f,ti(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=l,Se=Se+1}}Me=Me+1}class ll{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function cl(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),$=r+g*(o-r);return[x,$]}return!1}function ul(t,e){e=e||!1;const n=[],r=new Fr([],ol);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new ll(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=cl(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function fl(t,e){const n=new Fr([],ti);return al(t,n),ul(n,e)}var hl=fl;function Dn(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push($e(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push($e(e));const a=hl(fn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return fn(l.map(u=>$o(u)))}function ei(t,e,n){if(t!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=t.type,b=g==="FeatureCollection",x=g==="Feature",$=b?t.features.length:1,S=0;S<$;S++){f=b?t.features[S].geometry:x?t.geometry:t,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var E=0;E<l;E++){var C=0,T=0;if(a=y?f.geometries[E]:f,a!==null){u=a.coordinates;var O=a.type;switch(h=0,O){case null:break;case"Point":if(e(u,p,S,C,T)===!1)return!1;p++,C++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],p,S,C,T)===!1)return!1;p++,O==="MultiPoint"&&C++}O==="LineString"&&C++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],p,S,C,T)===!1)return!1;p++}O==="MultiLineString"&&C++,O==="Polygon"&&T++}O==="Polygon"&&C++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(T=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(e(u[r][i][o],p,S,C,T)===!1)return!1;p++}T++}C++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ei(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function dl(t,e){var n,r,i,o,a,l,u,f,h,p,y=0,g=t.type==="FeatureCollection",b=t.type==="Feature",x=g?t.features.length:1;for(n=0;n<x;n++){for(l=g?t.features[n].geometry:b?t.geometry:t,f=g?t.features[n].properties:b?t.properties:{},h=g?t.features[n].bbox:b?t.bbox:void 0,p=g?t.features[n].id:b?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(e(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Re(t,e){dl(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e($e(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(e($e(p,i),r,f)===!1)return!1}})}function wn(t,e={}){const n=Ut(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return pl(n,e);case"MultiPolygon":return gl(n,e);default:throw new Error("invalid poly")}}function pl(t,e={}){const r=Ut(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return ni(r,i)}function gl(t,e={}){const r=Ut(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(ni(a,i))}),fn(o)}function ni(t,e){return t.length>1?Ao(t,e):Co(t[0],e)}function yl(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Re(t,i=>{Re(e,o=>{if(r===!1)return!1;r=ml(i.geometry,o.geometry,n)})}),r}function ml(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!xl(t.coordinates,e.coordinates);case"LineString":return!Mr(e,t);case"Polygon":return!Z(t,e)}break;case"LineString":switch(e.type){case"Point":return!Mr(t,e);case"LineString":return!bl(t,e,n);case"Polygon":return!Lr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!Z(e,t);case"LineString":return!Lr(t,e,n);case"Polygon":return!vl(e,t,n)}}return!1}function Mr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(wl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function bl(t,e,n){return Dn(t,e,{ignoreSelfIntersections:n}).features.length>0}function Lr(t,e,n){for(const i of e.coordinates)if(Z(i,t))return!0;return Dn(e,wn(t),{ignoreSelfIntersections:n}).features.length>0}function vl(t,e,n){for(const i of t.coordinates[0])if(Z(i,e))return!0;for(const i of e.coordinates[0])if(Z(i,t))return!0;return Dn(wn(t),wn(e),{ignoreSelfIntersections:n}).features.length>0}function wl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function xl(t,e){return t[0]===e[0]&&t[1]===e[1]}function _l(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Re(t,i=>{Re(e,o=>{if(r===!0)return!0;r=!yl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var Ml=_l;function Ee(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return ei(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Pe(t,e,n={}){const r=Qr(t),i=rl(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),Ll(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Ll(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],u=t[1],f=e[0],h=e[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Sl(t,e){var n=Ut(t),r=Ut(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return $l(n,r);case"LineString":return Pe(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return Z(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Al(n,r);case"LineString":return Cl(n,r);case"Polygon":case"MultiPolygon":return Rl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return El(n,r);case"Polygon":case"MultiPolygon":return Pl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Tl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function $l(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(ii(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Al(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)ii(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Cl(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Pe(t.coordinates[r],e))return!1;n||(n=Pe(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Rl(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=Z(t.coordinates[i],e),!r){n=!1;break}r=Z(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function El(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Pe(t.coordinates[n],e))return!1;return!0}function Pl(t,e){var n=Ee(e),r=Ee(t);if(!ri(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!Z(t.coordinates[o],e))return!1;if(i||(i=Z(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=kl(t.coordinates[o],t.coordinates[o+1]);i=Z(a,e,{ignoreBoundary:!0})}}return i}function Tl(t,e){var n=Ee(t),r=Ee(e);if(!ri(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!Z(t.coordinates[0][i],e))return!1;return!0}function ri(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function ii(t,e){return t[0]===e[0]&&t[1]===e[1]}function kl(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Ol=Sl;const jl=(t,e)=>e?Ml(t,e):!0,Dl=(t,e)=>e?Ol(t,e):!0;function Nl(t,e="highlight",n="title"){const r=(i,o=[])=>{let a="",l=0,u=0;return o.forEach((f,h)=>{const p=f[1]+1;h&&u>f[0]||(u=f[1],a+=[i.substring(l,f[0]),`<mark class="${e}">`,i.substring(f[0],p),"</mark>"].join(""),l=p)}),a+=i.substring(l),a};return t.filter(({matches:i})=>i&&i.length).map(({item:i,matches:o})=>{const a={...i};return o.forEach(l=>{if(l.key!==n)return;const u=r(Wl(l.value),Gl(l.indices));a.highlightedText=u}),a})}let si;const Il=(t,e)=>{si=new Mt(t,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...e})},Hl=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=si.search(l);i=n.enableHighlighting?Nl(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Zt(b).unix():b,g=Ct(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Ct(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Dl(p,a[h].geometry):jl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Bl(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ge(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Sr(t,e){return t*2+e}function ql(t){return Object.keys(t).map(e=>({title:_`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function xn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Ul(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function oi(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Ct(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}function Wl(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function Gl(t,{mergeAdjacent:e=!1}={}){if(!Array.isArray(t))return[];const n=t.map(([i,o])=>i<=o?[i,o]:[o,i]).sort((i,o)=>i[0]-o[0]||i[1]-o[1]),r=[];for(const[i,o]of n){if(r.length===0){r.push([i,o]);continue}const a=r[r.length-1];(e?i<=a[1]+1:i<=a[1])?o>a[1]&&(a[1]=o):r.push([i,o])}return r}var R,ai,_n,Mn,li,Ln,Sn,ci,$n,ui,fi;class Kl extends it{constructor(){super();q(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=A(this,R,li).bind(this),this._handleKeyDown=A(this,R,Ln).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&A(this,R,_n).call(this)}disconnectedCallback(){this.inlineMode&&A(this,R,Mn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?A(this,R,_n).call(this):A(this,R,Mn).call(this))}render(){return _`
      <style>
        ${!this.unstyled&&Pn}
      </style>
      ${this.inlineMode?_`
            <div
              class="inline-container-wrapper"
              @click="${A(this,R,Sn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${ql(this.filters)}
                      .controller=${{remove:n=>A(this,R,ui).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${N(xn(this.filters),()=>_`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":_`
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
                  class="input-container field no-margin ${xn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${A(this,R,Sn)}"
                    @focus="${A(this,R,ci)}"
                    @input="${A(this,R,fi)}"
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
                  @keydown="${A(this,R,Ln)}"
                  @click="${A(this,R,$n)}"
                  @focus="${A(this,R,$n)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:_`<slot name="section"></slot>`}
    `}}R=new WeakSet,ai=function(){setTimeout(()=>this._overlayCleanup=Ja(this))},_n=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),A(this,R,ai).call(this)},Mn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},li=function(n){el(n,this)},Ln=function(n){tl(n,this)},Sn=function(n){Fa(n,this)},ci=function(){Qa(this)},$n=function(n){Za(n,this)},ui=function(n){ya(n,this)},fi=function(n){Hr(n,this)};customElements.define("eox-itemfilter-container",Kl);function zl(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Ge(t.filterObject),t.requestUpdate()}function Vl(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const An="ddd, D MMM YYYY HH:mm:ss";function Yl(t){if(t.filterObject=Ge(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Xl(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Zt.unix(n).format(An)} - ${Zt.unix(r).format(An)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Jl(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?Zt.unix(i).format(An):i;return _`<div class="range-${e}">${o}</div>`}function Zl(t){Ql(-1,t),Ge(t.filterObject),t.requestUpdate()}function Ql(t,e){e.selectedItems=[],Nn(e),di(e)}function hi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),Nn(e),di(e)}function Fl(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function tc(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&hi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function ec(t,e){(t.has("suggestions")||t.has("query"))&&Nn(e)}function nc(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.toString().localeCompare(o.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function Nn(t){var r,i,o;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(a=>`${a}`);let n=e;t.query&&(n=new Mt(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:nc(t,n),(o=t.filterObject)!=null&&o.filterKeys&&(t.filterObject.state=e.reduce((a,l)=>(l in a||(a[l]=void 0),a),t.filterObject.state)),t.highlightedIndex=-1}function di(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function rc(t){Ge(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function ic(t){t.renderRoot.querySelector("#eox-map").innerHTML="",pi(t)}function sc(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function pi(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&oc(t.geometry),r=Bl(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function oc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var te,je;class ac extends it{constructor(){super();q(this,te,()=>{Vl(this)});q(this,je,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",B(this,te).call(this))});Jt(this,"debouncedInputHandler",He(B(this,te),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){zl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return _`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--list-padding)"
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
              @click=${r=>r.stopPropagation()}
              @keydown=${B(this,je)}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}te=new WeakMap,je=new WeakMap;customElements.define("eox-itemfilter-text",ac);function lc(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}function cc(t,e){return _`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||vt}
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
          <span class="title"> ${t} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${e.aggregateResults(e.results,t).length}
          </button>
        </nav>
      </summary>
      <div>
        ${gi(e,t)}
      </div>
    </details>
  `}function gi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":vt};return ur`
    ${t.resultType==="cards"?Nt("<eox-layout fill-grid>"):Nt('<ul id="results" class="list no-space" part="results">')}
      ${Lo(r,a=>a.id,a=>ur`
        ${t.resultType==="cards"?Nt("<eox-layout-item"):Nt("<li")}
            class="${o(a)}"
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${N(i.subTitleProperty||i.imageProperty,()=>_`
                  ${N(t.resultType==="cards",()=>Ct(i.imageProperty,a)?_`
                            <img
                              class="image"
                              src="${Ct(i.imageProperty,a)}"
                            />
                          `:_`
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
                          `,()=>_`
                      <i class="small">
                        ${Ct(i.imageProperty,a)?_`
                              <img
                                class="image"
                                src="${Ct(i.imageProperty,a)}"
                              />
                            `:_`
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
                      >${we(a.highlightedText||a[i.titleProperty])}</span
                    >
                    ${N(!!a[i.subTitleProperty],()=>_`
                        <small class="subtitle no-line truncate"
                          >${we(a[i.subTitleProperty].toString())}</small
                        >
                      `)}
                  </div>
                `,()=>_`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      >${we(a.highlightedText||a[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${N(t.enableResultAction,()=>_`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${we(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?Nt("</eox-layout>"):Nt("</ul>")}
  `}var Pt,Cn,yi;class uc extends it{constructor(){super();q(this,Pt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return lc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){oi(n,this.config,this)}render(){return _`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${N(this.results.length<1,()=>_`<small class="no-results">No matching items</small>`,()=>vt)}
          ${N(this.config.aggregateResults,()=>Ie(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>_`${N(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>_`<div style="margin-left: -8px">
                        ${A(this,Pt,Cn).call(this,n)}
                      </div>`,()=>A(this,Pt,yi).call(this,n))}`),()=>A(this,Pt,Cn).call(this))}
        </div>
      </section>
    `}}Pt=new WeakSet,Cn=function(n){return gi(this,n)},yi=function(n){return cc(n,this)};customElements.define("eox-itemfilter-results",uc);var xt,bi,vi,wi;class mi extends it{constructor(){super();q(this,xt);Jt(this,"debouncedInputHandler",He(A(this,xt,wi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){ec(n,this)}reset(){Zl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":vt;return _`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${N((this.filterObject.filterKeys||this.suggestions).length>=10,()=>_`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${A(this,xt,bi)}
                @keydown=${A(this,xt,vi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>_`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label class="${n} small max">
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}xt=new WeakSet,bi=function(n){Fl(n,this)},vi=function(n){tc(n,this)},wi=function(n){hi(n,this)},Jt(mi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",mi);var Tt,_i,Rn;class xi extends it{constructor(){super();q(this,Tt);this.filterObject={},this.tabIndex=0,this.inputHandler=A(this,Tt,_i).bind(this),this.debouncedInputHandler=He(this.inputHandler,500,{leading:!1})}reset(){Yl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>_`
        <div style="margin-left: var(--list-padding)">
          ${A(this,Tt,Rn).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${A(this,Tt,Rn).call(this,"max","after")}
        </div>
      `)}}Tt=new WeakSet,_i=function(n){Xl(n,this)},Rn=function(n,r){return Jl(n,r,this)},Jt(xi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",xi);var De,Mi;class fc extends it{constructor(){super();q(this,De);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){rc(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return _`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${Ie(["intersects","within"],r=>_`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||vt}"
                    value="${r}"
                    @click=${()=>A(this,De,Mi).call(this,r)}
                  />
                  <span>${r} filter geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial>
        </div>
      `})}}De=new WeakSet,Mi=function(n){sc(n,this)};customElements.define("eox-itemfilter-spatial",fc);var Ne,Li;class hc extends it{constructor(){super();q(this,Ne);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){A(this,Ne,Li).call(this)}reset(){ic(this)}render(){return _`<div id="eox-map"></div>`}}Ne=new WeakSet,Li=function(){pi(this)};customElements.define("eox-itemfilter-spatial-filter",hc);function dc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function pc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&gc(n,t.target.value??"",e))}function gc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var kt,En,Si;class yc extends it{constructor(){super();q(this,kt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",A(this,kt,En).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",A(this,kt,En).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return _`
      <span class="chip-container">
        ${Ie(this.items,n=>_`
            <span class="chip tiny-margin" @click=${A(this,kt,Si).bind(this)}>
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
    `}}kt=new WeakSet,En=function(n){pc(n,this)},Si=function(n){dc(n,this)};customElements.define("eox-itemfilter-chips",yc);const mc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),$r=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var bc=200,In="__lodash_hash_undefined__",vc=1/0,wc="[object Function]",xc="[object GeneratorFunction]",_c=/[\\^$.*+?()[\]{}|]/g,Mc=/^\[object .+?Constructor\]$/,Lc=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Sc=typeof self=="object"&&self&&self.Object===Object&&self,Hn=Lc||Sc||Function("return this")();function $c(t,e){var n=t?t.length:0;return!!n&&Cc(t,e,0)>-1}function Ac(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function Cc(t,e,n){if(e!==e)return Ac(t,Rc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Rc(t){return t!==t}function Ec(t,e){return t.has(e)}function Pc(t,e){return t==null?void 0:t[e]}function Tc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function $i(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var kc=Array.prototype,Oc=Function.prototype,Ai=Object.prototype,cn=Hn["__core-js_shared__"],Ar=function(){var t=/[^.]+$/.exec(cn&&cn.keys&&cn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ci=Oc.toString,Bn=Ai.hasOwnProperty,jc=Ai.toString,Dc=RegExp("^"+Ci.call(Bn).replace(_c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nc=kc.splice,Ic=qn(Hn,"Map"),un=qn(Hn,"Set"),Ft=qn(Object,"create");function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Hc(){this.__data__=Ft?Ft(null):{}}function Bc(t){return this.has(t)&&delete this.__data__[t]}function qc(t){var e=this.__data__;if(Ft){var n=e[t];return n===In?void 0:n}return Bn.call(e,t)?e[t]:void 0}function Uc(t){var e=this.__data__;return Ft?e[t]!==void 0:Bn.call(e,t)}function Wc(t,e){var n=this.__data__;return n[t]=Ft&&e===void 0?In:e,this}Et.prototype.clear=Hc;Et.prototype.delete=Bc;Et.prototype.get=qc;Et.prototype.has=Uc;Et.prototype.set=Wc;function Kt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Gc(){this.__data__=[]}function Kc(t){var e=this.__data__,n=Ke(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Nc.call(e,n,1),!0}function zc(t){var e=this.__data__,n=Ke(e,t);return n<0?void 0:e[n][1]}function Vc(t){return Ke(this.__data__,t)>-1}function Yc(t,e){var n=this.__data__,r=Ke(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Kt.prototype.clear=Gc;Kt.prototype.delete=Kc;Kt.prototype.get=zc;Kt.prototype.has=Vc;Kt.prototype.set=Yc;function zt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Xc(){this.__data__={hash:new Et,map:new(Ic||Kt),string:new Et}}function Jc(t){return ze(this,t).delete(t)}function Zc(t){return ze(this,t).get(t)}function Qc(t){return ze(this,t).has(t)}function Fc(t,e){return ze(this,t).set(t,e),this}zt.prototype.clear=Xc;zt.prototype.delete=Jc;zt.prototype.get=Zc;zt.prototype.has=Qc;zt.prototype.set=Fc;function Te(t){var e=-1,n=t?t.length:0;for(this.__data__=new zt;++e<n;)this.add(t[e])}function tu(t){return this.__data__.set(t,In),this}function eu(t){return this.__data__.has(t)}Te.prototype.add=Te.prototype.push=tu;Te.prototype.has=eu;function Ke(t,e){for(var n=t.length;n--;)if(cu(t[n][0],e))return n;return-1}function nu(t){if(!Ri(t)||ou(t))return!1;var e=uu(t)||Tc(t)?Dc:Mc;return e.test(au(t))}function ru(t,e,n){var r=-1,i=$c,o=t.length,a=!0,l=[],u=l;if(o>=bc){var f=iu(t);if(f)return $i(f);a=!1,i=Ec,u=new Te}else u=l;t:for(;++r<o;){var h=t[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue t;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var iu=un&&1/$i(new un([,-0]))[1]==vc?function(t){return new un(t)}:fu;function ze(t,e){var n=t.__data__;return su(e)?n[typeof e=="string"?"string":"hash"]:n.map}function qn(t,e){var n=Pc(t,e);return nu(n)?n:void 0}function su(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ou(t){return!!Ar&&Ar in t}function au(t){if(t!=null){try{return Ci.call(t)}catch{}try{return t+""}catch{}}return""}function lu(t){return t&&t.length?ru(t):[]}function cu(t,e){return t===e||t!==t&&e!==e}function uu(t){var e=Ri(t)?jc.call(t):"";return e==wc||e==xc}function Ri(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function fu(){}var hu=lu;const Ei=Cr(hu);var ke={exports:{}};ke.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",x="[object Map]",$="[object Number]",S="[object Object]",E="[object Promise]",C="[object RegExp]",T="[object Set]",O="[object String]",ot="[object Symbol]",D="[object WeakMap]",Q="[object ArrayBuffer]",G="[object DataView]",re="[object Float32Array]",Vt="[object Float64Array]",pt="[object Int8Array]",Un="[object Int16Array]",K="[object Int32Array]",Ot="[object Uint8Array]",ie="[object Uint8ClampedArray]",Oi="[object Uint16Array]",ji="[object Uint32Array]",Di=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ni=/^\w*$/,Ii=/^\./,Hi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bi=/[\\^$.*+?()[\]{}|]/g,qi=/\\(\\)?/g,Ui=/^\[object .+?Constructor\]$/,Wi=/^(?:0|[1-9]\d*)$/,P={};P[re]=P[Vt]=P[pt]=P[Un]=P[K]=P[Ot]=P[ie]=P[Oi]=P[ji]=!0,P[u]=P[f]=P[Q]=P[h]=P[G]=P[p]=P[y]=P[g]=P[x]=P[$]=P[S]=P[C]=P[T]=P[O]=P[D]=!1;var Wn=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Gi=typeof self=="object"&&self&&self.Object===Object&&self,gt=Wn||Gi||Function("return this")(),Gn=e&&!e.nodeType&&e,Kn=Gn&&!0&&t&&!t.nodeType&&t,Ki=Kn&&Kn.exports===Gn,zn=Ki&&Wn.process,Vn=function(){try{return zn&&zn.binding("util")}catch{}}(),Yn=Vn&&Vn.isTypedArray;function zi(s,c){for(var d=-1,m=s?s.length:0,w=Array(m);++d<m;)w[d]=c(s[d],d,s);return w}function Vi(s,c){for(var d=-1,m=c.length,w=s.length;++d<m;)s[w+d]=c[d];return s}function Yi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Xi(s){return function(c){return c==null?void 0:c[s]}}function Ji(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Zi(s){return function(c){return s(c)}}function Qi(s,c){return s==null?void 0:s[c]}function Ve(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Fi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,w){d[++c]=[w,m]}),d}function ts(s,c){return function(d){return s(c(d))}}function es(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ns=Array.prototype,rs=Function.prototype,se=Object.prototype,Ye=gt["__core-js_shared__"],Xn=function(){var s=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Jn=rs.toString,at=se.hasOwnProperty,jt=se.toString,is=RegExp("^"+Jn.call(at).replace(Bi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),oe=gt.Symbol,Zn=gt.Uint8Array,ss=se.propertyIsEnumerable,os=ns.splice,Qn=oe?oe.isConcatSpreadable:void 0,as=ts(Object.keys,Object),Xe=Dt(gt,"DataView"),Yt=Dt(gt,"Map"),Je=Dt(gt,"Promise"),Ze=Dt(gt,"Set"),Qe=Dt(gt,"WeakMap"),Xt=Dt(Object,"create"),ls=St(Xe),cs=St(Yt),us=St(Je),fs=St(Ze),hs=St(Qe),ae=oe?oe.prototype:void 0,Fe=ae?ae.valueOf:void 0,Fn=ae?ae.toString:void 0;function Lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ds(){this.__data__=Xt?Xt(null):{}}function ps(s){return this.has(s)&&delete this.__data__[s]}function gs(s){var c=this.__data__;if(Xt){var d=c[s];return d===i?void 0:d}return at.call(c,s)?c[s]:void 0}function ys(s){var c=this.__data__;return Xt?c[s]!==void 0:at.call(c,s)}function ms(s,c){var d=this.__data__;return d[s]=Xt&&c===void 0?i:c,this}Lt.prototype.clear=ds,Lt.prototype.delete=ps,Lt.prototype.get=gs,Lt.prototype.has=ys,Lt.prototype.set=ms;function lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function bs(){this.__data__=[]}function vs(s){var c=this.__data__,d=ce(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():os.call(c,d,1),!0}function ws(s){var c=this.__data__,d=ce(c,s);return d<0?void 0:c[d][1]}function xs(s){return ce(this.__data__,s)>-1}function _s(s,c){var d=this.__data__,m=ce(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}lt.prototype.clear=bs,lt.prototype.delete=vs,lt.prototype.get=ws,lt.prototype.has=xs,lt.prototype.set=_s;function ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function Ms(){this.__data__={hash:new Lt,map:new(Yt||lt),string:new Lt}}function Ls(s){return ue(this,s).delete(s)}function Ss(s){return ue(this,s).get(s)}function $s(s){return ue(this,s).has(s)}function As(s,c){return ue(this,s).set(s,c),this}ct.prototype.clear=Ms,ct.prototype.delete=Ls,ct.prototype.get=Ss,ct.prototype.has=$s,ct.prototype.set=As;function le(s){var c=-1,d=s?s.length:0;for(this.__data__=new ct;++c<d;)this.add(s[c])}function Cs(s){return this.__data__.set(s,i),this}function Rs(s){return this.__data__.has(s)}le.prototype.add=le.prototype.push=Cs,le.prototype.has=Rs;function ut(s){this.__data__=new lt(s)}function Es(){this.__data__=new lt}function Ps(s){return this.__data__.delete(s)}function Ts(s){return this.__data__.get(s)}function ks(s){return this.__data__.has(s)}function Os(s,c){var d=this.__data__;if(d instanceof lt){var m=d.__data__;if(!Yt||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ct(m)}return d.set(s,c),this}ut.prototype.clear=Es,ut.prototype.delete=Ps,ut.prototype.get=Ts,ut.prototype.has=ks,ut.prototype.set=Os;function js(s,c){var d=ft(s)||nn(s)?Ji(s.length,String):[],m=d.length,w=!!m;for(var v in s)at.call(s,v)&&!(w&&(v=="length"||rr(v,m)))&&d.push(v);return d}function ce(s,c){for(var d=s.length;d--;)if(or(s[d][0],c))return d;return-1}var Ds=Fs(Hs);function Ns(s,c,d,m,w){var v=-1,L=s.length;for(d||(d=so),w||(w=[]);++v<L;){var k=s[v];d(k)?Vi(w,k):w[w.length]=k}return w}var Is=to();function Hs(s,c){return s&&Is(s,c,ye)}function tr(s,c){c=fe(c,s)?[c]:er(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[he(c[d++])];return d&&d==m?s:void 0}function Bs(s){return jt.call(s)}function qs(s,c){return s!=null&&c in Object(s)}function tn(s,c,d,m,w){return s===c?!0:s==null||c==null||!pe(s)&&!ge(c)?s!==s&&c!==c:Us(s,c,tn,d,m,w)}function Us(s,c,d,m,w,v){var L=ft(s),k=ft(c),j=f,I=f;L||(j=yt(s),j=j==u?S:j),k||(I=yt(c),I=I==u?S:I);var U=j==S&&!Ve(s),W=I==S&&!Ve(c),H=j==I;if(H&&!U)return v||(v=new ut),L||po(s)?nr(s,c,d,m,w,v):eo(s,c,j,d,m,w,v);if(!(w&a)){var Y=U&&at.call(s,"__wrapped__"),X=W&&at.call(c,"__wrapped__");if(Y||X){var mt=Y?s.value():s,ht=X?c.value():c;return v||(v=new ut),d(mt,ht,m,w,v)}}return H?(v||(v=new ut),no(s,c,d,m,w,v)):!1}function Ws(s,c,d,m){var w=d.length,v=w;if(s==null)return!v;for(s=Object(s);w--;){var L=d[w];if(L[2]?L[1]!==s[L[0]]:!(L[0]in s))return!1}for(;++w<v;){L=d[w];var k=L[0],j=s[k],I=L[1];if(L[2]){if(j===void 0&&!(k in s))return!1}else{var U=new ut,W;if(!(W===void 0?tn(I,j,m,o|a,U):W))return!1}}return!0}function Gs(s){if(!pe(s)||ao(s))return!1;var c=ar(s)||Ve(s)?is:Ui;return c.test(St(s))}function Ks(s){return ge(s)&&rn(s.length)&&!!P[jt.call(s)]}function zs(s){return typeof s=="function"?s:s==null?bo:typeof s=="object"?ft(s)?Js(s[0],s[1]):Xs(s):vo(s)}function Vs(s){if(!lo(s))return as(s);var c=[];for(var d in Object(s))at.call(s,d)&&d!="constructor"&&c.push(d);return c}function Ys(s,c){var d=-1,m=de(s)?Array(s.length):[];return Ds(s,function(w,v,L){m[++d]=c(w,v,L)}),m}function Xs(s){var c=ro(s);return c.length==1&&c[0][2]?sr(c[0][0],c[0][1]):function(d){return d===s||Ws(d,s,c)}}function Js(s,c){return fe(s)&&ir(c)?sr(he(s),c):function(d){var m=yo(d,s);return m===void 0&&m===c?mo(d,s):tn(c,m,void 0,o|a)}}function Zs(s){return function(c){return tr(c,s)}}function Qs(s){if(typeof s=="string")return s;if(sn(s))return Fn?Fn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function er(s){return ft(s)?s:co(s)}function Fs(s,c){return function(d,m){if(d==null)return d;if(!de(d))return s(d,m);for(var w=d.length,v=-1,L=Object(d);++v<w&&m(L[v],v,L)!==!1;);return d}}function to(s){return function(c,d,m){for(var w=-1,v=Object(c),L=m(c),k=L.length;k--;){var j=L[++w];if(d(v[j],j,v)===!1)break}return c}}function nr(s,c,d,m,w,v){var L=w&a,k=s.length,j=c.length;if(k!=j&&!(L&&j>k))return!1;var I=v.get(s);if(I&&v.get(c))return I==c;var U=-1,W=!0,H=w&o?new le:void 0;for(v.set(s,c),v.set(c,s);++U<k;){var Y=s[U],X=c[U];if(m)var mt=L?m(X,Y,U,c,s,v):m(Y,X,U,s,c,v);if(mt!==void 0){if(mt)continue;W=!1;break}if(H){if(!Yi(c,function(ht,$t){if(!H.has($t)&&(Y===ht||d(Y,ht,m,w,v)))return H.add($t)})){W=!1;break}}else if(!(Y===X||d(Y,X,m,w,v))){W=!1;break}}return v.delete(s),v.delete(c),W}function eo(s,c,d,m,w,v,L){switch(d){case G:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Q:return!(s.byteLength!=c.byteLength||!m(new Zn(s),new Zn(c)));case h:case p:case $:return or(+s,+c);case y:return s.name==c.name&&s.message==c.message;case C:case O:return s==c+"";case x:var k=Fi;case T:var j=v&a;if(k||(k=es),s.size!=c.size&&!j)return!1;var I=L.get(s);if(I)return I==c;v|=o,L.set(s,c);var U=nr(k(s),k(c),m,w,v,L);return L.delete(s),U;case ot:if(Fe)return Fe.call(s)==Fe.call(c)}return!1}function no(s,c,d,m,w,v){var L=w&a,k=ye(s),j=k.length,I=ye(c),U=I.length;if(j!=U&&!L)return!1;for(var W=j;W--;){var H=k[W];if(!(L?H in c:at.call(c,H)))return!1}var Y=v.get(s);if(Y&&v.get(c))return Y==c;var X=!0;v.set(s,c),v.set(c,s);for(var mt=L;++W<j;){H=k[W];var ht=s[H],$t=c[H];if(m)var lr=L?m($t,ht,H,c,s,v):m(ht,$t,H,s,c,v);if(!(lr===void 0?ht===$t||d(ht,$t,m,w,v):lr)){X=!1;break}mt||(mt=H=="constructor")}if(X&&!mt){var me=s.constructor,be=c.constructor;me!=be&&"constructor"in s&&"constructor"in c&&!(typeof me=="function"&&me instanceof me&&typeof be=="function"&&be instanceof be)&&(X=!1)}return v.delete(s),v.delete(c),X}function ue(s,c){var d=s.__data__;return oo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function ro(s){for(var c=ye(s),d=c.length;d--;){var m=c[d],w=s[m];c[d]=[m,w,ir(w)]}return c}function Dt(s,c){var d=Qi(s,c);return Gs(d)?d:void 0}var yt=Bs;(Xe&&yt(new Xe(new ArrayBuffer(1)))!=G||Yt&&yt(new Yt)!=x||Je&&yt(Je.resolve())!=E||Ze&&yt(new Ze)!=T||Qe&&yt(new Qe)!=D)&&(yt=function(s){var c=jt.call(s),d=c==S?s.constructor:void 0,m=d?St(d):void 0;if(m)switch(m){case ls:return G;case cs:return x;case us:return E;case fs:return T;case hs:return D}return c});function io(s,c,d){c=fe(c,s)?[c]:er(c);for(var m,w=-1,L=c.length;++w<L;){var v=he(c[w]);if(!(m=s!=null&&d(s,v)))break;s=s[v]}if(m)return m;var L=s?s.length:0;return!!L&&rn(L)&&rr(v,L)&&(ft(s)||nn(s))}function so(s){return ft(s)||nn(s)||!!(Qn&&s&&s[Qn])}function rr(s,c){return c=c??l,!!c&&(typeof s=="number"||Wi.test(s))&&s>-1&&s%1==0&&s<c}function fe(s,c){if(ft(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||sn(s)?!0:Ni.test(s)||!Di.test(s)||c!=null&&s in Object(c)}function oo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function ao(s){return!!Xn&&Xn in s}function lo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||se;return s===d}function ir(s){return s===s&&!pe(s)}function sr(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var co=en(function(s){s=go(s);var c=[];return Ii.test(s)&&c.push(""),s.replace(Hi,function(d,m,w,v){c.push(w?v.replace(qi,"$1"):m||d)}),c});function he(s){if(typeof s=="string"||sn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function St(s){if(s!=null){try{return Jn.call(s)}catch{}try{return s+""}catch{}}return""}function uo(s,c){return Ns(fo(s,c))}function fo(s,c){var d=ft(s)?zi:Ys;return d(s,zs(c))}function en(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,w=c?c.apply(this,m):m[0],v=d.cache;if(v.has(w))return v.get(w);var L=s.apply(this,m);return d.cache=v.set(w,L),L};return d.cache=new(en.Cache||ct),d}en.Cache=ct;function or(s,c){return s===c||s!==s&&c!==c}function nn(s){return ho(s)&&at.call(s,"callee")&&(!ss.call(s,"callee")||jt.call(s)==u)}var ft=Array.isArray;function de(s){return s!=null&&rn(s.length)&&!ar(s)}function ho(s){return ge(s)&&de(s)}function ar(s){var c=pe(s)?jt.call(s):"";return c==g||c==b}function rn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function pe(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function ge(s){return!!s&&typeof s=="object"}function sn(s){return typeof s=="symbol"||ge(s)&&jt.call(s)==ot}var po=Yn?Zi(Yn):Ks;function go(s){return s==null?"":Qs(s)}function yo(s,c,d){var m=s==null?void 0:tr(s,c);return m===void 0?d:m}function mo(s,c){return s!=null&&io(s,c,qs)}function ye(s){return de(s)?js(s):Vs(s)}function bo(s){return s}function vo(s){return fe(s)?Xi(he(s)):Zs(s)}t.exports=uo})(ke,ke.exports);var du=ke.exports;const Pi=Cr(du);function pu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Zt(f).unix():parseFloat(f);e.forEach(f=>{var h,p;if(o.type==="range"){const y=Ct(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ei(Pi(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Il(e,Object.assign({keys:i},t.fuseConfig)),r}async function gu(t,e,n){let r;n.externalFilter?r=await Ul(e,n.filters,t):r=await Hl(e,n.filters,t),n.results=n.sortResults(r)}function yu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return _`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return _`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Ei(Pi(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return _`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return _`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return _``}}function mu(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function bu(t,e,n){return _`
    ${N(t.dirty,()=>_`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":_`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <div class="tooltip left">Reset filter</div>
              `}
        </button>
      `)}
  `}function vu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var ee,Bt,J,Wt,Ti,ki;class wu extends it{constructor(){super();q(this,Wt);q(this,ee,[]);q(this,Bt,[]);q(this,J,mc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=He(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){ve(this,ee,pu(B(this,J),B(this,Bt),this)),this.search()}async searchHandler(){await gu(B(this,J),B(this,Bt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return mu(n,B(this,J))}resetFilters(){vu(this)}firstUpdated(n){var i;let r={};$r.map(o=>{r={...r,[o]:this[o]}}),ve(this,J,r),ve(this,Bt,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){$r.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return _`
      <style>
        ${Ro}
        ${!this.unstyled&&Pn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":vt}
        @submit="${r=>r.preventDefault()}"
      >
        ${N(this.filterProperties,()=>_`
            <div style="display: var(--filter-display);">
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
                  ${N(!this.inlineMode,()=>_`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${N(!this.inlineMode&&B(this,J).filterProperties&&!this.inlineMode&&B(this,J).filterProperties&&xn(this.filters),()=>_`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?vt:_`
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
                  <div class="scroll" style="flex: 1;">
                    <ul id="filters" class="list no-space">
                      ${Ie(Object.values(this.filters),(r,i)=>_` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${o=>oi(o,B(this,J),this)}
                              data-details="${r.key}"
                            >
                              ${A(this,Wt,ki).call(this,r,Sr(i,1))}
                              ${A(this,Wt,Ti).call(this,r,Sr(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${N(((n=B(this,J))==null?void 0:n.showResults)&&this.results,()=>_`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${B(this,J)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${B(this,ee)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
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
    `}}ee=new WeakMap,Bt=new WeakMap,J=new WeakMap,Wt=new WeakSet,Ti=function(n,r){return yu(n,r,this)},ki=function(n,r){return bu(n,r,this)};customElements.define("eox-itemfilter",wu);export{wu as EOxItemFilter};
