import{b as l,a as s,c as p,m as J,u as K}from"./Byc15GFp.js";import{K as r,U,z as n,I as y,V as v,T as A,J as W,M as X,i as P,W as q,X as G,O as Q}from"./DWDy2_Ss.js";import{c as Y}from"./B8PuIe7h.js";import{m as x,V as S,R as Z,u as $}from"./BrSNduNB.js";import{V as h,a as ee}from"./Ce_pZQQf.js";import{V,m as ae,a as te,u as ne,b as ie,g as de}from"./C5zhMSIe.js";import{m as le,u as se}from"./BMm7o20f.js";import{m as re,u as ce}from"./D0aW0Moz.js";import{m as ue,u as oe,L as me}from"./C7niEuSH.js";import{m as ve,a as ye,u as be,b as ge}from"./B-MpvNgV.js";import{m as ke,u as fe}from"./Bs9DHhDN.js";const Ve=r()({name:"VCardActions",props:l(),setup(e,i){let{slots:t}=i;return U({VBtn:{slim:!0,variant:"text"}}),s(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),pe=y({opacity:[Number,String],...l(),...p()},"VCardSubtitle"),Ce=r()({name:"VCardSubtitle",props:pe(),setup(e,i){let{slots:t}=i;return s(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=Y("v-card-title"),Ae=y({appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:[String,Number],title:[String,Number],...l(),...x()},"VCardItem"),Pe=r()({name:"VCardItem",props:Ae(),setup(e,i){let{slots:t}=i;return s(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),c=!!(e.appendAvatar||e.appendIcon),g=!!(c||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),f&&n(Ce,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...l(),...p()},"VCardText"),he=r()({name:"VCardText",props:Se(),setup(e,i){let{slots:t}=i;return s(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...le(),...l(),...x(),...J(),...re(),...ue(),...ve(),...ye(),...ke(),...ae(),...p(),...W(),...te({variant:"elevated"})},"VCard"),je=r()({name:"VCard",directives:{Ripple:Z},props:xe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:b}=X(e),{borderClasses:c}=se(e),{colorClasses:g,colorStyles:k,variantClasses:f}=ne(e),{densityClasses:u}=$(e),{dimensionStyles:d}=K(e),{elevationClasses:T}=ce(e),{loaderClasses:L}=oe(e),{locationStyles:B}=be(e),{positionClasses:D}=ge(e),{roundedClasses:N}=fe(e),o=ie(e,t),_=P(()=>e.link!==!1&&o.isLink.value),m=P(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return s(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),M=!!(a.subtitle||e.subtitle!=null),O=F||M,E=!!(a.append||e.appendAvatar||e.appendIcon),j=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),z=O||j||E,H=!!(a.text||e.text!=null);return q(n(R,Q({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},b.value,c.value,g.value,u.value,T.value,L.value,D.value,N.value,f.value,e.class],style:[k.value,d.value,B.value,e.style],onClick:m.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var C;return[w&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ee,{key:"image-img",cover:!0,src:e.image},null)]),n(me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),z&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(he,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(Ve,null,{default:a.actions}),de(m.value,"v-card")]}}),[[G("ripple"),m.value&&e.ripple]])}),{}}});export{he as V,je as a};
