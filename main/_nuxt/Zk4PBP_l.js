import{D as p}from"./BLkqAjMV.js";const d=(o,n)=>{const e=Object.keys(o);n.forEach((a,t)=>{o[t]=a,e.splice(e.indexOf(t),1)}),e.forEach(a=>{delete o[a]})},w=new p({updateSrc(o,n){var l,c;const e=window.vIframeOptions,a=e==null?void 0:e.reactiveParams;if(a&&typeof a=="object"){const r=new URL(o);if(r.origin===window.location.origin&&r.pathname===window.location.pathname){n.log("debug","applying reactive params",r.searchParams),d(a,r.searchParams);return}}const t=e==null?void 0:e.router;if(t){const r=((l=t.options)==null?void 0:l.base)??((c=t.options.history)==null?void 0:c.base);if(r==null)n.log("error","failed to access base path in router (no router.options.base nor router.options.history.base)",t);else{const s=window.location.origin+r;if(!o.startsWith(s))n.log("info","src does not start with base path",o,s);else{let i=o.replace(s,"");i.startsWith("/")||(i="/"+i),n.log("debug","applying router.replace",i),t.replace(i);return}}}n.log("info","falling back to updating window.location.href",o),window.location.href=o}});window.dFrameContent=w;
