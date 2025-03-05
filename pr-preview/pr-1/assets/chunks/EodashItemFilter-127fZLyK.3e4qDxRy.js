var bo=Object.defineProperty;var ar=e=>{throw TypeError(e)};var wo=(e,t,n)=>t in e?bo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ye=(e,t,n)=>wo(e,typeof t!="symbol"?t+"":t,n),nn=(e,t,n)=>t.has(e)||ar("Cannot "+n);var K=(e,t,n)=>(nn(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?ar("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),bt=(e,t,n,r)=>(nn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),L=(e,t,n)=>(nn(e,t,"access private method"),n);import{u as vo,a as xo}from"./eo-dash.CdZYmsUC.js";import{r as ie,E as xe,x as S}from"./lit-element.Deg-YTNa.js";import{a as rn,o as Dt}from"./unsafe-html.DNVjkAgx.js";import{n as B}from"./when.BR7zwNJC.js";import{s as _o}from"./all.style.T4I2W3dO.js";import{d as Fe,c as Mo}from"./repeat.BbwrLQzw.js";import{_ as Nt,s as So,a as $o}from"./index.H62imwlA.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as Co}from"./orient2d.DArCjZZA.js";import{a as St,b as cn,c as Lo,d as Ao,l as Ro}from"./directive-helpers.Bb67qwqN.js";import{c as be,g as Cr}from"./commonjsHelpers.BosuxZz1.js";import{h as Eo,p as Po,c as To,o as ko,j as lr,t as cr,K as Oo,k as jo}from"./framework.MubbJdOF.js";import"./directive.CvdRHFdJ.js";const Do=`
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
`,et=`
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
`;var Tt,Lr;class No extends ie{constructor(){super();U(this,Tt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return S`
      <style>
        ${!this.unstyled&&et}
      </style>

      ${B(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
            @toggle="${L(this,Tt,Lr)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||xe}
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
    `}}Tt=new WeakSet,Lr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",No);function de(e){return Array.isArray?Array.isArray(e):Er(e)==="[object Array]"}function Io(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Bo(e){return e==null?"":Io(e)}function te(e){return typeof e=="string"}function Ar(e){return typeof e=="number"}function Ho(e){return e===!0||e===!1||qo(e)&&Er(e)=="[object Boolean]"}function Rr(e){return typeof e=="object"}function qo(e){return Rr(e)&&e!==null}function z(e){return e!=null}function sn(e){return!e.trim().length}function Er(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Uo="Incorrect 'index' type",Wo=e=>`Invalid value for key ${e}`,Go=e=>`Pattern length exceeds max of ${e}.`,Ko=e=>`Missing ${e} property in key`,zo=e=>`Property 'weight' in key '${e}' must be a positive integer`,ur=Object.prototype.hasOwnProperty;class Vo{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Pr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Pr(e){let t=null,n=null,r=null,i=1,o=null;if(te(e)||de(e))r=e,t=fr(e),n=un(e);else{if(!ur.call(e,"name"))throw new Error(Ko("name"));const a=e.name;if(r=a,ur.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(zo(a));t=fr(a),n=un(a),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function fr(e){return de(e)?e:e.split(".")}function un(e){return de(e)?e.join("."):e}function Yo(e,t){let n=[],r=!1;const i=(o,a,l)=>{if(z(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!z(f))return;if(l===a.length-1&&(te(f)||Ar(f)||Ho(f)))n.push(Bo(f));else if(de(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(e,te(t)?t.split("."):t,0),r?n:n[0]}const Fo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Xo={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Jo={location:0,threshold:.6,distance:100},Zo={useExtendedSearch:!1,getFn:Yo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...Xo,...Fo,...Jo,...Zo};const Qo=/[^ ]+/g;function ea(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const o=i.match(Qo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*e),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Rn{constructor({getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){this.norm=ea(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,te(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();te(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!z(t)||sn(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(z(a)){if(de(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(z(h))if(te(h)&&!sn(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else de(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(te(a)&&!sn(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Tr(e,t,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const i=new Rn({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Pr)),i.setSources(t),i.create(),i}function ta(e,{getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new Rn({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function wt(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=t/e.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function na(e=[],t=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=e.length;o<a;o+=1){let l=e[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const Le=32;function ra(e,t,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:u=_.includeMatches,ignoreLocation:f=_.ignoreLocation}={}){if(t.length>Le)throw new Error(Go(Le));const h=t.length,p=e.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,C=x?Array(p):[];let $;for(;($=e.indexOf(t,b))>-1;){let D=wt(t,{currentLocation:$,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(D,g),b=$+h,x){let Z=0;for(;Z<h;)C[$+Z]=1,Z+=1}}b=-1;let E=[],A=1,T=h+p;const O=1<<h-1;for(let D=0;D<h;D+=1){let Z=0,W=T;for(;Z<W;)wt(t,{errors:D,currentLocation:y+W,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Z=W:T=W,W=Math.floor((T-Z)/2+Z);T=W;let nt=Math.max(1,y-W+1),Ke=a?p:Math.min(y+W,p)+h,pe=Array(Ke+2);pe[Ke+1]=(1<<D)-1;for(let G=Ke;G>=nt;G-=1){let ke=G-1,rt=n[e.charAt(ke)];if(x&&(C[ke]=+!!rt),pe[G]=(pe[G+1]<<1|1)&rt,D&&(pe[G]|=(E[G+1]|E[G])<<1|1|E[G+1]),pe[G]&O&&(A=wt(t,{errors:D,currentLocation:ke,expectedLocation:y,distance:i,ignoreLocation:f}),A<=g)){if(g=A,b=ke,b<=y)break;nt=Math.max(1,2*y-b)}}if(wt(t,{errors:D+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;E=pe}const oe={isMatch:b>=0,score:Math.max(.001,A)};if(x){const D=na(C,l);D.length?u&&(oe.indices=D):oe.isMatch=!1}return oe}function ia(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}class kr{constructor(t,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:ia(y),startIndex:g})},p=this.pattern.length;if(p>Le){let y=0;const g=p%Le,b=p-g;for(;y<b;)h(this.pattern.substr(y,Le),y),y+=Le;if(g){const x=p-Le;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,t.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:C})=>{const{isMatch:$,score:E,indices:A}=ra(t,b,x,{location:i+C,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});$&&(y=!0),p+=E,$&&A&&(h=[...h,...A])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _e{constructor(t){this.pattern=t}static isMultiMatch(t){return hr(t,this.multiRegex)}static isSingleMatch(t){return hr(t,this.singleRegex)}search(){}}function hr(e,t){const n=e.match(t);return n?n[1]:null}class sa extends _e{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class oa extends _e{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class aa extends _e{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class la extends _e{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class ca extends _e{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class ua extends _e{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Or extends _e{constructor(t,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){super(t),this._bitapSearch=new kr(t,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class jr extends _e{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],o=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fn=[sa,jr,aa,la,ua,ca,oa,Or],dr=fn.length,fa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ha="|";function da(e,t={}){return e.split(ha).map(n=>{let r=n.trim().split(fa).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<dr;){const h=fn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,t)),u=!0)}if(!u)for(f=-1;++f<dr;){const h=fn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,t));break}}}return i})}const pa=new Set([Or.type,jr.type]);class ga{constructor(t,{isCaseSensitive:n=_.isCaseSensitive,includeMatches:r=_.includeMatches,minMatchCharLength:i=_.minMatchCharLength,ignoreLocation:o=_.ignoreLocation,findAllMatches:a=_.findAllMatches,location:l=_.location,threshold:u=_.threshold,distance:f=_.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?t:t.toLowerCase(),this.query=da(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:C}=g.search(t);if(b){if(o+=1,l+=C,r){const $=g.constructor.type;pa.has($)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const hn=[];function ya(...e){hn.push(...e)}function dn(e,t){for(let n=0,r=hn.length;n<r;n+=1){let i=hn[n];if(i.condition(e,t))return new i(e,t)}return new kr(e,t)}const $t={AND:"$and",OR:"$or"},pn={PATH:"$path",PATTERN:"$val"},gn=e=>!!(e[$t.AND]||e[$t.OR]),ma=e=>!!e[pn.PATH],ba=e=>!de(e)&&Rr(e)&&!gn(e),pr=e=>({[$t.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Dr(e,t,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=ma(i);if(!a&&o.length>1&&!gn(i))return r(pr(i));if(ba(i)){const u=a?i[pn.PATH]:o[0],f=a?i[pn.PATTERN]:i[u];if(!te(f))throw new Error(Wo(u));const h={keyId:un(u),pattern:f};return n&&(h.searcher=dn(f,t)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];de(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return gn(e)||(e=pr(e)),r(e)}function wa(e,{ignoreFieldNorm:t=_.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:o))}),n.score=r})}function va(e,t){const n=e.matches;t.matches=[],z(n)&&n.forEach(r=>{if(!z(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),t.matches.push(a)})}function xa(e,t){t.score=e.score}function _a(e,t,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const i=[];return n&&i.push(va),r&&i.push(xa),e.map(o=>{const{idx:a}=o,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Me{constructor(t,n={},r){this.options={..._,...n},this.options.useExtendedSearch,this._keyStore=new Vo(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Rn))throw new Error(Uo);this._myIndex=n||Tr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){z(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=te(t)?te(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return wa(u,{ignoreFieldNorm:l}),o&&u.sort(a),Ar(n)&&n>-1&&(u=u.slice(0,n)),_a(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=dn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(t){const n=Dr(t,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===$t.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(z(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(t){const n=dn(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!z(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:t,value:n,searcher:r}){if(!z(n))return[];let i=[];if(de(n))n.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:t,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:t,value:o,norm:a,indices:f})}return i}}Me.version="7.0.0";Me.createIndex=Tr;Me.parseIndex=ta;Me.config=_;Me.parseQuery=Dr;ya(ga);function Nr(e,t){const n=new Me(t.filterProperties,{keys:["title"]}),r=e.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function Ma(e,t){const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const yn=Math.min,De=Math.max,Ct=Math.round,vt=Math.floor,ne=e=>({x:e,y:e});function Ir(e){return e.split("-")[0]}function Sa(e){return e.split("-")[1]}function $a(e){return e==="x"?"y":"x"}function Ca(e){return e==="y"?"height":"width"}function Br(e){return["top","bottom"].includes(Ir(e))?"y":"x"}function La(e){return $a(Br(e))}function Hr(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function gr(e,t,n){let{reference:r,floating:i}=e;const o=Br(t),a=La(t),l=Ca(a),u=Ir(t),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Sa(t)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Aa=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=gr(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:C,fn:$}=l[x],{x:E,y:A,data:T,reset:O}=await $({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:e,floating:t}});h=E??h,p=A??p,g={...g,[C]:{...g[C],...T}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(y=O.placement),O.rects&&(f=O.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):O.rects),{x:h,y:p}=gr(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function It(){return typeof window<"u"}function Ue(e){return qr(e)?(e.nodeName||"").toLowerCase():"#document"}function V(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function se(e){var t;return(t=(qr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qr(e){return It()?e instanceof Node||e instanceof V(e).Node:!1}function Q(e){return It()?e instanceof Element||e instanceof V(e).Element:!1}function re(e){return It()?e instanceof HTMLElement||e instanceof V(e).HTMLElement:!1}function yr(e){return!It()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof V(e).ShadowRoot}function tt(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Ra(e){return["table","td","th"].includes(Ue(e))}function Bt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function En(e){const t=Pn(),n=Q(e)?ee(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ea(e){let t=we(e);for(;re(t)&&!Be(t);){if(En(t))return t;if(Bt(t))return null;t=we(t)}return null}function Pn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Be(e){return["html","body","#document"].includes(Ue(e))}function ee(e){return V(e).getComputedStyle(e)}function Ht(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function we(e){if(Ue(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yr(e)&&e.host||se(e);return yr(t)?t.host:t}function Ur(e){const t=we(e);return Be(t)?e.ownerDocument?e.ownerDocument.body:e.body:re(t)&&tt(t)?t:Ur(t)}function Xe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ur(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=V(i);if(o){const l=mn(a);return t.concat(a,a.visualViewport||[],tt(i)?i:[],l&&n?Xe(l):[])}return t.concat(i,Xe(i,[],n))}function mn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wr(e){const t=ee(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=re(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Ct(n)!==o||Ct(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Tn(e){return Q(e)?e:e.contextElement}function Ne(e){const t=Tn(e);if(!re(t))return ne(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Wr(t);let a=(o?Ct(n.width):n.width)/r,l=(o?Ct(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Pa=ne(0);function Gr(e){const t=V(e);return!Pn()||!t.visualViewport?Pa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ta(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==V(e)?!1:t}function Ae(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Tn(e);let a=ne(1);t&&(r?Q(r)&&(a=Ne(r)):a=Ne(e));const l=Ta(o,n,r)?Gr(o):ne(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=V(o),g=r&&Q(r)?V(r):r;let b=y,x=mn(b);for(;x&&r&&g!==b;){const C=Ne(x),$=x.getBoundingClientRect(),E=ee(x),A=$.left+(x.clientLeft+parseFloat(E.paddingLeft))*C.x,T=$.top+(x.clientTop+parseFloat(E.paddingTop))*C.y;u*=C.x,f*=C.y,h*=C.x,p*=C.y,u+=A,f+=T,b=V(x),x=mn(b)}}return Hr({width:h,height:p,x:u,y:f})}function kn(e,t){const n=Ht(e).scrollLeft;return t?t.left+n:Ae(se(e)).left+n}function Kr(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:kn(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function ka(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=se(r),l=t?Bt(t.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=ne(1);const h=ne(0),p=re(r);if((p||!p&&!o)&&((Ue(r)!=="body"||tt(a))&&(u=Ht(r)),re(r))){const g=Ae(r);f=Ne(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?Kr(a,u,!0):ne(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Oa(e){return Array.from(e.getClientRects())}function ja(e){const t=se(e),n=Ht(e),r=e.ownerDocument.body,i=De(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=De(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+kn(e);const l=-n.scrollTop;return ee(r).direction==="rtl"&&(a+=De(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Da(e,t){const n=V(e),r=se(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Pn();(!f||f&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Na(e,t){const n=Ae(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=re(e)?Ne(e):ne(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function mr(e,t,n){let r;if(t==="viewport")r=Da(e,n);else if(t==="document")r=ja(se(e));else if(Q(t))r=Na(t,n);else{const i=Gr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Hr(r)}function zr(e,t){const n=we(e);return n===t||!Q(n)||Be(n)?!1:ee(n).position==="fixed"||zr(n,t)}function Ia(e,t){const n=t.get(e);if(n)return n;let r=Xe(e,[],!1).filter(l=>Q(l)&&Ue(l)!=="body"),i=null;const o=ee(e).position==="fixed";let a=o?we(e):e;for(;Q(a)&&!Be(a);){const l=ee(a),u=En(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(a)&&!u&&zr(e,a))?r=r.filter(h=>h!==a):i=l,a=we(a)}return t.set(e,r),r}function Ba(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?Bt(t)?[]:Ia(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=mr(t,h,i);return f.top=De(p.top,f.top),f.right=yn(p.right,f.right),f.bottom=yn(p.bottom,f.bottom),f.left=De(p.left,f.left),f},mr(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ha(e){const{width:t,height:n}=Wr(e);return{width:t,height:n}}function qa(e,t,n){const r=re(t),i=se(t),o=n==="fixed",a=Ae(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=ne(0);if(r||!r&&!o)if((Ue(t)!=="body"||tt(i))&&(l=Ht(t)),r){const y=Ae(t,!0,o,t);u.x=y.x+t.clientLeft,u.y=y.y+t.clientTop}else i&&(u.x=kn(i));const f=i&&!r&&!o?Kr(i,l):ne(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function on(e){return ee(e).position==="static"}function br(e,t){if(!re(e)||ee(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return se(e)===n&&(n=n.ownerDocument.body),n}function Vr(e,t){const n=V(e);if(Bt(e))return n;if(!re(e)){let i=we(e);for(;i&&!Be(i);){if(Q(i)&&!on(i))return i;i=we(i)}return n}let r=br(e,t);for(;r&&Ra(r)&&on(r);)r=br(r,t);return r&&Be(r)&&on(r)&&!En(r)?n:r||Ea(e)||n}const Ua=async function(e){const t=this.getOffsetParent||Vr,n=this.getDimensions,r=await n(e.floating);return{reference:qa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wa(e){return ee(e).direction==="rtl"}const Ga={convertOffsetParentRelativeRectToViewportRelativeRect:ka,getDocumentElement:se,getClippingRect:Ba,getOffsetParent:Vr,getElementRects:Ua,getClientRects:Oa,getDimensions:Ha,getScale:Ne,isElement:Q,isRTL:Wa};function Yr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ka(e,t){let n=null,r;const i=se(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=e.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||t(),!y||!g)return;const b=vt(p),x=vt(i.clientWidth-(h+y)),C=vt(i.clientHeight-(p+g)),$=vt(h),A={rootMargin:-b+"px "+-x+"px "+-C+"px "+-$+"px",threshold:De(0,yn(1,u))||1};let T=!0;function O(oe){const D=oe[0].intersectionRatio;if(D!==u){if(!T)return a();D?a(!1,D):r=setTimeout(()=>{a(!1,1e-7)},1e3)}D===1&&!Yr(f,e.getBoundingClientRect())&&a(),T=!1}try{n=new IntersectionObserver(O,{...A,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,A)}n.observe(e)}return a(!0),o}function za(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Tn(e),h=i||o?[...f?Xe(f):[],...Xe(t)]:[];h.forEach($=>{i&&$.addEventListener("scroll",n,{passive:!0}),o&&$.addEventListener("resize",n)});const p=f&&l?Ka(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver($=>{let[E]=$;E&&E.target===f&&g&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var A;(A=g)==null||A.observe(t)})),n()}),f&&!u&&g.observe(f),g.observe(t));let b,x=u?Ae(e):null;u&&C();function C(){const $=Ae(e);x&&!Yr(x,$)&&n(),x=$,b=requestAnimationFrame(C)}return n(),()=>{var $;h.forEach(E=>{i&&E.removeEventListener("scroll",n),o&&E.removeEventListener("resize",n)}),p==null||p(),($=g)==null||$.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Va=(e,t,n)=>{const r=new Map,i={platform:Ga,...n},o={...i.platform,_c:r};return Aa(e,t,{...i,platform:o})};function Ya(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return za(t,n,()=>{n.matches(":popover-open")&&Va(t,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Fr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Nr({target:{value:""}},e)}function Fa(e,t){t.inlineMode&&e.stopPropagation()}function Xa(e){e.inlineMode&&(e.showDropdown=!0)}function Ja(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Za(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Fr(t),t.showDropdown=!1)}function Qa(e,t){t.inlineMode&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Fr(t),t.showDropdown=!1)}function el(e,t){var n,r,i=0,o,a,l,u,f,h,p,y=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var x=t[n],C=x.length-1;if(h=x[0],h[0]!==x[C][0]&&h[1]!==x[C][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<C;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=Co(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Xr(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function tl(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function He(e){return e.type==="Feature"?e.geometry:e}function J(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=Xr(e),i=He(t),o=i.type,a=t.bbox;let l=i.coordinates;if(a&&nl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=el(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function nl(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class Jr{constructor(t=[],n=rl){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const o=t-1>>1,a=n[o];if(r(i,a)>=0)break;n[t]=a,t=o}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,o=n[t];for(;t<i;){let a=(t<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[t]=l,t=a}n[t]=o}}function rl(e,t){return e<t?-1:e>t?1:0}function Zr(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function il(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class wr{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function sl(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)vr(n[r],t)}else vr(e,t)}let xt=0,_t=0,Mt=0;function vr(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;_t=_t+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new wr(a,xt,_t,Mt),h=new wr(l,xt,_t,Mt+1);f.otherEvent=h,h.otherEvent=f,Zr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(f),t.push(h),a=l,Mt=Mt+1}}xt=xt+1}class ol{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function al(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,o=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,f=t.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),C=r+g*(o-r);return[x,C]}return!1}function ll(e,t){t=t||!1;const n=[],r=new Jr([],il);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const o=new ol(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=al(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function cl(e,t){const n=new Jr([],Zr);return sl(e,n),ll(n,t)}var ul=cl;function On(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(St(e)),t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(St(t));const a=ul(cn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return cn(l.map(u=>Lo(u)))}function Qr(e,t,n){if(e!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=e.type,b=g==="FeatureCollection",x=g==="Feature",C=b?e.features.length:1,$=0;$<C;$++){f=b?e.features[$].geometry:x?e.geometry:e,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var E=0;E<l;E++){var A=0,T=0;if(a=y?f.geometries[E]:f,a!==null){u=a.coordinates;var O=a.type;switch(h=0,O){case null:break;case"Point":if(t(u,p,$,A,T)===!1)return!1;p++,A++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(t(u[r],p,$,A,T)===!1)return!1;p++,O==="MultiPoint"&&A++}O==="LineString"&&A++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(t(u[r][i],p,$,A,T)===!1)return!1;p++}O==="MultiLineString"&&A++,O==="Polygon"&&T++}O==="Polygon"&&A++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(T=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(t(u[r][i][o],p,$,A,T)===!1)return!1;p++}T++}A++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Qr(a.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function fl(e,t){var n,r,i,o,a,l,u,f,h,p,y=0,g=e.type==="FeatureCollection",b=e.type==="Feature",x=g?e.features.length:1;for(n=0;n<x;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,f=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,p=g?e.features[n].id:b?e.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(t(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(t(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Lt(e,t){fl(e,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(St(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(t(St(p,i),r,f)===!1)return!1}})}function bn(e,t={}){const n=He(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return hl(n,t);case"MultiPolygon":return dl(n,t);default:throw new Error("invalid poly")}}function hl(e,t={}){const r=He(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return ei(r,i)}function dl(e,t={}){const r=He(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return r.forEach(a=>{o.push(ei(a,i))}),cn(o)}function ei(e,t){return e.length>1?Ao(e,t):Ro(e[0],t)}function pl(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Lt(e,i=>{Lt(t,o=>{if(r===!1)return!1;r=gl(i.geometry,o.geometry,n)})}),r}function gl(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!wl(e.coordinates,t.coordinates);case"LineString":return!xr(t,e);case"Polygon":return!J(e,t)}break;case"LineString":switch(t.type){case"Point":return!xr(e,t);case"LineString":return!yl(e,t,n);case"Polygon":return!_r(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!J(t,e);case"LineString":return!_r(e,t,n);case"Polygon":return!ml(t,e,n)}}return!1}function xr(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(bl(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function yl(e,t,n){return On(e,t,{ignoreSelfIntersections:n}).features.length>0}function _r(e,t,n){for(const i of t.coordinates)if(J(i,e))return!0;return On(t,bn(e),{ignoreSelfIntersections:n}).features.length>0}function ml(e,t,n){for(const i of e.coordinates[0])if(J(i,t))return!0;for(const i of t.coordinates[0])if(J(i,e))return!0;return On(bn(e),bn(t),{ignoreSelfIntersections:n}).features.length>0}function bl(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function wl(e,t){return e[0]===t[0]&&e[1]===t[1]}function vl(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Lt(e,i=>{Lt(t,o=>{if(r===!0)return!0;r=!pl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var xl=vl;function At(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return Qr(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Rt(e,t,n={}){const r=Xr(e),i=tl(t);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),_l(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function _l(e,t,n,r,i){const o=n[0],a=n[1],l=e[0],u=e[1],f=t[0],h=t[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Ml(e,t){var n=He(e),r=He(t),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Sl(n,r);case"LineString":return Rt(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return $l(n,r);case"LineString":return Cl(n,r);case"Polygon":case"MultiPolygon":return Ll(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Al(n,r);case"Polygon":case"MultiPolygon":return Rl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return El(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Sl(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(ni(t.coordinates[n],e.coordinates)){r=!0;break}return r}function $l(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)ni(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Cl(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Rt(e.coordinates[r],t))return!1;n||(n=Rt(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function Ll(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=J(e.coordinates[i],t),!r){n=!1;break}r=J(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function Al(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Rt(e.coordinates[n],t))return!1;return!0}function Rl(e,t){var n=At(t),r=At(e);if(!ti(n,r))return!1;for(var i=!1,o=0;o<e.coordinates.length;o++){if(!J(e.coordinates[o],t))return!1;if(i||(i=J(e.coordinates[o],t,{ignoreBoundary:!0})),!i&&o<e.coordinates.length-1){var a=Pl(e.coordinates[o],e.coordinates[o+1]);i=J(a,t,{ignoreBoundary:!0})}}return i}function El(e,t){var n=At(e),r=At(t);if(!ti(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!J(e.coordinates[0][i],t))return!1;return!0}function ti(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function ni(e,t){return e[0]===t[0]&&e[1]===t[1]}function Pl(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Tl=Ml;const kl=(e,t)=>t?xl(e,t):!0,Ol=(e,t)=>t?Tl(e,t):!0;function jl(e,t="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${t}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return e.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ri;const Dl=(e,t)=>{ri=new Me(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Nl=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},u=ri.search(l);i=n.enableHighlighting?jl(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Fe(b).unix():b,g=Je(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Je(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Ol(p,a[h].geometry):kl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Il(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function qt(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Mr(e,t){return e*2+t}function Bl(e){return Object.keys(e).map(t=>({title:S`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function wn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Hl(e,t,n){return await(await fetch(`${n.externalFilter(e,t)}`)).json()}function ii(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Je(e,t){return e!=null&&e.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}var R,si,vn,xn,oi,_n,Mn,ai,Sn,li,ci;class ql extends ie{constructor(){super();U(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=L(this,R,oi).bind(this),this._handleKeyDown=L(this,R,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&L(this,R,vn).call(this)}disconnectedCallback(){this.inlineMode&&L(this,R,xn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?L(this,R,vn).call(this):L(this,R,xn).call(this))}render(){return S`
      <style>
        ${!this.unstyled&&et}
      </style>
      ${this.inlineMode?S`
            <div
              class="inline-container-wrapper"
              @click="${L(this,R,Mn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Bl(this.filters)}
                      .controller=${{remove:n=>L(this,R,li).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${B(wn(this.filters),()=>S`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${wn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${L(this,R,Mn)}"
                    @focus="${L(this,R,ai)}"
                    @input="${L(this,R,ci)}"
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
                  @keydown="${L(this,R,_n)}"
                  @click="${L(this,R,Sn)}"
                  @focus="${L(this,R,Sn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:S`<slot name="section"></slot>`}
    `}}R=new WeakSet,si=function(){setTimeout(()=>this._overlayCleanup=Ya(this))},vn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),L(this,R,si).call(this)},xn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},oi=function(n){Qa(n,this)},_n=function(n){Za(n,this)},Mn=function(n){Ja(n,this)},ai=function(){Xa(this)},Sn=function(n){Fa(n,this)},li=function(n){Ma(n,this)},ci=function(n){Nr(n,this)};customElements.define("eox-itemfilter-container",ql);function Ul(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",qt(e.filterObject),e.requestUpdate()}function Wl(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const $n="ddd, D MMM YYYY HH:mm:ss";function Gl(e){if(e.filterObject=qt(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function Kl(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Fe.unix(n).format($n)} - ${Fe.unix(r).format($n)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function zl(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],o=r?Fe.unix(i).format($n):i;return S`<div class="range-${t}">${o}</div>`}function Vl(e){Yl(-1,e),qt(e.filterObject),e.requestUpdate()}function Yl(e,t){t.selectedItems=[],jn(t),fi(t)}function ui(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),jn(t),fi(t)}function Fl(e,t){t.query=e.target.value,t.showSuggestions=!0}function Xl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&ui(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Jl(e,t){(e.has("suggestions")||e.has("query"))&&jn(t)}function Zl(e,t){var r;const n=((r=e.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return t.sort(n).map(i=>i)}function jn(e){var n,r,i;let t;e.query&&(t=new Me(e.suggestions,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=Zl(e,t||e.suggestions),(n=e.filterObject)!=null&&n.filterKeys&&(e.filteredSuggestions=(r=e.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),e.filterObject.state=(i=e.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),e.filterObject.state)),e.highlightedIndex=-1}function fi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Ql(e){qt(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function ec(e){e.renderRoot.querySelector("#eox-map").innerHTML="",hi(e)}function tc(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function hi(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&nc(e.geometry),r=Il(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function nc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var kt;class rc extends ie{constructor(){super();U(this,kt,()=>{Wl(this)});Ye(this,"debouncedInputHandler",Nt(K(this,kt),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Ul(this)}createRenderRoot(){return this}render(){return B(this.filterObject,()=>{var n;return S`
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
      `})}}kt=new WeakMap;customElements.define("eox-itemfilter-text",rc);function ic(e,t,n){return e.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}function sc(e,t){return S`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||xe}
    >
      <summary>
        <span class="title">
          ${e}
          <span class="count"
            >${t.aggregateResults(t.results,e).length}</span
          >
        </span>
      </summary>
      <div>
        ${di(e,t)}
      </div>
    </details>
  `}function di(e,t){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xe};return S`
    <ul class=${t.resultType}>
      ${Mo(r,a=>a.id,a=>S`
          <li
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${B(i.subTitleProperty||i.imageProperty,()=>S`
                  ${Je(i.imageProperty,a)?S`
                        <img
                          class="image"
                          src="${Je(i.imageProperty,a)}"
                        />
                      `:S`
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
                      >${rn(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${rn(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>S`
                  <span class="title"
                    >${rn(a[i.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}var Ee,Cn,pi;class oc extends ie{constructor(){super();U(this,Ee);this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}aggregateResults(n,r){return ic(n,r,this)}createRenderRoot(){return this}handleAccordion(n){ii(n,this.config,this)}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${B(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>xe)}
          <ul id="results" part="results">
            ${B(this.config.aggregateResults,()=>Dt(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>S`${B(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                          ${L(this,Ee,Cn).call(this,n)}
                        </div>`,()=>L(this,Ee,pi).call(this,n))}`),()=>L(this,Ee,Cn).call(this))}
          </ul>
        </div>
      </section>
    `}}Ee=new WeakSet,Cn=function(n){return di(n,this)},pi=function(n){return sc(n,this)};customElements.define("eox-itemfilter-results",oc);var ve,yi,mi,bi;class gi extends ie{constructor(){super();U(this,ve);Ye(this,"debouncedInputHandler",Nt(L(this,ve,bi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Jl(n,this)}reset(){Vl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xe;return S`
      <style>
        ${!this.unstyled&&et}
        ${!this.unstyled&&So}
        ${!this.unstyled&&$o}
      </style>
      ${B(this.suggestions.length>10,()=>S`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${L(this,ve,yi)}
                @keydown=${L(this,ve,mi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>S`
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
    `}}ve=new WeakSet,yi=function(n){Fl(n,this)},mi=function(n){Xl(n,this)},bi=function(n){ui(n,this)},Ye(gi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",gi);var Pe,vi,Ln;class wi extends ie{constructor(){super();U(this,Pe);this.filterObject={},this.tabIndex=0,this.inputHandler=L(this,Pe,vi).bind(this),this.debouncedInputHandler=Nt(this.inputHandler,500,{leading:!1})}reset(){Gl(this)}createRenderRoot(){return this}render(){return B(this.filterObject,()=>S`
        ${L(this,Pe,Ln).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${L(this,Pe,Ln).call(this,"max","after")}
      `)}}Pe=new WeakSet,vi=function(n){Kl(n,this)},Ln=function(n,r){return zl(n,r,this)},Ye(wi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",wi);var Ot,xi;class ac extends ie{constructor(){super();U(this,Ot);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Ql(this)}createRenderRoot(){return this}render(){return B(this.filterObject,()=>{var n;return S`
        <form style="display: inline">
          ${Dt(["intersects","within"],r=>S`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xe}"
                  value="${r}"
                  @click=${()=>L(this,Ot,xi).call(this,r)}
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
      `})}}Ot=new WeakSet,xi=function(n){tc(n,this)};customElements.define("eox-itemfilter-spatial",ac);var jt,_i;class lc extends ie{constructor(){super();U(this,jt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){L(this,jt,_i).call(this)}reset(){ec(this)}render(){return S`<div id="eox-map"></div>`}}jt=new WeakSet,_i=function(){hi(this)};customElements.define("eox-itemfilter-spatial-filter",lc);function cc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target.classList.add("highlighted"),t.requestUpdate()}function uc(e,t){const{code:n,target:r}=e;r.id==="eox-itemfilter-input-search"&&(t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&fc(n,e.target.value??"",t)))}function fc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Te,An,Mi;class hc extends ie{constructor(){super();U(this,Te);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",L(this,Te,An).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",L(this,Te,An).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return S`
      <style>
        ${et}
      </style>
      <span class="chip-container">
        ${Dt(this.items,n=>S`
            <span class="chip" @click=${L(this,Te,Mi).bind(this)}>
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
    `}}Te=new WeakSet,An=function(n){uc(n,this)},Mi=function(n){cc(n,this)};customElements.define("eox-itemfilter-chips",hc);const dc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Sr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var pc=200,Dn="__lodash_hash_undefined__",gc=1/0,yc="[object Function]",mc="[object GeneratorFunction]",bc=/[\\^$.*+?()[\]{}|]/g,wc=/^\[object .+?Constructor\]$/,vc=typeof be=="object"&&be&&be.Object===Object&&be,xc=typeof self=="object"&&self&&self.Object===Object&&self,Nn=vc||xc||Function("return this")();function _c(e,t){var n=e?e.length:0;return!!n&&Sc(e,t,0)>-1}function Mc(e,t,n,r){for(var i=e.length,o=n+-1;++o<i;)if(t(e[o],o,e))return o;return-1}function Sc(e,t,n){if(t!==t)return Mc(e,$c,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function $c(e){return e!==e}function Cc(e,t){return e.has(t)}function Lc(e,t){return e==null?void 0:e[t]}function Ac(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Si(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Rc=Array.prototype,Ec=Function.prototype,$i=Object.prototype,an=Nn["__core-js_shared__"],$r=function(){var e=/[^.]+$/.exec(an&&an.keys&&an.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ci=Ec.toString,In=$i.hasOwnProperty,Pc=$i.toString,Tc=RegExp("^"+Ci.call(In).replace(bc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kc=Rc.splice,Oc=Bn(Nn,"Map"),ln=Bn(Nn,"Set"),Ze=Bn(Object,"create");function Re(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function jc(){this.__data__=Ze?Ze(null):{}}function Dc(e){return this.has(e)&&delete this.__data__[e]}function Nc(e){var t=this.__data__;if(Ze){var n=t[e];return n===Dn?void 0:n}return In.call(t,e)?t[e]:void 0}function Ic(e){var t=this.__data__;return Ze?t[e]!==void 0:In.call(t,e)}function Bc(e,t){var n=this.__data__;return n[e]=Ze&&t===void 0?Dn:t,this}Re.prototype.clear=jc;Re.prototype.delete=Dc;Re.prototype.get=Nc;Re.prototype.has=Ic;Re.prototype.set=Bc;function We(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Hc(){this.__data__=[]}function qc(e){var t=this.__data__,n=Ut(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():kc.call(t,n,1),!0}function Uc(e){var t=this.__data__,n=Ut(t,e);return n<0?void 0:t[n][1]}function Wc(e){return Ut(this.__data__,e)>-1}function Gc(e,t){var n=this.__data__,r=Ut(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}We.prototype.clear=Hc;We.prototype.delete=qc;We.prototype.get=Uc;We.prototype.has=Wc;We.prototype.set=Gc;function Ge(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kc(){this.__data__={hash:new Re,map:new(Oc||We),string:new Re}}function zc(e){return Wt(this,e).delete(e)}function Vc(e){return Wt(this,e).get(e)}function Yc(e){return Wt(this,e).has(e)}function Fc(e,t){return Wt(this,e).set(e,t),this}Ge.prototype.clear=Kc;Ge.prototype.delete=zc;Ge.prototype.get=Vc;Ge.prototype.has=Yc;Ge.prototype.set=Fc;function Et(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ge;++t<n;)this.add(e[t])}function Xc(e){return this.__data__.set(e,Dn),this}function Jc(e){return this.__data__.has(e)}Et.prototype.add=Et.prototype.push=Xc;Et.prototype.has=Jc;function Ut(e,t){for(var n=e.length;n--;)if(su(e[n][0],t))return n;return-1}function Zc(e){if(!Li(e)||nu(e))return!1;var t=ou(e)||Ac(e)?Tc:wc;return t.test(ru(e))}function Qc(e,t,n){var r=-1,i=_c,o=e.length,a=!0,l=[],u=l;if(o>=pc){var f=eu(e);if(f)return Si(f);a=!1,i=Cc,u=new Et}else u=l;e:for(;++r<o;){var h=e[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue e;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var eu=ln&&1/Si(new ln([,-0]))[1]==gc?function(e){return new ln(e)}:au;function Wt(e,t){var n=e.__data__;return tu(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Bn(e,t){var n=Lc(e,t);return Zc(n)?n:void 0}function tu(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function nu(e){return!!$r&&$r in e}function ru(e){if(e!=null){try{return Ci.call(e)}catch{}try{return e+""}catch{}}return""}function iu(e){return e&&e.length?Qc(e):[]}function su(e,t){return e===t||e!==e&&t!==t}function ou(e){var t=Li(e)?Pc.call(e):"";return t==yc||t==mc}function Li(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function au(){}var lu=iu;const Ai=Cr(lu);var Pt={exports:{}};Pt.exports;(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",x="[object Map]",C="[object Number]",$="[object Object]",E="[object Promise]",A="[object RegExp]",T="[object Set]",O="[object String]",oe="[object Symbol]",D="[object WeakMap]",Z="[object ArrayBuffer]",W="[object DataView]",nt="[object Float32Array]",Ke="[object Float64Array]",pe="[object Int8Array]",Hn="[object Int16Array]",G="[object Int32Array]",ke="[object Uint8Array]",rt="[object Uint8ClampedArray]",Ti="[object Uint16Array]",ki="[object Uint32Array]",Oi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ji=/^\w*$/,Di=/^\./,Ni=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ii=/[\\^$.*+?()[\]{}|]/g,Bi=/\\(\\)?/g,Hi=/^\[object .+?Constructor\]$/,qi=/^(?:0|[1-9]\d*)$/,P={};P[nt]=P[Ke]=P[pe]=P[Hn]=P[G]=P[ke]=P[rt]=P[Ti]=P[ki]=!0,P[u]=P[f]=P[Z]=P[h]=P[W]=P[p]=P[y]=P[g]=P[x]=P[C]=P[$]=P[A]=P[T]=P[O]=P[D]=!1;var qn=typeof be=="object"&&be&&be.Object===Object&&be,Ui=typeof self=="object"&&self&&self.Object===Object&&self,ge=qn||Ui||Function("return this")(),Un=t&&!t.nodeType&&t,Wn=Un&&!0&&e&&!e.nodeType&&e,Wi=Wn&&Wn.exports===Un,Gn=Wi&&qn.process,Kn=function(){try{return Gn&&Gn.binding("util")}catch{}}(),zn=Kn&&Kn.isTypedArray;function Gi(s,c){for(var d=-1,m=s?s.length:0,v=Array(m);++d<m;)v[d]=c(s[d],d,s);return v}function Ki(s,c){for(var d=-1,m=c.length,v=s.length;++d<m;)s[v+d]=c[d];return s}function zi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Vi(s){return function(c){return c==null?void 0:c[s]}}function Yi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Fi(s){return function(c){return s(c)}}function Xi(s,c){return s==null?void 0:s[c]}function Gt(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Ji(s){var c=-1,d=Array(s.size);return s.forEach(function(m,v){d[++c]=[v,m]}),d}function Zi(s,c){return function(d){return s(c(d))}}function Qi(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var es=Array.prototype,ts=Function.prototype,it=Object.prototype,Kt=ge["__core-js_shared__"],Vn=function(){var s=/[^.]+$/.exec(Kt&&Kt.keys&&Kt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Yn=ts.toString,ae=it.hasOwnProperty,Oe=it.toString,ns=RegExp("^"+Yn.call(ae).replace(Ii,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),st=ge.Symbol,Fn=ge.Uint8Array,rs=it.propertyIsEnumerable,is=es.splice,Xn=st?st.isConcatSpreadable:void 0,ss=Zi(Object.keys,Object),zt=je(ge,"DataView"),ze=je(ge,"Map"),Vt=je(ge,"Promise"),Yt=je(ge,"Set"),Ft=je(ge,"WeakMap"),Ve=je(Object,"create"),os=$e(zt),as=$e(ze),ls=$e(Vt),cs=$e(Yt),us=$e(Ft),ot=st?st.prototype:void 0,Xt=ot?ot.valueOf:void 0,Jn=ot?ot.toString:void 0;function Se(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function fs(){this.__data__=Ve?Ve(null):{}}function hs(s){return this.has(s)&&delete this.__data__[s]}function ds(s){var c=this.__data__;if(Ve){var d=c[s];return d===i?void 0:d}return ae.call(c,s)?c[s]:void 0}function ps(s){var c=this.__data__;return Ve?c[s]!==void 0:ae.call(c,s)}function gs(s,c){var d=this.__data__;return d[s]=Ve&&c===void 0?i:c,this}Se.prototype.clear=fs,Se.prototype.delete=hs,Se.prototype.get=ds,Se.prototype.has=ps,Se.prototype.set=gs;function le(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ys(){this.__data__=[]}function ms(s){var c=this.__data__,d=lt(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():is.call(c,d,1),!0}function bs(s){var c=this.__data__,d=lt(c,s);return d<0?void 0:c[d][1]}function ws(s){return lt(this.__data__,s)>-1}function vs(s,c){var d=this.__data__,m=lt(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}le.prototype.clear=ys,le.prototype.delete=ms,le.prototype.get=bs,le.prototype.has=ws,le.prototype.set=vs;function ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function xs(){this.__data__={hash:new Se,map:new(ze||le),string:new Se}}function _s(s){return ct(this,s).delete(s)}function Ms(s){return ct(this,s).get(s)}function Ss(s){return ct(this,s).has(s)}function $s(s,c){return ct(this,s).set(s,c),this}ce.prototype.clear=xs,ce.prototype.delete=_s,ce.prototype.get=Ms,ce.prototype.has=Ss,ce.prototype.set=$s;function at(s){var c=-1,d=s?s.length:0;for(this.__data__=new ce;++c<d;)this.add(s[c])}function Cs(s){return this.__data__.set(s,i),this}function Ls(s){return this.__data__.has(s)}at.prototype.add=at.prototype.push=Cs,at.prototype.has=Ls;function ue(s){this.__data__=new le(s)}function As(){this.__data__=new le}function Rs(s){return this.__data__.delete(s)}function Es(s){return this.__data__.get(s)}function Ps(s){return this.__data__.has(s)}function Ts(s,c){var d=this.__data__;if(d instanceof le){var m=d.__data__;if(!ze||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ce(m)}return d.set(s,c),this}ue.prototype.clear=As,ue.prototype.delete=Rs,ue.prototype.get=Es,ue.prototype.has=Ps,ue.prototype.set=Ts;function ks(s,c){var d=fe(s)||Qt(s)?Yi(s.length,String):[],m=d.length,v=!!m;for(var w in s)ae.call(s,w)&&!(v&&(w=="length"||tr(w,m)))&&d.push(w);return d}function lt(s,c){for(var d=s.length;d--;)if(ir(s[d][0],c))return d;return-1}var Os=Js(Ns);function js(s,c,d,m,v){var w=-1,M=s.length;for(d||(d=ro),v||(v=[]);++w<M;){var k=s[w];d(k)?Ki(v,k):v[v.length]=k}return v}var Ds=Zs();function Ns(s,c){return s&&Ds(s,c,gt)}function Zn(s,c){c=ut(c,s)?[c]:Qn(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[ft(c[d++])];return d&&d==m?s:void 0}function Is(s){return Oe.call(s)}function Bs(s,c){return s!=null&&c in Object(s)}function Jt(s,c,d,m,v){return s===c?!0:s==null||c==null||!dt(s)&&!pt(c)?s!==s&&c!==c:Hs(s,c,Jt,d,m,v)}function Hs(s,c,d,m,v,w){var M=fe(s),k=fe(c),j=f,N=f;M||(j=ye(s),j=j==u?$:j),k||(N=ye(c),N=N==u?$:N);var H=j==$&&!Gt(s),q=N==$&&!Gt(c),I=j==N;if(I&&!H)return w||(w=new ue),M||fo(s)?er(s,c,d,m,v,w):Qs(s,c,j,d,m,v,w);if(!(v&a)){var Y=H&&ae.call(s,"__wrapped__"),F=q&&ae.call(c,"__wrapped__");if(Y||F){var me=Y?s.value():s,he=F?c.value():c;return w||(w=new ue),d(me,he,m,v,w)}}return I?(w||(w=new ue),eo(s,c,d,m,v,w)):!1}function qs(s,c,d,m){var v=d.length,w=v;if(s==null)return!w;for(s=Object(s);v--;){var M=d[v];if(M[2]?M[1]!==s[M[0]]:!(M[0]in s))return!1}for(;++v<w;){M=d[v];var k=M[0],j=s[k],N=M[1];if(M[2]){if(j===void 0&&!(k in s))return!1}else{var H=new ue,q;if(!(q===void 0?Jt(N,j,m,o|a,H):q))return!1}}return!0}function Us(s){if(!dt(s)||so(s))return!1;var c=sr(s)||Gt(s)?ns:Hi;return c.test($e(s))}function Ws(s){return pt(s)&&en(s.length)&&!!P[Oe.call(s)]}function Gs(s){return typeof s=="function"?s:s==null?yo:typeof s=="object"?fe(s)?Ys(s[0],s[1]):Vs(s):mo(s)}function Ks(s){if(!oo(s))return ss(s);var c=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&c.push(d);return c}function zs(s,c){var d=-1,m=ht(s)?Array(s.length):[];return Os(s,function(v,w,M){m[++d]=c(v,w,M)}),m}function Vs(s){var c=to(s);return c.length==1&&c[0][2]?rr(c[0][0],c[0][1]):function(d){return d===s||qs(d,s,c)}}function Ys(s,c){return ut(s)&&nr(c)?rr(ft(s),c):function(d){var m=po(d,s);return m===void 0&&m===c?go(d,s):Jt(c,m,void 0,o|a)}}function Fs(s){return function(c){return Zn(c,s)}}function Xs(s){if(typeof s=="string")return s;if(tn(s))return Jn?Jn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Qn(s){return fe(s)?s:ao(s)}function Js(s,c){return function(d,m){if(d==null)return d;if(!ht(d))return s(d,m);for(var v=d.length,w=-1,M=Object(d);++w<v&&m(M[w],w,M)!==!1;);return d}}function Zs(s){return function(c,d,m){for(var v=-1,w=Object(c),M=m(c),k=M.length;k--;){var j=M[++v];if(d(w[j],j,w)===!1)break}return c}}function er(s,c,d,m,v,w){var M=v&a,k=s.length,j=c.length;if(k!=j&&!(M&&j>k))return!1;var N=w.get(s);if(N&&w.get(c))return N==c;var H=-1,q=!0,I=v&o?new at:void 0;for(w.set(s,c),w.set(c,s);++H<k;){var Y=s[H],F=c[H];if(m)var me=M?m(F,Y,H,c,s,w):m(Y,F,H,s,c,w);if(me!==void 0){if(me)continue;q=!1;break}if(I){if(!zi(c,function(he,Ce){if(!I.has(Ce)&&(Y===he||d(Y,he,m,v,w)))return I.add(Ce)})){q=!1;break}}else if(!(Y===F||d(Y,F,m,v,w))){q=!1;break}}return w.delete(s),w.delete(c),q}function Qs(s,c,d,m,v,w,M){switch(d){case W:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Fn(s),new Fn(c)));case h:case p:case C:return ir(+s,+c);case y:return s.name==c.name&&s.message==c.message;case A:case O:return s==c+"";case x:var k=Ji;case T:var j=w&a;if(k||(k=Qi),s.size!=c.size&&!j)return!1;var N=M.get(s);if(N)return N==c;w|=o,M.set(s,c);var H=er(k(s),k(c),m,v,w,M);return M.delete(s),H;case oe:if(Xt)return Xt.call(s)==Xt.call(c)}return!1}function eo(s,c,d,m,v,w){var M=v&a,k=gt(s),j=k.length,N=gt(c),H=N.length;if(j!=H&&!M)return!1;for(var q=j;q--;){var I=k[q];if(!(M?I in c:ae.call(c,I)))return!1}var Y=w.get(s);if(Y&&w.get(c))return Y==c;var F=!0;w.set(s,c),w.set(c,s);for(var me=M;++q<j;){I=k[q];var he=s[I],Ce=c[I];if(m)var or=M?m(Ce,he,I,c,s,w):m(he,Ce,I,s,c,w);if(!(or===void 0?he===Ce||d(he,Ce,m,v,w):or)){F=!1;break}me||(me=I=="constructor")}if(F&&!me){var yt=s.constructor,mt=c.constructor;yt!=mt&&"constructor"in s&&"constructor"in c&&!(typeof yt=="function"&&yt instanceof yt&&typeof mt=="function"&&mt instanceof mt)&&(F=!1)}return w.delete(s),w.delete(c),F}function ct(s,c){var d=s.__data__;return io(c)?d[typeof c=="string"?"string":"hash"]:d.map}function to(s){for(var c=gt(s),d=c.length;d--;){var m=c[d],v=s[m];c[d]=[m,v,nr(v)]}return c}function je(s,c){var d=Xi(s,c);return Us(d)?d:void 0}var ye=Is;(zt&&ye(new zt(new ArrayBuffer(1)))!=W||ze&&ye(new ze)!=x||Vt&&ye(Vt.resolve())!=E||Yt&&ye(new Yt)!=T||Ft&&ye(new Ft)!=D)&&(ye=function(s){var c=Oe.call(s),d=c==$?s.constructor:void 0,m=d?$e(d):void 0;if(m)switch(m){case os:return W;case as:return x;case ls:return E;case cs:return T;case us:return D}return c});function no(s,c,d){c=ut(c,s)?[c]:Qn(c);for(var m,v=-1,M=c.length;++v<M;){var w=ft(c[v]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var M=s?s.length:0;return!!M&&en(M)&&tr(w,M)&&(fe(s)||Qt(s))}function ro(s){return fe(s)||Qt(s)||!!(Xn&&s&&s[Xn])}function tr(s,c){return c=c??l,!!c&&(typeof s=="number"||qi.test(s))&&s>-1&&s%1==0&&s<c}function ut(s,c){if(fe(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||tn(s)?!0:ji.test(s)||!Oi.test(s)||c!=null&&s in Object(c)}function io(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function so(s){return!!Vn&&Vn in s}function oo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||it;return s===d}function nr(s){return s===s&&!dt(s)}function rr(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var ao=Zt(function(s){s=ho(s);var c=[];return Di.test(s)&&c.push(""),s.replace(Ni,function(d,m,v,w){c.push(v?w.replace(Bi,"$1"):m||d)}),c});function ft(s){if(typeof s=="string"||tn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function $e(s){if(s!=null){try{return Yn.call(s)}catch{}try{return s+""}catch{}}return""}function lo(s,c){return js(co(s,c))}function co(s,c){var d=fe(s)?Gi:zs;return d(s,Gs(c))}function Zt(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,v=c?c.apply(this,m):m[0],w=d.cache;if(w.has(v))return w.get(v);var M=s.apply(this,m);return d.cache=w.set(v,M),M};return d.cache=new(Zt.Cache||ce),d}Zt.Cache=ce;function ir(s,c){return s===c||s!==s&&c!==c}function Qt(s){return uo(s)&&ae.call(s,"callee")&&(!rs.call(s,"callee")||Oe.call(s)==u)}var fe=Array.isArray;function ht(s){return s!=null&&en(s.length)&&!sr(s)}function uo(s){return pt(s)&&ht(s)}function sr(s){var c=dt(s)?Oe.call(s):"";return c==g||c==b}function en(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function dt(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function pt(s){return!!s&&typeof s=="object"}function tn(s){return typeof s=="symbol"||pt(s)&&Oe.call(s)==oe}var fo=zn?Fi(zn):Ws;function ho(s){return s==null?"":Xs(s)}function po(s,c,d){var m=s==null?void 0:Zn(s,c);return m===void 0?d:m}function go(s,c){return s!=null&&no(s,c,Bs)}function gt(s){return ht(s)?ks(s):Ks(s)}function yo(s){return s}function mo(s){return ut(s)?Vi(ft(s)):Fs(s)}e.exports=lo})(Pt,Pt.exports);var cu=Pt.exports;const Ri=Cr(cu);function uu(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Fe(f).unix():parseFloat(f);t.forEach(f=>{var h,p;if(o.type==="range"){const y=Je(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ai(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Dl(t,Object.assign({keys:i},e.fuseConfig)),r}async function fu(e,t,n){let r;n.externalFilter?r=await Hl(t,n.filters,e):r=await Nl(t,n.filters,e),n.results=n.sortResults(r)}function hu(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return S`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${t}
        .filterObject=${e}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Ai(Ri(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function du(e,t){return[...e].sort((n,r)=>n[t.titleProperty].localeCompare(r[t.titleProperty]))}function pu(e,t,n){return S`
    ${B(e.dirty,()=>S`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":xe}
        </button>
      `)}
  `}function gu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var Qe,Ie,X,qe,Ei,Pi;class yu extends ie{constructor(){super();U(this,qe);U(this,Qe,[]);U(this,Ie,[]);U(this,X,dc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Nt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}apply(){bt(this,Qe,uu(K(this,X),K(this,Ie),this)),this.search()}async searchHandler(){await fu(K(this,X),K(this,Ie),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return du(n,K(this,X))}resetFilters(){gu(this)}firstUpdated(n){var i;let r={};Sr.map(o=>{r={...r,[o]:this[o]}}),bt(this,X,r),bt(this,Ie,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Sr.map(r=>{if(n.has(r))return this.firstUpdated(),!0})}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var n;return S`
      <style>
        ${Do}
        ${!this.unstyled&&et}
        ${!this.unstyled&&_o}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xe}
        @submit="${r=>r.preventDefault()}"
      >
        ${B(this.filterProperties,()=>S`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${B(!this.inlineMode,()=>S`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Dt(Object.values(this.filters),(r,i)=>S` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>ii(o,K(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${L(this,qe,Pi).call(this,r,Mr(i,1))}
                          ${L(this,qe,Ei).call(this,r,Mr(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${B(!this.inlineMode&&K(this,X).filterProperties&&!this.inlineMode&&K(this,X).filterProperties&&wn(this.filters),()=>S`
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
        ${B(((n=K(this,X))==null?void 0:n.showResults)&&this.results,()=>S`
            <eox-itemfilter-results
              .config=${K(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${K(this,Qe)}
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
    `}}Qe=new WeakMap,Ie=new WeakMap,X=new WeakMap,qe=new WeakSet,Ei=function(n,r){return hu(n,r,this)},Pi=function(n,r){return pu(n,r,this)};customElements.define("eox-itemfilter",yu);const mu=[".items"],bu={slot:"filterstitle",style:{margin:"14px 8px"}},wu={slot:"resultstitle",style:{margin:"14px 8px"}},Ou={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(e,{emit:t}){const n=t,r=e,i=async p=>{p?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(p.href),n("select",p)):h.selectedStac=null},o=p=>{p&&(h.loadSelectedCompareSTAC(p.href),n("select",p))},a=async p=>{const y=p.detail;r.enableCompare?o(y):i(y)},{smAndDown:l}=vo(),u=Eo(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:l.value?"":r.filterProperties})),f=Po(null),h=xo();return(p,y)=>{var g;return ko(),To("eox-itemfilter",Oo({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":(g=jo(h).stac)==null?void 0:g.filter(b=>b.rel==="child")}),[lr("h4",bu,cr(e.filtersTitle),1),lr("h4",wu,cr(e.resultsTitle),1)],48,mu)}}};export{Ou as default};
