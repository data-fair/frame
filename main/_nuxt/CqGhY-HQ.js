import{K as h,ay as w,i as l,al as E,z as b,M as X,E as P,I as B,aL as F,J as K,aM as W,ao as J,a5 as y,L as Q,N as U,r as G,O as Z,aN as ee,T as L,aO as te,aP as ne,a9 as D,aQ as se,aR as x,as as R,au as ae,aS as ie,aT as z}from"./4xlQk5LO.js";import{c as re,b as oe}from"./Dai_QDob.js";import{m as ue,a as le,u as ce}from"./Dp6XRxkT.js";const Se=h({border:[Boolean,Number,String]},"border");function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{borderClasses:l(()=>{const s=E(e)?e.value:e.border,i=[];if(s===!0||s==="")i.push(`${t}--border`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))i.push(`border-${a}`);return i})}}const de=[null,"default","comfortable","compact"],Pe=h({density:{type:String,default:"default",validator:e=>de.includes(e)}},"density");function xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{densityClasses:l(()=>`${t}--density-${e.density}`)}}const Re=h({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{roundedClasses:l(()=>{const s=E(e)?e.value:e.rounded,i=E(e)?e.value:e.tile,a=[];if(s===!0||s==="")a.push(`${t}--rounded`);else if(typeof s=="string"||s===0)for(const o of String(s).split(" "))a.push(`rounded-${o}`);else(i||s===!1)&&a.push("rounded-0");return a})}}const me=["elevated","flat","tonal","outlined","text","plain"];function Ne(e,t){return b(X,null,[e&&b("span",{key:"overlay",class:`${t}__overlay`},null),b("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ve=h({color:String,variant:{type:String,default:"elevated",validator:e=>me.includes(e)}},"variant");function Be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();const n=l(()=>{const{variant:a}=P(e);return`${t}--variant-${a}`}),{colorClasses:s,colorStyles:i}=re(l(()=>{const{variant:a,color:o}=P(e);return{[["elevated","flat"].includes(a)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const pe=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),De=B(!1)({name:"VDefaultsProvider",props:pe(),setup(e,t){let{slots:n}=t;const{defaults:s,disabled:i,reset:a,root:o,scoped:r}=F(e);return K(s,{reset:a,root:o,scoped:r,disabled:i}),()=>{var m;return(m=n.default)==null?void 0:m.call(n)}}}),fe=["x-small","small","default","large","x-large"],ve=h({size:{type:[String,Number],default:"default"}},"size");function he(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return W(()=>{let n,s;return J(fe,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:y(e.size),height:y(e.size)}),{sizeClasses:n,sizeStyles:s}})}const ge=h({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Q,...ue(),...ve(),...le({tag:"i"}),...U()},"VIcon"),Ie=B()({name:"VIcon",props:ge(),setup(e,t){let{attrs:n,slots:s}=t;const i=G(),{themeClasses:a}=Z(e),{iconData:o}=ee(l(()=>i.value||e.icon)),{sizeClasses:r}=he(e),{textColorClasses:m,textColorStyles:v}=oe(L(e,"color"));return ce(()=>{var p,u;const f=(p=s.default)==null?void 0:p.call(s);f&&(i.value=(u=te(f).filter(g=>g.type===ne&&g.children&&typeof g.children=="string")[0])==null?void 0:u.children);const c=!!(n.onClick||n.onClickOnce);return b(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,r.value,m.value,{"v-icon--clickable":c,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:y(e.size),height:y(e.size),width:y(e.size)},v.value,e.style],role:c?"button":void 0,"aria-hidden":!c,tabindex:c?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}});function ye(){const e=D("useRoute");return l(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function He(){var e,t;return(t=(e=D("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Oe(e,t){var c,p;const n=se("RouterLink"),s=l(()=>!!(e.href||e.to)),i=l(()=>(s==null?void 0:s.value)||x(t,"click")||x(e,"click"));if(typeof n=="string"||!("useLink"in n)){const u=L(e,"href");return{isLink:s,isClickable:i,href:u,linkProps:R({href:u})}}const a=l(()=>({...e,to:L(()=>e.to||"")})),o=n.useLink(a.value),r=l(()=>e.to?o:void 0),m=ye(),v=l(()=>{var u,g,$;return r.value?e.exact?m.value?(($=r.value.isExactActive)==null?void 0:$.value)&&ae(r.value.route.value.query,m.value.query):((g=r.value.isExactActive)==null?void 0:g.value)??!1:((u=r.value.isActive)==null?void 0:u.value)??!1:!1}),f=l(()=>{var u;return e.to?(u=r.value)==null?void 0:u.route.value.href:e.href});return{isLink:s,isClickable:i,isActive:v,route:(c=r.value)==null?void 0:c.route,navigate:(p=r.value)==null?void 0:p.navigate,href:f,linkProps:R({href:f,"aria-current":l(()=>v.value?"page":void 0)})}}const qe=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),T=Symbol("rippleStop"),_e=80;function N(e,t){e.style.transform=t,e.style.webkitTransform=t}function S(e){return e.constructor.name==="TouchEvent"}function I(e){return e.constructor.name==="KeyboardEvent"}const Ce=function(e,t){var c;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!I(e)){const p=t.getBoundingClientRect(),u=S(e)?e.touches[e.touches.length-1]:e;s=u.clientX-p.left,i=u.clientY-p.top}let a=0,o=.3;(c=t._ripple)!=null&&c.circle?(o=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((s-a)**2+(i-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-a*2)/2}px`,m=`${(t.clientHeight-a*2)/2}px`,v=n.center?r:`${s-a}px`,f=n.center?m:`${i-a}px`;return{radius:a,scale:o,x:v,y:f,centerX:r,centerY:m}},k={show(e,t){var u;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:a,scale:o,x:r,y:m,centerX:v,centerY:f}=Ce(e,t,n),c=`${a*2}px`;i.className="v-ripple__animation",i.style.width=c,i.style.height=c,t.appendChild(s);const p=window.getComputedStyle(t);p&&p.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),N(i,`translate(${r}, ${m}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),N(i,`translate(${v}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function H(e){return typeof e>"u"||!!e}function _(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[T])){if(e[T]=!0,S(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||I(e),n._ripple.class&&(t.class=n._ripple.class),S(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{k.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},_e)}else k.show(e,n,t)}}function V(e){e[T]=!0}function d(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{d(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),k.hide(t)}}function O(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let C=!1;function q(e){!C&&(e.keyCode===z.enter||e.keyCode===z.space)&&(C=!0,_(e))}function A(e){C=!1,d(e)}function M(e){C&&(C=!1,d(e))}function Y(e,t,n){const{value:s,modifiers:i}=t,a=H(s);if(a||k.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,ie(s)&&s.class&&(e._ripple.class=s.class),a&&!n){if(i.stop){e.addEventListener("touchstart",V,{passive:!0}),e.addEventListener("mousedown",V);return}e.addEventListener("touchstart",_,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",O,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",_),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",q),e.addEventListener("keyup",A),e.addEventListener("blur",M),e.addEventListener("dragstart",d,{passive:!0})}else!a&&n&&j(e)}function j(e){e.removeEventListener("mousedown",_),e.removeEventListener("touchstart",_),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",O),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",q),e.removeEventListener("keyup",A),e.removeEventListener("dragstart",d),e.removeEventListener("blur",M)}function we(e,t){Y(e,t,!1)}function be(e){delete e._ripple,j(e)}function ke(e,t){if(t.value===t.oldValue)return;const n=H(t.oldValue);Y(e,t,n)}const Ae={mounted:we,unmounted:be,updated:ke};export{Ae as R,Ie as V,De as a,Se as b,Re as c,qe as d,Ve as e,Be as f,xe as g,ze as h,Oe as i,Ne as j,He as k,ve as l,Pe as m,he as n,$e as u};
