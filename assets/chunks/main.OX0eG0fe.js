var bo=Object.defineProperty;var lr=t=>{throw TypeError(t)};var vo=(t,e,n)=>e in t?bo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Jt=(t,e,n)=>vo(t,typeof e!="symbol"?e+"":e,n),rn=(t,e,n)=>e.has(t)||lr("Cannot "+n);var K=(t,e,n)=>(rn(t,e,"read from private field"),n?n.call(t):e.get(t)),U=(t,e,n)=>e.has(t)?lr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),be=(t,e,n,r)=>(rn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),A=(t,e,n)=>(rn(t,e,"access private method"),n);import{r as it,E as vt,x as _}from"./lit-element.Deg-YTNa.js";import{o as ve,a as Ne}from"./unsafe-html.BZ1UpdA7.js";import{n as N}from"./when.BR7zwNJC.js";import{e as wo,a as xo}from"./addCommonStyleSheet.C1Vj32jp.js";import{d as Zt}from"./dayjs.min.Ba62AOpW.js";import{_ as Ie}from"./index.BUIxO2d3.js";import{s as Nt,u as cr}from"./static.3li6NsVA.js";import{c as _o}from"./repeat.DqtNkz5O.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as Mo}from"./orient2d.DArCjZZA.js";import{f as Se,a as cn,p as Lo,m as So,l as $o}from"./index.KH_2m63C.js";import{g as $r,c as bt}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.oNa9w_hR.js";const Ao=`
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
`;xo();const Rn=`
${wo}
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
`;var Te,Ar;class Co extends it{constructor(){super();U(this,Te);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return _`
      <style>
        ${!this.unstyled&&Rn}
      </style>

      ${N(this.filterObject.featured,()=>_`<slot name="filter"></slot>`,()=>_`<details
            @toggle="${A(this,Te,Ar)}"
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
    `}}Te=new WeakSet,Ar=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Co);function dt(t){return Array.isArray?Array.isArray(t):Pr(t)==="[object Array]"}function Ro(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Po(t){return t==null?"":Ro(t)}function et(t){return typeof t=="string"}function Cr(t){return typeof t=="number"}function Eo(t){return t===!0||t===!1||ko(t)&&Pr(t)=="[object Boolean]"}function Rr(t){return typeof t=="object"}function ko(t){return Rr(t)&&t!==null}function z(t){return t!=null}function sn(t){return!t.trim().length}function Pr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const To="Incorrect 'index' type",Oo=t=>`Invalid value for key ${t}`,jo=t=>`Pattern length exceeds max of ${t}.`,Do=t=>`Missing ${t} property in key`,No=t=>`Property 'weight' in key '${t}' must be a positive integer`,ur=Object.prototype.hasOwnProperty;class Io{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Er(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Er(t){let e=null,n=null,r=null,i=1,o=null;if(et(t)||dt(t))r=t,e=fr(t),n=un(t);else{if(!ur.call(t,"name"))throw new Error(Do("name"));const a=t.name;if(r=a,ur.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(No(a));e=fr(a),n=un(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function fr(t){return dt(t)?t:t.split(".")}function un(t){return dt(t)?t.join("."):t}function Ho(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(z(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!z(f))return;if(l===a.length-1&&(et(f)||Cr(f)||Eo(f)))n.push(Po(f));else if(dt(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(t,et(e)?e.split("."):e,0),r?n:n[0]}const Bo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},qo={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Uo={location:0,threshold:.6,distance:100},Wo={useExtendedSearch:!1,getFn:Ho,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var M={...qo,...Bo,...Uo,...Wo};const Go=/[^ ]+/g;function Ko(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Go).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Pn{constructor({getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){this.norm=Ko(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,et(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();et(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!z(e)||sn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(z(a)){if(dt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(z(h))if(et(h)&&!sn(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else dt(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(et(a)&&!sn(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function kr(t,e,{getFn:n=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){const i=new Pn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Er)),i.setSources(e),i.create(),i}function zo(t,{getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Pn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function we(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=M.distance,ignoreLocation:o=M.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function Vo(t=[],e=M.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const At=32;function Yo(t,e,n,{location:r=M.location,distance:i=M.distance,threshold:o=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:f=M.ignoreLocation}={}){if(e.length>At)throw new Error(jo(At));const h=e.length,p=t.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,$=x?Array(p):[];let S;for(;(S=t.indexOf(e,b))>-1;){let D=we(e,{currentLocation:S,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(D,g),b=S+h,x){let Q=0;for(;Q<h;)$[S+Q]=1,Q+=1}}b=-1;let P=[],C=1,k=h+p;const O=1<<h-1;for(let D=0;D<h;D+=1){let Q=0,W=k;for(;Q<W;)we(e,{errors:D,currentLocation:y+W,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Q=W:k=W,W=Math.floor((k-Q)/2+Q);k=W;let ne=Math.max(1,y-W+1),Vt=a?p:Math.min(y+W,p)+h,pt=Array(Vt+2);pt[Vt+1]=(1<<D)-1;for(let G=Vt;G>=ne;G-=1){let Ot=G-1,re=n[t.charAt(Ot)];if(x&&($[Ot]=+!!re),pt[G]=(pt[G+1]<<1|1)&re,D&&(pt[G]|=(P[G+1]|P[G])<<1|1|P[G+1]),pt[G]&O&&(C=we(e,{errors:D,currentLocation:Ot,expectedLocation:y,distance:i,ignoreLocation:f}),C<=g)){if(g=C,b=Ot,b<=y)break;ne=Math.max(1,2*y-b)}}if(we(e,{errors:D+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;P=pt}const ot={isMatch:b>=0,score:Math.max(.001,C)};if(x){const D=Vo($,l);D.length?u&&(ot.indices=D):ot.isMatch=!1}return ot}function Xo(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Tr{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:i=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreLocation:f=M.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:Xo(y),startIndex:g})},p=this.pattern.length;if(p>At){let y=0;const g=p%At,b=p-g;for(;y<b;)h(this.pattern.substr(y,At),y),y+=At;if(g){const x=p-At;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,e.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:$})=>{const{isMatch:S,score:P,indices:C}=Yo(e,b,x,{location:i+$,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});S&&(y=!0),p+=P,S&&C&&(h=[...h,...C])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _t{constructor(e){this.pattern=e}static isMultiMatch(e){return hr(e,this.multiRegex)}static isSingleMatch(e){return hr(e,this.singleRegex)}search(){}}function hr(t,e){const n=t.match(e);return n?n[1]:null}class Jo extends _t{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Zo extends _t{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Qo extends _t{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Fo extends _t{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ta extends _t{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ea extends _t{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Or extends _t{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:i=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreLocation:f=M.ignoreLocation}={}){super(e),this._bitapSearch=new Tr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class jr extends _t{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fn=[Jo,jr,Qo,Fo,ea,ta,Zo,Or],dr=fn.length,na=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ra="|";function ia(t,e={}){return t.split(ra).map(n=>{let r=n.trim().split(na).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<dr;){const h=fn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,e)),u=!0)}if(!u)for(f=-1;++f<dr;){const h=fn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,e));break}}}return i})}const sa=new Set([Or.type,jr.type]);class oa{constructor(e,{isCaseSensitive:n=M.isCaseSensitive,includeMatches:r=M.includeMatches,minMatchCharLength:i=M.minMatchCharLength,ignoreLocation:o=M.ignoreLocation,findAllMatches:a=M.findAllMatches,location:l=M.location,threshold:u=M.threshold,distance:f=M.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=ia(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:$}=g.search(e);if(b){if(o+=1,l+=$,r){const S=g.constructor.type;sa.has(S)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const hn=[];function aa(...t){hn.push(...t)}function dn(t,e){for(let n=0,r=hn.length;n<r;n+=1){let i=hn[n];if(i.condition(t,e))return new i(t,e)}return new Tr(t,e)}const $e={AND:"$and",OR:"$or"},pn={PATH:"$path",PATTERN:"$val"},gn=t=>!!(t[$e.AND]||t[$e.OR]),la=t=>!!t[pn.PATH],ca=t=>!dt(t)&&Rr(t)&&!gn(t),pr=t=>({[$e.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Dr(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=la(i);if(!a&&o.length>1&&!gn(i))return r(pr(i));if(ca(i)){const u=a?i[pn.PATH]:o[0],f=a?i[pn.PATTERN]:i[u];if(!et(f))throw new Error(Oo(u));const h={keyId:un(u),pattern:f};return n&&(h.searcher=dn(f,e)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];dt(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return gn(t)||(t=pr(t)),r(t)}function ua(t,{ignoreFieldNorm:e=M.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function fa(t,e){const n=t.matches;e.matches=[],z(n)&&n.forEach(r=>{if(!z(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function ha(t,e){e.score=t.score}function da(t,e,{includeMatches:n=M.includeMatches,includeScore:r=M.includeScore}={}){const i=[];return n&&i.push(fa),r&&i.push(ha),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Mt{constructor(e,n={},r){this.options={...M,...n},this.options.useExtendedSearch,this._keyStore=new Io(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Pn))throw new Error(To);this._myIndex=n||kr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){z(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=et(e)?et(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ua(u,{ignoreFieldNorm:l}),o&&u.sort(a),Cr(n)&&n>-1&&(u=u.slice(0,n)),da(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=dn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=Dr(e,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===$e.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(z(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=dn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!z(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!z(n))return[];let i=[];if(dt(n))n.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}Mt.version="7.0.0";Mt.createIndex=kr;Mt.parseIndex=zo;Mt.config=M;Mt.parseQuery=Dr;aa(oa);function Nr(t,e){const n=new Mt(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function pa(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const yn=Math.min,It=Math.max,Ae=Math.round,xe=Math.floor,nt=t=>({x:t,y:t});function Ir(t){return t.split("-")[0]}function ga(t){return t.split("-")[1]}function ya(t){return t==="x"?"y":"x"}function ma(t){return t==="y"?"height":"width"}const ba=new Set(["top","bottom"]);function Hr(t){return ba.has(Ir(t))?"y":"x"}function va(t){return ya(Hr(t))}function Br(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function gr(t,e,n){let{reference:r,floating:i}=t;const o=Hr(e),a=va(e),l=ma(a),u=Ir(e),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(ga(e)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const wa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=gr(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:$,fn:S}=l[x],{x:P,y:C,data:k,reset:O}=await S({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:t,floating:e}});h=P??h,p=C??p,g={...g,[$]:{...g[$],...k}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(y=O.placement),O.rects&&(f=O.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:h,y:p}=gr(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function He(){return typeof window<"u"}function Gt(t){return qr(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(qr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function qr(t){return He()?t instanceof Node||t instanceof V(t).Node:!1}function F(t){return He()?t instanceof Element||t instanceof V(t).Element:!1}function rt(t){return He()?t instanceof HTMLElement||t instanceof V(t).HTMLElement:!1}function yr(t){return!He()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof V(t).ShadowRoot}const xa=new Set(["inline","contents"]);function ee(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!xa.has(i)}const _a=new Set(["table","td","th"]);function Ma(t){return _a.has(Gt(t))}const La=[":popover-open",":modal"];function Be(t){return La.some(e=>{try{return t.matches(e)}catch{return!1}})}const Sa=["transform","translate","scale","rotate","perspective"],$a=["transform","translate","scale","rotate","perspective","filter"],Aa=["paint","layout","strict","content"];function En(t){const e=kn(),n=F(t)?tt(t):t;return Sa.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||$a.some(r=>(n.willChange||"").includes(r))||Aa.some(r=>(n.contain||"").includes(r))}function Ca(t){let e=wt(t);for(;rt(e)&&!qt(e);){if(En(e))return e;if(Be(e))return null;e=wt(e)}return null}function kn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ra=new Set(["html","body","#document"]);function qt(t){return Ra.has(Gt(t))}function tt(t){return V(t).getComputedStyle(t)}function qe(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(Gt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yr(t)&&t.host||st(t);return yr(e)?e.host:e}function Ur(t){const e=wt(t);return qt(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ee(e)?e:Ur(e)}function Qt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ur(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=V(i);if(o){const l=mn(a);return e.concat(a,a.visualViewport||[],ee(i)?i:[],l&&n?Qt(l):[])}return e.concat(i,Qt(i,[],n))}function mn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wr(t){const e=tt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=rt(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Ae(n)!==o||Ae(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Tn(t){return F(t)?t:t.contextElement}function Ht(t){const e=Tn(t);if(!rt(e))return nt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Wr(e);let a=(o?Ae(n.width):n.width)/r,l=(o?Ae(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Pa=nt(0);function Gr(t){const e=V(t);return!kn()||!e.visualViewport?Pa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ea(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==V(t)?!1:e}function Rt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Tn(t);let a=nt(1);e&&(r?F(r)&&(a=Ht(r)):a=Ht(t));const l=Ea(o,n,r)?Gr(o):nt(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=V(o),g=r&&F(r)?V(r):r;let b=y,x=mn(b);for(;x&&r&&g!==b;){const $=Ht(x),S=x.getBoundingClientRect(),P=tt(x),C=S.left+(x.clientLeft+parseFloat(P.paddingLeft))*$.x,k=S.top+(x.clientTop+parseFloat(P.paddingTop))*$.y;u*=$.x,f*=$.y,h*=$.x,p*=$.y,u+=C,f+=k,b=V(x),x=mn(b)}}return Br({width:h,height:p,x:u,y:f})}function On(t,e){const n=qe(t).scrollLeft;return e?e.left+n:Rt(st(t)).left+n}function Kr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:On(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function ka(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=st(r),l=e?Be(e.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=nt(1);const h=nt(0),p=rt(r);if((p||!p&&!o)&&((Gt(r)!=="body"||ee(a))&&(u=qe(r)),rt(r))){const g=Rt(r);f=Ht(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?Kr(a,u,!0):nt(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Ta(t){return Array.from(t.getClientRects())}function Oa(t){const e=st(t),n=qe(t),r=t.ownerDocument.body,i=It(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=It(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+On(t);const l=-n.scrollTop;return tt(r).direction==="rtl"&&(a+=It(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function ja(t,e){const n=V(t),r=st(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=kn();(!f||f&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}const Da=new Set(["absolute","fixed"]);function Na(t,e){const n=Rt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=rt(t)?Ht(t):nt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function mr(t,e,n){let r;if(e==="viewport")r=ja(t,n);else if(e==="document")r=Oa(st(t));else if(F(e))r=Na(e,n);else{const i=Gr(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Br(r)}function zr(t,e){const n=wt(t);return n===e||!F(n)||qt(n)?!1:tt(n).position==="fixed"||zr(n,e)}function Ia(t,e){const n=e.get(t);if(n)return n;let r=Qt(t,[],!1).filter(l=>F(l)&&Gt(l)!=="body"),i=null;const o=tt(t).position==="fixed";let a=o?wt(t):t;for(;F(a)&&!qt(a);){const l=tt(a),u=En(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&Da.has(i.position)||ee(a)&&!u&&zr(t,a))?r=r.filter(h=>h!==a):i=l,a=wt(a)}return e.set(t,r),r}function Ha(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?Be(e)?[]:Ia(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=mr(e,h,i);return f.top=It(p.top,f.top),f.right=yn(p.right,f.right),f.bottom=yn(p.bottom,f.bottom),f.left=It(p.left,f.left),f},mr(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ba(t){const{width:e,height:n}=Wr(t);return{width:e,height:n}}function qa(t,e,n){const r=rt(e),i=st(e),o=n==="fixed",a=Rt(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const u=nt(0);function f(){u.x=On(i)}if(r||!r&&!o)if((Gt(e)!=="body"||ee(i))&&(l=qe(e)),r){const g=Rt(e,!0,o,e);u.x=g.x+e.clientLeft,u.y=g.y+e.clientTop}else i&&f();o&&!r&&i&&f();const h=i&&!r&&!o?Kr(i,l):nt(0),p=a.left+l.scrollLeft-u.x-h.x,y=a.top+l.scrollTop-u.y-h.y;return{x:p,y,width:a.width,height:a.height}}function on(t){return tt(t).position==="static"}function br(t,e){if(!rt(t)||tt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return st(t)===n&&(n=n.ownerDocument.body),n}function Vr(t,e){const n=V(t);if(Be(t))return n;if(!rt(t)){let i=wt(t);for(;i&&!qt(i);){if(F(i)&&!on(i))return i;i=wt(i)}return n}let r=br(t,e);for(;r&&Ma(r)&&on(r);)r=br(r,e);return r&&qt(r)&&on(r)&&!En(r)?n:r||Ca(t)||n}const Ua=async function(t){const e=this.getOffsetParent||Vr,n=this.getDimensions,r=await n(t.floating);return{reference:qa(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wa(t){return tt(t).direction==="rtl"}const Ga={convertOffsetParentRelativeRectToViewportRelativeRect:ka,getDocumentElement:st,getClippingRect:Ha,getOffsetParent:Vr,getElementRects:Ua,getClientRects:Ta,getDimensions:Ba,getScale:Ht,isElement:F,isRTL:Wa};function Yr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ka(t,e){let n=null,r;const i=st(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||e(),!y||!g)return;const b=xe(p),x=xe(i.clientWidth-(h+y)),$=xe(i.clientHeight-(p+g)),S=xe(h),C={rootMargin:-b+"px "+-x+"px "+-$+"px "+-S+"px",threshold:It(0,yn(1,u))||1};let k=!0;function O(ot){const D=ot[0].intersectionRatio;if(D!==u){if(!k)return a();D?a(!1,D):r=setTimeout(()=>{a(!1,1e-7)},1e3)}D===1&&!Yr(f,t.getBoundingClientRect())&&a(),k=!1}try{n=new IntersectionObserver(O,{...C,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,C)}n.observe(t)}return a(!0),o}function za(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Tn(t),h=i||o?[...f?Qt(f):[],...Qt(e)]:[];h.forEach(S=>{i&&S.addEventListener("scroll",n,{passive:!0}),o&&S.addEventListener("resize",n)});const p=f&&l?Ka(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(S=>{let[P]=S;P&&P.target===f&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var C;(C=g)==null||C.observe(e)})),n()}),f&&!u&&g.observe(f),g.observe(e));let b,x=u?Rt(t):null;u&&$();function $(){const S=Rt(t);x&&!Yr(x,S)&&n(),x=S,b=requestAnimationFrame($)}return n(),()=>{var S;h.forEach(P=>{i&&P.removeEventListener("scroll",n),o&&P.removeEventListener("resize",n)}),p==null||p(),(S=g)==null||S.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Va=(t,e,n)=>{const r=new Map,i={platform:Ga,...n},o={...i.platform,_c:r};return wa(t,e,{...i,platform:o})};function Ya(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return za(e,n,()=>{n.matches(":popover-open")&&Va(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Xr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Nr({target:{value:""}},t)}function Xa(t,e){e.inlineMode&&t.stopPropagation()}function Ja(t){t.inlineMode&&(t.showDropdown=!0)}function Za(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Qa(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function Fa(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function tl(t,e){var n,r,i=0,o,a,l,u,f,h,p,y=t[0],g=t[1],b=e.length;for(n=0;n<b;n++){r=0;var x=e[n],$=x.length-1;if(h=x[0],h[0]!==x[$][0]&&h[1]!==x[$][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<$;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=Mo(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Jr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function el(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ut(t){return t.type==="Feature"?t.geometry:t}function Z(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Jr(t),i=Ut(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&nl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=tl(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function nl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Zr{constructor(e=[],n=rl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function rl(t,e){return t<e?-1:t>e?1:0}function Qr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function il(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class vr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function sl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)wr(n[r],e)}else wr(t,e)}let _e=0,Me=0,Le=0;function wr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Me=Me+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new vr(a,_e,Me,Le),h=new vr(l,_e,Me,Le+1);f.otherEvent=h,h.otherEvent=f,Qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=l,Le=Le+1}}_e=_e+1}class ol{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function al(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),$=r+g*(o-r);return[x,$]}return!1}function ll(t,e){e=e||!1;const n=[],r=new Zr([],il);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new ol(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=al(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function cl(t,e){const n=new Zr([],Qr);return sl(t,n),ll(n,e)}var ul=cl;function jn(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Se(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Se(e));const a=ul(cn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return cn(l.map(u=>Lo(u)))}function Fr(t,e,n){if(t!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=t.type,b=g==="FeatureCollection",x=g==="Feature",$=b?t.features.length:1,S=0;S<$;S++){f=b?t.features[S].geometry:x?t.geometry:t,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var P=0;P<l;P++){var C=0,k=0;if(a=y?f.geometries[P]:f,a!==null){u=a.coordinates;var O=a.type;switch(h=0,O){case null:break;case"Point":if(e(u,p,S,C,k)===!1)return!1;p++,C++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],p,S,C,k)===!1)return!1;p++,O==="MultiPoint"&&C++}O==="LineString"&&C++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],p,S,C,k)===!1)return!1;p++}O==="MultiLineString"&&C++,O==="Polygon"&&k++}O==="Polygon"&&C++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(k=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(e(u[r][i][o],p,S,C,k)===!1)return!1;p++}k++}C++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Fr(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function fl(t,e){var n,r,i,o,a,l,u,f,h,p,y=0,g=t.type==="FeatureCollection",b=t.type==="Feature",x=g?t.features.length:1;for(n=0;n<x;n++){for(l=g?t.features[n].geometry:b?t.geometry:t,f=g?t.features[n].properties:b?t.properties:{},h=g?t.features[n].bbox:b?t.bbox:void 0,p=g?t.features[n].id:b?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(e(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Ce(t,e){fl(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Se(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(e(Se(p,i),r,f)===!1)return!1}})}function bn(t,e={}){const n=Ut(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return hl(n,e);case"MultiPolygon":return dl(n,e);default:throw new Error("invalid poly")}}function hl(t,e={}){const r=Ut(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return ti(r,i)}function dl(t,e={}){const r=Ut(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(ti(a,i))}),cn(o)}function ti(t,e){return t.length>1?So(t,e):$o(t[0],e)}function pl(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ce(t,i=>{Ce(e,o=>{if(r===!1)return!1;r=gl(i.geometry,o.geometry,n)})}),r}function gl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!vl(t.coordinates,e.coordinates);case"LineString":return!xr(e,t);case"Polygon":return!Z(t,e)}break;case"LineString":switch(e.type){case"Point":return!xr(t,e);case"LineString":return!yl(t,e,n);case"Polygon":return!_r(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!Z(e,t);case"LineString":return!_r(t,e,n);case"Polygon":return!ml(e,t,n)}}return!1}function xr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(bl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function yl(t,e,n){return jn(t,e,{ignoreSelfIntersections:n}).features.length>0}function _r(t,e,n){for(const i of e.coordinates)if(Z(i,t))return!0;return jn(e,bn(t),{ignoreSelfIntersections:n}).features.length>0}function ml(t,e,n){for(const i of t.coordinates[0])if(Z(i,e))return!0;for(const i of e.coordinates[0])if(Z(i,t))return!0;return jn(bn(t),bn(e),{ignoreSelfIntersections:n}).features.length>0}function bl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function vl(t,e){return t[0]===e[0]&&t[1]===e[1]}function wl(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ce(t,i=>{Ce(e,o=>{if(r===!0)return!0;r=!pl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var xl=wl;function Re(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Fr(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Pe(t,e,n={}){const r=Jr(t),i=el(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),_l(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function _l(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],u=t[1],f=e[0],h=e[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Ml(t,e){var n=Ut(t),r=Ut(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Ll(n,r);case"LineString":return Pe(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return Z(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Sl(n,r);case"LineString":return $l(n,r);case"Polygon":case"MultiPolygon":return Al(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Cl(n,r);case"Polygon":case"MultiPolygon":return Rl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Pl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Ll(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(ni(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Sl(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)ni(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function $l(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Pe(t.coordinates[r],e))return!1;n||(n=Pe(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Al(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=Z(t.coordinates[i],e),!r){n=!1;break}r=Z(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function Cl(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Pe(t.coordinates[n],e))return!1;return!0}function Rl(t,e){var n=Re(e),r=Re(t);if(!ei(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!Z(t.coordinates[o],e))return!1;if(i||(i=Z(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=El(t.coordinates[o],t.coordinates[o+1]);i=Z(a,e,{ignoreBoundary:!0})}}return i}function Pl(t,e){var n=Re(t),r=Re(e);if(!ei(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!Z(t.coordinates[0][i],e))return!1;return!0}function ei(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function ni(t,e){return t[0]===e[0]&&t[1]===e[1]}function El(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var kl=Ml;const Tl=(t,e)=>e?xl(t,e):!0,Ol=(t,e)=>e?kl(t,e):!0;function jl(t,e="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ri;const Dl=(t,e)=>{ri=new Mt(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Nl=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=ri.search(l);i=n.enableHighlighting?jl(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Zt(b).unix():b,g=Ct(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Ct(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Ol(p,a[h].geometry):Tl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Il(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ue(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Mr(t,e){return t*2+e}function Hl(t){return Object.keys(t).map(e=>({title:_`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function vn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Bl(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function ii(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Ct(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var R,si,wn,xn,oi,_n,Mn,ai,Ln,li,ci;class ql extends it{constructor(){super();U(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=A(this,R,oi).bind(this),this._handleKeyDown=A(this,R,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&A(this,R,wn).call(this)}disconnectedCallback(){this.inlineMode&&A(this,R,xn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?A(this,R,wn).call(this):A(this,R,xn).call(this))}render(){return _`
      <style>
        ${!this.unstyled&&Rn}
      </style>
      ${this.inlineMode?_`
            <div
              class="inline-container-wrapper"
              @click="${A(this,R,Mn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Hl(this.filters)}
                      .controller=${{remove:n=>A(this,R,li).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${N(vn(this.filters),()=>_`
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
                  class="input-container field no-margin ${vn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${A(this,R,Mn)}"
                    @focus="${A(this,R,ai)}"
                    @input="${A(this,R,ci)}"
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
                  @keydown="${A(this,R,_n)}"
                  @click="${A(this,R,Ln)}"
                  @focus="${A(this,R,Ln)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:_`<slot name="section"></slot>`}
    `}}R=new WeakSet,si=function(){setTimeout(()=>this._overlayCleanup=Ya(this))},wn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),A(this,R,si).call(this)},xn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},oi=function(n){Fa(n,this)},_n=function(n){Qa(n,this)},Mn=function(n){Za(n,this)},ai=function(){Ja(this)},Ln=function(n){Xa(n,this)},li=function(n){pa(n,this)},ci=function(n){Nr(n,this)};customElements.define("eox-itemfilter-container",ql);function Ul(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Ue(t.filterObject),t.requestUpdate()}function Wl(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Sn="ddd, D MMM YYYY HH:mm:ss";function Gl(t){if(t.filterObject=Ue(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Kl(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Zt.unix(n).format(Sn)} - ${Zt.unix(r).format(Sn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function zl(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?Zt.unix(i).format(Sn):i;return _`<div class="range-${e}">${o}</div>`}function Vl(t){Yl(-1,t),Ue(t.filterObject),t.requestUpdate()}function Yl(t,e){e.selectedItems=[],Dn(e),fi(e)}function ui(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),Dn(e),fi(e)}function Xl(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function Jl(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&ui(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Zl(t,e){(t.has("suggestions")||t.has("query"))&&Dn(e)}function Ql(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.toString().localeCompare(o.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function Dn(t){var r,i,o;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(a=>`${a}`);let n=e;t.query&&(n=new Mt(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:Ql(t,n),(o=t.filterObject)!=null&&o.filterKeys&&(t.filterObject.state=e.reduce((a,l)=>(l in a||(a[l]=void 0),a),t.filterObject.state)),t.highlightedIndex=-1}function fi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Fl(t){Ue(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function tc(t){t.renderRoot.querySelector("#eox-map").innerHTML="",hi(t)}function ec(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function hi(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&nc(t.geometry),r=Il(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function nc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var Oe;class rc extends it{constructor(){super();U(this,Oe,()=>{Wl(this)});Jt(this,"debouncedInputHandler",Ie(K(this,Oe),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Ul(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return _`
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
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}Oe=new WeakMap;customElements.define("eox-itemfilter-text",rc);function ic(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}function sc(t,e){return _`
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
        ${di(e,t)}
      </div>
    </details>
  `}function di(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":vt};return cr`
    ${t.resultType==="cards"?Nt("<eox-layout fill-grid>"):Nt('<ul id="results" class="list no-space" part="results">')}
      ${_o(r,a=>a.id,a=>cr`
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
                    <span class="title truncate"
                      >${ve(a[i.titleProperty])}</span
                    >
                    ${N(!!a[i.subTitleProperty],()=>_`
                        <small class="subtitle no-line truncate"
                          >${ve(a[i.subTitleProperty].toString())}</small
                        >
                      `)}
                  </div>
                `,()=>_`
                  <div class="small-line max truncate">
                    <span class="title truncate"
                      >${ve(a[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${N(t.enableResultAction,()=>_`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${ve(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?Nt("</eox-layout>"):Nt("</ul>")}
  `}var Et,$n,pi;class oc extends it{constructor(){super();U(this,Et);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return ic(n,r,this)}createRenderRoot(){return this}handleAccordion(n){ii(n,this.config,this)}render(){return _`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${N(this.results.length<1,()=>_`<small class="no-results">No matching items</small>`,()=>vt)}
          ${N(this.config.aggregateResults,()=>Ne(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>_`${N(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>_`<div style="margin-left: -8px">
                        ${A(this,Et,$n).call(this,n)}
                      </div>`,()=>A(this,Et,pi).call(this,n))}`),()=>A(this,Et,$n).call(this))}
        </div>
      </section>
    `}}Et=new WeakSet,$n=function(n){return di(this,n)},pi=function(n){return sc(n,this)};customElements.define("eox-itemfilter-results",oc);var xt,yi,mi,bi;class gi extends it{constructor(){super();U(this,xt);Jt(this,"debouncedInputHandler",Ie(A(this,xt,bi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Zl(n,this)}reset(){Vl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":vt;return _`
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
                @input=${A(this,xt,yi)}
                @keydown=${A(this,xt,mi)}
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
    `}}xt=new WeakSet,yi=function(n){Xl(n,this)},mi=function(n){Jl(n,this)},bi=function(n){ui(n,this)},Jt(gi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",gi);var kt,wi,An;class vi extends it{constructor(){super();U(this,kt);this.filterObject={},this.tabIndex=0,this.inputHandler=A(this,kt,wi).bind(this),this.debouncedInputHandler=Ie(this.inputHandler,500,{leading:!1})}reset(){Gl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>_`
        <div style="margin-left: var(--list-padding)">
          ${A(this,kt,An).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${A(this,kt,An).call(this,"max","after")}
        </div>
      `)}}kt=new WeakSet,wi=function(n){Kl(n,this)},An=function(n,r){return zl(n,r,this)},Jt(vi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",vi);var je,xi;class ac extends it{constructor(){super();U(this,je);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Fl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return _`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${Ne(["intersects","within"],r=>_`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||vt}"
                    value="${r}"
                    @click=${()=>A(this,je,xi).call(this,r)}
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
      `})}}je=new WeakSet,xi=function(n){ec(n,this)};customElements.define("eox-itemfilter-spatial",ac);var De,_i;class lc extends it{constructor(){super();U(this,De);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){A(this,De,_i).call(this)}reset(){tc(this)}render(){return _`<div id="eox-map"></div>`}}De=new WeakSet,_i=function(){hi(this)};customElements.define("eox-itemfilter-spatial-filter",lc);function cc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function uc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&fc(n,t.target.value??"",e))}function fc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Tt,Cn,Mi;class hc extends it{constructor(){super();U(this,Tt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",A(this,Tt,Cn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",A(this,Tt,Cn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return _`
      <span class="chip-container">
        ${Ne(this.items,n=>_`
            <span class="chip tiny-margin" @click=${A(this,Tt,Mi).bind(this)}>
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
    `}}Tt=new WeakSet,Cn=function(n){uc(n,this)},Mi=function(n){cc(n,this)};customElements.define("eox-itemfilter-chips",hc);const dc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Lr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var pc=200,Nn="__lodash_hash_undefined__",gc=1/0,yc="[object Function]",mc="[object GeneratorFunction]",bc=/[\\^$.*+?()[\]{}|]/g,vc=/^\[object .+?Constructor\]$/,wc=typeof bt=="object"&&bt&&bt.Object===Object&&bt,xc=typeof self=="object"&&self&&self.Object===Object&&self,In=wc||xc||Function("return this")();function _c(t,e){var n=t?t.length:0;return!!n&&Lc(t,e,0)>-1}function Mc(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function Lc(t,e,n){if(e!==e)return Mc(t,Sc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Sc(t){return t!==t}function $c(t,e){return t.has(e)}function Ac(t,e){return t==null?void 0:t[e]}function Cc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Li(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Rc=Array.prototype,Pc=Function.prototype,Si=Object.prototype,an=In["__core-js_shared__"],Sr=function(){var t=/[^.]+$/.exec(an&&an.keys&&an.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),$i=Pc.toString,Hn=Si.hasOwnProperty,Ec=Si.toString,kc=RegExp("^"+$i.call(Hn).replace(bc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Tc=Rc.splice,Oc=Bn(In,"Map"),ln=Bn(In,"Set"),Ft=Bn(Object,"create");function Pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function jc(){this.__data__=Ft?Ft(null):{}}function Dc(t){return this.has(t)&&delete this.__data__[t]}function Nc(t){var e=this.__data__;if(Ft){var n=e[t];return n===Nn?void 0:n}return Hn.call(e,t)?e[t]:void 0}function Ic(t){var e=this.__data__;return Ft?e[t]!==void 0:Hn.call(e,t)}function Hc(t,e){var n=this.__data__;return n[t]=Ft&&e===void 0?Nn:e,this}Pt.prototype.clear=jc;Pt.prototype.delete=Dc;Pt.prototype.get=Nc;Pt.prototype.has=Ic;Pt.prototype.set=Hc;function Kt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Bc(){this.__data__=[]}function qc(t){var e=this.__data__,n=We(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Tc.call(e,n,1),!0}function Uc(t){var e=this.__data__,n=We(e,t);return n<0?void 0:e[n][1]}function Wc(t){return We(this.__data__,t)>-1}function Gc(t,e){var n=this.__data__,r=We(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Kt.prototype.clear=Bc;Kt.prototype.delete=qc;Kt.prototype.get=Uc;Kt.prototype.has=Wc;Kt.prototype.set=Gc;function zt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Kc(){this.__data__={hash:new Pt,map:new(Oc||Kt),string:new Pt}}function zc(t){return Ge(this,t).delete(t)}function Vc(t){return Ge(this,t).get(t)}function Yc(t){return Ge(this,t).has(t)}function Xc(t,e){return Ge(this,t).set(t,e),this}zt.prototype.clear=Kc;zt.prototype.delete=zc;zt.prototype.get=Vc;zt.prototype.has=Yc;zt.prototype.set=Xc;function Ee(t){var e=-1,n=t?t.length:0;for(this.__data__=new zt;++e<n;)this.add(t[e])}function Jc(t){return this.__data__.set(t,Nn),this}function Zc(t){return this.__data__.has(t)}Ee.prototype.add=Ee.prototype.push=Jc;Ee.prototype.has=Zc;function We(t,e){for(var n=t.length;n--;)if(su(t[n][0],e))return n;return-1}function Qc(t){if(!Ai(t)||nu(t))return!1;var e=ou(t)||Cc(t)?kc:vc;return e.test(ru(t))}function Fc(t,e,n){var r=-1,i=_c,o=t.length,a=!0,l=[],u=l;if(o>=pc){var f=tu(t);if(f)return Li(f);a=!1,i=$c,u=new Ee}else u=l;t:for(;++r<o;){var h=t[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue t;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var tu=ln&&1/Li(new ln([,-0]))[1]==gc?function(t){return new ln(t)}:au;function Ge(t,e){var n=t.__data__;return eu(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Bn(t,e){var n=Ac(t,e);return Qc(n)?n:void 0}function eu(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function nu(t){return!!Sr&&Sr in t}function ru(t){if(t!=null){try{return $i.call(t)}catch{}try{return t+""}catch{}}return""}function iu(t){return t&&t.length?Fc(t):[]}function su(t,e){return t===e||t!==t&&e!==e}function ou(t){var e=Ai(t)?Ec.call(t):"";return e==yc||e==mc}function Ai(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function au(){}var lu=iu;const Ci=$r(lu);var ke={exports:{}};ke.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",x="[object Map]",$="[object Number]",S="[object Object]",P="[object Promise]",C="[object RegExp]",k="[object Set]",O="[object String]",ot="[object Symbol]",D="[object WeakMap]",Q="[object ArrayBuffer]",W="[object DataView]",ne="[object Float32Array]",Vt="[object Float64Array]",pt="[object Int8Array]",qn="[object Int16Array]",G="[object Int32Array]",Ot="[object Uint8Array]",re="[object Uint8ClampedArray]",ki="[object Uint16Array]",Ti="[object Uint32Array]",Oi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ji=/^\w*$/,Di=/^\./,Ni=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ii=/[\\^$.*+?()[\]{}|]/g,Hi=/\\(\\)?/g,Bi=/^\[object .+?Constructor\]$/,qi=/^(?:0|[1-9]\d*)$/,E={};E[ne]=E[Vt]=E[pt]=E[qn]=E[G]=E[Ot]=E[re]=E[ki]=E[Ti]=!0,E[u]=E[f]=E[Q]=E[h]=E[W]=E[p]=E[y]=E[g]=E[x]=E[$]=E[S]=E[C]=E[k]=E[O]=E[D]=!1;var Un=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Ui=typeof self=="object"&&self&&self.Object===Object&&self,gt=Un||Ui||Function("return this")(),Wn=e&&!e.nodeType&&e,Gn=Wn&&!0&&t&&!t.nodeType&&t,Wi=Gn&&Gn.exports===Wn,Kn=Wi&&Un.process,zn=function(){try{return Kn&&Kn.binding("util")}catch{}}(),Vn=zn&&zn.isTypedArray;function Gi(s,c){for(var d=-1,m=s?s.length:0,w=Array(m);++d<m;)w[d]=c(s[d],d,s);return w}function Ki(s,c){for(var d=-1,m=c.length,w=s.length;++d<m;)s[w+d]=c[d];return s}function zi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Vi(s){return function(c){return c==null?void 0:c[s]}}function Yi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Xi(s){return function(c){return s(c)}}function Ji(s,c){return s==null?void 0:s[c]}function Ke(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Zi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,w){d[++c]=[w,m]}),d}function Qi(s,c){return function(d){return s(c(d))}}function Fi(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ts=Array.prototype,es=Function.prototype,ie=Object.prototype,ze=gt["__core-js_shared__"],Yn=function(){var s=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Xn=es.toString,at=ie.hasOwnProperty,jt=ie.toString,ns=RegExp("^"+Xn.call(at).replace(Ii,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),se=gt.Symbol,Jn=gt.Uint8Array,rs=ie.propertyIsEnumerable,is=ts.splice,Zn=se?se.isConcatSpreadable:void 0,ss=Qi(Object.keys,Object),Ve=Dt(gt,"DataView"),Yt=Dt(gt,"Map"),Ye=Dt(gt,"Promise"),Xe=Dt(gt,"Set"),Je=Dt(gt,"WeakMap"),Xt=Dt(Object,"create"),os=St(Ve),as=St(Yt),ls=St(Ye),cs=St(Xe),us=St(Je),oe=se?se.prototype:void 0,Ze=oe?oe.valueOf:void 0,Qn=oe?oe.toString:void 0;function Lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function fs(){this.__data__=Xt?Xt(null):{}}function hs(s){return this.has(s)&&delete this.__data__[s]}function ds(s){var c=this.__data__;if(Xt){var d=c[s];return d===i?void 0:d}return at.call(c,s)?c[s]:void 0}function ps(s){var c=this.__data__;return Xt?c[s]!==void 0:at.call(c,s)}function gs(s,c){var d=this.__data__;return d[s]=Xt&&c===void 0?i:c,this}Lt.prototype.clear=fs,Lt.prototype.delete=hs,Lt.prototype.get=ds,Lt.prototype.has=ps,Lt.prototype.set=gs;function lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ys(){this.__data__=[]}function ms(s){var c=this.__data__,d=le(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():is.call(c,d,1),!0}function bs(s){var c=this.__data__,d=le(c,s);return d<0?void 0:c[d][1]}function vs(s){return le(this.__data__,s)>-1}function ws(s,c){var d=this.__data__,m=le(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}lt.prototype.clear=ys,lt.prototype.delete=ms,lt.prototype.get=bs,lt.prototype.has=vs,lt.prototype.set=ws;function ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function xs(){this.__data__={hash:new Lt,map:new(Yt||lt),string:new Lt}}function _s(s){return ce(this,s).delete(s)}function Ms(s){return ce(this,s).get(s)}function Ls(s){return ce(this,s).has(s)}function Ss(s,c){return ce(this,s).set(s,c),this}ct.prototype.clear=xs,ct.prototype.delete=_s,ct.prototype.get=Ms,ct.prototype.has=Ls,ct.prototype.set=Ss;function ae(s){var c=-1,d=s?s.length:0;for(this.__data__=new ct;++c<d;)this.add(s[c])}function $s(s){return this.__data__.set(s,i),this}function As(s){return this.__data__.has(s)}ae.prototype.add=ae.prototype.push=$s,ae.prototype.has=As;function ut(s){this.__data__=new lt(s)}function Cs(){this.__data__=new lt}function Rs(s){return this.__data__.delete(s)}function Ps(s){return this.__data__.get(s)}function Es(s){return this.__data__.has(s)}function ks(s,c){var d=this.__data__;if(d instanceof lt){var m=d.__data__;if(!Yt||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ct(m)}return d.set(s,c),this}ut.prototype.clear=Cs,ut.prototype.delete=Rs,ut.prototype.get=Ps,ut.prototype.has=Es,ut.prototype.set=ks;function Ts(s,c){var d=ft(s)||tn(s)?Yi(s.length,String):[],m=d.length,w=!!m;for(var v in s)at.call(s,v)&&!(w&&(v=="length"||nr(v,m)))&&d.push(v);return d}function le(s,c){for(var d=s.length;d--;)if(sr(s[d][0],c))return d;return-1}var Os=Zs(Ns);function js(s,c,d,m,w){var v=-1,L=s.length;for(d||(d=ro),w||(w=[]);++v<L;){var T=s[v];d(T)?Ki(w,T):w[w.length]=T}return w}var Ds=Qs();function Ns(s,c){return s&&Ds(s,c,ge)}function Fn(s,c){c=ue(c,s)?[c]:tr(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[fe(c[d++])];return d&&d==m?s:void 0}function Is(s){return jt.call(s)}function Hs(s,c){return s!=null&&c in Object(s)}function Qe(s,c,d,m,w){return s===c?!0:s==null||c==null||!de(s)&&!pe(c)?s!==s&&c!==c:Bs(s,c,Qe,d,m,w)}function Bs(s,c,d,m,w,v){var L=ft(s),T=ft(c),j=f,I=f;L||(j=yt(s),j=j==u?S:j),T||(I=yt(c),I=I==u?S:I);var B=j==S&&!Ke(s),q=I==S&&!Ke(c),H=j==I;if(H&&!B)return v||(v=new ut),L||fo(s)?er(s,c,d,m,w,v):Fs(s,c,j,d,m,w,v);if(!(w&a)){var Y=B&&at.call(s,"__wrapped__"),X=q&&at.call(c,"__wrapped__");if(Y||X){var mt=Y?s.value():s,ht=X?c.value():c;return v||(v=new ut),d(mt,ht,m,w,v)}}return H?(v||(v=new ut),to(s,c,d,m,w,v)):!1}function qs(s,c,d,m){var w=d.length,v=w;if(s==null)return!v;for(s=Object(s);w--;){var L=d[w];if(L[2]?L[1]!==s[L[0]]:!(L[0]in s))return!1}for(;++w<v;){L=d[w];var T=L[0],j=s[T],I=L[1];if(L[2]){if(j===void 0&&!(T in s))return!1}else{var B=new ut,q;if(!(q===void 0?Qe(I,j,m,o|a,B):q))return!1}}return!0}function Us(s){if(!de(s)||so(s))return!1;var c=or(s)||Ke(s)?ns:Bi;return c.test(St(s))}function Ws(s){return pe(s)&&en(s.length)&&!!E[jt.call(s)]}function Gs(s){return typeof s=="function"?s:s==null?yo:typeof s=="object"?ft(s)?Ys(s[0],s[1]):Vs(s):mo(s)}function Ks(s){if(!oo(s))return ss(s);var c=[];for(var d in Object(s))at.call(s,d)&&d!="constructor"&&c.push(d);return c}function zs(s,c){var d=-1,m=he(s)?Array(s.length):[];return Os(s,function(w,v,L){m[++d]=c(w,v,L)}),m}function Vs(s){var c=eo(s);return c.length==1&&c[0][2]?ir(c[0][0],c[0][1]):function(d){return d===s||qs(d,s,c)}}function Ys(s,c){return ue(s)&&rr(c)?ir(fe(s),c):function(d){var m=po(d,s);return m===void 0&&m===c?go(d,s):Qe(c,m,void 0,o|a)}}function Xs(s){return function(c){return Fn(c,s)}}function Js(s){if(typeof s=="string")return s;if(nn(s))return Qn?Qn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function tr(s){return ft(s)?s:ao(s)}function Zs(s,c){return function(d,m){if(d==null)return d;if(!he(d))return s(d,m);for(var w=d.length,v=-1,L=Object(d);++v<w&&m(L[v],v,L)!==!1;);return d}}function Qs(s){return function(c,d,m){for(var w=-1,v=Object(c),L=m(c),T=L.length;T--;){var j=L[++w];if(d(v[j],j,v)===!1)break}return c}}function er(s,c,d,m,w,v){var L=w&a,T=s.length,j=c.length;if(T!=j&&!(L&&j>T))return!1;var I=v.get(s);if(I&&v.get(c))return I==c;var B=-1,q=!0,H=w&o?new ae:void 0;for(v.set(s,c),v.set(c,s);++B<T;){var Y=s[B],X=c[B];if(m)var mt=L?m(X,Y,B,c,s,v):m(Y,X,B,s,c,v);if(mt!==void 0){if(mt)continue;q=!1;break}if(H){if(!zi(c,function(ht,$t){if(!H.has($t)&&(Y===ht||d(Y,ht,m,w,v)))return H.add($t)})){q=!1;break}}else if(!(Y===X||d(Y,X,m,w,v))){q=!1;break}}return v.delete(s),v.delete(c),q}function Fs(s,c,d,m,w,v,L){switch(d){case W:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Q:return!(s.byteLength!=c.byteLength||!m(new Jn(s),new Jn(c)));case h:case p:case $:return sr(+s,+c);case y:return s.name==c.name&&s.message==c.message;case C:case O:return s==c+"";case x:var T=Zi;case k:var j=v&a;if(T||(T=Fi),s.size!=c.size&&!j)return!1;var I=L.get(s);if(I)return I==c;v|=o,L.set(s,c);var B=er(T(s),T(c),m,w,v,L);return L.delete(s),B;case ot:if(Ze)return Ze.call(s)==Ze.call(c)}return!1}function to(s,c,d,m,w,v){var L=w&a,T=ge(s),j=T.length,I=ge(c),B=I.length;if(j!=B&&!L)return!1;for(var q=j;q--;){var H=T[q];if(!(L?H in c:at.call(c,H)))return!1}var Y=v.get(s);if(Y&&v.get(c))return Y==c;var X=!0;v.set(s,c),v.set(c,s);for(var mt=L;++q<j;){H=T[q];var ht=s[H],$t=c[H];if(m)var ar=L?m($t,ht,H,c,s,v):m(ht,$t,H,s,c,v);if(!(ar===void 0?ht===$t||d(ht,$t,m,w,v):ar)){X=!1;break}mt||(mt=H=="constructor")}if(X&&!mt){var ye=s.constructor,me=c.constructor;ye!=me&&"constructor"in s&&"constructor"in c&&!(typeof ye=="function"&&ye instanceof ye&&typeof me=="function"&&me instanceof me)&&(X=!1)}return v.delete(s),v.delete(c),X}function ce(s,c){var d=s.__data__;return io(c)?d[typeof c=="string"?"string":"hash"]:d.map}function eo(s){for(var c=ge(s),d=c.length;d--;){var m=c[d],w=s[m];c[d]=[m,w,rr(w)]}return c}function Dt(s,c){var d=Ji(s,c);return Us(d)?d:void 0}var yt=Is;(Ve&&yt(new Ve(new ArrayBuffer(1)))!=W||Yt&&yt(new Yt)!=x||Ye&&yt(Ye.resolve())!=P||Xe&&yt(new Xe)!=k||Je&&yt(new Je)!=D)&&(yt=function(s){var c=jt.call(s),d=c==S?s.constructor:void 0,m=d?St(d):void 0;if(m)switch(m){case os:return W;case as:return x;case ls:return P;case cs:return k;case us:return D}return c});function no(s,c,d){c=ue(c,s)?[c]:tr(c);for(var m,w=-1,L=c.length;++w<L;){var v=fe(c[w]);if(!(m=s!=null&&d(s,v)))break;s=s[v]}if(m)return m;var L=s?s.length:0;return!!L&&en(L)&&nr(v,L)&&(ft(s)||tn(s))}function ro(s){return ft(s)||tn(s)||!!(Zn&&s&&s[Zn])}function nr(s,c){return c=c??l,!!c&&(typeof s=="number"||qi.test(s))&&s>-1&&s%1==0&&s<c}function ue(s,c){if(ft(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||nn(s)?!0:ji.test(s)||!Oi.test(s)||c!=null&&s in Object(c)}function io(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function so(s){return!!Yn&&Yn in s}function oo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||ie;return s===d}function rr(s){return s===s&&!de(s)}function ir(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var ao=Fe(function(s){s=ho(s);var c=[];return Di.test(s)&&c.push(""),s.replace(Ni,function(d,m,w,v){c.push(w?v.replace(Hi,"$1"):m||d)}),c});function fe(s){if(typeof s=="string"||nn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function St(s){if(s!=null){try{return Xn.call(s)}catch{}try{return s+""}catch{}}return""}function lo(s,c){return js(co(s,c))}function co(s,c){var d=ft(s)?Gi:zs;return d(s,Gs(c))}function Fe(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,w=c?c.apply(this,m):m[0],v=d.cache;if(v.has(w))return v.get(w);var L=s.apply(this,m);return d.cache=v.set(w,L),L};return d.cache=new(Fe.Cache||ct),d}Fe.Cache=ct;function sr(s,c){return s===c||s!==s&&c!==c}function tn(s){return uo(s)&&at.call(s,"callee")&&(!rs.call(s,"callee")||jt.call(s)==u)}var ft=Array.isArray;function he(s){return s!=null&&en(s.length)&&!or(s)}function uo(s){return pe(s)&&he(s)}function or(s){var c=de(s)?jt.call(s):"";return c==g||c==b}function en(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function de(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function pe(s){return!!s&&typeof s=="object"}function nn(s){return typeof s=="symbol"||pe(s)&&jt.call(s)==ot}var fo=Vn?Xi(Vn):Ws;function ho(s){return s==null?"":Js(s)}function po(s,c,d){var m=s==null?void 0:Fn(s,c);return m===void 0?d:m}function go(s,c){return s!=null&&no(s,c,Hs)}function ge(s){return he(s)?Ts(s):Ks(s)}function yo(s){return s}function mo(s){return ue(s)?Vi(fe(s)):Xs(s)}t.exports=lo})(ke,ke.exports);var cu=ke.exports;const Ri=$r(cu);function uu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Zt(f).unix():parseFloat(f);e.forEach(f=>{var h,p;if(o.type==="range"){const y=Ct(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ci(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Dl(e,Object.assign({keys:i},t.fuseConfig)),r}async function fu(t,e,n){let r;n.externalFilter?r=await Bl(e,n.filters,t):r=await Nl(e,n.filters,t),n.results=n.sortResults(r)}function hu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return _`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return _`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Ci(Ri(n.items,t.key)).filter(i=>i)}"
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
      `;default:return _``}}function du(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function pu(t,e,n){return _`
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
  `}function gu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var te,Bt,J,Wt,Pi,Ei;class yu extends it{constructor(){super();U(this,Wt);U(this,te,[]);U(this,Bt,[]);U(this,J,dc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Ie(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){be(this,te,uu(K(this,J),K(this,Bt),this)),this.search()}async searchHandler(){await fu(K(this,J),K(this,Bt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return du(n,K(this,J))}resetFilters(){gu(this)}firstUpdated(n){var i;let r={};Lr.map(o=>{r={...r,[o]:this[o]}}),be(this,J,r),be(this,Bt,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Lr.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return _`
      <style>
        ${Ao}
        ${!this.unstyled&&Rn}
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
                        ${N(!this.inlineMode&&K(this,J).filterProperties&&!this.inlineMode&&K(this,J).filterProperties&&vn(this.filters),()=>_`
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
                      ${Ne(Object.values(this.filters),(r,i)=>_` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${o=>ii(o,K(this,J),this)}
                              data-details="${r.key}"
                            >
                              ${A(this,Wt,Ei).call(this,r,Mr(i,1))}
                              ${A(this,Wt,Pi).call(this,r,Mr(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${N(((n=K(this,J))==null?void 0:n.showResults)&&this.results,()=>_`
            <div class="small-space"></div>
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
              <nav class="title-nav">
                <slot name="resultstitle"
                  ><p><strong>Results</strong></p></slot
                >
              </nav>
            </eox-itemfilter-results>
          `)}
      </form>
    `}}te=new WeakMap,Bt=new WeakMap,J=new WeakMap,Wt=new WeakSet,Pi=function(n,r){return hu(n,r,this)},Ei=function(n,r){return pu(n,r,this)};customElements.define("eox-itemfilter",yu);export{yu as EOxItemFilter};
