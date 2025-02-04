import{aP as Ce,ax as mr,E as hs,c as ds,r as ps,aE as gs,a1 as ys,a7 as Jn,a9 as Zn,m as ms,a4 as bs,$ as ws}from"./index-f8dxmXZV.js";import{r as fe,x as $,E as Ee}from"./lit-element-CWYiTkeG.js";import{a as bn,o as Ot}from"./unsafe-html-DlVJRlTN.js";import{n as G,s as xs}from"./directive-CiXpmpUr.js";import{d as Qe,_ as jt,c as vs,a as As,s as _s}from"./radio.style-n0IccuDp.js";import"./toolcool-range-slider.min-55OLyAA1.js";import{o as Cs}from"./orient2d-DArCjZZA.js";const Ms=`
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
`,nt=`
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
.cards li span {
  display: block;
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
.cards .title {
  font-size: 16px;
  font-weight: 600;
  text-wrap: auto;
  line-height: 19px;
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.cards .subtitle {
  font-size: 14px;
  color: #757575;
  text-wrap: auto;
  line-height: 19px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.cards .image {
  width: 100%;
  height: 190px;
  margin-bottom: 8px;
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
}
ul#results ul.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
  cursor: initial;
}
ul#results ul.cards li {
  flex-basis: calc(33.3% - 77px);
  min-width: 0;
  align-self: flex-start;
}
@media screen and (max-width: 768px) {
  ul#results ul.cards li {
    flex-basis: calc(50% - 70px);
  }
}
@media screen and (max-width: 480px) {
  ul#results ul.cards li {
    flex-basis: 100%;
  }
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
`;class Es extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#e(e){this.dispatchEvent(new CustomEvent("details-toggled",{detail:e,bubbles:!0,composed:!0}))}render(){return $`
      <style>
        ${!this.unstyled&&nt}
      </style>

      ${G(this.filterObject.featured,()=>$`<slot name="filter"></slot>`,()=>$`<details
            @toggle="${this.#e}"
            class="details-filter"
            ?open=${this.filterObject.expanded||Ee}
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
    `}}customElements.define("eox-itemfilter-expandcontainer",Es);function be(t){return Array.isArray?Array.isArray(t):xr(t)==="[object Array]"}function Ss(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function $s(t){return t==null?"":Ss(t)}function le(t){return typeof t=="string"}function br(t){return typeof t=="number"}function Ls(t){return t===!0||t===!1||Rs(t)&&xr(t)=="[object Boolean]"}function wr(t){return typeof t=="object"}function Rs(t){return wr(t)&&t!==null}function X(t){return t!=null}function wn(t){return!t.trim().length}function xr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ps="Incorrect 'index' type",Ds=t=>`Invalid value for key ${t}`,Bs=t=>`Pattern length exceeds max of ${t}.`,Ts=t=>`Missing ${t} property in key`,ks=t=>`Property 'weight' in key '${t}' must be a positive integer`,Qn=Object.prototype.hasOwnProperty;class Os{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let s=vr(r);this._keys.push(s),this._keyMap[s.id]=s,n+=s.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function vr(t){let e=null,n=null,r=null,s=1,o=null;if(le(t)||be(t))r=t,e=er(t),n=An(t);else{if(!Qn.call(t,"name"))throw new Error(Ts("name"));const a=t.name;if(r=a,Qn.call(t,"weight")&&(s=t.weight,s<=0))throw new Error(ks(a));e=er(a),n=An(a),o=t.getFn}return{path:e,id:n,weight:s,src:r,getFn:o}}function er(t){return be(t)?t:t.split(".")}function An(t){return be(t)?t.join("."):t}function js(t,e){let n=[],r=!1;const s=(o,a,c)=>{if(X(o))if(!a[c])n.push(o);else{let u=a[c];const f=o[u];if(!X(f))return;if(c===a.length-1&&(le(f)||br(f)||Ls(f)))n.push($s(f));else if(be(f)){r=!0;for(let h=0,g=f.length;h<g;h+=1)s(f[h],a,c+1)}else a.length&&s(f,a,c+1)}};return s(t,le(e)?e.split("."):e,0),r?n:n[0]}const Ns={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Fs={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Is={location:0,threshold:.6,distance:100},Hs={useExtendedSearch:!1,getFn:js,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var M={...Fs,...Ns,...Is,...Hs};const qs=/[^ ]+/g;function Us(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(s){const o=s.match(qs).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class Tn{constructor({getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){this.norm=Us(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,le(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();le(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!X(e)||wn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((s,o)=>{let a=s.getFn?s.getFn(e):this.getFn(e,s.path);if(X(a)){if(be(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(X(h))if(le(h)&&!wn(h)){let g={v:h,i:f,n:this.norm.get(h)};c.push(g)}else be(h)&&h.forEach((g,b)=>{u.push({nestedArrIndex:b,value:g})})}r.$[o]=c}else if(le(a)&&!wn(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Ar(t,e,{getFn:n=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){const s=new Tn({getFn:n,fieldNormWeight:r});return s.setKeys(t.map(vr)),s.setSources(e),s.create(),s}function Ws(t,{getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:r,records:s}=t,o=new Tn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(s),o}function Mt(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:s=M.distance,ignoreLocation:o=M.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return s?a+c/s:c?1:a}function Gs(t=[],e=M.minMatchCharLength){let n=[],r=-1,s=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(s=o-1,s-r+1>=e&&n.push([r,s]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Te=32;function Ks(t,e,n,{location:r=M.location,distance:s=M.distance,threshold:o=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:f=M.ignoreLocation}={}){if(e.length>Te)throw new Error(Bs(Te));const h=e.length,g=t.length,b=Math.max(0,Math.min(r,g));let y=o,x=b;const A=c>1||u,L=A?Array(g):[];let E;for(;(E=t.indexOf(e,x))>-1;){let O=Mt(e,{currentLocation:E,expectedLocation:b,distance:s,ignoreLocation:f});if(y=Math.min(O,y),x=E+h,A){let q=0;for(;q<h;)L[E+q]=1,q+=1}}x=-1;let D=[],R=1,B=h+g;const T=1<<h-1;for(let O=0;O<h;O+=1){let q=0,U=B;for(;q<U;)Mt(e,{errors:O,currentLocation:b+U,expectedLocation:b,distance:s,ignoreLocation:f})<=y?q=U:B=U,U=Math.floor((B-q)/2+q);B=U;let je=Math.max(1,b-U+1),Le=a?g:Math.min(b+U,g)+h,se=Array(Le+2);se[Le+1]=(1<<O)-1;for(let F=Le;F>=je;F-=1){let K=F-1,Fe=n[t.charAt(K)];if(A&&(L[K]=+!!Fe),se[F]=(se[F+1]<<1|1)&Fe,O&&(se[F]|=(D[F+1]|D[F])<<1|1|D[F+1]),se[F]&T&&(R=Mt(e,{errors:O,currentLocation:K,expectedLocation:b,distance:s,ignoreLocation:f}),R<=y)){if(y=R,x=K,x<=b)break;je=Math.max(1,2*b-x)}}if(Mt(e,{errors:O+1,currentLocation:b,expectedLocation:b,distance:s,ignoreLocation:f})>y)break;D=se}const Z={isMatch:x>=0,score:Math.max(.001,R)};if(A){const O=Gs(L,c);O.length?u&&(Z.indices=O):Z.isMatch=!1}return Z}function zs(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const s=t.charAt(n);e[s]=(e[s]||0)|1<<r-n-1}return e}const Rt=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class _r{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:s=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreDiacritics:f=M.ignoreDiacritics,ignoreLocation:h=M.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:s,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h},e=u?e:e.toLowerCase(),e=f?Rt(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const g=(y,x)=>{this.chunks.push({pattern:y,alphabet:zs(y),startIndex:x})},b=this.pattern.length;if(b>Te){let y=0;const x=b%Te,A=b-x;for(;y<A;)g(this.pattern.substr(y,Te),y),y+=Te;if(x){const L=b-Te;g(this.pattern.substr(L),L)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:s}=this.options;if(e=n?e:e.toLowerCase(),e=r?Rt(e):e,this.pattern===e){let A={isMatch:!0,score:0};return s&&(A.indices=[[0,e.length-1]]),A}const{location:o,distance:a,threshold:c,findAllMatches:u,minMatchCharLength:f,ignoreLocation:h}=this.options;let g=[],b=0,y=!1;this.chunks.forEach(({pattern:A,alphabet:L,startIndex:E})=>{const{isMatch:D,score:R,indices:B}=Ks(e,A,L,{location:o+E,distance:a,threshold:c,findAllMatches:u,minMatchCharLength:f,includeMatches:s,ignoreLocation:h});D&&(y=!0),b+=R,D&&B&&(g=[...g,...B])});let x={isMatch:y,score:y?b/this.chunks.length:1};return y&&s&&(x.indices=g),x}}class Se{constructor(e){this.pattern=e}static isMultiMatch(e){return tr(e,this.multiRegex)}static isSingleMatch(e){return tr(e,this.singleRegex)}search(){}}function tr(t,e){const n=t.match(e);return n?n[1]:null}class Vs extends Se{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ys extends Se{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Xs extends Se{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Js extends Se{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Zs extends Se{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Qs extends Se{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Cr extends Se{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:s=M.distance,includeMatches:o=M.includeMatches,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreDiacritics:f=M.ignoreDiacritics,ignoreLocation:h=M.ignoreLocation}={}){super(e),this._bitapSearch=new _r(e,{location:n,threshold:r,distance:s,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Mr extends Se{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const s=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,s.push([r,n-1]);const a=!!s.length;return{isMatch:a,score:a?0:1,indices:s}}}const _n=[Vs,Mr,Xs,Js,Qs,Zs,Ys,Cr],nr=_n.length,eo=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,to="|";function no(t,e={}){return t.split(to).map(n=>{let r=n.trim().split(eo).filter(o=>o&&!!o.trim()),s=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,f=-1;for(;!u&&++f<nr;){const h=_n[f];let g=h.isMultiMatch(c);g&&(s.push(new h(g,e)),u=!0)}if(!u)for(f=-1;++f<nr;){const h=_n[f];let g=h.isSingleMatch(c);if(g){s.push(new h(g,e));break}}}return s})}const ro=new Set([Cr.type,Mr.type]);class io{constructor(e,{isCaseSensitive:n=M.isCaseSensitive,ignoreDiacritics:r=M.ignoreDiacritics,includeMatches:s=M.includeMatches,minMatchCharLength:o=M.minMatchCharLength,ignoreLocation:a=M.ignoreLocation,findAllMatches:c=M.findAllMatches,location:u=M.location,threshold:f=M.threshold,distance:h=M.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:s,minMatchCharLength:o,findAllMatches:c,ignoreLocation:a,location:u,threshold:f,distance:h},e=n?e:e.toLowerCase(),e=r?Rt(e):e,this.pattern=e,this.query=no(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:s,ignoreDiacritics:o}=this.options;e=s?e:e.toLowerCase(),e=o?Rt(e):e;let a=0,c=[],u=0;for(let f=0,h=n.length;f<h;f+=1){const g=n[f];c.length=0,a=0;for(let b=0,y=g.length;b<y;b+=1){const x=g[b],{isMatch:A,indices:L,score:E}=x.search(e);if(A){if(a+=1,u+=E,r){const D=x.constructor.type;ro.has(D)?c=[...c,...L]:c.push(L)}}else{u=0,a=0,c.length=0;break}}if(a){let b={isMatch:!0,score:u/a};return r&&(b.indices=c),b}}return{isMatch:!1,score:1}}}const Cn=[];function so(...t){Cn.push(...t)}function Mn(t,e){for(let n=0,r=Cn.length;n<r;n+=1){let s=Cn[n];if(s.condition(t,e))return new s(t,e)}return new _r(t,e)}const Pt={AND:"$and",OR:"$or"},En={PATH:"$path",PATTERN:"$val"},Sn=t=>!!(t[Pt.AND]||t[Pt.OR]),oo=t=>!!t[En.PATH],ao=t=>!be(t)&&wr(t)&&!Sn(t),rr=t=>({[Pt.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Er(t,e,{auto:n=!0}={}){const r=s=>{let o=Object.keys(s);const a=oo(s);if(!a&&o.length>1&&!Sn(s))return r(rr(s));if(ao(s)){const u=a?s[En.PATH]:o[0],f=a?s[En.PATTERN]:s[u];if(!le(f))throw new Error(Ds(u));const h={keyId:An(u),pattern:f};return n&&(h.searcher=Mn(f,e)),h}let c={children:[],operator:o[0]};return o.forEach(u=>{const f=s[u];be(f)&&f.forEach(h=>{c.children.push(r(h))})}),c};return Sn(t)||(t=rr(t)),r(t)}function lo(t,{ignoreFieldNorm:e=M.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:s,norm:o,score:a})=>{const c=s?s.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function co(t,e){const n=t.matches;e.matches=[],X(n)&&n.forEach(r=>{if(!X(r.indices)||!r.indices.length)return;const{indices:s,value:o}=r;let a={indices:s,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function uo(t,e){e.score=t.score}function fo(t,e,{includeMatches:n=M.includeMatches,includeScore:r=M.includeScore}={}){const s=[];return n&&s.push(co),r&&s.push(uo),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return s.length&&s.forEach(u=>{u(o,c)}),c})}class $e{constructor(e,n={},r){this.options={...M,...n},this.options.useExtendedSearch,this._keyStore=new Os(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Tn))throw new Error(Ps);this._myIndex=n||Ar(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){X(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,s=this._docs.length;r<s;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,s-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:s,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=le(e)?le(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return lo(u,{ignoreFieldNorm:c}),o&&u.sort(a),br(n)&&n>-1&&(u=u.slice(0,n)),fo(u,this._docs,{includeMatches:r,includeScore:s})}_searchStringList(e){const n=Mn(e,this.options),{records:r}=this._myIndex,s=[];return r.forEach(({v:o,i:a,n:c})=>{if(!X(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&s.push({item:o,idx:a,matches:[{score:f,value:o,norm:c,indices:h}]})}),s}_searchLogical(e){const n=Er(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:g,searcher:b}=c,y=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:b});return y&&y.length?[{idx:f,item:u,matches:y}]:[]}const h=[];for(let g=0,b=c.children.length;g<b;g+=1){const y=c.children[g],x=r(y,u,f);if(x.length)h.push(...x);else if(c.operator===Pt.AND)return[]}return h},s=this._myIndex.records,o={},a=[];return s.forEach(({$:c,i:u})=>{if(X(c)){let f=r(n,c,u);f.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=Mn(e,this.options),{keys:r,records:s}=this._myIndex,o=[];return s.forEach(({$:a,i:c})=>{if(!X(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!X(n))return[];let s=[];if(be(n))n.forEach(({v:o,i:a,n:c})=>{if(!X(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&s.push({score:f,key:e,value:o,idx:a,norm:c,indices:h})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:f}=r.searchIn(o);c&&s.push({score:u,key:e,value:o,norm:a,indices:f})}return s}}$e.version="7.1.0";$e.createIndex=Ar;$e.parseIndex=Ws;$e.config=M;$e.parseQuery=Er;so(io);function Sr(t,e){const n=new $e(e.filterProperties,{keys:["title"]}),r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function ho(t,e){const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const $n=Math.min,Ue=Math.max,Dt=Math.round,Et=Math.floor,ce=t=>({x:t,y:t});function $r(t){return t.split("-")[0]}function po(t){return t.split("-")[1]}function go(t){return t==="x"?"y":"x"}function yo(t){return t==="y"?"height":"width"}function Lr(t){return["top","bottom"].includes($r(t))?"y":"x"}function mo(t){return go(Lr(t))}function Rr(t){const{x:e,y:n,width:r,height:s}=t;return{width:r,height:s,top:n,left:e,right:e+r,bottom:n+s,x:e,y:n}}function ir(t,e,n){let{reference:r,floating:s}=t;const o=Lr(e),a=mo(e),c=yo(a),u=$r(e),f=o==="y",h=r.x+r.width/2-s.width/2,g=r.y+r.height/2-s.height/2,b=r[c]/2-s[c]/2;let y;switch(u){case"top":y={x:h,y:r.y-s.height};break;case"bottom":y={x:h,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:g};break;case"left":y={x:r.x-s.width,y:g};break;default:y={x:r.x,y:r.y}}switch(po(e)){case"start":y[a]-=b*(n&&f?-1:1);break;case"end":y[a]+=b*(n&&f?-1:1);break}return y}const bo=async(t,e,n)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=n,c=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:g}=ir(f,r,u),b=r,y={},x=0;for(let A=0;A<c.length;A++){const{name:L,fn:E}=c[A],{x:D,y:R,data:B,reset:T}=await E({x:h,y:g,initialPlacement:r,placement:b,strategy:s,middlewareData:y,rects:f,platform:a,elements:{reference:t,floating:e}});h=D??h,g=R??g,y={...y,[L]:{...y[L],...B}},T&&x<=50&&(x++,typeof T=="object"&&(T.placement&&(b=T.placement),T.rects&&(f=T.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):T.rects),{x:h,y:g}=ir(f,b,u)),A=-1)}return{x:h,y:g,placement:b,strategy:s,middlewareData:y}};function Nt(){return typeof window<"u"}function ze(t){return Pr(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function he(t){var e;return(e=(Pr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pr(t){return Nt()?t instanceof Node||t instanceof J(t).Node:!1}function re(t){return Nt()?t instanceof Element||t instanceof J(t).Element:!1}function ue(t){return Nt()?t instanceof HTMLElement||t instanceof J(t).HTMLElement:!1}function sr(t){return!Nt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}function rt(t){const{overflow:e,overflowX:n,overflowY:r,display:s}=ie(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(s)}function wo(t){return["table","td","th"].includes(ze(t))}function Ft(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function kn(t){const e=On(),n=re(t)?ie(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function xo(t){let e=Me(t);for(;ue(e)&&!Ge(e);){if(kn(e))return e;if(Ft(e))return null;e=Me(e)}return null}function On(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ge(t){return["html","body","#document"].includes(ze(t))}function ie(t){return J(t).getComputedStyle(t)}function It(t){return re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Me(t){if(ze(t)==="html")return t;const e=t.assignedSlot||t.parentNode||sr(t)&&t.host||he(t);return sr(e)?e.host:e}function Dr(t){const e=Me(t);return Ge(e)?t.ownerDocument?t.ownerDocument.body:t.body:ue(e)&&rt(e)?e:Dr(e)}function et(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=Dr(t),o=s===((r=t.ownerDocument)==null?void 0:r.body),a=J(s);if(o){const c=Ln(a);return e.concat(a,a.visualViewport||[],rt(s)?s:[],c&&n?et(c):[])}return e.concat(s,et(s,[],n))}function Ln(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Br(t){const e=ie(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=ue(t),o=s?t.offsetWidth:n,a=s?t.offsetHeight:r,c=Dt(n)!==o||Dt(r)!==a;return c&&(n=o,r=a),{width:n,height:r,$:c}}function jn(t){return re(t)?t:t.contextElement}function We(t){const e=jn(t);if(!ue(e))return ce(1);const n=e.getBoundingClientRect(),{width:r,height:s,$:o}=Br(e);let a=(o?Dt(n.width):n.width)/r,c=(o?Dt(n.height):n.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const vo=ce(0);function Tr(t){const e=J(t);return!On()||!e.visualViewport?vo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ao(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==J(t)?!1:e}function ke(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),o=jn(t);let a=ce(1);e&&(r?re(r)&&(a=We(r)):a=We(t));const c=Ao(o,n,r)?Tr(o):ce(0);let u=(s.left+c.x)/a.x,f=(s.top+c.y)/a.y,h=s.width/a.x,g=s.height/a.y;if(o){const b=J(o),y=r&&re(r)?J(r):r;let x=b,A=Ln(x);for(;A&&r&&y!==x;){const L=We(A),E=A.getBoundingClientRect(),D=ie(A),R=E.left+(A.clientLeft+parseFloat(D.paddingLeft))*L.x,B=E.top+(A.clientTop+parseFloat(D.paddingTop))*L.y;u*=L.x,f*=L.y,h*=L.x,g*=L.y,u+=R,f+=B,x=J(A),A=Ln(x)}}return Rr({width:h,height:g,x:u,y:f})}function Nn(t,e){const n=It(t).scrollLeft;return e?e.left+n:ke(he(t)).left+n}function kr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=r.left+e.scrollLeft-(n?0:Nn(t,r)),o=r.top+e.scrollTop;return{x:s,y:o}}function _o(t){let{elements:e,rect:n,offsetParent:r,strategy:s}=t;const o=s==="fixed",a=he(r),c=e?Ft(e.floating):!1;if(r===a||c&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ce(1);const h=ce(0),g=ue(r);if((g||!g&&!o)&&((ze(r)!=="body"||rt(a))&&(u=It(r)),ue(r))){const y=ke(r);f=We(r),h.x=y.x+r.clientLeft,h.y=y.y+r.clientTop}const b=a&&!g&&!o?kr(a,u,!0):ce(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+b.x,y:n.y*f.y-u.scrollTop*f.y+h.y+b.y}}function Co(t){return Array.from(t.getClientRects())}function Mo(t){const e=he(t),n=It(t),r=t.ownerDocument.body,s=Ue(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Ue(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Nn(t);const c=-n.scrollTop;return ie(r).direction==="rtl"&&(a+=Ue(e.clientWidth,r.clientWidth)-s),{width:s,height:o,x:a,y:c}}function Eo(t,e){const n=J(t),r=he(t),s=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){o=s.width,a=s.height;const f=On();(!f||f&&e==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:o,height:a,x:c,y:u}}function So(t,e){const n=ke(t,!0,e==="fixed"),r=n.top+t.clientTop,s=n.left+t.clientLeft,o=ue(t)?We(t):ce(1),a=t.clientWidth*o.x,c=t.clientHeight*o.y,u=s*o.x,f=r*o.y;return{width:a,height:c,x:u,y:f}}function or(t,e,n){let r;if(e==="viewport")r=Eo(t,n);else if(e==="document")r=Mo(he(t));else if(re(e))r=So(e,n);else{const s=Tr(t);r={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Rr(r)}function Or(t,e){const n=Me(t);return n===e||!re(n)||Ge(n)?!1:ie(n).position==="fixed"||Or(n,e)}function $o(t,e){const n=e.get(t);if(n)return n;let r=et(t,[],!1).filter(c=>re(c)&&ze(c)!=="body"),s=null;const o=ie(t).position==="fixed";let a=o?Me(t):t;for(;re(a)&&!Ge(a);){const c=ie(a),u=kn(a);!u&&c.position==="fixed"&&(s=null),(o?!u&&!s:!u&&c.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||rt(a)&&!u&&Or(t,a))?r=r.filter(h=>h!==a):s=c,a=Me(a)}return e.set(t,r),r}function Lo(t){let{element:e,boundary:n,rootBoundary:r,strategy:s}=t;const a=[...n==="clippingAncestors"?Ft(e)?[]:$o(e,this._c):[].concat(n),r],c=a[0],u=a.reduce((f,h)=>{const g=or(e,h,s);return f.top=Ue(g.top,f.top),f.right=$n(g.right,f.right),f.bottom=$n(g.bottom,f.bottom),f.left=Ue(g.left,f.left),f},or(e,c,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ro(t){const{width:e,height:n}=Br(t);return{width:e,height:n}}function Po(t,e,n){const r=ue(e),s=he(e),o=n==="fixed",a=ke(t,!0,o,e);let c={scrollLeft:0,scrollTop:0};const u=ce(0);if(r||!r&&!o)if((ze(e)!=="body"||rt(s))&&(c=It(e)),r){const b=ke(e,!0,o,e);u.x=b.x+e.clientLeft,u.y=b.y+e.clientTop}else s&&(u.x=Nn(s));const f=s&&!r&&!o?kr(s,c):ce(0),h=a.left+c.scrollLeft-u.x-f.x,g=a.top+c.scrollTop-u.y-f.y;return{x:h,y:g,width:a.width,height:a.height}}function xn(t){return ie(t).position==="static"}function ar(t,e){if(!ue(t)||ie(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return he(t)===n&&(n=n.ownerDocument.body),n}function jr(t,e){const n=J(t);if(Ft(t))return n;if(!ue(t)){let s=Me(t);for(;s&&!Ge(s);){if(re(s)&&!xn(s))return s;s=Me(s)}return n}let r=ar(t,e);for(;r&&wo(r)&&xn(r);)r=ar(r,e);return r&&Ge(r)&&xn(r)&&!kn(r)?n:r||xo(t)||n}const Do=async function(t){const e=this.getOffsetParent||jr,n=this.getDimensions,r=await n(t.floating);return{reference:Po(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Bo(t){return ie(t).direction==="rtl"}const To={convertOffsetParentRelativeRectToViewportRelativeRect:_o,getDocumentElement:he,getClippingRect:Lo,getOffsetParent:jr,getElementRects:Do,getClientRects:Co,getDimensions:Ro,getScale:We,isElement:re,isRTL:Bo};function Nr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ko(t,e){let n=null,r;const s=he(t);function o(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function a(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:g,width:b,height:y}=f;if(c||e(),!b||!y)return;const x=Et(g),A=Et(s.clientWidth-(h+b)),L=Et(s.clientHeight-(g+y)),E=Et(h),R={rootMargin:-x+"px "+-A+"px "+-L+"px "+-E+"px",threshold:Ue(0,$n(1,u))||1};let B=!0;function T(Z){const O=Z[0].intersectionRatio;if(O!==u){if(!B)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!Nr(f,t.getBoundingClientRect())&&a(),B=!1}try{n=new IntersectionObserver(T,{...R,root:s.ownerDocument})}catch{n=new IntersectionObserver(T,R)}n.observe(t)}return a(!0),o}function Oo(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=jn(t),h=s||o?[...f?et(f):[],...et(e)]:[];h.forEach(E=>{s&&E.addEventListener("scroll",n,{passive:!0}),o&&E.addEventListener("resize",n)});const g=f&&c?ko(f,n):null;let b=-1,y=null;a&&(y=new ResizeObserver(E=>{let[D]=E;D&&D.target===f&&y&&(y.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var R;(R=y)==null||R.observe(e)})),n()}),f&&!u&&y.observe(f),y.observe(e));let x,A=u?ke(t):null;u&&L();function L(){const E=ke(t);A&&!Nr(A,E)&&n(),A=E,x=requestAnimationFrame(L)}return n(),()=>{var E;h.forEach(D=>{s&&D.removeEventListener("scroll",n),o&&D.removeEventListener("resize",n)}),g?.(),(E=y)==null||E.disconnect(),y=null,u&&cancelAnimationFrame(x)}}const jo=(t,e,n)=>{const r=new Map,s={platform:To,...n},o={...s.platform,_c:r};return bo(t,e,{...s,platform:o})};function No(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Oo(e,n,()=>{n.matches(":popover-open")&&jo(e,n,{strategy:"fixed"}).then(({x:s,y:o})=>{Object.assign(n.style,{left:`${s}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Fr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Sr({target:{value:""}},t)}function Fo(t,e){e.inlineMode&&t.stopPropagation()}function Io(t){t.inlineMode&&(t.showDropdown=!0)}function Ho(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function qo(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Fr(e),e.showDropdown=!1)}function Uo(t,e){e.inlineMode&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Fr(e),e.showDropdown=!1)}function Wo(t,e){var n,r,s=0,o,a,c,u,f,h,g,b=t[0],y=t[1],x=e.length;for(n=0;n<x;n++){r=0;var A=e[n],L=A.length-1;if(h=A[0],h[0]!==A[L][0]&&h[1]!==A[L][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-b,c=h[1]-y,r;r<L;r++){if(g=A[r+1],u=g[0]-b,f=g[1]-y,c===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&c<=0||f<=0&&c>=0){if(o=Cs(a,u,c,f,0,0),o===0)return 0;(o>0&&f>0&&c<=0||o<0&&f<=0&&c>0)&&s++}h=g,c=f,a=u}}return s%2!==0}function Oe(t,e,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function Go(t,e,n={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!lr(t[0])||!lr(t[1]))throw new Error("coordinates must contain numbers");return Oe({type:"Point",coordinates:t},e,n)}function Ko(t,e,n={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Oe({type:"LineString",coordinates:t},e,n)}function Rn(t,e={}){const n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function zo(t,e,n={}){return Oe({type:"MultiLineString",coordinates:t},e,n)}function lr(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function Ir(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Vo(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ke(t){return t.type==="Feature"?t.geometry:t}function te(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Ir(t),s=Ke(e),o=s.type,a=e.bbox;let c=s.coordinates;if(a&&Yo(r,a)===!1)return!1;o==="Polygon"&&(c=[c]);let u=!1;for(var f=0;f<c.length;++f){const h=Wo(r,c[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function Yo(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Hr{constructor(e=[],n=Xo){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,s=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(s,a)>=0)break;n[e]=a,e=o}n[e]=s}_down(e){const{data:n,compare:r}=this,s=this.length>>1,o=n[e];for(;e<s;){let a=(e<<1)+1,c=n[a];const u=a+1;if(u<this.length&&r(n[u],c)<0&&(a=u,c=n[u]),r(c,o)>=0)break;n[e]=c,e=a}n[e]=o}}function Xo(t,e){return t<e?-1:t>e?1:0}function qr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Jo(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class cr{constructor(e,n,r,s){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=s,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Zo(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)ur(n[r],e)}else ur(t,e)}let St=0,$t=0,Lt=0;function ur(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let s=0;s<r.length;s++)for(let o=0;o<r[s].length;o++){let a=r[s][o][0],c=null;$t=$t+1;for(let u=0;u<r[s][o].length-1;u++){c=r[s][o][u+1];const f=new cr(a,St,$t,Lt),h=new cr(c,St,$t,Lt+1);f.otherEvent=h,h.otherEvent=f,qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=c,Lt=Lt+1}}St=St+1}class Qo{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function ea(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,s=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,c=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-c)*(s-n)-(u-a)*(o-r),g=(u-a)*(r-c)-(f-c)*(n-a),b=(s-n)*(r-c)-(o-r)*(n-a);if(h===0)return!1;const y=g/h,x=b/h;if(y>=0&&y<=1&&x>=0&&x<=1){const A=n+y*(s-n),L=r+y*(o-r);return[A,L]}return!1}function ta(t,e){e=e||!1;const n=[],r=new Hr([],Jo);for(;t.length;){const s=t.pop();if(s.isLeftEndpoint){const o=new Qo(s);for(let a=0;a<r.data.length;a++){const c=r.data[a];if(e&&c.leftSweepEvent.featureId===s.featureId)continue;const u=ea(o,c);u!==!1&&n.push(u)}r.push(o)}else s.isLeftEndpoint===!1&&r.pop()}return n}function na(t,e){const n=new Hr([],qr);return Zo(t,n),ta(n,e)}var ra=na;function Fn(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:s=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Oe(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Oe(e));const a=ra(Rn(o),s);let c=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,c.push(f))})}else c=a;return Rn(c.map(u=>Go(u)))}function Ur(t,e,n){if(t!==null)for(var r,s,o,a,c,u,f,h=0,g=0,b,y=t.type,x=y==="FeatureCollection",A=y==="Feature",L=x?t.features.length:1,E=0;E<L;E++){f=x?t.features[E].geometry:A?t.geometry:t,b=f?f.type==="GeometryCollection":!1,c=b?f.geometries.length:1;for(var D=0;D<c;D++){var R=0,B=0;if(a=b?f.geometries[D]:f,a!==null){u=a.coordinates;var T=a.type;switch(h=0,T){case null:break;case"Point":if(e(u,g,E,R,B)===!1)return!1;g++,R++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],g,E,R,B)===!1)return!1;g++,T==="MultiPoint"&&R++}T==="LineString"&&R++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(s=0;s<u[r].length-h;s++){if(e(u[r][s],g,E,R,B)===!1)return!1;g++}T==="MultiLineString"&&R++,T==="Polygon"&&B++}T==="Polygon"&&R++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(B=0,s=0;s<u[r].length;s++){for(o=0;o<u[r][s].length-h;o++){if(e(u[r][s][o],g,E,R,B)===!1)return!1;g++}B++}R++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Ur(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ia(t,e){var n,r,s,o,a,c,u,f,h,g,b=0,y=t.type==="FeatureCollection",x=t.type==="Feature",A=y?t.features.length:1;for(n=0;n<A;n++){for(c=y?t.features[n].geometry:x?t.geometry:t,f=y?t.features[n].properties:x?t.properties:{},h=y?t.features[n].bbox:x?t.bbox:void 0,g=y?t.features[n].id:x?t.id:void 0,u=c?c.type==="GeometryCollection":!1,a=u?c.geometries.length:1,s=0;s<a;s++){if(o=u?c.geometries[s]:c,o===null){if(e(null,b,f,h,g)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,b,f,h,g)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],b,f,h,g)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}b++}}function Bt(t,e){ia(t,function(n,r,s,o,a){var c=n===null?null:n.type;switch(c){case null:case"Point":case"LineString":case"Polygon":return e(Oe(n,s,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(c){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],g={type:u,coordinates:h};if(e(Oe(g,s),r,f)===!1)return!1}})}function Pn(t,e={}){const n=Ke(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return sa(n,e);case"MultiPolygon":return oa(n,e);default:throw new Error("invalid poly")}}function sa(t,e={}){const r=Ke(t).coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Wr(r,s)}function oa(t,e={}){const r=Ke(t).coordinates,s=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(Wr(a,s))}),Rn(o)}function Wr(t,e){return t.length>1?zo(t,e):Ko(t[0],e)}function aa(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Bt(t,s=>{Bt(e,o=>{if(r===!1)return!1;r=la(s.geometry,o.geometry,n)})}),r}function la(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!ha(t.coordinates,e.coordinates);case"LineString":return!fr(e,t);case"Polygon":return!te(t,e)}break;case"LineString":switch(e.type){case"Point":return!fr(t,e);case"LineString":return!ca(t,e,n);case"Polygon":return!hr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!te(e,t);case"LineString":return!hr(t,e,n);case"Polygon":return!ua(e,t,n)}}return!1}function fr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(fa(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function ca(t,e,n){return Fn(t,e,{ignoreSelfIntersections:n}).features.length>0}function hr(t,e,n){for(const s of e.coordinates)if(te(s,t))return!0;return Fn(e,Pn(t),{ignoreSelfIntersections:n}).features.length>0}function ua(t,e,n){for(const s of t.coordinates[0])if(te(s,e))return!0;for(const s of e.coordinates[0])if(te(s,t))return!0;return Fn(Pn(t),Pn(e),{ignoreSelfIntersections:n}).features.length>0}function fa(t,e,n){const r=n[0]-t[0],s=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-s*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function ha(t,e){return t[0]===e[0]&&t[1]===e[1]}function da(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Bt(t,s=>{Bt(e,o=>{if(r===!0)return!0;r=!aa(s.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var pa=da;function Tt(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Ur(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function kt(t,e,n={}){const r=Ir(t),s=Vo(e);for(let o=0;o<s.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===s.length-2&&(a="end"),o===0&&o+1===s.length-1&&(a="both")),ga(s[o],s[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function ga(t,e,n,r,s){const o=n[0],a=n[1],c=t[0],u=t[1],f=e[0],h=e[1],g=n[0]-c,b=n[1]-u,y=f-c,x=h-u,A=g*x-b*y;if(s!==null){if(Math.abs(A)>s)return!1}else if(A!==0)return!1;if(Math.abs(y)===Math.abs(x)&&Math.abs(y)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(y)>=Math.abs(x)?y>0?c<o&&o<=f:f<=o&&o<c:x>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(y)>=Math.abs(x)?y>0?c<=o&&o<f:f<o&&o<=c:x>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(y)>=Math.abs(x)?y>0?c<o&&o<f:f<o&&o<c:x>0?u<a&&a<h:h<a&&a<u}else return Math.abs(y)>=Math.abs(x)?y>0?c<=o&&o<=f:f<=o&&o<=c:x>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function ya(t,e){var n=Ke(t),r=Ke(e),s=n.type,o=r.type;switch(s){case"Point":switch(o){case"MultiPoint":return ma(n,r);case"LineString":return kt(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return te(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return ba(n,r);case"LineString":return wa(n,r);case"Polygon":case"MultiPolygon":return xa(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return va(n,r);case"Polygon":case"MultiPolygon":return Aa(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return _a(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function ma(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Kr(e.coordinates[n],t.coordinates)){r=!0;break}return r}function ba(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,s=0;s<e.coordinates.length;s++)Kr(t.coordinates[n],e.coordinates[s])&&(r=!0);if(!r)return!1}return!0}function wa(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!kt(t.coordinates[r],e))return!1;n||(n=kt(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function xa(t,e){for(var n=!0,r=!1,s=0;s<t.coordinates.length;s++){if(r=te(t.coordinates[s],e),!r){n=!1;break}r=te(t.coordinates[s],e,{ignoreBoundary:!0})}return n&&r}function va(t,e){for(var n=0;n<t.coordinates.length;n++)if(!kt(t.coordinates[n],e))return!1;return!0}function Aa(t,e){var n=Tt(e),r=Tt(t);if(!Gr(n,r))return!1;for(var s=!1,o=0;o<t.coordinates.length;o++){if(!te(t.coordinates[o],e))return!1;if(s||(s=te(t.coordinates[o],e,{ignoreBoundary:!0})),!s&&o<t.coordinates.length-1){var a=Ca(t.coordinates[o],t.coordinates[o+1]);s=te(a,e,{ignoreBoundary:!0})}}return s}function _a(t,e){var n=Tt(t),r=Tt(e);if(!Gr(r,n))return!1;for(var s=0;s<t.coordinates[0].length;s++)if(!te(t.coordinates[0][s],e))return!1;return!0}function Gr(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Kr(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ca(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Ma=ya;const Ea=(t,e)=>e?pa(t,e):!0,Sa=(t,e)=>e?Ma(t,e):!0;function $a(t,e="highlight",n="title"){const r=(o,a,c)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=c},s=(o,a=[])=>{let c="",u=0;return a.forEach(f=>{const h=f[1]+1;c+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),c+=o.substring(u),c};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const c={...o};return a.forEach(u=>{u.key===n&&r(c,u.key,s(u.value,u.indices))}),c})}let zr;const La=(t,e)=>{zr=new $e(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Ra=async(t,e,n)=>{const r=Object.entries(e).filter(([,c])=>c.type==="text"||c.type==="select"||c.type==="multiselect").reduce((c,[u,f])=>{const h="$or",g=[],b=(y,x)=>{const A={};f.type==="text"?A[y]=`${x}`:A[u]=`="${y}"`,g.push(A)};return Object.entries(f.state).filter(([,y])=>y).forEach(([y,x])=>b(y,x)),g.length>0&&c.push({[h]:g}),c},[]);let s;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)s=t;else{const c={$and:[...r]},u=zr.search(c);s=n.enableHighlighting?$a(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,c])=>c.type==="range").reduce((c,[u,f])=>(c[u]={min:f.state.min,max:f.state.max,format:f.format},c),{});if(Object.keys(o).length>0){const c=[];for(let u=0;u<s.length;u++){const f={};for(const[h,g]of Object.entries(o)){const b=x=>g.format==="date"?Qe(x).unix():x,y=tt(h,s[u]);y?Array.isArray(y)?f[h]=o[h].min<=b(y[1])&&b(y[0])<=o[h].max:b(y)>=o[h].min&&b(y)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&c.push(s[u])}s=[...c]}const a=Object.entries(e).filter(([,c])=>c.type==="spatial").reduce((c,[u,f])=>(c[u]={geometry:f.state.geometry,mode:f.state.mode},c),{});if(Object.values(a).map(c=>c.geometry).filter(c=>!!c).length>0){const c=[];for(let u=0;u<s.length;u++){const f={};for(const h of Object.keys(a)){const g=tt(h,s[u]),b=a[h].mode||"within";g&&(b==="within"?Sa(g,a[h].geometry):Ea(g,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&c.push(s[u])}s=[...c]}return s};function Pa(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ht(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function dr(t,e){return t*2+e}function Da(t){return Object.keys(t).map(e=>({title:$`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function Dn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Ba(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function Vr(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r?.classList.contains("details-filter")){if(!r.open||e?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(s=>{const o=s.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!r?.open||e?.expandMultipleResults)return;n.querySelectorAll("details").forEach(s=>{s!==r&&s.removeAttribute("open")})}}function tt(t,e){return t?.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}class Ta extends fe{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#i.bind(this),this._handleKeyDown=this.#r.bind(this)}set showDropdown(e){this.renderRoot.querySelector("[popover]").togglePopover(e)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#e(){setTimeout(()=>this._overlayCleanup=No(this))}#t(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#e()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#t()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#i(e){Uo(e,this)}#r(e){qo(e,this)}#s(e){Ho(e,this)}#a(){Io(this)}#o(e){Fo(e,this)}#l(e){ho(e,this)}#c(e){Sr(e,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(e){e.has("inlineMode")&&(this.inlineMode?this.#t():this.#n())}render(){return $`
      <style>
        ${!this.unstyled&&nt}
      </style>
      ${this.inlineMode?$`
            <div
              class="inline-container-wrapper"
              @click="${this.#s}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Da(this.filters)}
                      .controller=${{remove:e=>this.#l(e)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${G(Dn(this.filters),()=>$`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${Dn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${this.#s}"
                    @focus="${this.#a}"
                    @input="${this.#c}"
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
                  @keydown="${this.#r}"
                  @click="${this.#o}"
                  @focus="${this.#o}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:$`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",Ta);function ka(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Ht(t.filterObject),t.requestUpdate()}function Oa(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Bn="ddd, D MMM YYYY HH:mm:ss";function ja(t){if(t.filterObject=Ht(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Na(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Qe.unix(n).format(Bn)} - ${Qe.unix(r).format(Bn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Fa(t,e,n){const r=n.filterObject.format==="date",s=n.filterObject.state[t],o=r?Qe.unix(s).format(Bn):s;return $`<div class="range-${e}">${o}</div>`}function Ia(t){Ha(-1,t),Ht(t.filterObject),t.requestUpdate()}function Ha(t,e){e.selectedItems=[],In(e),Xr(e)}function Yr(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,s)=>s!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),In(e),Xr(e)}function qa(t,e){e.query=t.target.value,e.showSuggestions=!0}function Ua(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Yr(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Wa(t,e){(t.has("suggestions")||t.has("query"))&&In(e)}function Ga(t,e){const n=t.filterObject?.sort||((r,s)=>r.localeCompare(s));return e.sort(n).map(r=>r)}function In(t){let e;t.query&&(e=new $e(t.suggestions,{threshold:.4}).search(t.query).map(r=>r.item)),t.filteredSuggestions=Ga(t,e||t.suggestions),t.filterObject?.filterKeys&&(t.filteredSuggestions=t.filterObject?.filterKeys.map(n=>`${n}`),t.filterObject.state=t.filterObject?.filterKeys.map(n=>`${n}`).reduce((n,r)=>(r in n||(n[r]=void 0),n),t.filterObject.state)),t.highlightedIndex=-1}function Xr(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Ka(t){Ht(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function za(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Jr(t)}function Va(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Jr(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&Ya(t.geometry),r=Pa(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const s=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{s(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{s(o.features.getArray()[0])})},1e3)}function Ya(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}class Xa extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}#e=()=>{Oa(this)};reset(){ka(this)}debouncedInputHandler=jt(this.#e,500,{leading:!0});createRenderRoot(){return this}render(){return G(this.filterObject,()=>$`
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
              pattern="${this.filterObject.validation?.pattern||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${e=>e.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `)}}customElements.define("eox-itemfilter-text",Xa);function Ja(t,e,n){return t.filter(r=>{const s=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(c=>n.filters[n.config.aggregateResults].state[c])),(o?.length?o.includes(e):!0)&&Array.isArray(s)?s.includes(e):s===e})}function Za(t,e){return $`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||Ee}
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
        ${Zr(t,e)}
      </div>
    </details>
  `}function Zr(t,e){const n=e.results,r=t?e.aggregateResults(n,t):n,s=e.config,o=a=>e.selectedResult?.[s.idProperty]===a[s.idProperty]?"highlighted":Ee;return $`
    <ul class=${e.resultType}>
      ${vs(r,a=>a.id,a=>$`
          <li
            class=${o(a)}
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
          >
            <span id="${a.id}">
              ${G(s.subTitleProperty||s.imageProperty,()=>$`
                  ${tt(s.imageProperty,a)?$`
                        <img
                          class="image"
                          src="${tt(s.imageProperty,a)}"
                        />
                      `:$`
                        <svg
                          class="image"
                          width="800"
                          height="600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="800"
                            height="600"
                            fill="var(--primary-color)"
                          />
                        </svg>
                      `}
                  <div class="title-container">
                    <span class="title"
                      >${bn(a[s.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${bn(a[s.subTitleProperty])}</span
                    >
                  </div>
                `,()=>$`
                  <span class="title"
                    >${bn(a[s.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}class Qa extends fe{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}constructor(){super(),this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}#e(e){return Zr(e,this)}#t(e){return Za(e,this)}aggregateResults(e,n){return Ja(e,n,this)}createRenderRoot(){return this}handleAccordion(e){Vr(e,this.config,this)}render(){return $`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${G(this.results.length<1,()=>$`<small class="no-results">No matching items</small>`,()=>Ee)}
          <ul id="results" part="results">
            ${G(this.config.aggregateResults,()=>Ot(this.resultAggregation.filter(e=>this.aggregateResults(this.results,e).length),e=>$`${G(this.aggregateResults(this.results,e).length===1&&this.config.autoSpreadSingle,()=>$`<div style="margin-left: -8px">
                          ${this.#e(e)}
                        </div>`,()=>this.#t(e))}`),()=>this.#e())}
          </ul>
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",Qa);class el extends fe{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(e){Wa(e,this)}#e(e){qa(e,this)}#t(e){Ua(e,this)}#n(e){Yr(e,this)}reset(){Ia(this)}debouncedInputHandler=jt(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(e=>this.filterObject.state[e]?e:null).filter(e=>!!e),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const e=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow":Ee;return $`
      <style>
        ${!this.unstyled&&nt}
        ${!this.unstyled&&As}
        ${!this.unstyled&&_s}
      </style>
      ${G(this.suggestions.length>10,()=>$`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${this.#e}
                @keydown=${this.#t}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${n}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(r=>$`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label>
                  <input
                    type="${e}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${r}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}customElements.define("eox-itemfilter-select",el);class tl extends fe{static properties={filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}};constructor(){super(),this.filterObject={},this.tabIndex=0,this.inputHandler=this.#e.bind(this),this.debouncedInputHandler=jt(this.inputHandler,500,{leading:!1})}#e(e){Na(e,this)}#t(e,n){return Fa(e,n,this)}reset(){ja(this)}createRenderRoot(){return this}render(){return G(this.filterObject,()=>$`
        ${this.#t("min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${this.#t("max","after")}
      `)}}customElements.define("eox-itemfilter-range",tl);class nl extends fe{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){Ka(this)}createRenderRoot(){return this}#e(e){Va(e,this)}render(){return G(this.filterObject,()=>$`
        <form style="display: inline">
          ${Ot(["intersects","within"],e=>$`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===e||Ee}"
                  value="${e}"
                  @click=${()=>this.#e(e)}
                />
                <small>${e} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${this.filterObject.state?.geometry}"
          @filter="${e=>{this.filterObject.state.geometry=e.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `)}}customElements.define("eox-itemfilter-spatial",nl);class rl extends fe{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#e()}#e(){Jr(this)}reset(){za(this)}render(){return $`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",rl);function il(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target.classList.add("highlighted"),e.requestUpdate()}function sl(t,e){const{code:n,target:r}=t;r.id==="eox-itemfilter-input-search"&&(e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&ol(n,t.target.value??"",e)))}function ol(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const s=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];s.classList.contains("highlighted")||s.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let s=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(s=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),s=s+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&s<0&&(s=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&s>n.renderRoot.querySelectorAll(".chip").length-1&&(s=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[s].classList.add("highlighted")}}class al extends fe{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#e.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#e(e){sl(e,this)}#t(e){il(e,this)}render(){return $`
      <style>
        ${nt}
      </style>
      <span class="chip-container">
        ${Ot(this.items,e=>$`
            <span class="chip" @click=${this.#t.bind(this)}>
              <span class="chip-title">${e.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${e.key}
                  @click=${n=>{n.stopPropagation(),this.controller.remove(n),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}customElements.define("eox-itemfilter-chips",al);const ll=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),pr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var vn,gr;function cl(){if(gr)return vn;gr=1;var t=200,e="__lodash_hash_undefined__",n=1/0,r="[object Function]",s="[object GeneratorFunction]",o=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,c=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,u=typeof self=="object"&&self&&self.Object===Object&&self,f=c||u||Function("return this")();function h(p,w){var C=p?p.length:0;return!!C&&b(p,w,0)>-1}function g(p,w,C,k){for(var I=p.length,z=C+-1;++z<I;)if(w(p[z],z,p))return z;return-1}function b(p,w,C){if(w!==w)return g(p,y,C);for(var k=C-1,I=p.length;++k<I;)if(p[k]===w)return k;return-1}function y(p){return p!==p}function x(p,w){return p.has(w)}function A(p,w){return p?.[w]}function L(p){var w=!1;if(p!=null&&typeof p.toString!="function")try{w=!!(p+"")}catch{}return w}function E(p){var w=-1,C=Array(p.size);return p.forEach(function(k){C[++w]=k}),C}var D=Array.prototype,R=Function.prototype,B=Object.prototype,T=f["__core-js_shared__"],Z=function(){var p=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return p?"Symbol(src)_1."+p:""}(),O=R.toString,q=B.hasOwnProperty,U=B.toString,je=RegExp("^"+O.call(q).replace(o,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Le=D.splice,se=Ve(f,"Map"),Ne=Ve(f,"Set"),F=Ve(Object,"create");function K(p){var w=-1,C=p?p.length:0;for(this.clear();++w<C;){var k=p[w];this.set(k[0],k[1])}}function Fe(){this.__data__=F?F(null):{}}function qt(p){return this.has(p)&&delete this.__data__[p]}function Ut(p){var w=this.__data__;if(F){var C=w[p];return C===e?void 0:C}return q.call(w,p)?w[p]:void 0}function Wt(p){var w=this.__data__;return F?w[p]!==void 0:q.call(w,p)}function Gt(p,w){var C=this.__data__;return C[p]=F&&w===void 0?e:w,this}K.prototype.clear=Fe,K.prototype.delete=qt,K.prototype.get=Ut,K.prototype.has=Wt,K.prototype.set=Gt;function we(p){var w=-1,C=p?p.length:0;for(this.clear();++w<C;){var k=p[w];this.set(k[0],k[1])}}function Kt(){this.__data__=[]}function zt(p){var w=this.__data__,C=Re(w,p);if(C<0)return!1;var k=w.length-1;return C==k?w.pop():Le.call(w,C,1),!0}function Vt(p){var w=this.__data__,C=Re(w,p);return C<0?void 0:w[C][1]}function Yt(p){return Re(this.__data__,p)>-1}function Xt(p,w){var C=this.__data__,k=Re(C,p);return k<0?C.push([p,w]):C[k][1]=w,this}we.prototype.clear=Kt,we.prototype.delete=zt,we.prototype.get=Vt,we.prototype.has=Yt,we.prototype.set=Xt;function P(p){var w=-1,C=p?p.length:0;for(this.clear();++w<C;){var k=p[w];this.set(k[0],k[1])}}function it(){this.__data__={hash:new K,map:new(se||we),string:new K}}function Jt(p){return He(this,p).delete(p)}function oe(p){return He(this,p).get(p)}function st(p){return He(this,p).has(p)}function ot(p,w){return He(this,p).set(p,w),this}P.prototype.clear=it,P.prototype.delete=Jt,P.prototype.get=oe,P.prototype.has=st,P.prototype.set=ot;function Ie(p){var w=-1,C=p?p.length:0;for(this.__data__=new P;++w<C;)this.add(p[w])}function at(p){return this.__data__.set(p,e),this}function lt(p){return this.__data__.has(p)}Ie.prototype.add=Ie.prototype.push=at,Ie.prototype.has=lt;function Re(p,w){for(var C=p.length;C--;)if(sn(p[C][0],w))return C;return-1}function Zt(p){if(!ct(p)||nn(p))return!1;var w=on(p)||L(p)?je:a;return w.test(Ye(p))}function Qt(p,w,C){var k=-1,I=h,z=p.length,ut=!0,ne=[],ae=ne;if(z>=t){var ft=en(p);if(ft)return E(ft);ut=!1,I=x,ae=new Ie}else ae=ne;e:for(;++k<z;){var xe=p[k],ve=xe;if(xe=xe!==0?xe:0,ut&&ve===ve){for(var ht=ae.length;ht--;)if(ae[ht]===ve)continue e;ne.push(xe)}else I(ae,ve,C)||(ae!==ne&&ae.push(ve),ne.push(xe))}return ne}var en=Ne&&1/E(new Ne([,-0]))[1]==n?function(p){return new Ne(p)}:an;function He(p,w){var C=p.__data__;return tn(w)?C[typeof w=="string"?"string":"hash"]:C.map}function Ve(p,w){var C=A(p,w);return Zt(C)?C:void 0}function tn(p){var w=typeof p;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?p!=="__proto__":p===null}function nn(p){return!!Z&&Z in p}function Ye(p){if(p!=null){try{return O.call(p)}catch{}try{return p+""}catch{}}return""}function rn(p){return p&&p.length?Qt(p):[]}function sn(p,w){return p===w||p!==p&&w!==w}function on(p){var w=ct(p)?U.call(p):"";return w==r||w==s}function ct(p){var w=typeof p;return!!p&&(w=="object"||w=="function")}function an(){}return vn=rn,vn}var ul=cl();const Qr=mr(ul);var Ze={exports:{}};Ze.exports;var yr;function fl(){return yr||(yr=1,function(t,e){var n=200,r="Expected a function",s="__lodash_hash_undefined__",o=1,a=2,c=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",g="[object Date]",b="[object Error]",y="[object Function]",x="[object GeneratorFunction]",A="[object Map]",L="[object Number]",E="[object Object]",D="[object Promise]",R="[object RegExp]",B="[object Set]",T="[object String]",Z="[object Symbol]",O="[object WeakMap]",q="[object ArrayBuffer]",U="[object DataView]",je="[object Float32Array]",Le="[object Float64Array]",se="[object Int8Array]",Ne="[object Int16Array]",F="[object Int32Array]",K="[object Uint8Array]",Fe="[object Uint8ClampedArray]",qt="[object Uint16Array]",Ut="[object Uint32Array]",Wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gt=/^\w*$/,we=/^\./,Kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zt=/[\\^$.*+?()[\]{}|]/g,Vt=/\\(\\)?/g,Yt=/^\[object .+?Constructor\]$/,Xt=/^(?:0|[1-9]\d*)$/,P={};P[je]=P[Le]=P[se]=P[Ne]=P[F]=P[K]=P[Fe]=P[qt]=P[Ut]=!0,P[u]=P[f]=P[q]=P[h]=P[U]=P[g]=P[b]=P[y]=P[A]=P[L]=P[E]=P[R]=P[B]=P[T]=P[O]=!1;var it=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,Jt=typeof self=="object"&&self&&self.Object===Object&&self,oe=it||Jt||Function("return this")(),st=e&&!e.nodeType&&e,ot=st&&!0&&t&&!t.nodeType&&t,Ie=ot&&ot.exports===st,at=Ie&&it.process,lt=function(){try{return at&&at.binding("util")}catch{}}(),Re=lt&&lt.isTypedArray;function Zt(i,l){for(var d=-1,m=i?i.length:0,_=Array(m);++d<m;)_[d]=l(i[d],d,i);return _}function Qt(i,l){for(var d=-1,m=l.length,_=i.length;++d<m;)i[_+d]=l[d];return i}function en(i,l){for(var d=-1,m=i?i.length:0;++d<m;)if(l(i[d],d,i))return!0;return!1}function He(i){return function(l){return l?.[i]}}function Ve(i,l){for(var d=-1,m=Array(i);++d<i;)m[d]=l(d);return m}function tn(i){return function(l){return i(l)}}function nn(i,l){return i?.[l]}function Ye(i){var l=!1;if(i!=null&&typeof i.toString!="function")try{l=!!(i+"")}catch{}return l}function rn(i){var l=-1,d=Array(i.size);return i.forEach(function(m,_){d[++l]=[_,m]}),d}function sn(i,l){return function(d){return i(l(d))}}function on(i){var l=-1,d=Array(i.size);return i.forEach(function(m){d[++l]=m}),d}var ct=Array.prototype,an=Function.prototype,p=Object.prototype,w=oe["__core-js_shared__"],C=function(){var i=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),k=an.toString,I=p.hasOwnProperty,z=p.toString,ut=RegExp("^"+k.call(I).replace(zt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ne=oe.Symbol,ae=oe.Uint8Array,ft=p.propertyIsEnumerable,xe=ct.splice,ve=ne?ne.isConcatSpreadable:void 0,ht=sn(Object.keys,Object),ln=qe(oe,"DataView"),Xe=qe(oe,"Map"),cn=qe(oe,"Promise"),un=qe(oe,"Set"),fn=qe(oe,"WeakMap"),Je=qe(Object,"create"),ti=De(ln),ni=De(Xe),ri=De(cn),ii=De(un),si=De(fn),dt=ne?ne.prototype:void 0,hn=dt?dt.valueOf:void 0,Hn=dt?dt.toString:void 0;function Pe(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function oi(){this.__data__=Je?Je(null):{}}function ai(i){return this.has(i)&&delete this.__data__[i]}function li(i){var l=this.__data__;if(Je){var d=l[i];return d===s?void 0:d}return I.call(l,i)?l[i]:void 0}function ci(i){var l=this.__data__;return Je?l[i]!==void 0:I.call(l,i)}function ui(i,l){var d=this.__data__;return d[i]=Je&&l===void 0?s:l,this}Pe.prototype.clear=oi,Pe.prototype.delete=ai,Pe.prototype.get=li,Pe.prototype.has=ci,Pe.prototype.set=ui;function de(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function fi(){this.__data__=[]}function hi(i){var l=this.__data__,d=gt(l,i);if(d<0)return!1;var m=l.length-1;return d==m?l.pop():xe.call(l,d,1),!0}function di(i){var l=this.__data__,d=gt(l,i);return d<0?void 0:l[d][1]}function pi(i){return gt(this.__data__,i)>-1}function gi(i,l){var d=this.__data__,m=gt(d,i);return m<0?d.push([i,l]):d[m][1]=l,this}de.prototype.clear=fi,de.prototype.delete=hi,de.prototype.get=di,de.prototype.has=pi,de.prototype.set=gi;function pe(i){var l=-1,d=i?i.length:0;for(this.clear();++l<d;){var m=i[l];this.set(m[0],m[1])}}function yi(){this.__data__={hash:new Pe,map:new(Xe||de),string:new Pe}}function mi(i){return yt(this,i).delete(i)}function bi(i){return yt(this,i).get(i)}function wi(i){return yt(this,i).has(i)}function xi(i,l){return yt(this,i).set(i,l),this}pe.prototype.clear=yi,pe.prototype.delete=mi,pe.prototype.get=bi,pe.prototype.has=wi,pe.prototype.set=xi;function pt(i){var l=-1,d=i?i.length:0;for(this.__data__=new pe;++l<d;)this.add(i[l])}function vi(i){return this.__data__.set(i,s),this}function Ai(i){return this.__data__.has(i)}pt.prototype.add=pt.prototype.push=vi,pt.prototype.has=Ai;function ge(i){this.__data__=new de(i)}function _i(){this.__data__=new de}function Ci(i){return this.__data__.delete(i)}function Mi(i){return this.__data__.get(i)}function Ei(i){return this.__data__.has(i)}function Si(i,l){var d=this.__data__;if(d instanceof de){var m=d.__data__;if(!Xe||m.length<n-1)return m.push([i,l]),this;d=this.__data__=new pe(m)}return d.set(i,l),this}ge.prototype.clear=_i,ge.prototype.delete=Ci,ge.prototype.get=Mi,ge.prototype.has=Ei,ge.prototype.set=Si;function $i(i,l){var d=ye(i)||gn(i)?Ve(i.length,String):[],m=d.length,_=!!m;for(var v in i)I.call(i,v)&&!(_&&(v=="length"||Gn(v,m)))&&d.push(v);return d}function gt(i,l){for(var d=i.length;d--;)if(Vn(i[d][0],l))return d;return-1}var Li=Ki(Di);function Ri(i,l,d,m,_){var v=-1,S=i.length;for(d||(d=Zi),_||(_=[]);++v<S;){var j=i[v];d(j)?Qt(_,j):_[_.length]=j}return _}var Pi=zi();function Di(i,l){return i&&Pi(i,l,At)}function qn(i,l){l=mt(l,i)?[l]:Un(l);for(var d=0,m=l.length;i!=null&&d<m;)i=i[bt(l[d++])];return d&&d==m?i:void 0}function Bi(i){return z.call(i)}function Ti(i,l){return i!=null&&l in Object(i)}function dn(i,l,d,m,_){return i===l?!0:i==null||l==null||!xt(i)&&!vt(l)?i!==i&&l!==l:ki(i,l,dn,d,m,_)}function ki(i,l,d,m,_,v){var S=ye(i),j=ye(l),N=f,H=f;S||(N=Ae(i),N=N==u?E:N),j||(H=Ae(l),H=H==u?E:H);var V=N==E&&!Ye(i),Y=H==E&&!Ye(l),W=N==H;if(W&&!V)return v||(v=new ge),S||os(i)?Wn(i,l,d,m,_,v):Vi(i,l,N,d,m,_,v);if(!(_&a)){var Q=V&&I.call(i,"__wrapped__"),ee=Y&&I.call(l,"__wrapped__");if(Q||ee){var _e=Q?i.value():i,me=ee?l.value():l;return v||(v=new ge),d(_e,me,m,_,v)}}return W?(v||(v=new ge),Yi(i,l,d,m,_,v)):!1}function Oi(i,l,d,m){var _=d.length,v=_;if(i==null)return!v;for(i=Object(i);_--;){var S=d[_];if(S[2]?S[1]!==i[S[0]]:!(S[0]in i))return!1}for(;++_<v;){S=d[_];var j=S[0],N=i[j],H=S[1];if(S[2]){if(N===void 0&&!(j in i))return!1}else{var V=new ge,Y;if(!(Y===void 0?dn(H,N,m,o|a,V):Y))return!1}}return!0}function ji(i){if(!xt(i)||es(i))return!1;var l=Yn(i)||Ye(i)?ut:Yt;return l.test(De(i))}function Ni(i){return vt(i)&&yn(i.length)&&!!P[z.call(i)]}function Fi(i){return typeof i=="function"?i:i==null?us:typeof i=="object"?ye(i)?Ui(i[0],i[1]):qi(i):fs(i)}function Ii(i){if(!ts(i))return ht(i);var l=[];for(var d in Object(i))I.call(i,d)&&d!="constructor"&&l.push(d);return l}function Hi(i,l){var d=-1,m=wt(i)?Array(i.length):[];return Li(i,function(_,v,S){m[++d]=l(_,v,S)}),m}function qi(i){var l=Xi(i);return l.length==1&&l[0][2]?zn(l[0][0],l[0][1]):function(d){return d===i||Oi(d,i,l)}}function Ui(i,l){return mt(i)&&Kn(l)?zn(bt(i),l):function(d){var m=ls(d,i);return m===void 0&&m===l?cs(d,i):dn(l,m,void 0,o|a)}}function Wi(i){return function(l){return qn(l,i)}}function Gi(i){if(typeof i=="string")return i;if(mn(i))return Hn?Hn.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Un(i){return ye(i)?i:ns(i)}function Ki(i,l){return function(d,m){if(d==null)return d;if(!wt(d))return i(d,m);for(var _=d.length,v=-1,S=Object(d);++v<_&&m(S[v],v,S)!==!1;);return d}}function zi(i){return function(l,d,m){for(var _=-1,v=Object(l),S=m(l),j=S.length;j--;){var N=S[++_];if(d(v[N],N,v)===!1)break}return l}}function Wn(i,l,d,m,_,v){var S=_&a,j=i.length,N=l.length;if(j!=N&&!(S&&N>j))return!1;var H=v.get(i);if(H&&v.get(l))return H==l;var V=-1,Y=!0,W=_&o?new pt:void 0;for(v.set(i,l),v.set(l,i);++V<j;){var Q=i[V],ee=l[V];if(m)var _e=S?m(ee,Q,V,l,i,v):m(Q,ee,V,i,l,v);if(_e!==void 0){if(_e)continue;Y=!1;break}if(W){if(!en(l,function(me,Be){if(!W.has(Be)&&(Q===me||d(Q,me,m,_,v)))return W.add(Be)})){Y=!1;break}}else if(!(Q===ee||d(Q,ee,m,_,v))){Y=!1;break}}return v.delete(i),v.delete(l),Y}function Vi(i,l,d,m,_,v,S){switch(d){case U:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case q:return!(i.byteLength!=l.byteLength||!m(new ae(i),new ae(l)));case h:case g:case L:return Vn(+i,+l);case b:return i.name==l.name&&i.message==l.message;case R:case T:return i==l+"";case A:var j=rn;case B:var N=v&a;if(j||(j=on),i.size!=l.size&&!N)return!1;var H=S.get(i);if(H)return H==l;v|=o,S.set(i,l);var V=Wn(j(i),j(l),m,_,v,S);return S.delete(i),V;case Z:if(hn)return hn.call(i)==hn.call(l)}return!1}function Yi(i,l,d,m,_,v){var S=_&a,j=At(i),N=j.length,H=At(l),V=H.length;if(N!=V&&!S)return!1;for(var Y=N;Y--;){var W=j[Y];if(!(S?W in l:I.call(l,W)))return!1}var Q=v.get(i);if(Q&&v.get(l))return Q==l;var ee=!0;v.set(i,l),v.set(l,i);for(var _e=S;++Y<N;){W=j[Y];var me=i[W],Be=l[W];if(m)var Xn=S?m(Be,me,W,l,i,v):m(me,Be,W,i,l,v);if(!(Xn===void 0?me===Be||d(me,Be,m,_,v):Xn)){ee=!1;break}_e||(_e=W=="constructor")}if(ee&&!_e){var _t=i.constructor,Ct=l.constructor;_t!=Ct&&"constructor"in i&&"constructor"in l&&!(typeof _t=="function"&&_t instanceof _t&&typeof Ct=="function"&&Ct instanceof Ct)&&(ee=!1)}return v.delete(i),v.delete(l),ee}function yt(i,l){var d=i.__data__;return Qi(l)?d[typeof l=="string"?"string":"hash"]:d.map}function Xi(i){for(var l=At(i),d=l.length;d--;){var m=l[d],_=i[m];l[d]=[m,_,Kn(_)]}return l}function qe(i,l){var d=nn(i,l);return ji(d)?d:void 0}var Ae=Bi;(ln&&Ae(new ln(new ArrayBuffer(1)))!=U||Xe&&Ae(new Xe)!=A||cn&&Ae(cn.resolve())!=D||un&&Ae(new un)!=B||fn&&Ae(new fn)!=O)&&(Ae=function(i){var l=z.call(i),d=l==E?i.constructor:void 0,m=d?De(d):void 0;if(m)switch(m){case ti:return U;case ni:return A;case ri:return D;case ii:return B;case si:return O}return l});function Ji(i,l,d){l=mt(l,i)?[l]:Un(l);for(var m,_=-1,S=l.length;++_<S;){var v=bt(l[_]);if(!(m=i!=null&&d(i,v)))break;i=i[v]}if(m)return m;var S=i?i.length:0;return!!S&&yn(S)&&Gn(v,S)&&(ye(i)||gn(i))}function Zi(i){return ye(i)||gn(i)||!!(ve&&i&&i[ve])}function Gn(i,l){return l=l??c,!!l&&(typeof i=="number"||Xt.test(i))&&i>-1&&i%1==0&&i<l}function mt(i,l){if(ye(i))return!1;var d=typeof i;return d=="number"||d=="symbol"||d=="boolean"||i==null||mn(i)?!0:Gt.test(i)||!Wt.test(i)||l!=null&&i in Object(l)}function Qi(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function es(i){return!!C&&C in i}function ts(i){var l=i&&i.constructor,d=typeof l=="function"&&l.prototype||p;return i===d}function Kn(i){return i===i&&!xt(i)}function zn(i,l){return function(d){return d==null?!1:d[i]===l&&(l!==void 0||i in Object(d))}}var ns=pn(function(i){i=as(i);var l=[];return we.test(i)&&l.push(""),i.replace(Kt,function(d,m,_,v){l.push(_?v.replace(Vt,"$1"):m||d)}),l});function bt(i){if(typeof i=="string"||mn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function De(i){if(i!=null){try{return k.call(i)}catch{}try{return i+""}catch{}}return""}function rs(i,l){return Ri(is(i,l))}function is(i,l){var d=ye(i)?Zt:Hi;return d(i,Fi(l))}function pn(i,l){if(typeof i!="function"||l&&typeof l!="function")throw new TypeError(r);var d=function(){var m=arguments,_=l?l.apply(this,m):m[0],v=d.cache;if(v.has(_))return v.get(_);var S=i.apply(this,m);return d.cache=v.set(_,S),S};return d.cache=new(pn.Cache||pe),d}pn.Cache=pe;function Vn(i,l){return i===l||i!==i&&l!==l}function gn(i){return ss(i)&&I.call(i,"callee")&&(!ft.call(i,"callee")||z.call(i)==u)}var ye=Array.isArray;function wt(i){return i!=null&&yn(i.length)&&!Yn(i)}function ss(i){return vt(i)&&wt(i)}function Yn(i){var l=xt(i)?z.call(i):"";return l==y||l==x}function yn(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=c}function xt(i){var l=typeof i;return!!i&&(l=="object"||l=="function")}function vt(i){return!!i&&typeof i=="object"}function mn(i){return typeof i=="symbol"||vt(i)&&z.call(i)==Z}var os=Re?tn(Re):Ni;function as(i){return i==null?"":Gi(i)}function ls(i,l,d){var m=i==null?void 0:qn(i,l);return m===void 0?d:m}function cs(i,l){return i!=null&&Ji(i,l,Ti)}function At(i){return wt(i)?$i(i):Ii(i)}function us(i){return i}function fs(i){return mt(i)?He(bt(i)):Wi(i)}t.exports=rs}(Ze,Ze.exports)),Ze.exports}var hl=fl();const ei=mr(hl);function dl(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},c=f=>o.format==="date"?Qe(f).unix():parseFloat(f);e.forEach(f=>{if(o.type==="range"){const h=tt(o.key,f);if(Array.isArray(h)){const g=[c(h[0]),c(h[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=c(h);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(h=>{a[h]=void 0}):o.type==="spatial"?(a.geometry=o?.state?.geometry||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):o.key?.includes(".")?Qr(ei(n.items,o.key)).filter(h=>h).forEach(h=>{a[h]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const s=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{s.includes(a)||s.push(a)}):(o.type==="select"||o.type==="multiselect")&&(s.includes(o.key)||s.push(o.key))}),La(e,Object.assign({keys:s},t.fuseConfig)),r}async function pl(t,e,n){let r;n.externalFilter?r=await Ba(e,n.filters,t):r=await Ra(e,n.filters,t),n.results=n.sortResults(r)}function gl(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return $`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return $`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Qr(ei(n.items,t.key)).filter(s=>s)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return $`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return $`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return $``}}function yl(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function ml(t,e,n){return $`
    ${G(t.dirty,()=>$`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const s=r.target.parentElement.querySelector("[slot=filter]");s&&typeof s.reset=="function"&&s.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":Ee}
        </button>
      `)}
  `}function bl(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}class wl extends fe{static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}#e=[];#t=[];#n=ll;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=jt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}apply(){this.#e=dl(this.#n,this.#t,this),this.search()}async searchHandler(){await pl(this.#n,this.#t,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(e){return yl(e,this.#n)}#i(e,n){return gl(e,n,this)}#r(e,n){return ml(e,n,this)}resetFilters(){bl(this)}firstUpdated(e){let n={};pr.map(r=>{n={...n,[r]:this[r]}}),this.#n=n,this.#t=this.items?.map((r,s)=>Object.assign({id:r[this.idProperty]||`item-${s}`},r))||[],this.apply()}updated(e){pr.map(n=>{if(e.has(n))return this.firstUpdated(),!0})}updateResult(e){this.selectedResult=e.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){return $`
      <style>
        ${Ms}
        ${!this.unstyled&&nt}
        ${!this.unstyled&&xs}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":Ee}
        @submit="${e=>e.preventDefault()}"
      >
        ${G(this.filterProperties,()=>$`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${G(!this.inlineMode,()=>$`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Ot(Object.values(this.filters),(e,n)=>$` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${e}
                          @details-toggled=${r=>Vr(r,this.#n,this)}
                          data-details="${e.key}"
                        >
                          ${this.#r(e,dr(n,1))}
                          ${this.#i(e,dr(n,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${G(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&Dn(this.filters),()=>$`
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
        ${G(this.#n?.showResults&&this.results,()=>$`
            <eox-itemfilter-results
              .config=${this.#n}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${this.#e}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              @result=${this.updateResult}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}customElements.define("eox-itemfilter",wl);const xl=[".items"],vl={slot:"filterstitle",style:{margin:"14px 8px"}},Al={slot:"resultstitle",style:{margin:"14px 8px"}},Rl={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(t,{emit:e}){const n=e,r=t,s=async g=>{g?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(g.href),n("select",g)):h.selectedStac=null},o=g=>{g&&(h.loadSelectedCompareSTAC(g.href),n("select",g))},a=async g=>{const b=g.detail;r.enableCompare?o(b):s(b)},{smAndDown:c}=hs(),u=ds(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:c.value?"":r.filterProperties})),f=ps(null),h=gs();return(g,b)=>(ws(),ys("eox-itemfilter",ms({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":bs(h).stac?.filter(y=>y.rel==="child")}),[Jn("h4",vl,Zn(t.filtersTitle),1),Jn("h4",Al,Zn(t.resultsTitle),1)],48,xl))}};export{Rl as default};
