import{at as N,r as G,a0 as Q,au as W,e as j,V as q,I as b,$ as V,i,L as D,G as H,Q as J,M as K,a2 as w,av as Z,z as r,a1 as u,aa as ee,aw as I}from"./CMzE-ULa.js";import{e as te,o as ae,p as _,k as ne}from"./BPuxRUkm.js";import{m as oe,a as le,u as se}from"./1lwhcIaV.js";const re=["top","bottom"],ie=["start","end","left","right"];function ue(e,t){let[a,n]=e.split(" ");return n||(n=N(re,a)?"start":N(ie,a)?"top":"center"),{side:L(a,t),align:L(n,t)}}function L(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function ce(e,t){const a=G(),n=Q(!1);if(W){const c=new IntersectionObserver(o=>{n.value=!!o.find(l=>l.isIntersecting)},t);j(()=>{c.disconnect()}),q(a,(o,l)=>{l&&(c.unobserve(l),n.value=!1),o&&c.observe(o)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const O={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},de=b({location:String},"location");function fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=V();return{locationStyles:i(()=>{if(!e.location)return{};const{side:o,align:l}=ue(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function v(h){return a?a(h):0}const s={};return o!=="center"&&(t?s[O[o]]=`calc(100% - ${v(o)}px)`:s[o]=0),l!=="center"?t?s[O[l]]=`calc(100% - ${v(l)}px)`:s[l]=0:(o==="center"?s.top=s.left="50%":s[{top:"left",bottom:"left",left:"top",right:"top"}[o]]="50%",s.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[o]),s})}}const ve=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...oe(),...de({location:"top"}),...te(),...le(),...D()},"VProgressLinear"),ge=H()({name:"VProgressLinear",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,t){var R;let{slots:a}=t;const n=J(e,"modelValue"),{isRtl:c,rtlClasses:o}=V(),{themeClasses:l}=K(e),{locationStyles:v}=fe(e),{textColorClasses:s,textColorStyles:h}=ae(e,"color"),{backgroundColorClasses:T,backgroundColorStyles:$}=_(i(()=>e.bgColor||e.color)),{backgroundColorClasses:F,backgroundColorStyles:p}=_(i(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:B,backgroundColorStyles:x}=_(e,"color"),{roundedClasses:M}=ne(e),{intersectionRef:C,isIntersecting:X}=ce(),y=i(()=>parseFloat(e.max)),d=i(()=>parseFloat(e.height)),S=i(()=>w(parseFloat(e.bufferValue)/y.value*100,0,100)),k=i(()=>w(parseFloat(n.value)/y.value*100,0,100)),g=i(()=>c.value!==e.reverse),z=i(()=>e.indeterminate?"fade-transition":"slide-x-transition"),m=Z&&((R=window.matchMedia)==null?void 0:R.call(window,"(forced-colors: active)").matches);function A(f){if(!C.value)return;const{left:E,right:U,width:P}=C.value.getBoundingClientRect(),Y=g.value?P-f.clientX+(U-P):f.clientX-E;n.value=Math.round(Y/P*y.value)}return se(()=>r(e.tag,{ref:C,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&X.value,"v-progress-linear--reverse":g.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},M.value,l.value,o.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?u(d.value):0,"--v-progress-linear-height":u(d.value),...e.absolute?v.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:k.value,onClick:e.clickable&&A},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",s.value],style:{...h.value,[g.value?"left":"right"]:u(-d.value),borderTop:`${u(d.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${u(d.value/4)})`,width:u(100-S.value,"%"),"--v-progress-linear-stream-to":u(d.value*(g.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",m?void 0:T.value],style:[$.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),r("div",{class:["v-progress-linear__buffer",m?void 0:F.value],style:[p.value,{opacity:parseFloat(e.bufferOpacity),width:u(S.value,"%")}]},null),r(ee,{name:z.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>r("div",{key:f,class:["v-progress-linear__indeterminate",f,m?void 0:B.value],style:x.value},null))]):r("div",{class:["v-progress-linear__determinate",m?void 0:B.value],style:[x.value,{width:u(k.value,"%")}]},null)]}),a.default&&r("div",{class:"v-progress-linear__content"},[a.default({value:k.value,buffer:S.value})])]})),{}}}),ye=b({loading:[Boolean,String]},"loader");function Se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:I();return{loaderClasses:i(()=>({[`${t}--loading`]:e.loading}))}}function ke(e,t){var n;let{slots:a}=t;return r("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||r(ge,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const me=["static","relative","fixed","absolute","sticky"],Pe=b({position:{type:String,validator:e=>me.includes(e)}},"position");function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:I();return{positionClasses:i(()=>e.position?`${t}--${e.position}`:void 0)}}export{ke as L,de as a,Pe as b,fe as c,_e as d,ce as e,ye as m,L as t,Se as u};
