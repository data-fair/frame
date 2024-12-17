import{m as l,u as s,a as C,b as J,c as K}from"./CQX7cBYD.js";import{I as r,J as Q,z as n,K as y,L as v,M as A,N as q,O as G,i as P,P as U,Q as W,R as X}from"./Ch5M9qKH.js";import{c as Y}from"./zGcz_yVN.js";import{m as x,V as S,a as Z,R as $,u as ee,b as ae}from"./BZBalPq_.js";import{V as h,a as te}from"./mcZqjuB8.js";import{V,m as ne,a as ie,b as de,u as le,c as se,d as re,g as ce}from"./BA9nnM5r.js";import{m as ue,u as oe}from"./BST6ItiD.js";import{m as me,u as ve,L as ye}from"./CNiYATBl.js";import{m as be,a as ge,u as ke,b as fe}from"./BTLdqxIz.js";const Ve=r()({name:"VCardActions",props:l(),setup(e,i){let{slots:t}=i;return Q({VBtn:{slim:!0,variant:"text"}}),s(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ce=y({opacity:[Number,String],...l(),...C()},"VCardSubtitle"),pe=r()({name:"VCardSubtitle",props:Ce(),setup(e,i){let{slots:t}=i;return s(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=Y("v-card-title"),Ae=y({appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:[String,Number],title:[String,Number],...l(),...x()},"VCardItem"),Pe=r()({name:"VCardItem",props:Ae(),setup(e,i){let{slots:t}=i;return s(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),c=!!(e.appendAvatar||e.appendIcon),g=!!(c||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),f&&n(pe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...l(),...C()},"VCardText"),he=r()({name:"VCardText",props:Se(),setup(e,i){let{slots:t}=i;return s(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Z(),...l(),...x(),...J(),...ue(),...me(),...be(),...ge(),...ne(),...ie(),...C(),...q(),...de({variant:"elevated"})},"VCard"),Oe=r()({name:"VCard",directives:{Ripple:$},props:xe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:b}=G(e),{borderClasses:c}=ee(e),{colorClasses:g,colorStyles:k,variantClasses:f}=le(e),{densityClasses:u}=ae(e),{dimensionStyles:d}=K(e),{elevationClasses:T}=oe(e),{loaderClasses:L}=ve(e),{locationStyles:N}=ke(e),{positionClasses:B}=fe(e),{roundedClasses:D}=se(e),o=re(e,t),_=P(()=>e.link!==!1&&o.isLink.value),m=P(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return s(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),M=!!(a.subtitle||e.subtitle!=null),O=F||M,E=!!(a.append||e.appendAvatar||e.appendIcon),j=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),z=O||j||E,H=!!(a.text||e.text!=null);return U(n(R,X({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},b.value,c.value,g.value,u.value,T.value,L.value,B.value,D.value,f.value,e.class],style:[k.value,d.value,N.value,e.style],onClick:m.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var p;return[w&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(te,{key:"image-img",cover:!0,src:e.image},null)]),n(ye,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),z&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(he,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(Ve,null,{default:a.actions}),ce(m.value,"v-card")]}}),[[W("ripple"),m.value&&e.ripple]])}),{}}});export{he as V,Oe as a};