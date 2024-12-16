import{c as A}from"./zGcz_yVN.js";import{a as L}from"./pIW_UJTS.js";import{m as z,b as D,a as $,c as R}from"./CQX7cBYD.js";import{m as F,b as O,V as w}from"./BZBalPq_.js";import{m as E,u as N}from"./BST6ItiD.js";import{K as j,L as K,N as M,I as U,W,i as s,O as q,T as G,U as H,z as a,R as J}from"./Ch5M9qKH.js";import{m as Q,a as X,u as Y,b as Z}from"./BTLdqxIz.js";import{m as ee,b as te,u as ae,c as le,g as oe,V as d}from"./BA9nnM5r.js";import{V as ne}from"./CNiYATBl.js";const se=A("v-alert-title"),re=["success","info","warning","error"],ie=j({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:K,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...z(),...F(),...D(),...E(),...Q(),...X(),...ee(),...$(),...M(),...te({variant:"flat"})},"VAlert"),Ve=U()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{emit:v,slots:t}=m;const r=W(e,"modelValue"),o=s(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=s(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=q(e),{colorClasses:b,colorStyles:k,variantClasses:V}=ae(y),{densityClasses:P}=O(e),{dimensionStyles:C}=R(e),{elevationClasses:g}=N(e),{locationStyles:x}=Y(e),{positionClasses:S}=Z(e),{roundedClasses:_}=le(e),{textColorClasses:T,textColorStyles:p}=L(G(e,"borderColor")),{t:B}=H(),i=s(()=>({"aria-label":B(e.closeLabel),onClick(n){r.value=!1,v("click:close",n)}}));return()=>{const n=!!(t.prepend||o.value),I=!!(t.title||e.title),h=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,b.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[oe(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",T.value],style:p.value},null),n&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(d,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},t.prepend):a(w,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(se,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((c=t.text)==null?void 0:c.call(t))??e.text,(u=t.default)==null?void 0:u.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),h&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:i.value})]}}):a(ne,J({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{Ve as V};
