import"./main.DA9PWEAR.js";import"./main.BYAD468k.js";import"./main.CMWg41sb.js";import{_ as U,aq as V,u as q,a_ as K,a$ as z,n as F,j as M,a as G,bS as $,as as T,bT as H,b1 as Q,q as W,r as X,e as Y,f as Z}from"./eo-dash.CR9ETzvW.js";import{c as ee,j as te,P as oe}from"./ProcessList-9uCftSZK.CNWbTqZD.js";import ae from"./EodashChart-BygfKmF-.BrJuocbo.js";import{i as J,u as se,h as re}from"./handling-yBZonuE-.COkWkUtV.js";import{g as ne,u as ie,m as le}from"./async-DiaDfFG5.BGKSI38G.js";import{ah as ce,m as B,o as x,a as I,g as pe,C as de,j as S,b as k,c as R,w as D,I as N,p as me,P as A,q as ue,r as b,f as _}from"./framework.BCktD_7k.js";import"./lit-element.BMPlKsWQ.js";import"./addCommonStyleSheet.B0XXRREc.js";import"./sequential.BcvVcPN9.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./when.BR7zwNJC.js";import"./Object.DcVsVtBM.js";import"./getElement.COiK8z0h.js";import"./GeoJSON.DoKboHFD.js";import"./WKT.DsDt_o91.js";import"./browser.h2nu-mfs.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./migrate.DkSLOl0d.js";import"./main.CaITssBz.js";import"./repeat.BH3fx7cN.js";import"./unsafe-html.WWnMP6dQ.js";import"./map.DiiNQ3pp.js";import"./XYZ._S3Kc2FN.js";import"./index.BUIxO2d3.js";import"./index-wRrN5LZi.N1-Aw3CB.js";import"./VTooltip-Ob46YSPd.C4KSdoPI.js";import"./forwardRefs-BZapdl8v.6XW2qpYv.js";import"./transition-6c7Mxi67.DTVRkuzx.js";const fe=({selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o})=>{me(async()=>{var s;await J({enableCompare:((s=o.value)==null?void 0:s.id)==="compare",selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})}),Q(async s=>{var E,h,f;const c=((E=o.value)==null?void 0:E.id)==="compare",u=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const y=await se({jsonformSchema:a.value,newLayers:c?W():X(),enableCompare:c,mapElement:o.value});y&&(Object.values(y.properties??{}).some(w=>{var L,C;return(C=(L=w==null?void 0:w.options)==null?void 0:L.drawtools)==null?void 0:C.layerId})&&!((f=(h=o.value)==null?void 0:h.selectInteractions)!=null&&f.SelectLayerClickInteraction)&&(a.value=null,await A()),a.value=y)}s===u&&await J({enableCompare:c,selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})})};function ve(r,a,i,l){const p=async o=>{await l()};B(i,o=>{var s;r.value=((s=o==null?void 0:o.options)==null?void 0:s.execute)||!1});const m=B([r,a],async([o,s],[c,u])=>{u&&u.removeEventListener("change",p),o&&s&&(s.removeEventListener("change",p),await A(),s.addEventListener("change",p))},{immediate:!0});ue(()=>{a.value&&a.value.removeEventListener("change",p),m()})}const he="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",ye={ref:"container",class:"eodash-process-container"},ge={class:"eodash-process-content"},xe=[".schema"],be={key:0,class:"eodash-process-actions"},we={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const a=b(!1),i=b(null),l=ce("jsonformEl");B(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=`
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
      `,e.shadowRoot.appendChild(n)}const d=()=>{var v;const n=(v=e==null?void 0:e.shadowRoot)==null?void 0:v.querySelector("eox-drawtools");if(n&&n.shadowRoot&&!n.shadowRoot.getElementById("eodash-drawtools-indent-style")){const g=document.createElement("style");return g.id="eodash-drawtools-indent-style",g.textContent=`
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
          `,n.shadowRoot.appendChild(g),!0}return!1};if(!d()){const n=new MutationObserver(()=>{d()&&n.disconnect()});n.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const p=_(()=>{var e;return(e=P.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=b(!1),o=b(!1),s=b(!1),c=b([]),u=_(()=>!o.value&&!!i.value&&!!l.value),{selectedStac:P,selectedCompareStac:E}=V(q()),h=r.enableCompare?E:P,f=r.enableCompare?K:z,y=r.enableCompare?F:M,j=r.enableCompare?ee:te,w=_(()=>{var e;return y.value+((e=f.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:f,jsonformSchema:i,isProcessed:a,processResults:c,loading:m,isPolling:s});const L=()=>{c.value.forEach(e=>{var d;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((d=h.value)==null?void 0:d.id)+"_process_results.json",le(t,e)})},C=async()=>{var n;if(ne(i.value).some(v=>{var g,O;return Array.isArray((g=l.value)==null?void 0:g.value[v])&&!((O=l.value)!=null&&O.value[v].length)})){a.value=!1;const v=r.enableCompare?Y:Z;v.value=null;return}const d=(n=l.value)==null?void 0:n.editor.validate();if(d!=null&&d.length){console.warn("[eodash] Form validation failed",d);return}c.value=[],await re({jobs:j,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:f.value}),a.value=!0,p.value&&ie(j,y.value)};return ve(o,l,i,C),(e,t)=>(x(),I("div",ye,[pe("div",ge,[de(oe,{"map-element":S(f),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),i.value?(x(),I("eox-jsonform",{key:w.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,xe)):k("v-if",!0),S(G)?k("v-if",!0):(x(),R(ae,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||c.value.length&&a.value&&!p.value?(x(),I("div",be,[u.value?(x(),R(T,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[S($)],density:"comfortable",size:"small",onClick:C},{default:D(()=>[...t[0]||(t[0]=[N(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):k("v-if",!0),c.value.length&&a.value&&!p.value?(x(),R(T,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[S(H)],size:"small",density:"comfortable",onClick:L},{default:D(()=>[...t[1]||(t[1]=[N(" Download ",-1)])]),_:1},8,["append-icon"])):k("v-if",!0)])):k("v-if",!0)],512))}},rt=U(we,[["styles",[he]]]);export{rt as default};
