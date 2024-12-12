import{c as E,h as F,b as X,m as Y,l as Z,e as p,u as ee,f as te,g as ae,n as ne,V as re,a as se,j as ie}from"./CSurpuj6.js";import{m as R,b as le,c as oe,u as T,a as ue}from"./C_HGAA49.js";import{K as k,I as B,z as n,i as V,h as ce,R as M,aD as ve,ai as de,aA as $,T as me,ad as ge,a8 as h,r as fe,a0 as C,aN as ye,aj as Se,e as be,P as W,Q as _e,M as he,a9 as Pe,aH as Ve,L as ke,N as ze,O as Ie}from"./D-QoSksX.js";import{a as Ce}from"./T19QXZ7g.js";function Re(e){return{aspectStyles:V(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const H=k({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...R(),...le()},"VResponsive"),x=B()({name:"VResponsive",props:H(),setup(e,l){let{slots:s}=l;const{aspectStyles:t}=Re(e),{dimensionStyles:v}=oe(e);return T(()=>{var d;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(d=s.additional)==null?void 0:d.call(s),s.default&&n("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),Te=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),P=(e,l)=>{let{slots:s}=l;const{transition:t,disabled:v,group:d,...g}=e,{component:m=d?ve:de,...f}=typeof t=="object"?t:{};return ce(m,M(typeof t=="string"?{name:v?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:v,group:d}).filter(r=>{let[i,u]=r;return u!==void 0})),g),s)};function Be(e,l){if(!$)return;const s=l.modifiers||{},t=l.value,{handler:v,options:d}=typeof t=="object"?t:{handler:t,options:{}},g=new IntersectionObserver(function(){var u;let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(u=e._observe)==null?void 0:u[l.instance.$.uid];if(!r)return;const i=m.some(S=>S.isIntersecting);v&&(!s.quiet||r.init)&&(!s.once||i||r.init)&&v(i,m,f),i&&s.once?q(e,l):r.init=!0},d);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:g},g.observe(e)}function q(e,l){var t;const s=(t=e._observe)==null?void 0:t[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const je={mounted:Be,unmounted:q},we=k({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...R(),...E(),...Te()},"VImg"),Oe=B()({name:"VImg",directives:{intersect:je},props:we(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:t}=l;const{backgroundColorClasses:v,backgroundColorStyles:d}=Ce(me(e,"color")),{roundedClasses:g}=F(e),m=ge("VImg"),f=h(""),r=fe(),i=h(e.eager?"loading":"idle"),u=h(),S=h(),c=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=V(()=>c.value.aspect||u.value/S.value||0);C(()=>e.src,()=>{z(i.value!=="idle")}),C(b,(a,o)=>{!a&&o&&r.value&&_(r.value)}),ye(()=>z());function z(a){if(!(e.eager&&a)&&!($&&!a&&!e.eager)){if(i.value="loading",c.value.lazySrc){const o=new Image;o.src=c.value.lazySrc,_(o,null)}c.value.src&&Se(()=>{var o;s("loadstart",((o=r.value)==null?void 0:o.currentSrc)||c.value.src),setTimeout(()=>{var y;if(!m.isUnmounted)if((y=r.value)!=null&&y.complete){if(r.value.naturalWidth||w(),i.value==="error")return;b.value||_(r.value,null),i.value==="loading"&&j()}else b.value||_(r.value),O()})})}}function j(){var a;m.isUnmounted||(O(),_(r.value),i.value="loaded",s("load",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function w(){var a;m.isUnmounted||(i.value="error",s("error",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function O(){const a=r.value;a&&(f.value=a.currentSrc||a.src)}let I=-1;be(()=>{clearTimeout(I)});function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(I),m.isUnmounted)return;const{naturalHeight:D,naturalWidth:U}=a;D||U?(u.value=U,S.value=D):!a.complete&&i.value==="loading"&&o!=null?I=window.setTimeout(y,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,S.value=1)};y()}const N=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),L=()=>{var y;if(!c.value.src||i.value==="idle")return null;const a=n("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:j,onError:w},null),o=(y=t.sources)==null?void 0:y.call(t);return n(P,{transition:e.transition,appear:!0},{default:()=>[W(o?n("picture",{class:"v-img__picture"},[o,a]):a,[[Ve,i.value==="loaded"]])]})},G=()=>n(P,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),K=()=>t.placeholder?n(P,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,Q=()=>t.error?n(P,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,J=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=h(!1);{const a=C(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),a())})}return T(()=>{const a=x.filterProps(e);return W(n(x,M({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!A.value},v.value,g.value,e.class],style:[{width:Pe(e.width==="auto"?u.value:e.width)},d.value,e.style]},a,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(he,null,[n(L,null,null),n(G,null,null),n(J,null,null),n(K,null,null),n(Q,null,null)]),default:t.default}),[[_e("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:i,naturalWidth:u,naturalHeight:S}}}),Ne=k({start:Boolean,end:Boolean,icon:ke,image:String,text:String,...X(),...R(),...Y(),...E(),...Z(),...ue(),...ze(),...p({variant:"flat"})},"VAvatar"),xe=B()({name:"VAvatar",props:Ne(),setup(e,l){let{slots:s}=l;const{themeClasses:t}=Ie(e),{borderClasses:v}=ee(e),{colorClasses:d,colorStyles:g,variantClasses:m}=te(e),{densityClasses:f}=ae(e),{roundedClasses:r}=F(e),{sizeClasses:i,sizeStyles:u}=ne(e);return T(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,v.value,d.value,f.value,r.value,i.value,m.value,e.class],style:[g.value,u.value,e.style]},{default:()=>[s.default?n(se,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[s.default()]}):e.image?n(Oe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(re,{key:"icon",icon:e.icon},null):e.text,ie(!1,"v-avatar")]})),{}}});export{P as M,xe as V,Oe as a};
