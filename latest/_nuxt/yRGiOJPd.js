import{V as O,X as U,z as n,W as xe,Y as F,Z as Se,ai as Ve,ag as M,i as f,a3 as ke,a7 as W,r as L,ak as je,Q as A,o as j,e as ne,aj as Te,aM as z,a0 as J,O as _e,b2 as Ue,as as Be,b3 as qe,aP as Ee,am as Ze,M as Ge,I as Je,b4 as me,h as X,b5 as K,b6 as Q,a as Ce,b7 as Ke,T as Qe,b8 as et,N as tt,d as He,t as fe,C as ge,A as d,E as R,J as at,x as he,B as T,y as lt,b9 as nt,F as ot,ba as it}from"./BkqA0KHe.js";import{d as rt,e as st,V as ee,a as C,b as H,c as ut,f as ct}from"./DpN1Vdpe.js";import{m as Ne,u as Me}from"./CAwpYOst.js";import{u as ae}from"./Cn6uAEsa.js";import{b as oe,c as ie,a as q}from"./By_5GghC.js";import{m as dt,a as vt,u as mt}from"./9GEogmuw.js";import{m as Pe,u as Ie}from"./Z0XZrlzd.js";import{m as Ae,a as De}from"./BGpYttuy.js";import{m as Re,u as Le}from"./CdXS7Q3c.js";import{V as G,c as ft}from"./DeJaGkO-.js";import{u as Ye}from"./Bxv0e74K.js";import{a as $e}from"./Chv0Gfc0.js";import{t as gt}from"./DyYKodVx.js";import{V as ye}from"./B1mG0FKU.js";import{m as ht,V as le}from"./CYuge_-b.js";import{V as yt}from"./DG2e6_pm.js";/* empty css        */import{c as pt}from"./BPzPtIGx.js";import{V as bt}from"./BETN1zfv.js";import{V as wt,a as xt}from"./DyVkgj-W.js";import"./4bWIBXzB.js";import"./BcvFvQ7a.js";import"./Dz3_T40C.js";const St=pt("v-spacer","div","VSpacer"),Vt=O({text:String,...oe(),...ie()},"VToolbarTitle"),kt=U()({name:"VToolbarTitle",props:Vt(),setup(e,i){let{slots:a}=i;return q(()=>{const v=!!(a.default||a.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[v&&n("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),Tt=[null,"prominent","default","comfortable","compact"],Oe=O({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Tt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ne(),...oe(),...Pe(),...Re(),...ie({tag:"header"}),...xe()},"VToolbar"),pe=U()({name:"VToolbar",props:Oe(),setup(e,i){var w;let{slots:a}=i;const{backgroundColorClasses:v,backgroundColorStyles:l}=ae(F(e,"color")),{borderClasses:t}=Me(e),{elevationClasses:o}=Ie(e),{roundedClasses:s}=Le(e),{themeClasses:g}=Se(e),{rtlClasses:u}=Ve(),r=M(!!(e.extended||(w=a.extension)!=null&&w.call(a))),c=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=f(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ke({VBtn:{variant:"text"}}),q(()=>{var P;const m=!!(e.title||a.title),S=!!(a.image||e.image),N=(P=a.extension)==null?void 0:P.call(a);return r.value=!!(e.extended||N),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},v.value,t.value,o.value,s.value,g.value,u.value,e.class],style:[l.value,e.style]},{default:()=>[S&&n("div",{key:"image",class:"v-toolbar__image"},[a.image?n(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n($e,{key:"image-img",cover:!0,src:e.image},null)]),n(G,{defaults:{VTabs:{height:W(c.value)}}},{default:()=>{var h,B,I;return[n("div",{class:"v-toolbar__content",style:{height:W(c.value)}},[a.prepend&&n("div",{class:"v-toolbar__prepend"},[(h=a.prepend)==null?void 0:h.call(a)]),m&&n(kt,{key:"title",text:e.title},{text:a.title}),(B=a.default)==null?void 0:B.call(a),a.append&&n("div",{class:"v-toolbar__append"},[(I=a.append)==null?void 0:I.call(a)])])]}}),n(G,{defaults:{VTabs:{height:W(b.value)}}},{default:()=>[n(bt,null,{default:()=>[r.value&&n("div",{class:"v-toolbar__extension",style:{height:W(b.value)}},[N])]})]})]})}),{contentHeight:c,extensionHeight:b}}}),_t=O({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Bt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=i;let v=0,l=0;const t=L(null),o=M(0),s=M(0),g=M(0),u=M(!1),r=M(!1),c=f(()=>Number(e.scrollThreshold)),b=f(()=>je((c.value-o.value)/c.value||0)),w=()=>{const m=t.value;if(!m||a&&!a.value)return;v=o.value,o.value="window"in m?m.pageYOffset:m.scrollTop;const S=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(l!==S){l=S;return}r.value=o.value<v,g.value=Math.abs(o.value-c.value)};return A(r,()=>{s.value=s.value||o.value}),A(u,()=>{s.value=0}),j(()=>{A(()=>e.scrollTarget,m=>{var N;const S=m?document.querySelector(m):window;S&&S!==t.value&&((N=t.value)==null||N.removeEventListener("scroll",w),t.value=S,t.value.addEventListener("scroll",w,{passive:!0}))},{immediate:!0})}),ne(()=>{var m;(m=t.value)==null||m.removeEventListener("scroll",w)}),a&&A(a,w,{immediate:!0}),{scrollThreshold:c,currentScroll:o,currentThreshold:g,isScrollActive:u,scrollRatio:b,isScrollingUp:r,savedScroll:s}}const Et=O({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Oe(),...Ae(),..._t(),height:{type:[Number,String],default:64}},"VAppBar"),Ct=U()({name:"VAppBar",props:Et(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const v=L(),l=Te(e,"modelValue"),t=f(()=>{var B;const h=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:h.has("hide"),fullyHide:h.has("fully-hide"),inverted:h.has("inverted"),collapse:h.has("collapse"),elevate:h.has("elevate"),fadeImage:h.has("fade-image")}}),o=f(()=>{const h=t.value;return h.hide||h.fullyHide||h.inverted||h.collapse||h.elevate||h.fadeImage||!l.value}),{currentScroll:s,scrollThreshold:g,isScrollingUp:u,scrollRatio:r}=Bt(e,{canScroll:o}),c=f(()=>t.value.hide||t.value.fullyHide),b=f(()=>e.collapse||t.value.collapse&&(t.value.inverted?r.value>0:r.value===0)),w=f(()=>e.flat||t.value.fullyHide&&!l.value||t.value.elevate&&(t.value.inverted?s.value>0:s.value===0)),m=f(()=>t.value.fadeImage?t.value.inverted?1-r.value:r.value:void 0),S=f(()=>{var I,D;if(t.value.hide&&t.value.inverted)return 0;const h=((I=v.value)==null?void 0:I.contentHeight)??0,B=((D=v.value)==null?void 0:D.extensionHeight)??0;return c.value?s.value<g.value||t.value.fullyHide?h+B:h:h+B});z(f(()=>!!e.scrollBehavior),()=>{_e(()=>{c.value?t.value.inverted?l.value=s.value>g.value:l.value=u.value||s.value<g.value:l.value=!0})});const{ssrBootStyles:N}=Ye(),{layoutItemStyles:P}=De({id:e.name,order:f(()=>parseInt(e.order,10)),position:F(e,"location"),layoutSize:S,elementSize:M(void 0),active:l,absolute:F(e,"absolute")});return q(()=>{const h=pe.filterProps(e);return n(pe,J({ref:v,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":m.value,height:void 0,...N.value},e.style]},h,{collapse:b.value,flat:w.value}),a)}),{}}}),Ht=O({...ht({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Nt=U()({name:"VAppBarNavIcon",props:Ht(),setup(e,i){let{slots:a}=i;return q(()=>n(le,J(e,{class:["v-app-bar-nav-icon"]}),a)),{}}});function Mt(e){let{rootEl:i,isSticky:a,layoutItemStyles:v}=e;const l=M(!1),t=M(0),o=f(()=>{const u=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[u]:W(t.value)}:{top:v.value.top}]});j(()=>{A(a,u=>{u?window.addEventListener("scroll",g,{passive:!0}):window.removeEventListener("scroll",g)},{immediate:!0})}),ne(()=>{window.removeEventListener("scroll",g)});let s=0;function g(){const u=s>window.scrollY?"up":"down",r=i.value.getBoundingClientRect(),c=parseFloat(v.value.top??0),b=window.scrollY-Math.max(0,t.value-c),w=r.height+Math.max(t.value,c)-window.scrollY-window.innerHeight,m=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;r.height<window.innerHeight-c?(l.value="top",t.value=c):u==="up"&&l.value==="bottom"||u==="down"&&l.value==="top"?(t.value=window.scrollY+r.top-m,l.value=!0):u==="down"&&w<=0?(t.value=0,l.value="bottom"):u==="up"&&b<=0&&(m?l.value!=="top"&&(t.value=-b+m+c,l.value="top"):(t.value=r.top+b,l.value="top")),s=window.scrollY}return{isStuck:l,stickyStyles:o}}const Pt=100,It=20;function be(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function we(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const v=be(i),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);i+=(l-v)*Math.abs(l),a===e.length-1&&(i*=.5)}return be(i)*1e3}function At(){const e={};function i(l){Array.from(l.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new Ue(It))).push([l.timeStamp,t])})}function a(l){Array.from(l.changedTouches).forEach(t=>{delete e[t.identifier]})}function v(l){var u;const t=(u=e[l])==null?void 0:u.values().reverse();if(!t)throw new Error(`No samples for touch id ${l}`);const o=t[0],s=[],g=[];for(const r of t){if(o[0]-r[0]>Pt)break;s.push({t:r[0],d:r[1].clientX}),g.push({t:r[0],d:r[1].clientY})}return{x:we(s),y:we(g),get direction(){const{x:r,y:c}=this,[b,w]=[Math.abs(r),Math.abs(c)];return b>w&&r>=0?"right":b>w&&r<=0?"left":w>b&&c>=0?"down":w>b&&c<=0?"up":Dt()}}}return{addMovement:i,endTouch:a,getVelocity:v}}function Dt(){throw new Error}function Rt(e){let{el:i,isActive:a,isTemporary:v,width:l,touchless:t,position:o}=e;j(()=>{window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",I,{passive:!0})}),ne(()=>{window.removeEventListener("touchstart",h),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",I)});const s=f(()=>["left","right"].includes(o.value)),{addMovement:g,endTouch:u,getVelocity:r}=At();let c=!1;const b=M(!1),w=M(0),m=M(0);let S;function N(y,p){return(o.value==="left"?y:o.value==="right"?document.documentElement.clientWidth-y:o.value==="top"?y:o.value==="bottom"?document.documentElement.clientHeight-y:$())-(p?l.value:0)}function P(y){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const x=o.value==="left"?(y-m.value)/l.value:o.value==="right"?(document.documentElement.clientWidth-y-m.value)/l.value:o.value==="top"?(y-m.value)/l.value:o.value==="bottom"?(document.documentElement.clientHeight-y-m.value)/l.value:$();return p?Math.max(0,Math.min(1,x)):x}function h(y){if(t.value)return;const p=y.changedTouches[0].clientX,x=y.changedTouches[0].clientY,V=25,_=o.value==="left"?p<V:o.value==="right"?p>document.documentElement.clientWidth-V:o.value==="top"?x<V:o.value==="bottom"?x>document.documentElement.clientHeight-V:$(),k=a.value&&(o.value==="left"?p<l.value:o.value==="right"?p>document.documentElement.clientWidth-l.value:o.value==="top"?x<l.value:o.value==="bottom"?x>document.documentElement.clientHeight-l.value:$());(_||k||a.value&&v.value)&&(S=[p,x],m.value=N(s.value?p:x,a.value),w.value=P(s.value?p:x),c=m.value>-20&&m.value<80,u(y),g(y))}function B(y){const p=y.changedTouches[0].clientX,x=y.changedTouches[0].clientY;if(c){if(!y.cancelable){c=!1;return}const _=Math.abs(p-S[0]),k=Math.abs(x-S[1]);(s.value?_>k&&_>3:k>_&&k>3)?(b.value=!0,c=!1):(s.value?k:_)>3&&(c=!1)}if(!b.value)return;y.preventDefault(),g(y);const V=P(s.value?p:x,!1);w.value=Math.max(0,Math.min(1,V)),V>1?m.value=N(s.value?p:x,!0):V<0&&(m.value=N(s.value?p:x,!1))}function I(y){if(c=!1,!b.value)return;g(y),b.value=!1;const p=r(y.changedTouches[0].identifier),x=Math.abs(p.x),V=Math.abs(p.y);(s.value?x>V&&x>400:V>x&&V>3)?a.value=p.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||$()):a.value=w.value>.5}const D=f(()=>b.value?{transform:o.value==="left"?`translateX(calc(-100% + ${w.value*l.value}px))`:o.value==="right"?`translateX(calc(100% - ${w.value*l.value}px))`:o.value==="top"?`translateY(calc(-100% + ${w.value*l.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${w.value*l.value}px))`:$(),transition:"none"}:void 0);return z(b,()=>{var x,V;const y=((x=i.value)==null?void 0:x.style.transform)??null,p=((V=i.value)==null?void 0:V.style.transition)??null;_e(()=>{var _,k,Y,Z;(k=i.value)==null||k.style.setProperty("transform",((_=D.value)==null?void 0:_.transform)||"none"),(Z=i.value)==null||Z.style.setProperty("transition",((Y=D.value)==null?void 0:Y.transition)||null)}),Be(()=>{var _,k;(_=i.value)==null||_.style.setProperty("transform",y),(k=i.value)==null||k.style.setProperty("transition",p)})}),{isDragging:b,dragProgress:w,dragStyles:D}}function $(){throw new Error}const Lt=["start","end","left","right","top","bottom"],Yt=O({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Lt.includes(e)},sticky:Boolean,...Ne(),...oe(),...dt(),...qe({mobile:null}),...Pe(),...Ae(),...Re(),...ie({tag:"nav"}),...xe()},"VNavigationDrawer"),$t=U()({name:"VNavigationDrawer",props:Yt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:a,emit:v,slots:l}=i;const{isRtl:t}=Ve(),{themeClasses:o}=Se(e),{borderClasses:s}=Me(e),{backgroundColorClasses:g,backgroundColorStyles:u}=ae(F(e,"color")),{elevationClasses:r}=Ie(e),{displayClasses:c,mobile:b}=Ee(e),{roundedClasses:w}=Le(e),m=ft(),S=Te(e,"modelValue",null,E=>!!E),{ssrBootStyles:N}=Ye(),{scopeId:P}=vt(),h=L(),B=M(!1),{runOpenDelay:I,runCloseDelay:D}=mt(e,E=>{B.value=E}),y=f(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=f(()=>gt(e.location,t.value)),x=f(()=>e.persistent),V=f(()=>!e.permanent&&(b.value||e.temporary)),_=f(()=>e.sticky&&!V.value&&p.value!=="bottom");z(()=>e.expandOnHover&&e.rail!=null,()=>{A(B,E=>v("update:rail",!E))}),z(()=>!e.disableResizeWatcher,()=>{A(V,E=>!e.permanent&&Je(()=>S.value=!E))}),z(()=>!e.disableRouteWatcher&&!!m,()=>{A(m.currentRoute,()=>V.value&&(S.value=!1))}),A(()=>e.permanent,E=>{E&&(S.value=!0)}),e.modelValue==null&&!V.value&&(S.value=e.permanent||!b.value);const{isDragging:k,dragProgress:Y}=Rt({el:h,isActive:S,isTemporary:V,width:y,touchless:F(e,"touchless"),position:p}),Z=f(()=>{const E=V.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):y.value;return k.value?E*Y.value:E}),We=f(()=>["top","bottom"].includes(e.location)?0:y.value),{layoutItemStyles:re,layoutItemScrimStyles:ze}=De({id:e.name,order:f(()=>parseInt(e.order,10)),position:p,layoutSize:Z,elementSize:We,active:f(()=>S.value||k.value),disableTransitions:f(()=>k.value),absolute:f(()=>e.absolute||_.value&&typeof se.value!="string")}),{isStuck:se,stickyStyles:Xe}=Mt({rootEl:h,isSticky:_,layoutItemStyles:re}),ue=ae(f(()=>typeof e.scrim=="string"?e.scrim:null)),Fe=f(()=>({...k.value?{opacity:Y.value*.2,transition:"none"}:void 0,...ze.value}));return ke({VList:{bgColor:"transparent"}}),q(()=>{const E=l.image||e.image;return n(Ge,null,[n(e.tag,J({ref:h,onMouseenter:I,onMouseleave:D,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":V.value,"v-navigation-drawer--persistent":x.value,"v-navigation-drawer--active":S.value,"v-navigation-drawer--sticky":_.value},o.value,g.value,s.value,c.value,r.value,w.value,e.class],style:[u.value,re.value,N.value,Xe.value,e.style,["top","bottom"].includes(p.value)?{height:"auto"}:{}]},P,a),{default:()=>{var ce,de,ve;return[E&&n("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?n(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},l.image):n($e,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),l.prepend&&n("div",{class:"v-navigation-drawer__prepend"},[(ce=l.prepend)==null?void 0:ce.call(l)]),n("div",{class:"v-navigation-drawer__content"},[(de=l.default)==null?void 0:de.call(l)]),l.append&&n("div",{class:"v-navigation-drawer__append"},[(ve=l.append)==null?void 0:ve.call(l)])]}}),n(Ze,{name:"fade-transition"},{default:()=>[V.value&&(k.value||S.value)&&!!e.scrim&&n("div",J({class:["v-navigation-drawer__scrim",ue.backgroundColorClasses.value],style:[Fe.value,ue.backgroundColorStyles.value],onClick:()=>{x.value||(S.value=!1)}},P),null)]})])}),{isStuck:se}}}),te=new WeakMap;function Ot(e){if(te.has(e))return te.get(e);const i={...e};return i.render?i.render=(a,v,l,t,o,s)=>{var g;if(t.mounted$??a.mounted$){const u=(g=e.render)==null?void 0:g.bind(a)(a,v,l,t,o,s);return u.children===null||typeof u.children=="string"?me(u):X(u)}else{const u=K(a._.vnode.el??null)??["<div></div>"];return Q(u.join(""),u.length)}}:i.template&&(i.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),i.setup=(a,v)=>{var g;const l=Ce(),t=L(l.isHydrating===!1),o=Qe();if(l.isHydrating){const u={...o.attrs},r=Wt(o);for(const c in u)delete o.attrs[c];j(()=>{Object.assign(o.attrs,u),o.vnode.dirs=r})}j(()=>{t.value=!0});const s=((g=e.setup)==null?void 0:g.call(e,a,v))||{};return Ke(s)?Promise.resolve(s).then(u=>typeof u!="function"?(u=u||{},u.mounted$=t,u):(...r)=>{if(t.value||!l.isHydrating){const c=u(...r);return c.children===null||typeof c.children=="string"?me(c):X(c)}else{const c=K((o==null?void 0:o.vnode.el)??null)??["<div></div>"];return Q(c.join(""),c.length)}}):typeof s=="function"?(...u)=>{if(t.value)return X(s(...u),v.attrs);const r=K((o==null?void 0:o.vnode.el)??null)??["<div></div>"];return Q(r.join(""),r.length)}:Object.assign(s,{mounted$:t})},te.set(e,i),i}function Wt(e){if(!e||!e.vnode.dirs)return null;const i=e.vnode.dirs;return e.vnode.dirs=null,i}function zt(e={}){var u;const i=L(""),a=L(e.politeness||"polite"),v=tt();function l(r="",c="polite"){i.value=r,a.value=c}function t(r){return l(r,"polite")}function o(r){return l(r,"assertive")}function s(){var r;l((r=document==null?void 0:document.title)==null?void 0:r.trim(),a.value)}function g(){var r;(r=v==null?void 0:v.hooks)==null||r.removeHook("dom:rendered",s)}return s(),(u=v==null?void 0:v.hooks)==null||u.hook("dom:rendered",()=>{s()}),{_cleanup:g,message:i,politeness:a,set:l,polite:t,assertive:o}}function Xt(e={}){const i=Ce(),a=i._routeAnnouncer=i._routeAnnouncer||zt(e);return e.politeness!==a.politeness.value&&(a.politeness.value=e.politeness||"polite"),et()&&(i._routeAnnouncerDeps=i._routeAnnouncerDeps||0,i._routeAnnouncerDeps++,Be(()=>{i._routeAnnouncerDeps--,i._routeAnnouncerDeps===0&&(a._cleanup(),delete i._routeAnnouncer)})),a}const Ft=He({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(e,{slots:i,expose:a}){const{set:v,polite:l,assertive:t,message:o,politeness:s}=Xt({politeness:e.politeness});return a({set:v,polite:l,assertive:t,message:o,politeness:s}),()=>X("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},X("span",{role:"alert","aria-live":s.value,"aria-atomic":e.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},i.default?i.default({message:o.value}):o.value))}}),jt="0.9.1",Ut=Ot(Ft),ya=He({__name:"default",setup(e){const i=Ee(),a=L(!1),v=f(()=>i.smAndDown.value);return(l,t)=>{const o=Ut;return fe(),ge(xt,null,{default:d(()=>[n(o),n($t,{modelValue:R(a),"onUpdate:modelValue":t[0]||(t[0]=s=>at(a)?a.value=s:null),app:"",color:"primary",temporary:R(v),permanent:!R(v)},{append:d(()=>[n(ye,{class:"ma-0 px-4 pb-2"},{default:d(()=>t[17]||(t[17]=[he("span",{class:"text-caption"},[T("Maintained by "),he("a",{href:"https://koumoul.com",class:"text-white text-decoration-none font-weight-bold"},"Koumoul")],-1)])),_:1}),n(ye,{class:"ma-0 px-4 pb-4"},{default:d(()=>[n(le,{href:"https://github.com/sponsors/koumoul-dev",rounded:"pill",color:"surface",variant:"flat",style:{"text-transform":"none"},class:"font-weight-bold"},{prepend:d(()=>[n(yt,{color:"pink-accent-3",size:"large",icon:R(rt)},null,8,["icon"])]),default:d(()=>[t[18]||(t[18]=T(" Sponsor "))]),_:1}),n(St),n(le,{icon:R(st),href:"https://github.com/data-fair/frame",color:"primary",variant:"flat",title:"repository on github",size:"lg"},null,8,["icon"])]),_:1})]),default:d(()=>[n(ee,{class:"py-0"},{default:d(()=>[n(C,{to:"/",class:"py-2"},{default:d(()=>[n(H,{class:"text-h6 font-weight-bold"},{default:d(()=>t[2]||(t[2]=[T(" d-frame ")])),_:1}),n(ut,{class:"font-weight-bold"},{default:d(()=>[T(lt(R(jt)),1)]),_:1})]),_:1})]),_:1}),n(ee,{class:"pt-0"},{default:d(()=>[n(C,{to:"/getting-started"},{default:d(()=>[n(H,null,{default:d(()=>t[3]||(t[3]=[T(" Getting started ")])),_:1})]),_:1})]),_:1}),n(ee,{nav:""},{default:d(()=>[n(ct,{class:"text-white"},{default:d(()=>t[4]||(t[4]=[T(" Examples ")])),_:1}),n(C,{to:"/static-height"},{default:d(()=>[n(H,null,{default:d(()=>t[5]||(t[5]=[T(" Static height ")])),_:1})]),_:1}),n(C,{to:"/dynamic-height"},{default:d(()=>[n(H,null,{default:d(()=>t[6]||(t[6]=[T(" Dynamic height ")])),_:1})]),_:1}),n(C,{to:"/loading-status"},{default:d(()=>[n(H,null,{default:d(()=>t[7]||(t[7]=[T(" Loading status ")])),_:1})]),_:1}),n(C,{to:"/dynamic-src"},{default:d(()=>[n(H,null,{default:d(()=>t[8]||(t[8]=[T(" Dynamic src ")])),_:1})]),_:1}),n(C,{to:"/nav-sync"},{default:d(()=>[n(H,null,{default:d(()=>t[9]||(t[9]=[T(" Navigation syncing ")])),_:1})]),_:1}),n(C,{to:"/nav-sync-prefix"},{default:d(()=>[n(H,null,{default:d(()=>t[10]||(t[10]=[T(" Navigation syncing with prefix ")])),_:1})]),_:1}),n(C,{to:"/nav-sync-path"},{default:d(()=>[n(H,null,{default:d(()=>t[11]||(t[11]=[T(" Navigation syncing with path ")])),_:1})]),_:1}),n(C,{to:"/dynamic-nav-sync"},{default:d(()=>[n(H,null,{default:d(()=>t[12]||(t[12]=[T(" Dynamic navigation syncing ")])),_:1})]),_:1}),n(C,{to:"/messages"},{default:d(()=>[n(H,null,{default:d(()=>t[13]||(t[13]=[T(" Messages ")])),_:1})]),_:1}),n(C,{to:"/mouse-events"},{default:d(()=>[n(H,null,{default:d(()=>t[14]||(t[14]=[T(" Mouse events ")])),_:1})]),_:1}),n(C,{to:"/extra-attrs"},{default:d(()=>[n(H,null,{default:d(()=>t[15]||(t[15]=[T(" Extra attributes ")])),_:1})]),_:1}),n(C,{to:"/v-iframe-compat"},{default:d(()=>[n(H,null,{default:d(()=>t[16]||(t[16]=[T(" V-Iframe compatibility ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","temporary","permanent"]),R(v)?(fe(),ge(Ct,{key:0,app:"",density:"compact",collapse:"","scroll-behavior":"elevate",style:{"max-width":"50px"}},{default:d(()=>[n(Nt,{onClick:t[1]||(t[1]=nt(s=>a.value=!R(a),["stop"]))})]),_:1})):ot("",!0),n(wt,null,{default:d(()=>[it(l.$slots,"default")]),_:3})]),_:3})}}});export{ya as default};
