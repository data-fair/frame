import"./CW1WRSfp.js";import{c as D,m as L,d as j,f as $,g as R,h as F,j as N,k as q,l as E,n as M,p as O,q as G,r as J,v as Q,t as H,V as K,a as f}from"./kU0lyQP8.js";import{m as U,b as W,a as X,c as Y}from"./Ba5KhyXO.js";import{I as Z,J as ee,L as te,G as ae,Q as le,i as d,M as ne,R as se,S as oe,z as l,P as ie,d as re,t as de,C as ce,A as b,x as n,B as i}from"./B1i_bsvS.js";import{V as ue}from"./BYco_iSd.js";import{V as me}from"./DIL9KtL5.js";import"./BUDPeZol.js";import"./C8uJUVgf.js";/* empty css        */const ve=D("v-alert-title"),ye=["success","info","warning","error"],fe=Z({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:ee,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ye.includes(e)},...U(),...L(),...W(),...j(),...$(),...R(),...F(),...X(),...te(),...N({variant:"flat"})},"VAlert"),be=ae()({name:"VAlert",props:fe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{emit:a,slots:t}=c;const u=le(e,"modelValue"),o=d(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),k=d(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:V}=ne(e),{colorClasses:g,colorStyles:h,variantClasses:C}=q(k),{densityClasses:x}=E(e),{dimensionStyles:P}=Y(e),{elevationClasses:p}=M(e),{locationStyles:S}=O(e),{positionClasses:B}=G(e),{roundedClasses:T}=J(e),{textColorClasses:I,textColorStyles:w}=Q(se(e,"borderColor")),{t:_}=oe(),m=d(()=>({"aria-label":_(e.closeLabel),onClick(r){u.value=!1,a("click:close",r)}}));return()=>{const r=!!(t.prepend||o.value),z=!!(t.title||e.title),A=!!(t.close||e.closable);return u.value&&l(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},V.value,g.value,x.value,p.value,B.value,T.value,C.value,e.class],style:[h.value,P.value,S.value,e.style],role:"alert"},{default:()=>{var v,y;return[H(!1,"v-alert"),e.border&&l("div",{key:"border",class:["v-alert__border",I.value],style:w.value},null),r&&l("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},t.prepend):l(K,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),l("div",{class:"v-alert__content"},[z&&l(ve,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),((v=t.text)==null?void 0:v.call(t))??e.text,(y=t.default)==null?void 0:y.call(t)]),t.append&&l("div",{key:"append",class:"v-alert__append"},[t.append()]),A&&l("div",{key:"close",class:"v-alert__close"},[t.close?l(f,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var s;return[(s=t.close)==null?void 0:s.call(t,{props:m.value})]}}):l(ue,ie({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},m.value),null)])]}})}}}),Be=re({__name:"dynamic-height",setup(e){return(c,a)=>(de(),ce(me,null,{default:b(()=>[a[1]||(a[1]=n("h1",{class:"text-h3 mb-6"}," Dynamic height ",-1)),l(be,{type:"warning",border:"start",variant:"outlined",style:{width:"fit-content"},class:"mb-4"},{default:b(()=>a[0]||(a[0]=[i(" This functionality requires loading "),n("code",null,"d-frame-content.js",-1),i(" in the content page. ")])),_:1}),a[2]||(a[2]=n("p",null,[i("If the frame content contains one or more elements with a "),n("code",null,"data-iframe-height"),i(" attribute, the height will be adjusted based on their position.")],-1)),a[3]||(a[3]=n("h2",{class:"text-h4 mt-8"}," Interactive resize ",-1)),a[4]||(a[4]=n("p",{class:"my-4"}," The iframe height is adjusted dynamically after user interactions. ",-1)),a[5]||(a[5]=n("d-frame",{src:"/children/resize",style:{"max-width":"300px"}},null,-1))]),_:1}))}});export{Be as default};
