import{X as c,aU as d,$ as y}from"./Biknmx-1.js";const f=c({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function p(r,e){let n=()=>{};function t(o){n==null||n();const s=Number(o?r.openDelay:r.closeDelay);return new Promise(l=>{n=d(s,()=>{e==null||e(o),l(o)})})}function u(){return t(!0)}function a(){return t(!1)}return{clearDelay:n,runOpenDelay:u,runCloseDelay:a}}function D(){const e=y("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}export{D as a,f as m,p as u};
