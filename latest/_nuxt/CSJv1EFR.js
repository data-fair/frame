var c=Object.defineProperty;var m=(r,a,e)=>a in r?c(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var d=(r,a,e)=>m(r,typeof a!="symbol"?a+"":a,e);import"./DewcO8-M.js";import{d as u,u as h,t as f,C as y,A as n,x as t,z as i,B as o,E as p}from"./Ch5M9qKH.js";import{V as b}from"./D_-xqzhc.js";import{V as l,a as g}from"./BSvt5bx3.js";import{V as x}from"./DWT8z_zA.js";import"./AsORjb4S.js";import"./zGcz_yVN.js";import"./CQX7cBYD.js";import"./pIW_UJTS.js";import"./BZBalPq_.js";import"./BST6ItiD.js";import"./BTLdqxIz.js";import"./BA9nnM5r.js";import"./CNiYATBl.js";import"./9hHflEcJ.js";/* empty css        */class V{constructor(a){d(this,"router");this.router=a}stateChange(a,e){a==="push"&&this.router.push({query:Object.fromEntries(e.searchParams)}),a==="replace"&&this.router.replace({query:Object.fromEntries(e.searchParams)})}onStateChange(a){this.router.afterEach(a)}}const _=r=>new V(r),C=["src",".adapter"],v=["src",".adapter"],P=u({__name:"dynamic-nav-sync",setup(r){const a=_(h());return(e,s)=>(f(),y(x,null,{default:n(()=>[s[1]||(s[1]=t("h1",{class:"text-h3 mb-6"}," Dynamic navigation syncing ",-1)),i(b,{color:"secondary",border:"start",variant:"outlined",style:{width:"fit-content"},class:"mb-4"},{default:n(()=>s[0]||(s[0]=[o(" This functionality requires loading a "),t("code",null,"d-frame-content-*.js",-1),o(" variant that handles dynamic routing and adding a state change adapter to "),t("code",null,"d-frame",-1),o(". ")])),_:1}),s[2]||(s[2]=t("p",null," It is possible to handle complex cases of parameters syncing, accross parent and children. ",-1)),s[3]||(s[3]=t("p",{class:"my-4"},[o(" This examples reflects the query parameter param1 accross children, while param2 is kept segregated with a prefix. It uses "),t("code",null,'sync-params="param1,param2:child1_"'),o(" and "),t("code",null,'sync-params="param1,param2:child2_"'),o(" attributes. ")],-1)),i(g,null,{default:n(()=>[i(l,null,{default:n(()=>[t("d-frame",{src:`${e.$config.app.baseURL}children/nav-sync-vue-router`,style:{"max-width":"300px"},resize:"","sync-params":"param2:child1_,*",".adapter":p(a),class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},null,40,C)]),_:1}),i(l,null,{default:n(()=>[t("d-frame",{src:`${e.$config.app.baseURL}children/nav-sync-vue-router`,style:{"max-width":"300px"},resize:"","sync-params":"param2:child2_,*",".adapter":p(a),class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},null,40,v)]),_:1})]),_:1})]),_:1}))}});export{P as default};