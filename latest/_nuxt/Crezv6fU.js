import{V as O,X as U,z as n,W as xe,Y as X,Z as Se,ai as Ve,ag as M,i as f,a2 as ke,a7 as W,r as L,ak as je,Q as A,o as j,e as ne,aj as Te,aM as z,a0 as J,O as _e,b2 as Ue,as as Be,b3 as qe,aP as Ee,am as Ze,M as Ge,I as Je,b4 as me,h as F,b5 as K,b6 as Q,a as Ce,b7 as Ke,T as Qe,b8 as et,N as tt,d as He,t as fe,C as ge,A as c,E as R,J as at,x as he,B as k,y as lt,b9 as nt,F as ot,ba as rt}from"./2GtNo5G5.js";import{d as it,e as st,V as ee,a as E,b as C,c as ut,f as ct}from"./BMiLB2hK.js";import{v as dt}from"./DoLnX5WI.js";import{m as Ne,u as Me}from"./3CDrnHPB.js";import{u as ae}from"./DV3ZCpHz.js";import{b as oe,c as re,a as q}from"./kEr0N0kK.js";import{m as vt,a as mt,u as ft}from"./Bw-xeEd6.js";import{m as Pe,u as Ie}from"./CL2nIQGv.js";import{m as Ae,a as De}from"./Bw5LCiks.js";import{m as Re,u as Le}from"./BFapnbUl.js";import{V as G,c as gt}from"./CbHEB2-S.js";import{u as Ye}from"./C4XMf3oP.js";import{a as $e}from"./zI1tdITT.js";import{t as ht}from"./BfiA9UYn.js";import{V as ye}from"./DBJ0EFcy.js";import{m as yt,V as le}from"./Dus6-8vc.js";import{V as pt}from"./Dhbhthhq.js";/* empty css        */import{c as bt}from"./WLeHKyBY.js";import{V as wt}from"./CdUYy6CV.js";import{V as xt,a as St}from"./DCLicSO1.js";import"./CAOBFEwo.js";import"./Cy7KR8w_.js";import"./CvSSFb4B.js";const Vt=bt("v-spacer","div","VSpacer"),kt=O({text:String,...oe(),...re()},"VToolbarTitle"),Tt=U()({name:"VToolbarTitle",props:kt(),setup(e,r){let{slots:a}=r;return q(()=>{const v=!!(a.default||a.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[v&&n("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),_t=[null,"prominent","default","comfortable","compact"],Oe=O({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>_t.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ne(),...oe(),...Pe(),...Re(),...re({tag:"header"}),...xe()},"VToolbar"),pe=U()({name:"VToolbar",props:Oe(),setup(e,r){var w;let{slots:a}=r;const{backgroundColorClasses:v,backgroundColorStyles:l}=ae(X(e,"color")),{borderClasses:t}=Me(e),{elevationClasses:o}=Ie(e),{roundedClasses:s}=Le(e),{themeClasses:g}=Se(e),{rtlClasses:u}=Ve(),i=M(!!(e.extended||(w=a.extension)!=null&&w.call(a))),d=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=f(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ke({VBtn:{variant:"text"}}),q(()=>{var P;const m=!!(e.title||a.title),S=!!(a.image||e.image),N=(P=a.extension)==null?void 0:P.call(a);return i.value=!!(e.extended||N),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},v.value,t.value,o.value,s.value,g.value,u.value,e.class],style:[l.value,e.style]},{default:()=>[S&&n("div",{key:"image",class:"v-toolbar__image"},[a.image?n(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n($e,{key:"image-img",cover:!0,src:e.image},null)]),n(G,{defaults:{VTabs:{height:W(d.value)}}},{default:()=>{var h,B,I;return[n("div",{class:"v-toolbar__content",style:{height:W(d.value)}},[a.prepend&&n("div",{class:"v-toolbar__prepend"},[(h=a.prepend)==null?void 0:h.call(a)]),m&&n(Tt,{key:"title",text:e.title},{text:a.title}),(B=a.default)==null?void 0:B.call(a),a.append&&n("div",{class:"v-toolbar__append"},[(I=a.append)==null?void 0:I.call(a)])])]}}),n(G,{defaults:{VTabs:{height:W(b.value)}}},{default:()=>[n(wt,null,{default:()=>[i.value&&n("div",{class:"v-toolbar__extension",style:{height:W(b.value)}},[N])]})]})]})}),{contentHeight:d,extensionHeight:b}}}),Bt=O({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Et(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=r;let v=0,l=0;const t=L(null),o=M(0),s=M(0),g=M(0),u=M(!1),i=M(!1),d=f(()=>Number(e.scrollThreshold)),b=f(()=>je((d.value-o.value)/d.value||0)),w=()=>{const m=t.value;if(!m||a&&!a.value)return;v=o.value,o.value="window"in m?m.pageYOffset:m.scrollTop;const S=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(l!==S){l=S;return}i.value=o.value<v,g.value=Math.abs(o.value-d.value)};return A(i,()=>{s.value=s.value||o.value}),A(u,()=>{s.value=0}),j(()=>{A(()=>e.scrollTarget,m=>{var N;const S=m?document.querySelector(m):window;S&&S!==t.value&&((N=t.value)==null||N.removeEventListener("scroll",w),t.value=S,t.value.addEventListener("scroll",w,{passive:!0}))},{immediate:!0})}),ne(()=>{var m;(m=t.value)==null||m.removeEventListener("scroll",w)}),a&&A(a,w,{immediate:!0}),{scrollThreshold:d,currentScroll:o,currentThreshold:g,isScrollActive:u,scrollRatio:b,isScrollingUp:i,savedScroll:s}}const Ct=O({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Oe(),...Ae(),...Bt(),height:{type:[Number,String],default:64}},"VAppBar"),Ht=U()({name:"VAppBar",props:Ct(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:a}=r;const v=L(),l=Te(e,"modelValue"),t=f(()=>{var B;const h=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:h.has("hide"),fullyHide:h.has("fully-hide"),inverted:h.has("inverted"),collapse:h.has("collapse"),elevate:h.has("elevate"),fadeImage:h.has("fade-image")}}),o=f(()=>{const h=t.value;return h.hide||h.fullyHide||h.inverted||h.collapse||h.elevate||h.fadeImage||!l.value}),{currentScroll:s,scrollThreshold:g,isScrollingUp:u,scrollRatio:i}=Et(e,{canScroll:o}),d=f(()=>t.value.hide||t.value.fullyHide),b=f(()=>e.collapse||t.value.collapse&&(t.value.inverted?i.value>0:i.value===0)),w=f(()=>e.flat||t.value.fullyHide&&!l.value||t.value.elevate&&(t.value.inverted?s.value>0:s.value===0)),m=f(()=>t.value.fadeImage?t.value.inverted?1-i.value:i.value:void 0),S=f(()=>{var I,D;if(t.value.hide&&t.value.inverted)return 0;const h=((I=v.value)==null?void 0:I.contentHeight)??0,B=((D=v.value)==null?void 0:D.extensionHeight)??0;return d.value?s.value<g.value||t.value.fullyHide?h+B:h:h+B});z(f(()=>!!e.scrollBehavior),()=>{_e(()=>{d.value?t.value.inverted?l.value=s.value>g.value:l.value=u.value||s.value<g.value:l.value=!0})});const{ssrBootStyles:N}=Ye(),{layoutItemStyles:P}=De({id:e.name,order:f(()=>parseInt(e.order,10)),position:X(e,"location"),layoutSize:S,elementSize:M(void 0),active:l,absolute:X(e,"absolute")});return q(()=>{const h=pe.filterProps(e);return n(pe,J({ref:v,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":m.value,height:void 0,...N.value},e.style]},h,{collapse:b.value,flat:w.value}),a)}),{}}}),Nt=O({...yt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Mt=U()({name:"VAppBarNavIcon",props:Nt(),setup(e,r){let{slots:a}=r;return q(()=>n(le,J(e,{class:["v-app-bar-nav-icon"]}),a)),{}}});function Pt(e){let{rootEl:r,isSticky:a,layoutItemStyles:v}=e;const l=M(!1),t=M(0),o=f(()=>{const u=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[u]:W(t.value)}:{top:v.value.top}]});j(()=>{A(a,u=>{u?window.addEventListener("scroll",g,{passive:!0}):window.removeEventListener("scroll",g)},{immediate:!0})}),ne(()=>{window.removeEventListener("scroll",g)});let s=0;function g(){const u=s>window.scrollY?"up":"down",i=r.value.getBoundingClientRect(),d=parseFloat(v.value.top??0),b=window.scrollY-Math.max(0,t.value-d),w=i.height+Math.max(t.value,d)-window.scrollY-window.innerHeight,m=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-d?(l.value="top",t.value=d):u==="up"&&l.value==="bottom"||u==="down"&&l.value==="top"?(t.value=window.scrollY+i.top-m,l.value=!0):u==="down"&&w<=0?(t.value=0,l.value="bottom"):u==="up"&&b<=0&&(m?l.value!=="top"&&(t.value=-b+m+d,l.value="top"):(t.value=i.top+b,l.value="top")),s=window.scrollY}return{isStuck:l,stickyStyles:o}}const It=100,At=20;function be(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function we(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const v=be(r),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);r+=(l-v)*Math.abs(l),a===e.length-1&&(r*=.5)}return be(r)*1e3}function Dt(){const e={};function r(l){Array.from(l.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new Ue(At))).push([l.timeStamp,t])})}function a(l){Array.from(l.changedTouches).forEach(t=>{delete e[t.identifier]})}function v(l){var u;const t=(u=e[l])==null?void 0:u.values().reverse();if(!t)throw new Error(`No samples for touch id ${l}`);const o=t[0],s=[],g=[];for(const i of t){if(o[0]-i[0]>It)break;s.push({t:i[0],d:i[1].clientX}),g.push({t:i[0],d:i[1].clientY})}return{x:we(s),y:we(g),get direction(){const{x:i,y:d}=this,[b,w]=[Math.abs(i),Math.abs(d)];return b>w&&i>=0?"right":b>w&&i<=0?"left":w>b&&d>=0?"down":w>b&&d<=0?"up":Rt()}}}return{addMovement:r,endTouch:a,getVelocity:v}}function Rt(){throw new Error}function Lt(e){let{el:r,isActive:a,isTemporary:v,width:l,touchless:t,position:o}=e;j(()=>{window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",I,{passive:!0})}),ne(()=>{window.removeEventListener("touchstart",h),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",I)});const s=f(()=>["left","right"].includes(o.value)),{addMovement:g,endTouch:u,getVelocity:i}=Dt();let d=!1;const b=M(!1),w=M(0),m=M(0);let S;function N(y,p){return(o.value==="left"?y:o.value==="right"?document.documentElement.clientWidth-y:o.value==="top"?y:o.value==="bottom"?document.documentElement.clientHeight-y:$())-(p?l.value:0)}function P(y){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const x=o.value==="left"?(y-m.value)/l.value:o.value==="right"?(document.documentElement.clientWidth-y-m.value)/l.value:o.value==="top"?(y-m.value)/l.value:o.value==="bottom"?(document.documentElement.clientHeight-y-m.value)/l.value:$();return p?Math.max(0,Math.min(1,x)):x}function h(y){if(t.value)return;const p=y.changedTouches[0].clientX,x=y.changedTouches[0].clientY,V=25,_=o.value==="left"?p<V:o.value==="right"?p>document.documentElement.clientWidth-V:o.value==="top"?x<V:o.value==="bottom"?x>document.documentElement.clientHeight-V:$(),T=a.value&&(o.value==="left"?p<l.value:o.value==="right"?p>document.documentElement.clientWidth-l.value:o.value==="top"?x<l.value:o.value==="bottom"?x>document.documentElement.clientHeight-l.value:$());(_||T||a.value&&v.value)&&(S=[p,x],m.value=N(s.value?p:x,a.value),w.value=P(s.value?p:x),d=m.value>-20&&m.value<80,u(y),g(y))}function B(y){const p=y.changedTouches[0].clientX,x=y.changedTouches[0].clientY;if(d){if(!y.cancelable){d=!1;return}const _=Math.abs(p-S[0]),T=Math.abs(x-S[1]);(s.value?_>T&&_>3:T>_&&T>3)?(b.value=!0,d=!1):(s.value?T:_)>3&&(d=!1)}if(!b.value)return;y.preventDefault(),g(y);const V=P(s.value?p:x,!1);w.value=Math.max(0,Math.min(1,V)),V>1?m.value=N(s.value?p:x,!0):V<0&&(m.value=N(s.value?p:x,!1))}function I(y){if(d=!1,!b.value)return;g(y),b.value=!1;const p=i(y.changedTouches[0].identifier),x=Math.abs(p.x),V=Math.abs(p.y);(s.value?x>V&&x>400:V>x&&V>3)?a.value=p.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||$()):a.value=w.value>.5}const D=f(()=>b.value?{transform:o.value==="left"?`translateX(calc(-100% + ${w.value*l.value}px))`:o.value==="right"?`translateX(calc(100% - ${w.value*l.value}px))`:o.value==="top"?`translateY(calc(-100% + ${w.value*l.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${w.value*l.value}px))`:$(),transition:"none"}:void 0);return z(b,()=>{var x,V;const y=((x=r.value)==null?void 0:x.style.transform)??null,p=((V=r.value)==null?void 0:V.style.transition)??null;_e(()=>{var _,T,Y,Z;(T=r.value)==null||T.style.setProperty("transform",((_=D.value)==null?void 0:_.transform)||"none"),(Z=r.value)==null||Z.style.setProperty("transition",((Y=D.value)==null?void 0:Y.transition)||null)}),Be(()=>{var _,T;(_=r.value)==null||_.style.setProperty("transform",y),(T=r.value)==null||T.style.setProperty("transition",p)})}),{isDragging:b,dragProgress:w,dragStyles:D}}function $(){throw new Error}const Yt=["start","end","left","right","top","bottom"],$t=O({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Yt.includes(e)},sticky:Boolean,...Ne(),...oe(),...vt(),...qe({mobile:null}),...Pe(),...Ae(),...Re(),...re({tag:"nav"}),...xe()},"VNavigationDrawer"),Ot=U()({name:"VNavigationDrawer",props:$t(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:a,emit:v,slots:l}=r;const{isRtl:t}=Ve(),{themeClasses:o}=Se(e),{borderClasses:s}=Me(e),{backgroundColorClasses:g,backgroundColorStyles:u}=ae(X(e,"color")),{elevationClasses:i}=Ie(e),{displayClasses:d,mobile:b}=Ee(e),{roundedClasses:w}=Le(e),m=gt(),S=Te(e,"modelValue",null,H=>!!H),{ssrBootStyles:N}=Ye(),{scopeId:P}=mt(),h=L(),B=M(!1),{runOpenDelay:I,runCloseDelay:D}=ft(e,H=>{B.value=H}),y=f(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=f(()=>ht(e.location,t.value)),x=f(()=>e.persistent),V=f(()=>!e.permanent&&(b.value||e.temporary)),_=f(()=>e.sticky&&!V.value&&p.value!=="bottom");z(()=>e.expandOnHover&&e.rail!=null,()=>{A(B,H=>v("update:rail",!H))}),z(()=>!e.disableResizeWatcher,()=>{A(V,H=>!e.permanent&&Je(()=>S.value=!H))}),z(()=>!e.disableRouteWatcher&&!!m,()=>{A(m.currentRoute,()=>V.value&&(S.value=!1))}),A(()=>e.permanent,H=>{H&&(S.value=!0)}),e.modelValue==null&&!V.value&&(S.value=e.permanent||!b.value);const{isDragging:T,dragProgress:Y}=Lt({el:h,isActive:S,isTemporary:V,width:y,touchless:X(e,"touchless"),position:p}),Z=f(()=>{const H=V.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):y.value;return T.value?H*Y.value:H}),We=f(()=>["top","bottom"].includes(e.location)?0:y.value),{layoutItemStyles:ie,layoutItemScrimStyles:ze}=De({id:e.name,order:f(()=>parseInt(e.order,10)),position:p,layoutSize:Z,elementSize:We,active:f(()=>S.value||T.value),disableTransitions:f(()=>T.value),absolute:f(()=>e.absolute||_.value&&typeof se.value!="string")}),{isStuck:se,stickyStyles:Fe}=Pt({rootEl:h,isSticky:_,layoutItemStyles:ie}),ue=ae(f(()=>typeof e.scrim=="string"?e.scrim:null)),Xe=f(()=>({...T.value?{opacity:Y.value*.2,transition:"none"}:void 0,...ze.value}));return ke({VList:{bgColor:"transparent"}}),q(()=>{const H=l.image||e.image;return n(Ge,null,[n(e.tag,J({ref:h,onMouseenter:I,onMouseleave:D,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":V.value,"v-navigation-drawer--persistent":x.value,"v-navigation-drawer--active":S.value,"v-navigation-drawer--sticky":_.value},o.value,g.value,s.value,d.value,i.value,w.value,e.class],style:[u.value,ie.value,N.value,Fe.value,e.style,["top","bottom"].includes(p.value)?{height:"auto"}:{}]},P,a),{default:()=>{var ce,de,ve;return[H&&n("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?n(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},l.image):n($e,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),l.prepend&&n("div",{class:"v-navigation-drawer__prepend"},[(ce=l.prepend)==null?void 0:ce.call(l)]),n("div",{class:"v-navigation-drawer__content"},[(de=l.default)==null?void 0:de.call(l)]),l.append&&n("div",{class:"v-navigation-drawer__append"},[(ve=l.append)==null?void 0:ve.call(l)])]}}),n(Ze,{name:"fade-transition"},{default:()=>[V.value&&(T.value||S.value)&&!!e.scrim&&n("div",J({class:["v-navigation-drawer__scrim",ue.backgroundColorClasses.value],style:[Xe.value,ue.backgroundColorStyles.value],onClick:()=>{x.value||(S.value=!1)}},P),null)]})])}),{isStuck:se}}}),te=new WeakMap;function Wt(e){if(te.has(e))return te.get(e);const r={...e};return r.render?r.render=(a,v,l,t,o,s)=>{var g;if(t.mounted$??a.mounted$){const u=(g=e.render)==null?void 0:g.bind(a)(a,v,l,t,o,s);return u.children===null||typeof u.children=="string"?me(u):F(u)}else{const u=K(a._.vnode.el??null)??["<div></div>"];return Q(u.join(""),u.length)}}:r.template&&(r.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),r.setup=(a,v)=>{var g;const l=Ce(),t=L(l.isHydrating===!1),o=Qe();if(l.isHydrating){const u={...o.attrs},i=zt(o);for(const d in u)delete o.attrs[d];j(()=>{Object.assign(o.attrs,u),o.vnode.dirs=i})}j(()=>{t.value=!0});const s=((g=e.setup)==null?void 0:g.call(e,a,v))||{};return Ke(s)?Promise.resolve(s).then(u=>typeof u!="function"?(u=u||{},u.mounted$=t,u):(...i)=>{if(t.value||!l.isHydrating){const d=u(...i);return d.children===null||typeof d.children=="string"?me(d):F(d)}else{const d=K((o==null?void 0:o.vnode.el)??null)??["<div></div>"];return Q(d.join(""),d.length)}}):typeof s=="function"?(...u)=>{if(t.value)return F(s(...u),v.attrs);const i=K((o==null?void 0:o.vnode.el)??null)??["<div></div>"];return Q(i.join(""),i.length)}:Object.assign(s,{mounted$:t})},te.set(e,r),r}function zt(e){if(!e||!e.vnode.dirs)return null;const r=e.vnode.dirs;return e.vnode.dirs=null,r}function Ft(e={}){var u;const r=L(""),a=L(e.politeness||"polite"),v=tt();function l(i="",d="polite"){r.value=i,a.value=d}function t(i){return l(i,"polite")}function o(i){return l(i,"assertive")}function s(){var i;l((i=document==null?void 0:document.title)==null?void 0:i.trim(),a.value)}function g(){var i;(i=v==null?void 0:v.hooks)==null||i.removeHook("dom:rendered",s)}return s(),(u=v==null?void 0:v.hooks)==null||u.hook("dom:rendered",()=>{s()}),{_cleanup:g,message:r,politeness:a,set:l,polite:t,assertive:o}}function Xt(e={}){const r=Ce(),a=r._routeAnnouncer=r._routeAnnouncer||Ft(e);return e.politeness!==a.politeness.value&&(a.politeness.value=e.politeness||"polite"),et()&&(r._routeAnnouncerDeps=r._routeAnnouncerDeps||0,r._routeAnnouncerDeps++,Be(()=>{r._routeAnnouncerDeps--,r._routeAnnouncerDeps===0&&(a._cleanup(),delete r._routeAnnouncer)})),a}const jt=He({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(e,{slots:r,expose:a}){const{set:v,polite:l,assertive:t,message:o,politeness:s}=Xt({politeness:e.politeness});return a({set:v,polite:l,assertive:t,message:o,politeness:s}),()=>F("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},F("span",{role:"alert","aria-live":s.value,"aria-atomic":e.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},r.default?r.default({message:o.value}):o.value))}}),Ut=Wt(jt),pa=He({__name:"default",setup(e){const r=Ee(),a=L(!1),v=f(()=>r.smAndDown.value);return(l,t)=>{const o=Ut;return fe(),ge(St,null,{default:c(()=>[n(o),n(Ot,{modelValue:R(a),"onUpdate:modelValue":t[0]||(t[0]=s=>at(a)?a.value=s:null),app:"",color:"primary",temporary:R(v),permanent:!R(v)},{append:c(()=>[n(ye,{class:"ma-0 px-4 pb-2"},{default:c(()=>t[18]||(t[18]=[he("span",{class:"text-caption"},[k("Maintained by "),he("a",{href:"https://koumoul.com",class:"text-white text-decoration-none font-weight-bold"},"Koumoul")],-1)])),_:1}),n(ye,{class:"ma-0 px-4 pb-4"},{default:c(()=>[n(le,{href:"https://github.com/sponsors/koumoul-dev",rounded:"pill",color:"surface",variant:"flat",style:{"text-transform":"none"},class:"font-weight-bold"},{prepend:c(()=>[n(pt,{color:"pink-accent-3",size:"large",icon:R(it)},null,8,["icon"])]),default:c(()=>[t[19]||(t[19]=k(" Sponsor "))]),_:1}),n(Vt),n(le,{icon:R(st),href:"https://github.com/data-fair/frame",color:"primary",variant:"flat",title:"repository on github",size:"lg"},null,8,["icon"])]),_:1})]),default:c(()=>[n(ee,{class:"py-0"},{default:c(()=>[n(E,{to:"/",class:"py-2"},{default:c(()=>[n(C,{class:"text-h6 font-weight-bold"},{default:c(()=>t[2]||(t[2]=[k(" d-frame ")])),_:1}),n(ut,{class:"font-weight-bold"},{default:c(()=>[k(lt(R(dt)),1)]),_:1})]),_:1})]),_:1}),n(ee,{class:"pt-0"},{default:c(()=>[n(E,{to:"/getting-started"},{default:c(()=>[n(C,null,{default:c(()=>t[3]||(t[3]=[k(" Getting started ")])),_:1})]),_:1})]),_:1}),n(ee,{nav:""},{default:c(()=>[n(ct,{class:"text-white"},{default:c(()=>t[4]||(t[4]=[k(" Examples ")])),_:1}),n(E,{to:"/static-height"},{default:c(()=>[n(C,null,{default:c(()=>t[5]||(t[5]=[k(" Static height ")])),_:1})]),_:1}),n(E,{to:"/dynamic-height"},{default:c(()=>[n(C,null,{default:c(()=>t[6]||(t[6]=[k(" Dynamic height ")])),_:1})]),_:1}),n(E,{to:"/loading-status"},{default:c(()=>[n(C,null,{default:c(()=>t[7]||(t[7]=[k(" Loading status ")])),_:1})]),_:1}),n(E,{to:"/dynamic-src"},{default:c(()=>[n(C,null,{default:c(()=>t[8]||(t[8]=[k(" Dynamic src ")])),_:1})]),_:1}),n(E,{to:"/nav-sync"},{default:c(()=>[n(C,null,{default:c(()=>t[9]||(t[9]=[k(" Navigation syncing ")])),_:1})]),_:1}),n(E,{to:"/nav-sync-prefix"},{default:c(()=>[n(C,null,{default:c(()=>t[10]||(t[10]=[k(" Navigation syncing with prefix ")])),_:1})]),_:1}),n(E,{to:"/nav-sync-path"},{default:c(()=>[n(C,null,{default:c(()=>t[11]||(t[11]=[k(" Navigation syncing with path ")])),_:1})]),_:1}),n(E,{to:"/dynamic-nav-sync"},{default:c(()=>[n(C,null,{default:c(()=>t[12]||(t[12]=[k(" Dynamic navigation syncing ")])),_:1})]),_:1}),n(E,{to:"/messages"},{default:c(()=>[n(C,null,{default:c(()=>t[13]||(t[13]=[k(" Messages ")])),_:1})]),_:1}),n(E,{to:"/mouse-events"},{default:c(()=>[n(C,null,{default:c(()=>t[14]||(t[14]=[k(" Mouse events ")])),_:1})]),_:1}),n(E,{to:"/extra-attrs"},{default:c(()=>[n(C,null,{default:c(()=>t[15]||(t[15]=[k(" Extra attributes ")])),_:1})]),_:1}),n(E,{to:"/force-reload"},{default:c(()=>[n(C,null,{default:c(()=>t[16]||(t[16]=[k(" Force reload ")])),_:1})]),_:1}),n(E,{to:"/v-iframe-compat"},{default:c(()=>[n(C,null,{default:c(()=>t[17]||(t[17]=[k(" V-Iframe compatibility ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","temporary","permanent"]),R(v)?(fe(),ge(Ht,{key:0,app:"",density:"compact",collapse:"","scroll-behavior":"elevate",style:{"max-width":"50px"}},{default:c(()=>[n(Mt,{onClick:t[1]||(t[1]=nt(s=>a.value=!R(a),["stop"]))})]),_:1})):ot("",!0),n(xt,null,{default:c(()=>[rt(l.$slots,"default")]),_:3})]),_:3})}}});export{pa as default};
