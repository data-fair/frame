import{c as L}from"./6HkjocU_.js";import{m as z,u as D,b as $}from"./DMcdG5sV.js";import{m as p,b as R,a as F,c as O}from"./CqxRLcTS.js";import{m as j,c as w,e as E,f as N,g as K,h as M,j as U,V as W,a as d}from"./BCOYA707.js";import{K as q,L as G,N as H,I as J,W as Q,i as s,O as X,T as Y,U as Z,z as a,R as ee}from"./WXRM7Bxi.js";import{a as te,b as ae,c as le,d as oe,V as ne}from"./COHtlJjh.js";const se=L("v-alert-title"),re=["success","info","warning","error"],ie=q({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:G,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...p(),...j(),...R(),...z(),...te(),...ae(),...w(),...F(),...H(),...E({variant:"flat"})},"VAlert"),fe=J()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:t}=v;const r=Q(e,"modelValue"),o=s(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=s(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=X(e),{colorClasses:b,colorStyles:k,variantClasses:V}=N(y),{densityClasses:P}=K(e),{dimensionStyles:C}=O(e),{elevationClasses:g}=D(e),{locationStyles:x}=le(e),{positionClasses:S}=oe(e),{roundedClasses:_}=M(e),{textColorClasses:T,textColorStyles:h}=$(Y(e,"borderColor")),{t:B}=Z(),i=s(()=>({"aria-label":B(e.closeLabel),onClick(n){r.value=!1,m("click:close",n)}}));return()=>{const n=!!(t.prepend||o.value),I=!!(t.title||e.title),A=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,b.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[U(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",T.value],style:h.value},null),n&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(d,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},t.prepend):a(W,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(se,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((c=t.text)==null?void 0:c.call(t))??e.text,(u=t.default)==null?void 0:u.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),A&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:i.value})]}}):a(ne,ee({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{fe as V};
