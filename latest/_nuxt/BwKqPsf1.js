import{m as U,u as Z,b as le,a as ue,c as ie}from"./CqxRLcTS.js";import{K as P,at as B,ar as re,ab as X,as as q,a6 as F,$ as ce,a0 as ve,i as v,e as me,r as de,au as z,a7 as R,o as pe,ax as ye,N as fe,I as W,O as ge,a5 as he,z as V}from"./WXRM7Bxi.js";import{u as be}from"./DUG7EmNN.js";import{u as Ie}from"./7tOprqx7.js";const M=Symbol.for("vuetify:layout"),Y=Symbol.for("vuetify:layout-item"),j=1e3,xe=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ae=P({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Se(){const e=B(M);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ke(e){const l=B(M);if(!l)throw new Error("[Vuetify] Could not find injected layout");const a=e.id??`layout-item-${re()}`,u=X("useLayoutItem");q(Y,{id:a});const n=F(!1);ce(()=>n.value=!0),ve(()=>n.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:i}=l.register(u,{...e,active:v(()=>n.value?!1:e.active.value),id:a});return me(()=>l.unregister(a)),{layoutItemStyles:r,layoutRect:l.layoutRect,layoutItemScrimStyles:i}}const we=(e,l,a,u)=>{let n={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...n}}];for(const i of e){const m=l.get(i),f=a.get(i),h=u.get(i);if(!m||!f||!h)continue;const b={...n,[m.value]:parseInt(n[m.value],10)+(h.value?parseInt(f.value,10):0)};r.push({id:i,layer:b}),n=b}return r};function Le(e){const l=B(M,null),a=v(()=>l?l.rootZIndex.value-100:j),u=de([]),n=z(new Map),r=z(new Map),i=z(new Map),m=z(new Map),f=z(new Map),{resizeRef:h,contentRect:b}=be(),G=v(()=>{const o=new Map,d=e.overlaps??[];for(const t of d.filter(c=>c.includes(":"))){const[c,s]=t.split(":");if(!u.value.includes(c)||!u.value.includes(s))continue;const p=n.get(c),g=n.get(s),w=r.get(c),L=r.get(s);!p||!g||!w||!L||(o.set(s,{position:p.value,amount:parseInt(w.value,10)}),o.set(c,{position:g.value,amount:-parseInt(L.value,10)}))}return o}),I=v(()=>{const o=[...new Set([...i.values()].map(t=>t.value))].sort((t,c)=>t-c),d=[];for(const t of o){const c=u.value.filter(s=>{var p;return((p=i.get(s))==null?void 0:p.value)===t});d.push(...c)}return we(d,n,r,m)}),E=v(()=>!Array.from(f.values()).some(o=>o.value)),x=v(()=>I.value[I.value.length-1].layer),J=v(()=>({"--v-layout-left":R(x.value.left),"--v-layout-right":R(x.value.right),"--v-layout-top":R(x.value.top),"--v-layout-bottom":R(x.value.bottom),...E.value?void 0:{transition:"none"}})),S=v(()=>I.value.slice(1).map((o,d)=>{let{id:t}=o;const{layer:c}=I.value[d],s=r.get(t),p=n.get(t);return{id:t,...c,size:Number(s.value),position:p.value}})),H=o=>S.value.find(d=>d.id===o),C=X("createLayout"),N=F(!1);pe(()=>{N.value=!0}),q(M,{register:(o,d)=>{let{id:t,order:c,position:s,layoutSize:p,elementSize:g,active:w,disableTransitions:L,absolute:te}=d;i.set(t,c),n.set(t,s),r.set(t,p),m.set(t,w),L&&f.set(t,L);const _=ye(Y,C==null?void 0:C.vnode).indexOf(o);_>-1?u.value.splice(_,0,t):u.value.push(t);const D=v(()=>S.value.findIndex($=>$.id===t)),A=v(()=>a.value+I.value.length*2-D.value*2),ae=v(()=>{const $=s.value==="left"||s.value==="right",k=s.value==="right",ne=s.value==="bottom",O=g.value??p.value,se=O===0?"%":"px",K={[s.value]:0,zIndex:A.value,transform:`translate${$?"X":"Y"}(${(w.value?0:-(O===0?100:O))*(k||ne?-1:1)}${se})`,position:te.value||a.value!==j?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!N.value)return K;const y=S.value[D.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const T=G.value.get(t);return T&&(y[T.position]+=T.amount),{...K,height:$?`calc(100% - ${y.top}px - ${y.bottom}px)`:g.value?`${g.value}px`:void 0,left:k?void 0:`${y.left}px`,right:k?`${y.right}px`:void 0,top:s.value!=="bottom"?`${y.top}px`:void 0,bottom:s.value!=="top"?`${y.bottom}px`:void 0,width:$?g.value?`${g.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),oe=v(()=>({zIndex:A.value-1}));return{layoutItemStyles:ae,layoutItemScrimStyles:oe,zIndex:A}},unregister:o=>{i.delete(o),n.delete(o),r.delete(o),m.delete(o),f.delete(o),u.value=u.value.filter(d=>d!==o)},mainRect:x,mainStyles:J,getLayoutItem:H,items:S,layoutRect:b,rootZIndex:a});const Q=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=v(()=>({zIndex:l?a.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:ee,getLayoutItem:H,items:S,layoutRect:b,layoutRef:h}}const $e=P({...U(),...xe({fullHeight:!0}),...fe()},"VApp"),Oe=W()({name:"VApp",props:$e(),setup(e,l){let{slots:a}=l;const u=ge(e),{layoutClasses:n,getLayoutItem:r,items:i,layoutRef:m}=Le(e),{rtlClasses:f}=he();return Z(()=>{var h;return V("div",{ref:m,class:["v-application",u.themeClasses.value,n.value,f.value,e.class],style:[e.style]},[V("div",{class:"v-application__wrap"},[(h=a.default)==null?void 0:h.call(a)])])}),{getLayoutItem:r,items:i,theme:u}}}),ze=P({scrollable:Boolean,...U(),...le(),...ue({tag:"main"})},"VMain"),Te=W()({name:"VMain",props:ze(),setup(e,l){let{slots:a}=l;const{dimensionStyles:u}=ie(e),{mainStyles:n}=Se(),{ssrBootStyles:r}=Ie();return Z(()=>V(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,r.value,u.value,e.style]},{default:()=>{var i,m;return[e.scrollable?V("div",{class:"v-main__scroller"},[(i=a.default)==null?void 0:i.call(a)]):(m=a.default)==null?void 0:m.call(a)]}})),{}}});export{Te as V,Oe as a,Ae as m,ke as u};