import{u as oe}from"./C4BEVKwb.js";import{K as U,ah as E,aJ as ne,ag as Z,an as D,ak as X,a0 as ae,a1 as se,i as s,e as ue,r as le,am as $,ad as R,o as ie,aT as re}from"./BsNROWhd.js";const M=Symbol.for("vuetify:layout"),q=Symbol.for("vuetify:layout-item"),N=1e3,fe=U({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),pe=U({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function me(){const u=E(M);if(!u)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:u.getLayoutItem,mainRect:u.mainRect,mainStyles:u.mainStyles}}function ge(u){const l=E(M);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=u.id??`layout-item-${ne()}`,r=Z("useLayoutItem");D(q,{id:d});const n=X(!1);ae(()=>n.value=!0),se(()=>n.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:v}=l.register(r,{...u,active:s(()=>n.value?!1:u.active.value),id:d});return ue(()=>l.unregister(d)),{layoutItemStyles:c,layoutRect:l.layoutRect,layoutItemScrimStyles:v}}const ce=(u,l,d,r)=>{let n={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...n}}];for(const v of u){const m=l.get(v),g=d.get(v),z=r.get(v);if(!m||!g||!z)continue;const h={...n,[m.value]:parseInt(n[m.value],10)+(z.value?parseInt(g.value,10):0)};c.push({id:v,layer:h}),n=h}return c};function he(u){const l=E(M,null),d=s(()=>l?l.rootZIndex.value-100:N),r=le([]),n=$(new Map),c=$(new Map),v=$(new Map),m=$(new Map),g=$(new Map),{resizeRef:z,contentRect:h}=oe(),F=s(()=>{const t=new Map,i=u.overlaps??[];for(const e of i.filter(a=>a.includes(":"))){const[a,o]=e.split(":");if(!r.value.includes(a)||!r.value.includes(o))continue;const y=n.get(a),p=n.get(o),S=c.get(a),w=c.get(o);!y||!p||!S||!w||(t.set(o,{position:y.value,amount:parseInt(S.value,10)}),t.set(a,{position:p.value,amount:-parseInt(w.value,10)}))}return t}),I=s(()=>{const t=[...new Set([...v.values()].map(e=>e.value))].sort((e,a)=>e-a),i=[];for(const e of t){const a=r.value.filter(o=>{var y;return((y=v.get(o))==null?void 0:y.value)===e});i.push(...a)}return ce(i,n,c,m)}),T=s(()=>!Array.from(g.values()).some(t=>t.value)),b=s(()=>I.value[I.value.length-1].layer),J=s(()=>({"--v-layout-left":R(b.value.left),"--v-layout-right":R(b.value.right),"--v-layout-top":R(b.value.top),"--v-layout-bottom":R(b.value.bottom),...T.value?void 0:{transition:"none"}})),x=s(()=>I.value.slice(1).map((t,i)=>{let{id:e}=t;const{layer:a}=I.value[i],o=c.get(e),y=n.get(e);return{id:e,...a,size:Number(o.value),position:y.value}})),H=t=>x.value.find(i=>i.id===t),O=Z("createLayout"),K=X(!1);ie(()=>{K.value=!0}),D(M,{register:(t,i)=>{let{id:e,order:a,position:o,layoutSize:y,elementSize:p,active:S,disableTransitions:w,absolute:_}=i;v.set(e,a),n.set(e,o),c.set(e,y),m.set(e,S),w&&g.set(e,w);const j=re(q,O==null?void 0:O.vnode).indexOf(t);j>-1?r.value.splice(j,0,e):r.value.push(e);const k=s(()=>x.value.findIndex(L=>L.id===e)),A=s(()=>d.value+I.value.length*2-k.value*2),G=s(()=>{const L=o.value==="left"||o.value==="right",C=o.value==="right",ee=o.value==="bottom",P=p.value??y.value,te=P===0?"%":"px",B={[o.value]:0,zIndex:A.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-(P===0?100:P))*(C||ee?-1:1)}${te})`,position:_.value||d.value!==N?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(!K.value)return B;const f=x.value[k.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const V=F.value.get(e);return V&&(f[V.position]+=V.amount),{...B,height:L?`calc(100% - ${f.top}px - ${f.bottom}px)`:p.value?`${p.value}px`:void 0,left:C?void 0:`${f.left}px`,right:C?`${f.right}px`:void 0,top:o.value!=="bottom"?`${f.top}px`:void 0,bottom:o.value!=="top"?`${f.bottom}px`:void 0,width:L?p.value?`${p.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),Q=s(()=>({zIndex:A.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:Q,zIndex:A}},unregister:t=>{v.delete(t),n.delete(t),c.delete(t),m.delete(t),g.delete(t),r.value=r.value.filter(i=>i!==t)},mainRect:b,mainStyles:J,getLayoutItem:H,items:x,layoutRect:h,rootZIndex:d});const W=s(()=>["v-layout",{"v-layout--full-height":u.fullHeight}]),Y=s(()=>({zIndex:l?d.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:W,layoutStyles:Y,getLayoutItem:H,items:x,layoutRect:h,layoutRef:z}}export{M as V,ge as a,fe as b,he as c,pe as m,me as u};
