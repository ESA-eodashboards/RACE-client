import{x as m,E as tt,T as jt,r as nt,i as Ze,b as ft,f as lr,u as cr}from"./lit-element-CWYiTkeG.js";import{e as Ti,i as _i,t as kt,n as H}from"./directive-CiXpmpUr.js";import{s as dr,a as Ai,_ as ur,c as hr,d as Nt}from"./radio.style-CS4qE4jq.js";import{f as pr,m as fr}from"./toolcool-range-slider.min-55OLyAA1.js";import{o as ue,a as gr}from"./unsafe-html-DlVJRlTN.js";import{aP as oe,ax as We,aQ as mr,aE as yr,c as br,aR as ai,aS as si,aT as vr,aG as wr,r as xr,a1 as li,a3 as Sr,m as Er,a4 as Cr,aU as $r,aV as Tr,$ as ci}from"./index-2WmxvTWX.js";import{s as Li,a as _r,l as Fe,i as Di,q as Ar,t as Lr,o as Dr,p as kr,f as Or}from"./sequential-CfWKNelG.js";import{g as Ue}from"./math-jhaqrn-c.js";import{L as di}from"./Group-Des9okiv.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=e=>e!==void 0,ki=(e,t,i)=>t in e?e[t]:e[t]=i;const Qt={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class Rr{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,i){return $e(t,i).join("")}}function $e(e,t){return Oi(e,t,[]).join("")}function Oi(e,t,i){if(e.nodeType===Qt.CDATA_SECTION||e.nodeType===Qt.TEXT)t?i.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(e.nodeValue);else{var r;for(r=e.firstChild;r;r=r.nextSibling)Oi(r,t,i)}return i}function Pr(e,t,i,r){for(var n=Mr(t);n;n=Ir(n)){var o=n.namespaceURI||null,a=e[o];if(E(a)){var s=a[n.localName];E(s)&&s.call(r,n,i)}}}function Mr(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==Qt.ELEMENT;)t=t.nextSibling;return t}function Ir(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==Qt.ELEMENT;)t=t.nextSibling;return t}function q(e,t,i){return Vr(e,t,i)}function Vr(e,t,i){var r=E(i)?i:{},n,o;for(n=0,o=e.length;n<o;++n)r[e[n]]=t;return r}function Ri(e,t){return function(i,r){var n=e.call(E(t)?t:this,i,r);if(E(n)){var o=r[r.length-1];o.push(n)}}}function z(e,t,i,r,n){return r.push(e),Pr(t,i,r,n),r.pop()}function f(e,t,i){return function(r,n){let o=e.call(E(i)?i:this,r,n);if(E(o)){var a=n[n.length-1],s=E(t)?t:r.localName;a[s]=o}}}function it(e,t,i){return function(r,n){var o=e.call(E(i)?i:this,r,n);if(E(o)){var a=n[n.length-1],s=E(t)?t:r.localName,l=ki(a,s,[]);l.push(o)}}}const Br=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Nr(e){return e.replace(Br,"")}function Rt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Vt(e){return wt($e(e,!1))}function wt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Ae(e){return ve($e(e,!1))}function ve(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function T(e){return Nr($e(e,!1))}const Hr="http://www.w3.org/1999/xlink";function Xe(e){return e.getAttributeNS(Hr,"href")}function Fr(e,t){return z({},gn,e,t)}function Pi(e){return[wt(e.getAttribute("minx")),wt(e.getAttribute("miny")),wt(e.getAttribute("maxx")),wt(e.getAttribute("maxy"))]}function Ur(e,t){const i=Pi(e),r=[wt(e.getAttribute("resx")),wt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:i,res:r}}function zr(e,t){const i=Pi(e);if(!(!E(i[0])||!E(i[1])||!E(i[2])||!E(i[3])))return i}function jr(e,t){const i=parseFloat(e.getAttribute("min")),r=parseFloat(e.getAttribute("max"));return{min:i,max:r}}function qr(e,t){const i=z({},mn,e,t);if(!E(i))return;const r=i.westBoundLongitude,n=i.southBoundLatitude,o=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!E(r)||!E(n)||!E(o)||!E(a)))return[r,n,o,a]}function Yr(e,t){return z({},cn,e,t)}function Zr(e,t){return z({},dn,e,t)}function Wr(e,t){return z({},un,e,t)}function Xr(e,t){return z({},hn,e,t)}function Gr(e,t){return z({},pn,e,t)}function Jr(e,t){return z([],fn,e,t)}function Kr(e,t){const i=Rt(e.getAttribute("queryable"));return z({queryable:E(i)?i:!1},Vi,e,t)}function Qr(e,t){var i=t[t.length-1];const r=z({},Vi,e,t);if(!E(r))return;let n=Rt(e.getAttribute("queryable"));E(n)||(n=i.queryable),r.queryable=E(n)?n:!1;let o=ve(e.getAttribute("cascaded"));E(o)||(o=i.cascaded),r.cascaded=o;let a=Rt(e.getAttribute("opaque"));E(a)||(a=i.opaque),r.opaque=E(a)?a:!1;let s=Rt(e.getAttribute("noSubsets"));E(s)||(s=i.noSubsets),r.noSubsets=E(s)?s:!1;let l=wt(e.getAttribute("fixedWidth"));E(l)||(l=i.fixedWidth),r.fixedWidth=l;let c=wt(e.getAttribute("fixedHeight"));E(c)||(c=i.fixedHeight),r.fixedHeight=c;const u=["Style","CRS","AuthorityURL"];for(let p=0,g=u.length;p<g;p++){const y=u[p],b=i[y];if(E(b)){let D=ki(r,y,[]);D=D.concat(b),r[y]=D}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,g=d.length;p<g;p++){const y=d[p],b=r[y];if(!E(b)){const D=i[y];r[y]=D}}return r}function tn(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Rt(e.getAttribute("multipleValues")),nearestValue:Rt(e.getAttribute("nearestValue")),current:Rt(e.getAttribute("current")),values:T(e)}}function St(e,t){return z({},Sn,e,t)}function en(e,t){return z({},yn,e,t)}function rn(e,t){return z({},vn,e,t)}function nn(e,t){return z({},wn,e,t)}function Le(e,t){return z({},bn,e,t)}function Mi(e,t){var i=St(e,t);if(E(i)){const r=[ve(e.getAttribute("width")),ve(e.getAttribute("height"))];return i.size=r,i}}function on(e,t){var i=St(e,t);if(E(i))return i.name=e.getAttribute("name"),i}function an(e,t){var i=St(e,t);if(E(i))return i.type=e.getAttribute("type"),i}function sn(e,t){return z({},xn,e,t)}function Ii(e,t){return z([],En,e,t)}const Y=[null,"http://www.opengis.net/wms"],ln=q(Y,{Service:f(Zr),Capability:f(Yr)}),cn=q(Y,{Request:f(en),Exception:f(Jr),Layer:f(Kr)}),dn=q(Y,{Name:f(T),Title:f(T),Abstract:f(T),KeywordList:f(Ii),OnlineResource:f(Xe),ContactInformation:f(Wr),Fees:f(T),AccessConstraints:f(T),LayerLimit:f(Ae),MaxWidth:f(Ae),MaxHeight:f(Ae)}),un=q(Y,{ContactPersonPrimary:f(Xr),ContactPosition:f(T),ContactAddress:f(Gr),ContactVoiceTelephone:f(T),ContactFacsimileTelephone:f(T),ContactElectronicMailAddress:f(T)}),hn=q(Y,{ContactPerson:f(T),ContactOrganization:f(T)}),pn=q(Y,{AddressType:f(T),Address:f(T),City:f(T),StateOrProvince:f(T),PostCode:f(T),Country:f(T)}),fn=q(Y,{Format:Ri(T)}),Vi=q(Y,{Name:f(T),Title:f(T),Abstract:f(T),KeywordList:f(Ii),CRS:it(T),SRS:it(T),EX_GeographicBoundingBox:f(qr),LatLonBoundingBox:f(zr),BoundingBox:it(Ur),Dimension:it(tn),Attribution:f(Fr),AuthorityURL:it(on),Identifier:it(T),MetadataURL:it(an),DataURL:it(St),FeatureListURL:it(St),Style:it(sn),MinScaleDenominator:f(Vt),MaxScaleDenominator:f(Vt),ScaleHint:f(jr),Layer:it(Qr)}),gn=q(Y,{Title:f(T),OnlineResource:f(Xe),LogoURL:f(Mi)}),mn=q(Y,{westBoundLongitude:f(Vt),eastBoundLongitude:f(Vt),southBoundLatitude:f(Vt),northBoundLatitude:f(Vt)}),yn=q(Y,{GetCapabilities:f(Le),GetMap:f(Le),GetFeatureInfo:f(Le)}),bn=q(Y,{Format:it(T),DCPType:it(rn)}),vn=q(Y,{HTTP:f(nn)}),wn=q(Y,{Get:f(St),Post:f(St)}),xn=q(Y,{Name:f(T),Title:f(T),Abstract:f(T),LegendURL:it(Mi),StyleSheetURL:f(St),StyleURL:f(St)}),Sn=q(Y,{Format:f(T),OnlineResource:f(Xe)}),En=q(Y,{Keyword:Ri(T)});class Cn{constructor(t,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new Rr(i),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let i=t.firstChild;i;i=i.nextSibling)if(i.nodeType==Qt.ELEMENT)return this.readFromNode(i);return null}readFromNode(t){return this.version=t.getAttribute("version"),z({version:this.version},ln,t,[])||null}}async function $n(e){let t=new URL(e),i=t.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let r=t.toString();const n=await fetch(r);if(n.ok){const o=await n.text();return new Cn(o).toJSON()}else throw new Error(`Error: ${n.status}`)}function Ge(e){const t=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":i.test(e)?"XYZ":!1}function Tn(e){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),r=Ge(e);return!!(e&&i&&r)}function Bi(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function _n(e){try{return JSON.parse(Bi(e)),!!e}catch{return!1}}function An(e,t){const i=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):i.set(a,s)});const r=e.split("?")[0],n=i.toString();return`${r}?${n}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ui(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,r)}return i}function bt(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ui(Object(i),!0).forEach(function(r){Ln(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ui(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function he(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?he=function(t){return typeof t}:he=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function Ln(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Et(){return Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Et.apply(this,arguments)}function Dn(e,t){if(e==null)return{};var i={},r=Object.keys(e),n,o;for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}function kn(e,t){if(e==null)return{};var i=Dn(e,t),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var On="1.15.6";function xt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var Ct=xt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),te=xt(/Edge/i),hi=xt(/firefox/i),Wt=xt(/safari/i)&&!xt(/chrome/i)&&!xt(/android/i),Je=xt(/iP(ad|od|hone)/i),Ni=xt(/chrome/i)&&xt(/android/i),Hi={capture:!1,passive:!1};function $(e,t,i){e.addEventListener(t,i,!Ct&&Hi)}function C(e,t,i){e.removeEventListener(t,i,!Ct&&Hi)}function we(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function Fi(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function pt(e,t,i,r){if(e){i=i||document;do{if(t!=null&&(t[0]===">"?e.parentNode===i&&we(e,t):we(e,t))||r&&e===i)return e;if(e===i)break}while(e=Fi(e))}return null}var pi=/\s+/g;function at(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(pi," ").replace(" "+t+" "," ");e.className=(r+(i?" "+t:"")).replace(pi," ")}}function v(e,t,i){var r=e&&e.style;if(r){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),t===void 0?i:i[t];!(t in r)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),r[t]=i+(typeof i=="string"?"":"px")}}function Ht(e,t){var i="";if(typeof e=="string")i=e;else do{var r=v(e,"transform");r&&r!=="none"&&(i=r+" "+i)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(i)}function Ui(e,t,i){if(e){var r=e.getElementsByTagName(t),n=0,o=r.length;if(i)for(;n<o;n++)i(r[n],n);return r}return[]}function yt(){var e=document.scrollingElement;return e||document.documentElement}function B(e,t,i,r,n){if(!(!e.getBoundingClientRect&&e!==window)){var o,a,s,l,c,u,d;if(e!==window&&e.parentNode&&e!==yt()?(o=e.getBoundingClientRect(),a=o.top,s=o.left,l=o.bottom,c=o.right,u=o.height,d=o.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||i)&&e!==window&&(n=n||e.parentNode,!Ct))do if(n&&n.getBoundingClientRect&&(v(n,"transform")!=="none"||i&&v(n,"position")!=="static")){var p=n.getBoundingClientRect();a-=p.top+parseInt(v(n,"border-top-width")),s-=p.left+parseInt(v(n,"border-left-width")),l=a+o.height,c=s+o.width;break}while(n=n.parentNode);if(r&&e!==window){var g=Ht(n||e),y=g&&g.a,b=g&&g.d;g&&(a/=b,s/=y,d/=y,u/=b,l=a+u,c=s+d)}return{top:a,left:s,bottom:l,right:c,width:d,height:u}}}function fi(e,t,i){for(var r=At(e,!0),n=B(e)[t];r;){var o=B(r)[i],a=void 0;if(a=n>=o,!a)return r;if(r===yt())break;r=At(r,!1)}return!1}function Ft(e,t,i,r){for(var n=0,o=0,a=e.children;o<a.length;){if(a[o].style.display!=="none"&&a[o]!==w.ghost&&(r||a[o]!==w.dragged)&&pt(a[o],i.draggable,e,!1)){if(n===t)return a[o];n++}o++}return null}function Ke(e,t){for(var i=e.lastElementChild;i&&(i===w.ghost||v(i,"display")==="none"||t&&!we(i,t));)i=i.previousElementSibling;return i||null}function ct(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==w.clone&&(!t||we(e,t))&&i++;return i}function gi(e){var t=0,i=0,r=yt();if(e)do{var n=Ht(e),o=n.a,a=n.d;t+=e.scrollLeft*o,i+=e.scrollTop*a}while(e!==r&&(e=e.parentNode));return[t,i]}function Rn(e,t){for(var i in e)if(e.hasOwnProperty(i)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===e[i][r])return Number(i)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return yt();var i=e,r=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var n=v(i);if(i.clientWidth<i.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return yt();if(r||t)return i;r=!0}}while(i=i.parentNode);return yt()}function Pn(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function De(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Xt;function zi(e,t){return function(){if(!Xt){var i=arguments,r=this;i.length===1?e.call(r,i[0]):e.apply(r,i),Xt=setTimeout(function(){Xt=void 0},t)}}}function Mn(){clearTimeout(Xt),Xt=void 0}function ji(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function qi(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function Yi(e,t,i){var r={};return Array.from(e.children).forEach(function(n){var o,a,s,l;if(!(!pt(n,t.draggable,e,!1)||n.animated||n===i)){var c=B(n);r.left=Math.min((o=r.left)!==null&&o!==void 0?o:1/0,c.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,c.top),r.right=Math.max((s=r.right)!==null&&s!==void 0?s:-1/0,c.right),r.bottom=Math.max((l=r.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var rt="Sortable"+new Date().getTime();function In(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(v(n,"display")==="none"||n===w.ghost)){e.push({target:n,rect:B(n)});var o=bt({},e[e.length-1].rect);if(n.thisAnimationDuration){var a=Ht(n,!0);a&&(o.top-=a.f,o.left-=a.e)}n.fromRect=o}})}},addAnimationState:function(r){e.push(r)},removeAnimationState:function(r){e.splice(Rn(e,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(t),typeof r=="function"&&r();return}var o=!1,a=0;e.forEach(function(s){var l=0,c=s.target,u=c.fromRect,d=B(c),p=c.prevFromRect,g=c.prevToRect,y=s.rect,b=Ht(c,!0);b&&(d.top-=b.f,d.left-=b.e),c.toRect=d,c.thisAnimationDuration&&De(p,d)&&!De(u,d)&&(y.top-d.top)/(y.left-d.left)===(u.top-d.top)/(u.left-d.left)&&(l=Bn(y,p,g,n.options)),De(d,u)||(c.prevFromRect=u,c.prevToRect=d,l||(l=n.options.animation),n.animate(c,y,d,l)),l&&(o=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(t),o?t=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),e=[]},animate:function(r,n,o,a){if(a){v(r,"transition",""),v(r,"transform","");var s=Ht(this.el),l=s&&s.a,c=s&&s.d,u=(n.left-o.left)/(l||1),d=(n.top-o.top)/(c||1);r.animatingX=!!u,r.animatingY=!!d,v(r,"transform","translate3d("+u+"px,"+d+"px,0)"),this.forRepaintDummy=Vn(r),v(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),v(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){v(r,"transition",""),v(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function Vn(e){return e.offsetWidth}function Bn(e,t,i,r){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*r.animation}var Pt=[],ke={initializeByDefault:!0},ee={mount:function(t){for(var i in ke)ke.hasOwnProperty(i)&&!(i in t)&&(t[i]=ke[i]);Pt.forEach(function(r){if(r.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Pt.push(t)},pluginEvent:function(t,i,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var o=t+"Global";Pt.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][o]&&i[a.pluginName][o](bt({sortable:i},r)),i.options[a.pluginName]&&i[a.pluginName][t]&&i[a.pluginName][t](bt({sortable:i},r)))})},initializePlugins:function(t,i,r,n){Pt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var c=new s(t,i,t.options);c.sortable=t,c.options=t.options,t[l]=c,Et(r,c.defaults)}});for(var o in t.options)if(t.options.hasOwnProperty(o)){var a=this.modifyOption(t,o,t.options[o]);typeof a<"u"&&(t.options[o]=a)}},getEventProperties:function(t,i){var r={};return Pt.forEach(function(n){typeof n.eventProperties=="function"&&Et(r,n.eventProperties.call(i[n.pluginName],t))}),r},modifyOption:function(t,i,r){var n;return Pt.forEach(function(o){t[o.pluginName]&&o.optionListeners&&typeof o.optionListeners[i]=="function"&&(n=o.optionListeners[i].call(t[o.pluginName],r))}),n}};function Nn(e){var t=e.sortable,i=e.rootEl,r=e.name,n=e.targetEl,o=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,u=e.oldDraggableIndex,d=e.newDraggableIndex,p=e.originalEvent,g=e.putSortable,y=e.extraEventProperties;if(t=t||i&&i[rt],!!t){var b,D=t.options,X="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!Ct&&!te?b=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(b=document.createEvent("Event"),b.initEvent(r,!0,!0)),b.to=a||i,b.from=s||i,b.item=n||i,b.clone=o,b.oldIndex=l,b.newIndex=c,b.oldDraggableIndex=u,b.newDraggableIndex=d,b.originalEvent=p,b.pullMode=g?g.lastPutMode:void 0;var k=bt(bt({},y),ee.getEventProperties(r,t));for(var U in k)b[U]=k[U];i&&i.dispatchEvent(b),D[X]&&D[X].call(t,b)}}var Hn=["evt"],et=function(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,o=kn(r,Hn);ee.pluginEvent.bind(w)(t,i,bt({dragEl:h,parentEl:R,ghostEl:S,rootEl:L,nextEl:Ot,lastDownEl:pe,cloneEl:O,cloneHidden:_t,dragStarted:qt,putSortable:j,activeSortable:w.active,originalEvent:n,oldIndex:Bt,oldDraggableIndex:Gt,newIndex:st,newDraggableIndex:Tt,hideGhostForTarget:Gi,unhideGhostForTarget:Ji,cloneNowHidden:function(){_t=!0},cloneNowShown:function(){_t=!1},dispatchSortableEvent:function(s){Q({sortable:i,name:s,originalEvent:n})}},o))};function Q(e){Nn(bt({putSortable:j,cloneEl:O,targetEl:h,rootEl:L,oldIndex:Bt,oldDraggableIndex:Gt,newIndex:st,newDraggableIndex:Tt},e))}var h,R,S,L,Ot,pe,O,_t,Bt,st,Gt,Tt,ae,j,It=!1,xe=!1,Se=[],Lt,ht,Oe,Re,mi,yi,qt,Mt,Jt,Kt=!1,se=!1,fe,W,Pe=[],ze=!1,Ee=[],Te=typeof document<"u",le=Je,bi=te||Ct?"cssFloat":"float",Fn=Te&&!Ni&&!Je&&"draggable"in document.createElement("div"),Zi=function(){if(Te){if(Ct)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),Wi=function(t,i){var r=v(t),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),o=Ft(t,0,i),a=Ft(t,1,i),s=o&&v(o),l=a&&v(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+B(o).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+B(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(o&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return o&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=n&&r[bi]==="none"||a&&r[bi]==="none"&&c+u>n)?"vertical":"horizontal"},Un=function(t,i,r){var n=r?t.left:t.top,o=r?t.right:t.bottom,a=r?t.width:t.height,s=r?i.left:i.top,l=r?i.right:i.bottom,c=r?i.width:i.height;return n===s||o===l||n+a/2===s+c/2},zn=function(t,i){var r;return Se.some(function(n){var o=n[rt].options.emptyInsertThreshold;if(!(!o||Ke(n))){var a=B(n),s=t>=a.left-o&&t<=a.right+o,l=i>=a.top-o&&i<=a.bottom+o;if(s&&l)return r=n}}),r},Xi=function(t){function i(o,a){return function(s,l,c,u){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(o==null&&(a||d))return!0;if(o==null||o===!1)return!1;if(a&&o==="clone")return o;if(typeof o=="function")return i(o(s,l,c,u),a)(s,l,c,u);var p=(a?s:l).options.group.name;return o===!0||typeof o=="string"&&o===p||o.join&&o.indexOf(p)>-1}}var r={},n=t.group;(!n||he(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=i(n.pull,!0),r.checkPut=i(n.put),r.revertClone=n.revertClone,t.group=r},Gi=function(){!Zi&&S&&v(S,"display","none")},Ji=function(){!Zi&&S&&v(S,"display","")};Te&&!Ni&&document.addEventListener("click",function(e){if(xe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),xe=!1,!1},!0);var Dt=function(t){if(h){t=t.touches?t.touches[0]:t;var i=zn(t.clientX,t.clientY);if(i){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);r.target=r.rootEl=i,r.preventDefault=void 0,r.stopPropagation=void 0,i[rt]._onDragOver(r)}}},jn=function(t){h&&h.parentNode[rt]._isOutsideThisEl(t.target)};function w(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=Et({},t),e[rt]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Wi(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:w.supportPointer!==!1&&"PointerEvent"in window&&(!Wt||Je),emptyInsertThreshold:5};ee.initializePlugins(this,e,i);for(var r in i)!(r in t)&&(t[r]=i[r]);Xi(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:Fn,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?$(e,"pointerdown",this._onTapStart):($(e,"mousedown",this._onTapStart),$(e,"touchstart",this._onTapStart)),this.nativeDraggable&&($(e,"dragover",this),$(e,"dragenter",this)),Se.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Et(this,In())}w.prototype={constructor:w,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Mt=null)},_getDirection:function(t,i){return typeof this.options.direction=="function"?this.options.direction.call(this,t,i,h):this.options.direction},_onTapStart:function(t){if(t.cancelable){var i=this,r=this.el,n=this.options,o=n.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,u=n.filter;if(Kn(r),!h&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||n.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Wt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=pt(l,n.draggable,r,!1),!(l&&l.animated)&&pe!==l)){if(Bt=ct(l),Gt=ct(l,n.draggable),typeof u=="function"){if(u.call(this,t,l,this)){Q({sortable:i,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),et("filter",i,{evt:t}),o&&t.preventDefault();return}}else if(u&&(u=u.split(",").some(function(d){if(d=pt(c,d.trim(),r,!1),d)return Q({sortable:i,rootEl:d,name:"filter",targetEl:l,fromEl:r,toEl:r}),et("filter",i,{evt:t}),!0}),u)){o&&t.preventDefault();return}n.handle&&!pt(c,n.handle,r,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,i,r){var n=this,o=n.el,a=n.options,s=o.ownerDocument,l;if(r&&!h&&r.parentNode===o){var c=B(r);if(L=o,h=r,R=h.parentNode,Ot=h.nextSibling,pe=r,ae=a.group,w.dragged=h,Lt={target:h,clientX:(i||t).clientX,clientY:(i||t).clientY},mi=Lt.clientX-c.left,yi=Lt.clientY-c.top,this._lastX=(i||t).clientX,this._lastY=(i||t).clientY,h.style["will-change"]="all",l=function(){if(et("delayEnded",n,{evt:t}),w.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!hi&&n.nativeDraggable&&(h.draggable=!0),n._triggerDragStart(t,i),Q({sortable:n,name:"choose",originalEvent:t}),at(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(u){Ui(h,u.trim(),Me)}),$(s,"dragover",Dt),$(s,"mousemove",Dt),$(s,"touchmove",Dt),a.supportPointer?($(s,"pointerup",n._onDrop),!this.nativeDraggable&&$(s,"pointercancel",n._onDrop)):($(s,"mouseup",n._onDrop),$(s,"touchend",n._onDrop),$(s,"touchcancel",n._onDrop)),hi&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),et("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(te||Ct))){if(w.eventCanceled){this._onDrop();return}a.supportPointer?($(s,"pointerup",n._disableDelayedDrag),$(s,"pointercancel",n._disableDelayedDrag)):($(s,"mouseup",n._disableDelayedDrag),$(s,"touchend",n._disableDelayedDrag),$(s,"touchcancel",n._disableDelayedDrag)),$(s,"mousemove",n._delayedDragTouchMoveHandler),$(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&$(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var i=t.touches?t.touches[0]:t;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&Me(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._disableDelayedDrag),C(t,"touchend",this._disableDelayedDrag),C(t,"touchcancel",this._disableDelayedDrag),C(t,"pointerup",this._disableDelayedDrag),C(t,"pointercancel",this._disableDelayedDrag),C(t,"mousemove",this._delayedDragTouchMoveHandler),C(t,"touchmove",this._delayedDragTouchMoveHandler),C(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,i){i=i||t.pointerType=="touch"&&t,!this.nativeDraggable||i?this.options.supportPointer?$(document,"pointermove",this._onTouchMove):i?$(document,"touchmove",this._onTouchMove):$(document,"mousemove",this._onTouchMove):($(h,"dragend",this),$(L,"dragstart",this._onDragStart));try{document.selection?ge(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,i){if(It=!1,L&&h){et("dragStarted",this,{evt:i}),this.nativeDraggable&&$(document,"dragover",jn);var r=this.options;!t&&at(h,r.dragClass,!1),at(h,r.ghostClass,!0),w.active=this,t&&this._appendGhost(),Q({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if(ht){this._lastX=ht.clientX,this._lastY=ht.clientY,Gi();for(var t=document.elementFromPoint(ht.clientX,ht.clientY),i=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ht.clientX,ht.clientY),t!==i);)i=t;if(h.parentNode[rt]._isOutsideThisEl(t),i)do{if(i[rt]){var r=void 0;if(r=i[rt]._onDragOver({clientX:ht.clientX,clientY:ht.clientY,target:t,rootEl:i}),r&&!this.options.dragoverBubble)break}t=i}while(i=Fi(i));Ji()}},_onTouchMove:function(t){if(Lt){var i=this.options,r=i.fallbackTolerance,n=i.fallbackOffset,o=t.touches?t.touches[0]:t,a=S&&Ht(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,c=le&&W&&gi(W),u=(o.clientX-Lt.clientX+n.x)/(s||1)+(c?c[0]-Pe[0]:0)/(s||1),d=(o.clientY-Lt.clientY+n.y)/(l||1)+(c?c[1]-Pe[1]:0)/(l||1);if(!w.active&&!It){if(r&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<r)return;this._onDragStart(t,!0)}if(S){a?(a.e+=u-(Oe||0),a.f+=d-(Re||0)):a={a:1,b:0,c:0,d:1,e:u,f:d};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");v(S,"webkitTransform",p),v(S,"mozTransform",p),v(S,"msTransform",p),v(S,"transform",p),Oe=u,Re=d,ht=o}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:L,i=B(h,!0,le,!0,t),r=this.options;if(le){for(W=t;v(W,"position")==="static"&&v(W,"transform")==="none"&&W!==document;)W=W.parentNode;W!==document.body&&W!==document.documentElement?(W===document&&(W=yt()),i.top+=W.scrollTop,i.left+=W.scrollLeft):W=yt(),Pe=gi(W)}S=h.cloneNode(!0),at(S,r.ghostClass,!1),at(S,r.fallbackClass,!0),at(S,r.dragClass,!0),v(S,"transition",""),v(S,"transform",""),v(S,"box-sizing","border-box"),v(S,"margin",0),v(S,"top",i.top),v(S,"left",i.left),v(S,"width",i.width),v(S,"height",i.height),v(S,"opacity","0.8"),v(S,"position",le?"absolute":"fixed"),v(S,"zIndex","100000"),v(S,"pointerEvents","none"),w.ghost=S,t.appendChild(S),v(S,"transform-origin",mi/parseInt(S.style.width)*100+"% "+yi/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,i){var r=this,n=t.dataTransfer,o=r.options;if(et("dragStart",this,{evt:t}),w.eventCanceled){this._onDrop();return}et("setupClone",this),w.eventCanceled||(O=qi(h),O.removeAttribute("id"),O.draggable=!1,O.style["will-change"]="",this._hideClone(),at(O,this.options.chosenClass,!1),w.clone=O),r.cloneId=ge(function(){et("clone",r),!w.eventCanceled&&(r.options.removeCloneOnHide||L.insertBefore(O,h),r._hideClone(),Q({sortable:r,name:"clone"}))}),!i&&at(h,o.dragClass,!0),i?(xe=!0,r._loopId=setInterval(r._emulateDragOver,50)):(C(document,"mouseup",r._onDrop),C(document,"touchend",r._onDrop),C(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",o.setData&&o.setData.call(r,n,h)),$(document,"drop",r),v(h,"transform","translateZ(0)")),It=!0,r._dragStartId=ge(r._dragStarted.bind(r,i,t)),$(document,"selectstart",r),qt=!0,window.getSelection().removeAllRanges(),Wt&&v(document.body,"user-select","none")},_onDragOver:function(t){var i=this.el,r=t.target,n,o,a,s=this.options,l=s.group,c=w.active,u=ae===l,d=s.sort,p=j||c,g,y=this,b=!1;if(ze)return;function D(vt,Ut){et(vt,y,bt({evt:t,isOwner:u,axis:g?"vertical":"horizontal",revert:a,dragRect:n,targetRect:o,canSort:d,fromSortable:p,target:r,completed:k,onMove:function(ie,re){return ce(L,i,h,n,ie,B(ie),t,re)},changed:U},Ut))}function X(){D("dragOverAnimationCapture"),y.captureAnimationState(),y!==p&&p.captureAnimationState()}function k(vt){return D("dragOverCompleted",{insertion:vt}),vt&&(u?c._hideClone():c._showClone(y),y!==p&&(at(h,j?j.options.ghostClass:c.options.ghostClass,!1),at(h,s.ghostClass,!0)),j!==y&&y!==w.active?j=y:y===w.active&&j&&(j=null),p===y&&(y._ignoreWhileAnimating=r),y.animateAll(function(){D("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(r===h&&!h.animated||r===i&&!r.animated)&&(Mt=null),!s.dragoverBubble&&!t.rootEl&&r!==document&&(h.parentNode[rt]._isOutsideThisEl(t.target),!vt&&Dt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),b=!0}function U(){st=ct(h),Tt=ct(h,s.draggable),Q({sortable:y,name:"change",toEl:i,newIndex:st,newDraggableIndex:Tt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),r=pt(r,s.draggable,i,!0),D("dragOver"),w.eventCanceled)return b;if(h.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||y._ignoreWhileAnimating===r)return k(!1);if(xe=!1,c&&!s.disabled&&(u?d||(a=R!==L):j===this||(this.lastPutMode=ae.checkPull(this,c,h,t))&&l.checkPut(this,c,h,t))){if(g=this._getDirection(t,r)==="vertical",n=B(h),D("dragOverValid"),w.eventCanceled)return b;if(a)return R=L,X(),this._hideClone(),D("revert"),w.eventCanceled||(Ot?L.insertBefore(h,Ot):L.appendChild(h)),k(!0);var G=Ke(i,s.draggable);if(!G||Wn(t,g,this)&&!G.animated){if(G===h)return k(!1);if(G&&i===t.target&&(r=G),r&&(o=B(r)),ce(L,i,h,n,r,o,t,!!r)!==!1)return X(),G&&G.nextSibling?i.insertBefore(h,G.nextSibling):i.appendChild(h),R=i,U(),k(!0)}else if(G&&Zn(t,g,this)){var gt=Ft(i,0,s,!0);if(gt===h)return k(!1);if(r=gt,o=B(r),ce(L,i,h,n,r,o,t,!1)!==!1)return X(),i.insertBefore(h,gt),R=i,U(),k(!0)}else if(r.parentNode===i){o=B(r);var x=0,_,P=h.parentNode!==i,A=!Un(h.animated&&h.toRect||n,r.animated&&r.toRect||o,g),J=g?"top":"left",ot=fi(r,"top","top")||fi(h,"top","top"),lt=ot?ot.scrollTop:void 0;Mt!==r&&(_=o[J],Kt=!1,se=!A&&s.invertSwap||P),x=Xn(t,r,o,g,A?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,se,Mt===r);var M;if(x!==0){var K=ct(h);do K-=x,M=R.children[K];while(M&&(v(M,"display")==="none"||M===S))}if(x===0||M===r)return k(!1);Mt=r,Jt=x;var dt=r.nextElementSibling,ut=!1;ut=x===1;var mt=ce(L,i,h,n,r,o,t,ut);if(mt!==!1)return(mt===1||mt===-1)&&(ut=mt===1),ze=!0,setTimeout(Yn,30),X(),ut&&!dt?i.appendChild(h):r.parentNode.insertBefore(h,ut?dt:r),ot&&ji(ot,0,lt-ot.scrollTop),R=h.parentNode,_!==void 0&&!se&&(fe=Math.abs(_-B(r)[J])),U(),k(!0)}if(i.contains(h))return k(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){C(document,"mousemove",this._onTouchMove),C(document,"touchmove",this._onTouchMove),C(document,"pointermove",this._onTouchMove),C(document,"dragover",Dt),C(document,"mousemove",Dt),C(document,"touchmove",Dt)},_offUpEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._onDrop),C(t,"touchend",this._onDrop),C(t,"pointerup",this._onDrop),C(t,"pointercancel",this._onDrop),C(t,"touchcancel",this._onDrop),C(document,"selectstart",this)},_onDrop:function(t){var i=this.el,r=this.options;if(st=ct(h),Tt=ct(h,r.draggable),et("drop",this,{evt:t}),R=h&&h.parentNode,st=ct(h),Tt=ct(h,r.draggable),w.eventCanceled){this._nulling();return}It=!1,se=!1,Kt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),je(this.cloneId),je(this._dragStartId),this.nativeDraggable&&(C(document,"drop",this),C(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Wt&&v(document.body,"user-select",""),v(h,"transform",""),t&&(qt&&(t.cancelable&&t.preventDefault(),!r.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(L===R||j&&j.lastPutMode!=="clone")&&O&&O.parentNode&&O.parentNode.removeChild(O),h&&(this.nativeDraggable&&C(h,"dragend",this),Me(h),h.style["will-change"]="",qt&&!It&&at(h,j?j.options.ghostClass:this.options.ghostClass,!1),at(h,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:R,newIndex:null,newDraggableIndex:null,originalEvent:t}),L!==R?(st>=0&&(Q({rootEl:R,name:"add",toEl:R,fromEl:L,originalEvent:t}),Q({sortable:this,name:"remove",toEl:R,originalEvent:t}),Q({rootEl:R,name:"sort",toEl:R,fromEl:L,originalEvent:t}),Q({sortable:this,name:"sort",toEl:R,originalEvent:t})),j&&j.save()):st!==Bt&&st>=0&&(Q({sortable:this,name:"update",toEl:R,originalEvent:t}),Q({sortable:this,name:"sort",toEl:R,originalEvent:t})),w.active&&((st==null||st===-1)&&(st=Bt,Tt=Gt),Q({sortable:this,name:"end",toEl:R,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){et("nulling",this),L=h=R=S=Ot=O=pe=_t=Lt=ht=qt=st=Tt=Bt=Gt=Mt=Jt=j=ae=w.dragged=w.ghost=w.clone=w.active=null,Ee.forEach(function(t){t.checked=!0}),Ee.length=Oe=Re=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":h&&(this._onDragOver(t),qn(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],i,r=this.el.children,n=0,o=r.length,a=this.options;n<o;n++)i=r[n],pt(i,a.draggable,this.el,!1)&&t.push(i.getAttribute(a.dataIdAttr)||Jn(i));return t},sort:function(t,i){var r={},n=this.el;this.toArray().forEach(function(o,a){var s=n.children[a];pt(s,this.options.draggable,n,!1)&&(r[o]=s)},this),i&&this.captureAnimationState(),t.forEach(function(o){r[o]&&(n.removeChild(r[o]),n.appendChild(r[o]))}),i&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,i){return pt(t,i||this.options.draggable,this.el,!1)},option:function(t,i){var r=this.options;if(i===void 0)return r[t];var n=ee.modifyOption(this,t,i);typeof n<"u"?r[t]=n:r[t]=i,t==="group"&&Xi(r)},destroy:function(){et("destroy",this);var t=this.el;t[rt]=null,C(t,"mousedown",this._onTapStart),C(t,"touchstart",this._onTapStart),C(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(C(t,"dragover",this),C(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Se.splice(Se.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!_t){if(et("hideClone",this),w.eventCanceled)return;v(O,"display","none"),this.options.removeCloneOnHide&&O.parentNode&&O.parentNode.removeChild(O),_t=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(_t){if(et("showClone",this),w.eventCanceled)return;h.parentNode==L&&!this.options.group.revertClone?L.insertBefore(O,h):Ot?L.insertBefore(O,Ot):L.appendChild(O),this.options.group.revertClone&&this.animate(h,O),v(O,"display",""),_t=!1}}};function qn(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ce(e,t,i,r,n,o,a,s){var l,c=e[rt],u=c.options.onMove,d;return window.CustomEvent&&!Ct&&!te?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=i,l.draggedRect=r,l.related=n||t,l.relatedRect=o||B(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),u&&(d=u.call(c,l,a)),d}function Me(e){e.draggable=!1}function Yn(){ze=!1}function Zn(e,t,i){var r=B(Ft(i.el,0,i.options,!0)),n=Yi(i.el,i.options,S),o=10;return t?e.clientX<n.left-o||e.clientY<r.top&&e.clientX<r.right:e.clientY<n.top-o||e.clientY<r.bottom&&e.clientX<r.left}function Wn(e,t,i){var r=B(Ke(i.el,i.options.draggable)),n=Yi(i.el,i.options,S),o=10;return t?e.clientX>n.right+o||e.clientY>r.bottom&&e.clientX>r.left:e.clientY>n.bottom+o||e.clientX>r.right&&e.clientY>r.top}function Xn(e,t,i,r,n,o,a,s){var l=r?e.clientY:e.clientX,c=r?i.height:i.width,u=r?i.top:i.left,d=r?i.bottom:i.right,p=!1;if(!a){if(s&&fe<c*n){if(!Kt&&(Jt===1?l>u+c*o/2:l<d-c*o/2)&&(Kt=!0),Kt)p=!0;else if(Jt===1?l<u+fe:l>d-fe)return-Jt}else if(l>u+c*(1-n)/2&&l<d-c*(1-n)/2)return Gn(t)}return p=p||a,p&&(l<u+c*o/2||l>d-c*o/2)?l>u+c/2?1:-1:0}function Gn(e){return ct(h)<ct(e)?1:-1}function Jn(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,r=0;i--;)r+=t.charCodeAt(i);return r.toString(36)}function Kn(e){Ee.length=0;for(var t=e.getElementsByTagName("input"),i=t.length;i--;){var r=t[i];r.checked&&Ee.push(r)}}function ge(e){return setTimeout(e,0)}function je(e){return clearTimeout(e)}Te&&$(document,"touchmove",function(e){(w.active||It)&&e.cancelable&&e.preventDefault()});w.utils={on:$,off:C,css:v,find:Ui,is:function(t,i){return!!pt(t,i,t,!1)},extend:Pn,throttle:zi,closest:pt,toggleClass:at,clone:qi,index:ct,nextTick:ge,cancelNextTick:je,detectDirection:Wi,getChild:Ft,expando:rt};w.get=function(e){return e[rt]};w.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(w.utils=bt(bt({},w.utils),r.utils)),ee.mount(r)})};w.create=function(e,t){return new w(e,t)};w.version=On;var V=[],Yt,qe,Ye=!1,Ie,Ve,Ce,Zt;function Qn(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(i){var r=i.originalEvent;this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):this.options.supportPointer?$(document,"pointermove",this._handleFallbackAutoScroll):r.touches?$(document,"touchmove",this._handleFallbackAutoScroll):$(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var r=i.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):(C(document,"pointermove",this._handleFallbackAutoScroll),C(document,"touchmove",this._handleFallbackAutoScroll),C(document,"mousemove",this._handleFallbackAutoScroll)),vi(),me(),Mn()},nulling:function(){Ce=qe=Yt=Ye=Zt=Ie=Ve=null,V.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,r){var n=this,o=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(o,a);if(Ce=i,r||this.options.forceAutoScrollFallback||te||Ct||Wt){Be(i,this.options,s,r);var l=At(s,!0);Ye&&(!Zt||o!==Ie||a!==Ve)&&(Zt&&vi(),Zt=setInterval(function(){var c=At(document.elementFromPoint(o,a),!0);c!==l&&(l=c,me()),Be(i,n.options,c,r)},10),Ie=o,Ve=a)}else{if(!this.options.bubbleScroll||At(s,!0)===yt()){me();return}Be(i,this.options,At(s,!1),!1)}}},Et(e,{pluginName:"scroll",initializeByDefault:!0})}function me(){V.forEach(function(e){clearInterval(e.pid)}),V=[]}function vi(){clearInterval(Zt)}var Be=zi(function(e,t,i,r){if(t.scroll){var n=(e.touches?e.touches[0]:e).clientX,o=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=yt(),c=!1,u;qe!==i&&(qe=i,me(),Yt=t.scroll,u=t.scrollFn,Yt===!0&&(Yt=At(i,!0)));var d=0,p=Yt;do{var g=p,y=B(g),b=y.top,D=y.bottom,X=y.left,k=y.right,U=y.width,G=y.height,gt=void 0,x=void 0,_=g.scrollWidth,P=g.scrollHeight,A=v(g),J=g.scrollLeft,ot=g.scrollTop;g===l?(gt=U<_&&(A.overflowX==="auto"||A.overflowX==="scroll"||A.overflowX==="visible"),x=G<P&&(A.overflowY==="auto"||A.overflowY==="scroll"||A.overflowY==="visible")):(gt=U<_&&(A.overflowX==="auto"||A.overflowX==="scroll"),x=G<P&&(A.overflowY==="auto"||A.overflowY==="scroll"));var lt=gt&&(Math.abs(k-n)<=a&&J+U<_)-(Math.abs(X-n)<=a&&!!J),M=x&&(Math.abs(D-o)<=a&&ot+G<P)-(Math.abs(b-o)<=a&&!!ot);if(!V[d])for(var K=0;K<=d;K++)V[K]||(V[K]={});(V[d].vx!=lt||V[d].vy!=M||V[d].el!==g)&&(V[d].el=g,V[d].vx=lt,V[d].vy=M,clearInterval(V[d].pid),(lt!=0||M!=0)&&(c=!0,V[d].pid=setInterval(function(){r&&this.layer===0&&w.active._onTouchMove(Ce);var dt=V[this.layer].vy?V[this.layer].vy*s:0,ut=V[this.layer].vx?V[this.layer].vx*s:0;typeof u=="function"&&u.call(w.dragged.parentNode[rt],ut,dt,e,Ce,V[this.layer].el)!=="continue"||ji(V[this.layer].el,ut,dt)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&p!==l&&(p=At(p,!1)));Ye=c}},30),Ki=function(t){var i=t.originalEvent,r=t.putSortable,n=t.dragEl,o=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(i){var c=r||o;s();var u=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,d=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(d)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function Qe(){}Qe.prototype={startIndex:null,dragStart:function(t){var i=t.oldDraggableIndex;this.startIndex=i},onSpill:function(t){var i=t.dragEl,r=t.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=Ft(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(i,n):this.sortable.el.appendChild(i),this.sortable.animateAll(),r&&r.animateAll()},drop:Ki};Et(Qe,{pluginName:"revertOnSpill"});function ti(){}ti.prototype={onSpill:function(t){var i=t.dragEl,r=t.putSortable,n=r||this.sortable;n.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),n.animateAll()},drop:Ki};Et(ti,{pluginName:"removeOnSpill"});w.mount(new Qn);w.mount(ti,Qe);const to=e=>{const t=e.item;let i=Array.prototype.slice.call(t.parentNode.childNodes);return i=i.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),i},eo=(e,t,i,r,n,o)=>{const s=e.item.parentNode;for(const b of i)s.appendChild(b);if(e.oldIndex==e.newIndex)return;const l=r.getArray(),c=e.item.querySelector("eox-layercontrol-layer").layer.get(n),u=l.find(b=>b.get(n)===c),d=o.dataset.layer,p=l.find(b=>b.get(n)==d);let g,y;for(g=0;g<l.length;g++)if(l[g]==u){r.removeAt(g);break}for(y=0;y<l.length;y++)if(l[y]===p){g>y?r.insertAt(y,u):r.insertAt(y+1,u);break}t.requestUpdate()};function io(e,t,i,r){let n=[],o=null;e._sortable=w.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>n=to(a),onMove:a=>{o=a.related},onEnd:a=>eo(a,r,n,t,i,o)})}function ro(e,t,i,r){const n=e.getArray();let o=!1;n.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),o=!0),a.get(i)||(a.set(i,`layer ${s}`),o=!0),o&&r.requestUpdate()})}function ei(e,t,i){let r=[];const n=(o,a,s)=>{r=[...r,...o.filter(c=>c.get(a)===s)];const l=o.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>n(c.getLayers().getArray(),a,s)),r};return n(e,t,i),r}function no(e,t,i){if(!e||!t)return!1;if(!Qi(e,i))return!0;const r=e.get("minZoom"),n=e.get("maxZoom"),o=t.getView().getZoom();return o>r&&o<n}function Qi(e,t){const i=e.get("minZoom"),r=e.get("maxZoom");return!!(t&&(i!==-1/0||r!==1/0))}function oo(e,t){return!e||!t?void 0:e.getLayers?"group":t.getInteractions().getArray().filter(n=>n.freehand_!==void 0).map(n=>n.source_)?.ol_uid?.includes(e.getSource?e.getSource()?.ol_uid:void 0)?"draw":e.declutter_!==void 0?"vector":"raster"}const ao=(e,t,i)=>{let r=t;return i.layer.getSource().getTileUrlFunction()&&(r||(r=i.layer.getSource().getTileUrlFunction()),i.layer.getSource().setTileUrlFunction((...n)=>An(r(...n),e)),i.layer.getSource().setKey(new Date)),r};function so(e,t,i){const r="updateStyleVariables"in t,n="setStyle"in t,o=r?t.style_:i.style;let a=o?.variables;if(a){const s=ii(e);if(o.variables={...a,...s},r)t.updateStyleVariables(s);else if(n){const l=lo(o);t.setStyle(l)}}}const ii=e=>{const t={};for(const i in e)if(typeof e[i]=="object"&&e[i]!==null){const r=ii(e[i]);for(const n in r)t[n]=r?.[n]}else t[i]=e?.[i];return t};function lo(e){let t=e;if("variables"in e){let i=JSON.stringify(e);const{variables:r}=e;for(const n in r)typeof r[n]=="number"?i=i.replaceAll(`["var","${n}"]`,r[n]):i=i.replaceAll(`["var","${n}"]`,`"${r[n]}"`);t=JSON.parse(i)}return t}const co=(e,t)=>{if(!e)return;const i=ii(t);let r,n;return Array.isArray(e)?n=structuredClone(e):n=[structuredClone(e)],r=n.filter(o=>{if(!("boundTo"in o))return!0;const a=o.boundTo.key,s=o.boundTo.value;return!(a in i)||i[a]==s}),r.length||(r=n),r.map(o=>(delete o.boundTo,!("domainProperties"in o)||"domain"in o?o:Object.keys(o)?.reduce((a,s)=>(s==="domainProperties"?a.domain=o[s].map(l=>i[l]):a[s]=o[s],a),{})))};function tr(e,t){let i={};for(const r in e){const n=e[r].type;if(n&&n!=="object")i[r]=n==="number"?Number(t[r]):t[r];else if(typeof e[r]=="object"&&e[r]?.properties){const o=tr(e[r].properties,t);Object.keys(o).length>0&&(i[r]=o)}}return i}function uo(e,t){if(!t)return null;let i={},r="updateStyleVariables"in e?e.style_?.variables:t.style?.variables;if((t.type==="style"||t.style)&&r)i=r;else if(e.getSource()?.getTileUrlFunction?.()){const o=new URL(e.getSource().getTileUrlFunction()([0,0,0]));i=Object.fromEntries(o.searchParams.entries())}else return null;const n=tr(t.schema?.properties||t.schema,i);return Object.keys(n).length?n:null}const ho=(e,t)=>e?.filter(i=>["remove","sort"].filter(r=>t?.get("layerControlDisable")?r!=="sort":!0).includes(i)),po=(e,t)=>e?.filter(i=>{let r=!0;return["remove","sort"].includes(i)&&(r=!1),i==="info"&&(r=t.get("description")),i==="config"&&(r=t.get("layerConfig")),i==="datetime"&&(r=t.get("layerDatetime")),i==="legend"&&(r=t.get("layerLegend")),r}),fo=(e,t)=>m`
  <button slot="${e}-icon" class="icon">${t?e:tt}</button>
`,go=e=>m`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:t}=e;t?.set("layerControlOptional",!0),t?.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:t,bubbles:!0}))}}
  >
    ${e.unstyled?"x":tt}
  </button>
`,mo=e=>m`
  <span class="button sort-icon icon drag-handle">
    ${e?"═":tt}
  </span>
`,er=e=>{const t=["layerControlHide","layerControlOptional"];return e?.getArray()?.filter(i=>t.every(r=>!i.get(r)))};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=Ti(class extends _i{constructor(e){if(super(e),e.type!==kt.PROPERTY&&e.type!==kt.ATTRIBUTE&&e.type!==kt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!pr(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===jt||t===tt)return t;const i=e.element,r=e.name;if(e.type===kt.PROPERTY){if(t===i[r])return jt}else if(e.type===kt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return jt}else if(e.type===kt.ATTRIBUTE&&i.getAttribute(r)===t+"")return jt;return fr(e),t}});var Ne,wi;function yo(){if(wi)return Ne;wi=1;var e="Expected a function",t=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l=typeof oe=="object"&&oe&&oe.Object===Object&&oe,c=typeof self=="object"&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),d=Object.prototype,p=d.toString,g=Math.max,y=Math.min,b=function(){return u.Date.now()};function D(x,_,P){var A,J,ot,lt,M,K,dt=0,ut=!1,mt=!1,vt=!0;if(typeof x!="function")throw new TypeError(e);_=gt(_)||0,k(P)&&(ut=!!P.leading,mt="maxWait"in P,ot=mt?g(gt(P.maxWait)||0,_):ot,vt="trailing"in P?!!P.trailing:vt);function Ut(N){var $t=A,zt=J;return A=J=void 0,dt=N,lt=x.apply(zt,$t),lt}function ri(N){return dt=N,M=setTimeout(ne,_),ut?Ut(N):lt}function ie(N){var $t=N-K,zt=N-dt,oi=_-$t;return mt?y(oi,ot-zt):oi}function re(N){var $t=N-K,zt=N-dt;return K===void 0||$t>=_||$t<0||mt&&zt>=ot}function ne(){var N=b();if(re(N))return ni(N);M=setTimeout(ne,ie(N))}function ni(N){return M=void 0,vt&&A?Ut(N):(A=J=void 0,lt)}function ar(){M!==void 0&&clearTimeout(M),dt=0,A=K=J=M=void 0}function sr(){return M===void 0?lt:ni(b())}function _e(){var N=b(),$t=re(N);if(A=arguments,J=this,K=N,$t){if(M===void 0)return ri(K);if(mt)return M=setTimeout(ne,_),Ut(K)}return M===void 0&&(M=setTimeout(ne,_)),lt}return _e.cancel=ar,_e.flush=sr,_e}function X(x,_,P){var A=!0,J=!0;if(typeof x!="function")throw new TypeError(e);return k(P)&&(A="leading"in P?!!P.leading:A,J="trailing"in P?!!P.trailing:J),D(x,_,{leading:A,maxWait:_,trailing:J})}function k(x){var _=typeof x;return!!x&&(_=="object"||_=="function")}function U(x){return!!x&&typeof x=="object"}function G(x){return typeof x=="symbol"||U(x)&&p.call(x)==i}function gt(x){if(typeof x=="number")return x;if(G(x))return t;if(k(x)){var _=typeof x.valueOf=="function"?x.valueOf():x;x=k(_)?_+"":_}if(typeof x!="string")return x===0?x:+x;x=x.replace(r,"");var P=o.test(x);return P||a.test(x)?s(x.slice(2),P?2:8):n.test(x)?t:+x}return Ne=X,Ne}var bo=yo();const xi=We(bo);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=e=>e??tt;class vo extends nt{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layer=null}#t=[];get layerLegend(){return this.#t?this.#t.length>1?this.#t:this.#t[0]:null}set layerLegend(t){Array.isArray(t)?this.#t=t.map((i,r)=>({id:(this.layer?.get("id")??"")+r,...i})):this.#t=[{id:(this.layer?.get("id")??"")+0,...t}]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{this.#t=this.#t?.map(t=>(this.offsetWidth!==t.width&&(t.width=this.offsetWidth),{...t})),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),m`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#i}
      </style>
      ${H(this.layerLegend,()=>m`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${this.#t.map((t,i,r)=>m`
                <color-legend
                  id="${t.id}"
                  width=${t.width??325}
                  scaleType="${de(t.scaleType)}"
                  markType="${de(t.markType)}"
                  titleText="${de(t.title)}"
                  .range=${t.range}
                  .domain=${t.domain}
                  tickFormat="${de(t.tickFormat)}"
                  .ticks=${t.ticks??5}
                  .tickValues=${t.tickValues}
                  .marginLeft=${0}
                  .marginRight=${0}
                >
                </color-legend>
                ${i!==r.length-1?m`<div class="separator"></div>`:tt}
              `)}
          </div>
        `)}
    `}#e=Ze`
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
  `;#i=""}customElements.define("eox-layercontrol-layer-legend",vo);class wo extends nt{static properties={layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}};#t={};#e=null;#i;constructor(){super(),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=xi(this.#r,1e3)}updated(t){if(t.has("layerConfig")){const i=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=xi(this.#r,i),this.requestUpdate()}}#r(t){this.#t=t.detail,this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?so(this.#t,this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):this.#i=ao(this.#t,this.#i,this),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail,layer:this.layer}})),this.requestUpdate()}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){this.#e=uo(this.layer,this.layerConfig),Object.keys(this.#t).length!==0&&(this.#e=this.#t),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const t={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return m`
      <style>
        ${this.#n}
        ${!this.unstyled&&this.#o}
      </style>
      ${H(this.layerConfig,()=>m`
          ${H(this.layerConfig.legend,()=>m`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${co(this.layerConfig.legend,this.#t)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${this.#e}
            .options=${t}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}#n=Ze`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
    }
  `;#o=""}customElements.define("eox-layercontrol-layerconfig",wo);class xo extends nt{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:t.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=t.detail.currentStep,this.requestUpdate()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),m`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#i}
      </style>
      ${H(this.layerDatetime,()=>m`
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
            @stepchange=${this.#t}
          ></eox-timecontrol>
        `)}
    `}#e="";#i=""}customElements.define("eox-layercontrol-layer-datetime",xo);class So extends nt{static properties={actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t=t=>(this.selectedTab===t||this.toolsAsList)&&"highlighted";render(){const t=this.tabs,i=this.actions,r=i.length+t.length>1;return m`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#i}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${H(r,()=>m`
            <nav>
              ${H(!this.toolsAsList,()=>m`
                  <div>
                    <!-- Labels for tabs -->
                    ${ue(t,(n,o)=>m`
                        <label
                          class=${this.#t(o)}
                          @click=${()=>this.selectedTab=o}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ue(i,n=>m`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure>
          <!-- Content for each tab -->
          ${ue(t,(n,o)=>m`
              ${H(this.toolsAsList,()=>m`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${n}-icon`}>${n}</slot>
                    <span>${n}</span>
                  </label>
                `)}
              <div class="tab ${this.#t(o)}">
                <!-- Content slot for each tab -->
                <slot name=${`${n}-content`}>${n}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}#e=`
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
  `;#i=`
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
  `}customElements.define("eox-layercontrol-tools-items",So);const rr=':root,:host { --range-slider-height: 6px; --range-slider-thumb-size: 15px; --range-slider-thumb-border-radius: 50%; --range-slider-color: #004170; --range-slider-track-color: #d7dcdf; --range-slider-track-border-radius: 0;}input[type="range"] { -webkit-appearance: none; border: none; color: var(--range-slider-color); overflow: hidden; padding-left: 0; margin-left: 7px;}/*webkit*/input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: var(--range-slider-thumb-size); height: var(--range-slider-thumb-size); border-radius: var(--range-slider-thumb-border-radius); background: var(--range-slider-color); border: none; box-shadow: none; margin-top: calc( var(--range-slider-height) * 0.5 - var(--range-slider-thumb-size) * 0.5 );}input[type="range"]::-webkit-slider-runnable-track { height: var(--range-slider-height); border: none; border-radius: var(--range-slider-track-border-radius); background: var(--range-slider-track-color); box-shadow: none;}input[type="range"]::-webkit-slider-thumb { cursor: grab; --clip-edges: 4px; --clip-top: calc( (var(--range-slider-thumb-size) - var(--range-slider-height)) * 0.5 ); --clip-bottom: calc(var(--range-slider-thumb-size) - var(--clip-top)); --clip-further: calc(100% + 1px); --box-fill: calc( -100vmax - var(--range-slider-thumb-size, var(--range-slider-thumb-size)) + 1px ) 0 0 100vmax currentColor; background: linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--range-slider-height) + 1px); background-color: currentColor; box-shadow: var(--box-fill); border-radius: var(--range-slider-thumb-size, var(--range-slider-thumb-size)); filter: brightness(100%); clip-path: polygon( 100% -1px, var(--clip-edges) -1px, 0 var(--clip-top), -100vmax var(--clip-top), -100vmax var(--clip-bottom), 0 var(--clip-bottom), var(--clip-edges) 100%, var(--clip-further) var(--clip-further) );}/*mozilla*/input[type="range"]::-moz-range-thumb { width: var(--range-slider-thumb-size); height: var(--range-slider-thumb-size); border-radius: var(--range-slider-thumb-border-radius); background: var(--range-slider-color); border: none; box-shadow: none; cursor: grab;}input[type="range"]::-moz-range-track { border: none; border-radius: var(--range-slider-track-border-radius); background: var(--range-slider-track-color); box-shadow: none;}input[type="range"]::-moz-range-progress { appearance: none; background: currentColor; transition-delay: 30ms;}input[type="range"]::-moz-range-track,input[type="range"]::-moz-range-progress { height: calc(var(--range-slider-height)); border-radius: var(--range-slider-track-border-radius);}/*toolcool slider*/tc-range-slider { --height: var(--range-slider-height); --panel-bg: var(--range-slider-track-color); --panel-bg-hover: var(--range-slider-track-color); --panel-bg-fill: var(--range-slider-color); --panel-bg-border-radius: var(--range-slider-track-border-radius); --pointer-bg: var(--range-slider-color); --pointer-bg-hover: var(--range-slider-color); --pointer-bg-focus: var(--range-slider-color); --pointer-width: var(--range-slider-thumb-size); --pointer-height: var(--range-slider-thumb-size); --pointer-shadow: none; --pointer-shadow-hover: none; --pointer-shadow-focus: none; --pointer-border: none; --pointer-border-hover: 0; --pointer-border-focus: 0; --pointer-border-radius: var(--range-slider-thumb-border-radius);}';class Eo extends nt{static properties={layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}_removeButton=()=>go(this);_sortButton=()=>mo(this.unstyled);_button=t=>fo(t,this.unstyled);_getDefaultTools=()=>m`
      <div slot="info-content">
        ${gr(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <!-- Input for opacity -->
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value=${ir(this.layer?.getOpacity())}
          @input=${t=>this.layer.setOpacity(parseFloat(t.target.value))}
        />
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${H(this.layer.get("layerConfig"),()=>m`
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
        ${H(this.layer.get("layerDatetime"),()=>m`
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
        ${H(this.layer.get("layerLegend"),()=>m`
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
    `;render(){const t=ho(this.tools,this.layer),i=po(this.tools,this.layer),r=this[`_${t?.[0]}Button`]?this[`_${t?.[0]}Button`]():tt,n=this.tools?.length===1?`${this.tools[0]}-icon`:"",o=t?.length,a=i?.length;return m`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      ${H(o+a>0,()=>m`
          ${H(o===1&&a===0,()=>m`
              <div class="single-action-container">
                <div class="single-action">${r}</div>
              </div>
            `,()=>m`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||tt}
              >
                <summary>
                  <button class="icon ${n}">Tools</button>
                </summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${t}
                  .tabs=${i}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ue(i,s=>this._button(s))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools()}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}#t="";#e=`
    ${Li}  
    ${dr}
    ${Ai}
    ${rr}
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
  `}customElements.define("eox-layercontrol-layer-tools",Eo);const Co=e=>{const t=()=>{const i=no(e.layer,e.map,e.showLayerZoomState);let r=!1;!i&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,r=!0):i&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Qi(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},$o=(e,t)=>{const i=t.layer;i.setVisible(e.target.checked),e.target.checked&&i.get("layerControlExclusive")&&t.closest(".layers > ul").querySelectorAll("eox-layercontrol-layer").forEach(n=>{n.layer!==i&&n.layer?.get("layerControlExclusive")&&(n.layer.setVisible(!1),n.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),t.requestUpdate()};class To extends nt{static properties={layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};currLayerVisibilityBasedOnZoom=!0;constructor(){super(),this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}#t(t){return this.layer?.get(t)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Co(this)}#e(t){$o(t,this)}render(){const t=this.layer.getVisible(),i=t?"visible":"",r=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",n=this.#t("layerControlDisable")?"disabled":"",o=this.#t("layerControlExclusive")?"radio":"checkbox",a=this.tools?.length>0;return m`
      <style>
        ${this.#i}
        ${!this.unstyled&&this.#r}
      </style>
      ${H(this.layer,()=>m`
          <!-- Render the layer -->
          <div class="layer ${i} ${r}">
            <label class="drag-handle ${n}">
              <!-- Input element for layer visibility -->
              <input
                type=${o}
                .checked=${ir(t)}
                @click=${this.#e}
              />

              <!-- Layer title -->
              <span
                class="title ${this.#t("color")?"color-swatch":""}"
                style="--layer-color: ${this.#t("color")}"
              >
                ${this.#t(this.titleProperty)}
              </span>
              ${H(a,()=>m`<span class="tools-placeholder"></span>`)}
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
    `}#i="";#r=`
    ${Ai}
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
  `}customElements.define("eox-layercontrol-layer",To);class _o extends nt{static properties={group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=!!this.group?.get("layerControlExpand"),i=er(this.group.getLayers())?.length;return m`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      ${H(this.group,()=>m`
          <!-- Render the details element with the layer control -->
          <details
            open=${t||tt}
            data-children-length=${i}
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
    `}#t="";#e=`
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
  `}customElements.define("eox-layercontrol-layer-group",_o);const Ao=e=>{const{layers:t,idProperty:i,titleProperty:r,renderRoot:n}=e,o=ur(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>o();if(t&&(t.hasListener("change:length")&&t?.un("change:length",a),t.on("change:length",a),t)){const s=n.querySelector("ul");ro(t,i,r,e),io(s,t,i,e)}};class Lo extends nt{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}firstUpdated(){Ao(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.layers?er(this.layers).reverse():[];return m`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      <ul>
        ${H(this.layers,()=>m`
            ${hr(t,i=>i,i=>m`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${oo(i,this.map)}"
                >
                  ${i.getLayers?m`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${i}
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
                            .layer=${i}
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
    `}#t="";#e=`
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
  `}customElements.define("eox-layercontrol-layer-list",Lo);const Do=e=>{const t=e.querySelector("select[name=optional]"),i=t?t.value:null,r=ei(e.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(e.idProperty)||n.ol_uid)===i);r?.set("layerControlOptional",!1),r?.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),e.requestUpdate()};class ko extends nt{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}};constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(){Do(this)}render(){const t=ei(this.layers.getArray(),"layerControlOptional",!0);return m`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${t.map(i=>{const r=i.get(this.idProperty)||i.ol_uid,n=i.get(this.titleProperty),o=`layer ${i.get(this.idProperty)}`;return m` <option value="${r}">${n||o}</option> `})}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${this.#t}">add</button>
    `}}customElements.define("eox-layercontrol-optional-list",ko);const Oo=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},Si=e=>{const t=JSON.parse(`{"data":${Bi(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(i=>{e.eoxMap.addOrUpdateLayer(i)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},Ro=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function Po(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(Ge(t)==="XYZ")return{Name:t};try{const i=await $n(t);e.wmsCapabilities=i}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const Mo=(e,t)=>{const{Name:i}=e,r=Ge(t.urlInput)||"XYZ",n={type:"Tile",properties:{id:i,title:i},source:{type:r,url:t.urlInput,params:{LAYERS:i}}};t.jsonInput=JSON.stringify(n)},Io=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};class Vo extends nt{static properties={eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}};urlInput=null;jsonInput=null;open=null;searchLoad=!1;wmsCapabilities=null;constructor(){super(),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){Ro(t,this)}async#e(){const t=await Po(this);t&&this.#i(t)}#i(t){Mo(t,this),Si(this)}#r(){Si(this)}#n(t){Oo(t,this)}#o(t){Io(t,this)}render(){const t=this.open?"open":"close",i=this.open==="url",r=this.open==="json",n=!Tn(this.urlInput)||this.searchLoad?!0:tt;return m`
      <style>
        ${this.#a}
        ${!this.unstyled&&this.#s}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${t}">
            <li
              @click=${()=>this.#o("url")}
              class="${i?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>this.#o("json")}
              class="${r?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>this.#o(this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":""}
          </button>
        </div>
        <div class="eox-add ${t}">
          ${i?m`
              <!-- Input field for URL -->
              <div class="eox-add-layer-col">
                <input 
                  type="text" 
                  class="add-url" 
                  placeholder="Add URL (WMS/XYZ)" 
                  .value="${this.urlInput}" 
                  @input=${this.#t}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${n} 
                  @click=${this.#e}
                >
                  ${this.unstyled?"Search":""}
                </button>
              </div>

              <!-- Display layers for WMS capabilities -->
              ${this.wmsCapabilities?m`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(o=>{const a=o.Name;return m`
                            <li class="search-list">
                              ${a}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>this.#i(o)}
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
                  @input=${this.#n}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${_n(this.jsonInput)?tt:!0}
                  @click=${this.#r}
                >
                  ${this.unstyled?"Add JSON":""}
                </button>
              `}
        </div>
      </div>
    `}#a=`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `;#s=`
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
  `}customElements.define("eox-layercontrol-add-layers",Vo);const Bo=(e,t)=>{t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"&&t.renderRoot.querySelector("eox-layercontrol-optional-list")?.requestUpdate()},Ei=e=>{const t=Ue(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};class No extends nt{static properties={for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean}};#t;constructor(){super(),this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1}firstUpdated(){this.eoxMap=Ei(this)}updated(t){t.has("for")&&(this.eoxMap=Ei(this))}get eoxMap(){return this.#t}set eoxMap(t){const i=this.#t;this.#t=t,this.requestUpdate("eoxMap",i)}#e(t){Bo(t,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:t.detail}))}#i(t){this.dispatchEvent(new CustomEvent("datetime:updated",{detail:t.detail}))}#r(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:t.detail}))}render(){const t=this.map?.getLayers().getArray(),i=t&&ei(t,"layerControlOptional",!0)?.length>0;return m`
      <style>
        ${!this.unstyled&&this.#n}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${H(this.addExternalLayers&&this.#t?.addOrUpdateLayer,()=>m`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${this.#t}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${H(this.map,()=>m`
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
            @changed=${this.#e}
            @datetime:updated=${this.#i}
            @layerConfig:change=${this.#r}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${H(i,()=>m`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}#n=`
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
  `}customElements.define("eox-layercontrol",No);const Ho=`
:host {
  display: block;
}
`,Fo=`
:host, :root {
  --navigation-button-display: inline-flex;
}

* {
  font-family: Roboto, sans-serif;
}

${Li}
${rr}

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
`;class Uo extends nt{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(i=>{const n=Nt(i).year();let o=t.find(a=>a.year===n);o||(o={year:n,dates:[]},t.push(o)),o.dates.push(i)}),t}preprocessDates(){const t=[];this.steps.forEach(i=>{const n=Nt(i).year();let o=t.find(a=>a.year===n);o||(o={year:n,ratio:0,dates:[]},t.push(o)),o.dates.push({date:i,isYearMarker:o.dates.length===0})});for(let i of t)i.ratio=i.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((r,n)=>{const o=this.steps.indexOf(r.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(r.dates[r.dates.length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,a-o-2),l=[];return l.push(ft`
            <rect
              key=${n}
              x=${o+2/2} // Add half the spacing to the start position
              y="0"
              width=${s}
              height="6"
              fill="#7596A2"
            ></rect>
        `),s>=30&&l.push(ft`
                <text
                  key=${`label-${n}`}
                  x=${o+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${r.year}
                </text>
            `),l})}calculateIndividualTicks(){return this._years.flatMap((t,i)=>{const r=this.steps.length,n=Math.max(1,Math.floor(r/this.width));return t.dates.filter((o,a)=>a%n===0).map((o,a)=>{const l=this.steps.indexOf(o.date)/(this.steps.length-1)*this.width,c=[];return c.push(ft`
                <line
                  key=${i}-${a}
                  x1=${l}
                  y1="0"
                  x2=${l}
                  y2=${o.isYearMarker?12:6}
                  stroke=${o.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),o.isYearMarker&&this.density>.03&&this.density<.5&&i%2==0&&c.push(ft`
                  <text
                    key=${`label-${i}`}
                    x=${l+16}
                    y="30"
                    fill="#555"
                    font-size="14"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),c})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const r=this._years.reduce((o,a)=>{const s=Math.floor(a.year/10)*10;return o[s]||(o[s]=[]),o[s].push(...a.dates),o},{});return Object.keys(r).flatMap((o,a)=>{const s=this.steps.indexOf(r[o][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(r[o][r[o].length-1].date)/(this.steps.length-1)*this.width,c=Math.max(0,l-s-2),u=[];return u.push(ft`
            <rect
              key=${`decade-${a}`}
              x=${s+2/2}
              y="0"
              width=${c}
              height="6"
              fill="#555"
            ></rect>
        `),c>=30&&u.push(ft`
                <text
                  key=${`decade-label-${a}`}
                  x=${s+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${o}
                </text>
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,i=this.width/(t-1);return Array.from({length:this.numLines},(r,n)=>n*i)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates(),this.lines.forEach((t,i)=>{Nt(this.steps[i]).year()})}isYearLine(t){return this._yearMarks.some(r=>Math.abs(r.position-t)<1)}render(){return m`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",Uo);var ye={exports:{}},zo=ye.exports,Ci;function jo(){return Ci||(Ci=1,function(e,t){(function(i,r){e.exports=r()})(zo,function(){return function(i,r,n){r.prototype.dayOfYear=function(o){var a=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return o==null?a:this.add(o-a,"day")}}})}(ye)),ye.exports}var qo=jo();const Yo=We(qo);var be={exports:{}},Zo=be.exports,$i;function Wo(){return $i||($i=1,function(e,t){(function(i,r){e.exports=r()})(Zo,function(){var i="day";return function(r,n,o){var a=function(c){return c.add(4-c.isoWeekday(),i)},s=n.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),i);var u,d,p,g,y=a(this),b=(u=this.isoWeekYear(),d=this.$u,p=(d?o.utc:o)().year(u).startOf("year"),g=4-p.isoWeekday(),p.isoWeekday()>4&&(g+=7),p.add(g,i));return y.diff(b,"week")+1},s.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=s.startOf;s.startOf=function(c,u){var d=this.$utils(),p=!!d.u(u)||u;return d.p(c)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,u)}}})}(be)),be.exports}var Xo=Wo();const Go=We(Xo);Nt.extend(Yo);Nt.extend(Go);class Jo extends nt{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},navigation:{type:Boolean},_originalParams:{type:Object},play:{type:Boolean,attribute:"play"},displayFormat:{type:String,attribute:"display-format"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.play=!1,this.navigation=!0,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth}),this.displayFormat=void 0}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const i=this.controlValues.findIndex(r=>r===t);i>-1?this._newStepIndex=i:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=Ue(this.for);if(t){const i=t;this.eoxMap=i}}get eoxMap(){return this._eoxMap}set eoxMap(t){const i=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",i)}_updateStep(t=1){t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&this._controlSource?.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const i=[];i.push(...t);let r=i.filter(n=>n instanceof di);for(;r.length;){const n=[];for(let o=0,a=r.length;o<a;o++){const s=r[o].getLayers().getArray();i.push(...s),n.push(...s.filter(l=>l instanceof di))}r=n}return i}render(){if(this.layer&&this.for){const i=Ue(this.for).map;i.once("loadend",()=>{if(!this._originalParams){const n=this.getFlatLayersArray(i.getLayers().getArray()).find(o=>o.get("id")===this.layer);this._controlSource=n.getSource(),this._originalParams=this._controlSource.getParams()}})}return m`
      <style>
        ${Ho}
        ${!this.unstyled&&Fo}
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
            ${this.displayFormat?Nt(this.controlValues[this._newStepIndex]).format(this.displayFormat):this.controlValues[this._newStepIndex]}
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
                    @change="${t=>this._updateStep(this.controlValues.findIndex(i=>i===t.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}
        </div>
      </main>
    `}}customElements.define("eox-timecontrol",Jo);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo={attribute:!0,type:String,converter:cr,reflect:!1,hasChanged:lr},ta=(e=Qo,t,i)=>{const{kind:r,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(i.name,e),r==="accessor"){const{name:a}=i;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(r==="setter"){const{name:a}=i;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)};function Z(e){return(t,i)=>typeof i=="object"?ta(e,t,i):((r,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ea=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ia(e,t){return(i,r,n)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return ea(i,r,{get(){return o(this)}})}}class ra{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:i,range:r}=this.cle;this.colorScale=t?_r(t).domain(i):Fe().range(r).domain(i).interpolate(Di)}setDiscreteColorScale(){this.colorScale=Ar().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=Lr().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Dr().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=Ti(class extends _i{constructor(e){if(super(e),e.type!==kt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const n=!!t[r];n===this.st.has(r)||this.nt?.has(r)||(n?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return jt}});class na{constructor(t){this.cle=t}render(){const t=this.cle.titleText?m`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return m`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${He(i)}
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
      <ul class=${He(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:i,domain:r}=this.cle,n={"legend-item":!0,line:t==="line",circle:t==="circle"};return m`${r.map(o=>m`<li
          class=${He(n)}
          style="--color:${i(o)}"
        >
          ${o}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:i,marginLeft:r,marginRight:n,tickSize:o,width:a,range:s}=this.cle,l=this.cle.marginBottom+o,c=this.cle.height+o,u=t.interpolator?.()||kr(Di,s);return ft`<image
      x=${r}
      y=${i}
      width=${a-n-r}
      height=${c-i-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:i,marginLeft:r,colorScale:n,xScale:o}=this.cle,a=this.cle.height+t,s=this.cle.marginBottom+t,l=n.range(),c=d=>n.invertExtent(d).map(o)[0]||r,u=d=>{let[p,g]=n.invertExtent(d).map(o);return p=p||0,g=g||o.range()[1],g-p};return ft`${l.map(d=>ft`<rect x=${c(d)} y=${i} width=${u(d)} height=${a-i-s} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:i,tickFormat:r,tickFormatter:n,tickValues:o,xScale:a,marginTop:s}=this.cle,l=this.cle.height+i,c=this.cle.marginBottom+i,u=o?.length?o:a.ticks.apply(a,[t,r]),d=Math.max(i,0)+3,p=()=>u.map(g=>ft`<g class="tick" transform='translate(${a(g)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${s+c-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${n(g)}</text>
      </g>`);return ft`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${p()}</g>`}getColorRamp(t,i=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${i}`);const n=r.getContext("2d");for(let o=0;o<i;o++)n.fillStyle=t(o/(i-1)),n.fillRect(o,0,1,1);return r}}const oa=325,aa=32,sa=6,la=12,ca=16,da=12,nr=5,ua=6,or=".1f",ha=[0,1],pa=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],fa="Color Legend Element",ga="circle",ma="continuous",ya=["domain","range","interpolator","scaleType"],ba=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class va{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:i,width:r,marginRight:n}=this.cle;switch(t){case"continuous":this.xScale=Fe().domain(this.cle.domain).range([i,r-n]);break;case"discrete":case"threshold":this.xScale=Fe().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([i,r-n]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[t,i]=this.xScale.domain();this.cle.tickValues=[t,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),i]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length?this.cle.tickFormatter=Or(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||nr,this.cle.tickFormat||or))}}const wa=Ze`
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
`;var F=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let I=class extends nt{constructor(){super(...arguments),this.titleText=fa,this.width=oa,this.height=aa,this.marginTop=sa,this.marginRight=la,this.marginBottom=ca,this.marginLeft=da,this.scaleType=ma,this.domain=ha,this.range=pa,this.markType=ga,this.ticks=nr,this.tickFormat=or,this.tickSize=ua,this.colorScaleSetter=new ra(this),this.axisTickSetter=new va(this),this.renderer=new na(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const i=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",i)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const i=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",i)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){ya.some(i=>t.has(i))&&this.colorScaleSetter.setColorScale(),ba.some(i=>t.has(i))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};I.styles=[wa];F([Z({type:String})],I.prototype,"titleText",void 0);F([Z({type:Number})],I.prototype,"width",void 0);F([Z({type:Number})],I.prototype,"height",void 0);F([Z({type:Number})],I.prototype,"marginTop",void 0);F([Z({type:Number})],I.prototype,"marginRight",void 0);F([Z({type:Number})],I.prototype,"marginBottom",void 0);F([Z({type:Number})],I.prototype,"marginLeft",void 0);F([Z({type:String})],I.prototype,"scaleType",void 0);F([Z({type:Array})],I.prototype,"domain",void 0);F([Z({type:Array})],I.prototype,"range",void 0);F([Z({type:String})],I.prototype,"markType",void 0);F([Z({type:Number})],I.prototype,"ticks",void 0);F([Z({type:String})],I.prototype,"tickFormat",void 0);F([Z({type:Number})],I.prototype,"tickSize",void 0);F([Z({type:Array})],I.prototype,"tickValues",void 0);F([ia("svg")],I.prototype,"svg",void 0);F([Z({attribute:!1})],I.prototype,"interpolator",null);F([Z({attribute:!1})],I.prototype,"tickFormatter",null);I=F([Ko("color-legend")],I);const xa={class:"d-flex flex-column fill-height overflow-auto"},Sa=["for"],Ra={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},cssVars:{type:Object}},setup(e){const t=e,i={tools:t.tools,style:t.cssVars},{selectedCompareStac:r,selectedStac:n}=mr(yr()),o=br(()=>t.map==="second"?ai.value!==null&&r.value!==null:si.value!==null&&n.value!==null),a=t.map==="second"?vr:wr,s=t.map==="second"?ai:si,l=xr(null),c=async g=>{const{layer:y,datetime:b}=g.detail,D=await Tr(a,y);let X=[];D&&(await D.fetchCollection(),X=await D.updateLayerJson(b,y.get("id"),t.map));const k=X?.find(U=>U?.properties?.id==="AnalysisGroup")?.layers;k?.length&&(k?.forEach(U=>{U.properties.layerControlExpand=!0,U.properties.layerControlToolsExpand=!0}),s.value.layers=X)};let u;const d=g=>{clearTimeout(u),u=setTimeout(()=>{c(g)},500)},p=g=>{$r.value=g.detail.jsonformValue};return(g,y)=>(ci(),li("span",xa,[o.value?(ci(),li("eox-layercontrol",Er({key:0},i,{for:Cr(s),"onDatetime:updated":d,class:"fill-height",toolsAsList:"true",style:{"--eox-background-color":"transparent"},ref_key:"eoxLayercontrol",ref:l,"on:layerConfig:change":p}),null,16,Sa)):Sr("v-if",!0)]))}};export{Ra as default};
