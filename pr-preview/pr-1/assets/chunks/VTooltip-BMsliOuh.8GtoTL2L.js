import{V as u,m as b}from"./VOverlay-BS-E4Z6g.Cjg-9oEX.js";import{u as h,f as O}from"./forwardRefs-lhDuXD-N.CulvC4YU.js";import{O as S,Q as x,a1 as T,a2 as U,U as k,a3 as w}from"./eo-dash.CdZYmsUC.js";import{h as e,p as A,K as d,G as C}from"./framework.MubbJdOF.js";const G=x({id:String,text:String,...w(b({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),H=S()({name:"VTooltip",props:G(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const n=T(t,"modelValue"),{scopeId:v}=h(),f=U(),r=e(()=>t.id||`v-tooltip-${f}`),l=A(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return k(()=>{const p=u.filterProps(t);return C(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},p,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),O({},l)}});export{H as V};
