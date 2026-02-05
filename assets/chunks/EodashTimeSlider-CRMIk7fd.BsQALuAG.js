var G=e=>{throw TypeError(e)};var W=(e,s,t)=>s.has(e)||G("Cannot "+t);var c=(e,s,t)=>(W(e,s,"read from private field"),t?t.call(e):s.get(e)),x=(e,s,t)=>s.has(e)?G("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),v=(e,s,t,i)=>(W(e,s,"write to private field"),i?i.call(e,t):s.set(e,t),t);import{ap as X,au as ee,n as te}from"./eo-dash.DGLYBi0a.js";import{r as ie,x as D}from"./lit-element.L04JKUcP.js";import{a as se,e as ae}from"./addCommonStyleSheet.C1Vj32jp.js";import{u as $,t as Q,g as U,v as ne,D as R,T as re,C as oe,a as le,d as de,i as ce,m as ue,b as Me,c as ge}from"./vis-timeline-graph2d.DIUlBtP0.js";import{d as M}from"./dayjs.min.Ba62AOpW.js";import{n as j}from"./when.BR7zwNJC.js";import{o as B}from"./map.DiiNQ3pp.js";import{L as F}from"./Group.ovD7bfEG.js";import{g as pe}from"./getElement.CdRlZPdn.js";import{i as me}from"./index.BIJR-IiI.js";import{f as ye,a as he,b as fe,o as ve,j as xe}from"./framework.CQuUbdjo.js";import"./item.Bx-rtsOD.js";import"./commonjsHelpers.BosuxZz1.js";import"./extent.B6zYA2nd.js";const De=`
:root {
  --header-background: #E0E4E6;
}
:host {
  display: block;
}
[class*=round] {
  border-radius: 0px !important;
}
.vis-timeline * {
  border-radius: 0px;
}
.timeslider-header {
  padding: 8px;
  background: var(--inverse-on-surface);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.timeslider-header .field.border {
  margin-bottom: 0;
  border-radius: 6px;
}
.timeslider-header .field.border input {
  background: white;
  border: .0625rem solid var(--outline) !important;
  padding: 0 1.2rem;
  width: 142px;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
eox-itemfilter {
  margin: 0 0.75rem;
}
.timeslider-calendar {
  flex-grow: 1;
  margin: 0;
}
.setting-btn,
.export-btn {
  padding: 0 30px;
}
.setting-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNzA1NCAzLjAwMzI2SDEzLjcwNTRWNi4zMzY1OUgxNS4wMzg3VjMuMDAzMjZDMTUuMDM4NyAyLjI2OTkyIDE0LjQzODcgMS42Njk5MiAxMy43MDU0IDEuNjY5OTJIMS43MDU0QzAuOTcyMDcgMS42Njk5MiAwLjM3MjA3IDIuMjY5OTIgMC4zNzIwNyAzLjAwMzI2VjExLjAwMzNDMC4zNzIwNyAxMS43MzY2IDAuOTcyMDcgMTIuMzM2NiAxLjcwNTQgMTIuMzM2Nkg3LjcwNTRWMTEuMDAzM0gxLjcwNTRWMy4wMDMyNloiIGZpbGw9IiMwMDA2MEEiLz4KPHBhdGggZD0iTTkuNzA1NCA3LjAwMzI2TDUuNzA1NCA0LjMzNjU5VjkuNjY5OTJMOS43MDU0IDcuMDAzMjZaIiBmaWxsPSIjMDAwNjBBIi8+CjxwYXRoIGQ9Ik0xNC44NDU0IDExLjI4OTlDMTQuODY1NCAxMS4wOTY2IDE0Ljg3MjEgMTAuOTAzMyAxNC44NTIxIDEwLjcxNjZMMTUuNTY1NCAxMC4xNDk5QzE1LjYzMjEgMTAuMDk2NiAxNS42NDU0IDEwLjAwOTkgMTUuNjA1NCA5LjkzNjU5TDE0LjkxODcgOC43NDMyNkMxNC44Nzg3IDguNjY5OTIgMTQuNzkyMSA4LjY0MzI2IDE0LjcxMjEgOC42Njk5MkwxMy44NTg3IDkuMDAzMjZDMTMuNzA1NCA4Ljg4OTkyIDEzLjUzODcgOC43OTY1OSAxMy4zNTg3IDguNzIzMjZMMTMuMjI1NCA3LjgxNjU5QzEzLjIxMjEgNy43Mjk5MiAxMy4xNDU0IDcuNjY5OTIgMTMuMDU4NyA3LjY2OTkySDExLjY3ODdDMTEuNTk4NyA3LjY2OTkyIDExLjUyNTQgNy43Mjk5MiAxMS41MTIxIDcuODA5OTJMMTEuMzc4NyA4LjcxNjU5QzExLjIwNTQgOC43ODk5MiAxMS4wMzg3IDguODg5OTIgMTAuODg1NCA4Ljk5NjU5TDEwLjAzMjEgOC42NjMyNkM5Ljk1MjA3IDguNjI5OTIgOS44NjU0IDguNjYzMjYgOS44MjU0IDguNzM2NTlMOS4xMzg3NCA5LjkyOTkyQzkuMDk4NzQgMTAuMDAzMyA5LjExMjA3IDEwLjA4OTkgOS4xNzg3NCAxMC4xNDMzTDkuODkyMDcgMTAuNzE2NkM5Ljg3MjA3IDEwLjkwOTkgOS44NjU0IDExLjEwMzMgOS44ODU0IDExLjI4OTlMOS4xNzIwNyAxMS44NTY2QzkuMTA1NCAxMS45MDk5IDkuMDkyMDcgMTEuOTk2NiA5LjEzMjA3IDEyLjA2OTlMOS44MTg3NCAxMy4yNjMzQzkuODU4NzQgMTMuMzM2NiA5Ljk0NTQgMTMuMzYzMyAxMC4wMjU0IDEzLjMzNjZMMTAuODcyMSAxMy4wMDMzQzExLjAyNTQgMTMuMTE2NiAxMS4xOTIxIDEzLjIwOTkgMTEuMzcyMSAxMy4yODMzTDExLjUwNTQgMTQuMTg5OUMxMS41MTg3IDE0LjI2OTkgMTEuNTg1NCAxNC4zMjk5IDExLjY3MjEgMTQuMzI5OUgxMy4wNTIxQzEzLjEzMjEgMTQuMzI5OSAxMy4yMDU0IDE0LjI2OTkgMTMuMjE4NyAxNC4xODk5TDEzLjM1MjEgMTMuMjgzM0MxMy41MjU0IDEzLjIwOTkgMTMuNjkyMSAxMy4xMDk5IDEzLjg0NTQgMTMuMDAzM0wxNC42OTg3IDEzLjMzNjZDMTQuNzc4NyAxMy4zNjk5IDE0Ljg2NTQgMTMuMzM2NiAxNC45MDU0IDEzLjI2MzNMMTUuNTkyMSAxMi4wNjk5QzE1LjYzMjEgMTEuOTk2NiAxNS42MTg3IDExLjkwOTkgMTUuNTUyMSAxMS44NTY2TDE0Ljg0NTQgMTEuMjg5OVpNMTIuMzcyMSAxMi4wMDMzQzExLjgxODcgMTIuMDAzMyAxMS4zNzIxIDExLjU1NjYgMTEuMzcyMSAxMS4wMDMzQzExLjM3MjEgMTAuNDQ5OSAxMS44MTg3IDEwLjAwMzMgMTIuMzcyMSAxMC4wMDMzQzEyLjkyNTQgMTAuMDAzMyAxMy4zNzIxIDEwLjQ0OTkgMTMuMzcyMSAxMS4wMDMzQzEzLjM3MjEgMTEuNTU2NiAxMi45MjU0IDEyLjAwMzMgMTIuMzcyMSAxMi4wMDMzWiIgZmlsbD0iIzAwMDYwQSIvPgo8L3N2Zz4K)
}
.export-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OTggMTAuMDAwMVYxMi4wMDAxSDMuOTk5ODRWMTAuMDAwMUgyLjY2NjVWMTIuMDAwMUMyLjY2NjUgMTIuNzMzNCAzLjI2NjUgMTMuMzMzNCAzLjk5OTg0IDEzLjMzMzRIMTEuOTk5OEMxMi43MzMyIDEzLjMzMzQgMTMuMzMzMiAxMi43MzM0IDEzLjMzMzIgMTIuMDAwMVYxMC4wMDAxSDExLjk5OThaTTExLjMzMzIgNy4zMzM0MUwxMC4zOTMyIDYuMzkzNDFMOC42NjY1IDguMTEzNDFWMi42NjY3NUg3LjMzMzE3VjguMTEzNDFMNS42MDY1IDYuMzkzNDFMNC42NjY1IDcuMzMzNDFMNy45OTk4NCAxMC42NjY3TDExLjMzMzIgNy4zMzM0MVoiIGZpbGw9IiMwMDA2MEEiLz4KPC9zdmc+Cg==);
}
.calendar-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMi4wMDAwOEgxMi42NjY2VjAuNjY2NzQ4SDExLjMzMzNWMi4wMDAwOEg0LjY2NjU5VjAuNjY2NzQ4SDMuMzMzMjVWMi4wMDAwOEgyLjY2NjU5QzEuOTMzMjUgMi4wMDAwOCAxLjMzMzI1IDIuNjAwMDggMS4zMzMyNSAzLjMzMzQxVjE0LjAwMDFDMS4zMzMyNSAxNC43MzM0IDEuOTMzMjUgMTUuMzMzNCAyLjY2NjU5IDE1LjMzMzRIMTMuMzMzM0MxNC4wNjY2IDE1LjMzMzQgMTQuNjY2NiAxNC43MzM0IDE0LjY2NjYgMTQuMDAwMVYzLjMzMzQxQzE0LjY2NjYgMi42MDAwOCAxNC4wNjY2IDIuMDAwMDggMTMuMzMzMyAyLjAwMDA4Wk0xMy4zMzMzIDE0LjAwMDFIMi42NjY1OVY2LjY2Njc1SDEzLjMzMzNWMTQuMDAwMVpNMTMuMzMzMyA1LjMzMzQxSDIuNjY2NTlWMy4zMzM0MUgxMy4zMzMzVjUuMzMzNDFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K);
  padding-right: 10px;
}
i.icon {
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
}
.vis-labelset .vis-label .vis-inner {
  font-size: 12px;
}
.vis-label-hide {
  opacity: 0.4;
}
.vis-item.task {
  background: var(--primary);
  border: none;
  border-radius: 0px !important;
  height: 14px;
}
.vis-labelset .vis-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vis-labelset .vis-label .vis-inner {
  font-weight: 700;
  padding: 15px;
}
.vis-custom-time-selected-label {
  padding: 5px;
  border-radius: 0px !important;
  background:rgba(0, 12, 20, 0.8);
  color: white;
  font-weight: 700;
  font-size: 12px;
  width: 120px !important;
  height: auto !important;
  left: -60px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-foreground .vis-group {
  border-radius: 0px;
}
.vis-item.task:hover {
  background: var(--primary-container);
}
.vis-item.milestone.vis-dot {
  display: none;
}
.vis-item.milestone.vis-point {
  background: var(--primary) !important;
  border: none;
  width: 14px;
  height: 14px;
  border-radius: 0px !important;
}
.vis-item.milestone.vis-point.vis-selected-item {
  background: #ffc200 !important;
}
.vis-item.milestone.vis-point.vis-not-filtered {
  background: var(--primary) !important;
  opacity: 0.4;
}
.vis-item.milestone.vis-point:hover {
  background: #ffc200 !important;
  cursor: pointer;
}
.vis-group.vis-group-hide .vis-item.milestone.vis-point,
.vis-group.vis-group-hide .vis-item.milestone.vis-point:hover {
  background: var(--primary) !important;
  opacity: 0.4 !important;
}
.vis-custom-time.multi-select-start {
  background: var(--primary) !important;
  opacity: 0.4 !important;
  border-left: 2px solid var(--primary) !important;
  border-right: 2px solid var(--primary) !important;
}
.vis-custom-time.multi-select-end {
  display: none;
}
.vis-text {
  font-size: 13px;
  text-transform: uppercase;
}
.vis-text.vis-major {
  color: #96938A !important;
  padding-left: 10px;
  margin-left: -8px;
  background: white;
}
.vis-text.vis-minor {
  margin-left: -8px;
  background: white;
}
.vis-item .vis-item-content {
  display: none;
}
.vis-current-time {
  background-color: var(--now) !important;
  width: 2px;
}
.vis-custom-time {
  background-color: #202427 !important;
  width: 2px;
}
.vis-custom-time-selected {
  background: #111 !important;
  width: 2px;
}
eox-itemfilter {
  width: 450px;
  background: white;
  border-radius: 6px;
}
.setting-menu-header {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.setting-menu {
  position: absolute;
  top: -200px;
  right: 0;
  width: 300px;
  padding: 1rem;
  background: white;
  border-radius: 6px;
}
.setting-btn-container {
  position: relative;
}
.setting-menu-content {
  display: flex;
  padding: 0.5rem 0px;
}
.setting-menu-content-value {
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  display: flex;
  gap: 10px;
}
.setting-menu-content-value input {
  width: 30px;
  text-align: center;
}
.setting-menu-content span {
  font-weight: 300;
}
.timeslider-export {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
.timeslider-export-overlay {
  background: #00000091;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
}
.timeslider-export-container {
  width: 90%;
  height: 90%;
  background: white;
  margin: 0 auto;
  border-radius: 6px;
  padding: 1rem;
}
.map-view {
  position: relative;
  width: 100%;
  height: calc(100% - 200px);
  border-radius: 6px;
}
.map-view-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0px;
}
.export-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 1rem;
  align-items: center;
  justify-content: center;
}
.export-images img {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.export-images div {
  cursor: pointer;
}
.timeslider-export-play-pause {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: 100%;
  color: white;
  font-size: 3rem;
  font-weight: 800;
  cursor: pointer;
  background: #00000017;
}
.export-images div.selected-preview img {
  border: 3px solid var(--primary);
}
.export-images div.selected-preview {
  position: relative;
}
.export-images div.selected-preview::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  opacity: 0.5;
  border-radius: 6px;
}
.timeslider-wrapper {
  position: relative;
}
.selected-map {
  z-index: 1;
}
.timeslider-export-footer {
  padding: 1rem;
  background: var(--inverse-on-surface);
  display: flex;
  align-items: center;
  justify-content: end;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
.load-wrapper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.load-wrapper,
.loader-image {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(211,211,211);
  z-index: 44;
  overflow: hidden;
}
.shimmer,
.shimmer-image {
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  animation: loading 1s infinite;
  z-index: 45;
}
.loader-image {
  width: 200px;
  height: 100px;
}

@keyframes loading {
  0%{
    left: -45%;
  }
  100%{
    left: 100%;
  }
}
`;se();const ze=`
${ae}
`;function P(e){const s=[];s.push(...e);let t=s.filter(i=>i instanceof F||i.constructor.name==="_LayerGroup");for(;t.length;){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n].getLayers().getArray();s.push(...o);const l=o.filter(a=>a instanceof F);i.push(...l)}t=i}return s}M.extend($);M.extend(Q);function K(e,s,t,i){if(i.selectedDate=M(e),Number.isNaN(i.selectedDate.unix()))return;try{s.addCustomTime(i.selectedDate.toDate(),"selected")}catch{}const n=i.getContainer();s.setCustomTime(i.selectedDate.toDate(),"selected"),s.setCustomTimeTitle(i.selectedDate.format("MMM DD' YYYY"),"selected");const r=n.querySelector('.vis-custom-time[data-id="selected"]');r&&r.classList.add("vis-custom-time-selected"),n.querySelectorAll(".vis-item.milestone.vis-point.vis-selected-item").forEach(u=>{u.classList.remove("vis-selected-item")});const l=n.querySelector(".vis-custom-time");if(l){const u=l.children[0];u.classList.add("vis-custom-time-selected-label"),u.innerText=M(e).format("MMM DD' YYYY")}const a=P(t.map.getLayers().getArray()),g=s.itemsData.get().filter(u=>i.selectedDate.format().includes(u.date));let p={};g.forEach(u=>{if(u.group&&t){const m=a.find(N=>N.get("id")===u.group),h=m==null?void 0:m.getSource();n.querySelector(`.vis-item.milestone.vis-point.item-${u.id}`).classList.add("vis-selected-item"),p={...p,[u.group]:{layer:m,source:h}},i.externalMapRendering||h.updateParams({[u.property]:M(e).utc().format("YYYY-MM-DD")})}});const d=i.renderRoot.querySelector("#timeslider-filter");i.dispatchEvent(new CustomEvent("update",{detail:{selectedItems:U(g,"group"),date:M(i.selectedDate).utc().toDate(),filters:(d==null?void 0:d.filters)||[],instances:p}})),i.requestUpdate()}const je={stack:!1,selectable:!0,zoomable:!0,moveable:!0,margin:{item:40,axis:20},showCurrentTime:!0,timeAxis:{scale:"day",step:5},orientation:{axis:"top"}},Ne={minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"DD",week:"w",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMM YYYY",day:"MMM YYYY",week:"MMM YYYY",month:"YYYY",year:""}};function be(e,s){return{...je,start:e,end:s,min:e,max:s,format:Ne}}function J(e,s,t){const i=e.visTimeline.dom.leftContainer.querySelectorAll(".vis-label")[t],n=e.visTimeline.dom.centerContainer.querySelectorAll(".vis-foreground .vis-group")[t];s?(i.classList.remove("vis-label-hide"),n.classList.remove("vis-group-hide")):(i.classList.add("vis-label-hide"),n.classList.add("vis-group-hide"))}function we(e,s,t,i){s.clear(),t.clear();for(let n=0;n<e.length;n++){const r=e[n],o=l=>{const a=l.target.getVisible();J(i,a,n)};r.layerInstance.un("change:visible",o),r.layerInstance.on("change:visible",o),s.add({id:r.layer,content:r.name});for(const l of r.values){const a=ne(r.layer+l.date);t.add({...l,id:a,group:r.layer,className:`milestone item-${a}`,start:l.date,originalDate:l.originalDate,type:"point",property:r.property})}}}M.extend($);M.extend(Q);function Ie(e){var s;return e.getAttribute("data-calendar-date")||((s=e.dataset)==null?void 0:s.calendarDate)||Object.values(e.dataset||{}).find(t=>/^\d{4}-\d{2}-\d{2}$/.test(t))||null}let V=!1,C=!1,b=null,w=null;function Ae(e){const s=e.getContainer();if(s.innerHTML="",e.sliderValues.length===0)return null;e.setLoading(!0);const t=new R([]),i=new R([]);we(e.sliderValues,t,i,e);const n=i.map(d=>M(d.start)),r=M.min(n).subtract(50,"day").format("YYYY-MM-DD"),o=M.max(n).add(50,"day").format("YYYY-MM-DD"),l=be(r,o),a=new re(s,i,t,l);e.setLoading(!1),a.on("changed",()=>{const d=s.querySelector(".vis-text.vis-minor.vis-even"),m=Number(d.style.width.replace("px",""))/l.timeAxis.step+.1;s.querySelectorAll(".vis-item.milestone").forEach(f=>{f.style.width=`${m}px`});for(let f=0;f<e.sliderValues.length;f++)J(e,e.sliderValues[f].layerInstance.getVisible(),f)});function g(d){if(C){const u=e.getContainer(),m=u.querySelector(".vis-custom-time.multi-select-start"),h=u.querySelector(".vis-custom-time.multi-select-end");if(d.event.shiftKey&&m){const f=d.pageX-m.getBoundingClientRect().x;m.style.width=`${f}px`}else h&&h.remove(),m&&m.remove(),C=!1,b=null,w=null}}a.on("mouseMove",g),a.on("click",d=>{if(d&&d.time&&d.what&&d.what!=="group-label"&&!V&&!d.event.shiftKey)K(d.time,a,e.eoxMap,e);else if(d&&d.time&&d.what&&d.what!=="group-label"&&d.event.shiftKey)if(C){C=!1,w=d.time;try{a.addCustomTime(M(w).toDate(),"multi-select-end")}catch{}a.setCustomTime(M(w).toDate(),"multi-select-end");const u=[];u.push(M(b)),u.push(M(w)),e.selectedRange=u,e.requestUpdate()}else{b=d.time;try{a.addCustomTime(M(b).toDate(),"multi-select-start")}catch{}a.setCustomTime(M(b).toDate(),"multi-select-start"),C=!0,w=null;const u=[];u.push(M(b)),e.selectedRange=u,e.requestUpdate()}}),a.on("rangechanged",d=>{if(d.byUser){V=!0,setTimeout(()=>V=!1);const u=e.getContainer(),m=u.querySelector(".vis-custom-time.multi-select-start"),h=u.querySelector(".vis-custom-time.multi-select-end");if(m&&h){const f=Number(h.style.left.replace("px","")),N=Number(m.style.left.replace("px",""));m.style.width=`${f-N}px`}}}),e.visTimeline=a,e.groups=t,e.items=i;const p=e.items.get();if(p&&p.length){setTimeout(()=>{const u=p[p.length-1].start;Z(u,e),a.setOptions({...a.setOptions,start:M(u).subtract(40,"day").format("YYYY-MM-DD"),end:M(u).add(40,"day").format("YYYY-MM-DD")})},1e3);const d=e.renderRoot.querySelector("#cal");d&&(d.innerHTML="",new oe(d,{selectedTheme:"light",dateMin:l.min,dateMax:l.max,displayDateMin:l.min,displayDateMax:l.max,displayDatesOutside:!1,selectedDates:[p[0].start],enableEdgeDatesOnly:!1,inputMode:!0,positionToInput:["top","left"],selectedWeekends:[],onClickDate:m=>{m.context.selectedDates[0]&&Z(m.context.selectedDates[0],e)},onCreateDateEls:(m,h)=>{const f=Ie(h),N=U(p,"start"),O=h.querySelector(".vc-day__dots");if(O&&O.remove(),N[f]&&h.children.length){const q=document.createElement("div");q.className="vc-day__dots";for(let H=0;H<N[f].length;H++){const _=document.createElement("div");_.className="vc-day__dot",q.appendChild(_)}h.appendChild(q)}}}).init())}else e.selectedDate=null}function Le(){if(document.querySelector("#vanilla-calendar-styles"))return;const e=document.createElement("style");e.id="vanilla-calendar-styles",e.textContent=`
    ${le}
    .vc {
      z-index: 9999;
    }
    .vc * {
      font-family: var(--eox-body-font-family);
    }
    .vc-day__dots {
      display: flex;
      gap: 4px;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 4px;
      pointer-events: none;
    }
    .vc-day__dot {
      width: 4px;
      height: 4px;
      border-radius: 9999px;
      background: var(--primary);
      opacity: 0.9;
    }
    .vc-date[data-vc-date-selected] .vc-date__btn {
      background-color: var(--primary) !important;
    }
    .vc-date[data-vc-date-selected] .vc-day__dot {
      background: var(--on-primary) !important;
    }
  `,document.head.appendChild(e)}function ke(){if(document.querySelectorAll("eox-timeslider").length<=1){const s=document.querySelector("#vanilla-calendar-styles");s&&s.remove()}}function Ce(e){e.renderRoot.querySelectorAll(".map-view-item").forEach(t=>{const i=t.map,n=t.getAttribute("data-index"),r=()=>{const o=document.createElement("canvas"),l=i.getSize();o.width=l[0],o.height=l[1];const a=o.getContext("2d");if(Array.prototype.forEach.call(i.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),function(g){if(g.width>0){const p=g.parentNode.style.opacity||g.style.opacity;a.globalAlpha=p===""?1:Number(p);let d;const u=g.style.transform;u?d=u.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number):d=[parseFloat(g.style.width)/g.width,0,0,parseFloat(g.style.height)/g.height,0,0],CanvasRenderingContext2D.prototype.setTransform.apply(a,d);const m=g.parentNode.style.backgroundColor;m&&(a.fillStyle=m,a.fillRect(0,0,g.width,g.height)),a.drawImage(g,0,0)}}),a.globalAlpha=1,a.setTransform(1,0,0,1,0,0),e&&e.exportConfig&&Array.isArray(e.exportConfig.mapLayers)&&typeof n<"u"){const g=Number(n);!isNaN(g)&&e.exportConfig.mapLayers[g]&&(e.exportConfig.mapLayers[g].img=o.toDataURL(),e.requestUpdate())}};i.once("rendercomplete",r),i.renderSync()})}M.extend($);M.extend(Q);function Te(e){const s=typeof e.for=="object"?e.for:pe(e.for);if(s){const t=s;e.eoxMap=t;const i=P(t.map.getLayers().getArray()),n=()=>{const r=P(t.map.getLayers().getArray()),o=[];if(r.length)for(const l of r){const a=l.getProperties();if(a&&a.timeControlValues&&Array.isArray(a.timeControlValues)&&a.timeControlProperty){const g=a.timeControlValues.map(p=>({...p,date:M(p.date).utc().local().format().split("T")[0],utc:M(p.date).utc().format(),local:M(p.date).utc().local().format(),originalDate:p.date})).sort((p,d)=>new Date(p.date)-new Date(d.date));o.push({layer:a[e.layerIdKey],name:a[e.titleKey],property:a.timeControlProperty,values:g,layerInstance:l}),l.on("change:timeControlValues",()=>n())}}me(e.sliderValues,o)||(e.sliderValues=o,Ae(e)),e.requestUpdate()};i.length>0&&n(),t.map.getLayers().on("add",()=>n()),t.map.getLayers().on("remove",()=>n()),t.map.on("change",()=>{n()})}}function Ye(e,s){if(s.renderRoot.querySelectorAll(".vis-item.milestone.vis-point").forEach(i=>{i.classList.remove("vis-filtered"),i.classList.remove("vis-not-filtered")}),s.visTimeline.itemsData.get().length!=e.detail.results.length){for(const n of e.detail.results){const r=s.renderRoot.querySelector(`.vis-item.milestone.vis-point.item-${n.id}`);r&&r.classList.add("vis-filtered")}s.renderRoot.querySelectorAll(".vis-item.milestone.vis-point:not(.vis-filtered)").forEach(n=>{n.classList.add("vis-not-filtered")})}}function Z(e,s){K(e,s.visTimeline,s.eoxMap,s)}M.extend($);M.extend(Q);function Ee(e){let s=[];if(e.selectedRange&&e.selectedRange.length&&e.visTimeline){const[r,o]=e.selectedRange[0].isBefore(e.selectedRange[1])?[e.selectedRange[0],e.selectedRange[1]]:[e.selectedRange[1],e.selectedRange[0]];s=e.visTimeline.itemsData.get().filter(a=>{const g=a.date||a.start;if(!g)return!1;const p=M(g);return(p.isSame(r,"day")||p.isAfter(r,"day"))&&(p.isSame(o,"day")||p.isBefore(o,"day"))})}const t=U(s,"group");let i={};Object.keys(t).forEach(r=>{const o=e.eoxMap.map.getLayers().getArray().find(a=>a.get("id")===r),l=o==null?void 0:o.getSource();i={...i,[r]:{layer:o,source:l}}});const n=e.renderRoot.querySelector("#timeslider-filter");return s?{selectedRangeItems:U(s,"date"),range:e.selectedRange,filters:(n==null?void 0:n.filters)||[],instances:i,eoxMapConfig:{layers:e.eoxMap.layers,center:e.eoxMap.map.getView().getCenter(),zoom:e.eoxMap.map.getView().getZoom()}}:null}M.extend(de);M.extend(ce);M.extend(ue);var I,T,Y,A,E,L,z,k,S,y;class Se extends ie{constructor(){super();x(this,I,null);x(this,T,null);x(this,Y,new R([]));x(this,A,new R([]));x(this,E,[]);x(this,L,!1);x(this,z,{speed:1,dateRange:[],format:"GIF"});x(this,k,!1);x(this,S,!1);x(this,y,null);this.unstyled=!1,this.for="eox-map",this.filters=[],this.selectedDate=null,this.titleKey="name",this.layerIdKey="id",this.externalMapRendering=!1,this.selectedRange=[],this.animate=!1}static get properties(){return{for:{type:String},unstyled:{type:Boolean},titleKey:{type:String,attribute:"title-key"},layerIdKey:{type:String,attribute:"layer-id-key"},filters:{type:Array,attribute:"filter"},selectedDate:{type:String,attribute:"selected-date"},animate:{type:Boolean,attribute:"animate"},externalMapRendering:{type:Boolean,attribute:"external-map-rendering"}}}getContainer(){return this.renderRoot.querySelector("#timeslider")}get visTimeline(){return c(this,I)}set visTimeline(t){v(this,I,t)}get sliderValues(){return c(this,E)}set sliderValues(t){v(this,E,t)}get eoxMap(){return c(this,T)}set eoxMap(t){v(this,T,t)}get groups(){return c(this,Y)}set groups(t){v(this,Y,t)}get items(){return c(this,A)}set items(t){v(this,A,t)}get exportConfig(){return c(this,y)}set exportConfig(t){v(this,y,t)}setLoading(t){v(this,S,t),this.requestUpdate()}firstUpdated(){Te(this),Le()}disconnectedCallback(){super.disconnectedCallback(),ke()}filterHandler(t){Ye(t,this)}dateChangeHandler(t){Z(t.target.value,this)}handleSettingsToggle(){v(this,L,!c(this,L)),this.requestUpdate()}handleSettingsChange(t,i){v(this,z,{...c(this,z),[i]:t}),this.requestUpdate()}async generateExport(t){this.exportConfig={...t,selectedPreview:0},setTimeout(()=>{Ce(this)},1e3),this.requestUpdate()}handleExport(){v(this,k,!0);const t=Ee(this);if(t){if(this.externalMapRendering)this.dispatchEvent(new CustomEvent("export",{detail:{...t,generate:async i=>await this.generateExport(i)}}));else{const i=[];for(const n in t.selectedRangeItems){const r=t.selectedRangeItems[n],o=[];for(const l in r){let a=t.eoxMapConfig.layers.find(g=>g.properties.id===r[l].group);a.source.params[r[l].property]=r[l].date,o.push(a)}o.push(t.eoxMapConfig.layers[0]),i.push({layers:o,center:t.eoxMapConfig.center,zoom:t.eoxMapConfig.zoom})}this.generateExport({mapLayers:i})}this.requestUpdate()}}handleSelectedPreview(t){c(this,y).selectedPreview=t,this.requestUpdate()}handleExportClose(){v(this,k,!1),this.exportConfig=null,this.requestUpdate()}handlePlayPause(){if(c(this,y).play)c(this,y).play=!1;else{c(this,y).play=!0;const t=i=>{var n;c(this,y).play&&(i||(c(this,y).selectedPreview+1!==((n=c(this,y).mapLayers)==null?void 0:n.length)?this.handleSelectedPreview(c(this,y).selectedPreview+1):this.handleSelectedPreview(0)),setTimeout(t,1e3/c(this,z).speed))};t(!0)}this.requestUpdate()}handleExportGIF(){const t=c(this,y).mapLayers.map(l=>l.img),n=this.renderRoot.querySelector(".map-view-item").getBoundingClientRect(),r=n.width,o=n.height;Me.createGIF({gifWidth:r,gifHeight:o,images:[...t],interval:1,numFrames:100,frameDuration:1,fontWeight:"normal",fontSize:"16px",fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",sampleInterval:10,numWorkers:2},function(l){if(!l.error){const a=document.createElement("a");a.href=l.image,a.download="timeslider.gif",document.body.appendChild(a),a.click(),document.body.removeChild(a)}})}render(){var t;return D`
      <style>
        ${ge}
        ${!this.unstyled&&ze}
        ${De}
      </style>
      <div class="timeslider-container">
        <div class="timeslider-header flex-center">
          <i class="icon calendar-icon"></i>
          <div class="timeslider-calendar field border small">
            <input
              type="text"
              id="cal"
              class="timeslider-calendar-input"
              readonly
              value=${((t=this.selectedDate)==null?void 0:t.format("MMM DD, 'YY"))||""}
            />
          </div>
          ${j(this.filters.length&&c(this,I),()=>D`<eox-itemfilter
                id="timeslider-filter"
                .items=${c(this,A)}
                .inlineMode=${!0}
                .titleProperty=${"id"}
                .showResults=${!1}
                @filter=${this.filterHandler}
                .filterProperties=${this.filters}
                style="--inline-container-height: 40px"
              ></eox-itemfilter>`)}
          ${j(this.animate,()=>D`
              <div class="setting-btn-container">
                <button
                  class="setting-btn border small flex-center"
                  @click=${()=>this.handleSettingsToggle()}
                >
                  <i class="icon setting-icon"></i><span>Settings</span>
                </button>
                ${j(c(this,L),()=>D`
                    <div class="setting-menu">
                      <div class="setting-menu-header">
                        <i class="icon setting-icon"></i><span>Settings</span>
                      </div>
                      <div class="setting-menu-content">
                        <span>Speed</span>
                        <div class="setting-menu-content-value">
                          <span>frame/sec</span>
                          <input
                            type="number"
                            value=${c(this,z).speed}
                            @change=${i=>this.handleSettingsChange(i.target.value,"speed")}
                          />
                        </div>
                      </div>
                      <div class="setting-menu-content">
                        <span>Daterange</span>
                        <div class="setting-menu-content-value">
                          <input
                            type="text"
                            readonly
                            value=${c(this,z).dateRange.join(" - ")}
                            @change=${i=>this.handleSettingsChange(i.target.value,"dateRange")}
                          />
                        </div>
                      </div>
                      <div class="setting-menu-content">
                        <span>Format</span>
                        <div class="setting-menu-content-value">
                          <select
                            value=${c(this,z).format}
                            @change=${i=>this.handleSettingsChange(i.target.value,"format")}
                          >
                            <option value="gif">GIF</option>
                            <option value="mp4">MP4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  `)}
              </div>
              <button
                ?disabled=${this.selectedRange.length!==2}
                @click=${()=>this.handleExport()}
                class="export-btn border small flex-center"
              >
                <i class="icon export-icon"></i><span>Export</span>
              </button>
            `)}
        </div>
        <div class="timeslider-wrapper">
          <div id="timeslider"></div>
          ${j(c(this,S),()=>D`
              <div class="load-wrapper-container">
                <div class="load-wrapper">
                  <div class="shimmer"></div>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
      ${j(c(this,k),()=>{var i,n;return D`
          <div class="timeslider-export">
            <div
              @click=${()=>this.handleExportClose()}
              class="timeslider-export-overlay"
            ></div>
            <div class="timeslider-export-container">
              <div class="map-view">
                <div
                  @click=${()=>this.handlePlayPause()}
                  class="timeslider-export-play-pause"
                >
                  ${c(this,y).play?"Pause":"Play"}
                </div>
                ${j(c(this,y)&&((i=c(this,y).mapLayers)==null?void 0:i.length),()=>D`
                    ${B(c(this,y).mapLayers,(r,o)=>D`
                        <eox-map
                          class="map-view-item ${c(this,y).selectedPreview===o?"selected-map":""}"
                          data-index="${o}"
                          .layers=${r.layers}
                          .center=${r.center}
                          .zoom=${r.zoom}
                          prevent-scroll
                        ></eox-map>
                      `)}
                  `)}
              </div>
              ${j(c(this,y)&&((n=c(this,y).mapLayers)==null?void 0:n.length),()=>D`
                  <div class="export-images">
                    ${B(c(this,y).mapLayers,(r,o)=>r.img?D`<div
                            @click=${()=>this.handleSelectedPreview(o)}
                            class="${c(this,y).selectedPreview===o?"selected-preview":""}"
                          >
                            <img
                              src="${r.img}"
                              alt="Exported map ${o+1}"
                            />
                          </div>`:D`<div class="loader-image">
                            <div class="shimmer-image"></div>
                          </div>`)}
                  </div>
                `)}
              <div class="timeslider-export-footer flex-center">
                <button
                  @click=${()=>this.handleExportGIF()}
                  class="export-btn border small flex-center"
                >
                  <i class="icon export-icon"></i><span>Export</span>
                </button>
              </div>
            </div>
          </div>
        `})}
    `}}I=new WeakMap,T=new WeakMap,Y=new WeakMap,A=new WeakMap,E=new WeakMap,L=new WeakMap,z=new WeakMap,k=new WeakMap,S=new WeakMap,y=new WeakMap;customElements.define("eox-timeslider",Se);const Ue=[".filters"],Je={__name:"EodashTimeSlider",props:{filters:{type:Array,default:()=>[]}},setup(e){const s=ye(()=>X.some(i=>{var o,l;const n=(o=i.collectionStac)==null?void 0:o.links.filter(a=>a.rel==="item"),r=(l=i.collectionStac)==null?void 0:l.links.some(a=>a.rel==="items");return n&&n.length>1||r})),t=i=>{te.value=i.detail.date.toISOString()};return(i,n)=>s.value?(ve(),he("eox-timeslider",{key:xe(ee),onUpdate:t,".externalMapRendering":!0,".filters":e.filters,titleKey:"title",layerIdKey:"id",for:"eox-map#main"},null,40,Ue)):fe("v-if",!0)}};export{Je as default};
