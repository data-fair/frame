import{c as I}from"./CZcnBYGk.js";import{u as z}from"./BVNXVYn3.js";import{m as D,b as L,a as $,u as F}from"./DmRMNqZV.js";import{m as R,u as w,V as E}from"./BJxN_t0e.js";import{m as O,u as j}from"./DeprSr8z.js";import{X as J,af as M,a1 as N,Y as X,a9 as Y,i as s,a2 as q,a4 as G,aJ as H,z as t,ae as K}from"./Biknmx-1.js";import{m as Q,a as U,b as W,c as Z}from"./BuuLeTbB.js";import{m as ee,u as ae}from"./CIvOHrtd.js";import{m as te,b as le,g as oe,V as d}from"./CTZJ2NcV.js";import{V as ne}from"./D-va84gw.js";const se=I("v-alert-title"),re=["success","info","warning","error"],ie=J({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:M,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...D(),...R(),...L(),...O(),...Q(),...U(),...ee(),...$(),...N(),...te({variant:"flat"})},"VAlert"),Pe=X()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{emit:v,slots:a}=m;const r=Y(e,"modelValue"),o=s(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=s(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=q(e),{colorClasses:b,colorStyles:k,variantClasses:V}=le(y),{densityClasses:P}=w(e),{dimensionStyles:C}=F(e),{elevationClasses:g}=j(e),{locationStyles:x}=W(e),{positionClasses:S}=Z(e),{roundedClasses:_}=ae(e),{textColorClasses:p,textColorStyles:B}=z(G(e,"borderColor")),{t:T}=H(),i=s(()=>({"aria-label":T(e.closeLabel),onClick(n){r.value=!1,v("click:close",n)}}));return()=>{const n=!!(a.prepend||o.value),h=!!(a.title||e.title),A=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,b.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[oe(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",p.value],style:B.value},null),n&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},a.prepend):t(E,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[h&&t(se,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),A&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(ne,K({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{Pe as V};
