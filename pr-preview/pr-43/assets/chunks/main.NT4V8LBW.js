var Lo=Object.defineProperty;var fn=t=>{throw TypeError(t)};var Ro=(t,e,i)=>e in t?Lo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Z=(t,e,i)=>Ro(t,typeof e!="symbol"?e+"":e,i),vi=(t,e,i)=>e.has(t)||fn("Cannot "+i);var m=(t,e,i)=>(vi(t,e,"read from private field"),i?i.call(t):e.get(t)),L=(t,e,i)=>e.has(t)?fn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),lt=(t,e,i,n)=>(vi(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),B=(t,e,i)=>(vi(t,e,"access private method"),i);import{b as g,A as zt,a as At,i as Ii}from"./lit-element.BMPlKsWQ.js";import{n as N}from"./when.BR7zwNJC.js";import{c as Io}from"./repeat.BH3fx7cN.js";import{l as Hi}from"./live.CMQLNcwp.js";import{o as Ho}from"./unsafe-html.WWnMP6dQ.js";import{o as Re}from"./map.DiiNQ3pp.js";import{e as Fi,a as Oo}from"./addCommonStyleSheet.BQJIwBZH.js";import{X as Po}from"./XYZ.DRmU4g8s.js";import{c as _e,g as No}from"./commonjsHelpers.BosuxZz1.js";import{_ as Tn}from"./index.BUIxO2d3.js";import{g as Bo}from"./getElement.COiK8z0h.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./intersectsextent.CmCLhctL.js";import"./util.Dhne-uB2.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var V=t=>t!==void 0,Mn=(t,e,i)=>e in t?t[e]:t[e]=i;const me={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class ko{constructor(e){this._parser=new e}toDocument(e){return this._parser.parseFromString(e,"application/xml")}getAllTextContent(e,i){return mi(e,i).join("")}}function mi(t,e){return Ln(t,e,[]).join("")}function Ln(t,e,i){if(t.nodeType===me.CDATA_SECTION||t.nodeType===me.TEXT)e?i.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(t.nodeValue);else{var n;for(n=t.firstChild;n;n=n.nextSibling)Ln(n,e,i)}return i}function Uo(t,e,i,n){for(var o=Fo(e);o;o=qo(o)){var r=o.namespaceURI||null,a=t[r];if(V(a)){var s=a[o.localName];V(s)&&s.call(n,o,i)}}}function Fo(t){let e=t.firstElementChild||t.firstChild;for(;e&&e.nodeType!==me.ELEMENT;)e=e.nextSibling;return e}function qo(t){let e=t.nextElementSibling||t.nextSibling;for(;e&&e.nodeType!==me.ELEMENT;)e=e.nextSibling;return e}function et(t,e,i){return jo(t,e,i)}function jo(t,e,i){var n=V(i)?i:{},o,r;for(o=0,r=t.length;o<r;++o)n[t[o]]=e;return n}function Rn(t,e){return function(i,n){var o=t.call(V(e)?e:this,i,n);if(V(o)){var r=n[n.length-1];r.push(o)}}}function G(t,e,i,n,o){return n.push(t),Uo(e,i,n,o),n.pop()}function v(t,e,i){return function(n,o){let r=t.call(V(i)?i:this,n,o);if(V(r)){var a=o[o.length-1],s=V(e)?e:n.localName;a[s]=r}}}function ct(t,e,i){return function(n,o){var r=t.call(V(i)?i:this,n,o);if(V(r)){var a=o[o.length-1],s=V(e)?e:n.localName,l=Mn(a,s,[]);l.push(r)}}}const Zo=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function zo(t){return t.replace(Zo,"")}function Xt(t){const e=/^\s*(true|1)|(false|0)\s*$/.exec(t);if(e)return V(e[1])||!1}function Kt(t){return Dt(mi(t,!1))}function Dt(t){const e=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);if(e)return parseFloat(e[1])}function wi(t){return ke(mi(t,!1))}function ke(t){const e=/^\s*(\d+)\s*$/.exec(t);if(e)return parseInt(e[1],10)}function R(t){return zo(mi(t,!1))}const Xo="http://www.w3.org/1999/xlink";function qi(t){return t.getAttributeNS(Xo,"href")}function Yo(t,e){return G({},xr,t,e)}function In(t){return[Dt(t.getAttribute("minx")),Dt(t.getAttribute("miny")),Dt(t.getAttribute("maxx")),Dt(t.getAttribute("maxy"))]}function Wo(t,e){const i=In(t),n=[Dt(t.getAttribute("resx")),Dt(t.getAttribute("resy"))];return{crs:t.getAttribute("CRS")||t.getAttribute("SRS"),extent:i,res:n}}function Go(t,e){const i=In(t);if(!(!V(i[0])||!V(i[1])||!V(i[2])||!V(i[3])))return i}function Jo(t,e){const i=parseFloat(t.getAttribute("min")),n=parseFloat(t.getAttribute("max"));return{min:i,max:n}}function Ko(t,e){const i=G({},Sr,t,e);if(!V(i))return;const n=i.westBoundLongitude,o=i.southBoundLatitude,r=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!V(n)||!V(o)||!V(r)||!V(a)))return[n,o,r,a]}function Qo(t,e){return G({},gr,t,e)}function tr(t,e){return G({},mr,t,e)}function er(t,e){return G({},yr,t,e)}function ir(t,e){return G({},br,t,e)}function nr(t,e){return G({},vr,t,e)}function or(t,e){return G([],wr,t,e)}function rr(t,e){const i=Xt(t.getAttribute("queryable"));return G({queryable:V(i)?i:!1},Pn,t,e)}function ar(t,e){var i=e[e.length-1];const n=G({},Pn,t,e);if(!V(n))return;let o=Xt(t.getAttribute("queryable"));V(o)||(o=i.queryable),n.queryable=V(o)?o:!1;let r=ke(t.getAttribute("cascaded"));V(r)||(r=i.cascaded),n.cascaded=r;let a=Xt(t.getAttribute("opaque"));V(a)||(a=i.opaque),n.opaque=V(a)?a:!1;let s=Xt(t.getAttribute("noSubsets"));V(s)||(s=i.noSubsets),n.noSubsets=V(s)?s:!1;let l=Dt(t.getAttribute("fixedWidth"));V(l)||(l=i.fixedWidth),n.fixedWidth=l;let u=Dt(t.getAttribute("fixedHeight"));V(u)||(u=i.fixedHeight),n.fixedHeight=u;const d=["Style","CRS","AuthorityURL"];for(let p=0,y=d.length;p<y;p++){const h=d[p],b=i[h];if(V(b)){let A=Mn(n,h,[]);A=A.concat(b),n[h]=A}}const c=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,y=c.length;p<y;p++){const h=c[p],b=n[h];if(!V(b)){const A=i[h];n[h]=A}}return n}function sr(t,e){return{name:t.getAttribute("name"),units:t.getAttribute("units"),unitSymbol:t.getAttribute("unitSymbol"),default:t.getAttribute("default"),multipleValues:Xt(t.getAttribute("multipleValues")),nearestValue:Xt(t.getAttribute("nearestValue")),current:Xt(t.getAttribute("current")),values:R(t)}}function Mt(t,e){return G({},Vr,t,e)}function lr(t,e){return G({},Er,t,e)}function ur(t,e){return G({},Ar,t,e)}function cr(t,e){return G({},Cr,t,e)}function xi(t,e){return G({},$r,t,e)}function Hn(t,e){var i=Mt(t,e);if(V(i)){const n=[ke(t.getAttribute("width")),ke(t.getAttribute("height"))];return i.size=n,i}}function dr(t,e){var i=Mt(t,e);if(V(i))return i.name=t.getAttribute("name"),i}function hr(t,e){var i=Mt(t,e);if(V(i))return i.type=t.getAttribute("type"),i}function fr(t,e){return G({},_r,t,e)}function On(t,e){return G([],Dr,t,e)}const it=[null,"http://www.opengis.net/wms"],pr=et(it,{Service:v(tr),Capability:v(Qo)}),gr=et(it,{Request:v(lr),Exception:v(or),Layer:v(rr)}),mr=et(it,{Name:v(R),Title:v(R),Abstract:v(R),KeywordList:v(On),OnlineResource:v(qi),ContactInformation:v(er),Fees:v(R),AccessConstraints:v(R),LayerLimit:v(wi),MaxWidth:v(wi),MaxHeight:v(wi)}),yr=et(it,{ContactPersonPrimary:v(ir),ContactPosition:v(R),ContactAddress:v(nr),ContactVoiceTelephone:v(R),ContactFacsimileTelephone:v(R),ContactElectronicMailAddress:v(R)}),br=et(it,{ContactPerson:v(R),ContactOrganization:v(R)}),vr=et(it,{AddressType:v(R),Address:v(R),City:v(R),StateOrProvince:v(R),PostCode:v(R),Country:v(R)}),wr=et(it,{Format:Rn(R)}),Pn=et(it,{Name:v(R),Title:v(R),Abstract:v(R),KeywordList:v(On),CRS:ct(R),SRS:ct(R),EX_GeographicBoundingBox:v(Ko),LatLonBoundingBox:v(Go),BoundingBox:ct(Wo),Dimension:ct(sr),Attribution:v(Yo),AuthorityURL:ct(dr),Identifier:ct(R),MetadataURL:ct(hr),DataURL:ct(Mt),FeatureListURL:ct(Mt),Style:ct(fr),MinScaleDenominator:v(Kt),MaxScaleDenominator:v(Kt),ScaleHint:v(Jo),Layer:ct(ar)}),xr=et(it,{Title:v(R),OnlineResource:v(qi),LogoURL:v(Hn)}),Sr=et(it,{westBoundLongitude:v(Kt),eastBoundLongitude:v(Kt),southBoundLatitude:v(Kt),northBoundLatitude:v(Kt)}),Er=et(it,{GetCapabilities:v(xi),GetMap:v(xi),GetFeatureInfo:v(xi)}),$r=et(it,{Format:ct(R),DCPType:ct(ur)}),Ar=et(it,{HTTP:v(cr)}),Cr=et(it,{Get:v(Mt),Post:v(Mt)}),_r=et(it,{Name:v(R),Title:v(R),Abstract:v(R),LegendURL:ct(Hn),StyleSheetURL:v(Mt),StyleURL:v(Mt)}),Vr=et(it,{Format:v(R),OnlineResource:v(qi)}),Dr=et(it,{Keyword:Rn(R)});class Tr{constructor(e,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new ko(i),this._data=e}data(e){return this._data=e,this}toJSON(e){return e=e||this._data,this.parse(e)}parse(e){return this.readFromDocument(this._parser.toDocument(e))}readFromDocument(e){for(let i=e.firstChild;i;i=i.nextSibling)if(i.nodeType==me.ELEMENT)return this.readFromNode(i);return null}readFromNode(e){return this.version=e.getAttribute("version"),G({version:this.version},pr,e,[])||null}}async function Mr(t){let e=new URL(t),i=e.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let n=e.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Tr(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function ji(t){const e=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return e.test(t)?"TileWMS":i.test(t)?"XYZ":!1}function Lr(t){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),n=ji(t);return!!(t&&i&&n)}function Nn(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Rr(t){try{return JSON.parse(Nn(t)),!!t}catch{return!1}}function Si(t,e){const i=new URL(t).searchParams;Object.entries(e).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):Array.isArray(s)?(i.delete(a),s.forEach(l=>{i.append(a,l)})):i.set(a,s)});const n=t.split("?")[0],o=i.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function pn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,n)}return i}function Vt(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?pn(Object(i),!0).forEach(function(n){Ir(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):pn(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Ie(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ie=function(e){return typeof e}:Ie=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ie(t)}function Ir(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Lt(){return Lt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Lt.apply(this,arguments)}function Hr(t,e){if(t==null)return{};var i={},n=Object.keys(t),o,r;for(r=0;r<n.length;r++)o=n[r],!(e.indexOf(o)>=0)&&(i[o]=t[o]);return i}function Or(t,e){if(t==null)return{};var i=Hr(t,e),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var Pr="1.15.6";function Tt(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var Rt=Tt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),xe=Tt(/Edge/i),gn=Tt(/firefox/i),ce=Tt(/safari/i)&&!Tt(/chrome/i)&&!Tt(/android/i),Zi=Tt(/iP(ad|od|hone)/i),Bn=Tt(/chrome/i)&&Tt(/android/i),kn={capture:!1,passive:!1};function T(t,e,i){t.addEventListener(e,i,!Rt&&kn)}function D(t,e,i){t.removeEventListener(e,i,!Rt&&kn)}function Ue(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function Un(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function $t(t,e,i,n){if(t){i=i||document;do{if(e!=null&&(e[0]===">"?t.parentNode===i&&Ue(t,e):Ue(t,e))||n&&t===i)return t;if(t===i)break}while(t=Un(t))}return null}var mn=/\s+/g;function pt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var n=(" "+t.className+" ").replace(mn," ").replace(" "+e+" "," ");t.className=(n+(i?" "+e:"")).replace(mn," ")}}function S(t,e,i){var n=t&&t.style;if(n){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),e===void 0?i:i[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=i+(typeof i=="string"?"":"px")}}function te(t,e){var i="";if(typeof t=="string")i=t;else do{var n=S(t,"transform");n&&n!=="none"&&(i=n+" "+i)}while(!e&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function Fn(t,e,i){if(t){var n=t.getElementsByTagName(e),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function _t(){var t=document.scrollingElement;return t||document.documentElement}function Y(t,e,i,n,o){if(!(!t.getBoundingClientRect&&t!==window)){var r,a,s,l,u,d,c;if(t!==window&&t.parentNode&&t!==_t()?(r=t.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,u=r.right,d=r.height,c=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,d=window.innerHeight,c=window.innerWidth),(e||i)&&t!==window&&(o=o||t.parentNode,!Rt))do if(o&&o.getBoundingClientRect&&(S(o,"transform")!=="none"||i&&S(o,"position")!=="static")){var p=o.getBoundingClientRect();a-=p.top+parseInt(S(o,"border-top-width")),s-=p.left+parseInt(S(o,"border-left-width")),l=a+r.height,u=s+r.width;break}while(o=o.parentNode);if(n&&t!==window){var y=te(o||t),h=y&&y.a,b=y&&y.d;y&&(a/=b,s/=h,c/=h,d/=b,l=a+d,u=s+c)}return{top:a,left:s,bottom:l,right:u,width:c,height:d}}}function yn(t,e,i){for(var n=kt(t,!0),o=Y(t)[e];n;){var r=Y(n)[i],a=void 0;if(a=o>=r,!a)return n;if(n===_t())break;n=kt(n,!1)}return!1}function ee(t,e,i,n){for(var o=0,r=0,a=t.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==E.ghost&&(n||a[r]!==E.dragged)&&$t(a[r],i.draggable,t,!1)){if(o===e)return a[r];o++}r++}return null}function zi(t,e){for(var i=t.lastElementChild;i&&(i===E.ghost||S(i,"display")==="none"||e&&!Ue(i,e));)i=i.previousElementSibling;return i||null}function vt(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==E.clone&&(!e||Ue(t,e))&&i++;return i}function bn(t){var e=0,i=0,n=_t();if(t)do{var o=te(t),r=o.a,a=o.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==n&&(t=t.parentNode));return[e,i]}function Nr(t,e){for(var i in t)if(t.hasOwnProperty(i)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t[i][n])return Number(i)}return-1}function kt(t,e){if(!t||!t.getBoundingClientRect)return _t();var i=t,n=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=S(i);if(i.clientWidth<i.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return _t();if(n||e)return i;n=!0}}while(i=i.parentNode);return _t()}function Br(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function Ei(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var de;function qn(t,e){return function(){if(!de){var i=arguments,n=this;i.length===1?t.call(n,i[0]):t.apply(n,i),de=setTimeout(function(){de=void 0},e)}}}function kr(){clearTimeout(de),de=void 0}function jn(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function Zn(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function zn(t,e,i){var n={};return Array.from(t.children).forEach(function(o){var r,a,s,l;if(!(!$t(o,e.draggable,t,!1)||o.animated||o===i)){var u=Y(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,u.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,u.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,u.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var dt="Sortable"+new Date().getTime();function Ur(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(S(o,"display")==="none"||o===E.ghost)){t.push({target:o,rect:Y(o)});var r=Vt({},t[t.length-1].rect);if(o.thisAnimationDuration){var a=te(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){t.push(n)},removeAnimationState:function(n){t.splice(Nr(t,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var r=!1,a=0;t.forEach(function(s){var l=0,u=s.target,d=u.fromRect,c=Y(u),p=u.prevFromRect,y=u.prevToRect,h=s.rect,b=te(u,!0);b&&(c.top-=b.f,c.left-=b.e),u.toRect=c,u.thisAnimationDuration&&Ei(p,c)&&!Ei(d,c)&&(h.top-c.top)/(h.left-c.left)===(d.top-c.top)/(d.left-c.left)&&(l=qr(h,p,y,o.options)),Ei(c,d)||(u.prevFromRect=d,u.prevToRect=c,l||(l=o.options.animation),o.animate(u,h,c,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(e),r?e=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),t=[]},animate:function(n,o,r,a){if(a){S(n,"transition",""),S(n,"transform","");var s=te(this.el),l=s&&s.a,u=s&&s.d,d=(o.left-r.left)/(l||1),c=(o.top-r.top)/(u||1);n.animatingX=!!d,n.animatingY=!!c,S(n,"transform","translate3d("+d+"px,"+c+"px,0)"),this.forRepaintDummy=Fr(n),S(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),S(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){S(n,"transition",""),S(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function Fr(t){return t.offsetWidth}function qr(t,e,i,n){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*n.animation}var Yt=[],$i={initializeByDefault:!0},Se={mount:function(e){for(var i in $i)$i.hasOwnProperty(i)&&!(i in e)&&(e[i]=$i[i]);Yt.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Yt.push(e)},pluginEvent:function(e,i,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=e+"Global";Yt.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][r]&&i[a.pluginName][r](Vt({sortable:i},n)),i.options[a.pluginName]&&i[a.pluginName][e]&&i[a.pluginName][e](Vt({sortable:i},n)))})},initializePlugins:function(e,i,n,o){Yt.forEach(function(s){var l=s.pluginName;if(!(!e.options[l]&&!s.initializeByDefault)){var u=new s(e,i,e.options);u.sortable=e,u.options=e.options,e[l]=u,Lt(n,u.defaults)}});for(var r in e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a<"u"&&(e.options[r]=a)}},getEventProperties:function(e,i){var n={};return Yt.forEach(function(o){typeof o.eventProperties=="function"&&Lt(n,o.eventProperties.call(i[o.pluginName],e))}),n},modifyOption:function(e,i,n){var o;return Yt.forEach(function(r){e[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[i]=="function"&&(o=r.optionListeners[i].call(e[r.pluginName],n))}),o}};function jr(t){var e=t.sortable,i=t.rootEl,n=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,u=t.newIndex,d=t.oldDraggableIndex,c=t.newDraggableIndex,p=t.originalEvent,y=t.putSortable,h=t.extraEventProperties;if(e=e||i&&i[dt],!!e){var b,A=e.options,w="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!Rt&&!xe?b=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(b=document.createEvent("Event"),b.initEvent(n,!0,!0)),b.to=a||i,b.from=s||i,b.item=o||i,b.clone=r,b.oldIndex=l,b.newIndex=u,b.oldDraggableIndex=d,b.newDraggableIndex=c,b.originalEvent=p,b.pullMode=y?y.lastPutMode:void 0;var x=Vt(Vt({},h),Se.getEventProperties(n,e));for(var C in x)b[C]=x[C];i&&i.dispatchEvent(b),A[w]&&A[w].call(e,b)}}var Zr=["evt"],ut=function(e,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=Or(n,Zr);Se.pluginEvent.bind(E)(e,i,Vt({dragEl:f,parentEl:z,ghostEl:$,rootEl:O,nextEl:jt,lastDownEl:He,cloneEl:k,cloneHidden:Nt,dragStarted:se,putSortable:Q,activeSortable:E.active,originalEvent:o,oldIndex:Qt,oldDraggableIndex:he,newIndex:gt,newDraggableIndex:Pt,hideGhostForTarget:Gn,unhideGhostForTarget:Jn,cloneNowHidden:function(){Nt=!0},cloneNowShown:function(){Nt=!1},dispatchSortableEvent:function(s){st({sortable:i,name:s,originalEvent:o})}},r))};function st(t){jr(Vt({putSortable:Q,cloneEl:k,targetEl:f,rootEl:O,oldIndex:Qt,oldDraggableIndex:he,newIndex:gt,newDraggableIndex:Pt},t))}var f,z,$,O,jt,He,k,Nt,Qt,gt,he,Pt,Ve,Q,Gt=!1,Fe=!1,qe=[],Ft,Et,Ai,Ci,vn,wn,se,Wt,fe,pe=!1,De=!1,Oe,ot,_i=[],Oi=!1,je=[],yi=typeof document<"u",Te=Zi,xn=xe||Rt?"cssFloat":"float",zr=yi&&!Bn&&!Zi&&"draggable"in document.createElement("div"),Xn=function(){if(yi){if(Rt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),Yn=function(e,i){var n=S(e),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=ee(e,0,i),a=ee(e,1,i),s=r&&S(r),l=a&&S(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Y(r).width,d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+Y(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var c=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===c)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=o&&n[xn]==="none"||a&&n[xn]==="none"&&u+d>o)?"vertical":"horizontal"},Xr=function(e,i,n){var o=n?e.left:e.top,r=n?e.right:e.bottom,a=n?e.width:e.height,s=n?i.left:i.top,l=n?i.right:i.bottom,u=n?i.width:i.height;return o===s||r===l||o+a/2===s+u/2},Yr=function(e,i){var n;return qe.some(function(o){var r=o[dt].options.emptyInsertThreshold;if(!(!r||zi(o))){var a=Y(o),s=e>=a.left-r&&e<=a.right+r,l=i>=a.top-r&&i<=a.bottom+r;if(s&&l)return n=o}}),n},Wn=function(e){function i(r,a){return function(s,l,u,d){var c=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||c))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return i(r(s,l,u,d),a)(s,l,u,d);var p=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===p||r.join&&r.indexOf(p)>-1}}var n={},o=e.group;(!o||Ie(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=i(o.pull,!0),n.checkPut=i(o.put),n.revertClone=o.revertClone,e.group=n},Gn=function(){!Xn&&$&&S($,"display","none")},Jn=function(){!Xn&&$&&S($,"display","")};yi&&!Bn&&document.addEventListener("click",function(t){if(Fe)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Fe=!1,!1},!0);var qt=function(e){if(f){e=e.touches?e.touches[0]:e;var i=Yr(e.clientX,e.clientY);if(i){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);n.target=n.rootEl=i,n.preventDefault=void 0,n.stopPropagation=void 0,i[dt]._onDragOver(n)}}},Wr=function(e){f&&f.parentNode[dt]._isOutsideThisEl(e.target)};function E(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Lt({},e),t[dt]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Yn(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:E.supportPointer!==!1&&"PointerEvent"in window&&(!ce||Zi),emptyInsertThreshold:5};Se.initializePlugins(this,t,i);for(var n in i)!(n in e)&&(e[n]=i[n]);Wn(e);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=e.forceFallback?!1:zr,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?T(t,"pointerdown",this._onTapStart):(T(t,"mousedown",this._onTapStart),T(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(T(t,"dragover",this),T(t,"dragenter",this)),qe.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Lt(this,Ur())}E.prototype={constructor:E,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Wt=null)},_getDirection:function(e,i){return typeof this.options.direction=="function"?this.options.direction.call(this,e,i,f):this.options.direction},_onTapStart:function(e){if(e.cancelable){var i=this,n=this.el,o=this.options,r=o.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(s||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,d=o.filter;if(na(n),!f&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||o.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&ce&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=$t(l,o.draggable,n,!1),!(l&&l.animated)&&He!==l)){if(Qt=vt(l),he=vt(l,o.draggable),typeof d=="function"){if(d.call(this,e,l,this)){st({sortable:i,rootEl:u,name:"filter",targetEl:l,toEl:n,fromEl:n}),ut("filter",i,{evt:e}),r&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(c){if(c=$t(u,c.trim(),n,!1),c)return st({sortable:i,rootEl:c,name:"filter",targetEl:l,fromEl:n,toEl:n}),ut("filter",i,{evt:e}),!0}),d)){r&&e.preventDefault();return}o.handle&&!$t(u,o.handle,n,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,i,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!f&&n.parentNode===r){var u=Y(n);if(O=r,f=n,z=f.parentNode,jt=f.nextSibling,He=n,Ve=a.group,E.dragged=f,Ft={target:f,clientX:(i||e).clientX,clientY:(i||e).clientY},vn=Ft.clientX-u.left,wn=Ft.clientY-u.top,this._lastX=(i||e).clientX,this._lastY=(i||e).clientY,f.style["will-change"]="all",l=function(){if(ut("delayEnded",o,{evt:e}),E.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!gn&&o.nativeDraggable&&(f.draggable=!0),o._triggerDragStart(e,i),st({sortable:o,name:"choose",originalEvent:e}),pt(f,a.chosenClass,!0)},a.ignore.split(",").forEach(function(d){Fn(f,d.trim(),Vi)}),T(s,"dragover",qt),T(s,"mousemove",qt),T(s,"touchmove",qt),a.supportPointer?(T(s,"pointerup",o._onDrop),!this.nativeDraggable&&T(s,"pointercancel",o._onDrop)):(T(s,"mouseup",o._onDrop),T(s,"touchend",o._onDrop),T(s,"touchcancel",o._onDrop)),gn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,f.draggable=!0),ut("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(xe||Rt))){if(E.eventCanceled){this._onDrop();return}a.supportPointer?(T(s,"pointerup",o._disableDelayedDrag),T(s,"pointercancel",o._disableDelayedDrag)):(T(s,"mouseup",o._disableDelayedDrag),T(s,"touchend",o._disableDelayedDrag),T(s,"touchcancel",o._disableDelayedDrag)),T(s,"mousemove",o._delayedDragTouchMoveHandler),T(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&T(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var i=e.touches?e.touches[0]:e;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){f&&Vi(f),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;D(e,"mouseup",this._disableDelayedDrag),D(e,"touchend",this._disableDelayedDrag),D(e,"touchcancel",this._disableDelayedDrag),D(e,"pointerup",this._disableDelayedDrag),D(e,"pointercancel",this._disableDelayedDrag),D(e,"mousemove",this._delayedDragTouchMoveHandler),D(e,"touchmove",this._delayedDragTouchMoveHandler),D(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,i){i=i||e.pointerType=="touch"&&e,!this.nativeDraggable||i?this.options.supportPointer?T(document,"pointermove",this._onTouchMove):i?T(document,"touchmove",this._onTouchMove):T(document,"mousemove",this._onTouchMove):(T(f,"dragend",this),T(O,"dragstart",this._onDragStart));try{document.selection?Pe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,i){if(Gt=!1,O&&f){ut("dragStarted",this,{evt:i}),this.nativeDraggable&&T(document,"dragover",Wr);var n=this.options;!e&&pt(f,n.dragClass,!1),pt(f,n.ghostClass,!0),E.active=this,e&&this._appendGhost(),st({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if(Et){this._lastX=Et.clientX,this._lastY=Et.clientY,Gn();for(var e=document.elementFromPoint(Et.clientX,Et.clientY),i=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Et.clientX,Et.clientY),e!==i);)i=e;if(f.parentNode[dt]._isOutsideThisEl(e),i)do{if(i[dt]){var n=void 0;if(n=i[dt]._onDragOver({clientX:Et.clientX,clientY:Et.clientY,target:e,rootEl:i}),n&&!this.options.dragoverBubble)break}e=i}while(i=Un(i));Jn()}},_onTouchMove:function(e){if(Ft){var i=this.options,n=i.fallbackTolerance,o=i.fallbackOffset,r=e.touches?e.touches[0]:e,a=$&&te($,!0),s=$&&a&&a.a,l=$&&a&&a.d,u=Te&&ot&&bn(ot),d=(r.clientX-Ft.clientX+o.x)/(s||1)+(u?u[0]-_i[0]:0)/(s||1),c=(r.clientY-Ft.clientY+o.y)/(l||1)+(u?u[1]-_i[1]:0)/(l||1);if(!E.active&&!Gt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if($){a?(a.e+=d-(Ai||0),a.f+=c-(Ci||0)):a={a:1,b:0,c:0,d:1,e:d,f:c};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");S($,"webkitTransform",p),S($,"mozTransform",p),S($,"msTransform",p),S($,"transform",p),Ai=d,Ci=c,Et=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!$){var e=this.options.fallbackOnBody?document.body:O,i=Y(f,!0,Te,!0,e),n=this.options;if(Te){for(ot=e;S(ot,"position")==="static"&&S(ot,"transform")==="none"&&ot!==document;)ot=ot.parentNode;ot!==document.body&&ot!==document.documentElement?(ot===document&&(ot=_t()),i.top+=ot.scrollTop,i.left+=ot.scrollLeft):ot=_t(),_i=bn(ot)}$=f.cloneNode(!0),pt($,n.ghostClass,!1),pt($,n.fallbackClass,!0),pt($,n.dragClass,!0),S($,"transition",""),S($,"transform",""),S($,"box-sizing","border-box"),S($,"margin",0),S($,"top",i.top),S($,"left",i.left),S($,"width",i.width),S($,"height",i.height),S($,"opacity","0.8"),S($,"position",Te?"absolute":"fixed"),S($,"zIndex","100000"),S($,"pointerEvents","none"),E.ghost=$,e.appendChild($),S($,"transform-origin",vn/parseInt($.style.width)*100+"% "+wn/parseInt($.style.height)*100+"%")}},_onDragStart:function(e,i){var n=this,o=e.dataTransfer,r=n.options;if(ut("dragStart",this,{evt:e}),E.eventCanceled){this._onDrop();return}ut("setupClone",this),E.eventCanceled||(k=Zn(f),k.removeAttribute("id"),k.draggable=!1,k.style["will-change"]="",this._hideClone(),pt(k,this.options.chosenClass,!1),E.clone=k),n.cloneId=Pe(function(){ut("clone",n),!E.eventCanceled&&(n.options.removeCloneOnHide||O.insertBefore(k,f),n._hideClone(),st({sortable:n,name:"clone"}))}),!i&&pt(f,r.dragClass,!0),i?(Fe=!0,n._loopId=setInterval(n._emulateDragOver,50)):(D(document,"mouseup",n._onDrop),D(document,"touchend",n._onDrop),D(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,f)),T(document,"drop",n),S(f,"transform","translateZ(0)")),Gt=!0,n._dragStartId=Pe(n._dragStarted.bind(n,i,e)),T(document,"selectstart",n),se=!0,window.getSelection().removeAllRanges(),ce&&S(document.body,"user-select","none")},_onDragOver:function(e){var i=this.el,n=e.target,o,r,a,s=this.options,l=s.group,u=E.active,d=Ve===l,c=s.sort,p=Q||u,y,h=this,b=!1;if(Oi)return;function A(It,Ee){ut(It,h,Vt({evt:e,isOwner:d,axis:y?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:c,fromSortable:p,target:n,completed:x,onMove:function(ne,$e){return Me(O,i,f,o,ne,Y(ne),e,$e)},changed:C},Ee))}function w(){A("dragOverAnimationCapture"),h.captureAnimationState(),h!==p&&p.captureAnimationState()}function x(It){return A("dragOverCompleted",{insertion:It}),It&&(d?u._hideClone():u._showClone(h),h!==p&&(pt(f,Q?Q.options.ghostClass:u.options.ghostClass,!1),pt(f,s.ghostClass,!0)),Q!==h&&h!==E.active?Q=h:h===E.active&&Q&&(Q=null),p===h&&(h._ignoreWhileAnimating=n),h.animateAll(function(){A("dragOverAnimationComplete"),h._ignoreWhileAnimating=null}),h!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===f&&!f.animated||n===i&&!n.animated)&&(Wt=null),!s.dragoverBubble&&!e.rootEl&&n!==document&&(f.parentNode[dt]._isOutsideThisEl(e.target),!It&&qt(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function C(){gt=vt(f),Pt=vt(f,s.draggable),st({sortable:h,name:"change",toEl:i,newIndex:gt,newDraggableIndex:Pt,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=$t(n,s.draggable,i,!0),A("dragOver"),E.eventCanceled)return b;if(f.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||h._ignoreWhileAnimating===n)return x(!1);if(Fe=!1,u&&!s.disabled&&(d?c||(a=z!==O):Q===this||(this.lastPutMode=Ve.checkPull(this,u,f,e))&&l.checkPut(this,u,f,e))){if(y=this._getDirection(e,n)==="vertical",o=Y(f),A("dragOverValid"),E.eventCanceled)return b;if(a)return z=O,w(),this._hideClone(),A("revert"),E.eventCanceled||(jt?O.insertBefore(f,jt):O.appendChild(f)),x(!0);var M=zi(i,s.draggable);if(!M||Qr(e,y,this)&&!M.animated){if(M===f)return x(!1);if(M&&i===e.target&&(n=M),n&&(r=Y(n)),Me(O,i,f,o,n,r,e,!!n)!==!1)return w(),M&&M.nextSibling?i.insertBefore(f,M.nextSibling):i.appendChild(f),z=i,C(),x(!0)}else if(M&&Kr(e,y,this)){var U=ee(i,0,s,!0);if(U===f)return x(!1);if(n=U,r=Y(n),Me(O,i,f,o,n,r,e,!1)!==!1)return w(),i.insertBefore(f,U),z=i,C(),x(!0)}else if(n.parentNode===i){r=Y(n);var _=0,F,J=f.parentNode!==i,q=!Xr(f.animated&&f.toRect||o,n.animated&&n.toRect||r,y),ht=y?"top":"left",I=yn(n,"top","top")||yn(f,"top","top"),ft=I?I.scrollTop:void 0;Wt!==n&&(F=r[ht],pe=!1,De=!q&&s.invertSwap||J),_=ta(e,n,r,y,q?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,De,Wt===n);var W;if(_!==0){var yt=vt(f);do yt-=_,W=z.children[yt];while(W&&(S(W,"display")==="none"||W===$))}if(_===0||W===n)return x(!1);Wt=n,fe=_;var wt=n.nextElementSibling,xt=!1;xt=_===1;var Ut=Me(O,i,f,o,n,r,e,xt);if(Ut!==!1)return(Ut===1||Ut===-1)&&(xt=Ut===1),Oi=!0,setTimeout(Jr,30),w(),xt&&!wt?i.appendChild(f):n.parentNode.insertBefore(f,xt?wt:n),I&&jn(I,0,ft-I.scrollTop),z=f.parentNode,F!==void 0&&!De&&(Oe=Math.abs(F-Y(n)[ht])),C(),x(!0)}if(i.contains(f))return x(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){D(document,"mousemove",this._onTouchMove),D(document,"touchmove",this._onTouchMove),D(document,"pointermove",this._onTouchMove),D(document,"dragover",qt),D(document,"mousemove",qt),D(document,"touchmove",qt)},_offUpEvents:function(){var e=this.el.ownerDocument;D(e,"mouseup",this._onDrop),D(e,"touchend",this._onDrop),D(e,"pointerup",this._onDrop),D(e,"pointercancel",this._onDrop),D(e,"touchcancel",this._onDrop),D(document,"selectstart",this)},_onDrop:function(e){var i=this.el,n=this.options;if(gt=vt(f),Pt=vt(f,n.draggable),ut("drop",this,{evt:e}),z=f&&f.parentNode,gt=vt(f),Pt=vt(f,n.draggable),E.eventCanceled){this._nulling();return}Gt=!1,De=!1,pe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Pi(this.cloneId),Pi(this._dragStartId),this.nativeDraggable&&(D(document,"drop",this),D(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ce&&S(document.body,"user-select",""),S(f,"transform",""),e&&(se&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),$&&$.parentNode&&$.parentNode.removeChild($),(O===z||Q&&Q.lastPutMode!=="clone")&&k&&k.parentNode&&k.parentNode.removeChild(k),f&&(this.nativeDraggable&&D(f,"dragend",this),Vi(f),f.style["will-change"]="",se&&!Gt&&pt(f,Q?Q.options.ghostClass:this.options.ghostClass,!1),pt(f,this.options.chosenClass,!1),st({sortable:this,name:"unchoose",toEl:z,newIndex:null,newDraggableIndex:null,originalEvent:e}),O!==z?(gt>=0&&(st({rootEl:z,name:"add",toEl:z,fromEl:O,originalEvent:e}),st({sortable:this,name:"remove",toEl:z,originalEvent:e}),st({rootEl:z,name:"sort",toEl:z,fromEl:O,originalEvent:e}),st({sortable:this,name:"sort",toEl:z,originalEvent:e})),Q&&Q.save()):gt!==Qt&&gt>=0&&(st({sortable:this,name:"update",toEl:z,originalEvent:e}),st({sortable:this,name:"sort",toEl:z,originalEvent:e})),E.active&&((gt==null||gt===-1)&&(gt=Qt,Pt=he),st({sortable:this,name:"end",toEl:z,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){ut("nulling",this),O=f=z=$=jt=k=He=Nt=Ft=Et=se=gt=Pt=Qt=he=Wt=fe=Q=Ve=E.dragged=E.ghost=E.clone=E.active=null,je.forEach(function(e){e.checked=!0}),je.length=Ai=Ci=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":f&&(this._onDragOver(e),Gr(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],i,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)i=n[o],$t(i,a.draggable,this.el,!1)&&e.push(i.getAttribute(a.dataIdAttr)||ia(i));return e},sort:function(e,i){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];$t(s,this.options.draggable,o,!1)&&(n[r]=s)},this),i&&this.captureAnimationState(),e.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),i&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,i){return $t(e,i||this.options.draggable,this.el,!1)},option:function(e,i){var n=this.options;if(i===void 0)return n[e];var o=Se.modifyOption(this,e,i);typeof o<"u"?n[e]=o:n[e]=i,e==="group"&&Wn(n)},destroy:function(){ut("destroy",this);var e=this.el;e[dt]=null,D(e,"mousedown",this._onTapStart),D(e,"touchstart",this._onTapStart),D(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(D(e,"dragover",this),D(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),qe.splice(qe.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Nt){if(ut("hideClone",this),E.eventCanceled)return;S(k,"display","none"),this.options.removeCloneOnHide&&k.parentNode&&k.parentNode.removeChild(k),Nt=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Nt){if(ut("showClone",this),E.eventCanceled)return;f.parentNode==O&&!this.options.group.revertClone?O.insertBefore(k,f):jt?O.insertBefore(k,jt):O.appendChild(k),this.options.group.revertClone&&this.animate(f,k),S(k,"display",""),Nt=!1}}};function Gr(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Me(t,e,i,n,o,r,a,s){var l,u=t[dt],d=u.options.onMove,c;return window.CustomEvent&&!Rt&&!xe?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=i,l.draggedRect=n,l.related=o||e,l.relatedRect=r||Y(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),d&&(c=d.call(u,l,a)),c}function Vi(t){t.draggable=!1}function Jr(){Oi=!1}function Kr(t,e,i){var n=Y(ee(i.el,0,i.options,!0)),o=zn(i.el,i.options,$),r=10;return e?t.clientX<o.left-r||t.clientY<n.top&&t.clientX<n.right:t.clientY<o.top-r||t.clientY<n.bottom&&t.clientX<n.left}function Qr(t,e,i){var n=Y(zi(i.el,i.options.draggable)),o=zn(i.el,i.options,$),r=10;return e?t.clientX>o.right+r||t.clientY>n.bottom&&t.clientX>n.left:t.clientY>o.bottom+r||t.clientX>n.right&&t.clientY>n.top}function ta(t,e,i,n,o,r,a,s){var l=n?t.clientY:t.clientX,u=n?i.height:i.width,d=n?i.top:i.left,c=n?i.bottom:i.right,p=!1;if(!a){if(s&&Oe<u*o){if(!pe&&(fe===1?l>d+u*r/2:l<c-u*r/2)&&(pe=!0),pe)p=!0;else if(fe===1?l<d+Oe:l>c-Oe)return-fe}else if(l>d+u*(1-o)/2&&l<c-u*(1-o)/2)return ea(e)}return p=p||a,p&&(l<d+u*r/2||l>c-u*r/2)?l>d+u/2?1:-1:0}function ea(t){return vt(f)<vt(t)?1:-1}function ia(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,n=0;i--;)n+=e.charCodeAt(i);return n.toString(36)}function na(t){je.length=0;for(var e=t.getElementsByTagName("input"),i=e.length;i--;){var n=e[i];n.checked&&je.push(n)}}function Pe(t){return setTimeout(t,0)}function Pi(t){return clearTimeout(t)}yi&&T(document,"touchmove",function(t){(E.active||Gt)&&t.cancelable&&t.preventDefault()});E.utils={on:T,off:D,css:S,find:Fn,is:function(e,i){return!!$t(e,i,e,!1)},extend:Br,throttle:qn,closest:$t,toggleClass:pt,clone:Zn,index:vt,nextTick:Pe,cancelNextTick:Pi,detectDirection:Yn,getChild:ee,expando:dt};E.get=function(t){return t[dt]};E.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(E.utils=Vt(Vt({},E.utils),n.utils)),Se.mount(n)})};E.create=function(t,e){return new E(t,e)};E.version=Pr;var X=[],le,Ni,Bi=!1,Di,Ti,Ze,ue;function oa(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(i){var n=i.originalEvent;this.sortable.nativeDraggable?T(document,"dragover",this._handleAutoScroll):this.options.supportPointer?T(document,"pointermove",this._handleFallbackAutoScroll):n.touches?T(document,"touchmove",this._handleFallbackAutoScroll):T(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var n=i.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?D(document,"dragover",this._handleAutoScroll):(D(document,"pointermove",this._handleFallbackAutoScroll),D(document,"touchmove",this._handleFallbackAutoScroll),D(document,"mousemove",this._handleFallbackAutoScroll)),Sn(),Ne(),kr()},nulling:function(){Ze=Ni=le=Bi=ue=Di=Ti=null,X.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,n){var o=this,r=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(r,a);if(Ze=i,n||this.options.forceAutoScrollFallback||xe||Rt||ce){Mi(i,this.options,s,n);var l=kt(s,!0);Bi&&(!ue||r!==Di||a!==Ti)&&(ue&&Sn(),ue=setInterval(function(){var u=kt(document.elementFromPoint(r,a),!0);u!==l&&(l=u,Ne()),Mi(i,o.options,u,n)},10),Di=r,Ti=a)}else{if(!this.options.bubbleScroll||kt(s,!0)===_t()){Ne();return}Mi(i,this.options,kt(s,!1),!1)}}},Lt(t,{pluginName:"scroll",initializeByDefault:!0})}function Ne(){X.forEach(function(t){clearInterval(t.pid)}),X=[]}function Sn(){clearInterval(ue)}var Mi=qn(function(t,e,i,n){if(e.scroll){var o=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=_t(),u=!1,d;Ni!==i&&(Ni=i,Ne(),le=e.scroll,d=e.scrollFn,le===!0&&(le=kt(i,!0)));var c=0,p=le;do{var y=p,h=Y(y),b=h.top,A=h.bottom,w=h.left,x=h.right,C=h.width,M=h.height,U=void 0,_=void 0,F=y.scrollWidth,J=y.scrollHeight,q=S(y),ht=y.scrollLeft,I=y.scrollTop;y===l?(U=C<F&&(q.overflowX==="auto"||q.overflowX==="scroll"||q.overflowX==="visible"),_=M<J&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflowY==="visible")):(U=C<F&&(q.overflowX==="auto"||q.overflowX==="scroll"),_=M<J&&(q.overflowY==="auto"||q.overflowY==="scroll"));var ft=U&&(Math.abs(x-o)<=a&&ht+C<F)-(Math.abs(w-o)<=a&&!!ht),W=_&&(Math.abs(A-r)<=a&&I+M<J)-(Math.abs(b-r)<=a&&!!I);if(!X[c])for(var yt=0;yt<=c;yt++)X[yt]||(X[yt]={});(X[c].vx!=ft||X[c].vy!=W||X[c].el!==y)&&(X[c].el=y,X[c].vx=ft,X[c].vy=W,clearInterval(X[c].pid),(ft!=0||W!=0)&&(u=!0,X[c].pid=setInterval((function(){n&&this.layer===0&&E.active._onTouchMove(Ze);var wt=X[this.layer].vy?X[this.layer].vy*s:0,xt=X[this.layer].vx?X[this.layer].vx*s:0;typeof d=="function"&&d.call(E.dragged.parentNode[dt],xt,wt,t,Ze,X[this.layer].el)!=="continue"||jn(X[this.layer].el,xt,wt)}).bind({layer:c}),24))),c++}while(e.bubbleScroll&&p!==l&&(p=kt(p,!1)));Bi=u}},30),Kn=function(e){var i=e.originalEvent,n=e.putSortable,o=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(i){var u=n||r;s();var d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,c=document.elementFromPoint(d.clientX,d.clientY);l(),u&&!u.el.contains(c)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function Xi(){}Xi.prototype={startIndex:null,dragStart:function(e){var i=e.oldDraggableIndex;this.startIndex=i},onSpill:function(e){var i=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=ee(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(i,o):this.sortable.el.appendChild(i),this.sortable.animateAll(),n&&n.animateAll()},drop:Kn};Lt(Xi,{pluginName:"revertOnSpill"});function Yi(){}Yi.prototype={onSpill:function(e){var i=e.dragEl,n=e.putSortable,o=n||this.sortable;o.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),o.animateAll()},drop:Kn};Lt(Yi,{pluginName:"removeOnSpill"});E.mount(new oa);E.mount(Yi,Xi);const ra=t=>{const e=t.item;let i=Array.prototype.slice.call(e.parentNode.childNodes);return i=i.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),i},aa=(t,e,i,n,o,r)=>{const s=t.item.parentNode;for(const b of i)s.appendChild(b);if(t.oldIndex==t.newIndex)return;const l=n.getArray(),u=t.item.querySelector("eox-layercontrol-layer").layer.get(o),d=l.find(b=>b.get(o)===u),c=r.dataset.layer,p=l.find(b=>b.get(o)==c);let y,h;for(y=0;y<l.length;y++)if(l[y]==d){n.removeAt(y);break}for(h=0;h<l.length;h++)if(l[h]===p){y>h?n.insertAt(h,d):n.insertAt(h+1,d);break}e.requestUpdate()};function sa(t,e,i,n){let o=[],r=null;t._sortable=E.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),o=ra(a)},onMove:a=>{r=a.related},onEnd:a=>aa(a,n,o,e,i,r)})}function la(t,e,i,n){const o=t.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(e)||(a.set(e,s),r=!0),a.get(i)||(a.set(i,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function Wi(t,e,i){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(u=>u.get(a)===s)];const l=r.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>o(u.getLayers().getArray(),a,s)),n};return o(t,e,i),n}function ua(t,e,i){if(!t||!e)return!1;if(!Qn(t,i))return!0;const n=t.get("minZoom"),o=t.get("maxZoom"),r=e.getView().getZoom();return r>n&&r<o}function Qn(t,e){const i=t.get("minZoom"),n=t.get("maxZoom");return!!(e&&(i!==-1/0||n!==1/0))}function En(t,e){var o,r,a;return!t||!e?void 0:t.getLayers?"group":((a=(o=e.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(t.getSource?(r=t.getSource())==null?void 0:r.ol_uid:void 0))?"draw":t.declutter_!==void 0||t.get("type")==="Vector"?"vector":"raster"}const ca=(t,e,i)=>{var l,u;let n=e;const o=i.layer.getSource(),r=((u=(l=i.layerConfig.schema)==null?void 0:l.options)==null?void 0:u.removeProperties)??[],a={...t};r.forEach(d=>delete a[d]),o.updateParams?o.updateParams(a):o.getTileUrlFunction&&o.getTileUrlFunction()&&(n||(n=o.getTileUrlFunction()),o instanceof Po&&(o._updatedUrl=Si(o.getUrls()[0],t)),o.setTileUrlFunction((...d)=>{const c=new URL(n(...d));return r.forEach(p=>c.searchParams.delete(p)),Si(c.href,t)}),o.setKey(new Date().toISOString()));const s=document.querySelector("eox-map");if(s){const d=s.globe;if(d){const c=d.planet.layers.filter(p=>p.name==i.layer.get("id"))[0];c&&c.setUrl(Si(c.url,t)),window.eoxMapGlobe.refresh()}}return n};async function da(t,e,i){var s,l,u,d,c,p,y;const n="updateStyleVariables"in e,o="setStyle"in e,r=n?e.style_:i.style,a=Gi(t);if(r){const h=r.variables||{};r.variables={...h,...a}}if(n){const h=(t==null?void 0:t.variable)??(t==null?void 0:t.band);if(h!==void 0){const w=e.get("_lastVariable");if(h!==w){const x=await ba(e,String(h)),C=(x==null?void 0:x.targetMin)??Xe(e,String(h)).targetMin,M=(x==null?void 0:x.targetMax)??Xe(e,String(h)).targetMax;((i==null?void 0:i.autofill)===!0||((s=i==null?void 0:i.schema)==null?void 0:s.autofill)===!0||((l=r==null?void 0:r.variables)==null?void 0:l.min)!==void 0||((u=r==null?void 0:r.variables)==null?void 0:u.max)!==void 0||((c=(d=i==null?void 0:i.schema)==null?void 0:d.properties)==null?void 0:c.min)!==void 0||((y=(p=i==null?void 0:i.schema)==null?void 0:p.properties)==null?void 0:y.max)!==void 0)&&(t&&("min"in t&&(t.min=C),"max"in t&&(t.max=M)),a.min=C,a.max=M,r!=null&&r.variables&&(r.variables.min=C,r.variables.max=M))}}const b=e.get("_geozarrDimensions"),A=e.getSource?e.getSource():null;if(A&&typeof A.updateDimensions=="function"&&b){const w={};for(const x of Object.keys(b))t[x]!==void 0&&(w[x]=Number(t[x]));Object.keys(w).length>0&&A.updateDimensions(w)}e.updateStyleVariables(a)}else if(o&&r){const h=ha(r);e.setStyle(h)}}const Gi=t=>{const e={};for(const i in t)if(typeof t[i]=="object"&&t[i]!==null){const n=Gi(t[i]);for(const o in n)e[o]=n==null?void 0:n[o]}else e[i]=t==null?void 0:t[i];return e};function ha(t){let e=t;if("variables"in t){let i=JSON.stringify(t);const{variables:n}=t;for(const o in n)typeof n[o]=="number"?i=i.replaceAll(`["var","${o}"]`,String(n[o])):i=i.replaceAll(`["var","${o}"]`,`"${n[o]}"`);e=JSON.parse(i)}return e}const fa=(t,e,i)=>{if(!t)return;const n=Gi(e);let o,r;return Array.isArray(t)?r=structuredClone(t):r=[structuredClone(t)],o=r.filter(a=>{if(!("boundTo"in a))return!0;const s=a.boundTo.key,l=a.boundTo.value;return s in n&&n[s]==l}),o.length||(o=null),o==null?void 0:o.map(a=>{var s;if(delete a.boundTo,a.rangeProperty&&i){const l=n[a.rangeProperty];l&&i[l]?(a.range=i[l],delete a.rangeProperty):l&&(a.range=["#ffffff","#000000"])}return!("domainProperties"in a)||"domain"in a?a:(s=Object.keys(a))==null?void 0:s.reduce((l,u)=>(u==="domainProperties"?l.domain=a[u].map(d=>n[d]):l[u]=a[u],l),{})}).filter(Boolean)};function Li(t,e){var s,l,u,d,c,p,y,h,b;if(!e)return null;let i={},n="updateStyleVariables"in t?t.styleVariables_||((s=t.style_)==null?void 0:s.variables)||((u=(l=t.get)==null?void 0:l.call(t,"style"))==null?void 0:u.variables):(d=e.style)==null?void 0:d.variables;if((e.type==="style"||e.style)&&n)i={...n};else if((p=(c=t.getSource())==null?void 0:c.getParams)!=null&&p.call(c))i=t.getSource().getParams();else if((h=(y=t.getSource())==null?void 0:y.getTileUrlFunction)!=null&&h.call(y))try{const A=t.getSource().getTileUrlFunction()([0,0,0]);if(A){const w=new URL(A);i={};for(const[x,C]of w.searchParams.entries()){const M=w.searchParams.getAll(x);i[x]=M.length>1?M:C}}}catch(A){console.error("Error parsing start values from tile URL",A)}else return null;const o=e;i.min===void 0&&o.min!==void 0&&(i.min=o.min),i.max===void 0&&o.max!==void 0&&(i.max=o.max),i.bands===void 0&&o.bands!==void 0&&(i.bands=o.bands),i.band===void 0&&o.band!==void 0&&(i.band=o.band),i.variable===void 0&&(i.variable=o.variable??o.band??(Array.isArray(o.bands)&&o.bands.length>0?o.bands[0]:void 0)??((b=t.get)==null?void 0:b.call(t,"_lastVariable")));const r=ze(e.schema),a=to(Object.keys(r).length?r:e.schema,i,e.schema,t);return Object.keys(a).length?a:null}function ze(t,e=t,i=new Set){if(!t||typeof t!="object")return{};const n={};typeof t.$ref=="string"&&!i.has(t.$ref)&&(i.add(t.$ref),Object.assign(n,ze(pa(t.$ref,e),e,i)));for(const o of["anyOf","oneOf","allOf"])if(Array.isArray(t[o]))for(const r of t[o])Object.assign(n,ze(r,e,i));return Object.assign(n,t.properties)}function to(t,e,i=t,n=null){var r,a,s,l,u,d,c,p,y,h,b,A;let o={};for(const w in t){const x=(r=t[w])==null?void 0:r.type;if(x&&x!=="object"&&e[w]!==void 0){const C=["number","integer"].includes(x)?Number(e[w]):e[w];o[w]=Number.isNaN(C)?e[w]:C}else if(w==="variable"&&x&&x!=="object"&&n){const C=n.getSource?n.getSource():null,M=((a=n.get)==null?void 0:a.call(n,"_lastVariable"))||(typeof(C==null?void 0:C.getBands)=="function"?C.getBands():null)||(C==null?void 0:C.bands_)||((u=(l=(s=n.get)==null?void 0:s.call(n,"_jsonDefinition"))==null?void 0:l.source)==null?void 0:u.bands)||((c=(d=n.get)==null?void 0:d.call(n,"source"))==null?void 0:c.bands),U=Array.isArray(M)&&M.length>0?M[0]:typeof M=="string"?M:void 0;U&&(!Array.isArray((p=t[w])==null?void 0:p.enum)||t[w].enum.includes(U))?o[w]=U:((y=t[w])==null?void 0:y.default)!==void 0?o[w]=t[w].default:Array.isArray((h=t[w])==null?void 0:h.enum)&&t[w].enum.length>0&&(o[w]=t[w].enum[0])}else if(x&&x!=="object"&&((b=t[w])==null?void 0:b.default)!==void 0)o[w]=t[w].default;else if(x&&x!=="object"&&Array.isArray((A=t[w])==null?void 0:A.enum)&&t[w].enum.length>0)o[w]=t[w].enum[0];else{const C=to(ze(t[w],i),e,i,n);Object.keys(C).length>0&&(o[w]=C)}}return o}function pa(t,e){if(t.startsWith("#/"))return t.slice(2).split("/").reduce((i,n)=>i==null?void 0:i[n.replace(/~1/g,"/").replace(/~0/g,"~")],e)}const eo=(t,e)=>t==null?void 0:t.filter(i=>["remove","sort"].filter(n=>e!=null&&e.get("layerControlDisable")?n!=="sort":!0).includes(i)),io=(t,e)=>t==null?void 0:t.filter(i=>{var o;let n=!0;return["remove","sort"].includes(i)&&(n=!1),i==="info"&&(n=e.get("description")),i==="config"&&(n=e.get("layerConfig")),i==="datetime"&&(n=(o=e.get("layerDatetime"))==null?void 0:o.controlValues),i==="legend"&&(n=e.get("layerLegend")),n}),ga=(t,e,i)=>g`
  <button
    slot="${t}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${i?t:g`<i class="small primary-text">${e}</i>`}
  </button>
`,no=(t,e)=>g`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:i}=t;i==null||i.set("layerControlOptional",!0),i==null||i.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:i,bubbles:!0}))}}
  >
    ${t.unstyled?"x":g`<i class="small red-text">${e}</i>`}
  </button>
`,oo=(t,e,i)=>g`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${t.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${i?"═":g`<i class="small primary-text">${e}</i>`}
  </button>
`;function ge(){return{dots:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const ro=t=>{var i;const e=["layerControlHide","layerControlOptional"];return(i=t==null?void 0:t.getArray())==null?void 0:i.filter(n=>e.every(o=>!n.get(o)))};function ma(t,e){var o,r;const i=(o=t.get("layerDatetime"))==null?void 0:o.sliceMap;if(!i||!(e in i))return;const n=(r=t.getSource)==null?void 0:r.call(t);typeof(n==null?void 0:n.updateDimensions)=="function"&&n.updateDimensions({time:i[e]})}function ao(t,e){e.dispatchEvent(new CustomEvent("datetime:updated",{detail:t.detail,bubbles:!0}))}function $n(t,e){const i=Math.abs(e-t);return i===0?.01:i<=.01?1e-4:i<=.1?.001:i<=1?.01:i<=10?.1:1}function ya(t,e,i){if(Array.isArray(i)&&i.length===2&&typeof i[0]=="number"&&typeof i[1]=="number"&&!Number.isNaN(i[0])&&!Number.isNaN(i[1])){const u=i[0],d=i[1],c=$n(u,d);return{minProp:{type:"number",format:"number",title:"Min Value",default:t!==void 0?t:u,minimum:u,maximum:d,step:c},maxProp:{type:"number",format:"number",title:"Max Value",default:e!==void 0?e:d,minimum:u,maximum:d,step:c}}}const o=t!==void 0?t:0,r=e!==void 0?e:1,a=typeof t=="number"?Math.min(0,t):0,s=typeof e=="number"&&e>a?e:a+1,l=$n(a,s);return{minProp:{type:"number",format:"range",title:"Min Value",default:o,minimum:a,maximum:s,step:l},maxProp:{type:"number",format:"range",title:"Max Value",default:r,minimum:a,maximum:s,step:l}}}function Xe(t,e,i){const n=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,o=n==null?void 0:n[e],r=o==null?void 0:o.valid_range;let a,s;return Array.isArray(r)&&r.length===2&&typeof r[0]=="number"&&typeof r[1]=="number"&&!Number.isNaN(r[0])&&!Number.isNaN(r[1])&&(a=r[0],s=r[1]),{targetMin:a!==void 0?a:0,targetMax:s!==void 0?s:1}}async function ba(t,e){var w,x,C,M,U,_,F,J,q,ht,I,ft,W,yt,wt,xt,Ut,It,Ee,bi,ne,$e,Ji,Ki,Qi,tn,en,nn,on,rn,an,sn,ln,un,cn,dn;if(!t||!e)return;const i=t.getSource?t.getSource():null,n=t.get("_geozarrSourceUrl")||((x=(w=t.get("_jsonDefinition"))==null?void 0:w.source)==null?void 0:x.url)||((C=t.get("source"))==null?void 0:C.url)||t.get("_geozarrRootUrl");let o=i;if(i){if(typeof i.setBands=="function")i.setBands([e]);else if(n&&i.constructor){const j=i.constructor,H=((M=i.getProjection)==null?void 0:M.call(i))||t.get("_mapProjection")||((_=(U=t.get("_jsonDefinition"))==null?void 0:U.source)==null?void 0:_.projection),at=new j({url:n,bands:[e],crossOrigin:"anonymous",...H?{projection:H}:{}});t.setSource(at),o=at}}if(typeof(o==null?void 0:o.ready)=="function")try{await o.ready()}catch{}t.set("_lastVariable",e);const r=t.get("bands")||(Array.isArray((J=(F=t.get("_jsonDefinition"))==null?void 0:F.source)==null?void 0:J.bands)?(ht=(q=t.get("_jsonDefinition"))==null?void 0:q.source)==null?void 0:ht.bands:null),a=Array.isArray(r)&&r.length>1?r:[e];t.get("bands")!==void 0&&t.set("bands",a),t.get("band")!==void 0&&t.set("band",e);const s=t.get("layerConfig"),{targetMin:l,targetMax:u}=Xe(t,e),d=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,c=(I=d==null?void 0:d[e])==null?void 0:I.valid_range,{minProp:p,maxProp:y}=ya(l,u,c);let h=s;if(s){const j=(s==null?void 0:s.autofill)===!0||((ft=s==null?void 0:s.schema)==null?void 0:ft.autofill)===!0;let H;(W=s.schema)!=null&&W.properties&&(H={...s.schema.properties},H.variable&&(H.variable={...H.variable,default:e}),H.band&&(H.band={...H.band,default:e}),H.bands&&(H.bands={...H.bands,default:H.bands.type==="array"?a:a[0]}),H.redMax||H.greenMax||H.blueMax||((H.min!==void 0||j)&&(H.min={...H.min||{},...p,default:l}),(H.max!==void 0||j)&&(H.max={...H.max||{},...y,default:u}))),h={...s,bands:a,band:e,...j||s.min!==void 0?{min:l}:{},...j||s.max!==void 0?{max:u}:{},schema:H?{...s.schema,properties:H}:s.schema},t.set("layerConfig",h)}if((s==null?void 0:s.autofill)===!0||((yt=s==null?void 0:s.schema)==null?void 0:yt.autofill)===!0||((wt=t.styleVariables_)==null?void 0:wt.min)!==void 0||((xt=t.styleVariables_)==null?void 0:xt.max)!==void 0||((It=(Ut=t.style_)==null?void 0:Ut.variables)==null?void 0:It.min)!==void 0||((bi=(Ee=t.style_)==null?void 0:Ee.variables)==null?void 0:bi.max)!==void 0||((Ji=($e=(ne=t.get)==null?void 0:ne.call(t,"style"))==null?void 0:$e.variables)==null?void 0:Ji.min)!==void 0||((tn=(Qi=(Ki=t.get)==null?void 0:Ki.call(t,"style"))==null?void 0:Qi.variables)==null?void 0:tn.max)!==void 0||((nn=(en=s==null?void 0:s.schema)==null?void 0:en.properties)==null?void 0:nn.min)!==void 0||((rn=(on=s==null?void 0:s.schema)==null?void 0:on.properties)==null?void 0:rn.max)!==void 0){typeof t.updateStyleVariables=="function"&&t.updateStyleVariables({min:l,max:u}),t.styleVariables_&&(t.styleVariables_.min=l,t.styleVariables_.max=u),(an=t.style_)!=null&&an.variables&&(t.style_.variables.min=l,t.style_.variables.max=u);const j=(sn=t.get)==null?void 0:sn.call(t,"style");j!=null&&j.variables&&(j.variables.min=l,j.variables.max=u)}if(o&&typeof o.getDimensions=="function")try{const j=await o.getDimensions();if(j){const H={};for(const[at,St]of Object.entries(j)){if(at==="time"||!St||St.size<=0)continue;H[at]=St;const nt=t.get("layerConfig")||h,Ht=(nt==null?void 0:nt.autofill)===!0||((ln=nt==null?void 0:nt.schema)==null?void 0:ln.autofill)===!0;if((un=nt==null?void 0:nt.schema)!=null&&un.properties&&(nt.schema.properties[at]!==void 0||Ht)){const Ae=((cn=St.attributes)==null?void 0:cn.long_name)||at.charAt(0).toUpperCase()+at.slice(1),oe=(dn=St.attributes)==null?void 0:dn.units,re=oe?`${Ae} (${oe})`:Ae,Ot={...nt.schema.properties};Ot[at]={type:"integer",title:re,default:0,minimum:0,maximum:St.size-1,step:1,format:"range",...Ot[at]||{}},h={...nt,schema:{...nt.schema,properties:Ot}},t.set("layerConfig",h)}typeof o.updateDimensions=="function"&&o.updateDimensions({[at]:0})}if(t.set("_geozarrDimensions",H),j!=null&&j.time&&j.time.size>0){const at=j.time,{units:St}=at.attributes||{};let nt=0,Ht=1e3;if(St&&typeof St=="string"&&St.includes(" since ")){const K=St.split(" since ");let bt=K[1].trim();!bt.includes("T")&&!bt.includes("Z")&&(bt=bt.replace(" ","T")+"Z"),nt=Date.parse(bt)||0;const ae=K[0].toLowerCase();ae.includes("day")?Ht=86400*1e3:ae.includes("nanosecond")?Ht=1e-6:ae.includes("microsecond")?Ht=.001:ae.includes("millisecond")?Ht=1:ae.includes("second")&&(Ht=1e3)}const Ae=K=>typeof K=="string"?new Date(K):new Date(nt+Number(K)*Ht),oe=await Promise.all([...Array(at.size).keys()].map(async K=>{const bt=typeof o.getValue=="function"?await o.getValue("time",K):K;return{index:K,date:Ae(bt)}}));oe.sort((K,bt)=>K.date.getTime()-bt.date.getTime());const re={},Ot=oe.map(K=>{const bt=K.date.toISOString();return re[bt]=K.index,bt}),Ce=t.get("layerDatetime")||{},hn=Ce.currentStep&&Ot.includes(Ce.currentStep)?Ce.currentStep:Ot[0];t.set("layerDatetime",{showUTC:!0,slider:!0,navigation:!0,...Ce,controlValues:Ot,sliceMap:re,currentStep:hn});const To=Ot.map(K=>({date:K}));t.set("timeControlValues",To);const Mo=re[hn]??0;typeof o.updateDimensions=="function"&&o.updateDimensions({time:Mo})}}}catch(j){console.warn("Could not refresh GeoZarr dimensions for new band:",j)}return{targetMin:l,targetMax:u}}var so="Expected a function",An=NaN,va="[object Symbol]",wa=/^\s+|\s+$/g,xa=/^[-+]0x[0-9a-f]+$/i,Sa=/^0b[01]+$/i,Ea=/^0o[0-7]+$/i,$a=parseInt,Aa=typeof _e=="object"&&_e&&_e.Object===Object&&_e,Ca=typeof self=="object"&&self&&self.Object===Object&&self,_a=Aa||Ca||Function("return this")(),Va=Object.prototype,Da=Va.toString,Ta=Math.max,Ma=Math.min,Ri=function(){return _a.Date.now()};function La(t,e,i){var n,o,r,a,s,l,u=0,d=!1,c=!1,p=!0;if(typeof t!="function")throw new TypeError(so);e=Cn(e)||0,Ye(i)&&(d=!!i.leading,c="maxWait"in i,r=c?Ta(Cn(i.maxWait)||0,e):r,p="trailing"in i?!!i.trailing:p);function y(_){var F=n,J=o;return n=o=void 0,u=_,a=t.apply(J,F),a}function h(_){return u=_,s=setTimeout(w,e),d?y(_):a}function b(_){var F=_-l,J=_-u,q=e-F;return c?Ma(q,r-J):q}function A(_){var F=_-l,J=_-u;return l===void 0||F>=e||F<0||c&&J>=r}function w(){var _=Ri();if(A(_))return x(_);s=setTimeout(w,b(_))}function x(_){return s=void 0,p&&n?y(_):(n=o=void 0,a)}function C(){s!==void 0&&clearTimeout(s),u=0,n=l=o=s=void 0}function M(){return s===void 0?a:x(Ri())}function U(){var _=Ri(),F=A(_);if(n=arguments,o=this,l=_,F){if(s===void 0)return h(l);if(c)return s=setTimeout(w,e),y(l)}return s===void 0&&(s=setTimeout(w,e)),a}return U.cancel=C,U.flush=M,U}function Ra(t,e,i){var n=!0,o=!0;if(typeof t!="function")throw new TypeError(so);return Ye(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),La(t,e,{leading:n,maxWait:e,trailing:o})}function Ye(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ia(t){return!!t&&typeof t=="object"}function Ha(t){return typeof t=="symbol"||Ia(t)&&Da.call(t)==va}function Cn(t){if(typeof t=="number")return t;if(Ha(t))return An;if(Ye(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ye(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(wa,"");var i=Sa.test(t);return i||Ea.test(t)?$a(t.slice(2),i?2:8):xa.test(t)?An:+t}var Oa=Ra;const _n=No(Oa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=t=>t??zt;var mt,We,Ge;class lo extends At{constructor(){super();L(this,mt,[]);L(this,We,Ii`
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
  `);L(this,Ge,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return m(this,mt)?m(this,mt).length>1?m(this,mt):m(this,mt)[0]:null}set layerLegend(i){var n;i?Array.isArray(i)?lt(this,mt,i.map((o,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...o}})):lt(this,mt,[{id:(((n=this.layer)==null?void 0:n.get("id"))??"")+0,...i}]):lt(this,mt,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var i;lt(this,mt,(i=m(this,mt))==null?void 0:i.map(n=>(this.offsetWidth!==n.width&&(n.width=this.offsetWidth),{...n}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),g`
      <style>
        ${m(this,We)}
        ${!this.unstyled&&m(this,Ge)}
      </style>
      ${N(this.layerLegend,()=>g`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${m(this,mt).map((i,n,o)=>g`
                <color-legend
                  id="${i.id}"
                  width=${i.width??325}
                  scaleType="${Le(i.scaleType)}"
                  markType="${Le(i.markType)}"
                  titleText="${Le(i.title)}"
                  .range=${i.range}
                  .domain=${i.domain}
                  tickFormat="${Le(i.tickFormat)}"
                  .ticks=${i.ticks??5}
                  .tickValues=${i.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${n!==o.length-1?g`<div class="separator"></div>`:zt}
              `)}
          </div>
        `)}
    `}}mt=new WeakMap,We=new WeakMap,Ge=new WeakMap,Z(lo,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",lo);var P,rt,ye,Zt,be,ki,Je,Ke;class uo extends At{constructor(){super();L(this,be);L(this,P,{});L(this,rt,null);L(this,ye);L(this,Zt,i=>{var o,r,a,s,l,u,d,c,p;if(i.key==="layerConfig"){this.layerConfig=this.layer.get("layerConfig");const y=Li(this.layer,this.layerConfig)||{},h=(r=(o=this.layerConfig)==null?void 0:o.schema)==null?void 0:r.properties,b=((a=this.layerConfig)==null?void 0:a.autofill)===!0||((l=(s=this.layerConfig)==null?void 0:s.schema)==null?void 0:l.autofill)===!0;((u=this.layerConfig)==null?void 0:u.min)!==void 0&&(b||(h==null?void 0:h.min)!==void 0)&&(m(this,P).min=this.layerConfig.min),((d=this.layerConfig)==null?void 0:d.max)!==void 0&&(b||(h==null?void 0:h.max)!==void 0)&&(m(this,P).max=this.layerConfig.max);const A=this.layer.get("_lastVariable")||((c=this.layerConfig)==null?void 0:c.band)||(Array.isArray((p=this.layerConfig)==null?void 0:p.bands)?this.layerConfig.bands[0]:void 0);if(A&&(b||(h==null?void 0:h.variable)!==void 0||(h==null?void 0:h.band)!==void 0)&&((h==null?void 0:h.band)!==void 0?m(this,P).band=A:m(this,P).variable=A),lt(this,rt,{...m(this,P),...y}),h&&!b){const w=new Set(Object.keys(h));for(const x of Object.keys(m(this,rt)))w.has(x)||delete m(this,rt)[x]}lt(this,P,{...m(this,rt)}),this.requestUpdate()}});L(this,Je,Ii`
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
  `);L(this,Ke,Ii`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=_n(B(this,be,ki),1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}connectedCallback(){var i;super.connectedCallback(),(i=this.layer)!=null&&i.on&&this.layer.on("propertychange",m(this,Zt))}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.layer)!=null&&i.un&&this.layer.un("propertychange",m(this,Zt))}updated(i){var n,o,r;if(i.has("layer")){const a=i.get("layer");a!=null&&a.un&&a.un("propertychange",m(this,Zt)),(n=this.layer)!=null&&n.on&&this.layer.on("propertychange",m(this,Zt))}if(i.has("layerConfig")){const a=((o=this.layerConfig)==null?void 0:o.type)==="style"||(r=this.layerConfig)!=null&&r.style?100:1e3;this.throttleDataChange=_n(B(this,be,ki),a)}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l,u,d,c,p;const n={...Li(this.layer,this.layerConfig)||{},...m(this,P)},o=(u=(l=this.layerConfig)==null?void 0:l.schema)==null?void 0:u.properties,r=((d=this.layerConfig)==null?void 0:d.autofill)===!0||((p=(c=this.layerConfig)==null?void 0:c.schema)==null?void 0:p.autofill)===!0;if(o&&!r){const y=new Set(Object.keys(o));for(const h of Object.keys(n))y.has(h)||delete n[h]}const a=Object.keys(n).length?n:null;JSON.stringify(a)!==JSON.stringify(m(this,rt))&&lt(this,rt,a),lt(this,P,{...m(this,rt)}),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const s={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0,no_additional_properties:!0};return g`
      <style>
        ${m(this,Je)}
        ${!this.unstyled&&m(this,Ke)}
      </style>
      ${N(this.layerConfig,()=>g`
          ${N(this.layerConfig.legend,()=>g`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${fa(this.layerConfig.legend,m(this,rt),this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${m(this,rt)}
            .options=${s}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}P=new WeakMap,rt=new WeakMap,ye=new WeakMap,Zt=new WeakMap,be=new WeakSet,ki=async function(i){var a,s,l,u,d,c,p,y,h,b,A,w,x,C,M,U,_,F,J,q;const n=((a=m(this,P))==null?void 0:a.variable)??((s=m(this,P))==null?void 0:s.band)??((u=(l=this.layer)==null?void 0:l.get)==null?void 0:u.call(l,"_lastVariable"))??((d=this.layerConfig)==null?void 0:d.band)??(Array.isArray((c=this.layerConfig)==null?void 0:c.bands)?this.layerConfig.bands[0]:void 0),o=((p=i.detail)==null?void 0:p.variable)??((y=i.detail)==null?void 0:y.band),r=o!==void 0&&n!==void 0&&String(o)!==String(n);if(r){const{targetMin:ht,targetMax:I}=Xe(this.layer,String(o),this.layerConfig);i.detail&&(("min"in i.detail||((h=this.layerConfig)==null?void 0:h.min)!==void 0)&&(i.detail.min=ht),("max"in i.detail||((b=this.layerConfig)==null?void 0:b.max)!==void 0)&&(i.detail.max=I))}if(lt(this,P,{...i.detail}),((A=this.layerConfig)==null?void 0:A.type)==="style"||(w=this.layerConfig)!=null&&w.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?await da(m(this,P),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):lt(this,ye,ca(m(this,P),m(this,ye),this)),r){this.layerConfig=((C=(x=this.layer)==null?void 0:x.get)==null?void 0:C.call(x,"layerConfig"))||this.layerConfig;const ht=Li(this.layer,this.layerConfig)||{},I=(U=(M=this.layerConfig)==null?void 0:M.schema)==null?void 0:U.properties,ft=((_=this.layerConfig)==null?void 0:_.autofill)===!0||((J=(F=this.layerConfig)==null?void 0:F.schema)==null?void 0:J.autofill)===!0;if(lt(this,rt,{...m(this,P),...ht,...o&&(ft||(I==null?void 0:I.variable)!==void 0||(I==null?void 0:I.band)!==void 0)?(I==null?void 0:I.band)!==void 0?{band:o}:{variable:o}:{},...m(this,P).min!==void 0&&(ft||(I==null?void 0:I.min)!==void 0)?{min:m(this,P).min}:{},...m(this,P).max!==void 0&&(ft||(I==null?void 0:I.max)!==void 0)?{max:m(this,P).max}:{}}),I&&!ft){const yt=new Set(Object.keys(I));for(const wt of Object.keys(m(this,rt)))yt.has(wt)||delete m(this,rt)[wt]}lt(this,P,{...m(this,rt)});const W=(q=this.renderRoot)==null?void 0:q.querySelector("eox-jsonform");W!=null&&W.editor&&!W.editor.destroyed&&W.editor.ready&&W.editor.setValue(m(this,P))}this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:m(this,P),layer:this.layer}})),this.requestUpdate()},Je=new WeakMap,Ke=new WeakMap,Z(uo,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",uo);var ve,Qe,ho,ti,ei;class co extends At{constructor(){super();L(this,Qe);L(this,ve,Tn(ma,300));L(this,ti,"");L(this,ei,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}disconnectedCallback(){m(this,ve).flush(),super.disconnectedCallback()}render(){var i;return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),g`
      <style>
        ${m(this,ti)}
        ${!this.unstyled&&m(this,ei)}
      </style>
      ${N((i=this.layerDatetime)==null?void 0:i.controlValues,()=>g`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(n=>({date:n}))}]}
            @select=${B(this,Qe,ho)}
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
    `}}ve=new WeakMap,Qe=new WeakSet,ho=function(i){var a;const n=new Date(i.detail.date[0]),o=(a=this.layerDatetime.controlValues)==null?void 0:a.some(s=>typeof s=="string"&&s.includes("T"));let r;o?r=n.toISOString():r=(l=>`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`)(n),r!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:r,layer:this.layer}})),m(this,ve).call(this,this.layer,r),this.layerDatetime.currentStep=r,this.requestUpdate())},ti=new WeakMap,ei=new WeakMap,Z(co,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",co);var we,ii,ni;class fo extends At{constructor(){super();L(this,we,i=>(this.selectedTab===i||this.toolsAsList)&&"highlighted");L(this,ii,`
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
  `);L(this,ni,`
    ${Fi}
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.tabs,n=this.actions,o=n.length+i.length>1;return g`
      <style>
        ${m(this,ii)}
        ${!this.unstyled&&m(this,ni)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${N(o,()=>g`
            <nav>
              ${N(!this.toolsAsList,()=>g`
                  <div>
                    <!-- Labels for tabs -->
                    ${Re(i,(r,a)=>g`
                        <label
                          class=${m(this,we).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${Re(n,r=>g`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
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
          ${Re(i,(r,a)=>g`
              ${N(this.toolsAsList,()=>g`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${m(this,we).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
              ${N(this.toolsAsList&&a<i.length-1,()=>g`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}we=new WeakMap,ii=new WeakMap,ni=new WeakMap,Z(fo,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",fo);var oi,go,ri,ai;class po extends At{constructor(){super();L(this,oi);Z(this,"_removeButton",i=>no(this,i));Z(this,"_sortButton",i=>oo(this,i,this.unstyled));Z(this,"_button",(i,n)=>ga(i,n,this.unstyled));Z(this,"_getDefaultTools",i=>{var n,o;return g`
      <div slot="info-content">
        ${Ho(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Hi((n=this.layer)==null?void 0:n.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((o=this.layer)==null?void 0:o.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${N(this.layer.get("layerConfig"),()=>g`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${B(this,oi,go)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${N(this.layer.get("layerDatetime"),()=>g`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${r=>ao(r,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${N(this.layer.get("layerLegend"),()=>g`
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
      <div slot="remove-icon">${this._removeButton(i.remove)}</div>
      <div slot="sort-icon">${this._sortButton(i.sort)}</div>
    `});L(this,ri,"");L(this,ai,`
    ${this.embedded?"":Fi}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var n,o,r;const i=this.parentElement||((n=this.getRootNode())==null?void 0:n.host);this.embedded=(i==null?void 0:i.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((o=this.layer)!=null&&o.getVisible()):this.embedded===!1?!0:!!((r=this.layer)!=null&&r.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){var i,n;(n=(i=this.layer)==null?void 0:i.on)==null||n.call(i,"propertychange",o=>{const r=o;(r.key==="layerConfig"||r.key==="layerDatetime"||r.key==="timeControlValues")&&this.requestUpdate()})}updated(i){var n;this.toolsAutoExpand&&(i.has("toolsAutoExpand")||i.has("layer"))&&(this.open=!!((n=this.layer)!=null&&n.getVisible()))}render(){const i=eo(this.tools,this.layer),n=io(this.tools,this.layer),o=i==null?void 0:i.length,r=n==null?void 0:n.length;return g`
      <style>
        ${m(this,ri)}
        ${!this.unstyled&&m(this,ai)}
      </style>
      ${N(o+r>0,()=>g`
          ${N(!(o===1&&r===0),()=>g`
              <details
                class="tools"
                .open=${Hi(this.open)}
                @toggle=${a=>{this.open=a.target.open}}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${i}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${Re(n,a=>this._button(a,ge()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(ge())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}oi=new WeakSet,go=function(i){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:i.detail.jsonformValue,layer:i.detail.layer}}))},ri=new WeakMap,ai=new WeakMap,Z(po,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",po);const Pa=t=>{var i,n;const e=()=>{const o=ua(t.layer,t.map,t.showLayerZoomState);let r=!1;!o&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,r=!0):o&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(t.requestUpdate(),t.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Qn(t.layer,t.showLayerZoomState)&&(e(),t.map.getView().on("change:resolution",()=>e())),(n=(i=t.layer)==null?void 0:i.on)==null||n.call(i,"propertychange",o=>{const r=o;(r.key==="layerDatetime"||r.key==="layerConfig"||r.key==="timeControlValues")&&t.requestUpdate()})},Na=(t,e)=>{const i=e.layer;if(i.setVisible(t.target.checked),e.toolsAutoExpand){const n=e.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=t.target.checked)}t.target.checked&&i.get("layerControlExclusive")&&e.closest(`${e.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;if(o.layer!==i&&((r=o.layer)!=null&&r.get("layerControlExclusive"))){if(o.layer.setVisible(!1),o.toolsAutoExpand){const a=o.renderRoot.querySelector("eox-layercontrol-layer-tools");a&&(a.open=!1)}o.requestUpdate()}}),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),e.requestUpdate()};var Ct,Jt,yo,si,li;class mo extends At{constructor(){super();L(this,Ct);Z(this,"currLayerVisibilityBasedOnZoom",!0);L(this,si,"");L(this,li,`
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Pa(this)}render(){var d,c;const i=this.layer.getVisible(),n=i?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=B(this,Ct,Jt).call(this,"layerControlDisable")?"disabled":"",a=B(this,Ct,Jt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((d=eo(this.tools,this.layer))==null?void 0:d.length)>0,l=((c=io(this.tools,this.layer))==null?void 0:c.length)>0,u=document.querySelector("eox-layercontrol-layer-tools");return u&&Object.assign(u,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),g`
      <style>
        ${m(this,si)}
        ${!this.unstyled&&m(this,li)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${N(this.layer,()=>g`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${n} ${o} responsive tiny-space"
          >
            ${N(!this.unstyled,()=>{if(B(this,Ct,Jt).call(this,"color"))return g`
                  <i class="small" style="color: ${B(this,Ct,Jt).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return g` <i class="small"> </i> `;case"draw":return g`
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
                  `;case"vector":return g`
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
                  `;case"raster":return g`
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
                  `;default:return g` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${r}">
              <span class="layertitle truncate"
                >${B(this,Ct,Jt).call(this,this.titleProperty)}</span
              >
            </div>

            ${N(l&&!this.toolsAutoExpand,()=>g`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const p=this.renderRoot.querySelector("eox-layercontrol-layer-tools");p.open=!p.open}}
                >
                  <i class="small">
                    ${ge()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${N(!l&&s,()=>this.tools[0]==="remove"?no(this,ge()[this.tools[0]]):oo(this,ge()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${Hi(i)}
                @click=${B(this,Ct,yo)}
                disabled=${r||zt}
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
              <!--<span class="tooltip top" style="pointer-events: none">${i?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${N(l&&!u,()=>g`
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
    `}}Ct=new WeakSet,Jt=function(i){var n;return(n=this.layer)==null?void 0:n.get(i)},yo=function(i){Na(i,this)},si=new WeakMap,li=new WeakMap,Z(mo,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",mo);var ui,ci;class bo extends At{constructor(){super();L(this,ui,"");L(this,ci,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const i=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=ro(this.group.getLayers()))==null?void 0:r.length;return g`
      <style>
        ${m(this,ui)}
        ${!this.unstyled&&m(this,ci)}
      </style>
      ${N(this.group,()=>g`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${i||zt}
            data-children-length=${n}
          >
            <summary class="square">
              ${N(n>0,()=>g`
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
    `}}ui=new WeakMap,ci=new WeakMap,Z(bo,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",bo);const Ba=t=>{const{layers:e,idProperty:i,titleProperty:n,renderRoot:o}=t,r=Tn(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(e&&(e.hasListener("change:length")&&(e==null||e.un("change:length",a)),e.on("change:length",a),e)){const s=o.querySelector("ul");la(e,i,n,t),sa(s,e,i,t)}};var di,hi;class vo extends At{constructor(){super();L(this,di,"");L(this,hi,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){Ba(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.layers?ro(this.layers).reverse():[];return g`
      <style>
        ${m(this,di)}
        ${!this.unstyled&&m(this,hi)}
      </style>
      <ul class="list no-space">
        ${N(this.layers,()=>g`
            ${Io(i,n=>n,n=>g`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${En(n,this.map)}"
                  class="square"
                >
                  ${n.getLayers?g`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${n}
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
                        `:g`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${n}
                            .layerType=${En(n,this.map)}
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
    `}}di=new WeakMap,hi=new WeakMap,Z(vo,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",vo);const ka=t=>{const e=t.querySelector("select[name=optional]"),i=e?e.value:null,n=Wi(t.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(t.idProperty)||o.ol_uid)===i);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),t.requestUpdate()};var fi,xo;class wo extends At{constructor(){super();L(this,fi);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=Wi(this.layers.getArray(),"layerControlOptional",!0);return g`
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
            ${i.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return g` <option value="${o}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${B(this,fi,xo)}">Add</button>
      </nav>
    `}}fi=new WeakSet,xo=function(){ka(this)},Z(wo,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",wo);const Ua=(t,e)=>{e.jsonInput=t.target.value,e.requestUpdate()},Vn=t=>{const e=JSON.parse(`{"data":${Nn(t.jsonInput)}}`);Array.isArray(e.data)?e.data.forEach(i=>{t.eoxMap.addOrUpdateLayer(i)}):t.eoxMap.addOrUpdateLayer(e.data),t.jsonInput=null,t.requestUpdate()},Fa=(t,e)=>{e.urlInput=t.target.value,e.requestUpdate()};async function qa(t){const e=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!e)return!1;if(ji(e)==="XYZ")return{Name:e};try{const i=await Mr(e);t.wmsCapabilities=i}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const ja=(t,e)=>{const{Name:i}=t,n=ji(e.urlInput)||"XYZ",o={type:"Tile",properties:{id:i,title:i},source:{type:n,url:e.urlInput,params:{LAYERS:i}}};e.jsonInput=JSON.stringify(o)},Za=(t,e)=>{e.open=t||null,e.urlInput=null,e.jsonInput=null,e.wmsCapabilities=null,e.requestUpdate()};var tt,Eo,$o,Ui,Ao,Co,Be,pi;class So extends At{constructor(){super();L(this,tt);Z(this,"urlInput",null);Z(this,"jsonInput",null);Z(this,"open",null);Z(this,"searchLoad",!1);Z(this,"wmsCapabilities",null);L(this,pi,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i={add:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:g`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},n=this.open?"open":"close",o=this.open==="url",r=this.open==="json",a=!Lr(this.urlInput)||this.searchLoad?!0:zt;return g`
      <style>
        ${m(this,pi)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${n}"
          >
            <a
              @click=${()=>B(this,tt,Be).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>B(this,tt,Be).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>B(this,tt,Be).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":g`<i class="small primary-text">${i.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${n}" style="padding: 15px 0">
          ${o?g`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${B(this,tt,Eo)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${B(this,tt,$o)}
                  >
                    ${this.unstyled?"Search":g`<i class="small">${i.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?g`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return g`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>B(this,tt,Ui).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:zt}
              `:g`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${B(this,tt,Co)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${Rr(this.jsonInput)?zt:!0}
                  @click=${B(this,tt,Ao)}
                >
                  ${this.unstyled?"Add JSON":g`<i class="small">${i.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}tt=new WeakSet,Eo=function(i){Fa(i,this)},$o=async function(){const i=await qa(this);i&&B(this,tt,Ui).call(this,i)},Ui=function(i){ja(i,this),Vn(this)},Ao=function(){Vn(this)},Co=function(i){Ua(i,this)},Be=function(i){Za(i,this)},pi=new WeakMap,Z(So,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",So);const za=(t,e)=>{if(e.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const i=e.renderRoot.querySelector("eox-layercontrol-optional-list");i==null||i.requestUpdate()}},Dn=t=>{const e=Bo(t.for);return e&&e.map!==t.map&&(t.map=e.map),e};Oo();var Bt,ie,Vo,Do,gi;class _o extends At{constructor(){super();L(this,ie);L(this,Bt);L(this,gi,`
    ${Fi}
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
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=Dn(this)}updated(i){i.has("for")&&(this.eoxMap=Dn(this))}get eoxMap(){return m(this,Bt)}set eoxMap(i){const n=m(this,Bt);lt(this,Bt,i),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const i=(o=this.map)==null?void 0:o.getLayers().getArray(),n=i&&((r=Wi(i,"layerControlOptional",!0))==null?void 0:r.length)>0;return g`
      <style>
        ${!this.unstyled&&m(this,gi)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${N(this.addExternalLayers&&((a=m(this,Bt))==null?void 0:a.addOrUpdateLayer),()=>g`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${m(this,Bt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${N(this.map,()=>g`
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
            @changed=${B(this,ie,Vo)}
            @datetime:updated=${s=>ao(s,this)}
            @layerConfig:change=${B(this,ie,Do)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${N(n,()=>g`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Bt=new WeakMap,ie=new WeakSet,Vo=function(i){za(i,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:i.detail}))},Do=function(i){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:i.detail}))},gi=new WeakMap,Z(_o,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",_o);export{_o as EOxLayerControl,ha as updateVectorLayerStyle};
