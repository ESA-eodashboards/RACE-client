var Wi=Object.defineProperty;var Oo=e=>{throw TypeError(e)};var Gi=(e,t,o)=>t in e?Wi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var I=(e,t,o)=>Gi(e,typeof t!="symbol"?t+"":t,o),to=(e,t,o)=>t.has(e)||Oo("Cannot "+o);var x=(e,t,o)=>(to(e,t,"read from private field"),o?o.call(e):t.get(e)),C=(e,t,o)=>t.has(e)?Oo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),ut=(e,t,o,i)=>(to(e,t,"write to private field"),i?i.call(e,o):t.set(e,o),o),R=(e,t,o)=>(to(e,t,"access private method"),o);import{b as p,E as ue,A as Ct,a as lt,i as go}from"./lit-element.BMPlKsWQ.js";import{n as V}from"./when.BR7zwNJC.js";import{c as Ji}from"./repeat.BH3fx7cN.js";import{e as Ki,i as Qi,t as Ot}from"./directive.CvdRHFdJ.js";import{r as tr,p as er}from"./directive-helpers.DDXwWjbG.js";import{o as or}from"./unsafe-html.WWnMP6dQ.js";import{o as ye}from"./map.DiiNQ3pp.js";import{e as Eo,a as ir}from"./addCommonStyleSheet.B0XXRREc.js";import{X as rr}from"./XYZ._S3Kc2FN.js";import{c as ce,g as nr}from"./commonjsHelpers.BosuxZz1.js";import{_ as ar}from"./index.BUIxO2d3.js";import{g as sr}from"./getElement.COiK8z0h.js";import"./Object.DcVsVtBM.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=e=>e!==void 0,Wo=(e,t,o)=>t in e?e[t]:e[t]=o;const oe={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class lr{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,o){return Ke(t,o).join("")}}function Ke(e,t){return Go(e,t,[]).join("")}function Go(e,t,o){if(e.nodeType===oe.CDATA_SECTION||e.nodeType===oe.TEXT)t?o.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(e.nodeValue);else{var i;for(i=e.firstChild;i;i=i.nextSibling)Go(i,t,o)}return o}function ur(e,t,o,i){for(var r=cr(t);r;r=dr(r)){var n=r.namespaceURI||null,a=e[n];if(E(a)){var s=a[r.localName];E(s)&&s.call(i,r,o)}}}function cr(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function dr(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function F(e,t,o){return hr(e,t,o)}function hr(e,t,o){var i=E(o)?o:{},r,n;for(r=0,n=e.length;r<n;++r)i[e[r]]=t;return i}function Jo(e,t){return function(o,i){var r=e.call(E(t)?t:this,o,i);if(E(r)){var n=i[i.length-1];n.push(r)}}}function N(e,t,o,i,r){return i.push(e),ur(t,o,i,r),i.pop()}function g(e,t,o){return function(i,r){let n=e.call(E(o)?o:this,i,r);if(E(n)){var a=r[r.length-1],s=E(t)?t:i.localName;a[s]=n}}}function J(e,t,o){return function(i,r){var n=e.call(E(o)?o:this,i,r);if(E(n)){var a=r[r.length-1],s=E(t)?t:i.localName,l=Wo(a,s,[]);l.push(n)}}}const pr=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function fr(e){return e.replace(pr,"")}function Rt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Bt(e){return ft(Ke(e,!1))}function ft(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function eo(e){return Ee(Ke(e,!1))}function Ee(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function T(e){return fr(Ke(e,!1))}const gr="http://www.w3.org/1999/xlink";function $o(e){return e.getAttributeNS(gr,"href")}function yr(e,t){return N({},qr,e,t)}function Ko(e){return[ft(e.getAttribute("minx")),ft(e.getAttribute("miny")),ft(e.getAttribute("maxx")),ft(e.getAttribute("maxy"))]}function mr(e,t){const o=Ko(e),i=[ft(e.getAttribute("resx")),ft(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:o,res:i}}function br(e,t){const o=Ko(e);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function vr(e,t){const o=parseFloat(e.getAttribute("min")),i=parseFloat(e.getAttribute("max"));return{min:o,max:i}}function wr(e,t){const o=N({},jr,e,t);if(!E(o))return;const i=o.westBoundLongitude,r=o.southBoundLatitude,n=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(i)||!E(r)||!E(n)||!E(a)))return[i,r,n,a]}function Sr(e,t){return N({},Mr,e,t)}function xr(e,t){return N({},Br,e,t)}function Er(e,t){return N({},Nr,e,t)}function $r(e,t){return N({},kr,e,t)}function Ar(e,t){return N({},Ur,e,t)}function Cr(e,t){return N([],Fr,e,t)}function Tr(e,t){const o=Rt(e.getAttribute("queryable"));return N({queryable:E(o)?o:!1},ei,e,t)}function _r(e,t){var o=t[t.length-1];const i=N({},ei,e,t);if(!E(i))return;let r=Rt(e.getAttribute("queryable"));E(r)||(r=o.queryable),i.queryable=E(r)?r:!1;let n=Ee(e.getAttribute("cascaded"));E(n)||(n=o.cascaded),i.cascaded=n;let a=Rt(e.getAttribute("opaque"));E(a)||(a=o.opaque),i.opaque=E(a)?a:!1;let s=Rt(e.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),i.noSubsets=E(s)?s:!1;let l=ft(e.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),i.fixedWidth=l;let u=ft(e.getAttribute("fixedHeight"));E(u)||(u=o.fixedHeight),i.fixedHeight=u;const d=["Style","CRS","AuthorityURL"];for(let f=0,v=d.length;f<v;f++){const y=d[f],w=o[y];if(E(w)){let L=Wo(i,y,[]);L=L.concat(w),i[y]=L}}const c=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let f=0,v=c.length;f<v;f++){const y=c[f],w=i[y];if(!E(w)){const L=o[y];i[y]=L}}return i}function Dr(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Rt(e.getAttribute("multipleValues")),nearestValue:Rt(e.getAttribute("nearestValue")),current:Rt(e.getAttribute("current")),values:T(e)}}function yt(e,t){return N({},Gr,e,t)}function Vr(e,t){return N({},Zr,e,t)}function Lr(e,t){return N({},Yr,e,t)}function Rr(e,t){return N({},zr,e,t)}function oo(e,t){return N({},Xr,e,t)}function Qo(e,t){var o=yt(e,t);if(E(o)){const i=[Ee(e.getAttribute("width")),Ee(e.getAttribute("height"))];return o.size=i,o}}function Or(e,t){var o=yt(e,t);if(E(o))return o.name=e.getAttribute("name"),o}function Ir(e,t){var o=yt(e,t);if(E(o))return o.type=e.getAttribute("type"),o}function Pr(e,t){return N({},Wr,e,t)}function ti(e,t){return N([],Jr,e,t)}const q=[null,"http://www.opengis.net/wms"],Hr=F(q,{Service:g(xr),Capability:g(Sr)}),Mr=F(q,{Request:g(Vr),Exception:g(Cr),Layer:g(Tr)}),Br=F(q,{Name:g(T),Title:g(T),Abstract:g(T),KeywordList:g(ti),OnlineResource:g($o),ContactInformation:g(Er),Fees:g(T),AccessConstraints:g(T),LayerLimit:g(eo),MaxWidth:g(eo),MaxHeight:g(eo)}),Nr=F(q,{ContactPersonPrimary:g($r),ContactPosition:g(T),ContactAddress:g(Ar),ContactVoiceTelephone:g(T),ContactFacsimileTelephone:g(T),ContactElectronicMailAddress:g(T)}),kr=F(q,{ContactPerson:g(T),ContactOrganization:g(T)}),Ur=F(q,{AddressType:g(T),Address:g(T),City:g(T),StateOrProvince:g(T),PostCode:g(T),Country:g(T)}),Fr=F(q,{Format:Jo(T)}),ei=F(q,{Name:g(T),Title:g(T),Abstract:g(T),KeywordList:g(ti),CRS:J(T),SRS:J(T),EX_GeographicBoundingBox:g(wr),LatLonBoundingBox:g(br),BoundingBox:J(mr),Dimension:J(Dr),Attribution:g(yr),AuthorityURL:J(Or),Identifier:J(T),MetadataURL:J(Ir),DataURL:J(yt),FeatureListURL:J(yt),Style:J(Pr),MinScaleDenominator:g(Bt),MaxScaleDenominator:g(Bt),ScaleHint:g(vr),Layer:J(_r)}),qr=F(q,{Title:g(T),OnlineResource:g($o),LogoURL:g(Qo)}),jr=F(q,{westBoundLongitude:g(Bt),eastBoundLongitude:g(Bt),southBoundLatitude:g(Bt),northBoundLatitude:g(Bt)}),Zr=F(q,{GetCapabilities:g(oo),GetMap:g(oo),GetFeatureInfo:g(oo)}),Xr=F(q,{Format:J(T),DCPType:J(Lr)}),Yr=F(q,{HTTP:g(Rr)}),zr=F(q,{Get:g(yt),Post:g(yt)}),Wr=F(q,{Name:g(T),Title:g(T),Abstract:g(T),LegendURL:J(Qo),StyleSheetURL:g(yt),StyleURL:g(yt)}),Gr=F(q,{Format:g(T),OnlineResource:g($o)}),Jr=F(q,{Keyword:Jo(T)});class Kr{constructor(t,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new lr(o),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let o=t.firstChild;o;o=o.nextSibling)if(o.nodeType==oe.ELEMENT)return this.readFromNode(o);return null}readFromNode(t){return this.version=t.getAttribute("version"),N({version:this.version},Hr,t,[])||null}}async function Qr(e){let t=new URL(e),o=t.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let i=t.toString();const r=await fetch(i);if(r.ok){const n=await r.text();return new Kr(n).toJSON()}else throw new Error(`Error: ${r.status}`)}function Ao(e){const t=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":o.test(e)?"XYZ":!1}function tn(e){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),i=Ao(e);return!!(e&&o&&i)}function oi(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function en(e){try{return JSON.parse(oi(e)),!!e}catch{return!1}}function io(e,t){const o=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):Array.isArray(s)?(o.delete(a),s.forEach(l=>{o.append(a,l)})):o.set(a,s)});const i=e.split("?")[0],r=o.toString();return`${i}?${r}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Io(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,i)}return o}function ht(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Io(Object(o),!0).forEach(function(i){on(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Io(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}function me(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?me=function(t){return typeof t}:me=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(e)}function on(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function mt(){return mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},mt.apply(this,arguments)}function rn(e,t){if(e==null)return{};var o={},i=Object.keys(e),r,n;for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}function nn(e,t){if(e==null)return{};var o=rn(e,t),i,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var an="1.15.6";function gt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var bt=gt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=gt(/Edge/i),Po=gt(/firefox/i),Gt=gt(/safari/i)&&!gt(/chrome/i)&&!gt(/android/i),Co=gt(/iP(ad|od|hone)/i),ii=gt(/chrome/i)&&gt(/android/i),ri={capture:!1,passive:!1};function A(e,t,o){e.addEventListener(t,o,!bt&&ri)}function $(e,t,o){e.removeEventListener(t,o,!bt&&ri)}function $e(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function ni(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function st(e,t,o,i){if(e){o=o||document;do{if(t!=null&&(t[0]===">"?e.parentNode===o&&$e(e,t):$e(e,t))||i&&e===o)return e;if(e===o)break}while(e=ni(e))}return null}var Ho=/\s+/g;function tt(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Ho," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(Ho," ")}}function m(e,t,o){var i=e&&e.style;if(i){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),t===void 0?o:o[t];!(t in i)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),i[t]=o+(typeof o=="string"?"":"px")}}function kt(e,t){var o="";if(typeof e=="string")o=e;else do{var i=m(e,"transform");i&&i!=="none"&&(o=i+" "+o)}while(!t&&(e=e.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(o)}function ai(e,t,o){if(e){var i=e.getElementsByTagName(t),r=0,n=i.length;if(o)for(;r<n;r++)o(i[r],r);return i}return[]}function dt(){var e=document.scrollingElement;return e||document.documentElement}function M(e,t,o,i,r){if(!(!e.getBoundingClientRect&&e!==window)){var n,a,s,l,u,d,c;if(e!==window&&e.parentNode&&e!==dt()?(n=e.getBoundingClientRect(),a=n.top,s=n.left,l=n.bottom,u=n.right,d=n.height,c=n.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,d=window.innerHeight,c=window.innerWidth),(t||o)&&e!==window&&(r=r||e.parentNode,!bt))do if(r&&r.getBoundingClientRect&&(m(r,"transform")!=="none"||o&&m(r,"position")!=="static")){var f=r.getBoundingClientRect();a-=f.top+parseInt(m(r,"border-top-width")),s-=f.left+parseInt(m(r,"border-left-width")),l=a+n.height,u=s+n.width;break}while(r=r.parentNode);if(i&&e!==window){var v=kt(r||e),y=v&&v.a,w=v&&v.d;v&&(a/=w,s/=y,c/=y,d/=w,l=a+d,u=s+c)}return{top:a,left:s,bottom:l,right:u,width:c,height:d}}}function Mo(e,t,o){for(var i=At(e,!0),r=M(e)[t];i;){var n=M(i)[o],a=void 0;if(a=r>=n,!a)return i;if(i===dt())break;i=At(i,!1)}return!1}function Ut(e,t,o,i){for(var r=0,n=0,a=e.children;n<a.length;){if(a[n].style.display!=="none"&&a[n]!==b.ghost&&(i||a[n]!==b.dragged)&&st(a[n],o.draggable,e,!1)){if(r===t)return a[n];r++}n++}return null}function To(e,t){for(var o=e.lastElementChild;o&&(o===b.ghost||m(o,"display")==="none"||t&&!$e(o,t));)o=o.previousElementSibling;return o||null}function it(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==b.clone&&(!t||$e(e,t))&&o++;return o}function Bo(e){var t=0,o=0,i=dt();if(e)do{var r=kt(e),n=r.a,a=r.d;t+=e.scrollLeft*n,o+=e.scrollTop*a}while(e!==i&&(e=e.parentNode));return[t,o]}function sn(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return dt();var o=e,i=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var r=m(o);if(o.clientWidth<o.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return dt();if(i||t)return o;i=!0}}while(o=o.parentNode);return dt()}function ln(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function ro(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function si(e,t){return function(){if(!Jt){var o=arguments,i=this;o.length===1?e.call(i,o[0]):e.apply(i,o),Jt=setTimeout(function(){Jt=void 0},t)}}}function un(){clearTimeout(Jt),Jt=void 0}function li(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function ui(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function ci(e,t,o){var i={};return Array.from(e.children).forEach(function(r){var n,a,s,l;if(!(!st(r,t.draggable,e,!1)||r.animated||r===o)){var u=M(r);i.left=Math.min((n=i.left)!==null&&n!==void 0?n:1/0,u.left),i.top=Math.min((a=i.top)!==null&&a!==void 0?a:1/0,u.top),i.right=Math.max((s=i.right)!==null&&s!==void 0?s:-1/0,u.right),i.bottom=Math.max((l=i.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var K="Sortable"+new Date().getTime();function cn(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(r){if(!(m(r,"display")==="none"||r===b.ghost)){e.push({target:r,rect:M(r)});var n=ht({},e[e.length-1].rect);if(r.thisAnimationDuration){var a=kt(r,!0);a&&(n.top-=a.f,n.left-=a.e)}r.fromRect=n}})}},addAnimationState:function(i){e.push(i)},removeAnimationState:function(i){e.splice(sn(e,{target:i}),1)},animateAll:function(i){var r=this;if(!this.options.animation){clearTimeout(t),typeof i=="function"&&i();return}var n=!1,a=0;e.forEach(function(s){var l=0,u=s.target,d=u.fromRect,c=M(u),f=u.prevFromRect,v=u.prevToRect,y=s.rect,w=kt(u,!0);w&&(c.top-=w.f,c.left-=w.e),u.toRect=c,u.thisAnimationDuration&&ro(f,c)&&!ro(d,c)&&(y.top-c.top)/(y.left-c.left)===(d.top-c.top)/(d.left-c.left)&&(l=hn(y,f,v,r.options)),ro(c,d)||(u.prevFromRect=d,u.prevToRect=c,l||(l=r.options.animation),r.animate(u,y,c,l)),l&&(n=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),n?t=setTimeout(function(){typeof i=="function"&&i()},a):typeof i=="function"&&i(),e=[]},animate:function(i,r,n,a){if(a){m(i,"transition",""),m(i,"transform","");var s=kt(this.el),l=s&&s.a,u=s&&s.d,d=(r.left-n.left)/(l||1),c=(r.top-n.top)/(u||1);i.animatingX=!!d,i.animatingY=!!c,m(i,"transform","translate3d("+d+"px,"+c+"px,0)"),this.forRepaintDummy=dn(i),m(i,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),m(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){m(i,"transition",""),m(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},a)}}}}function dn(e){return e.offsetWidth}function hn(e,t,o,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*i.animation}var It=[],no={initializeByDefault:!0},se={mount:function(t){for(var o in no)no.hasOwnProperty(o)&&!(o in t)&&(t[o]=no[o]);It.forEach(function(i){if(i.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),It.push(t)},pluginEvent:function(t,o,i){var r=this;this.eventCanceled=!1,i.cancel=function(){r.eventCanceled=!0};var n=t+"Global";It.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][n]&&o[a.pluginName][n](ht({sortable:o},i)),o.options[a.pluginName]&&o[a.pluginName][t]&&o[a.pluginName][t](ht({sortable:o},i)))})},initializePlugins:function(t,o,i,r){It.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,o,t.options);u.sortable=t,u.options=t.options,t[l]=u,mt(i,u.defaults)}});for(var n in t.options)if(t.options.hasOwnProperty(n)){var a=this.modifyOption(t,n,t.options[n]);typeof a<"u"&&(t.options[n]=a)}},getEventProperties:function(t,o){var i={};return It.forEach(function(r){typeof r.eventProperties=="function"&&mt(i,r.eventProperties.call(o[r.pluginName],t))}),i},modifyOption:function(t,o,i){var r;return It.forEach(function(n){t[n.pluginName]&&n.optionListeners&&typeof n.optionListeners[o]=="function"&&(r=n.optionListeners[o].call(t[n.pluginName],i))}),r}};function pn(e){var t=e.sortable,o=e.rootEl,i=e.name,r=e.targetEl,n=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,d=e.oldDraggableIndex,c=e.newDraggableIndex,f=e.originalEvent,v=e.putSortable,y=e.extraEventProperties;if(t=t||o&&o[K],!!t){var w,L=t.options,W="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!bt&&!ae?w=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(i,!0,!0)),w.to=a||o,w.from=s||o,w.item=r||o,w.clone=n,w.oldIndex=l,w.newIndex=u,w.oldDraggableIndex=d,w.newDraggableIndex=c,w.originalEvent=f,w.pullMode=v?v.lastPutMode:void 0;var B=ht(ht({},y),se.getEventProperties(i,t));for(var Q in B)w[Q]=B[Q];o&&o.dispatchEvent(w),L[W]&&L[W].call(t,w)}}var fn=["evt"],G=function(t,o){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.evt,n=nn(i,fn);se.pluginEvent.bind(b)(t,o,ht({dragEl:h,parentEl:P,ghostEl:S,rootEl:D,nextEl:Vt,lastDownEl:be,cloneEl:O,cloneHidden:xt,dragStarted:Yt,putSortable:k,activeSortable:b.active,originalEvent:r,oldIndex:Nt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:St,hideGhostForTarget:fi,unhideGhostForTarget:gi,cloneNowHidden:function(){xt=!0},cloneNowShown:function(){xt=!1},dispatchSortableEvent:function(s){z({sortable:o,name:s,originalEvent:r})}},n))};function z(e){pn(ht({putSortable:k,cloneEl:O,targetEl:h,rootEl:D,oldIndex:Nt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:St},e))}var h,P,S,D,Vt,be,O,xt,Nt,et,Kt,St,de,k,Ht=!1,Ae=!1,Ce=[],_t,at,ao,so,No,ko,Yt,Pt,Qt,te=!1,he=!1,ve,X,lo=[],yo=!1,Te=[],Qe=typeof document<"u",pe=Co,Uo=ae||bt?"cssFloat":"float",gn=Qe&&!ii&&!Co&&"draggable"in document.createElement("div"),di=function(){if(Qe){if(bt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),hi=function(t,o){var i=m(t),r=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=Ut(t,0,o),a=Ut(t,1,o),s=n&&m(n),l=a&&m(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(n).width,d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+M(a).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&s.float&&s.float!=="none"){var c=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===c)?"vertical":"horizontal"}return n&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=r&&i[Uo]==="none"||a&&i[Uo]==="none"&&u+d>r)?"vertical":"horizontal"},yn=function(t,o,i){var r=i?t.left:t.top,n=i?t.right:t.bottom,a=i?t.width:t.height,s=i?o.left:o.top,l=i?o.right:o.bottom,u=i?o.width:o.height;return r===s||n===l||r+a/2===s+u/2},mn=function(t,o){var i;return Ce.some(function(r){var n=r[K].options.emptyInsertThreshold;if(!(!n||To(r))){var a=M(r),s=t>=a.left-n&&t<=a.right+n,l=o>=a.top-n&&o<=a.bottom+n;if(s&&l)return i=r}}),i},pi=function(t){function o(n,a){return function(s,l,u,d){var c=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(n==null&&(a||c))return!0;if(n==null||n===!1)return!1;if(a&&n==="clone")return n;if(typeof n=="function")return o(n(s,l,u,d),a)(s,l,u,d);var f=(a?s:l).options.group.name;return n===!0||typeof n=="string"&&n===f||n.join&&n.indexOf(f)>-1}}var i={},r=t.group;(!r||me(r)!="object")&&(r={name:r}),i.name=r.name,i.checkPull=o(r.pull,!0),i.checkPut=o(r.put),i.revertClone=r.revertClone,t.group=i},fi=function(){!di&&S&&m(S,"display","none")},gi=function(){!di&&S&&m(S,"display","")};Qe&&!ii&&document.addEventListener("click",function(e){if(Ae)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Ae=!1,!1},!0);var Dt=function(t){if(h){t=t.touches?t.touches[0]:t;var o=mn(t.clientX,t.clientY);if(o){var i={};for(var r in t)t.hasOwnProperty(r)&&(i[r]=t[r]);i.target=i.rootEl=o,i.preventDefault=void 0,i.stopPropagation=void 0,o[K]._onDragOver(i)}}},bn=function(t){h&&h.parentNode[K]._isOutsideThisEl(t.target)};function b(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=mt({},t),e[K]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return hi(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:b.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||Co),emptyInsertThreshold:5};se.initializePlugins(this,e,o);for(var i in o)!(i in t)&&(t[i]=o[i]);pi(t);for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this));this.nativeDraggable=t.forceFallback?!1:gn,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?A(e,"pointerdown",this._onTapStart):(A(e,"mousedown",this._onTapStart),A(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(A(e,"dragover",this),A(e,"dragenter",this)),Ce.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),mt(this,cn())}b.prototype={constructor:b,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Pt=null)},_getDirection:function(t,o){return typeof this.options.direction=="function"?this.options.direction.call(this,t,o,h):this.options.direction},_onTapStart:function(t){if(t.cancelable){var o=this,i=this.el,r=this.options,n=r.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,d=r.filter;if(Cn(i),!h&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||r.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Gt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=st(l,r.draggable,i,!1),!(l&&l.animated)&&be!==l)){if(Nt=it(l),Kt=it(l,r.draggable),typeof d=="function"){if(d.call(this,t,l,this)){z({sortable:o,rootEl:u,name:"filter",targetEl:l,toEl:i,fromEl:i}),G("filter",o,{evt:t}),n&&t.preventDefault();return}}else if(d&&(d=d.split(",").some(function(c){if(c=st(u,c.trim(),i,!1),c)return z({sortable:o,rootEl:c,name:"filter",targetEl:l,fromEl:i,toEl:i}),G("filter",o,{evt:t}),!0}),d)){n&&t.preventDefault();return}r.handle&&!st(u,r.handle,i,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,o,i){var r=this,n=r.el,a=r.options,s=n.ownerDocument,l;if(i&&!h&&i.parentNode===n){var u=M(i);if(D=n,h=i,P=h.parentNode,Vt=h.nextSibling,be=i,de=a.group,b.dragged=h,_t={target:h,clientX:(o||t).clientX,clientY:(o||t).clientY},No=_t.clientX-u.left,ko=_t.clientY-u.top,this._lastX=(o||t).clientX,this._lastY=(o||t).clientY,h.style["will-change"]="all",l=function(){if(G("delayEnded",r,{evt:t}),b.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!Po&&r.nativeDraggable&&(h.draggable=!0),r._triggerDragStart(t,o),z({sortable:r,name:"choose",originalEvent:t}),tt(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(d){ai(h,d.trim(),uo)}),A(s,"dragover",Dt),A(s,"mousemove",Dt),A(s,"touchmove",Dt),a.supportPointer?(A(s,"pointerup",r._onDrop),!this.nativeDraggable&&A(s,"pointercancel",r._onDrop)):(A(s,"mouseup",r._onDrop),A(s,"touchend",r._onDrop),A(s,"touchcancel",r._onDrop)),Po&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),G("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(ae||bt))){if(b.eventCanceled){this._onDrop();return}a.supportPointer?(A(s,"pointerup",r._disableDelayedDrag),A(s,"pointercancel",r._disableDelayedDrag)):(A(s,"mouseup",r._disableDelayedDrag),A(s,"touchend",r._disableDelayedDrag),A(s,"touchcancel",r._disableDelayedDrag)),A(s,"mousemove",r._delayedDragTouchMoveHandler),A(s,"touchmove",r._delayedDragTouchMoveHandler),a.supportPointer&&A(s,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var o=t.touches?t.touches[0]:t;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&uo(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,o){o=o||t.pointerType=="touch"&&t,!this.nativeDraggable||o?this.options.supportPointer?A(document,"pointermove",this._onTouchMove):o?A(document,"touchmove",this._onTouchMove):A(document,"mousemove",this._onTouchMove):(A(h,"dragend",this),A(D,"dragstart",this._onDragStart));try{document.selection?we(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,o){if(Ht=!1,D&&h){G("dragStarted",this,{evt:o}),this.nativeDraggable&&A(document,"dragover",bn);var i=this.options;!t&&tt(h,i.dragClass,!1),tt(h,i.ghostClass,!0),b.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,fi();for(var t=document.elementFromPoint(at.clientX,at.clientY),o=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==o);)o=t;if(h.parentNode[K]._isOutsideThisEl(t),o)do{if(o[K]){var i=void 0;if(i=o[K]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:o}),i&&!this.options.dragoverBubble)break}t=o}while(o=ni(o));gi()}},_onTouchMove:function(t){if(_t){var o=this.options,i=o.fallbackTolerance,r=o.fallbackOffset,n=t.touches?t.touches[0]:t,a=S&&kt(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,u=pe&&X&&Bo(X),d=(n.clientX-_t.clientX+r.x)/(s||1)+(u?u[0]-lo[0]:0)/(s||1),c=(n.clientY-_t.clientY+r.y)/(l||1)+(u?u[1]-lo[1]:0)/(l||1);if(!b.active&&!Ht){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(S){a?(a.e+=d-(ao||0),a.f+=c-(so||0)):a={a:1,b:0,c:0,d:1,e:d,f:c};var f="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");m(S,"webkitTransform",f),m(S,"mozTransform",f),m(S,"msTransform",f),m(S,"transform",f),ao=d,so=c,at=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:D,o=M(h,!0,pe,!0,t),i=this.options;if(pe){for(X=t;m(X,"position")==="static"&&m(X,"transform")==="none"&&X!==document;)X=X.parentNode;X!==document.body&&X!==document.documentElement?(X===document&&(X=dt()),o.top+=X.scrollTop,o.left+=X.scrollLeft):X=dt(),lo=Bo(X)}S=h.cloneNode(!0),tt(S,i.ghostClass,!1),tt(S,i.fallbackClass,!0),tt(S,i.dragClass,!0),m(S,"transition",""),m(S,"transform",""),m(S,"box-sizing","border-box"),m(S,"margin",0),m(S,"top",o.top),m(S,"left",o.left),m(S,"width",o.width),m(S,"height",o.height),m(S,"opacity","0.8"),m(S,"position",pe?"absolute":"fixed"),m(S,"zIndex","100000"),m(S,"pointerEvents","none"),b.ghost=S,t.appendChild(S),m(S,"transform-origin",No/parseInt(S.style.width)*100+"% "+ko/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,o){var i=this,r=t.dataTransfer,n=i.options;if(G("dragStart",this,{evt:t}),b.eventCanceled){this._onDrop();return}G("setupClone",this),b.eventCanceled||(O=ui(h),O.removeAttribute("id"),O.draggable=!1,O.style["will-change"]="",this._hideClone(),tt(O,this.options.chosenClass,!1),b.clone=O),i.cloneId=we(function(){G("clone",i),!b.eventCanceled&&(i.options.removeCloneOnHide||D.insertBefore(O,h),i._hideClone(),z({sortable:i,name:"clone"}))}),!o&&tt(h,n.dragClass,!0),o?(Ae=!0,i._loopId=setInterval(i._emulateDragOver,50)):($(document,"mouseup",i._onDrop),$(document,"touchend",i._onDrop),$(document,"touchcancel",i._onDrop),r&&(r.effectAllowed="move",n.setData&&n.setData.call(i,r,h)),A(document,"drop",i),m(h,"transform","translateZ(0)")),Ht=!0,i._dragStartId=we(i._dragStarted.bind(i,o,t)),A(document,"selectstart",i),Yt=!0,window.getSelection().removeAllRanges(),Gt&&m(document.body,"user-select","none")},_onDragOver:function(t){var o=this.el,i=t.target,r,n,a,s=this.options,l=s.group,u=b.active,d=de===l,c=s.sort,f=k||u,v,y=this,w=!1;if(yo)return;function L(Xt,Yi){G(Xt,y,ht({evt:t,isOwner:d,axis:v?"vertical":"horizontal",revert:a,dragRect:r,targetRect:n,canSort:c,fromSortable:f,target:i,completed:B,onMove:function(Ro,zi){return fe(D,o,h,r,Ro,M(Ro),t,zi)},changed:Q},Yi))}function W(){L("dragOverAnimationCapture"),y.captureAnimationState(),y!==f&&f.captureAnimationState()}function B(Xt){return L("dragOverCompleted",{insertion:Xt}),Xt&&(d?u._hideClone():u._showClone(y),y!==f&&(tt(h,k?k.options.ghostClass:u.options.ghostClass,!1),tt(h,s.ghostClass,!0)),k!==y&&y!==b.active?k=y:y===b.active&&k&&(k=null),f===y&&(y._ignoreWhileAnimating=i),y.animateAll(function(){L("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(i===h&&!h.animated||i===o&&!i.animated)&&(Pt=null),!s.dragoverBubble&&!t.rootEl&&i!==document&&(h.parentNode[K]._isOutsideThisEl(t.target),!Xt&&Dt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function Q(){et=it(h),St=it(h,s.draggable),z({sortable:y,name:"change",toEl:o,newIndex:et,newDraggableIndex:St,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),i=st(i,s.draggable,o,!0),L("dragOver"),b.eventCanceled)return w;if(h.contains(t.target)||i.animated&&i.animatingX&&i.animatingY||y._ignoreWhileAnimating===i)return B(!1);if(Ae=!1,u&&!s.disabled&&(d?c||(a=P!==D):k===this||(this.lastPutMode=de.checkPull(this,u,h,t))&&l.checkPut(this,u,h,t))){if(v=this._getDirection(t,i)==="vertical",r=M(h),L("dragOverValid"),b.eventCanceled)return w;if(a)return P=D,W(),this._hideClone(),L("revert"),b.eventCanceled||(Vt?D.insertBefore(h,Vt):D.appendChild(h)),B(!0);var Y=To(o,s.draggable);if(!Y||xn(t,v,this)&&!Y.animated){if(Y===h)return B(!1);if(Y&&o===t.target&&(i=Y),i&&(n=M(i)),fe(D,o,h,r,i,n,t,!!i)!==!1)return W(),Y&&Y.nextSibling?o.insertBefore(h,Y.nextSibling):o.appendChild(h),P=o,Q(),B(!0)}else if(Y&&Sn(t,v,this)){var rt=Ut(o,0,s,!0);if(rt===h)return B(!1);if(i=rt,n=M(i),fe(D,o,h,r,i,n,t,!1)!==!1)return W(),o.insertBefore(h,rt),P=o,Q(),B(!0)}else if(i.parentNode===o){n=M(i);var _=0,j,nt=h.parentNode!==o,Z=!yn(h.animated&&h.toRect||r,i.animated&&i.toRect||n,v),qt=v?"top":"left",vt=Mo(i,"top","top")||Mo(h,"top","top"),jt=vt?vt.scrollTop:void 0;Pt!==i&&(j=n[qt],te=!1,he=!Z&&s.invertSwap||nt),_=En(t,i,n,v,Z?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,he,Pt===i);var pt;if(_!==0){var Tt=it(h);do Tt-=_,pt=P.children[Tt];while(pt&&(m(pt,"display")==="none"||pt===S))}if(_===0||pt===i)return B(!1);Pt=i,Qt=_;var Zt=i.nextElementSibling,wt=!1;wt=_===1;var le=fe(D,o,h,r,i,n,t,wt);if(le!==!1)return(le===1||le===-1)&&(wt=le===1),yo=!0,setTimeout(wn,30),W(),wt&&!Zt?o.appendChild(h):i.parentNode.insertBefore(h,wt?Zt:i),vt&&li(vt,0,jt-vt.scrollTop),P=h.parentNode,j!==void 0&&!he&&(ve=Math.abs(j-M(i)[qt])),Q(),B(!0)}if(o.contains(h))return B(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Dt),$(document,"mousemove",Dt),$(document,"touchmove",Dt)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var o=this.el,i=this.options;if(et=it(h),St=it(h,i.draggable),G("drop",this,{evt:t}),P=h&&h.parentNode,et=it(h),St=it(h,i.draggable),b.eventCanceled){this._nulling();return}Ht=!1,he=!1,te=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),mo(this.cloneId),mo(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&m(document.body,"user-select",""),m(h,"transform",""),t&&(Yt&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(D===P||k&&k.lastPutMode!=="clone")&&O&&O.parentNode&&O.parentNode.removeChild(O),h&&(this.nativeDraggable&&$(h,"dragend",this),uo(h),h.style["will-change"]="",Yt&&!Ht&&tt(h,k?k.options.ghostClass:this.options.ghostClass,!1),tt(h,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:P,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==P?(et>=0&&(z({rootEl:P,name:"add",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"remove",toEl:P,originalEvent:t}),z({rootEl:P,name:"sort",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),k&&k.save()):et!==Nt&&et>=0&&(z({sortable:this,name:"update",toEl:P,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),b.active&&((et==null||et===-1)&&(et=Nt,St=Kt),z({sortable:this,name:"end",toEl:P,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){G("nulling",this),D=h=P=S=Vt=O=be=xt=_t=at=Yt=et=St=Nt=Kt=Pt=Qt=k=de=b.dragged=b.ghost=b.clone=b.active=null,Te.forEach(function(t){t.checked=!0}),Te.length=ao=so=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":h&&(this._onDragOver(t),vn(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],o,i=this.el.children,r=0,n=i.length,a=this.options;r<n;r++)o=i[r],st(o,a.draggable,this.el,!1)&&t.push(o.getAttribute(a.dataIdAttr)||An(o));return t},sort:function(t,o){var i={},r=this.el;this.toArray().forEach(function(n,a){var s=r.children[a];st(s,this.options.draggable,r,!1)&&(i[n]=s)},this),o&&this.captureAnimationState(),t.forEach(function(n){i[n]&&(r.removeChild(i[n]),r.appendChild(i[n]))}),o&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,o){return st(t,o||this.options.draggable,this.el,!1)},option:function(t,o){var i=this.options;if(o===void 0)return i[t];var r=se.modifyOption(this,t,o);typeof r<"u"?i[t]=r:i[t]=o,t==="group"&&pi(i)},destroy:function(){G("destroy",this);var t=this.el;t[K]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ce.splice(Ce.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!xt){if(G("hideClone",this),b.eventCanceled)return;m(O,"display","none"),this.options.removeCloneOnHide&&O.parentNode&&O.parentNode.removeChild(O),xt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(xt){if(G("showClone",this),b.eventCanceled)return;h.parentNode==D&&!this.options.group.revertClone?D.insertBefore(O,h):Vt?D.insertBefore(O,Vt):D.appendChild(O),this.options.group.revertClone&&this.animate(h,O),m(O,"display",""),xt=!1}}};function vn(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function fe(e,t,o,i,r,n,a,s){var l,u=e[K],d=u.options.onMove,c;return window.CustomEvent&&!bt&&!ae?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=r||t,l.relatedRect=n||M(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),d&&(c=d.call(u,l,a)),c}function uo(e){e.draggable=!1}function wn(){yo=!1}function Sn(e,t,o){var i=M(Ut(o.el,0,o.options,!0)),r=ci(o.el,o.options,S),n=10;return t?e.clientX<r.left-n||e.clientY<i.top&&e.clientX<i.right:e.clientY<r.top-n||e.clientY<i.bottom&&e.clientX<i.left}function xn(e,t,o){var i=M(To(o.el,o.options.draggable)),r=ci(o.el,o.options,S),n=10;return t?e.clientX>r.right+n||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>r.bottom+n||e.clientX>i.right&&e.clientY>i.top}function En(e,t,o,i,r,n,a,s){var l=i?e.clientY:e.clientX,u=i?o.height:o.width,d=i?o.top:o.left,c=i?o.bottom:o.right,f=!1;if(!a){if(s&&ve<u*r){if(!te&&(Qt===1?l>d+u*n/2:l<c-u*n/2)&&(te=!0),te)f=!0;else if(Qt===1?l<d+ve:l>c-ve)return-Qt}else if(l>d+u*(1-r)/2&&l<c-u*(1-r)/2)return $n(t)}return f=f||a,f&&(l<d+u*n/2||l>c-u*n/2)?l>d+u/2?1:-1:0}function $n(e){return it(h)<it(e)?1:-1}function An(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}function Cn(e){Te.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var i=t[o];i.checked&&Te.push(i)}}function we(e){return setTimeout(e,0)}function mo(e){return clearTimeout(e)}Qe&&A(document,"touchmove",function(e){(b.active||Ht)&&e.cancelable&&e.preventDefault()});b.utils={on:A,off:$,css:m,find:ai,is:function(t,o){return!!st(t,o,t,!1)},extend:ln,throttle:si,closest:st,toggleClass:tt,clone:ui,index:it,nextTick:we,cancelNextTick:mo,detectDirection:hi,getChild:Ut,expando:K};b.get=function(e){return e[K]};b.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(b.utils=ht(ht({},b.utils),i.utils)),se.mount(i)})};b.create=function(e,t){return new b(e,t)};b.version=an;var H=[],zt,bo,vo=!1,co,ho,_e,Wt;function Tn(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(o){var i=o.originalEvent;this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):this.options.supportPointer?A(document,"pointermove",this._handleFallbackAutoScroll):i.touches?A(document,"touchmove",this._handleFallbackAutoScroll):A(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var i=o.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),Fo(),Se(),un()},nulling:function(){_e=bo=zt=vo=Wt=co=ho=null,H.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,i){var r=this,n=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(n,a);if(_e=o,i||this.options.forceAutoScrollFallback||ae||bt||Gt){po(o,this.options,s,i);var l=At(s,!0);vo&&(!Wt||n!==co||a!==ho)&&(Wt&&Fo(),Wt=setInterval(function(){var u=At(document.elementFromPoint(n,a),!0);u!==l&&(l=u,Se()),po(o,r.options,u,i)},10),co=n,ho=a)}else{if(!this.options.bubbleScroll||At(s,!0)===dt()){Se();return}po(o,this.options,At(s,!1),!1)}}},mt(e,{pluginName:"scroll",initializeByDefault:!0})}function Se(){H.forEach(function(e){clearInterval(e.pid)}),H=[]}function Fo(){clearInterval(Wt)}var po=si(function(e,t,o,i){if(t.scroll){var r=(e.touches?e.touches[0]:e).clientX,n=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=dt(),u=!1,d;bo!==o&&(bo=o,Se(),zt=t.scroll,d=t.scrollFn,zt===!0&&(zt=At(o,!0)));var c=0,f=zt;do{var v=f,y=M(v),w=y.top,L=y.bottom,W=y.left,B=y.right,Q=y.width,Y=y.height,rt=void 0,_=void 0,j=v.scrollWidth,nt=v.scrollHeight,Z=m(v),qt=v.scrollLeft,vt=v.scrollTop;v===l?(rt=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"||Z.overflowX==="visible"),_=Y<nt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"||Z.overflowY==="visible")):(rt=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"),_=Y<nt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"));var jt=rt&&(Math.abs(B-r)<=a&&qt+Q<j)-(Math.abs(W-r)<=a&&!!qt),pt=_&&(Math.abs(L-n)<=a&&vt+Y<nt)-(Math.abs(w-n)<=a&&!!vt);if(!H[c])for(var Tt=0;Tt<=c;Tt++)H[Tt]||(H[Tt]={});(H[c].vx!=jt||H[c].vy!=pt||H[c].el!==v)&&(H[c].el=v,H[c].vx=jt,H[c].vy=pt,clearInterval(H[c].pid),(jt!=0||pt!=0)&&(u=!0,H[c].pid=setInterval((function(){i&&this.layer===0&&b.active._onTouchMove(_e);var Zt=H[this.layer].vy?H[this.layer].vy*s:0,wt=H[this.layer].vx?H[this.layer].vx*s:0;typeof d=="function"&&d.call(b.dragged.parentNode[K],wt,Zt,e,_e,H[this.layer].el)!=="continue"||li(H[this.layer].el,wt,Zt)}).bind({layer:c}),24))),c++}while(t.bubbleScroll&&f!==l&&(f=At(f,!1)));vo=u}},30),yi=function(t){var o=t.originalEvent,i=t.putSortable,r=t.dragEl,n=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(o){var u=i||n;s();var d=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,c=document.elementFromPoint(d.clientX,d.clientY);l(),u&&!u.el.contains(c)&&(a("spill"),this.onSpill({dragEl:r,putSortable:i}))}};function _o(){}_o.prototype={startIndex:null,dragStart:function(t){var o=t.oldDraggableIndex;this.startIndex=o},onSpill:function(t){var o=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var r=Ut(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(o,r):this.sortable.el.appendChild(o),this.sortable.animateAll(),i&&i.animateAll()},drop:yi};mt(_o,{pluginName:"revertOnSpill"});function Do(){}Do.prototype={onSpill:function(t){var o=t.dragEl,i=t.putSortable,r=i||this.sortable;r.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),r.animateAll()},drop:yi};mt(Do,{pluginName:"removeOnSpill"});b.mount(new Tn);b.mount(Do,_o);const _n=e=>{const t=e.item;let o=Array.prototype.slice.call(t.parentNode.childNodes);return o=o.filter(i=>i.nodeType!=Node.ELEMENT_NODE||!i.classList.contains("sortable-fallback")),o},Dn=(e,t,o,i,r,n)=>{const s=e.item.parentNode;for(const w of o)s.appendChild(w);if(e.oldIndex==e.newIndex)return;const l=i.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(r),d=l.find(w=>w.get(r)===u),c=n.dataset.layer,f=l.find(w=>w.get(r)==c);let v,y;for(v=0;v<l.length;v++)if(l[v]==d){i.removeAt(v);break}for(y=0;y<l.length;y++)if(l[y]===f){v>y?i.insertAt(y,d):i.insertAt(y+1,d);break}t.requestUpdate()};function Vn(e,t,o,i){let r=[],n=null;e._sortable=b.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),r=_n(a)},onMove:a=>{n=a.related},onEnd:a=>Dn(a,i,r,t,o,n)})}function Ln(e,t,o,i){const r=e.getArray();let n=!1;r.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),n=!0),a.get(o)||(a.set(o,`layer ${s}`),n=!0),n&&i.requestUpdate()})}function Vo(e,t,o){let i=[];const r=(n,a,s)=>{i=[...i,...n.filter(u=>u.get(a)===s)];const l=n.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>r(u.getLayers().getArray(),a,s)),i};return r(e,t,o),i}function Rn(e,t,o){if(!e||!t)return!1;if(!mi(e,o))return!0;const i=e.get("minZoom"),r=e.get("maxZoom"),n=t.getView().getZoom();return n>i&&n<r}function mi(e,t){const o=e.get("minZoom"),i=e.get("maxZoom");return!!(t&&(o!==-1/0||i!==1/0))}function qo(e,t){var r,n,a;return!e||!t?void 0:e.getLayers?"group":((a=(r=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:r.ol_uid)==null?void 0:a.includes(e.getSource?(n=e.getSource())==null?void 0:n.ol_uid:void 0))?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const On=(e,t,o)=>{var l,u;let i=t;const r=o.layer.getSource(),n=((u=(l=o.layerConfig.schema)==null?void 0:l.options)==null?void 0:u.removeProperties)??[],a={...e};n.forEach(d=>delete a[d]),r.updateParams?r.updateParams(a):r.getTileUrlFunction&&r.getTileUrlFunction()&&(i||(i=r.getTileUrlFunction()),r instanceof rr&&(r._updatedUrl=io(r.getUrls()[0],e)),r.setTileUrlFunction((...d)=>{const c=new URL(i(...d));return n.forEach(f=>c.searchParams.delete(f)),io(c.href,e)}),r.setKey(new Date().toISOString()));const s=document.querySelector("eox-map");if(s){const d=s.globe;if(d){const c=d.planet.layers.filter(f=>f.name==o.layer.get("id"))[0];c&&c.setUrl(io(c.url,e)),window.eoxMapGlobe.refresh()}}return i};function In(e,t,o){const i="updateStyleVariables"in t,r="setStyle"in t,n=i?t.style_:o.style;let a=n==null?void 0:n.variables;if(a){const s=Lo(e);if(n.variables={...a,...s},i)t.updateStyleVariables(s);else if(r){const l=Pn(n);t.setStyle(l)}}}const Lo=e=>{const t={};for(const o in e)if(typeof e[o]=="object"&&e[o]!==null){const i=Lo(e[o]);for(const r in i)t[r]=i==null?void 0:i[r]}else t[o]=e==null?void 0:e[o];return t};function Pn(e){let t=e;if("variables"in e){let o=JSON.stringify(e);const{variables:i}=e;for(const r in i)typeof i[r]=="number"?o=o.replaceAll(`["var","${r}"]`,String(i[r])):o=o.replaceAll(`["var","${r}"]`,`"${i[r]}"`);t=JSON.parse(o)}return t}const Hn=(e,t,o)=>{if(!e)return;const i=Lo(t);let r,n;return Array.isArray(e)?n=structuredClone(e):n=[structuredClone(e)],r=n.filter(a=>{if(!("boundTo"in a))return!0;const s=a.boundTo.key,l=a.boundTo.value;return s in i&&i[s]==l}),r.length||(r=null),r==null?void 0:r.map(a=>{var s;if(delete a.boundTo,a.rangeProperty&&o){const l=i[a.rangeProperty];l&&o[l]?(a.range=o[l],delete a.rangeProperty):l&&(a.range=["#ffffff","#000000"])}return!("domainProperties"in a)||"domain"in a?a:(s=Object.keys(a))==null?void 0:s.reduce((l,u)=>(u==="domainProperties"?l.domain=a[u].map(d=>i[d]):l[u]=a[u],l),{})}).filter(Boolean)};function Mn(e,t){var a,s,l,u,d,c;if(!t)return null;let o={},i="updateStyleVariables"in e?(a=e.style_)==null?void 0:a.variables:(s=t.style)==null?void 0:s.variables;if((t.type==="style"||t.style)&&i)o=i;else if((u=(l=e.getSource())==null?void 0:l.getParams)!=null&&u.call(l))o=e.getSource().getParams();else if((c=(d=e.getSource())==null?void 0:d.getTileUrlFunction)!=null&&c.call(d))try{const f=e.getSource().getTileUrlFunction()([0,0,0]);if(f){const v=new URL(f);o={};for(const[y,w]of v.searchParams.entries()){const L=v.searchParams.getAll(y);o[y]=L.length>1?L:w}}}catch(f){console.error("Error parsing start values from tile URL",f)}else return null;const r=De(t.schema),n=bi(Object.keys(r).length?r:t.schema,o,t.schema);return Object.keys(n).length?n:null}function De(e,t=e,o=new Set){if(!e||typeof e!="object")return{};const i={};typeof e.$ref=="string"&&!o.has(e.$ref)&&(o.add(e.$ref),Object.assign(i,De(Bn(e.$ref,t),t,o)));for(const r of["anyOf","oneOf","allOf"])if(Array.isArray(e[r]))for(const n of e[r])Object.assign(i,De(n,t,o));return Object.assign(i,e.properties)}function bi(e,t,o=e){var r;let i={};for(const n in e){const a=(r=e[n])==null?void 0:r.type;if(a&&a!=="object"&&t[n]!==void 0){const s=["number","integer"].includes(a)?Number(t[n]):t[n];i[n]=Number.isNaN(s)?t[n]:s}else{const s=bi(De(e[n],o),t,o);Object.keys(s).length>0&&(i[n]=s)}}return i}function Bn(e,t){if(e.startsWith("#/"))return e.slice(2).split("/").reduce((o,i)=>o==null?void 0:o[i.replace(/~1/g,"/").replace(/~0/g,"~")],t)}const vi=(e,t)=>e==null?void 0:e.filter(o=>["remove","sort"].filter(i=>t!=null&&t.get("layerControlDisable")?i!=="sort":!0).includes(o)),wi=(e,t)=>e==null?void 0:e.filter(o=>{let i=!0;return["remove","sort"].includes(o)&&(i=!1),o==="info"&&(i=t.get("description")),o==="config"&&(i=t.get("layerConfig")),o==="datetime"&&(i=t.get("layerDatetime")),o==="legend"&&(i=t.get("layerLegend")),i}),Nn=(e,t,o)=>p`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${o?e:p`<i class="small primary-text">${t}</i>`}
  </button>
`,Si=(e,t)=>p`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:o}=e;o==null||o.set("layerControlOptional",!0),o==null||o.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:o,bubbles:!0}))}}
  >
    ${e.unstyled?"x":p`<i class="small red-text">${t}</i>`}
  </button>
`,xi=(e,t,o)=>p`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${o?"═":p`<i class="small primary-text">${t}</i>`}
  </button>
`;function ee(){return{dots:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const Ei=e=>{var o;const t=["layerControlHide","layerControlOptional"];return(o=e==null?void 0:e.getArray())==null?void 0:o.filter(i=>t.every(r=>!i.get(r)))};function $i(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo=Ki(class extends Qi{constructor(e){if(super(e),e.type!==Ot.PROPERTY&&e.type!==Ot.ATTRIBUTE&&e.type!==Ot.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!tr(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ue||t===Ct)return t;const o=e.element,i=e.name;if(e.type===Ot.PROPERTY){if(t===o[i])return ue}else if(e.type===Ot.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return ue}else if(e.type===Ot.ATTRIBUTE&&o.getAttribute(i)===t+"")return ue;return er(e),t}});var Ai="Expected a function",jo=NaN,kn="[object Symbol]",Un=/^\s+|\s+$/g,Fn=/^[-+]0x[0-9a-f]+$/i,qn=/^0b[01]+$/i,jn=/^0o[0-7]+$/i,Zn=parseInt,Xn=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Yn=typeof self=="object"&&self&&self.Object===Object&&self,zn=Xn||Yn||Function("return this")(),Wn=Object.prototype,Gn=Wn.toString,Jn=Math.max,Kn=Math.min,fo=function(){return zn.Date.now()};function Qn(e,t,o){var i,r,n,a,s,l,u=0,d=!1,c=!1,f=!0;if(typeof e!="function")throw new TypeError(Ai);t=Zo(t)||0,Ve(o)&&(d=!!o.leading,c="maxWait"in o,n=c?Jn(Zo(o.maxWait)||0,t):n,f="trailing"in o?!!o.trailing:f);function v(_){var j=i,nt=r;return i=r=void 0,u=_,a=e.apply(nt,j),a}function y(_){return u=_,s=setTimeout(W,t),d?v(_):a}function w(_){var j=_-l,nt=_-u,Z=t-j;return c?Kn(Z,n-nt):Z}function L(_){var j=_-l,nt=_-u;return l===void 0||j>=t||j<0||c&&nt>=n}function W(){var _=fo();if(L(_))return B(_);s=setTimeout(W,w(_))}function B(_){return s=void 0,f&&i?v(_):(i=r=void 0,a)}function Q(){s!==void 0&&clearTimeout(s),u=0,i=l=r=s=void 0}function Y(){return s===void 0?a:B(fo())}function rt(){var _=fo(),j=L(_);if(i=arguments,r=this,l=_,j){if(s===void 0)return y(l);if(c)return s=setTimeout(W,t),v(l)}return s===void 0&&(s=setTimeout(W,t)),a}return rt.cancel=Q,rt.flush=Y,rt}function ta(e,t,o){var i=!0,r=!0;if(typeof e!="function")throw new TypeError(Ai);return Ve(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),Qn(e,t,{leading:i,maxWait:t,trailing:r})}function Ve(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ea(e){return!!e&&typeof e=="object"}function oa(e){return typeof e=="symbol"||ea(e)&&Gn.call(e)==kn}function Zo(e){if(typeof e=="number")return e;if(oa(e))return jo;if(Ve(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ve(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Un,"");var o=qn.test(e);return o||jn.test(e)?Zn(e.slice(2),o?2:8):Fn.test(e)?jo:+e}var ia=ta;const Xo=nr(ia);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>e??Ct;var ot,Le,Re;class Ci extends lt{constructor(){super();C(this,ot,[]);C(this,Le,go`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);C(this,Re,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,ot)?x(this,ot).length>1?x(this,ot):x(this,ot)[0]:null}set layerLegend(o){var i;o?Array.isArray(o)?ut(this,ot,o.map((r,n)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+n,...r}})):ut(this,ot,[{id:(((i=this.layer)==null?void 0:i.get("id"))??"")+0,...o}]):ut(this,ot,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var o;ut(this,ot,(o=x(this,ot))==null?void 0:o.map(i=>(this.offsetWidth!==i.width&&(i.width=this.offsetWidth),{...i}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),p`
      <style>
        ${x(this,Le)}
        ${!this.unstyled&&x(this,Re)}
      </style>
      ${V(this.layerLegend,()=>p`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,ot).map((o,i,r)=>p`
                <color-legend
                  id="${o.id}"
                  width=${o.width??325}
                  scaleType="${ge(o.scaleType)}"
                  markType="${ge(o.markType)}"
                  titleText="${ge(o.title)}"
                  .range=${o.range}
                  .domain=${o.domain}
                  tickFormat="${ge(o.tickFormat)}"
                  .ticks=${o.ticks??5}
                  .tickValues=${o.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${i!==r.length-1?p`<div class="separator"></div>`:Ct}
              `)}
          </div>
        `)}
    `}}ot=new WeakMap,Le=new WeakMap,Re=new WeakMap,I(Ci,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Ci);var Et,Lt,ie,re,So,Oe,Ie;class Ti extends lt{constructor(){super();C(this,re);C(this,Et,{});C(this,Lt,null);C(this,ie);C(this,Oe,go`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `);C(this,Ie,go`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Xo(R(this,re,So),1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}updated(o){var i,r;if(o.has("layerConfig")){const n=((i=this.layerConfig)==null?void 0:i.type)==="style"||(r=this.layerConfig)!=null&&r.style?100:1e3;this.throttleDataChange=Xo(R(this,re,So),n),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){ut(this,Lt,Mn(this.layer,this.layerConfig)),Object.keys(x(this,Et)).length!==0&&ut(this,Lt,x(this,Et)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const o={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return p`
      <style>
        ${x(this,Oe)}
        ${!this.unstyled&&x(this,Ie)}
      </style>
      ${V(this.layerConfig,()=>p`
          ${V(this.layerConfig.legend,()=>p`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Hn(this.layerConfig.legend,x(this,Lt),this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${x(this,Lt)}
            .options=${o}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}Et=new WeakMap,Lt=new WeakMap,ie=new WeakMap,re=new WeakSet,So=function(o){ut(this,Et,o.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?In(x(this,Et),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):ut(this,ie,On(x(this,Et),x(this,ie),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail,layer:this.layer}})),this.requestUpdate()},Oe=new WeakMap,Ie=new WeakMap,I(Ti,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Ti);var Pe,Di,He,Me;class _i extends lt{constructor(){super();C(this,Pe);C(this,He,"");C(this,Me,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),p`
      <style>
        ${x(this,He)}
        ${!this.unstyled&&x(this,Me)}
      </style>
      ${V(this.layerDatetime,()=>p`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(o=>({date:o}))}]}
            @select=${R(this,Pe,Di)}
            .showUTC=${this.layerDatetime.showUTC||!1}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime.animateOnClickInterval??"0.3s"}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}}Pe=new WeakSet,Di=function(o){var a;const i=new Date(o.detail.date[0]),r=(a=this.layerDatetime.controlValues)==null?void 0:a.some(s=>typeof s=="string"&&s.includes("T"));let n;r?n=i.toISOString():n=(l=>`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`)(i),n!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:n,layer:this.layer}})),this.layerDatetime.currentStep=n,this.requestUpdate())},He=new WeakMap,Me=new WeakMap,I(_i,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",_i);var ne,Be,Ne;class Vi extends lt{constructor(){super();C(this,ne,o=>(this.selectedTab===o||this.toolsAsList)&&"highlighted");C(this,Be,`
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
    .listed .tab {
      margin-bottom: .5rem;
    }
  `);C(this,Ne,`
    ${Eo}
    figure {
      padding: var(--padding-vertical) var(--padding);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface-variant);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.tabs,i=this.actions,r=i.length+o.length>1;return p`
      <style>
        ${x(this,Be)}
        ${!this.unstyled&&x(this,Ne)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${V(r,()=>p`
            <nav>
              ${V(!this.toolsAsList,()=>p`
                  <div>
                    <!-- Labels for tabs -->
                    ${ye(o,(n,a)=>p`
                        <label
                          class=${x(this,ne).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ye(i,n=>p`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${ye(o,(n,a)=>p`
              ${V(this.toolsAsList,()=>p`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${n}-icon`}>${n}</slot>
                    <span>${n}</span>
                  </label>
                `)}
              <div class="tab ${x(this,ne).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${n}-content`}>${n}</slot>
              </div>
              ${V(this.toolsAsList&&a<o.length-1,()=>p`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}ne=new WeakMap,Be=new WeakMap,Ne=new WeakMap,I(Vi,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Vi);var ke,Ri,Ue,Fe;class Li extends lt{constructor(){super();C(this,ke);I(this,"_removeButton",o=>Si(this,o));I(this,"_sortButton",o=>xi(this,o,this.unstyled));I(this,"_button",(o,i)=>Nn(o,i,this.unstyled));I(this,"_getDefaultTools",o=>{var i,r;return p`
      <div slot="info-content">
        ${or(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${wo((i=this.layer)==null?void 0:i.getOpacity())}
            class="tiny max"
            @input=${n=>{this.layer.setOpacity(parseFloat(n.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((r=this.layer)==null?void 0:r.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${V(this.layer.get("layerConfig"),()=>p`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${R(this,ke,Ri)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${V(this.layer.get("layerDatetime"),()=>p`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${n=>$i(n,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${V(this.layer.get("layerLegend"),()=>p`
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
      <div slot="remove-icon">${this._removeButton(o.remove)}</div>
      <div slot="sort-icon">${this._sortButton(o.sort)}</div>
    `});C(this,Ue,"");C(this,Fe,`
    ${this.embedded?"":Eo}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
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
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
    :host {
      display: block;
      margin-block: var(--padding-vertical) !important;
    }
    details[open] eox-layercontrol-tools-items {
      display: block;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var i,r,n;const o=this.parentElement||((i=this.getRootNode())==null?void 0:i.host);this.embedded=(o==null?void 0:o.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((r=this.layer)!=null&&r.getVisible()):this.embedded===!1?!0:!!((n=this.layer)!=null&&n.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updated(o){var i;this.toolsAutoExpand&&(o.has("toolsAutoExpand")||o.has("layer"))&&(this.open=!!((i=this.layer)!=null&&i.getVisible()))}render(){const o=vi(this.tools,this.layer),i=wi(this.tools,this.layer),r=o==null?void 0:o.length,n=i==null?void 0:i.length;return p`
      <style>
        ${x(this,Ue)}
        ${!this.unstyled&&x(this,Fe)}
      </style>
      ${V(r+n>0,()=>p`
          ${V(!(r===1&&n===0),()=>p`
              <details
                class="tools"
                .open=${wo(this.open)}
                @toggle=${a=>{this.open=a.target.open}}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${o}
                  .tabs=${i}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ye(i,a=>this._button(a,ee()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(ee())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}ke=new WeakSet,Ri=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail.jsonformValue,layer:o.detail.layer}}))},Ue=new WeakMap,Fe=new WeakMap,I(Li,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Li);const ra=e=>{const t=()=>{const o=Rn(e.layer,e.map,e.showLayerZoomState);let i=!1;!o&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,i=!0):o&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,i=!0),i&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};mi(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},na=(e,t)=>{const o=t.layer;if(o.setVisible(e.target.checked),t.toolsAutoExpand){const i=t.renderRoot.querySelector("eox-layercontrol-layer-tools");i&&(i.open=e.target.checked)}e.target.checked&&o.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(r=>{var n;if(r.layer!==o&&((n=r.layer)!=null&&n.get("layerControlExclusive"))){if(r.layer.setVisible(!1),r.toolsAutoExpand){const a=r.renderRoot.querySelector("eox-layercontrol-layer-tools");a&&(a.open=!1)}r.requestUpdate()}}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:o})),t.requestUpdate()};var ct,Mt,Ii,qe,je;class Oi extends lt{constructor(){super();C(this,ct);I(this,"currLayerVisibilityBasedOnZoom",!0);C(this,qe,"");C(this,je,`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;
      transform: translateX(.3rem);
    }
    eox-layercontrol-layer > nav > .action.visibility span::after {
      border-radius: 0.25rem !important;
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){ra(this)}render(){var d,c;const o=this.layer.getVisible(),i=o?"visible":"",r=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",n=R(this,ct,Mt).call(this,"layerControlDisable")?"disabled":"",a=R(this,ct,Mt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((d=vi(this.tools,this.layer))==null?void 0:d.length)>0,l=((c=wi(this.tools,this.layer))==null?void 0:c.length)>0,u=document.querySelector("eox-layercontrol-layer-tools");return u&&Object.assign(u,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),p`
      <style>
        ${x(this,qe)}
        ${!this.unstyled&&x(this,je)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${V(this.layer,()=>p`
          <!-- Render the layer -->
          <nav
            class="layer ${n} ${i} ${r} responsive tiny-space"
          >
            ${V(!this.unstyled,()=>{if(R(this,ct,Mt).call(this,"color"))return p`
                  <i class="small" style="color: ${R(this,ct,Mt).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return p` <i class="small"> </i> `;case"draw":return p`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return p`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return p`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return p` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${n}">
              <span class="layertitle truncate"
                >${R(this,ct,Mt).call(this,this.titleProperty)}</span
              >
            </div>

            ${V(l&&!this.toolsAutoExpand,()=>p`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const f=this.renderRoot.querySelector("eox-layercontrol-layer-tools");f.open=!f.open}}
                >
                  <i class="small">
                    ${ee()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${V(!l&&s,()=>this.tools[0]==="remove"?Si(this,ee()[this.tools[0]]):xi(this,ee()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${n} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${wo(o)}
                @click=${R(this,ct,Ii)}
                disabled=${n||Ct}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<span class="tooltip top" style="pointer-events: none">${o?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${V(l&&!u,()=>p`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ct=new WeakSet,Mt=function(o){var i;return(i=this.layer)==null?void 0:i.get(o)},Ii=function(o){na(o,this)},qe=new WeakMap,je=new WeakMap,I(Oi,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",Oi);var Ze,Xe;class Pi extends lt{constructor(){super();C(this,Ze,"");C(this,Xe,`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var r,n;const o=!!((r=this.group)!=null&&r.get("layerControlExpand")),i=(n=Ei(this.group.getLayers()))==null?void 0:n.length;return p`
      <style>
        ${x(this,Ze)}
        ${!this.unstyled&&x(this,Xe)}
      </style>
      ${V(this.group,()=>p`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${o||Ct}
            data-children-length=${i}
          >
            <summary class="square">
              ${V(i>0,()=>p`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                .toolsAutoExpand=${this.toolsAutoExpand}
                .colormapRegistry=${this.colormapRegistry}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${this.noShadow}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .toolsAutoExpand=${this.toolsAutoExpand}
              .colormapRegistry=${this.colormapRegistry}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}Ze=new WeakMap,Xe=new WeakMap,I(Pi,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Pi);const aa=e=>{const{layers:t,idProperty:o,titleProperty:i,renderRoot:r}=e,n=ar(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>n();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=r.querySelector("ul");Ln(t,o,i,e),Vn(s,t,o,e)}};var Ye,ze;class Hi extends lt{constructor(){super();C(this,Ye,"");C(this,ze,`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list.no-space {
      margin-block: var(--padding-inline) !important;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){aa(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.layers?Ei(this.layers).reverse():[];return p`
      <style>
        ${x(this,Ye)}
        ${!this.unstyled&&x(this,ze)}
      </style>
      <ul class="list no-space">
        ${V(this.layers,()=>p`
            ${Ji(o,i=>i,i=>p`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${qo(i,this.map)}"
                  class="square"
                >
                  ${i.getLayers?p`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${i}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:p`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${i}
                            .layerType=${qo(i,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Ye=new WeakMap,ze=new WeakMap,I(Hi,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Hi);const sa=e=>{const t=e.querySelector("select[name=optional]"),o=t?t.value:null,i=Vo(e.layers.getArray(),"layerControlOptional",!0).find(r=>(r.get(e.idProperty)||r.ol_uid)===o);i==null||i.set("layerControlOptional",!1),i==null||i.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(r=>r.requestUpdate()),e.requestUpdate()};var We,Bi;class Mi extends lt{constructor(){super();C(this,We);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=Vo(this.layers.getArray(),"layerControlOptional",!0);return p`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${o.map(i=>{const r=i.get(this.idProperty)||i.ol_uid,n=i.get(this.titleProperty),a=`layer ${i.get(this.idProperty)}`;return p` <option value="${r}">${n||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${R(this,We,Bi)}">Add</button>
      </nav>
    `}}We=new WeakSet,Bi=function(){sa(this)},I(Mi,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Mi);const la=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},Yo=e=>{const t=JSON.parse(`{"data":${oi(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(o=>{e.eoxMap.addOrUpdateLayer(o)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},ua=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function ca(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(Ao(t)==="XYZ")return{Name:t};try{const o=await Qr(t);e.wmsCapabilities=o}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const da=(e,t)=>{const{Name:o}=e,i=Ao(t.urlInput)||"XYZ",r={type:"Tile",properties:{id:o,title:o},source:{type:i,url:t.urlInput,params:{LAYERS:o}}};t.jsonInput=JSON.stringify(r)},ha=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var U,ki,Ui,xo,Fi,qi,xe,Ge;class Ni extends lt{constructor(){super();C(this,U);I(this,"urlInput",null);I(this,"jsonInput",null);I(this,"open",null);I(this,"searchLoad",!1);I(this,"wmsCapabilities",null);C(this,Ge,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o={add:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},i=this.open?"open":"close",r=this.open==="url",n=this.open==="json",a=!tn(this.urlInput)||this.searchLoad?!0:Ct;return p`
      <style>
        ${x(this,Ge)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${i}"
          >
            <a
              @click=${()=>R(this,U,xe).call(this,"url")}
              class="${r?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>R(this,U,xe).call(this,"json")}
              class="${n?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>R(this,U,xe).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":p`<i class="small primary-text">${o.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${i}" style="padding: 15px 0">
          ${r?p`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${R(this,U,ki)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${R(this,U,Ui)}
                  >
                    ${this.unstyled?"Search":p`<i class="small">${o.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?p`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return p`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>R(this,U,xo).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:Ct}
              `:p`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${R(this,U,qi)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${en(this.jsonInput)?Ct:!0}
                  @click=${R(this,U,Fi)}
                >
                  ${this.unstyled?"Add JSON":p`<i class="small">${o.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}U=new WeakSet,ki=function(o){ua(o,this)},Ui=async function(){const o=await ca(this);o&&R(this,U,xo).call(this,o)},xo=function(o){da(o,this),Yo(this)},Fi=function(){Yo(this)},qi=function(o){la(o,this)},xe=function(o){ha(o,this)},Ge=new WeakMap,I(Ni,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Ni);const pa=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const o=t.renderRoot.querySelector("eox-layercontrol-optional-list");o==null||o.requestUpdate()}},zo=e=>{const t=sr(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};ir();var $t,Ft,Zi,Xi,Je;class ji extends lt{constructor(){super();C(this,Ft);C(this,$t);C(this,Je,`
    ${Eo}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

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

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
    summary > * {
      pointer-events: all !important;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=zo(this)}updated(o){o.has("for")&&(this.eoxMap=zo(this))}get eoxMap(){return x(this,$t)}set eoxMap(o){const i=x(this,$t);ut(this,$t,o),this.requestUpdate("eoxMap",i)}render(){var r,n,a;const o=(r=this.map)==null?void 0:r.getLayers().getArray(),i=o&&((n=Vo(o,"layerControlOptional",!0))==null?void 0:n.length)>0;return p`
      <style>
        ${!this.unstyled&&x(this,Je)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${V(this.addExternalLayers&&((a=x(this,$t))==null?void 0:a.addOrUpdateLayer),()=>p`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${x(this,$t)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${V(this.map,()=>p`
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
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${R(this,Ft,Zi)}
            @datetime:updated=${s=>$i(s,this)}
            @layerConfig:change=${R(this,Ft,Xi)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${V(i,()=>p`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}$t=new WeakMap,Ft=new WeakSet,Zi=function(o){pa(o,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:o.detail}))},Xi=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:o.detail}))},Je=new WeakMap,I(ji,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",ji);export{ji as EOxLayerControl,Pn as updateVectorLayerStyle};
