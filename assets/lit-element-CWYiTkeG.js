/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=globalThis,k=v.ShadowRoot&&(v.ShadyCSS===void 0||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),j=new WeakMap;let G=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(k&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=j.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&j.set(t,e))}return e}toString(){return this.cssText}};const ie=n=>new G(typeof n=="string"?n:n+"",void 0,L),we=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new G(t,n,L)},ne=(n,e)=>{if(k)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=v.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},B=k?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ie(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:re,defineProperty:oe,getOwnPropertyDescriptor:he,getOwnPropertyNames:ae,getOwnPropertySymbols:le,getPrototypeOf:de}=Object,O=globalThis,D=O.trustedTypes,ce=D?D.emptyScript:"",ue=O.reactiveElementPolyfillSupport,C=(n,e)=>n,M={toAttribute(n,e){switch(e){case Boolean:n=n?ce:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Q=(n,e)=>!re(n,e),V={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:Q};Symbol.metadata??=Symbol("metadata"),O.litPropertyMetadata??=new WeakMap;let g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=V){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&oe(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=he(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i?.call(this)},set(o){const u=i?.call(this);r.call(this,o),this.requestUpdate(e,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??V}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=de(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,s=[...ae(t),...le(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(B(i))}else e!==void 0&&t.push(B(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:M).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:M;this._$Em=i,this[i]=o.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??=this.constructor.getPropertyOptions(e),!(s.hasChanged??Q)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s)r.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[C("elementProperties")]=new Map,g[C("finalized")]=new Map,ue?.({ReactiveElement:g}),(O.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,T=z.trustedTypes,W=T?T.createPolicy("lit-html",{createHTML:n=>n}):void 0,X="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,Y="?"+f,pe=`<${Y}>`,m=document,w=()=>m.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",I=Array.isArray,$e=n=>I(n)||typeof n?.[Symbol.iterator]=="function",R=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,Z=/>/g,_=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,K=/"/g,ee=/^(?:script|style|textarea|title)$/i,te=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Ue=te(1),xe=te(2),y=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),F=new WeakMap,A=m.createTreeWalker(m,129);function se(n,e){if(!I(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return W!==void 0?W.createHTML(e):e}const fe=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=b;for(let u=0;u<t;u++){const h=n[u];let l,c,a=-1,p=0;for(;p<h.length&&(o.lastIndex=p,c=o.exec(h),c!==null);)p=o.lastIndex,o===b?c[1]==="!--"?o=q:c[1]!==void 0?o=Z:c[2]!==void 0?(ee.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=_):c[3]!==void 0&&(o=_):o===_?c[0]===">"?(o=i??b,a=-1):c[1]===void 0?a=-2:(a=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?_:c[3]==='"'?K:J):o===K||o===J?o=_:o===q||o===Z?o=b:(o=_,i=void 0);const $=o===_&&n[u+1].startsWith("/>")?" ":"";r+=o===b?h+pe:a>=0?(s.push(l),h.slice(0,a)+X+h.slice(a)+f+$):h+f+(a===-2?u:$)}return[se(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class U{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const u=e.length-1,h=this.parts,[l,c]=fe(e,t);if(this.el=U.createElement(l,s),A.currentNode=this.el.content,t===2||t===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&h.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(X)){const p=c[o++],$=i.getAttribute(a).split(f),x=/([.?@])?(.*)/.exec(p);h.push({type:1,index:r,name:x[2],strings:$,ctor:x[1]==="."?Ae:x[1]==="?"?me:x[1]==="@"?ge:N}),i.removeAttribute(a)}else a.startsWith(f)&&(h.push({type:6,index:r}),i.removeAttribute(a));if(ee.test(i.tagName)){const a=i.textContent.split(f),p=a.length-1;if(p>0){i.textContent=T?T.emptyScript:"";for(let $=0;$<p;$++)i.append(a[$],w()),A.nextNode(),h.push({type:2,index:++r});i.append(a[p],w())}}}else if(i.nodeType===8)if(i.data===Y)h.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(f,a+1))!==-1;)h.push({type:7,index:r}),a+=f.length-1}r++}}static createElement(e,t){const s=m.createElement("template");return s.innerHTML=e,s}}function E(n,e,t=n,s){if(e===y)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl;const r=P(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=E(n,i._$AS(n,e.values),i,s)),e}class _e{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??m).importNode(t,!0);A.currentNode=i;let r=A.nextNode(),o=0,u=0,h=s[0];for(;h!==void 0;){if(o===h.index){let l;h.type===2?l=new S(r,r.nextSibling,this,e):h.type===1?l=new h.ctor(r,h.name,h.strings,this,e):h.type===6&&(l=new ye(r,this,e)),this._$AV.push(l),h=s[++u]}o!==h?.index&&(r=A.nextNode(),o++)}return A.currentNode=m,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class S{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),P(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$e(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(m.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=U.createElement(se(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const r=new _e(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=F.get(e.strings);return t===void 0&&F.set(e.strings,t=new U(e)),t}k(e){I(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new S(this.O(w()),this.O(w()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=E(this,e,t,0),o=!P(e)||e!==this._$AH&&e!==y,o&&(this._$AH=e);else{const u=e;let h,l;for(e=r[0],h=0;h<r.length-1;h++)l=E(this,u[s+h],t,h),l===y&&(l=this._$AH[h]),o||=!P(l)||l!==this._$AH[h],l===d?e=d:e!==d&&(e+=(l??"")+r[h+1]),this._$AH[h]=l}o&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ae extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class me extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class ge extends N{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===y)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ye{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const ve={I:S},Ee=z.litHtmlPolyfillSupport;Ee?.(U,S),(z.litHtmlVersions??=[]).push("3.2.1");const Se=(n,e,t)=>{const s=t?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const r=t?.renderBefore??null;s._$litPart$=i=new S(e.insertBefore(w(),r),r,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}}H._$litElement$=!0,H.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:H});const be=globalThis.litElementPolyfillSupport;be?.({LitElement:H});(globalThis.litElementVersions??=[]).push("4.1.1");export{d as E,y as T,ve as Z,xe as b,Q as f,we as i,H as r,M as u,Ue as x};
