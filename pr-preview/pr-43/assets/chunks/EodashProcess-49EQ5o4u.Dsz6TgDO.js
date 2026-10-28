import{_ as D,aG as V,Y as z,a$ as F,b0 as K,a0 as M,X as U,M as q,cy as G,aK as B,cz as Q,b7 as X,a3 as Y,a4 as $,P as H,Q as W}from"./eo-dash.DpKKBWKe.js";import{m as Z,g as ee,u as te}from"./async-DMNQgi9P.C2F9qc03.js";import{i as O,u as oe,h as ae}from"./handling-BbLu5NLx.CTt5EtHb.js";import se from"./EodashChart-QSUxx7YQ.jqMaaR-F.js";import re,{t as ne,n as ie}from"./ProcessList-CZV_C3ib.Cbxsv0zm.js";import"./main.Cxd6HfEe.js";import"./main.wHeFxhlX.js";import"./main.BVjQlH7o.js";import{ao as le,m as j,o as y,a as S,g as ce,C as de,j as _,b as C,c as I,w as J,I as N,r as g,f as R,p as pe,P as T,q as me,aC as ue}from"./framework.DyDpZHOy.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.Dkj-8KsK.js";import"./lit-element.BMPlKsWQ.js";import"./WMTS.CN-OHH6r.js";import"./intersectsextent.CmCLhctL.js";import"./util.Dhne-uB2.js";import"./XYZ.DRmU4g8s.js";import"./GeoJSON.CeODa7cX.js";import"./getElement.COiK8z0h.js";import"./addCommonStyleSheet.BQJIwBZH.js";import"./utils.DMAht7nH.js";import"./index.DEU_HeW8.js";import"./tooltip-BZbMIoF9.DLI7rnzK.js";import"./VTooltip-3UQD2IPR.8soMiQbU.js";import"./forwardRefs-D9nwsgT0.ce697swI.js";import"./transition-JuwqqKsH.HrgB7D0W.js";import"./sequential.BcvVcPN9.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./when.BR7zwNJC.js";import"./WKT.hFvQuUOu.js";import"./browser.CLkLOAIA.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.BIJR-IiI.js";var fe=({selectedStac:r,jsonformSchema:o,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:a})=>{pe(async()=>{var s;await O({enableCompare:((s=a.value)==null?void 0:s.id)==="compare",selectedStac:r,jsonformSchema:o,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:a.value})}),X(async s=>{var x,k,h;const c=((x=a.value)==null?void 0:x.id)==="compare",f=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const u=await oe({jsonformSchema:o.value,newLayers:c?Y():$(),enableCompare:c,mapElement:a.value});u&&(Object.values(u.properties??{}).some(v=>{var b,E;return(E=(b=v==null?void 0:v.options)==null?void 0:b.drawtools)==null?void 0:E.layerId})&&!((h=(k=a.value)==null?void 0:k.selectInteractions)!=null&&h.SelectLayerClickInteraction)&&(o.value=null,await T()),o.value=u)}s===f&&await O({enableCompare:c,selectedStac:r,jsonformSchema:o,isProcessed:i,processResults:l,loading:d,isPolling:m,mapElement:a.value})})};function he(r,o,i,l){const d=ue(()=>l(),200);j(i,a=>{var s;r.value=((s=a==null?void 0:a.options)==null?void 0:s.execute)||!1});const m=j([r,o],async([a,s],[c,f])=>{f&&f.removeEventListener("change",d),a&&s&&(s.removeEventListener("change",d),await T(),s.addEventListener("change",d))},{immediate:!0});me(()=>{o.value&&o.value.removeEventListener("change",d),m()})}var ve="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{scrollbar-gutter:stable;flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-content>.eodash-chart-wrapper:not(.fit-x-layout){flex:1 1 0;height:auto;min-height:180px}.eodash-process-content>.eodash-chart-wrapper.fit-x-layout{flex:none;height:auto!important}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",ye={ref:"container",class:"eodash-process-container"},ge={class:"eodash-process-content"},xe=[".schema"],be={key:0,class:"eodash-process-actions"},et=D({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const o=g(!1),i=g(null),l=le("jsonformEl");j(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,e.shadowRoot.appendChild(n)}const p=()=>{var w;const n=(w=e==null?void 0:e.shadowRoot)==null?void 0:w.querySelector("eox-drawtools");if(n&&n.shadowRoot&&!n.shadowRoot.getElementById("eodash-drawtools-indent-style")){const L=document.createElement("style");return L.id="eodash-drawtools-indent-style",L.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,n.shadowRoot.appendChild(L),!0}return!1};if(!p()){const n=new MutationObserver(()=>{p()&&n.disconnect()});n.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const d=R(()=>{var e;return(e=x.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=g(!1),a=g(!1),s=g(!1),c=g([]),f=R(()=>!a.value&&!!i.value&&!!l.value),{selectedStac:x,selectedCompareStac:k}=V(z()),h=r.enableCompare?k:x,u=r.enableCompare?F:K,v=r.enableCompare?M:U,b=r.enableCompare?ne:ie,E=R(()=>{var e;return v.value+((e=u.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:u,jsonformSchema:i,isProcessed:o,processResults:c,loading:m,isPolling:s});const A=()=>{c.value.forEach(e=>{var p;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((p=h.value)==null?void 0:p.id)+"_process_results.json",Z(t,e)})},P=async()=>{var t;if(ee(i.value).some(p=>{var n,w;return Array.isArray((n=l.value)==null?void 0:n.value[p])&&!((w=l.value)!=null&&w.value[p].length)})){o.value=!1;const p=r.enableCompare?H:W;p.value=null;return}const e=(t=l.value)==null?void 0:t.editor.validate();if(e!=null&&e.length){console.warn("[eodash] Form validation failed",e);return}c.value=[],await ae({jobs:b,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:u.value}),o.value=!0,d.value&&te(b,v.value)};return he(a,l,i,P),(e,t)=>(y(),S("div",ye,[ce("div",ge,[de(re,{"map-element":_(u),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),i.value?(y(),S("eox-jsonform",{key:E.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,xe)):C("v-if",!0),_(q)?C("v-if",!0):(y(),I(se,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),f.value||c.value.length&&o.value&&!d.value?(y(),S("div",be,[f.value?(y(),I(B,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[_(G)],density:"comfortable",size:"small",onClick:P},{default:J(()=>[...t[0]||(t[0]=[N(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):C("v-if",!0),c.value.length&&o.value&&!d.value?(y(),I(B,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[_(Q)],size:"small",density:"comfortable",onClick:A},{default:J(()=>[...t[1]||(t[1]=[N(" Download ",-1)])]),_:1},8,["append-icon"])):C("v-if",!0)])):C("v-if",!0)],512))}},[["styles",[ve]]]);export{et as default};
