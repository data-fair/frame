import{D as p}from"./BLkqAjMV.js";function u(t,l){return new p({...l,updateSrc:(o,n)=>{var a,s;const i=((a=t.options)==null?void 0:a.base)??((s=t.options.history)==null?void 0:s.base);if(i==null)n.log("error","failed to access base path in router (no router.options.base nor router.options.history.base)",t);else{const r=window.location.origin+i;if(!o.startsWith(r))n.log("info","src does not start with base path",o,r);else{let e=o.replace(r,"");e.startsWith("/")||(e="/"+e),n.log("debug","applying router.replace",e),t.replace(e);return}}n.log("info","falling back to updating window.location.href",o),window.location.href=o}})}export{u as v};
