import{K as z,I as X,z as o,N as ie,T as $,O as re,aq as Ne,ak as H,i as m,J as Pe,ad as W,r as L,ae as je,$ as A,o as U,e as ue,a5 as Me,a9 as F,S as K,Z as se,ay as qe,aa as Ae,az as Ue,al as De,at as Ze,M as Ge,ac as Ke,aA as ke,h as q,aB as te,aC as ae,a as Re,aD as Je,a2 as Qe,aE as et,Y as tt,d as Le,t as Te,C as _e,A as v,E as R,a4 as at,x as Be,B,y as lt,aF as nt,F as ot,aG as it}from"./BsNROWhd.js";import{d as rt,V as le,a as I,b as N,c as ut,e as st,f as ct,g as dt}from"./BrcY4MT1.js";import{a as ce,u as de,V as vt}from"./DXldYhqJ.js";import{u as J}from"./BAP86g6l.js";import{m as Q,a as ee,u as j}from"./eEXzeW7f.js";import{m as mt,a as ft,u as gt}from"./V5LRlY4E.js";import{m as ve,u as me}from"./KfSMv5pn.js";import{m as fe,a as ge}from"./DNYzVrEd.js";import{m as he,c as ye,V as G,e as ht}from"./CK73mIkX.js";import{u as $e}from"./DH6W8NAj.js";import{a as ze}from"./Btarh3Xa.js";import{t as yt}from"./CHy-10x8.js";import{u as bt}from"./C4BEVKwb.js";/* empty css        */import{c as pt}from"./CTE-U64K.js";import{a as wt,V as oe}from"./DbUjwYwc.js";import{V as St,a as Vt}from"./DYluR94U.js";import"./BUeBZW9O.js";const Ce=pt("v-spacer","div","VSpacer"),xt=z({text:String,...Q(),...ee()},"VToolbarTitle"),kt=X()({name:"VToolbarTitle",props:xt(),setup(e,i){let{slots:a}=i;return j(()=>{const d=!!(a.default||a.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[d&&o("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),Tt=[null,"prominent","default","comfortable","compact"],Oe=z({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Tt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ce(),...Q(),...ve(),...he(),...ee({tag:"header"}),...ie()},"VToolbar"),He=X()({name:"VToolbar",props:Oe(),setup(e,i){var g;let{slots:a}=i;const{backgroundColorClasses:d,backgroundColorStyles:l}=J($(e,"color")),{borderClasses:t}=de(e),{elevationClasses:n}=me(e),{roundedClasses:u}=ye(e),{themeClasses:h}=re(e),{rtlClasses:s}=Ne(),r=H(!!(e.extended||(g=a.extension)!=null&&g.call(a))),c=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=m(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Pe({VBtn:{variant:"text"}}),j(()=>{var P;const f=!!(e.title||a.title),V=!!(a.image||e.image),E=(P=a.extension)==null?void 0:P.call(a);return r.value=!!(e.extended||E),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},d.value,t.value,n.value,u.value,h.value,s.value,e.class],style:[l.value,e.style]},{default:()=>[V&&o("div",{key:"image",class:"v-toolbar__image"},[a.image?o(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o(ze,{key:"image-img",cover:!0,src:e.image},null)]),o(G,{defaults:{VTabs:{height:W(c.value)}}},{default:()=>{var b,_,M;return[o("div",{class:"v-toolbar__content",style:{height:W(c.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(b=a.prepend)==null?void 0:b.call(a)]),f&&o(kt,{key:"title",text:e.title},{text:a.title}),(_=a.default)==null?void 0:_.call(a),a.append&&o("div",{class:"v-toolbar__append"},[(M=a.append)==null?void 0:M.call(a)])])]}}),o(G,{defaults:{VTabs:{height:W(y.value)}}},{default:()=>[o(rt,null,{default:()=>[r.value&&o("div",{class:"v-toolbar__extension",style:{height:W(y.value)}},[E])]})]})]})}),{contentHeight:c,extensionHeight:y}}}),_t=z({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Bt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=i;let d=0,l=0;const t=L(null),n=H(0),u=H(0),h=H(0),s=H(!1),r=H(!1),c=m(()=>Number(e.scrollThreshold)),y=m(()=>je((c.value-n.value)/c.value||0)),g=()=>{const f=t.value;if(!f||a&&!a.value)return;d=n.value,n.value="window"in f?f.pageYOffset:f.scrollTop;const V=f instanceof Window?document.documentElement.scrollHeight:f.scrollHeight;if(l!==V){l=V;return}r.value=n.value<d,h.value=Math.abs(n.value-c.value)};return A(r,()=>{u.value=u.value||n.value}),A(s,()=>{u.value=0}),U(()=>{A(()=>e.scrollTarget,f=>{var E;const V=f?document.querySelector(f):window;V&&V!==t.value&&((E=t.value)==null||E.removeEventListener("scroll",g),t.value=V,t.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),ue(()=>{var f;(f=t.value)==null||f.removeEventListener("scroll",g)}),a&&A(a,g,{immediate:!0}),{scrollThreshold:c,currentScroll:n,currentThreshold:h,isScrollActive:s,scrollRatio:y,isScrollingUp:r,savedScroll:u}}const Ct=z({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Oe(),...fe(),..._t(),height:{type:[Number,String],default:64}},"VAppBar"),Ht=X()({name:"VAppBar",props:Ct(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const d=L(),l=Me(e,"modelValue"),t=m(()=>{var _;const b=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:b.has("hide"),fullyHide:b.has("fully-hide"),inverted:b.has("inverted"),collapse:b.has("collapse"),elevate:b.has("elevate"),fadeImage:b.has("fade-image")}}),n=m(()=>{const b=t.value;return b.hide||b.fullyHide||b.inverted||b.collapse||b.elevate||b.fadeImage||!l.value}),{currentScroll:u,scrollThreshold:h,isScrollingUp:s,scrollRatio:r}=Bt(e,{canScroll:n}),c=m(()=>t.value.hide||t.value.fullyHide),y=m(()=>e.collapse||t.value.collapse&&(t.value.inverted?r.value>0:r.value===0)),g=m(()=>e.flat||t.value.fullyHide&&!l.value||t.value.elevate&&(t.value.inverted?u.value>0:u.value===0)),f=m(()=>t.value.fadeImage?t.value.inverted?1-r.value:r.value:void 0),V=m(()=>{var M,D;if(t.value.hide&&t.value.inverted)return 0;const b=((M=d.value)==null?void 0:M.contentHeight)??0,_=((D=d.value)==null?void 0:D.extensionHeight)??0;return c.value?u.value<h.value||t.value.fullyHide?b+_:b:b+_});F(m(()=>!!e.scrollBehavior),()=>{se(()=>{c.value?t.value.inverted?l.value=u.value>h.value:l.value=s.value||u.value<h.value:l.value=!0})});const{ssrBootStyles:E}=$e(),{layoutItemStyles:P}=ge({id:e.name,order:m(()=>parseInt(e.order,10)),position:$(e,"location"),layoutSize:V,elementSize:H(void 0),active:l,absolute:$(e,"absolute")});return j(()=>{const b=He.filterProps(e);return o(He,K({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":f.value,height:void 0,...E.value},e.style]},b,{collapse:y.value,flat:g.value}),a)}),{}}}),Et=z({...wt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),It=X()({name:"VAppBarNavIcon",props:Et(),setup(e,i){let{slots:a}=i;return j(()=>o(oe,K(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),Nt=z({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ce(),...Q(),...ve(),...fe(),...he(),...ee({tag:"footer"}),...ie()},"VFooter"),Pt=X()({name:"VFooter",props:Nt(),setup(e,i){let{slots:a}=i;const d=L(),{themeClasses:l}=re(e),{backgroundColorClasses:t,backgroundColorStyles:n}=J($(e,"color")),{borderClasses:u}=de(e),{elevationClasses:h}=me(e),{roundedClasses:s}=ye(e),r=H(32),{resizeRef:c}=bt(g=>{g.length&&(r.value=g[0].target.clientHeight)}),y=m(()=>e.height==="auto"?r.value:parseInt(e.height,10));return F(()=>e.app,()=>{const g=ge({id:e.name,order:m(()=>parseInt(e.order,10)),position:m(()=>"bottom"),layoutSize:y,elementSize:m(()=>e.height==="auto"?void 0:y.value),active:m(()=>e.app),absolute:$(e,"absolute")});se(()=>{d.value=g.layoutItemStyles.value})}),j(()=>o(e.tag,{ref:c,class:["v-footer",l.value,t.value,u.value,h.value,s.value,e.class],style:[n.value,e.app?d.value:{height:W(e.height)},e.style]},a)),{}}});function Mt(e){let{rootEl:i,isSticky:a,layoutItemStyles:d}=e;const l=H(!1),t=H(0),n=m(()=>{const s=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[s]:W(t.value)}:{top:d.value.top}]});U(()=>{A(a,s=>{s?window.addEventListener("scroll",h,{passive:!0}):window.removeEventListener("scroll",h)},{immediate:!0})}),ue(()=>{window.removeEventListener("scroll",h)});let u=0;function h(){const s=u>window.scrollY?"up":"down",r=i.value.getBoundingClientRect(),c=parseFloat(d.value.top??0),y=window.scrollY-Math.max(0,t.value-c),g=r.height+Math.max(t.value,c)-window.scrollY-window.innerHeight,f=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;r.height<window.innerHeight-c?(l.value="top",t.value=c):s==="up"&&l.value==="bottom"||s==="down"&&l.value==="top"?(t.value=window.scrollY+r.top-f,l.value=!0):s==="down"&&g<=0?(t.value=0,l.value="bottom"):s==="up"&&y<=0&&(f?l.value!=="top"&&(t.value=-y+f+c,l.value="top"):(t.value=r.top+y,l.value="top")),u=window.scrollY}return{isStuck:l,stickyStyles:n}}const At=100,Dt=20;function Ee(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ie(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const d=Ee(i),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);i+=(l-d)*Math.abs(l),a===e.length-1&&(i*=.5)}return Ee(i)*1e3}function Rt(){const e={};function i(l){Array.from(l.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new qe(Dt))).push([l.timeStamp,t])})}function a(l){Array.from(l.changedTouches).forEach(t=>{delete e[t.identifier]})}function d(l){var s;const t=(s=e[l])==null?void 0:s.values().reverse();if(!t)throw new Error(`No samples for touch id ${l}`);const n=t[0],u=[],h=[];for(const r of t){if(n[0]-r[0]>At)break;u.push({t:r[0],d:r[1].clientX}),h.push({t:r[0],d:r[1].clientY})}return{x:Ie(u),y:Ie(h),get direction(){const{x:r,y:c}=this,[y,g]=[Math.abs(r),Math.abs(c)];return y>g&&r>=0?"right":y>g&&r<=0?"left":g>y&&c>=0?"down":g>y&&c<=0?"up":Lt()}}}return{addMovement:i,endTouch:a,getVelocity:d}}function Lt(){throw new Error}function $t(e){let{el:i,isActive:a,isTemporary:d,width:l,touchless:t,position:n}=e;U(()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),ue(()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",M)});const u=m(()=>["left","right"].includes(n.value)),{addMovement:h,endTouch:s,getVelocity:r}=Rt();let c=!1;const y=H(!1),g=H(0),f=H(0);let V;function E(p,w){return(n.value==="left"?p:n.value==="right"?document.documentElement.clientWidth-p:n.value==="top"?p:n.value==="bottom"?document.documentElement.clientHeight-p:Y())-(w?l.value:0)}function P(p){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const S=n.value==="left"?(p-f.value)/l.value:n.value==="right"?(document.documentElement.clientWidth-p-f.value)/l.value:n.value==="top"?(p-f.value)/l.value:n.value==="bottom"?(document.documentElement.clientHeight-p-f.value)/l.value:Y();return w?Math.max(0,Math.min(1,S)):S}function b(p){if(t.value)return;const w=p.changedTouches[0].clientX,S=p.changedTouches[0].clientY,x=25,T=n.value==="left"?w<x:n.value==="right"?w>document.documentElement.clientWidth-x:n.value==="top"?S<x:n.value==="bottom"?S>document.documentElement.clientHeight-x:Y(),k=a.value&&(n.value==="left"?w<l.value:n.value==="right"?w>document.documentElement.clientWidth-l.value:n.value==="top"?S<l.value:n.value==="bottom"?S>document.documentElement.clientHeight-l.value:Y());(T||k||a.value&&d.value)&&(V=[w,S],f.value=E(u.value?w:S,a.value),g.value=P(u.value?w:S),c=f.value>-20&&f.value<80,s(p),h(p))}function _(p){const w=p.changedTouches[0].clientX,S=p.changedTouches[0].clientY;if(c){if(!p.cancelable){c=!1;return}const T=Math.abs(w-V[0]),k=Math.abs(S-V[1]);(u.value?T>k&&T>3:k>T&&k>3)?(y.value=!0,c=!1):(u.value?k:T)>3&&(c=!1)}if(!y.value)return;p.preventDefault(),h(p);const x=P(u.value?w:S,!1);g.value=Math.max(0,Math.min(1,x)),x>1?f.value=E(u.value?w:S,!0):x<0&&(f.value=E(u.value?w:S,!1))}function M(p){if(c=!1,!y.value)return;h(p),y.value=!1;const w=r(p.changedTouches[0].identifier),S=Math.abs(w.x),x=Math.abs(w.y);(u.value?S>x&&S>400:x>S&&x>3)?a.value=w.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||Y()):a.value=g.value>.5}const D=m(()=>y.value?{transform:n.value==="left"?`translateX(calc(-100% + ${g.value*l.value}px))`:n.value==="right"?`translateX(calc(100% - ${g.value*l.value}px))`:n.value==="top"?`translateY(calc(-100% + ${g.value*l.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${g.value*l.value}px))`:Y(),transition:"none"}:void 0);return F(y,()=>{var S,x;const p=((S=i.value)==null?void 0:S.style.transform)??null,w=((x=i.value)==null?void 0:x.style.transition)??null;se(()=>{var T,k,O,Z;(k=i.value)==null||k.style.setProperty("transform",((T=D.value)==null?void 0:T.transform)||"none"),(Z=i.value)==null||Z.style.setProperty("transition",((O=D.value)==null?void 0:O.transition)||null)}),Ae(()=>{var T,k;(T=i.value)==null||T.style.setProperty("transform",p),(k=i.value)==null||k.style.setProperty("transition",w)})}),{isDragging:y,dragProgress:g,dragStyles:D}}function Y(){throw new Error}const zt=["start","end","left","right","top","bottom"],Ot=z({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>zt.includes(e)},sticky:Boolean,...ce(),...Q(),...mt(),...Ue({mobile:null}),...ve(),...fe(),...he(),...ee({tag:"nav"}),...ie()},"VNavigationDrawer"),Yt=X()({name:"VNavigationDrawer",props:Ot(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:a,emit:d,slots:l}=i;const{isRtl:t}=Ne(),{themeClasses:n}=re(e),{borderClasses:u}=de(e),{backgroundColorClasses:h,backgroundColorStyles:s}=J($(e,"color")),{elevationClasses:r}=me(e),{displayClasses:c,mobile:y}=De(e),{roundedClasses:g}=ye(e),f=ht(),V=Me(e,"modelValue",null,C=>!!C),{ssrBootStyles:E}=$e(),{scopeId:P}=ft(),b=L(),_=H(!1),{runOpenDelay:M,runCloseDelay:D}=gt(e,C=>{_.value=C}),p=m(()=>e.rail&&e.expandOnHover&&_.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),w=m(()=>yt(e.location,t.value)),S=m(()=>e.persistent),x=m(()=>!e.permanent&&(y.value||e.temporary)),T=m(()=>e.sticky&&!x.value&&w.value!=="bottom");F(()=>e.expandOnHover&&e.rail!=null,()=>{A(_,C=>d("update:rail",!C))}),F(()=>!e.disableResizeWatcher,()=>{A(x,C=>!e.permanent&&Ke(()=>V.value=!C))}),F(()=>!e.disableRouteWatcher&&!!f,()=>{A(f.currentRoute,()=>x.value&&(V.value=!1))}),A(()=>e.permanent,C=>{C&&(V.value=!0)}),e.modelValue==null&&!x.value&&(V.value=e.permanent||!y.value);const{isDragging:k,dragProgress:O}=$t({el:b,isActive:V,isTemporary:x,width:p,touchless:$(e,"touchless"),position:w}),Z=m(()=>{const C=x.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):p.value;return k.value?C*O.value:C}),Ye=m(()=>["top","bottom"].includes(e.location)?0:p.value),{layoutItemStyles:be,layoutItemScrimStyles:We}=ge({id:e.name,order:m(()=>parseInt(e.order,10)),position:w,layoutSize:Z,elementSize:Ye,active:m(()=>V.value||k.value),disableTransitions:m(()=>k.value),absolute:m(()=>e.absolute||T.value&&typeof pe.value!="string")}),{isStuck:pe,stickyStyles:Fe}=Mt({rootEl:b,isSticky:T,layoutItemStyles:be}),we=J(m(()=>typeof e.scrim=="string"?e.scrim:null)),Xe=m(()=>({...k.value?{opacity:O.value*.2,transition:"none"}:void 0,...We.value}));return Pe({VList:{bgColor:"transparent"}}),j(()=>{const C=l.image||e.image;return o(Ge,null,[o(e.tag,K({ref:b,onMouseenter:M,onMouseleave:D,class:["v-navigation-drawer",`v-navigation-drawer--${w.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":_.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":x.value,"v-navigation-drawer--persistent":S.value,"v-navigation-drawer--active":V.value,"v-navigation-drawer--sticky":T.value},n.value,h.value,u.value,c.value,r.value,g.value,e.class],style:[s.value,be.value,E.value,Fe.value,e.style,["top","bottom"].includes(w.value)?{height:"auto"}:{}]},P,a),{default:()=>{var Se,Ve,xe;return[C&&o("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?o(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},l.image):o(ze,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),l.prepend&&o("div",{class:"v-navigation-drawer__prepend"},[(Se=l.prepend)==null?void 0:Se.call(l)]),o("div",{class:"v-navigation-drawer__content"},[(Ve=l.default)==null?void 0:Ve.call(l)]),l.append&&o("div",{class:"v-navigation-drawer__append"},[(xe=l.append)==null?void 0:xe.call(l)])]}}),o(Ze,{name:"fade-transition"},{default:()=>[x.value&&(k.value||V.value)&&!!e.scrim&&o("div",K({class:["v-navigation-drawer__scrim",we.backgroundColorClasses.value],style:[Xe.value,we.backgroundColorStyles.value],onClick:()=>{S.value||(V.value=!1)}},P),null)]})])}),{isStuck:pe}}}),ne=new WeakMap;function Wt(e){if(ne.has(e))return ne.get(e);const i={...e};return i.render?i.render=(a,d,l,t,n,u)=>{var h;if(t.mounted$??a.mounted$){const s=(h=e.render)==null?void 0:h.bind(a)(a,d,l,t,n,u);return s.children===null||typeof s.children=="string"?ke(s):q(s)}else{const s=te(a._.vnode.el??null)??["<div></div>"];return ae(s.join(""),s.length)}}:i.template&&(i.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),i.setup=(a,d)=>{var h;const l=Re(),t=L(l.isHydrating===!1),n=Qe();if(l.isHydrating){const s={...n.attrs},r=Ft(n);for(const c in s)delete n.attrs[c];U(()=>{Object.assign(n.attrs,s),n.vnode.dirs=r})}U(()=>{t.value=!0});const u=((h=e.setup)==null?void 0:h.call(e,a,d))||{};return Je(u)?Promise.resolve(u).then(s=>typeof s!="function"?(s=s||{},s.mounted$=t,s):(...r)=>{if(t.value||!l.isHydrating){const c=s(...r);return c.children===null||typeof c.children=="string"?ke(c):q(c)}else{const c=te((n==null?void 0:n.vnode.el)??null)??["<div></div>"];return ae(c.join(""),c.length)}}):typeof u=="function"?(...s)=>{if(t.value)return q(u(...s),d.attrs);const r=te((n==null?void 0:n.vnode.el)??null)??["<div></div>"];return ae(r.join(""),r.length)}:Object.assign(u,{mounted$:t})},ne.set(e,i),i}function Ft(e){if(!e||!e.vnode.dirs)return null;const i=e.vnode.dirs;return e.vnode.dirs=null,i}function Xt(e={}){var s;const i=L(""),a=L(e.politeness||"polite"),d=tt();function l(r="",c="polite"){i.value=r,a.value=c}function t(r){return l(r,"polite")}function n(r){return l(r,"assertive")}function u(){var r;l((r=document==null?void 0:document.title)==null?void 0:r.trim(),a.value)}function h(){var r;(r=d==null?void 0:d.hooks)==null||r.removeHook("dom:rendered",u)}return u(),(s=d==null?void 0:d.hooks)==null||s.hook("dom:rendered",()=>{u()}),{_cleanup:h,message:i,politeness:a,set:l,polite:t,assertive:n}}function jt(e={}){const i=Re(),a=i._routeAnnouncer=i._routeAnnouncer||Xt(e);return e.politeness!==a.politeness.value&&(a.politeness.value=e.politeness||"polite"),et()&&(i._routeAnnouncerDeps=i._routeAnnouncerDeps||0,i._routeAnnouncerDeps++,Ae(()=>{i._routeAnnouncerDeps--,i._routeAnnouncerDeps===0&&(a._cleanup(),delete i._routeAnnouncer)})),a}const qt=Le({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(e,{slots:i,expose:a}){const{set:d,polite:l,assertive:t,message:n,politeness:u}=jt({politeness:e.politeness});return a({set:d,polite:l,assertive:t,message:n,politeness:u}),()=>q("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},q("span",{role:"alert","aria-live":u.value,"aria-atomic":e.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},i.default?i.default({message:n.value}):n.value))}}),Ut="0.2.1",Zt=Wt(qt),fa=Le({__name:"default",setup(e){const i=De(),a=L(!1),d=m(()=>i.smAndDown.value);return(l,t)=>{const n=Zt;return Te(),_e(Vt,null,{default:v(()=>[o(n),o(Yt,{modelValue:R(a),"onUpdate:modelValue":t[0]||(t[0]=u=>at(a)?a.value=u:null),app:"",color:"primary",temporary:R(d),permanent:!R(d)},{append:v(()=>[o(Pt,{color:"transparent"},{default:v(()=>[o(Ce),t[14]||(t[14]=Be("span",{class:"text-caption"},[B("Maintained by "),Be("a",{href:"https://koumoul.com",class:"text-white text-decoration-none font-weight-bold"},"Koumoul")],-1))]),_:1})]),default:v(()=>[o(le,{class:"py-0"},{default:v(()=>[o(I,{to:"/",class:"py-2"},{default:v(()=>[o(N,{class:"text-h6 font-weight-bold"},{default:v(()=>t[2]||(t[2]=[B(" d-frame ")])),_:1}),o(ut,{class:"font-weight-bold"},{default:v(()=>[B(lt(R(Ut)),1)]),_:1})]),_:1})]),_:1}),o(le,{class:"pt-0"},{default:v(()=>[o(I,{to:"/getting-started"},{default:v(()=>[o(N,null,{default:v(()=>t[3]||(t[3]=[B(" Getting started ")])),_:1})]),_:1})]),_:1}),o(le,{nav:""},{default:v(()=>[o(st,{class:"text-white"},{default:v(()=>t[4]||(t[4]=[B(" Examples ")])),_:1}),o(I,{to:"/static-height"},{default:v(()=>[o(N,null,{default:v(()=>t[5]||(t[5]=[B(" Static height ")])),_:1})]),_:1}),o(I,{to:"/dynamic-height"},{default:v(()=>[o(N,null,{default:v(()=>t[6]||(t[6]=[B(" Dynamic height ")])),_:1})]),_:1}),o(I,{to:"/clipping"},{default:v(()=>[o(N,null,{default:v(()=>t[7]||(t[7]=[B(" Clipping effect ")])),_:1})]),_:1}),o(I,{to:"/dynamic-src"},{default:v(()=>[o(N,null,{default:v(()=>t[8]||(t[8]=[B(" Dynamic src ")])),_:1})]),_:1}),o(I,{to:"/nav-sync"},{default:v(()=>[o(N,null,{default:v(()=>t[9]||(t[9]=[B(" Navigation syncing ")])),_:1})]),_:1}),o(I,{to:"/nav-sync-path"},{default:v(()=>[o(N,null,{default:v(()=>t[10]||(t[10]=[B(" Navigation syncing with path ")])),_:1})]),_:1}),o(I,{to:"/dynamic-nav-sync"},{default:v(()=>[o(N,null,{default:v(()=>t[11]||(t[11]=[B(" Dynamic navigation syncing ")])),_:1})]),_:1}),o(I,{to:"/messages"},{default:v(()=>[o(N,null,{default:v(()=>t[12]||(t[12]=[B(" Messages ")])),_:1})]),_:1}),o(I,{to:"/v-iframe-compat"},{default:v(()=>[o(N,null,{default:v(()=>t[13]||(t[13]=[B(" V-Iframe compatibility ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","temporary","permanent"]),o(Ht,{app:"","scroll-behavior":"elevate"},{default:v(()=>[R(d)?(Te(),_e(It,{key:0,onClick:t[1]||(t[1]=nt(u=>a.value=!R(a),["stop"]))})):ot("",!0),o(Ce),o(oe,{href:"https://github.com/sponsors/koumoul-dev",variant:"outlined",rounded:"pill",color:"primary",style:{"text-transform":"none"},class:"mx-2 font-weight-bold elevation-4"},{prepend:v(()=>[o(vt,{color:"pink-accent-3",size:"large",icon:R(ct)},null,8,["icon"])]),default:v(()=>[t[15]||(t[15]=B(" Sponsor "))]),_:1}),o(oe,{icon:R(dt),href:"https://github.com/data-fair/frame",color:"black",size:"x-large",density:"compact",title:"repository on github"},null,8,["icon"])]),_:1}),o(St,null,{default:v(()=>[it(l.$slots,"default")]),_:3})]),_:3})}}});export{fa as default};
