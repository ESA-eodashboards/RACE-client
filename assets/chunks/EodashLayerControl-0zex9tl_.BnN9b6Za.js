var co=Object.defineProperty;var Ii=i=>{throw TypeError(i)};var uo=(i,t,e)=>t in i?co(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>uo(i,typeof t!="symbol"?t+"":t,e),ni=(i,t,e)=>t.has(i)||Ii("Cannot "+e);var S=(i,t,e)=>(ni(i,t,"read from private field"),e?e.call(i):t.get(i)),T=(i,t,e)=>t.has(i)?Ii("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),vt=(i,t,e,n)=>(ni(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),R=(i,t,e)=>(ni(i,t,"access private method"),e);import{E as tt,x as m,T as Qt,r as rt,i as $i,b as pt,f as ho,u as po}from"./lit-element.Deg-YTNa.js";import{n as F}from"./when.BR7zwNJC.js";import{c as fo,d as qt}from"./repeat.vdkOBBOK.js";import{e as nn,i as on,t as Ot}from"./directive.CYRYfAMD.js";import{f as go,m as mo}from"./toolcool-range-slider.min.Ch_Z5G3w.js";import{o as we,a as yo}from"./unsafe-html.DNUn9bWx.js";import{c as Ut,g as Ti}from"./commonjsHelpers.BosuxZz1.js";import{s as rn}from"./button.style.B1mkvJ80.js";import{a as vo,s as an,_ as bo}from"./index.H62imwlA.js";import{s as sn}from"./slider.style.BZFItGpC.js";import{g as yi}from"./math.Cq1_w5bv.js";import{s as wo,l as vi,i as ln,q as xo,t as So,o as Eo,p as Co,f as $o}from"./sequential.B9S7xLgD.js";import{L as Vi}from"./Group.B96JHOsB.js";import{s as To,a as _o,i as Bi,j as Ni,k as Ao,g as Do,n as Lo,o as ko,p as Ro}from"./eo-dash.Dfml3Nzb.js";import{h as Po,p as Mo,c as Hi,o as Fi,e as Oo,K as Io,k as Vo}from"./framework.Ci57ZDG0.js";import"./utils.C66ckBg2.js";import"./index.BSpBAx16.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=i=>i!==void 0,cn=(i,t,e)=>t in i?i[t]:i[t]=e;const le={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class Bo{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,e){return ei(t,e).join("")}}function ei(i,t){return dn(i,t,[]).join("")}function dn(i,t,e){if(i.nodeType===le.CDATA_SECTION||i.nodeType===le.TEXT)t?e.push(String(i.nodeValue).replace(/(\r\n|\r|\n)/g,"")):e.push(i.nodeValue);else{var n;for(n=i.firstChild;n;n=n.nextSibling)dn(n,t,e)}return e}function No(i,t,e,n){for(var o=Ho(t);o;o=Fo(o)){var r=o.namespaceURI||null,a=i[r];if(E(a)){var s=a[o.localName];E(s)&&s.call(n,o,e)}}}function Ho(i){let t=i.firstElementChild||i.firstChild;for(;t&&t.nodeType!==le.ELEMENT;)t=t.nextSibling;return t}function Fo(i){let t=i.nextElementSibling||i.nextSibling;for(;t&&t.nodeType!==le.ELEMENT;)t=t.nextSibling;return t}function Y(i,t,e){return Uo(i,t,e)}function Uo(i,t,e){var n=E(e)?e:{},o,r;for(o=0,r=i.length;o<r;++o)n[i[o]]=t;return n}function un(i,t){return function(e,n){var o=i.call(E(t)?t:this,e,n);if(E(o)){var r=n[n.length-1];r.push(o)}}}function j(i,t,e,n,o){return n.push(i),No(t,e,n,o),n.pop()}function g(i,t,e){return function(n,o){let r=i.call(E(e)?e:this,n,o);if(E(r)){var a=o[o.length-1],s=E(t)?t:n.localName;a[s]=r}}}function nt(i,t,e){return function(n,o){var r=i.call(E(e)?e:this,n,o);if(E(r)){var a=o[o.length-1],s=E(t)?t:n.localName,l=cn(a,s,[]);l.push(r)}}}const jo=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function zo(i){return i.replace(jo,"")}function Vt(i){const t=/^\s*(true|1)|(false|0)\s*$/.exec(i);if(t)return E(t[1])||!1}function jt(i){return wt(ei(i,!1))}function wt(i){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(i);if(t)return parseFloat(t[1])}function oi(i){return _e(ei(i,!1))}function _e(i){const t=/^\s*(\d+)\s*$/.exec(i);if(t)return parseInt(t[1],10)}function _(i){return zo(ei(i,!1))}const qo="http://www.w3.org/1999/xlink";function _i(i){return i.getAttributeNS(qo,"href")}function Yo(i,t){return j({},br,i,t)}function hn(i){return[wt(i.getAttribute("minx")),wt(i.getAttribute("miny")),wt(i.getAttribute("maxx")),wt(i.getAttribute("maxy"))]}function Zo(i,t){const e=hn(i),n=[wt(i.getAttribute("resx")),wt(i.getAttribute("resy"))];return{crs:i.getAttribute("CRS")||i.getAttribute("SRS"),extent:e,res:n}}function Xo(i,t){const e=hn(i);if(!(!E(e[0])||!E(e[1])||!E(e[2])||!E(e[3])))return e}function Wo(i,t){const e=parseFloat(i.getAttribute("min")),n=parseFloat(i.getAttribute("max"));return{min:e,max:n}}function Go(i,t){const e=j({},wr,i,t);if(!E(e))return;const n=e.westBoundLongitude,o=e.southBoundLatitude,r=e.eastBoundLongitude,a=e.northBoundLatitude;if(!(!E(n)||!E(o)||!E(r)||!E(a)))return[n,o,r,a]}function Jo(i,t){return j({},pr,i,t)}function Ko(i,t){return j({},fr,i,t)}function Qo(i,t){return j({},gr,i,t)}function tr(i,t){return j({},mr,i,t)}function er(i,t){return j({},yr,i,t)}function ir(i,t){return j([],vr,i,t)}function nr(i,t){const e=Vt(i.getAttribute("queryable"));return j({queryable:E(e)?e:!1},gn,i,t)}function or(i,t){var e=t[t.length-1];const n=j({},gn,i,t);if(!E(n))return;let o=Vt(i.getAttribute("queryable"));E(o)||(o=e.queryable),n.queryable=E(o)?o:!1;let r=_e(i.getAttribute("cascaded"));E(r)||(r=e.cascaded),n.cascaded=r;let a=Vt(i.getAttribute("opaque"));E(a)||(a=e.opaque),n.opaque=E(a)?a:!1;let s=Vt(i.getAttribute("noSubsets"));E(s)||(s=e.noSubsets),n.noSubsets=E(s)?s:!1;let l=wt(i.getAttribute("fixedWidth"));E(l)||(l=e.fixedWidth),n.fixedWidth=l;let c=wt(i.getAttribute("fixedHeight"));E(c)||(c=e.fixedHeight),n.fixedHeight=c;const u=["Style","CRS","AuthorityURL"];for(let p=0,f=u.length;p<f;p++){const y=u[p],w=e[y];if(E(w)){let L=cn(n,y,[]);L=L.concat(w),n[y]=L}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,f=d.length;p<f;p++){const y=d[p],w=n[y];if(!E(w)){const L=e[y];n[y]=L}}return n}function rr(i,t){return{name:i.getAttribute("name"),units:i.getAttribute("units"),unitSymbol:i.getAttribute("unitSymbol"),default:i.getAttribute("default"),multipleValues:Vt(i.getAttribute("multipleValues")),nearestValue:Vt(i.getAttribute("nearestValue")),current:Vt(i.getAttribute("current")),values:_(i)}}function St(i,t){return j({},Tr,i,t)}function ar(i,t){return j({},xr,i,t)}function sr(i,t){return j({},Er,i,t)}function lr(i,t){return j({},Cr,i,t)}function ri(i,t){return j({},Sr,i,t)}function pn(i,t){var e=St(i,t);if(E(e)){const n=[_e(i.getAttribute("width")),_e(i.getAttribute("height"))];return e.size=n,e}}function cr(i,t){var e=St(i,t);if(E(e))return e.name=i.getAttribute("name"),e}function dr(i,t){var e=St(i,t);if(E(e))return e.type=i.getAttribute("type"),e}function ur(i,t){return j({},$r,i,t)}function fn(i,t){return j([],_r,i,t)}const Z=[null,"http://www.opengis.net/wms"],hr=Y(Z,{Service:g(Ko),Capability:g(Jo)}),pr=Y(Z,{Request:g(ar),Exception:g(ir),Layer:g(nr)}),fr=Y(Z,{Name:g(_),Title:g(_),Abstract:g(_),KeywordList:g(fn),OnlineResource:g(_i),ContactInformation:g(Qo),Fees:g(_),AccessConstraints:g(_),LayerLimit:g(oi),MaxWidth:g(oi),MaxHeight:g(oi)}),gr=Y(Z,{ContactPersonPrimary:g(tr),ContactPosition:g(_),ContactAddress:g(er),ContactVoiceTelephone:g(_),ContactFacsimileTelephone:g(_),ContactElectronicMailAddress:g(_)}),mr=Y(Z,{ContactPerson:g(_),ContactOrganization:g(_)}),yr=Y(Z,{AddressType:g(_),Address:g(_),City:g(_),StateOrProvince:g(_),PostCode:g(_),Country:g(_)}),vr=Y(Z,{Format:un(_)}),gn=Y(Z,{Name:g(_),Title:g(_),Abstract:g(_),KeywordList:g(fn),CRS:nt(_),SRS:nt(_),EX_GeographicBoundingBox:g(Go),LatLonBoundingBox:g(Xo),BoundingBox:nt(Zo),Dimension:nt(rr),Attribution:g(Yo),AuthorityURL:nt(cr),Identifier:nt(_),MetadataURL:nt(dr),DataURL:nt(St),FeatureListURL:nt(St),Style:nt(ur),MinScaleDenominator:g(jt),MaxScaleDenominator:g(jt),ScaleHint:g(Wo),Layer:nt(or)}),br=Y(Z,{Title:g(_),OnlineResource:g(_i),LogoURL:g(pn)}),wr=Y(Z,{westBoundLongitude:g(jt),eastBoundLongitude:g(jt),southBoundLatitude:g(jt),northBoundLatitude:g(jt)}),xr=Y(Z,{GetCapabilities:g(ri),GetMap:g(ri),GetFeatureInfo:g(ri)}),Sr=Y(Z,{Format:nt(_),DCPType:nt(sr)}),Er=Y(Z,{HTTP:g(lr)}),Cr=Y(Z,{Get:g(St),Post:g(St)}),$r=Y(Z,{Name:g(_),Title:g(_),Abstract:g(_),LegendURL:nt(pn),StyleSheetURL:g(St),StyleURL:g(St)}),Tr=Y(Z,{Format:g(_),OnlineResource:g(_i)}),_r=Y(Z,{Keyword:un(_)});class Ar{constructor(t,e){!e&&typeof window<"u"&&(e=window.DOMParser),this.version=void 0,this._parser=new Bo(e),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==le.ELEMENT)return this.readFromNode(e);return null}readFromNode(t){return this.version=t.getAttribute("version"),j({version:this.version},hr,t,[])||null}}async function Dr(i){let t=new URL(i),e=t.searchParams;e.set("SERVICE","WMS"),e.set("REQUEST","GetCapabilities");let n=t.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Ar(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function Ai(i){const t=/\b(?:wms|ows)\b/i,e=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(i)?"TileWMS":e.test(i)?"XYZ":!1}function Lr(i){const e=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(i),n=Ai(i);return!!(i&&e&&n)}function mn(i){return i.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function kr(i){try{return JSON.parse(mn(i)),!!i}catch{return!1}}function Rr(i,t){const e=new URL(i).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{e.set(l,s[l])}):e.set(a,s)});const n=i.split("?")[0],o=e.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Ui(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),e.push.apply(e,n)}return e}function mt(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(e),!0).forEach(function(n){Pr(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Ui(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function xe(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xe=function(t){return typeof t}:xe=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xe(i)}function Pr(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function Et(){return Et=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},Et.apply(this,arguments)}function Mr(i,t){if(i==null)return{};var e={},n=Object.keys(i),o,r;for(r=0;r<n.length;r++)o=n[r],!(t.indexOf(o)>=0)&&(e[o]=i[o]);return e}function Or(i,t){if(i==null)return{};var e=Mr(i,t),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(e[n]=i[n])}return e}var Ir="1.15.6";function xt(i){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(i)}var Ct=xt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),he=xt(/Edge/i),ji=xt(/firefox/i),ne=xt(/safari/i)&&!xt(/chrome/i)&&!xt(/android/i),Di=xt(/iP(ad|od|hone)/i),yn=xt(/chrome/i)&&xt(/android/i),vn={capture:!1,passive:!1};function $(i,t,e){i.addEventListener(t,e,!Ct&&vn)}function C(i,t,e){i.removeEventListener(t,e,!Ct&&vn)}function Ae(i,t){if(t){if(t[0]===">"&&(t=t.substring(1)),i)try{if(i.matches)return i.matches(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t)}catch{return!1}return!1}}function bn(i){return i.host&&i!==document&&i.host.nodeType?i.host:i.parentNode}function ht(i,t,e,n){if(i){e=e||document;do{if(t!=null&&(t[0]===">"?i.parentNode===e&&Ae(i,t):Ae(i,t))||n&&i===e)return i;if(i===e)break}while(i=bn(i))}return null}var zi=/\s+/g;function at(i,t,e){if(i&&t)if(i.classList)i.classList[e?"add":"remove"](t);else{var n=(" "+i.className+" ").replace(zi," ").replace(" "+t+" "," ");i.className=(n+(e?" "+t:"")).replace(zi," ")}}function v(i,t,e){var n=i&&i.style;if(n){if(e===void 0)return document.defaultView&&document.defaultView.getComputedStyle?e=document.defaultView.getComputedStyle(i,""):i.currentStyle&&(e=i.currentStyle),t===void 0?e:e[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=e+(typeof e=="string"?"":"px")}}function Yt(i,t){var e="";if(typeof i=="string")e=i;else do{var n=v(i,"transform");n&&n!=="none"&&(e=n+" "+e)}while(!t&&(i=i.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(e)}function wn(i,t,e){if(i){var n=i.getElementsByTagName(t),o=0,r=n.length;if(e)for(;o<r;o++)e(n[o],o);return n}return[]}function gt(){var i=document.scrollingElement;return i||document.documentElement}function H(i,t,e,n,o){if(!(!i.getBoundingClientRect&&i!==window)){var r,a,s,l,c,u,d;if(i!==window&&i.parentNode&&i!==gt()?(r=i.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,c=r.right,u=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||e)&&i!==window&&(o=o||i.parentNode,!Ct))do if(o&&o.getBoundingClientRect&&(v(o,"transform")!=="none"||e&&v(o,"position")!=="static")){var p=o.getBoundingClientRect();a-=p.top+parseInt(v(o,"border-top-width")),s-=p.left+parseInt(v(o,"border-left-width")),l=a+r.height,c=s+r.width;break}while(o=o.parentNode);if(n&&i!==window){var f=Yt(o||i),y=f&&f.a,w=f&&f.d;f&&(a/=w,s/=y,d/=y,u/=w,l=a+u,c=s+d)}return{top:a,left:s,bottom:l,right:c,width:d,height:u}}}function qi(i,t,e){for(var n=Lt(i,!0),o=H(i)[t];n;){var r=H(n)[e],a=void 0;if(a=o>=r,!a)return n;if(n===gt())break;n=Lt(n,!1)}return!1}function Xt(i,t,e,n){for(var o=0,r=0,a=i.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==b.ghost&&(n||a[r]!==b.dragged)&&ht(a[r],e.draggable,i,!1)){if(o===t)return a[r];o++}r++}return null}function Li(i,t){for(var e=i.lastElementChild;e&&(e===b.ghost||v(e,"display")==="none"||t&&!Ae(e,t));)e=e.previousElementSibling;return e||null}function lt(i,t){var e=0;if(!i||!i.parentNode)return-1;for(;i=i.previousElementSibling;)i.nodeName.toUpperCase()!=="TEMPLATE"&&i!==b.clone&&(!t||Ae(i,t))&&e++;return e}function Yi(i){var t=0,e=0,n=gt();if(i)do{var o=Yt(i),r=o.a,a=o.d;t+=i.scrollLeft*r,e+=i.scrollTop*a}while(i!==n&&(i=i.parentNode));return[t,e]}function Vr(i,t){for(var e in i)if(i.hasOwnProperty(e)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===i[e][n])return Number(e)}return-1}function Lt(i,t){if(!i||!i.getBoundingClientRect)return gt();var e=i,n=!1;do if(e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight){var o=v(e);if(e.clientWidth<e.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||e.clientHeight<e.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!e.getBoundingClientRect||e===document.body)return gt();if(n||t)return e;n=!0}}while(e=e.parentNode);return gt()}function Br(i,t){if(i&&t)for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function ai(i,t){return Math.round(i.top)===Math.round(t.top)&&Math.round(i.left)===Math.round(t.left)&&Math.round(i.height)===Math.round(t.height)&&Math.round(i.width)===Math.round(t.width)}var oe;function xn(i,t){return function(){if(!oe){var e=arguments,n=this;e.length===1?i.call(n,e[0]):i.apply(n,e),oe=setTimeout(function(){oe=void 0},t)}}}function Nr(){clearTimeout(oe),oe=void 0}function Sn(i,t,e){i.scrollLeft+=t,i.scrollTop+=e}function En(i){var t=window.Polymer,e=window.jQuery||window.Zepto;return t&&t.dom?t.dom(i).cloneNode(!0):e?e(i).clone(!0)[0]:i.cloneNode(!0)}function Cn(i,t,e){var n={};return Array.from(i.children).forEach(function(o){var r,a,s,l;if(!(!ht(o,t.draggable,i,!1)||o.animated||o===e)){var c=H(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,c.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,c.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,c.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var ot="Sortable"+new Date().getTime();function Hr(){var i=[],t;return{captureAnimationState:function(){if(i=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(v(o,"display")==="none"||o===b.ghost)){i.push({target:o,rect:H(o)});var r=mt({},i[i.length-1].rect);if(o.thisAnimationDuration){var a=Yt(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){i.push(n)},removeAnimationState:function(n){i.splice(Vr(i,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var r=!1,a=0;i.forEach(function(s){var l=0,c=s.target,u=c.fromRect,d=H(c),p=c.prevFromRect,f=c.prevToRect,y=s.rect,w=Yt(c,!0);w&&(d.top-=w.f,d.left-=w.e),c.toRect=d,c.thisAnimationDuration&&ai(p,d)&&!ai(u,d)&&(y.top-d.top)/(y.left-d.left)===(u.top-d.top)/(u.left-d.left)&&(l=Ur(y,p,f,o.options)),ai(d,u)||(c.prevFromRect=u,c.prevToRect=d,l||(l=o.options.animation),o.animate(c,y,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),i=[]},animate:function(n,o,r,a){if(a){v(n,"transition",""),v(n,"transform","");var s=Yt(this.el),l=s&&s.a,c=s&&s.d,u=(o.left-r.left)/(l||1),d=(o.top-r.top)/(c||1);n.animatingX=!!u,n.animatingY=!!d,v(n,"transform","translate3d("+u+"px,"+d+"px,0)"),this.forRepaintDummy=Fr(n),v(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),v(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){v(n,"transition",""),v(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function Fr(i){return i.offsetWidth}function Ur(i,t,e,n){return Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))/Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))*n.animation}var Bt=[],si={initializeByDefault:!0},pe={mount:function(t){for(var e in si)si.hasOwnProperty(e)&&!(e in t)&&(t[e]=si[e]);Bt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Bt.push(t)},pluginEvent:function(t,e,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global";Bt.forEach(function(a){e[a.pluginName]&&(e[a.pluginName][r]&&e[a.pluginName][r](mt({sortable:e},n)),e.options[a.pluginName]&&e[a.pluginName][t]&&e[a.pluginName][t](mt({sortable:e},n)))})},initializePlugins:function(t,e,n,o){Bt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var c=new s(t,e,t.options);c.sortable=t,c.options=t.options,t[l]=c,Et(n,c.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,e){var n={};return Bt.forEach(function(o){typeof o.eventProperties=="function"&&Et(n,o.eventProperties.call(e[o.pluginName],t))}),n},modifyOption:function(t,e,n){var o;return Bt.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[e]=="function"&&(o=r.optionListeners[e].call(t[r.pluginName],n))}),o}};function jr(i){var t=i.sortable,e=i.rootEl,n=i.name,o=i.targetEl,r=i.cloneEl,a=i.toEl,s=i.fromEl,l=i.oldIndex,c=i.newIndex,u=i.oldDraggableIndex,d=i.newDraggableIndex,p=i.originalEvent,f=i.putSortable,y=i.extraEventProperties;if(t=t||e&&e[ot],!!t){var w,L=t.options,B="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!Ct&&!he?w=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(n,!0,!0)),w.to=a||e,w.from=s||e,w.item=o||e,w.clone=r,w.oldIndex=l,w.newIndex=c,w.oldDraggableIndex=u,w.newDraggableIndex=d,w.originalEvent=p,w.pullMode=f?f.lastPutMode:void 0;var D=mt(mt({},y),pe.getEventProperties(n,t));for(var W in D)w[W]=D[W];e&&e.dispatchEvent(w),L[B]&&L[B].call(t,w)}}var zr=["evt"],it=function(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=Or(n,zr);pe.pluginEvent.bind(b)(t,e,mt({dragEl:h,parentEl:I,ghostEl:x,rootEl:k,nextEl:It,lastDownEl:Se,cloneEl:P,cloneHidden:At,dragStarted:te,putSortable:z,activeSortable:b.active,originalEvent:o,oldIndex:zt,oldDraggableIndex:re,newIndex:st,newDraggableIndex:_t,hideGhostForTarget:An,unhideGhostForTarget:Dn,cloneNowHidden:function(){At=!0},cloneNowShown:function(){At=!1},dispatchSortableEvent:function(s){Q({sortable:e,name:s,originalEvent:o})}},r))};function Q(i){jr(mt({putSortable:z,cloneEl:P,targetEl:h,rootEl:k,oldIndex:zt,oldDraggableIndex:re,newIndex:st,newDraggableIndex:_t},i))}var h,I,x,k,It,Se,P,At,zt,st,re,_t,ge,z,Ht=!1,De=!1,Le=[],Pt,ut,li,ci,Zi,Xi,te,Nt,ae,se=!1,me=!1,Ee,K,di=[],bi=!1,ke=[],ii=typeof document<"u",ye=Di,Wi=he||Ct?"cssFloat":"float",qr=ii&&!yn&&!Di&&"draggable"in document.createElement("div"),$n=function(){if(ii){if(Ct)return!1;var i=document.createElement("x");return i.style.cssText="pointer-events:auto",i.style.pointerEvents==="auto"}}(),Tn=function(t,e){var n=v(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=Xt(t,0,e),a=Xt(t,1,e),s=r&&v(r),l=a&&v(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+H(r).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+H(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=o&&n[Wi]==="none"||a&&n[Wi]==="none"&&c+u>o)?"vertical":"horizontal"},Yr=function(t,e,n){var o=n?t.left:t.top,r=n?t.right:t.bottom,a=n?t.width:t.height,s=n?e.left:e.top,l=n?e.right:e.bottom,c=n?e.width:e.height;return o===s||r===l||o+a/2===s+c/2},Zr=function(t,e){var n;return Le.some(function(o){var r=o[ot].options.emptyInsertThreshold;if(!(!r||Li(o))){var a=H(o),s=t>=a.left-r&&t<=a.right+r,l=e>=a.top-r&&e<=a.bottom+r;if(s&&l)return n=o}}),n},_n=function(t){function e(r,a){return function(s,l,c,u){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return e(r(s,l,c,u),a)(s,l,c,u);var p=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===p||r.join&&r.indexOf(p)>-1}}var n={},o=t.group;(!o||xe(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},An=function(){!$n&&x&&v(x,"display","none")},Dn=function(){!$n&&x&&v(x,"display","")};ii&&!yn&&document.addEventListener("click",function(i){if(De)return i.preventDefault(),i.stopPropagation&&i.stopPropagation(),i.stopImmediatePropagation&&i.stopImmediatePropagation(),De=!1,!1},!0);var Mt=function(t){if(h){t=t.touches?t.touches[0]:t;var e=Zr(t.clientX,t.clientY);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[ot]._onDragOver(n)}}},Xr=function(t){h&&h.parentNode[ot]._isOutsideThisEl(t.target)};function b(i,t){if(!(i&&i.nodeType&&i.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));this.el=i,this.options=t=Et({},t),i[ot]=this;var e={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(i.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Tn(i,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:b.supportPointer!==!1&&"PointerEvent"in window&&(!ne||Di),emptyInsertThreshold:5};pe.initializePlugins(this,i,e);for(var n in e)!(n in t)&&(t[n]=e[n]);_n(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:qr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?$(i,"pointerdown",this._onTapStart):($(i,"mousedown",this._onTapStart),$(i,"touchstart",this._onTapStart)),this.nativeDraggable&&($(i,"dragover",this),$(i,"dragenter",this)),Le.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Et(this,Hr())}b.prototype={constructor:b,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Nt=null)},_getDirection:function(t,e){return typeof this.options.direction=="function"?this.options.direction.call(this,t,e,h):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,r=o.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,u=o.filter;if(ia(n),!h&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||o.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&ne&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ht(l,o.draggable,n,!1),!(l&&l.animated)&&Se!==l)){if(zt=lt(l),re=lt(l,o.draggable),typeof u=="function"){if(u.call(this,t,l,this)){Q({sortable:e,rootEl:c,name:"filter",targetEl:l,toEl:n,fromEl:n}),it("filter",e,{evt:t}),r&&t.preventDefault();return}}else if(u&&(u=u.split(",").some(function(d){if(d=ht(c,d.trim(),n,!1),d)return Q({sortable:e,rootEl:d,name:"filter",targetEl:l,fromEl:n,toEl:n}),it("filter",e,{evt:t}),!0}),u)){r&&t.preventDefault();return}o.handle&&!ht(c,o.handle,n,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,e,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!h&&n.parentNode===r){var c=H(n);if(k=r,h=n,I=h.parentNode,It=h.nextSibling,Se=n,ge=a.group,b.dragged=h,Pt={target:h,clientX:(e||t).clientX,clientY:(e||t).clientY},Zi=Pt.clientX-c.left,Xi=Pt.clientY-c.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,h.style["will-change"]="all",l=function(){if(it("delayEnded",o,{evt:t}),b.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!ji&&o.nativeDraggable&&(h.draggable=!0),o._triggerDragStart(t,e),Q({sortable:o,name:"choose",originalEvent:t}),at(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(u){wn(h,u.trim(),ui)}),$(s,"dragover",Mt),$(s,"mousemove",Mt),$(s,"touchmove",Mt),a.supportPointer?($(s,"pointerup",o._onDrop),!this.nativeDraggable&&$(s,"pointercancel",o._onDrop)):($(s,"mouseup",o._onDrop),$(s,"touchend",o._onDrop),$(s,"touchcancel",o._onDrop)),ji&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),it("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||e)&&(!this.nativeDraggable||!(he||Ct))){if(b.eventCanceled){this._onDrop();return}a.supportPointer?($(s,"pointerup",o._disableDelayedDrag),$(s,"pointercancel",o._disableDelayedDrag)):($(s,"mouseup",o._disableDelayedDrag),$(s,"touchend",o._disableDelayedDrag),$(s,"touchcancel",o._disableDelayedDrag)),$(s,"mousemove",o._delayedDragTouchMoveHandler),$(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&$(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&ui(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._disableDelayedDrag),C(t,"touchend",this._disableDelayedDrag),C(t,"touchcancel",this._disableDelayedDrag),C(t,"pointerup",this._disableDelayedDrag),C(t,"pointercancel",this._disableDelayedDrag),C(t,"mousemove",this._delayedDragTouchMoveHandler),C(t,"touchmove",this._delayedDragTouchMoveHandler),C(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||t.pointerType=="touch"&&t,!this.nativeDraggable||e?this.options.supportPointer?$(document,"pointermove",this._onTouchMove):e?$(document,"touchmove",this._onTouchMove):$(document,"mousemove",this._onTouchMove):($(h,"dragend",this),$(k,"dragstart",this._onDragStart));try{document.selection?Ce(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,e){if(Ht=!1,k&&h){it("dragStarted",this,{evt:e}),this.nativeDraggable&&$(document,"dragover",Xr);var n=this.options;!t&&at(h,n.dragClass,!1),at(h,n.ghostClass,!0),b.active=this,t&&this._appendGhost(),Q({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(ut){this._lastX=ut.clientX,this._lastY=ut.clientY,An();for(var t=document.elementFromPoint(ut.clientX,ut.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ut.clientX,ut.clientY),t!==e);)e=t;if(h.parentNode[ot]._isOutsideThisEl(t),e)do{if(e[ot]){var n=void 0;if(n=e[ot]._onDragOver({clientX:ut.clientX,clientY:ut.clientY,target:t,rootEl:e}),n&&!this.options.dragoverBubble)break}t=e}while(e=bn(e));Dn()}},_onTouchMove:function(t){if(Pt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,r=t.touches?t.touches[0]:t,a=x&&Yt(x,!0),s=x&&a&&a.a,l=x&&a&&a.d,c=ye&&K&&Yi(K),u=(r.clientX-Pt.clientX+o.x)/(s||1)+(c?c[0]-di[0]:0)/(s||1),d=(r.clientY-Pt.clientY+o.y)/(l||1)+(c?c[1]-di[1]:0)/(l||1);if(!b.active&&!Ht){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(x){a?(a.e+=u-(li||0),a.f+=d-(ci||0)):a={a:1,b:0,c:0,d:1,e:u,f:d};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");v(x,"webkitTransform",p),v(x,"mozTransform",p),v(x,"msTransform",p),v(x,"transform",p),li=u,ci=d,ut=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!x){var t=this.options.fallbackOnBody?document.body:k,e=H(h,!0,ye,!0,t),n=this.options;if(ye){for(K=t;v(K,"position")==="static"&&v(K,"transform")==="none"&&K!==document;)K=K.parentNode;K!==document.body&&K!==document.documentElement?(K===document&&(K=gt()),e.top+=K.scrollTop,e.left+=K.scrollLeft):K=gt(),di=Yi(K)}x=h.cloneNode(!0),at(x,n.ghostClass,!1),at(x,n.fallbackClass,!0),at(x,n.dragClass,!0),v(x,"transition",""),v(x,"transform",""),v(x,"box-sizing","border-box"),v(x,"margin",0),v(x,"top",e.top),v(x,"left",e.left),v(x,"width",e.width),v(x,"height",e.height),v(x,"opacity","0.8"),v(x,"position",ye?"absolute":"fixed"),v(x,"zIndex","100000"),v(x,"pointerEvents","none"),b.ghost=x,t.appendChild(x),v(x,"transform-origin",Zi/parseInt(x.style.width)*100+"% "+Xi/parseInt(x.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,r=n.options;if(it("dragStart",this,{evt:t}),b.eventCanceled){this._onDrop();return}it("setupClone",this),b.eventCanceled||(P=En(h),P.removeAttribute("id"),P.draggable=!1,P.style["will-change"]="",this._hideClone(),at(P,this.options.chosenClass,!1),b.clone=P),n.cloneId=Ce(function(){it("clone",n),!b.eventCanceled&&(n.options.removeCloneOnHide||k.insertBefore(P,h),n._hideClone(),Q({sortable:n,name:"clone"}))}),!e&&at(h,r.dragClass,!0),e?(De=!0,n._loopId=setInterval(n._emulateDragOver,50)):(C(document,"mouseup",n._onDrop),C(document,"touchend",n._onDrop),C(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,h)),$(document,"drop",n),v(h,"transform","translateZ(0)")),Ht=!0,n._dragStartId=Ce(n._dragStarted.bind(n,e,t)),$(document,"selectstart",n),te=!0,window.getSelection().removeAllRanges(),ne&&v(document.body,"user-select","none")},_onDragOver:function(t){var e=this.el,n=t.target,o,r,a,s=this.options,l=s.group,c=b.active,u=ge===l,d=s.sort,p=z||c,f,y=this,w=!1;if(bi)return;function L(Kt,so){it(Kt,y,mt({evt:t,isOwner:u,axis:f?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:d,fromSortable:p,target:n,completed:D,onMove:function(Oi,lo){return ve(k,e,h,o,Oi,H(Oi),t,lo)},changed:W},so))}function B(){L("dragOverAnimationCapture"),y.captureAnimationState(),y!==p&&p.captureAnimationState()}function D(Kt){return L("dragOverCompleted",{insertion:Kt}),Kt&&(u?c._hideClone():c._showClone(y),y!==p&&(at(h,z?z.options.ghostClass:c.options.ghostClass,!1),at(h,s.ghostClass,!0)),z!==y&&y!==b.active?z=y:y===b.active&&z&&(z=null),p===y&&(y._ignoreWhileAnimating=n),y.animateAll(function(){L("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===h&&!h.animated||n===e&&!n.animated)&&(Nt=null),!s.dragoverBubble&&!t.rootEl&&n!==document&&(h.parentNode[ot]._isOutsideThisEl(t.target),!Kt&&Mt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function W(){st=lt(h),_t=lt(h,s.draggable),Q({sortable:y,name:"change",toEl:e,newIndex:st,newDraggableIndex:_t,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=ht(n,s.draggable,e,!0),L("dragOver"),b.eventCanceled)return w;if(h.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||y._ignoreWhileAnimating===n)return D(!1);if(De=!1,c&&!s.disabled&&(u?d||(a=I!==k):z===this||(this.lastPutMode=ge.checkPull(this,c,h,t))&&l.checkPut(this,c,h,t))){if(f=this._getDirection(t,n)==="vertical",o=H(h),L("dragOverValid"),b.eventCanceled)return w;if(a)return I=k,B(),this._hideClone(),L("revert"),b.eventCanceled||(It?k.insertBefore(h,It):k.appendChild(h)),D(!0);var M=Li(e,s.draggable);if(!M||Kr(t,f,this)&&!M.animated){if(M===h)return D(!1);if(M&&e===t.target&&(n=M),n&&(r=H(n)),ve(k,e,h,o,n,r,t,!!n)!==!1)return B(),M&&M.nextSibling?e.insertBefore(h,M.nextSibling):e.appendChild(h),I=e,W(),D(!0)}else if(M&&Jr(t,f,this)){var et=Xt(e,0,s,!0);if(et===h)return D(!1);if(n=et,r=H(n),ve(k,e,h,o,n,r,t,!1)!==!1)return B(),e.insertBefore(h,et),I=e,W(),D(!0)}else if(n.parentNode===e){r=H(n);var A=0,G,dt=h.parentNode!==e,J=!Yr(h.animated&&h.toRect||o,n.animated&&n.toRect||r,f),Wt=f?"top":"left",$t=qi(n,"top","top")||qi(h,"top","top"),Gt=$t?$t.scrollTop:void 0;Nt!==n&&(G=r[Wt],se=!1,me=!J&&s.invertSwap||dt),A=Qr(t,n,r,f,J?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,me,Nt===n);var yt;if(A!==0){var Rt=lt(h);do Rt-=A,yt=I.children[Rt];while(yt&&(v(yt,"display")==="none"||yt===x))}if(A===0||yt===n)return D(!1);Nt=n,ae=A;var Jt=n.nextElementSibling,Tt=!1;Tt=A===1;var fe=ve(k,e,h,o,n,r,t,Tt);if(fe!==!1)return(fe===1||fe===-1)&&(Tt=fe===1),bi=!0,setTimeout(Gr,30),B(),Tt&&!Jt?e.appendChild(h):n.parentNode.insertBefore(h,Tt?Jt:n),$t&&Sn($t,0,Gt-$t.scrollTop),I=h.parentNode,G!==void 0&&!me&&(Ee=Math.abs(G-H(n)[Wt])),W(),D(!0)}if(e.contains(h))return D(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){C(document,"mousemove",this._onTouchMove),C(document,"touchmove",this._onTouchMove),C(document,"pointermove",this._onTouchMove),C(document,"dragover",Mt),C(document,"mousemove",Mt),C(document,"touchmove",Mt)},_offUpEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._onDrop),C(t,"touchend",this._onDrop),C(t,"pointerup",this._onDrop),C(t,"pointercancel",this._onDrop),C(t,"touchcancel",this._onDrop),C(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;if(st=lt(h),_t=lt(h,n.draggable),it("drop",this,{evt:t}),I=h&&h.parentNode,st=lt(h),_t=lt(h,n.draggable),b.eventCanceled){this._nulling();return}Ht=!1,me=!1,se=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),wi(this.cloneId),wi(this._dragStartId),this.nativeDraggable&&(C(document,"drop",this),C(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ne&&v(document.body,"user-select",""),v(h,"transform",""),t&&(te&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),x&&x.parentNode&&x.parentNode.removeChild(x),(k===I||z&&z.lastPutMode!=="clone")&&P&&P.parentNode&&P.parentNode.removeChild(P),h&&(this.nativeDraggable&&C(h,"dragend",this),ui(h),h.style["will-change"]="",te&&!Ht&&at(h,z?z.options.ghostClass:this.options.ghostClass,!1),at(h,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:I,newIndex:null,newDraggableIndex:null,originalEvent:t}),k!==I?(st>=0&&(Q({rootEl:I,name:"add",toEl:I,fromEl:k,originalEvent:t}),Q({sortable:this,name:"remove",toEl:I,originalEvent:t}),Q({rootEl:I,name:"sort",toEl:I,fromEl:k,originalEvent:t}),Q({sortable:this,name:"sort",toEl:I,originalEvent:t})),z&&z.save()):st!==zt&&st>=0&&(Q({sortable:this,name:"update",toEl:I,originalEvent:t}),Q({sortable:this,name:"sort",toEl:I,originalEvent:t})),b.active&&((st==null||st===-1)&&(st=zt,_t=re),Q({sortable:this,name:"end",toEl:I,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){it("nulling",this),k=h=I=x=It=P=Se=At=Pt=ut=te=st=_t=zt=re=Nt=ae=z=ge=b.dragged=b.ghost=b.clone=b.active=null,ke.forEach(function(t){t.checked=!0}),ke.length=li=ci=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":h&&(this._onDragOver(t),Wr(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],e,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)e=n[o],ht(e,a.draggable,this.el,!1)&&t.push(e.getAttribute(a.dataIdAttr)||ea(e));return t},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];ht(s,this.options.draggable,o,!1)&&(n[r]=s)},this),e&&this.captureAnimationState(),t.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return ht(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(e===void 0)return n[t];var o=pe.modifyOption(this,t,e);typeof o<"u"?n[t]=o:n[t]=e,t==="group"&&_n(n)},destroy:function(){it("destroy",this);var t=this.el;t[ot]=null,C(t,"mousedown",this._onTapStart),C(t,"touchstart",this._onTapStart),C(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(C(t,"dragover",this),C(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Le.splice(Le.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!At){if(it("hideClone",this),b.eventCanceled)return;v(P,"display","none"),this.options.removeCloneOnHide&&P.parentNode&&P.parentNode.removeChild(P),At=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(At){if(it("showClone",this),b.eventCanceled)return;h.parentNode==k&&!this.options.group.revertClone?k.insertBefore(P,h):It?k.insertBefore(P,It):k.appendChild(P),this.options.group.revertClone&&this.animate(h,P),v(P,"display",""),At=!1}}};function Wr(i){i.dataTransfer&&(i.dataTransfer.dropEffect="move"),i.cancelable&&i.preventDefault()}function ve(i,t,e,n,o,r,a,s){var l,c=i[ot],u=c.options.onMove,d;return window.CustomEvent&&!Ct&&!he?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=i,l.dragged=e,l.draggedRect=n,l.related=o||t,l.relatedRect=r||H(t),l.willInsertAfter=s,l.originalEvent=a,i.dispatchEvent(l),u&&(d=u.call(c,l,a)),d}function ui(i){i.draggable=!1}function Gr(){bi=!1}function Jr(i,t,e){var n=H(Xt(e.el,0,e.options,!0)),o=Cn(e.el,e.options,x),r=10;return t?i.clientX<o.left-r||i.clientY<n.top&&i.clientX<n.right:i.clientY<o.top-r||i.clientY<n.bottom&&i.clientX<n.left}function Kr(i,t,e){var n=H(Li(e.el,e.options.draggable)),o=Cn(e.el,e.options,x),r=10;return t?i.clientX>o.right+r||i.clientY>n.bottom&&i.clientX>n.left:i.clientY>o.bottom+r||i.clientX>n.right&&i.clientY>n.top}function Qr(i,t,e,n,o,r,a,s){var l=n?i.clientY:i.clientX,c=n?e.height:e.width,u=n?e.top:e.left,d=n?e.bottom:e.right,p=!1;if(!a){if(s&&Ee<c*o){if(!se&&(ae===1?l>u+c*r/2:l<d-c*r/2)&&(se=!0),se)p=!0;else if(ae===1?l<u+Ee:l>d-Ee)return-ae}else if(l>u+c*(1-o)/2&&l<d-c*(1-o)/2)return ta(t)}return p=p||a,p&&(l<u+c*r/2||l>d-c*r/2)?l>u+c/2?1:-1:0}function ta(i){return lt(h)<lt(i)?1:-1}function ea(i){for(var t=i.tagName+i.className+i.src+i.href+i.textContent,e=t.length,n=0;e--;)n+=t.charCodeAt(e);return n.toString(36)}function ia(i){ke.length=0;for(var t=i.getElementsByTagName("input"),e=t.length;e--;){var n=t[e];n.checked&&ke.push(n)}}function Ce(i){return setTimeout(i,0)}function wi(i){return clearTimeout(i)}ii&&$(document,"touchmove",function(i){(b.active||Ht)&&i.cancelable&&i.preventDefault()});b.utils={on:$,off:C,css:v,find:wn,is:function(t,e){return!!ht(t,e,t,!1)},extend:Br,throttle:xn,closest:ht,toggleClass:at,clone:En,index:lt,nextTick:Ce,cancelNextTick:wi,detectDirection:Tn,getChild:Xt,expando:ot};b.get=function(i){return i[ot]};b.mount=function(){for(var i=arguments.length,t=new Array(i),e=0;e<i;e++)t[e]=arguments[e];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(b.utils=mt(mt({},b.utils),n.utils)),pe.mount(n)})};b.create=function(i,t){return new b(i,t)};b.version=Ir;var N=[],ee,xi,Si=!1,hi,pi,Re,ie;function na(){function i(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return i.prototype={dragStarted:function(e){var n=e.originalEvent;this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):this.options.supportPointer?$(document,"pointermove",this._handleFallbackAutoScroll):n.touches?$(document,"touchmove",this._handleFallbackAutoScroll):$(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var n=e.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):(C(document,"pointermove",this._handleFallbackAutoScroll),C(document,"touchmove",this._handleFallbackAutoScroll),C(document,"mousemove",this._handleFallbackAutoScroll)),Gi(),$e(),Nr()},nulling:function(){Re=xi=ee=Si=ie=hi=pi=null,N.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,n){var o=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,s=document.elementFromPoint(r,a);if(Re=e,n||this.options.forceAutoScrollFallback||he||Ct||ne){fi(e,this.options,s,n);var l=Lt(s,!0);Si&&(!ie||r!==hi||a!==pi)&&(ie&&Gi(),ie=setInterval(function(){var c=Lt(document.elementFromPoint(r,a),!0);c!==l&&(l=c,$e()),fi(e,o.options,c,n)},10),hi=r,pi=a)}else{if(!this.options.bubbleScroll||Lt(s,!0)===gt()){$e();return}fi(e,this.options,Lt(s,!1),!1)}}},Et(i,{pluginName:"scroll",initializeByDefault:!0})}function $e(){N.forEach(function(i){clearInterval(i.pid)}),N=[]}function Gi(){clearInterval(ie)}var fi=xn(function(i,t,e,n){if(t.scroll){var o=(i.touches?i.touches[0]:i).clientX,r=(i.touches?i.touches[0]:i).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=gt(),c=!1,u;xi!==e&&(xi=e,$e(),ee=t.scroll,u=t.scrollFn,ee===!0&&(ee=Lt(e,!0)));var d=0,p=ee;do{var f=p,y=H(f),w=y.top,L=y.bottom,B=y.left,D=y.right,W=y.width,M=y.height,et=void 0,A=void 0,G=f.scrollWidth,dt=f.scrollHeight,J=v(f),Wt=f.scrollLeft,$t=f.scrollTop;f===l?(et=W<G&&(J.overflowX==="auto"||J.overflowX==="scroll"||J.overflowX==="visible"),A=M<dt&&(J.overflowY==="auto"||J.overflowY==="scroll"||J.overflowY==="visible")):(et=W<G&&(J.overflowX==="auto"||J.overflowX==="scroll"),A=M<dt&&(J.overflowY==="auto"||J.overflowY==="scroll"));var Gt=et&&(Math.abs(D-o)<=a&&Wt+W<G)-(Math.abs(B-o)<=a&&!!Wt),yt=A&&(Math.abs(L-r)<=a&&$t+M<dt)-(Math.abs(w-r)<=a&&!!$t);if(!N[d])for(var Rt=0;Rt<=d;Rt++)N[Rt]||(N[Rt]={});(N[d].vx!=Gt||N[d].vy!=yt||N[d].el!==f)&&(N[d].el=f,N[d].vx=Gt,N[d].vy=yt,clearInterval(N[d].pid),(Gt!=0||yt!=0)&&(c=!0,N[d].pid=setInterval((function(){n&&this.layer===0&&b.active._onTouchMove(Re);var Jt=N[this.layer].vy?N[this.layer].vy*s:0,Tt=N[this.layer].vx?N[this.layer].vx*s:0;typeof u=="function"&&u.call(b.dragged.parentNode[ot],Tt,Jt,i,Re,N[this.layer].el)!=="continue"||Sn(N[this.layer].el,Tt,Jt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&p!==l&&(p=Lt(p,!1)));Si=c}},30),Ln=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var c=n||r;s();var u=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function ki(){}ki.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=Xt(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:Ln};Et(ki,{pluginName:"revertOnSpill"});function Ri(){}Ri.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable,o=n||this.sortable;o.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),o.animateAll()},drop:Ln};Et(Ri,{pluginName:"removeOnSpill"});b.mount(new na);b.mount(Ri,ki);const oa=i=>{const t=i.item;let e=Array.prototype.slice.call(t.parentNode.childNodes);return e=e.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),e},ra=(i,t,e,n,o,r)=>{const s=i.item.parentNode;for(const w of e)s.appendChild(w);if(i.oldIndex==i.newIndex)return;const l=n.getArray(),c=i.item.querySelector("eox-layercontrol-layer").layer.get(o),u=l.find(w=>w.get(o)===c),d=r.dataset.layer,p=l.find(w=>w.get(o)==d);let f,y;for(f=0;f<l.length;f++)if(l[f]==u){n.removeAt(f);break}for(y=0;y<l.length;y++)if(l[y]===p){f>y?n.insertAt(y,u):n.insertAt(y+1,u);break}t.requestUpdate()};function aa(i,t,e,n){let o=[],r=null;i._sortable=b.create(i,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>o=oa(a),onMove:a=>{r=a.related},onEnd:a=>ra(a,n,o,t,e,r)})}function sa(i,t,e,n){const o=i.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(e)||(a.set(e,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function Pi(i,t,e){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(c=>c.get(a)===s)];const l=r.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>o(c.getLayers().getArray(),a,s)),n};return o(i,t,e),n}function la(i,t,e){if(!i||!t)return!1;if(!kn(i,e))return!0;const n=i.get("minZoom"),o=i.get("maxZoom"),r=t.getView().getZoom();return r>n&&r<o}function kn(i,t){const e=i.get("minZoom"),n=i.get("maxZoom");return!!(t&&(e!==-1/0||n!==1/0))}function ca(i,t){var o,r,a;return!i||!t?void 0:i.getLayers?"group":((a=(o=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(i.getSource?(r=i.getSource())==null?void 0:r.ol_uid:void 0))?"draw":i.declutter_!==void 0?"vector":"raster"}const da=(i,t,e)=>{let n=t;return e.layer.getSource().getTileUrlFunction()&&(n||(n=e.layer.getSource().getTileUrlFunction()),e.layer.getSource().setTileUrlFunction((...o)=>Rr(n(...o),i)),e.layer.getSource().setKey(new Date)),n};function ua(i,t,e){const n="updateStyleVariables"in t,o="setStyle"in t,r=n?t.style_:e.style;let a=r==null?void 0:r.variables;if(a){const s=Mi(i);if(r.variables={...a,...s},n)t.updateStyleVariables(s);else if(o){const l=ha(r);t.setStyle(l)}}}const Mi=i=>{const t={};for(const e in i)if(typeof i[e]=="object"&&i[e]!==null){const n=Mi(i[e]);for(const o in n)t[o]=n==null?void 0:n[o]}else t[e]=i==null?void 0:i[e];return t};function ha(i){let t=i;if("variables"in i){let e=JSON.stringify(i);const{variables:n}=i;for(const o in n)typeof n[o]=="number"?e=e.replaceAll(`["var","${o}"]`,n[o]):e=e.replaceAll(`["var","${o}"]`,`"${n[o]}"`);t=JSON.parse(e)}return t}const pa=(i,t)=>{if(!i)return;const e=Mi(t);let n,o;return Array.isArray(i)?o=structuredClone(i):o=[structuredClone(i)],n=o.filter(r=>{if(!("boundTo"in r))return!0;const a=r.boundTo.key,s=r.boundTo.value;return!(a in e)||e[a]==s}),n.length||(n=o),n.map(r=>{var a;return delete r.boundTo,!("domainProperties"in r)||"domain"in r?r:(a=Object.keys(r))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=r[l].map(c=>e[c]):s[l]=r[l],s),{})})};function Rn(i,t){var n;let e={};for(const o in i){const r=i[o].type;if(r&&r!=="object")e[o]=r==="number"?Number(t[o]):t[o];else if(typeof i[o]=="object"&&((n=i[o])!=null&&n.properties)){const a=Rn(i[o].properties,t);Object.keys(a).length>0&&(e[o]=a)}}return e}function fa(i,t){var r,a,s,l,c;if(!t)return null;let e={},n="updateStyleVariables"in i?(r=i.style_)==null?void 0:r.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&n)e=n;else if((l=(s=i.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const u=new URL(i.getSource().getTileUrlFunction()([0,0,0]));e=Object.fromEntries(u.searchParams.entries())}else return null;const o=Rn(((c=t.schema)==null?void 0:c.properties)||t.schema,e);return Object.keys(o).length?o:null}const ga=(i,t)=>i==null?void 0:i.filter(e=>["remove","sort"].filter(n=>t!=null&&t.get("layerControlDisable")?n!=="sort":!0).includes(e)),ma=(i,t)=>i==null?void 0:i.filter(e=>{let n=!0;return["remove","sort"].includes(e)&&(n=!1),e==="info"&&(n=t.get("description")),e==="config"&&(n=t.get("layerConfig")),e==="datetime"&&(n=t.get("layerDatetime")),e==="legend"&&(n=t.get("layerLegend")),n}),ya=(i,t)=>m`
  <button slot="${i}-icon" class="icon">${t?i:tt}</button>
`,va=i=>m`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:t}=i;t==null||t.set("layerControlOptional",!0),t==null||t.setVisible(!1),i.dispatchEvent(new CustomEvent("changed",{detail:t,bubbles:!0}))}}
  >
    ${i.unstyled?"x":tt}
  </button>
`,ba=i=>m`
  <span class="button sort-icon icon drag-handle">
    ${i?"═":tt}
  </span>
`,Pn=i=>{var e;const t=["layerControlHide","layerControlOptional"];return(e=i==null?void 0:i.getArray())==null?void 0:e.filter(n=>t.every(o=>!n.get(o)))};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mn=nn(class extends on{constructor(i){if(super(i),i.type!==Ot.PROPERTY&&i.type!==Ot.ATTRIBUTE&&i.type!==Ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!go(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===Qt||t===tt)return t;const e=i.element,n=i.name;if(i.type===Ot.PROPERTY){if(t===e[n])return Qt}else if(i.type===Ot.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(n))return Qt}else if(i.type===Ot.ATTRIBUTE&&e.getAttribute(n)===t+"")return Qt;return mo(i),t}});var On="Expected a function",Ji=NaN,wa="[object Symbol]",xa=/^\s+|\s+$/g,Sa=/^[-+]0x[0-9a-f]+$/i,Ea=/^0b[01]+$/i,Ca=/^0o[0-7]+$/i,$a=parseInt,Ta=typeof Ut=="object"&&Ut&&Ut.Object===Object&&Ut,_a=typeof self=="object"&&self&&self.Object===Object&&self,Aa=Ta||_a||Function("return this")(),Da=Object.prototype,La=Da.toString,ka=Math.max,Ra=Math.min,gi=function(){return Aa.Date.now()};function Pa(i,t,e){var n,o,r,a,s,l,c=0,u=!1,d=!1,p=!0;if(typeof i!="function")throw new TypeError(On);t=Ki(t)||0,Pe(e)&&(u=!!e.leading,d="maxWait"in e,r=d?ka(Ki(e.maxWait)||0,t):r,p="trailing"in e?!!e.trailing:p);function f(A){var G=n,dt=o;return n=o=void 0,c=A,a=i.apply(dt,G),a}function y(A){return c=A,s=setTimeout(B,t),u?f(A):a}function w(A){var G=A-l,dt=A-c,J=t-G;return d?Ra(J,r-dt):J}function L(A){var G=A-l,dt=A-c;return l===void 0||G>=t||G<0||d&&dt>=r}function B(){var A=gi();if(L(A))return D(A);s=setTimeout(B,w(A))}function D(A){return s=void 0,p&&n?f(A):(n=o=void 0,a)}function W(){s!==void 0&&clearTimeout(s),c=0,n=l=o=s=void 0}function M(){return s===void 0?a:D(gi())}function et(){var A=gi(),G=L(A);if(n=arguments,o=this,l=A,G){if(s===void 0)return y(l);if(d)return s=setTimeout(B,t),f(l)}return s===void 0&&(s=setTimeout(B,t)),a}return et.cancel=W,et.flush=M,et}function Ma(i,t,e){var n=!0,o=!0;if(typeof i!="function")throw new TypeError(On);return Pe(e)&&(n="leading"in e?!!e.leading:n,o="trailing"in e?!!e.trailing:o),Pa(i,t,{leading:n,maxWait:t,trailing:o})}function Pe(i){var t=typeof i;return!!i&&(t=="object"||t=="function")}function Oa(i){return!!i&&typeof i=="object"}function Ia(i){return typeof i=="symbol"||Oa(i)&&La.call(i)==wa}function Ki(i){if(typeof i=="number")return i;if(Ia(i))return Ji;if(Pe(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Pe(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=i.replace(xa,"");var e=Ea.test(i);return e||Ca.test(i)?$a(i.slice(2),e?2:8):Sa.test(i)?Ji:+i}var Va=Ma;const Qi=Ti(Va);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=i=>i??tt;var ct,Me,Oe;class In extends rt{constructor(){super();T(this,ct,[]);T(this,Me,$i`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);T(this,Oe,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return S(this,ct)?S(this,ct).length>1?S(this,ct):S(this,ct)[0]:null}set layerLegend(e){var n;Array.isArray(e)?vt(this,ct,e.map((o,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...o}})):vt(this,ct,[{id:(((n=this.layer)==null?void 0:n.get("id"))??"")+0,...e}])}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var e;vt(this,ct,(e=S(this,ct))==null?void 0:e.map(n=>(this.offsetWidth!==n.width&&(n.width=this.offsetWidth),{...n}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),m`
      <style>
        ${S(this,Me)}
        ${!this.unstyled&&S(this,Oe)}
      </style>
      ${F(this.layerLegend,()=>m`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${S(this,ct).map((e,n,o)=>m`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${be(e.scaleType)}"
                  markType="${be(e.markType)}"
                  titleText="${be(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${be(e.tickFormat)}"
                  .ticks=${e.ticks??5}
                  .tickValues=${e.tickValues}
                  .marginLeft=${0}
                  .marginRight=${0}
                >
                </color-legend>
                ${n!==o.length-1?m`<div class="separator"></div>`:tt}
              `)}
          </div>
        `)}
    `}}ct=new WeakMap,Me=new WeakMap,Oe=new WeakMap,O(In,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",In);var bt,Zt,ce,de,Ei,Ie,Ve;class Vn extends rt{constructor(){super();T(this,de);T(this,bt,{});T(this,Zt,null);T(this,ce);T(this,Ie,$i`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
    }
  `);T(this,Ve,"");this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Qi(R(this,de,Ei),1e3)}updated(e){if(e.has("layerConfig")){const n=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Qi(R(this,de,Ei),n),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){vt(this,Zt,fa(this.layer,this.layerConfig)),Object.keys(S(this,bt)).length!==0&&vt(this,Zt,S(this,bt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const e={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return m`
      <style>
        ${S(this,Ie)}
        ${!this.unstyled&&S(this,Ve)}
      </style>
      ${F(this.layerConfig,()=>m`
          ${F(this.layerConfig.legend,()=>m`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${pa(this.layerConfig.legend,S(this,bt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${S(this,Zt)}
            .options=${e}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}bt=new WeakMap,Zt=new WeakMap,ce=new WeakMap,de=new WeakSet,Ei=function(e){vt(this,bt,e.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?ua(S(this,bt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):vt(this,ce,da(S(this,bt),S(this,ce),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:e.detail,layer:this.layer}})),this.requestUpdate()},Ie=new WeakMap,Ve=new WeakMap,O(Vn,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",Vn);var Be,Nn,Ne,He;class Bn extends rt{constructor(){super();T(this,Be);T(this,Ne,"");T(this,He,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),m`
      <style>
        ${S(this,Ne)}
        ${!this.unstyled&&S(this,He)}
      </style>
      ${F(this.layerDatetime,()=>m`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${void 0}
            .layer=${void 0}
            .navigation=${this.layerDatetime.navigation??!1}
            .slider=${this.layerDatetime.slider??!1}
            .play=${this.layerDatetime.play??!1}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${void 0}
            current-step=${this.layerDatetime.currentStep}
            .displayFormat=${this.layerDatetime.displayFormat}
            @stepchange=${R(this,Be,Nn)}
          ></eox-timecontrol>
        `)}
    `}}Be=new WeakSet,Nn=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:e.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=e.detail.currentStep,this.requestUpdate()},Ne=new WeakMap,He=new WeakMap,O(Bn,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Bn);var ue,Fe,Ue;class Hn extends rt{constructor(){super();T(this,ue,e=>(this.selectedTab===e||this.toolsAsList)&&"highlighted");T(this,Fe,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
  `);T(this,Ue,`
    .listed label {
      display: flex;
      justify-content: start;
      align-items: center;
      background: var(--background-color) !important;
    }
    .listed label:not(:first-of-type) {
      margin-top: 10px;
    }
    .listed label span {
      text-transform: capitalize;
      font-weight: 300;
    }
    .tabbed, .listed {
      font-size: small;
    }
    .tabbed label.highlighted {
      border: 1px solid #0041701a;
      border-radius: 2px;
      border-bottom: none;
      pointer-events: none;
    }
    nav div label,
    nav div span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    figure {
      background: var(--background-color);
      border: 1px solid #0041701a;
      border-radius: 2px;
      padding: var(--padding-vertical) var(--padding);
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.tabs,n=this.actions,o=n.length+e.length>1;return m`
      <style>
        ${S(this,Fe)}
        ${!this.unstyled&&S(this,Ue)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${F(o,()=>m`
            <nav>
              ${F(!this.toolsAsList,()=>m`
                  <div>
                    <!-- Labels for tabs -->
                    ${we(e,(r,a)=>m`
                        <label
                          class=${S(this,ue).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${we(n,r=>m`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure>
          <!-- Content for each tab -->
          ${we(e,(r,a)=>m`
              ${F(this.toolsAsList,()=>m`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${S(this,ue).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}ue=new WeakMap,Fe=new WeakMap,Ue=new WeakMap,O(Hn,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Hn);var je,ze;class Fn extends rt{constructor(){super();O(this,"_removeButton",()=>va(this));O(this,"_sortButton",()=>ba(this.unstyled));O(this,"_button",e=>ya(e,this.unstyled));O(this,"_getDefaultTools",()=>{var e;return m`
      <div slot="info-content">
        ${yo(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <!-- Input for opacity -->
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value=${Mn((e=this.layer)==null?void 0:e.getOpacity())}
          @input=${n=>this.layer.setOpacity(parseFloat(n.target.value))}
        />
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${F(this.layer.get("layerConfig"),()=>m`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${F(this.layer.get("layerDatetime"),()=>m`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${F(this.layer.get("layerLegend"),()=>m`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton()}</div>
      <div slot="sort-icon">${this._sortButton()}</div>
    `});T(this,je,"");T(this,ze,`
    ${rn}  
    ${vo}
    ${an}
    ${sn}
    .drag-handle {
      cursor: n-resize;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    eox-layercontrol-layer details summary::before {
      content: "";
    }
    details.tools[open] {
      /*border-top: 1px solid #0041703a;*/
    }
    .single-action {
      position: relative;
    }
    details.tools summary .icon {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 0;
      top: -24px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tools-items button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tools-items button.icon {
      opacity: .7;
    }
    eox-layercontrol-tools-items.tools-list button.icon {
      cursor: auto;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tools-items button.icon:hover {
      opacity: 1;
    }
    eox-layercontrol-tools-items.tools-list button.icon:hover {
      opacity: .7;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
      margin-right: var(--padding);
    }
    eox-layercontrol-tools-items button.icon,
    eox-layercontrol-tools-items .button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tools-items.tools-list button.icon,
    eox-layercontrol-tools-items.tools-list .button.icon {
      margin-left: -6px;
    }
    eox-layercontrol-tools-items button.icon::before,
    eox-layercontrol-tools-items .button.icon::before {
      width: 16px;
      height: 16px;
    }
    details.tools summary .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    details.tools summary .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    details.tools summary .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    details.tools summary .datetime-icon,
    button.icon[slot=datetime-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eclock-outline%3C/title%3E%3Cpath d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /%3E%3C/svg%3E");
    }
    details.tools summary .legend-icon,
    button.icon[slot=legend-icon]::before {
      content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Emap-legend%3C%2Ftitle%3E%3Cpath%20d%3D%22M9%2C3L3.36%2C4.9C3.15%2C4.97%203%2C5.15%203%2C5.38V20.5A0.5%2C0.5%200%200%2C0%203.5%2C21L3.66%2C20.97L9%2C18.9L15%2C21L20.64%2C19.1C20.85%2C19.03%2021%2C18.85%2021%2C18.62V3.5A0.5%2C0.5%200%200%2C0%2020.5%2C3L20.34%2C3.03L15%2C5.1L9%2C3M8%2C5.45V17.15L5%2C18.31V6.46L8%2C5.45M10%2C5.47L14%2C6.87V18.53L10%2C17.13V5.47M19%2C5.7V17.54L16%2C18.55V6.86L19%2C5.7M7.46%2C6.3L5.57%2C6.97V9.12L7.46%2C8.45V6.3M7.46%2C9.05L5.57%2C9.72V11.87L7.46%2C11.2V9.05M7.46%2C11.8L5.57%2C12.47V14.62L7.46%2C13.95V11.8M7.46%2C14.55L5.57%2C15.22V17.37L7.46%2C16.7V14.55Z%22%20%2F%3E%3C%2Fsvg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] .button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l;const e=ga(this.tools,this.layer),n=ma(this.tools,this.layer),o=this[`_${e==null?void 0:e[0]}Button`]?this[`_${e==null?void 0:e[0]}Button`]():tt,r=((l=this.tools)==null?void 0:l.length)===1?`${this.tools[0]}-icon`:"",a=e==null?void 0:e.length,s=n==null?void 0:n.length;return m`
      <style>
        ${S(this,je)}
        ${!this.unstyled&&S(this,ze)}
      </style>
      ${F(a+s>0,()=>m`
          ${F(a===1&&s===0,()=>m`
              <div class="single-action-container">
                <div class="single-action">${o}</div>
              </div>
            `,()=>m`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||tt}
              >
                <summary>
                  <button class="icon ${r}">Tools</button>
                </summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${e}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${we(n,c=>this._button(c))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools()}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}je=new WeakMap,ze=new WeakMap,O(Fn,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",Fn);const Ba=i=>{const t=()=>{const e=la(i.layer,i.map,i.showLayerZoomState);let n=!1;!e&&i.currLayerVisibilityBasedOnZoom?(i.currLayerVisibilityBasedOnZoom=!1,n=!0):e&&!i.currLayerVisibilityBasedOnZoom&&(i.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(i.requestUpdate(),i.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};kn(i.layer,i.showLayerZoomState)&&(t(),i.map.getView().on("change:resolution",()=>t()))},Na=(i,t)=>{const e=t.layer;e.setVisible(i.target.checked),i.target.checked&&e.get("layerControlExclusive")&&t.closest(".layers > ul").querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;o.layer!==e&&((r=o.layer)!=null&&r.get("layerControlExclusive"))&&(o.layer.setVisible(!1),o.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e})),t.requestUpdate()};var ft,Ft,jn,qe,Ye;class Un extends rt{constructor(){super();T(this,ft);O(this,"currLayerVisibilityBasedOnZoom",!0);T(this,qe,"");T(this,Ye,`
    ${an}
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      background: #d2e2ee;
      opacity: 0.3;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
    }
    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .title {
      display: var(--layer-title-visibility);
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
      display: var(--layer-type-visibility);
    }
    [data-type] .title.color-swatch::before {
      background: var(--layer-color);
      border-radius: 3px;
      content: "" !important;
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Ba(this)}render(){var l;const e=this.layer.getVisible(),n=e?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=R(this,ft,Ft).call(this,"layerControlDisable")?"disabled":"",a=R(this,ft,Ft).call(this,"layerControlExclusive")?"radio":"checkbox",s=((l=this.tools)==null?void 0:l.length)>0;return m`
      <style>
        ${S(this,qe)}
        ${!this.unstyled&&S(this,Ye)}
      </style>
      ${F(this.layer,()=>m`
          <!-- Render the layer -->
          <div class="layer ${n} ${o}">
            <label class="drag-handle ${r}">
              <!-- Input element for layer visibility -->
              <input
                type=${a}
                .checked=${Mn(e)}
                @click=${R(this,ft,jn)}
              />

              <!-- Layer title -->
              <span
                class="title ${R(this,ft,Ft).call(this,"color")?"color-swatch":""}"
                style="--layer-color: ${R(this,ft,Ft).call(this,"color")}"
              >
                ${R(this,ft,Ft).call(this,this.titleProperty)}
              </span>
              ${F(s,()=>m`<span class="tools-placeholder"></span>`)}
            </label>
          </div>

          <!-- Render layer tools -->
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ft=new WeakSet,Ft=function(e){var n;return(n=this.layer)==null?void 0:n.get(e)},jn=function(e){Na(e,this)},qe=new WeakMap,Ye=new WeakMap,O(Un,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer",Un);var Ze,Xe;class zn extends rt{constructor(){super();T(this,Ze,"");T(this,Xe,`
    details summary {
      cursor: pointer;
      display: var(--layer-summary-visibility);
    }
    details summary { list-style-type: none; } /* Firefox */
    details summary::-webkit-details-marker { display: none; } /* Chrome */
    details summary::marker { display: none; }
    details summary::before {
      display: var(--layer-visibility);
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
      font-size: 13px;
      width: 24px;
      height: 24px;
      margin: 4px 0;
      transform-origin: center;
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
    details[data-children-length="0"] summary::before {
      display: none;
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const e=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=Pn(this.group.getLayers()))==null?void 0:r.length;return m`
      <style>
        ${S(this,Ze)}
        ${!this.unstyled&&S(this,Xe)}
      </style>
      ${F(this.group,()=>m`
          <!-- Render the details element with the layer control -->
          <details
            open=${e||tt}
            data-children-length=${n}
          >
            <summary>
              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}Ze=new WeakMap,Xe=new WeakMap,O(zn,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",zn);const Ha=i=>{const{layers:t,idProperty:e,titleProperty:n,renderRoot:o}=i,r=bo(()=>{i.requestUpdate(),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=o.querySelector("ul");sa(t,e,n,i),aa(s,t,e,i)}};var We,Ge;class qn extends rt{constructor(){super();T(this,We,"");T(this,Ge,`
    ul {
      padding: 0;
      margin: 0;
    }
    ul ul {
      padding-left: var(--list-padding);
    }
    li:not(li li) {
      padding-left: var(--padding);
    }
    li {
      list-style: none;
      border-bottom: 1px solid #0041703a;
      border: var(--layer-visibility);
    }
    li:last-child {
      border: none;
    }
    li.sortable-chosen {
      background: #eeea;
    }
    li.sortable-drag {
      opacity: 0;
    }
    li.sortable-ghost {
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}firstUpdated(){Ha(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.layers?Pn(this.layers).reverse():[];return m`
      <style>
        ${S(this,We)}
        ${!this.unstyled&&S(this,Ge)}
      </style>
      <ul>
        ${F(this.layers,()=>m`
            ${fo(e,n=>n,n=>m`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${ca(n,this.map)}"
                >
                  ${n.getLayers?m`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${n}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:m`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${n}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}We=new WeakMap,Ge=new WeakMap,O(qn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",qn);const Fa=i=>{const t=i.querySelector("select[name=optional]"),e=t?t.value:null,n=Pi(i.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(i.idProperty)||o.ol_uid)===e);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),i.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),i.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),i.requestUpdate()};var Je,Zn;class Yn extends rt{constructor(){super();T(this,Je);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=Pi(this.layers.getArray(),"layerControlOptional",!0);return m`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${e.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return m` <option value="${o}">${r||a}</option> `})}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${R(this,Je,Zn)}">add</button>
    `}}Je=new WeakSet,Zn=function(){Fa(this)},O(Yn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Yn);const Ua=(i,t)=>{t.jsonInput=i.target.value,t.requestUpdate()},tn=i=>{const t=JSON.parse(`{"data":${mn(i.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(e=>{i.eoxMap.addOrUpdateLayer(e)}):i.eoxMap.addOrUpdateLayer(t.data),i.jsonInput=null,i.requestUpdate()},ja=(i,t)=>{t.urlInput=i.target.value,t.requestUpdate()};async function za(i){const t=i.urlInput;if(i.wmsCapabilities=null,i.searchLoad=!0,i.requestUpdate(),!t)return!1;if(Ai(t)==="XYZ")return{Name:t};try{const e=await Dr(t);i.wmsCapabilities=e}catch{}finally{i.searchLoad=!1,i.requestUpdate()}return!1}const qa=(i,t)=>{const{Name:e}=i,n=Ai(t.urlInput)||"XYZ",o={type:"Tile",properties:{id:e,title:e},source:{type:n,url:t.urlInput,params:{LAYERS:e}}};t.jsonInput=JSON.stringify(o)},Ya=(i,t)=>{t.open=i||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var q,Wn,Gn,Ci,Jn,Kn,Te,Ke,Qe;class Xn extends rt{constructor(){super();T(this,q);O(this,"urlInput",null);O(this,"jsonInput",null);O(this,"open",null);O(this,"searchLoad",!1);O(this,"wmsCapabilities",null);T(this,Ke,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `);T(this,Qe,`
    .eox-add {
      background: #f0f2f5;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-layer-col, .eox-add-layer-tab {
      display: flex;
      width: 100%;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .eox-add-layer-main .open {
      position: relative;
    }
    button.icon.add-icon {
      flex-grow: 1;
    }
    .eox-add-layer-tab li {
      border: 0 !important;
      font-size: smaller;
      padding: 0.2rem 0.7rem;
      background: #f0f2f5;
      border-radius: 4px 4px 0px 0px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
    }
    .eox-add-layer-tab li.active {
      background: #204270;
      color: white;
      font-weight: 700;
    }
    .relative {
      position: relative
    }
    .eox-add-layer-col.justify-end {
      justify-content: end;
    }
    .eox-add ul {
      max-height: 120px;
      overflow: scroll;
    }
    .eox-add ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.2rem;
    }
    button.icon {
      justify-content: end;
      transition: opacity .2s;
      opacity: .7;
    }
    button.icon:hover {
      opacity: 1;
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    button.icon.add-icon::before {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .json-add-layer {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='white' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
    }
    .search-icon::after, .json-add-layer::before {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
      color: white;
    }
    .search-icon, .json-add-layer {
      padding: 4px 6px;
      height: 28px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    .json-add-layer {
      position: absolute;
      bottom: 16px;
      right: 14px;
      border-radius: 4px;
      height: 24px;
      padding: 4px;
    }
    input.add-url, textarea.add-layer-input {
      box-sizing: border-box !important;
      width: 100%;
      height: 28px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
    textarea.add-layer-input {
      height: 90px;
      resize: none;
      border-radius: 4px;
    }
    .divider {
      margin: 1rem 0px;
      height: 1px;
      border-top: 1.5px solid #00417059;
      text-align: center;
      position: relative;
    }
    .divider span {
      position: relative;
      top: -.6em;
      padding: 0px 0.5rem;
      background: #f0f2f5;
      color: #00417059;
      font-weight: bold;
      display: inline-block;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.open?"open":"close",n=this.open==="url",o=this.open==="json",r=!Lr(this.urlInput)||this.searchLoad?!0:tt;return m`
      <style>
        ${S(this,Ke)}
        ${!this.unstyled&&S(this,Qe)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${e}">
            <li
              @click=${()=>R(this,q,Te).call(this,"url")}
              class="${n?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>R(this,q,Te).call(this,"json")}
              class="${o?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>R(this,q,Te).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":""}
          </button>
        </div>
        <div class="eox-add ${e}">
          ${n?m`
              <!-- Input field for URL -->
              <div class="eox-add-layer-col">
                <input 
                  type="text" 
                  class="add-url" 
                  placeholder="Add URL (WMS/XYZ)" 
                  .value="${this.urlInput}" 
                  @input=${R(this,q,Wn)}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${r} 
                  @click=${R(this,q,Gn)}
                >
                  ${this.unstyled?"Search":""}
                </button>
              </div>

              <!-- Display layers for WMS capabilities -->
              ${this.wmsCapabilities?m`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(a=>{const s=a.Name;return m`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>R(this,q,Ci).call(this,a)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:tt}
            `:m`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${R(this,q,Kn)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${kr(this.jsonInput)?tt:!0}
                  @click=${R(this,q,Jn)}
                >
                  ${this.unstyled?"Add JSON":""}
                </button>
              `}
        </div>
      </div>
    `}}q=new WeakSet,Wn=function(e){ja(e,this)},Gn=async function(){const e=await za(this);e&&R(this,q,Ci).call(this,e)},Ci=function(e){qa(e,this),tn(this)},Jn=function(){tn(this)},Kn=function(e){Ua(e,this)},Te=function(e){Ya(e,this)},Ke=new WeakMap,Qe=new WeakMap,O(Xn,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Xn);const Za=(i,t)=>{if(t.requestUpdate(),i.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const e=t.renderRoot.querySelector("eox-layercontrol-optional-list");e==null||e.requestUpdate()}},en=i=>{const t=yi(i.for);return t&&t.map!==i.map&&(i.map=t.map),t};var Dt,kt,to,eo,io,ti;class Qn extends rt{constructor(){super();T(this,kt);T(this,Dt);T(this,ti,`
    :host, :root {
      font-family: Roboto, sans-serif;
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 48px;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: flex;
      --layer-visibility: block;
      --layer-tools-button-visibility: flex;

      display: block;
      padding: var(--padding) 0;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    select {
      background-color: var(--background-color);
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1}firstUpdated(){this.eoxMap=en(this)}updated(e){e.has("for")&&(this.eoxMap=en(this))}get eoxMap(){return S(this,Dt)}set eoxMap(e){const n=S(this,Dt);vt(this,Dt,e),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const e=(o=this.map)==null?void 0:o.getLayers().getArray(),n=e&&((r=Pi(e,"layerControlOptional",!0))==null?void 0:r.length)>0;return m`
      <style>
        ${!this.unstyled&&S(this,ti)}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${F(this.addExternalLayers&&((a=S(this,Dt))==null?void 0:a.addOrUpdateLayer),()=>m`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${S(this,Dt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${F(this.map,()=>m`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            @changed=${R(this,kt,to)}
            @datetime:updated=${R(this,kt,eo)}
            @layerConfig:change=${R(this,kt,io)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${F(n,()=>m`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Dt=new WeakMap,kt=new WeakSet,to=function(e){Za(e,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:e.detail}))},eo=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail}))},io=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:e.detail}))},ti=new WeakMap,O(Qn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol",Qn);const Xa=`
:host {
  display: block;
}
`,Wa=`
:host, :root {
  --navigation-button-display: inline-flex;
}

* {
  font-family: Roboto, sans-serif;
}

${rn}
${sn}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

button.icon-text.play:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplay%3C/title%3E%3Cpath d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon-text.pause:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epause%3C/title%3E%3Cpath d='M14,19H18V5H14M6,19H10V5H6V19Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

button.icon.previous:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-left-circle%3C/title%3E%3Cpath fill='%23004170' d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z' /%3E%3C/svg%3E");
}

button.icon.next:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right-circle%3C/title%3E%3Cpath fill='%23004170' d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z' /%3E%3C/svg%3E");
}
`;class Ga extends rt{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(e=>{const o=qt(e).year();let r=t.find(a=>a.year===o);r||(r={year:o,dates:[]},t.push(r)),r.dates.push(e)}),t}preprocessDates(){const t=[];this.steps.forEach(e=>{const o=qt(e).year();let r=t.find(a=>a.year===o);r||(r={year:o,ratio:0,dates:[]},t.push(r)),r.dates.push({date:e,isYearMarker:r.dates.length===0})});for(let e of t)e.ratio=e.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((n,o)=>{const r=this.steps.indexOf(n.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(n.dates[n.dates.length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,a-r-2),l=[];return l.push(pt`
            <rect
              key=${o}
              x=${r+2/2} // Add half the spacing to the start position
              y="0"
              width=${s}
              height="6"
              fill="#7596A2"
            ></rect>
        `),s>=30&&l.push(pt`
                <text
                  key=${`label-${o}`}
                  x=${r+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${n.year}
                </text>
            `),l})}calculateIndividualTicks(){return this._years.flatMap((t,e)=>{const n=this.steps.length,o=Math.max(1,Math.floor(n/this.width));return t.dates.filter((r,a)=>a%o===0).map((r,a)=>{const l=this.steps.indexOf(r.date)/(this.steps.length-1)*this.width,c=[];return c.push(pt`
                <line
                  key=${e}-${a}
                  x1=${l}
                  y1="0"
                  x2=${l}
                  y2=${r.isYearMarker?12:6}
                  stroke=${r.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),r.isYearMarker&&this.density>.03&&this.density<.5&&e%2==0&&c.push(pt`
                  <text
                    key=${`label-${e}`}
                    x=${l+16}
                    y="30"
                    fill="#555"
                    font-size="14"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),c})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const n=this._years.reduce((r,a)=>{const s=Math.floor(a.year/10)*10;return r[s]||(r[s]=[]),r[s].push(...a.dates),r},{});return Object.keys(n).flatMap((r,a)=>{const s=this.steps.indexOf(n[r][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(n[r][n[r].length-1].date)/(this.steps.length-1)*this.width,c=Math.max(0,l-s-2),u=[];return u.push(pt`
            <rect
              key=${`decade-${a}`}
              x=${s+2/2}
              y="0"
              width=${c}
              height="6"
              fill="#555"
            ></rect>
        `),c>=30&&u.push(pt`
                <text
                  key=${`decade-label-${a}`}
                  x=${s+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${r}
                </text>
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,e=this.width/(t-1);return Array.from({length:this.numLines},(n,o)=>o*e)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates();const t=[];let e=null;return this.lines.forEach((n,o)=>{const a=qt(this.steps[o]).year();(o===0||a!==e)&&t.push({label:a,position:n}),e=a}),t}isYearLine(t){return this._yearMarks.some(n=>Math.abs(n.position-t)<1)}render(){return m`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",Ga);var no={exports:{}};(function(i,t){(function(e,n){i.exports=n()})(Ut,function(){return function(e,n,o){n.prototype.dayOfYear=function(r){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return r==null?a:this.add(r-a,"day")}}})})(no);var Ja=no.exports;const Ka=Ti(Ja);var oo={exports:{}};(function(i,t){(function(e,n){i.exports=n()})(Ut,function(){var e="day";return function(n,o,r){var a=function(c){return c.add(4-c.isoWeekday(),e)},s=o.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),e);var u,d,p,f,y=a(this),w=(u=this.isoWeekYear(),d=this.$u,p=(d?r.utc:r)().year(u).startOf("year"),f=4-p.isoWeekday(),p.isoWeekday()>4&&(f+=7),p.add(f,e));return y.diff(w,"week")+1},s.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=s.startOf;s.startOf=function(c,u){var d=this.$utils(),p=!!d.u(u)||u;return d.p(c)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,u)}}})})(oo);var Qa=oo.exports;const ts=Ti(Qa);qt.extend(Ka);qt.extend(ts);class es extends rt{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const e=this.controlValues.findIndex(n=>n===t);e>-1?this._newStepIndex=e:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=yi(this.for);if(t){const e=t;this.eoxMap=e}}get eoxMap(){return this._eoxMap}set eoxMap(t){const e=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",e)}_updateStep(t=1){var e;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((e=this._controlSource)==null||e.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const e=[];e.push(...t);let n=e.filter(o=>o instanceof Vi);for(;n.length;){const o=[];for(let r=0,a=n.length;r<a;r++){const s=n[r].getLayers().getArray();e.push(...s);const l=s.filter(c=>c instanceof Vi);o.push(...l)}n=o}return e}render(){if(this.layer&&this.for){const e=yi(this.for).map;e.once("loadend",()=>{if(!this._originalParams){const o=this.getFlatLayersArray(e.getLayers().getArray()).find(r=>r.get("id")===this.layer);this._controlSource=o.getSource(),this._originalParams=this._controlSource.getParams()}})}return m`
      <style>
        ${Xa}
        ${!this.unstyled&&Wa}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation?m`
                <button
                  part="previous"
                  class="icon previous"
                  @click="${()=>this.previous()}"
                >
                  <
                </button>
              `:tt}
          <span part="current">
            ${this.displayFormat?qt(this.controlValues[this._newStepIndex]).format(this.displayFormat):this.controlValues[this._newStepIndex]}
          </span>
          ${this.navigation?m`
                <button
                  part="next"
                  class="icon next"
                  @click="${()=>this.next()}"
                >
                  >
                </button>
              `:tt}
          ${this.play?m`
                <button
                  part="play"
                  class="small icon-text ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this._isAnimationPlaying?"Pause":"Play"}
                </button>
              `:tt}
        </div>
        <div>
          ${this.slider?m`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    style="display: inline-block;"
                    @change="${t=>this._updateStep(this.controlValues.findIndex(e=>e===t.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}
        </div>
      </main>
    `}}customElements.define("eox-timecontrol",es);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns={attribute:!0,type:String,converter:po,reflect:!1,hasChanged:ho},os=(i=ns,t,e)=>{const{kind:n,metadata:o}=e;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(e.name,i),n==="accessor"){const{name:a}=e;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,i)},init(s){return s!==void 0&&this.P(a,void 0,i),s}}}if(n==="setter"){const{name:a}=e;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,i)}}throw Error("Unsupported decorator location: "+n)};function X(i){return(t,e)=>typeof e=="object"?os(i,t,e):((n,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,r):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function as(i,t){return(e,n,o)=>{const r=a=>{var s;return((s=a.renderRoot)==null?void 0:s.querySelector(i))??null};return rs(e,n,{get(){return r(this)}})}}class ss{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:n}=this.cle;this.colorScale=t?wo(t).domain(e):vi().range(n).domain(e).interpolate(ln)}setDiscreteColorScale(){this.colorScale=xo().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=So().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Eo().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=nn(class extends on{constructor(i){var t;if(super(i),i.type!==Ot.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var n,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((n=this.nt)!=null&&n.has(r))&&this.st.add(r);return this.render(t)}const e=i.element.classList;for(const r of this.st)r in t||(e.remove(r),this.st.delete(r));for(const r in t){const a=!!t[r];a===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(a?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return Qt}});class ls{constructor(t){this.cle=t}render(){const t=this.cle.titleText?m`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},n={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return m`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${mi(e)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${mi(n)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:n}=this.cle,o={"legend-item":!0,line:t==="line",circle:t==="circle"};return m`${n.map(r=>m`<li
          class=${mi(o)}
          style="--color:${e(r)}"
        >
          ${r}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:n,marginRight:o,tickSize:r,width:a,range:s}=this.cle,l=this.cle.marginBottom+r,c=this.cle.height+r,u=((d=t.interpolator)==null?void 0:d.call(t))||Co(ln,s);return pt`<image
      x=${n}
      y=${e}
      width=${a-o-n}
      height=${c-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:n,colorScale:o,xScale:r}=this.cle,a=this.cle.height+t,s=this.cle.marginBottom+t,l=o.range(),c=d=>o.invertExtent(d).map(r)[0]||n,u=d=>{let[p,f]=o.invertExtent(d).map(r);return p=p||0,f=f||r.range()[1],f-p};return pt`${l.map(d=>pt`<rect x=${c(d)} y=${e} width=${u(d)} height=${a-e-s} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:n,tickFormatter:o,tickValues:r,xScale:a,marginTop:s}=this.cle,l=this.cle.height+e,c=this.cle.marginBottom+e,u=r!=null&&r.length?r:a.ticks.apply(a,[t,n]),d=Math.max(e,0)+3,p=()=>u.map(f=>pt`<g class="tick" transform='translate(${a(f)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${s+c-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${o(f)}</text>
      </g>`);return pt`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${p()}</g>`}getColorRamp(t,e=256){const n=document.createElement("canvas");n.setAttribute("height","1"),n.setAttribute("width",`${e}`);const o=n.getContext("2d");for(let r=0;r<e;r++)o.fillStyle=t(r/(e-1)),o.fillRect(r,0,1,1);return n}}const cs=325,ds=32,us=6,hs=12,ps=16,fs=12,ro=5,gs=6,ao=".1f",ms=[0,1],ys=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],vs="Color Legend Element",bs="circle",ws="continuous",xs=["domain","range","interpolator","scaleType"],Ss=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class Es{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:n,marginRight:o}=this.cle;switch(t){case"continuous":this.xScale=vi().domain(this.cle.domain).range([e,n-o]);break;case"discrete":case"threshold":this.xScale=vi().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,n-o]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,n;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[o,r]=this.xScale.domain();this.cle.tickValues=[o,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),r]}typeof this.cle.tickFormatter!="function"&&((n=this.cle.tickFormat)!=null&&n.length?this.cle.tickFormatter=$o(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||ro,this.cle.tickFormat||ao))}}const Cs=$i`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var U=function(i,t,e,n){var o=arguments.length,r=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var s=i.length-1;s>=0;s--)(a=i[s])&&(r=(o<3?a(r):o>3?a(t,e,r):a(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};let V=class extends rt{constructor(){super(...arguments),this.titleText=vs,this.width=cs,this.height=ds,this.marginTop=us,this.marginRight=hs,this.marginBottom=ps,this.marginLeft=fs,this.scaleType=ws,this.domain=ms,this.range=ys,this.markType=bs,this.ticks=ro,this.tickFormat=ao,this.tickSize=gs,this.colorScaleSetter=new ss(this),this.axisTickSetter=new Es(this),this.renderer=new ls(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){xs.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),Ss.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};V.styles=[Cs];U([X({type:String})],V.prototype,"titleText",void 0);U([X({type:Number})],V.prototype,"width",void 0);U([X({type:Number})],V.prototype,"height",void 0);U([X({type:Number})],V.prototype,"marginTop",void 0);U([X({type:Number})],V.prototype,"marginRight",void 0);U([X({type:Number})],V.prototype,"marginBottom",void 0);U([X({type:Number})],V.prototype,"marginLeft",void 0);U([X({type:String})],V.prototype,"scaleType",void 0);U([X({type:Array})],V.prototype,"domain",void 0);U([X({type:Array})],V.prototype,"range",void 0);U([X({type:String})],V.prototype,"markType",void 0);U([X({type:Number})],V.prototype,"ticks",void 0);U([X({type:String})],V.prototype,"tickFormat",void 0);U([X({type:Number})],V.prototype,"tickSize",void 0);U([X({type:Array})],V.prototype,"tickValues",void 0);U([as("svg")],V.prototype,"svg",void 0);U([X({attribute:!1})],V.prototype,"interpolator",null);U([X({attribute:!1})],V.prototype,"tickFormatter",null);V=U([is("color-legend")],V);const $s={class:"d-flex flex-column fill-height overflow-auto"},Ts=["for"],_s=`
input[type="range"] {
  background:transparent !important;
}
`,Xs={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},cssVars:{type:Object}},setup(i){const t=i,e={tools:t.tools,style:t.cssVars},{selectedCompareStac:n,selectedStac:o}=To(_o()),r=Po(()=>t.map==="second"?Bi.value!==null&&n.value!==null:Ni.value!==null&&o.value!==null),a=t.map==="second"?Ao:Do,s=t.map==="second"?Bi:Ni,l=Mo(null),c=async f=>{var W;const{layer:y,datetime:w}=f.detail,L=await Ro(a,y);let B=[];L&&(await L.fetchCollection(),B=await L.updateLayerJson(w,y.get("id"),t.map));const D=(W=B==null?void 0:B.find(M=>{var et;return((et=M==null?void 0:M.properties)==null?void 0:et.id)==="AnalysisGroup"}))==null?void 0:W.layers;D!=null&&D.length&&(D==null||D.forEach(M=>{M.properties.layerControlExpand=!0,M.properties.layerControlToolsExpand=!0}),s.value.layers=B)};let u;const d=f=>{clearTimeout(u),u=setTimeout(()=>{c(f)},500)},p=f=>{t.map==="second"?Lo.value=f.detail.jsonformValue:ko.value=f.detail.jsonformValue};return(f,y)=>(Fi(),Hi("span",$s,[r.value?(Fi(),Hi("eox-layercontrol",Io({key:0},e,{for:Vo(s),"onDatetime:updated":d,class:"fill-height",toolsAsList:"true",style:{"--eox-background-color":"transparent"},ref_key:"eoxLayercontrol",ref:l,"on:layerConfig:change":p,".styleOverride":_s}),null,48,Ts)):Oo("v-if",!0)]))}};export{Xs as default};
