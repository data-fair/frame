import{aX as f,r as i,aR as R,e as a,V as c,aW as g}from"./B1i_bsvS.js";function m(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const o=f(),t=i();if(R){const n=new ResizeObserver(e=>{s==null||s(e,n),e.length&&(u==="content"?t.value=e[0].contentRect:t.value=e[0].target.getBoundingClientRect())});a(()=>{n.disconnect()}),c(()=>o.el,(e,r)=>{r&&(n.unobserve(r),t.value=void 0),e&&n.observe(e)},{flush:"post"})}return{resizeRef:o,contentRect:g(t)}}export{m as u};
