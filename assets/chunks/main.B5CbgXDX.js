var q=Object.defineProperty;var T=t=>{throw TypeError(t)};var K=(t,e,o)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var A=(t,e,o)=>K(t,typeof e!="symbol"?e+"":e,o),_=(t,e,o)=>e.has(t)||T("Cannot "+o);var h=(t,e,o)=>(_(t,e,"read from private field"),o?o.call(t):e.get(t)),L=(t,e,o)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),O=(t,e,o,i)=>(_(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),j=(t,e,o)=>(_(t,e,"access private method"),o);import{r as Y,x as U}from"./lit-element.Deg-YTNa.js";import{A as G,J as v,S as W,E as X,i as R}from"./index.BlmzfcAG.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{s as Q}from"./all.style.T4I2W3dO.js";import"./commonjsHelpers.BosuxZz1.js";function tt(t,e){Object.keys(e).forEach(o=>{t.setAttribute(o,e[o])})}class et extends G{register(){super.register()}unregister(){super.unregister()}build(){const e=this.schema.properties,o=this.options,i=this.schema.description,r=this.theme,s=this.defaults.startVals[this.key];o.compact||(this.header=this.label=r.getFormInputLabel(this.getTitle(),this.isRequired())),i&&(this.description=r.getFormInputDescription(this.translateProperty(i))),o.infoText&&(this.infoButton=r.getInfoButton(this.translateProperty(o.infoText)));const n=document.createElement("tc-range-slider"),d=Object.keys(e).find(u=>u.includes("min")),f=Object.keys(e).find(u=>u.includes("max")),b={min:e[d].minimum,max:e[f].maximum,value1:(s==null?void 0:s[d])||e[d].default,value2:(s==null?void 0:s[f])||e[f].default,"slider-bg-fill":"#004170","generate-labels":"true","slider-width":"100%","range-dragging":"false"};tt(n,b),this.input=n,this.input.id=this.formname,this.control=r.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0),this.input.addEventListener("change",u=>{u.preventDefault(),u.stopPropagation(),this.value={[d]:u.detail.value1,[f]:u.detail.value2},this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&this.input.parentNode.removeChild(this.input),super.destroy()}}const E=t=>["feature","features"].some(e=>(t==null?void 0:t.format)===e),$=t=>["polygon","polygons"].includes(t==null?void 0:t.format),C=t=>["point","points"].includes(t==null?void 0:t.format),k=t=>["bounding-boxes","bounding-box"].includes(t==null?void 0:t.format),V=t=>["lines","line"].includes(t==null?void 0:t.format),H=t=>(t==null?void 0:t.type)==="wkt",B=t=>(t==null?void 0:t.type)==="geojson",x=t=>["bounding-boxes","polygons","features","points","lines"].includes(t==null?void 0:t.format),ot=t=>E(t)||$(t)||k(t)||C(t)||V(t);function D(t,e){Object.keys(e).forEach(o=>{t.setAttribute(o,e[o])})}const rt=(t,e)=>{if(!t||!e)return!1;switch(e){case"string":return typeof t=="string";case"number":return!isNaN(t);case"boolean":return typeof t=="boolean";case"array":return Array.isArray(t);case"object":return typeof t=="object"&&!!Object.keys(t).length}return!1};class a extends G{register(){super.register()}unregister(){super.unregister()}build(){var N,I,P,F;const e=this.options,o=this.schema.description,i=this.theme;e.compact||(this.header=this.label=i.getFormInputLabel(this.getTitle(),this.isRequired())),o&&(this.description=i.getFormInputDescription(this.translateProperty(o))),e.infoText&&(this.infoButton=i.getInfoButton(this.translateProperty(e.infoText)));const r=document.createElement("eox-drawtools");let s;switch(!0){case $(this.schema):s="Polygon";break;case k(this.schema):s="Box";break;case C(this.schema):s="Point";break;case V(this.schema):s="LineString";break;default:s="Box";break}let n;switch(!0){case H(this.schema):n="wkt";break;case B(this.schema):n="geojson";break;default:n="feature";break}const d={type:s,format:n};if((I=(N=this.schema)==null?void 0:N.options)!=null&&I.projection&&(d.projection=this.schema.options.projection),E(this.schema)&&(d["layer-id"]=this.schema.options.layerId),x(this.schema)&&(d["multiple-features"]=!0,d["show-list"]=!0),"for"in(this.schema.options??{}))d.for=this.options.for;else{const p=document.createElement("eox-map");p.projection="EPSG:4326";const m="map-"+this.formname.replace(/[^\w\s]/gi,"");p.layers=[{type:"Tile",source:{type:"OSM"}}],D(p,{id:m,style:"width: 100%; height: 300px;"}),this.container.appendChild(p),r.for=p}D(r,d),e.autoStartSelection!==!1&&r.updateComplete.then(()=>{r.startDrawing()}),this.input=r,this.input.id=this.formname,this.control=i.getFormControl(this.label,this.input,this.description,this.infoButton),(this.schema.readOnly||this.schema.readonly)&&(this.disable(!0),this.input.disabled=!0);const b=(F=(P=this.schema)==null?void 0:P.options)==null?void 0:F.featureProperty,u=(p,m)=>p.length?!x(this.schema)&&p.length===1?m(p[0]):p.map(m):m(p);this.input.addEventListener("drawupdate",p=>{var m;switch(p.preventDefault(),p.stopPropagation(),!0){case!p.detail:{this.value=null;break}case H(this.schema):{this.value=p.detail;break}case B(this.schema):{const c=p.detail;if(x(this.schema)){this.value=c;break}this.value=((m=c.features)==null?void 0:m[0])??null;break}case V(this.schema):{this.value=u(p.detail,c=>c.getGeometry().getCoordinates());break}case E(this.schema):{if(!p.detail.length){this.value=null;break}const c=g=>b?g.get(b)??g:g;this.value=u(p.detail,c);break}case k(this.schema):{if(!p.detail.length){this.value=null;break}const c=g=>g.getGeometry().getExtent();this.value=u(p.detail,c);break}case $(this.schema):{if(!p.detail.length){this.value=null;break}this.value=u(p.detail,c=>c);break}case C(this.schema):{if(!p.detail.length){this.value=null;break}this.value=u(p.detail,c=>{var g;return(g=c.getGeometry())==null?void 0:g.getCoordinates()});break}}this.onChange(!0)}),this.container.appendChild(this.control)}destroy(){this.label&&this.label.parentNode&&this.label.parentNode.removeChild(this.label),this.description&&this.description.parentNode&&this.description.parentNode.removeChild(this.description),this.input&&this.input.parentNode&&(this.input.parentNode.removeChild(this.input),this.input.discardDrawing(),this.input.remove()),super.destroy()}}function it(t){return function(e,o,i){let r=[];return e.properties&&Object.keys(e.properties).forEach(s=>{const n=e.properties[s];if(!(ot(n)&&(n.format==="feature"||t.some(b=>b.format===n.format&&b.type===n.type))))return;const f=dt(s,o[s],i);if(f.length){r.push(...f);return}switch(!0){case H(n):{r.push(...ut(s,o[s],i));break}case B(n):{r.push(...ct(s,o[s],i,n));break}case E(n):{r.push(...w({key:s,subValue:o[s],subSchema:n,path:i,validationFn:nt}));break}case k(n):{r.push(...w({key:s,subValue:o[s],subSchema:n,path:i,validationFn:st}));break}case $(n):{r.push(...w({key:s,subValue:o[s],subSchema:n,path:i,validationFn:at}));break}case C(n):{r.push(...w({key:s,subValue:o[s],subSchema:n,path:i,validationFn:pt}));break}case V(n):{r.push(...w({key:s,subValue:o[s],subSchema:n,path:i,validationFn:lt}));break}}}),r}}function w({key:t,subValue:e,path:o,subSchema:i,validationFn:r}){if(x(i)){if(Array.isArray(e)){if(!e.length)return[{path:`${o}.${t}`,message:"Value is expected to have at least one value",property:"format"}]}else return[{path:`${o}.${t}`,message:`Value is expected to be an array but got typeof ${typeof e}`,property:"format"}];return e==null?void 0:e.flatMap((s,n)=>r(`${t}.${n}`,s,o,i))}else return r(t,e,o,i)}function st(t,e,o){const i=[];return e.length!==4?[{path:`${o}.${t}`,message:`Value is expected to have 4 items but got ${e.length}`,property:"format"}]:(e.forEach((r,s)=>{typeof r!="number"&&i.push({path:`${o}.${t}.${s}`,message:`extent is expected to be of type number but got ${r}`,property:"format"})}),i)}function nt(t,e,o,i){var s;let r;return x(i)?r=(s=i==null?void 0:i.items)==null?void 0:s.type:r=i.type,r?rt(e,r)?[]:[{path:`${o}.${t}`,message:`Value is expected to be a valid ${r}`,property:"format"}]:[]}function at(t,e,o){return typeof e!="object"||!Object.keys(e).length?[{path:`${o}.${t}`,message:"Value was expected to be a feature object ",property:"format"}]:[]}function pt(t,e,o){const i=[];return e.length!==2?[{path:`${o}.${t}`,message:`Value is expected to have 2 items but got ${e.length}`,property:"format"}]:(e.forEach((r,s)=>{typeof r!="number"&&i.push({path:`${o}.${t}.${s}`,message:`coordinates is expected to be of type number but got ${r}`,property:"format"})}),i)}function lt(t,e,o){const i=[];return e.length<2?[{path:`${o}.${t}`,message:`Value is expected to have at least 2 points but got ${e.length}`,property:"format"}]:(e.forEach((r,s)=>{r.forEach((n,d)=>{typeof n!="number"&&i.push({path:`${o}.${t}.${s}.${d}`,message:`coordinates is expected to be of type number but got ${n}`,property:"format"})})}),i)}function dt(t,e,o){return e?[]:[{path:`${o}.${t}`,message:`invalid value ${JSON.stringify(e)}`,property:"type"}]}function ut(t,e,o){return typeof e!="string"?[{path:`${o}.${t}`,message:"Value is expected to be a valid wkt string",property:"type"}]:e==="GEOMETRYCOLLECTION EMPTY"?[{path:`${o}.${t}`,message:"Should have at least 1 Geometry",property:"type"}]:[]}function ct(t,e,o,i){var r;if(typeof e!="object"||!Object.keys(e).length)return[{path:`${o}.${t}`,message:"Value is expected to be a valid geojson object",property:"type"}];if(x(i)){if(e.type!=="FeatureCollection")return[{path:`${o}.${t}`,message:"Value is expected to be a valid FeaturesCollection geojson",property:"type"}];if(!((r=e==null?void 0:e.features)!=null&&r.length))return[{path:`${o}.${t}`,message:"Value is expected to have at least one feature",property:"type"}]}else if(!(e!=null&&e.geometry.type))return[{path:`${o}.${t}`,message:"Value is expected to have a valid geometry",property:"type"}];return[]}const ht=[{type:"object",format:"minmax",func:et},{type:"array",format:"bounding-boxes",func:a},{type:"wkt",format:"bounding-boxes",func:a},{type:"geojson",format:"bounding-boxes",func:a},{type:"array",format:"bounding-box",func:a},{type:"wkt",format:"bounding-box",func:a},{type:"geojson",format:"bounding-box",func:a},{type:"array",format:"polygons",func:a},{type:"wkt",format:"polygons",func:a},{type:"geojson",format:"polygons",func:a},{type:"object",format:"polygon",func:a},{type:"wkt",format:"polygon",func:a},{type:"geojson",format:"polygon",func:a},{type:"array",format:"points",func:a},{type:"wkt",format:"points",func:a},{type:"geojson",format:"points",func:a},{type:"array",format:"point",func:a},{type:"wkt",format:"point",func:a},{type:"geojson",format:"point",func:a},{format:"feature",func:a},{type:"array",format:"features",func:a},{type:"wkt",format:"features",func:a},{type:"geojson",format:"features",func:a},{type:"array",format:"line",func:a},{type:"wkt",format:"line",func:a},{type:"geojson",format:"line",func:a},{type:"array",format:"lines",func:a},{type:"wkt",format:"lines",func:a},{type:"geojson",format:"lines",func:a}],ft=(t,e)=>{const o=[...ht,...e];v.defaults.custom_validators.push(it(o)),o.map(({type:i,format:r,func:s})=>{v.defaults.startVals=t,v.defaults.editors[r]=s,v.defaults.resolvers.unshift(n=>{if(n.type===i&&n.format===r||n.format==="feature")return r})})};window.SimpleMDE=X;const S=t=>{ft(t.value||{},t.customEditorInterfaces||[]);const e=t.renderRoot.querySelector("form");let i=new v(e,{schema:t.schema,...t.value?{startval:t.value}:{},theme:"html",ajax:!0,...t.options});return i.on("ready",()=>{if(Object.values(i.editors).some(r=>r instanceof W)){const r=document.createElement("style");r.innerHTML=`
          @import url("https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
          @import url("https://unpkg.com/easymde/dist/easymde.min.css");
        `,t.renderRoot.insertBefore(r,t.renderRoot.firstChild)}}),i};async function z(t){if(t&&typeof t!="object")try{const e=await fetch(t);if(e.ok)return await e.json();console.error("Failed to fetch schema from URL: ",e.status)}catch(e){console.error("Error fetching schema: ",e)}return t}const mt=`
  * {
    font-family: Roboto, sans-serif;
  }
`,gt=`
  :host, :root {
    --background-color: var(--eox-background-color, transparent);
    background-color: var(--background-color, transparent);
  }
  form {
    background-color: var(--background-color, transparent);
  }
  .CodeMirror {
    background-color: var(--background-color, transparent);
  }
  select {
    background-color: var(--background-color);
  }
  [data-schemaid=root] > .je-header {
    display: none;
  }
  .je-range-control {
    padding: 0.5rem 0;
  }
  .je-range-control output {
    width: 35px;
  }
  .errmsg {
    font-size: x-small;
  }
  tc-range-slider{
    display: block;
    margin: 0.5rem 0;
  }
  .je-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #0002;
    padding: 0.5rem 0;
  }
  .je-range-control {
    display: flex;
    align-items: center;
  }
  .je-indented-panel span {
    display: flex;
    align-items: center;
  }
  .je-header span:first-of-type, form[data-theme="html"] .je-form-input-label {
    font-size: 14px;
    font-weight: 600;
  }
  form[data-theme="html"] .je-indented-panel {
    border: none !important;
    margin: 0.4rem;
  }
  button[class*="json-editor-btntype-"] span {
    display: none;
  }
  button[class*="json-editor-btntype-"]::before {
    height: 24px;
    width: 24px;
  }
  button[class*="json-editor-btntype-"] {
    text-indent: 0px;
    margin: 0px;
    display: flex;
  }
  .json-editor-btntype-toggle::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-moveup::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M3 21V17H10.5C12.43 17 14 15.43 14 13.5V11H10L16 4L22 11H18V13.5C18 17.64 14.64 21 10.5 21H3Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-movedown::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M21 3V7H13.5C11.57 7 10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3H21Z' /%3E%3C/svg%3E");
  }
  .json-editor-btn-moveup,
  .json-editor-btn-movedown,
  .json-editor-btn-moveup::before, 
  .json-editor-btn-movedown::before {
    width: 18px !important;
    height: 18px !important;
  }
  .json-editor-btntype-add::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-delete::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23204270' d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z' /%3E%3C/svg%3E");
  }
  .json-editor-btntype-add::before,
   .json-editor-btntype-delete::before {
    width: 16px !important;
    height: 16px !important;
    background: #00417044;
    padding: 4px;
    border-radius: 100px;
  }
  .json-editor-btntype-add,
  .json-editor-btntype-delete {
    opacity: 0.8;
    margin: 0px 0.5rem !important;
  }
  .json-editor-btntype-add:hover,
   .json-editor-btntype-delete:hover {
    opacity: 1;
  }
  button[class*="json-editor-btntype-"]:active {
    --primary-color: transparent;
  }
  .je-indented-panel .row {
    margin-top: 10px;
  }
  .je-object__controls {
    margin: 0 !important;
  }
  .EasyMDEContainer span {
    display: unset;
  }
  .editor-toolbar button {
    box-shadow: none;
    color: #2c3e50 !important;
  }
  .editor-toolbar button:hover:not([disabled]):not(.icon),
  .editor-toolbar button:hover:not([disabled]):not(.icon) {
    box-shadow: none;
    background: #fcfcfc;
    border-color: #95a5a6;
  }
  .editor-toolbar button i {
    font-size: 17px;
  }
  .cm-header-1 {
    font-size: 200% !important;
  }
  .cm-header-1 {
    font-size: 200% !important;
    line-height: 200% !important;
  }
  .cm-header-2 {
    font-size: 160% !important;
    line-height: 160% !important;
  }
  .cm-header-3 {
    font-size: 125% !important;
    line-height: 125% !important;
  }
  .cm-header-4 {
    font-size: 110% !important;
    line-height: 110% !important;
  }
  .cm-comment {
    background: rgba(0, 0, 0, 0.05) !important;
    border-radius: 2px !important;
  }
`;var l,y,Z,M;class J extends Y{constructor(){super();L(this,y);L(this,l,null);this.schema=null,this.value=null,this.options={show_opt_in:!1,disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,disable_array_delete_all_rows:!0,disable_array_delete_last_row:!0,array_controls_top:!0},this.noShadow=!1,this.unstyled=!1,this.customEditorInterfaces=[]}get editor(){return h(this,l)}get schema(){return this._schema}set schema(o){h(this,l)&&!R(this._schema,o)&&h(this,l).destroy(),this._schema=o}get value(){return this._value}set value(o){h(this,l)&&h(this,l).ready&&!R(this._value,o)&&h(this,l).setValue(o),this._value=o}async updated(o){this._value=await z(this.value),o.has("schema")?(this._schema=await z(this.schema),(!h(this,l)||h(this,l).destroyed)&&(O(this,l,await S(this)),j(this,y,M).call(this))):o.has("customEditorInterfaces")&&this.customEditorInterfaces&&(O(this,l,await S(this)),j(this,y,M).call(this))}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return U`
      <style>
        ${mt}
        ${!this.unstyled&&Q}
        ${!this.unstyled&&gt}
      </style>
      <form></form>
    `}}l=new WeakMap,y=new WeakSet,Z=function(){this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))},M=function(){["ready","change"].map(i=>{h(this,l).on(i,()=>{this._value=h(this,l).getValue(),j(this,y,Z).call(this)})})},A(J,"properties",{schema:{attribute:!1,type:Object},value:{attribute:!1,type:Object},options:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array},noShadow:{attribute:"no-shadow",type:Boolean},unstyled:{type:Boolean}});customElements.define("eox-jsonform",J);export{J as EOxJSONForm};
