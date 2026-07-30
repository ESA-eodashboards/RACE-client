import"./main.DzbWejFI.js";import"./main.BYAD468k.js";import"./main.AOaOdrMN.js";import{_ as K,an as U,u as V,aW as q,aX as z,n as F,j as M,a as G,bJ as W,ap as J,bK as X,aZ as Z,o as H,q as Q,e as Y,f as $}from"./eo-dash.nDGK2h88.js";import{c as ee,j as te,P as oe}from"./ProcessList-CBx3QfQo.Bg3zZClq.js";import ae from"./EodashChart-B5VNQV6G.B8gnZPgH.js";import{i as T,u as se,h as ne}from"./handling-D0zS1gFY.7mPe2WEm.js";import{g as re,u as ie,m as le}from"./async-CGfCxn45.Dro9y1fN.js";import{ah as ce,m as O,o as x,a as I,g as pe,C as de,j as S,b as k,c as R,w as D,I as N,p as me,P as A,q as ue,r as w,f as B}from"./framework.C46JYCCA.js";import"./lit-element.BMPlKsWQ.js";import"./addCommonStyleSheet.B0XXRREc.js";import"./sequential.BcvVcPN9.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./when.BR7zwNJC.js";import"./Object.DcVsVtBM.js";import"./getElement.COiK8z0h.js";import"./GeoJSON.DoKboHFD.js";import"./WKT.DsDt_o91.js";import"./browser.DZQx3rJ6.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./migrate.DkSLOl0d.js";import"./main.zQbA9ngl.js";import"./repeat.BH3fx7cN.js";import"./unsafe-html.WWnMP6dQ.js";import"./map.DiiNQ3pp.js";import"./XYZ._S3Kc2FN.js";import"./index.BUIxO2d3.js";import"./index-ixg_ZbGX._ucVUMih.js";import"./VTooltip-CVhObrcn.CtbqDGwY.js";import"./forwardRefs-fZFKbCwh.DYm8iLCs.js";import"./transition-DoKjEQw3.CcowSCMb.js";const fe=({selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o})=>{me(async()=>{var s;await T({enableCompare:((s=o.value)==null?void 0:s.id)==="compare",selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})}),Z(async s=>{var E,h,f;const c=((E=o.value)==null?void 0:E.id)==="compare",u=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const y=await se({jsonformSchema:a.value,newLayers:c?H():Q(),enableCompare:c,mapElement:o.value});y&&(Object.values(y.properties??{}).some(b=>{var L,C;return(C=(L=b==null?void 0:b.options)==null?void 0:L.drawtools)==null?void 0:C.layerId})&&!((f=(h=o.value)==null?void 0:h.selectInteractions)!=null&&f.SelectLayerClickInteraction)&&(a.value=null,await A()),a.value=y)}s===u&&await T({enableCompare:c,selectedStac:n,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})})};function ve(n,a,i,l){const p=async o=>{await l()};O(i,o=>{var s;n.value=((s=o==null?void 0:o.options)==null?void 0:s.execute)||!1});const m=O([n,a],async([o,s],[c,u])=>{u&&u.removeEventListener("change",p),o&&s&&(s.removeEventListener("change",p),await A(),s.addEventListener("change",p))},{immediate:!0});ue(()=>{a.value&&a.value.removeEventListener("change",p),m()})}const he="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",ye={ref:"container",class:"eodash-process-container"},ge={class:"eodash-process-content"},xe=[".schema"],we={key:0,class:"eodash-process-actions"},be={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(n){const a=w(!1),i=w(null),l=ce("jsonformEl");O(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const r=document.createElement("style");r.id=t,r.textContent=`
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
      `,e.shadowRoot.appendChild(r)}const d=()=>{var v;const r=(v=e==null?void 0:e.shadowRoot)==null?void 0:v.querySelector("eox-drawtools");if(r&&r.shadowRoot&&!r.shadowRoot.getElementById("eodash-drawtools-indent-style")){const g=document.createElement("style");return g.id="eodash-drawtools-indent-style",g.textContent=`
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
          `,r.shadowRoot.appendChild(g),!0}return!1};if(!d()){const r=new MutationObserver(()=>{d()&&r.disconnect()});r.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const p=B(()=>{var e;return(e=P.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=w(!1),o=w(!1),s=w(!1),c=w([]),u=B(()=>!o.value&&!!i.value&&!!l.value),{selectedStac:P,selectedCompareStac:E}=U(V()),h=n.enableCompare?E:P,f=n.enableCompare?q:z,y=n.enableCompare?F:M,j=n.enableCompare?ee:te,b=B(()=>{var e;return y.value+((e=f.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:f,jsonformSchema:i,isProcessed:a,processResults:c,loading:m,isPolling:s});const L=()=>{c.value.forEach(e=>{var d;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((d=h.value)==null?void 0:d.id)+"_process_results.json",le(t,e)})},C=async()=>{var r;if(re(i.value).some(v=>{var g,_;return Array.isArray((g=l.value)==null?void 0:g.value[v])&&!((_=l.value)!=null&&_.value[v].length)})){a.value=!1;const v=n.enableCompare?Y:$;v.value=null;return}const d=(r=l.value)==null?void 0:r.editor.validate();if(d!=null&&d.length){console.warn("[eodash] Form validation failed",d);return}c.value=[],await ne({jobs:j,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:f.value}),a.value=!0,p.value&&ie(j,y.value)};return ve(o,l,i,C),(e,t)=>(x(),I("div",ye,[pe("div",ge,[de(oe,{"map-element":S(f),"enable-compare":n.enableCompare},null,8,["map-element","enable-compare"]),i.value?(x(),I("eox-jsonform",{key:b.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,xe)):k("v-if",!0),S(G)?k("v-if",!0):(x(),R(ae,{key:1,"vega-embed-options":n.vegaEmbedOptions,"enable-compare":n.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||c.value.length&&a.value&&!p.value?(x(),I("div",we,[u.value?(x(),R(J,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[S(W)],onClick:C,density:"comfortable",size:"small"},{default:D(()=>[...t[0]||(t[0]=[N(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):k("v-if",!0),c.value.length&&a.value&&!p.value?(x(),R(J,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[S(X)],onClick:L,size:"small",density:"comfortable"},{default:D(()=>[...t[1]||(t[1]=[N(" Download ",-1)])]),_:1},8,["append-icon"])):k("v-if",!0)])):k("v-if",!0)],512))}},nt=K(be,[["styles",[he]]]);export{nt as default};
