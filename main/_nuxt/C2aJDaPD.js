import{m as U,u as X,b as le,a as ue,c as ie}from"./1lwhcIaV.js";import{I as P,an as B,al as re,a5 as Z,am as W,a0 as q,W as ce,X as ve,i as v,e as me,r as de,ao as z,a1 as R,o as pe,as as ye,L as fe,G as F,M as ge,$ as he,z as V}from"./CMzE-ULa.js";import{u as Ie}from"./BeSsTLcp.js";import{u as be}from"./CqYONCWd.js";const M=Symbol.for("vuetify:layout"),G=Symbol.for("vuetify:layout-item"),K=1e3,xe=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ae=P({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Se(){const e=B(M);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ke(e){const l=B(M);if(!l)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${re()}`,u=Z("useLayoutItem");W(G,{id:o});const n=q(!1);ce(()=>n.value=!0),ve(()=>n.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:i}=l.register(u,{...e,active:v(()=>n.value?!1:e.active.value),id:o});return me(()=>l.unregister(o)),{layoutItemStyles:r,layoutRect:l.layoutRect,layoutItemScrimStyles:i}}const we=(e,l,o,u)=>{let n={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...n}}];for(const i of e){const m=l.get(i),f=o.get(i),h=u.get(i);if(!m||!f||!h)continue;const I={...n,[m.value]:parseInt(n[m.value],10)+(h.value?parseInt(f.value,10):0)};r.push({id:i,layer:I}),n=I}return r};function Le(e){const l=B(M,null),o=v(()=>l?l.rootZIndex.value-100:K),u=de([]),n=z(new Map),r=z(new Map),i=z(new Map),m=z(new Map),f=z(new Map),{resizeRef:h,contentRect:I}=Ie(),Y=v(()=>{const a=new Map,d=e.overlaps??[];for(const t of d.filter(c=>c.includes(":"))){const[c,s]=t.split(":");if(!u.value.includes(c)||!u.value.includes(s))continue;const p=n.get(c),g=n.get(s),w=r.get(c),L=r.get(s);!p||!g||!w||!L||(a.set(s,{position:p.value,amount:parseInt(w.value,10)}),a.set(c,{position:g.value,amount:-parseInt(L.value,10)}))}return a}),b=v(()=>{const a=[...new Set([...i.values()].map(t=>t.value))].sort((t,c)=>t-c),d=[];for(const t of a){const c=u.value.filter(s=>{var p;return((p=i.get(s))==null?void 0:p.value)===t});d.push(...c)}return we(d,n,r,m)}),E=v(()=>!Array.from(f.values()).some(a=>a.value)),x=v(()=>b.value[b.value.length-1].layer),J=v(()=>({"--v-layout-left":R(x.value.left),"--v-layout-right":R(x.value.right),"--v-layout-top":R(x.value.top),"--v-layout-bottom":R(x.value.bottom),...E.value?void 0:{transition:"none"}})),S=v(()=>b.value.slice(1).map((a,d)=>{let{id:t}=a;const{layer:c}=b.value[d],s=r.get(t),p=n.get(t);return{id:t,...c,size:Number(s.value),position:p.value}})),H=a=>S.value.find(d=>d.id===a),C=Z("createLayout"),_=q(!1);pe(()=>{_.value=!0}),W(M,{register:(a,d)=>{let{id:t,order:c,position:s,layoutSize:p,elementSize:g,active:w,disableTransitions:L,absolute:te}=d;i.set(t,c),n.set(t,s),r.set(t,p),m.set(t,w),L&&f.set(t,L);const D=ye(G,C==null?void 0:C.vnode).indexOf(a);D>-1?u.value.splice(D,0,t):u.value.push(t);const N=v(()=>S.value.findIndex($=>$.id===t)),A=v(()=>o.value+b.value.length*2-N.value*2),oe=v(()=>{const $=s.value==="left"||s.value==="right",k=s.value==="right",ne=s.value==="bottom",O=g.value??p.value,se=O===0?"%":"px",j={[s.value]:0,zIndex:A.value,transform:`translate${$?"X":"Y"}(${(w.value?0:-(O===0?100:O))*(k||ne?-1:1)}${se})`,position:te.value||o.value!==K?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!_.value)return j;const y=S.value[N.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const T=Y.value.get(t);return T&&(y[T.position]+=T.amount),{...j,height:$?`calc(100% - ${y.top}px - ${y.bottom}px)`:g.value?`${g.value}px`:void 0,left:k?void 0:`${y.left}px`,right:k?`${y.right}px`:void 0,top:s.value!=="bottom"?`${y.top}px`:void 0,bottom:s.value!=="top"?`${y.bottom}px`:void 0,width:$?g.value?`${g.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),ae=v(()=>({zIndex:A.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ae,zIndex:A}},unregister:a=>{i.delete(a),n.delete(a),r.delete(a),m.delete(a),f.delete(a),u.value=u.value.filter(d=>d!==a)},mainRect:x,mainStyles:J,getLayoutItem:H,items:S,layoutRect:I,rootZIndex:o});const Q=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=v(()=>({zIndex:l?o.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:ee,getLayoutItem:H,items:S,layoutRect:I,layoutRef:h}}const $e=P({...U(),...xe({fullHeight:!0}),...fe()},"VApp"),Oe=F()({name:"VApp",props:$e(),setup(e,l){let{slots:o}=l;const u=ge(e),{layoutClasses:n,getLayoutItem:r,items:i,layoutRef:m}=Le(e),{rtlClasses:f}=he();return X(()=>{var h;return V("div",{ref:m,class:["v-application",u.themeClasses.value,n.value,f.value,e.class],style:[e.style]},[V("div",{class:"v-application__wrap"},[(h=o.default)==null?void 0:h.call(o)])])}),{getLayoutItem:r,items:i,theme:u}}}),ze=P({scrollable:Boolean,...U(),...le(),...ue({tag:"main"})},"VMain"),Te=F()({name:"VMain",props:ze(),setup(e,l){let{slots:o}=l;const{dimensionStyles:u}=ie(e),{mainStyles:n}=Se(),{ssrBootStyles:r}=be();return X(()=>V(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,r.value,u.value,e.style]},{default:()=>{var i,m;return[e.scrollable?V("div",{class:"v-main__scroller"},[(i=o.default)==null?void 0:i.call(o)]):(m=o.default)==null?void 0:m.call(o)]}})),{}}});export{Te as V,Oe as a,Ae as m,ke as u};
